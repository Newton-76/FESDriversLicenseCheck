const CACHE_NAME = "cache";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/src/javascript_executions/app.js",
  "/img/apple-icon-180.png",
  "/img/favicon.ico",
  "/img/manifest-icon-192.png",
  "/img/manifest-icon-512.png"
];

self.addEventListener("install", event => {
  console.log("Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log("Caching...");
      cache.addAll(ASSETS);
    })
    .catch(error => console.log("Cachingfail: ", error))
  );
});

// Source: https://www.youtube.com/watch?v=0mAw9Na6hyM
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cacheResponse => {
      return fetch(event.request) || cacheResponse;
    })
  )
});
