// Service Worker v5 - Force network always
const CACHE = 'eco-edu-v5';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Always go to network, never use cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
