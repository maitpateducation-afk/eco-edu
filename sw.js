// Service Worker v4 - Force fresh content always
const CACHE_NAME = 'eco-edu-v4';

// On install: skip waiting immediately
self.addEventListener('install', e => {
  self.skipWaiting();
});

// On activate: delete ALL old caches immediately
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// On fetch: ALWAYS go to network first, never serve stale cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request, {cache: 'no-store'})
      .catch(() => new Response('Offline - please reconnect', {status: 503}))
  );
});
