// Cars (models, physics, AI) and people (skinned characters, pedestrians)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { World } from './world.js';
import { buildCar, CAR_SPECS } from './carmodels.js';
import { clamp, lerp, wrapA, rnd, rpick, hash } from './util.js';

const loader = new GLTFLoader();
let PACK = null;
const loadGLB = async (url) => {
  const name = url.split('/').pop();
  if (!PACK) PACK = fetch(url.slice(0, url.lastIndexOf('/models/')) + '/models.json').then((r) => r.json());
  const p = await PACK;
  const bin = atob(p[name]);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return new Promise((res, rej) => loader.parse(buf.buffer, '', res, rej));
};

// ------------------------------------------------------------------ assets
export const ASSETS = { cars: {}, people: [] };
export const HOOK = { mat: null }; // lets the game dress every car material (gloss, number plates)
const PAINTS = ['#c9ccd0', '#c9ccd0', '#9a9fa6', '#3b3f45', '#3b3f45', '#f2f0ea', '#f2f0ea', '#101215', '#101215', '#1e2c4a', '#b8352b', '#2f5a3a', '#6b8fb3', '#7a2433', '#d8c27a', '#4f6b3a'];
const CAR_DEFS = {
  sedan: { file: 'car_a.glb', paint: 'Blue', len: 4.5, vmax: 50, acc: 5.6 },
  compact: { file: 'car_b.glb', paint: 'LightBlue', len: 3.8, vmax: 42, acc: 4.8 },
  suv: { file: 'car_suv.glb', paint: 'White', len: 4.6, vmax: 46, acc: 4.8 },
  hatch: { file: 'car_hatch.glb', len: 4.0, vmax: 43, acc: 4.8 },
  wagon: { file: 'car_wagon.glb', len: 4.5, vmax: 45, acc: 4.9 },
};
const PEOPLE = [
  { file: 'man.glb', pre: 'HumanArmature|Man_' },
  { file: 'man_suit.glb', pre: 'HumanArmature|Man_' },
  { file: 'woman_casual.glb', pre: 'HumanArmature|Female_' },
  { file: 'woman_dress.glb', pre: 'HumanArmature|Female_' },
];

export async function loadAssets(base, onProgress) {
  const jobs = [];
  let done = 0;
  const total = Object.keys(CAR_DEFS).length + PEOPLE.length;
  const tick = () => onProgress && onProgress(++done / total);
  for (const [k, d] of Object.entries(CAR_DEFS)) {
    jobs.push(
      loadGLB(base + d.file).then((g) => {
        const root = g.scene;
        root.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(root, true);
        const size = box.getSize(new THREE.Vector3());
        // length axis
        const alongX = size.x > size.z;
        const holder = new THREE.Group();
        const inner = new THREE.Group();
        inner.add(root);
        if (alongX) inner.rotation.y = Math.PI / 2;
        holder.add(inner);
        holder.updateMatrixWorld(true);
        let b2 = new THREE.Box3().setFromObject(holder, true);
        const len = b2.max.z - b2.min.z;
        const s = d.len / len;
        inner.scale.multiplyScalar(s);
        holder.updateMatrixWorld(true);
        b2 = new THREE.Box3().setFromObject(holder, true);
        const c = b2.getCenter(new THREE.Vector3());
        inner.position.set(-c.x, -b2.min.y, -c.z);
        holder.updateMatrixWorld(true);
        // front detection: headlight material center
        let hz = 0, hn = 0;
        holder.traverse((o) => {
          if (o.isMesh) {
            o.castShadow = true;
            const mats = Array.isArray(o.material) ? o.material : [o.material];
            for (const m of mats) if (/head/i.test(m.name)) {
              const bb = new THREE.Box3().setFromObject(o, true);
              hz += bb.getCenter(new THREE.Vector3()).z; hn++;
            }
          }
        });
        if (hn && hz / hn < 0) inner.rotation.y += Math.PI, inner.position.x *= -1, inner.position.z *= -1;
        const fb = new THREE.Box3().setFromObject(holder, true);
        ASSETS.cars[k] = { obj: holder, def: d, w: fb.max.x - fb.min.x, h: fb.max.y - fb.min.y, len: fb.max.z - fb.min.z };
        tick();
      })
    );
  }
  for (const p of PEOPLE) {
    jobs.push(
      loadGLB(base + p.file).then((g) => {
        const root = g.scene;
        root.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(root, true);
        const h = box.max.y - box.min.y;
        const s = 1.76 / h;
        const holder = new THREE.Group();
        root.scale.multiplyScalar(s);
        root.position.y = -box.min.y * s;
        holder.add(root);
        root.traverse((o) => {
          if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; }
        });
        const clips = {};
        for (const a of g.animations) clips[a.name.replace(p.pre, '').toLowerCase()] = a;
        ASSETS.people.push({ obj: holder, clips });
        tick();
      })
    );
  }
  await Promise.all(jobs);
  for (const k of Object.keys(CAR_SPECS)) ASSETS.cars[k] = buildCar(k);
}

// ------------------------------------------------------------------ person
const SHIRTS = ['#c0392b', '#2c3e50', '#27ae60', '#8e44ad', '#f39c12', '#16a085', '#d35400', '#7f8c8d', '#2980b9', '#e8e2d0', '#1b1b1b', '#b5651d'];
export class Person {
  constructor(kind = -1, tint = true) {
    const A = kind >= 0 ? ASSETS.people[kind] : rpick(ASSETS.people);
    this.obj = SkeletonUtils.clone(A.obj);
    if (tint) {
      const shirt = new THREE.Color(rpick(SHIRTS));
      this.obj.traverse((o) => {
        if (o.isMesh) {
          o.material = (Array.isArray(o.material) ? o.material : [o.material]).map((m) => {
            if (/shirt|dress/i.test(m.name)) { const c = m.clone(); c.color = shirt.clone(); return c; }
            if (/pants/i.test(m.name) && rnd() < 0.6) { const c = m.clone(); c.color = new THREE.Color(rpick(['#22252b', '#3d4f6b', '#5b4b3a', '#7d7f7a'])); return c; }
            return m;
          });
          if (o.material.length === 1) o.material = o.material[0];
        }
      });
    }
    this.mixer = new THREE.AnimationMixer(this.obj);
    this.acts = {};
    for (const [k, c] of Object.entries(A.clips)) this.acts[k] = this.mixer.clipAction(c);
    if (this.acts.death) { this.acts.death.setLoop(THREE.LoopOnce, 1); this.acts.death.clampWhenFinished = true; }
    if (this.acts.punch) { this.acts.punch.setLoop(THREE.LoopOnce, 1); this.acts.punch.clampWhenFinished = false; }
    this.cur = null;
    this.play('idle');
    this.x = 0; this.z = 0; this.y = 0; this.h = 0;
    this.vx = 0; this.vz = 0;
  }
  play(name, fade = 0.2, speed = 1) {
    const a = this.acts[name] || this.acts.idle;
    if (this.cur === a) { a.timeScale = speed; return; }
    a.reset();
    a.timeScale = speed;
    a.enabled = true;
    a.setEffectiveWeight(1);
    a.play();
    if (this.cur) this.cur.crossFadeTo(a, fade, false);
    this.cur = a;
  }
  sync() {
    this.obj.position.set(this.x, this.y, this.z);
    this.obj.rotation.y = this.h;
  }
}

// ------------------------------------------------------------------ car
const _hit = {};
export class Car {
  constructor(kind, paint) {
    const A = ASSETS.cars[kind] || ASSETS.cars.sedan;
    this.kind = kind;
    this.def = A.def;
    this.obj = A.obj.clone(true);
    this.len = A.len;
    this.wid = A.w;
    this.paint = paint || rpick(PAINTS);
    this.lightMats = [];
    this.obj.traverse((o) => {
      if (!o.isMesh) return;
      o.material = (Array.isArray(o.material) ? o.material : [o.material]).map((m) => {
        if (A.def.paint && m.name === A.def.paint) { const c = m.clone(); c.color = new THREE.Color(this.paint); return c; }
        if (/head/i.test(m.name)) { const c = m.clone(); c.emissive = new THREE.Color(0, 0, 0); this.head = c; return c; }
        if (/tail/i.test(m.name)) { const c = m.clone(); c.emissive = new THREE.Color(0, 0, 0); this.tail = c; return c; }
        return m;
      }).map((m) => (HOOK.mat ? HOOK.mat(m) : m));
      if (o.material.length === 1) o.material = o.material[0];
    });
    this.x = 0; this.z = 0; this.y = 0; this.h = 0;
    this.vx = 0; this.vz = 0; this.w = 0;
    this.pitch = 0; this.roll = 0;
    this.thr = 0; this.st = 0; this.hb = 0; this.steer = 0;
    this.r = Math.max(0.9, this.wid * 0.5);
    this.off = this.len / 2 - this.r;
    this.dmg = 0;
    this.driver = null; // 'player' | 'ai' | 'police' | null
    this.ai = null;
    this.sleep = true;
  }
  get speed() { return Math.hypot(this.vx, this.vz); }
  get fwd() { return this.vx * Math.sin(this.h) + this.vz * Math.cos(this.h); }
  place(x, z, h, world) {
    this.x = x; this.z = z; this.h = h;
    this.y = world.surfaceY(x, z);
    this.vx = this.vz = this.w = 0;
    this.sync(world, 1);
  }
  step(dt, world, cars) {
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    let vf = this.vx * sh + this.vz * ch;
    let vs = this.vx * ch - this.vz * sh; // lateral (right +)
    const sp = Math.abs(vf);
    // steering
    const maxSt = 0.62 / (1 + sp / 16);
    this.steer += clamp(this.st * maxSt - this.steer, -dt * 3.5, dt * 3.5);
    // longitudinal
    let a = 0;
    const thr = this.thr;
    const vmax = this.def.vmax * (this.driver === 'player' ? 1 : 0.85);
    if (thr > 0) {
      if (vf < -0.5) a = 10 * thr;
      else a = this.def.acc * thr * Math.max(0, 1 - vf / vmax) + 1.0 * thr;
    } else if (thr < 0) {
      if (vf > 0.5) a = 10 * thr;
      else a = 3.5 * thr * Math.max(0, 1 + vf / 9);
    }
    if (this.hb) a -= Math.sign(vf) * 6;
    a -= vf * 0.06 + 0.0012 * vf * Math.abs(vf) * 2.2;
    if (Math.abs(thr) < 0.05 && sp < 0.4 && !this.hb) vf *= 0.8;
    // slope
    const fh = world.surfaceY(this.x + sh * 2, this.z + ch * 2, this.y + 1.2) - world.surfaceY(this.x - sh * 2, this.z - ch * 2, this.y + 1.2);
    a -= 9.8 * clamp(fh / 4, -0.4, 0.4);
    vf += a * dt;
    // yaw
    const wb = this.len * 0.62;
    const wTarget = (vf * Math.tan(this.steer)) / wb;
    const grip = this.hb ? 1.6 : 9;
    const latA = Math.abs(wTarget * vf);
    const slideLimit = this.hb ? 6 : 13;
    const k = latA > slideLimit ? (grip * slideLimit) / latA : grip;
    this.w += (wTarget * (this.hb ? 1.35 : 1) - this.w) * clamp(k * dt, 0, 1);
    vs *= Math.exp(-(this.hb ? 1.4 : latA > slideLimit ? 3.2 : 10) * dt);
    this.h = wrapA(this.h + this.w * dt);
    const nh = Math.sin(this.h), nc = Math.cos(this.h);
    this.vx = vf * nh + vs * nc;
    this.vz = vf * nc - vs * nh;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    // walls
    let impact = 0;
    for (const o of [this.off, -this.off, 0]) {
      const px = this.x + nh * o, pz = this.z + nc * o;
      if (world.collide(px, pz, this.y + 0.3, this.r, _hit)) {
        this.x += _hit.x - px;
        this.z += _hit.z - pz;
        const vn = this.vx * _hit.nx + this.vz * _hit.nz;
        if (vn < 0) {
          this.vx -= 1.3 * vn * _hit.nx;
          this.vz -= 1.3 * vn * _hit.nz;
          this.vx *= 0.92; this.vz *= 0.92;
          impact = Math.max(impact, -vn);
          // spin from off-centre hit
          this.w += o * 0.05 * vn * (this.vx * _hit.nz - this.vz * _hit.nx > 0 ? 1 : -1);
        }
      }
    }
    // bounds
    this.x = clamp(this.x, 2, world.W - 2);
    this.z = clamp(this.z, 2, world.H - 2);
    this.impact = impact;
    if (impact > 4) this.dmg += impact * 1.5;
  }
  sync(world, dt) {
    const nh = Math.sin(this.h), nc = Math.cos(this.h);
    const yh = this.y + 1.2;
    const yf = world.surfaceY(this.x + nh * this.len * 0.4, this.z + nc * this.len * 0.4, yh);
    const yb = world.surfaceY(this.x - nh * this.len * 0.4, this.z - nc * this.len * 0.4, yh);
    const yl = world.surfaceY(this.x - nc * 0.8, this.z + nh * 0.8, yh);
    const yr = world.surfaceY(this.x + nc * 0.8, this.z - nh * 0.8, yh);
    const ty = (yf + yb + yl + yr) / 4;
    this.y = ty;
    const pt = Math.atan2(yb - yf, this.len * 0.8);
    const rl = Math.atan2(yr - yl, 1.6);
    const k = clamp(dt * 10, 0, 1);
    this.pitch += (pt - this.pitch) * k;
    this.roll += (rl - this.roll) * k;
    // body lean in turns
    const lean = clamp(-this.w * this.fwd * 0.004, -0.06, 0.06);
    this.obj.position.set(this.x, this.y, this.z);
    this.obj.rotation.set(0, 0, 0);
    this.obj.rotateY(this.h);
    this.obj.rotateX(this.pitch);
    this.obj.rotateZ(this.roll + lean);
  }
  lights(night, braking) {
    if (this.head) this.head.emissive.setRGB(night * 3, night * 2.7, night * 2.2);
    if (this.tail) this.tail.emissive.setRGB(braking ? 3 : night * 1.2, 0, 0);
  }
}

// circle-pair car vs car resolution
export function carCar(a, b) {
  const ah = Math.sin(a.h), ac = Math.cos(a.h), bh = Math.sin(b.h), bc = Math.cos(b.h);
  if (Math.abs(a.x - b.x) > 7 || Math.abs(a.z - b.z) > 7 || Math.abs(a.y - b.y) > 3) return 0;
  let maxI = 0;
  for (const oa of [a.off, -a.off])
    for (const ob of [b.off, -b.off]) {
      const ax = a.x + ah * oa, az = a.z + ac * oa, bx = b.x + bh * ob, bz = b.z + bc * ob;
      let dx = bx - ax, dz = bz - az;
      const d = Math.hypot(dx, dz), R = a.r + b.r;
      if (d < R && d > 1e-4) {
        dx /= d; dz /= d;
        const pen = (R - d) / 2;
        a.x -= dx * pen; a.z -= dz * pen;
        b.x += dx * pen; b.z += dz * pen;
        const rv = (b.vx - a.vx) * dx + (b.vz - a.vz) * dz;
        if (rv < 0) {
          const j = -rv * 0.65;
          a.vx -= dx * j; a.vz -= dz * j;
          b.vx += dx * j; b.vz += dz * j;
          a.w += (oa > 0 ? 1 : -1) * j * 0.05;
          b.w -= (ob > 0 ? 1 : -1) * j * 0.05;
          maxI = Math.max(maxI, -rv);
        }
      }
    }
  return maxI;
}

// ------------------------------------------------------------------ AI driving along road graph
const _p = {};
export class DriverAI {
  constructor(car, world, e, s) {
    this.car = car;
    this.w = world;
    this.e = e;
    this.s = s;
    this.next = null;
    this.mode = 'traffic';
    this.wait = 0;
    this.stuck = 0;
    this.honk = 0;
    this.chooseNext();
  }
  chooseNext() {
    const outs = this.e.b.out.filter((o) => o !== this.e.rev && o.L > 0.5);
    this.next = outs.length ? rpick(outs) : this.e.rev || null;
  }
  // point along route at distance d ahead of s
  ahead(d, out) {
    let e = this.e, s = this.s + d;
    if (s > e.L && this.next) { s -= e.L; e = this.next; }
    World.at(e, Math.min(s, e.L), out);
    const off = e.lane;
    out.x += -out.dz * off;
    out.z += out.dx * off;
    return out;
  }
  project() {
    const c = this.car, e = this.e;
    let best = 1e9, bs = this.s;
    for (let k = 0; k < e.p.length - 1; k++) {
      const ax = e.p[k][0], az = e.p[k][1], bx = e.p[k + 1][0], bz = e.p[k + 1][1];
      const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
      let t = clamp(((c.x - ax) * dx + (c.z - az) * dz) / L2, 0, 1);
      const d = Math.hypot(ax + dx * t - c.x, az + dz * t - c.z);
      if (d < best) { best = d; bs = e.cum[k] + t * Math.sqrt(L2); }
    }
    this.s = bs;
    this.dev = best;
  }
  update(dt, cars, t, player, target) {
    const c = this.car;
    this.project();
    if (this.s > this.e.L - 1.5 && this.next) {
      this.s -= this.e.L;
      this.e = this.next;
      this.s = Math.max(0, this.s);
      if (this.mode === 'chase' && target) this.chooseToward(target);
      else this.chooseNext();
    }
    const sp = c.speed;
    const look = 4.5 + sp * 0.45;
    this.ahead(look, _p);
    let tx = _p.x, tz = _p.z;
    let desired = this.e.v;
    if (this.mode === 'chase' && target) {
      desired = 26;
      const d = Math.hypot(target.x - c.x, target.z - c.z);
      if (d < 30) { tx = target.x; tz = target.z; desired = clamp(d * 1.2, 6, 30); }
    }
    // curvature ahead: compare direction now vs at end of edge
    const remain = this.e.L - this.s;
    if (this.next && remain < 25) {
      const a1 = Math.atan2(this.e.p[this.e.p.length - 1][0] - this.e.p[this.e.p.length - 2][0], this.e.p[this.e.p.length - 1][1] - this.e.p[this.e.p.length - 2][1]);
      const a2 = Math.atan2(this.next.p[1][0] - this.next.p[0][0], this.next.p[1][1] - this.next.p[0][1]);
      const turn = Math.abs(wrapA(a2 - a1));
      if (turn > 0.35) desired = Math.min(desired, lerp(14, 5.5, clamp(turn / 1.6, 0, 1)) + remain * 0.25);
      // signals
      if (this.mode !== 'chase' && this.e.b.sig && !this.w.signalState(this.e.b, a1, t) && remain > 5) desired = Math.min(desired, Math.max(0, (remain - 7) * 0.9));
    }
    // cars ahead
    const sh = Math.sin(c.h), ch = Math.cos(c.h);
    let block = 99;
    for (const o of cars) {
      if (o === c) continue;
      const dx = o.x - c.x, dz = o.z - c.z;
      const f = dx * sh + dz * ch;
      if (f < 0 || f > 22) continue;
      const lat = Math.abs(dx * ch - dz * sh);
      if (lat < 2.2) block = Math.min(block, f - (c.len + o.len) / 2);
    }
    if (player && this.mode !== 'chase') {
      const dx = player.x - c.x, dz = player.z - c.z;
      const f = dx * sh + dz * ch;
      if (f > 0 && f < 14 && Math.abs(dx * ch - dz * sh) < 2.0) block = Math.min(block, f - c.len / 2 - 0.5);
    }
    if (block < 99) desired = Math.min(desired, Math.max(0, (block - 2.5) * 1.1));
    if (this.mode === 'chase') desired = Math.max(desired, block < 3 ? 4 : desired);
    // steering
    const want = Math.atan2(tx - c.x, tz - c.z);
    let da = wrapA(want - c.h);
    const vf = c.fwd;
    c.st = clamp(da * 2.2, -1, 1);
    if (vf < -0.5) c.st = -c.st;
    const dv = desired - vf;
    c.thr = clamp(dv * 0.35, -1, 1);
    c.hb = 0;
    // unstick: reverse a bit
    if (sp < 0.5 && desired > 3) this.stuck += dt; else this.stuck = Math.max(0, this.stuck - dt);
    if (this.stuck > 2.2) {
      c.thr = -0.7; c.st = -c.st;
      if (this.stuck > 3.6) this.stuck = 0;
    }
    if (block < 4 && sp < 0.5) this.honk += dt;
  }
  chooseToward(target) {
    const outs = this.e.b.out.filter((o) => o.L > 0.5);
    if (!outs.length) { this.next = this.e.rev; return; }
    let best = null, bd = 1e9;
    for (const o of outs) {
      const end = o.p[Math.min(o.p.length - 1, 3)];
      const d = Math.hypot(end[0] - target.x, end[1] - target.z) + (o === this.e.rev ? 30 : 0) + rnd() * 8;
      if (d < bd) { bd = d; best = o; }
    }
    this.next = best;
  }
}

// ------------------------------------------------------------------ pedestrians
export class Ped {
  constructor(world, e, s) {
    this.p = new Person();
    this.w = world;
    this.e = e;
    this.s = s;
    this.dir = rnd() < 0.5 ? 1 : -1;
    this.off = (rnd() - 0.5) * (e.sw ? 0.8 : 1.6);
    this.speed = 1.1 + rnd() * 0.5;
    this.state = 'walk';
    this.t = 0;
    this.hp = 2;
    this.p.play('walk', 0.2, this.speed / 1.3);
    World.at(e, s, _p);
    this.p.x = _p.x; this.p.z = _p.z;
    this.p.y = world.hAt(_p.x, _p.z);
  }
  get x() { return this.p.x; }
  get z() { return this.p.z; }
  flee(fx, fz) {
    if (this.state === 'down') return;
    this.state = 'flee';
    this.t = 5 + rnd() * 3;
    const a = Math.atan2(this.p.x - fx, this.p.z - fz) + (rnd() - 0.5) * 0.8;
    this.fh = a;
    this.p.play('run', 0.15, 1.1);
  }
  knock(ix, iz, strong) {
    if (this.state === 'down') return false;
    this.state = 'down';
    this.t = 14;
    this.p.vx = ix; this.p.vz = iz;
    this.p.play('death', 0.08, strong ? 1.6 : 1.1);
    return true;
  }
  update(dt, world) {
    const P = this.p;
    if (this.state === 'walk') {
      this.s += this.speed * dt * this.dir;
      const e = this.e;
      if (this.s > e.L || this.s < 0) {
        const node = this.s > e.L ? e.b : e.a;
        const opts = node.e.filter((o) => o !== e);
        if (opts.length && rnd() < 0.85) {
          const n = rpick(opts);
          this.e = n;
          if (n.a === node) { this.dir = 1; this.s = 0; } else { this.dir = -1; this.s = n.L; }
        } else {
          this.dir = -this.dir;
          this.s = clamp(this.s, 0, e.L);
        }
      }
      World.at(this.e, this.s, _p);
      const tx = _p.x - _p.dz * this.off * this.dir, tz = _p.z + _p.dx * this.off * this.dir;
      const hh = Math.atan2(_p.dx * this.dir, _p.dz * this.dir);
      P.h += wrapA(hh - P.h) * clamp(dt * 6, 0, 1);
      P.x += (tx - P.x) * clamp(dt * 4, 0, 1);
      P.z += (tz - P.z) * clamp(dt * 4, 0, 1);
    } else if (this.state === 'flee') {
      this.t -= dt;
      const v = 4.2;
      P.x += Math.sin(this.fh) * v * dt;
      P.z += Math.cos(this.fh) * v * dt;
      P.h += wrapA(this.fh - P.h) * clamp(dt * 8, 0, 1);
      if (world.collide(P.x, P.z, P.y, 0.35, _hit)) {
        P.x = _hit.x; P.z = _hit.z;
        this.fh += (rnd() < 0.5 ? 1 : -1) * 1.2;
      }
      if (this.t <= 0) {
        // rejoin nearest walkway
        const near = world.pedGrid.query(P.x, P.z, 30, []);
        if (near.length) {
          this.e = rpick(near);
          this.s = rnd() * this.e.L;
          this.state = 'walk';
          this.p.play('walk', 0.3, this.speed / 1.3);
        } else this.t = 2;
      }
    } else if (this.state === 'down') {
      this.t -= dt;
      P.x += P.vx * dt; P.z += P.vz * dt;
      P.vx *= Math.exp(-4 * dt); P.vz *= Math.exp(-4 * dt);
      if (world.collide(P.x, P.z, P.y, 0.3, _hit)) { P.x = _hit.x; P.z = _hit.z; P.vx = P.vz = 0; }
    }
    P.y = world.surfaceY(P.x, P.z, P.y + 1);
    P.mixer.update(dt);
    P.sync();
  }
}
