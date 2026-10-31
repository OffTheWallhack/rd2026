// Si pozeral — automatický skener dĺžok videí.
// Prejde všetky YouTube videá z pozeral/obsah.js, zistí presnú dĺžku a či sa dajú vložiť
// na cudziu stránku, a zapíše výsledok do pozeral/dlzky.json. Spúšťa ho GitHub Action.
//
// Zdroje: 1) YouTube Data API, ak je v GitHube secret YT_API_KEY (dĺžka + či sa dá vložiť),
//         2) inak oEmbed (len či video existuje a dá sa vložiť; dĺžky YouTube z GitHubu blokuje).
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
} else {
  // a) oEmbed: existuje video a dá sa vložiť? (YouTube ho z GitHubu neblokuje)
  const oe = {};
  for (const id of ids){ try { oe[id] = await zOembed(id); } catch { oe[id] = 0; } await sleep(250); }
  const dlzky = {};   // bez kľúča YouTube API dĺžky z GitHubu nezistíme (YouTube blokuje), stránka použije odhady
  for (const id of ids){
    const o = oe[id];
    let r;
    if (o === 401 || o === 403) r = { chyba:'vkladanie zakázané' };
    else if (o === 404 || o === 400) r = { chyba:'video neexistuje alebo je súkromné' };
    else if (dlzky[id]) r = { s: dlzky[id] };
    else if (o === 200) r = { neiste:true, dovod:'existuje, dĺžku sa nepodarilo zistiť' };
    else r = { neiste:true, dovod:'oEmbed ' + o };
    vysledky.push({ id, ...r });
    riadky.push([id, 'oembed:' + o, '=>', r.s || r.chyba || ('? ' + r.dovod)].join('  '));
  }
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
