// ============================================================
//  MU Library — auth.js
//  Student identity via Supabase. Gracefully degrades to
//  guest-only mode when Supabase isn't configured.
// ============================================================
(function () {
  "use strict";

  const CFG = window.MU_CONFIG || {};
  const SUPABASE_URL = CFG.supabaseUrl || "";
  const SUPABASE_ANON_KEY = CFG.supabaseAnonKey || "";
  const CONFIGURED =
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes("PASTE_") &&
    !SUPABASE_ANON_KEY.includes("PASTE_");

  let client = null;
  let currentUser = null;
  let profile = null;
  const listeners = new Set();
  let readyResolve;
  const ready = new Promise((r) => (readyResolve = r));
  let booted = false;

  function notify() {
    listeners.forEach((fn) => {
      try {
        fn(currentUser);
      } catch (e) {
        console.error("[Auth] listener error:", e);
      }
    });
    renderAuthSlot();
  }

  function escapeHtml(str) {
    return String(str || "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        }[c])
    );
  }

  function initials(name, email) {
    const src = name || (email ? email.split("@")[0] : "");
    if (!src) return "?";
    return src
      .split(/[\s._-]+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function toast(msg, type = "info", icon = null) {
    if (window.MULibrary && typeof window.MULibrary.showToast === "function") {
      window.MULibrary.showToast(msg, type, icon);
      return;
    }
    console.log(`[Auth ${type}]`, msg);
  }

  async function boot() {
    if (!CONFIGURED) {
      console.info(
        "[Auth] Supabase not configured — running in guest-only mode.\n" +
          "Paste supabaseUrl + supabaseAnonKey in index.html to enable login."
      );
      readyResolve();
      booted = true;
      renderAuthSlot();
      return;
    }

    try {
      const mod = await import(
        "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"
      );
      const { createClient } = mod;
      client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storageKey: "mu-library-auth",
        },
      });

      const { data } = await client.auth.getSession();
      if (data?.session?.user) {
        currentUser = data.session.user;
        await loadProfile();
      }

      client.auth.onAuthStateChange(async (_event, session) => {
        currentUser = session?.user || null;
        if (currentUser) await loadProfile();
        else profile = null;
        notify();
        syncFavoritesFromCloud();
        syncDownloadsFromCloud();
      });
    } catch (err) {
      console.warn("[Auth] Failed to boot Supabase:", err);
    } finally {
      booted = true;
      readyResolve();
      renderAuthSlot();
    }
  }

  async function loadProfile() {
    if (!client || !currentUser) return;
    try {
      const { data, error } = await client
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .maybeSingle();
      if (!error && data) profile = data;
      else profile = { id: currentUser.id, email: currentUser.email, name: "" };
    } catch {
      profile = { id: currentUser.id, email: currentUser.email, name: "" };
    }
  }

  async function signIn(email, password) {
    if (!client) return { error: "Auth not configured" };
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return { error: error.message };
    return { user: data.user };
  }

  async function signUp(email, password, name) {
    if (!client) return { error: "Auth not configured" };
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: { data: { name: name || "" } },
    });
    if (error) return { error: error.message };
    return { user: data.user, needsConfirmation: !data.session };
  }

  async function signInWithGoogle() {
    if (!client) return { error: "Auth not configured" };
    const redirectTo = window.location.origin + window.location.pathname;
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    if (error) return { error: error.message };
    return {};
  }

  async function signOut() {
    if (!client) return;
    await client.auth.signOut();
    currentUser = null;
    profile = null;
    notify();
  }

  async function getFavorites() {
    if (!client || !currentUser) return null;
    const { data, error } = await client
      .from("favorites")
      .select("subject_code")
      .eq("user_id", currentUser.id);
    if (error) {
      console.warn("[Auth] getFavorites failed:", error.message);
      return null;
    }
    return (data || []).map((r) => r.subject_code);
  }

  async function addFavorite(code) {
    if (!client || !currentUser || !code) return;
    await client
      .from("favorites")
      .upsert(
        { user_id: currentUser.id, subject_code: code },
        { onConflict: "user_id,subject_code" }
      );
  }

  async function removeFavorite(code) {
    if (!client || !currentUser || !code) return;
    await client
      .from("favorites")
      .delete()
      .eq("user_id", currentUser.id)
      .eq("subject_code", code);
  }

  async function syncFavoritesFromCloud() {
    if (!client || !currentUser) return;
    const cloud = await getFavorites();
    if (!cloud) return;
    const local = window.MULibrary?.state?.favorites || [];
    const merged = Array.from(new Set([...cloud, ...local]));
    const localOnly = local.filter((c) => !cloud.includes(c));
    if (localOnly.length) {
      await client.from("favorites").upsert(
        localOnly.map((c) => ({ user_id: currentUser.id, subject_code: c })),
        { onConflict: "user_id,subject_code" }
      );
    }
    if (window.MULibrary?.state) {
      window.MULibrary.state.favorites = merged;
      try {
        localStorage.setItem("muFavorites", JSON.stringify(merged));
      } catch {}
      if (typeof window.MULibrary.renderApp === "function") {
        window.MULibrary.renderApp();
      }
    }
  }

  async function getDownloads() {
    if (!client || !currentUser) return null;
    const { data, error } = await client
      .from("downloads")
      .select("subject_code, file_url")
      .eq("user_id", currentUser.id);
    if (error) {
      console.warn("[Auth] getDownloads failed:", error.message);
      return null;
    }
    const out = {};
    (data || []).forEach((r) => {
      if (!out[r.subject_code]) out[r.subject_code] = [];
      out[r.subject_code].push(r.file_url);
    });
    return out;
  }

  async function addDownload(code, url) {
    if (!client || !currentUser || !code || !url) return;
    await client
      .from("downloads")
      .upsert(
        { user_id: currentUser.id, subject_code: code, file_url: url },
        { onConflict: "user_id,subject_code,file_url" }
      );
  }

  async function syncDownloadsFromCloud() {
    if (!client || !currentUser) return;
    const cloud = await getDownloads();
    if (!cloud) return;
    const local = window.MULibrary?.state?.downloads || {};
    const merged = { ...local };
    Object.entries(cloud).forEach(([code, urls]) => {
      const existing = new Set(merged[code] || []);
      urls.forEach((u) => existing.add(u));
      merged[code] = Array.from(existing);
    });
    const toPush = [];
    Object.entries(local).forEach(([code, urls]) => {
      const cloudSet = new Set(cloud[code] || []);
      urls.forEach((u) => {
        if (!cloudSet.has(u))
          toPush.push({
            user_id: currentUser.id,
            subject_code: code,
            file_url: u,
          });
      });
    });
    if (toPush.length) {
      await client
        .from("downloads")
        .upsert(toPush, { onConflict: "user_id,subject_code,file_url" });
    }
    if (window.MULibrary?.state) {
      window.MULibrary.state.downloads = merged;
      try {
        localStorage.setItem("muDownloads", JSON.stringify(merged));
      } catch {}
    }
  }

  // ============================================================
  //  UI
  // ============================================================
  function renderAuthSlot() {
    const slot = document.getElementById("authSlot");
    if (!slot) return;

    if (currentUser) {
      const name =
        profile?.name || currentUser.email?.split("@")[0] || "Student";
      const ini = initials(name, currentUser.email);
      slot.innerHTML = `
        <button type="button" class="auth-user-btn" id="authUserBtn"
                aria-haspopup="menu" aria-expanded="false" title="${escapeHtml(
                  name
                )}">
          <span class="auth-user-avatar">${escapeHtml(ini)}</span>
          <span class="auth-user-name">${escapeHtml(name.split(" ")[0])}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="auth-menu" id="authMenu" role="menu" hidden>
          <div class="auth-menu-head">
            <div class="auth-menu-avatar">${escapeHtml(ini)}</div>
            <div class="auth-menu-info">
              <div class="auth-menu-name">${escapeHtml(name)}</div>
              <div class="auth-menu-email">${escapeHtml(
                currentUser.email || ""
              )}</div>
            </div>
          </div>
          <button type="button" class="auth-menu-item" data-auth-action="favorites">
            <i class="fas fa-star"></i> My favorites
          </button>
          <button type="button" class="auth-menu-item" data-auth-action="downloads">
            <i class="fas fa-download"></i> My downloads
          </button>
          <div class="auth-menu-divider"></div>
          <button type="button" class="auth-menu-item auth-menu-danger" data-auth-action="signout">
            <i class="fas fa-right-from-bracket"></i> Sign out
          </button>
        </div>`;
    } else {
      slot.innerHTML = `
        <button type="button" class="auth-signin-btn" id="authOpenBtn">
          <i class="fas fa-user"></i>
          <span>Sign in</span>
        </button>`;
    }
    bindAuthSlot();
  }

  function bindAuthSlot() {
    const openBtn = document.getElementById("authOpenBtn");
    if (openBtn) openBtn.addEventListener("click", openModal);

    const userBtn = document.getElementById("authUserBtn");
    const menu = document.getElementById("authMenu");
    if (userBtn && menu) {
      userBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = menu.hidden;
        menu.hidden = !isHidden;
        userBtn.setAttribute("aria-expanded", String(isHidden));
      });
      document.addEventListener("click", (e) => {
        if (!e.target.closest("#authSlot")) {
          menu.hidden = true;
          userBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    document.querySelectorAll("[data-auth-action]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const action = btn.dataset.authAction;
        const menu = document.getElementById("authMenu");
        if (menu) menu.hidden = true;
        if (action === "signout") {
          await signOut();
          toast("Signed out", "info", "fa-right-from-bracket");
        } else if (action === "favorites") {
          if (window.MULibrary?.state?.favorites?.length) {
            window.location.hash = "";
            document
              .getElementById("favoritesStrip")
              ?.scrollIntoView({ behavior: "smooth" });
          } else {
            toast("No favorites yet", "info", "fa-star");
          }
        } else if (action === "downloads") {
          window.location.hash = "/admin";
        }
      });
    });
  }

  let modalEl = null;
  let mode = "signin";

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.className = "auth-overlay";
    modalEl.id = "authModal";
    modalEl.hidden = true;
    modalEl.innerHTML = `
      <div class="auth-panel" role="dialog" aria-modal="true" aria-labelledby="authTitle">
        <button class="auth-close" type="button" aria-label="Close">×</button>

        <div class="auth-head">
          <div class="auth-head-icon"><i class="fas fa-graduation-cap"></i></div>
          <h3 id="authTitle">Sign in to MU Library</h3>
          <p class="auth-sub">Sync your favorites and downloads across devices.</p>
        </div>

        <div class="auth-tabs">
          <button type="button" class="auth-tab is-active" data-auth-tab="signin">Sign in</button>
          <button type="button" class="auth-tab" data-auth-tab="signup">Create account</button>
        </div>

        <form class="auth-form" id="authForm" novalidate>
          <label class="auth-field" data-signup-only hidden>
            <span>Name</span>
            <input type="text" name="name" autocomplete="name" placeholder="e.g. Sita Rai" />
          </label>
          <label class="auth-field">
            <span>Email</span>
            <input type="email" name="email" autocomplete="email" placeholder="you@example.com" required />
          </label>
          <label class="auth-field">
            <span>Password</span>
            <input type="password" name="password" autocomplete="current-password" placeholder="At least 6 characters" minlength="6" required />
          </label>

          <button type="submit" class="auth-submit" id="authSubmitBtn">
            <i class="fas fa-right-to-bracket"></i>
            <span id="authSubmitLabel">Sign in</span>
          </button>

          <p class="auth-error" id="authError" hidden></p>
        </form>

        <div class="auth-divider"><span>or</span></div>

        <button type="button" class="auth-google" id="authGoogleBtn">
          <i class="fab fa-google"></i>
          Continue with Google
        </button>

        <p class="auth-foot">
          By continuing you agree to be a good student. No spam, ever.
        </p>
      </div>`;
    document.body.appendChild(modalEl);

    modalEl.querySelector(".auth-close").addEventListener("click", closeModal);
    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalEl && !modalEl.hidden) closeModal();
    });

    modalEl.querySelectorAll("[data-auth-tab]").forEach((btn) => {
      btn.addEventListener("click", () => setMode(btn.dataset.authTab));
    });

    modalEl.querySelector("#authForm").addEventListener("submit", submitForm);
    modalEl
      .querySelector("#authGoogleBtn")
      .addEventListener("click", async () => {
        const { error } = await signInWithGoogle();
        if (error) showError(error);
      });

    return modalEl;
  }

  function setMode(m) {
    mode = m;
    if (!modalEl) return;
    modalEl
      .querySelectorAll("[data-auth-tab]")
      .forEach((b) => b.classList.toggle("is-active", b.dataset.authTab === m));
    const nameField = modalEl.querySelector("[data-signup-only]");
    if (nameField) nameField.hidden = m !== "signup";
    const title = modalEl.querySelector("#authTitle");
    const sub = modalEl.querySelector(".auth-sub");
    const label = modalEl.querySelector("#authSubmitLabel");
    const pwInput = modalEl.querySelector('input[name="password"]');
    if (m === "signup") {
      title.textContent = "Create your account";
      sub.textContent = "Free, no ads, sync across devices.";
      label.textContent = "Create account";
      if (pwInput) pwInput.setAttribute("autocomplete", "new-password");
    } else {
      title.textContent = "Sign in to MU Library";
      sub.textContent = "Sync your favorites and downloads across devices.";
      label.textContent = "Sign in";
      if (pwInput) pwInput.setAttribute("autocomplete", "current-password");
    }
    const err = modalEl.querySelector("#authError");
    if (err) {
      err.hidden = true;
      err.textContent = "";
    }
  }

  function showError(msg) {
    const err = modalEl?.querySelector("#authError");
    if (!err) return;
    err.textContent = msg;
    err.hidden = false;
  }

  async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector("#authSubmitBtn");
    const email = form.email.value.trim();
    const password = form.password.value;
    const name = form.name?.value?.trim() || "";

    if (!email || !password)
      return showError("Email and password are required.");
    if (password.length < 6)
      return showError("Password must be at least 6 characters.");

    btn.disabled = true;
    btn.classList.add("is-loading");
    const originalLabel = btn.querySelector("span").textContent;
    btn.querySelector("span").textContent =
      mode === "signup" ? "Creating…" : "Signing in…";

    let result;
    if (mode === "signup") {
      result = await signUp(email, password, name);
    } else {
      result = await signIn(email, password);
    }

    btn.disabled = false;
    btn.classList.remove("is-loading");
    btn.querySelector("span").textContent = originalLabel;

    if (result.error) return showError(result.error);

    if (result.needsConfirmation) {
      showError(
        "Check your email for a confirmation link to finish signing up."
      );
      return;
    }

    closeModal();
    toast(
      mode === "signup" ? "Account created — welcome!" : "Welcome back!",
      "success",
      "fa-circle-check"
    );
  }

  function openModal() {
    ensureModal();
    setMode("signin");
    modalEl.hidden = false;
    requestAnimationFrame(() => modalEl.classList.add("open"));
    setTimeout(
      () => modalEl.querySelector('input[name="email"]')?.focus(),
      120
    );
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove("open");
    setTimeout(() => {
      modalEl.hidden = true;
    }, 180);
  }

  const stubAPI = {
    ready,
    currentUser: () => null,
    onChange: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    signIn: async () => ({ error: "Auth is not configured yet." }),
    signUp: async () => ({ error: "Auth is not configured yet." }),
    signInWithGoogle: async () => ({ error: "Auth is not configured yet." }),
    signOut: async () => {},
    getFavorites: async () => null,
    addFavorite: async () => {},
    removeFavorite: async () => {},
    getDownloads: async () => null,
    addDownload: async () => {},
    open: () => toast("Auth is not configured yet.", "info", "fa-circle-info"),
  };

  window.MUAuth = CONFIGURED
    ? {
        ready,
        currentUser: () => currentUser,
        profile: () => profile,
        onChange: (fn) => {
          listeners.add(fn);
          return () => listeners.delete(fn);
        },
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        getFavorites,
        addFavorite,
        removeFavorite,
        getDownloads,
        addDownload,
        open: openModal,
      }
    : stubAPI;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
