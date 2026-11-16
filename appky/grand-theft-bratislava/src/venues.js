// Podniky a miesta, ktoré majú vyzerať ako naozaj: nápisy, terasy, vchody.
// Súradnice sú vo svetových metroch (x na východ, z na juh), výšky nad terénom.
import * as THREE from 'three';
import { pointInRing } from './util.js';

const signMats = [];

function signTexture(text, o) {
  const cv = document.createElement('canvas');
  const H = 128, W = Math.max(128, Math.round((H * o.w) / o.h));
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  if (o.bg) { g.fillStyle = o.bg; g.fillRect(0, 0, W, H); }
  g.fillStyle = o.fg || '#fff';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  let px = 92;
  g.font = `${o.weight || 800} ${px}px ${o.font || 'Arial, Helvetica, sans-serif'}`;
  const tw = g.measureText(text).width;
  if (tw > W * 0.9) { px = Math.floor((px * W * 0.9) / tw); g.font = `${o.weight || 800} ${px}px ${o.font || 'Arial, Helvetica, sans-serif'}`; }
  g.fillText(text, W / 2, H / 2 + 4);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

// a sign on (or above) the wall a -> b, facing away from the point `away`
function sign(world, group, text, o) {
  const [ax, az] = o.a, [bx, bz] = o.b, t = o.t ?? 0.5;
  const x = ax + (bx - ax) * t, z = az + (bz - az) * t;
  const L = Math.hypot(bx - ax, bz - az) || 1;
  let nx = (bz - az) / L, nz = -(bx - ax) / L;
  if ((x + nx - o.away[0]) ** 2 + (z + nz - o.away[1]) ** 2 < (x - nx - o.away[0]) ** 2 + (z - nz - o.away[1]) ** 2) { nx = -nx; nz = -nz; }
  const tex = signTexture(text, o);
  const mat = new THREE.MeshLambertMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, transparent: !o.bg, alphaTest: o.bg ? 0 : 0.35, side: THREE.DoubleSide });
  mat.userData.glow = o.glow ?? 1;
  signMats.push(mat);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(o.w, o.h), mat);
  m.position.set(x + nx * (o.off ?? 0.18), world.hAt(x, z) + o.y, z + nz * (o.off ?? 0.18));
  m.rotation.y = Math.atan2(nx, nz);
  group.add(m);
  return { x, z, nx, nz };
}

export function buildVenues(world, scene) {
  const G = new THREE.Group();
  const doors = [], guests = [];
  let _wood = null;
  const wood0 = () => _wood || (_wood = new THREE.MeshLambertMaterial({ color: 0x8a6a48 }));
  const lerp2 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  let boxTo = null;
  const box = (w, h, d, col, x, y, z, ry = 0, mat = null) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat || new THREE.MeshLambertMaterial({ color: col }));
    m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = m.receiveShadow = true;
    (boxTo || G).add(m);
    return m;
  };

  // ------------------------------------------------------------ Kamenné námestie: Prior, Kácečko, Ost Block, Hotel Kyjev
  {
    const A_E = [[2529, 1187], [2584, 1108]]; // východná hrana nižšieho bloku Prioru (k námestiu)
    const A_W = [[2504, 1170], [2559, 1091]]; // západná hrana (k Špitálskej)
    const A_C = [2540, 1146];
    const B_NW = [[2531, 1205], [2574, 1143]]; // vyšší blok Prioru, hrana k námestiu
    const B_C = [2571, 1183];
    const KY = [[2574, 1065], [2602, 1084]], KY_C = [2592, 1069];
    sign(world, G, 'PRIOR', { a: [2501, 1171], b: [2557, 1090], t: 0.42, away: A_C, y: 9.2, w: 12, h: 2.8, fg: '#e8402a', glow: 1.2, off: 0.3 }); // horné poschodia prečnievajú
    sign(world, G, 'PRIOR', { a: B_NW[0], b: B_NW[1], t: 0.12, away: B_C, y: 16.6, w: 10, h: 2.4, fg: '#e8402a', glow: 1.2 });
    sign(world, G, 'HOTEL KYJEV', { a: KY[0], b: KY[1], t: 0.5, away: KY_C, y: 67.2, w: 26, h: 3.6, fg: '#f4f1e6', off: -1.2, glow: 1.4 });
    sign(world, G, 'ost block', { a: A_W[0], b: A_W[1], t: 0.34, away: A_C, y: 3.25, w: 5.6, h: 1.0, fg: '#f2efe6', bg: '#161616', weight: 500, glow: 1.1 });
    sign(world, G, 'KÁCEČKO', { a: A_W[0], b: A_W[1], t: 0.76, away: A_C, y: 13.4, w: 9, h: 1.7, fg: '#ffd23a', glow: 1.5 });
    sign(world, G, 'KÁCEČKO', { a: A_E[0], b: A_E[1], t: 0.76, away: A_C, y: 13.4, w: 9, h: 1.7, fg: '#ffd23a', glow: 1.5 });
    sign(world, G, 'KÁCEČKO ↑', { a: A_W[0], b: A_W[1], t: 0.62, away: A_C, y: 3.25, w: 4.6, h: 0.9, fg: '#ffd23a', bg: '#1b1b1b', glow: 1.1 });

    // Ost Block: kvetináče a stolíky pred výkladom
    const ob = lerp2(A_W[0], A_W[1], 0.34), dir = [A_W[1][0] - A_W[0][0], A_W[1][1] - A_W[0][1]];
    const dl = Math.hypot(dir[0], dir[1]); dir[0] /= dl; dir[1] /= dl;
    let n = [dir[1], -dir[0]];
    if ((ob[0] + n[0] - A_C[0]) ** 2 + (ob[1] + n[1] - A_C[1]) ** 2 < (ob[0] - n[0] - A_C[0]) ** 2 + (ob[1] - n[1] - A_C[1]) ** 2) n = [-n[0], -n[1]];
    const ry = Math.atan2(dir[0], dir[1]);
    const leaf = new THREE.MeshLambertMaterial({ color: 0x2f6b34, flatShading: true }), pot = new THREE.MeshLambertMaterial({ color: 0x24211f });
    const wood = new THREE.MeshLambertMaterial({ color: 0x8a6a48 });
    for (let k = -3; k <= 3; k++) {
      const x = ob[0] + dir[0] * k * 1.7 + n[0] * 1.1, z = ob[1] + dir[1] * k * 1.7 + n[1] * 1.1, y = world.hAt(x, z);
      box(0.7, 0.6, 0.7, 0, x, y + 0.3, z, ry, pot);
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55 + (k & 1) * 0.15, 0), leaf);
      s.position.set(x, y + 1.05 + (k & 1) * 0.2, z); s.castShadow = true; G.add(s);
      if (k % 2 === 0) {
        const tx = x + n[0] * 1.6, tz = z + n[1] * 1.6, ty = world.hAt(tx, tz);
        const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 10), wood); top.position.set(tx, ty + 0.74, tz); G.add(top);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.74, 5), pot); leg.position.set(tx, ty + 0.37, tz); G.add(leg);
      }
    }

    // Kácečko: terasa na streche nižšieho bloku s výhľadom na Kyjev
    const s0 = lerp2(lerp2(A_E[0], A_E[1], 0.56), lerp2(A_W[0], A_W[1], 0.56), 0.5);
    const s1 = lerp2(lerp2(A_E[0], A_E[1], 0.95), lerp2(A_W[0], A_W[1], 0.95), 0.5);
    const hw = 10.5, yR = world.hAt(A_C[0], A_C[1]) + 12.05;
    let gmin = 1e9;
    for (const p of [...A_E, ...A_W]) gmin = Math.min(gmin, world.hAt(p[0], p[1]));
    const yT = gmin + 12.12;
    world.decks.add({ ax: s0[0], az: s0[1], bx: s1[0], bz: s1[1], ya: yT, yb: yT, hw }, Math.min(s0[0], s1[0]) - hw, Math.min(s0[1], s1[1]) - hw, Math.max(s0[0], s1[0]) + hw, Math.max(s0[1], s1[1]) + hw);
    const tl = Math.hypot(s1[0] - s0[0], s1[1] - s0[1]), tc = lerp2(s0, s1, 0.5);
    const deck = box(hw * 2, 0.14, tl, 0x7a5d40, tc[0], yT - 0.07, tc[1], ry);
    deck.castShadow = false;
    const c4 = [[-hw, -tl / 2], [hw, -tl / 2], [hw, tl / 2], [-hw, tl / 2]].map(([u, v]) => [tc[0] + n[0] * u + dir[0] * v, tc[1] + n[1] * u + dir[1] * v]);
    const railM = new THREE.MeshLambertMaterial({ color: 0x2a2a2c });
    for (let i = 0; i < 4; i++) {
      const a = c4[i], b = c4[(i + 1) % 4], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      box(0.08, 0.08, L, 0, (a[0] + b[0]) / 2, yT + 1.1, (a[1] + b[1]) / 2, Math.atan2(b[0] - a[0], b[1] - a[1]), railM);
      box(0.05, 0.05, L, 0, (a[0] + b[0]) / 2, yT + 0.55, (a[1] + b[1]) / 2, Math.atan2(b[0] - a[0], b[1] - a[1]), railM);
      world.colliders.add({ ax: a[0], az: a[1], bx: b[0], bz: b[1], y0: yT - 0.5, y1: yT + 1.6, kind: 'r', tag: null }, a[0], a[1], b[0], b[1]);
    }
    // bar, lavice, slnečníky, svetielka
    const P = (u, v) => [tc[0] + n[0] * u + dir[0] * v, tc[1] + n[1] * u + dir[1] * v];
    { const [x, z] = P(-hw + 2.2, -tl / 2 + 5); box(1.4, 1.1, 7, 0x3a2c22, x, yT + 0.55, z, ry); box(1.7, 0.08, 7.3, 0xb08a5c, x, yT + 1.14, z, ry); }
    const umb = [0xd9482b, 0xf2efe6, 0x2f6b8a, 0xf2c230];
    let ui = 0;
    for (let v = -tl / 2 + 4; v < tl / 2 - 2; v += 5.2)
      for (const u of [1.5, 6.2]) {
        const [x, z] = P(u, v);
        box(1.8, 0.07, 0.8, 0x9a7a52, x, yT + 0.75, z, ry, wood);
        for (const s of [-0.75, 0.75]) { const [bx2, bz2] = P(u + s, v); box(0.35, 0.06, 1.8, 0, bx2, yT + 0.45, bz2, ry + Math.PI / 2, wood); }
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.4, 5), railM); pole.position.set(x, yT + 1.2, z); G.add(pole);
        const cap = new THREE.Mesh(new THREE.ConeGeometry(1.5, 0.5, 8), new THREE.MeshLambertMaterial({ color: umb[ui++ % 4], flatShading: true }));
        cap.position.set(x, yT + 2.55, z); cap.castShadow = true; G.add(cap);
      }
    const bulbM = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
    bulbM.userData.bulb = true; signMats.push(bulbM);
    const bulbs = [];
    for (let v = -tl / 2; v <= tl / 2 + 0.1; v += tl / 4)
      for (let k = 0; k <= 14; k++) { const u = -hw + (2 * hw * k) / 14, sag = 0.5 * Math.sin((Math.PI * k) / 14); bulbs.push([...P(u, v), yT + 3.1 - sag]); }
    const bm = new THREE.InstancedMesh(new THREE.SphereGeometry(0.07, 5, 4), bulbM, bulbs.length), M = new THREE.Matrix4();
    bulbs.forEach((b, i) => { M.makeTranslation(b[0], b[2], b[1]); bm.setMatrixAt(i, M); });
    G.add(bm);
    for (const u of [-hw, hw]) for (let v = -tl / 2; v <= tl / 2 + 0.1; v += tl / 4) { const [x, z] = P(u, v); const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 5), railM); p.position.set(x, yT + 1.6, z); G.add(p); }

    // vchod dole pri nápise a východ na terase
    const dn = lerp2(A_W[0], A_W[1], 0.62), up = P(hw - 2.2, tl / 2 - 2.5);
    doors.push({ a: [dn[0] + n[0] * 1.6, dn[1] + n[1] * 1.6], b: up, yb: yT, name: 'Kácečko – terasa', back: 'Kamenné námestie' });
    // hostia na terase: [x, z, y, otočenie]
    const kx = KY_C[0], kz = KY_C[1];
    for (const [u, v] of [[-hw + 3.6, -tl / 2 + 4], [-hw + 3.6, -tl / 2 + 6.5], [0.4, -1], [2.8, 1.2], [5, 6.5], [7.4, -6], [hw - 1.2, 3], [hw - 1.2, 5], [-3, tl / 2 - 1.2], [-1.2, tl / 2 - 1.2]]) {
      const [x, z] = P(u, v);
      guests.push([x, z, yT, u > hw - 2 || v > tl / 2 - 2 ? Math.atan2(kx - x, kz - z) : Math.atan2(tc[0] - x + (v % 3), tc[1] - z + (u % 2))]);
    }
  }

  // ------------------------------------------------------------ zastávka Kamenné námestie: prístrešky pri koľajach
  {
    const a = [2448, 1196], b = [2485, 1128], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const d = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], nn = [-d[1], d[0]], ry = Math.atan2(d[0], d[1]);
    const glass = new THREE.MeshLambertMaterial({ color: 0x9fc4d8, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const frame = new THREE.MeshLambertMaterial({ color: 0x2b2d30 }), bench = new THREE.MeshLambertMaterial({ color: 0x8a6a48 });
    for (const [t, side] of [[0.38, 9.5], [0.62, -5.5]]) {
      const cx = a[0] + (b[0] - a[0]) * t + nn[0] * side, cz = a[1] + (b[1] - a[1]) * t + nn[1] * side, y = world.hAt(cx, cz);
      const sg = Math.sign(side);
      box(1.7, 0.1, 8, 0, cx, y + 2.6, cz, ry, frame);
      box(0.06, 2.5, 8, 0, cx + nn[0] * 0.8 * sg, y + 1.3, cz + nn[1] * 0.8 * sg, ry, glass).castShadow = false;
      for (const e of [-3.95, 3.95]) box(1.6, 2.5, 0.06, 0, cx + d[0] * e, y + 1.3, cz + d[1] * e, ry, glass).castShadow = false;
      for (const e of [-3.95, 0, 3.95]) box(0.09, 2.6, 0.09, 0, cx + d[0] * e + nn[0] * 0.8 * sg, y + 1.3, cz + d[1] * e + nn[1] * 0.8 * sg, ry, frame);
      box(0.45, 0.08, 5, 0, cx + nn[0] * 0.45 * sg, y + 0.5, cz + nn[1] * 0.45 * sg, ry, bench);
      const e0 = [cx - d[0] * 4 - nn[0] * 0.85 * sg, cz - d[1] * 4 - nn[1] * 0.85 * sg], e1 = [cx + d[0] * 4 - nn[0] * 0.85 * sg, cz + d[1] * 4 - nn[1] * 0.85 * sg];
      sign(world, G, 'Kamenné námestie', { a: e0, b: e1, t: 0.5, away: [cx + nn[0] * 5 * sg, cz + nn[1] * 5 * sg], y: 2.86, w: 4.2, h: 0.42, fg: '#ffffff', bg: '#c8102e', weight: 700, glow: 0.9, off: 0.02 });
      world.colliders.add({ ax: cx - d[0] * 4 + nn[0] * 0.8 * sg, az: cz - d[1] * 4 + nn[1] * 0.8 * sg, bx: cx + d[0] * 4 + nn[0] * 0.8 * sg, bz: cz + d[1] * 4 + nn[1] * 0.8 * sg, y0: y - 1, y1: y + 2.7, kind: 'w', tag: null }, cx - 5, cz - 5, cx + 5, cz + 5);
    }
  }

  // ------------------------------------------------------------ Stará tržnica: nápis a trhové stánky pred ňou; Manderlák
  {
    const a = [2314, 1201], b = [2340, 1231], C = [2322, 1245];
    const f = sign(world, G, 'STARÁ TRŽNICA', { a, b, t: 0.5, away: C, y: 9.6, w: 13, h: 1.5, fg: '#f3ead2', glow: 1.0, off: 0.25 });
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), d = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], ry = Math.atan2(d[0], d[1]);
    const cols = [0xd9482b, 0xf2efe6, 0x3f8a4f, 0xf2c230, 0x2f6b8a], wood = new THREE.MeshLambertMaterial({ color: 0x8a6a48 });
    const crate = [0xd9812b, 0xc23b2b, 0x6aa33c, 0xe8c832];
    let k = 0;
    for (let row = 0; row < 2; row++)
      for (let i = -2; i <= 2; i++) {
        const x = f.x + f.nx * (7 + row * 6.5) + d[0] * i * 4.6, z = f.z + f.nz * (7 + row * 6.5) + d[1] * i * 4.6;
        if (world.hAt(x, z) < world.water + 2) continue;
        const y = world.hAt(x, z);
        box(3.2, 0.08, 1.3, 0, x, y + 0.9, z, ry + Math.PI / 2, wood);
        for (const e of [-1.5, 1.5]) for (const g of [-0.6, 0.6]) box(0.07, 2.3, 0.07, 0x3a3a3a, x + d[0] * e + f.nx * g, y + 1.15, z + d[1] * e + f.nz * g);
        const top = new THREE.Mesh(new THREE.ConeGeometry(2.6, 0.9, 4), new THREE.MeshLambertMaterial({ color: cols[k % 5], flatShading: true }));
        top.position.set(x, y + 2.75, z); top.rotation.y = ry + Math.PI / 4; top.castShadow = true; G.add(top);
        for (const e of [-1, 0, 1]) box(0.75, 0.3, 0.9, crate[(k + e + 4) % 4], x + d[0] * e, y + 1.1, z + d[1] * e, ry + Math.PI / 2);
        k++;
      }
    sign(world, G, 'MANDERLA', { a: [2388, 1235], b: [2401, 1224], t: 0.5, away: [2400, 1236], y: 46.2, w: 11, h: 2.2, fg: '#f4f1e6', glow: 1.3, off: -0.6 });
  }

  // ------------------------------------------------------------ Nivy: zelená strecha (park, 550 m bežecký okruh, stromy), nápis, vchod na strechu
  const G0 = G, NG = new THREE.Group();
  {
    const G = NG; G0.add(NG); boxTo = NG;
    const NIVY = [[3594.0, 1049.1], [3587.0, 1049.2], [3574.5, 1048.5], [3565.1, 1045.7], [3563.4, 1044.2], [3563.3, 1042.0], [3545.5, 1039.3], [3544.2, 1041.8], [3542.8, 1042.3], [3519.5, 1041.1], [3517.9, 1040.3], [3514.1, 1034.5], [3489.2, 1030.4], [3466.8, 1016.1], [3467.3, 1011.8], [3451.9, 1009.5], [3449.4, 1008.5], [3447.3, 1006.0], [3446.6, 1004.0], [3446.6, 1001.5], [3460.7, 911.5], [3512.7, 893.2], [3555.7, 899.9], [3556.7, 893.6], [3611.6, 902.2], [3609.4, 917.3], [3630.0, 920.7], [3640.4, 922.0], [3641.9, 912.7], [3719.6, 924.8], [3718.1, 934.3], [3726.9, 935.6], [3729.5, 974.4], [3773.7, 981.3], [3792.1, 1054.9], [3763.7, 1050.7], [3769.1, 1061.9], [3750.0, 1071.1], [3734.9, 1068.5], [3738.9, 1043.2], [3687.2, 1035.2], [3683.2, 1060.9], [3642.3, 1054.3], [3638.1, 1057.6], [3635.5, 1059.1], [3634.7, 1059.0], [3614.0, 1053.1], [3612.5, 1052.2], [3611.9, 1049.6], [3595.6, 1047.0], [3595.2, 1048.0]];
    let gmin = 1e9, gmax = -1e9;
    for (const [x, z] of NIVY) { const h = world.hAt(x, z); gmin = Math.min(gmin, h); gmax = Math.max(gmax, h); }
    const yR = gmin + Math.max(22.7, gmax - gmin + 2.5);
    const th = (8.887 * Math.PI) / 180, ct = Math.cos(th), st = Math.sin(th), C = [3580, 986];
    const Wp = (u, v) => [C[0] + u * ct - v * st, C[1] + u * st + v * ct];
    const inside = (x, z, m = 0) => {
      if (!pointInRing(x, z, NIVY)) return false;
      if (!m) return true;
      for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; if (!pointInRing(x + Math.cos(a) * m, z + Math.sin(a) * m, NIVY)) return false; }
      return true;
    };
    // pásy (bežecký okruh, chodníky) ako ploché pruhy tesne nad strechou
    const strip = (pts, w, col, dy, closed) => {
      const pos = [];
      const n = pts.length, N = closed ? n : n - 1;
      for (let i = 0; i < N; i++) {
        const a = pts[i], b = pts[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        const nx = (-(b[1] - a[1]) / L) * w / 2, nz = ((b[0] - a[0]) / L) * w / 2, y = yR + dy;
        pos.push(a[0] + nx, y, a[1] + nz, b[0] + nx, y, b[1] + nz, b[0] - nx, y, b[1] - nz, a[0] + nx, y, a[1] + nz, b[0] - nx, y, b[1] - nz, a[0] - nx, y, a[1] - nz);
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
      const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide })); m.receiveShadow = true; G.add(m);
    };
    const stadium = (L, R, n = 48) => {
      const out = [];
      for (let k = 0; k < n; k++) { const a = Math.PI / 2 - (Math.PI * k) / (n - 1); out.push(Wp(L + R * Math.cos(a), R * Math.sin(a))); }
      for (let k = 0; k < n; k++) { const a = -Math.PI / 2 - (Math.PI * k) / (n - 1); out.push(Wp(-L + R * Math.cos(a), R * Math.sin(a))); }
      return out;
    };
    strip(stadium(90, 32), 3.4, 0xb4553c, 0.06, true);
    for (const r of [30.9, 33.1]) strip(stadium(90, r), 0.1, 0xf2efe6, 0.08, true);
    strip(stadium(90, 36.4), 2.2, 0xcfc8b8, 0.05, true);
    strip([Wp(-140, 0), Wp(150, 0)].map((p) => p), 2.4, 0xcfc8b8, 0.05, false);
    strip([Wp(0, -60), Wp(0, 60)], 2.4, 0xcfc8b8, 0.05, false);
    // trávniky v inom odtieni a mierne kopčeky
    const lawn = new THREE.MeshLambertMaterial({ color: 0x4f7f3a, flatShading: true });
    for (const [u, v, r] of [[-45, -14, 9], [45, 14, 10], [-60, 16, 7], [60, -16, 8], [130, 25, 7], [-120, -30, 8]]) {
      const [x, z] = Wp(u, v);
      if (!inside(x, z, r)) continue;
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), lawn);
      m.scale.y = 0.18; m.position.set(x, yR, z); m.receiveShadow = true; G.add(m);
    }
    // stromy na streche (v skutočnosti ich je vyše 130)
    const tPts = [];
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const nearTrack = (x, z) => {
      const dx = x - C[0], dz = z - C[1], u = dx * ct + dz * st, v = -dx * st + dz * ct;
      const du = Math.max(0, Math.abs(u) - 90), d = Math.hypot(du, v);
      return Math.abs(d - 32) < 4.5 || Math.abs(d - 36.4) < 3 || Math.abs(v) < 2.5 || Math.abs(u) < 2.5;
    };
    for (let tries = 0; tries < 2500 && tPts.length < 110; tries++) {
      const x = 3450 + rnd() * 340, z = 895 + rnd() * 175;
      if (!inside(x, z, 4.5) || nearTrack(x, z) || tPts.some((p) => Math.hypot(p[0] - x, p[1] - z) < 7)) continue;
      tPts.push([x, z]);
    }
    const tm = new THREE.InstancedMesh(world.trunkGeo, world.trunkMat, tPts.length), cm = new THREE.InstancedMesh(world.crownGeo, world.crownMat, tPts.length);
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), Pv = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), cc = new THREE.Color();
    tPts.forEach(([x, z], i) => {
      const s2 = 0.6 + rnd() * 0.45;
      Q.setFromAxisAngle(up, rnd() * 6.28);
      M.compose(Pv.set(x, yR, z), Q, S.set(s2, s2 * (0.9 + rnd() * 0.3), s2));
      tm.setMatrixAt(i, M); cm.setMatrixAt(i, M);
      cc.setHSL(0.23 + rnd() * 0.07, 0.42 + rnd() * 0.18, 0.24 + rnd() * 0.1); cm.setColorAt(i, cc);
      world.colliders.add({ ax: x - 0.25, az: z, bx: x + 0.25, bz: z, y0: yR - 1, y1: yR + 3, kind: 'w', tag: null }, x - 0.3, z - 0.3, x + 0.3, z + 0.3);
    });
    tm.castShadow = cm.castShadow = true; tm.frustumCulled = cm.frustumCulled = false;
    G.add(tm, cm);
    // presklené pavilóny (vstupy z obchodného centra na strechu) a cvičisko
    const glassM = new THREE.MeshLambertMaterial({ color: 0x9fc4d0, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
    const frameM = new THREE.MeshLambertMaterial({ color: 0x2b2d30 });
    for (const [u, v] of [[-22, 14], [22, -14]]) {
      const [x, z] = Wp(u, v);
      box(14, 4.2, 8, 0, x, yR + 2.1, z, Math.PI / 2 - th, glassM).castShadow = false;
      box(14.4, 0.25, 8.4, 0, x, yR + 4.3, z, Math.PI / 2 - th, frameM);
      world.colliders.add({ ax: x - 6, az: z, bx: x + 6, bz: z, y0: yR - 1, y1: yR + 4.4, kind: 'w', tag: null }, x - 7, z - 7, x + 7, z + 7);
    }
    for (let k = 0; k < 5; k++) {
      const [x, z] = Wp(118 + k * 2.6, -26);
      if (!inside(x, z, 2)) continue;
      for (const e of [-0.9, 0.9]) box(0.1, 2.2 + (k % 2) * 0.4, 0.1, 0x2b2d30, x + e * Math.cos(th), yR + 1.1, z + e * Math.sin(th));
      box(1.9, 0.07, 0.07, 0x9a9da0, x, yR + 2.2 + (k % 2) * 0.4, z, Math.PI / 2 - th);
    }
    // lavičky pri okruhu
    for (let u = -80; u <= 80; u += 20) for (const v of [-40, 40]) {
      const [x, z] = Wp(u, v);
      if (inside(x, z, 2)) box(1.9, 0.45, 0.6, 0x8a6a48, x, yR + 0.25, z, Math.PI / 2 - th, wood0());
    }
    // zábradlie po obvode strechy (sklenené s madlom) + kolízie
    for (let i = 0; i < NIVY.length; i++) {
      const a = NIVY[i], b = NIVY[(i + 1) % NIVY.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (L < 0.5) continue;
      const ry = Math.atan2(b[0] - a[0], b[1] - a[1]);
      box(0.06, 1.05, L, 0, (a[0] + b[0]) / 2, yR + 0.55, (a[1] + b[1]) / 2, ry, glassM).castShadow = false;
      box(0.1, 0.08, L, 0, (a[0] + b[0]) / 2, yR + 1.1, (a[1] + b[1]) / 2, ry, frameM);
      world.colliders.add({ ax: a[0], az: a[1], bx: b[0], bz: b[1], y0: yR - 0.6, y1: yR + 1.6, kind: 'r', tag: null }, a[0], a[1], b[0], b[1]);
    }
    // po streche sa dá chodiť: prekrytie pásmi mostoviek
    for (let v = -100; v <= 100; v += 7) {
      const xs = [];
      for (let i = 0; i < NIVY.length; i++) {
        const a = NIVY[i], b = NIVY[(i + 1) % NIVY.length];
        const va = -(a[0] - C[0]) * st + (a[1] - C[1]) * ct, vb = -(b[0] - C[0]) * st + (b[1] - C[1]) * ct;
        if ((va - v) * (vb - v) > 0 || va === vb) continue;
        const t = (v - va) / (vb - va), x = a[0] + (b[0] - a[0]) * t, z = a[1] + (b[1] - a[1]) * t;
        xs.push((x - C[0]) * ct + (z - C[1]) * st);
      }
      xs.sort((p, q) => p - q);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const A0 = Wp(xs[k] + 0.3, v), B0 = Wp(xs[k + 1] - 0.3, v), hw = 3.8;
        world.decks.add({ ax: A0[0], az: A0[1], bx: B0[0], bz: B0[1], ya: yR, yb: yR, hw }, Math.min(A0[0], B0[0]) - hw, Math.min(A0[1], B0[1]) - hw, Math.max(A0[0], B0[0]) + hw, Math.max(A0[1], B0[1]) + hw);
      }
    }
    // nápis NIVY a vchod (výťah na strechu) z Mlynských nív
    sign(world, G, 'NIVY', { a: [3642.3, 1054.3], b: [3683.2, 1060.9], t: 0.5, away: [3640, 1000], y: 17.5, w: 15, h: 5, fg: '#f6f4ee', glow: 1.3, off: 0.4, weight: 900 });
    sign(world, G, 'NIVY', { a: [3446.6, 1001.5], b: [3460.7, 911.5], t: 0.5, away: [3600, 970], y: 17.5, w: 15, h: 5, fg: '#f6f4ee', glow: 1.3, off: 0.4, weight: 900 });
    sign(world, G, 'AUTOBUSOVÁ STANICA', { a: [3614.0, 1053.1], b: [3634.7, 1059.0], t: 0.5, away: [3620, 1000], y: 6.4, w: 12, h: 1.1, fg: '#ffffff', bg: '#1d4f91', weight: 700, glow: 1.0, off: 0.3 });
    sign(world, G, 'STRECHA ↑', { a: [3614.0, 1053.1], b: [3634.7, 1059.0], t: 0.18, away: [3620, 1000], y: 3.2, w: 3.4, h: 0.8, fg: '#ffd23a', bg: '#1b1b1b', glow: 1.1, off: 0.3 });
    doors.push({ a: [3618.5, 1059.6], b: [3622, 1043], yb: yR, name: 'Nivy – zelená strecha', back: 'Mlynské nivy' });
    boxTo = null;
  }
  const nivyTile = world.tiles[Math.floor(980 / world.T) * world.ntx + Math.floor(3602 / world.T)];

  // ------------------------------------------------------------ River Park: promenáda pri Dunaji (stromy, lavičky, lampy), nápis hotela
  {
    sign(world, G, 'GRAND HOTEL RIVER PARK', { a: [754.1, 1610.9], b: [732.8, 1604.6], t: 0.5, away: [748, 1580], y: 39.3, w: 19, h: 1.5, fg: '#f3ead2', glow: 1.2, off: 0.3 });
    const edgeZ = (x) => { for (let z = 1600; z < 1830; z += 1) if (world.hAt(x, z) < world.water + 0.2) return z; return null; };
    const trunkM = world.trunkMat, crownM = world.crownMat;
    const pts = [], lamps = [], benches = [];
    for (let x = 596; x <= 1000; x += 11) {
      const z = edgeZ(x);
      if (z === null) continue;
      const z2 = edgeZ(x + 6) ?? z, k = Math.atan2(z2 - z, 6);
      pts.push([x, z - 10, k]);
      if ((x - 596) % 22 === 0) lamps.push([x + 5, z - 4.5]); else benches.push([x + 5, z - 7, k]);
    }
    const tm = new THREE.InstancedMesh(world.trunkGeo, trunkM, pts.length), cm = new THREE.InstancedMesh(world.crownGeo, crownM, pts.length);
    const M = new THREE.Matrix4(), cc = new THREE.Color();
    pts.forEach(([x, z], i) => {
      M.makeScale(0.85, 0.95, 0.85).setPosition(x, world.hAt(x, z), z); tm.setMatrixAt(i, M); cm.setMatrixAt(i, M);
      cc.setHSL(0.25, 0.45, 0.27 + (i % 3) * 0.03); cm.setColorAt(i, cc);
      world.colliders.add({ ax: x - 0.25, az: z, bx: x + 0.25, bz: z, y0: world.hAt(x, z) - 1, y1: world.hAt(x, z) + 3, kind: 'w', tag: null }, x - 0.3, z - 0.3, x + 0.3, z + 0.3);
    });
    tm.castShadow = cm.castShadow = true; tm.frustumCulled = cm.frustumCulled = false; G.add(tm, cm);
    const post = new THREE.MeshLambertMaterial({ color: 0x2d2f31 });
    const head = new THREE.MeshBasicMaterial({ color: 0xffe2b0 }); head.userData.bulb = true; signMats.push(head);
    for (const [x, z] of lamps) {
      const y = world.hAt(x, z);
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 4.2, 6), post); p.position.set(x, y + 2.1, z); G.add(p);
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), head); h.position.set(x, y + 4.3, z); G.add(h);
    }
    for (const [x, z, k] of benches) box(1.9, 0.45, 0.6, 0x8a6a48, x, world.hAt(x, z) + 0.25, z, Math.PI / 2 - k, wood0());
    // nízky kamenný múrik na hrane nábrežia
    for (let i = 0; i + 1 < pts.length; i++) {
      const a = [pts[i][0], pts[i][1] + 9.3], b = [pts[i + 1][0], pts[i + 1][1] + 9.3], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const y = Math.max(world.hAt(a[0], a[1]), world.hAt(b[0], b[1]));
      box(0.5, 0.55, L + 0.4, 0xa39b8c, (a[0] + b[0]) / 2, y + 0.2, (a[1] + b[1]) / 2, Math.atan2(b[0] - a[0], b[1] - a[1]));
    }
  }

  // door markers
  const ringM = new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.75, side: THREE.DoubleSide });
  for (const d of doors)
    for (const [p, y] of [[d.a, world.hAt(d.a[0], d.a[1])], [d.b, d.yb]]) {
      const r = new THREE.Mesh(new THREE.RingGeometry(0.75, 1.0, 20), ringM);
      r.rotation.x = -Math.PI / 2; r.position.set(p[0], y + 0.08, p[1]); G.add(r);
    }
  scene.add(G);

  let cool = 0;
  return {
    doors, guests,
    // night: signs and bulbs glow
    update(dt, night) {
      cool = Math.max(0, cool - dt);
      NG.visible = !nivyTile || nivyTile.state === 4;
      for (const m of signMats) {
        if (m.userData.bulb) m.color.setScalar(0.25 + 2.6 * night).multiply(new THREE.Color(1, 0.82, 0.55));
        else m.emissiveIntensity = (0.75 + 1.1 * night) * m.userData.glow;
      }
      ringM.opacity = 0.5 + 0.3 * Math.sin(performance.now() / 250);
    },
    // walking into a door ring takes the player to the other end; returns [x, z, y, text] or null
    tryDoor(x, z, y) {
      if (cool > 0) return null;
      for (const d of doors) {
        const ya = world.hAt(d.a[0], d.a[1]);
        if (Math.hypot(x - d.a[0], z - d.a[1]) < 1.1 && Math.abs(y - ya) < 2) { cool = 2.5; return [d.b[0], d.b[1], d.yb, d.name]; }
        if (Math.hypot(x - d.b[0], z - d.b[1]) < 1.1 && Math.abs(y - d.yb) < 2) { cool = 2.5; return [d.a[0], d.a[1], ya, d.back]; }
      }
      return null;
    },
  };
}
