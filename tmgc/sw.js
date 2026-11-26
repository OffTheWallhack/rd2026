// si/tmgc service worker — pri novej verzii zvýš číslo
const CACHE = 'tmgc-v2';
const CORE = [
  './', 'index.html', 'style.css?v=2', 'app.js?v=2', 'lines.js', 'vendor/three.bundle.js',
  'models/cincila.glb', 'models/opicka.glb', 'manifest.webmanifest', 'ikony/icon-192.png',
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// najprv z cache (rýchle), na pozadí stiahne novšiu verziu
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const ours = u.origin === location.origin && u.pathname.startsWith('/tmgc/');
  const fonts = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!ours && !fonts) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then((r) => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
