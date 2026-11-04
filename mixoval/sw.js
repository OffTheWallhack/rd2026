/* si/mixoval — offline cache (aby sa pult otvoril aj v klube bez signálu). Najprv sieť, potom cache. */
var C = 'mixoval-v5';
var FILES = ['./', './index.html', './mx.css', './rec.js', './lame.min.js', './pult/', './pult/index.html', './pult/pult.css', './pult/pult.js', './pult/izba.js', './rec/', './rec/index.html', './manifest.webmanifest', './ikony/icon-192.png', './ikony/icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return Promise.all(FILES.map(function (f) { return c.add(f).catch(function () {}); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== C; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var u = new URL(e.request.url);
  if (u.origin !== location.origin || u.pathname.indexOf('/mixoval/') !== 0) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var cp = r.clone(); caches.open(C).then(function (c) { c.put(e.request, cp); }); return r;
  }).catch(function () { return caches.match(e.request); }));
});
