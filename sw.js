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
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

Cliquez "Commit changes"
Attendez 1 minute
Sur PC : F12 → Application → Service Workers → Unregister → Ctrl+Shift+R
Sur Android : désinstallez l'app → videz Chrome → réinstallez

C'est uniquement ce fichier qui bloque tout depuis le début !SwJS TéléchargerSouhaitez-vous être averti lorsque Claude répond ?Notifier
