// si/tmgc — cozy 3D Tamagotchi (prototyp, predpísané odpovede)
import * as T from './vendor/three.bundle.js';
import { SPECIES, INTENTS } from './lines.js';

const $ = (id) => document.getElementById(id);
const ORDER = ['cincila', 'opicka', 'panda', 'psik', 'macicka'];
const SAVE_KEY = 'tmgc.v1';
const PET_H = 1.4;               // výška zvieratka v scéne
const FLOOR = 5;                 // štatistiky nikdy neklesnú pod toto (cozy, bez smrti)
const RATES = {                  // zmena za hodinu
  full: -7, energy: -5, energySleep: +28, mood: -4, moodNeedy: -8, clean: -3,
};
const STAT_UI = [
  { k: 'full', icon: '🍎', label: 'Sýtosť' },
  { k: 'energy', icon: '⚡', label: 'Energia' },
  { k: 'mood', icon: '💛', label: 'Nálada' },
  { k: 'clean', icon: '🫧', label: 'Čistota' },
];
const CHIPS = ['Ahoj!', 'Ako sa máš?', 'Kto si?', 'Povedz vtip', 'Mám ťa rád 💛', 'Povedz zaujímavosť', 'Volám sa…'];

// ---------- stav ----------
let S = load();
let mode = 'loading';            // loading | pick | naming | home
let pickIndex = 0;
let muted = !!(S && S.muted);

function load() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || null; } catch { return null; }
}
function save() {
  if (!S) return;
  S.last = Date.now(); S.muted = muted;
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch {}
}
const clamp = (v, a = FLOOR, b = 100) => Math.max(a, Math.min(b, v));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

// ---------- 3D scéna ----------
const canvas = $('scene');
const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new T.Scene();
const pmrem = new T.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new T.RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.55;

const camera = new T.PerspectiveCamera(32, 1, 0.1, 50);
const target = new T.Vector3(0, PET_H * 0.5, 0);

const hemi = new T.HemisphereLight(0xffffff, 0xc8bfe6, 1.1);
scene.add(hemi);
const key = new T.DirectionalLight(0xfff1e0, 1.6);
key.position.set(2.5, 4, 3);
scene.add(key);
const rim = new T.DirectionalLight(0xd8e4ff, 0.8);
rim.position.set(-3, 2, -2.5);
scene.add(rim);

function radialTex(inner, outer) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t;
}
const floor = new T.Mesh(
  new T.PlaneGeometry(3.6, 3.6),
  new T.MeshBasicMaterial({ map: radialTex('rgba(255,255,255,0.85)', 'rgba(255,255,255,0)'), transparent: true, depthWrite: false })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);
const shadow = new T.Mesh(
  new T.PlaneGeometry(1.5, 1.5),
  new T.MeshBasicMaterial({ map: radialTex('rgba(60,45,90,0.32)', 'rgba(60,45,90,0)'), transparent: true, depthWrite: false })
);
shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.003;
scene.add(shadow);

const petRoot = new T.Group();      // animuje sa (skoky, otáčanie)
scene.add(petRoot);
let petModel = null;

const loader = new T.GLTFLoader();
loader.setMeshoptDecoder(T.MeshoptDecoder);
const modelCache = {};
function loadModel(id) {
  const sp = SPECIES[id];
  if (!modelCache[id]) {
    modelCache[id] = sp.locked
      ? Promise.resolve(makePlaceholder(sp.color))
      : new Promise((res, rej) => loader.load(sp.model, (g) => res(prepModel(g.scene)), undefined, rej));
  }
  return modelCache[id];
}
function prepModel(obj) {
  obj.traverse((o) => {
    if (o.isMesh) {
      const m = o.material;
      m.metalness = 0;
      m.roughness = Math.max(m.roughness ?? 1, 0.75);
      m.envMapIntensity = 0.8;
    }
  });
  const box = new T.Box3().setFromObject(obj);
  const size = box.getSize(new T.Vector3());
  obj.scale.setScalar(PET_H / size.y);
  box.setFromObject(obj);
  const c = box.getCenter(new T.Vector3());
  obj.position.x -= c.x; obj.position.z -= c.z; obj.position.y -= box.min.y;
  const wrap = new T.Group(); wrap.add(obj);
  wrap.userData.width = Math.max(size.x, size.z) * (PET_H / size.y);
  return wrap;
}
function makePlaceholder(color) {
  const g = new T.Group();
  const mat = new T.MeshStandardMaterial({ color, roughness: 1, transparent: true, opacity: 0.55 });
  const body = new T.Mesh(new T.SphereGeometry(0.5, 32, 24), mat);
  body.scale.set(1, 0.9, 0.9); body.position.y = 0.45;
  const head = new T.Mesh(new T.SphereGeometry(0.38, 32, 24), mat);
  head.position.y = 1.05;
  const e1 = new T.Mesh(new T.SphereGeometry(0.12, 16, 12), mat); e1.position.set(-0.24, 1.36, 0);
  const e2 = e1.clone(); e2.position.x = 0.24;
  g.add(body, head, e1, e2);
  g.userData.width = 1;
  return g;
}
function setPetModel(obj) {
  if (petModel) petRoot.remove(petModel);
  petModel = obj; petRoot.add(obj);
  popT = 0;
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const tan = Math.tan(T.MathUtils.degToRad(camera.fov / 2));
  // zvieratko má zabrať asi tretinu výšky a nesmie byť širšie ako obrazovka
  const dV = 3.6 / (2 * tan);
  const dH = 2.3 / (2 * tan * camera.aspect);
  const d = Math.max(dV, dH);
  camera.position.set(0, PET_H * 0.5 + d * 0.16, d);
  // na telefóne posuň zvieratko trochu nad stred (dole sú tlačidlá)
  target.set(0, PET_H * 0.5 - (mode === 'home' ? 0.35 : 0.2), 0);
  camera.lookAt(target);
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);

function toScreen(x, y, z) {
  const v = new T.Vector3(x, y, z).applyMatrix4(petRoot.matrixWorld).project(camera);
  return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight };
}

// ---------- animácia ----------
let anim = null;            // { type, t0, dur }
let popT = 1;               // vyskočenie pri výmene modelu
let userYaw = 0, yawVel = 0, dragging = false;
let lookX = 0;
const clock = { start: performance.now(), prev: performance.now(), elapsedTime: 0, getDelta() { const n = performance.now(); const d = (n - this.prev) / 1000; this.prev = n; this.elapsedTime = (n - this.start) / 1000; return d; } };

function play(type, dur) { anim = { type, t0: clock.elapsedTime, dur }; }

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  const sleeping = mode === 'home' && S?.sleeping;
  const sad = mode === 'home' && S && !sleeping && Math.min(S.stats.mood, S.stats.full) < 30;

  // dýchanie
  const bSpeed = sleeping ? 1.3 : sad ? 1.6 : 2.3;
  const bAmp = sleeping ? 0.03 : 0.018;
  const br = Math.sin(t * bSpeed) * bAmp;
  let sy = 1 + br, sxz = 1 - br * 0.5;
  let y = 0, pitch = sleeping ? 0.16 : sad ? 0.1 : 0, roll = sleeping ? 0.07 : 0, extraYaw = 0;
  if (sleeping) sy *= 0.94;

  if (anim) {
    const p = (t - anim.t0) / anim.dur;
    if (p >= 1) anim = null;
    else {
      const ease = Math.sin(p * Math.PI);
      switch (anim.type) {
        case 'jump': {
          y = ease * 0.38;
          const s = p < 0.15 ? -0.12 * Math.sin(p / 0.15 * Math.PI) : p > 0.85 ? -0.1 * Math.sin((p - 0.85) / 0.15 * Math.PI) : 0.08 * ease;
          sy *= 1 + s; sxz *= 1 - s * 0.6;
          break;
        }
        case 'hop': y = Math.abs(Math.sin(p * Math.PI * 3)) * 0.22; break;
        case 'spin': y = ease * 0.45; extraYaw = p * Math.PI * 2; break;
        case 'eat': pitch += Math.max(0, Math.sin(p * Math.PI * 7)) * 0.16; break;
        case 'shake': roll += Math.sin(p * Math.PI * 12) * 0.14 * (1 - p); break;
        case 'nod': pitch += Math.sin(p * Math.PI * 2) * 0.12; break;
      }
    }
  }

  // otáčanie prstom so zotrvačnosťou, potom sa pomaly vráti čelom k tebe
  if (!dragging) {
    userYaw += yawVel * dt; yawVel *= Math.pow(0.04, dt);
    if (Math.abs(yawVel) < 0.3) userYaw = wrapAngle(userYaw) * (1 - Math.min(1, dt * 1.5));
  }
  const sway = sleeping ? 0 : Math.sin(t * 0.55) * 0.14 + lookX * 0.35;
  const autoSpin = mode === 'pick' ? t * 0.5 : 0;

  popT = Math.min(1, popT + dt * 3);
  const pop = popT < 1 ? 0.6 + 0.4 * (1 - Math.pow(1 - popT, 3)) + Math.sin(popT * Math.PI) * 0.12 : 1;

  petRoot.position.y = y;
  petRoot.rotation.set(pitch, userYaw + sway + extraYaw + (mode === 'pick' ? Math.sin(autoSpin) * 0.6 : 0), roll, 'YXZ');
  petRoot.scale.set(sxz * pop, sy * pop, sxz * pop);
  const sh = 1 - Math.min(y, 0.5) * 0.9;
  shadow.scale.setScalar(sh * ((petModel?.userData.width || 1) / 1.1));
  shadow.material.opacity = sh;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
function wrapAngle(a) { return Math.atan2(Math.sin(a), Math.cos(a)); }

// ---------- dotyk ----------
const ray = new T.Raycaster();
let down = null;
canvas.addEventListener('pointerdown', (e) => {
  down = { x: e.clientX, y: e.clientY, t: performance.now(), lx: e.clientX, moved: 0 };
  dragging = true; yawVel = 0;
  canvas.setPointerCapture(e.pointerId);
  audioInit();
});
canvas.addEventListener('pointermove', (e) => {
  lookX = (e.clientX / innerWidth - 0.5);
  if (!down) return;
  const dx = e.clientX - down.lx;
  down.lx = e.clientX; down.moved += Math.abs(dx);
  if (mode !== 'pick') { userYaw += dx * 0.012; yawVel = dx * 0.012 * 60; }
});
canvas.addEventListener('pointerup', (e) => {
  if (!down) return;
  const dx = e.clientX - down.x;
  const short = performance.now() - down.t < 350 && down.moved < 12;
  dragging = false;
  if (mode === 'pick' && Math.abs(dx) > 50) { stepPick(dx < 0 ? 1 : -1); }
  else if (short) tapAt(e.clientX, e.clientY);
  down = null;
});
canvas.addEventListener('pointercancel', () => { dragging = false; down = null; });

function tapAt(x, y) {
  const p = new T.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1);
  ray.setFromCamera(p, camera);
  if (!ray.intersectObject(petRoot, true).length) return;
  if (mode === 'pick') { play('jump', 0.55); chirp(1); return; }
  if (mode !== 'home') { play('jump', 0.55); chirp(1); return; }
  if (game) return;
  if (S.sleeping) { say(pick(L().sleeping)); play('nod', 0.8); return; }
  S.stats.mood = clamp(S.stats.mood + 3);
  play('jump', 0.55);
  hearts(4);
  chirp(1);
  if (Math.random() < 0.5) say(pick(L().pet));
  renderStats(); save();
}

// ---------- efekty ----------
const fx = $('fx');
function particle(txt, x, y, { dx = 0, dy = -90, dur = 1200, size = 26, rot = 0, scale = 1, color, cls = 'p', delay = 0 } = {}) {
  const el = document.createElement('div');
  el.className = cls; el.textContent = txt; el.style.fontSize = size + 'px';
  if (color) el.style.color = color;
  fx.appendChild(el);
  const a = el.animate([
    { transform: `translate(${x}px,${y}px) translate(-50%,-50%) scale(${0.4 * scale})`, opacity: 0 },
    { transform: `translate(${x + dx * 0.25}px,${y + dy * 0.25}px) translate(-50%,-50%) scale(${scale})`, opacity: 1, offset: 0.2 },
    { transform: `translate(${x + dx}px,${y + dy}px) translate(-50%,-50%) scale(${scale * 0.9}) rotate(${rot}deg)`, opacity: 0 },
  ], { duration: dur, delay, easing: 'cubic-bezier(.2,.7,.4,1)', fill: 'backwards' });
  a.onfinish = () => el.remove();
}
function head() { return toScreen(0, PET_H * 1.02, 0); }
function hearts(n) {
  const h = head();
  for (let i = 0; i < n; i++) particle(pick(['💛', '💕', '💖', '✨']), h.x + (Math.random() - 0.5) * 60, h.y, { dx: (Math.random() - 0.5) * 90, dy: -70 - Math.random() * 60, delay: i * 90, size: 22 + Math.random() * 10 });
}
function zzz() {
  const h = head();
  particle(pick(['z', 'Z', 'z']), h.x + 20, h.y, { dx: 40 + Math.random() * 30, dy: -80, dur: 2200, size: 18 + Math.random() * 14, cls: 'p zzz' });
}
function toast(msg) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el); setTimeout(() => el.remove(), 2200);
}

// ---------- zvuk (malé pípnutia) ----------
let ac = null;
function audioInit() { if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch {} } ac?.resume?.(); }
function chirp(n = 2) {
  if (muted || !ac) return;
  const base = 520 * (S ? SPECIES[S.species].sound : SPECIES[ORDER[pickIndex]]?.sound || 1.3);
  for (let i = 0; i < n; i++) {
    const t0 = ac.currentTime + i * 0.11;
    const o = ac.createOscillator(), g = ac.createGain();
    const f = base * (0.85 + Math.random() * 0.4);
    o.type = 'sine';
    o.frequency.setValueAtTime(f, t0);
    o.frequency.exponentialRampToValueAtTime(f * (Math.random() < 0.5 ? 1.5 : 0.75), t0 + 0.08);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    o.connect(g).connect(ac.destination); o.start(t0); o.stop(t0 + 0.12);
  }
}

// ---------- reč ----------
const L = () => SPECIES[S.species].lines;
let bubbleTimer = 0;
function fill(txt) {
  txt = txt.replace(/\{meno\}/g, S?.name || '');
  return S?.owner ? txt.replace(/\{ty\}/g, S.owner) : txt.replace(/,?\s*\{ty\}/g, '');
}
function say(txt) {
  const b = $('bubble');
  $('bubbleText').textContent = fill(txt);
  b.hidden = true; void b.offsetWidth; b.hidden = false;
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => { b.hidden = true; }, Math.max(3500, txt.length * 65));
  chirp(Math.min(4, 1 + Math.floor(txt.length / 25)));
  lastTalk = Date.now();
}
function youSaid(txt) {
  const y = $('you');
  y.textContent = txt; y.hidden = true; void y.offsetWidth; y.hidden = false;
  clearTimeout(youSaid.t); youSaid.t = setTimeout(() => { y.hidden = true; }, 2600);
}
function need() {
  const s = S.stats;
  const list = [['hungry', s.full], ['tired', s.energy], ['dirty', s.clean], ['sad', s.mood]].sort((a, b) => a[1] - b[1]);
  return list[0][1] < 35 ? list[0][0] : null;
}

let awaitingName = false;
function reply(raw) {
  const text = norm(raw);
  S.talks = (S.talks || 0) + 1;
  if (S.sleeping) return say(pick(L().sleeping));

  if (awaitingName && /^[a-z]{2,20}$/.test(text)) return setOwner(raw.trim().split(/\s+/)[0]);
  let hit = null, m = null;
  for (const it of INTENTS) { m = text.match(it.re); if (m) { hit = it.id; break; } }

  switch (hit) {
    case 'name': return setOwner(raw.trim().split(/\s+/).pop());
    case 'askname':
      if (S.owner) return say(`Ty si predsa ${S.owner}!`);
      awaitingName = true; return say(pick(L().nameAsk));
    case 'howareyou': {
      const n = need();
      return say(pick(L().howareyou[n || 'good']));
    }
    case 'feed': say(pick(L().need.hungry)); return setTimeout(openFood, 600);
    case 'play': return startGame();
    case 'sleep': return toggleSleep();
    case 'bath': return doBath();
    case null: {
      if (!S.owner && S.talks >= 3 && !S.askedName) { S.askedName = true; awaitingName = true; return say(pick(L().nameAsk)); }
      play('nod', 0.7);
      return say(pick(L().fallback));
    }
    default: {
      const arr = L()[hit];
      if (hit === 'love') { hearts(6); S.stats.mood = clamp(S.stats.mood + 4); renderStats(); }
      if (hit === 'hello' || hit === 'love') play('hop', 0.9);
      return say(pick(arr));
    }
  }
}
function setOwner(nm) {
  nm = nm.replace(/[^\p{L}-]/gu, '');
  if (!nm) return say(pick(L().fallback));
  S.owner = nm.charAt(0).toUpperCase() + nm.slice(1).toLowerCase();
  awaitingName = false;
  play('spin', 0.9); hearts(5);
  say(pick(L().nameGot));
  save();
}

$('talk').addEventListener('submit', (e) => {
  e.preventDefault();
  const inp = $('talkInput');
  const v = inp.value.trim();
  if (!v || mode !== 'home') return;
  audioInit();
  youSaid(v); inp.value = '';
  setTimeout(() => reply(v), 450);
});
function renderChips() {
  const c = $('chips'); c.innerHTML = '';
  CHIPS.forEach((txt) => {
    const b = document.createElement('button'); b.textContent = txt;
    b.onclick = () => {
      audioInit();
      if (txt === 'Volám sa…') { const i = $('talkInput'); i.value = 'Volám sa '; i.focus(); return; }
      youSaid(txt); setTimeout(() => reply(txt), 400);
    };
    c.appendChild(b);
  });
}

// ---------- štatistiky ----------
function renderStats() {
  if (!S) return;
  const box = $('stats');
  if (!box.children.length) {
    box.innerHTML = STAT_UI.map((s) => `<div class="stat" data-k="${s.k}"><div class="h"><span>${s.label}</span><i>${s.icon}</i></div><div class="bar"><b></b></div></div>`).join('');
  }
  for (const s of STAT_UI) {
    const v = S.stats[s.k];
    const el = box.querySelector(`[data-k="${s.k}"]`);
    const b = el.querySelector('b');
    b.style.width = v + '%';
    b.style.background = v < 30 ? 'var(--bad)' : v < 60 ? 'var(--mid)' : 'var(--good)';
    el.classList.toggle('low', v < 30);
  }
  const day = Math.floor((Date.now() - S.born) / 864e5) + 1;
  $('petName').textContent = S.name;
  $('petAge').textContent = `${SPECIES[S.species].label} · spolu ${day}. deň`;
  const sleeping = !!S.sleeping;
  document.body.classList.toggle('night', sleeping);
  renderer.toneMappingExposure = sleeping ? 0.5 : 1.05;
  floor.material.opacity = sleeping ? 0.25 : 1;
  $('sleepLabel').textContent = sleeping ? 'Zobudiť' : 'Spať';
  document.querySelectorAll('#actions button').forEach((b) => { b.disabled = (sleeping && b.dataset.act !== 'sleep') || !!game; });
}

// čas beží aj keď je appka zavretá
function advance(ms) {
  const h = ms / 3.6e6;
  if (h <= 0) return;
  const s = S.stats;
  s.full = clamp(s.full + RATES.full * h);
  s.clean = clamp(s.clean + RATES.clean * h);
  const needy = s.full < 30 || s.clean < 30 || s.energy < 25;
  s.mood = clamp(s.mood + (needy ? RATES.moodNeedy : RATES.mood) * h);
  if (S.sleeping) {
    s.energy = clamp(s.energy + RATES.energySleep * h);
    if (s.energy >= 100) { S.sleeping = false; S.wokeUp = true; }
  } else s.energy = clamp(s.energy + RATES.energy * h);
}
let lastTick = Date.now(), lastTalk = Date.now(), nextIdle = Date.now() + 20000, zzzT = 0;
function tick() {
  const now = Date.now();
  const gap = now - lastTick; lastTick = now;
  if (mode !== 'home' || !S) return;
  advance(gap);
  if (gap > 30 * 60e3) say(pick(L().welcomeBack));
  if (S.wokeUp) { S.wokeUp = false; say(pick(L().wake)); play('hop', 0.9); }
  if (S.sleeping && now - zzzT > 1400) { zzzT = now; zzz(); }
  if (!game && now > nextIdle && now - lastTalk > 15000) {
    nextIdle = now + 25000 + Math.random() * 25000;
    if (S.sleeping) { /* spí potichu */ }
    else {
      const n = need();
      if (n) { say(pick(L().need[n])); play('nod', 0.8); }
      else if (Math.random() < 0.7) { say(pick(L().idle)); play(pick(['hop', 'nod', 'shake']), 0.9); }
    }
  }
  renderStats();
  if (now % 5000 < 1000) save();
}
setInterval(tick, 1000);
document.addEventListener('visibilitychange', () => { if (document.hidden) save(); else tick(); });
addEventListener('pagehide', save);

// ---------- akcie ----------
document.querySelectorAll('#actions button').forEach((b) => b.addEventListener('click', () => {
  audioInit();
  ({ feed: openFood, play: startGame, bath: doBath, sleep: toggleSleep })[b.dataset.act]();
}));

function openSheet(html) {
  $('sheet').innerHTML = '<div class="grab"></div>' + html;
  $('sheetWrap').hidden = false;
}
function closeSheet() { $('sheetWrap').hidden = true; }
$('sheetWrap').addEventListener('click', (e) => { if (e.target.id === 'sheetWrap') closeSheet(); });

function openFood() {
  if (S.sleeping) return say(pick(L().sleeping));
  const foods = SPECIES[S.species].foods;
  openSheet(`<h3>Čím nakŕmiš ${S.name}?</h3><div class="grid">${foods.map((f) => `<button data-f="${f.id}"><i>${f.icon}</i>${f.label}</button>`).join('')}</div>`);
  $('sheet').querySelectorAll('[data-f]').forEach((b) => b.onclick = () => { closeSheet(); feed(foods.find((f) => f.id === b.dataset.f)); });
}
function feed(f) {
  const s = S.stats;
  if (s.full >= 95) { say(pick(L().full)); play('shake', 0.8); return; }
  const mouth = toScreen(0, PET_H * 0.6, 0.4);
  particle(f.icon, mouth.x, innerHeight - 140, { dx: 0, dy: mouth.y - (innerHeight - 140), dur: 700, size: 44 });
  setTimeout(() => {
    play('eat', 1.4);
    for (let i = 0; i < 6; i++) particle('•', mouth.x, mouth.y, { dx: (Math.random() - 0.5) * 80, dy: 30 + Math.random() * 40, dur: 700, size: 12, color: '#c9a26b', delay: i * 120 });
    s.full = clamp(s.full + f.full); s.mood = clamp(s.mood + f.mood);
    say(pick(L().fed)); renderStats(); save();
  }, 650);
}
function doBath() {
  if (S.sleeping) return say(pick(L().sleeping));
  const b = SPECIES[S.species].bath;
  const c = toScreen(0, PET_H * 0.5, 0);
  play('shake', 2);
  for (let i = 0; i < 26; i++) {
    const sand = S.species === 'cincila';
    particle(b.particle, c.x + (Math.random() - 0.5) * 160, c.y + 40 + Math.random() * 60, {
      dx: (Math.random() - 0.5) * 140, dy: -60 - Math.random() * 120, dur: 1400,
      size: sand ? 8 + Math.random() * 8 : 18 + Math.random() * 16, color: sand ? '#c8a66e' : undefined, delay: i * 60,
    });
  }
  const wasDirty = S.stats.clean < 50;
  S.stats.clean = 100;
  S.stats.mood = clamp(S.stats.mood + (wasDirty ? 8 : 2));
  setTimeout(() => say(pick(L().bath)), 500);
  renderStats(); save();
}
function toggleSleep() {
  if (game) return;
  S.sleeping = !S.sleeping;
  if (S.sleeping) say(pick(L().sleep)); else { say(pick(L().wake)); play('hop', 0.9); }
  renderStats(); save();
}

// ---------- minihra: chytaj hviezdičky ----------
let game = null;
function startGame() {
  if (S.sleeping) return say(pick(L().sleeping));
  if (game) return;
  if (S.stats.energy < 15) { say(pick(L().howareyou.tired)); return; }
  game = { score: 0, end: Date.now() + 10000 };
  say(pick(L().play));
  play('spin', 0.9);
  $('gameHud').hidden = false;
  renderStats();
  const spawn = () => {
    if (!game) return;
    const left = Math.ceil((game.end - Date.now()) / 1000);
    $('gameTime').textContent = Math.max(0, left);
    if (Date.now() >= game.end) return endGame();
    const st = document.createElement('div');
    st.className = 'star'; st.textContent = pick(['⭐', '⭐', '🌟', '✨']);
    st.style.left = (12 + Math.random() * 76) + '%';
    st.style.top = (26 + Math.random() * 36) + '%';
    st.onpointerdown = (e) => {
      e.stopPropagation();
      if (!game) return;
      game.score++; $('gameScore').textContent = game.score;
      st.classList.add('got'); chirp(1); play('jump', 0.45);
      setTimeout(() => st.remove(), 350);
    };
    document.body.appendChild(st);
    setTimeout(() => { if (!st.classList.contains('got')) { st.classList.add('got'); setTimeout(() => st.remove(), 350); } }, 1500);
    game.timer = setTimeout(spawn, 550 + Math.random() * 300);
  };
  $('gameScore').textContent = '0';
  spawn();
}
function endGame() {
  const sc = game.score; clearTimeout(game.timer); game = null;
  $('gameHud').hidden = true;
  const s = S.stats;
  s.mood = clamp(s.mood + 6 + sc * 3); s.energy = clamp(s.energy - 8); s.full = clamp(s.full - 4); s.clean = clamp(s.clean - 6);
  S.best = Math.max(S.best || 0, sc);
  hearts(Math.min(8, 2 + sc));
  play('hop', 1);
  say(sc === 0 ? 'Nevadí, nabudúce! 😄' : `Chytil si ${sc} ${sc === 1 ? 'hviezdičku' : sc < 5 ? 'hviezdičky' : 'hviezdičiek'}! ${sc >= (S.best || 0) && sc > 3 ? 'Nový rekord!' : ''}`);
  renderStats(); save();
}

// ---------- menu ----------
$('menuBtn').addEventListener('click', () => {
  openSheet(`<h3>${S.name}</h3><div class="list">
    <button data-m="rename">✏️ Premenovať</button>
    <button data-m="sound" class="row"><span>${muted ? '🔇 Zvuk vypnutý' : '🔊 Zvuk zapnutý'}</span></button>
    <button data-m="info">ℹ️ O appke</button>
    <button data-m="new" class="danger">🔄 Nové zvieratko</button>
  </div>`);
  $('sheet').querySelectorAll('[data-m]').forEach((b) => b.onclick = () => menu(b.dataset.m));
});
function menu(m) {
  if (m === 'rename') { closeSheet(); goNaming(true); }
  if (m === 'sound') { muted = !muted; save(); closeSheet(); toast(muted ? 'Zvuk vypnutý' : 'Zvuk zapnutý'); }
  if (m === 'info') {
    openSheet(`<h3>si/tmgc</h3><p style="text-align:center;color:var(--soft);margin:0 0 8px;line-height:1.4">Prototyp cozy Tamagotchi. Zvieratko nemôže umrieť, len ti bude chýbať.<br>Rozhovory sú zatiaľ predpísané, AI príde neskôr.<br>Ťahaj prstom = otáčaš, ťukni = pohladkáš.</p>`);
  }
  if (m === 'new') {
    openSheet(`<h3>Naozaj nové zvieratko?</h3><p style="text-align:center;color:var(--soft);margin:0 0 12px">${S.name} odíde k babke na dedinu 🏡</p><div class="list"><button data-c="yes" class="danger">Áno, chcem nové</button><button data-c="no">Nie, nechám si ${S.name}</button></div>`);
    $('sheet').querySelector('[data-c="yes"]').onclick = () => { closeSheet(); S = null; try { localStorage.removeItem(SAVE_KEY); } catch {} goPick(); };
    $('sheet').querySelector('[data-c="no"]').onclick = closeSheet;
  }
}

// ---------- obrazovky ----------
function show(id) {
  ['pick', 'naming', 'home'].forEach((s) => { $(s).hidden = s !== id; });
  mode = id; resize();
}
function goPick() {
  show('pick');
  document.body.classList.remove('night');
  renderer.toneMappingExposure = 1.05;
  $('dots').innerHTML = ORDER.map(() => '<i></i>').join('');
  renderPick();
}
async function renderPick() {
  const id = ORDER[pickIndex], sp = SPECIES[id];
  $('pickName').textContent = sp.label;
  $('pickNote').textContent = sp.locked ? 'čoskoro 🔒' : 'ťukni naň · potiahni do strany';
  $('pickBtn').disabled = !!sp.locked;
  [...$('dots').children].forEach((d, i) => d.classList.toggle('on', i === pickIndex));
  setBg(sp);
  const obj = await loadModel(id);
  if (ORDER[pickIndex] === id) setPetModel(obj);
}
function stepPick(d) { pickIndex = (pickIndex + d + ORDER.length) % ORDER.length; chirp(1); renderPick(); }
$('prev').onclick = () => { audioInit(); stepPick(-1); };
$('next').onclick = () => { audioInit(); stepPick(1); };
$('pickBtn').onclick = () => { audioInit(); goNaming(false); };

let renaming = false;
function goNaming(isRename) {
  renaming = isRename;
  show('naming');
  const sp = SPECIES[isRename ? S.species : ORDER[pickIndex]];
  $('nameInput').value = isRename ? S.name : pick(sp.names);
  $('backPick').textContent = isRename ? '← späť' : '← späť na výber';
}
$('dice').onclick = () => {
  audioInit();
  const sp = SPECIES[renaming ? S.species : ORDER[pickIndex]];
  const cur = $('nameInput').value;
  let n; do { n = pick(sp.names); } while (n === cur && sp.names.length > 1);
  $('nameInput').value = n;
  const d = $('dice'); d.classList.remove('roll'); void d.offsetWidth; d.classList.add('roll');
  play('jump', 0.5); chirp(2);
};
$('backPick').onclick = () => (renaming ? goHome() : goPick());
$('nameBtn').onclick = () => {
  audioInit();
  const nm = $('nameInput').value.trim().slice(0, 16);
  if (!nm) { $('nameInput').focus(); return; }
  if (renaming) { S.name = nm; save(); goHome(); say(`${nm}? Páči sa mi to!`); return; }
  const now = Date.now();
  S = {
    v: 1, species: ORDER[pickIndex], name: nm, born: now, last: now,
    stats: { full: 70, energy: 80, mood: 75, clean: 90 }, sleeping: false, muted,
  };
  save();
  goHome();
  play('spin', 1);
  hearts(6);
  say(SPECIES[S.species].intro);
  nextIdle = Date.now() + 25000;
};
$('nameInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('nameBtn').click(); });

function setBg(sp) {
  const r = document.documentElement.style;
  r.setProperty('--bg1', sp.bg?.[0] || '#f1eff6');
  r.setProperty('--bg2', sp.bg?.[1] || '#e2dfec');
  document.querySelector('meta[name="theme-color"]').content = sp.bg?.[0] || '#f1eff6';
}
async function goHome() {
  show('home');
  const sp = SPECIES[S.species];
  setBg(sp);
  renderChips();
  setPetModel(await loadModel(S.species));
  lastTick = Date.now();
  renderStats();
}

// ---------- štart ----------
(async function start() {
  resize();
  requestAnimationFrame(frame);
  try {
    if (S && SPECIES[S.species] && !SPECIES[S.species].locked) {
      const gap = Date.now() - (S.last || Date.now());
      advance(gap);
      await goHome();
      if (S.wokeUp) { S.wokeUp = false; say(pick(L().wake)); }
      else if (S.sleeping) say(pick(L().sleeping));
      else if (gap > 30 * 60e3) say(pick(L().welcomeBack));
      else say(pick(L().hello));
      save();
    } else {
      S = null;
      await loadModel(ORDER[0]);
      goPick();
    }
    ORDER.forEach((id) => loadModel(id)); // prednačítaj ostatné
  } catch (err) {
    console.error(err);
    toast('Model sa nenačítal. Skús obnoviť stránku.');
  }
  $('loading').classList.add('out');
  setTimeout(() => $('loading').remove(), 500);
})();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
