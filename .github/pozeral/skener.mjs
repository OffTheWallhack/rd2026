// Si pozeral — automatický skener dĺžok videí.
// Prejde všetky YouTube videá z pozeral/obsah.js, zistí presnú dĺžku a či sa dajú vložiť
// na cudziu stránku, a zapíše výsledok do pozeral/dlzky.json. Spúšťa ho GitHub Action.
import fs from 'node:fs';

const OBSAH = 'pozeral/obsah.js';
const VYSTUP = 'pozeral/dlzky.json';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const sleep = ms => new Promise(r => setTimeout(r, ms));

const win = {};
new Function('window', fs.readFileSync(OBSAH, 'utf8'))(win);
const O = win.POZERAL;
const ids = new Set();
const add = list => (list || []).forEach(x => x && x.id && ids.add(x.id));
O.kanaly.forEach(k => add(k.program));
add(O.reklamy); add(O.predely); add(O.znelky);

let stare = { videa:{}, chyby:{} };
try { stare = JSON.parse(fs.readFileSync(VYSTUP, 'utf8')); } catch {}

// vytiahne JSON objekt, ktorý začína za daným textom (počíta zátvorky, ignoruje reťazce)
function vytiahniJson(html, znacka){
  const i = html.indexOf(znacka);
  if (i < 0) return null;
  const s = html.indexOf('{', i);
  let d = 0, str = false, esc = false;
  for (let j = s; j < html.length; j++){
    const c = html[j];
    if (str){ if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') str = false; continue; }
    if (c === '"') str = true;
    else if (c === '{') d++;
    else if (c === '}' && --d === 0){ try { return JSON.parse(html.slice(s, j + 1)); } catch { return null; } }
  }
  return null;
}

async function zWatch(id){
  const r = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en&gl=SK&has_verified=1&bpctr=9999999999`, {
    headers:{ 'User-Agent':UA, 'Accept-Language':'en-US,en;q=0.9,sk;q=0.8', Cookie:'CONSENT=YES+cb; SOCS=CAI' }
  });
  const j = vytiahniJson(await r.text(), 'ytInitialPlayerResponse');
  if (!j) return null;
  const ps = j.playabilityStatus || {};
  return { status: ps.status, embed: ps.playableInEmbed, dovod: ps.reason || '', s: +(j.videoDetails?.lengthSeconds || 0) };
}

async function zEmbedu(id){
  const r = await fetch('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'User-Agent':UA, Origin:'https://www.youtube.com' },
    body: JSON.stringify({ videoId:id, context:{ client:{ clientName:'WEB_EMBEDDED_PLAYER', clientVersion:'1.20250310.01.00', hl:'en', gl:'SK' }, thirdParty:{ embedUrl:'https://durica.si/pozeral/' } } })
  });
  const j = await r.json().catch(() => null);
  if (!j) return null;
  const ps = j.playabilityStatus || {};
  return { status: ps.status, dovod: ps.reason || '', s: +(j.videoDetails?.lengthSeconds || 0) };
}

const jeBot = d => /bot|sign in to confirm/i.test(d);
const jeKrajina = d => /country|region/i.test(d);

const videa = {}, chyby = {}, neiste = [];
for (const id of ids){
  let v = null, e = null;
  try { v = await zWatch(id); } catch {}
  try { e = await zEmbedu(id); } catch {}
  const ok = x => x && x.status === 'OK' && x.s > 0;
  let vysledok;
  if (ok(e) && (!v || v.embed !== false)) vysledok = e.s;                       // ide prehrať vo vloženom prehrávači
  else if (ok(v) && v.embed === false) vysledok = { chyba:'vkladanie zakázané' };
  else if (ok(v) && !e) vysledok = v.s;
  else {
    const dovod = (e && e.dovod) || (v && v.dovod) || '';
    if (!v && !e) vysledok = null;                                               // sieť zlyhala
    else if (jeBot(dovod) || jeKrajina(dovod)) vysledok = null;                  // nevieme isto, necháme starú hodnotu
    else vysledok = { chyba: dovod || 'nedostupné' };
  }
  if (vysledok === null){
    neiste.push(id);
    if (id in (stare.videa || {})) videa[id] = stare.videa[id];
    if (stare.chyby && stare.chyby[id]) chyby[id] = stare.chyby[id];
  } else if (typeof vysledok === 'number') videa[id] = vysledok;
  else { videa[id] = -1; chyby[id] = vysledok.chyba; }
  console.log(String(videa[id] ?? '?').padStart(6), id, chyby[id] || '');
  await sleep(700);
}

const zoradene = o => Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));
const nove = { videa: zoradene(videa), chyby: zoradene(chyby) };
const zmena = JSON.stringify(nove) !== JSON.stringify({ videa: stare.videa || {}, chyby: stare.chyby || {} });
if (zmena || !fs.existsSync(VYSTUP)){
  fs.writeFileSync(VYSTUP, JSON.stringify({ aktualizovane: new Date().toISOString(), ...nove }, null, 1) + '\n');
  console.log('Zapísané', Object.keys(videa).length, 'videí,', Object.keys(chyby).length, 'nefunguje,', neiste.length, 'neisté.');
} else console.log('Bez zmeny.');
