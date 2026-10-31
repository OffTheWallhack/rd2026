// Si pozeral — automatický skener dĺžok videí.
// Prejde všetky YouTube videá z pozeral/obsah.js, zistí presnú dĺžku a či sa dajú vložiť
// na cudziu stránku, a zapíše výsledok do pozeral/dlzky.json. Spúšťa ho GitHub Action.
//
// Zdroje: 1) stránka videa (dĺžka + či sa dá vložiť), 2) oEmbed (či video existuje a dá sa vložiť).
// Poistka: ak by naraz "zlyhala" veľká časť videí, YouTube nás asi blokuje — vtedy nič neoznačíme ako nefunkčné.
import fs from 'node:fs';

const OBSAH = 'pozeral/obsah.js';
const VYSTUP = 'pozeral/dlzky.json';
const LOG = '.github/pozeral/posledny-sken.txt';
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
  const r = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en&has_verified=1&bpctr=9999999999`, {
    headers:{ 'User-Agent':UA, 'Accept-Language':'en-US,en;q=0.9', Cookie:'CONSENT=YES+cb; SOCS=CAI' }
  });
  const html = await r.text();
  const j = vytiahniJson(html, 'var ytInitialPlayerResponse') || vytiahniJson(html, 'ytInitialPlayerResponse');
  if (!j) return { http:r.status, status:'NEČITATEĽNÉ' };
  const ps = j.playabilityStatus || {};
  return { http:r.status, status: ps.status, embed: ps.playableInEmbed, dovod: ps.reason || '', s: +(j.videoDetails?.lengthSeconds || 0) };
}

async function zOembed(id){
  const r = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent('https://www.youtube.com/watch?v=' + id)}`, { headers:{ 'User-Agent':UA } });
  return r.status;   // 200 = existuje a dá sa vložiť, 401/403 = vkladanie zakázané, 400/404 = neexistuje alebo súkromné
}

// Ak je v GitHube uložený kľúč YouTube Data API (secret YT_API_KEY), použijeme oficiálne API — najspoľahlivejšie.
const KLUC = process.env.YT_API_KEY || '';
const isoNaSek = d => { const m = /P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(d || '') || []; return (+m[1]||0)*86400 + (+m[2]||0)*3600 + (+m[3]||0)*60 + (+m[4]||0); };
async function zApi(zoznam){
  const out = {};
  for (let i = 0; i < zoznam.length; i += 50){
    const kus = zoznam.slice(i, i + 50);
    const r = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,status&id=${kus.join(',')}&key=${KLUC}`);
    const j = await r.json();
    if (!r.ok) throw new Error(JSON.stringify(j.error || j).slice(0, 200));
    for (const it of j.items || []) out[it.id] = { s: isoNaSek(it.contentDetails.duration), embed: it.status.embeddable, verejne: it.status.privacyStatus !== 'private' };
  }
  return out;
}

const vysledky = [], riadky = [];
let api = null;
if (KLUC){ try { api = await zApi([...ids]); console.log('Používam YouTube Data API.'); } catch (e) { console.log('API zlyhalo:', e.message); } }
if (api){
  for (const id of ids){
    const a = api[id];
    const r = !a ? { chyba:'video neexistuje alebo je súkromné' } : !a.verejne ? { chyba:'súkromné' } : a.embed === false ? { chyba:'vkladanie zakázané' } : a.s > 0 ? { s:a.s } : { neiste:true, dovod:'bez dĺžky' };
    vysledky.push({ id, ...r });
    riadky.push([id, 'api', '=>', r.s || r.chyba || ('? ' + r.dovod)].join('  '));
  }
} else for (const id of ids){
  let v = null, oe = 0;
  try { v = await zWatch(id); } catch (e) { v = { status:'SIEŤ', dovod:String(e) }; }
  try { oe = await zOembed(id); } catch {}
  let r;
  if (v.status === 'OK' && v.s > 0 && v.embed !== false && oe !== 401 && oe !== 403) r = { s: v.s };
  else if (oe === 401 || oe === 403 || (v.status === 'OK' && v.embed === false)) r = { chyba:'vkladanie zakázané' };
  else if ((oe === 404 || oe === 400) && v.status !== 'OK') r = { chyba: v.dovod || 'video neexistuje alebo je súkromné' };
  else if (oe === 200) r = { neiste:true, dovod:'existuje, dĺžku sa nepodarilo zistiť' };
  else r = { neiste:true, dovod: v.dovod || v.status || 'nevieme' };
  vysledky.push({ id, ...r });
  riadky.push([id, 'watch:' + (v.http || '') + '/' + v.status, 'embed:' + v.embed, 's:' + (v.s || 0), 'oembed:' + oe, '=>', r.s || r.chyba || ('? ' + r.dovod)].join('  '));
  console.log(riadky[riadky.length - 1]);
  await sleep(600);
}

// poistka proti blokovaniu: ak "padla" viac ako tretina videí, nové chyby nezapíšeme
const noveChyby = vysledky.filter(x => x.chyba && !(stare.chyby || {})[x.id]).length;
const blokovane = noveChyby > ids.size / 3;
if (blokovane) console.log(`POZOR: ${noveChyby} nových chýb z ${ids.size} — YouTube asi blokuje, chyby nezapisujem.`);

const videa = {}, chyby = {};
for (const x of vysledky){
  const staraDlzka = (stare.videa || {})[x.id];
  if (x.s) videa[x.id] = x.s;
  else if (x.chyba && !blokovane){ videa[x.id] = -1; chyby[x.id] = x.chyba; }
  else if (staraDlzka > 0) videa[x.id] = staraDlzka;           // nevieme isto: necháme poslednú dobrú dĺžku
}

fs.writeFileSync(LOG, `Sken ${new Date().toISOString()}${blokovane ? '  (POISTKA: chyby nezapísané)' : ''}\n` + riadky.join('\n') + '\n');

const zoradene = o => Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));
const nove = { videa: zoradene(videa), chyby: zoradene(chyby) };
const zmena = JSON.stringify(nove) !== JSON.stringify({ videa: stare.videa || {}, chyby: stare.chyby || {} });
if (zmena || !fs.existsSync(VYSTUP)){
  fs.writeFileSync(VYSTUP, JSON.stringify({ aktualizovane: new Date().toISOString(), ...nove }, null, 1) + '\n');
  console.log('Zapísané:', Object.values(videa).filter(x => x > 0).length, 'funguje,', Object.keys(chyby).length, 'nefunguje.');
} else console.log('Bez zmeny.');
