// Small shared helpers
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const wrapA = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};
export function hash(n) {
  n = (n ^ 61) ^ (n >>> 16);
  n = (n + (n << 3)) | 0;
  n = n ^ (n >>> 4);
  n = Math.imul(n, 0x27d4eb2d);
  n = n ^ (n >>> 15);
  return (n >>> 0) / 4294967296;
}
let seed = 12345;
export const rnd = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
export const rpick = (a) => a[(rnd() * a.length) | 0];

// point-segment distance helpers (2D, x/z)
export function segClosest(px, pz, ax, az, bx, bz, out) {
  const dx = bx - ax, dz = bz - az;
  const L2 = dx * dx + dz * dz || 1e-9;
  let t = ((px - ax) * dx + (pz - az) * dz) / L2;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  out.x = ax + dx * t;
  out.z = az + dz * t;
  out.t = t;
  return out;
}

export function pointInRing(x, z, r) {
  let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i][0], zi = r[i][1], xj = r[j][0], zj = r[j][1];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}

// uniform spatial hash for 2D items with bbox
export class Grid2D {
  constructor(w, h, cell) {
    this.cell = cell;
    this.nx = Math.ceil(w / cell) + 2;
    this.nz = Math.ceil(h / cell) + 2;
    this.cells = new Array(this.nx * this.nz);
    this.stamp = 0;
  }
  _i(x, z) {
    const i = Math.floor(x / this.cell) + 1, j = Math.floor(z / this.cell) + 1;
    if (i < 0 || j < 0 || i >= this.nx || j >= this.nz) return -1;
    return j * this.nx + i;
  }
  add(item, x0, z0, x1, z1) {
    const c = this.cell;
    const i0 = Math.max(0, Math.floor(Math.min(x0, x1) / c) + 1), i1 = Math.min(this.nx - 1, Math.floor(Math.max(x0, x1) / c) + 1);
    const j0 = Math.max(0, Math.floor(Math.min(z0, z1) / c) + 1), j1 = Math.min(this.nz - 1, Math.floor(Math.max(z0, z1) / c) + 1);
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const k = j * this.nx + i;
        (this.cells[k] || (this.cells[k] = [])).push(item);
      }
  }
  query(x, z, r, out) {
    out.length = 0;
    const c = this.cell;
    const st = ++this.stamp;
    const i0 = Math.max(0, Math.floor((x - r) / c) + 1), i1 = Math.min(this.nx - 1, Math.floor((x + r) / c) + 1);
    const j0 = Math.max(0, Math.floor((z - r) / c) + 1), j1 = Math.min(this.nz - 1, Math.floor((z + r) / c) + 1);
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const a = this.cells[j * this.nx + i];
        if (!a) continue;
        for (let k = 0; k < a.length; k++) {
          const it = a[k];
          if (it._st === st) continue;
          it._st = st;
          out.push(it);
        }
      }
    return out;
  }
}
