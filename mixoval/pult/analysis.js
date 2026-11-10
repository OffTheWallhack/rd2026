// Music analysis on a mono signal: tempo, beat grid, key and the small waveform
// previews that CDJs show. Pure computation (no browser APIs), so it runs in a
// Web Worker and in Node tests alike.
//
// Input is expected at a low sample rate (11025 Hz is plenty and keeps memory small).

import { computeWaveforms, shiftWaveforms, decimate2, WAVE_RATE } from './waveform.js';

export const ANALYSIS_RATE = 11025;
export { WAVE_RATE };

// ---------------------------------------------------------------- FFT
const fftCache = new Map();
function fftPlan(n) {
  let p = fftCache.get(n);
  if (p) return p;
  const rev = new Uint32Array(n);
  const bits = Math.log2(n);
  for (let i = 0; i < n; i++) {
    let r = 0;
    for (let b = 0; b < bits; b++) r |= ((i >> b) & 1) << (bits - 1 - b);
    rev[i] = r;
  }
  const cos = new Float64Array(n / 2), sin = new Float64Array(n / 2);
  for (let i = 0; i < n / 2; i++) { cos[i] = Math.cos(-2 * Math.PI * i / n); sin[i] = Math.sin(-2 * Math.PI * i / n); }
  const win = new Float64Array(n);
  for (let i = 0; i < n; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / n);
  p = { rev, cos, sin, win };
  fftCache.set(n, p);
  return p;
}

// magnitude spectrum (bins 0..n/2) of x[start .. start+n) with a Hann window
function magSpectrum(x, start, n, re, im, out) {
  const { rev, cos, sin, win } = fftPlan(n);
  for (let i = 0; i < n; i++) {
    const j = start + i;
    re[rev[i]] = j >= 0 && j < x.length ? x[j] * win[i] : 0;
    im[rev[i]] = 0;
  }
  for (let size = 2; size <= n; size <<= 1) {
    const half = size >> 1, step = n / size;
    for (let i = 0; i < n; i += size) {
      for (let k = 0; k < half; k++) {
        const c = cos[k * step], s = sin[k * step];
        const a = i + k, b = a + half;
        const tr = re[b] * c - im[b] * s, ti = re[b] * s + im[b] * c;
        re[b] = re[a] - tr; im[b] = im[a] - ti;
        re[a] += tr; im[a] += ti;
      }
    }
  }
  for (let k = 0; k <= n / 2; k++) out[k] = Math.hypot(re[k], im[k]);
  return out;
}

// ---------------------------------------------------------------- features
const N = 512, HOP = 128;

// Per-frame features used by everything else.
function frameFeatures(x, sr) {
  const frames = Math.max(1, Math.floor((x.length - N) / HOP) + 1);
  const bins = N / 2 + 1;
  const hz = sr / N;
  const kLow = Math.max(2, Math.round(150 / hz));      // kick region
  const kMidA = Math.round(200 / hz), kMidB = Math.round(2000 / hz); // snare/clap body
  const kHigh = Math.round(2500 / hz);
  const kTop = Math.min(bins - 1, Math.round(5000 / hz));
  const re = new Float64Array(N), im = new Float64Array(N), mag = new Float64Array(bins);
  let prev = new Float64Array(bins), cur = new Float64Array(bins);
  const flux = new Float32Array(frames), low = new Float32Array(frames), mid = new Float32Array(frames);
  const energy = new Float32Array(frames), highRatio = new Float32Array(frames), peak = new Float32Array(frames);
  for (let f = 0; f < frames; f++) {
    const s = f * HOP;
    magSpectrum(x, s, N, re, im, mag);
    let fl = 0, lo = 0, mi = 0, eAll = 0, eHigh = 0;
    for (let k = 1; k <= kTop; k++) {
      const v = Math.log1p(20 * mag[k]);
      cur[k] = v;
      const d = v - prev[k];
      if (d > 0) {
        fl += d;
        if (k <= kLow) lo += d;
        else if (k >= kMidA && k <= kMidB) mi += d;
      }
      const p = mag[k] * mag[k];
      eAll += p;
      if (k >= kHigh) eHigh += p;
    }
    flux[f] = fl; low[f] = lo; mid[f] = mi;
    energy[f] = eAll;
    highRatio[f] = eAll > 0 ? eHigh / eAll : 0;
    let pk = 0;
    for (let i = s, e = Math.min(x.length, s + HOP); i < e; i++) { const a = Math.abs(x[i]); if (a > pk) pk = a; }
    peak[f] = pk;
    const t = prev; prev = cur; cur = t;
  }
  return { frames, fps: sr / HOP, flux, low, mid, energy, highRatio, peak };
}

// remove the slowly varying part of an onset curve and keep the rises
function whiten(env, fps) {
  const w = Math.max(3, Math.round(fps * 0.25));
  const out = new Float32Array(env.length);
  let sum = 0;
  const q = [];
  for (let i = 0; i < env.length; i++) {
    sum += env[i]; q.push(env[i]);
    if (q.length > 2 * w + 1) sum -= q.shift();
    const c = i - w;
    if (c >= 0) out[c] = Math.max(0, env[c] - sum / q.length);
  }
  for (let c = Math.max(0, env.length - w); c < env.length; c++) out[c] = Math.max(0, env[c] - sum / q.length);
  return out;
}

// onset curve that follows kick + snare more than hi-hats
function tempoEnvelope(feat) {
  const parts = [[whiten(feat.low, feat.fps), 1], [whiten(feat.mid, feat.fps), 1], [whiten(feat.flux, feat.fps), 0.25]];
  const out = new Float32Array(feat.frames);
  for (const [e, w] of parts) {
    let m = 0;
    for (let i = 0; i < e.length; i++) m += e[i];
    m = m / e.length || 1;
    for (let i = 0; i < e.length; i++) out[i] += (w * e[i]) / m;
  }
  return out;
}

const interp = (a, pos) => {
  const i = Math.floor(pos), f = pos - i;
  if (i < 0 || i + 1 >= a.length) return 0;
  return a[i] * (1 - f) + a[i + 1] * f;
};

// ---------------------------------------------------------------- tempo
function autocorr(env, maxLag) {
  const ac = new Float64Array(maxLag + 1);
  const n = env.length;
  let mean = 0;
  for (let i = 0; i < n; i++) mean += env[i];
  mean /= n || 1;
  for (let lag = 0; lag <= maxLag; lag++) {
    let s = 0;
    for (let i = 0; i + lag < n; i++) s += (env[i] - mean) * (env[i + lag] - mean);
    ac[lag] = s / (n - lag || 1);
  }
  return ac;
}

// how strongly onsets line up with a grid of the given period (in frames);
// returns the best phase too. Phase histogram with NB bins.
const NB = 72;
function foldScore(env, period) {
  const h = new Float64Array(NB);
  for (let i = 0; i < env.length; i++) {
    const v = env[i];
    if (!v) continue;
    const ph = ((i % period) / period) * NB;
    const b = Math.floor(ph), f = ph - b;
    h[b % NB] += v * (1 - f);
    h[(b + 1) % NB] += v * f;
  }
  let best = -1, bestBin = 0, total = 0;
  for (let b = 0; b < NB; b++) {
    const s = h[(b + NB - 1) % NB] * 0.5 + h[b] + h[(b + 1) % NB] * 0.5;
    total += h[b];
    if (s > best) { best = s; bestBin = b; }
  }
  // sub-bin peak position (parabolic)
  const y0 = h[(bestBin + NB - 1) % NB], y1 = h[bestBin], y2 = h[(bestBin + 1) % NB];
  const den = y0 - 2 * y1 + y2;
  const off = den < 0 ? 0.5 * (y0 - y2) / den : 0;
  const mean = total / NB || 1e-9;
  // sharpness that changes smoothly with tempo (not tied to bin edges)
  let sq = 0;
  for (let b = 0; b < NB; b++) sq += h[b] * h[b];
  return { score: best / (2 * mean), sharp: sq / (NB * mean * mean), phase: ((bestBin + off + NB) % NB) / NB, hist: h };
}

function coarseTempo(env, fps) {
  const maxLag = Math.ceil(fps * 60 / 50 * 4) + 2;
  const ac = autocorr(env, Math.min(maxLag, env.length - 1));
  let best = null;
  for (let bpm = 60; bpm <= 200; bpm += 0.25) {
    const L = fps * 60 / bpm;
    let s = 0;
    const w = [1, 0.5, 0.33, 0.25];
    for (let m = 1; m <= 4; m++) s += w[m - 1] * interp(ac, L * m);
    s *= Math.exp(-0.5 * Math.log2(bpm / 115) ** 2 / 1.5);
    if (!best || s > best.s) best = { bpm, s };
  }
  return best ? best.bpm : 120;
}

function refineTempo(env, fps, bpm0) {
  let best = null;
  const lo = bpm0 * 0.98, hi = bpm0 * 1.02;
  // coarse pass then fine pass
  for (let bpm = lo; bpm <= hi; bpm += 0.05) {
    const r = foldScore(env, fps * 60 / bpm);
    if (!best || r.sharp > best.sharp) best = { bpm, ...r };
  }
  for (let bpm = best.bpm - 0.06; bpm <= best.bpm + 0.06; bpm += 0.005) {
    const r = foldScore(env, fps * 60 / bpm);
    if (r.sharp > best.sharp) best = { bpm, ...r };
  }
  // most produced music sits on a whole (or half) number
  for (const snap of [Math.round(best.bpm), Math.round(best.bpm * 2) / 2]) {
    if (Math.abs(snap - best.bpm) < 0.05) {
      const r = foldScore(env, fps * 60 / snap);
      if (r.sharp >= best.sharp * 0.98) return { bpm: snap, ...r };
    }
  }
  return best;
}

// Choose between half / double tempo.
// hints: { tagBpm, genre, minBpm, maxBpm }
function pickOctave(env, fps, bpm, hints = {}, bands = null) {
  const cands = [bpm / 2, bpm, bpm * 2].filter((b) => b >= 55 && b <= 215);
  if (hints.minBpm && hints.maxBpm) {
    const inRange = cands.filter((b) => b >= hints.minBpm && b < hints.maxBpm);
    if (inRange.length) return inRange[0];
  }
  const tag = parseFloat(hints.tagBpm);
  if (tag > 40 && tag < 300) {
    return cands.reduce((a, b) => (Math.abs(Math.log(b / tag)) < Math.abs(Math.log(a / tag)) ? b : a));
  }
  const g = (hints.genre || '').toLowerCase();
  if (/drum|dnb|d&b|d'n'b|jungle|neuro|liquid|footwork|juke/.test(g)) {
    const fast = cands.find((b) => b >= 150 && b < 200);
    if (fast) return fast;
  }
  let pick = cands.find((b) => b >= 76 && b < 152) ?? bpm;
  // Drum & bass read at half speed (~87) has its backbeat snare on EVERY slow
  // beat, while hip hop at ~90 has the snare on every OTHER beat (2 and 4).
  if (pick < 101 && pick * 2 < 200 && bands) {
    const P = fps * 60 / pick;
    const one = foldScore(bands.mid, P), two = foldScore(bands.mid, 2 * P);
    const h = two.hist, n = NB;
    const at = (ph) => { const b = ((Math.round(ph * n) % n) + n) % n; return h[(b + n - 1) % n] * 0.5 + h[b] + h[(b + 1) % n] * 0.5; };
    const ratio = at(two.phase + 0.5) / (at(two.phase) || 1e-9);
    if (one.score > 1.5 && ratio > 0.65) pick *= 2;
  }
  return pick;
}

// ---------------------------------------------------------------- beat placement
// Fine onset curve straight from the samples (≈1.5 ms resolution at 11025 Hz).
const FINE_HOP = 16, FINE_WIN = 32;
function fineOnsets(x) {
  const n = Math.floor(x.length / FINE_HOP);
  const e = new Float32Array(n);
  for (let j = 0; j < n; j++) {
    let s = 0;
    for (let i = j * FINE_HOP, end = Math.min(x.length, i + FINE_WIN); i < end; i++) s += x[i] * x[i];
    e[j] = Math.sqrt(s / FINE_WIN);
  }
  const d = new Float32Array(n);
  for (let j = 1; j < n; j++) d[j] = Math.max(0, e[j] - e[j - 1]);
  return d;
}

// frames -> seconds for the frame-level onset curve (flux at frame f reacts to
// an onset roughly a third of a window after the frame start)
const FRAME_DELAY = N * 0.45;
// fine curve: the attack shows up at the start of the rising window
const FINE_DELAY = FINE_WIN * 0.5;

function placeBeats(x, sr, feat, bpm, phase) {
  const fps = feat.fps;
  const periodS = 60 / bpm;
  let t0 = ((phase * fps * 60 / bpm) * HOP + FRAME_DELAY) / sr;
  // refine using the sample-level onset curve: shift within ±40 ms to the point
  // where attacks line up best across the whole track
  const d = fineOnsets(x);
  const finePerS = sr / FINE_HOP;
  const beatsTotal = Math.floor((x.length / sr - t0) / periodS) + 2;
  let bestShift = 0, bestScore = -1;
  for (let ms = -40; ms <= 40; ms += 0.5) {
    let s = 0;
    for (let b = 0; b < beatsTotal; b++) {
      const t = t0 + ms / 1000 + b * periodS;
      s += interp(d, t * finePerS);
    }
    if (s > bestScore) { bestScore = s; bestShift = ms; }
  }
  t0 += bestShift / 1000 + FINE_DELAY / sr;
  // earliest beat at or after the start of the file
  while (t0 - periodS >= 0) t0 -= periodS;
  while (t0 < 0) t0 += periodS;
  return t0;
}

// Which beat of the bar is "1". Section changes and new elements tend to land
// on bar starts; kicks sit on 1 and 3, snares/claps on 2 and 4.
function pickDownbeat(feat, t0, periodS, durationS) {
  const fps = feat.fps;
  const nBeats = Math.floor((durationS - t0) / periodS) + 1;
  if (nBeats < 16) return 0;
  const E = new Float64Array(nBeats), lowOn = new Float64Array(nBeats), midOn = new Float64Array(nBeats);
  for (let b = 0; b < nBeats; b++) {
    const a = Math.floor((t0 + b * periodS) * fps), z = Math.floor((t0 + (b + 1) * periodS) * fps);
    const vals = [];
    for (let f = Math.max(0, a); f < Math.min(feat.frames, z); f++) vals.push(feat.energy[f]);
    vals.sort((p, q) => p - q);
    E[b] = Math.log(1e-9 + (vals.length ? vals[vals.length >> 1] : 0));
    let lo = 0, mi = 0;
    for (let f = Math.max(0, a - 2); f <= Math.min(feat.frames - 1, a + 2); f++) { lo = Math.max(lo, feat.low[f]); mi = Math.max(mi, feat.mid[f]); }
    lowOn[b] = lo; midOn[b] = mi;
  }
  const nov = [0, 0, 0, 0], par = [0, 0, 0, 0];
  // first clearly audible beat; quieter beats are floored so a silent lead-in
  // does not look like a huge "new section"
  let maxE = -Infinity;
  for (let b = 0; b < nBeats; b++) maxE = Math.max(maxE, E[b]);
  let first = 0;
  while (first < nBeats - 1 && E[first] < maxE - 4) first++;
  for (let b = 0; b < nBeats; b++) E[b] = Math.max(E[b], maxE - 5);
  const bar = (b) => { let s = 0; for (let i = 0; i < 4; i++) s += E[Math.min(nBeats - 1, b + i)]; return s / 4; };
  for (let b = first + 4; b < nBeats - 4; b++) nov[b % 4] += Math.max(0, bar(b) - bar(b - 4));
  let lmSum = 0;
  for (let b = 0; b < nBeats; b++) lmSum += lowOn[b] + midOn[b];
  for (let b = 0; b < nBeats; b++) par[b % 4] += (lowOn[b] - midOn[b]) / (lmSum / nBeats || 1);
  // the beat with the heaviest kick in the bar is usually "1" (hip hop, dnb, dubstep);
  // in four-to-the-floor music all four are equal and this term drops out
  const lowK = [0, 0, 0, 0];
  for (let b = first; b < nBeats; b++) lowK[b % 4] += lowOn[b];
  const lowMean = (lowK[0] + lowK[1] + lowK[2] + lowK[3]) / 4 || 1;
  const novTot = nov.reduce((a, b) => a + b, 0) || 1;
  const parTot = par.reduce((a, b) => a + Math.abs(b), 0) || 1;
  let best = 0, bestS = -Infinity;
  for (let k = 0; k < 4; k++) {
    const kick13 = par[k] + par[(k + 2) % 4] - par[(k + 1) % 4] - par[(k + 3) % 4];
    const s = nov[k] / novTot + 0.5 * kick13 / parTot + 0.5 * (lowK[k] / lowMean - 1) + (first % 4 === k ? 0.15 : 0);
    if (s > bestS) { bestS = s; best = k; }
  }
  return best; // beats with index ≡ best (mod 4) are bar starts
}

// ---------------------------------------------------------------- key
// Krumhansl–Kessler key profiles
const MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

function chroma(x, sr) {
  const n = 4096, hop = 2048;
  const bins = n / 2 + 1;
  const re = new Float64Array(n), im = new Float64Array(n), mag = new Float64Array(bins);
  const pcOf = new Int8Array(bins).fill(-1);
  for (let k = 1; k < bins; k++) {
    const f = k * sr / n;
    if (f < 65 || f > 2100) continue;
    pcOf[k] = ((Math.round(69 + 12 * Math.log2(f / 440)) % 12) + 12) % 12;
  }
  const c = new Float64Array(12);
  const frame = new Float64Array(12);
  for (let s = 0; s + n <= x.length; s += hop) {
    magSpectrum(x, s, n, re, im, mag);
    frame.fill(0);
    let mx = 0;
    for (let k = 1; k < bins; k++) if (pcOf[k] >= 0) { frame[pcOf[k]] += mag[k]; }
    for (let i = 0; i < 12; i++) mx = Math.max(mx, frame[i]);
    if (mx < 1e-4) continue;
    for (let i = 0; i < 12; i++) c[i] += frame[i] / mx;
  }
  return c; // pitch classes, 0 = C
}

function corr(a, b) {
  const n = a.length;
  let ma = 0, mb = 0;
  for (let i = 0; i < n; i++) { ma += a[i]; mb += b[i]; }
  ma /= n; mb /= n;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < n; i++) { num += (a[i] - ma) * (b[i] - mb); da += (a[i] - ma) ** 2; db += (b[i] - mb) ** 2; }
  return num / (Math.sqrt(da * db) || 1e-9);
}

// returns { tonic: 0..11 with 0 = C, minor: bool, confidence }
export function detectKey(x, sr) {
  const c = chroma(x, sr); // pitch class p (MIDI % 12) with 0 = C
  const scores = [];
  for (let t = 0; t < 12; t++) {
    const rot = new Array(12);
    for (let i = 0; i < 12; i++) rot[i] = c[(t + i) % 12];
    scores.push({ tonic: t, minor: false, r: corr(rot, MAJOR) });
    scores.push({ tonic: t, minor: true, r: corr(rot, MINOR) });
  }
  scores.sort((a, b) => b.r - a.r);
  if (!(scores[0].r > 0)) return null;
  return { tonic: scores[0].tonic, minor: scores[0].minor, confidence: scores[0].r - scores[1].r };
}

// ---------------------------------------------------------------- key names
const SHARP = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const MINOR_NAMES = ['Cm', 'C#m', 'Dm', 'Ebm', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'Bbm', 'Bm'];
const MAJOR_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
// Camelot numbers: C major = 8B, A minor = 8A, each fifth up = +1
const camelotNum = (tonic, minor) => ((((minor ? tonic + 3 : tonic) * 7) % 12) + 12 + 7) % 12 + 1;

export function keyName(k, notation = 'classic') {
  if (!k) return '';
  if (notation === 'camelot') return `${camelotNum(k.tonic, k.minor)}${k.minor ? 'A' : 'B'}`;
  return k.minor ? MINOR_NAMES[k.tonic] : MAJOR_NAMES[k.tonic];
}

const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
// understands "Am", "A min", "A minor", "F#m", "Bbm", "C", "Db major", "8A", "08B", "1m"/"1d" (Open Key)
export function parseKey(text) {
  if (!text) return null;
  const s = String(text).trim();
  let m = s.match(/^0?(1[0-2]|[1-9])\s*([AaBb])$/);
  if (m) {
    const num = +m[1], minor = m[2].toUpperCase() === 'A';
    for (let t = 0; t < 12; t++) if (camelotNum(t, minor) === num) return { tonic: t, minor };
  }
  m = s.match(/^(1[0-2]|[1-9])\s*([mMdD])$/); // Open Key: 1d = C, 1m = Am
  if (m) {
    const minor = m[2].toLowerCase() === 'm';
    const num = ((+m[1] + 6) % 12) + 1; // open key n = camelot n+7
    for (let t = 0; t < 12; t++) if (camelotNum(t, minor) === num) return { tonic: t, minor };
  }
  m = s.match(/^([A-Ga-g])\s*(#|♯|b|♭)?\s*(m|min|minor|moll|mi|-)?\s*(maj|major|dur)?$/i);
  if (m) {
    let t = NOTE[m[1].toUpperCase()];
    if (m[2] === '#' || m[2] === '♯') t++;
    if (m[2] === 'b' || m[2] === '♭') t--;
    const minor = !!m[3] && !(m[3] === 'M');
    return { tonic: (t + 12) % 12, minor: minor && m[3] !== 'M' };
  }
  return null;
}

// ---------------------------------------------------------------- waveforms
// PWAV: 400 columns, height 0..31 in the low 5 bits, "whiteness" 0..7 in the top 3.
// PWV2: 100 columns, height 0..15.
function previews(feat, durationFrames) {
  const cols = (count) => {
    const peaks = new Float64Array(count), white = new Float64Array(count);
    for (let c = 0; c < count; c++) {
      const a = Math.floor(c * durationFrames / count), z = Math.max(a + 1, Math.floor((c + 1) * durationFrames / count));
      let p = 0, w = 0, e = 0;
      for (let f = a; f < Math.min(z, feat.frames); f++) {
        p = Math.max(p, feat.peak[f]);
        w += feat.highRatio[f] * feat.energy[f]; e += feat.energy[f];
      }
      peaks[c] = p; white[c] = e > 0 ? w / e : 0;
    }
    return { peaks, white };
  };
  const ref = (() => {
    const s = [...feat.peak].sort((a, b) => a - b);
    return s[Math.floor(s.length * 0.995)] || 1;
  })();
  const p400 = cols(400), p100 = cols(100);
  const pwav = new Uint8Array(400), pwv2 = new Uint8Array(100);
  for (let c = 0; c < 400; c++) {
    const h = Math.min(31, Math.round(25 * p400.peaks[c] / ref));
    const w = Math.min(7, Math.round(Math.sqrt(p400.white[c]) * 12));
    pwav[c] = (w << 5) | h;
  }
  for (let c = 0; c < 100; c++) pwv2[c] = Math.min(15, Math.round(14 * p100.peaks[c] / ref));
  return { pwav, pwv2 };
}

// ---------------------------------------------------------------- main
// x: Float32Array mono, sr: sample rate
// hints: { tagBpm, genre, minBpm, maxBpm, tagKey }
// returns { bpm, firstBeatS, downbeat, beats:[{beatNumber,tempoX100,timeMs}], key, pwav, pwv2, steady }
export function analyzeSignal(x, sr, hints = {}) {
  const durationS = x.length / sr;
  const feat = frameFeatures(x, sr);
  const env = tempoEnvelope(feat);
  const result = { durationS, bpm: 0, beats: [], key: null, steady: false };
  if (durationS >= 8) {
    const c = coarseTempo(env, feat.fps);
    const bands = { low: whiten(feat.low, feat.fps), mid: whiten(feat.mid, feat.fps) };
    const octave = pickOctave(env, feat.fps, c, hints, bands);
    const fine = refineTempo(env, feat.fps, octave);
    const bpm = Math.round(fine.bpm * 100) / 100;
    const periodS = 60 / bpm;
    const t0 = placeBeats(x, sr, feat, bpm, fine.phase);
    const down = pickDownbeat(feat, t0, periodS, durationS);
    const tempoX100 = Math.round(bpm * 100);
    for (let i = 0, t = t0; t < durationS; i++, t = t0 + i * periodS) {
      result.beats.push({ beatNumber: ((i - down + 400) % 4) + 1, tempoX100, timeMs: Math.round(t * 1000) });
    }
    result.bpm = bpm;
    result.firstBeatS = t0;
    result.downbeat = down;
    result.tempoScore = fine.score;
    result.steady = fine.score > 1.6;
  }
  result.key = durationS >= 5 ? detectKey(x, sr) : null;
  Object.assign(result, previews(feat, Math.floor(durationS * feat.fps)));
  return result;
}

// Re-build the beat list for a new tempo (used when the user halves/doubles BPM).
export function regrid(result, bpm) {
  const periodS = 60 / bpm;
  const tempoX100 = Math.round(bpm * 100);
  const beats = [];
  let t0 = result.firstBeatS;
  while (t0 - periodS >= 0) t0 -= periodS;
  while (t0 < 0) t0 += periodS;
  for (let i = 0, t = t0; t < result.durationS; i++, t = t0 + i * periodS) beats.push({ beatNumber: (i % 4) + 1, tempoX100, timeMs: Math.round(t * 1000) });
  // keep the bar start found by the analysis when halving/doubling
  const oldDown = result.firstBeatS + (result.downbeat || 0) * (60 / result.bpm);
  let k = 0, best = Infinity;
  for (let i = 0; i < Math.min(8, beats.length); i++) { const d = Math.abs(beats[i].timeMs / 1000 - oldDown); if (d < best) { best = d; k = i; } }
  beats.forEach((b, i) => { b.beatNumber = ((i - k + 400) % 4) + 1; });
  return { ...result, bpm, beats, firstBeatS: t0, downbeat: k };
}

// Move the whole grid and the scrolling waveforms by s seconds (to match the
// players' clock, see mp3info.js).
export function shiftResult(result, s) {
  if (!s) return result;
  const moved = { ...result, wave: shiftWaveforms(result.wave, s) };
  if (!result.bpm) return moved;
  return regrid({ ...moved, firstBeatS: result.firstBeatS + s }, result.bpm);
}

// Full analysis from a mono signal at WAVE_RATE: waveforms from the full signal,
// tempo/key/grid from a half-rate copy.
export function analyzeTrack(x, sr, hints = {}) {
  const wave = computeWaveforms(x, sr);
  const r = analyzeSignal(sr === ANALYSIS_RATE * 2 ? decimate2(x, sr) : x, sr === ANALYSIS_RATE * 2 ? ANALYSIS_RATE : sr, hints);
  r.wave = wave;
  return r;
}
