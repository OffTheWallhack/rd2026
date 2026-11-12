// HUD, menus, touch controls, minimap
const $ = (s) => document.querySelector(s);

export class UI {
  constructor(G, mobile) {
    this.G = G;
    this.mobile = mobile;
    this.stick = { active: false, x: 0, y: 0 };
    this.btn = { hb: 0, atk: 0, gas: 0, brake: 0 };
    this.look = { dx: 0 };
    this.mm = $('#mm');
    this.mmc = this.mm.getContext('2d');
    this.mmT = 0;
    document.body.classList.toggle('touch', mobile || matchMedia('(pointer: coarse)').matches);
    $('#bPlay').addEventListener('click', () => this.onStart && this.onStart());
    $('#bResume').addEventListener('click', () => this.onPause && this.onPause());
    $('#bPause').addEventListener('click', () => this.onPause && this.onPause());
    $('#bMap').addEventListener('click', () => this.toggleMap(this.G.world, this.G));
    $('#map').addEventListener('click', () => { if (!this.mapWide) { this.mapWide = true; $('#map').hidden = true; this.toggleMap(this.G.world, this.G); $('#maphint').textContent = 'ťukni pre zatvorenie'; } else this.toggleMap(); });
    document.querySelectorAll('[data-detail]').forEach((b) =>
      b.addEventListener('click', () => {
        document.querySelectorAll('[data-detail]').forEach((x) => x.classList.toggle('on', x === b));
        this.onDetail && this.onDetail(+b.dataset.detail);
      })
    );
    $('#bSound').addEventListener('click', () => { const on = this.snd && this.snd.toggle(); $('#bSound').textContent = on ? 'Zvuk: ZAP' : 'Zvuk: VYP'; });
  }
  loading(p, txt) {
    $('#loadbar i').style.width = Math.round(p * 100) + '%';
    if (txt) $('#loadtxt').textContent = txt;
  }
  ready() {
    $('#load').hidden = true;
    $('#title').hidden = false;
  }
  play() {
    $('#title').hidden = true;
    $('#hud').hidden = false;
    document.body.classList.add('playing');
  }
  pause(p) {
    $('#pause').hidden = !p;
  }
  error(msg) {
    $('#loadtxt').textContent = 'Chyba: ' + msg;
  }
  toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.remove('show');
    void t.offsetWidth;
    t.classList.add('show');
  }
  big(title, sub, color, dur = 2.6) {
    const b = $('#big');
    b.querySelector('b').textContent = title;
    b.querySelector('b').style.color = color || '#fff';
    b.querySelector('span').textContent = sub || '';
    b.classList.remove('show');
    void b.offsetWidth;
    b.style.animationDuration = dur + 's';
    b.classList.add('show');
  }
  flash(color, a) {
    const f = $('#flash');
    f.style.background = color;
    f.style.transition = 'none';
    f.style.opacity = a;
    requestAnimationFrame(() => { f.style.transition = 'opacity .6s'; f.style.opacity = 0; });
  }
  hint(t) {
    if (this._hint === t) return;
    this._hint = t;
    const h = $('#hint');
    h.textContent = t;
    h.hidden = !t || this.mobile;
  }
  flashHint() {}

  bindTouch(input, snd) {
    this.snd = snd;
    const stickEl = $('#stick'), knob = $('#stick i');
    let sid = null, sx = 0, sy = 0, lid = null, lx = 0;
    const R = 52;
    const zone = $('#touch');
    zone.addEventListener('touchstart', (e) => {
      snd.unlock();
      for (const t of e.changedTouches) {
        if (t.clientX < innerWidth * 0.5 && sid === null) {
          sid = t.identifier; sx = t.clientX; sy = t.clientY;
          stickEl.style.left = sx + 'px'; stickEl.style.top = sy + 'px';
          stickEl.classList.add('on');
          this.stick.active = true; this.stick.x = this.stick.y = 0;
        } else if (lid === null) { lid = t.identifier; lx = t.clientX; }
      }
      e.preventDefault();
    }, { passive: false });
    zone.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === sid) {
          let dx = t.clientX - sx, dy = t.clientY - sy;
          const d = Math.hypot(dx, dy);
          if (d > R) { dx *= R / d; dy *= R / d; }
          knob.style.transform = `translate(${dx}px,${dy}px)`;
          this.stick.x = dx / R; this.stick.y = -dy / R;
        } else if (t.identifier === lid) {
          this.look.dx += (t.clientX - lx) * 0.009;
          lx = t.clientX;
        }
      }
      e.preventDefault();
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === sid) {
          sid = null; this.stick.active = false; this.stick.x = this.stick.y = 0;
          knob.style.transform = ''; stickEl.classList.remove('on');
        }
        if (t.identifier === lid) lid = null;
      }
    };
    zone.addEventListener('touchend', end);
    zone.addEventListener('touchcancel', end);
    const hold = (id, key) => {
      const el = $(id);
      el.addEventListener('touchstart', (e) => { snd.unlock(); this.btn[key] = 1; el.classList.add('dn'); e.preventDefault(); e.stopPropagation(); }, { passive: false });
      const up = (e) => { this.btn[key] = 0; el.classList.remove('dn'); e.preventDefault(); };
      el.addEventListener('touchend', up);
      el.addEventListener('touchcancel', up);
    };
    hold('#bGas', 'gas');
    hold('#bBrake', 'brake');
    hold('#bHb', 'hb');
    hold('#bAtk', 'atk');
    $('#bAct').addEventListener('touchstart', (e) => { snd.unlock(); input.act = 1; e.preventDefault(); e.stopPropagation(); }, { passive: false });
    $('#bAct').addEventListener('click', () => (input.act = 1));
  }

  update(G, I, world) {
    $('#money').textContent = '€ ' + Math.floor(G.money).toLocaleString('sk-SK');
    const st = '★'.repeat(G.wanted) + '☆'.repeat(5 - G.wanted);
    if (this._st !== st) { this._st = st; $('#stars').textContent = st; $('#stars').classList.toggle('hot', G.wanted > 0); }
    const hh = Math.floor(G.tod), mm = Math.floor((G.tod % 1) * 60);
    $('#clock').textContent = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
    const label = G.street ? (G.district ? G.street + ' · ' + G.district : G.street) : G.district || '';
    if (this._street !== label) {
      this._street = label;
      const s = $('#street');
      s.textContent = label;
      s.classList.remove('show');
      void s.offsetWidth;
      if (label) s.classList.add('show');
    }
    let gt = I.goalText;
    if (I.goal) {
      const d = Math.hypot(I.goal.x - I.px, I.goal.z - I.pz);
      gt += ' · ' + (d > 1000 ? (d / 1000).toFixed(1) + ' km' : Math.round(d) + ' m');
    }
    if (this._gt !== gt) { this._gt = gt; $('#goal').textContent = gt; }
    $('#speed').textContent = I.speed !== null ? Math.round(I.speed) + ' km/h' : '';
    $('#hp').style.width = Math.max(0, G.hp) + '%';
    document.body.classList.toggle('incar', I.inCar);
    document.body.classList.toggle('nearcar', I.nearCar || I.inCar);
    $('#bAct').textContent = I.inCar ? 'VYSTÚP' : 'NASTÚP';
    this.mmT -= 1;
    if (this.mmT <= 0) { this.mmT = 2; this.drawMini(I, world); }
  }

  drawMini(I, world) {
    const c = this.mm, g = this.mmc;
    const S = c.width;
    const range = 130; // metres radius
    const sc = S / 2 / range; // minimap px per metre
    const fwd = I.yaw + Math.PI;
    const th = -Math.PI / 2 - Math.atan2(Math.cos(fwd), Math.sin(fwd));
    g.save();
    g.clearRect(0, 0, S, S);
    g.beginPath();
    g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2);
    g.clip();
    g.fillStyle = '#111';
    g.fillRect(0, 0, S, S);
    g.translate(S / 2, S / 2);
    g.rotate(th);
    g.scale(sc, sc);
    g.translate(-I.px, -I.pz);
    g.imageSmoothingEnabled = true;
    world.drawGround(g, I.px, I.pz, range * 1.5);
    g.restore();
    // overlay: dark tint
    g.fillStyle = 'rgba(0,0,0,0.15)';
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.fill();
    const toMap = (x, z) => {
      const dx = (x - I.px) * sc, dz = (z - I.pz) * sc;
      const ct = Math.cos(th), st = Math.sin(th);
      return [S / 2 + dx * ct - dz * st, S / 2 + dx * st + dz * ct];
    };
    const dot = (x, z, col, rad, clampEdge) => {
      let [mx, my] = toMap(x, z);
      const dx = mx - S / 2, dy = my - S / 2, d = Math.hypot(dx, dy), lim = S / 2 - 8;
      if (d > lim) { if (!clampEdge) return; mx = S / 2 + (dx / d) * lim; my = S / 2 + (dy / d) * lim; }
      g.fillStyle = col;
      g.beginPath(); g.arc(mx, my, rad, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#000'; g.lineWidth = 1.5; g.stroke();
    };
    for (const m of I.markers) if (m.on) dot(m.x, m.z, m.c, 6, true);
    for (const p of I.police) dot(p.x, p.z, (performance.now() % 500) < 250 ? '#ff3030' : '#3060ff', 4.5, false);
    if (I.goal) dot(I.goal.x, I.goal.z, '#ff4fd8', 7, true);
    // player arrow
    g.save();
    g.translate(S / 2, S / 2);
    g.rotate(th + Math.PI - I.h);
    g.fillStyle = '#fff';
    g.strokeStyle = '#000';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(0, -9); g.lineTo(6, 7); g.lineTo(0, 3); g.lineTo(-6, 7); g.closePath();
    g.fill(); g.stroke();
    g.restore();
    g.strokeStyle = 'rgba(255,255,255,0.8)';
    g.lineWidth = 3;
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.stroke();
  }

  toggleMap(world, G) {
    const m = $('#map');
    if (!m.hidden || !world) { m.hidden = true; this.mapWide = false; return; }
    if (!this.mapWide) $('#maphint').textContent = 'ťukni pre celé mesto';
    m.hidden = false;
    const cv = $('#mapc');
    const S = Math.min(innerWidth, innerHeight) * 0.92 * (devicePixelRatio || 1);
    cv.width = cv.height = S;
    cv.style.width = cv.style.height = S / (devicePixelRatio || 1) + 'px';
    const g = cv.getContext('2d');
    // vyrez mapy okolo hraca (cele mesto je privelke na jeden stvorec)
    const P0 = window.__gtbPos && window.__gtbPos();
    const R = this.mapWide ? world.H / 2 : 900;
    const cx0 = Math.min(world.W - R, Math.max(R, P0 ? P0.x : world.W / 2)), cz0 = Math.min(world.H - R, Math.max(R, P0 ? P0.z : world.H / 2));
    const k = S / (2 * R);
    g.fillStyle = '#111'; g.fillRect(0, 0, S, S);
    g.save();
    g.scale(k, k); g.translate(-(cx0 - R), -(cz0 - R));
    world.drawGround(g, cx0, cz0, R * 1.5);
    g.restore();
    g.translate(-(cx0 - R) * k, -(cz0 - R) * k);
    const I = this._lastI;
    const pin = (x, z, col, r) => { g.fillStyle = col; g.strokeStyle = '#000'; g.lineWidth = 3; g.beginPath(); g.arc(x * k, z * k, r, 0, 7); g.fill(); g.stroke(); };
    const L = G && G.world ? window.__gtbLOC : null;
    if (window.__gtbLM) window.__gtbLM(pin, S);
    if (L) { for (const c of L.contacts) pin(c[0], c[1], '#ffcc33', S / 70); for (const c of L.races) pin(c[0], c[1], '#33e0ff', S / 70); }
    const p = window.__gtbPos && window.__gtbPos();
    if (p) {
      if (p.goal) pin(p.goal.x, p.goal.z, '#ff4fd8', S / 60);
      g.save(); g.translate(p.x * k, p.z * k); g.rotate(Math.PI - p.h);
      g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 3;
      const a = S / 50;
      g.beginPath(); g.moveTo(0, -a); g.lineTo(a * 0.7, a * 0.8); g.lineTo(0, a * 0.35); g.lineTo(-a * 0.7, a * 0.8); g.closePath(); g.fill(); g.stroke();
      g.restore();
    }
  }
}
