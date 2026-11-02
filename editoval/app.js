/* si/editoval — fotoeditor na hranie. Všetko beží v prehliadači, nič sa nikam neposiela.
   Štyri nástroje: Dither (bodky, vlny, riadky), ASCII (znaky, vlastný text), Reliéf (kovový štetec), Look (film, VHS, plagát). */
(function(){
'use strict';
var $=function(s){return document.querySelector(s);};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s));};
var cv=$('#cv'),cx=cv.getContext('2d',{alpha:true}),dl=$('#draw'),dlx=dl.getContext('2d');
var PREVIEW=820,EXPORT=2000;

/* ================= palety ================= */
var PALS=[
  {id:'phos',n:'Fosfor',c:['#061207','#7dff9c']},
  {id:'amber',n:'Jantár',c:['#120a02','#ffab5c']},
  {id:'night',n:'Fialová noc',c:['#060709','#4a2a9a','#c56cff','#ff3b5c']},
  {id:'cream',n:'Krém',c:['#efe6cf','#15120e']},
  {id:'autumn',n:'Jeseň',c:['#2a1c08','#6b5316','#b8321a']},
  {id:'bw',n:'Čiernobiela',c:['#000000','#ffffff']},
  {id:'gameboy',n:'Game Boy',c:['#0f380f','#306230','#8bac0f','#9bbc0f']},
  {id:'cga',n:'CGA',c:['#000000','#55ffff','#ff55ff','#ffffff']},
  {id:'punch',n:'Punch',c:['#0b0b0b','#f1484e','#0ca9ed','#07f089','#e9ca0c','#7023d8']},
  {id:'orig',n:'Pôvodné farby',c:null},
  {id:'custom',n:'Vlastná',c:null}
];
var SETS={min:' .:-=+*#%@',full:' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',blocks:' ░▒▓█',hearts:' .·♡♥',bin:'01'};
var FONTS={mono:'"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace',serif:'Georgia,"Times New Roman",serif',gothic:'"UnifrakturMaguntia",Georgia,serif'};

/* ================= nastavenia ================= */
var DEF={mode:'dither',
  dstyle:'bayer4',dscale:4,dthr:0,dden:12,pal:'phos',c1:'#0b0b0b',c2:'#ff5a47',c3:'#7dff9c',
  aset:'min',atext:'EDITOVAL ',acols:80,athr:0,afont:'mono',aink:'pal',atrans:false,
  ebg:'steel',ebrush:18,evol:70,eslope:35,erecess:60,erough:10,eshine:65,eangle:300,esym:'none',eonly:false,
  lvar:'warm',lamt:70,lgrain:35,ltext:'A LONG, LONG TIME AGO',
  auto:false,bri:0,con:0,sat:0,blur:0,inv:false};
var CHOICES={mode:['dither','ascii','emboss','look'],dstyle:['bayer4','bayer8','fs','atk','noise','dots','wave','lines','pixel'],pal:PALS.map(function(p){return p.id;}),
  aset:['min','full','blocks','hearts','bin','text'],afont:['mono','serif','gothic'],aink:['pal','color'],ebg:['steel','gold','black','photo'],esym:['none','v','h','vh'],lvar:['warm','cold','bw','vhs','poster']};
var NUMS=['dscale','dthr','dden','acols','athr','ebrush','evol','eslope','erecess','erough','eshine','eangle','lamt','lgrain','bri','con','sat','blur'];
var P=Object.assign({},DEF);
try{var sv=JSON.parse(localStorage.getItem('editoval1')||'null');if(sv&&typeof sv==='object')P=Object.assign(P,sv);}catch(e){}
Object.keys(CHOICES).forEach(function(k){if(CHOICES[k].indexOf(P[k])<0)P[k]=DEF[k];});
NUMS.forEach(function(k){P[k]=Number(P[k]);if(!isFinite(P[k]))P[k]=DEF[k];});
function saveP(){try{localStorage.setItem('editoval1',JSON.stringify(P));}catch(e){}}

var S={kind:'sample',src:null,w:720,h:900,strokes:[],busy:false,dirty:true,baseKey:'',base:null};

/* ================= pomôcky ================= */
function clamp(v,a,b){return v<a?a:v>b?b:v;}
function mk(w,h){var c=document.createElement('canvas');c.width=Math.max(1,w|0);c.height=Math.max(1,h|0);return c;}
function hex(h){h=h.replace('#','');if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16);return [(n>>16)&255,(n>>8)&255,n&255];}
function lum(c){return (c[0]*.2126+c[1]*.7152+c[2]*.0722);}
function rgb(c){return 'rgb('+c[0]+','+c[1]+','+c[2]+')';}
var msgT=0;
function msg(t,err){var m=$('#msg');m.textContent=t||'';m.classList.toggle('err',!!err);clearTimeout(msgT);if(t)msgT=setTimeout(function(){m.textContent='';},6000);}
function fitSize(w,h,long){var s=Math.min(1,long/Math.max(w,h));return [Math.max(2,Math.round(w*s)),Math.max(2,Math.round(h*s))];}
var hashSeed=1;function rnd(){hashSeed=(hashSeed*1664525+1013904223)>>>0;return hashSeed/4294967296;}
function boxBlur(src,w,h,r,out){ /* dva prechody, plávajúca čiarka */
  if(r<1){out.set(src);return out;}
  var tmp=new Float32Array(w*h),x,y,i,s,n=2*r+1;
  for(y=0;y<h;y++){var o=y*w;s=0;for(x=-r;x<=r;x++)s+=src[o+clamp(x,0,w-1)];for(x=0;x<w;x++){tmp[o+x]=s/n;s+=src[o+clamp(x+r+1,0,w-1)]-src[o+clamp(x-r,0,w-1)];}}
  for(x=0;x<w;x++){s=0;for(y=-r;y<=r;y++)s+=tmp[clamp(y,0,h-1)*w+x];for(y=0;y<h;y++){out[y*w+x]=s/n;s+=tmp[clamp(y+r+1,0,h-1)*w+x]-tmp[clamp(y-r,0,h-1)*w+x];}}
  return out;
}
function palette(){
  var p=PALS.filter(function(q){return q.id===P.pal;})[0]||PALS[0],cols;
  if(p.id==='custom')cols=[P.c1,P.c2,P.c3].map(hex);
  else if(p.id==='orig')return null;
  else cols=p.c.map(hex);
  return cols;
}

/* ================= ukážkový obrázok ================= */
function sample(){
  var w=720,h=900,c=mk(w,h),g=c.getContext('2d');
  var bg=g.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#1a1c2c');bg.addColorStop(.6,'#3b2f4a');bg.addColorStop(1,'#0c0a0e');g.fillStyle=bg;g.fillRect(0,0,w,h);
  var sun=g.createRadialGradient(470,300,20,470,300,260);sun.addColorStop(0,'#ffd9a0');sun.addColorStop(.35,'#ff8c5a');sun.addColorStop(1,'rgba(255,100,80,0)');g.fillStyle=sun;g.fillRect(0,0,w,h);
  g.fillStyle='#ffe6b8';g.beginPath();g.arc(470,300,120,0,7);g.fill();
  for(var i=0;i<7;i++){g.fillStyle='rgba(50,40,70,'+(.25+i*.1)+')';g.fillRect(0,300+i*16+(i%2)*5,w,10);}
  g.fillStyle='#120f16';g.beginPath();g.moveTo(0,620);g.lineTo(120,520);g.lineTo(220,580);g.lineTo(330,470);g.lineTo(430,560);g.lineTo(560,500);g.lineTo(720,600);g.lineTo(720,h);g.lineTo(0,h);g.fill();
  var sph=g.createRadialGradient(250,700,10,290,730,150);sph.addColorStop(0,'#fff6e8');sph.addColorStop(.5,'#9a8bb0');sph.addColorStop(1,'#19141f');g.fillStyle=sph;g.beginPath();g.arc(290,730,140,0,7);g.fill();
  g.font='800 118px Syne,"Arial Black",sans-serif';g.textAlign='center';g.textBaseline='middle';
  var tg=g.createLinearGradient(0,80,0,200);tg.addColorStop(0,'#fff');tg.addColorStop(1,'#8d7fb0');g.fillStyle=tg;g.fillText('EDITOVAL',360,140);
  g.font='700 34px "JetBrains Mono",monospace';g.fillStyle='#ffd9a0';g.fillText('nahraj svoju fotku',360,230);
  return c;
}

/* ================= zdroj + úpravy ================= */
function setSource(el,w,h,kind){S.src=el;S.w=w;S.h=h;S.kind=kind;S.baseKey='';S.dirty=true;$('#pill').textContent=kind==='sample'?'UKÁŽKA':Math.round(w)+'×'+Math.round(h);render();}
function base(long){ /* zdroj zmenšený na long + jas/kontrast/sýtosť/blur/invert/auto */
  var sz=fitSize(S.w,S.h,long),key=[sz[0],sz[1],P.auto,P.bri,P.con,P.sat,P.blur,P.inv,S.kind,S.w].join('|');
  if(S.baseKey===key&&S.base)return S.base;
  var c=mk(sz[0],sz[1]),g=c.getContext('2d',{willReadFrequently:true}),w=c.width,h=c.height;
  g.drawImage(S.src,0,0,w,h);
  var im=g.getImageData(0,0,w,h),d=im.data,i,lut=new Uint8ClampedArray(256);
  var lo=0,hi=255,gam=1;
  if(P.auto){var hist=new Uint32Array(256),tot=0,sum=0;for(i=0;i<d.length;i+=16){hist[(d[i]*.299+d[i+1]*.587+d[i+2]*.114)|0]++;tot++;}
    var acc=0,fl=false,fh=false;for(i=0;i<256;i++){acc+=hist[i];sum+=hist[i]*i;if(!fl&&acc>=tot*.02){lo=i;fl=true;}if(!fh&&acc>=tot*.995){hi=i;fh=true;}}
    if(hi-lo<40)hi=Math.min(255,lo+40);var m=clamp((sum/Math.max(1,tot)-lo)/(hi-lo),.03,.97);gam=clamp(Math.log(.42)/Math.log(m),.55,1.2);}
  var con=P.con/100,bri=P.bri/100,k=con>=0?1+con*2.2:1+con;
  for(i=0;i<256;i++){var v=Math.pow(clamp((i-lo)/(hi-lo),0,1),gam);v=(v-.5)*k+.5+bri*.6;lut[i]=clamp(v,0,1)*255;}
  var sat=1+P.sat/100*(P.sat>0?1.5:1);
  for(i=0;i<d.length;i+=4){var r=lut[d[i]],gg=lut[d[i+1]],b=lut[d[i+2]];
    if(sat!==1){var l=r*.2126+gg*.7152+b*.0722;r=l+(r-l)*sat;gg=l+(gg-l)*sat;b=l+(b-l)*sat;}
    if(P.inv){r=255-r;gg=255-gg;b=255-b;}
    d[i]=r;d[i+1]=gg;d[i+2]=b;d[i+3]=255;}
  if(P.blur>0){var rad=Math.round(P.blur*w/800),ch,n=w*h,f=new Float32Array(n),o=new Float32Array(n);
    if(rad>=1)for(ch=0;ch<3;ch++){for(i=0;i<n;i++)f[i]=d[i*4+ch];boxBlur(f,w,h,rad,o);boxBlur(o,w,h,rad,f);for(i=0;i<n;i++)d[i*4+ch]=f[i];}}
  g.putImageData(im,0,0);
  S.base=c;S.baseKey=key;return c;
}

/* ================= DITHER ================= */
var BAYER4=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],BAYER8=[];
(function(){for(var y=0;y<8;y++)for(var x=0;x<8;x++){var v=0,m=0,xc=x^y,yc=y;for(var b=0;b<3;b++){v|=((yc>>b)&1)<<(5-2*b);v|=((xc>>b)&1)<<(4-2*b);}BAYER8.push(v);}})();
function nearest(cols,r,g,b){var bi=0,bd=1e9;for(var i=0;i<cols.length;i++){var c=cols[i],d=(c[0]-r)*(c[0]-r)+(c[1]-g)*(c[1]-g)*1.4+(c[2]-b)*(c[2]-b);if(d<bd){bd=d;bi=i;}}return cols[bi];}
function renderDither(long){
  var src=base(long),W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d');
  var cols=palette(),st=P.dstyle,s=Math.max(1,Math.round(P.dscale*W/800)),thr=P.dthr*1.6;
  var isVec=st==='dots'||st==='wave'||st==='lines';
  var paper=cols?cols[0]:[0,0,0],ink=cols?cols[cols.length-1]:[255,255,255],dark=lum(paper)<lum(ink);
  if(!cols){paper=[8,8,8];ink=[255,255,255];dark=true;}
  if(isVec){
    var cell=s+3,cw=Math.ceil(W/cell),ch=Math.ceil(H/cell),sm=mk(cw,ch),sg=sm.getContext('2d',{willReadFrequently:true});
    sg.drawImage(src,0,0,cw,ch);var d=sg.getImageData(0,0,cw,ch).data;
    o.fillStyle=rgb(paper);o.fillRect(0,0,W,H);
    var x,y,i,l,amt,c;
    function inkFor(i){if(cols&&cols.length>2)return rgb(nearest(cols.slice(1),d[i],d[i+1],d[i+2]));return cols?rgb(ink):rgb([d[i],d[i+1],d[i+2]]);}
    if(st==='dots'){
      for(y=0;y<ch;y++)for(x=0;x<cw;x++){i=(y*cw+x)*4;l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722+thr)/255,0,1);amt=dark?l:1-l;
        var r=Math.sqrt(amt)*cell*.62;if(r<.3)continue;o.fillStyle=inkFor(i);o.beginPath();o.arc(x*cell+cell/2+(y%2)*cell*.25,y*cell+cell/2,r,0,7);o.fill();}
    }else if(st==='lines'){
      for(y=0;y<ch;y++)for(x=0;x<cw;x++){i=(y*cw+x)*4;l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722+thr)/255,0,1);amt=dark?l:1-l;
        var th=amt*cell*.95;if(th<.4)continue;o.fillStyle=inkFor(i);o.fillRect(x*cell,y*cell+(cell-th)/2,cell+.5,th);}
    }else{ /* vlny: zvislé čiary, výchylka podľa svetla */
      var fq=P.dden*.09;o.lineCap='round';o.lineJoin='round';o.lineWidth=Math.max(1,cell*.38);
      for(x=0;x<cw;x++){var cxp=x*cell+cell/2,lastC='';o.beginPath();
        for(y=0;y<=H;y+=2){var yy=Math.min(ch-1,(y/cell)|0);i=(yy*cw+x)*4;l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722+thr)/255,0,1);amt=dark?l:1-l;
          var xo=cxp+Math.sin(y*fq+x*.7)*cell*.55*amt;if(y===0)o.moveTo(xo,y);else o.lineTo(xo,y);
          var cc=inkFor(i);if(lastC&&cc!==lastC){o.strokeStyle=lastC;o.stroke();o.beginPath();o.moveTo(xo,y);}lastC=cc;}
        o.strokeStyle=lastC;o.stroke();}
    }
    return out;
  }
  var sw=Math.max(1,Math.round(W/s)),sh=Math.max(1,Math.round(H/s)),sm2=mk(sw,sh),g2=sm2.getContext('2d',{willReadFrequently:true});
  g2.drawImage(src,0,0,sw,sh);var im=g2.getImageData(0,0,sw,sh),px=im.data,n=sw*sh,F=new Float32Array(n*3),q,j;
  for(q=0;q<n;q++){F[q*3]=px[q*4]+thr;F[q*3+1]=px[q*4+1]+thr;F[q*3+2]=px[q*4+2]+thr;}
  var two=cols&&cols.length===2,sorted=cols?cols.slice().sort(function(a,b){return lum(a)-lum(b);}):null;
  function quant(r,g,b){
    if(!cols){return [Math.round(clamp(r,0,255)/85)*85,Math.round(clamp(g,0,255)/85)*85,Math.round(clamp(b,0,255)/85)*85];}
    if(two){var l=r*.2126+g*.7152+b*.0722;return l<128?sorted[0]:sorted[1];}
    return nearest(cols,r,g,b);
  }
  var spread=cols?(two?255:170):85,yy2,xx2;
  for(yy2=0;yy2<sh;yy2++)for(xx2=0;xx2<sw;xx2++){q=yy2*sw+xx2;j=q*3;var r=F[j],g=F[j+1],b=F[j+2],t=0;
    if(st==='bayer4')t=(BAYER4[(yy2&3)*4+(xx2&3)]/16-.47)*spread*.9;
    else if(st==='bayer8')t=(BAYER8[(yy2&7)*8+(xx2&7)]/64-.49)*spread*.9;
    else if(st==='noise')t=(rnd()-.5)*spread*1.1;
    var c=quant(r+t,g+t,b+t);
    if(st==='fs'||st==='atk'){var er=r-c[0],eg=g-c[1],eb=b-c[2];
      if(st==='fs'){add(xx2+1,yy2,er,eg,eb,7/16);add(xx2-1,yy2+1,er,eg,eb,3/16);add(xx2,yy2+1,er,eg,eb,5/16);add(xx2+1,yy2+1,er,eg,eb,1/16);}
      else{var k8=1/8;add(xx2+1,yy2,er,eg,eb,k8);add(xx2+2,yy2,er,eg,eb,k8);add(xx2-1,yy2+1,er,eg,eb,k8);add(xx2,yy2+1,er,eg,eb,k8);add(xx2+1,yy2+1,er,eg,eb,k8);add(xx2,yy2+2,er,eg,eb,k8);}}
    px[q*4]=c[0];px[q*4+1]=c[1];px[q*4+2]=c[2];px[q*4+3]=255;}
  function add(x,y,er,eg,eb,k){if(x<0||x>=sw||y>=sh)return;var jj=(y*sw+x)*3;F[jj]+=er*k;F[jj+1]+=eg*k;F[jj+2]+=eb*k;}
  g2.putImageData(im,0,0);o.imageSmoothingEnabled=false;o.drawImage(sm2,0,0,sw,sh,0,0,W,H);
  return out;
}

/* ================= ASCII ================= */
function renderAscii(long){
  var src=base(long),W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d');
  var cols=Math.round(P.acols),cw=W/cols,ch=cw*1.7,rows=Math.ceil(H/ch),sm=mk(cols,rows),sg=sm.getContext('2d',{willReadFrequently:true});
  sg.drawImage(src,0,0,cols,rows);var d=sg.getImageData(0,0,cols,rows).data;
  var pal=palette(),paper=pal?pal[0]:[8,8,8],inks=pal?pal.slice(1):null,dark=!pal||lum(paper)<lum(pal[pal.length-1]);
  if(!P.atrans){o.fillStyle=rgb(paper);o.fillRect(0,0,W,H);}
  var set=P.aset==='text'?(P.atext||'EDITOVAL ').replace(/\s+/g,' '):SETS[P.aset],n=set.length,isText=P.aset==='text';
  o.font='700 '+(ch*.92)+'px '+FONTS[P.afont];o.textAlign='center';o.textBaseline='middle';
  var thr=P.athr/100,x,y,i=0,k=0;
  for(y=0;y<rows;y++)for(x=0;x<cols;x++,k++){i=(y*cols+x)*4;var l=clamp((d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/255+thr*.6,0,1),v=dark?l:1-l;
    var chr;if(isText){chr=set[k%n];if(v<.12)continue;}else{chr=set[Math.round(Math.pow(v,.85)*(n-1))];if(chr===' ')continue;}
    var c;
    if(P.aink==='color'){var m=Math.max(d[i],d[i+1],d[i+2],40);c=[d[i]*255/m,d[i+1]*255/m,d[i+2]*255/m];if(!dark)c=[d[i]*.7,d[i+1]*.7,d[i+2]*.7];}
    else if(inks&&inks.length>1)c=nearest(inks,d[i],d[i+1],d[i+2]);
    else c=inks?inks[0]:[230,230,230];
    o.fillStyle=rgb(c);o.globalAlpha=isText?.35+.65*v:.8+.2*v;
    o.fillText(chr,x*cw+cw/2,y*ch+ch/2);}
  o.globalAlpha=1;return out;
}

/* ================= RELIÉF (kovový štetec) ================= */
var TEX={};
function texture(kind,W,H){
  var key=kind+W+'x'+H;if(TEX[key])return TEX[key];
  var c=mk(W,H),g=c.getContext('2d'),im=g.createImageData(W,H),d=im.data,x,y,i;
  var basec=kind==='gold'?[214,170,88]:kind==='black'?[26,26,30]:[178,180,184];
  var rowN=new Float32Array(H);hashSeed=7;for(y=0;y<H;y++)rowN[y]=rnd();
  for(y=0;y<H;y++){var rn=(rowN[y]-.5)*(kind==='black'?.04:.14);
    for(x=0;x<W;x++){i=(y*W+x)*4;var u=x/W,band=Math.exp(-Math.pow((u-.62)*4.2,2))*.42+Math.exp(-Math.pow((u-.15)*6,2))*.18-u*.12;
      var fine=(rnd()-.5)*(kind==='black'?.03:.07),v=1+band+rn+fine;
      d[i]=clamp(basec[0]*v,0,255);d[i+1]=clamp(basec[1]*v,0,255);d[i+2]=clamp(basec[2]*v,0,255);d[i+3]=255;}}
  g.putImageData(im,0,0);
  if(Object.keys(TEX).length>6)TEX={};TEX[key]=c;return c;
}
function strokeCanvas(W,H){
  var c=mk(W,H),g=c.getContext('2d');g.lineCap='round';g.lineJoin='round';g.strokeStyle='#fff';g.fillStyle='#fff';
  S.strokes.forEach(function(st){g.lineWidth=st.size*W;var p=st.pts;if(p.length===1){g.beginPath();g.arc(p[0][0]*W,p[0][1]*H,st.size*W/2,0,7);g.fill();return;}
    g.beginPath();g.moveTo(p[0][0]*W,p[0][1]*H);for(var i=1;i<p.length;i++)g.lineTo(p[i][0]*W,p[i][1]*H);g.stroke();});
  return c;
}
function renderEmboss(long,onlyDrawing){
  var src=base(long),W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d');
  var bgc=P.ebg==='photo'?src:texture(P.ebg,W,H);
  o.drawImage(bgc,0,0,W,H);
  if(!S.strokes.length){if(onlyDrawing){o.clearRect(0,0,W,H);}return out;}
  var sc=strokeCanvas(W,H),sd=sc.getContext('2d',{willReadFrequently:true}).getImageData(0,0,W,H).data;
  var im=o.getImageData(0,0,W,H),d=im.data,n=W*H,A=new Float32Array(n),Hh=new Float32Array(n),T=new Float32Array(n),R=new Float32Array(n),i,x,y;
  for(i=0;i<n;i++)A[i]=sd[i*4+3]/255;
  var brush=P.ebrush/100*W*.5,r=Math.max(1,Math.round(brush*(.05+P.eslope/100*.4))),vol=P.evol/100;
  boxBlur(A,W,H,r,T);boxBlur(T,W,H,r,Hh);
  var rr=Math.max(2,Math.round(brush*.9));boxBlur(A,W,H,rr,T);boxBlur(T,W,H,rr,R);
  var ang=(P.eangle+180)*Math.PI/180,Lx=Math.cos(ang),Ly=-Math.sin(ang),Lz=.75,Ll=Math.sqrt(Lx*Lx+Ly*Ly+Lz*Lz);Lx/=Ll;Ly/=Ll;Lz/=Ll;
  var Hx=Lx,Hy=Ly,Hz=Lz+1,Hl=Math.sqrt(Hx*Hx+Hy*Hy+Hz*Hz);Hx/=Hl;Hy/=Hl;Hz/=Hl;
  /* sklon = zmena výšky medzi susednými pixelmi × polomer rozmazania, aby bol reliéf rovnako ostrý pri každej hrúbke */
  var kk=vol*(2.2+r*2.2),rough=P.erough/100,shine=P.eshine/100,recess=P.erecess/100,metal=P.ebg!=='photo';
  hashSeed=99;
  for(y=0;y<H;y++)for(x=0;x<W;x++){i=y*W+x;var h=Hh[i],m=h<.02?0:h>.55?1:(h-.02)/.53;m=m*m*(3-2*m);
    var ring=clamp(R[i]-Hh[i]*1.2,0,1)*(1-m)*recess,j=i*4;
    if(m<=0){if(ring>0){var dk=1-ring*.55;d[j]*=dk;d[j+1]*=dk;d[j+2]*=dk;}if(onlyDrawing)d[j+3]=0;continue;}
    var gx=(Hh[Math.min(n-1,i+1)]-Hh[Math.max(0,i-1)])*kk,gy=(Hh[Math.min(n-1,i+W)]-Hh[Math.max(0,i-W)])*kk;
    if(rough>0){gx+=(rnd()-.5)*rough*1.4;gy+=(rnd()-.5)*rough*1.4;}
    var nl=1/Math.sqrt(gx*gx+gy*gy+1),nx=-gx*nl,ny=-gy*nl,nz=nl;
    var diff=Math.max(0,nx*Lx+ny*Ly+nz*Lz),sp=Math.max(0,nx*Hx+ny*Hy+nz*Hz);sp=Math.pow(sp,metal?60:24)*shine*1.3;
    var env=metal?(.5+.5*Math.sin(ny*5.5+nx*2.2))*shine*.5:0;
    var lit=.42+.95*diff+env*.6,ra=d[j],ga=d[j+1],ba=d[j+2];
    var cr=ra*lit+sp*255,cg=ga*lit+sp*255,cb=ba*lit+sp*255;
    d[j]=clamp(ra+(cr-ra)*m,0,255);d[j+1]=clamp(ga+(cg-ga)*m,0,255);d[j+2]=clamp(ba+(cb-ba)*m,0,255);
    if(onlyDrawing)d[j+3]=m*255;}
  o.putImageData(im,0,0);return out;
}

/* ================= LOOK ================= */
function renderLook(long){
  var src=base(long),W=src.width,H=src.height,out=mk(W,H),o=out.getContext('2d',{willReadFrequently:true});
  var v=P.lvar,A=P.lamt/100,grain=P.lgrain/100;
  if(v==='poster'){ /* jesenný plagát: zrnitá dvojtónová plocha + červený text */
    var sw=Math.max(1,Math.round(W/3)),sh=Math.max(1,Math.round(H/3)),sm=mk(sw,sh),sg=sm.getContext('2d',{willReadFrequently:true});sg.drawImage(src,0,0,sw,sh);
    var im=sg.getImageData(0,0,sw,sh),d=im.data,i,pap=[107,83,22],ink=[42,28,8];hashSeed=3;
    /* vyrovnanie: stredná hodnota obrázka ide na polovicu, aby plagát nebol celý tmavý ani celý okrový */
    var lums=new Float32Array(d.length/4),k2=0,sum=0;for(i=0;i<d.length;i+=4){var q=(d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/255;lums[k2++]=q;sum+=q;}
    var mean=clamp(sum/Math.max(1,k2),.05,.95),gm=Math.log(.5)/Math.log(mean);
    for(i=0,k2=0;i<d.length;i+=4,k2++){var l=Math.pow(lums[k2],gm);l=(l-.5)*(1+A)+.5;var t=l+(rnd()-.5)*(.5+.6*grain);var c=t<.5?ink:pap;d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];}
    sg.putImageData(im,0,0);o.imageSmoothingEnabled=false;o.drawImage(sm,0,0,W,H);
    if(P.ltext){o.font='500 '+(W*.024)+'px "DM Sans",sans-serif';o.fillStyle='#b8321a';o.textBaseline='top';
      var words=P.ltext.toUpperCase().split(/\s+/),lines=[],cur='',maxW=W*.5;
      words.forEach(function(wd){var t2=cur?cur+' '+wd:wd;if(o.measureText(t2).width>maxW&&cur){lines.push(cur);cur=wd;}else cur=t2;});if(cur)lines.push(cur);
      lines.forEach(function(ln,k){o.fillText(ln,W*.07+k*W*.02,H*.12+k*W*.03);});
      o.fillText(String(new Date().getFullYear()).slice(2),W*.04,H*.12);o.fillText('SI/EDITOVAL',W*.07,H*.88);}
    return out;
  }
  o.drawImage(src,0,0);
  var im2=o.getImageData(0,0,W,H),p=im2.data,n=W*H,k,j;
  /* bloom z malej rozmazanej kópie */
  var bw=Math.max(1,W>>3),bh=Math.max(1,H>>3),bc=mk(bw,bh),bg=bc.getContext('2d',{willReadFrequently:true});bg.drawImage(src,0,0,bw,bh);
  var bd=bg.getImageData(0,0,bw,bh).data,bf=[new Float32Array(bw*bh),new Float32Array(bw*bh),new Float32Array(bw*bh)],tmp=new Float32Array(bw*bh);
  for(k=0;k<3;k++){for(j=0;j<bw*bh;j++){var q=bd[j*4+k]/255;bf[k][j]=Math.max(0,q-.6)*2.5;}boxBlur(bf[k],bw,bh,3,tmp);boxBlur(tmp,bw,bh,3,bf[k]);}
  var sT=v==='cold'?[.05,.15,.36]:[.06,.34,.40],hT=v==='cold'?[.70,.84,1]:[1,.64,.34],bt=v==='cold'?[.66,.83,1]:[1,.72,.48];
  var cxm=W/2,cym=H/2,vr=Math.sqrt(cxm*cxm+cym*cym),x,y;hashSeed=11;
  var sh2=v==='vhs'?Math.max(1,Math.round(W*.004*(.4+A))):0;
  for(y=0;y<H;y++){var jit=v==='vhs'?Math.round((rnd()-.5)*W*.002*A*((y%7===0)?6:1)):0;
    for(x=0;x<W;x++){j=(y*W+x)*4;var r,g,b;
      if(v==='vhs'){var xs=clamp(x+jit,0,W-1),jr=(y*W+clamp(xs+sh2,0,W-1))*4,jb=(y*W+clamp(xs-sh2,0,W-1))*4,jg=(y*W+xs)*4;r=p[jr]/255;g=p[jg+1]/255;b=p[jb+2]/255;}
      else{r=p[j]/255;g=p[j+1]/255;b=p[j+2]/255;}
      var bi=((y>>3)*bw+(x>>3)),bl=bf[0][bi],bgg=bf[1][bi],bb=bf[2][bi];
      var l=r*.2126+g*.7152+b*.0722;
      if(v==='bw'){var m=l;m=m*m*(3-2*m);m=l+(m-l)*.55*A;m=m+(bl+bgg+bb)/3*.4*A;r=m*1.03;g=m;b=m*.96;}
      else if(v==='vhs'){var l2=r*.2126+g*.7152+b*.0722,sat=.75+.3*A;r=l2+(r-l2)*sat;g=l2+(g-l2)*sat;b=l2+(b-l2)*sat;
        r=.05*A+r*(1-.08*A)*1.05;g=.05*A+g*(1-.1*A);b=.04*A+b*(1-.15*A)*.9;r+=bl*.3*A;g+=bgg*.22*A;b+=bb*.15*A;
        var sl=1-(.06+.12*A)*(.5+.5*Math.sin(y*3.14159/Math.max(1,H/720)));r*=sl;g*=sl;b*=sl;}
      else{var c1=l<.5?2*l*l:1-2*(1-l)*(1-l);l=l+(c1-l)*(.25+.5*A);var w=Math.min(1,Math.max(0,(l-.04)/.68));
        var tr=sT[0]+(hT[0]-sT[0])*w,tg=sT[1]+(hT[1]-sT[1])*w,tb=sT[2]+(hT[2]-sT[2])*w;
        r=soft(r,tr,A);g=soft(g,tg,A);b=soft(b,tb,A);
        var l3=r*.2126+g*.7152+b*.0722,s2=1+.2*A;r=l3+(r-l3)*s2;g=l3+(g-l3)*s2;b=l3+(b-l3)*s2;
        r+=bl*bt[0]*(.2+.6*A);g+=bgg*bt[1]*(.2+.6*A);b+=bb*bt[2]*(.2+.6*A);}
      var dx=x-cxm,dy=y-cym,vg=Math.sqrt(dx*dx+dy*dy)/vr,vv=1-(.1+.5*A)*clamp((vg-.45)/.6,0,1);r*=vv;g*=vv;b*=vv;
      var gn=(rnd()-.5)*grain*.22*(1-.5*l);r+=gn;g+=gn;b+=gn;
      p[j]=clamp(r,0,1)*255;p[j+1]=clamp(g,0,1)*255;p[j+2]=clamp(b,0,1)*255;}}
  o.putImageData(im2,0,0);return out;
}
function soft(a,b,A){var sl=b<=.5?2*a*b+a*a*(1-2*b):Math.sqrt(a)*(2*b-1)+2*a*(1-b);return a+(sl-a)*(.3+.6*A);}

/* ================= vykreslenie ================= */
function renderAt(long,onlyDrawing){
  if(P.mode==='dither')return renderDither(long);
  if(P.mode==='ascii')return renderAscii(long);
  if(P.mode==='emboss')return renderEmboss(long,onlyDrawing);
  return renderLook(long);
}
var pend=false;
function render(){if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;try{var o=renderAt(PREVIEW,false);if(cv.width!==o.width||cv.height!==o.height){cv.width=o.width;cv.height=o.height;dl.width=o.width;dl.height=o.height;}cx.clearRect(0,0,cv.width,cv.height);cx.drawImage(o,0,0);}catch(e){console.error(e);msg('Efekt sa nepodarilo vykresliť: '+e.message,true);}});}
function showOriginal(on){$('#orig').hidden=!on;if(on){var b=base(PREVIEW);cx.clearRect(0,0,cv.width,cv.height);cx.drawImage(b,0,0,cv.width,cv.height);}else render();}

/* ================= UI ================= */
function buildPals(){['#palChips','#palChips2'].forEach(function(sel){var box=$(sel);box.innerHTML='';PALS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='pal';b.dataset.v=p.id;
  var sw='';if(p.c)sw='<i>'+p.c.map(function(c){return '<b style="background:'+c+'"></b>';}).join('')+'</i>';else if(p.id==='orig')sw='<i><b style="background:linear-gradient(90deg,#f00,#0f0,#00f)"></b></i>';else sw='<i><b style="background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)"></b></i>';
  b.innerHTML=sw+p.n;box.appendChild(b);});});}
buildPals();
function syncUI(){
  document.body.dataset.mode=P.mode;
  $$('.mode').forEach(function(b){b.setAttribute('aria-selected',b.dataset.m===P.mode?'true':'false');});
  $$('.panel[data-for]').forEach(function(p){p.hidden=p.dataset.for!==P.mode;});
  $$('.chips[data-key]').forEach(function(box){var k=box.dataset.key;$$('button',box);Array.prototype.forEach.call(box.children,function(b){b.setAttribute('aria-pressed',b.dataset.v===P[k]?'true':'false');});});
  NUMS.forEach(function(k){var el=$('#'+k);if(!el)return;el.value=P[k];var o=$('#'+k+'V');if(o)o.value=fmt(k,P[k]);});
  ['auto','inv','atrans','eonly'].forEach(function(k){$('#'+k).checked=!!P[k];});
  $('#atext').hidden=P.aset!=='text';$('#atext').value=P.atext;$('#ltext').value=P.ltext;
  $('#c1').value=P.c1;$('#c2').value=P.c2;$('#c3').value=P.c3;$('#customPal').hidden=P.pal!=='custom';
  $('#dden').parentNode.hidden=P.dstyle!=='wave';$('#dthr').parentNode.hidden=P.dstyle==='pixel'&&false;
  $('#palChips2').parentNode.hidden=false;$('#palChips2').hidden=P.aink!=='pal';
  $('#ltext').parentNode.hidden=P.lvar!=='poster';$('#lgrain').parentNode.hidden=false;
  dl.hidden=P.mode!=='emboss';
}
function fmt(k,v){if(k==='eangle')return v+'°';if(k==='dscale'||k==='blur')return v+' px';if(k==='acols')return v;if(k==='dden')return v;return (v>0&&['dthr','athr','bri','con','sat'].indexOf(k)>=0?'+':'')+v;}
$$('.mode').forEach(function(b){b.addEventListener('click',function(){P.mode=b.dataset.m;saveP();syncUI();render();});});
$$('.chips[data-key]').forEach(function(box){box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b||!b.dataset.v)return;P[box.dataset.key]=b.dataset.v;saveP();syncUI();render();});});
NUMS.forEach(function(k){var el=$('#'+k);if(!el)return;el.addEventListener('input',function(){P[k]=Number(el.value);var o=$('#'+k+'V');if(o)o.value=fmt(k,P[k]);render();});el.addEventListener('change',saveP);});
['auto','inv','atrans','eonly'].forEach(function(k){$('#'+k).addEventListener('change',function(e){P[k]=e.target.checked;saveP();render();});});
$('#atext').addEventListener('input',function(e){P.atext=e.target.value;saveP();render();});
$('#ltext').addEventListener('input',function(e){P.ltext=e.target.value;saveP();render();});
['c1','c2','c3'].forEach(function(k){$('#'+k).addEventListener('input',function(e){P[k]=e.target.value;saveP();render();});});
$('#reset').addEventListener('click',function(){['auto','bri','con','sat','blur','inv'].forEach(function(k){P[k]=DEF[k];});saveP();syncUI();render();});

/* podrž náhľad = originál */
var holdT=0;
cv.addEventListener('pointerdown',function(){clearTimeout(holdT);holdT=setTimeout(function(){showOriginal(true);},220);});
['pointerup','pointercancel','pointerleave'].forEach(function(ev){cv.addEventListener(ev,function(){clearTimeout(holdT);if(!$('#orig').hidden)showOriginal(false);});});

/* kreslenie reliéfu */
var drawing=null;
function pos(e){var r=dl.getBoundingClientRect();return [clamp((e.clientX-r.left)/r.width,0,1),clamp((e.clientY-r.top)/r.height,0,1)];}
function mirrors(p){var out=[p];if(P.esym==='v'||P.esym==='vh')out.push([1-p[0],p[1]]);if(P.esym==='h'||P.esym==='vh')out.push([p[0],1-p[1]]);if(P.esym==='vh')out.push([1-p[0],1-p[1]]);return out;}
dl.addEventListener('pointerdown',function(e){e.preventDefault();dl.setPointerCapture(e.pointerId);var p=pos(e),size=P.ebrush/100*.5;
  drawing=mirrors(p).map(function(q){return {pts:[q],size:size};});drawing.forEach(function(s){S.strokes.push(s);});liveDraw();});
dl.addEventListener('pointermove',function(e){if(!drawing)return;var p=pos(e),ms=mirrors(p);drawing.forEach(function(s,i){s.pts.push(ms[i]);});liveDraw();});
function endDraw(){if(!drawing)return;drawing=null;dlx.clearRect(0,0,dl.width,dl.height);render();}
['pointerup','pointercancel'].forEach(function(ev){dl.addEventListener(ev,endDraw);});
function liveDraw(){dlx.clearRect(0,0,dl.width,dl.height);dlx.lineCap='round';dlx.lineJoin='round';dlx.strokeStyle='rgba(255,255,255,.55)';dlx.fillStyle=dlx.strokeStyle;
  drawing.forEach(function(s){dlx.lineWidth=s.size*dl.width;var p=s.pts;dlx.beginPath();dlx.moveTo(p[0][0]*dl.width,p[0][1]*dl.height);for(var i=1;i<p.length;i++)dlx.lineTo(p[i][0]*dl.width,p[i][1]*dl.height);dlx.stroke();if(p.length===1){dlx.beginPath();dlx.arc(p[0][0]*dl.width,p[0][1]*dl.height,s.size*dl.width/2,0,7);dlx.fill();}});}
$('#eundo').addEventListener('click',function(){var n=P.esym==='vh'?4:P.esym==='none'?1:2;S.strokes.splice(-n,n);render();});
$('#eclear').addEventListener('click',function(){S.strokes=[];render();});

/* fotka */
function loadFile(f){if(!f||!/^image\//.test(f.type)){msg('Vyber obrázok (JPG, PNG, HEIC po konverzii).',true);return;}
  var url=URL.createObjectURL(f),img=new Image();
  img.onload=function(){var sz=fitSize(img.naturalWidth,img.naturalHeight,EXPORT),c=mk(sz[0],sz[1]);c.getContext('2d').drawImage(img,0,0,sz[0],sz[1]);URL.revokeObjectURL(url);S.strokes=[];setSource(c,sz[0],sz[1],'photo');msg('Fotka načítaná. Teraz sa hraj.');};
  img.onerror=function(){URL.revokeObjectURL(url);msg('Tento obrázok sa nepodarilo otvoriť.',true);};img.src=url;}
$('#file').addEventListener('change',function(e){loadFile(e.target.files[0]);e.target.value='';});
document.addEventListener('paste',function(e){var it=e.clipboardData&&e.clipboardData.items;if(!it)return;for(var i=0;i<it.length;i++)if(it[i].type.indexOf('image')===0){loadFile(it[i].getAsFile());break;}});
document.addEventListener('dragover',function(e){e.preventDefault();});
document.addEventListener('drop',function(e){e.preventDefault();if(e.dataTransfer.files[0])loadFile(e.dataTransfer.files[0]);});

/* náhodne */
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function ri(a,b){return a+Math.floor(Math.random()*(b-a+1));}
$('#rnd').addEventListener('click',function(){
  if(P.mode==='dither'){P.dstyle=pick(CHOICES.dstyle);P.dscale=ri(2,9);P.dthr=ri(-25,25);P.dden=ri(4,30);P.pal=pick(CHOICES.pal.filter(function(p){return p!=='custom';}));}
  else if(P.mode==='ascii'){P.aset=pick(['min','full','blocks','hearts','bin']);P.acols=ri(40,130);P.athr=ri(-20,20);P.afont=pick(CHOICES.afont);P.aink=pick(CHOICES.aink);P.pal=pick(CHOICES.pal.filter(function(p){return p!=='custom'&&p!=='orig';}));}
  else if(P.mode==='emboss'){P.ebg=pick(['steel','gold','black']);P.evol=ri(30,100);P.eslope=ri(10,90);P.erecess=ri(0,100);P.erough=ri(0,40);P.eshine=ri(30,100);P.eangle=ri(0,71)*5;}
  else{P.lvar=pick(CHOICES.lvar);P.lamt=ri(40,100);P.lgrain=ri(0,80);}
  saveP();syncUI();render();msg('Náhodná kombinácia. Nepáči sa? Klikni znova.');});

/* uloženie */
var busyEl=$('#busy'),sheet=$('#sheet'),lastBlob=null,lastUrl=null;
$('#shoot').addEventListener('click',function(){
  if(S.busy)return;S.busy=true;busyEl.hidden=false;
  setTimeout(function(){try{
    var only=P.mode==='emboss'&&P.eonly,trans=P.mode==='ascii'&&P.atrans,o=renderAt(S.kind==='sample'?PREVIEW:EXPORT,only);
    o.toBlob(function(b){S.busy=false;busyEl.hidden=true;if(!b){msg('Uloženie zlyhalo.',true);return;}
      lastBlob=b;if(lastUrl)URL.revokeObjectURL(lastUrl);lastUrl=URL.createObjectURL(b);
      var img=new Image();img.src=lastUrl;img.alt='Výsledok';$('#resMedia').innerHTML='';$('#resMedia').appendChild(img);
      $('#resInfo').textContent=o.width+'×'+o.height+' PNG'+((only||trans)?' s priehľadným pozadím':'')+' · '+Math.round(b.size/1024)+' kB';
      sheet.hidden=false;},'image/png');
  }catch(e){S.busy=false;busyEl.hidden=true;msg('Uloženie zlyhalo: '+e.message,true);}},30);});
$('#resClose').addEventListener('click',function(){sheet.hidden=true;});
$('#resShare').addEventListener('click',function(){if(!lastBlob)return;var f=new File([lastBlob],'editoval-'+P.mode+'-'+Date.now()+'.png',{type:'image/png'});
  if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:'si/editoval'}).catch(function(){});return;}
  var a=document.createElement('a');a.href=lastUrl;a.download=f.name;document.body.appendChild(a);a.click();a.remove();});

/* štart */
setSource(sample(),720,900,'sample');
syncUI();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){S.baseKey='';render();});
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(function(){});
})();
