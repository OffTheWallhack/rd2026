const C='rob-lounge-v9';
const ASSETS=['./','index.html','manifest.webmanifest','matches.json','icon-192.png','apple-touch-icon.png','img/atlas0.webp','img/atlas1.webp','img/atlas2.webp','img/atlas3.webp','img/atlas4.webp','img/atlas5.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  const fresh=u.origin===location.origin&&(u.pathname.endsWith('/')||u.pathname.endsWith('.html')||u.pathname.endsWith('matches.json'));
  if(fresh){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r,{ignoreSearch:true})));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res})));
});
