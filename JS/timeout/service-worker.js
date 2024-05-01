const CACHE_NAME = 'countdown-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'main.js',
  '/images/logo.png',
];

self.addEventListener('load', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        // Handle failed requests (e.g., serve a fallback page)
      })
  );
});

