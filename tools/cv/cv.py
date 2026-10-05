# Builds the CV in two languages as A4 HTML; render.js turns them into the PDFs in the repo root.
# Run from the repo root:  python3 tools/cv/cv.py && python3 -m http.server 8765 & node tools/cv/render.js
# Fonts go into tools/cv/f/ (see render.js), photos are desk.jpg, portrait.jpg and sign.png from the 2023 CV.
import os
HERE = os.path.dirname(os.path.abspath(__file__))
T = {
'en': dict(
 lang='en', roles='AI helper · Event producer · CG operator · Graphic designer · Brand builder · DJ · Jack of all trades',
 profile='Versatile creative with a background in marketing, branding, graphic design, live broadcast graphics and event production. Today I drive the Red Bull event car, run my own events and build AI tools that save me and other people time.',
 profile2='I learn fast, I like dynamic environments and I keep my promises. Sometimes I say no, but that’s because I have another solution to think through.',
 exp_h='Expertise', exp=['<b>AI tools and automation</b> built on real work and real data','<b>event production</b>, from idea to stage','<b>live graphics (CG)</b> and data for broadcasts','<b>creative marketing</b> that people actually notice','<b>brand identities</b> and <b>graphic design</b> for digital &amp; print','reliable help with <b>video production and livestreams</b>'],
 work_h='Work experience',
 jobs=[
  ('Red Bull','Event car driver · Event producer','05/2024 – present',['Driving the event car (Zubor, Sugga), producing smaller events, production assistant on big ones.','Freak x Yzomandias: pop-up production with the event car.']),
  ('Own projects','Founder · Organiser · Builder','2024 – present',['<b>GOSko</b>: co-organiser and host of the Game of Skate series in Bratislava and Žilina (2026), brand and partners.','<b>Drop Ups</b>: my own pop-up events on mobile stages, e.g. KALAMITA, a winter rave under a bridge in Bratislava.','<b>Event Hub</b> (live) and <b>Questwave</b> (beta): apps I build with AI.','<b>AI help</b> for small businesses, students and anyone lost in AI.']),
  ('Futbalic','Logo · Marketing · Match production','2024 – 2025',['Visual identity, marketing and production of matches.']),
  ('RECIN – Broadcast Your Event','Camera operator · CG operator · Graphic designer','01/2023 – 09/2023',['Main camera at several Kaufland Children’s Festival events, ski races and smaller events; CG operation, graphic design and livestream production.']),
  ('REPUBLEAGUE','Co-founder · Brand builder · Marketing specialist · Content production','09/2020 – 04/2023',['Co-founded REPUBLEAGUE and grew it from a fun Instagram into an esports brand and tournament: marketing, social media, livestreaming, content, online events and video editing.','Built a complete tournament system in a spreadsheet, wired to the live graphics.']),
  ('Motor-Car Group','Online marketing specialist · Graphic designer · Photography','2019 – 2020',['Online marketing, graphics and DTP for Mercedes-Benz, KIA, Fiat and Jeep.']),
  ('142 DESIGN','Founder · Graphic designer','2011 – present',['Graphic design, logos and print for clients such as Summit Motors Slovakia, T.O.P. AUTO Bratislava, Hotel BRATISLAVA, Holiday Inn Bratislava, Slovkarpatia Group, Winfinity Esport Team and Sound Healing Slovakia. Today 142 design s.r.o. also invoices my AI services.']),
 ],
 esp_h='Esport production projects', esp=[('ESL IEM Cologne 2022 (B stream)','CG operator'),('REPUBLEAGUE Season 1, 2, 3','CG designer, CG operator, graphic designer'),('Champion of Champions Tour 2023','CG operator'),('Drone Champions League 2022','CG operator, data operator')],
 oth_h='Other production projects', oth=[('REVERS PRODUCTION','production assistant'),('WPT Prime Liechtenstein 2023','CG designer, CG operator, data operator'),('EPT Cyprus 2023','CG and camera'),('Futbalic 2024 – 2025','match production')],
 edu_h='Education', edu=[('Pan-European University of Bratislava','Faculty of Mass Media, Bachelor’s degree','2013 – 2017'),('Gymnasium of Ladislav Novomeský','Bratislava','')],
 sk_h='Skillset', skills=[
  ('Graphic design','since 2011','Adobe Photoshop, Illustrator and Premiere Pro. Graphics and design for all kinds of media.'),
  ('Marketing','since 2019','Strategy and brand building, mostly esports and gaming, but also car dealerships, hotels and restaurants.'),
  ('AI tools','since 2022','Claude Code, Lovable, Grok, ChatGPT, Midjourney. I build working apps with AI, like Event Hub and Questwave.'),
  ('Event production','since 2024','Concept, tech, logistics and stage building, from pop-ups to big brand events.'),
  ('CG design &amp; operation','2020 – 2023','Live graphics in broadcasts and events with CharacterWorks, NewBlue and GT Title Designer, driven by live data.'),
  ('Live-stream production','since 2020','vMix and OBS Studio, camera work and editing.'),
  ('Project management','','Overseeing tasks and timelines of a production team so projects get done.'),
  ('Office software','','Google Docs and Microsoft Office for documentation, communication and data for CG.'),
  ('DJing and hosting','now and then','Drum &amp; bass, jungle, hip hop, rap, techno. Hosting events like GOSko.'),
 ],
 lang_h='Languages', langs=[('English','B2'),('German','learning'),('Slovak','native')],
 more_h='Also', more=['Driving licence B','Happy to travel','Bratislava'],
 field_h='From the field', field=[('sugga-roof','Red Bull event car'),('dcl-control','DCL control room'),('gosko-mic','Hosting GOSko')],
 closing='My journey has been marked by continuous learning and a relentless pursuit of excellence in every project I take on. I thrive in dynamic environments, love working with like-minded people and I’m driven by bringing creative ideas to life. I’m looking for people and teams to work with and to show what AI can do today. Let’s connect.',
 date='5 October 2026', more_on='More, with photos and videos:',
),
'sk': dict(
 lang='sk', roles='AI pomocník · Event producent · CG operátor · Grafický dizajnér · Brand builder · DJ · Všetko v jednom',
 profile='Všestranný kreatívec so skúsenosťami z marketingu, brandingu, grafického dizajnu, live grafiky do prenosov a event produkcie. Dnes jazdím s Red Bull event autom, robím vlastné eventy a s AI staviam nástroje, ktoré šetria čas mne aj iným.',
 profile2='Rýchlo sa učím, mám rád dynamické prostredie a dodržím, čo sľúbim. Niekedy poviem nie, ale to preto, že mám v hlave iné riešenie, ktoré si chcem premyslieť.',
 exp_h='V čom som dobrý', exp=['<b>AI nástroje a automatizácia</b> na reálnej práci a reálnych dátach','<b>event produkcia</b>, od nápadu po stage','<b>live grafika (CG)</b> a dáta do prenosov','<b>kreatívny marketing</b>, ktorý si ľudia všimnú','<b>vizuálna identita</b> a <b>grafický dizajn</b> pre web aj tlač','spoľahlivá pomoc pri <b>video produkcii a livestreamoch</b>'],
 work_h='Pracovné skúsenosti',
 jobs=[
  ('Red Bull','Event car driver · Event producent','05/2024 – dnes',['Jazdím s event autom (Zubor, Sugga), produkujem menšie eventy, na veľkých som produkčný asistent.','Freak x Yzomandias: produkcia pop-upu s event autom.']),
  ('Vlastné projekty','Zakladateľ · Organizátor · Staviteľ','2024 – dnes',['<b>GOSko</b>: spoluorganizátor a moderátor série Game of Skate v Bratislave a Žiline (2026), značka a partneri.','<b>Drop Ups</b>: vlastné pop-up eventy na mobilných stageoch, napríklad KALAMITA, zimný rave pod mostom v Bratislave.','<b>Event Hub</b> (live) a <b>Questwave</b> (beta): appky, ktoré staviam s AI.','<b>Pomoc s AI</b> pre malé firmy, študentov a každého, kto sa v AI stratil.']),
  ('Futbalic','Logo · Marketing · Produkcia zápasov','2024 – 2025',['Vizuálna identita, marketing a produkcia zápasov.']),
  ('RECIN – Broadcast Your Event','Kameraman · CG operátor · Grafický dizajnér','01/2023 – 09/2023',['Hlavná kamera na viacerých podujatiach Kaufland Detský festival, lyžiarske preteky a menšie akcie; CG, grafika a produkcia livestreamov.']),
  ('REPUBLEAGUE','Spoluzakladateľ · Brand builder · Marketing · Tvorba obsahu','09/2020 – 04/2023',['Spoluzaložil som REPUBLEAGUE a zo zábavného Instagramu z neho vyrástla esports značka a turnaj: marketing, sociálne siete, livestreamy, obsah, online eventy a strih videa.','Postavil som kompletný turnajový systém v tabuľke, prepojený s live grafikou.']),
  ('Motor-Car Group','Online marketing · Grafický dizajnér · Fotografia','2019 – 2020',['Online marketing, grafika a DTP pre Mercedes-Benz, KIA, Fiat a Jeep.']),
  ('142 DESIGN','Zakladateľ · Grafický dizajnér','2011 – dnes',['Grafika, logá a tlačoviny pre klientov ako Summit Motors Slovakia, T.O.P. AUTO Bratislava, Hotel BRATISLAVA, Holiday Inn Bratislava, Slovkarpatia Group, Winfinity Esport Team a Sound Healing Slovakia. Dnes cez 142 design s.r.o. fakturujem aj služby s AI.']),
 ],
 esp_h='Esportové produkcie', esp=[('ESL IEM Cologne 2022 (B stream)','CG operátor'),('REPUBLEAGUE Season 1, 2, 3','CG dizajnér, CG operátor, grafický dizajnér'),('Champion of Champions Tour 2023','CG operátor'),('Drone Champions League 2022','CG operátor, dátový operátor')],
 oth_h='Ďalšie produkcie', oth=[('REVERS PRODUCTION','produkčný asistent'),('WPT Prime Liechtenstein 2023','CG dizajnér, CG operátor, dátový operátor'),('EPT Cyprus 2023','CG a kamera'),('Futbalic 2024 – 2025','produkcia zápasov')],
 edu_h='Vzdelanie', edu=[('Paneurópska vysoká škola, Bratislava','Fakulta masmédií, bakalársky titul (Bc.)','2013 – 2017'),('Gymnázium Ladislava Novomeského','Bratislava','')],
 sk_h='Zručnosti', skills=[
  ('Grafický dizajn','od 2011','Adobe Photoshop, Illustrator a Premiere Pro. Grafika a dizajn pre všetky médiá.'),
  ('Marketing','od 2019','Stratégia a budovanie značky, hlavne esports a gaming, ale aj autosalóny, hotely a reštaurácie.'),
  ('AI nástroje','od 2022','Claude Code, Lovable, Grok, ChatGPT, Midjourney. S AI staviam fungujúce appky, napríklad Event Hub a Questwave.'),
  ('Event produkcia','od 2024','Koncept, technika, logistika a stavba stage, od pop-upov po veľké eventy značiek.'),
  ('CG dizajn a operátor','2020 – 2023','Live grafika do prenosov a eventov v CharacterWorks, NewBlue a GT Title Designer, poháňaná živými dátami.'),
  ('Produkcia livestreamov','od 2020','vMix a OBS Studio, kamera a strih.'),
  ('Projektový manažment','','Dohľad nad úlohami a termínmi produkčného tímu, aby sa veci dotiahli.'),
  ('Kancelársky softvér','','Google Docs a Microsoft Office na dokumentáciu, komunikáciu a dáta pre CG.'),
  ('DJ a moderovanie','občas','Drum &amp; bass, jungle, hip hop, rap, techno. Moderovanie eventov ako GOSko.'),
 ],
 lang_h='Jazyky', langs=[('Angličtina','B2'),('Nemčina','učím sa'),('Slovenčina','rodná')],
 more_h='Navyše', more=['Vodičák sk. B','Rád cestujem za prácou','Bratislava'],
 field_h='Z terénu', field=[('sugga-roof','Red Bull event auto'),('dcl-control','Réžia DCL'),('gosko-mic','Moderujem GOSko')],
 closing='Moja cesta je o neustálom učení a o tom, aby každý projekt bol dotiahnutý naozaj dobre. Darí sa mi v dynamickom prostredí, rád robím s ľuďmi, ktorí to cítia podobne, a baví ma meniť kreatívne nápady na skutočné veci. Hľadám ľudí a tímy na spoluprácu a chcem im ukazovať, čo dnes dokáže AI. Ozvi sa.',
 date='5. októbra 2026', more_on='Viac aj s fotkami a videami:',
),
}
CSS='''
@page { size: A4; margin: 13mm 0 15mm; }
@page :first { margin-top: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; }
body { font-family: "Space Grotesk", sans-serif; color: #161616; background: #fff; font-size: 8.7pt; line-height: 1.36; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.doc { width: 210mm; }
.hero { position: relative; height: 64mm; background: #111 url(desk.jpg) center 30% / cover; }
.hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(17,18,17,0) 35%, rgba(17,18,17,.92) 100%); }
.hero .name { position: absolute; left: 14mm; bottom: 9mm; z-index: 1; color: #fff; }
.name h1 { margin: 0; font-size: 40pt; line-height: .9; letter-spacing: -.04em; font-weight: 700; }
.name h1 span { color: #1FAF6F; }
.name p { margin: 2.5mm 0 0; font: 500 8pt "JetBrains Mono", monospace; letter-spacing: .04em; color: #D9D9D2; }
.contact { display: flex; flex-wrap: wrap; gap: 1.5mm 5mm; padding: 4mm 14mm; background: #161616; color: #EDEDE8; font: 500 7.6pt "JetBrains Mono", monospace; }
.contact b { color: #1FAF6F; font-weight: 500; }
.cols { display: grid; grid-template-columns: 1fr 60mm; gap: 7mm; padding: 5mm 14mm 0; }
h2 { font: 500 7.4pt "JetBrains Mono", monospace; letter-spacing: .14em; text-transform: uppercase; color: #0F7A4A; margin: 0 0 2.5mm; display: flex; align-items: center; gap: 2mm; }
h2::before { content: ""; width: 2mm; height: 2mm; border-radius: 50%; background: #1FAF6F; }
.block { margin-bottom: 4mm; }
.lead { font-size: 9.8pt; line-height: 1.45; margin: 0 0 2mm; }
.muted { color: #5C5C55; }
ul.exp { margin: 0; padding: 0; list-style: none; }
ul.exp li { padding: .6mm 0 .6mm 4mm; position: relative; }
ul.exp li::before { content: "→"; position: absolute; left: 0; color: #1FAF6F; }
.job { break-inside: avoid; padding: 2.2mm 0; border-top: .3mm solid #DCDCD4; }
.job:first-of-type { border-top: 0; padding-top: 0; }
.job .t { display: flex; justify-content: space-between; gap: 3mm; align-items: baseline; }
.job b.n { font-size: 10.4pt; letter-spacing: -.01em; }
.job .w { font: 500 7.4pt "JetBrains Mono", monospace; color: #0F7A4A; white-space: nowrap; }
.job .r { font-style: italic; color: #5C5C55; margin: .3mm 0 .8mm; }
.job ul { margin: 0; padding-left: 4mm; }
.job li { margin: .4mm 0; }
.side .item { break-inside: avoid; padding: 1.4mm 0; border-top: .3mm solid #DCDCD4; }
.side .item:first-of-type { border-top: 0; padding-top: 0; }
.side .item b { display: block; }
.portrait { width: 100%; height: 100%; min-height: 46mm; object-fit: cover; object-position: center 20%; border-radius: 1mm; display: block; margin-bottom: 5mm; filter: contrast(1.05); }
.pol { background: linear-gradient(160deg,#FBF9F3,#E8E3D6); padding: 1.6mm 1.6mm 0; box-shadow: 0 .6mm 1.5mm rgba(0,0,0,.25); }
.pol img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; filter: grayscale(1) contrast(1.1); }
.pol span { display: block; text-align: center; font: 700 9.5pt Caveat, cursive; color: #2a2a2a; padding: 1mm 0 1.4mm; }
.field { display: grid; grid-template-columns: repeat(5, 1fr); gap: 4mm; align-items: stretch; }
.photos { break-inside: avoid; padding: 2mm 14mm 0; }
.sec { padding: 2mm 14mm 0; }
.trio { display: grid; grid-template-columns: 1fr 2fr; gap: 6mm; }
.trio .block { break-inside: avoid; }
.field .pol:nth-child(2) { transform: rotate(-2deg); } .field .pol:nth-child(3) { transform: rotate(1.5deg); } .field .pol:nth-child(4) { transform: rotate(-1deg); }
.skills { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 6mm; }
.sk { break-inside: avoid; padding: 1.8mm 0; border-top: .3mm solid #DCDCD4; }
.sk .t { display: flex; justify-content: space-between; gap: 2mm; align-items: baseline; }
.sk b { font-size: 10pt; }
.sk .w { font: 500 7.2pt "JetBrains Mono", monospace; color: #0F7A4A; white-space: nowrap; }
.sk p { margin: .5mm 0 0; color: #33332F; }
.two { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 7mm; }
.chips { display: flex; flex-wrap: wrap; gap: 1.5mm; }
.chip { font: 500 7.6pt "JetBrains Mono", monospace; border: .3mm solid #C9C9C0; border-radius: 10mm; padding: .6mm 2.4mm; background: #fff; }
.p2top { padding: 12mm 14mm 0; display: grid; grid-template-columns: 1fr 62mm; gap: 8mm; }
.closing { break-inside: avoid; margin: 4mm 14mm 0; padding: 4mm 0 0; border-top: .3mm solid #DCDCD4; display: grid; grid-template-columns: 1fr 52mm; gap: 8mm; align-items: end; }
.closing p { margin: 0; font-style: italic; color: #33332F; }
.sign img { width: 48mm; display: block; margin-left: auto; }
.sign .d { text-align: right; font: 500 7.4pt "JetBrains Mono", monospace; color: #5C5C55; }
.foot { position: absolute; left: 14mm; right: 14mm; bottom: 7mm; display: flex; justify-content: space-between; font: 500 7pt "JetBrains Mono", monospace; color: #8A8A82; }
.ascii { position: absolute; right: -6mm; top: 2mm; font: 500 5.2pt/5.6pt "JetBrains Mono", monospace; color: rgba(31,175,111,.55); white-space: pre; z-index: 1; }
'''
WEB='offthewallhack.github.io/rd2026'
def html(L):
    t=T[L]; en=L=='en'
    jobs=''.join(f'<div class="job"><div class="t"><b class="n">{n}</b><span class="w">{w}</span></div><div class="r">{r}</div><ul>'+''.join(f'<li>{x}</li>' for x in li)+'</ul></div>' for n,r,w,li in t['jobs'])
    esp=''.join(f'<div class="item"><b>{a}</b><span class="muted">{b}</span></div>' for a,b in t['esp'])
    oth=''.join(f'<div class="item"><b>{a}</b><span class="muted">{b}</span></div>' for a,b in t['oth'])
    edu=''.join(f'<div class="item"><b>{a}</b><span class="muted">{b}</span>{" · <span class=muted>"+c+"</span>" if c else ""}</div>' for a,b,c in t['edu'])
    skills=''.join(f'<div class="sk"><div class="t"><b>{a}</b><span class="w">{w}</span></div><p>{p}</p></div>' for a,w,p in t['skills'])
    langs=''.join(f'<span class="chip">{a} · {b}</span>' for a,b in t['langs'])
    more=''.join(f'<span class="chip">{m}</span>' for m in t['more'])
    field=''.join(f'<div class="pol"><img src="../../img/{f}.webp"><span>{c}</span></div>' for f,c in t['field'])
    exp=''.join(f'<li>{x}</li>' for x in t['exp'])
    return f'''<!doctype html><html lang="{L}"><head><meta charset="utf-8"><title>Robert Ďurica – CV</title><link rel="stylesheet" href="f/f.css"><style>{CSS}</style></head><body><div class="doc">
  <div class="hero"><div class="name"><h1>ROBERT <span>ĎURICA</span></h1><p>{t['roles']}</p></div></div>
  <div class="contact"><span><b>@</b> rdurica1995@gmail.com</span><span><b>☎</b> +421 908 109 541</span><span><b>⌂</b> {WEB}</span><span><b>in</b> linkedin.com/in/durica</span><span><b>◎</b> Bratislava · 1995</span></div>
  <div class="cols">
    <div>
      <div class="block"><p class="lead">{t['profile']}</p><p class="muted" style="margin:0">{t['profile2']}</p></div>
      <div class="block"><h2>{t['work_h']}</h2>{jobs}</div>
    </div>
    <div class="side">
      <div class="block"><h2>{t['exp_h']}</h2><ul class="exp">{exp}</ul></div>
      <div class="block"><h2>{t['esp_h']}</h2>{esp}</div>
      <div class="block"><h2>{t['oth_h']}</h2>{oth}</div>
      <div class="block"><h2>{t['edu_h']}</h2>{edu}</div>
    </div>
  </div>
  <div class="sec"><h2>{t['sk_h']}</h2><div class="skills">{skills}</div></div>
  <div class="sec side trio">
    <div class="block"><h2>{t['lang_h']}</h2><div class="chips">{langs}</div></div>
    <div class="block"><h2>{t['more_h']}</h2><div class="chips">{more}</div></div>
  </div>
  <div class="photos"><h2>{t['field_h']}</h2><div class="field"><img class="portrait" src="portrait.jpg" alt="">{field}</div></div>
  <div class="closing"><div><p>{t['closing']}</p><p class="muted" style="font-style:normal;margin-top:2mm">{t['more_on']} <b style="color:#0F7A4A">{WEB}/kto-som</b></p></div><div class="sign"><img src="sign.png" alt=""><div class="d">Robert Ďurica · {t['date']}</div></div></div>
</div></body></html>'''
for L in ('en','sk'):
    open(os.path.join(HERE, f'cv-{L}.html'),'w',encoding='utf-8').write(html(L))
print('ok')
