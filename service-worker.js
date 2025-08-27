const CACHE_NAME = 'carrinho-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  '../css/carrinho.css',
  '../app.js',
  '../img/niki.jpg',
  '../img/produto1.jpg',
  '../img/produto2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resposta => resposta || fetch(event.request))
  );
});
