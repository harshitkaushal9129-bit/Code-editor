const CACHE_NAME = 'devstudio-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './kaushal.jpg'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache se response dena (Offline Support)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Cache se mila
        }
        return fetch(event.request); // Internet se laao
      })
  );
});
