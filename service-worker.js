const CACHE_VERSION = "v3";
const STATIC_CACHE = `skb-static-${CACHE_VERSION}`;
const API_CACHE = `skb-api-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `skb-dynamic-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline.html";
const CONTACT_SYNC_TAG = "contact-form-sync";
const CONTACT_DB_NAME = "skb-contact-sync-db";
const CONTACT_DB_STORE = "queue";

const STATIC_ASSETS = [
  "/",
  "/portfolio.html",
  "/app.js",
  "/manifest.json",
  "/offline.html",
  "/robots.txt",
  "/assets/img/profile.jpg",
  "/assets/img/natwest.jpg",
  "/assets/img/skns.jpg",
  "/assets/img/sos.jpg",
  "/assets/img/timeslotter.jpg",
  "/assets/img/vit.jpg",
  "/assets/og/portfolio-og-1200x630.svg",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch(() => Promise.resolve())
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => ![STATIC_CACHE, API_CACHE, DYNAMIC_CACHE].includes(key))
            .map((key) => caches.delete(key))
        )
      ),
      self.registration.navigationPreload ? self.registration.navigationPreload.enable() : Promise.resolve()
    ])
  );
  self.clients.claim();
});

function isApiRequest(request) {
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return true;
  return url.pathname.startsWith("/api/") || url.pathname.includes("graphql");
}

async function cacheFirst(request, cacheName = DYNAMIC_CACHE) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const networkResponse = await fetch(request);
  if (networkResponse && networkResponse.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone()).catch(() => Promise.resolve());
  }
  return networkResponse;
}

async function networkFirst(request, cacheName = API_CACHE, fallbackToOffline = false) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone()).catch(() => Promise.resolve());
    }
    return networkResponse;
  } catch (error) {
    void error;
    const cached = await caches.match(request);
    if (cached) return cached;
    if (fallbackToOffline) {
      return caches.match(OFFLINE_URL);
    }
    throw error;
  }
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request, DYNAMIC_CACHE, true));
    return;
  }

  if (isApiRequest(event.request)) {
    event.respondWith(networkFirst(event.request, API_CACHE));
    return;
  }

  event.respondWith(cacheFirst(event.request, DYNAMIC_CACHE));
});

function openContactDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(CONTACT_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(CONTACT_DB_STORE)) {
        db.createObjectStore(CONTACT_DB_STORE, { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withStore(mode, executor) {
  const db = await openContactDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(CONTACT_DB_STORE, mode);
    const store = transaction.objectStore(CONTACT_DB_STORE);
    let doneValue;

    executor(store, (value) => {
      doneValue = value;
    });

    transaction.oncomplete = () => {
      db.close();
      resolve(doneValue);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

function queueContactMessage(payload) {
  return withStore("readwrite", (store) => {
    store.add({
      createdAt: Date.now(),
      payload
    });
  });
}

function getQueuedMessages() {
  return withStore("readonly", (store, done) => {
    const req = store.getAll();
    req.onsuccess = () => done(req.result || []);
    req.onerror = () => done([]);
  });
}

function removeQueuedMessages(ids) {
  if (!Array.isArray(ids) || ids.length === 0) return Promise.resolve();
  return withStore("readwrite", (store) => {
    ids.forEach((id) => store.delete(id));
  });
}

async function deliverEmailJsMessage(item) {
  const body = item?.payload;
  if (!body) throw new Error("Missing contact payload");

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      service_id: body.serviceId,
      template_id: body.templateId,
      user_id: body.publicKey,
      template_params: {
        from_name: body.name,
        from_email: body.email,
        reply_to: body.email,
        message: body.message
      }
    })
  });

  if (!response.ok) {
    throw new Error(`EmailJS sync failed (${response.status})`);
  }
}

async function flushContactQueue() {
  const entries = await getQueuedMessages();
  if (!entries.length) return;

  const completedIds = [];
  for (const entry of entries) {
    try {
      await deliverEmailJsMessage(entry);
      completedIds.push(entry.id);
    } catch (error) {
      void error;
    }
  }

  if (completedIds.length) {
    await removeQueuedMessages(completedIds);
  }
}

self.addEventListener("sync", (event) => {
  if (event.tag !== CONTACT_SYNC_TAG) return;
  event.waitUntil(flushContactQueue());
});

self.addEventListener("message", (event) => {
  const data = event.data || {};

  if (data.type === "QUEUE_CONTACT_MESSAGE" && data.payload) {
    event.waitUntil(
      queueContactMessage(data.payload)
        .then(() => {
          if (self.registration.sync) {
            return self.registration.sync.register(CONTACT_SYNC_TAG).catch(() => Promise.resolve());
          }
          return flushContactQueue();
        })
        .catch(() => Promise.resolve())
    );
  }

  if (data.type === "SHOW_WELCOME_NOTIFICATION") {
    const title = data.title || "Portfolio Installed";
    const body = data.body || "Thanks for installing Senthil's portfolio!";
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon: "/assets/icons/icon-192x192.png",
        badge: "/assets/icons/icon-72x72.png",
        vibrate: [140, 80, 140],
        data: {
          url: "/portfolio.html"
        }
      })
    );
  }
});

self.addEventListener("push", (event) => {
  const payload = event.data ? event.data.json() : {};
  const title = payload.title || "Senthil Portfolio";
  const body = payload.body || "Thanks for installing Senthil's portfolio!";

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: "/assets/icons/icon-192x192.png",
      badge: "/assets/icons/icon-72x72.png",
      data: {
        url: payload.url || "/portfolio.html"
      }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification?.data?.url || "/portfolio.html";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      const existing = clients.find((client) => "focus" in client);
      if (existing) {
        existing.navigate(url);
        return existing.focus();
      }
      return self.clients.openWindow(url);
    })
  );
});
