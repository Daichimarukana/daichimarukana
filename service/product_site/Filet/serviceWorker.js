
var CACHE_NAME  = "Filetv1";
var urlsToCache = [
    "https://daichimarukana.com/sonota/kiji/Filet/font/Unbounded-Medium.woff",
    "https://daichimarukana.com/sonota/kiji/Filet/font/MPLUS1-Bold.woff",
    "https://daichimarukana.com/sonota/kiji/Filet/font/BIZUDGothic-Regular.woff",
    "https://daichimarukana.com/sonota/kiji/Filet/font/ZenMaruGothic-Medium.woff",
    "https://daichimarukana.com/sonota/kiji/Filet/img/192x192.png",
    "https://daichimarukana.com/sonota/kiji/Filet/index.html"
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
