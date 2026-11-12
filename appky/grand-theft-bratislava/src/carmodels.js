// Procedural low-poly cars shaped like the everyday cars on Slovak streets (no brands, no logos)
import * as THREE from 'three';

// dimensions in metres; shape params describe the side silhouette
export const CAR_SPECS = {
  fabka: { L: 4.11, W: 1.73, H: 1.47, hood: 0.92, wind: 0.78, rear: 'hatch', rr: 0.3, belt: 0.97, acc: 4.6, vmax: 46, nick: 'Fabka', acc_: 'Fabku', g: 'f' },
  oktavka: { L: 4.69, W: 1.83, H: 1.46, hood: 1.05, wind: 0.85, rear: 'liftback', rr: 0.32, belt: 0.98, acc: 5.4, vmax: 56, nick: 'Oktávka', acc_: 'Oktávku', g: 'f' },
  kombi: { L: 4.69, W: 1.83, H: 1.49, hood: 1.05, wind: 0.85, rear: 'estate', rr: 0.32, belt: 0.98, acc: 5.2, vmax: 54, nick: 'Oktávka kombi', acc_: 'Oktávku kombi', g: 'f' },
  golfik: { L: 4.28, W: 1.79, H: 1.46, hood: 1.0, wind: 0.8, rear: 'hatch', rr: 0.31, belt: 0.99, acc: 5.6, vmax: 52, nick: 'Golfík', acc_: 'Golfa', g: 'm' },
  favorit: { L: 3.82, W: 1.62, H: 1.42, hood: 0.95, wind: 0.5, rear: 'box', rr: 0.29, belt: 0.95, acc: 3.6, vmax: 40, nick: 'Favorit', acc_: 'Favorita', g: 'm', boxy: true },
  esuv: { L: 4.7, W: 1.88, H: 1.68, hood: 1.0, wind: 0.8, rear: 'estate', rr: 0.36, belt: 1.12, clear: 0.42, acc: 4.9, vmax: 50, nick: 'SUV-čko', acc_: 'SUV-čko', g: 'n' },
  dacik: { L: 4.34, W: 1.8, H: 1.65, hood: 0.95, wind: 0.75, rear: 'estate', rr: 0.34, belt: 1.08, clear: 0.4, acc: 4.2, vmax: 46, nick: 'Krosover', acc_: 'Krosover', g: 'i' },
};

const glassMat = new THREE.MeshLambertMaterial({ color: 0x3b4d5f, name: 'Windows' });
const tireMat = new THREE.MeshLambertMaterial({ color: 0x151515, name: 'Tire' });
const rimMat = new THREE.MeshLambertMaterial({ color: 0x9a9da2, name: 'Rim' });
const darkMat = new THREE.MeshLambertMaterial({ color: 0x232426, name: 'Trim' });
const plateMat = new THREE.MeshLambertMaterial({ color: 0xf2f2ee, name: 'Plate' });

function extrudeSide(pts, width, bevel) {
  const s = new THREE.Shape();
  pts.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, steps: 1, curveSegments: 1 });
  // shape x -> car forward (+z), extrusion -> car width (x)
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2 - bevel, 0, 0);
  return g;
}

export function buildCar(kind) {
  const S = CAR_SPECS[kind];
  const { L, W, H, hood, wind, belt } = S;
  const r = S.rr;
  const clear = S.clear || 0.3;
  const half = L / 2;
  const paint = new THREE.MeshLambertMaterial({ color: 0xffffff, name: 'Paint' });
  const g = new THREE.Group();
  const bev = S.boxy ? 0.03 : 0.07;
  // lower body (side silhouette, rear -> front along the bottom, then back over the top)
  const noseY = S.boxy ? belt - 0.08 : belt - 0.2;
  const rearTop = S.rear === 'liftback' ? belt + 0.02 : belt;
  const body = [
    [-half + 0.12, clear],
    [half - 0.16, clear],
    [half, clear + 0.18],
    [half, noseY - 0.06],
    [half - 0.1, noseY],
    [half - hood, belt],
    [-half + (S.rear === 'liftback' ? 0.05 : 0.02), rearTop],
    [-half, rearTop - 0.12],
    [-half, clear + 0.14],
  ];
  const bm = new THREE.Mesh(extrudeSide(body, W, bev), paint);
  g.add(bm);
  // cabin / glasshouse
  const cw = W - 0.16;
  const wb = half - hood; // windshield base
  const roofF = wb - wind;
  let roofR, baseR;
  if (S.rear === 'hatch') { roofR = -half + 0.32; baseR = -half + 0.08; }
  else if (S.rear === 'liftback') { roofR = -half + 1.28; baseR = -half + 0.28; }
  else if (S.rear === 'estate') { roofR = -half + 0.14; baseR = -half + 0.04; }
  else { roofR = -half + 0.1; baseR = -half + 0.05; }
  const cab = [
    [baseR, belt - 0.02],
    [wb, belt - 0.02],
    [roofF, H - 0.04],
    [roofR, H - 0.04],
  ];
  const cm = new THREE.Mesh(extrudeSide(cab, cw, 0.04), glassMat);
  g.add(cm);
  // painted roof panel + pillars so it reads as a car from the chase camera
  const roofLen = roofF - roofR - 0.12;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(cw - 0.06, 0.07, roofLen), paint);
  roof.position.set(0, H - 0.02, (roofF + roofR) / 2);
  g.add(roof);
  const bpil = new THREE.Mesh(new THREE.BoxGeometry(cw + 0.01, H - belt - 0.06, 0.12), paint);
  bpil.position.set(0, (H + belt) / 2 - 0.03, (wb + baseR) / 2 + (S.rear === 'liftback' ? 0.25 : 0.1));
  g.add(bpil);
  // wheels
  const wbase = L * 0.61;
  const tireG = new THREE.CylinderGeometry(r, r, 0.22, 14);
  tireG.rotateZ(Math.PI / 2);
  const rimG = new THREE.CylinderGeometry(r * 0.62, r * 0.62, 0.235, 10);
  rimG.rotateZ(Math.PI / 2);
  const fz = wbase / 2 + (half - hood > 0.6 ? 0.05 : 0) + 0.05;
  for (const z of [fz, -wbase / 2 + 0.05])
    for (const sx of [-1, 1]) {
      const t = new THREE.Mesh(tireG, tireMat);
      t.position.set(sx * (W / 2 - 0.13), r, z);
      const m = new THREE.Mesh(rimG, rimMat);
      m.position.copy(t.position);
      g.add(t, m);
    }
  // dark wheel-arch/bumper strip
  const strip = new THREE.Mesh(new THREE.BoxGeometry(W + 0.02, 0.14, L - 0.3), darkMat);
  strip.position.set(0, clear + 0.07, 0);
  g.add(strip);
  // lights
  const head = new THREE.MeshLambertMaterial({ color: 0xdfe6ee, name: 'HeadLights' });
  const tail = new THREE.MeshLambertMaterial({ color: 0x8a1010, name: 'TailLights' });
  const ly = noseY - 0.1;
  for (const sx of [-1, 1]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(S.boxy ? 0.32 : 0.38, S.boxy ? 0.16 : 0.11, 0.08), head);
    h.position.set(sx * (W / 2 - 0.3), ly, half - 0.03);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.13, 0.08), tail);
    t.position.set(sx * (W / 2 - 0.22), rearTop - 0.2, -half + 0.0);
    g.add(h, t);
  }
  const grille = new THREE.Mesh(new THREE.BoxGeometry(W * 0.42, 0.14, 0.06), darkMat);
  grille.position.set(0, ly - 0.02, half + 0.0);
  const pf = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.12, 0.03), plateMat);
  pf.position.set(0, clear + 0.22, half + 0.01);
  const pr = pf.clone();
  pr.position.z = -half - 0.01;
  pr.position.y = clear + 0.3;
  // mirrors
  for (const sx of [-1, 1]) {
    const mi = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.12), paint);
    mi.position.set(sx * (W / 2 + 0.06), belt + 0.08, wb - 0.1);
    g.add(mi);
  }
  g.add(grille, pf, pr);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { obj: g, def: { paint: 'Paint', len: L, vmax: S.vmax, acc: S.acc, nick: S.nick, acc_: S.acc_, g: S.g }, w: W, h: H, len: L };
}
