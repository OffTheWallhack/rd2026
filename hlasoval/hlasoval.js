/* Hlasoval — spoločné API (Supabase RPC cez fetch, bez SDK) a drobné pomôcky */
window.HL = (function () {
  const BASE = "https://znsrokpaoczljisaoulu.supabase.co/rest/v1/rpc/";
  const KEY = "sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45";
  const VOTE_URL = "https://durica.si/hlasoval/";

  async function rpc(name, body, opts) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), (opts && opts.timeout) || 8000);
    try {
      const r = await fetch(BASE + name, {
        method: "POST",
        headers: { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body || {}),
        signal: ctrl.signal,
        cache: "no-store"
      });
      if (!r.ok) {
        let msg = "http_" + r.status;
        try { const j = await r.json(); msg = j.message || j.hint || msg; } catch (e) {}
        throw new Error(msg);
      }
      return await r.json();
    } finally { clearTimeout(t); }
  }

  let memDevice = null;
  function deviceId() {
    try {
      let d = localStorage.getItem("hlasoval_device");
      if (!d) { d = newId(); localStorage.setItem("hlasoval_device", d); }
      return d;
    } catch (e) {
      if (!memDevice) memDevice = newId();
      return memDevice;
    }
  }
  function newId() {
    if (crypto && crypto.randomUUID) return crypto.randomUUID();
    const a = new Uint8Array(16); crypto.getRandomValues(a);
    return Array.from(a, b => b.toString(16).padStart(2, "0")).join("");
  }

  function genreMap(genres) { return Object.fromEntries((genres || []).map(g => [g.id, g])); }

  function order(genres, counts) {
    const ids = genres.map(g => g.id);
    return ids.slice().sort((a, b) => (counts[b] || 0) - (counts[a] || 0) || ids.indexOf(a) - ids.indexOf(b));
  }

  function plural(n, one, few, many) { return n === 1 ? one : (n >= 2 && n <= 4) ? few : many; }

  /* Plynulé prepísanie čísla (count-up) */
  function tween(el, to, fmt, dur) {
    const from = Number(el.dataset.v || 0);
    if (from === to) { el.textContent = fmt(to); return; }
    el.dataset.v = to;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = fmt(to); return; }
    const t0 = performance.now(); dur = dur || 520;
    if (el._tw) cancelAnimationFrame(el._tw);
    (function step(t) {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * e);
      if (p < 1) el._tw = requestAnimationFrame(step);
    })(t0);
  }

  let toastT;
  function toast(msg, ms) {
    const t = document.getElementById("toast"); if (!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), ms || 2200);
  }

  function hhmm(d) { d = d instanceof Date ? d : new Date(d); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); }

  function haptic(ms) { try { if (navigator.vibrate) navigator.vibrate(ms || 10); } catch (e) {} }

  return {
    VOTE_URL,
    tally: () => rpc("hlasoval_tally"),
    myVote: () => rpc("hlasoval_vote", { p_device: deviceId() }),
    vote: (g) => rpc("hlasoval_vote", { p_device: deviceId(), p_genre: g }),
    admin: (pin, action, payload) => rpc("hlasoval_admin", { p_pin: pin, p_action: action, p_payload: payload || {} }),
    deviceId, genreMap, order, plural, tween, toast, hhmm, haptic
  };
})();
