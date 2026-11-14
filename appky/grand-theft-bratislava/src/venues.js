// Podniky a miesta, ktoré majú vyzerať ako naozaj: nápisy, terasy, vchody.
// Súradnice sú vo svetových metroch (x na východ, z na juh), výšky nad terénom.
import * as THREE from 'three';

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
  const doors = [];
  const lerp2 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const box = (w, h, d, col, x, y, z, ry = 0, mat = null) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat || new THREE.MeshLambertMaterial({ color: col }));
    m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = m.receiveShadow = true;
    G.add(m);
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
    doors,
    // night: signs and bulbs glow
    update(dt, night) {
      cool = Math.max(0, cool - dt);
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
