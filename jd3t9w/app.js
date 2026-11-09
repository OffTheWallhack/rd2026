(function(){
'use strict';
const SB_URL='https://znsrokpaoczljisaoulu.supabase.co';
const SB_KEY='sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';
const BUCKET='jedalnicek-foto';
const MEALS=[['ranajky','Raňajky'],['obed','Obed'],['snack','Snack'],['vecera','Večera']];
const DAYS=['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota'];
const SRC={zakladne:'Základné',openfoodfacts:'Z obalu',vlastne:'Vlastné'};

const sb=supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,storageKey:'tanier-pre-dvoch-auth'}});

/* ---------- pomocné ---------- */
const $=s=>document.querySelector(s);
const app=$('#app');
const pad=n=>String(n).padStart(2,'0');
const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const r1=n=>Math.round(n*10)/10;
const fmt=n=>Math.round(+n||0).toLocaleString('sk-SK');
const fmt1=n=>r1(+n||0).toLocaleString('sk-SK');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plural=n=>n===1?'zápis':n>=2&&n<=4?'zápisy':'zápisov';
const norm=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
function mealByTime(){const d=new Date(),h=d.getHours()+d.getMinutes()/60;return h<10.5?'ranajky':h<15?'obed':h<17.5?'snack':'vecera'}
function uuid(){return crypto.randomUUID?crypto.randomUUID():'x'+Date.now().toString(36)+Math.random().toString(36).slice(2)}

let toastT;
function toast(t){let el=$('.toast');if(!el){el=document.createElement('div');el.className='toast';el.setAttribute('role','status');document.body.appendChild(el)}el.textContent=t;clearTimeout(toastT);toastT=setTimeout(()=>el.remove(),2200)}

function errText(e){
  const m=(e&&(e.message||e.error_description||e.msg))||String(e||'');
  if(/Invalid login credentials/i.test(m))return 'Nesprávny e-mail alebo heslo.';
  if(/Email not confirmed/i.test(m))return 'Najprv potvrď e-mail cez odkaz, ktorý ti prišiel, potom sa prihlás.';
  if(/Signups not allowed|signup.*disabled/i.test(m))return 'Nové účty sú teraz vypnuté. Povedz Robovi, nech ťa pridá.';
  if(/already registered|already been registered/i.test(m))return 'Tento e-mail už má účet. Prepni na Prihlásiť.';
  if(/Password should be at least/i.test(m))return 'Heslo musí mať aspoň 6 znakov.';
  if(/rate limit|too many/i.test(m))return 'Príliš veľa pokusov. Skús to o chvíľu.';
  if(/Failed to fetch|NetworkError|Load failed/i.test(m))return 'Nie si pripojený na internet.';
  return m||'Niečo sa pokazilo.';
}

/* ---------- stav ---------- */
const S={session:null,me:null,people:[],viewing:null,date:iso(new Date()),foods:[],entries:[],urls:{},view:'den'};
const person=id=>S.people.find(p=>p.id===id);
const otherOf=id=>S.people.find(p=>p.id!==id);

/* ---------- dáta ---------- */
async function loadPeople(){
  const {data,error}=await sb.from('jed_osoby').select('id,meno,farba,poradie,user_id').order('poradie');
  if(error)throw error;S.people=data;
}
async function loadFoods(){
  const {data,error}=await sb.from('jed_potraviny').select('*').order('nazov');
  if(error)throw error;S.foods=data;
}
async function loadEntries(){
  const date=S.date;
  const {data,error}=await sb.from('jed_zapisy').select('*').eq('datum',date).order('created_at');
  if(error)throw error;
  if(date!==S.date)return;
  S.entries=data;
  const paths=[...new Set(data.map(e=>e.foto_path).filter(p=>p&&!S.urls[p]))];
  if(paths.length){
    const {data:signed}=await sb.storage.from(BUCKET).createSignedUrls(paths,60*60*6);
    (signed||[]).forEach(s=>{if(s.signedUrl)S.urls[s.path]=s.signedUrl});
  }
}
function totals(pid){
  return S.entries.filter(e=>e.osoba_id===pid).reduce((a,e)=>({kcal:a.kcal+(+e.kcal),p:a.p+(+e.bielkoviny),c:a.c+(+e.sacharidy),f:a.f+(+e.tuky),n:a.n+1}),{kcal:0,p:0,c:0,f:0,n:0});
}

/* ---------- štart ---------- */
let booting=false;
async function boot(){
  if(booting)return;booting=true;
  try{
    const {data:{session}}=await sb.auth.getSession();
    S.session=session;
    if(!session){S.me=null;renderLogin();return}
    const {data:profs,error}=await sb.rpc('jed_profily');
    if(error)throw error;
    const mine=profs.find(p=>p.moj);
    if(!mine){renderLink(profs);return}
    await Promise.all([loadPeople(),loadFoods()]);
    S.me=person(mine.id);S.viewing=S.viewing&&person(S.viewing)?S.viewing:S.me.id;
    await loadEntries();
    route();
  }catch(e){
    app.className='app bare';
    app.innerHTML=`<section class="hello"><div class="hello-h"><span class="plate" aria-hidden="true"></span><h1>Nedá sa načítať</h1><p>${esc(errText(e))}</p></div><button class="btn primary" data-action="retry">Skúsiť znova</button><button class="link" data-action="logout">Odhlásiť sa</button></section>`;
  }finally{booting=false}
}
sb.auth.onAuthStateChange((ev)=>{if(ev==='SIGNED_IN'||ev==='SIGNED_OUT'){if((ev==='SIGNED_IN')!==!!S.me)setTimeout(boot,0)}});

/* ---------- prihlásenie ---------- */
let loginMode='login';
function chrome(on){$('#dock').hidden=!on||S.view!=='den';$('#tabs').hidden=!on;app.className=on?'app':'app bare'}
function renderLogin(msg){
  chrome(false);
  app.innerHTML=`<section class="hello">
    <div class="hello-h"><span class="plate" aria-hidden="true"></span><h1>Tanier pre dvoch</h1><p>Jedálniček pre Roba a Poli. Fotky jedál, čiarové kódy a kalórie na jednom mieste.</p></div>
    <div class="seg" role="group" aria-label="Prihlásenie">
      <button data-action="mode" data-m="login" aria-pressed="${loginMode==='login'}">Prihlásiť</button>
      <button data-action="mode" data-m="signup" aria-pressed="${loginMode==='signup'}">Nový účet</button>
    </div>
    <form id="loginForm" class="card" style="margin:0" novalidate>
      <div class="field"><label for="l-email">E-mail</label><input id="l-email" type="email" autocomplete="email" inputmode="email" required></div>
      <div class="field"><label for="l-pass">Heslo</label><input id="l-pass" type="password" autocomplete="${loginMode==='login'?'current-password':'new-password'}" minlength="6" required></div>
      <p class="status ${msg&&msg.ok?'ok':'bad'}" id="l-status" aria-live="polite">${esc(msg?msg.t:'')}</p>
      <button class="btn primary" type="submit">${loginMode==='login'?'Prihlásiť sa':'Vytvoriť účet'}</button>
    </form>
    ${loginMode==='signup'?'<p class="muted" style="text-align:center;margin:0;font-size:14px">Po vytvorení účtu si vyberieš svoj profil a zadáš kód domácnosti od Roba.</p>':''}
  </section>`;
  $('#loginForm').addEventListener('submit',async ev=>{
    ev.preventDefault();
    const email=$('#l-email').value.trim(),password=$('#l-pass').value,st=$('#l-status'),b=ev.target.querySelector('button[type=submit]');
    if(!email||!password){st.className='status bad';st.textContent='Vyplň e-mail aj heslo.';return}
    b.disabled=true;st.className='status';st.textContent=loginMode==='login'?'Prihlasujem…':'Vytváram účet…';
    try{
      if(loginMode==='login'){
        const {error}=await sb.auth.signInWithPassword({email,password});if(error)throw error;
      }else{
        const {data,error}=await sb.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});
        if(error)throw error;
        if(!data.session){loginMode='login';renderLogin({ok:true,t:'Účet je vytvorený. Prišiel ti e-mail, klikni v ňom na odkaz a potom sa tu prihlás.'});return}
      }
      await boot();
    }catch(e){st.className='status bad';st.textContent=errText(e);b.disabled=false}
  });
}

/* ---------- pripojenie profilu ---------- */
function renderLink(profs){
  chrome(false);
  app.innerHTML=`<section class="hello">
    <div class="hello-h"><span class="plate" aria-hidden="true"></span><h1>Kto si?</h1><p>Vyber svoj profil. Stačí to spraviť raz, potom ťa appka pozná.</p></div>
    <div class="who">${profs.map(p=>`<button class="pick" data-action="pick-profile" data-id="${p.id}" data-name="${esc(p.meno)}" ${p.obsadeny?'disabled':''}><span class="ava ${esc(p.farba)}" aria-hidden="true">${esc((p.meno||'?')[0])}</span><b>${esc(p.meno)}</b><small>${p.obsadeny?'už má účet':'voľný'}</small></button>`).join('')}</div>
    <p class="muted" style="text-align:center;margin:0;font-size:13px">Prihlásená: ${esc(S.session.user.email)}</p>
    <button class="link" data-action="logout">Odhlásiť sa</button>
  </section>`;
}
function openJoin(id,name){
  openSheet(`${head('Si '+esc(name)+'?')}
  <p class="muted" style="margin:0">Zadaj kód domácnosti. Dostaneš ho od Roba.</p>
  <form id="joinForm" style="display:grid;gap:12px" novalidate>
    <div class="field"><label for="j-code">Kód</label><input id="j-code" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="tanier-…" class="num"></div>
    <p class="status bad" id="j-status" aria-live="polite"></p>
    <button class="btn primary" type="submit">Pokračovať</button>
  </form>`);
  $('#joinForm').addEventListener('submit',async ev=>{
    ev.preventDefault();
    const st=$('#j-status'),b=ev.target.querySelector('button');b.disabled=true;st.textContent='';
    const {error}=await sb.rpc('jed_pripoj',{p_osoba:id,p_kod:$('#j-code').value});
    if(error){st.textContent=errText(error);b.disabled=false;return}
    closeSheet();toast('Vitaj, '+name);boot();
  });
}

/* ---------- hlavné obrazovky ---------- */
function dateLabel(){
  const d=new Date(S.date+'T12:00:00'),t=new Date(),y=new Date();y.setDate(y.getDate()-1);
  const h=S.date===iso(t)?'Dnes':S.date===iso(y)?'Včera':DAYS[d.getDay()];
  return `${h}<small>${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}</small>`;
}
function thumb(e){
  if(e.foto_path){const u=S.urls[e.foto_path];return u?`<button class="thumb" data-action="view-photo" data-src="${esc(u)}" aria-label="Zväčšiť fotku"><img src="${esc(u)}" alt="" loading="lazy"></button>`:`<div class="thumb cam" aria-hidden="true">…</div>`}
  if(e.druh==='kod')return `<div class="thumb code" aria-hidden="true"></div>`;
  if(e.druh==='foto')return `<div class="thumb cam" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg></div>`;
  return `<div class="thumb" aria-hidden="true">${esc((e.nazov||'?')[0])}</div>`;
}
function meta(e){
  if(e.druh==='foto')return +e.kcal?'foto · odhad':'foto · bez kcal';
  const g=e.gramy?fmt(e.gramy)+' g':'';
  const who=e.created_by&&e.created_by!==e.osoba_id&&person(e.created_by)?` · pridal(a) ${esc(person(e.created_by).meno)}`:'';
  return g+(e.druh==='kod'?' · z obalu':'')+who;
}
function renderDay(){
  const v=person(S.viewing),mine=S.viewing===S.me.id,o=otherOf(S.viewing);
  const t=totals(v.id),ot=totals(o.id),en=t.p*4+t.c*4+t.f*9||1;
  const list=S.entries.filter(e=>e.osoba_id===v.id);
  app.innerHTML=`<header class="top">
    <div class="brand"><button class="me" data-action="go-account" aria-label="Účet"><span class="ava ${esc(v.farba)}" aria-hidden="true">${esc(v.meno[0]||'?')}</span><span style="min-width:0"><b>${esc(v.meno)}</b><small>${mine?'tvoj deň':'pozeráš deň'}</small></span></button>
    <div class="datenav"><button data-action="prev" aria-label="Predchádzajúci deň">‹</button><div class="d">${dateLabel()}</div><button data-action="next" aria-label="Ďalší deň">›</button></div></div>
    ${mine?'':`<button class="backme" data-action="view" data-id="${S.me.id}">← Späť na môj deň</button>`}
  </header>
  <section class="sum" aria-label="Súhrn dňa">
    <div class="big"><b>${fmt(t.kcal)}</b><span>kcal · ${t.n} ${plural(t.n)}</span></div>
    <div class="split" aria-hidden="true"><i class="c-p" style="width:${t.p*4/en*100}%"></i><i class="c-c" style="width:${t.c*4/en*100}%"></i><i class="c-f" style="width:${t.f*9/en*100}%"></i></div>
    <div class="macros">
      <div class="macro"><small><i class="c-p"></i>Bielkoviny</small><b>${fmt1(t.p)} g</b></div>
      <div class="macro"><small><i class="c-c"></i>Sacharidy</small><b>${fmt1(t.c)} g</b></div>
      <div class="macro"><small><i class="c-f"></i>Tuky</small><b>${fmt1(t.f)} g</b></div>
    </div>
  </section>
  ${MEALS.map(([id,name])=>{
    const items=list.filter(e=>e.jedlo===id),k=items.reduce((a,e)=>a+(+e.kcal),0);
    return `<section class="meal"><div class="meal-h"><h2>${name}</h2><span>${items.length?fmt(k)+' kcal':''}</span></div>
    ${items.length?items.map(e=>`<div class="entry">${thumb(e)}<div class="e-txt"><b>${esc(e.nazov)}</b><small>${meta(e)}</small></div>
      <div class="e-k">${+e.kcal?fmt(e.kcal):'–'}<small>kcal</small></div>
      <button class="x" data-action="del" data-id="${e.id}" aria-label="Odstrániť ${esc(e.nazov)}">×</button></div>`).join('')
    :`<p class="empty">Zatiaľ nič.</p>`}</section>`}).join('')}
  <button class="other" data-action="view" data-id="${o.id}"><i class="dot ${esc(o.farba)}"></i><span><b>${esc(o.meno)}</b> v tento deň: <span class="num">${fmt(ot.kcal)}</span> kcal, ${ot.n} ${plural(ot.n)}. Pozrieť →</span></button>`;
}
function foodRow(f){
  return `<button class="food" data-action="pick" data-id="${f.id}"><b>${esc(f.nazov)}<span class="badge b-${esc(f.zdroj)}">${SRC[f.zdroj]||''}</span></b>
    <span class="kc">${fmt(f.kcal_100)}<br><span class="muted" style="font-size:11px">kcal/100 g</span></span>
    <small>${f.porcia_nazov&&f.porcia_g?`${esc(f.porcia_nazov)} = ${fmt(f.porcia_g)} g`:''}${f.ean?` · <span class="num">${esc(f.ean)}</span>`:''}</small></button>`;
}
function filterFoods(q){
  q=norm(q.trim());const order={vlastne:0,openfoodfacts:1,zakladne:2};
  return S.foods.filter(f=>!q||norm(f.nazov).includes(q)||(f.ean||'').includes(q)).sort((a,b)=>order[a.zdroj]-order[b.zdroj]||a.nazov.localeCompare(b.nazov,'sk'));
}
function bindSearch(inp,box){inp.addEventListener('input',()=>{box.innerHTML=filterFoods(inp.value).map(foodRow).join('')||'<p class="empty">Nič sa nenašlo. Pridaj ju ako vlastnú potravinu.</p>'})}
function searchBox(id,ph){return `<div class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg><input id="${id}" type="search" placeholder="${ph}" aria-label="Hľadať potravinu" autocomplete="off"></div>`}
function renderFoods(){
  app.innerHTML=`<div class="page"><h2 class="ph">Potraviny</h2>
  <p class="muted">Spoločný zoznam pre oboch. Produkty z čiarových kódov sa sem uložia samé. Ťuknutím pridáš do dňa.</p>
  ${searchBox('fsearch','Hľadať, napr. ryža alebo EAN')}
  <div style="margin-top:10px;display:flex;justify-content:flex-end"><button class="btn" data-action="new-food">+ Vlastná potravina</button></div>
  <div id="flist">${filterFoods('').map(foodRow).join('')}</div></div>`;
  bindSearch($('#fsearch'),$('#flist'));
}
function renderAccount(){
  const o=otherOf(S.me.id);
  app.innerHTML=`<div class="page"><h2 class="ph">Účet</h2>
  <div class="card">
    <div class="field"><label for="my-name">Tvoje meno v appke</label><div class="join"><input id="my-name" value="${esc(S.me.meno)}" maxlength="20"><button class="btn" data-action="save-name">Uložiť</button></div></div>
    <p class="muted" style="margin:0;font-size:13.5px">Prihlásený e-mail: ${esc(S.session.user.email)}</p>
  </div>
  <div class="card"><span class="lbl">Druhý človek</span>
    <p style="margin:0">${o.user_id?`<b>${esc(o.meno)}</b> už má účet a vidíte svoje zápisy navzájom.`:`<b>${esc(o.meno)}</b> sa ešte nepripojil(a). Pošli ${esc(o.meno)} odkaz na túto stránku a kód domácnosti. Vytvorí si účet, vyberie profil ${esc(o.meno)} a zadá kód.`}</p>
    <div class="join"><input id="share-url" readonly value="${esc(location.origin+location.pathname)}" class="num" aria-label="Odkaz na appku"><button class="btn" data-action="copy-url">Kopírovať</button></div>
  </div>
  <div class="card"><span class="lbl">Na plochu mobilu</span>
    <p style="margin:0;font-size:14px">iPhone: v Safari ťukni na Zdieľať a potom Pridať na plochu. Android: v Chrome menu ⋮ a Pridať na plochu.</p>
  </div>
  <button class="btn wide" data-action="logout" style="margin-top:16px">Odhlásiť sa</button>
  </div>`;
}
function render(){
  document.querySelectorAll('.tabs a').forEach(a=>a.setAttribute('aria-current',a.dataset.view===S.view?'page':'false'));
  chrome(true);
  if(S.view==='den')renderDay();else if(S.view==='potraviny')renderFoods();else renderAccount();
}
function route(){
  if(!S.me)return;
  const h=location.hash.slice(1);
  S.view=h==='potraviny'||h==='nastavenie'?h:'den';render();window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);

/* ---------- sheet ---------- */
let back=null;
function openSheet(html,onClose){
  closeSheet();
  back=document.createElement('div');back.className='backdrop';back._onClose=onClose;
  back.innerHTML=`<div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
  back.addEventListener('click',e=>{if(e.target===back)closeSheet()});
  document.body.appendChild(back);document.body.style.overflow='hidden';
}
function closeSheet(){if(back){const f=back._onClose;back.remove();back=null;document.body.style.overflow='';if(f)f()}}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet()});
const head=t=>`<h2>${t}<button type="button" data-action="close" aria-label="Zavrieť">×</button></h2>`;
const mealSelect=(id,sel)=>`<div class="field"><label for="${id}">Jedlo</label><select id="${id}">${MEALS.map(([v,n])=>`<option value="${v}"${v===sel?' selected':''}>${n}</option>`).join('')}</select></div>`;
const bothBox=()=>{const o=otherOf(S.viewing);return `<label class="check"><input type="checkbox" id="f-both"> Aj pre ${esc(o.meno)}</label>`};
const numv=id=>{const v=parseFloat(String($(id)?.value||'').replace(',','.'));return isFinite(v)?v:0};

async function addEntries(make,btn){
  const both=$('#f-both')?.checked;
  const ids=[S.viewing];if(both)ids.push(otherOf(S.viewing).id);
  if(btn){btn.disabled=true;btn.textContent='Ukladám…'}
  const rows=ids.map(pid=>({...make(pid),osoba_id:pid,datum:S.date,created_by:S.me.id}));
  const {error}=await sb.from('jed_zapisy').insert(rows);
  if(error){toast(errText(error));if(btn){btn.disabled=false;btn.textContent='Skúsiť znova'}return false}
  closeSheet();await loadEntries();
  if(S.view!=='den')location.hash='#den';else render();
  toast(both?'Pridané obom':'Pridané');return true;
}
function fromFood(f,g,meal){
  const k=g/100;
  return {jedlo:meal,druh:f.zdroj==='openfoodfacts'?'kod':f.zdroj==='vlastne'?'vlastne':'zakladne',potravina_id:f.id,nazov:f.nazov,gramy:r1(g),
    kcal:Math.round(f.kcal_100*k),bielkoviny:r1(f.bielkoviny_100*k),sacharidy:r1(f.sacharidy_100*k),tuky:r1(f.tuky_100*k)};
}

/* ---------- fotka jedla ---------- */
let photoBlob=null,photoPreview=null;
function shrink(file,max,q){return new Promise((res,rej)=>{const url=URL.createObjectURL(file),img=new Image();img.onerror=()=>{URL.revokeObjectURL(url);rej(new Error('Fotku sa nepodarilo načítať.'))};img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);c.toBlob(b=>b?res(b):rej(new Error('Fotku sa nepodarilo spracovať.')),'image/jpeg',q)};img.src=url})}
function openPhoto(){
  photoBlob=null;if(photoPreview){URL.revokeObjectURL(photoPreview);photoPreview=null}
  openSheet(`${head('Odfotiť jedlo')}
  <label class="drop" for="photoInput" id="photoDrop"><div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg><div style="margin-top:6px;font-weight:600;color:var(--ink)">Ťukni a odfoť tanier</div><div style="font-size:13px">alebo vyber fotku z galérie</div></div></label>
  <div class="field"><label for="f-name">Čo to je</label><input id="f-name" placeholder="napr. Kuracie rizoto" autocomplete="off"></div>
  <div class="row2">${mealSelect('f-meal',mealByTime())}<div class="field"><label for="f-kcal">Odhad kcal</label><input id="f-kcal" inputmode="numeric" placeholder="nepovinné"></div></div>
  ${bothBox()}
  <button class="btn primary" data-action="save-photo">Uložiť do dňa</button>`);
}
$('#photoInput').addEventListener('change',async e=>{
  const file=e.target.files[0];e.target.value='';if(!file||!back)return;
  try{photoBlob=await shrink(file,1280,.8);if(photoPreview)URL.revokeObjectURL(photoPreview);photoPreview=URL.createObjectURL(photoBlob);const d=$('#photoDrop');if(d)d.innerHTML=`<img src="${photoPreview}" alt="Odfotené jedlo">`}
  catch(err){toast(errText(err))}
});
async function savePhoto(btn){
  const name=$('#f-name').value.trim();
  if(!name&&!photoBlob){$('#f-name').focus();toast('Odfoť jedlo alebo napíš, čo to je');return}
  const kcal=Math.round(numv('#f-kcal')),meal=$('#f-meal').value;
  let path=null;
  if(photoBlob){
    btn.disabled=true;btn.textContent='Nahrávam fotku…';
    path=`${S.viewing}/${S.date}/${uuid()}.jpg`;
    const {error}=await sb.storage.from(BUCKET).upload(path,photoBlob,{contentType:'image/jpeg',upsert:false});
    if(error){toast(errText(error));btn.disabled=false;btn.textContent='Skúsiť znova';return}
    if(photoPreview)S.urls[path]=photoPreview;
  }
  await addEntries(()=>({jedlo:meal,druh:'foto',nazov:name||'Jedlo z fotky',kcal,foto_path:path}),btn);
}

/* ---------- čiarový kód ---------- */
let scanStop=null;
function stopScan(){if(scanStop){try{scanStop()}catch(e){}scanStop=null}}
function openCode(){
  openSheet(`${head('Čiarový kód')}
  <div class="scan" id="scanBox"><video id="scanVideo" playsinline muted autoplay></video><div class="aim" aria-hidden="true"></div><div class="msg" id="scanMsg">Zapínam kameru…</div></div>
  <p class="status" id="code-status" aria-live="polite"></p>
  <div class="field"><label for="f-ean">Alebo opíš čísla pod kódom</label><div class="join"><input id="f-ean" inputmode="numeric" placeholder="8 alebo 13 číslic" class="num" autocomplete="off"><button class="btn" data-action="lookup">Hľadať</button></div></div>
  <button class="link" data-action="code-photo" style="justify-self:start;padding-left:0">Kamera nejde? Odfoť kód ako fotku</button>
  <div id="code-result"></div>`,stopScan);
  startScan();
}
async function startScan(){
  const video=$('#scanVideo'),msg=$('#scanMsg');
  if(!video)return;
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){msg.textContent='Kamera tu nefunguje. Opíš čísla.';return}
  let done=false;
  const found=code=>{if(done)return;done=true;stopScan();if(navigator.vibrate)navigator.vibrate(60);$('#f-ean').value=code;const b=$('#scanBox');if(b)b.hidden=true;lookup(code)};
  try{
    let formats=[];
    if('BarcodeDetector' in window){try{formats=await BarcodeDetector.getSupportedFormats()}catch(e){}}
    if(formats.includes('ean_13')){
      const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}},audio:false});
      if(!back){stream.getTracks().forEach(t=>t.stop());return}
      video.srcObject=stream;await video.play().catch(()=>{});
      const det=new BarcodeDetector({formats:['ean_13','ean_8','upc_a','upc_e'].filter(f=>formats.includes(f))});
      let timer=null;
      scanStop=()=>{clearTimeout(timer);stream.getTracks().forEach(t=>t.stop());video.srcObject=null};
      msg.textContent='Namier na čiarový kód';
      const tick=async()=>{if(done||!scanStop)return;try{const r=await det.detect(video);if(r.length){found(r[0].rawValue);return}}catch(e){}timer=setTimeout(tick,180)};
      tick();
    }else if(window.ZXing&&ZXing.BrowserMultiFormatReader){
      const hints=new Map();
      hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS,[ZXing.BarcodeFormat.EAN_13,ZXing.BarcodeFormat.EAN_8,ZXing.BarcodeFormat.UPC_A,ZXing.BarcodeFormat.UPC_E]);
      const reader=new ZXing.BrowserMultiFormatReader(hints,250);
      scanStop=()=>{reader.reset()};
      await reader.decodeFromConstraints({video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}},audio:false},video,(res)=>{if(res)found(res.getText())});
      if(!back){reader.reset();return}
      msg.textContent='Namier na čiarový kód';
    }else{msg.textContent='Skener sa nenačítal. Opíš čísla.'}
  }catch(e){
    stopScan();
    msg.textContent=/NotAllowed|Permission/i.test(e&&e.name+e.message)?'Appka nemá povolenú kameru. Povoľ ju v nastaveniach prehliadača.':'Kameru sa nepodarilo zapnúť. Opíš čísla.';
  }
}
$('#codeInput').addEventListener('change',async e=>{
  const file=e.target.files[0];e.target.value='';if(!file||!back)return;
  const st=$('#code-status');st.className='status';st.textContent='Čítam kód…';
  try{
    const blob=await shrink(file,1600,.92),url=URL.createObjectURL(blob);let code=null;
    if('BarcodeDetector' in window){try{const img=new Image();img.src=url;await img.decode();const r=await new BarcodeDetector({formats:['ean_13','ean_8','upc_a','upc_e']}).detect(img);if(r.length)code=r[0].rawValue}catch(e){}}
    if(!code&&window.ZXing){try{const r=await new ZXing.BrowserMultiFormatReader().decodeFromImageUrl(url);code=r.getText()}catch(e){}}
    URL.revokeObjectURL(url);
    if(!back)return;
    if(code){st.className='status ok';st.textContent='Prečítané: '+code;$('#f-ean').value=code;lookup(code)}
    else{st.className='status bad';st.textContent='Kód sa nedal prečítať. Odfoť ho zblízka a rovno, alebo opíš čísla.'}
  }catch(err){st.className='status bad';st.textContent=errText(err)}
});
async function offLookup(code){
  const r=await fetch(`https://world.openfoodfacts.org/api/v2/product/${code}.json?fields=product_name,product_name_sk,product_name_cs,generic_name,brands,nutriments,serving_quantity,serving_size,quantity`);
  if(!r.ok)return null;
  const j=await r.json();if(j.status!==1||!j.product)return null;
  const p=j.product,n=p.nutriments||{};
  const num=v=>{const x=parseFloat(v);return isFinite(x)?x:null};
  let kcal=num(n['energy-kcal_100g']);if(kcal==null&&num(n['energy_100g'])!=null)kcal=Math.round(num(n['energy_100g'])/4.184);
  const name=[p.product_name_sk||p.product_name_cs||p.product_name||p.generic_name,p.brands&&String(p.brands).split(',')[0]].filter(Boolean).join(' · ');
  const sq=num(p.serving_quantity);
  return {nazov:name||'',kcal_100:kcal,bielkoviny_100:num(n.proteins_100g)??0,sacharidy_100:num(n.carbohydrates_100g)??0,tuky_100:num(n.fat_100g)??0,porcia_g:sq&&sq>0?sq:null,porcia_nazov:sq&&sq>0?'porcia':null};
}
async function lookup(code){
  code=String(code||'').replace(/\D/g,'');
  const st=$('#code-status');if(!st)return;
  if(code.length<8){st.className='status bad';st.textContent='Kód má mať aspoň 8 číslic.';return}
  const local=S.foods.find(x=>x.ean===code);
  if(local){openPortion(local);return}
  st.className='status';st.textContent='Hľadám produkt '+code+'…';
  let off=null;try{off=await offLookup(code)}catch(e){}
  if(!back)return;
  if(off&&off.nazov&&off.kcal_100!=null){
    const {data,error}=await sb.from('jed_potraviny').upsert({...off,ean:code,zdroj:'openfoodfacts',created_by:S.me.id},{onConflict:'ean'}).select().single();
    if(error){st.className='status bad';st.textContent=errText(error);return}
    S.foods.push(data);openPortion(data);toast('Nájdené v Open Food Facts');return;
  }
  st.className='status';st.textContent='';
  $('#code-result').innerHTML=`<div class="card"><b>${off&&off.nazov?esc(off.nazov):'Tento produkt ešte nepoznáme'}</b>
  <p class="muted" style="margin:0;font-size:13.5px">${off&&off.nazov?'Produkt je v databáze, ale chýbajú mu kalórie.':'Nie je ani v Open Food Facts.'} Opíš hodnoty z obalu. Nabudúce ho už appka spozná.</p>
  ${foodForm(code,off&&off.nazov)}<button class="btn primary" data-action="save-food" data-then="portion">Uložiť a pridať</button></div>`;
}
function foodForm(ean,name){
  return `<div class="field"><label for="n-name">Názov</label><input id="n-name" placeholder="napr. Skyr natural" value="${esc(name||'')}" autocomplete="off"></div>
  ${ean==null?'':`<div class="field"><label for="n-ean">EAN</label><input id="n-ean" class="num" inputmode="numeric" value="${esc(ean)}" placeholder="nepovinné"></div>`}
  <span class="lbl">Na 100 g (z obalu)</span>
  <div class="row4"><div class="field"><label for="n-kcal">kcal</label><input id="n-kcal" inputmode="decimal"></div><div class="field"><label for="n-p">Bielk.</label><input id="n-p" inputmode="decimal"></div><div class="field"><label for="n-c">Sach.</label><input id="n-c" inputmode="decimal"></div><div class="field"><label for="n-f">Tuky</label><input id="n-f" inputmode="decimal"></div></div>
  <div class="row2"><div class="field"><label for="n-por">Porcia v g</label><input id="n-por" inputmode="decimal" placeholder="napr. 150"></div><div class="field"><label for="n-plab">Názov porcie</label><input id="n-plab" placeholder="napr. kelímok"></div></div>`;
}
async function saveFood(btn){
  const nazov=$('#n-name').value.trim(),kcal=numv('#n-kcal');
  if(!nazov){$('#n-name').focus();return}
  if(!(kcal>0)){$('#n-kcal').focus();toast('Doplň kcal na 100 g');return}
  const ean=($('#n-ean')?.value||'').replace(/\D/g,'')||null,por=numv('#n-por');
  const row={nazov,ean,kcal_100:kcal,bielkoviny_100:numv('#n-p'),sacharidy_100:numv('#n-c'),tuky_100:numv('#n-f'),porcia_g:por||null,porcia_nazov:$('#n-plab').value.trim()||(por?'porcia':null),zdroj:'vlastne',created_by:S.me.id};
  btn.disabled=true;
  const q=ean?sb.from('jed_potraviny').upsert(row,{onConflict:'ean'}):sb.from('jed_potraviny').insert(row);
  const {data,error}=await q.select().single();
  if(error){toast(errText(error));btn.disabled=false;return}
  S.foods=S.foods.filter(f=>f.id!==data.id);S.foods.push(data);
  if(btn.dataset.then==='portion')openPortion(data);else{closeSheet();render();toast('Uložené')}
}

/* ---------- základné jedlá a porcia ---------- */
function openBasic(){
  openSheet(`${head('Potraviny')}${searchBox('bsearch','Hľadať, napr. vajce')}<div class="foodlist" id="blist">${filterFoods('').map(foodRow).join('')}</div>
  <button class="btn" data-action="new-food">+ Vlastná potravina</button>`);
  bindSearch($('#bsearch'),$('#blist'));
}
let cur=null;
function openPortion(f){
  cur=f;const g=f.porcia_g||100;
  const chips=[[f.porcia_nazov,f.porcia_g],['100 g',100],[f.porcia_nazov?'2× '+f.porcia_nazov:null,f.porcia_g*2]].filter(([l,v])=>l&&v);
  openSheet(`${head(esc(f.nazov))}
  <p class="muted" style="margin:0;font-size:13.5px"><span class="badge b-${esc(f.zdroj)}" style="margin:0 6px 0 0">${SRC[f.zdroj]||''}</span>na 100 g: <span class="num">${fmt(f.kcal_100)} kcal · B ${fmt1(f.bielkoviny_100)} · S ${fmt1(f.sacharidy_100)} · T ${fmt1(f.tuky_100)}</span></p>
  <div class="field"><label for="p-grams">Koľko gramov</label><input id="p-grams" class="num" inputmode="decimal" value="${+g}"></div>
  <div class="chips">${chips.map(([l,v])=>`<button class="chip" data-action="grams" data-g="${+v}">${esc(l)}${String(l).endsWith(' g')?'':` · ${fmt(v)} g`}</button>`).join('')}</div>
  <div class="calc" id="p-calc"></div>
  ${mealSelect('p-meal',mealByTime())}
  ${bothBox()}
  <button class="btn primary" data-action="save-portion">Pridať do dňa</button>`);
  $('#p-grams').addEventListener('input',calc);calc();
}
function calc(){
  const g=numv('#p-grams'),k=g/100,el=$('#p-calc');if(!el)return;
  el.innerHTML=`<b class="num">${fmt(cur.kcal_100*k)}</b><span style="grid-column:2">kcal</span><span style="grid-column:2">B ${fmt1(cur.bielkoviny_100*k)} g · S ${fmt1(cur.sacharidy_100*k)} g · T ${fmt1(cur.tuky_100*k)} g</span>`;
  document.querySelectorAll('[data-action=grams]').forEach(c=>c.classList.toggle('on',+c.dataset.g===g));
  const b=document.querySelector('[data-action=save-portion]');if(b)b.disabled=!(g>0);
}

/* ---------- mazanie ---------- */
async function delEntry(id){
  const e=S.entries.find(x=>x.id===id);if(!e)return;
  const {error}=await sb.from('jed_zapisy').delete().eq('id',id);
  if(error){toast(errText(error));return}
  if(e.foto_path){
    const {count}=await sb.from('jed_zapisy').select('id',{count:'exact',head:true}).eq('foto_path',e.foto_path);
    if(!count)await sb.storage.from(BUCKET).remove([e.foto_path]);
  }
  S.entries=S.entries.filter(x=>x.id!==id);render();toast('Odstránené');
}

/* ---------- akcie ---------- */
document.addEventListener('click',async ev=>{
  const b=ev.target.closest('[data-action]');if(!b)return;
  const a=b.dataset.action;
  if(a==='close')closeSheet();
  else if(a==='retry')boot();
  else if(a==='logout'){closeSheet();await sb.auth.signOut();S.me=null;S.people=[];S.entries=[];S.urls={};location.hash='';renderLogin()}
  else if(a==='mode'){loginMode=b.dataset.m;renderLogin()}
  else if(a==='pick-profile')openJoin(b.dataset.id,b.dataset.name);
  else if(a==='view'){S.viewing=b.dataset.id;render();window.scrollTo({top:0})}
  else if(a==='go-account')location.hash='#nastavenie';
  else if(a==='prev'||a==='next'){const d=new Date(S.date+'T12:00:00');d.setDate(d.getDate()+(a==='next'?1:-1));S.date=iso(d);S.entries=[];render();try{await loadEntries();render()}catch(e){toast(errText(e))}}
  else if(a==='del')delEntry(b.dataset.id);
  else if(a==='open-photo')openPhoto();
  else if(a==='open-code')openCode();
  else if(a==='open-basic')openBasic();
  else if(a==='code-photo'){stopScan();const sb2=$('#scanBox');if(sb2)sb2.hidden=true;$('#codeInput').click()}
  else if(a==='pick'){const f=S.foods.find(x=>x.id===b.dataset.id);if(f)openPortion(f)}
  else if(a==='grams'){$('#p-grams').value=b.dataset.g;calc()}
  else if(a==='lookup')lookup($('#f-ean').value);
  else if(a==='save-portion'){const g=numv('#p-grams');if(!(g>0))return;const meal=$('#p-meal').value,f=cur;addEntries(()=>fromFood(f,g,meal),b)}
  else if(a==='save-photo')savePhoto(b);
  else if(a==='new-food')openSheet(`${head('Vlastná potravina')}${foodForm('')}<button class="btn primary" data-action="save-food">Uložiť do zoznamu</button>`);
  else if(a==='save-food')saveFood(b);
  else if(a==='save-name'){const v=$('#my-name').value.trim();if(!v)return;const {error}=await sb.from('jed_osoby').update({meno:v}).eq('id',S.me.id);if(error){toast(errText(error));return}S.me.meno=v;toast('Uložené')}
  else if(a==='copy-url'){const inp=$('#share-url');try{await navigator.clipboard.writeText(inp.value);toast('Skopírované')}catch(e){inp.select();toast('Označené, skopíruj')}}
  else if(a==='view-photo'){const v=document.createElement('div');v.className='viewer';v.innerHTML=`<img src="${esc(b.dataset.src)}" alt="Fotka jedla">`;v.addEventListener('click',()=>v.remove());document.body.appendChild(v)}
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='f-ean'){e.preventDefault();lookup(e.target.value)}});
document.addEventListener('visibilitychange',async()=>{
  if(document.visibilityState!=='visible'||!S.me||back)return;
  try{await loadEntries();if(S.view==='den')render()}catch(e){}
});

boot();
})();
