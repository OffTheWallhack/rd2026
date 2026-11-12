// Grand Theft Bratislava - main game
import * as THREE from 'three';
import { World, shared, patchCommon, SGrid } from './world.js';
import { HD } from './hd.js';
import { SKY_FRAG } from './hdglsl.js';
import { makeX3 } from './x3.js';
import { loadAssets, ASSETS, HOOK, Car, Person, Ped, DriverAI, carCar } from './actors.js';
import { clamp, lerp, wrapA, rnd, rpick, smooth, hash } from './util.js';
import { Sound } from './sound.js';
import { UI } from './ui.js';

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const MOBILE = isTouch && Math.min(screen.width, screen.height) < 900;
const BASE = (document.querySelector('meta[name=gtb-base]') || {}).content || './';

const G = (window.__gtb = {
  t: 0, tod: 18.4, money: 250, wanted: 0, heat: 0, hp: 100,
  mode: 'load', inCar: null, mission: null, paused: false,
});

// ------------------------------------------------------------------ boot
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
let ascii;
// X3 = život Bratislavy (električky, pešia zóna, polepy, pamiatky); a harmless stub until the world is built
let X3 = { zoneNow: false, obst: () => cars, update() {}, flash() {}, maybeTaxi() {}, livery() {}, goalText: () => '' };
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 2700);
const ui = new UI(G, MOBILE);
const snd = new Sound();
let world;

// lights
const hemi = new THREE.HemisphereLight(0xbfd4ff, 0x5a5040, 1.2);
const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.castShadow = true;
sun.shadow.mapSize.set(MOBILE ? 1024 : 2048, MOBILE ? 1024 : 2048);
const SH = 75;
Object.assign(sun.shadow.camera, { left: -SH, right: SH, top: SH, bottom: -SH, near: 1, far: 600 });
sun.shadow.bias = -0.0015;
sun.shadow.normalBias = 0.6;
scene.add(hemi, sun, sun.target);
const headlight = new THREE.SpotLight(0xffe2b0, 0, 55, 0.55, 0.6, 1.2);
scene.add(headlight, headlight.target);

// sky dome
const skyU = { uSun: shared.uSun, uNight: shared.uNight, uTime: shared.uTime };
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(1800, 32, 16),
  new THREE.ShaderMaterial({
    uniforms: skyU,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: SKY_FRAG,
  })
);
sky.frustumCulled = false;
scene.add(sky);
scene.fog = new THREE.FogExp2(0x8aa0b8, 0.0026);

// markers (mission columns)
const markerGeo = new THREE.CylinderGeometry(1.6, 1.6, 26, 16, 1, true);
markerGeo.translate(0, 13, 0);
function makeMarker(color) {
  const m = new THREE.Mesh(
    markerGeo,
    new THREE.ShaderMaterial({
      uniforms: { uC: { value: new THREE.Color(color) }, uTime: shared.uTime },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      vertexShader: `varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`,
    })
  );
  m.frustumCulled = false;
  return m;
}

// ------------------------------------------------------------------ input
const keys = {};
const input = { mx: 0, my: 0, run: 0, act: 0, atk: 0, hb: 0, camDX: 0, camDrag: 0 };
addEventListener('keydown', (e) => {
  if (e.repeat) return;
  keys[e.code] = 1;
  if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') input.act = 1;
  if (e.code === 'KeyM') ui.toggleMap(world, G);
  if (e.code === 'KeyH') snd.horn(true);
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
  if (G.mode === 'title' && (e.code === 'Space' || e.code === 'Enter')) startGame();
  snd.unlock();
});
addEventListener('keyup', (e) => {
  keys[e.code] = 0;
  if (e.code === 'KeyH') snd.horn(false);
});
let dragging = false, lastX = 0;
canvas.addEventListener('mousedown', (e) => { dragging = true; lastX = e.clientX; snd.unlock(); });
addEventListener('mouseup', () => (dragging = false));
addEventListener('mousemove', (e) => {
  if (dragging) { input.camDX += (e.clientX - lastX) * 0.006; lastX = e.clientX; input.camDrag = 1.5; }
});
ui.bindTouch(input, snd);
ui.onStart = () => startGame();
ui.onPause = () => togglePause();
ui.onDetail = (lvl) => { G.detail = lvl; resize(); };

function readInput() {
  let mx = 0, my = 0;
  if (keys.KeyA || keys.ArrowLeft) mx -= 1;
  if (keys.KeyD || keys.ArrowRight) mx += 1;
  if (keys.KeyW || keys.ArrowUp) my += 1;
  if (keys.KeyS || keys.ArrowDown) my -= 1;
  if (ui.stick.active) { mx = ui.stick.x; my = ui.stick.y; }
  input.mx = mx;
  input.my = my;
  input.run = keys.ShiftLeft || keys.ShiftRight || (ui.stick.active && Math.hypot(ui.stick.x, ui.stick.y) > 0.92) ? 1 : 0;
  input.hb = keys.Space || ui.btn.hb ? 1 : 0;
  input.atk = keys.Space || ui.btn.atk ? 1 : 0;
  input.gas = ui.btn.gas;
  input.brake = ui.btn.brake;
}

// ------------------------------------------------------------------ actors
let player; // Person
const cars = [];
const peds = [];
const police = [];
let playerCar = null;
const fx = [];
const tmpV = new THREE.Vector3();

function spawnCar(kind, x, z, h, paint) {
  const c = new Car(kind, paint);
  c.place(x, z, h, world);
  scene.add(c.obj);
  cars.push(c);
  return c;
}
function removeCar(c) {
  const i = cars.indexOf(c);
  if (i >= 0) cars.splice(i, 1);
  scene.remove(c.obj);
  if (c.siren) c.siren = null;
  const j = police.indexOf(c);
  if (j >= 0) police.splice(j, 1);
}
const KINDS = ['fabka', 'fabka', 'fabka', 'oktavka', 'oktavka', 'oktavka', 'kombi', 'kombi', 'golfik', 'golfik', 'favorit', 'esuv', 'esuv', 'dacik', 'hatch', 'wagon'];

function spawnTraffic(px, pz) {
  for (let tries = 0; tries < 12; tries++) {
    const a = rnd() * Math.PI * 2, d = 70 + rnd() * 110;
    const x = px + Math.sin(a) * d, z = pz + Math.cos(a) * d;
    const ne = world.nearestEdge(x, z, 40);
    if (!ne || ne.e.L < 12) continue;
    const s = clamp(ne.s, 3, ne.e.L - 3);
    World.at(ne.e, s, tmpP);
    const lx = tmpP.x - tmpP.dz * ne.e.lane, lz = tmpP.z + tmpP.dx * ne.e.lane;
    if (cars.some((c) => Math.hypot(c.x - lx, c.z - lz) < 9)) continue;
    if (Math.hypot(lx - px, lz - pz) < 55) continue;
    const c = spawnCar(rpick(KINDS), lx, lz, Math.atan2(tmpP.dx, tmpP.dz));
    X3.maybeTaxi(c);
    c.driver = 'ai';
    c.ai = new DriverAI(c, world, ne.e, s);
    const sp = Math.min(ne.e.v, 9);
    c.vx = tmpP.dx * sp; c.vz = tmpP.dz * sp;
    return c;
  }
}
const tmpP = {};
function spawnParked(px, pz) {
  for (let tries = 0; tries < 10; tries++) {
    const a = rnd() * Math.PI * 2, d = 50 + rnd() * 90;
    const ne = world.nearestEdge(px + Math.sin(a) * d, pz + Math.cos(a) * d, 40);
    if (!ne || ne.e.r.c > 2 || ne.e.L < 14) continue;
    const s = clamp(ne.s, 4, ne.e.L - 4);
    World.at(ne.e, s, tmpP);
    const off = ne.e.r.w / 2 - 1.05;
    const x = tmpP.x - tmpP.dz * off, z = tmpP.z + tmpP.dx * off;
    if (cars.some((c) => Math.hypot(c.x - x, c.z - z) < 6)) continue;
    if (Math.hypot(x - px, z - pz) < 40) continue;
    const c = spawnCar(rpick(KINDS), x, z, Math.atan2(tmpP.dx, tmpP.dz));
    c.parked = true;
    return c;
  }
}

function spawnPed(px, pz, near) {
  const list = world.pedGrid.query(px, pz, 70, []);
  for (let tries = 0; tries < 8 && list.length; tries++) {
    const e = rpick(list);
    const s = rnd() * e.L;
    World.at(e, s, tmpP);
    const d = Math.hypot(tmpP.x - px, tmpP.z - pz);
    if (d < (near ? 10 : 26) || d > 72) continue;
    if (world.onDeck(tmpP.x, tmpP.z, 999) && !e.sw) continue;
    const p = new Ped(world, e, s);
    scene.add(p.p.obj);
    peds.push(p);
    return p;
  }
}
function removePed(p) {
  const i = peds.indexOf(p);
  if (i >= 0) peds.splice(i, 1);
  scene.remove(p.p.obj);
}

// police
function spawnPolice(px, pz) {
  for (let tries = 0; tries < 10; tries++) {
    const a = rnd() * Math.PI * 2, d = 90 + rnd() * 60;
    const ne = world.nearestEdge(px + Math.sin(a) * d, pz + Math.cos(a) * d, 50);
    if (!ne) continue;
    World.at(ne.e, ne.s, tmpP);
    if (Math.hypot(tmpP.x - px, tmpP.z - pz) < 70) continue;
    const pk = rpick(['kombi', 'kombi', 'esuv', 'golfik']);
    const c = spawnCar(pk, tmpP.x, tmpP.z, Math.atan2(tmpP.dx, tmpP.dz), '#eef0f2');
    c.driver = 'police';
    c.ai = new DriverAI(c, world, ne.e, ne.s);
    c.ai.mode = 'chase';
    X3.livery(c, pk === 'esuv' ? 'pz25' : 'pz');
    police.push(c);
    return c;
  }
}

// ------------------------------------------------------------------ player state
const pState = { vy: 0, punchT: 0, hurtT: 0 };
function setPlayerPos(x, z) {
  player.x = x; player.z = z;
  player.y = world.surfaceY(x, z);
  player.sync();
}
function enterCar(c) {
  if (c.driver === 'ai' || c.driver === 'police') {
    // pull the driver out
    const p = new Ped(world, world.pedEdges[0], 0);
    p.p.x = c.x - Math.cos(c.h) * 1.6; p.p.z = c.z + Math.sin(c.h) * 1.6;
    scene.add(p.p.obj);
    peds.push(p);
    p.flee(player.x, player.z);
    addCrime(c.driver === 'police' ? 2 : 1, 'krádež auta');
    snd.shout();
  } else if (c.parked && !c.safe && rnd() < 0.35) {
    c.alarm = 6;
    addCrime(1, 'alarm');
  }
  c.driver = 'player';
  c.ai = null;
  c.parked = false;
  playerCar = c;
  G.inCar = c;
  player.obj.visible = false;
  const i = police.indexOf(c);
  if (i >= 0) police.splice(i, 1);
  snd.door();
  ui.flashHint('');
  if (G.mission && G.mission.onEnter) G.mission.onEnter(c);
}
function exitCar() {
  const c = playerCar;
  if (!c) return;
  const sx = -Math.cos(c.h), sz = Math.sin(c.h); // left side (driver)
  let x = c.x + sx * 1.7, z = c.z + sz * 1.7;
  if (world.collide(x, z, c.y, 0.4, hit)) { x = c.x - sx * 1.7; z = c.z - sz * 1.7; }
  c.driver = null;
  c.thr = 0; c.st = 0; c.hb = 1;
  playerCar = null;
  G.inCar = null;
  player.obj.visible = true;
  player.h = c.h;
  setPlayerPos(x, z);
  snd.door();
}
const hit = {};

function addCrime(n, why) {
  if (n <= 0) return;
  if (G.mode !== 'play') return;
  G.heat += n;
  const lvl = clamp(Math.floor(G.heat), 0, 5);
  if (lvl > G.wanted) {
    G.wanted = lvl;
    ui.toast('HĽADANÝ ' + '★'.repeat(lvl) + (why ? ' · ' + why : ''));
  }
  G.coolT = 0;
}

// ------------------------------------------------------------------ missions
const LOC = {
  start: [2187, 1704],
  contact: [2099, 1566], // Hviezdoslavovo namestie
  race: [1874, 1772], // Razusovo nabrezie pri Moste SNP
  garage: [2066, 2110], // Petrzalka, pod UFOm
  hospital: [2254, 1626],
  contacts: [], // [x, z, name] - kseftari po celom meste
  races: [],
};
// dalsie body v inych stvrtiach: [lon, lat, nazov]
const SPOTS = {
  contacts: [[17.1107, 48.1128, 'Petržalka'], [17.1049, 48.1010, 'Petržalka – Lúky'], [17.1492, 48.1528, 'Ružinov'], [17.1385, 48.1430, 'Nivy'], [17.1985, 48.1440, 'Vrakuňa'], [17.2060, 48.1265, 'Podunajské Biskupice']],
  races: [[17.1235, 48.1170, 'Petržalka'], [17.1620, 48.1470, 'Ružinov'], [17.1900, 48.1395, 'Vrakuňa']],
};
const DISTRICTS = [[17.106, 48.146, 'Staré Mesto'], [17.118, 48.151, 'Staré Mesto'], [17.092, 48.146, 'Staré Mesto'], [17.132, 48.146, 'Nivy'], [17.128, 48.139, 'Nivy'], [17.152, 48.152, 'Ružinov'], [17.150, 48.142, 'Ružinov'], [17.172, 48.150, 'Ružinov – Trnávka'], [17.165, 48.138, 'Ružinov – Prievoz'], [17.197, 48.144, 'Vrakuňa'], [17.207, 48.137, 'Vrakuňa'], [17.203, 48.125, 'Podunajské Biskupice'], [17.180, 48.126, 'Vlčie hrdlo'], [17.165, 48.112, 'Vlčie hrdlo'], [17.150, 48.130, 'Prístav'], [17.110, 48.130, 'Petržalka'], [17.108, 48.118, 'Petržalka'], [17.125, 48.122, 'Petržalka'], [17.105, 48.103, 'Petržalka'], [17.130, 48.108, 'Petržalka'], [17.088, 48.125, 'Petržalka'], [17.145, 48.100, 'Petržalka']];
const ll = (lon, lat) => { const m = world.d.meta; return [(lon - m.lon0) * m.mx, (m.lat1 - lat) * m.my]; };
function districtAt(x, z) {
  let best = '', bd = 1e9;
  for (const d of DISTRICTS) {
    if (!d.p) d.p = ll(d[0], d[1]);
    const dd = Math.hypot(d.p[0] - x, d.p[1] - z);
    if (dd < bd) { bd = dd; best = d[2]; }
  }
  return best;
}
function setupSpots() {
  LOC.contacts.push([LOC.contact[0], LOC.contact[1], 'Staré Mesto']);
  LOC.races.push([LOC.race[0], LOC.race[1], 'Staré Mesto']);
  for (const kind of ['contacts', 'races'])
    for (const [lon, lat, name] of SPOTS[kind]) {
      const [x, z] = ll(lon, lat);
      // najblizsia cesta na suchu (nie most, nie voda)
      let best = null, bd = 1e9;
      for (const sg of world.edgeGrid.query(x, z, 450, [])) {
        const e = sg.e;
        if (e.r.b || e.L < 12 || e.r.c > 3) continue;
        World.at(e, e.L / 2, tmpP);
        const off = e.r.w / 2 + (kind === 'races' ? -1.5 : 2.2);
        const sx = tmpP.x - tmpP.dz * off, sz = tmpP.z + tmpP.dx * off;
        if (world.hAt(sx, sz) < world.water + 1.5) continue;
        const d = Math.hypot(sx - x, sz - z);
        if (d < bd) { bd = d; best = [sx, sz, name]; }
      }
      if (best) LOC[kind].push(best);
    }
}
// pamiatky mimo Starého Mesta: [názov, lon, lat, polomer]
const MORE_LM = [
  ['Most Apollo', 17.1281, 48.1372, 60], ['Eurovea a nové SND', 17.1215, 48.1405, 60], ['Starý most', 17.1167, 48.1385, 45],
  ['Sad Janka Kráľa', 17.1090, 48.1345, 70], ['Prístavný most', 17.1390, 48.1340, 70], ['Veľký Draždiak', 17.1195, 48.1095, 90],
  ['Štrkovecké jazero', 17.1510, 48.1545, 80], ['Zimný prístav', 17.1420, 48.1400, 90], ['Malý Dunaj vo Vrakuni', 17.1990, 48.1425, 80],
  ['Slovnaft', 17.1790, 48.1270, 160],
];
const nearestSpot = (list, x, z) => { let b = null, bd = 1e9; for (const s of list) { const d = Math.hypot(s[0] - x, s[1] - z); if (d < bd) { bd = d; b = s; } } return b; };
const markers = {};
window.__gtbLOC = LOC;
window.__gtbPos = () => ({ x: playerCar ? playerCar.x : player.x, z: playerCar ? playerCar.z : player.z, h: playerCar ? playerCar.h : player.h, goal: G.mission ? G.mission.goal() : null });
function placeMarker(id, x, z, color) {
  let m = markers[id];
  if (!m) { m = markers[id] = makeMarker(color); scene.add(m); }
  m.material.uniforms.uC.value.set(color);
  m.position.set(x, world.surfaceY(x, z), z);
  m.visible = true;
  return m;
}
function hideMarker(id) { if (markers[id]) markers[id].visible = false; }

function idleMarkers() {
  LOC.contacts.forEach((c, i) => placeMarker('contact' + i, c[0], c[1], '#ffcc33'));
  LOC.races.forEach((c, i) => placeMarker('race' + i, c[0], c[1], '#33e0ff'));
  hideMarker('target');
  hideMarker('cp');
}

function startTheft() {
  // pick a parked spot 250-600 m away on a residential street
  let spot = null;
  const cand = world.edgeGrid.query(player.x, player.z, 650, []);
  for (let i = 0; i < 80 && !spot && cand.length; i++) {
    const e = rpick(cand).e;
    if (e.r.c > 2 || e.L < 20 || e.r.b) continue;
    const mx = e.p[0][0], mz = e.p[0][1];
    const d = Math.hypot(mx - player.x, mz - player.z);
    if (d < 220 || d > 650) continue;
    World.at(e, e.L / 2, tmpP);
    const off = e.r.w / 2 - 1.05;
    spot = [tmpP.x - tmpP.dz * off, tmpP.z + tmpP.dx * off, Math.atan2(tmpP.dx, tmpP.dz), e.r.n];
  }
  if (!spot) return;
  const kind = rpick(['fabka', 'oktavka', 'kombi', 'golfik', 'favorit', 'esuv', 'dacik']);
  const cols = [['#c8102e', 'červen'], ['#ffd400', 'žlt'], ['#0a7d4f', 'zelen'], ['#ff6a00', 'oranžov'], ['#7b2cbf', 'fialov']];
  const [paint, stem] = rpick(cols);
  const d = ASSETS.cars[kind].def;
  const pname = stem + { f: 'ú', m: 'ého', n: 'é', i: 'ý' }[d.g];
  const names = { [kind]: d.acc_ };
  const c = spawnCar(kind, spot[0], spot[1], spot[2], paint);
  c.parked = true;
  c.keep = true;
  c.target = true;
  const M = {
    type: 'theft',
    car: c,
    text: `Ukradni ${pname} ${names[kind]}${spot[3] ? ' · ' + spot[3] : ''}`,
    goal: () => (playerCar === c ? { x: LOC.garage[0], z: LOC.garage[1] } : { x: c.x, z: c.z }),
    onEnter(car) {
      if (car === c) {
        M.text = 'Dovez auto do garáže pod UFOm (Petržalka)';
        ui.toast('Máš ho! Teraz do garáže pod Mostom SNP.');
        addCrime(1, 'majiteľ volá políciu');
        hideMarker('target');
        placeMarker('garage', ...LOC.garage, '#7dff6a');
      }
    },
    update() {
      if (!cars.includes(c)) return fail('Auto je preč.');
      if (c.dmg > 260) return fail('Auto je na šrot.');
      if (playerCar !== c) placeMarker('target', c.x, c.z, '#ff4fd8');
      if (playerCar === c && Math.hypot(c.x - LOC.garage[0], c.z - LOC.garage[1]) < 9 && c.speed < 4) {
        const pay = Math.round((1400 - Math.min(c.dmg, 260) * 3.5) / 10) * 10 + (G.wanted ? 0 : 200);
        finish(`Auto doručené! +${pay} €`, pay);
        exitCar();
        removeCar(c);
      }
    },
  };
  hideMarker('contact');
  hideMarker('race');
  G.mission = M;
  ui.toast('KŠEFT: ' + M.text);
  snd.blip();
}

function startRace() {
  // random walk on the road graph from the nearest node
  const ne = world.nearestEdge(player.x, player.z, 80);
  if (!ne) return;
  let e = ne.e;
  const cps = [];
  let last = { x: player.x, z: player.z };
  let guard = 0;
  while (cps.length < 8 && guard++ < 400) {
    const outs = e.b.out.filter((o) => o !== e.rev && o.r.c >= 1);
    if (!outs.length) break;
    e = rpick(outs);
    const p = e.p[e.p.length - 1];
    if (Math.hypot(p[0] - last.x, p[1] - last.z) > 110 && p[0] > 30 && p[1] > 30 && p[0] < world.W - 30 && p[1] < world.H - 30) {
      cps.push({ x: p[0], z: p[1] });
      last = { x: p[0], z: p[1] };
    }
  }
  if (cps.length < 4) return ui.toast('Trať sa nepodarilo nájsť');
  const M = {
    type: 'race',
    i: 0,
    t: 0,
    cps,
    par: cps.length * 14,
    text: '',
    goal: () => M.cps[M.i],
    update(dt) {
      M.t += dt;
      const cp = M.cps[M.i];
      placeMarker('cp', cp.x, cp.z, '#33e0ff');
      M.text = `Preteky · checkpoint ${M.i + 1}/${M.cps.length} · ${M.t.toFixed(1)} s`;
      const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
      if (Math.hypot(px - cp.x, pz - cp.z) < 10) {
        M.i++;
        snd.blip();
        if (M.i >= M.cps.length) {
          const pay = Math.max(100, Math.round((M.par * 2 - M.t) * 12 / 10) * 10);
          finish(`Cieľ! ${M.t.toFixed(1)} s · +${pay} €`, pay);
        }
      }
    },
  };
  hideMarker('contact');
  hideMarker('race');
  G.mission = M;
  ui.toast('PRETEKY! Prejdi všetky checkpointy.');
  snd.blip();
}
function finish(msg, pay) {
  G.money += pay;
  ui.big('MISIA SPLNENÁ', msg, '#7dff6a');
  snd.win();
  G.mission = null;
  hideMarker('garage');
  hideMarker('target');
  hideMarker('cp');
  setTimeout(idleMarkers, 2500);
}
function fail(msg) {
  ui.big('MISIA ZLYHALA', msg, '#ff5a4a');
  G.mission = null;
  hideMarker('garage');
  hideMarker('target');
  hideMarker('cp');
  setTimeout(idleMarkers, 2500);
}

// ------------------------------------------------------------------ busted / wasted
function respawn(title, sub, color, loseFrac) {
  G.mode = 'dead';
  ui.big(title, sub, color, 3.2);
  snd.fail();
  setTimeout(() => {
    if (playerCar) exitCar();
    G.money = Math.max(0, Math.round(G.money * (1 - loseFrac)));
    G.wanted = 0;
    G.heat = 0;
    G.hp = 100;
    for (const p of police.slice()) removeCar(p);
    if (G.mission) { G.mission = null; hideMarker('garage'); hideMarker('target'); hideMarker('cp'); }
    idleMarkers();
    {
      const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
      const far = Math.hypot(px - LOC.hospital[0], pz - LOC.hospital[1]) > 1400;
      const hs = far ? nearestSpot(LOC.contacts, px, pz) : null;
      const hx = hs ? hs[0] + 3 : LOC.hospital[0], hz = hs ? hs[1] + 3 : LOC.hospital[1];
      if (playerCar) exitCar();
      setPlayerPos(hx, hz);
      world.prime(hx, hz);
    }
    player.play('idle');
    G.mode = 'play';
  }, 3200);
}

// ------------------------------------------------------------------ game start
async function boot() {
  ui.loading(0.02, 'Načítavam mapu Bratislavy…');
  try { await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'), document.fonts.load('400 40px Anton')]); } catch (e) {}
  ascii = new HD(renderer);
  const res = await fetch(BASE + 'world.json');
  const data = await res.json();
  ui.loading(0.25, 'Staviam mesto…');
  await new Promise((r) => setTimeout(r, 30));
  world = new World(data, BASE, { mobile: MOBILE });
  await world.init((p) => ui.loading(0.25 + p * 0.15, 'Staviam mesto…'));
  scene.add(world.group);
  G.world = world;
  setupSpots();
  ui.loading(0.42, 'Staviam Staré Mesto…');
  await new Promise((r) => setTimeout(r, 30));
  await world.prime(...LOC.start);
  ui.loading(0.55, 'Načítavam autá a ľudí…');
  await loadAssets(BASE + 'models/', (p) => ui.loading(0.55 + p * 0.4, 'Načítavam autá a ľudí…'));
  player = new Person(0, false);
  scene.add(player.obj);
  setPlayerPos(...LOC.start);
  try {
    const m = world.d.meta;
    X3 = makeX3({
      Fe: world, Wt: scene, Tt: cars, Pn: peds, Ln: police, we: player, pc: () => playerCar, q: G, Ve: ui, vt: snd, Kn: MOBILE, an: shared, Xs: patchCommon,
      Ye: clamp, Ge: lerp, Xn: wrapA, ct: rnd, en: rpick, fn: hash, Zs: addCrime, mh: shake, Zn: pState, Yn: ASSETS, Ks: spawnCar, SGrid, OX: m.ox, OZ: m.oz,
      moreLandmarks: MORE_LM.map(([n, lon, lat, r]) => [n, ...ll(lon, lat), r]),
    });
    HOOK.mat = (mat) => (mat.name === 'Plate' ? X3.plateMat() : X3.gloss(mat));
    X3.init();
    G.x3 = () => X3;
  } catch (e) { console.error('X3', e); }
  player.h = Math.PI;
  idleMarkers();
  // a starter car parked right next to the player
  const ne = world.nearestEdge(LOC.start[0], LOC.start[1] + 30, 60);
  if (ne) {
    World.at(ne.e, clamp(ne.s, 5, ne.e.L - 5), tmpP);
    const off = ne.e.r.w / 2 - 1.05;
    const c = spawnCar('golfik', tmpP.x - tmpP.dz * off, tmpP.z + tmpP.dx * off, Math.atan2(tmpP.dx, tmpP.dz), '#b8352b');
    c.parked = true;
    c.safe = true;
    c.keep = true;
  }
  for (let i = 0; i < 10; i++) spawnPed(player.x, player.z, true);
  resize();
  ui.loading(1, '');
  ui.ready();
  G.mode = 'title';
  G.titleCam = 0;
  requestAnimationFrame(loop);
}
function startGame() {
  if (G.mode !== 'title') return;
  snd.unlock();
  snd.start();
  G.mode = 'play';
  ui.play();
  G.camYaw = player.h + Math.PI;
}
function togglePause() {
  if (G.mode === 'title') return;
  G.paused = !G.paused;
  ui.pause(G.paused);
  snd.mute(G.paused);
}

// ------------------------------------------------------------------ resize
function resize() {
  if (!ascii) return;
  const lvl = G.detail ?? 1;
  const cap = MOBILE ? [2, 1.5, 1.1][lvl] : [2, 1.5, 1][lvl];
  const dpr = Math.min(window.devicePixelRatio || 1, cap);
  const w = Math.floor(innerWidth * dpr), h = Math.floor(innerHeight * dpr);
  canvas.width = w;
  canvas.height = h;
  renderer.setSize(w, h, false);
  renderer.setViewport(0, 0, w, h);
  const r = ascii.setSize(w, h, 1, MOBILE ? [4, 0, 0][lvl] : [4, 4, 0][lvl]);
  camera.aspect = r.aspect;
  const portrait = r.aspect < 1;
  camera.fov = portrait ? 74 : 58;
  camera.updateProjectionMatrix();
  G.portrait = portrait;
}
addEventListener('resize', resize);

// ------------------------------------------------------------------ main loop
let last = performance.now();
let spawnT = 0;
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
let camInit = false;
G.camYaw = 0;

function loop(now) {
  requestAnimationFrame(loop);
  let dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (G.fixedDt) dt = G.fixedDt;
  if (G.noLoop) return;
  if (G.paused) { ascii.render(scene, camera); return; }
  step(dt);
  ascii.render(scene, camera);
}
G.step = step;
G.cars = cars; G.peds = peds; G.police = police;
G.pl = () => player; G.pc = () => playerCar;
G.key = (code, down) => dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code }));
G.spawn = (k, x, z, h, p) => { const c = spawnCar(k, x, z, h, p); c.parked = true; c.keep = true; return c; };
G.tp = async (x, z) => { if (playerCar) exitCar(); await world.prime(x, z); setPlayerPos(x, z); };
G.ll = (lon, lat) => ll(lon, lat);
G.LOC = LOC;
G.hY = (x, z) => world.hAt(x, z);
G.render = () => ascii.render(scene, camera);

function step(dt) {
  G.t += dt;
  shared.uTime.value = G.t;
  readInput();
  if (G.mode === 'play' || G.mode === 'dead') G.tod = (G.tod + dt / 40) % 24;
  updateSky();
  if (G.mode === 'title') {
    world.update(TCX, TCZ, 6);
    titleCam(dt);
    updateWorldActors(dt, false);
    X3.update(dt, true);
    return;
  }
  {
    const f = playerCar || player;
    const sp = playerCar ? Math.min(60, Math.abs(playerCar.speed) * 4) : 0;
    world.update(f.x + Math.sin(f.h) * sp, f.z + Math.cos(f.h) * sp, MOBILE ? 4 : 6);
  }
  if (G.mode === 'play') updatePlayer(dt);
  else player.mixer.update(dt);
  updateWorldActors(dt, true);
  X3.update(dt, false);
  updatePolice(dt);
  if (G.mission && G.mode === 'play') G.mission.update(dt);
  // marker triggers
  if (!G.mission && G.mode === 'play') {
    const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
    const cs = nearestSpot(LOC.contacts, px, pz), rs = nearestSpot(LOC.races, px, pz);
    if (cs && Math.hypot(px - cs[0], pz - cs[1]) < 4) startTheft();
    else if (rs && Math.hypot(px - rs[0], pz - rs[1]) < 6) startRace();
  }
  updateCamera(dt);
  if (G.dbgCam) { const d = G.dbgCam; camera.position.set(d[0], d[1], d[2]); camera.lookAt(d[3], d[4], d[5]); sky.position.copy(camera.position); placeShadow(d[3], d[5]); }
  updateHUD(dt);
  snd.update(G, playerCar, police, camera);
}

// day/night
function updateSky() {
  const tod = G.tod;
  const el = Math.sin(((tod - 6.2) / 12) * Math.PI) * 0.95; // radians-ish
  const az = ((tod - 6.2) / 12) * Math.PI + Math.PI / 2;
  const sunDir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize();
  skyU.uSun.value.copy(sunDir);
  const night = smooth(clamp((0.04 - sunDir.y) / 0.16, 0, 1));
  shared.uNight.value = night;
  const sunset = clamp(1 - Math.abs(sunDir.y - 0.05) / 0.3, 0, 1) * (1 - night);
  const day = 1 - night;
  // light colours
  sun.color.setRGB(1, lerp(0.95, 0.62, sunset), lerp(0.88, 0.38, sunset));
  sun.intensity = day * lerp(3.2, 2.2, sunset) * clamp(sunDir.y * 6, 0, 1);
  hemi.color.setRGB(lerp(0.12, lerp(0.75, 0.9, sunset), day), lerp(0.16, lerp(0.85, 0.65, sunset), day), lerp(0.32, lerp(1.0, 0.6, sunset), day));
  hemi.groundColor.setRGB(lerp(0.05, 0.42, day), lerp(0.05, 0.36, day), lerp(0.07, 0.3, day));
  hemi.intensity = lerp(0.7, 1.15, day);
  // moon at night
  if (night > 0.5) {
    sun.intensity = 0.35 * night;
    sun.color.setRGB(0.55, 0.65, 1.0);
    sunDir.set(0.3, 0.8, 0.4).normalize();
  }
  G.sunDir = sunDir;
  const fogC = new THREE.Color().setRGB(lerp(0.03, lerp(0.62, 0.85, sunset), day), lerp(0.04, lerp(0.72, 0.5, sunset), day), lerp(0.08, lerp(0.85, 0.36, sunset), day));
  scene.fog.color.copy(fogC);
  scene.fog.density = lerp(0.002, MOBILE ? 0.0014 : 0.0009, day);
  world.lampHeadMat.color.setRGB(lerp(0.5, 3.0, night), lerp(0.45, 2.4, night), lerp(0.35, 1.5, night));
  if (world.ufoRing) world.ufoRing.material.color.setRGB(lerp(0.6, 3, night), lerp(0.5, 2.2, night), lerp(0.3, 1.2, night));
  ascii.exposure.value = lerp(1.0, 1.55, night);
}

// title camera: slow orbit around the castle / old town
const TCX = 1804, TCZ = 1476;
function titleCam(dt) {
  G.titleCam += dt * 0.035;
  const cx = TCX, cz = TCZ;
  const a = G.titleCam + 2.2;
  camera.position.set(cx + Math.sin(a) * 330, world.hAt(cx, cz) + 95, cz + Math.cos(a) * 330);
  camera.lookAt(cx, world.hAt(cx, cz) + 20, cz);
  placeShadow(cx, cz);
}

function placeShadow(x, z) {
  const d = G.sunDir || new THREE.Vector3(0, 1, 0);
  const snap = (SH * 2) / sun.shadow.mapSize.x;
  x = Math.round(x / snap) * snap;
  z = Math.round(z / snap) * snap;
  const y = world.hAt(x, z);
  sun.target.position.set(x, y, z);
  sun.position.set(x + d.x * 250, y + d.y * 250, z + d.z * 250);
  sun.target.updateMatrixWorld();
}

// ------------------------------------------------------------------ player update
function updatePlayer(dt) {
  if (input.act) {
    input.act = 0;
    if (playerCar) {
      if (playerCar.speed < 6) exitCar();
    } else {
      const c = nearestCar(3.6);
      if (c) enterCar(c);
    }
  }
  if (playerCar) {
    const c = playerCar;
    let thr = input.my;
    if (input.gas) thr = 1;
    if (input.brake) thr = -1;
    c.thr = thr;
    c.st = -input.mx;
    c.hb = input.hb;
    player.x = c.x; player.z = c.z; player.y = c.y;
    if (c.alarm > 0) c.alarm -= dt;
    ui.hint('');
    return;
  }
  // on foot
  const P = player;
  const mag = Math.min(1, Math.hypot(input.mx, input.my));
  if (pState.punchT > 0) pState.punchT -= dt;
  if (input.atk && pState.punchT <= 0) {
    pState.punchT = 0.7;
    P.play('punch', 0.08, 1.4);
    setTimeout(() => punchHit(), 220);
  }
  if (mag > 0.08 && pState.punchT <= 0.25) {
    const ang = Math.atan2(input.mx, input.my);
    const yaw = G.camYaw + Math.PI - ang;
    const fx = Math.sin(yaw), fz = Math.cos(yaw);
    const sp = input.run ? 5.2 : 0.9 + 0.75 * mag;
    P.h += wrapA(yaw - P.h) * clamp(dt * 10, 0, 1);
    P.x += fx * sp * dt;
    P.z += fz * sp * dt;
    P.play(sp > 3.5 ? 'run' : 'walk', 0.2, sp > 3.5 ? 1.0 : 0.55 + sp * 0.28);
  } else if (pState.punchT <= 0.25) P.play('idle', 0.25);
  // collisions: walls, cars
  if (world.collide(P.x, P.z, P.y, 0.35, hit)) { P.x = hit.x; P.z = hit.z; }
  for (const c of cars) {
    const sh = Math.sin(c.h), ch = Math.cos(c.h);
    for (const o of [c.off, -c.off]) {
      const dx = P.x - (c.x + sh * o), dz = P.z - (c.z + ch * o);
      const d = Math.hypot(dx, dz), R = c.r + 0.3;
      if (d < R && d > 1e-3) {
        P.x += (dx / d) * (R - d);
        P.z += (dz / d) * (R - d);
        const rel = c.speed;
        if (rel > 6 && pState.hurtT <= 0) {
          G.hp -= rel * 2.2;
          pState.hurtT = 1;
          snd.crash(rel * 0.5);
          ui.flash('#ff2a2a', 0.35);
        }
      }
    }
  }
  if (pState.hurtT > 0) pState.hurtT -= dt;
  P.x = clamp(P.x, 2, world.W - 2);
  P.z = clamp(P.z, 2, world.H - 2);
  const gy = world.surfaceY(P.x, P.z, P.y + 0.8);
  P.y += (gy - P.y) * clamp(dt * 14, 0, 1);
  if (P.y < world.water - 1.2) {
    G.hp = 0;
  }
  P.mixer.update(dt);
  P.sync();
  if (G.hp <= 0) respawn('ZRAZENÝ', 'Prebúdzaš sa v nemocnici · -10 %', '#ff5a4a', 0.1);
  // hint near car
  const nc = nearestCar(3.6);
  ui.hint(nc ? (MOBILE ? 'NASTÚP' : '[E] nastúp') : '');
}
function nearestCar(r) {
  let best = null, bd = r;
  for (const c of cars) {
    const d = Math.hypot(c.x - player.x, c.z - player.z);
    if (d < bd && c.speed < 7 && c.burn === undefined) { bd = d; best = c; }
  }
  return best;
}
function punchHit() {
  const fx = Math.sin(player.h), fz = Math.cos(player.h);
  for (const p of peds) {
    const dx = p.x - player.x, dz = p.z - player.z;
    const d = Math.hypot(dx, dz);
    if (d < 1.6 && (dx * fx + dz * fz) / (d || 1) > 0.3) {
      snd.punch();
      p.hp--;
      if (p.hp <= 0) { p.knock(fx * 2, fz * 2, false); G.money += Math.floor(rnd() * 30) + 5; }
      else p.flee(player.x, player.z);
      for (const o of peds) if (o !== p && Math.hypot(o.x - p.x, o.z - p.z) < 18) o.flee(player.x, player.z);
      addCrime(0.34, 'bitka');
      return;
    }
  }
  snd.whoosh();
}

// ------------------------------------------------------------------ world actors
function updateWorldActors(dt, active) {
  const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
  spawnT -= dt;
  if (spawnT <= 0) {
    spawnT = 0.35;
    const nTraffic = MOBILE ? 14 : 22, nParked = MOBILE ? 10 : 16, nPed = Math.round((MOBILE ? 16 : 26) * (X3.zoneNow ? 1.6 : 1));
    let tr = 0, pk = 0;
    for (const c of cars) { if (c.driver === 'ai') tr++; else if (c.parked) pk++; }
    if (tr < nTraffic) spawnTraffic(px, pz);
    if (pk < nParked) spawnParked(px, pz);
    if (peds.length < nPed) spawnPed(px, pz, false);
    // despawn far
    for (const c of cars.slice()) {
      if (c === playerCar || c.keep || c.driver === 'police') continue;
      if (Math.hypot(c.x - px, c.z - pz) > 230) removeCar(c);
    }
    for (const p of peds.slice()) if (Math.hypot(p.x - px, p.z - pz) > 105 || (p.state === 'down' && p.t < 0)) removePed(p);
  }
  // AI
  const t = G.t;
  for (const c of cars) {
    if (c.ai && c.driver !== 'police') c.ai.update(dt, X3.obst(), t, playerCar ? null : player, null);
    if (c.burn !== undefined) { c.thr = 0; c.st = 0; }
  }
  // physics substeps
  const n = 2, h = dt / n;
  for (let s = 0; s < n; s++) {
    for (const c of cars) {
      if (c.parked && c.speed < 0.05 && !c.hitT) { c.vx = c.vz = 0; continue; }
      if (!c.driver && !c.parked) { c.thr = 0; c.st = 0; c.hb = 1; }
      c.step(h, world, cars);
      if (c.impact > 5 && c === playerCar) { snd.crash(c.impact); shake(c.impact * 0.02); }
    }
    for (let i = 0; i < cars.length; i++)
      for (let j = i + 1; j < cars.length; j++) {
        const a = cars[i], b = cars[j];
        const imp = carCar(a, b);
        if (imp > 0.5) {
          a.hitT = b.hitT = 3;
          if (a.parked) a.parked = false;
          if (b.parked) b.parked = false;
          if (imp > 3) {
            a.dmg += imp * 2; b.dmg += imp * 2;
            if (a === playerCar || b === playerCar) {
              snd.crash(imp);
              shake(imp * 0.025);
              const other = a === playerCar ? b : a;
              if (other.driver === 'police') addCrime(1, 'útok na políciu');
              if (other.ai && other.driver === 'ai') { other.ai.stuck = 0; if (imp > 6) other.angry = 4; }
            }
          }
        }
      }
  }
  for (const c of cars) {
    if (c.hitT) c.hitT = Math.max(0, c.hitT - dt);
    c.sync(world, dt);
    c.lights(shared.uNight.value, c.thr < -0.1 && c.fwd > 0.5);
    if (c.bar) X3.flash(c);
    // burning wrecks
    if (c.dmg > 300 && c.burn === undefined) {
      c.burn = 12;
      c.obj.traverse((o) => { if (o.isMesh) { o.material = o.material.clone ? o.material.clone() : o.material; if (o.material.color) o.material.color.multiplyScalar(0.25); } });
      addFire(c);
      snd.boom();
      if (c === playerCar) { exitCar(); G.hp -= 60; ui.flash('#ff8a2a', 0.6); }
      for (const p of peds) if (Math.hypot(p.x - c.x, p.z - c.z) < 20) p.flee(c.x, c.z);
    }
    if (c.burn !== undefined) {
      c.burn -= dt;
      if (c.burn < -20 && c !== playerCar && !c.keep) { removeCar(c); break; }
    }
  }
  // pedestrians
  for (const p of peds) {
    p.update(dt, world);
    if (p.state === 'down') continue;
    for (const c of cars) {
      const sp = c.speed;
      if (sp < 2.5) continue;
      const sh = Math.sin(c.h), ch = Math.cos(c.h);
      const dx = p.x - c.x, dz = p.z - c.z;
      const f = dx * sh + dz * ch, l = dx * ch - dz * sh;
      if (Math.abs(f) < c.len / 2 + 0.3 && Math.abs(l) < c.wid / 2 + 0.3) {
        p.knock(c.vx * 0.6, c.vz * 0.6, sp > 9);
        snd.thud();
        if (c === playerCar) { addCrime(1, 'zrazený chodec'); shake(0.15); }
        for (const o of peds) if (o !== p && Math.hypot(o.x - p.x, o.z - p.z) < 25) o.flee(p.x, p.z);
      } else if (c === playerCar && f > 0 && f < 9 + sp * 0.4 && Math.abs(l) < 3 && p.state === 'walk' && sp > 6) {
        p.flee(c.x, c.z);
      }
    }
  }
  updateFx(dt);
}

// fire / smoke particles for burning cars (instanced boxes, additive)
const fireGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
const fireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
const FIRE_N = 220;
const fireMesh = new THREE.InstancedMesh(fireGeo, fireMat, FIRE_N);
fireMesh.frustumCulled = false;
fireMesh.count = 0;
scene.add(fireMesh);
const fireP = [];
function addFire(c) { fx.push({ car: c, t: 0 }); }
const fm = new THREE.Matrix4(), fq = new THREE.Quaternion(), fs = new THREE.Vector3(), fp = new THREE.Vector3(), fc = new THREE.Color();
function updateFx(dt) {
  for (const f of fx) {
    if (!cars.includes(f.car) || f.car.burn < -18) continue;
    for (let i = 0; i < 3; i++)
      if (fireP.length < FIRE_N) fireP.push({ x: f.car.x + (rnd() - 0.5) * 2, y: f.car.y + 1.2, z: f.car.z + (rnd() - 0.5) * 3, vy: 2 + rnd() * 3, t: 0, life: 0.6 + rnd() * 0.9 });
  }
  let n = 0;
  for (let i = fireP.length - 1; i >= 0; i--) {
    const p = fireP[i];
    p.t += dt;
    p.y += p.vy * dt;
    if (p.t > p.life) { fireP.splice(i, 1); continue; }
    const k = p.t / p.life;
    fm.compose(fp.set(p.x, p.y, p.z), fq, fs.setScalar(1 + k * 1.5));
    fireMesh.setMatrixAt(n, fm);
    fc.setRGB(lerp(4, 0.3, k), lerp(1.8, 0.25, k), lerp(0.3, 0.22, k));
    fireMesh.setColorAt(n, fc);
    n++;
  }
  fireMesh.count = n;
  fireMesh.instanceMatrix.needsUpdate = true;
  if (fireMesh.instanceColor) fireMesh.instanceColor.needsUpdate = true;
}

// ------------------------------------------------------------------ police
let policeT = 0;
function updatePolice(dt) {
  const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
  const want = [0, 1, 2, 3, 4, 6][G.wanted];
  policeT -= dt;
  if (police.length < want && policeT <= 0) { spawnPolice(px, pz); policeT = 3; }
  let near = false;
  for (const c of police.slice()) {
    if (!c.ai) continue;
    c.ai.update(dt, X3.obst(), G.t, null, { x: px, z: pz });
    const d = Math.hypot(c.x - px, c.z - pz);
    if (d < 80) near = true;
    if (d > 320 || (G.wanted === 0 && d > 90)) removeCar(c);
  }
  // cooling down
  if (G.wanted > 0) {
    G.coolT = (G.coolT || 0) + dt * (near ? 0.25 : 1);
    if (G.coolT > 22) {
      G.wanted--;
      G.heat = G.wanted;
      G.coolT = 0;
      ui.toast(G.wanted ? 'Hľadanosť klesá: ' + '★'.repeat(G.wanted) : 'Polícia ťa stratila z očí');
    }
  } else G.heat = Math.max(0, G.heat - dt * 0.02);
  // busted
  if (G.wanted > 0 && G.mode === 'play') {
    let close = false;
    for (const c of police) if (Math.hypot(c.x - px, c.z - pz) < (playerCar ? 7.5 : 6) && c.speed < 6) close = true;
    const slow = playerCar ? playerCar.speed < 1.5 : true;
    G.bustT = close && slow ? (G.bustT || 0) + dt : 0;
    if (G.bustT > (playerCar ? 2.5 : 1.2)) { G.bustT = 0; respawn('ZATKNUTÝ', 'Polícia ti zobrala 25 % peňazí', '#4fa8ff', 0.25); }
  }
}

// ------------------------------------------------------------------ camera
let shakeA = 0;
function shake(a) { shakeA = Math.min(0.6, shakeA + a); }
function updateCamera(dt) {
  const port = G.portrait;
  if (input.camDrag > 0) input.camDrag -= dt;
  if (ui.look.dx) { input.camDX += ui.look.dx; ui.look.dx = 0; input.camDrag = 1.5; }
  let tx, ty, tz, dist, hgt, look;
  if (playerCar) {
    const c = playerCar;
    const vf = c.fwd;
    const want = vf < -2 ? c.h : c.h + Math.PI;
    if (input.camDrag > 0) G.camYaw += input.camDX;
    else G.camYaw += wrapA(want - G.camYaw) * clamp(dt * 3.2, 0, 1);
    input.camDX = 0;
    dist = (port ? 11.5 : 8.6) + clamp(c.speed * 0.09, 0, 4);
    hgt = port ? 4.6 : 3.3;
    tx = c.x; tz = c.z; ty = c.y + 1.3;
    look = 2.2;
  } else {
    if (input.camDrag > 0) G.camYaw += input.camDX;
    else if (Math.hypot(input.mx, input.my) > 0.2 && input.my > -0.3) G.camYaw += wrapA(player.h + Math.PI - G.camYaw) * clamp(dt * 1.4, 0, 1);
    input.camDX = 0;
    dist = port ? 6.8 : 5.0;
    hgt = port ? 2.9 : 2.1;
    tx = player.x; tz = player.z; ty = player.y + 1.45;
    look = 1.0;
  }
  let cx = tx + Math.sin(G.camYaw) * dist, cz = tz + Math.cos(G.camYaw) * dist;
  // don't let the camera go inside buildings
  const k = world.rayHit(tx, tz, cx, cz, ty + hgt - 1);
  if (k < 1) { const kk = Math.max(0.18, k - 0.08); cx = tx + (cx - tx) * kk; cz = tz + (cz - tz) * kk; }
  let cy = Math.max(ty + hgt * (k < 1 ? 1.15 : 1), world.surfaceY(cx, cz, ty + 5) + 1.2);
  tmpV.set(cx, cy, cz);
  if (!camInit) { camPos.copy(tmpV); camInit = true; }
  camPos.lerp(tmpV, clamp(dt * (playerCar ? 6 : 8), 0, 1));
  const ahead = playerCar ? (port ? 9 : 4) : port ? 4.5 : 1.5;
  camLook.set(tx - Math.sin(G.camYaw) * ahead, ty + look * 0.4 + (port ? 0.6 : 0), tz - Math.cos(G.camYaw) * ahead);
  camera.position.copy(camPos);
  if (shakeA > 0) {
    camera.position.x += (rnd() - 0.5) * shakeA;
    camera.position.y += (rnd() - 0.5) * shakeA;
    shakeA = Math.max(0, shakeA - dt * 1.5);
  }
  camera.lookAt(camLook);
  sky.position.copy(camera.position);
  placeShadow(tx, tz);
  // headlights
  if (playerCar && shared.uNight.value > 0.2) {
    const c = playerCar;
    headlight.intensity = 60 * shared.uNight.value;
    headlight.position.set(c.x + Math.sin(c.h) * 2, c.y + 0.9, c.z + Math.cos(c.h) * 2);
    headlight.target.position.set(c.x + Math.sin(c.h) * 22, c.y - 1, c.z + Math.cos(c.h) * 22);
    headlight.target.updateMatrixWorld();
  } else headlight.intensity = 0;
}

// ------------------------------------------------------------------ HUD
let hudT = 0;
function updateHUD(dt) {
  hudT -= dt;
  const px = playerCar ? playerCar.x : player.x, pz = playerCar ? playerCar.z : player.z;
  if (hudT <= 0) {
    hudT = 0.25;
    G.street = world.streetAt(px, pz) || (world.onDeck(px, pz, (playerCar || player).y + 1) ? 'Most' : '');
    G.district = districtAt(px, pz);
  }
  let goal = null;
  if (G.mission) goal = G.mission.goal();
  ui.update(G, {
    px, pz,
    h: playerCar ? playerCar.h : player.h,
    yaw: G.camYaw,
    speed: playerCar ? playerCar.speed * 3.6 : null,
    goal,
    goalText: G.mission ? G.mission.text : 'Kšefty: žlté body · Preteky: modré body' + X3.goalText(),
    markers: [
      ...[nearestSpot(LOC.contacts, px, pz)].filter(Boolean).map((c) => ({ x: c[0], z: c[1], c: '#ffcc33', on: !G.mission })),
      ...[nearestSpot(LOC.races, px, pz)].filter(Boolean).map((c) => ({ x: c[0], z: c[1], c: '#33e0ff', on: !G.mission })),
    ],
    police: police.map((c) => ({ x: c.x, z: c.z })),
    inCar: !!playerCar,
    nearCar: !playerCar && !!nearestCar(3.6),
  }, world);
}

boot().catch((e) => {
  console.error(e);
  ui.error(String(e && e.message ? e.message : e));
});
