const CACHE_NAME = "cache";
const ASSETS = [
  "/FESDriversLicenseCheck/",
  "/FESDriversLicenseCheck/index.html",
  "/FESDriversLicenseCheck/manifest.json",
  "/FESDriversLicenseCheck/src/app.js",
  "/FESDriversLicenseCheck/img/apple-icon-180.png",
  "/FESDriversLicenseCheck/img/favicon.ico",
  "/FESDriversLicenseCheck/img/manifest-icon-192.png",
  "/FESDriversLicenseCheck/img/manifest-icon-512.png"
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
