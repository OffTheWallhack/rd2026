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

// ---------- playlisty a kanály: { playlist:'PL…' } alebo { kanal:'@meno' } v programe ----------
const PLAYLISTY = 'pozeral/playlisty.json';
let starePl = {};
try { starePl = JSON.parse(fs.readFileSync(PLAYLISTY, 'utf8')); } catch {}
const plDlzky = {};
function najdi(o, kluc, out = []){
  if (Array.isArray(o)) o.forEach(x => najdi(x, kluc, out));
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)){ if (k === kluc) out.push(v); else najdi(v, kluc, out); }
  return out;
}
const casNaSek = t => (t || '').split(':').reduce((a, x) => a * 60 + (+x || 0), 0);
const textZ = t => t ? (t.simpleText || (t.runs || []).map(r => r.text).join('')) : '';
async function innertube(telo){
  const r = await fetch('https://www.youtube.com/youtubei/v1/browse?prettyPrint=false', {
    method:'POST', headers:{ 'Content-Type':'application/json', 'User-Agent':UA, Origin:'https://www.youtube.com' },
    body: JSON.stringify({ context:{ client:{ clientName:'WEB', clientVersion:'2.20250312.04.00', hl:'cs', gl:'CZ' } }, ...telo })
  });
  return r.json();
}
function polozky(j){
  const out = [];
  for (const v of najdi(j, 'playlistVideoRenderer')){
    if (!v.videoId || v.isPlayable === false) continue;
    out.push({ id:v.videoId, nazov:textZ(v.title), s:+v.lengthSeconds || casNaSek(textZ(v.lengthText)) });
  }
  for (const v of najdi(j, 'lockupViewModel')){
    if (!v.contentId || (v.contentType && v.contentType !== 'LOCKUP_CONTENT_TYPE_VIDEO')) continue;
    const nazov = v.metadata?.lockupMetadataViewModel?.title?.content || '';
    const cas = najdi(v, 'thumbnailBadgeViewModel').map(b => b.text).find(t => /^\d+(:\d+)+$/.test(t || '')) || '';
    out.push({ id:v.contentId, nazov, s:casNaSek(cas) });
  }
  for (const v of najdi(j, 'videoRenderer')){
    if (!v.videoId) continue;
    out.push({ id:v.videoId, nazov:textZ(v.title), s:casNaSek(textZ(v.lengthText)) });
  }
  return out;
}
const ladenie = [];
async function zRss(pl){
  const r = await fetch('https://www.youtube.com/feeds/videos.xml?playlist_id=' + pl, { headers:{ 'User-Agent':UA } });
  const x = await r.text();
  const out = [];
  for (const m of x.matchAll(/<entry>[\s\S]*?<yt:videoId>([\w-]{11})<\/yt:videoId>[\s\S]*?<title>([^<]*)<\/title>/g)) out.push({ id:m[1], nazov:m[2].replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'"), s:0 });
  ladenie.push(`rss ${pl}: http ${r.status}, ${out.length} videí`);
  return out;
}
async function zHtml(pl){
  const r = await fetch('https://www.youtube.com/playlist?list=' + pl + '&hl=cs', { headers:{ 'User-Agent':UA, 'Accept-Language':'cs', Cookie:'CONSENT=YES+cb; SOCS=CAI' } });
  const html = await r.text();
  const i = html.indexOf('ytInitialData'), st = html.indexOf('{', i);
  let j = null;
  if (i > 0){ let d = 0, str = false, esc = false; for (let k = st; k < html.length; k++){ const c = html[k]; if (str){ if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') str = false; continue; } if (c === '"') str = true; else if (c === '{') d++; else if (c === '}' && --d === 0){ try { j = JSON.parse(html.slice(st, k + 1)); } catch {} break; } } }
  const out = j ? polozky(j) : [];
  ladenie.push(`html ${pl}: http ${r.status}, ${html.length} B, ${out.length} videí`);
  return out;
}
async function nacitajPlaylist(pl, max){
  let j = await innertube({ browseId: 'VL' + pl }), vsetko = polozky(j), kolo = 0;
  ladenie.push(`innertube ${pl}: kľúče ${Object.keys(j || {}).slice(0, 8).join(',')}; ${vsetko.length} videí; alert: ${JSON.stringify(najdi(j, 'alertRenderer')).slice(0, 160)}`);
  if (!vsetko.length){ vsetko = await zHtml(pl); }
  if (!vsetko.length){ return await zRss(pl); }
  while (vsetko.length < max && kolo++ < 10){
    const tok = najdi(j, 'continuationCommand').map(c => c.token).find(Boolean);
    if (!tok) break;
    j = await innertube({ continuation: tok });
    const dalsie = polozky(j); if (!dalsie.length) break;
    vsetko = vsetko.concat(dalsie);
    await sleep(500);
  }
  return vsetko;
}
async function kanalNaPlaylist(handle){
  const r = await fetch('https://www.youtube.com/' + handle, { headers:{ 'User-Agent':UA, 'Accept-Language':'cs', Cookie:'CONSENT=YES+cb; SOCS=CAI' } });
  const html = await r.text();
  const m = /"(?:channelId|externalId)":"(UC[\w-]{22})"/.exec(html) || /channel\/(UC[\w-]{22})/.exec(html);
  ladenie.push(`kanál ${handle}: http ${r.status}, ${html.length} B, id ${m ? m[1] : '-'}`);
  return m ? 'UU' + m[1].slice(2) : null;
}
const plVysledky = {};
for (const k of O.kanaly) for (const p of k.program){
  if (!p.playlist && !p.kanal) continue;
  const kluc = p.playlist || p.kanal;
  try {
    const pl = p.playlist || await kanalNaPlaylist(p.kanal);
    const zoznam = pl ? await nacitajPlaylist(pl, p.max || 60) : [];
    const unik = []; const videne = new Set();
    const minS = p.minSek ?? 240, maxS = p.maxSek ?? 5400;   // bez krátkych klipov a dlhých kompilácií
    for (const x of zoznam){
      if (videne.has(x.id)) continue;
      if (x.s && (x.s < minS || x.s > maxS)) continue;
      if (/porovnání|porovnanie|trailer|upoutávka|upútavka|unboxing|ukážka|ukázka|intro\b|znělka|znelka|opening|reakce|recenze|parodie|AMV/i.test(x.nazov || '')) continue;
      videne.add(x.id); unik.push(x);
    }
    if (unik.length){ plVysledky[kluc] = unik.slice(0, p.max || 60); console.log('Playlist', kluc, '→', plVysledky[kluc].length, 'videí'); }
    else if (starePl[kluc]){ plVysledky[kluc] = starePl[kluc]; console.log('Playlist', kluc, 'sa nepodarilo načítať, nechávam starý zoznam'); }
    else console.log('Playlist', kluc, 'je prázdny alebo sa nedá načítať');
  } catch (e) {
    if (starePl[kluc]) plVysledky[kluc] = starePl[kluc];
    console.log('Playlist', kluc, 'chyba:', e.message);
  }
  for (const x of plVysledky[kluc] || []){ ids.add(x.id); if (x.s > 0) plDlzky[x.id] = x.s; }
  await sleep(500);
}
fs.writeFileSync(PLAYLISTY, JSON.stringify(plVysledky, null, 1) + '\n');

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
    const r = !a ? { chyba:'video neexistuje alebo je súkromné' } : !a.verejne ? { chyba:'súkromné' } : a.embed === false ? { chyba:'vkladanie zakázané' } : a.s > 0 ? { s:a.s } : plDlzky[id] ? { s:plDlzky[id] } : { neiste:true, dovod:'bez dĺžky' };
    vysledky.push({ id, ...r });
    riadky.push([id, 'api', '=>', r.s || r.chyba || ('? ' + r.dovod)].join('  '));
  }
} else {
  // a) oEmbed: existuje video a dá sa vložiť? (YouTube ho z GitHubu neblokuje)
  const oe = {};
  for (const id of ids){ try { oe[id] = await zOembed(id); } catch { oe[id] = 0; } await sleep(250); }
  const dlzky = plDlzky;   // dĺžky máme len z playlistov; pri ostatných stránka použije odhady
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

fs.writeFileSync(LOG, `Sken ${new Date().toISOString()}${blokovane ? '  (POISTKA: chyby nezapísané)' : ''}\n` + ladenie.join('\n') + '\n---\n' + riadky.join('\n') + '\n');

const zoradene = o => Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));
const nove = { videa: zoradene(videa), chyby: zoradene(chyby) };
const zmena = JSON.stringify(nove) !== JSON.stringify({ videa: stare.videa || {}, chyby: stare.chyby || {} });
if (zmena || !fs.existsSync(VYSTUP)){
  fs.writeFileSync(VYSTUP, JSON.stringify({ aktualizovane: new Date().toISOString(), ...nove }, null, 1) + '\n');
  console.log('Zapísané:', Object.values(videa).filter(x => x > 0).length, 'funguje,', Object.keys(chyby).length, 'nefunguje.');
} else console.log('Bez zmeny.');
