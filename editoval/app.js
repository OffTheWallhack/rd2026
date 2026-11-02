/* si/editoval 2 — Skicár na efekty.
   Dokument = formát + pozadie + vrstvy (obrázok s efektom, text, kresba štetcom). Všetko beží v prehliadači.
   Súradnice vrstiev sú relatívne k plátnu (0..1), veľkosti textu a štetca sú v "bodoch pri 1080 px kratšej strane",
   takže náhľad aj export vyzerajú rovnako a formát sa dá kedykoľvek prepnúť. */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
var cv=$('#cv'),cx=cv.getContext('2d'),ov=$('#ov'),ox=ov.getContext('2d'),paperEl=$('#paper');
var PREV=1000,MAXSRC=2400;

/* ================= dáta ================= */
var FORMATS=[
  {id:'4x5',n:'4:5',d:'IG post',w:1080,h:1350},
  {id:'9x16',n:'9:16',d:'Story, Reels',w:1080,h:1920},
  {id:'1x1',n:'1:1',d:'Štvorec',w:1080,h:1080},
  {id:'16x9',n:'16:9',d:'Na šírku, YouTube',w:1920,h:1080},
  {id:'4x3',n:'4:3',d:'Foto na šírku',w:1440,h:1080},
  {id:'3x4',n:'3:4',d:'Foto na výšku',w:1080,h:1440},
  {id:'5x4',n:'5:4',d:'Post na šírku',w:1350,h:1080},
  {id:'2x3',n:'2:3',d:'Plagát',w:1080,h:1620}
];
var PALS=[
  {id:'phos',n:'Fosfor',c:['#061207','#7dff9c']},
  {id:'amber',n:'Jantár',c:['#120a02','#ffab5c']},
  {id:'night',n:'Fialová noc',c:['#060709','#4a2a9a','#c56cff','#ff3b5c']},
  {id:'cream',n:'Krém',c:['#efe6cf','#15120e']},
  {id:'autumn',n:'Jeseň',c:['#2a1c08','#6b5316','#b8321a']},
  {id:'bw',n:'Čiernobiela',c:['#000000','#ffffff']},
  {id:'win',n:'Win98',c:['#ffffff','#000080','#008080','#c0c0c0','#000000']},
  {id:'gameboy',n:'Game Boy',c:['#0f380f','#306230','#8bac0f','#9bbc0f']},
  {id:'cga',n:'CGA',c:['#000000','#55ffff','#ff55ff','#ffffff']},
  {id:'punch',n:'Punch',c:['#0b0b0b','#f1484e','#0ca9ed','#07f089','#e9ca0c','#7023d8']},
  {id:'orig',n:'Pôvodné farby',c:null},
  {id:'custom',n:'Vlastná',c:null}
];
var SETS={min:' .:-=+*#%@',full:' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',blocks:' ░▒▓█',hearts:' .·♡♥',bin:'01'};
var AFONTS={mono:'"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace',serif:'Georgia,"Times New Roman",serif',gothic:'"UnifrakturMaguntia",Georgia,serif'};
var FONTS=[
  {id:'syne',n:'Syne',fam:'Syne',w:800},
  {id:'archivo',n:'Archivo Black',fam:'"Archivo Black"',w:400},
  {id:'anton',n:'Anton',fam:'Anton',w:400},
  {id:'bebas',n:'Bebas Neue',fam:'"Bebas Neue"',w:400},
  {id:'bungee',n:'Bungee',fam:'Bungee',w:400},
  {id:'instrument',n:'Instrument',fam:'"Instrument Serif"',w:400},
  {id:'dmserif',n:'DM Serif',fam:'"DM Serif Display"',w:400},
  {id:'pirata',n:'Pirata One',fam:'"Pirata One"',w:400},
  {id:'fraktur',n:'Fraktúra',fam:'UnifrakturMaguntia',w:400},
  {id:'marker',n:'Fixka',fam:'"Permanent Marker"',w:400},
  {id:'mono',n:'Space Mono',fam:'"Space Mono"',w:700},
  {id:'vt323',n:'VT323',fam:'VT323',w:400},
  {id:'silk',n:'Silkscreen',fam:'Silkscreen',w:400},
  {id:'press',n:'Press Start',fam:'"Press Start 2P"',w:400},
  {id:'major',n:'Major Mono',fam:'"Major Mono Display"',w:400},
  {id:'monoton',n:'Monoton',fam:'Monoton',w:400},
  {id:'glitch',n:'Glitch',fam:'"Rubik Glitch"',w:400},
  {id:'barcode',n:'Čiarový kód',fam:'"Libre Barcode 39 Text"',w:400},
  {id:'win98',n:'Win98',fam:'Tahoma,Verdana',w:700},
  {id:'times',n:'Times',fam:'"Times New Roman",Times',w:700}
];
var W98=['#000000','#808080','#800000','#808000','#008000','#008080','#000080','#800080','#808040','#004040','#0080ff','#004080','#8000ff','#804000',
         '#ffffff','#c0c0c0','#ff0000','#ffff00','#00ff00','#00ffff','#0000ff','#ff00ff','#ffff80','#00ff80','#80ffff','#8080ff','#ff0080','#ff8040'];
var FXN={none:'',dither:'Dither',ascii:'ASCII',look:'Look',relief:'Kov',ink:'Tekutý'};
var STYLEN={plain:'Čistý',shadow:'Tieň',outline:'Obrys',chrome:'Chróm',wordart:'WordArt',relief:'Reliéf'};

/* ================= pomôcky ================= */
function clamp(v,a,b){return v<a?a:v>b?b:v;}
function mk(w,h){var c=document.createElement('canvas');c.width=Math.max(1,w|0);c.height=Math.max(1,h|0);return c;}
function hex(h){h=String(h||'#000').replace('#','');if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16)||0;return [(n>>16)&255,(n>>8)&255,n&255];}
function lum(c){return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
function rgb(c){return 'rgb('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+')';}
function fitSize(w,h,long){var s=Math.min(1,long/Math.max(w,h));return [Math.max(2,Math.round(w*s)),Math.max(2,Math.round(h*s))];}
var hashSeed=1;function rnd(){hashSeed=(hashSeed*1664525+1013904223)>>>0;return hashSeed/4294967296;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function ri(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function boxBlur(src,w,h,r,out){
  if(r<1){out.set(src);return out;}
  var tmp=new Float32Array(w*h),x,y,s,n=2*r+1,o;
  for(y=0;y<h;y++){o=y*w;s=0;for(x=-r;x<=r;x++)s+=src[o+clamp(x,0,w-1)];for(x=0;x<w;x++){tmp[o+x]=s/n;s+=src[o+clamp(x+r+1,0,w-1)]-src[o+clamp(x-r,0,w-1)];}}
  for(x=0;x<w;x++){s=0;for(y=-r;y<=r;y++)s+=tmp[clamp(y,0,h-1)*w+x];for(y=0;y<h;y++){out[y*w+x]=s/n;s+=tmp[clamp(y+r+1,0,h-1)*w+x]-tmp[clamp(y-r,0,h-1)*w+x];}}
  return out;
}
function blur2(A,w,h,r){var t=new Float32Array(w*h),o=new Float32Array(w*h);boxBlur(A,w,h,r,t);boxBlur(t,w,h,r,o);return o;}
function nearest(cols,r,g,b){var bi=0,bd=1e9;for(var i=0;i<cols.length;i++){var c=cols[i],d=(c[0]-r)*(c[0]-r)+(c[1]-g)*(c[1]-g)*1.4+(c[2]-b)*(c[2]-b);if(d<bd){bd=d;bi=i;}}return cols[bi];}
function pal(p){if(p.pal==='custom')return [p.c1,p.c2,p.c3].map(hex);var q=PALS.filter(function(x){return x.id===p.pal;})[0];return q&&q.c?q.c.map(hex):null;}
function fontOf(id){return FONTS.filter(function(f){return f.id===id;})[0]||FONTS[0];}
function fstr(f,px){return f.w+' '+px+'px '+f.fam+',sans-serif';}
var stT=0;
function msg(t){var s=$('#st1');s.textContent=t;clearTimeout(stT);stT=setTimeout(status,5000);}

/* ================= stav ================= */
var SRC={},srcN=0;function addSrc(c){var id='s'+(++srcN);SRC[id]=c;return id;}
var lid=0;function nid(){return 'L'+(++lid)+'_'+Date.now().toString(36);}
function defFx(){return {dstyle:'dots',dscale:5,dthr:0,dden:12,pal:'phos',c1:'#000000',c2:'#ff0000',c3:'#ffffff',
  aset:'min',atext:'EDITOVAL ',acols:70,athr:0,afont:'mono',aink:'pal',atrans:false,
  lvar:'warm',lamt:70,lgrain:35,
  mat:'steel',evol:65,eslope:35,erecess:60,erough:8,eshine:65,eangle:300,egoo:0,ithr:50,ibold:0,iinv:false,idrip:40};}
function defAdj(){return {auto:false,bri:0,con:0,sat:0,blur:0,inv:false};}
var D={fmt:'4x5',bg:{kind:'color',color:'#ffffff'},layers:[]};
var S={sel:null,tool:'move',color:'#000000',gesture:false,hist:[],fut:[],gx:false,gy:false,group:0};
try{var sv=JSON.parse(localStorage.getItem('editoval2')||'null');if(sv&&FORMATS.some(function(f){return f.id===sv.fmt;}))D.fmt=sv.fmt;}catch(e){}
function savePrefs(){try{localStorage.setItem('editoval2',JSON.stringify({fmt:D.fmt}));}catch(e){}}
function fmtOf(){return FORMATS.filter(function(f){return f.id===D.fmt;})[0]||FORMATS[0];}
function psize(){var f=fmtOf(),k=Math.min(1,PREV/Math.max(f.w,f.h));return [Math.round(f.w*k),Math.round(f.h*k)];}
function byId(id){return D.layers.filter(function(l){return l.id===id;})[0]||null;}
function selLayer(){return S.sel&&S.sel!=='bg'?byId(S.sel):null;}

/* história (Späť / Znova) — ukladá sa len dokument, obrázky zostávajú v SRC */
function snap(){return JSON.stringify(D,function(k,v){return k.charAt(0)==='_'?undefined:v;});}
var lastSnap='';
function commit(){var s=snap();if(s===lastSnap)return;if(lastSnap)S.hist.push(lastSnap);if(S.hist.length>80)S.hist.shift();S.fut=[];lastSnap=s;}
function restore(s){D=JSON.parse(s);if(S.sel!=='bg'&&!byId(S.sel))S.sel=null;if(!selLayer()||selLayer().type!=='draw')S.tool='move';refreshAll();}
function undo(){if(!S.hist.length){msg('Nie je čo vrátiť.');return;}S.fut.push(lastSnap);lastSnap=S.hist.pop();restore(lastSnap);msg('Späť.');}
function redo(){if(!S.fut.length)return;S.hist.push(lastSnap);lastSnap=S.fut.pop();restore(lastSnap);}

/* ================= textúry ================= */
var TEX={};
function texture(kind,W,H){
  var key=kind+W+'x'+H;if(TEX[key])return TEX[key];
  var c=mk(W,H),g=c.getContext('2d',{willReadFrequently:true}),im=g.createImageData(W,H),d=im.data,x,y,i;
  var base=kind==='gold'?[214,170,88]:kind==='black'?[26,26,30]:kind==='paper'?[244,240,230]:[178,180,184];
  var rowN=new Float32Array(H);hashSeed=7;for(y=0;y<H;y++)rowN[y]=rnd();
  for(y=0;y<H;y++){
    var rn=(rowN[y]-.5)*(kind==='black'?.04:kind==='paper'?.012:.14);
    for(x=0;x<W;x++){i=(y*W+x)*4;var v;
      if(kind==='paper'){v=1+rn+(rnd()-.5)*.05;}
      else{var u=x/W,band=Math.exp(-Math.pow((u-.62)*4.2,2))*.42+Math.exp(-Math.pow((u-.15)*6,2))*.18-u*.12;v=1+band+rn+(rnd()-.5)*(kind==='black'?.03:.07);}
      d[i]=clamp(base[0]*v,0,255);d[i+1]=clamp(base[1]*v,0,255);d[i+2]=clamp(base[2]*v,0,255);d[i+3]=255;}}
  g.putImageData(im,0,0);
  if(Object.keys(TEX).length>8)TEX={};TEX[key]=c;return c;
}

/* ================= úpravy obrázka ================= */
function adjust(src,w,h,a,U){
  var c=mk(w,h),g=c.getContext('2d',{willReadFrequently:true});g.imageSmoothingQuality='high';g.drawImage(src,0,0,w,h);
  if(!a.auto&&!a.bri&&!a.con&&!a.sat&&!a.blur&&!a.inv)return c;
  var im=g.getImageData(0,0,w,h),d=im.data,i,lut=new Uint8ClampedArray(256),lo=0,hi=255,gam=1;
  if(a.auto){var hist=new Uint32Array(256),tot=0,sum=0,acc=0,fl=false,fh=false;for(i=0;i<d.length;i+=16){hist[(d[i]*.299+d[i+1]*.587+d[i+2]*.114)|0]++;tot++;}
    for(i=0;i<256;i++){acc+=hist[i];sum+=hist[i]*i;if(!fl&&acc>=tot*.02){lo=i;fl=true;}if(!fh&&acc>=tot*.995){hi=i;fh=true;}}
    if(hi-lo<40)hi=Math.min(255,lo+40);var m=clamp((sum/Math.max(1,tot)-lo)/(hi-lo),.03,.97);gam=clamp(Math.log(.42)/Math.log(m),.55,1.2);}
  var con=a.con/100,bri=a.bri/100,k=con>=0?1+con*2.2:1+con;
  for(i=0;i<256;i++){var v=Math.pow(clamp((i-lo)/(hi-lo),0,1),gam);v=(v-.5)*k+.5+bri*.6;lut[i]=clamp(v,0,1)*255;}
  var sat=1+a.sat/100*(a.sat>0?1.5:1);
  for(i=0;i<d.length;i+=4){var r=lut[d[i]],gg=lut[d[i+1]],b=lut[d[i+2]];
    if(sat!==1){var l=r*.2126+gg*.7152+b*.0722;r=l+(r-l)*sat;gg=l+(gg-l)*sat;b=l+(b-l)*sat;}
    if(a.inv){r=255-r;gg=255-gg;b=255-b;}
    d[i]=r;d[i+1]=gg;d[i+2]=b;}
  var rad=Math.round(a.blur*U*1.5);
  if(rad>=1){var n=w*h,f=new Float32Array(n),o=new Float32Array(n),ch;for(ch=0;ch<3;ch++){for(i=0;i<n;i++)f[i]=d[i*4+ch];boxBlur(f,w,h,rad,o);boxBlur(o,w,h,rad,f);for(i=0;i<n;i++)d[i*4+ch]=f[i];}}
  g.putImageData(im,0,0);return c;
}

/* ================= efekt: DITHER ================= */
var BAYER4=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],BAYER8=[];
(function(){for(var y=0;y<8;y++)for(var x=0;x<8;x++){var v=0,xc=x^y;for(var b=0;b<3;b++){v|=((y>>b)&1)<<(5-2*b);v|=((xc>>b)&1)<<(4-2*b);}BAYER8.push(v);}})();
function fxDither(src,p,U){
  var W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d'),cols=pal(p),st=p.dstyle,thr=p.dthr*1.6;
  var paper=cols?cols[0]:[8,8,8],ink=cols?cols[cols.length-1]:[255,255,255],dark=lum(paper)<lum(ink);
  if(st==='dots'||st==='wave'||st==='lines'){
    var cell=Math.max(3,Math.round((p.dscale+3)*U*1.3)),cw=Math.ceil(W/cell),ch=Math.ceil(H/cell),sm=mk(cw,ch),sg=sm.getContext('2d',{willReadFrequently:true});
    sg.drawImage(src,0,0,cw,ch);var d=sg.getImageData(0,0,cw,ch).data,x,y,i,amt,inks=cols&&cols.length>2?cols.slice(1):null;
    var inkFor=function(i){if(inks)return rgb(nearest(inks,d[i],d[i+1],d[i+2]));return cols?rgb(ink):rgb([d[i],d[i+1],d[i+2]]);};
    var L=function(i){var l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722+thr)/255,0,1);return dark?l:1-l;};
    o.fillStyle=rgb(paper);o.fillRect(0,0,W,H);
    if(st==='dots'){for(y=0;y<ch;y++)for(x=0;x<cw;x++){i=(y*cw+x)*4;amt=L(i);var r=Math.sqrt(amt)*cell*.62;if(r<.3)continue;o.fillStyle=inkFor(i);o.beginPath();o.arc(x*cell+cell/2+(y%2)*cell*.25,y*cell+cell/2,r,0,7);o.fill();}}
    else if(st==='lines'){for(y=0;y<ch;y++)for(x=0;x<cw;x++){i=(y*cw+x)*4;amt=L(i);var th=amt*cell*.95;if(th<.4)continue;o.fillStyle=inkFor(i);o.fillRect(x*cell,y*cell+(cell-th)/2,cell+.5,th);}}
    else{var fq=p.dden*.09/Math.max(.4,U);o.lineCap='round';o.lineJoin='round';o.lineWidth=Math.max(1,cell*.38);
      for(x=0;x<cw;x++){var cxp=x*cell+cell/2,last='';o.beginPath();
        for(y=0;y<=H;y+=2){var yy=Math.min(ch-1,(y/cell)|0);i=(yy*cw+x)*4;amt=L(i);var xo=cxp+Math.sin(y*fq+x*.7)*cell*.55*amt;
          if(y===0)o.moveTo(xo,y);else o.lineTo(xo,y);var cc=inkFor(i);if(last&&cc!==last){o.strokeStyle=last;o.stroke();o.beginPath();o.moveTo(xo,y);}last=cc;}
        o.strokeStyle=last;o.stroke();}}
    return out;
  }
  var s=Math.max(1,Math.round(p.dscale*U*1.2)),sw=Math.max(1,Math.round(W/s)),sh=Math.max(1,Math.round(H/s)),sm2=mk(sw,sh),g2=sm2.getContext('2d',{willReadFrequently:true});
  g2.drawImage(src,0,0,sw,sh);var im=g2.getImageData(0,0,sw,sh),px=im.data,n=sw*sh,F=new Float32Array(n*3),q,j,x2,y2;
  for(q=0;q<n;q++){F[q*3]=px[q*4]+thr;F[q*3+1]=px[q*4+1]+thr;F[q*3+2]=px[q*4+2]+thr;}
  var two=cols&&cols.length===2,sorted=cols?cols.slice().sort(function(a,b){return lum(a)-lum(b);}):null,spread=cols?(two?255:170):85;
  var quant=function(r,g,b){if(!cols)return [Math.round(clamp(r,0,255)/85)*85,Math.round(clamp(g,0,255)/85)*85,Math.round(clamp(b,0,255)/85)*85];if(two)return (r*.2126+g*.7152+b*.0722)<128?sorted[0]:sorted[1];return nearest(cols,r,g,b);};
  var add=function(x,y,er,eg,eb,k){if(x<0||x>=sw||y>=sh)return;var jj=(y*sw+x)*3;F[jj]+=er*k;F[jj+1]+=eg*k;F[jj+2]+=eb*k;};
  if(st==='noise')hashSeed=5;
  for(y2=0;y2<sh;y2++)for(x2=0;x2<sw;x2++){q=y2*sw+x2;j=q*3;var r=F[j],g=F[j+1],b=F[j+2],t=0;
    if(st==='bayer4')t=(BAYER4[(y2&3)*4+(x2&3)]/16-.47)*spread*.9;
    else if(st==='bayer8')t=(BAYER8[(y2&7)*8+(x2&7)]/64-.49)*spread*.9;
    else if(st==='noise')t=(rnd()-.5)*spread*1.1;
    var c=quant(r+t,g+t,b+t);
    if(st==='fs'||st==='atk'){var er=r-c[0],eg=g-c[1],eb=b-c[2];
      if(st==='fs'){add(x2+1,y2,er,eg,eb,7/16);add(x2-1,y2+1,er,eg,eb,3/16);add(x2,y2+1,er,eg,eb,5/16);add(x2+1,y2+1,er,eg,eb,1/16);}
      else{add(x2+1,y2,er,eg,eb,.125);add(x2+2,y2,er,eg,eb,.125);add(x2-1,y2+1,er,eg,eb,.125);add(x2,y2+1,er,eg,eb,.125);add(x2+1,y2+1,er,eg,eb,.125);add(x2,y2+2,er,eg,eb,.125);}}
    px[q*4]=c[0];px[q*4+1]=c[1];px[q*4+2]=c[2];px[q*4+3]=255;}
  g2.putImageData(im,0,0);o.imageSmoothingEnabled=false;o.drawImage(sm2,0,0,sw,sh,0,0,W,H);
  return out;
}

/* ================= efekt: ASCII ================= */
function fxAscii(src,p){
  var W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d');
  var cols=Math.round(p.acols),cw=W/cols,ch=cw*1.7,rows=Math.max(1,Math.ceil(H/ch)),sm=mk(cols,rows),sg=sm.getContext('2d',{willReadFrequently:true});
  sg.drawImage(src,0,0,cols,rows);var d=sg.getImageData(0,0,cols,rows).data;
  var P=pal(p),paper=P?P[0]:[8,8,8],inks=P?P.slice(1):null,dark=!P||lum(paper)<lum(P[P.length-1]);
  if(!p.atrans){o.fillStyle=rgb(paper);o.fillRect(0,0,W,H);}
  var isText=p.aset==='text',set=isText?(p.atext||'EDITOVAL ').replace(/\s+/g,' '):SETS[p.aset]||SETS.min,n=set.length;
  o.font='700 '+(ch*.92)+'px '+AFONTS[p.afont];o.textAlign='center';o.textBaseline='middle';
  var thr=p.athr/100,x,y,i,k=0;
  for(y=0;y<rows;y++)for(x=0;x<cols;x++,k++){i=(y*cols+x)*4;var l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/255+thr*.6,0,1),v=dark?l:1-l,chr;
    if(isText){chr=set[k%n];if(v<.12)continue;}else{chr=set[Math.round(Math.pow(v,.85)*(n-1))];if(chr===' ')continue;}
    var c;
    if(p.aink==='color'){var m=Math.max(d[i],d[i+1],d[i+2],40);c=dark?[d[i]*255/m,d[i+1]*255/m,d[i+2]*255/m]:[d[i]*.7,d[i+1]*.7,d[i+2]*.7];}
    else if(inks&&inks.length>1)c=nearest(inks,d[i],d[i+1],d[i+2]);
    else c=inks?inks[0]:[230,230,230];
    o.fillStyle=rgb(c);o.globalAlpha=isText?.35+.65*v:.8+.2*v;o.fillText(chr,x*cw+cw/2,y*ch+ch/2);}
  o.globalAlpha=1;return out;
}

/* ================= efekt: LOOK ================= */
function soft(a,b,A){var sl=b<=.5?2*a*b+a*a*(1-2*b):Math.sqrt(a)*(2*b-1)+2*a*(1-b);return a+(sl-a)*(.3+.6*A);}
function fxLook(src,p){
  var W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d',{willReadFrequently:true}),v=p.lvar,A=p.lamt/100,grain=p.lgrain/100,i,j,k,x,y;
  if(v==='poster'){ /* jesenný plagát: zrnitá dvojtónová plocha */
    var sw=Math.max(1,Math.round(W/3)),sh=Math.max(1,Math.round(H/3)),sm=mk(sw,sh),sg=sm.getContext('2d',{willReadFrequently:true});sg.drawImage(src,0,0,sw,sh);
    var im=sg.getImageData(0,0,sw,sh),d=im.data,pap=[107,83,22],ink=[42,28,8],n=d.length/4,ls=new Float32Array(n),sum=0;hashSeed=3;
    for(i=0;i<n;i++){ls[i]=(d[i*4]*.2126+d[i*4+1]*.7152+d[i*4+2]*.0722)/255;sum+=ls[i];}
    var gm=Math.log(.5)/Math.log(clamp(sum/n,.05,.95));
    for(i=0;i<n;i++){var lp=(Math.pow(ls[i],gm)-.5)*(1+A)+.5,t=lp+(rnd()-.5)*(.5+.6*grain),c=t<.5?ink:pap;d[i*4]=c[0];d[i*4+1]=c[1];d[i*4+2]=c[2];d[i*4+3]=255;}
    sg.putImageData(im,0,0);o.imageSmoothingEnabled=false;o.drawImage(sm,0,0,W,H);return out;
  }
  o.drawImage(src,0,0);
  var im2=o.getImageData(0,0,W,H),px=im2.data,org=v==='vhs'?new Uint8ClampedArray(px):px;
  var bw=Math.max(1,W>>3),bh=Math.max(1,H>>3),bc=mk(bw,bh),bg=bc.getContext('2d',{willReadFrequently:true});bg.drawImage(src,0,0,bw,bh);
  var bd=bg.getImageData(0,0,bw,bh).data,bf=[new Float32Array(bw*bh),new Float32Array(bw*bh),new Float32Array(bw*bh)],tmp=new Float32Array(bw*bh);
  for(k=0;k<3;k++){for(j=0;j<bw*bh;j++)bf[k][j]=Math.max(0,bd[j*4+k]/255-.6)*2.5;boxBlur(bf[k],bw,bh,3,tmp);boxBlur(tmp,bw,bh,3,bf[k]);}
  var sT=v==='cold'?[.05,.15,.36]:[.06,.34,.40],hT=v==='cold'?[.70,.84,1]:[1,.64,.34],bt=v==='cold'?[.66,.83,1]:[1,.72,.48];
  var cxm=W/2,cym=H/2,vr=Math.sqrt(cxm*cxm+cym*cym);hashSeed=11;
  var sh2=v==='vhs'?Math.max(1,Math.round(W*.004*(.4+A))):0;
  for(y=0;y<H;y++){var jit=v==='vhs'?Math.round((rnd()-.5)*W*.002*A*((y%7===0)?6:1)):0;
    for(x=0;x<W;x++){j=(y*W+x)*4;var r,g,b;
      if(v==='vhs'){var xs=clamp(x+jit,0,W-1);r=org[(y*W+clamp(xs+sh2,0,W-1))*4]/255;g=org[(y*W+xs)*4+1]/255;b=org[(y*W+clamp(xs-sh2,0,W-1))*4+2]/255;}
      else{r=px[j]/255;g=px[j+1]/255;b=px[j+2]/255;}
      var bi=Math.min(bw*bh-1,(Math.min(bh-1,y>>3))*bw+Math.min(bw-1,x>>3)),bl=bf[0][bi],bgg=bf[1][bi],bb=bf[2][bi],l=r*.2126+g*.7152+b*.0722;
      if(v==='bw'){var m=l*l*(3-2*l);m=l+(m-l)*.55*A+(bl+bgg+bb)/3*.4*A;r=m*1.03;g=m;b=m*.96;}
      else if(v==='vhs'){var s2=.75+.3*A;r=l+(r-l)*s2;g=l+(g-l)*s2;b=l+(b-l)*s2;
        r=.05*A+r*(1-.08*A)*1.05;g=.05*A+g*(1-.1*A);b=.04*A+b*(1-.15*A)*.9;r+=bl*.3*A;g+=bgg*.22*A;b+=bb*.15*A;
        var sl=1-(.06+.12*A)*(.5+.5*Math.sin(y*3.14159/Math.max(1,H/720)));r*=sl;g*=sl;b*=sl;}
      else{var c1=l<.5?2*l*l:1-2*(1-l)*(1-l);l=l+(c1-l)*(.25+.5*A);var w=clamp((l-.04)/.68,0,1);
        r=soft(r,sT[0]+(hT[0]-sT[0])*w,A);g=soft(g,sT[1]+(hT[1]-sT[1])*w,A);b=soft(b,sT[2]+(hT[2]-sT[2])*w,A);
        var l3=r*.2126+g*.7152+b*.0722,s3=1+.2*A;r=l3+(r-l3)*s3;g=l3+(g-l3)*s3;b=l3+(b-l3)*s3;
        r+=bl*bt[0]*(.2+.6*A);g+=bgg*bt[1]*(.2+.6*A);b+=bb*bt[2]*(.2+.6*A);}
      var dx=x-cxm,dy=y-cym,vv=1-(.1+.5*A)*clamp((Math.sqrt(dx*dx+dy*dy)/vr-.45)/.6,0,1);r*=vv;g*=vv;b*=vv;
      var gn=(rnd()-.5)*grain*.22*(1-.5*l);r+=gn;g+=gn;b+=gn;
      px[j]=clamp(r,0,1)*255;px[j+1]=clamp(g,0,1)*255;px[j+2]=clamp(b,0,1)*255;}}
  o.putImageData(im2,0,0);return out;
}

/* ================= reliéf: svetlo na výškovej mape ================= */
/* d = pixely, ktoré sa menia; matD = materiál (oceľ...) alebo null = lisuje sa do toho, čo je pod tým;
   Hh = výška 0..1; M = maska (null = celé); R = rozmazaná maska na priehlbinu okolo; alpha = priehľadnosť vrstvy */
function light(d,matD,Hh,M,R,w,h,p,kk,alpha,metal){
  var ang=(p.eangle+180)*Math.PI/180,Lx=Math.cos(ang),Ly=-Math.sin(ang),Lz=.75,Ll=Math.sqrt(Lx*Lx+Ly*Ly+Lz*Lz);Lx/=Ll;Ly/=Ll;Lz/=Ll;
  var Hx=Lx,Hy=Ly,Hz=Lz+1,Hl=Math.sqrt(Hx*Hx+Hy*Hy+Hz*Hz);Hx/=Hl;Hy/=Hl;Hz/=Hl;
  var rough=p.erough/100,shine=p.eshine/100,recess=p.erecess/100,x,y,i,j;hashSeed=99;
  for(y=0;y<h;y++)for(x=0;x<w;x++){i=y*w+x;j=i*4;var m=1;
    if(M){var hv=M[i];m=hv<.02?0:hv>.55?1:(hv-.02)/.53;m=m*m*(3-2*m);}
    if(m<=0){if(R&&recess>0){var ring=clamp(R[i]-M[i]*1.2,0,1)*recess*alpha;if(ring>0){var dk=1-ring*.55;d[j]*=dk;d[j+1]*=dk;d[j+2]*=dk;if(d[j+3]<255)d[j+3]=Math.max(d[j+3],ring*120);}}continue;}
    var gx=(Hh[x<w-1?i+1:i]-Hh[x>0?i-1:i])*kk,gy=(Hh[y<h-1?i+w:i]-Hh[y>0?i-w:i])*kk;
    if(rough>0){gx+=(rnd()-.5)*rough*1.4;gy+=(rnd()-.5)*rough*1.4;}
    var nl=1/Math.sqrt(gx*gx+gy*gy+1),nx=-gx*nl,ny=-gy*nl,nz=nl;
    var diff=Math.max(0,nx*Lx+ny*Ly+nz*Lz),sp=Math.pow(Math.max(0,nx*Hx+ny*Hy+nz*Hz),metal?60:24)*shine*1.3;
    var env=metal?(.5+.5*Math.sin(ny*5.5+nx*2.2))*shine*.5:0,lit=.42+.95*diff+env*.6;
    var b0=matD?matD[j]:d[j],b1=matD?matD[j+1]:d[j+1],b2=matD?matD[j+2]:d[j+2],k=m*alpha;
    d[j]=clamp(d[j]+(b0*lit+sp*255-d[j])*k,0,255);d[j+1]=clamp(d[j+1]+(b1*lit+sp*255-d[j+1])*k,0,255);d[j+2]=clamp(d[j+2]+(b2*lit+sp*255-d[j+2])*k,0,255);
    if(d[j+3]<255)d[j+3]=Math.max(d[j+3],k*255);}
}
/* efekt obrázka "Kov": svetlé miesta fotky vystúpia z kovovej platne */
function fxMetal(src,p,U){
  var W=src.width,H=src.height,sd=src.getContext('2d',{willReadFrequently:true}).getImageData(0,0,W,H).data,n=W*H,L=new Float32Array(n),i;
  for(i=0;i<n;i++)L[i]=(sd[i*4]*.2126+sd[i*4+1]*.7152+sd[i*4+2]*.0722)/255;
  var r=Math.max(1,Math.round((.6+p.eslope/100*5)*U*1.6)),Hh=blur2(L,W,H,r);
  var out=mk(W,H),o=out.getContext('2d',{willReadFrequently:true});o.drawImage(texture(p.mat==='below'?'steel':p.mat,W,H),0,0);
  var im=o.getImageData(0,0,W,H);light(im.data,null,Hh,null,null,W,H,p,p.evol/100*(3+r*3),1,true);o.putImageData(im,0,0);return out;
}
/* "tekutosť": maska sa rozmaže a znova zaostrí, ťahy a písmená sa zlejú ako kvapky (metaball) */
function gooify(A,w,h,r,lo){if(r<1)return A;lo=lo==null?.36:lo;var B=blur2(A,w,h,r);for(var i=0;i<B.length;i++){var v=(B[i]-lo)/.26;v=v<0?0:v>1?1:v;B[i]=v*v*(3-2*v);}return B;}
function reliefA(d,matD,A,w,h,thick,p,alpha,metal){
  var r=Math.max(1,Math.round(thick*(.05+p.eslope/100*.4))),Hh=blur2(A,w,h,r),R=blur2(A,w,h,Math.max(2,Math.round(thick*.9)));
  light(d,matD,Hh,Hh,R,w,h,p,p.evol/100*(2.2+r*2.2),alpha,metal);
}
function maskRegion(W,H,box,drawMask,pad){
  var x0=Math.max(0,Math.floor(box.x0-pad)),y0=Math.max(0,Math.floor(box.y0-pad)),x1=Math.min(W,Math.ceil(box.x1+pad)),y1=Math.min(H,Math.ceil(box.y1+pad)),w=x1-x0,h=y1-y0;
  if(w<2||h<2)return null;
  var mc=mk(w,h),mx=mc.getContext('2d',{willReadFrequently:true});mx.translate(-x0,-y0);drawMask(mx);
  var md=mx.getImageData(0,0,w,h).data,n=w*h,A=new Float32Array(n);for(var i=0;i<n;i++)A[i]=md[i*4+3]/255;
  return {x0:x0,y0:y0,w:w,h:h,A:A};
}
function matData(mat,W,H,M){var k=mat==='self'?'steel':mat;return texture(k,W,H).getContext('2d',{willReadFrequently:true}).getImageData(M.x0,M.y0,M.w,M.h).data;}
/* reliéf textu alebo kresby: maska sa vylisuje do toho, čo je pod ňou (alebo do kovu / papiera) */
function reliefOnto(g,W,H,box,drawMask,thick,p,alpha,goo){
  goo=Math.round(goo||0);var M=maskRegion(W,H,box,drawMask,Math.ceil(thick*2+6+goo*2));if(!M)return;
  var A=gooify(M.A,M.w,M.h,goo),im=g.getImageData(M.x0,M.y0,M.w,M.h),matD=p.mat==='below'?null:matData(p.mat,W,H,M);
  var metal=/steel|gold|black/.test(p.mat)||(p.mat==='below'&&/steel|gold|black/.test(D.bg.kind));
  reliefA(im.data,matD,A,M.w,M.h,thick,p,alpha,metal);g.putImageData(im,M.x0,M.y0);
}
/* tekutá kresba farbou (bez reliéfu) */
function paintOnto(g,W,H,box,drawMask,color,alpha,goo){
  goo=Math.round(goo||0);var M=maskRegion(W,H,box,drawMask,goo*2+4);if(!M)return;
  var A=gooify(M.A,M.w,M.h,goo),c=mk(M.w,M.h),cg=c.getContext('2d'),im=cg.createImageData(M.w,M.h),d=im.data,col=hex(color);
  for(var i=0;i<A.length;i++){d[i*4]=col[0];d[i*4+1]=col[1];d[i*4+2]=col[2];d[i*4+3]=A[i]*255;}
  cg.putImageData(im,0,0);g.save();g.globalAlpha=alpha;g.drawImage(c,M.x0,M.y0);g.restore();
}
/* efekt obrázka "Tekutý": fotka s textom (napr. biely post s čiernym písmom) sa zmení na tekutý reliéf */
function fxInk(src,p,U){
  var W=src.width,H=src.height,sd=src.getContext('2d',{willReadFrequently:true}).getImageData(0,0,W,H).data,n=W*H,A=new Float32Array(n),Lm=new Float32Array(n),i,sum=0;
  for(i=0;i<n;i++){Lm[i]=(sd[i*4]*.2126+sd[i*4+1]*.7152+sd[i*4+2]*.0722)/255;sum+=Lm[i];}
  var lightBg=(sum/n>.5)!==!!p.iinv,thr=p.ithr/100;
  for(i=0;i<n;i++)A[i]=clamp((lightBg?thr-Lm[i]:Lm[i]-thr)/.12+.5,0,1);
  if(p.ibold){var B=blur2(A,W,H,Math.max(1,Math.round(Math.abs(p.ibold)/100*7*U+1))),c=.5-p.ibold/100*.38;for(i=0;i<n;i++)A[i]=clamp((B[i]-c)/.1+.5,0,1);}
  var th=Math.max(3,(6+p.egoo/100*8)*U*1.4);
  if(p.idrip>0){ /* stekajúce kvapky zo spodných hrán písma */
    var keep=hashSeed;hashSeed=4242;var sx=Math.max(2,Math.round(th*.7)),prob=p.idrip/100*.22,x,y;
    var fdot=function(cx,cy,r){var x0=Math.max(0,Math.floor(cx-r)),x1=Math.min(W-1,Math.ceil(cx+r)),y0=Math.max(0,Math.floor(cy-r)),y1=Math.min(H-1,Math.ceil(cy+r)),r2=r*r;
      for(var yy=y0;yy<=y1;yy++)for(var xx=x0;xx<=x1;xx++)if((xx-cx)*(xx-cx)+(yy-cy)*(yy-cy)<=r2)A[yy*W+xx]=1;};
    for(x=0;x<W;x+=sx)for(y=1;y<H-1;y++){if(A[y*W+x]>.5&&A[(y+1)*W+x]<.5&&rnd()<prob){
      var dl=th*(1.5+rnd()*7)*(.3+p.idrip/100),dw=th*(.26+rnd()*.22);for(var z=0;z<=1.001;z+=.05)fdot(x,y+dl*z,dw*(1-z*.35));fdot(x,y+dl,dw*(1+rnd()*.6));}}
    hashSeed=keep;
  }
  A=gooify(A,W,H,Math.round(p.egoo/100*10*U),.16);
  var out=mk(W,H),o=out.getContext('2d',{willReadFrequently:true});
  if(p.mat==='self'||p.mat==='below')o.drawImage(src,0,0);else o.drawImage(texture(p.mat,W,H),0,0);
  var im=o.getImageData(0,0,W,H);reliefA(im.data,null,A,W,H,th,p,1,/steel|gold|black/.test(p.mat));o.putImageData(im,0,0);
  return out;
}

/* ================= text ================= */
var MC=mk(4,4).getContext('2d'),FL={};
function ensureFont(f){if(FL[f.id]||!document.fonts||!document.fonts.load)return;FL[f.id]=1;document.fonts.load(fstr(f,40),'AaĎčžŠ').then(function(){dirty();buildFontsPreview();},function(){});}
function tmet(L,U){
  var f=fontOf(L.font),px=Math.max(4,L.size*U);MC.font=fstr(f,px);if('letterSpacing' in MC)MC.letterSpacing=(L.ls*U)+'px';
  var lines=String(L.text==null?'':L.text).split('\n'),mw=1;lines.forEach(function(s){mw=Math.max(mw,MC.measureText(s).width);});
  var lh=px*L.lh;return {f:f,px:px,lines:lines,w:mw,h:Math.max(px,lines.length*lh),lh:lh};
}
function paintText(g,L,W,H,U,mask){
  var m=tmet(L,U),n=m.lines.length;
  g.save();g.translate(L.x*W,L.y*H);g.rotate(L.r*Math.PI/180);g.font=fstr(m.f,m.px);if('letterSpacing' in g)g.letterSpacing=(L.ls*U)+'px';
  g.textBaseline='middle';g.textAlign=L.align;g.lineJoin='round';
  var ax=L.align==='left'?-m.w/2:L.align==='right'?m.w/2:0;
  var each=function(fn){m.lines.forEach(function(s,i){fn(s,ax,(i-(n-1)/2)*m.lh);});};
  var fill=function(s,x,y){g.fillText(s,x,y);};
  if(mask){g.fillStyle='#fff';each(fill);g.restore();return;}
  var st=L.style;
  if(st==='shadow'){var d=Math.max(2,m.px*.07);g.fillStyle=lum(hex(L.color))<60?'#808080':'#000';each(function(s,x,y){g.fillText(s,x+d,y+d);});g.fillStyle=L.color;each(fill);}
  else if(st==='outline'){g.lineWidth=Math.max(1.5,m.px*.045);g.strokeStyle=L.color;each(function(s,x,y){g.strokeText(s,x,y);});}
  else if(st==='chrome'){each(function(s,x,y){var gr=g.createLinearGradient(0,y-m.px*.5,0,y+m.px*.5);
      gr.addColorStop(0,'#ffffff');gr.addColorStop(.38,'#c9d1da');gr.addColorStop(.5,'#4b5460');gr.addColorStop(.56,'#e8edf2');gr.addColorStop(.8,'#8f99a4');gr.addColorStop(1,'#ffffff');
      g.fillStyle=gr;g.fillText(s,x,y);g.lineWidth=Math.max(1,m.px*.018);g.strokeStyle='rgba(0,0,0,.65)';g.strokeText(s,x,y);});}
  else if(st==='wordart'){ /* WordArt z Wordu 97: dúhový prechod a 3D vytiahnutie */
    var dep=Math.max(3,Math.round(m.px*.09)),stp=Math.max(1,dep/8);
    g.fillStyle='#4b3a00';for(var z=dep;z>0;z-=stp)each(function(s,x,y){g.fillText(s,x+z*.8,y+z);});
    each(function(s,x,y){var x0=x-(L.align==='left'?0:L.align==='right'?m.w:m.w/2),gr=g.createLinearGradient(x0,0,x0+m.w,0);
      ['#ff0000','#ff8000','#ffff00','#00c000','#0080ff','#8000ff'].forEach(function(c,i,a){gr.addColorStop(i/(a.length-1),c);});
      g.fillStyle=gr;g.fillText(s,x,y);g.lineWidth=Math.max(1,m.px*.02);g.strokeStyle='#000';g.strokeText(s,x,y);});}
  else{g.fillStyle=L.color;each(fill);}
  g.restore();
}

/* ================= kresba ================= */
function strokesPath(g,L,W,H,U,color){
  g.lineCap='round';g.lineJoin='round';
  L.strokes.forEach(function(st){var sz=Math.max(1,st.size*U),p=st.pts;g.strokeStyle=g.fillStyle=color||st.color;g.lineWidth=sz;
    if(p.length===1){g.beginPath();g.arc(p[0][0]*W,p[0][1]*H,sz/2,0,7);g.fill();return;}
    g.beginPath();g.moveTo(p[0][0]*W,p[0][1]*H);for(var i=1;i<p.length;i++)g.lineTo(p[i][0]*W,p[i][1]*H);g.stroke();});
}
/* tekutý ťah: hrúbka podľa rýchlosti (pomaly = hrubšie), vlnenie, kvapka na začiatku a konci,
   stekajúce a odfrknuté kvapky. Náhoda je pevná pre každý ťah, takže náhľad aj export sú rovnaké. */
function liquidPath(g,L,W,H,U,color){
  var liq=(L.liquid||0)/100,keep=hashSeed;g.fillStyle=color||L.color;
  var dot=function(x,y,r){g.beginPath();g.arc(x,y,Math.max(.5,r),0,7);g.fill();};
  L.strokes.forEach(function(st,si){
    var sz=Math.max(1,st.size*U),seed=((st.g||1)*1.37+si*.71)%6.283;hashSeed=(((st.g||1)*2654435761)^(si*40503))>>>0;
    var P=st.pts.map(function(q){return [q[0]*W,q[1]*H,q[2]==null?1:q[2]];}),blob=sz*.5*(1+liq*.55);
    dot(P[0][0],P[0][1],blob*(P.length===1?1.25:1));
    var acc=0,next=sz*(2+rnd()*5);
    for(var i=1;i<P.length;i++){
      var a=P[i-1],b=P[i],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),n=Math.max(1,Math.ceil(len/Math.max(.8,sz*.12)));
      for(var k=1;k<=n;k++){
        var t=k/n,x=a[0]+dx*t,y=a[1]+dy*t,w=a[2]+(b[2]-a[2])*t,d=acc+len*t;
        var wob=1+liq*.22*Math.sin(d/(sz*.85)+seed)+liq*.1*Math.sin(d/(sz*.31)+seed*2.3),rr=sz/2*(1+(w-1)*liq)*wob;
        dot(x,y,rr);
        if(liq>.05&&d>=next){
          next=d+sz*(2.5+rnd()*6)/(.35+liq);
          if(rnd()<.6){var dl=sz*(.6+rnd()*2.8)*liq,dw=rr*(.32+rnd()*.25);for(var z=0;z<=1.001;z+=.07)dot(x,y+rr*.5+dl*z,dw*(1-z*.4));dot(x,y+rr*.5+dl,dw*(.95+rnd()*.5));}
          else{var an=Math.atan2(dy,dx)+(rnd()<.5?1:-1)*Math.PI/2,dd=rr+sz*(.35+rnd()*.7);dot(x+Math.cos(an)*dd,y+Math.sin(an)*dd,sz*(.1+rnd()*.2));}
        }
      }
      acc+=len;
    }
    var e=P[P.length-1];if(P.length>1)dot(e[0],e[1],blob*(.9+rnd()*.5));
  });
  hashSeed=keep;
}
function drawBox(L,W,H,U){var b={x0:1e9,y0:1e9,x1:-1e9,y1:-1e9};L.strokes.forEach(function(st){var r=st.size*U/2;st.pts.forEach(function(q){b.x0=Math.min(b.x0,q[0]*W-r);b.y0=Math.min(b.y0,q[1]*H-r);b.x1=Math.max(b.x1,q[0]*W+r);b.y1=Math.max(b.y1,q[1]*H+r);});});return b;}
function avgSize(L){if(!L.strokes.length)return L.bsize;var s=0;L.strokes.forEach(function(st){s+=st.size;});return s/L.strokes.length;}

/* ================= geometria vrstiev ================= */
function layerBox(L,W,H,U){
  if(L.type==='image'){var src=SRC[L.src];if(!src)return null;var lw=L.s*W;return {cx:L.x*W,cy:L.y*H,w:lw,h:lw*src.height/src.width,r:L.r*Math.PI/180};}
  if(L.type==='text'){var m=tmet(L,U);return {cx:L.x*W,cy:L.y*H,w:m.w+m.px*.2,h:m.h+m.px*.1,r:L.r*Math.PI/180};}
  if(L.type==='draw'&&L.strokes.length){var b=drawBox(L,W,H,U);return {cx:(b.x0+b.x1)/2,cy:(b.y0+b.y1)/2,w:b.x1-b.x0,h:b.y1-b.y0,r:0};}
  return null;
}
function aabb(b){var c=Math.abs(Math.cos(b.r)),s=Math.abs(Math.sin(b.r)),hw=b.w/2*c+b.h/2*s,hh=b.w/2*s+b.h/2*c;return {x0:b.cx-hw,y0:b.cy-hh,x1:b.cx+hw,y1:b.cy+hh};}

/* ================= vykreslenie dokumentu ================= */
function imgRaster(L,W,U,preview){
  var src=SRC[L.src],lw=Math.max(2,Math.round(L.s*W)),lh=Math.max(2,Math.round(lw*src.height/src.width));
  var cap=Math.sqrt(9e6/(lw*lh));if(cap<1){lw=Math.round(lw*cap);lh=Math.round(lh*cap);} /* obrovsky zväčšená vrstva: počíta sa v menšom */
  var key=[lw,lh,L.fx,JSON.stringify(L.p),JSON.stringify(L.adj),L.src].join('|');
  if(preview&&L._c&&(L._c.key===key||S.gesture))return L._c.cv;
  var a=adjust(src,lw,lh,L.adj,U),out=a;
  if(L.fx==='dither')out=fxDither(a,L.p,U);else if(L.fx==='ascii')out=fxAscii(a,L.p);else if(L.fx==='look')out=fxLook(a,L.p);else if(L.fx==='relief')out=fxMetal(a,L.p,U);else if(L.fx==='ink')out=fxInk(a,L.p,U);
  if(preview)L._c={key:key,cv:out};
  return out;
}
function drawBg(g,W,H,preview){
  var b=D.bg;
  if(b.kind==='none'){if(preview){var s=Math.max(6,Math.round(W/50));for(var y=0;y<H;y+=s)for(var x=0;x<W;x+=s){g.fillStyle=((x/s+y/s)&1)?'#e4e4e4':'#ffffff';g.fillRect(x,y,s,s);}}return;}
  if(b.kind==='color'){g.fillStyle=b.color;g.fillRect(0,0,W,H);return;}
  g.drawImage(texture(b.kind,W,H),0,0);
}
function renderDoc(W,H,preview){
  var C=mk(W,H),g=C.getContext('2d',{willReadFrequently:true}),U=Math.min(W,H)/1080;
  drawBg(g,W,H,preview);
  D.layers.forEach(function(L){
    if(L.hidden)return;var a=clamp(L.o/100,0,1);if(a<=0)return;
    if(L.type==='image'){var src=SRC[L.src];if(!src)return;var r=imgRaster(L,W,U,preview),lw=L.s*W,lh=lw*src.height/src.width;
      g.save();g.globalAlpha=a;g.translate(L.x*W,L.y*H);g.rotate(L.r*Math.PI/180);g.drawImage(r,-lw/2,-lh/2,lw,lh);g.restore();}
    else if(L.type==='text'){ensureFont(fontOf(L.font));if(!String(L.text).trim())return;
      if(L.style==='relief'){var m=tmet(L,U);reliefOnto(g,W,H,aabb(layerBox(L,W,H,U)),function(x){paintText(x,L,W,H,U,true);},m.px*.14,L.p,a,(L.p.egoo||0)/100*m.px*.08);}
      else{g.save();g.globalAlpha=a;paintText(g,L,W,H,U,false);g.restore();}}
    else if(L.type==='draw'&&L.strokes.length){
      var liq=(L.liquid||0)/100,sz=avgSize(L)*U,goo=liq>0?Math.max(1,Math.round(sz*.22*liq)):0,bx=drawBox(L,W,H,U),gr=sz*liq*1.2;
      bx={x0:bx.x0-gr,y0:bx.y0-gr,x1:bx.x1+gr,y1:bx.y1+sz*liq*4.2};
      var mf=liq>0?function(x){liquidPath(x,L,W,H,U,'#fff');}:function(x){strokesPath(x,L,W,H,U,'#fff');};
      if(L.mode==='relief')reliefOnto(g,W,H,bx,mf,sz,L.p,a,goo);
      else if(liq>0)paintOnto(g,W,H,bx,mf,L.color,a,goo);
      else{g.save();g.globalAlpha=a;strokesPath(g,L,W,H,U);g.restore();}}
  });
  return C;
}

/* ================= náhľad ================= */
var pend=false;
function dirty(){if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;paint();});}
function paint(){
  var sz=psize();
  if(cv.width!==sz[0]||cv.height!==sz[1]){cv.width=ov.width=sz[0];cv.height=ov.height=sz[1];}
  try{var C=renderDoc(sz[0],sz[1],true);cx.clearRect(0,0,sz[0],sz[1]);cx.drawImage(C,0,0);}
  catch(e){console.error(e);msg('Chyba pri kreslení: '+e.message);}
  overlay();
}
function cssK(){var r=ov.getBoundingClientRect();return r.width?ov.width/r.width:1;}
function overlay(){
  var W=ov.width,H=ov.height,U=Math.min(W,H)/1080,k=cssK();ox.clearRect(0,0,W,H);
  if(S.gx||S.gy){ox.save();ox.strokeStyle='#ff00ff';ox.lineWidth=1*k;ox.setLineDash([6*k,4*k]);if(S.gx){ox.beginPath();ox.moveTo(W/2,0);ox.lineTo(W/2,H);ox.stroke();}if(S.gy){ox.beginPath();ox.moveTo(0,H/2);ox.lineTo(W,H/2);ox.stroke();}ox.restore();}
  var L=selLayer();if(!L||L.hidden)return;
  if(L.type==='draw'&&S.tool==='brush'&&G&&G.t==='draw')return;
  var b=layerBox(L,W,H,U);if(!b)return;
  ox.save();ox.translate(b.cx,b.cy);ox.rotate(b.r);
  ox.lineWidth=1.2*k;ox.setLineDash([]);ox.strokeStyle='#fff';ox.strokeRect(-b.w/2,-b.h/2,b.w,b.h);
  ox.setLineDash([4*k,3*k]);ox.strokeStyle='#000';ox.strokeRect(-b.w/2,-b.h/2,b.w,b.h);ox.setLineDash([]);
  if(L.type!=='draw'){
    var hs=9*k;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(q){ox.fillStyle='#000080';ox.fillRect(q[0]*b.w/2-hs/2,q[1]*b.h/2-hs/2,hs,hs);ox.strokeStyle='#fff';ox.lineWidth=1*k;ox.strokeRect(q[0]*b.w/2-hs/2,q[1]*b.h/2-hs/2,hs,hs);});
    var ry=-b.h/2-22*k;ox.strokeStyle='#000080';ox.lineWidth=1.2*k;ox.beginPath();ox.moveTo(0,-b.h/2);ox.lineTo(0,ry);ox.stroke();
    ox.fillStyle='#fff';ox.beginPath();ox.arc(0,ry,6*k,0,7);ox.fill();ox.stroke();
  }
  ox.restore();
}

/* ================= gestá na plátne ================= */
var PT={},G=null;
function ptr(e){var r=ov.getBoundingClientRect();return {x:(e.clientX-r.left)*ov.width/r.width,y:(e.clientY-r.top)*ov.height/r.height};}
function local(p,b){var dx=p.x-b.cx,dy=p.y-b.cy,c=Math.cos(-b.r),s=Math.sin(-b.r);return {x:dx*c-dy*s,y:dx*s+dy*c};}
function U0(){return Math.min(ov.width,ov.height)/1080;}
function hitHandle(p){
  var L=selLayer();if(!L||L.hidden||L.type==='draw')return null;var b=layerBox(L,ov.width,ov.height,U0());if(!b)return null;
  var k=cssK(),q=local(p,b),tol=16*k;
  if(Math.hypot(q.x,q.y-(-b.h/2-22*k))<tol)return 'rot';
  if(Math.abs(Math.abs(q.x)-b.w/2)<tol&&Math.abs(Math.abs(q.y)-b.h/2)<tol)return 'scale';
  return null;
}
function hitLayer(p){
  for(var i=D.layers.length-1;i>=0;i--){var L=D.layers[i];if(L.hidden||L.type==='draw')continue;var b=layerBox(L,ov.width,ov.height,U0());if(!b)continue;
    var q=local(p,b),tol=6*cssK();if(Math.abs(q.x)<=b.w/2+tol&&Math.abs(q.y)<=b.h/2+tol)return L;}
  return null;
}
function sizeOf(L){return L.type==='image'?L.s:L.size;}
function setSize(L,v){if(L.type==='image'){L.s=clamp(v,.03,6);L.fit=null;}else L.size=clamp(v,6,900);}
function mirrors(q){var o=[q],s=selLayer().sym;if(s==='v'||s==='vh')o.push([1-q[0],q[1]]);if(s==='h'||s==='vh')o.push([q[0],1-q[1]]);if(s==='vh')o.push([1-q[0],1-q[1]]);return o;}
ov.addEventListener('pointerdown',function(e){
  e.preventDefault();closeMenu();try{ov.setPointerCapture(e.pointerId);}catch(x){}
  var p=ptr(e);PT[e.pointerId]=p;var ids=Object.keys(PT),L=selLayer();
  if(ids.length===2&&L&&L.type!=='draw'&&(!G||G.t!=='draw')){var a=PT[ids[0]],b=PT[ids[1]];
    G={t:'pinch',L:L,d0:Math.hypot(a.x-b.x,a.y-b.y)||1,a0:Math.atan2(b.y-a.y,b.x-a.x),s0:sizeOf(L),r0:L.r,x0:L.x,y0:L.y,m0:{x:(a.x+b.x)/2,y:(a.y+b.y)/2}};S.gesture=true;return;}
  if(ids.length>1)return;
  if(S.tool==='brush'&&L&&L.type==='draw'){S.group++;var q=[p.x/ov.width,p.y/ov.height];
    G={t:'draw',lp:p,w:1.2,st:mirrors(q).map(function(m){m.push(1.2);var st={pts:[m],size:L.bsize,color:L.color,g:S.group};L.strokes.push(st);return st;})};liveStroke();return;}
  var hh=hitHandle(p);
  if(hh){var bb=layerBox(L,ov.width,ov.height,U0());G={t:hh,L:L,p0:p,s0:sizeOf(L),r0:L.r,c:{x:bb.cx,y:bb.cy}};S.gesture=true;return;}
  var hit=hitLayer(p);
  if(hit){if(hit.id!==S.sel)select(hit.id,true);G={t:'move',L:hit,p0:p,x0:hit.x,y0:hit.y};S.gesture=true;}
  else{if(S.sel!=='bg')select('bg',true);G=null;}
});
ov.addEventListener('pointermove',function(e){
  if(!PT[e.pointerId])return;var p=ptr(e);PT[e.pointerId]=p;if(!G)return;var W=ov.width,H=ov.height,L=G.L,k=cssK();
  if(G.t==='pinch'){var ids=Object.keys(PT);if(ids.length<2)return;var a=PT[ids[0]],b=PT[ids[1]],d=Math.hypot(a.x-b.x,a.y-b.y),an=Math.atan2(b.y-a.y,b.x-a.x),m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
    setSize(L,G.s0*d/G.d0);L.r=snapR(G.r0+(an-G.a0)*180/Math.PI);L.x=G.x0+(m.x-G.m0.x)/W;L.y=G.y0+(m.y-G.m0.y)/H;}
  else if(G.t==='move'){var nx=G.x0+(p.x-G.p0.x)/W,ny=G.y0+(p.y-G.p0.y)/H;S.gx=Math.abs(nx-.5)*W<7*k;S.gy=Math.abs(ny-.5)*H<7*k;L.x=S.gx?.5:nx;L.y=S.gy?.5:ny;}
  else if(G.t==='scale'){var d0=Math.hypot(G.p0.x-G.c.x,G.p0.y-G.c.y)||1,d1=Math.hypot(p.x-G.c.x,p.y-G.c.y);setSize(L,G.s0*d1/d0);}
  else if(G.t==='rot'){L.r=snapR(Math.atan2(p.y-G.c.y,p.x-G.c.x)*180/Math.PI+90);}
  else if(G.t==='draw'){var sp=Math.hypot(p.x-G.lp.x,p.y-G.lp.y);if(sp<.6)return;G.lp=p;
    var tw=clamp(1.45-sp/Math.max(2,selLayer().bsize*U0())*.5,.45,1.45);G.w=G.w*.7+tw*.3;
    var ms=mirrors([p.x/W,p.y/H]);G.st.forEach(function(st,i){ms[i].push(Math.round(G.w*100)/100);st.pts.push(ms[i]);});liveStroke();return;}
  dirty();
});
function snapR(r){r=((r+180)%360+360)%360-180;for(var a=-180;a<=180;a+=45)if(Math.abs(r-a)<3)return a===-180?180:a;return Math.round(r*10)/10;}
function endPtr(e){
  delete PT[e.pointerId];if(!G)return;
  if(G.t==='pinch'&&Object.keys(PT).length===1){G={t:'none'};return;}
  if(Object.keys(PT).length)return;
  var was=G.t;G=null;S.gesture=false;S.gx=S.gy=false;
  commit();if(was!=='draw')buildProps();buildLayers();dirty();
}
['pointerup','pointercancel'].forEach(function(ev){ov.addEventListener(ev,endPtr);});
function liveStroke(){ /* počas ťahu sa kreslí len náhľad ťahu, plný reliéf sa prepočíta po pustení */
  var W=ov.width,H=ov.height,U=U0(),L=selLayer();ox.clearRect(0,0,W,H);
  var tmp={strokes:G.st};ox.save();ox.globalAlpha=L.mode==='relief'?.55:1;strokesPath(ox,tmp,W,H,U,L.mode==='relief'?'#ffffff':null);
  ox.restore();
}

/* ================= operácie s vrstvami ================= */
function fitLayer(L,mode){
  var f=fmtOf(),src=SRC[L.src];if(!src)return;var docAR=f.w/f.h,imgAR=src.width/src.height;
  L.s=mode==='cover'?Math.max(1,imgAR/docAR):Math.min(1,imgAR/docAR)*(mode==='small'?.6:1);L.x=.5;L.y=.5;L.r=0;L.fit=mode==='small'?null:mode;
}
function newImage(id){var n=D.layers.filter(function(l){return l.type==='image';}).length+1;return {id:nid(),type:'image',name:'Obrázok '+n,src:id,x:.5,y:.5,s:.6,r:0,o:100,fx:'none',p:defFx(),adj:defAdj(),hidden:false,fit:null};}
function insertLayer(L){var cur=selLayer(),i=cur?D.layers.indexOf(cur)+1:D.layers.length;
  if(L.type==='image'&&!cur){i=0;while(i<D.layers.length&&D.layers[i].type==='image')i++;} /* nová fotka ide pod texty */
  D.layers.splice(i,0,L);}
function addImageCanvas(c){
  var id=addSrc(c),smp=D.layers.filter(function(l){return l.sample;})[0],L;
  if(smp){smp.src=id;smp.sample=false;smp._c=null;smp.name='Obrázok 1';fitLayer(smp,'cover');L=smp;msg('Fotka je v obrázku. Efekt zostal, môžeš ho zmeniť vpravo.');}
  else{L=newImage(id);fitLayer(L,D.layers.some(function(l){return l.type==='image'&&!l.hidden;})?'small':'cover');insertLayer(L);msg('Pridaná nová vrstva s fotkou.');}
  select(L.id);commit();
}
function addText(){
  var L={id:nid(),type:'text',name:'Text',text:'TEXT',font:'syne',size:140,color:S.color,align:'center',style:'plain',ls:0,lh:1.05,x:.5,y:.5,r:0,o:100,hidden:false,p:Object.assign(defFx(),{mat:'below'})};
  D.layers.push(L);select(L.id);commit();
  var ta=$('#props textarea');if(ta){ta.focus();ta.select();}
}
function brushLayer(){
  var L=selLayer();
  if(S.tool==='brush'){S.tool='move';select('bg');return;}
  if(!L||L.type!=='draw'){L=null;for(var i=D.layers.length-1;i>=0;i--)if(D.layers[i].type==='draw'){L=D.layers[i];break;}}
  if(!L){var hasImg=D.layers.some(function(l){return l.type==='image'&&!l.hidden;});
    L={id:nid(),type:'draw',name:'Kresba',strokes:[],mode:'relief',liquid:70,color:S.color,bsize:30,sym:'none',o:100,hidden:false,p:Object.assign(defFx(),{mat:hasImg?'below':'steel',evol:75,eshine:80})};
    if(!hasImg&&D.bg.kind==='color'&&D.bg.color.toLowerCase()==='#ffffff')D.bg={kind:'steel'};D.layers.push(L);commit();}
  select(L.id);msg('Štetec: kresli prstom po obrázku.');
}
function select(id,keepTool){
  S.sel=id;var L=selLayer();S.tool=L&&L.type==='draw'?'brush':'move';
  buildLayers();buildProps();toolState();status();dirty();
}
function moveLayer(dir){var L=selLayer();if(!L)return;var i=D.layers.indexOf(L),j=i+dir;if(j<0||j>=D.layers.length)return;D.layers.splice(i,1);D.layers.splice(j,0,L);commit();buildLayers();dirty();}
function dupLayer(){var L=selLayer();if(!L)return;var c=JSON.parse(JSON.stringify(L,function(k,v){return k.charAt(0)==='_'?undefined:v;}));c.id=nid();c.sample=false;c.name=L.name+' (kópia)';if(c.x!=null){c.x+=.03;c.y+=.03;}D.layers.splice(D.layers.indexOf(L)+1,0,c);select(c.id);commit();}
function delLayer(){var L=selLayer();if(!L)return;D.layers.splice(D.layers.indexOf(L),1);select('bg');commit();msg('Vrstva zmazaná. Späť ju vráti.');}
function layerName(L){
  if(L.type==='text')return '„'+(String(L.text).replace(/\n/g,' ').slice(0,22)||' ')+'“'+(L.style!=='plain'?' · '+STYLEN[L.style]:'');
  if(L.type==='draw')return (L.name||'Kresba')+' · '+(L.mode==='relief'?'reliéf':'farba');
  return L.name+(L.fx!=='none'?' · '+FXN[L.fx]:'');
}

/* ================= farby ================= */
function applyColor(c){
  S.color=c;$('#curColor').style.background=c;var L=selLayer();
  if(!L){D.bg={kind:'color',color:c};}
  else if(L.type==='text'){L.color=c;if(L.style==='chrome'||L.style==='wordart'||L.style==='relief'){L.style='plain';buildProps();}}
  else if(L.type==='draw'){L.color=c;if(L.mode==='paint')L.strokes.forEach(function(st){if(st.g===S.group)st.color=c;});}
  else if(L.type==='image'){if(L.fx==='dither'||L.fx==='ascii'){L.p.pal='custom';L.p.c2=c;buildProps();}else{msg('Farba ide na text, kresbu alebo pozadie. Pre fotku zapni Dither alebo ASCII.');return;}}
  syncCells();buildLayers();commit();dirty();
}
function syncCells(){$$('#cells button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c.toLowerCase()===String(S.color).toLowerCase()?'true':'false');});}
(function(){var box=$('#cells');W98.forEach(function(c){var b=document.createElement('button');b.type='button';b.dataset.c=c;b.style.background=c;b.setAttribute('aria-label','Farba '+c);b.onclick=function(){applyColor(c);};box.appendChild(b);});
  $('#pick').addEventListener('change',function(e){applyColor(e.target.value);});})();

/* ================= panel: vrstvy ================= */
var ICO={image:'▣',text:'A',draw:'✎'};
function buildLayers(){
  var ul=$('#layers');ul.innerHTML='';
  var row=function(L,isBg){var li=document.createElement('li'),on=isBg?S.sel==='bg'||!S.sel:S.sel===L.id;li.className=on?'on':'';li.setAttribute('role','option');li.setAttribute('aria-selected',on?'true':'false');
    if(!isBg){var cb=document.createElement('input');cb.type='checkbox';cb.checked=!L.hidden;cb.title='Zobraziť';cb.onclick=function(ev){ev.stopPropagation();};cb.onchange=function(){L.hidden=!cb.checked;commit();dirty();};li.appendChild(cb);}
    else{var sp=document.createElement('span');sp.style.width='15px';li.appendChild(sp);}
    var ic=document.createElement('span');ic.className='ic';ic.textContent=isBg?'▦':ICO[L.type];li.appendChild(ic);
    var nm=document.createElement('span');nm.className='nm';nm.textContent=isBg?'Pozadie · '+BGN[D.bg.kind]:layerName(L);li.appendChild(nm);
    li.onclick=function(){select(isBg?'bg':L.id);};ul.appendChild(li);};
  for(var i=D.layers.length-1;i>=0;i--)row(D.layers[i],false);
  row(null,true);
  var L=selLayer();['#lUp','#lDown','#lDup','#lDel'].forEach(function(s){$(s).disabled=!L;});
  if(L){$('#lUp').disabled=D.layers.indexOf(L)===D.layers.length-1;$('#lDown').disabled=D.layers.indexOf(L)===0;}
}
var BGN={color:'farba',paper:'papier',steel:'oceľ',gold:'mosadz',black:'čierny lak',none:'priehľadné'};
$('#lUp').onclick=function(){moveLayer(1);};$('#lDown').onclick=function(){moveLayer(-1);};$('#lDup').onclick=dupLayer;$('#lDel').onclick=delLayer;

/* ================= panel: vlastnosti ================= */
var PROPS=$('#props'),uid=0;
function el(t,c,html){var e=document.createElement(t);if(c)e.className=c;if(html!=null)e.innerHTML=html;return e;}
function grp(title,par){var f=el('fieldset','grp');if(title)f.appendChild(el('legend','',title));(par||PROPS).appendChild(f);return f;}
function hint(par,t){par.appendChild(el('p','hint',t));}
function slider(par,label,obj,key,min,max,step,fmt,onch){
  var id='u'+(++uid),r=el('div','row'),lb=el('label','',label),o=el('output'),i=document.createElement('input');lb.htmlFor=id;
  var f=fmt||function(v){return v;};o.textContent=f(obj[key]);i.type='range';i.id=id;i.min=min;i.max=max;i.step=step;i.value=obj[key];
  i.addEventListener('input',function(){obj[key]=Number(i.value);o.textContent=f(obj[key]);if(onch)onch();dirty();});
  i.addEventListener('change',function(){commit();buildLayers();});
  r.appendChild(lb);r.appendChild(o);r.appendChild(i);par.appendChild(r);return i;
}
function chips(par,label,obj,key,opts,rebuild){
  var r=el('div','row');if(label)r.appendChild(el('span','lbl',label));var c=el('div','chips');
  opts.forEach(function(o){var b=el('button','btn',o[1]);b.type='button';b.setAttribute('aria-pressed',obj[key]===o[0]?'true':'false');
    b.onclick=function(){obj[key]=o[0];$$('button',c).forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});if(o[2])o[2]();commit();buildLayers();if(rebuild)buildProps();dirty();};c.appendChild(b);});
  r.appendChild(c);par.appendChild(r);return c;
}
function check(par,label,obj,key,rebuild){
  var id='u'+(++uid),r=el('label','chk');r.htmlFor=id;r.innerHTML='<input type="checkbox" id="'+id+'"'+(obj[key]?' checked':'')+'><span>'+label+'</span>';
  r.querySelector('input').onchange=function(e){obj[key]=e.target.checked;commit();if(rebuild)buildProps();dirty();};par.appendChild(r);
}
function btns(par,list){var c=el('div','chips');list.forEach(function(x){var b=el('button','btn',x[0]);b.type='button';b.onclick=x[1];c.appendChild(b);});par.appendChild(c);return c;}
function palChips(par,p){
  chips(par,'Paleta',p,'pal',PALS.map(function(q){var sw=q.c?'<i class="sw">'+q.c.map(function(c){return '<b style="background:'+c+'"></b>';}).join('')+'</i>':q.id==='orig'?'<i class="sw"><b style="background:linear-gradient(90deg,#f00,#0c0,#00f);width:24px"></b></i>':'<i class="sw"><b style="background:'+p.c1+'"></b><b style="background:'+p.c2+'"></b><b style="background:'+p.c3+'"></b></i>';return [q.id,sw+q.n];}),true);
  if(p.pal==='custom'){var r=el('div','colors');[['c1','pozadie'],['c2','farba'],['c3','tretia']].forEach(function(q){var l=el('label'),i=document.createElement('input');i.type='color';i.value=p[q[0]];i.oninput=function(){p[q[0]]=i.value;dirty();};i.onchange=commit;l.appendChild(i);l.appendChild(document.createTextNode(q[1]));r.appendChild(l);});par.appendChild(r);}
}
function reliefControls(par,p,below,o){
  o=o||{};var mats=o.mats||[['steel','Oceľ'],['gold','Mosadz'],['black','Čierny lak'],['paper','Biely papier']];if(below)mats=[['below','Do podkladu']].concat(mats);
  chips(par,'Materiál',p,'mat',mats);
  if(o.goo)slider(par,'Tekutosť',p,'egoo',0,100,1);
  slider(par,'Objem',p,'evol',0,100,1);
  slider(par,'Mäkkosť hrany',p,'eslope',0,100,1);
  if(below)slider(par,'Priehlbina okolo',p,'erecess',0,100,1);
  slider(par,'Lesk',p,'eshine',0,100,1);
  slider(par,'Drsnosť',p,'erough',0,100,1);
  slider(par,'Uhol svetla',p,'eangle',0,360,5,function(v){return v+'°';});
}
function sgn(v){return (v>0?'+':'')+v;}
function buildProps(){
  PROPS.innerHTML='';var L=selLayer(),g;
  $('#propsT').textContent='Vlastnosti – '+(L?(L.type==='image'?L.name:L.type==='text'?'text':'kresba'):'pozadie');
  if(!L){
    g=grp('Pozadie');
    chips(g,null,D.bg,'kind',[['color','Farba'],['paper','Papier'],['steel','Oceľ'],['gold','Mosadz'],['black','Čierny lak'],['none','Priehľadné']]);
    hint(g,'Farbu pozadia vyberieš v palete pod obrázkom. Priehľadné sa uloží ako PNG bez pozadia.');
    g=grp('Začni tu');
    btns(g,[['Tekutý text z fotky…',inkFromPhoto]]);
    hint(g,'Pridaj <b>Fotku</b>, <b>Text</b> alebo kresli <b>Štetcom</b>. Štetec kreslí tekutý kovový ťah. Na obrázku ťahaj vrstvu prstom, rohom ju zväčšíš, krúžkom otočíš. Dvoma prstami naraz zväčšíš aj otočíš.');
    return;
  }
  if(L.type==='image'){
    g=grp('Efekt');
    chips(g,null,L,'fx',[['none','Žiadny'],['ink','Tekutý',function(){if(!L.p.egoo)L.p.egoo=45;if(L.p.mat==='below')L.p.mat='steel';}],['dither','Dither'],['ascii','ASCII'],['look','Look'],['relief','Kov']],true);
    var p=L.p;
    if(L.fx==='dither'){
      chips(g,'Štýl',p,'dstyle',[['bayer4','Bayer'],['bayer8','Bayer jemný'],['fs','Floyd'],['atk','Atkinson'],['noise','Šum'],['dots','Halftone'],['wave','Vlny'],['lines','Riadky'],['pixel','Pixel']],true);
      slider(g,'Veľkosť bodu',p,'dscale',1,16,1);
      slider(g,'Svetlo',p,'dthr',-60,60,1,sgn);
      if(p.dstyle==='wave')slider(g,'Hustota vĺn',p,'dden',1,40,1);
      palChips(g,p);
    }else if(L.fx==='ascii'){
      chips(g,'Znaky',p,'aset',[['min','Minimál'],['full','Hustý'],['blocks','Bloky'],['hearts','Srdiečka'],['bin','Binárne'],['text','Vlastný text']],true);
      if(p.aset==='text'){var ti=document.createElement('input');ti.type='text';ti.maxLength=60;ti.value=p.atext;ti.placeholder='Text, z ktorého bude obrázok';ti.oninput=function(){p.atext=ti.value;dirty();};ti.onchange=commit;var rr=el('div','row');rr.appendChild(ti);g.appendChild(rr);}
      slider(g,'Hustota znakov',p,'acols',20,180,2);
      slider(g,'Hĺbka',p,'athr',-60,60,1,sgn);
      chips(g,'Písmo znakov',p,'afont',[['mono','Mono'],['serif','Serif'],['gothic','Gotika']]);
      chips(g,'Farba znakov',p,'aink',[['pal','Z palety'],['color','Pôvodné farby']],true);
      if(p.aink==='pal')palChips(g,p);
      check(g,'Priehľadné pozadie (znaky cez vrstvu pod tým)',p,'atrans');
    }else if(L.fx==='look'){
      chips(g,'Nálada',p,'lvar',[['warm','Teplá dráma'],['cold','Nočná modrá'],['bw','Čiernobiely film'],['vhs','VHS 2000s'],['poster','Jesenný plagát']]);
      slider(g,'Sila',p,'lamt',0,100,1);
      slider(g,'Zrno',p,'lgrain',0,100,1);
    }else if(L.fx==='relief'){
      hint(g,'Svetlé miesta fotky vystúpia z kovovej platne.');
      reliefControls(g,p,false);
    }else if(L.fx==='ink'){
      hint(g,'Daj sem fotku s textom, napríklad svoj post: biele pozadie a čierne písmo. Písmo sa zmení na tekutý reliéf.');
      slider(g,'Citlivosť na písmo',p,'ithr',5,95,1);
      slider(g,'Hrúbka písma',p,'ibold',-60,100,1,sgn);
      slider(g,'Kvapky a stekanie',p,'idrip',0,100,1);
      check(g,'Svetlé písmo na tmavom pozadí',p,'iinv');
      reliefControls(g,p,false,{goo:true,mats:[['steel','Oceľ'],['gold','Mosadz'],['black','Čierny lak'],['paper','Biely papier'],['self','Pôvodné farby']]});
    }else hint(g,'Vyber efekt. Každá fotka môže mať iný a môžeš ich vrstviť cez seba. Fotku s textom zmeníš na tekutý reliéf efektom Tekutý.');
    g=grp('Poloha');
    slider(g,'Veľkosť',L,'s',.05,4,.01,function(v){return Math.round(v*100)+' %';},function(){L.fit=null;});
    slider(g,'Otočenie',L,'r',-180,180,1,function(v){return Math.round(v)+'°';});
    slider(g,'Priehľadnosť',L,'o',0,100,1,function(v){return v+' %';});
    btns(g,[['Vyplniť',function(){fitLayer(L,'cover');commit();buildProps();dirty();}],['Celá',function(){fitLayer(L,'contain');commit();buildProps();dirty();}],['Na stred',function(){L.x=.5;L.y=.5;commit();dirty();}],['Vymeniť fotku',function(){S.replace=L.id;$('#file').click();}]]);
    var det=el('details');det.appendChild(el('summary','','Úpravy fotky (jas, kontrast…)'));g=grp(null,det);var a=L.adj;
    check(g,'Auto svetlo – vytiahne tmavé fotky',a,'auto');
    slider(g,'Jas',a,'bri',-100,100,1,sgn);slider(g,'Kontrast',a,'con',-100,100,1,sgn);slider(g,'Sýtosť',a,'sat',-100,100,1,sgn);slider(g,'Rozmazanie',a,'blur',0,20,1);
    check(g,'Negatív',a,'inv');
    btns(g,[['Vrátiť úpravy',function(){L.adj=defAdj();commit();buildProps();dirty();}]]);
    PROPS.appendChild(det);
  }else if(L.type==='text'){
    g=grp('Text');
    var ta=document.createElement('textarea');ta.rows=2;ta.value=L.text;ta.setAttribute('aria-label','Text');
    ta.oninput=function(){L.text=ta.value;dirty();buildLayers();};ta.onchange=commit;var r0=el('div','row');r0.appendChild(ta);g.appendChild(r0);
    hint(g,'Farbu textu vyber v palete pod obrázkom.');
    g=grp('Písmo');var fz=el('div','fonts');fz.id='fontsGrid';
    FONTS.forEach(function(f){var b=el('button','btn','<span style="font-family:'+f.fam.replace(/"/g,'&quot;')+',sans-serif;font-weight:'+f.w+'">Aa Ďž</span><small>'+f.n+'</small>');b.type='button';b.setAttribute('aria-pressed',L.font===f.id?'true':'false');
      b.onclick=function(){L.font=f.id;ensureFont(f);$$('button',fz).forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});commit();dirty();};fz.appendChild(b);});
    var rf=el('div','row');rf.appendChild(fz);g.appendChild(rf);
    slider(g,'Veľkosť',L,'size',8,700,1);
    slider(g,'Rozostup písmen',L,'ls',-20,100,1);
    if(String(L.text).indexOf('\n')>=0)slider(g,'Riadkovanie',L,'lh',.6,2,.05,function(v){return v.toFixed(2);});
    chips(g,'Zarovnanie',L,'align',[['left','Vľavo'],['center','Na stred'],['right','Vpravo']]);
    g=grp('Štýl');
    chips(g,null,L,'style',[['plain','Čistý'],['shadow','Tieň'],['outline','Obrys'],['chrome','Chróm'],['wordart','WordArt'],['relief','Reliéf']],true);
    if(L.style==='relief'){hint(g,'Text sa vylisuje do toho, čo je pod ním, alebo do kovu. Tekutosť zleje písmená ako kvapky.');reliefControls(g,L.p,true,{goo:true});}
    g=grp('Poloha');
    slider(g,'Otočenie',L,'r',-180,180,1,function(v){return Math.round(v)+'°';});
    slider(g,'Priehľadnosť',L,'o',0,100,1,function(v){return v+' %';});
    btns(g,[['Na stred',function(){L.x=.5;L.y=.5;commit();dirty();}],['Hore',function(){L.x=.5;L.y=.12;commit();dirty();}],['Dole',function(){L.x=.5;L.y=.88;commit();dirty();}]]);
  }else{
    g=grp('Štetec');
    hint(g,'Kresli prstom priamo po obrázku. Kým je vybratá táto vrstva, štetec kreslí.');
    chips(g,'Druh',L,'mode',[['relief','Reliéf'],['paint','Farba']],true);
    slider(g,'Hrúbka',L,'bsize',2,200,1);
    if(L.liquid==null)L.liquid=0;
    slider(g,'Tekutosť (kvapky, stekanie)',L,'liquid',0,100,1);
    chips(g,'Symetria',L,'sym',[['none','Žiadna'],['v','Zvislá'],['h','Vodorovná'],['vh','Obe osi']]);
    btns(g,[['Späť ťah',function(){var mg=-1;L.strokes.forEach(function(s){mg=Math.max(mg,s.g||0);});L.strokes=L.strokes.filter(function(s){return (s.g||0)!==mg;});commit();dirty();}],['Vymazať kresbu',function(){L.strokes=[];commit();dirty();}]]);
    if(L.mode==='relief'){g=grp('Reliéf');reliefControls(g,L.p,true);}
    else hint(g,'Farbu štetca vyber v palete pod obrázkom.');
    slider(g,'Priehľadnosť',L,'o',0,100,1,function(v){return v+' %';});
  }
}
function buildFontsPreview(){} /* fonty v tlačidlách sa načítajú cez CSS samé */

/* ================= formáty ================= */
function buildFormats(){
  var box=$('#formats');box.innerHTML='';
  FORMATS.forEach(function(f){var b=el('button','fmt'),k=22/Math.max(f.w,f.h);b.type='button';b.setAttribute('role','radio');b.setAttribute('aria-checked',f.id===D.fmt?'true':'false');
    b.innerHTML='<i style="width:'+Math.round(f.w*k)+'px;height:'+Math.round(f.h*k)+'px"></i><span><b>'+f.n+'</b><small>'+f.d+'</small></span>';
    b.onclick=function(){setFormat(f.id);};box.appendChild(b);});
}
function setFormat(id){
  D.fmt=id;D.layers.forEach(function(L){if(L.type==='image'&&L.fit)fitLayer(L,L.fit);});
  savePrefs();commit();buildFormats();buildProps();status();dirty();
  var f=fmtOf();msg('Formát '+f.n+' · '+f.d+' · '+f.w+' × '+f.h+' px');
}

/* ================= nástroje ================= */
function toolState(){$('#tBrush').setAttribute('aria-pressed',S.tool==='brush'?'true':'false');paperEl.classList.toggle('brush',S.tool==='brush');}
function status(){
  var f=fmtOf(),L=selLayer();
  $('#st1').textContent=S.tool==='brush'?'Kresli prstom po obrázku. Štetec vypneš tlačidlom Štetec.':L?'Ťahaj vrstvu. Roh zväčší, krúžok otočí, dva prsty oboje.':'Pre Pomoc kliknite na Pomoc > O programe.';
  $('#st2').textContent=f.w+' × '+f.h+' px';
}
$('#tText').onclick=addText;
$('#tBrush').onclick=brushLayer;
$('#tUndo').onclick=undo;
$('#tSave').onclick=function(){save();};
$('#tRnd').onclick=function(){
  var L=selLayer();
  if(!L){D.bg=pick([{kind:'color',color:pick(W98)},{kind:'paper'},{kind:'steel'},{kind:'gold'},{kind:'black'}]);}
  else if(L.type==='image'){var p=L.p;L.fx=pick(['dither','dither','ascii','look','relief']);
    if(L.fx==='dither'){p.dstyle=pick(['bayer4','bayer8','fs','atk','noise','dots','wave','lines','pixel']);p.dscale=ri(2,10);p.dthr=ri(-25,25);p.dden=ri(4,30);p.pal=pick(PALS.filter(function(q){return q.id!=='custom';})).id;}
    else if(L.fx==='ascii'){p.aset=pick(['min','full','blocks','hearts','bin']);p.acols=ri(40,130);p.athr=ri(-20,20);p.afont=pick(['mono','serif','gothic']);p.aink=pick(['pal','color']);p.pal=pick(PALS.filter(function(q){return q.c;})).id;}
    else if(L.fx==='look'){p.lvar=pick(['warm','cold','bw','vhs','poster']);p.lamt=ri(40,100);p.lgrain=ri(0,80);}
    else{p.mat=pick(['steel','gold','black']);p.evol=ri(35,100);p.eslope=ri(10,80);p.eshine=ri(30,100);p.eangle=ri(0,71)*5;}}
  else if(L.type==='text'){L.font=pick(FONTS).id;L.style=pick(['plain','shadow','outline','chrome','wordart','relief']);L.color=pick(W98);L.p.mat=pick(['below','steel','gold']);}
  else{L.p.evol=ri(30,100);L.p.eslope=ri(10,80);L.p.erecess=ri(0,100);L.p.eshine=ri(30,100);L.p.eangle=ri(0,71)*5;}
  commit();buildProps();buildLayers();dirty();msg('Náhodná kombinácia. Nepáči sa? Klikni znova alebo Späť.');
};

/* fotky: tlačidlo, vloženie zo schránky, potiahnutie */
function loadFile(f,cb){
  if(!f||!/^image\//.test(f.type)){msg('Toto nie je obrázok.');return;}
  var url=URL.createObjectURL(f),img=new Image();
  img.onload=function(){var sz=fitSize(img.naturalWidth,img.naturalHeight,MAXSRC),c=mk(sz[0],sz[1]);c.getContext('2d').drawImage(img,0,0,sz[0],sz[1]);URL.revokeObjectURL(url);cb(c);};
  img.onerror=function(){URL.revokeObjectURL(url);msg('Tento obrázok sa nepodarilo otvoriť. Skús JPG alebo PNG.');};img.src=url;
}
function takeFiles(list){
  Array.prototype.slice.call(list||[]).filter(function(f){return /^image\//.test(f.type);}).slice(0,6).forEach(function(f){
    loadFile(f,function(c){
      if(S.replace){var L=byId(S.replace);S.replace=null;if(L){L.src=addSrc(c);L._c=null;L.sample=false;if(L.fit)fitLayer(L,L.fit);commit();buildProps();dirty();msg('Fotka vymenená.');return;}}
      addImageCanvas(c);
      if(S.inkNext){S.inkNext=false;var L=selLayer();if(L&&L.type==='image'){L.fx='ink';L.p.egoo=45;L.p.mat='steel';L.p.evol=75;L.p.eshine=80;commit();buildProps();buildLayers();dirty();msg('Text z fotky je teraz tekutý. Uprav citlivosť, hrúbku a tekutosť.');}}});});
}
$('#file').addEventListener('change',function(e){takeFiles(e.target.files);e.target.value='';});
document.addEventListener('paste',function(e){var it=e.clipboardData&&e.clipboardData.files;if(it&&it.length){e.preventDefault();takeFiles(it);}});
document.addEventListener('dragover',function(e){e.preventDefault();});
document.addEventListener('drop',function(e){e.preventDefault();takeFiles(e.dataTransfer&&e.dataTransfer.files);});

/* ================= uloženie ================= */
var lastBlob=null,lastUrl=null;
function save(type){
  closeMenu();document.body.classList.add('wait');msg('Ukladám v plnom rozlíšení…');
  setTimeout(function(){
    var f=fmtOf(),C;
    try{C=renderDoc(f.w,f.h,false);}catch(e){document.body.classList.remove('wait');msg('Uloženie zlyhalo: '+e.message);return;}
    var jpg=type==='jpg';
    if(jpg){var J=mk(f.w,f.h),jg=J.getContext('2d');jg.fillStyle='#fff';jg.fillRect(0,0,f.w,f.h);jg.drawImage(C,0,0);C=J;}
    C.toBlob(function(b){
      document.body.classList.remove('wait');status();if(!b){msg('Uloženie zlyhalo.');return;}
      lastBlob=b;if(lastUrl)URL.revokeObjectURL(lastUrl);lastUrl=URL.createObjectURL(b);
      var name='editoval-'+f.n.replace(':','x')+'-'+Date.now()+(jpg?'.jpg':'.png');
      dialog('Uložiť ako',
        '<img class="res" src="'+lastUrl+'" alt="Hotový obrázok"><p><b>'+name+'</b></p><p>'+f.w+' × '+f.h+' px · '+(jpg?'JPG':'PNG')+' · '+Math.round(b.size/1024)+' kB</p><p class="hint">Na iPhone: podrž obrázok → Uložiť do Fotiek, alebo stlač Uložiť.</p>',
        [[jpg?'Uložiť ako PNG':'Menší JPG',function(){save(jpg?'png':'jpg');}],['Zavrieť',closeDlg],['Uložiť',function(){share(b,name);},true]]);
    },jpg?'image/jpeg':'image/png',.92);
  },40);
}
function share(b,name){
  var file;try{file=new File([b],name,{type:b.type});}catch(e){}
  if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:'si/editoval'}).catch(function(){});return;}
  var a=document.createElement('a');a.href=lastUrl;a.download=name;document.body.appendChild(a);a.click();a.remove();
}

/* ================= dialógy a menu ================= */
var modal=$('#modal');
function dialog(title,html,acts){
  $('#dlgT').textContent=title;$('#dlgB').innerHTML=html;var A=$('#dlgA');A.innerHTML='';
  (acts||[['OK',closeDlg,true]]).forEach(function(x){var b=el('button','btn'+(x[2]?' pri':''),x[0]);b.type='button';b.onclick=x[1];A.appendChild(b);});
  modal.hidden=false;var pri=A.querySelector('.pri');if(pri)pri.focus();
}
function closeDlg(){modal.hidden=true;}
$('#dlgX').onclick=closeDlg;
modal.addEventListener('click',function(e){if(e.target===modal)closeDlg();});

var MENUS={
  file:function(){return [['Nový obrázok',newDoc],['Otvoriť fotku…',function(){$('#file').click();}],['Tekutý text z fotky…',inkFromPhoto],'-',['Uložiť ako PNG',function(){save('png');},'Ctrl+S'],['Uložiť ako JPG',function(){save('jpg');}]];},
  edit:function(){return [['Späť',undo,'Ctrl+Z'],['Znova',redo,'Ctrl+Y'],'-',['Pridať text',addText],['Duplikovať vrstvu',dupLayer],['Zmazať vrstvu',delLayer,'Del']];},
  img:function(){return FORMATS.map(function(f){return [f.n+' – '+f.d,function(){setFormat(f.id);},f.w+'×'+f.h,f.id===D.fmt];}).concat(['-',['Vycentrovať vrstvu',function(){var L=selLayer();if(L&&L.x!=null){L.x=.5;L.y=.5;commit();dirty();}}]]);},
  help:function(){return [['Ako na to',help],['O programe si/editoval',about]];}
};
var menu=$('#menu'),menuBtn=null;
function openMenu(btn){
  closeMenu();menuBtn=btn;btn.setAttribute('aria-expanded','true');menu.innerHTML='';
  MENUS[btn.dataset.menu]().forEach(function(it){if(it==='-'){menu.appendChild(el('hr'));return;}
    var b=el('button','','<span>'+it[0]+'</span>'+(it[2]?'<kbd>'+it[2]+'</kbd>':''));b.type='button';b.setAttribute('role','menuitem');if(it[3])b.setAttribute('aria-checked','true');
    b.onclick=function(){closeMenu();it[1]();};menu.appendChild(b);});
  var r=btn.getBoundingClientRect();menu.style.left=Math.min(r.left,innerWidth-240)+'px';menu.style.top=r.bottom+'px';menu.hidden=false;
}
function closeMenu(){menu.hidden=true;if(menuBtn)menuBtn.setAttribute('aria-expanded','false');menuBtn=null;}
$$('#menubar button').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();if(menuBtn===b)closeMenu();else openMenu(b);});});
document.addEventListener('click',function(e){if(!menu.hidden&&!menu.contains(e.target))closeMenu();});
function about(){dialog('O programe si/editoval',$('#about .abody').outerHTML,[['OK',closeDlg,true]]);}
function help(){dialog('Ako na to','<p><b>1.</b> Hore vyber formát (4:5 post, 9:16 story…).</p><p><b>2.</b> <b>Fotka</b> pridá obrázok ako novú vrstvu. Prvá fotka nahradí ukážku.</p><p><b>3.</b> Vpravo (na mobile nižšie) vyber efekt: Dither, ASCII, Look alebo Kov.</p><p><b>4.</b> <b>Text</b> pridá nápis. Vyber písmo a štýl, farbu klikni v palete.</p><p><b>5.</b> <b>Štetec</b> kreslí tekutý ťah: pomaly = hrubšie, robí kvapky a stekanie. Tekutosť nastavíš posuvníkom.</p><p><b>Tip:</b> Súbor → Tekutý text z fotky. Daj tam svoj post s bielym pozadím a textom a písmo sa zmení na tekutý kov.</p><p><b>6.</b> Vrstvy ťahaj prstom, roh zväčšuje, krúžok otáča. Poradie meníš v okne Vrstvy.</p><p><b>7.</b> Disketa = Uložiť.</p>');}
function inkFromPhoto(){S.inkNext=true;$('#file').click();}
function newDoc(){D.layers=[];D.bg={kind:'color',color:'#ffffff'};S.sel='bg';commit();refreshAll();msg('Nový prázdny obrázok. Pridaj fotku alebo text.');}

/* klávesy */
document.addEventListener('keydown',function(e){
  var t=e.target,typing=t&&(t.tagName==='INPUT'&&t.type==='text'||t.tagName==='TEXTAREA');
  var mod=e.ctrlKey||e.metaKey;
  if(e.key==='Escape'){closeMenu();closeDlg();return;}
  if(typing)return;
  if(mod&&e.key.toLowerCase()==='z'){e.preventDefault();if(e.shiftKey)redo();else undo();return;}
  if(mod&&e.key.toLowerCase()==='y'){e.preventDefault();redo();return;}
  if(mod&&e.key.toLowerCase()==='s'){e.preventDefault();save('png');return;}
  var L=selLayer();if(!L)return;
  if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();delLayer();return;}
  if(L.x!=null&&/^Arrow/.test(e.key)){e.preventDefault();var st=e.shiftKey?.02:.002;if(e.key==='ArrowLeft')L.x-=st;if(e.key==='ArrowRight')L.x+=st;if(e.key==='ArrowUp')L.y-=st;if(e.key==='ArrowDown')L.y+=st;dirty();clearTimeout(L._kt);L._kt=setTimeout(commit,400);}
});

/* ================= ukážka na štart ================= */
function sample(){
  var w=1080,h=1350,c=mk(w,h),g=c.getContext('2d');
  var bg=g.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#1a1c2c');bg.addColorStop(.6,'#3b2f4a');bg.addColorStop(1,'#0c0a0e');g.fillStyle=bg;g.fillRect(0,0,w,h);
  var sun=g.createRadialGradient(700,470,30,700,470,400);sun.addColorStop(0,'#ffd9a0');sun.addColorStop(.35,'#ff8c5a');sun.addColorStop(1,'rgba(255,100,80,0)');g.fillStyle=sun;g.fillRect(0,0,w,h);
  g.fillStyle='#ffe6b8';g.beginPath();g.arc(700,470,180,0,7);g.fill();
  for(var i=0;i<7;i++){g.fillStyle='rgba(50,40,70,'+(.25+i*.1)+')';g.fillRect(0,470+i*24+(i%2)*8,w,15);}
  g.fillStyle='#120f16';g.beginPath();g.moveTo(0,930);g.lineTo(180,780);g.lineTo(330,870);g.lineTo(495,705);g.lineTo(645,840);g.lineTo(840,750);g.lineTo(1080,900);g.lineTo(1080,h);g.lineTo(0,h);g.fill();
  var sph=g.createRadialGradient(375,1050,15,435,1095,225);sph.addColorStop(0,'#fff6e8');sph.addColorStop(.5,'#9a8bb0');sph.addColorStop(1,'#19141f');g.fillStyle=sph;g.beginPath();g.arc(435,1095,210,0,7);g.fill();
  return c;
}
function startDoc(){
  var sid=addSrc(sample());
  var img=newImage(sid);img.name='Ukážka';img.sample=true;img.fx='dither';img.p.dstyle='dots';img.p.pal='night';img.p.dscale=5;fitLayer(img,'cover');
  var t1={id:nid(),type:'text',name:'Text',text:'si/editoval.',font:'syne',size:120,color:'#ffffff',align:'center',style:'shadow',ls:0,lh:1.05,x:.5,y:.13,r:0,o:100,hidden:false,p:Object.assign(defFx(),{mat:'below'})};
  var t2={id:nid(),type:'text',name:'Text',text:'nahraj fotku ↓ a hraj sa',font:'vt323',size:64,color:'#ffffff',align:'center',style:'plain',ls:2,lh:1.05,x:.5,y:.9,r:0,o:100,hidden:false,p:Object.assign(defFx(),{mat:'below'})};
  D.layers=[img,t1,t2];S.sel=img.id;
}
function refreshAll(){buildFormats();buildLayers();buildProps();toolState();status();dirty();}

startDoc();lastSnap=snap();
$('#curColor').style.background=S.color;syncCells();
refreshAll();
window.addEventListener('resize',function(){dirty();});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){dirty();});
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(function(){});
window.__editoval={D:function(){return D;},S:S,save:save,select:select}; /* na testovanie */
})();
