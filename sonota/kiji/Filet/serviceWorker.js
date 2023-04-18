
var CACHE_NAME  = "Filetv1";
var urlsToCache = [
    "font/Unbounded-Medium.ttf",
    "font/MPLUS1-Bold.ttf",
    "font/BIZUDGothic-Regular.ttf",
    "font/ZenMaruGothic-Medium.ttf",
    "img/192x192.png",
    "index.html"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
            function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(
        function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});