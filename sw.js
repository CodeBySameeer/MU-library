const CACHE_NAME = "mu-library-v5";
const SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./media.css",
  "./script.js",
  "./chat.js",
  "./sw-register.js",
  "./manifest.json",
];
const MAX_CACHE_ENTRIES = 120;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.allSettled(SHELL.map((url) => cache.add(url)));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function trimCache() {
  const cache = await caches.open(CACHE_NAME);
  const keys = await cache.keys();
  if (keys.length > MAX_CACHE_ENTRIES) {
    await Promise.all(
      keys.slice(0, keys.length - MAX_CACHE_ENTRIES).map((k) => cache.delete(k))
    );
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Never cache the API
  if (url.pathname.startsWith("/chat")) return;

  if (url.pathname.toLowerCase().endsWith(".pdf")) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            if (res && res.ok) {
              cache.put(req, res.clone());
              event.waitUntil(trimCache());
            }
            return res;
          })
          .catch(() => cached || new Response("Offline", { status: 503 }));
        return cached || network;
      })()
    );
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const res = await fetch(req);
        if (res && res.ok && res.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, res.clone());
          event.waitUntil(trimCache());
        }
        return res;
      } catch {
        const hit = await caches.match(req);
        return hit || (await caches.match("./index.html"));
      }
    })()
  );
});
