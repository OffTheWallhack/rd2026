// shared helpers for cover drawings (1600x900 canvas)
const c=document.getElementById('c'),x=c.getContext('2d'),W=1600,H=900;
let seed=11;const r=()=>(seed=(seed*16807)%2147483647)/2147483647;
function bg(top,bot){const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,top);g.addColorStop(1,bot);x.fillStyle=g;x.fillRect(0,0,W,H);}
function ascii(alphaMax,fadeTo){x.font='500 15px monospace';const ch='01{}<>/=+*#░▒▓';for(let yy=20;yy<H;yy+=19)for(let xx=10;xx<W;xx+=12){const f=Math.max(0,1-xx/fadeTo);if(r()>f*.75)continue;x.fillStyle=`rgba(31,191,98,${.06+r()*alphaMax*f})`;x.fillText(ch[Math.floor(r()*ch.length)],xx,yy);}}
function glitch(n,amp){for(let k=0;k<n;k++){const y0=Math.floor(r()*H),hh=4+Math.floor(r()*24),sh=Math.floor((r()-.5)*amp);x.putImageData(x.getImageData(0,y0,W,hh),sh,y0);}}
function vignette(){const v=x.createRadialGradient(W/2,H/2,300,W/2,H/2,1000);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.55)');x.fillStyle=v;x.fillRect(0,0,W,H);}
function tag(t){x.fillStyle='rgba(11,12,11,.85)';x.fillRect(0,812,W,88);x.fillStyle='rgba(31,191,98,.9)';x.fillRect(0,812,W,3);x.fillStyle='#1FBF62';x.fillRect(60,836,14,14);x.fillStyle='#F5F5F2';x.font='500 26px monospace';x.fillText(t,90,850);}
function rr(x0,y0,w,h,rad){x.beginPath();x.moveTo(x0+rad,y0);x.arcTo(x0+w,y0,x0+w,y0+h,rad);x.arcTo(x0+w,y0+h,x0,y0+h,rad);x.arcTo(x0,y0+h,x0,y0,rad);x.arcTo(x0,y0,x0+w,y0,rad);x.closePath();}
