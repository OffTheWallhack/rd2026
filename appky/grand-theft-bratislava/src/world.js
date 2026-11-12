// Grand Theft Bratislava - streaming world (terrain, tiles, buildings, bridges, props, graphs)
import * as THREE from 'three';
import earcut from 'earcut';
import { hash, clamp, lerp, segClosest, pointInRing } from './util.js';
import { HD_SKY, GROUND_HEAD, GROUND_BODY, WATER_HEAD, WATER_BODY, FACADE_HEAD, FACADE_BODY, ROOF_BODY } from './hdglsl.js';

export const shared = {
  uNight: { value: 0 },
  uTime: { value: 0 },
  uLamp: { value: null },
  uLampRect: { value: new THREE.Vector4(0, 0, 1, 0) },
  uFar: { value: null },
  uWorld: { value: new THREE.Vector2(1, 1) },
  uSun: { value: new THREE.Vector3(0, 1, 0) },
};

// sparse spatial hash; items can carry a tag (tile) and be removed in bulk
export class SGrid {
  constructor(cell) { this.cell = cell; this.m = new Map(); this.stamp = 0; }
  add(item, x0, z0, x1, z1, keys) {
    const c = this.cell;
    const i0 = Math.floor(Math.min(x0, x1) / c), i1 = Math.floor(Math.max(x0, x1) / c);
    const j0 = Math.floor(Math.min(z0, z1) / c), j1 = Math.floor(Math.max(z0, z1) / c);
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const k = j * 8192 + i;
        let a = this.m.get(k);
        if (!a) this.m.set(k, (a = []));
        a.push(item);
        if (keys) keys.add(k);
      }
  }
  query(x, z, r, out) {
    out.length = 0;
    const c = this.cell, st = ++this.stamp;
    const i0 = Math.floor((x - r) / c), i1 = Math.floor((x + r) / c);
    const j0 = Math.floor((z - r) / c), j1 = Math.floor((z + r) / c);
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const a = this.m.get(j * 8192 + i);
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
  removeTag(tag, keys) {
    for (const k of keys) {
      const a = this.m.get(k);
      if (!a) continue;
      const f = a.filter((it) => it.tag !== tag);
      if (f.length) this.m.set(k, f); else this.m.delete(k);
    }
  }
}

export function patchCommon(shader, extraVert = '', extraFragHead = '', extraFrag = '') {
  shader.uniforms.uNight = shared.uNight;
  shader.uniforms.uTime = shared.uTime;
  shader.uniforms.uLamp = shared.uLamp;
  shader.uniforms.uLampRect = shared.uLampRect;
  shader.uniforms.uFar = shared.uFar;
  shader.uniforms.uWorld = shared.uWorld;
  shader.uniforms.uSun = shared.uSun;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vWP;\nvarying vec3 vWN;\n' + extraVert.split('//MAIN')[0])
    .replace(
      '#include <worldpos_vertex>',
      `#include <worldpos_vertex>
      vec4 wpp = vec4(transformed, 1.0);
      vec3 wnn = objectNormal;
      #ifdef USE_INSTANCING
      wpp = instanceMatrix * wpp;
      wnn = mat3(instanceMatrix) * wnn;
      #endif
      vWP = (modelMatrix * wpp).xyz;
      vWN = normalize(mat3(modelMatrix) * wnn);
      ${extraVert.split('//MAIN')[1] || ''}`
    );
  shader.fragmentShader = shader.fragmentShader
    .replace(
      '#include <common>',
      `#include <common>
      varying vec3 vWP;
      varying vec3 vWN;
      uniform float uNight; uniform float uTime; uniform sampler2D uLamp; uniform vec4 uLampRect; uniform sampler2D uFar; uniform vec2 uWorld; uniform vec3 uSun;
      float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      vec3 lampAt(vec3 wp){ vec2 uv = (wp.xz - uLampRect.xy)/uLampRect.z; vec2 e = min(uv, 1.0-uv);
        float f = clamp(min(e.x, e.y)*10.0, 0.0, 1.0); return texture2D(uLamp, clamp(uv, 0.0, 1.0)).rgb * f; }
      float fbm(vec2 p){ return vnoise(p)*0.5 + vnoise(p*2.03+7.1)*0.3 + vnoise(p*4.1+3.7)*0.2; }
      ${HD_SKY}
      ${extraFragHead}`
    )
    .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + extraFrag);
}

const OLD = ['#e9dcb8', '#e8cf9a', '#f0e6d0', '#d9b99a', '#e6c3a8', '#cfd6c4', '#e2d3a0', '#f2ead8', '#c9b79a', '#ddc6c0', '#e8d8b0', '#d7c7a4', '#bfc9c9', '#efd9b8'];
const MOD = ['#b8bcc0', '#9aa4ac', '#c8c4bc', '#a9b3b5', '#d0ccc4'];
const HOUSE = ['#f1ead8', '#ece0c2', '#e9d6a8', '#f4f1ea', '#dfd3bd', '#e6c9a0', '#d9dccf', '#efe2cf', '#e0b58f', '#cfd3d6'];
const BLOCK = ['#c9c4b8', '#bdb7aa', '#d4cdbd', '#b3b6b4', '#cbbfa8', '#c2c7c4'];
const ROOF = ['#9a4a32', '#a85a3a', '#8a3e2c', '#7d4434', '#b0603f', '#94503a', '#53565c', '#5c5450'];
const KID = { old: 0, modern: 1, util: 2, church: 3, castle: 4, roof: 5, ruin: 2, panel: 6, house: 7, block: 8 };
const EMPTY = { bld: [], green: [], water: [], parea: [], walls: [], trees: [], lamps: [] };
const _col = new THREE.Color();

function b64i16(s) {
  const bin = atob(s);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return new Int16Array(u8.buffer);
}
function triAt(h, nx, nz, s, x, z) {
  let fx = x / s, fz = z / s;
  fx = fx < 0 ? 0 : fx > nx - 1.001 ? nx - 1.001 : fx;
  fz = fz < 0 ? 0 : fz > nz - 1.001 ? nz - 1.001 : fz;
  const ix = fx | 0, iz = fz | 0, tx = fx - ix, tz = fz - iz;
  const i = iz * nx + ix;
  const a = h[i], b = h[i + 1], c = h[i + nx], d = h[i + nx + 1];
  if (tx + tz <= 1) return a + (b - a) * tx + (c - a) * tz;
  return d + (c - d) * (1 - tx) + (b - d) * (1 - tz);
}

// ===================================================================================
export class World {
  constructor(data, base, opts = {}) {
    this.d = data;
    this.base = base;
    this.mobile = !!opts.mobile;
    const m = data.meta;
    this.W = m.w; this.H = m.h; this.water = m.water;
    this.T = m.tile; this.ntx = m.ntx; this.ntz = m.ntz;
    const sc = 100;
    const f = b64i16(data.hf), c = b64i16(data.hc);
    this.hf = new Float32Array(f.length); for (let i = 0; i < f.length; i++) this.hf[i] = f[i] / sc;
    this.hc = new Float32Array(c.length); for (let i = 0; i < c.length; i++) this.hc[i] = c[i] / sc;
    this.fs = m.fs; this.fn = m.fn; this.fx = m.fx; this.fz = m.fz; this.fw = (m.fn - 1) * m.fs;
    this.cs = m.cs; this.cnx = m.cnx; this.cnz = m.cnz;
    data.hf = data.hc = null;
    shared.uWorld.value.set(this.W, this.H);
    this.group = new THREE.Group();
    this.colliders = new SGrid(8);
    this.decks = new SGrid(16);
    this.names = new SGrid(24);
    this.edgeGrid = new SGrid(24);
    this.pedGrid = new SGrid(30);
    this._tmp = [];
    this._c = { x: 0, z: 0, t: 0 };
    this.gates = [];
    this.tiles = [];
    for (let j = 0; j < this.ntz; j++)
      for (let i = 0; i < this.ntx; i++)
        this.tiles.push({ i, j, k: j * this.ntx + i, has: data.have[j * this.ntx + i] === '1', state: 0, data: null, objs: [], keys: new Set(), lod: null, terr: null, tex: null, lampPts: [], x0: i * this.T, z0: j * this.T, fine: false });
    for (const t of this.tiles) t.fine = t.x0 < this.fx + this.fw && t.x0 + this.T > this.fx && t.z0 < this.fz + this.fw && t.z0 + this.T > this.fz;
    this.Rb = this.mobile ? 640 : 1000;   // building radius
    this.Rt = this.mobile ? 1700 : 2300;  // terrain radius
    this.Rn = this.mobile ? 330 : 420;    // hi-res ground radius
    this.texRes = this.mobile ? 768 : 1024;
    this.fountains = [];
    this.gen = null; this.genTile = null;
    this.tick = 0;
    this.lampDirty = true; this.lampC = [-1e9, -1e9]; this.lampT = 0;
    this.makeMaterials();
  }

  // ---------------------------------------------------------------- terrain sampling
  hAt(x, z) {
    const lx = x - this.fx, lz = z - this.fz;
    if (lx >= 0 && lz >= 0 && lx <= this.fw && lz <= this.fw) return triAt(this.hf, this.fn, this.fn, this.fs, lx, lz);
    return triAt(this.hc, this.cnx, this.cnz, this.cs, x, z);
  }
  surfaceY(x, z, yHint = 1e9) {
    let y = this.hAt(x, z);
    const a = this.decks.query(x, z, 1, this._tmp);
    for (let k = 0; k < a.length; k++) {
      const d = a[k];
      const c = segClosest(x, z, d.ax, d.az, d.bx, d.bz, this._c);
      if (Math.hypot(x - c.x, z - c.z) > d.hw) continue;
      const dy = d.ya + (d.yb - d.ya) * c.t;
      if (dy > y && yHint > dy - 2.2) y = dy;
    }
    return y;
  }
  onDeck(x, z, yHint) { return this.surfaceY(x, z, yHint) > this.hAt(x, z) + 0.5; }
  streetAt(x, z) {
    const a = this.names.query(x, z, 30, this._tmp);
    let best = null, bd = 30;
    for (const s of a) {
      const c = segClosest(x, z, s.ax, s.az, s.bx, s.bz, this._c);
      const d = Math.hypot(x - c.x, z - c.z) - s.hw;
      if (d < bd) { bd = d; best = s.n; }
    }
    return best;
  }

  // ---------------------------------------------------------------- init (global things)
  async init(progress) {
    const img = new Image();
    await new Promise((res) => { img.onload = res; img.onerror = res; img.src = this.base + 'far.jpg'; });
    this.farImg = img;
    const ft = new THREE.Texture(img);
    ft.colorSpace = THREE.SRGBColorSpace; ft.flipY = false; ft.anisotropy = 4; ft.needsUpdate = true;
    shared.uFar.value = ft;
    const lc = document.createElement('canvas');
    lc.width = lc.height = 512;
    this.lampCv = lc;
    const lt = new THREE.CanvasTexture(lc);
    lt.colorSpace = THREE.NoColorSpace; lt.minFilter = THREE.LinearFilter; lt.generateMipmaps = false; lt.flipY = false;
    shared.uLamp.value = lt;
    progress && progress(0.2);
    this.indexLines();
    this.buildBridges();
    this.buildBridgeMeshes();
    this.buildWater();
    progress && progress(0.5);
    this.buildRoadGraph();
    this.buildPedGraph();
    progress && progress(0.8);
    this.buildPylon();
    this.buildLod();
    progress && progress(1);
    return this;
  }

  indexLines() {
    const T = this.T;
    const mk = () => this.tiles.map(() => []);
    this.ix = { road: mk(), foot: mk(), cross: mk(), steps: mk(), tram: mk(), rail: mk() };
    const put = (arr, item, p, m) => {
      let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
      for (const q of p) { if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0]; if (q[1] < z0) z0 = q[1]; if (q[1] > z1) z1 = q[1]; }
      x0 = x0 / 10 - m; x1 = x1 / 10 + m; z0 = z0 / 10 - m; z1 = z1 / 10 + m;
      for (let j = Math.max(0, Math.floor(z0 / T)); j <= Math.min(this.ntz - 1, Math.floor(z1 / T)); j++)
        for (let i = Math.max(0, Math.floor(x0 / T)); i <= Math.min(this.ntx - 1, Math.floor(x1 / T)); i++) arr[j * this.ntx + i].push(item);
    };
    for (const r of this.d.road) put(this.ix.road, r, r.p, 14);
    for (const f of this.d.foot) put(this.ix.foot, f, f.p, 4);
    for (const c of this.d.cross) put(this.ix.cross, c, c, 4);
    for (const c of this.d.steps) put(this.ix.steps, c, c, 4);
    for (const t of this.d.tram) put(this.ix.tram, t, t.p, 4);
    for (const r of this.d.rail) put(this.ix.rail, r, r, 4);
  }

  makeMaterials() {
    this.farMat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    this.farMat.onBeforeCompile = (sh) => patchCommon(sh, '', '', `{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`);
    this.farMat.customProgramCacheKey = () => 'terrFar';
    // near ground: painted by the shader from a material mask (red = carriageway, green = grass, blue = setts)
    const rn = this.Rn;
    this.groundHead = GROUND_HEAD;
    this.groundBody = GROUND_BODY
      .replace('texture2D(uGMask, vWP.xz / uWorld).rgb', 'texture2D(map, vMapUv).rgb')
      .replace('diffuseColor.rgb = col;', `vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(rn * 0.55).toFixed(1)}, ${(rn * 0.95).toFixed(1)}, dist));`);
    if (this.groundBody === GROUND_BODY) throw new Error('ground shader patch failed');
    this.wallMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const PANEL = `} else if (panel) {
            float ww = min(1.5, bw * 0.55), y0 = floorH * 0.32, wh = floorH * 0.46;
            float joint = 1.0 - hdBand(q.y, 0.04, floorH + 1.0, aa.y);
            float vj = 1.0 - hdBand(wx, 0.012, 0.988, aa.x / bw);
            col *= 1.0 - 0.20 * max(joint, vj) * (1.0 - far) * above;
            float logg = step(0.62, h21(vec2(colI + seed * 17.0, 1.0))) * body * (1.0 - isGround);
            float hole = hdBox(q, vec2(-ww * 0.5, y0), vec2(ww * 0.5, y0 + wh), aa) * body;
            float pane = hdBox(q, vec2(-ww * 0.5 + 0.06, y0 + 0.06), vec2(ww * 0.5 - 0.06, y0 + wh - 0.06), aa) * body;
            float lg = hdBox(q, vec2(-bw * 0.42, 0.10), vec2(bw * 0.42, floorH - 0.25), aa) * logg;
            col = mix(col, col * 0.55, lg);
            float rail = hdBox(q, vec2(-bw * 0.42, 0.10), vec2(bw * 0.42, 1.05), aa) * logg;
            col = mix(col, mix(vec3(0.70), wall * 1.1, 0.5), rail);
            col = mix(col, vec3(0.84, 0.84, 0.82), hole * (1.0 - logg));
            float mull = hdBand(abs(q.x), 0.03, 9.0, aa.x);
            glass = pane * mix(1.0, mull, 1.0 - far) * (1.0 - logg);
            glass = max(glass, lg * hdBox(q, vec2(-ww * 0.5, 1.05), vec2(ww * 0.5, floorH - 0.45), aa) * (1.0 - rail));
            lit = glass * step(0.5, rnd);
          } else if (util) {`;
    let fb = FACADE_BODY
      .replace('bool old = kid < 0.5,', 'bool panel = kid > 5.5 && kid < 6.5; bool old = kid < 0.5 || kid > 6.5,')
      .replace('float gType = isGround * (old ? 1.0 : 0.0);', 'float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);')
      .replace('} else if (util) {', PANEL);
    if (fb.length < FACADE_BODY.length + 900) throw new Error('facade shader patch failed');
    this.wallMat.onBeforeCompile = (sh) =>
      patchCommon(sh, 'attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;', FACADE_HEAD, fb);
    this.roofMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, flatShading: true });
    this.roofMat.onBeforeCompile = (sh) => patchCommon(sh, '', '', ROOF_BODY);
    this.stoneMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, flatShading: true });
    this.stoneMat.onBeforeCompile = (sh) =>
      patchCommon(sh, '', '', `{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }`);
    this.trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 3.2, 5); this.trunkGeo.translate(0, 1.6, 0);
    this.crownGeo = new THREE.IcosahedronGeometry(2.6, 1); this.crownGeo.translate(0, 4.9, 0);
    this.postGeo = new THREE.CylinderGeometry(0.07, 0.1, 4.6, 5); this.postGeo.translate(0, 2.3, 0);
    this.headGeo = new THREE.SphereGeometry(0.28, 6, 4); this.headGeo.translate(0, 4.7, 0);
    for (const g of [this.trunkGeo, this.crownGeo, this.postGeo, this.headGeo]) g.userData.shared = true;
    this.trunkMat = new THREE.MeshLambertMaterial({ color: 0x4a3828 });
    this.crownMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
    this.crownMat.onBeforeCompile = (sh) =>
      patchCommon(sh, '', '', `{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }`);
    this.postMat = new THREE.MeshLambertMaterial({ color: 0x2c2e30 });
    this.lampHeadMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
    this.gateMat = new THREE.MeshLambertMaterial({ color: 0xd8d0bc });
  }

  // ---------------------------------------------------------------- streaming
  tdist(t, x, z) {
    const dx = Math.max(t.x0 - x, 0, x - (t.x0 + this.T)), dz = Math.max(t.z0 - z, 0, z - (t.z0 + this.T));
    return Math.hypot(dx, dz);
  }
  fetchTile(t) {
    t.state = 1;
    if (!t.has) { t.data = EMPTY; t.state = 2; return Promise.resolve(); }
    return fetch(this.base + 't/' + t.i + '_' + t.j + '.json')
      .then((r) => (r.ok ? r.json() : EMPTY))
      .catch(() => EMPTY)
      .then((d) => { if (t.state === 1) { t.data = d; t.state = 2; } });
  }
  unloadTile(t) {
    if (this.genTile === t) { this.gen = null; this.genTile = null; }
    for (const o of t.objs) {
      this.group.remove(o);
      o.traverse((m) => { if (m.isInstancedMesh) m.dispose(); else if (m.isMesh && m.geometry && !m.geometry.userData.shared) m.geometry.dispose(); });
    }
    t.objs.length = 0;
    this.colliders.removeTag(t, t.keys);
    t.keys.clear();
    this.gates = this.gates.filter((g) => g.tile !== t);
    this.fountains = this.fountains.filter((f) => f.tile !== t);
    t.data = null; t.state = 0; t.lampPts = [];
    if (t.lod) t.lod.visible = true;
    this.dropTex(t);
    this.lampDirty = true;
  }
  dropTex(t) {
    if (!t.tex) return;
    t.tex.dispose(); t.tex = null; t.cv = null;
    if (t.nearMat) { t.nearMat.dispose(); t.nearMat = null; }
    if (t.terr) t.terr.material = this.farMat;
  }
  runGen(budget) {
    const t0 = performance.now();
    while (this.gen) {
      const r = this.gen.next();
      if (r.done) { this.gen = null; this.genTile = null; }
      if (performance.now() - t0 > budget) break;
    }
  }
  update(x, z, budget = 5) {
    if (this.tick++ % 8 === 0) {
      let best = null, bd = 1e9, paint = null, pd = 1e9;
      for (const t of this.tiles) {
        const d = this.tdist(t, x, z);
        if (d < this.Rt) { if (!t.terr) this.makeTerrain(t); }
        else if (d > this.Rt + 400 && t.terr) { this.group.remove(t.terr); t.terr.geometry.dispose(); t.terr = null; }
        if (d < this.Rb) {
          if (t.state === 0) this.fetchTile(t);
          else if (t.state === 2 && d < bd) { bd = d; best = t; }
        } else if (d > this.Rb + 320 && t.state >= 1) this.unloadTile(t);
        if (d < this.Rn && t.state === 4 && !t.tex && d < pd) { pd = d; paint = t; }
        else if (d > this.Rn + 260 && t.tex) this.dropTex(t);
      }
      if (!this.gen && best) { this.genTile = best; best.state = 3; this.gen = this.buildTile(best); }
      else if (!this.gen && paint) this.paintTile(paint);
    }
    if (this.gen) this.runGen(budget);
    this.lampT -= 1;
    if ((this.lampDirty && this.lampT <= 0) || Math.hypot(x - this.lampC[0], z - this.lampC[1]) > 190) this.paintLamps(x, z);
  }
  // load + build everything around a point right now (boot / teleport)
  async prime(x, z) {
    const need = this.tiles.filter((t) => this.tdist(t, x, z) < this.Rb);
    await Promise.all(need.filter((t) => t.state === 0).map((t) => this.fetchTile(t)));
    for (const t of this.tiles) if (this.tdist(t, x, z) < this.Rt && !t.terr) this.makeTerrain(t);
    if (this.gen) this.runGen(1e9);
    for (const t of need) if (t.state === 2) { t.state = 3; this.genTile = t; this.gen = this.buildTile(t); this.runGen(1e9); }
    for (const t of need) if (t.state === 4 && !t.tex && this.tdist(t, x, z) < this.Rn) this.paintTile(t);
    this.paintLamps(x, z);
  }

  // ---------------------------------------------------------------- terrain tile
  makeTerrain(t) {
    const s = t.fine ? this.fs : this.cs, n = Math.round(this.T / s) + 1;
    const nv = n * n + 4 * n;
    const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), uv = new Float32Array(nv * 2);
    for (let j = 0; j < n; j++)
      for (let i = 0; i < n; i++) {
        const k = j * n + i, x = t.x0 + i * s, z = t.z0 + j * s;
        pos[k * 3] = x; pos[k * 3 + 1] = this.hAt(x, z); pos[k * 3 + 2] = z;
        const nx = this.hAt(x - s, z) - this.hAt(x + s, z), nz = this.hAt(x, z - s) - this.hAt(x, z + s);
        const L = Math.hypot(nx, 2 * s, nz);
        nor[k * 3] = nx / L; nor[k * 3 + 1] = (2 * s) / L; nor[k * 3 + 2] = nz / L;
        uv[k * 2] = (i * s) / this.T; uv[k * 2 + 1] = (j * s) / this.T;
      }
    const idx = new Uint16Array((n - 1) * (n - 1) * 6 + 4 * (n - 1) * 6);
    let q = 0;
    for (let j = 0; j < n - 1; j++)
      for (let i = 0; i < n - 1; i++) {
        const a = j * n + i, b = a + 1, c = a + n, d = c + 1;
        idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d;
      }
    let v = n * n;
    const edge = (get) => {
      const start = v;
      for (let i = 0; i < n; i++) {
        const k = get(i);
        pos[v * 3] = pos[k * 3]; pos[v * 3 + 1] = pos[k * 3 + 1] - 5; pos[v * 3 + 2] = pos[k * 3 + 2];
        nor[v * 3] = nor[k * 3]; nor[v * 3 + 1] = nor[k * 3 + 1]; nor[v * 3 + 2] = nor[k * 3 + 2];
        uv[v * 2] = uv[k * 2]; uv[v * 2 + 1] = uv[k * 2 + 1];
        if (i) { const a = get(i - 1), c = start + i - 1, d = start + i; idx[q++] = a; idx[q++] = c; idx[q++] = k; idx[q++] = k; idx[q++] = c; idx[q++] = d; }
        v++;
      }
    };
    edge((i) => i); edge((i) => (n - 1) * n + i); edge((i) => i * n); edge((i) => i * n + n - 1);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, t.nearMat || this.farMat);
    mesh.receiveShadow = true;
    t.terr = mesh;
    this.group.add(mesh);
  }

  buildWater() {
    const geo = new THREE.PlaneGeometry(this.W + 3000, this.H + 3000, 1, 1);
    geo.rotateX(-Math.PI / 2);
    geo.translate(this.W / 2, this.water, this.H / 2);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const wb = WATER_BODY
      .replace('vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)', 'vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)')
      .replace('float fres = 0.04 + 0.96 *', 'float fres = 0.12 + 0.88 *');
    if (wb === WATER_BODY) throw new Error('water shader patch failed');
    mat.onBeforeCompile = (sh) => patchCommon(sh, '', WATER_HEAD, wb);
    this.waterMat = mat;
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true;
    m.frustumCulled = false;
    this.group.add(m);
  }

  // ---------------------------------------------------------------- ground texture of one tile
  paintTile(t) {
    const S = 384, T = this.T, d = t.data || EMPTY;
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const g = cv.getContext('2d');
    const k = S / T;
    g.setTransform(k, 0, 0, k, -t.x0 * k, -t.z0 * k);
    const line = (pts) => {
      g.beginPath();
      for (let i = 0; i < pts.length; i++) { const x = pts[i][0] / 10, z = pts[i][1] / 10; i ? g.lineTo(x, z) : g.moveTo(x, z); }
    };
    const poly = (rings) => {
      g.beginPath();
      for (const r of rings) {
        for (let i = 0; i < r.length; i++) { const x = r[i][0] / 10 + t.x0, z = r[i][1] / 10 + t.z0; i ? g.lineTo(x, z) : g.moveTo(x, z); }
        g.closePath();
      }
    };
    g.fillStyle = '#7d8466';
    g.fillRect(t.x0, t.z0, T, T);
    const R = this.d.meta.rich;
    if (R) { g.fillStyle = '#857f72'; g.fillRect(R[0], R[1], R[2] - R[0], R[3] - R[1]); }
    g.fillStyle = '#56703c';
    for (const p of d.green) { poly(p); g.fill('evenodd'); }
    g.fillStyle = '#b0a389';
    for (const p of d.parea) { poly(p); g.fill('evenodd'); }
    g.fillStyle = '#26323a';
    for (const p of d.water) { poly(p); g.fill('evenodd'); }
    g.lineCap = 'round'; g.lineJoin = 'round';
    const roads = this.ix.road[t.k].filter((r) => !r.b);
    g.strokeStyle = '#a39a8a';
    for (const r of roads) if (r.c >= 1 && r.c <= 4) { g.lineWidth = r.w + 3.6; line(r.p); g.stroke(); }
    g.strokeStyle = '#6f685e';
    for (const r of roads) if (r.c >= 1 && r.c <= 4) { g.lineWidth = r.w + 0.6; line(r.p); g.stroke(); }
    g.strokeStyle = '#a69c86';
    for (const f of this.ix.foot[t.k]) { g.lineWidth = f.sw ? 2.2 : 2.6; line(f.p); g.stroke(); }
    g.strokeStyle = '#968c7c'; g.lineWidth = 3;
    for (const f of this.ix.steps[t.k]) { line(f); g.stroke(); }
    g.strokeStyle = '#b5a88e';
    for (const r of roads) if (r.c === 5) { g.lineWidth = r.w; line(r.p); g.stroke(); }
    g.lineCap = 'butt';
    for (const r of this.ix.rail[t.k]) {
      g.strokeStyle = '#5a534c'; g.lineWidth = 3.4; g.setLineDash([]); line(r); g.stroke();
      g.strokeStyle = '#8f8a84'; g.lineWidth = 1.6; g.setLineDash([0.35, 0.55]); line(r); g.stroke();
    }
    g.setLineDash([]); g.lineCap = 'round';
    const order = roads.filter((r) => r.c <= 4).sort((a, b) => a.c - b.c);
    for (const r of order) {
      g.strokeStyle = r.s ? '#615850' : r.pk ? '#46464a' : '#3a3b40';
      g.lineWidth = r.w; line(r.p); g.stroke();
    }
    g.lineCap = 'butt';
    for (const r of order) {
      if (r.c < 2 || r.s) continue;
      g.strokeStyle = 'rgba(225,222,210,0.75)'; g.lineWidth = 0.18;
      if (!r.o) { g.setLineDash(r.c >= 4 ? [] : [3, 6]); line(r.p); g.stroke(); }
      else if (r.w > 7) { g.setLineDash([3, 6]); line(r.p); g.stroke(); }
      g.setLineDash([]);
    }
    g.strokeStyle = 'rgba(40,40,40,0.55)'; g.lineWidth = 1.8;
    for (const tr of this.ix.tram[t.k]) if (!tr.b) { line(tr.p); g.stroke(); }
    g.strokeStyle = 'rgba(190,190,195,0.8)'; g.lineWidth = 0.15;
    for (const tr of this.ix.tram[t.k]) if (!tr.b) {
      for (const o of [-0.72, 0.72]) {
        g.beginPath();
        const p = tr.p;
        for (let i = 0; i < p.length; i++) {
          const a = p[Math.max(0, i - 1)], b = p[Math.min(p.length - 1, i + 1)];
          const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1;
          const x = p[i][0] / 10 - (dz / L) * o, z = p[i][1] / 10 + (dx / L) * o;
          i ? g.lineTo(x, z) : g.moveTo(x, z);
        }
        g.stroke();
      }
    }
    g.strokeStyle = 'rgba(235,235,228,0.9)'; g.lineWidth = 3.2; g.setLineDash([0.55, 0.55]);
    for (const c of this.ix.cross[t.k]) { line(c); g.stroke(); }
    g.setLineDash([]);
    g.fillStyle = '#3c3833';
    for (const b of d.bld) if (!b.m || b.m < 1) { poly([b.o]); g.fill(); }
    t.cv = cv;
    this.paintMask(t);
  }
  paintMask(t) {
    const S = this.texRes, T = this.T, d = t.data || EMPTY;
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const g = cv.getContext('2d', { alpha: false });
    const k = S / T;
    g.setTransform(k, 0, 0, k, -t.x0 * k, -t.z0 * k);
    const line = (pts) => {
      g.beginPath();
      for (let i = 0; i < pts.length; i++) { const x = pts[i][0] / 10, z = pts[i][1] / 10; i ? g.lineTo(x, z) : g.moveTo(x, z); }
    };
    const poly = (rings) => {
      g.beginPath();
      for (const r of rings) {
        for (let i = 0; i < r.length; i++) { const x = r[i][0] / 10 + t.x0, z = r[i][1] / 10 + t.z0; i ? g.lineTo(x, z) : g.moveTo(x, z); }
        g.closePath();
      }
    };
    // suburbs: lawn between the houses; old town: paving
    g.fillStyle = '#0f0';
    g.fillRect(t.x0, t.z0, T, T);
    const R = this.d.meta.rich;
    if (R) { g.fillStyle = '#000'; g.fillRect(R[0], R[1], R[2] - R[0], R[3] - R[1]); }
    g.fillStyle = '#0f0';
    for (const p of d.green) { poly(p); g.fill('evenodd'); }
    g.fillStyle = '#00f';
    for (const p of d.parea) { poly(p); g.fill('evenodd'); }
    g.lineCap = 'round'; g.lineJoin = 'round';
    const roads = this.ix.road[t.k].filter((r) => !r.b);
    g.strokeStyle = '#000';
    for (const r of roads) if (r.c >= 1 && r.c <= 4) { g.lineWidth = r.w + 3.6; line(r.p); g.stroke(); }
    for (const f of this.ix.foot[t.k]) { g.lineWidth = f.sw ? 2.2 : 2.6; line(f.p); g.stroke(); }
    g.lineWidth = 3;
    for (const f of this.ix.steps[t.k]) { line(f); g.stroke(); }
    g.lineWidth = 4.2;
    for (const r of this.ix.rail[t.k]) { line(r); g.stroke(); }
    // house plots: paved strip around every building outside the old town
    g.strokeStyle = '#00f';
    for (const r of roads) if (r.c === 5) { g.lineWidth = r.w; line(r.p); g.stroke(); }
    for (const r of roads.filter((r) => r.c <= 4).sort((a, b) => a.c - b.c)) {
      const pedLane = r.c === 0 && (r.s || r.nv);
      g.strokeStyle = pedLane ? '#00f' : r.s ? '#f0f' : '#f00';
      g.lineWidth = r.w; line(r.p); g.stroke();
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.NoColorSpace; tex.anisotropy = 4; tex.flipY = false;
    tex.minFilter = THREE.LinearMipmapLinearFilter; tex.generateMipmaps = true;
    t.tex = tex;
    const mat = new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => patchCommon(sh, '', this.groundHead, this.groundBody);
    mat.customProgramCacheKey = () => 'terrNear';
    t.nearMat = mat;
    if (t.terr) t.terr.material = mat;
    tex.onUpdate = () => { cv.width = cv.height = 1; };
  }
  // minimap / map helper: draws the ground (world metres) into a 2D context
  drawGround(g, x, z, r) {
    if (this.farImg && this.farImg.width) g.drawImage(this.farImg, 0, 0, this.W, this.H);
    for (const t of this.tiles) if (t.cv && this.tdist(t, x, z) < r) g.drawImage(t.cv, t.x0, t.z0, this.T, this.T);
  }

  paintLamps(x, z) {
    const S = 1152, cv = this.lampCv, g = cv.getContext('2d');
    const ox = Math.round(x / 48) * 48 - S / 2, oz = Math.round(z / 48) * 48 - S / 2;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalCompositeOperation = 'source-over';
    g.fillStyle = '#000'; g.fillRect(0, 0, cv.width, cv.height);
    const k = cv.width / S;
    g.setTransform(k, 0, 0, k, -ox * k, -oz * k);
    g.globalCompositeOperation = 'lighter';
    const R = 13;
    for (const t of this.tiles) {
      if (!t.lampPts.length || t.x0 > ox + S || t.x0 + this.T < ox || t.z0 > oz + S || t.z0 + this.T < oz) continue;
      for (const [lx, lz] of t.lampPts) {
        if (lx < ox - R || lz < oz - R || lx > ox + S + R || lz > oz + S + R) continue;
        const gr = g.createRadialGradient(lx, lz, 0, lx, lz, R);
        gr.addColorStop(0, 'rgba(255,190,110,0.85)'); gr.addColorStop(0.35, 'rgba(255,170,90,0.35)'); gr.addColorStop(1, 'rgba(255,150,70,0)');
        g.fillStyle = gr; g.fillRect(lx - R, lz - R, R * 2, R * 2);
      }
    }
    shared.uLampRect.value.set(ox, oz, S, 0);
    shared.uLamp.value.needsUpdate = true;
    this.lampC = [x, z]; this.lampDirty = false; this.lampT = 40;
  }

  // ---------------------------------------------------------------- building emitter
  emitBuilding(A, b, outer, inners, seed, tile, lod) {
    let gmin = 1e9, gmax = -1e9;
    for (const p of outer) {
      const h = this.hAt(p[0], p[1]);
      if (h < gmin) gmin = h; if (h > gmax) gmax = h;
    }
    const h = b.h;
    const top = gmin + Math.max(h, gmax - gmin + 2.5);
    const gate = !lod && b.g && h > 6 && !(b.m > 0.5);
    const bot = gate ? gmin + 4.3 : b.m > 0.5 ? gmin + b.m : gmin - 3;
    const col = _col;
    if (b.c) col.set(b.c);
    else if (b.k === 'modern') col.set(MOD[(seed * MOD.length) | 0]);
    else if (b.k === 'util') col.set('#a8a296');
    else if (b.k === 'church') col.set('#eee4cc');
    else if (b.k === 'house') col.set(HOUSE[(seed * HOUSE.length) | 0]);
    else if (b.k === 'block') col.set(BLOCK[(seed * BLOCK.length) | 0]);
    else if (b.k === 'panel') col.set('#d9d2c0');
    else col.set(OLD[(seed * OLD.length) | 0]);
    const wr = col.r, wg = col.g, wb = col.b;
    const levels = b.l || Math.max(1, Math.round(h / (b.k === 'panel' ? 2.9 : 3.4)));
    const floorH = b.t ? 7.5 : clamp(h / Math.max(1, levels), 2.7, 5.5);
    const kid = KID[b.k] ?? 0;
    const spacing = b.k === 'modern' ? 2.6 : b.k === 'church' ? 5 : b.k === 'panel' ? 3.0 : b.k === 'house' ? 3.8 : 3.4;
    const rings = [outer, ...inners];
    for (const ring of rings) {
      const n = ring.length;
      let sa = 0;
      for (let i = 0; i < n; i++) { const a = ring[i], c = ring[(i + 1) % n]; sa += a[0] * c[1] - c[0] * a[1]; }
      const sgn = (sa > 0 ? -1 : 1) * (ring === outer ? 1 : -1);
      const eps = b.p ? 0.06 : 0;
      for (let i = 0; i < n; i++) {
        const a = ring[i], c = ring[(i + 1) % n];
        const L = Math.hypot(c[0] - a[0], c[1] - a[1]);
        if (L < 0.05) continue;
        const cnt = L < 2.2 ? 0 : Math.max(1, Math.round(L / spacing));
        const v0 = bot - gmin, v1 = top - gmin, x0 = cnt ? 0 : -1, x1 = cnt ? cnt : -1, bayW = L / Math.max(1, cnt);
        const nxn = (c[1] - a[1]) / L, nzn = -(c[0] - a[0]) / L;
        const ox = nxn * sgn * eps, oz = nzn * sgn * eps;
        const ax = a[0] + ox, az = a[1] + oz, bx = c[0] + ox, bz = c[1] + oz;
        A.wp.push(ax, bot, az, bx, bot, bz, bx, top, bz, ax, bot, az, bx, top, bz, ax, top, az);
        A.wf.push(x0, v0, bayW, x1, v0, bayW, x1, v1, bayW, x0, v0, bayW, x1, v1, bayW, x0, v1, bayW);
        for (let q = 0; q < 6; q++) { A.wn.push(nxn, 0, nzn); A.wc.push(wr, wg, wb); A.wd.push(floorH, kid, seed, top - gmin); }
        if (!lod && !(b.m >= 2) && !gate && b.k !== 'roof' && b.k !== 'ruin')
          this.colliders.add({ ax: a[0], az: a[1], bx: c[0], bz: c[1], y0: bot - 50, y1: top, kind: 'b', tag: tile }, a[0], a[1], c[0], c[1], tile.keys);
      }
    }
    const flat = [], holes = [];
    for (const p of outer) flat.push(p[0], p[1]);
    for (const r of inners) { holes.push(flat.length / 2); for (const p of r) flat.push(p[0], p[1]); }
    if (gate) {
      this.gates.push({ outer, gmin, bot, tile });
      const tr = earcut(flat, holes);
      for (let i = 0; i < tr.length; i++) { A.rp.push(flat[tr[i] * 2], bot, flat[tr[i] * 2 + 1]); A.rc.push(0.35, 0.33, 0.3); }
    }
    if (!lod && b.r > 0.3 && b.s !== 'f') this.pitchedRoof(outer, inners, flat, holes, top, b, seed, A.rp, A.rc);
    else {
      const tri = earcut(flat, holes);
      if (b.rc) col.set(b.rc);
      else col.set(b.k === 'modern' ? '#5d5f63' : b.k === 'util' ? '#6c6a66' : b.k === 'panel' ? '#6f6c66' : '#615c58');
      const shade = 0.9 + seed * 0.2;
      for (let i = 0; i < tri.length; i++) { A.rp.push(flat[tri[i] * 2], top, flat[tri[i] * 2 + 1]); A.rc.push(col.r * shade, col.g * shade, col.b * shade); }
      if (b.m > 0.5) for (let i = tri.length - 1; i >= 0; i--) { A.rp.push(flat[tri[i] * 2], bot, flat[tri[i] * 2 + 1]); A.rc.push(col.r * 0.6, col.g * 0.6, col.b * 0.6); }
    }
  }

  pitchedRoof(outer, inners, flat, holes, top, b, seed, rp, rc) {
    const tri = earcut(flat, holes);
    const V = [];
    for (let i = 0; i < flat.length; i += 2) V.push([flat[i], flat[i + 1]]);
    const E = [];
    for (const r of [outer, ...inners]) for (let i = 0; i < r.length; i++) E.push([r[i], r[(i + 1) % r.length]]);
    let area = 0;
    for (let i = 0; i < outer.length; i++) { const a = outer[i], c = outer[(i + 1) % outer.length]; area += a[0] * c[1] - c[0] * a[1]; }
    area = Math.abs(area / 2);
    const simple = b.k === 'house' || this.mobile;
    const maxL = simple ? Math.max(3.2, Math.sqrt(area) / 5) : Math.max(2.2, Math.sqrt(area) / 14);
    let T = [];
    for (let i = 0; i < tri.length; i += 3) T.push([tri[i], tri[i + 1], tri[i + 2]]);
    const mid = new Map();
    const midpt = (a, c) => {
      const k = a < c ? a * 1e6 + c : c * 1e6 + a;
      let m = mid.get(k);
      if (m === undefined) { m = V.length; V.push([(V[a][0] + V[c][0]) / 2, (V[a][1] + V[c][1]) / 2]); mid.set(k, m); }
      return m;
    };
    const long = (a, c) => Math.hypot(V[a][0] - V[c][0], V[a][1] - V[c][1]) > maxL;
    for (let it = 0; it < (simple ? 4 : 7); it++) {
      let any = false;
      const N = [];
      for (const t of T) {
        const l0 = long(t[0], t[1]), l1 = long(t[1], t[2]), l2 = long(t[2], t[0]);
        const cnt = l0 + l1 + l2;
        if (!cnt) { N.push(t); continue; }
        any = true;
        let [a, b2, c] = t, L = [l0, l1, l2];
        if (cnt === 1) {
          while (!L[0]) { [a, b2, c] = [b2, c, a]; L = [L[1], L[2], L[0]]; }
          const m = midpt(a, b2);
          N.push([a, m, c], [m, b2, c]);
        } else if (cnt === 2) {
          while (L[2]) { [a, b2, c] = [b2, c, a]; L = [L[1], L[2], L[0]]; }
          const m1 = midpt(a, b2), m2 = midpt(b2, c);
          N.push([a, m1, m2], [m1, b2, m2], [a, m2, c]);
        } else {
          const m1 = midpt(a, b2), m2 = midpt(b2, c), m3 = midpt(c, a);
          N.push([a, m1, m3], [m1, b2, m2], [m3, m2, c], [m1, m2, m3]);
        }
      }
      T = N;
      if (!any) break;
    }
    const D = V.map(([x, z]) => {
      let d = 1e9;
      for (const [p, q] of E) {
        const dx = q[0] - p[0], dz = q[1] - p[1];
        const L2 = dx * dx + dz * dz || 1e-9;
        let t = ((x - p[0]) * dx + (z - p[1]) * dz) / L2;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const ex = p[0] + dx * t - x, ez = p[1] + dz * t - z;
        const dd = ex * ex + ez * ez;
        if (dd < d) d = dd;
      }
      return Math.sqrt(d);
    });
    let maxD = 0.01;
    for (const d of D) maxD = Math.max(maxD, d);
    const rh = b.r;
    let Y;
    if (b.s === 'd') Y = D.map((d) => rh * Math.sqrt(Math.max(0, 1 - (1 - d / maxD) ** 2)));
    else if (b.s === 'p') Y = D.map((d) => (rh * d) / maxD);
    else Y = D.map((d) => Math.min(d * 0.82, rh + 1.2));
    const c = _col;
    if (b.rc) c.set(b.rc); else c.set(ROOF[(hash((seed * 1e6) | 0) * ROOF.length) | 0]);
    const cr = c.r, cg = c.g, cb = c.b;
    for (const t of T) {
      const sh = 0.88 + hash(t[0] * 31 + t[1]) * 0.1;
      for (const i of t) { rp.push(V[i][0], top + Y[i], V[i][1]); rc.push(cr * sh, cg * sh, cb * sh); }
    }
  }

  meshesFrom(A, shadows = true) {
    const out = [];
    if (A.wp.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(A.wp, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(A.wn, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(A.wc, 3));
      geo.setAttribute('fuv', new THREE.Float32BufferAttribute(A.wf, 3));
      geo.setAttribute('fdat', new THREE.Float32BufferAttribute(A.wd, 4));
      geo.computeBoundingSphere();
      const m = new THREE.Mesh(geo, this.wallMat);
      m.castShadow = m.receiveShadow = shadows;
      out.push(m);
    }
    if (A.rp.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(A.rp, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(A.rc, 3));
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const m = new THREE.Mesh(geo, this.roofMat);
      m.castShadow = m.receiveShadow = shadows;
      out.push(m);
    }
    return out;
  }
  newArrays() { return { wp: [], wn: [], wc: [], wf: [], wd: [], rp: [], rc: [] }; }

  // far skyline: tall buildings as cheap shells, shown while their tile is not built
  buildLod() {
    const per = new Map();
    this.d.tall.forEach((b, n) => {
      const outer = b.o.map((p) => [p[0] / 10, p[1] / 10]);
      let cx = 0, cz = 0;
      for (const p of outer) { cx += p[0]; cz += p[1]; }
      cx /= outer.length; cz /= outer.length;
      const ti = clamp(Math.floor(cx / this.T), 0, this.ntx - 1), tj = clamp(Math.floor(cz / this.T), 0, this.ntz - 1);
      const t = this.tiles[tj * this.ntx + ti];
      let A = per.get(t);
      if (!A) per.set(t, (A = this.newArrays()));
      this.emitBuilding(A, b, outer, [], hash(n * 613 + 7), t, true);
    });
    for (const [t, A] of per) {
      const g = new THREE.Group();
      for (const m of this.meshesFrom(A, false)) g.add(m);
      t.lod = g;
      this.group.add(g);
    }
    this.d.tall = null;
  }

  // ---------------------------------------------------------------- build one tile (generator = time sliced)
  *buildTile(t) {
    const d = t.data, T = this.T, x0 = t.x0, z0 = t.z0;
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const nT = d.trees.length;
    if (nT) {
      const tm = new THREE.InstancedMesh(this.trunkGeo, this.trunkMat, nT), cm = new THREE.InstancedMesh(this.crownGeo, this.crownMat, nT);
      for (let i = 0; i < nT; i++) {
        const x = d.trees[i][0] / 10 + x0, z = d.trees[i][1] / 10 + z0, hs = t.k * 4099 + i;
        const s = 0.75 + hash(hs * 3 + 1) * 0.6, y = this.hAt(x, z);
        q.setFromAxisAngle(up, hash(hs) * 6.28);
        M.compose(P.set(x, y, z), q, S.set(s, s * (0.9 + hash(hs * 5) * 0.3), s));
        tm.setMatrixAt(i, M); cm.setMatrixAt(i, M);
        _col.setHSL(0.22 + hash(hs * 11) * 0.08, 0.38 + hash(hs * 17) * 0.2, 0.22 + hash(hs * 19) * 0.1);
        cm.setColorAt(i, _col);
        this.colliders.add({ ax: x - 0.25, az: z, bx: x + 0.25, bz: z, y0: y - 2, y1: y + 3, kind: 't', tag: t }, x - 0.3, z - 0.3, x + 0.3, z + 0.3, t.keys);
      }
      tm.castShadow = cm.castShadow = !this.mobile || nT < 500;
      cm.receiveShadow = true;
      tm.frustumCulled = cm.frustumCulled = false;
      const g = new THREE.Group(); g.add(tm, cm);
      t.objs.push(g); this.group.add(g);
    }
    yield;
    const lamps = d.lamps.map((l) => [l[0] / 10 + x0, l[1] / 10 + z0]);
    const lg = new SGrid(20), tmp = [];
    for (const l of lamps) lg.add(l, l[0], l[1], l[0], l[1]);
    for (const r of this.ix.road[t.k]) {
      if (r.b || r.c < 1 || r.c > 5) continue;
      const p = r.p;
      let acc = 14 + hash(p[0][0] * 7 + p[0][1]) * 10, side = 1;
      for (let i = 0; i < p.length - 1; i++) {
        const ax = p[i][0] / 10, az = p[i][1] / 10, bx = p[i + 1][0] / 10, bz = p[i + 1][1] / 10;
        const SL = Math.hypot(bx - ax, bz - az);
        if (SL < 0.01) continue;
        while (acc < SL) {
          const tt = acc / SL, nx = -(bz - az) / SL, nz = (bx - ax) / SL;
          const off = r.c === 5 ? 0 : r.w / 2 + 0.9;
          const x = ax + (bx - ax) * tt + nx * off * side, z = az + (bz - az) * tt + nz * off * side;
          if (x >= x0 && z >= z0 && x < x0 + T && z < z0 + T && !lg.query(x, z, 13, tmp).length) { const l = [x, z]; lamps.push(l); lg.add(l, x, z, x, z); }
          side = -side;
          acc += r.c >= 3 ? 26 : 30;
        }
        acc -= SL;
      }
    }
    t.lampPts = lamps;
    const L = lamps.filter(([x, z]) => this.surfaceY(x, z) === this.hAt(x, z));
    if (L.length) {
      const pm = new THREE.InstancedMesh(this.postGeo, this.postMat, L.length), hm = new THREE.InstancedMesh(this.headGeo, this.lampHeadMat, L.length);
      L.forEach(([x, z], i) => {
        M.makeTranslation(x, this.hAt(x, z), z);
        pm.setMatrixAt(i, M); hm.setMatrixAt(i, M);
        this.colliders.add({ ax: x - 0.1, az: z, bx: x + 0.1, bz: z, y0: -50, y1: 999, kind: 'p', tag: t }, x - 0.2, z - 0.2, x + 0.2, z + 0.2, t.keys);
      });
      pm.frustumCulled = hm.frustumCulled = false;
      const g = new THREE.Group(); g.add(pm, hm);
      t.objs.push(g); this.group.add(g);
    }
    yield;
    const A = this.newArrays();
    const gates0 = this.gates.length;
    for (let n = 0; n < d.bld.length; n++) {
      const b = d.bld[n];
      if (b.n === 'UFO') continue;
      if (b.n === 'Kostol sv. Alžbety') { b.c = '#9cc4e8'; b.rc = '#5f86b4'; }
      const outer = b.o.map((p) => [p[0] / 10 + x0, p[1] / 10 + z0]);
      const inners = (b.i || []).map((r) => r.map((p) => [p[0] / 10 + x0, p[1] / 10 + z0]));
      this.emitBuilding(A, b, outer, inners, hash(t.k * 7919 + n * 977 + 13), t, false);
      if (n % 24 === 23) yield;
    }
    for (let gi = gates0; gi < this.gates.length; gi++) {
      const g = this.gates[gi], r = g.outer;
      if (g.tile !== t) continue;
      let cx = 0, cz = 0;
      for (const p of r) { cx += p[0]; cz += p[1]; }
      cx /= r.length; cz /= r.length;
      const cs = r.slice().sort((a, b) => Math.hypot(b[0] - cx, b[1] - cz) - Math.hypot(a[0] - cx, a[1] - cz)).slice(0, 4);
      for (const p of cs) {
        const px = p[0] + (cx - p[0]) * 0.18, pz = p[1] + (cz - p[1]) * 0.18, hgt = g.bot - g.gmin + 3;
        const m = new THREE.Mesh(new THREE.BoxGeometry(1.8, hgt, 1.8), this.gateMat);
        m.position.set(px, g.gmin - 3 + hgt / 2, pz);
        m.castShadow = m.receiveShadow = true;
        t.objs.push(m); this.group.add(m);
        this.colliders.add({ ax: px - 0.9, az: pz, bx: px + 0.9, bz: pz, y0: -50, y1: g.bot, kind: 'b', tag: t }, px - 1, pz - 1, px + 1, pz + 1, t.keys);
        this.colliders.add({ ax: px, az: pz - 0.9, bx: px, bz: pz + 0.9, y0: -50, y1: g.bot, kind: 'b', tag: t }, px - 1, pz - 1, px + 1, pz + 1, t.keys);
      }
    }
    yield;
    for (const m of this.meshesFrom(A)) { t.objs.push(m); this.group.add(m); }
    yield;
    this.buildMarkings(t);
    yield;
    this.buildFountains(t);
    yield;
    if (d.walls.length) {
      const pos = [], colA = [], c = new THREE.Color();
      const box = (ax, az, bx, bz, y0a, y0b, y1a, y1b, th) => {
        const Ln = Math.hypot(bx - ax, bz - az);
        if (Ln < 0.05) return;
        const nx = (-(bz - az) / Ln) * th * 0.5, nz = ((bx - ax) / Ln) * th * 0.5;
        const p = [[ax + nx, az + nz], [bx + nx, bz + nz], [bx - nx, bz - nz], [ax - nx, az - nz]];
        const quad = (a, b, cc, dd) => { pos.push(...a, ...b, ...cc, ...a, ...cc, ...dd); for (let i = 0; i < 6; i++) colA.push(c.r, c.g, c.b); };
        const lo = (i) => (i === 0 || i === 3 ? y0a : y0b), hi = (i) => (i === 0 || i === 3 ? y1a : y1b);
        for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; quad([p[i][0], lo(i), p[i][1]], [p[j][0], lo(j), p[j][1]], [p[j][0], hi(j), p[j][1]], [p[i][0], hi(i), p[i][1]]); }
        quad([p[0][0], hi(0), p[0][1]], [p[1][0], hi(1), p[1][1]], [p[2][0], hi(2), p[2][1]], [p[3][0], hi(3), p[3][1]]);
      };
      for (const w of d.walls) {
        const pts = w.p.map((p) => [p[0] / 10 + x0, p[1] / 10 + z0]);
        const th = w.k === 'c' ? 2.4 : w.k === 'r' ? 0.8 : 0.45;
        c.set(w.k === 'c' ? '#a39a88' : w.k === 'r' ? '#8f887a' : '#a8a092');
        for (let i = 0; i < pts.length - 1; i++) {
          const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
          const ha = this.hAt(ax, az), hb = this.hAt(bx, bz), h = Math.min(w.h, w.k === 'c' ? 9 : 4);
          box(ax, az, bx, bz, ha - 2, hb - 2, ha + h, hb + h, th);
          this.colliders.add({ ax, az, bx, bz, y0: Math.min(ha, hb) - 3, y1: Math.max(ha, hb) + h, kind: 'w', tag: t }, ax, az, bx, bz, t.keys);
          if (w.k === 'c') {
            const Ln = Math.hypot(bx - ax, bz - az);
            for (let s = 0.6; s < Ln - 0.6; s += 2.4) {
              const t0 = s / Ln, t1 = Math.min(1, (s + 1.2) / Ln);
              const y0 = lerp(ha, hb, t0) + h, y1 = lerp(ha, hb, t1) + h;
              box(ax + (bx - ax) * t0, az + (bz - az) * t0, ax + (bx - ax) * t1, az + (bz - az) * t1, y0, y1, y0 + 1.1, y1 + 1.1, th);
            }
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colA, 3));
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, this.stoneMat);
      m.castShadow = m.receiveShadow = true;
      t.objs.push(m); this.group.add(m);
    }
    if (t.lod) t.lod.visible = false;
    t.state = 4;
    this.lampDirty = true;
  }

  // ---------------------------------------------------------------- lane lines, zebras, rails: thin geometry on the ground
  buildMarkings(t) {
    const P = [], C = [], T = this.T, x0 = t.x0, z0 = t.z0;
    const inT = (x, z) => x >= x0 && z >= z0 && x < x0 + T && z < z0 + T;
    const quad = (a, b, c2, d, col) => { P.push(...a, ...b, ...c2, ...a, ...c2, ...d); for (let i = 0; i < 6; i++) C.push(col[0], col[1], col[2]); };
    const m = (pts) => pts.map((q) => [q[0] / 10, q[1] / 10]);
    const walk = (pts, step) => {
      const out = [];
      let s = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az);
        if (L < 0.01) continue;
        const n = Math.max(1, Math.ceil(L / step)), dx = (bx - ax) / L, dz = (bz - az) / L;
        for (let k = 0; k < n; k++) out.push({ x: ax + ((bx - ax) * k) / n, z: az + ((bz - az) * k) / n, s: s + (L * k) / n, dx, dz });
        s += L;
        if (i === pts.length - 2) out.push({ x: bx, z: bz, s, dx, dz });
      }
      for (let i = 1; i < out.length - 1; i++) {
        const a = out[i - 1], b = out[i + 1], L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
        out[i].nx = -(b.z - a.z) / L; out[i].nz = (b.x - a.x) / L;
      }
      if (out.length) { const f = out[0], l = out[out.length - 1]; f.nx = -f.dz; f.nz = f.dx; l.nx = -l.dz; l.nz = l.dx; }
      return out;
    };
    const stripe = (W, off, w, col, yOf, lift, dash = 0, gap = 0, blocked = null) => {
      for (let i = 0; i < W.length - 1; i++) {
        const a = W[i], b = W[i + 1], sm = (a.s + b.s) / 2;
        if (!inT((a.x + b.x) / 2, (a.z + b.z) / 2)) continue;
        if (dash && sm % (dash + gap) > dash) continue;
        if (blocked && blocked.some(([u, v]) => sm > u && sm < v)) continue;
        const ax = a.x + a.nx * off, az = a.z + a.nz * off, bx = b.x + b.nx * off, bz = b.z + b.nz * off;
        const h = w / 2, ya = yOf(ax, az) + lift, yb = yOf(bx, bz) + lift;
        quad([ax + a.nx * h, ya, az + a.nz * h], [bx + b.nx * h, yb, bz + b.nz * h], [bx - b.nx * h, yb, bz - b.nz * h], [ax - a.nx * h, ya, az - a.nz * h], col);
      }
    };
    const ground = (x, z) => this.hAt(x, z), deck = (x, z) => this.surfaceY(x, z);
    const WHITE = [0.78, 0.78, 0.74], RAIL = [0.36, 0.37, 0.39];
    if (!this.touch) {
      this.touch = new Map();
      this.d.road.forEach((r, i) => {
        if (r.c < 1 || r.c > 4) return;
        for (const q of r.p) { const k = q[0] * 200000 + q[1]; const l = this.touch.get(k); l ? l.includes(i) || l.push(i) : this.touch.set(k, [i]); }
      });
      this.d.road.forEach((r, i) => { r._i = i; });
    }
    for (const r of this.ix.road[t.k]) {
      if (r.c < 1 || r.c > 4 || r.s || r.pk || r.nv) continue;
      const twoWay = !r.o, pts = m(r.p), W = walk(pts, r.c >= 3 ? 2 : 2.5);
      if (W.length < 2) continue;
      const yOf = r.b ? deck : ground, total = W[W.length - 1].s, blocked = [];
      let s = 0;
      for (let k = 0; k < r.p.length; k++) {
        if (k) s += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
        const others = (this.touch.get(r.p[k][0] * 200000 + r.p[k][1]) || []).filter((j) => j !== r._i);
        if (!others.length) continue;
        const wMax = Math.max(...others.map((j) => this.d.road[j].w));
        const ends = k === 0 || k === r.p.length - 1;
        if (ends && others.length === 1 && this.d.road[others[0]].c === r.c && Math.abs(this.d.road[others[0]].w - r.w) < 0.1) continue;
        blocked.push([s - wMax / 2 - 3, s + wMax / 2 + 3]);
      }
      if (total < 14) continue;
      const lift = r.b ? 0.05 : 0.04, big = r.w >= 10;
      if (r.c >= 2 || (r.c === 1 && r.w >= 6.5)) {
        if (big) {
          if (twoWay) { stripe(W, 0.14, 0.12, WHITE, yOf, lift, 0, 0, blocked); stripe(W, -0.14, 0.12, WHITE, yOf, lift, 0, 0, blocked); }
          for (const o of twoWay ? [r.w / 4, -r.w / 4] : [r.w / 6, -r.w / 6]) stripe(W, o, 0.13, WHITE, yOf, lift, 3, 6, blocked);
        } else if (twoWay || r.w >= 7) stripe(W, 0, 0.13, WHITE, yOf, lift, 3, r.c >= 3 ? 4.5 : 6, blocked);
      }
      if (r.c >= 3) for (const o of [r.w / 2 - 0.3, -(r.w / 2 - 0.3)]) stripe(W, o, 0.12, WHITE, yOf, lift, 0, 0, blocked);
    }
    const tmp = [];
    const onRoad = (x, z) => {
      for (const sg of this.edgeGrid.query(x, z, 8, tmp)) {
        const c = segClosest(x, z, sg.ax, sg.az, sg.bx, sg.bz, this._c);
        if (Math.hypot(x - c.x, z - c.z) < sg.e.r.w / 2 - 0.1) return true;
      }
      return false;
    };
    for (const c of this.ix.cross[t.k]) {
      const W = walk(m(c), 0.25);
      for (let i = 0; i < W.length - 1; i++) {
        const a = W[i];
        if (a.s % 1 > 0.5) continue;
        const b = W[i + 1], mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
        if (!inT(mx, mz) || !onRoad(mx, mz)) continue;
        const h = 1.7, y = ground(mx, mz) + 0.045;
        quad([a.x + a.nx * h, y, a.z + a.nz * h], [b.x + b.nx * h, y, b.z + b.nz * h], [b.x - b.nx * h, y, b.z - b.nz * h], [a.x - a.nx * h, y, a.z - a.nz * h], [0.82, 0.82, 0.78]);
      }
    }
    for (const tr of this.ix.tram[t.k]) {
      const W = walk(m(tr.p), 1.5);
      if (W.length < 2) continue;
      const yOf = tr.b ? deck : ground;
      for (const o of [-0.5, 0.5]) { stripe(W, o, 0.075, RAIL, yOf, 0.05); stripe(W, o + 0.07 * Math.sign(o), 0.05, [0.05, 0.05, 0.055], yOf, 0.048); }
    }
    for (const rl of this.ix.rail[t.k]) {
      const W = walk(m(rl), 3);
      if (W.length < 2) continue;
      stripe(W, 0, 2.7, [0.13, 0.12, 0.11], ground, 0.03);
      stripe(W, 0, 2.3, [0.2, 0.17, 0.14], ground, 0.04, 0.28, 0.42);
      for (const o of [-0.72, 0.72]) stripe(W, o, 0.09, [0.42, 0.42, 0.44], ground, 0.06);
    }
    if (!P.length) return;
    if (!this.markMat) {
      this.markMat = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
      this.markMat.onBeforeCompile = (sh) => patchCommon(sh, '', '', `{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`);
    }
    const geo = new THREE.BufferGeometry(), n = new Float32Array(P.length);
    for (let i = 1; i < n.length; i += 3) n[i] = 1;
    geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(n, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.markMat);
    mesh.receiveShadow = true;
    t.objs.push(mesh); this.group.add(mesh);
  }

  // ponds and fountain basins above the river level: real water + a stone rim
  buildFountains(t) {
    const P = [], Cc = [], Wp = [];
    for (const rings of t.data.water) {
      const pts = rings[0].map((q) => [q[0] / 10 + t.x0, q[1] / 10 + t.z0]);
      if (pts.length > 60 || pts.length < 3) continue;
      let cx = 0, cz = 0, lo = 1e9;
      for (const [x, z] of pts) { cx += x; cz += z; lo = Math.min(lo, this.hAt(x, z)); }
      cx /= pts.length; cz /= pts.length;
      if (lo < this.water + 1.5) continue;
      const yW = lo + 0.32, flat = [];
      for (const q of pts) flat.push(q[0], q[1]);
      const tri = earcut(flat);
      for (let i = 0; i < tri.length; i++) Wp.push(flat[tri[i] * 2], yW, flat[tri[i] * 2 + 1]);
      let area = 0;
      for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; area += a[0] * b[1] - b[0] * a[1]; }
      const sgn = area > 0 ? 1 : -1, rimTop = lo + 0.5, th = 0.28;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], b = pts[(i + 1) % pts.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (L < 0.05) continue;
        const nx = ((b[1] - a[1]) / L) * sgn * th, nz = (-(b[0] - a[0]) / L) * sgn * th;
        const A0 = [a[0], lo - 1, a[1]], B0 = [b[0], lo - 1, b[1]], A1 = [a[0], rimTop, a[1]], B1 = [b[0], rimTop, b[1]];
        const A2 = [a[0] + nx, rimTop, a[1] + nz], B2 = [b[0] + nx, rimTop, b[1] + nz], A3 = [a[0] + nx, lo - 1, a[1] + nz], B3 = [b[0] + nx, lo - 1, b[1] + nz];
        const q = (u, v, w, x) => { P.push(...u, ...v, ...w, ...u, ...w, ...x); for (let k = 0; k < 6; k++) Cc.push(0.56, 0.54, 0.5); };
        q(A0, B0, B1, A1); q(A1, B1, B2, A2); q(A2, B2, B3, A3);
        this.colliders.add({ ax: a[0], az: a[1], bx: b[0], bz: b[1], y0: lo - 2, y1: rimTop + 0.4, kind: 'w', tag: t }, a[0], a[1], b[0], b[1], t.keys);
      }
      this.fountains.push({ x: cx, z: cz, y: yW, area: Math.abs(area) / 2, tile: t });
    }
    if (Wp.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(Wp, 3));
      g.computeVertexNormals();
      const w = new THREE.Mesh(g, this.waterMat);
      w.receiveShadow = true;
      t.objs.push(w); this.group.add(w);
    }
    if (P.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(Cc, 3));
      g.computeVertexNormals();
      const w = new THREE.Mesh(g, this.stoneMat);
      w.castShadow = w.receiveShadow = true;
      t.objs.push(w); this.group.add(w);
    }
  }

  // ---------------------------------------------------------------- bridges (global)
  buildBridges() {
    const br = this.d.road.filter((r) => r.b);
    const P = (p) => [p[0] / 10, p[1] / 10];
    const key = (p) => p[0] + ',' + p[1];
    const used = new Set(), byEnd = new Map();
    br.forEach((r, i) => {
      for (const e of [r.p[0], r.p[r.p.length - 1]]) { const k = key(e); if (!byEnd.has(k)) byEnd.set(k, []); byEnd.get(k).push(i); }
    });
    const chains = [];
    br.forEach((r, i) => {
      if (used.has(i)) return;
      used.add(i);
      let pts = r.p.slice();
      let grow = true;
      while (grow) {
        grow = false;
        for (const rev of [false, true]) {
          const k = key(rev ? pts[0] : pts[pts.length - 1]);
          for (const j of byEnd.get(k) || []) {
            if (used.has(j)) continue;
            const q = br[j];
            if ((q.n || '') !== (r.n || '')) continue;
            if (!rev) { if (key(q.p[0]) !== k) continue; pts = pts.concat(q.p.slice(1)); }
            else { if (key(q.p[q.p.length - 1]) !== k) continue; pts = q.p.slice(0, -1).concat(pts); }
            used.add(j); grow = true; break;
          }
          if (grow) break;
        }
      }
      chains.push({ pts: pts.map(P), w: r.w, n: r.n || '', c: r.c, bh: r.bh });
    });
    const rings = this.d.river.map((w) => w.map(P));
    const overWater = (x, z) => rings.some((r) => pointInRing(x, z, r));
    this.bridges = [];
    const nBig = chains.filter((c) => c.n === 'Most SNP' && c.pts.length > 3).length;
    for (const ch of chains) {
      const s = [];
      let acc = 0;
      for (let i = 0; i < ch.pts.length - 1; i++) {
        const [ax, az] = ch.pts[i], [bx, bz] = ch.pts[i + 1];
        const L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.ceil(L / 2));
        for (let k = 0; k < n; k++) s.push({ x: ax + ((bx - ax) * k) / n, z: az + ((bz - az) * k) / n, d: acc + (L * k) / n });
        acc += L;
      }
      const last = ch.pts[ch.pts.length - 1];
      s.push({ x: last[0], z: last[1], d: acc });
      if (acc < 1) continue;
      const ya = this.hAt(s[0].x, s[0].z), yb = this.hAt(last[0], last[1]);
      const big = ch.n === 'Most SNP';
      const clr = ch.bh !== undefined ? ch.bh : big ? 11.5 : 7;
      const low = clr === 0;
      for (const p of s) {
        p.base = Math.max(lerp(ya, yb, p.d / acc), this.water + 1.6);
        p.tgt = !low && overWater(p.x, p.z) ? this.water + clr : p.base;
        if (!low) p.tgt = Math.max(p.tgt, this.hAt(p.x, p.z) + (big ? 0.2 : 0));
      }
      const slope = big ? 0.055 : 0.075;
      for (const p of s) {
        let y = p.base;
        if (!low) for (const q of s) y = Math.max(y, q.tgt - slope * Math.abs(p.d - q.d));
        p.y = y;
      }
      const hw = big ? (nBig > 1 ? 6.8 : 10.8) : Math.max(2.5, ch.w / 2 + 1.2);
      const brObj = { s, hw, big, low, n: ch.n };
      for (let i = 0; i < s.length - 1; i++) {
        const a = s[i], b = s[i + 1];
        const seg = { ax: a.x, az: a.z, bx: b.x, bz: b.z, ya: a.y, yb: b.y, hw, br: brObj };
        this.decks.add(seg, Math.min(a.x, b.x) - hw, Math.min(a.z, b.z) - hw, Math.max(a.x, b.x) + hw, Math.max(a.z, b.z) + hw);
      }
      this.bridges.push(brObj);
    }
  }
  buildBridgeMeshes() {
    const pos = [], colA = [], c = new THREE.Color();
    const quad = (p0, p1, p2, p3, col) => { pos.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3); for (let k = 0; k < 6; k++) colA.push(col[0], col[1], col[2]); };
    for (const br of this.bridges) {
      const s = br.s;
      c.set(br.big ? '#8d9297' : '#b3aea2');
      const side = [c.r, c.g, c.b], top = [0.24, 0.24, 0.26];
      for (let i = 0; i < s.length - 1; i++) {
        const a = s[i], b = s[i + 1];
        const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
        const nx = -(b.z - a.z) / L, nz = (b.x - a.x) / L, hw = br.hw;
        const A1 = [a.x + nx * hw, a.y, a.z + nz * hw], A2 = [a.x - nx * hw, a.y, a.z - nz * hw];
        const B1 = [b.x + nx * hw, b.y, b.z + nz * hw], B2 = [b.x - nx * hw, b.y, b.z - nz * hw];
        const dd = br.big ? 2.2 : br.low ? 0.8 : 2.2;
        const dn = (p) => [p[0], p[1] - dd, p[2]];
        quad(A1, B1, B2, A2, top);
        quad(dn(A1), dn(A2), dn(B2), dn(B1), side.map((v) => v * 0.6));
        quad(A1, dn(A1), dn(B1), B1, side);
        quad(A2, B2, dn(B2), dn(A2), side);
        const m1 = [a.x + nx * 0.15, a.y + 0.03, a.z + nz * 0.15], m2 = [a.x - nx * 0.15, a.y + 0.03, a.z - nz * 0.15];
        const m3 = [b.x - nx * 0.15, b.y + 0.03, b.z - nz * 0.15], m4 = [b.x + nx * 0.15, b.y + 0.03, b.z + nz * 0.15];
        if (br.big || (i % 4 < 2 && hw > 4)) quad(m1, m4, m3, m2, [0.8, 0.78, 0.7]);
        const above = a.y > this.hAt(a.x, a.z) + 0.9 || b.y > this.hAt(b.x, b.z) + 0.9;
        if (!above) continue;
        for (const sg of [1, -1]) {
          const r0 = [a.x + nx * hw * sg, a.y, a.z + nz * hw * sg], r1 = [b.x + nx * hw * sg, b.y, b.z + nz * hw * sg];
          // no railing where a neighbouring deck (second carriageway) continues
          const qx = (r0[0] + r1[0]) / 2 + nx * sg * 0.7, qz = (r0[2] + r1[2]) / 2 + nz * sg * 0.7;
          let cov = false;
          for (const d of this.decks.query(qx, qz, 1, this._tmp)) {
            if (d.br === br) continue;
            const cc = segClosest(qx, qz, d.ax, d.az, d.bx, d.bz, this._c);
            if (Math.hypot(qx - cc.x, qz - cc.z) < d.hw && Math.abs(d.ya + (d.yb - d.ya) * cc.t - a.y) < 1.6) { cov = true; break; }
          }
          if (cov) continue;
          const up = (p, h) => [p[0], p[1] + h, p[2]];
          quad(r0, r1, up(r1, 1.1), up(r0, 1.1), [0.78, 0.79, 0.8]);
          this.colliders.add({ ax: r0[0], az: r0[2], bx: r1[0], bz: r1[2], y0: Math.min(a.y, b.y) - 1, y1: Math.max(a.y, b.y) + 1.4, kind: 'r', tag: null }, r0[0], r0[2], r1[0], r1[2]);
        }
        if (!br.low && !br.big && i % 30 === 15) {
          const gy = Math.min(this.hAt(a.x, a.z), this.water) - 3;
          if (a.y - gy > 4) {
            const w2 = 2.2;
            const c0 = [a.x - w2, a.y - dd, a.z - w2], c1 = [a.x + w2, a.y - dd, a.z - w2], c2 = [a.x + w2, a.y - dd, a.z + w2], c3 = [a.x - w2, a.y - dd, a.z + w2];
            const g = (p) => [p[0], gy, p[2]];
            quad(c0, c1, g(c1), g(c0), side); quad(c1, c2, g(c2), g(c1), side); quad(c2, c3, g(c3), g(c2), side); quad(c3, c0, g(c0), g(c3), side);
          }
        }
      }
    }
    // landmark structures: arch of Most Apollo, truss of Stary most
    const beam = (a, b, th, col) => {
      const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], L = Math.hypot(dx, dy, dz) || 1;
      let ux = -dz, uz = dx; const ul = Math.hypot(ux, uz);
      if (ul < 1e-4) { ux = 1; uz = 0; } else { ux /= ul; uz /= ul; }
      const vx = (dy * uz) / L, vy = (dz * ux - dx * uz) / L, vz = (-dy * ux) / L;
      const h = th / 2;
      const c = (p, su, sv) => [p[0] + ux * h * su + vx * h * sv, p[1] + vy * h * sv, p[2] + uz * h * su + vz * h * sv];
      const S = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
      for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; quad(c(a, ...S[i]), c(b, ...S[i]), c(b, ...S[j]), c(a, ...S[j]), col); }
    };
    const longest = (n) => this.bridges.filter((b) => b.n === n).sort((a, b) => b.s.length - a.s.length)[0];
    const span = (br) => { const my = Math.max(...br.s.map((p) => p.y)); const top = br.s.filter((p) => p.y > my - 0.6); return top.length > 8 ? top : null; };
    const side = (s, i, off, dy) => {
      const a = s[Math.max(0, i - 1)], b = s[Math.min(s.length - 1, i + 1)], L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
      return [s[i].x - ((b.z - a.z) / L) * off, s[i].y + dy, s[i].z + ((b.x - a.x) / L) * off];
    };
    const ap = longest('Most Apollo');
    if (ap && span(ap)) {
      const s = span(ap), n = s.length - 1, white = [0.86, 0.87, 0.88];
      for (const off of [-(ap.hw + 9), ap.hw + 9]) {
        let prev = null;
        for (let i = 0; i <= n; i += 3) {
          const t = i / n, p = side(s, i, off, 34 * 4 * t * (1 - t));
          if (prev) beam(prev, p, 1.8, white);
          if (i % 9 === 0 && i > 0 && i < n) beam(p, side(s, i, off * 0.75, 0.5), 0.3, white);
          prev = p;
        }
        if (prev) beam(prev, side(s, n, off, 0), 1.8, white);
      }
    }
    const sm = longest('Starý most');
    if (sm && span(sm)) {
      const s = span(sm), n = s.length - 1, green = [0.42, 0.55, 0.48];
      for (const off of [-(sm.hw + 2.5), sm.hw + 2.5]) {
        for (let i = 0; i + 6 <= n; i += 6) {
          const a0 = side(s, i, off, 0.4), a1 = side(s, i + 6, off, 0.4), m = side(s, i + 3, off, 8.5), t0 = side(s, Math.max(0, i - 3), off, 8.5);
          beam(a0, m, 0.5, green); beam(m, a1, 0.5, green);
          if (i) beam(t0, m, 0.6, green);
          beam(a0, a1, 0.5, green);
        }
      }
    }
    if (!pos.length) return;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colA, 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, this.stoneMat);
    m.castShadow = m.receiveShadow = true;
    m.frustumCulled = false;
    this.group.add(m);
  }

  buildPylon() {
    const rings = this.d.pylon.map((r) => r.map((p) => [p[0] / 10, p[1] / 10]));
    if (rings.length < 2) return;
    const cen = rings.map((r) => { let x = 0, z = 0; for (const p of r) { x += p[0]; z += p[1]; } return [x / r.length, z / r.length]; });
    const g = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color: 0x8c9196 });
    const topY = this.water + 84;
    const mx = (cen[0][0] + cen[1][0]) / 2, mz = (cen[0][1] + cen[1][1]) / 2, lean = 14;
    const tops = [];
    for (const c of cen) {
      const by = this.hAt(c[0], c[1]) - 2;
      const a = new THREE.Vector3(c[0], by, c[1]), b = new THREE.Vector3(mx + (c[0] - mx) * 0.55, topY, mz + lean);
      const m = new THREE.Mesh(new THREE.BoxGeometry(3.2, a.distanceTo(b), 4.2), mat);
      m.position.copy(a).add(b).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
      m.castShadow = true;
      g.add(m); tops.push(b);
      this.colliders.add({ ax: c[0] - 2, az: c[1] - 2, bx: c[0] + 2, bz: c[1] + 2, y0: -50, y1: by + 30, kind: 'b', tag: null }, c[0] - 2, c[1] - 2, c[0] + 2, c[1] + 2);
      this.colliders.add({ ax: c[0] + 2, az: c[1] - 2, bx: c[0] - 2, bz: c[1] + 2, y0: -50, y1: by + 30, kind: 'b', tag: null }, c[0] - 2, c[1] - 2, c[0] + 2, c[1] + 2);
    }
    const ux = mx, uz = mz + lean;
    const prof = [[0, -2.2], [6, -2.6], [13, -1.6], [16.5, 0.2], [15.5, 1.4], [12, 2.2], [6, 2.8], [0, 3.0]].map(([r, y]) => new THREE.Vector2(r, y));
    const ufo = new THREE.Mesh(new THREE.LatheGeometry(prof, 40), new THREE.MeshLambertMaterial({ color: 0x9aa0a6 }));
    ufo.position.set(ux, topY + 3, uz); ufo.castShadow = true;
    g.add(ufo);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(15.8, 0.35, 6, 48), new THREE.MeshBasicMaterial({ color: 0xffd28a }));
    ring.rotation.x = Math.PI / 2; ring.position.set(ux, topY + 3.3, uz);
    this.ufoRing = ring; g.add(ring);
    const big = this.bridges.find((b) => b.big);
    if (big) {
      const st = new THREE.MeshLambertMaterial({ color: 0xc8ccd0 });
      const pts = big.s.filter((p) => { const d = Math.hypot(p.x - mx, p.z - mz); return d > 40 && d < 240 && p.z < mz; });
      const pick = [];
      for (let i = 0; i < pts.length; i += Math.max(1, Math.floor(pts.length / 8))) pick.push(pts[i]);
      for (const p of pick)
        for (const side of [-1, 1]) {
          const t = tops[side < 0 ? 0 : 1];
          const a = new THREE.Vector3(lerp(t.x, mx, 0.2), lerp(topY - 12, topY - 40, Math.hypot(p.x - mx, p.z - mz) / 240), lerp(t.z, mz, 0.6));
          const b = new THREE.Vector3(p.x + side * 9.5, p.y + 0.6, p.z);
          const m = new THREE.Mesh(new THREE.BoxGeometry(0.35, a.distanceTo(b), 0.35), st);
          m.position.copy(a).add(b).multiplyScalar(0.5);
          m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
          g.add(m);
        }
    }
    g.traverse((o) => { o.frustumCulled = false; });
    this.group.add(g);
    this.ufoPos = new THREE.Vector3(ux, topY + 3, uz);
  }

  // ---------------------------------------------------------------- road graph for traffic
  buildRoadGraph() {
    const roads = this.d.road.filter((r) => r.c >= 1 && r.c <= 4 && !r.nv);
    const cnt = new Map();
    const K = (p) => p[0] * 200000 + p[1];
    for (const r of roads) r.p.forEach((p, i) => { const k = K(p); cnt.set(k, (cnt.get(k) || 0) + (i === 0 || i === r.p.length - 1 ? 2 : 1)); });
    const nodes = new Map();
    const node = (p) => {
      const k = K(p);
      let n = nodes.get(k);
      if (!n) { n = { x: p[0] / 10, z: p[1] / 10, out: [], inn: [], id: nodes.size, sig: null }; nodes.set(k, n); }
      return n;
    };
    const edges = [];
    const addName = (r) => {
      for (let i = 0; i < r.p.length - 1; i++) {
        const s = { ax: r.p[i][0] / 10, az: r.p[i][1] / 10, bx: r.p[i + 1][0] / 10, bz: r.p[i + 1][1] / 10, hw: r.w / 2, n: r.n };
        this.names.add(s, s.ax, s.az, s.bx, s.bz);
      }
    };
    for (const r of roads) {
      let start = 0;
      for (let i = 1; i < r.p.length; i++) {
        if (i === r.p.length - 1 || cnt.get(K(r.p[i])) > 1) {
          const pts = r.p.slice(start, i + 1).map((p) => [p[0] / 10, p[1] / 10]);
          const a = node(r.p[start]), b = node(r.p[i]);
          const mk = (A, B, P) => {
            const len = [0];
            let L = 0;
            for (let k = 1; k < P.length; k++) { L += Math.hypot(P[k][0] - P[k - 1][0], P[k][1] - P[k - 1][1]); len.push(L); }
            const e = { a: A, b: B, p: P, cum: len, L, r, lane: r.o ? (r.w > 8 ? r.w / 4 : 0) : Math.min(r.w / 4, 1.9), v: [6, 9, 12, 14, 17][r.c] || 9, id: edges.length };
            edges.push(e); A.out.push(e); B.inn.push(e);
            return e;
          };
          const e1 = mk(a, b, pts);
          if (!r.o) { const e2 = mk(b, a, pts.slice().reverse()); e1.rev = e2; e2.rev = e1; }
          start = i;
        }
      }
      if (r.n) addName(r);
    }
    for (const r of this.d.road) if ((r.c === 5 || r.c === 0 || r.nv) && r.n) addName(r);
    const nodeArr = [...nodes.values()];
    this.sigs = [];
    for (const s of this.d.signals) {
      const x = s[0] / 10, z = s[1] / 10;
      let best = null, bd = 18;
      for (const n of nodeArr) {
        if (Math.abs(n.x - x) > 18 || Math.abs(n.z - z) > 18) continue;
        const d = Math.hypot(n.x - x, n.z - z);
        if (d < bd && n.out.length + n.inn.length >= 3) { bd = d; best = n; }
      }
      if (best && !best.sig) { best.sig = { phase: hash(best.id) * 30, x, z }; this.sigs.push(best); }
    }
    for (const e of edges) {
      if (e.L <= 0.5) continue;
      for (let k = 0; k < e.p.length - 1; k++) {
        const s = { e, k, ax: e.p[k][0], az: e.p[k][1], bx: e.p[k + 1][0], bz: e.p[k + 1][1] };
        this.edgeGrid.add(s, s.ax, s.az, s.bx, s.bz);
      }
    }
    this.nodes = nodeArr;
    this.edges = edges.filter((e) => e.L > 0.5);
  }
  nearestEdge(x, z, r = 40, heading = null) {
    const a = this.edgeGrid.query(x, z, r, this._tmp);
    let best = null, bd = r, bt = 0;
    for (const s of a) {
      const c = segClosest(x, z, s.ax, s.az, s.bx, s.bz, this._c);
      let d = Math.hypot(x - c.x, z - c.z);
      if (heading !== null) {
        const hd = Math.atan2(s.bx - s.ax, s.bz - s.az);
        d += Math.abs(((hd - heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * 6;
      }
      if (d < bd) { bd = d; best = s; bt = s.e.cum[s.k] + c.t * (s.e.cum[s.k + 1] - s.e.cum[s.k]); }
    }
    return best ? { e: best.e, s: bt, d: bd } : null;
  }
  signalState(node, heading, t) {
    if (!node.sig) return true;
    const ph = (t + node.sig.phase) % 30;
    const ns = Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading));
    if (ph < 12) return ns;
    if (ph < 15) return false;
    if (ph < 27) return !ns;
    return false;
  }

  // ---------------------------------------------------------------- pedestrian graph
  buildPedGraph() {
    const lines = [];
    for (const f of this.d.foot) lines.push(f.p);
    for (const c of this.d.cross) lines.push(c);
    for (const s of this.d.steps) lines.push(s);
    for (const r of this.d.road) if (r.c === 5 && !r.b) lines.push(r.p);
    const K = (p) => p[0] * 200000 + p[1];
    const cnt = new Map();
    for (const l of lines) l.forEach((p, i) => cnt.set(K(p), (cnt.get(K(p)) || 0) + (i === 0 || i === l.length - 1 ? 2 : 1)));
    const nodes = new Map();
    const node = (p) => { const k = K(p); let n = nodes.get(k); if (!n) { n = { x: p[0] / 10, z: p[1] / 10, e: [] }; nodes.set(k, n); } return n; };
    const edges = [];
    const mk = (pts, a, b, sw) => {
      let L = 0;
      const cum = [0];
      for (let k = 1; k < pts.length; k++) { L += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]); cum.push(L); }
      if (L < (sw ? 8 : 0.5)) return;
      const e = { a, b, p: pts, cum, L, sw };
      a.e.push(e); b.e.push(e); edges.push(e);
    };
    for (const l of lines) {
      let st = 0;
      for (let i = 1; i < l.length; i++) {
        if (i === l.length - 1 || cnt.get(K(l[i])) > 1) {
          mk(l.slice(st, i + 1).map((p) => [p[0] / 10, p[1] / 10]), node(l[st]), node(l[i]), 0);
          st = i;
        }
      }
    }
    for (const r of this.d.road) {
      if (r.c < 1 || r.c > 3 || r.b || (r.c === 3 && r.o && r.w > 9)) continue;
      for (const sd of [1, -1]) {
        const off = (r.w / 2 + 1.1) * sd;
        const pts = r.p.map((p, i) => {
          const a = r.p[Math.max(0, i - 1)], b = r.p[Math.min(r.p.length - 1, i + 1)];
          const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1;
          return [p[0] / 10 - (dz / L) * off, p[1] / 10 + (dx / L) * off];
        });
        mk(pts, { x: pts[0][0], z: pts[0][1], e: [] }, { x: pts[pts.length - 1][0], z: pts[pts.length - 1][1], e: [] }, 1);
      }
    }
    this.pedEdges = edges;
    for (const e of edges) {
      const p0 = e.p[0], p1 = e.p[e.p.length - 1];
      this.pedGrid.add(e, Math.min(p0[0], p1[0]), Math.min(p0[1], p1[1]), Math.max(p0[0], p1[0]), Math.max(p0[1], p1[1]));
    }
  }
  static at(e, s, out) {
    const cum = e.cum;
    s = clamp(s, 0, e.L);
    let k = 0;
    while (k < cum.length - 2 && cum[k + 1] < s) k++;
    const L = cum[k + 1] - cum[k] || 1;
    const t = (s - cum[k]) / L;
    const a = e.p[k], b = e.p[k + 1];
    out.x = a[0] + (b[0] - a[0]) * t; out.z = a[1] + (b[1] - a[1]) * t;
    out.dx = (b[0] - a[0]) / L; out.dz = (b[1] - a[1]) / L;
    return out;
  }

  collide(x, z, y, r, out) {
    const a = this.colliders.query(x, z, r + 0.5, this._tmp);
    let hit = false;
    out.nx = 0; out.nz = 0; out.d = 0; out.kind = null;
    for (let k = 0; k < a.length; k++) {
      const s = a[k];
      if (y > s.y1 || y + 1.5 < s.y0) continue;
      const c = segClosest(x, z, s.ax, s.az, s.bx, s.bz, this._c);
      let dx = x - c.x, dz = z - c.z;
      const d = Math.hypot(dx, dz);
      if (d < r) {
        if (d < 1e-4) { dx = -(s.bz - s.az); dz = s.bx - s.ax; }
        const L = Math.hypot(dx, dz) || 1, pen = r - d;
        x += (dx / L) * pen; z += (dz / L) * pen;
        out.nx += dx / L; out.nz += dz / L;
        out.d = Math.max(out.d, pen); out.kind = s.kind;
        hit = true;
      }
    }
    out.x = x; out.z = z;
    if (hit) { const L = Math.hypot(out.nx, out.nz) || 1; out.nx /= L; out.nz /= L; }
    return hit;
  }
  rayHit(x0, z0, x1, z1, y) {
    const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, r = Math.hypot(x1 - x0, z1 - z0) / 2 + 1;
    const a = this.colliders.query(mx, mz, r, this._tmp);
    let best = 1;
    for (const s of a) {
      if (s.kind !== 'b' && s.kind !== 'w') continue;
      if (y > s.y1 + 0.5) continue;
      const t = segInter(x0, z0, x1, z1, s.ax, s.az, s.bx, s.bz);
      if (t !== null && t < best) best = t;
    }
    return best;
  }
}

function segInter(ax, az, bx, bz, cx, cz, dx, dz) {
  const rx = bx - ax, rz = bz - az, sx = dx - cx, sz = dz - cz;
  const den = rx * sz - rz * sx;
  if (Math.abs(den) < 1e-9) return null;
  const t = ((cx - ax) * sz - (cz - az) * sx) / den;
  const u = ((cx - ax) * rz - (cz - az) * rx) / den;
  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) return t;
  return null;
}
