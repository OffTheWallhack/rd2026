// Scrolling ("detail") and overview waveforms the way the players draw them.
//
//   .EXT  PWV3  mono detail, 150 columns/s: height (5 bits) + whiteness (3 bits)
//         PWV5  RGB detail,  150 columns/s: red=bass, green=mids, blue=highs (3 bits each) + height (5 bits)
//         PWV4  RGB overview, 1200 columns, 6 bytes each
//   .2EX  PWV7  3-band detail (CDJ-3000), 150 columns/s: low, mid, high (0..127)
//         PWV6  3-band overview, 1200 columns: low, mid, high
//
// Value ranges and byte meanings were matched against rekordbox's own exports
// (see test/waveform_test.mjs). Pure computation: runs in a worker or in Node.

export const WAVE_RATE = 22050;
export const DETAIL_PER_S = 150;

// 2nd-order Butterworth sections (RBJ cookbook)
function biquad(type, f, sr) {
  const w = 2 * Math.PI * f / sr, cs = Math.cos(w), al = Math.sin(w) / Math.SQRT2;
  const a0 = 1 + al;
  const b = type === 'lp' ? [(1 - cs) / 2, 1 - cs, (1 - cs) / 2] : [(1 + cs) / 2, -(1 + cs), (1 + cs) / 2];
  return { b0: b[0] / a0, b1: b[1] / a0, b2: b[2] / a0, a1: -2 * cs / a0, a2: (1 - al) / a0 };
}
function filter(x, ...stages) {
  let y = x;
  for (const s of stages) {
    const out = new Float32Array(y.length);
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    for (let i = 0; i < y.length; i++) {
      const v = s.b0 * y[i] + s.b1 * x1 + s.b2 * x2 - s.a1 * y1 - s.a2 * y2;
      x2 = x1; x1 = y[i]; y2 = y1; y1 = v; out[i] = v;
    }
    y = out;
  }
  return y;
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const band = (v) => clamp(Math.round(127 * Math.sqrt(v / 0.8)), 0, 127);

// x: mono Float32Array at sr (22050 recommended)
export function computeWaveforms(x, sr) {
  const n = Math.max(1, Math.ceil(x.length / sr * DETAIL_PER_S));
  // three bands: < 200 Hz, 200–2500 Hz, > 2500 Hz (4th-order slopes)
  const low = filter(x, biquad('lp', 200, sr), biquad('lp', 200, sr));
  const high = filter(x, biquad('hp', 2500, sr), biquad('hp', 2500, sr));
  const mid = filter(x, biquad('hp', 200, sr), biquad('hp', 200, sr), biquad('lp', 2500, sr), biquad('lp', 2500, sr));
  const L = new Float32Array(n), M = new Float32Array(n), H = new Float32Array(n), A = new Float32Array(n);
  for (let c = 0; c < n; c++) {
    const a = Math.floor(c * sr / DETAIL_PER_S), z = Math.min(x.length, Math.floor((c + 1) * sr / DETAIL_PER_S));
    let sl = 0, sm = 0, sh = 0, sa = 0;
    for (let i = a; i < z; i++) { sl += Math.abs(low[i]); sm += Math.abs(mid[i]); sh += Math.abs(high[i]); sa += Math.abs(x[i]); }
    const k = z > a ? 1 / (z - a) : 0;
    L[c] = sl * k; M[c] = sm * k; H[c] = sh * k; A[c] = sa * k;
  }

  // detail waveforms
  const pwv3 = new Uint8Array(n), pwv5 = new Uint16Array(n), pwv7 = new Uint8Array(n * 3);
  const height = new Uint8Array(n);
  for (let c = 0; c < n; c++) {
    const h = clamp(Math.round(A[c] / 0.9 * 31), 0, 31);
    height[c] = h;
    const hw = H[c] * 2.5; // highs carry less energy; weight them so hats show up
    const tot = L[c] + M[c] + hw;
    const white = tot > 1e-6 ? clamp(Math.round(7 * hw / tot * 2.4), 0, 7) : 0;
    pwv3[c] = (white << 5) | h;
    const mx = Math.max(L[c], M[c], hw);
    let r = 7, g = 7, b = 7;
    if (mx > 1e-6) { r = Math.round(7 * L[c] / mx); g = Math.round(7 * M[c] / mx); b = Math.round(7 * hw / mx); }
    pwv5[c] = (r << 13) | (g << 10) | (b << 7) | (h << 2);
    // 3-band values are compressed (square root) like rekordbox's
    pwv7[c * 3] = band(L[c]);
    pwv7[c * 3 + 1] = band(M[c]);
    pwv7[c * 3 + 2] = band(H[c]);
  }

  // overviews (1200 columns over the whole track)
  const COLS = 1200;
  const pwv4 = new Uint8Array(COLS * 6), pwv6 = new Uint8Array(COLS * 3);
  for (let c = 0; c < COLS; c++) {
    const a = Math.floor(c * n / COLS), z = Math.max(a + 1, Math.floor((c + 1) * n / COLS));
    let hMax = 0, hSq = 0, lMax = 0, mMax = 0, xMax = 0, cnt = 0;
    for (let i = a; i < Math.min(z, n); i++) {
      hMax = Math.max(hMax, height[i]); hSq += height[i] * height[i]; cnt++;
      lMax = Math.max(lMax, pwv7[i * 3]); mMax = Math.max(mMax, pwv7[i * 3 + 1]); xMax = Math.max(xMax, pwv7[i * 3 + 2]);
    }
    const hRms = cnt ? Math.sqrt(hSq / cnt) : 0;
    const d0 = clamp(Math.round(127 * hRms / 31 * 3), 0, 127);
    pwv4[c * 6] = d0;
    pwv4[c * 6 + 1] = clamp(Math.round(255 - 1.2 * d0), 0, 255);
    pwv4[c * 6 + 2] = clamp(Math.round(127 * hMax / 31 * 1.2), 0, 127);
    pwv4[c * 6 + 3] = clamp(Math.round(lMax * 0.85), 0, 127);
    pwv4[c * 6 + 4] = clamp(Math.round(mMax * 0.6), 0, 127);
    pwv4[c * 6 + 5] = clamp(Math.round(xMax * 0.35), 0, 127);
    pwv6[c * 3] = clamp(Math.round(lMax * 0.42), 0, 127);
    pwv6[c * 3 + 1] = clamp(Math.round(mMax * 0.42), 0, 127);
    pwv6[c * 3 + 2] = clamp(Math.round(xMax * 0.42), 0, 127);
  }
  return { pwv3, pwv5, pwv7, pwv4, pwv6 };
}

// Move detail waveforms by `seconds` (positive = later, silence in front).
export function shiftWaveforms(w, seconds) {
  const k = Math.round(seconds * DETAIL_PER_S);
  if (!w || !k) return w;
  const move = (arr, width) => {
    const n = arr.length / width;
    const out = new arr.constructor(Math.max(0, (n + k)) * width);
    if (k > 0) out.set(arr, k * width); else out.set(arr.subarray(-k * width));
    return out;
  };
  return { ...w, pwv3: move(w.pwv3, 1), pwv5: move(w.pwv5, 1), pwv7: move(w.pwv7, 3) };
}

// halve the sample rate (for the tempo/key analysis, which runs at 11025 Hz)
export function decimate2(x, sr) {
  const lp = filter(x, biquad('lp', sr * 0.2, sr), biquad('lp', sr * 0.2, sr));
  const out = new Float32Array(x.length >> 1);
  for (let i = 0; i < out.length; i++) out[i] = lp[2 * i];
  return out;
}
