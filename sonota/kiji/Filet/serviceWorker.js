
var CACHE_NAME  = "Filetv1";
var urlsToCache = [
    "font/Unbounded-Medium.woff",
    "font/MPLUS1-Bold.woff",
    "font/BIZUDGothic-Regular.woff",
    "font/ZenMaruGothic-Medium.woff",
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
