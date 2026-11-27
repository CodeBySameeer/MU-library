// ================================================================
//  MU Library — chat.js (100% Local / No Backend Required)
//  Uses a keyword-scoring engine to answer questions locally.
// ================================================================

(function () {
  "use strict";

  const CHAT_BOT_NAME = "Library Assistant";
  const Lib = window.MULibrary || {};

  // Rotating hints shown in the speech bubble
  const CHAT_HINTS = [
    "Hello! 👋",
    "Talk with me",
    "Need help finding notes?",
    "Ask me anything",
    "Looking for past papers?",
    "How can I help?",
  ];
  const HINT_ROTATE_MS = 6000;
  const HINT_FIRST_DELAY_MS = 2000;

  // ==============================================================
  //  THE "BRAIN" - FAQ & KEYWORD MATCHING
  // ==============================================================
  const FAQ = [
    {
      // Greetings
      match: [
        "hello",
        "hii",
        "hey",
        "namaste",
        "greetings",
        "morning",
        "evening",
      ],
      greeting: true,
      reply:
        "Namaste! 👋 Ask me anything about the library — subjects, downloads, how to contribute, or anything else.",
      chips: ["What subjects do you have?", "How do I download?"],
    },
    {
      // Subjects, Faculties, Notes, Papers
      match: [
        "subject",
        "faculty",
        "course",
        "civil",
        "computer",
        "hydropower",
        "physics",
        "chemistry",
        "bba",
        "semester",
        "notes",
        "paper",
        "syllabus",
        "assignment",
        "study",
        "material",
        "browse",
      ],
      reply:
        "Currently we have files for:\n• **BE Civil** (Semesters 1-2)\n• **BE Computer** (Semester 1)\n\nOther faculties (BE Hydropower, BSc Physics, BSc Chemistry, BBA) are listed but mostly empty for now.\n\nUse the **search bar** or **sidebar** to browse!",
      chips: ["How do I download?", "How can I contribute?"],
    },
    {
      // Downloads and Offline
      match: [
        "download",
        "save",
        "offline",
        "pdf",
        "file",
        "internet",
        "cache",
        "view",
      ],
      reply:
        "Tap **Download** on any file row. It saves to your device's Downloads folder.\n\nOnce downloaded, files work **offline** — no internet needed.",
      chips: ["How do I use offline?", "What subjects do you have?"],
    },
    {
      // Contribute / Upload / Share
      match: [
        "contribute",
        "upload",
        "send",
        "share",
        "submit",
        "resource",
        "provide",
      ],
      reply:
        "To contribute resources, please tap the **'Send resources'** button in the hero section of the homepage.",
      action: "contribute",
      actionLabel: "Open contribution form",
    },
    {
      // Report Broken Links
      match: ["report", "broken", "error", "flag", "missing", "dead"],
      reply:
        "To report a broken link, find the file in the list and click the **small flag button** next to it. We'll fix it soon!",
      action: "report",
      actionLabel: "Report a broken link",
    },
    {
      // Site Info, Free, Ads, Install
      match: [
        "free",
        "cost",
        "price",
        "pay",
        "paid",
        "money",
        "login",
        "account",
        "ads",
        "install",
        "android",
        "iphone",
      ],
      reply:
        "MU Library is completely **free**. There is no login required, and there are no ads.\n\nYou can also install it as an app from your browser menu!",
      chips: ["What subjects do you have?", "How do I download?"],
    },
  ];

  const chatState = {
    open: false,
    history: [],
    busy: false,
    greeted: false,
    userHasSpoken: false,
  };

  let chatRoot = null;
  let hintTimer = null;
  let hintIndex = 0;

  // ==============================================================
  //  UI BUILDING & EVENTS
  // ==============================================================
  function buildChat() {
    if (document.getElementById("chatRoot"))
      return document.getElementById("chatRoot");

    const el = document.createElement("div");
    el.id = "chatRoot";
    el.className = "chat-root";
    el.innerHTML = `
      <button class="chat-fab" id="chatFab" type="button" aria-label="Open assistant">
        <i class="fas fa-robot chat-fab-open"></i>
        <i class="fas fa-times chat-fab-close"></i>
        <span class="chat-fab-dot"></span>
      </button>

      <div class="chat-hint" id="chatHint" hidden>
        <span id="chatHintText"></span>
        <button class="chat-hint-close" id="chatHintClose" type="button" aria-label="Dismiss">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="chat-panel" id="chatPanel" role="dialog" aria-modal="false" aria-labelledby="chatTitle" hidden>
        <header class="chat-header">
          <div class="chat-avatar"><i class="fas fa-robot"></i></div>
          <div class="chat-title-group">
            <div class="chat-title" id="chatTitle">${CHAT_BOT_NAME}</div>
            <div class="chat-status"><span class="chat-status-dot"></span> Online</div>
          </div>
          <button class="chat-close" id="chatClose" type="button" aria-label="Close assistant">
            <i class="fas fa-times"></i>
          </button>
        </header>

        <div class="chat-body" id="chatBody"></div>

        <form class="chat-input-row" id="chatForm">
          <input type="text" id="chatInput" placeholder="Ask anything…" autocomplete="off" maxlength="500" aria-label="Message" />
          <button type="submit" class="chat-send" aria-label="Send">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>

        <footer class="chat-footer">
          <span>Guided assistant · Free · No login</span>
        </footer>
      </div>
    `;
    document.body.appendChild(el);
    chatRoot = el;

    const fab = el.querySelector("#chatFab");
    const closeBtn = el.querySelector("#chatClose");
    const form = el.querySelector("#chatForm");
    const input = el.querySelector("#chatInput");
    const body = el.querySelector("#chatBody");
    const hint = el.querySelector("#chatHint");
    const hintClose = el.querySelector("#chatHintClose");

    fab.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", () => closeChat());

    hint.addEventListener("click", (e) => {
      if (e.target.closest("#chatHintClose")) return;
      openChat();
    });

    hintClose.addEventListener("click", (e) => {
      e.stopPropagation();
      hideHint();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val || chatState.busy) return;
      input.value = "";
      handleUserMessage(val);
    });

    body.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-chat-chip]");
      if (chip) {
        handleUserMessage(chip.dataset.chatChip);
        return;
      }

      const action = e.target.closest("[data-chat-action]");
      if (action) {
        runAction(action.dataset.chatAction);
        return;
      }

      const link = e.target.closest("[data-chat-href]");
      if (link) {
        const href = link.dataset.chatHref;
        if (href.startsWith("#/")) {
          window.location.hash = href.slice(1);
          closeChat();
        } else if (href.startsWith("mailto:")) {
          window.location.href = href;
        } else {
          window.open(href, "_blank", "noopener");
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && chatState.open) closeChat();
    });

    setTimeout(() => startHintRotation(), HINT_FIRST_DELAY_MS);
    return el;
  }

  // ==============================================================
  //  ROTATING HINT BUBBLE
  // ==============================================================
  function startHintRotation() {
    const hint = document.getElementById("chatHint");
    const hintText = document.getElementById("chatHintText");
    if (!hint || !hintText) return;

    function showNext() {
      if (chatState.open || chatState.userHasSpoken) return;
      hintText.textContent = CHAT_HINTS[hintIndex % CHAT_HINTS.length];
      hintIndex++;
      hint.hidden = false;
      requestAnimationFrame(() => hint.classList.add("visible"));
    }
    function cycle() {
      if (chatState.open || chatState.userHasSpoken) {
        hideHint();
        return;
      }
      hint.classList.remove("visible");
      setTimeout(() => {
        if (chatState.open || chatState.userHasSpoken) return;
        showNext();
        hintTimer = setTimeout(cycle, HINT_ROTATE_MS);
      }, 400);
    }
    showNext();
    hintTimer = setTimeout(cycle, HINT_ROTATE_MS + 1500);
  }

  function hideHint() {
    const hint = document.getElementById("chatHint");
    if (hint) {
      hint.classList.remove("visible");
      setTimeout(() => {
        hint.hidden = true;
      }, 300);
    }
    if (hintTimer) {
      clearTimeout(hintTimer);
      hintTimer = null;
    }
  }

  // ==============================================================
  //  OPEN / CLOSE
  // ==============================================================
  function openChat() {
    const el = buildChat();
    const panel = el.querySelector("#chatPanel");
    const fab = el.querySelector("#chatFab");
    hideHint();
    panel.hidden = false;
    chatState.open = true;
    el.classList.add("is-open");
    fab.classList.add("is-active");
    requestAnimationFrame(() => panel.classList.add("is-visible"));
    setTimeout(() => el.querySelector("#chatInput")?.focus(), 200);

    if (!chatState.greeted) {
      chatState.greeted = true;
      greet();
    }
  }
  function closeChat() {
    const el = document.getElementById("chatRoot");
    if (!el) return;
    const panel = el.querySelector("#chatPanel");
    const fab = el.querySelector("#chatFab");
    panel.classList.remove("is-visible");
    el.classList.remove("is-open");
    fab.classList.remove("is-active");
    chatState.open = false;
    setTimeout(() => {
      if (!chatState.open) panel.hidden = true;
    }, 220);
  }
  function toggleChat() {
    if (chatState.open) closeChat();
    else openChat();
  }

  // ==============================================================
  //  RENDERING HELPERS
  // ==============================================================
  function escapeChatHtml(str) {
    return String(str).replace(
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

  function inlineMd(text) {
    let safe = escapeChatHtml(text);
    safe = safe.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    safe = safe.replace(/\*(.+?)\*/g, "<em>$1</em>");
    safe = safe.replace(/\n/g, "<br>");
    return safe;
  }

  function scrollChat() {
    const body = document.getElementById("chatBody");
    if (body) body.scrollTop = body.scrollHeight;
  }

  function addBubble(
    role,
    html,
    chips = [],
    action = null,
    actionLabel = null
  ) {
    const body = document.getElementById("chatBody");
    if (!body) return;
    const wrap = document.createElement("div");
    wrap.className = `chat-msg chat-msg-${role}`;
    const avatarHtml =
      role === "assistant"
        ? `<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>`
        : "";
    const bubbleHtml = `<div class="chat-msg-bubble">${html}</div>`;

    let chipsHtml = "";
    if (chips.length) {
      chipsHtml = `<div class="chat-chips">${chips
        .map(
          (c) =>
            `<button type="button" class="chat-chip" data-chat-chip="${escapeChatHtml(
              c
            )}">${escapeChatHtml(c)}</button>`
        )
        .join("")}</div>`;
    }

    let actionHtml = "";
    if (action && actionLabel) {
      actionHtml = `<div class="chat-chips"><button type="button" class="chat-chip chat-chip-action" data-chat-action="${escapeChatHtml(
        action
      )}">${escapeChatHtml(actionLabel)}</button></div>`;
    }

    wrap.innerHTML =
      avatarHtml +
      `<div class="chat-msg-content">${bubbleHtml}${chipsHtml}${actionHtml}</div>`;
    body.appendChild(wrap);
    scrollChat();
  }

  function showTyping(label = "Thinking…") {
    const body = document.getElementById("chatBody");
    if (!body) return;
    hideTyping();
    const el = document.createElement("div");
    el.className = "chat-msg chat-msg-assistant chat-typing";
    el.id = "chatTyping";
    el.innerHTML = `
      <div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>
      <div class="chat-msg-bubble">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="chat-typing-label">${escapeChatHtml(label)}</span>
      </div>`;
    body.appendChild(el);
    scrollChat();
  }

  function hideTyping() {
    document.getElementById("chatTyping")?.remove();
  }

  function greet() {
    addBubble(
      "assistant",
      `Namaste! 👋 I'm the MU Library assistant.<br><br>Ask me anything — or pick one of these:`,
      [
        "Find a subject",
        "How do I download?",
        "How can I contribute?",
        "About MU Library",
      ]
    );
  }

  // ==============================================================
  //  MAIN MESSAGE HANDLER
  // ==============================================================
  async function handleUserMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (!chatState.userHasSpoken) {
      chatState.userHasSpoken = true;
      hideHint();
    }

    chatState.history.push({ role: "user", content: trimmed });
    addBubble("user", escapeChatHtml(trimmed));

    if (!chatState.greeted) chatState.greeted = true;

    // --- About shortcut ---
    if (/^about(\s+mu\s+library)?$/i.test(trimmed)) {
      window.location.hash = "/about";
      addBubble("assistant", "Opening the About page for you…", []);
      return;
    }

    // --- Faculty browse shortcut ---
    if (
      trimmed.toLowerCase().startsWith("find a subject") ||
      trimmed.toLowerCase().startsWith("find another subject")
    ) {
      return respondWithFacultyList();
    }

    // --- Local Brain (Keyword Matching) ---
    const faqHit = matchFaq(trimmed, {
      allowGreeting: chatState.history.length === 1,
    });

    if (faqHit) {
      chatState.busy = true;
      showTyping("Typing…");
      await sleep(600); // Fake realistic delay
      hideTyping();
      chatState.busy = false;

      addBubble(
        "assistant",
        inlineMd(faqHit.reply),
        faqHit.chips || [],
        faqHit.action || null,
        faqHit.actionLabel || null
      );
      chatState.history.push({ role: "assistant", content: faqHit.reply });
      return;
    }

    // --- Fallback if no keywords matched ---
    chatState.busy = true;
    showTyping("Typing…");
    await sleep(600);
    hideTyping();
    chatState.busy = false;

    addBubble(
      "assistant",
      "I'm not sure about that exact question. Here are some things I can help you with:",
      [
        "Find a subject",
        "How do I download?",
        "How can I contribute?",
        "Report a broken link",
      ]
    );
  }

  function respondWithFacultyList() {
    const faculties = Lib.DATA?.faculties;
    if (!faculties) {
      addBubble("assistant", "What are you studying?", [
        "BE Civil",
        "BE Computer",
        "BSc",
        "BBA",
      ]);
      return;
    }
    const chips = Object.entries(faculties).map(([, f]) => f.name);
    addBubble(
      "assistant",
      "Which faculty?",
      chips.length ? chips : ["BE Civil", "BE Computer"]
    );
  }

  function runAction(action) {
    switch (action) {
      case "contribute":
        if (typeof Lib.openContributeModal === "function")
          Lib.openContributeModal();
        else window.location.hash = "/about";
        closeChat();
        return;
      case "report":
        window.location.href = `mailto:${
          Lib.REPORT_EMAIL || "mu-library@example.com"
        }?subject=Broken link report`;
        return;
      case "about":
        window.location.hash = "/about";
        closeChat();
        return;
    }
  }

  // ==============================================================
  //  MATCHING ENGINE
  // ==============================================================
  function matchFaq(text, { allowGreeting = false } = {}) {
    const t = text.toLowerCase();
    let best = null;
    let bestScore = 0;

    for (const item of FAQ) {
      if (item.greeting && !allowGreeting) continue;

      let score = 0;
      for (const kw of item.match) {
        // \b ensures it only matches the exact word (e.g. "hi" won't match "this")
        const regex = new RegExp("\\b" + kw + "\\b", "i");

        if (regex.test(t)) {
          // Longer keywords give a higher score (e.g., "download" > "save")
          score += kw.length;
        }
      }

      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    }

    // Requires a minimum score of 3 to trigger a match
    return bestScore >= 3 ? best : null;
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  // ==============================================================
  //  BOOT
  // ==============================================================
  (function bootChat() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", buildChat);
    } else {
      buildChat();
    }
  })();
})();
