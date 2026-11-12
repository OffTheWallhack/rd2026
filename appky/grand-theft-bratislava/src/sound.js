// Tiny WebAudio synth: engine, skid, siren, hits, city ambience
export class Sound {
  constructor() {
    this.ctx = null;
    this.on = true;
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain();
    this.master.gain.value = 0.7;
    this.master.connect(c.destination);
    // noise buffer
    const len = c.sampleRate * 2;
    const b = c.createBuffer(1, len, c.sampleRate);
    const d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = w * 0.5 + last * 3; }
    this.noise = b;
  }
  _noiseSrc() {
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    return s;
  }
  start() {
    if (!this.ctx || this.started) return;
    this.started = true;
    const c = this.ctx;
    // ambience
    const amb = this._noiseSrc();
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
    const ag = c.createGain(); ag.gain.value = 0.06;
    amb.connect(lp).connect(ag).connect(this.master);
    amb.start();
    // engine
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const ef = c.createBiquadFilter(); ef.type = 'lowpass'; ef.frequency.value = 600; ef.Q.value = 3;
    const eg = c.createGain(); eg.gain.value = 0;
    o1.connect(ef); o2.connect(ef); ef.connect(eg).connect(this.master);
    o1.start(); o2.start();
    this.eng = { o1, o2, ef, eg };
    // skid
    const sk = this._noiseSrc();
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 4;
    const sg = c.createGain(); sg.gain.value = 0;
    sk.connect(bp).connect(sg).connect(this.master);
    sk.start();
    this.skid = sg;
    // siren
    const so = c.createOscillator(); so.type = 'triangle';
    const sgn = c.createGain(); sgn.gain.value = 0;
    so.connect(sgn).connect(this.master);
    so.start();
    this.siren = { so, sgn };
    // horn
    const h1 = c.createOscillator(), h2 = c.createOscillator();
    h1.type = h2.type = 'square'; h1.frequency.value = 392; h2.frequency.value = 494;
    const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 1500;
    const hg = c.createGain(); hg.gain.value = 0;
    h1.connect(hf); h2.connect(hf); hf.connect(hg).connect(this.master);
    h1.start(); h2.start();
    this.hornG = hg;
  }
  mute(m) { if (this.master) this.master.gain.setTargetAtTime(m || !this.on ? 0 : 0.7, this.ctx.currentTime, 0.05); }
  toggle() { this.on = !this.on; this.mute(false); return this.on; }
  update(G, car, police, cam) {
    if (!this.eng) return;
    const t = this.ctx.currentTime;
    if (car) {
      const v = Math.abs(car.fwd);
      const gear = Math.min(5, Math.floor(v / 9));
      const rpm = 0.25 + ((v - gear * 9) / 9) * 0.75 + (car.thr > 0 ? 0.08 : 0);
      const f = 38 + rpm * 70 + gear * 6;
      this.eng.o1.frequency.setTargetAtTime(f, t, 0.05);
      this.eng.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
      this.eng.ef.frequency.setTargetAtTime(300 + rpm * 900 + Math.abs(car.thr) * 400, t, 0.05);
      this.eng.eg.gain.setTargetAtTime(0.05 + Math.abs(car.thr) * 0.06, t, 0.08);
      const sh = Math.sin(car.h), ch = Math.cos(car.h);
      const lat = Math.abs(car.vx * ch - car.vz * sh);
      this.skid.gain.setTargetAtTime(Math.min(0.18, Math.max(0, lat - 2.5) * 0.04), t, 0.05);
    } else {
      this.eng.eg.gain.setTargetAtTime(0, t, 0.15);
      this.skid.gain.setTargetAtTime(0, t, 0.1);
    }
    let nd = 1e9;
    for (const p of police) nd = Math.min(nd, Math.hypot(p.x - cam.position.x, p.z - cam.position.z));
    const sv = nd < 250 ? Math.min(0.09, 9 / (nd + 30)) : 0;
    this.siren.sgn.gain.setTargetAtTime(sv, t, 0.2);
    this.siren.so.frequency.setTargetAtTime((G.t % 1.2) < 0.6 ? 720 : 960, t, 0.03);
  }
  _burst(dur, freq, gain, type = 'lowpass', q = 1) {
    if (!this.ctx || !this.started) return;
    const c = this.ctx, t = c.currentTime;
    const s = this._noiseSrc();
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f).connect(g).connect(this.master);
    s.start(t, Math.random());
    s.stop(t + dur + 0.05);
  }
  _tone(f0, f1, dur, gain, type = 'sine', delay = 0) {
    if (!this.ctx || !this.started) return;
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + dur + 0.05);
  }
  crash(i) { const k = Math.min(1, i / 15); this._burst(0.35 + k * 0.4, 900, 0.25 + k * 0.5); this._tone(90, 40, 0.3, 0.3 * k); }
  thud() { this._tone(140, 50, 0.18, 0.4); this._burst(0.12, 500, 0.2); }
  punch() { this._tone(180, 60, 0.12, 0.45); this._burst(0.08, 1200, 0.25); }
  whoosh() { this._burst(0.15, 2500, 0.12, 'bandpass', 2); }
  door() { this._tone(220, 120, 0.1, 0.2, 'square'); this._burst(0.06, 800, 0.15); }
  blip() { this._tone(880, 1320, 0.12, 0.15, 'square'); this._tone(1320, 1760, 0.15, 0.12, 'square', 0.1); }
  win() { [523, 659, 784, 1046].forEach((f, i) => this._tone(f, f, 0.25, 0.14, 'square', i * 0.11)); }
  fail() { [392, 330, 262, 196].forEach((f, i) => this._tone(f, f * 0.98, 0.3, 0.14, 'sawtooth', i * 0.16)); }
  boom() { this._burst(1.6, 300, 0.9); this._tone(70, 25, 1.2, 0.6); }
  shout() { this._tone(320, 520, 0.18, 0.12, 'sawtooth'); this._tone(520, 280, 0.25, 0.1, 'sawtooth', 0.16); }
  horn(on) { if (this.hornG) this.hornG.gain.setTargetAtTime(on ? 0.12 : 0, this.ctx.currentTime, 0.02); }
}
