(()=>{var mp=Object.create;var Kh=Object.defineProperty;var gp=Object.getOwnPropertyDescriptor;var xp=Object.getOwnPropertyNames;var vp=Object.getPrototypeOf,_p=Object.prototype.hasOwnProperty;var yp=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Mp=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of xp(e))!_p.call(s,i)&&i!==t&&Kh(s,i,{get:()=>e[i],enumerable:!(n=gp(e,i))||n.enumerable});return s};var bp=(s,e,t)=>(t=s!=null?mp(vp(s)):{},Mp(e||!s||!s.__esModule?Kh(t,"default",{value:s,enumerable:!0}):t,s));var ud=yp((V1,Ql)=>{"use strict";Ql.exports=Wa;Ql.exports.default=Wa;function Wa(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=cd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=wy(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return $r(r,o,t,a,c,d,0),o}function cd(s,e,t,n,i){var r,o;if(i===$l(s,e,t,n)>0)for(r=e;r<t;r+=n)o=ad(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=ad(r,s[r],s[r+1],o);return o&&Xa(o,o.next)&&(eo(o),o=o.next),o}function fs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||Yt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(s,e,t,n,i,r,o){if(s){!o&&r&&Cy(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?My(s,n,i,r):yy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),eo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=by(fs(s),e,t),$r(s,e,t,n,i,r,2)):o===2&&Sy(s,e,t,n,i,r):$r(fs(s),e,t,n,i,r,1);break}}}}function yy(s){var e=s.prev,t=s,n=s.next;if(Yt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&hr(i,a,r,c,o,l,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function My(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Yt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=jl(d,p,e,t,n),_=jl(v,g,e,t,n),x=s.prevZ,y=s.nextZ;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&hr(a,h,c,u,l,f,x.x,x.y)&&Yt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&hr(a,h,c,u,l,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&hr(a,h,c,u,l,f,x.x,x.y)&&Yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&hr(a,h,c,u,l,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function by(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Xa(i,r)&&ld(i,n,n.next,r)&&Qr(i,r)&&Qr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),eo(n),eo(n.next),n=s=r),n=n.next}while(n!==s);return fs(n)}function Sy(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Iy(o,a)){var c=hd(o,a);o=fs(o,o.next),c=fs(c,c.next),$r(o,e,t,n,i,r,0),$r(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function wy(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=cd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ly(l));for(i.sort(Ey),r=0;r<i.length;r++)t=Ty(i[r],t);return t}function Ey(s,e){return s.x-e.x}function Ty(s,e){var t=Ay(s,e);if(!t)return e;var n=hd(t,s);return fs(n,n.next),fs(t,t.next)}function Ay(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&hr(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Qr(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Ry(o,t)))&&(o=t,u=f)),t=t.next;while(t!==c);return o}function Ry(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function Cy(s,e,t,n){var i=s;do i.z===0&&(i.z=jl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Py(i)}function Py(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function jl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ly(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function hr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Iy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ny(s,e)&&(Qr(s,e)&&Qr(e,s)&&Dy(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||Xa(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Xa(s,e){return s.x===e.x&&s.y===e.y}function ld(s,e,t,n){var i=Va(Yt(s,e,t)),r=Va(Yt(s,e,n)),o=Va(Yt(t,n,s)),a=Va(Yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ga(s,t,e)||r===0&&Ga(s,n,e)||o===0&&Ga(t,s,n)||a===0&&Ga(t,e,n))}function Ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Va(s){return s>0?1:s<0?-1:0}function Ny(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ld(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qr(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function Dy(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hd(s,e){var t=new Jl(s.i,s.x,s.y),n=new Jl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ad(s,e,t,n){var i=new Jl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function eo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Wa.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs($l(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs($l(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function $l(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}Wa.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t}});var Ol="160";var Sp=0,jh=1,wp=2;var Ua=1,Ep=2,yi=3,oi=0,un=1,Ht=2;var Fi=0,Ws=1,wi=2,Jh=3,$h=4,Tp=5,ts=100,Ap=101,Rp=102,Qh=103,eu=104,Cp=200,Pp=201,Lp=202,Ip=203,Yc=204,Zc=205,Np=206,Dp=207,Up=208,zp=209,Fp=210,Op=211,Bp=212,kp=213,Hp=214,Gp=0,Vp=1,Wp=2,Ko=3,Xp=4,qp=5,Yp=6,Zp=7,Bl=0,Kp=1,jp=2,Oi=0,Jp=1,$p=2,Qp=3,em=4,tm=5,nm=6,tu="attached",im="detached",zf=300,Ys=301,Zs=302,Kc=303,jc=304,za=306,os=1e3,Dn=1001,Nr=1002,jt=1003,jo=1004;var Er=1005;var Jt=1006,kl=1007;var Wn=1008;var ri=1009,sm=1010,rm=1011,Hl=1012,Ff=1013,Ui=1014,bi=1015,as=1016,Of=1017,Bf=1018,is=1020,om=1021,Gn=1023,am=1024,cm=1025,ss=1026,Ks=1027,lm=1028,kf=1029,hm=1030,Hf=1031,Gf=1033,uc=33776,fc=33777,dc=33778,pc=33779,nu=35840,iu=35841,su=35842,ru=35843,Vf=36196,ou=37492,au=37496,cu=37808,lu=37809,hu=37810,uu=37811,fu=37812,du=37813,pu=37814,mu=37815,gu=37816,xu=37817,vu=37818,_u=37819,yu=37820,Mu=37821,mc=36492,bu=36494,Su=36495,um=36283,wu=36284,Eu=36285,Tu=36286,Fa=2200,fm=2201,dm=2202,js=2300,cs=2301,gc=2302,Os=2400,Bs=2401,Jo=2402,Gl=2500,pm=2501,Wf=0,Oa=1,Jr=2,Xf=3e3,rs=3001,mm=3200,gm=3201,Vl=0,xm=1,bn="",Lt="srgb",on="srgb-linear",Wl="display-p3",Ba="display-p3-linear",$o="linear",kt="srgb",Qo="rec709",ea="p3";var Ms=7680;var Au=519,vm=512,_m=513,ym=514,qf=515,Mm=516,bm=517,Sm=518,wm=519,Jc=35044;var ta="300 es",$c=1035,Si=2e3,na=2001,Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=1234567,Tr=Math.PI/180,Js=180/Math.PI;function Vn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function sn(s,e,t){return Math.max(e,Math.min(t,s))}function Xl(s,e){return(s%e+e)%e}function Em(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Tm(s,e,t){return s!==e?(t-s)/(e-s):0}function Ar(s,e,t){return(1-t)*s+t*e}function Am(s,e,t,n){return Ar(s,e,1-Math.exp(-t*n))}function Rm(s,e=1){return e-Math.abs(Xl(s,e*2)-e)}function Cm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Lm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Im(s,e){return s+Math.random()*(e-s)}function Nm(s){return s*(.5-Math.random())}function Dm(s){s!==void 0&&(Ru=s);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Um(s){return s*Tr}function zm(s){return s*Js}function Qc(s){return(s&s-1)===0&&s!==0}function Fm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ia(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Om(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Yf={DEG2RAD:Tr,RAD2DEG:Js,generateUUID:Vn,clamp:sn,euclideanModulo:Xl,mapLinear:Em,inverseLerp:Tm,lerp:Ar,damp:Am,pingpong:Rm,smoothstep:Cm,smootherstep:Pm,randInt:Lm,randFloat:Im,randFloatSpread:Nm,seededRandom:Dm,degToRad:Um,radToDeg:zm,isPowerOfTwo:Qc,ceilPowerOfTwo:Fm,floorPowerOfTwo:ia,setQuaternionFromProperEuler:Om,normalize:Ut,denormalize:si},be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=i[0],g=i[3],m=i[6],_=i[1],x=i[4],y=i[7],S=i[2],b=i[5],E=i[8];return r[0]=o*v+a*_+c*S,r[3]=o*g+a*x+c*b,r[6]=o*m+a*y+c*E,r[1]=l*v+h*_+u*S,r[4]=l*g+h*x+u*b,r[7]=l*m+h*y+u*E,r[2]=f*v+d*_+p*S,r[5]=f*g+d*x+p*b,r[8]=f*m+d*y+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xc=new Mt;function Zf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bm(){let s=Dr("canvas");return s.style.display="block",s}var Cu={};function Rr(s){s in Cu||(Cu[s]=!0,console.warn(s))}var Pu=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lu=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[on]:{transfer:$o,primaries:Qo,toReference:s=>s,fromReference:s=>s},[Lt]:{transfer:kt,primaries:Qo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ba]:{transfer:$o,primaries:ea,toReference:s=>s.applyMatrix3(Lu),fromReference:s=>s.applyMatrix3(Pu)},[Wl]:{transfer:kt,primaries:ea,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lu),fromReference:s=>s.applyMatrix3(Pu).convertLinearToSRGB()}},km=new Set([on,Ba]),Pt={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!km.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=vo[e].toReference,i=vo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return vo[s].primaries},getTransfer:function(s){return s===bn?$o:vo[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var bs,sa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Dr("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_c(i[o].image)):r.push(_c(i[o]))}else r=_c(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gm=0,an=class s extends Ei{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Dn,i=Dn,r=Jt,o=Wn,a=Gn,c=ri,l=s.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Vn(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rs?Lt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?rs:Xf}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?Lt:bn}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=zf;an.DEFAULT_ANISOTROPY=1;var At=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(d+1)/2,S=(m+1)/2,b=(h+f)/4,E=(u+v)/4,R=(p+g)/4;return x>y&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=E/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=R/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=R/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?Lt:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends el{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let S=Math.sqrt(x),b=Math.atan2(S,m*_);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S}let y=a*_;if(c=c*g+f*y,l=l*g+d*y,h=h*g+p*y,u=u*g+v*y,g===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yc=new D,Iu=new tn,$t=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yo.subVectors(this.max,vr),Ss.subVectors(e.a,vr),ws.subVectors(e.b,vr),Es.subVectors(e.c,vr),Pi.subVectors(ws,Ss),Li.subVectors(Es,ws),ji.subVectors(Ss,Es);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!Mc(t,Ss,ws,Es,yo)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,Ss,ws,Es,yo))?!1:(Mo.crossVectors(Pi,Li),t=[Mo.x,Mo.y,Mo.z],Mc(t,Ss,ws,Es,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,_o=new $t,Ss=new D,ws=new D,Es=new D,Pi=new D,Li=new D,ji=new D,vr=new D,yo=new D,Mo=new D,Ji=new D;function Mc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);let a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vm=new $t,_r=new D,bc=new D,Un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(bc)),this.expandByPoint(_r.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new D,Sc=new D,bo=new D,Ii=new D,wc=new D,So=new D,Ec=new D,$s=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Ii.dot(this.direction),c=-Ii.dot(bo),l=Ii.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sc).addScaledVector(bo,f),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){wc.subVectors(t,e),So.subVectors(n,e),Ec.crossVectors(wc,So);let o=this.direction.dot(Ec),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);let c=a*this.direction.dot(So.crossVectors(Ii,So));if(c<0)return null;let l=a*this.direction.dot(wc.cross(Ii));if(l<0||c+l>o)return null;let h=-a*Ii.dot(Ec);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f+v*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){let i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ni.crossVectors(n,In),Ni.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ni.crossVectors(n,In)),Ni.normalize(),wo.crossVectors(In,Ni),i[0]=Ni.x,i[4]=wo.x,i[8]=In.x,i[1]=Ni.y,i[5]=wo.y,i[9]=In.y,i[2]=Ni.z,i[6]=wo.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],x=n[7],y=n[11],S=n[15],b=i[0],E=i[4],R=i[8],M=i[12],w=i[1],I=i[5],U=i[9],k=i[13],P=i[2],L=i[6],H=i[10],J=i[14],Q=i[3],Y=i[7],K=i[11],ie=i[15];return r[0]=o*b+a*w+c*P+l*Q,r[4]=o*E+a*I+c*L+l*Y,r[8]=o*R+a*U+c*H+l*K,r[12]=o*M+a*k+c*J+l*ie,r[1]=h*b+u*w+f*P+d*Q,r[5]=h*E+u*I+f*L+d*Y,r[9]=h*R+u*U+f*H+d*K,r[13]=h*M+u*k+f*J+d*ie,r[2]=p*b+v*w+g*P+m*Q,r[6]=p*E+v*I+g*L+m*Y,r[10]=p*R+v*U+g*H+m*K,r[14]=p*M+v*k+g*J+m*ie,r[3]=_*b+x*w+y*P+S*Q,r[7]=_*E+x*I+y*L+S*Y,r[11]=_*R+x*U+y*H+S*K,r[15]=_*M+x*k+y*J+S*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=u*g*l-v*f*l+v*c*d-a*g*d-u*c*m+a*f*m,x=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,y=h*v*l-p*u*l+p*a*d-o*v*d-h*a*m+o*u*m,S=p*u*c-h*v*c-p*a*f+o*v*f+h*a*g-o*u*g,b=t*_+n*x+i*y+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=_*E,e[1]=(v*f*r-u*g*r-v*i*d+n*g*d+u*i*m-n*f*m)*E,e[2]=(a*g*r-v*c*r+v*i*l-n*g*l-a*i*m+n*c*m)*E,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,e[4]=x*E,e[5]=(h*g*r-p*f*r+p*i*d-t*g*d-h*i*m+t*f*m)*E,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*E,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*E,e[8]=y*E,e[9]=(p*u*r-h*v*r-p*n*d+t*v*d+h*n*m-t*u*m)*E,e[10]=(o*v*r-p*a*r+p*n*l-t*v*l-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*E,e[12]=S*E,e[13]=(h*v*i-p*u*i+p*n*f-t*v*f-h*n*g+t*u*g)*E,e[14]=(p*a*i-o*v*i-p*n*c+t*v*c+o*n*g-t*a*g)*E,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,v=o*h,g=o*u,m=a*u,_=c*l,x=c*h,y=c*u,S=n.x,b=n.y,E=n.z;return i[0]=(1-(v+m))*S,i[1]=(d+y)*S,i[2]=(p-x)*S,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+m))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(p+x)*E,i[9]=(g-_)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ts.set(i[0],i[1],i[2]).length(),o=Ts.set(i[4],i[5],i[6]).length(),a=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);let l=1/r,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Si){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,p;if(a===Si)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===na)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Si){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,p,v;if(a===Si)p=(o+r)*u,v=-2*u;else if(a===na)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ts=new D,jn=new ot,Wm=new D(0,0,0),Xm=new D(1,1,1),Ni=new D,wo=new D,In=new D,Nu=new ot,Du=new tn,aa=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};aa.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qm=0,Uu=new D,As=new tn,gi=new ot,Eo=new D,yr=new D,Ym=new D,Zm=new tn,zu=new D(1,0,0),Fu=new D(0,1,0),Ou=new D(0,0,1),Km={type:"added"},jm={type:"removed"},Gt=class s extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new aa,n=new tn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Mt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(yr,Eo,this.up):gi.lookAt(Eo,yr,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),As.setFromRotationMatrix(gi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Km)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new D,xi=new D,Tc=new D,vi=new D,Rs=new D,Cs=new D,Bu=new D,Ac=new D,Rc=new D,Cc=new D,To=!1,ks=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),xi.subVectors(n,t),Tc.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(xi),c=Jn.dot(Tc),l=xi.dot(xi),h=xi.dot(Tc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,i,r,o,a,c){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),xi.subVectors(e,t),Jn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Jn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Rs.subVectors(i,n),Cs.subVectors(r,n),Ac.subVectors(e,n);let c=Rs.dot(Ac),l=Cs.dot(Ac);if(c<=0&&l<=0)return t.copy(n);Rc.subVectors(e,i);let h=Rs.dot(Rc),u=Cs.dot(Rc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Rs,o);Cc.subVectors(e,r);let d=Rs.dot(Cc),p=Cs.dot(Cc);if(p>=0&&d<=p)return t.copy(r);let v=d*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Cs,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Bu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Bu,a);let m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Pc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Xl(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pc(o,r,e+1/3),this.g=Pc(o,r,e),this.b=Pc(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Pt.fromWorkingColorSpace(xn.copy(this),e),Math.round(sn(xn.r*255,0,255))*65536+Math.round(sn(xn.g*255,0,255))*256+Math.round(sn(xn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,r=xn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Lt){Pt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ao);let n=Ar(Di.h,Ao.h,t),i=Ar(Di.s,Ao.s,t),r=Ar(Di.l,Ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Oe;Oe.NAMES=Kf;var Jm=0,Pn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ws,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new D,Ro=new be,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var la=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var $m=0,Hn=new ot,Lc=new Gt,Ps=new D,Nn=new $t,Mr=new $t,hn=new D,Rt=class s extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?ha:la)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Nn.min,Mr.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,Mr.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(Mr.min),Nn.expandByPoint(Mr.max))}Nn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),hn.add(Ps)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new D,h[w]=new D;let u=new D,f=new D,d=new D,p=new be,v=new be,g=new be,m=new D,_=new D;function x(w,I,U){u.fromArray(i,w*3),f.fromArray(i,I*3),d.fromArray(i,U*3),p.fromArray(o,w*2),v.fromArray(o,I*2),g.fromArray(o,U*2),f.sub(u),d.sub(u),v.sub(p),g.sub(p);let k=1/(v.x*g.y-g.x*v.y);isFinite(k)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(k),_.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(k),l[w].add(m),l[I].add(m),l[U].add(m),h[w].add(_),h[I].add(_),h[U].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,I=y.length;w<I;++w){let U=y[w],k=U.start,P=U.count;for(let L=k,H=k+P;L<H;L+=3)x(n[L+0],n[L+1],n[L+2])}let S=new D,b=new D,E=new D,R=new D;function M(w){E.fromArray(r,w*3),R.copy(E);let I=l[w];S.copy(I),S.sub(E.multiplyScalar(E.dot(I))).normalize(),b.crossVectors(R,I);let k=b.dot(h[w])<0?-1:1;c[w*4]=S.x,c[w*4+1]=S.y,c[w*4+2]=S.z,c[w*4+3]=k}for(let w=0,I=y.length;w<I;++w){let U=y[w],k=U.start,P=U.count;for(let L=k,H=k+P;L<H;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Ft(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ku=new ot,$i=new $s,Co=new Un,Hu=new D,Ls=new D,Is=new D,Ns=new D,Ic=new D,Po=new D,Lo=new be,Io=new be,No=new be,Gu=new D,Vu=new D,Wu=new D,Do=new D,Uo=new D,Xe=class extends Gt{constructor(e=new Rt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ic.fromBufferAttribute(u,e),o?Po.addScaledVector(Ic,h):Po.addScaledVector(Ic.sub(t),h))}t.add(Po)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Co.containsPoint($i.origin)===!1&&($i.intersectSphere(Co,Hu)===null||$i.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(ku.copy(r).invert(),$i.copy(e.ray).applyMatrix4(ku),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=x;y<S;y+=3){let b=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=zo(this,m,e,n,l,h,u,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let _=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=zo(this,o,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=x;y<S;y+=3){let b=y,E=y+1,R=y+2;i=zo(this,m,e,n,l,h,u,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let _=g,x=g+1,y=g+2;i=zo(this,o,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Qm(s,e,t,n,i,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===oi,a),c===null)return null;Uo.copy(a),Uo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Uo);return l<t.near||l>t.far?null:{distance:l,point:Uo.clone(),object:s}}function zo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ls),s.getVertexPosition(c,Is),s.getVertexPosition(l,Ns);let h=Qm(s,e,t,n,Ls,Is,Ns,Do);if(h){i&&(Lo.fromBufferAttribute(i,a),Io.fromBufferAttribute(i,c),No.fromBufferAttribute(i,l),h.uv=ks.getInterpolation(Do,Ls,Is,Ns,Lo,Io,No,new be)),r&&(Lo.fromBufferAttribute(r,a),Io.fromBufferAttribute(r,c),No.fromBufferAttribute(r,l),h.uv1=ks.getInterpolation(Do,Ls,Is,Ns,Lo,Io,No,new be),h.uv2=h.uv1),o&&(Gu.fromBufferAttribute(o,a),Vu.fromBufferAttribute(o,c),Wu.fromBufferAttribute(o,l),h.normal=ks.getInterpolation(Do,Ls,Is,Ns,Gu,Vu,Wu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};ks.getNormal(Ls,Is,Ns,u.normal),h.face=u}return h}var Xt=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function p(v,g,m,_,x,y,S,b,E,R,M){let w=y/E,I=S/R,U=y/2,k=S/2,P=b/2,L=E+1,H=R+1,J=0,Q=0,Y=new D;for(let K=0;K<H;K++){let ie=K*I-k;for(let ae=0;ae<L;ae++){let X=ae*w-U;Y[v]=X*_,Y[g]=ie*x,Y[m]=P,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[g]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ae/E),u.push(1-K/R),J+=1}}for(let K=0;K<R;K++)for(let ie=0;ie<E;ie++){let ae=f+ie+L*K,X=f+ie+L*(K+1),ee=f+(ie+1)+L*(K+1),ue=f+(ie+1)+L*K;c.push(ae,X,ue),c.push(X,ee,ue),Q+=6}a.addGroup(d,Q,M),d+=Q,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(s){let e={};for(let t=0;t<s.length;t++){let n=Qs(s[t]);for(let i in n)e[i]=n[i]}return e}function e0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jf(s){return s.getRenderTarget()===null?s.outputColorSpace:Pt.workingColorSpace}var t0={clone:Qs,merge:Mn},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},er=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends er{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Us=1,nl=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(Ds,Us,e,t);i.layers=this.layers,this.add(i);let r=new rn(Ds,Us,e,t);r.layers=this.layers,this.add(r);let o=new rn(Ds,Us,e,t);o.layers=this.layers,this.add(o);let a=new rn(Ds,Us,e,t);a.layers=this.layers,this.add(a);let c=new rn(Ds,Us,e,t);c.layers=this.layers,this.add(c);let l=new rn(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ua=class extends an{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},il=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rs?Lt:bn),this.texture=new ua(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Fi});r.uniforms.tEquirect.value=t;let o=new Xe(i,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Jt),new nl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Nc=new D,s0=new D,r0=new Mt,Mi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Nc.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Nc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r0.getNormalMatrix(e),i=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Un,Fo=new D,Ur=class{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],v=i[10],g=i[11],m=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,g-d,y-m).normalize(),n[1].setComponents(c+r,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+h,g+p,y+_).normalize(),n[3].setComponents(c-o,f-h,g-p,y-_).normalize(),n[4].setComponents(c-a,f-u,g-v,y-x).normalize(),t===Si)n[5].setComponents(c+a,f+u,g+v,y+x).normalize();else if(t===na)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Fo.x=i.normal.x>0?e.max.x:e.min.x,Fo.y=i.normal.y>0?e.max.y:e.min.y,Fo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function o0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,p=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&p.length===0&&s.bufferSubData(u,0,f),p.length!==0){for(let v=0,g=p.length;v<g;v++){let m=p[v];t?s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Qn=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let x=0;x<l;x++){let y=x*u-r;p.push(y,-_,0),v.push(0,0,1),g.push(x/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let x=_+l*m,y=_+l*(m+1),S=_+1+l*(m+1),b=_+1+l*m;d.push(x,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:a0,alphahash_pars_fragment:c0,alphamap_fragment:l0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:_0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:I0,displacementmap_pars_vertex:N0,displacementmap_vertex:D0,emissivemap_fragment:U0,emissivemap_pars_fragment:z0,colorspace_fragment:F0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:eg,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:Z0,lightmap_fragment:K0,lightmap_pars_fragment:j0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:$0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:_g,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:bg,morphtarget_vertex:Sg,normal_fragment_begin:wg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Ng,opaque_fragment:Dg,packing:Ug,premultiplied_alpha_fragment:zg,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:Bg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:Zg,skinnormal_vertex:Kg,specularmap_fragment:jg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Qg,transmission_fragment:ex,transmission_pars_fragment:tx,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:rx,background_vert:ox,background_frag:ax,backgroundCube_vert:cx,backgroundCube_frag:lx,cube_vert:hx,cube_frag:ux,depth_vert:fx,depth_frag:dx,distanceRGBA_vert:px,distanceRGBA_frag:mx,equirect_vert:gx,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:_x,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:bx,meshlambert_frag:Sx,meshmatcap_vert:wx,meshmatcap_frag:Ex,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Px,meshphysical_frag:Lx,meshtoon_vert:Ix,meshtoon_frag:Nx,points_vert:Dx,points_frag:Ux,shadow_vert:zx,shadow_frag:Fx,sprite_vert:Ox,sprite_frag:Bx},Ce={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ii={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ii.physical={uniforms:Mn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var Oo={r:0,b:0,g:0};function kx(s,e,t,n,i,r,o){let a=new Oe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(g,m){let _=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),_=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new Xe(new Xt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Qs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(x.colorSpace)!==kt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xe(new Qn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Qs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Pt.getTransfer(x.colorSpace)!==kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,m){g.getRGB(Oo,jf(s)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:p}}function Hx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(P,L,H,J,Q){let Y=!1;if(o){let K=v(J,H,L);l!==K&&(l=K,d(l.object)),Y=m(P,J,H,Q),Y&&_(P,J,H,Q)}else{let K=L.wireframe===!0;(l.geometry!==J.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=J.id,l.program=H.id,l.wireframe=K,Y=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,R(P,L,H,J),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function p(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,L,H){let J=H.wireframe===!0,Q=a[P.id];Q===void 0&&(Q={},a[P.id]=Q);let Y=Q[L.id];Y===void 0&&(Y={},Q[L.id]=Y);let K=Y[J];return K===void 0&&(K=g(f()),Y[J]=K),K}function g(P){let L=[],H=[],J=[];for(let Q=0;Q<i;Q++)L[Q]=0,H[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:J,object:P,attributes:{},index:null}}function m(P,L,H,J){let Q=l.attributes,Y=L.attributes,K=0,ie=H.getAttributes();for(let ae in ie)if(ie[ae].location>=0){let ee=Q[ae],ue=Y[ae];if(ue===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;K++}return l.attributesNum!==K||l.index!==J}function _(P,L,H,J){let Q={},Y=L.attributes,K=0,ie=H.getAttributes();for(let ae in ie)if(ie[ae].location>=0){let ee=Y[ae];ee===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),Q[ae]=ue,K++}l.attributes=Q,l.attributesNum=K,l.index=J}function x(){let P=l.newAttributes;for(let L=0,H=P.length;L<H;L++)P[L]=0}function y(P){S(P,0)}function S(P,L){let H=l.newAttributes,J=l.enabledAttributes,Q=l.attributeDivisors;H[P]=1,J[P]===0&&(s.enableVertexAttribArray(P),J[P]=1),Q[P]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),Q[P]=L)}function b(){let P=l.newAttributes,L=l.enabledAttributes;for(let H=0,J=L.length;H<J;H++)L[H]!==P[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function E(P,L,H,J,Q,Y,K){K===!0?s.vertexAttribIPointer(P,L,H,Q,Y):s.vertexAttribPointer(P,L,H,J,Q,Y)}function R(P,L,H,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Q=J.attributes,Y=H.getAttributes(),K=L.defaultAttributeValues;for(let ie in Y){let ae=Y[ie];if(ae.location>=0){let X=Q[ie];if(X===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let ee=X.normalized,ue=X.itemSize,de=t.get(X);if(de===void 0)continue;let Te=de.buffer,We=de.type,it=de.bytesPerElement,pe=n.isWebGL2===!0&&(We===s.INT||We===s.UNSIGNED_INT||X.gpuType===Ff);if(X.isInterleavedBufferAttribute){let ne=X.data,N=ne.stride,ve=X.offset;if(ne.isInstancedInterleavedBuffer){for(let ce=0;ce<ae.locationSize;ce++)S(ae.location+ce,ne.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<ae.locationSize;ce++)y(ae.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ce=0;ce<ae.locationSize;ce++)E(ae.location+ce,ue/ae.locationSize,We,ee,N*it,(ve+ue/ae.locationSize*ce)*it,pe)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<ae.locationSize;ne++)S(ae.location+ne,X.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<ae.locationSize;ne++)y(ae.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ne=0;ne<ae.locationSize;ne++)E(ae.location+ne,ue/ae.locationSize,We,ee,ue*it,ue/ae.locationSize*ne*it,pe)}}else if(K!==void 0){let ee=K[ie];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(ae.location,ee);break;case 3:s.vertexAttrib3fv(ae.location,ee);break;case 4:s.vertexAttrib4fv(ae.location,ee);break;default:s.vertexAttrib1fv(ae.location,ee)}}}}b()}function M(){U();for(let P in a){let L=a[P];for(let H in L){let J=L[H];for(let Q in J)p(J[Q].object),delete J[Q];delete L[H]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;let L=a[P.id];for(let H in L){let J=L[H];for(let Q in J)p(J[Q].object),delete J[Q];delete L[H]}delete a[P.id]}function I(P){for(let L in a){let H=a[L];if(H[P.id]===void 0)continue;let J=H[P.id];for(let Q in J)p(J[Q].object),delete J[Q];delete H[P.id]}}function U(){k(),h=!0,l!==c&&(l=c,d(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:U,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function Gx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Vx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),S=x&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:b}}function Wx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Mi,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,x=_*4,y=m.clippingState||null;c.value=y,y=h(p,f,x,d);for(let S=0;S!==x;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=d;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Xx(s){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=Ys:a===jc&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kc||a===jc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new il(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var tr=class extends er{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,Xu=[.125,.215,.35,.446,.526,.582],ns=20,Dc=new tr,qu=new Oe,Uc=null,zc=0,Fc=0,es=(1+Math.sqrt(5))/2,zs=1/es,Yu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,es,zs),new D(0,es,-zs),new D(zs,0,es),new D(-zs,0,es),new D(es,zs,0),new D(-es,zs,0)],fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Uc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,zc,Fc),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:as,format:Gn,colorSpace:on,depthBuffer:!1},i=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=Yx(r,e,t)}return i}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,i){let a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qu),h.toneMapping=Oi,h.autoClear=!1;let d=new nn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new Xe(new Xt,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(qu),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let x=this._cubeSize;Bo(i,_*x,m>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ys||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yu[(i-1)%Yu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):ns;g>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);let m=[],_=0;for(let E=0;E<ns;++E){let R=E/v,M=Math.exp(-R*R/2);m.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;let y=this._sizeLods[i],S=3*y*(i>x-Hs?i-x+Hs:0),b=4*(this._cubeSize-y);Bo(t,S,b,3*y,2*y),c.setRenderTarget(t),c.render(u,Dc)}};function qx(s){let e=[],t=[],n=[],i=s,r=s-Hs+1+Xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Hs?c=Xu[o-s+Hs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*d),x=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,R=b>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(M,v*p*b),x.set(f,g*p*b);let w=[b,b,b,b,b,b];y.set(w,m*p*b)}let S=new Rt;S.setAttribute("position",new Ft(_,v)),S.setAttribute("uv",new Ft(x,g)),S.setAttribute("faceIndex",new Ft(y,m)),e.push(S),i>Hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(s,e,t){let n=new $n(s,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yx(s,e,t){let n=new Float32Array(ns),i=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ku(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ju(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Kc||c===jc,h=c===Ys||c===Zs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new fa(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new fa(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let v=f.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let v=d[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,v=0;if(d!==null){let _=d.array;v=d.version;for(let x=0,y=_.length;x<y;x+=3){let S=_[x+0],b=_[x+1],E=_[x+2];f.push(S,b,b,E,E,S)}}else if(p!==void 0){let _=p.array;v=p.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let S=x+0,b=x+1,E=x+2;f.push(S,b,b,E,E,S)}}else return;let g=new(Zf(f)?ha:la)(f,1);g.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jx(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function u(d,p,v){if(v===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*c,v),t.update(p,r,v)}function f(d,p,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,a,d,0,v);let m=0;for(let _=0;_<v;_++)m+=p[_];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function $x(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,e){return s[0]-e[0]}function ev(s,e){return Math.abs(e[1])-Math.abs(s[1])}function tv(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==p){let P=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],R=0;_===!0&&(R=1),x===!0&&(R=2),y===!0&&(R=3);let M=h.attributes.position.count*R,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let I=new Float32Array(M*w*4*p),U=new oa(I,M,w,p);U.type=bi,U.needsUpdate=!0;let k=R*4;for(let L=0;L<p;L++){let H=S[L],J=b[L],Q=E[L],Y=M*w*4*L;for(let K=0;K<H.count;K++){let ie=K*k;_===!0&&(o.fromBufferAttribute(H,K),I[Y+ie+0]=o.x,I[Y+ie+1]=o.y,I[Y+ie+2]=o.z,I[Y+ie+3]=0),x===!0&&(o.fromBufferAttribute(J,K),I[Y+ie+4]=o.x,I[Y+ie+5]=o.y,I[Y+ie+6]=o.z,I[Y+ie+7]=0),y===!0&&(o.fromBufferAttribute(Q,K),I[Y+ie+8]=o.x,I[Y+ie+9]=o.y,I[Y+ie+10]=o.z,I[Y+ie+11]=Q.itemSize===4?o.w:1)}}v={count:p,texture:U,size:new be(M,w)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let x=0;x<d;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<d;x++){let y=p[x];y[0]=x,y[1]=f[x]}p.sort(ev);for(let x=0;x<8;x++)x<d&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Qx);let v=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let y=a[x],S=y[0],b=y[1];S!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+x)!==v[S]&&h.setAttribute("morphTarget"+x,v[S]),g&&h.getAttribute("morphNormal"+x)!==g[S]&&h.setAttribute("morphNormal"+x,g[S]),i[x]=b,m+=b):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nv(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var da=class extends an{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ss,h!==ss&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ui),n===void 0&&h===Ks&&(n=is),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$f=new an,Qf=new da(1,1);Qf.compareFunction=qf;var ed=new oa,td=new tl,nd=new ua,Ju=[],$u=[],Qu=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function lr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ju[i];if(r===void 0&&(r=new Float32Array(i),Ju[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ka(s,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function iv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function av(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;tf.set(n),s.uniformMatrix2fv(this.addr,!1,tf),ln(t,n)}}function cv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;ef.set(n),s.uniformMatrix3fv(this.addr,!1,ef),ln(t,n)}}function lv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Qu.set(n),s.uniformMatrix4fv(this.addr,!1,Qu),ln(t,n)}}function hv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function uv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function fv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function dv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function pv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function vv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Qf:$f;t.setTexture2D(e||r,i)}function _v(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||td,i)}function yv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nd,i)}function Mv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ed,i)}function bv(s){switch(s){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Sv(s,e){s.uniform1fv(this.addr,e)}function wv(s,e){let t=lr(e,this.size,2);s.uniform2fv(this.addr,t)}function Ev(s,e){let t=lr(e,this.size,3);s.uniform3fv(this.addr,t)}function Tv(s,e){let t=lr(e,this.size,4);s.uniform4fv(this.addr,t)}function Av(s,e){let t=lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rv(s,e){let t=lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cv(s,e){let t=lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pv(s,e){s.uniform1iv(this.addr,e)}function Lv(s,e){s.uniform2iv(this.addr,e)}function Iv(s,e){s.uniform3iv(this.addr,e)}function Nv(s,e){s.uniform4iv(this.addr,e)}function Dv(s,e){s.uniform1uiv(this.addr,e)}function Uv(s,e){s.uniform2uiv(this.addr,e)}function zv(s,e){s.uniform3uiv(this.addr,e)}function Fv(s,e){s.uniform4uiv(this.addr,e)}function Ov(s,e,t){let n=this.cache,i=e.length,r=ka(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$f,r[o])}function Bv(s,e,t){let n=this.cache,i=e.length,r=ka(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||td,r[o])}function kv(s,e,t){let n=this.cache,i=e.length,r=ka(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nd,r[o])}function Hv(s,e,t){let n=this.cache,i=e.length,r=ka(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ed,r[o])}function Gv(s){switch(s){case 5126:return Sv;case 35664:return wv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Nv;case 5125:return Dv;case 36294:return Uv;case 36295:return zv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function nf(s,e){s.seq.push(e),s.map[e.id]=e}function Vv(s,e,t){let n=s.name,i=n.length;for(Oc.lastIndex=0;;){let r=Oc.exec(n),o=Oc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nf(t,l===void 0?new sl(a,s,e):new rl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ol(a),nf(t,u)),t=u}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Vv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function sf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Wv=37297,Xv=0;function qv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Yv(s){let e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(s),n;switch(e===t?n="":e===ea&&t===Qo?n="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(n="LinearSRGBToLinearDisplayP3"),s){case on:case Ba:return[n,"LinearTransferOETF"];case Lt:case Wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function rf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qv(s.getShaderSource(e),o)}else return i}function Zv(s,e){let t=Yv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kv(s,e){let t;switch(e){case Jp:t="Linear";break;case $p:t="Reinhard";break;case Qp:t="OptimizedCineon";break;case em:t="ACESFilmic";break;case nm:t="AgX";break;case tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function Jv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gs).join(`
`)}function $v(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Gs(s){return s!==""}function of(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(s){return s.replace(e_,n_)}var t_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n_(s,e){let t=vt[e];if(t===void 0){let n=t_.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(s){return s.replace(i_,s_)}function s_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function l_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=r_(t),l=o_(t),h=a_(t),u=c_(t),f=l_(t),d=t.isWebGL2?"":jv(t),p=Jv(t),v=$v(r),g=i.createProgram(),m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[d,lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Zv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=al(o),o=of(o,t),o=af(o,t),a=al(a),a=of(a,t),a=af(a,t),o=cf(o),a=cf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=x+m+o,S=x+_+a,b=sf(i,i.VERTEX_SHADER,y),E=sf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(U){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(E).trim(),H=!0,J=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{let Q=rf(i,b,"vertex"),Y=rf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+Q+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||L==="")&&(J=!1);J&&(U.diagnostics={runnable:H,programLog:k,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:_}})}i.deleteShader(b),i.deleteShader(E),M=new qs(i,g),w=Qv(i,g)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,Wv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var u_=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}};function f_(s,e,t,n,i,r,o){let a=new ca,c=new cl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function g(M,w,I,U,k){let P=U.fog,L=k.geometry,H=M.isMeshStandardMaterial?U.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Q=J&&J.mapping===za?J.image.height:null,Y=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=K!==void 0?K.length:0,ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let X,ee,ue,de;if(Y){let z=ii[Y];X=z.vertexShader,ee=z.fragmentShader}else X=M.vertexShader,ee=M.fragmentShader,c.update(M),ue=c.getVertexShaderID(M),de=c.getFragmentShaderID(M);let Te=s.getRenderTarget(),We=k.isInstancedMesh===!0,it=k.isBatchedMesh===!0,pe=!!M.map,ne=!!M.matcap,N=!!J,ve=!!M.aoMap,ce=!!M.lightMap,ye=!!M.bumpMap,le=!!M.normalMap,ke=!!M.displacementMap,Pe=!!M.emissiveMap,C=!!M.metalnessMap,A=!!M.roughnessMap,$=M.anisotropy>0,me=M.clearcoat>0,_e=M.iridescence>0,xe=M.sheen>0,qe=M.transmission>0,Ne=$&&!!M.anisotropyMap,He=me&&!!M.clearcoatMap,he=me&&!!M.clearcoatNormalMap,ht=me&&!!M.clearcoatRoughnessMap,ge=_e&&!!M.iridescenceMap,Tt=_e&&!!M.iridescenceThicknessMap,gt=xe&&!!M.sheenColorMap,ct=xe&&!!M.sheenRoughnessMap,et=!!M.specularMap,Ve=!!M.specularColorMap,dt=!!M.specularIntensityMap,Ct=qe&&!!M.transmissionMap,Wt=qe&&!!M.thicknessMap,st=!!M.gradientMap,we=!!M.alphaMap,G=M.alphaTest>0,Le=!!M.alphaHash,De=!!M.extensions,rt=!!L.attributes.uv1,F=!!L.attributes.uv2,Z=!!L.attributes.uv3,O=Oi;return M.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(O=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ee,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:it,instancing:We,instancingColor:We&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:on,map:pe,matcap:ne,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:Q,aoMap:ve,lightMap:ce,bumpMap:ye,normalMap:le,displacementMap:f&&ke,emissiveMap:Pe,normalMapObjectSpace:le&&M.normalMapType===xm,normalMapTangentSpace:le&&M.normalMapType===Vl,metalnessMap:C,roughnessMap:A,anisotropy:$,anisotropyMap:Ne,clearcoat:me,clearcoatMap:He,clearcoatNormalMap:he,clearcoatRoughnessMap:ht,iridescence:_e,iridescenceMap:ge,iridescenceThicknessMap:Tt,sheen:xe,sheenColorMap:gt,sheenRoughnessMap:ct,specularMap:et,specularColorMap:Ve,specularIntensityMap:dt,transmission:qe,transmissionMap:Ct,thicknessMap:Wt,gradientMap:st,opaque:M.transparent===!1&&M.blending===Ws,alphaMap:we,alphaTest:G,alphaHash:Le,combine:M.combine,mapUv:pe&&v(M.map.channel),aoMapUv:ve&&v(M.aoMap.channel),lightMapUv:ce&&v(M.lightMap.channel),bumpMapUv:ye&&v(M.bumpMap.channel),normalMapUv:le&&v(M.normalMap.channel),displacementMapUv:ke&&v(M.displacementMap.channel),emissiveMapUv:Pe&&v(M.emissiveMap.channel),metalnessMapUv:C&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:Ne&&v(M.anisotropyMap.channel),clearcoatMapUv:He&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(M.sheenRoughnessMap.channel),specularMapUv:et&&v(M.specularMap.channel),specularColorMapUv:Ve&&v(M.specularColorMap.channel),specularIntensityMapUv:dt&&v(M.specularIntensityMap.channel),transmissionMapUv:Ct&&v(M.transmissionMap.channel),thicknessMapUv:Wt&&v(M.thicknessMap.channel),alphaMapUv:we&&v(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(le||$),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:rt,vertexUv2s:F,vertexUv3s:Z,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(pe||we),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:O,useLegacyLights:s._useLegacyLights,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&Pt.getTransfer(M.map.colorSpace)===kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:De&&M.extensions.derivatives===!0,extensionFragDepth:De&&M.extensions.fragDepth===!0,extensionDrawBuffers:De&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(w,M),x(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let w=p[M.type],I;if(w){let U=ii[w];I=t0.clone(U.uniforms)}else I=M.uniforms;return I}function S(M,w){let I;for(let U=0,k=l.length;U<k;U++){let P=l[U];if(P.cacheKey===w){I=P,++I.usedTimes;break}}return I===void 0&&(I=new h_(s,w,M,r),l.push(I)),I}function b(M){if(--M.usedTimes===0){let w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:R}}function d_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function p_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,v,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function a(u,f,d,p,v,g){let m=o(u,f,d,p,v,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,p,v,g){let m=o(u,f,d,p,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||p_),n.length>1&&n.sort(f||hf),i.length>1&&i.sort(f||hf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function m_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new uf,s.set(n,[o])):i>=r.length?(o=new uf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function g_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function x_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var v_=0;function __(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function y_(s,e){let t=new g_,n=x_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new ot,a=new ot;function c(h,u){let f=0,d=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let v=0,g=0,m=0,_=0,x=0,y=0,S=0,b=0,E=0,R=0,M=0;h.sort(__);let w=u===!0?Math.PI:1;for(let U=0,k=h.length;U<k;U++){let P=h[U],L=P.color,H=P.intensity,J=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=L.r*H*w,d+=L.g*H*w,p+=L.b*H*w;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);M++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let K=P.shadow,ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[v]=ie,i.directionalShadowMap[v]=Q,i.directionalShadowMatrix[v]=P.shadow.matrix,y++}i.directional[v]=Y,v++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(L).multiplyScalar(H*w),Y.distance=J,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[m]=Y;let K=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[m]=K.matrix,P.castShadow){let ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[m]=ie,i.spotShadowMap[m]=Q,b++}m++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(L).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=Y,_++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*w),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let K=P.shadow,ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(H*w),Y.groundColor.copy(P.groundColor).multiplyScalar(H*w),i.hemi[x]=Y,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let I=i.hash;(I.directionalLength!==v||I.pointLength!==g||I.spotLength!==m||I.rectAreaLength!==_||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==b||I.numSpotMaps!==E||I.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=M,I.directionalLength=v,I.pointLength=g,I.spotLength=m,I.rectAreaLength=_,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=b,I.numSpotMaps=E,I.numLightProbes=M,i.version=v_++)}function l(h,u){let f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let y=h[_];if(y.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function ff(s,e){let t=new y_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function M_(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new ff(s,e),t.set(r,[c])):o>=a.length?(c=new ff(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var hl=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(s,e,t){let n=new Ur,i=new be,r=new be,o=new At,a=new hl({depthPacking:gm}),c=new ul,l={},h=t.maxTextureSize,u={[oi]:un,[un]:oi,[Ht]:Ht},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Rt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Xe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let m=this.type;this.render=function(b,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Fi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=m!==yi&&this.type===yi,P=m===yi&&this.type!==yi;for(let L=0,H=b.length;L<H;L++){let J=b[L],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let Y=Q.getFrameExtents();if(i.multiply(Y),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,Q.mapSize.y=r.y)),Q.map===null||k===!0||P===!0){let ie=this.type!==yi?{minFilter:jt,magFilter:jt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new $n(i.x,i.y,ie),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();let K=Q.getViewportCount();for(let ie=0;ie<K;ie++){let ae=Q.getViewport(ie);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),U.viewport(o),Q.updateMatrices(J,ie),n=Q.getFrustum(),y(E,R,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===yi&&_(Q,R),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,w,I)};function _(b,E){let R=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,R,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,R,d,v,null)}function x(b,E,R,M){let w=null,I=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)w=I;else if(w=R.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let U=w.uuid,k=E.uuid,P=l[U];P===void 0&&(P={},l[U]=P);let L=P[k];L===void 0&&(L=w.clone(),P[k]=L,E.addEventListener("dispose",S)),w=L}if(w.visible=E.visible,w.wireframe=E.wireframe,M===yi?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=s.properties.get(w);U.light=R}return w}function y(b,E,R,M,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===yi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let k=e.update(b),P=b.material;if(Array.isArray(P)){let L=k.groups;for(let H=0,J=L.length;H<J;H++){let Q=L[H],Y=P[Q.materialIndex];if(Y&&Y.visible){let K=x(b,Y,M,w);b.onBeforeShadow(s,b,E,R,k,K,Q),s.renderBufferDirect(R,null,k,K,b,Q),b.onAfterShadow(s,b,E,R,k,K,Q)}}}else if(P.visible){let L=x(b,P,M,w);b.onBeforeShadow(s,b,E,R,k,L,null),s.renderBufferDirect(R,null,k,L,b,null),b.onAfterShadow(s,b,E,R,k,L,null)}}let U=b.children;for(let k=0,P=U.length;k<P;k++)y(U[k],E,R,M,w)}function S(b){b.target.removeEventListener("dispose",S);for(let R in l){let M=l[R],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function E_(s,e,t){let n=t.isWebGL2;function i(){let G=!1,Le=new At,De=null,rt=new At(0,0,0,0);return{setMask:function(F){De!==F&&!G&&(s.colorMask(F,F,F,F),De=F)},setLocked:function(F){G=F},setClear:function(F,Z,O,te,z){z===!0&&(F*=te,Z*=te,O*=te),Le.set(F,Z,O,te),rt.equals(Le)===!1&&(s.clearColor(F,Z,O,te),rt.copy(Le))},reset:function(){G=!1,De=null,rt.set(-1,0,0,0)}}}function r(){let G=!1,Le=null,De=null,rt=null;return{setTest:function(F){F?it(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(F){Le!==F&&!G&&(s.depthMask(F),Le=F)},setFunc:function(F){if(De!==F){switch(F){case Gp:s.depthFunc(s.NEVER);break;case Vp:s.depthFunc(s.ALWAYS);break;case Wp:s.depthFunc(s.LESS);break;case Ko:s.depthFunc(s.LEQUAL);break;case Xp:s.depthFunc(s.EQUAL);break;case qp:s.depthFunc(s.GEQUAL);break;case Yp:s.depthFunc(s.GREATER);break;case Zp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=F}},setLocked:function(F){G=F},setClear:function(F){rt!==F&&(s.clearDepth(F),rt=F)},reset:function(){G=!1,Le=null,De=null,rt=null}}}function o(){let G=!1,Le=null,De=null,rt=null,F=null,Z=null,O=null,te=null,z=null;return{setTest:function(V){G||(V?it(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(V){Le!==V&&!G&&(s.stencilMask(V),Le=V)},setFunc:function(V,re,fe){(De!==V||rt!==re||F!==fe)&&(s.stencilFunc(V,re,fe),De=V,rt=re,F=fe)},setOp:function(V,re,fe){(Z!==V||O!==re||te!==fe)&&(s.stencilOp(V,re,fe),Z=V,O=re,te=fe)},setLocked:function(V){G=V},setClear:function(V){z!==V&&(s.clearStencil(V),z=V)},reset:function(){G=!1,Le=null,De=null,rt=null,F=null,Z=null,O=null,te=null,z=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,y=null,S=null,b=null,E=null,R=null,M=new Oe(0,0,0),w=0,I=!1,U=null,k=null,P=null,L=null,H=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,Y=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=Y>=2);let ie=null,ae={},X=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ue=new At().fromArray(X),de=new At().fromArray(ee);function Te(G,Le,De,rt){let F=new Uint8Array(4),Z=s.createTexture();s.bindTexture(G,Z),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let O=0;O<De;O++)n&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Le,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,F):s.texImage2D(Le+O,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,F);return Z}let We={};We[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),We[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),We[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),it(s.DEPTH_TEST),c.setFunc(Ko),Pe(!1),C(jh),it(s.CULL_FACE),le(Fi);function it(G){f[G]!==!0&&(s.enable(G),f[G]=!0)}function pe(G){f[G]!==!1&&(s.disable(G),f[G]=!1)}function ne(G,Le){return d[G]!==Le?(s.bindFramebuffer(G,Le),d[G]=Le,n&&(G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Le)),!0):!1}function N(G,Le){let De=v,rt=!1;if(G)if(De=p.get(Le),De===void 0&&(De=[],p.set(Le,De)),G.isWebGLMultipleRenderTargets){let F=G.texture;if(De.length!==F.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,O=F.length;Z<O;Z++)De[Z]=s.COLOR_ATTACHMENT0+Z;De.length=F.length,rt=!0}}else De[0]!==s.COLOR_ATTACHMENT0&&(De[0]=s.COLOR_ATTACHMENT0,rt=!0);else De[0]!==s.BACK&&(De[0]=s.BACK,rt=!0);rt&&(t.isWebGL2?s.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function ve(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let ce={[ts]:s.FUNC_ADD,[Ap]:s.FUNC_SUBTRACT,[Rp]:s.FUNC_REVERSE_SUBTRACT};if(n)ce[Qh]=s.MIN,ce[eu]=s.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(ce[Qh]=G.MIN_EXT,ce[eu]=G.MAX_EXT)}let ye={[Cp]:s.ZERO,[Pp]:s.ONE,[Lp]:s.SRC_COLOR,[Yc]:s.SRC_ALPHA,[Fp]:s.SRC_ALPHA_SATURATE,[Up]:s.DST_COLOR,[Np]:s.DST_ALPHA,[Ip]:s.ONE_MINUS_SRC_COLOR,[Zc]:s.ONE_MINUS_SRC_ALPHA,[zp]:s.ONE_MINUS_DST_COLOR,[Dp]:s.ONE_MINUS_DST_ALPHA,[Op]:s.CONSTANT_COLOR,[Bp]:s.ONE_MINUS_CONSTANT_COLOR,[kp]:s.CONSTANT_ALPHA,[Hp]:s.ONE_MINUS_CONSTANT_ALPHA};function le(G,Le,De,rt,F,Z,O,te,z,V){if(G===Fi){m===!0&&(pe(s.BLEND),m=!1);return}if(m===!1&&(it(s.BLEND),m=!0),G!==Tp){if(G!==_||V!==I){if((x!==ts||b!==ts)&&(s.blendEquation(s.FUNC_ADD),x=ts,b=ts),V)switch(G){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.ONE,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,S=null,E=null,R=null,M.set(0,0,0),w=0,_=G,I=V}return}F=F||Le,Z=Z||De,O=O||rt,(Le!==x||F!==b)&&(s.blendEquationSeparate(ce[Le],ce[F]),x=Le,b=F),(De!==y||rt!==S||Z!==E||O!==R)&&(s.blendFuncSeparate(ye[De],ye[rt],ye[Z],ye[O]),y=De,S=rt,E=Z,R=O),(te.equals(M)===!1||z!==w)&&(s.blendColor(te.r,te.g,te.b,z),M.copy(te),w=z),_=G,I=!1}function ke(G,Le){G.side===Ht?pe(s.CULL_FACE):it(s.CULL_FACE);let De=G.side===un;Le&&(De=!De),Pe(De),G.blending===Ws&&G.transparent===!1?le(Fi):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let rt=G.stencilWrite;l.setTest(rt),rt&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(G){U!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),U=G)}function C(G){G!==Sp?(it(s.CULL_FACE),G!==k&&(G===jh?s.cullFace(s.BACK):G===wp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),k=G}function A(G){G!==P&&(Q&&s.lineWidth(G),P=G)}function $(G,Le,De){G?(it(s.POLYGON_OFFSET_FILL),(L!==Le||H!==De)&&(s.polygonOffset(Le,De),L=Le,H=De)):pe(s.POLYGON_OFFSET_FILL)}function me(G){G?it(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function _e(G){G===void 0&&(G=s.TEXTURE0+J-1),ie!==G&&(s.activeTexture(G),ie=G)}function xe(G,Le,De){De===void 0&&(ie===null?De=s.TEXTURE0+J-1:De=ie);let rt=ae[De];rt===void 0&&(rt={type:void 0,texture:void 0},ae[De]=rt),(rt.type!==G||rt.texture!==Le)&&(ie!==De&&(s.activeTexture(De),ie=De),s.bindTexture(G,Le||We[G]),rt.type=G,rt.texture=Le)}function qe(){let G=ae[ie];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(G){ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function Ct(G){de.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),de.copy(G))}function Wt(G,Le){let De=u.get(Le);De===void 0&&(De=new WeakMap,u.set(Le,De));let rt=De.get(G);rt===void 0&&(rt=s.getUniformBlockIndex(Le,G.name),De.set(G,rt))}function st(G,Le){let rt=u.get(Le).get(G);h.get(Le)!==rt&&(s.uniformBlockBinding(Le,rt,G.__bindingPointIndex),h.set(Le,rt))}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ie=null,ae={},d={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,y=null,S=null,b=null,E=null,R=null,M=new Oe(0,0,0),w=0,I=!1,U=null,k=null,P=null,L=null,H=null,ue.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:it,disable:pe,bindFramebuffer:ne,drawBuffers:N,useProgram:ve,setBlending:le,setMaterial:ke,setFlipSided:Pe,setCullFace:C,setLineWidth:A,setPolygonOffset:$,setScissorTest:me,activeTexture:_e,bindTexture:xe,unbindTexture:qe,compressedTexImage2D:Ne,compressedTexImage3D:He,texImage2D:et,texImage3D:Ve,updateUBOMapping:Wt,uniformBlockBinding:st,texStorage2D:gt,texStorage3D:ct,texSubImage2D:he,texSubImage3D:ht,compressedTexSubImage2D:ge,compressedTexSubImage3D:Tt,scissor:dt,viewport:Ct,reset:we}}function T_(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,A){return d?new OffscreenCanvas(C,A):Dr("canvas")}function v(C,A,$,me){let _e=1;if((C.width>me||C.height>me)&&(_e=me/Math.max(C.width,C.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let xe=A?ia:Math.floor,qe=xe(_e*C.width),Ne=xe(_e*C.height);u===void 0&&(u=p(qe,Ne));let He=$?p(qe,Ne):u;return He.width=qe,He.height=Ne,He.getContext("2d").drawImage(C,0,0,qe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+qe+"x"+Ne+")."),He}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Qc(C.width)&&Qc(C.height)}function m(C){return a?!1:C.wrapS!==Dn||C.wrapT!==Dn||C.minFilter!==jt&&C.minFilter!==Jt}function _(C,A){return C.generateMipmaps&&A&&C.minFilter!==jt&&C.minFilter!==Jt}function x(C){s.generateMipmap(C)}function y(C,A,$,me,_e=!1){if(a===!1)return A;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe=A;if(A===s.RED&&($===s.FLOAT&&(xe=s.R32F),$===s.HALF_FLOAT&&(xe=s.R16F),$===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(xe=s.R8UI),$===s.UNSIGNED_SHORT&&(xe=s.R16UI),$===s.UNSIGNED_INT&&(xe=s.R32UI),$===s.BYTE&&(xe=s.R8I),$===s.SHORT&&(xe=s.R16I),$===s.INT&&(xe=s.R32I)),A===s.RG&&($===s.FLOAT&&(xe=s.RG32F),$===s.HALF_FLOAT&&(xe=s.RG16F),$===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RGBA){let qe=_e?$o:Pt.getTransfer(me);$===s.FLOAT&&(xe=s.RGBA32F),$===s.HALF_FLOAT&&(xe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(xe=qe===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function S(C,A,$){return _(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Jt?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function b(C){return C===jt||C===jo||C===Er?s.NEAREST:s.LINEAR}function E(C){let A=C.target;A.removeEventListener("dispose",E),M(A),A.isVideoTexture&&h.delete(A)}function R(C){let A=C.target;A.removeEventListener("dispose",R),I(A)}function M(C){let A=n.get(C);if(A.__webglInit===void 0)return;let $=C.source,me=f.get($);if(me){let _e=me[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&w(C),Object.keys(me).length===0&&f.delete($)}n.remove(C)}function w(C){let A=n.get(C);s.deleteTexture(A.__webglTexture);let $=C.source,me=f.get($);delete me[A.__cacheKey],o.memory.textures--}function I(C){let A=C.texture,$=n.get(C),me=n.get(A);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray($.__webglFramebuffer[_e]))for(let xe=0;xe<$.__webglFramebuffer[_e].length;xe++)s.deleteFramebuffer($.__webglFramebuffer[_e][xe]);else s.deleteFramebuffer($.__webglFramebuffer[_e]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[_e])}else{if(Array.isArray($.__webglFramebuffer))for(let _e=0;_e<$.__webglFramebuffer.length;_e++)s.deleteFramebuffer($.__webglFramebuffer[_e]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let _e=0;_e<$.__webglColorRenderbuffer.length;_e++)$.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[_e]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let _e=0,xe=A.length;_e<xe;_e++){let qe=n.get(A[_e]);qe.__webglTexture&&(s.deleteTexture(qe.__webglTexture),o.memory.textures--),n.remove(A[_e])}n.remove(A),n.remove(C)}let U=0;function k(){U=0}function P(){let C=U;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function L(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function H(C,A){let $=n.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){let me=C.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue($,C,A);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+A)}function J(C,A){let $=n.get(C);if(C.version>0&&$.__version!==C.version){ue($,C,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+A)}function Q(C,A){let $=n.get(C);if(C.version>0&&$.__version!==C.version){ue($,C,A);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+A)}function Y(C,A){let $=n.get(C);if(C.version>0&&$.__version!==C.version){de($,C,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+A)}let K={[os]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},ie={[jt]:s.NEAREST,[jo]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[kl]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},ae={[vm]:s.NEVER,[wm]:s.ALWAYS,[_m]:s.LESS,[qf]:s.LEQUAL,[ym]:s.EQUAL,[Sm]:s.GEQUAL,[Mm]:s.GREATER,[bm]:s.NOTEQUAL};function X(C,A,$){if($?(s.texParameteri(C,s.TEXTURE_WRAP_S,K[A.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[A.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[A.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ie[A.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ie[A.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Dn||A.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==jt&&A.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===jt||A.minFilter!==Er&&A.minFilter!==Wn||A.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(C,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ee(C,A){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",E));let me=A.source,_e=f.get(me);_e===void 0&&(_e={},f.set(me,_e));let xe=L(A);if(xe!==C.__cacheKey){_e[xe]===void 0&&(_e[xe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),_e[xe].usedTimes++;let qe=_e[C.__cacheKey];qe!==void 0&&(_e[C.__cacheKey].usedTimes--,qe.usedTimes===0&&w(A)),C.__cacheKey=xe,C.__webglTexture=_e[xe].texture}return $}function ue(C,A,$){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);let _e=ee(C,A),xe=A.source;t.bindTexture(me,C.__webglTexture,s.TEXTURE0+$);let qe=n.get(xe);if(xe.version!==qe.__version||_e===!0){t.activeTexture(s.TEXTURE0+$);let Ne=Pt.getPrimaries(Pt.workingColorSpace),He=A.colorSpace===bn?null:Pt.getPrimaries(A.colorSpace),he=A.colorSpace===bn||Ne===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ht=m(A)&&g(A.image)===!1,ge=v(A.image,ht,!1,i.maxTextureSize);ge=Pe(A,ge);let Tt=g(ge)||a,gt=r.convert(A.format,A.colorSpace),ct=r.convert(A.type),et=y(A.internalFormat,gt,ct,A.colorSpace,A.isVideoTexture);X(me,A,Tt);let Ve,dt=A.mipmaps,Ct=a&&A.isVideoTexture!==!0&&et!==Vf,Wt=qe.__version===void 0||_e===!0,st=S(A,ge,Tt);if(A.isDepthTexture)et=s.DEPTH_COMPONENT,a?A.type===bi?et=s.DEPTH_COMPONENT32F:A.type===Ui?et=s.DEPTH_COMPONENT24:A.type===is?et=s.DEPTH24_STENCIL8:et=s.DEPTH_COMPONENT16:A.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ss&&et===s.DEPTH_COMPONENT&&A.type!==Hl&&A.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ui,ct=r.convert(A.type)),A.format===Ks&&et===s.DEPTH_COMPONENT&&(et=s.DEPTH_STENCIL,A.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=is,ct=r.convert(A.type))),Wt&&(Ct?t.texStorage2D(s.TEXTURE_2D,1,et,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,gt,ct,null));else if(A.isDataTexture)if(dt.length>0&&Tt){Ct&&Wt&&t.texStorage2D(s.TEXTURE_2D,st,et,dt[0].width,dt[0].height);for(let we=0,G=dt.length;we<G;we++)Ve=dt[we],Ct?t.texSubImage2D(s.TEXTURE_2D,we,0,0,Ve.width,Ve.height,gt,ct,Ve.data):t.texImage2D(s.TEXTURE_2D,we,et,Ve.width,Ve.height,0,gt,ct,Ve.data);A.generateMipmaps=!1}else Ct?(Wt&&t.texStorage2D(s.TEXTURE_2D,st,et,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,gt,ct,ge.data)):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,gt,ct,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ct&&Wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,st,et,dt[0].width,dt[0].height,ge.depth);for(let we=0,G=dt.length;we<G;we++)Ve=dt[we],A.format!==Gn?gt!==null?Ct?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ve.width,Ve.height,ge.depth,gt,Ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,et,Ve.width,Ve.height,ge.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ve.width,Ve.height,ge.depth,gt,ct,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,we,et,Ve.width,Ve.height,ge.depth,0,gt,ct,Ve.data)}else{Ct&&Wt&&t.texStorage2D(s.TEXTURE_2D,st,et,dt[0].width,dt[0].height);for(let we=0,G=dt.length;we<G;we++)Ve=dt[we],A.format!==Gn?gt!==null?Ct?t.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Ve.width,Ve.height,gt,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,we,et,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(s.TEXTURE_2D,we,0,0,Ve.width,Ve.height,gt,ct,Ve.data):t.texImage2D(s.TEXTURE_2D,we,et,Ve.width,Ve.height,0,gt,ct,Ve.data)}else if(A.isDataArrayTexture)Ct?(Wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,st,et,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,gt,ct,ge.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,ge.width,ge.height,ge.depth,0,gt,ct,ge.data);else if(A.isData3DTexture)Ct?(Wt&&t.texStorage3D(s.TEXTURE_3D,st,et,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,gt,ct,ge.data)):t.texImage3D(s.TEXTURE_3D,0,et,ge.width,ge.height,ge.depth,0,gt,ct,ge.data);else if(A.isFramebufferTexture){if(Wt)if(Ct)t.texStorage2D(s.TEXTURE_2D,st,et,ge.width,ge.height);else{let we=ge.width,G=ge.height;for(let Le=0;Le<st;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,we,G,0,gt,ct,null),we>>=1,G>>=1}}else if(dt.length>0&&Tt){Ct&&Wt&&t.texStorage2D(s.TEXTURE_2D,st,et,dt[0].width,dt[0].height);for(let we=0,G=dt.length;we<G;we++)Ve=dt[we],Ct?t.texSubImage2D(s.TEXTURE_2D,we,0,0,gt,ct,Ve):t.texImage2D(s.TEXTURE_2D,we,et,gt,ct,Ve);A.generateMipmaps=!1}else Ct?(Wt&&t.texStorage2D(s.TEXTURE_2D,st,et,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,ct,ge)):t.texImage2D(s.TEXTURE_2D,0,et,gt,ct,ge);_(A,Tt)&&x(me),qe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function de(C,A,$){if(A.image.length!==6)return;let me=ee(C,A),_e=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+$);let xe=n.get(_e);if(_e.version!==xe.__version||me===!0){t.activeTexture(s.TEXTURE0+$);let qe=Pt.getPrimaries(Pt.workingColorSpace),Ne=A.colorSpace===bn?null:Pt.getPrimaries(A.colorSpace),He=A.colorSpace===bn||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let he=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let we=0;we<6;we++)!he&&!ht?ge[we]=v(A.image[we],!1,!0,i.maxCubemapSize):ge[we]=ht?A.image[we].image:A.image[we],ge[we]=Pe(A,ge[we]);let Tt=ge[0],gt=g(Tt)||a,ct=r.convert(A.format,A.colorSpace),et=r.convert(A.type),Ve=y(A.internalFormat,ct,et,A.colorSpace),dt=a&&A.isVideoTexture!==!0,Ct=xe.__version===void 0||me===!0,Wt=S(A,Tt,gt);X(s.TEXTURE_CUBE_MAP,A,gt);let st;if(he){dt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Ve,Tt.width,Tt.height);for(let we=0;we<6;we++){st=ge[we].mipmaps;for(let G=0;G<st.length;G++){let Le=st[G];A.format!==Gn?ct!==null?dt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Le.width,Le.height,ct,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Le.width,Le.height,ct,et,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ve,Le.width,Le.height,0,ct,et,Le.data)}}}else{st=A.mipmaps,dt&&Ct&&(st.length>0&&Wt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Ve,ge[0].width,ge[0].height));for(let we=0;we<6;we++)if(ht){dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ge[we].width,ge[we].height,ct,et,ge[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ve,ge[we].width,ge[we].height,0,ct,et,ge[we].data);for(let G=0;G<st.length;G++){let De=st[G].image[we].image;dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,De.width,De.height,ct,et,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ve,De.width,De.height,0,ct,et,De.data)}}else{dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ct,et,ge[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ve,ct,et,ge[we]);for(let G=0;G<st.length;G++){let Le=st[G];dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,ct,et,Le.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ve,ct,et,Le.image[we])}}}_(A,gt)&&x(s.TEXTURE_CUBE_MAP),xe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Te(C,A,$,me,_e,xe){let qe=r.convert($.format,$.colorSpace),Ne=r.convert($.type),He=y($.internalFormat,qe,Ne,$.colorSpace);if(!n.get(A).__hasExternalTextures){let ht=Math.max(1,A.width>>xe),ge=Math.max(1,A.height>>xe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,xe,He,ht,ge,A.depth,0,qe,Ne,null):t.texImage2D(_e,xe,He,ht,ge,0,qe,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),le(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,n.get($).__webglTexture,0,ye(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,n.get($).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(C,A,$){if(s.bindRenderbuffer(s.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let me=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||le(A)){let _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===bi?me=s.DEPTH_COMPONENT32F:_e.type===Ui&&(me=s.DEPTH_COMPONENT24));let xe=ye(A);le(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,me,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,me,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let me=ye(A);$&&le(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):le(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<me.length;_e++){let xe=me[_e],qe=r.convert(xe.format,xe.colorSpace),Ne=r.convert(xe.type),He=y(xe.internalFormat,qe,Ne,xe.colorSpace),he=ye(A);$&&le(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,He,A.width,A.height):le(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,He,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,He,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);let me=n.get(A.depthTexture).__webglTexture,_e=ye(A);if(A.depthTexture.format===ss)le(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(A.depthTexture.format===Ks)le(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function pe(C){let A=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");it(A.__webglFramebuffer,C)}else if($){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=s.createRenderbuffer(),We(A.__webglDepthbuffer[me],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),We(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(C,A,$){let me=n.get(C);A!==void 0&&Te(me.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&pe(C)}function N(C){let A=C.texture,$=n.get(C),me=n.get(A);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,o.memory.textures++);let _e=C.isWebGLCubeRenderTarget===!0,xe=C.isWebGLMultipleRenderTargets===!0,qe=g(C)||a;if(_e){$.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ne]=[];for(let He=0;He<A.mipmaps.length;He++)$.__webglFramebuffer[Ne][He]=s.createFramebuffer()}else $.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)$.__webglFramebuffer[Ne]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(xe)if(i.drawBuffers){let Ne=C.texture;for(let He=0,he=Ne.length;He<he;He++){let ht=n.get(Ne[He]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&le(C)===!1){let Ne=xe?A:[A];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let He=0;He<Ne.length;He++){let he=Ne[He];$.__webglColorRenderbuffer[He]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[He]);let ht=r.convert(he.format,he.colorSpace),ge=r.convert(he.type),Tt=y(he.internalFormat,ht,ge,he.colorSpace,C.isXRRenderTarget===!0),gt=ye(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,$.__webglColorRenderbuffer[He])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),We($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),X(s.TEXTURE_CUBE_MAP,A,qe);for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)Te($.__webglFramebuffer[Ne][He],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,He);else Te($.__webglFramebuffer[Ne],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);_(A,qe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){let Ne=C.texture;for(let He=0,he=Ne.length;He<he;He++){let ht=Ne[He],ge=n.get(ht);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),X(s.TEXTURE_2D,ht,qe),Te($.__webglFramebuffer,C,ht,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,0),_(ht,qe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,me.__webglTexture),X(Ne,A,qe),a&&A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)Te($.__webglFramebuffer[He],C,A,s.COLOR_ATTACHMENT0,Ne,He);else Te($.__webglFramebuffer,C,A,s.COLOR_ATTACHMENT0,Ne,0);_(A,qe)&&x(Ne),t.unbindTexture()}C.depthBuffer&&pe(C)}function ve(C){let A=g(C)||a,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let me=0,_e=$.length;me<_e;me++){let xe=$[me];if(_(xe,A)){let qe=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=n.get(xe).__webglTexture;t.bindTexture(qe,Ne),x(qe),t.unbindTexture()}}}function ce(C){if(a&&C.samples>0&&le(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,me=C.height,_e=s.COLOR_BUFFER_BIT,xe=[],qe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(C),He=C.isWebGLMultipleRenderTargets===!0;if(He)for(let he=0;he<A.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let he=0;he<A.length;he++){xe.push(s.COLOR_ATTACHMENT0+he),C.depthBuffer&&xe.push(qe);let ht=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ht===!1&&(C.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),He&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]),ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[qe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[qe])),He){let ge=n.get(A[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,$,me,0,0,$,me,_e,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),He)for(let he=0;he<A.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]);let ht=n.get(A[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function ye(C){return Math.min(i.maxSamples,C.samples)}function le(C){let A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(C){let A=o.render.frame;h.get(C)!==A&&(h.set(C,A),C.update())}function Pe(C,A){let $=C.colorSpace,me=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===$c||$!==on&&$!==bn&&(Pt.getTransfer($)===kt?a===!1?e.has("EXT_sRGB")===!0&&me===Gn?(C.format=$c,C.minFilter=Jt,C.generateMipmaps=!1):A=sa.sRGBToLinear(A):(me!==Gn||_e!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=ne,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=le}function A_(s,e,t){let n=t.isWebGL2;function i(r,o=bn){let a,c=Pt.getTransfer(o);if(r===ri)return s.UNSIGNED_BYTE;if(r===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sm)return s.BYTE;if(r===rm)return s.SHORT;if(r===Hl)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===as)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===om)return s.ALPHA;if(r===Gn)return s.RGBA;if(r===am)return s.LUMINANCE;if(r===cm)return s.LUMINANCE_ALPHA;if(r===ss)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===$c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===lm)return s.RED;if(r===kf)return s.RED_INTEGER;if(r===hm)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===uc||r===fc||r===dc||r===pc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nu||r===iu||r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===nu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===su)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ru)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ou||r===au)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ou)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===au)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===vu||r===_u||r===yu||r===Mu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===du)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_u)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mc||r===bu||r===Su)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===mc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Su)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===wu||r===Eu||r===Tu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===mc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var fl=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},R_={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dl=class extends Ei{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,v=t.getContextAttributes(),g=null,m=null,_=[],x=[],y=new be,S=null,b=new rn;b.layers.enable(1),b.viewport=new At;let E=new rn;E.layers.enable(2),E.viewport=new At;let R=[b,E],M=new fl;M.layers.enable(1),M.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new Cr,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new Cr,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new Cr,_[X]=ee),ee.getHandSpace()};function U(X){let ee=x.indexOf(X.inputSource);if(ee===-1)return;let ue=_[ee];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let X=0;X<_.length;X++){let ee=x[X];ee!==null&&(x[X]=null,_[X].disconnect(ee))}w=null,I=null,e.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new $n(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,ue=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Ks:ss,ue=v.stencil?is:Ui);let Te={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Te),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new $n(f.textureWidth,f.textureHeight,{format:Gn,type:ri,depthTexture:new da(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let We=e.properties.get(m);We.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let ee=0;ee<X.removed.length;ee++){let ue=X.removed[ee],de=x.indexOf(ue);de>=0&&(x[de]=null,_[de].disconnect(ue))}for(let ee=0;ee<X.added.length;ee++){let ue=X.added[ee],de=x.indexOf(ue);if(de===-1){for(let We=0;We<_.length;We++)if(We>=x.length){x.push(ue),de=We;break}else if(x[We]===null){x[We]=ue,de=We;break}if(de===-1)break}let Te=_[de];Te&&Te.connect(ue)}}let L=new D,H=new D;function J(X,ee,ue){L.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);let de=L.distanceTo(H),Te=ee.projectionMatrix.elements,We=ue.projectionMatrix.elements,it=Te[14]/(Te[10]-1),pe=Te[14]/(Te[10]+1),ne=(Te[9]+1)/Te[5],N=(Te[9]-1)/Te[5],ve=(Te[8]-1)/Te[0],ce=(We[8]+1)/We[0],ye=it*ve,le=it*ce,ke=de/(-ve+ce),Pe=ke*-ve;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(ke),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let C=it+ke,A=pe+ke,$=ye-Pe,me=le+(de-Pe),_e=ne*pe/A*C,xe=N*pe/A*C;X.projectionMatrix.makePerspective($,me,_e,xe,C,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Q(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=E.near=b.near=X.near,M.far=E.far=b.far=X.far,(w!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,I=M.far);let ee=X.parent,ue=M.cameras;Q(M,ee);for(let de=0;de<ue.length;de++)Q(ue[de],ee);ue.length===2?J(M,b,E):M.projectionMatrix.copy(b.projectionMatrix),Y(X,M,ee)};function Y(X,ee,ue){ue===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Js*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let K=null;function ie(X,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let de=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Te=0;Te<ue.length;Te++){let We=ue[Te],it=null;if(d!==null)it=d.getViewport(We);else{let ne=u.getViewSubImage(f,We);it=ne.viewport,Te===0&&(e.setRenderTargetTextures(m,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(m))}let pe=R[Te];pe===void 0&&(pe=new rn,pe.layers.enable(Te),pe.viewport=new At,R[Te]=pe),pe.matrix.fromArray(We.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(We.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(it.x,it.y,it.width,it.height),Te===0&&(M.matrix.copy(pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(pe)}}for(let ue=0;ue<_.length;ue++){let de=x[ue],Te=_[ue];de!==null&&Te!==void 0&&Te.update(de,ee,l||o)}K&&K(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let ae=new Jf;ae.setAnimationLoop(ie),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}};function C_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P_(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=i[_.id];y===void 0&&(p(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));let S=x.program;n.updateUBOMapping(_,S);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let x=u();_.__bindingPointIndex=x;let y=s.createBuffer(),S=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=i[_.id],y=_.uniforms,S=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,E=y.length;b<E;b++){let R=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,w=R.length;M<w;M++){let I=R[M];if(d(I,b,M,S)===!0){let U=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],P=0;for(let L=0;L<k.length;L++){let H=k[L],J=v(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+P,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,x,y,S){let b=_.value,E=x+"_"+y;if(S[E]===void 0)return typeof b=="number"||typeof b=="boolean"?S[E]=b:S[E]=b.clone(),!0;{let R=S[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return S[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function p(_){let x=_.uniforms,y=0,S=16;for(let E=0,R=x.length;E<R;E++){let M=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,I=M.length;w<I;w++){let U=M[w],k=Array.isArray(U.value)?U.value:[U.value];for(let P=0,L=k.length;P<L;P++){let H=k[P],J=v(H),Q=y%S;Q!==0&&S-Q<J.boundary&&(y+=S-Q),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=J.storage}}}let b=y%S;return b>0&&(y+=S-b),_.__size=y,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var zr=class{constructor(e={}){let{canvas:t=Bm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),p=new Int32Array(4),v=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;let x=this,y=!1,S=0,b=0,E=null,R=-1,M=null,w=new At,I=new At,U=null,k=new Oe(0),P=0,L=t.width,H=t.height,J=1,Q=null,Y=null,K=new At(0,0,L,H),ie=new At(0,0,L,H),ae=!1,X=new Ur,ee=!1,ue=!1,de=null,Te=new ot,We=new be,it=new D,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return E===null?J:1}let N=n;function ve(T,B){for(let W=0;W<T.length;W++){let j=T[W],q=t.getContext(j,B);if(q!==null)return q}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Le,!1),N===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),N=ve(B,T),N===null)throw ve(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ce,ye,le,ke,Pe,C,A,$,me,_e,xe,qe,Ne,He,he,ht,ge,Tt,gt,ct,et,Ve,dt,Ct;function Wt(){ce=new Kx(N),ye=new Vx(N,ce,e),ce.init(ye),Ve=new A_(N,ce,ye),le=new E_(N,ce,ye),ke=new $x(N),Pe=new d_,C=new T_(N,ce,le,Pe,ye,Ve,ke),A=new Xx(x),$=new Zx(x),me=new o0(N,ye),dt=new Hx(N,ce,me,ye),_e=new jx(N,me,ke,dt),xe=new nv(N,_e,me,ke),gt=new tv(N,ye,C),ht=new Wx(Pe),qe=new f_(x,A,$,ce,ye,dt,ht),Ne=new C_(x,Pe),He=new m_,he=new M_(ce,ye),Tt=new kx(x,A,$,le,xe,f,c),ge=new w_(x,xe,ye),Ct=new P_(N,ke,ye,le),ct=new Gx(N,ce,ke,ye),et=new Jx(N,ce,ke,ye),ke.programs=qe.programs,x.capabilities=ye,x.extensions=ce,x.properties=Pe,x.renderLists=He,x.shadowMap=ge,x.state=le,x.info=ke}Wt();let st=new dl(x,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(L,H,!1))},this.getSize=function(T){return T.set(L,H)},this.setSize=function(T,B,W=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,H=B,t.width=Math.floor(T*J),t.height=Math.floor(B*J),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(L*J,H*J).floor()},this.setDrawingBufferSize=function(T,B,W){L=T,H=B,J=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,B,W,j){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,B,W,j),le.viewport(w.copy(K).multiplyScalar(J).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,B,W,j){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,B,W,j),le.scissor(I.copy(ie).multiplyScalar(J).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){le.setScissorTest(ae=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(T=!0,B=!0,W=!0){let j=0;if(T){let q=!1;if(E!==null){let Me=E.texture.format;q=Me===Gf||Me===Hf||Me===kf}if(q){let Me=E.texture.type,Ue=Me===ri||Me===Ui||Me===Hl||Me===is||Me===Of||Me===Bf,Be=Tt.getClearColor(),Ze=Tt.getClearAlpha(),Qe=Be.r,Se=Be.g,Fe=Be.b;Ue?(d[0]=Qe,d[1]=Se,d[2]=Fe,d[3]=Ze,N.clearBufferuiv(N.COLOR,0,d)):(p[0]=Qe,p[1]=Se,p[2]=Fe,p[3]=Ze,N.clearBufferiv(N.COLOR,0,p))}else j|=N.COLOR_BUFFER_BIT}B&&(j|=N.DEPTH_BUFFER_BIT),W&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),He.dispose(),he.dispose(),Pe.dispose(),A.dispose(),$.dispose(),xe.dispose(),dt.dispose(),Ct.dispose(),qe.dispose(),st.dispose(),st.removeEventListener("sessionstart",z),st.removeEventListener("sessionend",V),de&&(de.dispose(),de=null),re.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=ke.autoReset,B=ge.enabled,W=ge.autoUpdate,j=ge.needsUpdate,q=ge.type;Wt(),ke.autoReset=T,ge.enabled=B,ge.autoUpdate=W,ge.needsUpdate=j,ge.type=q}function Le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){let B=T.target;B.removeEventListener("dispose",De),rt(B)}function rt(T){F(T),Pe.remove(T)}function F(T){let B=Pe.get(T).programs;B!==void 0&&(B.forEach(function(W){qe.releaseProgram(W)}),T.isShaderMaterial&&qe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,j,q,Me){B===null&&(B=pe);let Ue=q.isMesh&&q.matrixWorld.determinant()<0,Be=wt(T,B,W,j,q);le.setMaterial(j,Ue);let Ze=W.index,Qe=1;if(j.wireframe===!0){if(Ze=_e.getWireframeAttribute(W),Ze===void 0)return;Qe=2}let Se=W.drawRange,Fe=W.attributes.position,Ke=Se.start*Qe,ut=(Se.start+Se.count)*Qe;Me!==null&&(Ke=Math.max(Ke,Me.start*Qe),ut=Math.min(ut,(Me.start+Me.count)*Qe)),Ze!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,Ze.count)):Fe!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,Fe.count));let Et=ut-Ke;if(Et<0||Et===1/0)return;dt.setup(q,j,Be,W,Ze);let Bn,Dt=ct;if(Ze!==null&&(Bn=me.get(Ze),Dt=et,Dt.setIndex(Bn)),q.isMesh)j.wireframe===!0?(le.setLineWidth(j.wireframeLinewidth*ne()),Dt.setMode(N.LINES)):Dt.setMode(N.TRIANGLES);else if(q.isLine){let yt=j.linewidth;yt===void 0&&(yt=1),le.setLineWidth(yt*ne()),q.isLineSegments?Dt.setMode(N.LINES):q.isLineLoop?Dt.setMode(N.LINE_LOOP):Dt.setMode(N.LINE_STRIP)}else q.isPoints?Dt.setMode(N.POINTS):q.isSprite&&Dt.setMode(N.TRIANGLES);if(q.isBatchedMesh)Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Dt.renderInstances(Ke,Et,q.count);else if(W.isInstancedBufferGeometry){let yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ac=Math.min(W.instanceCount,yt);Dt.renderInstances(Ke,Et,ac)}else Dt.render(Ke,Et)};function Z(T,B,W){T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,tt(T,B,W),T.side=oi,T.needsUpdate=!0,tt(T,B,W),T.side=Ht):tt(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),g=he.get(W),g.init(),_.push(g),W.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),T!==W&&T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(x._useLegacyLights);let j=new Set;return T.traverse(function(q){let Me=q.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){let Be=Me[Ue];Z(Be,W,q),j.add(Be)}else Z(Me,W,q),j.add(Me)}),_.pop(),g=null,j},this.compileAsync=function(T,B,W=null){let j=this.compile(T,B,W);return new Promise(q=>{function Me(){if(j.forEach(function(Ue){Pe.get(Ue).currentProgram.isReady()&&j.delete(Ue)}),j.size===0){q(T);return}setTimeout(Me,10)}ce.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let O=null;function te(T){O&&O(T)}function z(){re.stop()}function V(){re.start()}let re=new Jf;re.setAnimationLoop(te),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(T){O=T,st.setAnimationLoop(T),T===null?re.stop():re.start()},st.addEventListener("sessionstart",z),st.addEventListener("sessionend",V),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,E),g=he.get(T,_.length),g.init(),_.push(g),Te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(Te),ue=this.localClippingEnabled,ee=ht.init(this.clippingPlanes,ue),v=He.get(T,m.length),v.init(),m.push(v),fe(T,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Q,Y),this.info.render.frame++,ee===!0&&ht.beginShadows();let W=g.state.shadowsArray;if(ge.render(W,T,B),ee===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(v,T),g.setupLights(x._useLegacyLights),B.isArrayCamera){let j=B.cameras;for(let q=0,Me=j.length;q<Me;q++){let Ue=j[q];Ee(v,T,Ue,Ue.viewport)}}else Ee(v,T,B);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,B),dt.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function fe(T,B,W,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){j&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);let Ue=xe.update(T),Be=T.material;Be.visible&&v.push(T,Ue,Be,W,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let Ue=xe.update(T),Be=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),it.copy(Ue.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Be)){let Ze=Ue.groups;for(let Qe=0,Se=Ze.length;Qe<Se;Qe++){let Fe=Ze[Qe],Ke=Be[Fe.materialIndex];Ke&&Ke.visible&&v.push(T,Ue,Ke,W,it.z,Fe)}}else Be.visible&&v.push(T,Ue,Be,W,it.z,null)}}let Me=T.children;for(let Ue=0,Be=Me.length;Ue<Be;Ue++)fe(Me[Ue],B,W,j)}function Ee(T,B,W,j){let q=T.opaque,Me=T.transmissive,Ue=T.transparent;g.setupLightsView(W),ee===!0&&ht.setGlobalState(x.clippingPlanes,W),Me.length>0&&Ge(q,Me,B,W),j&&le.viewport(w.copy(j)),q.length>0&&Ae(q,B,W),Me.length>0&&Ae(Me,B,W),Ue.length>0&&Ae(Ue,B,W),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ge(T,B,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let Me=ye.isWebGL2;de===null&&(de=new $n(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?as:ri,minFilter:Wn,samples:Me?4:0})),x.getDrawingBufferSize(We),Me?de.setSize(We.x,We.y):de.setSize(ia(We.x),ia(We.y));let Ue=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(k),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Be=x.toneMapping;x.toneMapping=Oi,Ae(T,W,j),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de);let Ze=!1;for(let Qe=0,Se=B.length;Qe<Se;Qe++){let Fe=B[Qe],Ke=Fe.object,ut=Fe.geometry,Et=Fe.material,Bn=Fe.group;if(Et.side===Ht&&Ke.layers.test(j.layers)){let Dt=Et.side;Et.side=un,Et.needsUpdate=!0,$e(Ke,W,j,ut,Et,Bn),Et.side=Dt,Et.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de)),x.setRenderTarget(Ue),x.setClearColor(k,P),x.toneMapping=Be}function Ae(T,B,W){let j=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Me=T.length;q<Me;q++){let Ue=T[q],Be=Ue.object,Ze=Ue.geometry,Qe=j===null?Ue.material:j,Se=Ue.group;Be.layers.test(W.layers)&&$e(Be,B,W,Ze,Qe,Se)}}function $e(T,B,W,j,q,Me){T.onBeforeRender(x,B,W,j,q,Me),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,B,W,j,T,Me),q.transparent===!0&&q.side===Ht&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,x.renderBufferDirect(W,B,j,q,T,Me),q.side=oi,q.needsUpdate=!0,x.renderBufferDirect(W,B,j,q,T,Me),q.side=Ht):x.renderBufferDirect(W,B,j,q,T,Me),T.onAfterRender(x,B,W,j,q,Me)}function tt(T,B,W){B.isScene!==!0&&(B=pe);let j=Pe.get(T),q=g.state.lights,Me=g.state.shadowsArray,Ue=q.state.version,Be=qe.getParameters(T,q.state,Me,B,W),Ze=qe.getProgramCacheKey(Be),Qe=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?$:A).get(T.envMap||j.environment),Qe===void 0&&(T.addEventListener("dispose",De),Qe=new Map,j.programs=Qe);let Se=Qe.get(Ze);if(Se!==void 0){if(j.currentProgram===Se&&j.lightsStateVersion===Ue)return lt(T,Be),Se}else Be.uniforms=qe.getUniforms(T),T.onBuild(W,Be,x),T.onBeforeCompile(Be,x),Se=qe.acquireProgram(Be,Ze),Qe.set(Ze,Se),j.uniforms=Be.uniforms;let Fe=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=ht.uniform),lt(T,Be),j.needsLights=Re(T),j.lightsStateVersion=Ue,j.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Se,j.uniformsList=null,Se}function xt(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=qs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function lt(T,B){let W=Pe.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function wt(T,B,W,j,q){B.isScene!==!0&&(B=pe),C.resetTextureUnits();let Me=B.fog,Ue=j.isMeshStandardMaterial?B.environment:null,Be=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:on,Ze=(j.isMeshStandardMaterial?$:A).get(j.envMap||Ue),Qe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color,Et=Oi;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=x.toneMapping);let Bn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Dt=Bn!==void 0?Bn.length:0,yt=Pe.get(j),ac=g.state.lights;if(ee===!0&&(ue===!0||T!==M)){let kn=T===M&&j.id===R;ht.setState(j,T,kn)}let Kt=!1;j.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ac.state.version||yt.outputColorSpace!==Be||q.isBatchedMesh&&yt.batching===!1||!q.isBatchedMesh&&yt.batching===!0||q.isInstancedMesh&&yt.instancing===!1||!q.isInstancedMesh&&yt.instancing===!0||q.isSkinnedMesh&&yt.skinning===!1||!q.isSkinnedMesh&&yt.skinning===!0||q.isInstancedMesh&&yt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&yt.instancingColor===!1&&q.instanceColor!==null||yt.envMap!==Ze||j.fog===!0&&yt.fog!==Me||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ht.numPlanes||yt.numIntersection!==ht.numIntersection)||yt.vertexAlphas!==Qe||yt.vertexTangents!==Se||yt.morphTargets!==Fe||yt.morphNormals!==Ke||yt.morphColors!==ut||yt.toneMapping!==Et||ye.isWebGL2===!0&&yt.morphTargetsCount!==Dt)&&(Kt=!0):(Kt=!0,yt.__version=j.version);let Zi=yt.currentProgram;Kt===!0&&(Zi=tt(j,B,q));let Yh=!1,xr=!1,cc=!1,mn=Zi.getUniforms(),Ki=yt.uniforms;if(le.useProgram(Zi.program)&&(Yh=!0,xr=!0,cc=!0),j.id!==R&&(R=j.id,xr=!0),Yh||M!==T){mn.setValue(N,"projectionMatrix",T.projectionMatrix),mn.setValue(N,"viewMatrix",T.matrixWorldInverse);let kn=mn.map.cameraPosition;kn!==void 0&&kn.setValue(N,it.setFromMatrixPosition(T.matrixWorld)),ye.logarithmicDepthBuffer&&mn.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mn.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,xr=!0,cc=!0)}if(q.isSkinnedMesh){mn.setOptional(N,q,"bindMatrix"),mn.setOptional(N,q,"bindMatrixInverse");let kn=q.skeleton;kn&&(ye.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),mn.setValue(N,"boneTexture",kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(mn.setOptional(N,q,"batchingTexture"),mn.setValue(N,"batchingTexture",q._matricesTexture,C));let lc=W.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0&&ye.isWebGL2===!0)&&gt.update(q,W,Zi),(xr||yt.receiveShadow!==q.receiveShadow)&&(yt.receiveShadow=q.receiveShadow,mn.setValue(N,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ki.envMap.value=Ze,Ki.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),xr&&(mn.setValue(N,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&Ye(Ki,cc),Me&&j.fog===!0&&Ne.refreshFogUniforms(Ki,Me),Ne.refreshMaterialUniforms(Ki,j,J,H,de),qs.upload(N,xt(yt),Ki,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qs.upload(N,xt(yt),Ki,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mn.setValue(N,"center",q.center),mn.setValue(N,"modelViewMatrix",q.modelViewMatrix),mn.setValue(N,"normalMatrix",q.normalMatrix),mn.setValue(N,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let kn=j.uniformsGroups;for(let hc=0,pp=kn.length;hc<pp;hc++)if(ye.isWebGL2){let Zh=kn[hc];Ct.update(Zh,Zi),Ct.bind(Zh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Ye(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Re(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,B,W){Pe.get(T.texture).__webglTexture=B,Pe.get(T.depthTexture).__webglTexture=W;let j=Pe.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){let W=Pe.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){E=T,S=B,b=W;let j=!0,q=null,Me=!1,Ue=!1;if(T){let Ze=Pe.get(T);Ze.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(N.FRAMEBUFFER,null),j=!1):Ze.__webglFramebuffer===void 0?C.setupRenderTarget(T):Ze.__hasExternalTextures&&C.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);let Qe=T.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ue=!0);let Se=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Se[B])?q=Se[B][W]:q=Se[B],Me=!0):ye.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?q=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?q=Se[W]:q=Se,w.copy(T.viewport),I.copy(T.scissor),U=T.scissorTest}else w.copy(K).multiplyScalar(J).floor(),I.copy(ie).multiplyScalar(J).floor(),U=ae;if(le.bindFramebuffer(N.FRAMEBUFFER,q)&&ye.drawBuffers&&j&&le.drawBuffers(T,q),le.viewport(w),le.scissor(I),le.setScissorTest(U),Me){let Ze=Pe.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ze.__webglTexture,W)}else if(Ue){let Ze=Pe.get(T.texture),Qe=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,W||0,Qe)}R=-1},this.readRenderTargetPixels=function(T,B,W,j,q,Me,Ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){le.bindFramebuffer(N.FRAMEBUFFER,Be);try{let Ze=T.texture,Qe=Ze.format,Se=Ze.type;if(Qe!==Gn&&Ve.convert(Qe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Se===as&&(ce.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Se!==ri&&Ve.convert(Se)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===bi&&(ye.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&W>=0&&W<=T.height-q&&N.readPixels(B,W,j,q,Ve.convert(Qe),Ve.convert(Se),Me)}finally{let Ze=E!==null?Pe.get(E).__webglFramebuffer:null;le.bindFramebuffer(N.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(T,B,W=0){let j=Math.pow(2,-W),q=Math.floor(B.image.width*j),Me=Math.floor(B.image.height*j);C.setTexture2D(B,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,T.x,T.y,q,Me),le.unbindTexture()},this.copyTextureToTexture=function(T,B,W,j=0){let q=B.image.width,Me=B.image.height,Ue=Ve.convert(W.format),Be=Ve.convert(W.type);C.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,j,T.x,T.y,q,Me,Ue,Be,B.image.data):B.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,j,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ue,B.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,j,T.x,T.y,Ue,Be,B.image),j===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W,j,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=T.max.x-T.min.x+1,Ue=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,Ze=Ve.convert(j.format),Qe=Ve.convert(j.type),Se;if(j.isData3DTexture)C.setTexture3D(j,0),Se=N.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Se=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);let Fe=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),Et=N.getParameter(N.UNPACK_SKIP_ROWS),Bn=N.getParameter(N.UNPACK_SKIP_IMAGES),Dt=W.isCompressedTexture?W.mipmaps[q]:W.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?N.texSubImage3D(Se,q,B.x,B.y,B.z,Me,Ue,Be,Ze,Qe,Dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Se,q,B.x,B.y,B.z,Me,Ue,Be,Ze,Dt.data)):N.texSubImage3D(Se,q,B.x,B.y,B.z,Me,Ue,Be,Ze,Qe,Dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,Et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bn),q===0&&j.generateMipmaps&&N.generateMipmap(Se),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,le.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Wl?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?rs:Xf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?Lt:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},pl=class extends zr{};pl.prototype.isWebGL1Renderer=!0;var pa=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bi=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new D,Or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var df=new D,pf=new At,mf=new At,L_=new D,gf=new ot,ko=new D,Bc=new Un,xf=new ot,kc=new $s,ma=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bc.copy(this.boundingSphere),Bc.applyMatrix4(i),e.ray.intersectsSphere(Bc)!==!1&&(xf.copy(i).invert(),kc.copy(e.ray).applyMatrix4(xf),!(this.boundingBox!==null&&kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===im?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;pf.fromBufferAttribute(i.attributes.skinIndex,e),mf.fromBufferAttribute(i.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=mf.getComponent(r);if(o!==0){let a=pf.getComponent(r);gf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L_.copy(df).applyMatrix4(gf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Br=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kr=class extends an{constructor(e=null,t=1,n=1,i,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vf=new ot,I_=new ot,ga=class s{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:I_;vf.multiplyMatrices(a,t[r]),vf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new kr(t,e,e,Gn,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Br),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ls=class extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new ot,_f=new ot,Ho=[],yf=new $t,N_=new ot,br=new Xe,Sr=new Un,wn=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,N_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),yf.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Sr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),_f.multiplyMatrices(n,Fs),br.matrixWorld=_f,br.raycast(e,Ho);for(let o=0,a=Ho.length;o<a;o++){let c=Ho[o];c.instanceId=r,c.object=this,t.push(c)}Ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Hr=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mf=new D,bf=new D,Sf=new ot,Hc=new $s,Go=new Un,nr=class extends Gt{constructor(e=new Rt,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mf.fromBufferAttribute(t,i-1),bf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mf.distanceTo(bf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Sf.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let x=m,y=_-1;x<y;x+=d){let S=p.getX(x),b=p.getX(x+1);if(l.fromBufferAttribute(g,S),h.fromBufferAttribute(g,b),Hc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=m,y=_-1;x<y;x+=d){if(l.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),Hc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},wf=new D,Ef=new D,xa=class extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wf.fromBufferAttribute(t,i),Ef.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wf.distanceTo(Ef);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},va=class extends nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gr=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new ot,ml=new $s,Vo=new Un,Wo=new D,_a=class extends Gt{constructor(e=new Rt,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Tf.copy(i).invert(),ml.copy(e.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,v=d;p<v;p++){let g=l.getX(p);Wo.fromBufferAttribute(u,g),Af(Wo,g,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,v=d;p<v;p++)Wo.fromBufferAttribute(u,p),Af(Wo,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Af(s,e,t,n,i,r,o){let a=ml.distanceSqToPoint(s);if(a<t){let c=new D;ml.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var ei=class extends an{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new be:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],o=[],a=new D,c=new ot;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(sn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(sn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new be,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends Vr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Xo=new D,Gc=new Yl,Vc=new Yl,Wc=new Yl,xl=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),l=Xo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Gc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,v,g),Vc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,v,g),Wc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Vc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Wc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Gc.calc(c),Vc.calc(c),Wc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function D_(s,e){let t=1-s;return t*t*e}function U_(s,e){return 2*(1-s)*s*e}function z_(s,e){return s*s*e}function Pr(s,e,t,n){return D_(s,e)+U_(s,t)+z_(s,n)}function F_(s,e){let t=1-s;return t*t*t*e}function O_(s,e){let t=1-s;return 3*t*t*s*e}function B_(s,e){return 3*(1-s)*s*s*e}function k_(s,e){return s*s*s*e}function Lr(s,e,t,n,i){return F_(s,e)+O_(s,t)+B_(s,n)+k_(s,i)}var ya=class extends Xn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(e,i.x,r.x,o.x,a.x),Lr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends Xn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(e,i.x,r.x,o.x,a.x),Lr(e,i.y,r.y,o.y,a.y),Lr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Xn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Xn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,i.x,r.x,o.x),Pr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends Xn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,i.x,r.x,o.x),Pr(e,i.y,r.y,o.y),Pr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Rf(a,c.x,l.x,h.x,u.x),Rf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new be().fromArray(i))}return this}},Ml=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:xl,CubicBezierCurve:ya,CubicBezierCurve3:vl,EllipseCurve:Vr,LineCurve:Ma,LineCurve3:_l,QuadraticBezierCurve:ba,QuadraticBezierCurve3:yl,SplineCurve:Sa}),bl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ml[i.type]().fromJSON(i))}return this}},wa=class extends bl{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ba(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ya(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Vr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ir=class s extends Rt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=sn(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new be,d=new D,p=new D,v=new D,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(p)}for(let _=0;_<=t;_++){let x=n+_*h*i,y=Math.sin(x),S=Math.cos(x);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*S,o.push(u.x,u.y,u.z),f.x=_/t,f.y=b/(e.length-1),a.push(f.x,f.y);let E=c[3*b+0]*y,R=c[3*b+1],M=c[3*b+0]*S;l.push(E,R,M)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let y=x+_*e.length,S=y,b=y+e.length,E=y+e.length+1,R=y+1;r.push(S,b,R),r.push(E,R,b)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var fn=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],g=n/2,m=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){let y=new D,S=new D,b=0,E=(t-e)/n;for(let R=0;R<=r;R++){let M=[],w=R/r,I=w*(t-e)+e;for(let U=0;U<=i;U++){let k=U/i,P=k*c+a,L=Math.sin(P),H=Math.cos(P);S.x=I*L,S.y=-w*n+g,S.z=I*H,u.push(S.x,S.y,S.z),y.set(L,E,H).normalize(),f.push(y.x,y.y,y.z),d.push(k,1-w),M.push(p++)}v.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){let w=v[M][R],I=v[M+1][R],U=v[M+1][R+1],k=v[M][R+1];h.push(w,I,k),h.push(I,U,k),b+=6}l.addGroup(m,b,0),m+=b}function x(y){let S=p,b=new be,E=new D,R=0,M=y===!0?e:t,w=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),p++;let I=p;for(let U=0;U<=i;U++){let P=U/i*c+a,L=Math.cos(P),H=Math.sin(P);E.x=M*H,E.y=g*w,E.z=M*L,u.push(E.x,E.y,E.z),f.push(0,w,0),b.x=L*.5+.5,b.y=H*.5*w+.5,d.push(b.x,b.y),p++}for(let U=0;U<i;U++){let k=S+U,P=I+U;y===!0?h.push(P,P+1,k):h.push(P+1,P,k),R+=3}l.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class s extends fn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sl=class s extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new D,y=new D,S=new D;for(let b=0;b<t.length;b+=3)d(t[b+0],x),d(t[b+1],y),d(t[b+2],S),c(x,y,S,_)}function c(_,x,y,S){let b=S+1,E=[];for(let R=0;R<=b;R++){E[R]=[];let M=_.clone().lerp(y,R/b),w=x.clone().lerp(y,R/b),I=b-R;for(let U=0;U<=I;U++)U===0&&R===b?E[R][U]=M:E[R][U]=M.clone().lerp(w,U/I)}for(let R=0;R<b;R++)for(let M=0;M<2*(b-R)-1;M++){let w=Math.floor(M/2);M%2===0?(f(E[R][w+1]),f(E[R+1][w]),f(E[R][w])):(f(E[R][w+1]),f(E[R+1][w+1]),f(E[R+1][w]))}}function l(_){let x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(_),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let _=new D;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let y=g(_)/2/Math.PI+.5,S=m(_)/Math.PI+.5;o.push(y,1-S)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],y=o[_+2],S=o[_+4],b=Math.max(x,y,S),E=Math.min(x,y,S);b>.9&&E<.1&&(x<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let y=_*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){let _=new D,x=new D,y=new D,S=new D,b=new be,E=new be,R=new be;for(let M=0,w=0;M<r.length;M+=9,w+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),S.copy(_).add(x).add(y).divideScalar(3);let I=g(S);v(b,w+0,_,I),v(E,w+2,x,I),v(R,w+4,y,I)}}function v(_,x,y,S){S<0&&_.x===1&&(o[x]=_.x-1),y.x===0&&y.z===0&&(o[x]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Xr=class extends wa{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new wa().fromJSON(i))}return this}},H_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=id(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=q_(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return qr(r,o,t,a,c,d,0),o}};function id(s,e,t,n,i){let r,o;if(i===iy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Cf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Cf(r,s[r],s[r+1],o);return o&&Ha(o,o.next)&&(Zr(o),o=o.next),o}function hs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ha(t,t.next)||qt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&J_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?V_(s,n,i,r):G_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Zr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=W_(hs(s),e,t),qr(s,e,t,n,i,r,2)):o===2&&X_(s,e,t,n,i,r):qr(hs(s),e,t,n,i,r,1);break}}}function G_(s){let e=s.prev,t=s,n=s.next;if(qt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Vs(i,a,r,c,o,l,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function V_(s,e,t,n){let i=s.prev,r=s,o=s.next;if(qt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=wl(d,p,e,t,n),_=wl(v,g,e,t,n),x=s.prevZ,y=s.nextZ;for(;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Vs(a,h,c,u,l,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Vs(a,h,c,u,l,f,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Vs(a,h,c,u,l,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Vs(a,h,c,u,l,f,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function W_(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Ha(i,r)&&sd(i,n,n.next,r)&&Yr(i,r)&&Yr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zr(n),Zr(n.next),n=s=r),n=n.next}while(n!==s);return hs(n)}function X_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ey(o,a)){let c=rd(o,a);o=hs(o,o.next),c=hs(c,c.next),qr(o,e,t,n,i,r,0),qr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function q_(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=id(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Q_(l));for(i.sort(Y_),r=0;r<i.length;r++)t=Z_(i[r],t);return t}function Y_(s,e){return s.x-e.x}function Z_(s,e){let t=K_(s,e);if(!t)return e;let n=rd(t,s);return hs(n,n.next),hs(t,t.next)}function K_(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Vs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Yr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&j_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function j_(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function J_(s,e,t,n){let i=s;do i.z===0&&(i.z=wl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$_(i)}function $_(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function wl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Q_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ey(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ty(s,e)&&(Yr(s,e)&&Yr(e,s)&&ny(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||Ha(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ha(s,e){return s.x===e.x&&s.y===e.y}function sd(s,e,t,n){let i=Yo(qt(s,e,t)),r=Yo(qt(s,e,n)),o=Yo(qt(t,n,s)),a=Yo(qt(t,n,e));return!!(i!==r&&o!==a||i===0&&qo(s,t,e)||r===0&&qo(s,n,e)||o===0&&qo(t,s,n)||a===0&&qo(t,e,n))}function qo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Yo(s){return s>0?1:s<0?-1:0}function ty(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yr(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function ny(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rd(s,e){let t=new El(s.i,s.x,s.y),n=new El(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cf(s,e,t,n){let i=new El(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function El(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ir=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Pf(e),Lf(n,e);let o=e.length;t.forEach(Pf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Lf(n,t[c]);let a=H_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Pf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Lf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ea=class s extends Rt{constructor(e=new Xr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:sy,x,y=!1,S,b,E,R;m&&(x=m.getSpacedPoints(h),y=!0,f=!1,S=m.computeFrenetFrames(h,!1),b=new D,E=new D,R=new D),f||(g=0,d=0,p=0,v=0);let M=a.extractPoints(l),w=M.shape,I=M.holes;if(!Ir.isClockWise(w)){w=w.reverse();for(let N=0,ve=I.length;N<ve;N++){let ce=I[N];Ir.isClockWise(ce)&&(I[N]=ce.reverse())}}let k=Ir.triangulateShape(w,I),P=w;for(let N=0,ve=I.length;N<ve;N++){let ce=I[N];w=w.concat(ce)}function L(N,ve,ce){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ve,ce)}let H=w.length,J=k.length;function Q(N,ve,ce){let ye,le,ke,Pe=N.x-ve.x,C=N.y-ve.y,A=ce.x-N.x,$=ce.y-N.y,me=Pe*Pe+C*C,_e=Pe*$-C*A;if(Math.abs(_e)>Number.EPSILON){let xe=Math.sqrt(me),qe=Math.sqrt(A*A+$*$),Ne=ve.x-C/xe,He=ve.y+Pe/xe,he=ce.x-$/qe,ht=ce.y+A/qe,ge=((he-Ne)*$-(ht-He)*A)/(Pe*$-C*A);ye=Ne+Pe*ge-N.x,le=He+C*ge-N.y;let Tt=ye*ye+le*le;if(Tt<=2)return new be(ye,le);ke=Math.sqrt(Tt/2)}else{let xe=!1;Pe>Number.EPSILON?A>Number.EPSILON&&(xe=!0):Pe<-Number.EPSILON?A<-Number.EPSILON&&(xe=!0):Math.sign(C)===Math.sign($)&&(xe=!0),xe?(ye=-C,le=Pe,ke=Math.sqrt(me)):(ye=Pe,le=C,ke=Math.sqrt(me/2))}return new be(ye/ke,le/ke)}let Y=[];for(let N=0,ve=P.length,ce=ve-1,ye=N+1;N<ve;N++,ce++,ye++)ce===ve&&(ce=0),ye===ve&&(ye=0),Y[N]=Q(P[N],P[ce],P[ye]);let K=[],ie,ae=Y.concat();for(let N=0,ve=I.length;N<ve;N++){let ce=I[N];ie=[];for(let ye=0,le=ce.length,ke=le-1,Pe=ye+1;ye<le;ye++,ke++,Pe++)ke===le&&(ke=0),Pe===le&&(Pe=0),ie[ye]=Q(ce[ye],ce[ke],ce[Pe]);K.push(ie),ae=ae.concat(ie)}for(let N=0;N<g;N++){let ve=N/g,ce=d*Math.cos(ve*Math.PI/2),ye=p*Math.sin(ve*Math.PI/2)+v;for(let le=0,ke=P.length;le<ke;le++){let Pe=L(P[le],Y[le],ye);Te(Pe.x,Pe.y,-ce)}for(let le=0,ke=I.length;le<ke;le++){let Pe=I[le];ie=K[le];for(let C=0,A=Pe.length;C<A;C++){let $=L(Pe[C],ie[C],ye);Te($.x,$.y,-ce)}}}let X=p+v;for(let N=0;N<H;N++){let ve=f?L(w[N],ae[N],X):w[N];y?(E.copy(S.normals[0]).multiplyScalar(ve.x),b.copy(S.binormals[0]).multiplyScalar(ve.y),R.copy(x[0]).add(E).add(b),Te(R.x,R.y,R.z)):Te(ve.x,ve.y,0)}for(let N=1;N<=h;N++)for(let ve=0;ve<H;ve++){let ce=f?L(w[ve],ae[ve],X):w[ve];y?(E.copy(S.normals[N]).multiplyScalar(ce.x),b.copy(S.binormals[N]).multiplyScalar(ce.y),R.copy(x[N]).add(E).add(b),Te(R.x,R.y,R.z)):Te(ce.x,ce.y,u/h*N)}for(let N=g-1;N>=0;N--){let ve=N/g,ce=d*Math.cos(ve*Math.PI/2),ye=p*Math.sin(ve*Math.PI/2)+v;for(let le=0,ke=P.length;le<ke;le++){let Pe=L(P[le],Y[le],ye);Te(Pe.x,Pe.y,u+ce)}for(let le=0,ke=I.length;le<ke;le++){let Pe=I[le];ie=K[le];for(let C=0,A=Pe.length;C<A;C++){let $=L(Pe[C],ie[C],ye);y?Te($.x,$.y+x[h-1].y,x[h-1].x+ce):Te($.x,$.y,u+ce)}}}ee(),ue();function ee(){let N=i.length/3;if(f){let ve=0,ce=H*ve;for(let ye=0;ye<J;ye++){let le=k[ye];We(le[2]+ce,le[1]+ce,le[0]+ce)}ve=h+g*2,ce=H*ve;for(let ye=0;ye<J;ye++){let le=k[ye];We(le[0]+ce,le[1]+ce,le[2]+ce)}}else{for(let ve=0;ve<J;ve++){let ce=k[ve];We(ce[2],ce[1],ce[0])}for(let ve=0;ve<J;ve++){let ce=k[ve];We(ce[0]+H*h,ce[1]+H*h,ce[2]+H*h)}}n.addGroup(N,i.length/3-N,0)}function ue(){let N=i.length/3,ve=0;de(P,ve),ve+=P.length;for(let ce=0,ye=I.length;ce<ye;ce++){let le=I[ce];de(le,ve),ve+=le.length}n.addGroup(N,i.length/3-N,1)}function de(N,ve){let ce=N.length;for(;--ce>=0;){let ye=ce,le=ce-1;le<0&&(le=N.length-1);for(let ke=0,Pe=h+g*2;ke<Pe;ke++){let C=H*ke,A=H*(ke+1),$=ve+ye+C,me=ve+le+C,_e=ve+le+A,xe=ve+ye+A;it($,me,_e,xe)}}}function Te(N,ve,ce){c.push(N),c.push(ve),c.push(ce)}function We(N,ve,ce){pe(N),pe(ve),pe(ce);let ye=i.length/3,le=_.generateTopUV(n,i,ye-3,ye-2,ye-1);ne(le[0]),ne(le[1]),ne(le[2])}function it(N,ve,ce,ye){pe(N),pe(ve),pe(ye),pe(ve),pe(ce),pe(ye);let le=i.length/3,ke=_.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ne(ke[0]),ne(ke[1]),ne(ke[3]),ne(ke[1]),ne(ke[2]),ne(ke[3])}function pe(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function ne(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ry(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ml[i.type]().fromJSON(i)),new s(n,e.options)}},sy={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new be(r,o),new be(a,c),new be(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-u),new be(f,1-p),new be(v,1-m)]:[new be(a,1-c),new be(h,1-u),new be(d,1-p),new be(g,1-m)]}};function ry(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ki=class s extends Sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ta=class s extends Rt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,p=new be;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let v=0;v<i;v++){let g=v*(n+1);for(let m=0;m<n;m++){let _=m+g,x=_,y=_+n+1,S=_+n+2,b=_+1;a.push(x,y,b),a.push(y,S,b)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ai=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let _=[],x=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let b=S/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(b+y,1-x),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let x=h[m][_+1],y=h[m][_],S=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&d.push(x,y,b),(m!==n-1||c<Math.PI)&&d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sr=class s extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let v=p/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let v=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;o.push(v,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Aa=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hi=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends Hi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ft=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ay(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function If(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function od(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,a=2*t-n;break;case Jo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bs:o=e,c=2*n-t;break;case Jo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,_=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,x=(-1-d)*g+(1.5+d)*v+.5*p,y=d*g-d*v;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+_*o[l+S]+x*o[c+S]+y*o[u+S];return r}},Ra=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Al=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&oy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===gc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=cs;var Vi=class extends Yn{};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=js;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Yn{};Ca.prototype.ValueTypeName="color";var Ti=class extends Yn{};Ti.prototype.ValueTypeName="number";var Rl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ci=class extends Yn{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.DefaultInterpolation=cs;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Yn{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=js;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Yn{};Ai.prototype.ValueTypeName="vector";var rr=class{constructor(e,t=-1,n,i=Gl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ly(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=ay(c);c=If(c,1,h),l=If(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ti(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,v){if(d.length!==0){let g=[],m=[];od(d,g,m,p),g.length!==0&&v.push(new u(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let v=0;v<f[p].morphTargets.length;v++)d[f[p].morphTargets[v]]=-1;for(let v in d){let g=[],m=[];for(let _=0;_!==f[p].morphTargets.length;++_){let x=f[p];g.push(x.time),m.push(x.morphTarget===v?1:0)}i.push(new Ti(".morphTargetInfluence["+v+"]",g,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Ai,d+".position",f,"pos",i),n(ci,d+".quaternion",f,"rot",i),n(Ai,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function cy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return Ca;case"quaternion":return ci;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ly(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cy(s.type);if(s.times===void 0){let t=[],n=[];od(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Cl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},hy=new Cl,Ri=class{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},Pl=class extends Error{constructor(e,t){super(e),this.response=t}},Kr=class extends Ri{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0,v=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:x,value:y})=>{if(x)m.close();else{v+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let b=0,E=h.length;b<E;b++){let R=h[b];R.onProgress&&R.onProgress(S)}m.enqueue(y),_()}})}}});return new Response(g)}else throw new Pl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{zi.add(e,l);let h=_i[e];delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ll=class extends Ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Dr("img");function c(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Pa=class extends Ri{constructor(e){super(e)}load(e,t,n,i){let r=new an,o=new Ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},or=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},La=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xc=new ot,Nf=new D,Df=new D,jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=class extends jr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ar=class extends or{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Il}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uf=new ot,wr=new D,qc=new D,Nl=class extends jr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),qc.copy(n.position),qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qc),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},Ia=class extends or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dl=class extends jr{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Na=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}};var Ul=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;tn.multiplyQuaternionsFlat(e,o,e,t,e,n),tn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Zl="\\[\\]\\.:\\/",uy=new RegExp("["+Zl+"]","g"),Kl="[^"+Zl+"]",fy="[^"+Zl.replace("\\.","")+"]",dy=/((?:WC+[\/:])*)/.source.replace("WC",Kl),py=/(WCOD+)?/.source.replace("WCOD",fy),my=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),xy=new RegExp("^"+dy+py+my+gy+"$"),vy=["material","materials","bones","map"],zl=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uy,"")}static parseTrackName(e){let t=xy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=zl;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Gl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===dm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Fa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Bs,i.endingEnd=Bs):(e?i.endingStart=this.zeroSlopeAtStart?Bs:Os:i.endingStart=Jo,t?i.endingEnd=this.zeroSlopeAtEnd?Bs:Os:i.endingEnd=Jo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},_y=new Float32Array(1),Da=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new Ul(zt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ra(new Float32Array(2),new Float32Array(2),1,_y),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?rr.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Gl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Fl(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?rr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);var no=bp(ud());var pt=(s,e,t)=>s<e?e:s>t?t:s,mt=(s,e,t)=>s+(e-s)*t,fd=s=>s*s*(3-2*s),ti=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function En(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var eh=12345,Nt=()=>(eh=eh*1664525+1013904223>>>0,eh/4294967296),dn=s=>s[Nt()*s.length|0];function ds(s,e,t,n,i,r,o){let a=i-t,c=r-n,l=a*a+c*c||1e-9,h=((s-t)*a+(e-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=t+a*h,o.z=n+c*h,o.t=h,o}function dd(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let o=t[i][0],a=t[i][1],c=t[r][0],l=t[r][1];a>e!=l>e&&s<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}var pd=`
      vec3 hdSky(vec3 d, vec3 sun, float night){
        float y = max(d.y, 0.0);
        float se = sun.y;
        vec3 dayTop = vec3(0.16,0.36,0.82), dayHor = vec3(0.66,0.80,0.98);
        vec3 setTop = vec3(0.17,0.20,0.46), setHor = vec3(1.25,0.58,0.26);
        vec3 nTop = vec3(0.004,0.007,0.022), nHor = vec3(0.028,0.036,0.07);
        float sunset = smoothstep(0.35, 0.02, se) * smoothstep(-0.2, 0.02, se);
        vec3 top = mix(mix(dayTop, setTop, sunset), nTop, night);
        vec3 hor = mix(mix(dayHor, setHor, sunset), nHor, night);
        vec3 c = mix(hor, top, pow(y, 0.5));
        float sd = max(dot(d, normalize(sun)), 0.0);
        c += vec3(1.0,0.55,0.25) * pow(sd, 8.0) * 0.6 * sunset;
        c += vec3(1.0,0.9,0.75) * pow(sd, 40.0) * 0.25 * (1.0-night);
        return c;
      }`,md=`
          // staggered stone pattern: returns 0 in the joints, 1 on the stone; id = per-stone random
          float hdSetts(vec2 p, vec2 size, float joint, float aa, out float id){
            vec2 q = p / size; q.x += 0.5 * floor(q.y);
            vec2 c = floor(q); id = h21(c);
            vec2 f = fract(q); vec2 e = min(f, 1.0 - f) * size;
            return smoothstep(joint - aa, joint + aa, min(e.x, e.y));
          }`,th=`{
          vec3 gm = texture2D(uGMask, vWP.xz / uWorld).rgb;
          float dist = length(vViewPosition);
          float det = 1.0 - smoothstep(22.0, 70.0, dist);      // fine detail fades with distance
          float aa = clamp(dist * 0.0016, 0.004, 0.2);
          float road = smoothstep(0.44, 0.56, gm.r);
          float kerb = smoothstep(0.16, 0.30, gm.r) * (1.0 - smoothstep(0.40, 0.48, gm.r));
          float grass = smoothstep(0.42, 0.58, gm.g) * (1.0 - road);
          float sett = smoothstep(0.42, 0.58, gm.b);
          float slope = 1.0 - smoothstep(0.80, 0.94, vWN.y);
          float nL = vnoise(vWP.xz * 0.11), nM = vnoise(vWP.xz * 0.9 + 3.0), nS = vnoise(vWP.xz * 9.0), nX = vnoise(vWP.xz * 38.0);

          // 1) asphalt
          vec3 asph = vec3(0.060, 0.062, 0.068) * (0.80 + 0.30 * nL + 0.14 * nM);
          asph *= 1.0 + det * (0.35 * (nX - 0.5) + 0.12 * (nS - 0.5));
          float patch_ = smoothstep(0.62, 0.66, vnoise(vWP.xz * 0.23 + 11.0));
          asph *= mix(1.0, 0.78, patch_ * 0.6);                       // repaired patches
          // tyre-polished wheel tracks are a touch lighter, oil stains darker
          asph *= 1.0 - 0.18 * smoothstep(0.72, 0.9, vnoise(vWP.xz * 1.9 + 23.0)) * det;

          // 2) cobbled carriageway (dark granite setts)
          float id1; float s1 = hdSetts(vWP.xz, vec2(0.20, 0.14), 0.012, aa, id1);
          vec3 cob = mix(vec3(0.115, 0.108, 0.100), vec3(0.21, 0.20, 0.185), id1) * (0.86 + 0.25 * nM);
          cob *= mix(1.0, mix(0.42, 1.0, s1), det);

          // 3) pedestrian-zone setts (lighter, bigger, warm) + slab bands
          float id2; float s2 = hdSetts(vWP.xz * mat2(0.94, -0.34, 0.34, 0.94), vec2(0.32, 0.20), 0.014, aa, id2);
          vec3 ped = mix(vec3(0.30, 0.275, 0.235), vec3(0.47, 0.44, 0.385), id2) * (0.88 + 0.22 * nM);
          ped = mix(ped, ped.ggg * vec3(1.02, 1.0, 0.97), 0.35 * step(0.7, id2));
          ped *= mix(1.0, mix(0.50, 1.0, s2), det);

          // 4) pavements / courtyards: concrete pavers
          float id3; float s3 = hdSetts(vWP.xz, vec2(0.40, 0.20), 0.008, aa, id3);
          vec3 pav = vec3(0.27, 0.255, 0.232) * (0.86 + 0.2 * id3) * (0.86 + 0.2 * nM + 0.14 * nL);
          pav *= mix(1.0, mix(0.62, 1.0, s3), det);
          vec3 dirt = mix(vec3(0.20, 0.165, 0.115), vec3(0.16, 0.20, 0.085), nM) * (0.8 + 0.4 * nS);
          pav = mix(pav, dirt, slope);

          // 5) grass
          vec3 gr = mix(vec3(0.060, 0.125, 0.030), vec3(0.135, 0.215, 0.050), nM * 0.6 + nL * 0.4);
          gr *= 0.80 + det * 0.45 * nX + 0.15 * nS;
          gr = mix(gr, vec3(0.20, 0.19, 0.08), 0.25 * smoothstep(0.55, 0.9, vnoise(vWP.xz * 0.05 + 9.0)));

          vec3 base = mix(pav, ped, sett);
          vec3 roadC = mix(asph, cob, sett);
          vec3 col = mix(base, gr, grass);
          col = mix(col, vec3(0.42, 0.41, 0.39) * (0.9 + 0.2 * nS), kerb * (1.0 - grass * 0.5)); // granite kerb
          col = mix(col, roadC, road);
          // gutter: slightly darker strip along the kerb on the road side
          col *= 1.0 - 0.22 * smoothstep(0.50, 0.62, gm.r) * (1.0 - smoothstep(0.80, 0.97, gm.r));
          diffuseColor.rgb = col;
          vec3 lamp = lampAt(vWP);
          totalEmissiveRadiance += diffuseColor.rgb * lamp * uNight * 1.6;
        }`,gd=`
          float hdWave(vec2 p){
            float t = uTime;
            return vnoise(p * vec2(0.35, 0.9) + vec2(t * 0.55, t * 0.12)) * 0.6
                 + vnoise(p * vec2(1.3, 2.4) + vec2(-t * 0.8, t * 0.35)) * 0.3
                 + vnoise(p * 5.5 + vec2(t * 1.3, -t * 0.9)) * 0.1;
          }`,nh=`{
          vec2 p = vWP.xz;
          float dist = length(cameraPosition - vWP);
          float amp = (1.0 - smoothstep(25.0, 260.0, dist)) / (1.0 + 6.0 * fwidth(p.x) + 6.0 * fwidth(p.y));
          float e = 0.35;
          float h0 = hdWave(p), hx = hdWave(p + vec2(e, 0.0)), hz = hdWave(p + vec2(0.0, e));
          vec3 wn = normalize(vec3((h0 - hx) * 1.1 * amp, 1.0, (h0 - hz) * 1.1 * amp));
          vec3 V = normalize(cameraPosition - vWP);
          vec3 R = reflect(-V, wn); R.y = abs(R.y);
          float fres = 0.04 + 0.96 * pow(1.0 - max(dot(V, wn), 0.0), 5.0);
          vec3 deep = mix(vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060), h0);   // Danube: grey-green
          vec3 sky = hdSky(R, uSun, uNight);
          float glint = pow(max(dot(R, normalize(uSun)), 0.0), 220.0) * (1.0 - uNight) * step(0.0, uSun.y);
          diffuseColor.rgb = deep * (1.0 - fres);
          totalEmissiveRadiance += sky * fres * 0.9 + vec3(1.0, 0.85, 0.6) * glint * 6.0;
          // city lights dancing on the river at night
          totalEmissiveRadiance += vec3(1.0, 0.68, 0.34) * uNight * smoothstep(0.62, 0.9, hdWave(p * 0.7 + 9.0)) * 0.10;
        }`,xd=`varying vec3 vF; varying vec4 vD;
          float hdBox(vec2 p, vec2 lo, vec2 hi, vec2 aa){
            vec2 a = smoothstep(lo - aa, lo + aa, p), b = 1.0 - smoothstep(hi - aa, hi + aa, p);
            return a.x * a.y * b.x * b.y;
          }
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,ih=`{
          float floorH = floor(vD.x * 64.0 + 0.5) / 64.0, kid = floor(vD.y + 0.5), seed = floor(vD.z * 4096.0 + 0.5) / 4096.0, topH = floor(vD.w * 16.0 + 0.5) / 16.0;
          float bw = max(vF.z, 0.6);
          float hasBays = step(0.0, vF.x);
          float colI = floor(vF.x), wx = fract(vF.x);
          float fl = vF.y / floorH, fi = floor(fl), fy = fract(fl);
          vec2 q = vec2((wx - 0.5) * bw, fy * floorH);          // metres inside this bay / this floor
          vec2 aa = vec2(fwidth(vF.x) * bw, fwidth(vF.y)) * 0.7 + 0.003;
          float far = smoothstep(0.10, 0.60, max(aa.x, aa.y));    // 1 = far away, drop the tiny detail
          float rnd = h21(vec2(colI * 1.7 + seed * 13.0, fi * 3.1 + seed * 7.0));
          float rnd2 = h21(vec2(colI * 5.3 + seed * 3.0, fi * 1.3 + 2.0));
          float rndB = h21(vec2(colI + seed * 31.0, 5.0 + seed * 3.0));
          float nFloors = max(1.0, floor((topH - 0.7) / floorH));
          float above = step(0.0, vF.y);
          float isGround = step(fi, 0.5) * above;
          float body = above * step(fi, nFloors - 0.5) * hasBays;
          bool old = kid < 0.5, modern = kid > 0.5 && kid < 1.5, util = kid > 1.5 && kid < 2.5, church = kid > 2.5 && kid < 3.5, palace = kid > 3.5 && kid < 4.5;

          // \u2500\u2500 plaster
          vec3 wall = diffuseColor.rgb;
          float pn = fbm(vec2(vF.x * bw * 0.3 + seed * 50.0, vF.y * 0.3));
          wall *= 0.88 + 0.22 * pn;
          wall *= 1.0 - 0.07 * vnoise(vec2(vF.x * bw * 2.6 + seed * 9.0, vF.y * 0.10)) * (1.0 - far);
          wall *= mix(0.78, 1.0, smoothstep(-0.2, 2.4, vF.y));                                  // street grime
          vec3 trim = mix(wall * 1.18 + 0.05, vec3(0.74, 0.72, 0.66), 0.4);
          vec3 col = wall;
          float glass = 0.0, lit = 0.0, shopGlass = 0.0;
          vec3 frameC = mix(vec3(0.82, 0.80, 0.74), vec3(0.16, 0.11, 0.08), step(0.62, fract(seed * 7.7)));

          if (old || palace) {
            float ww = min(palace ? 1.30 : 1.12, bw * 0.44), wh = clamp(floorH * 0.56, 1.25, palace ? 2.6 : 2.2);
            float y0 = floorH * 0.27;
            float gType = isGround * (old ? 1.0 : 0.0);
            float isDoor = isGround * step(rndB, 0.15);
            float isShop = gType * step(0.15, rndB) * step(rndB, 0.15 + 0.6 * step(fract(seed * 3.3), 0.7));
            float isWin = body * (1.0 - isDoor) * (1.0 - isShop);
            // rusticated ground floor of palaces
            if (palace) col *= 1.0 - 0.16 * isGround * (1.0 - hdBand(fract(vF.y / 0.46), 0.10, 0.90, aa.y / 0.46)) * (1.0 - far);
            // string course at every floor line + cornice under the roof
            float course = above * step(0.5, fi) * step(fi, nFloors + 0.5) * (1.0 - hdBand(q.y, 0.10, floorH - 0.03, aa.y));
            col = mix(col, trim, course * 0.9);
            col *= 1.0 - 0.22 * above * step(0.5, fi + 1.0) * hdBand(q.y, floorH - 0.16, floorH - 0.03, aa.y) * step(fi, nFloors - 0.5);
            // pilaster strips on some houses
            float pil = step(0.55, fract(seed * 5.7)) * body * (1.0 - hdBand(wx, 0.045, 0.955, aa.x / bw));
            col = mix(col, trim, pil * 0.7);
            // normal window
            vec2 wlo = vec2(-ww * 0.5, y0), whi = vec2(ww * 0.5, y0 + wh);
            float sur = hdBox(q, wlo - vec2(0.14, 0.0), whi + vec2(0.14, 0.14), aa);
            float lintel = hdBox(q, vec2(-ww * 0.5 - 0.24, y0 + wh + 0.14), vec2(ww * 0.5 + 0.24, y0 + wh + (palace ? 0.36 : 0.26)), aa) * step(0.35, fract(seed * 9.1) + (palace ? 1.0 : 0.0));
            float sill = hdBox(q, vec2(-ww * 0.5 - 0.20, y0 - 0.11), vec2(ww * 0.5 + 0.20, y0), aa);
            float under = hdBox(q, vec2(-ww * 0.5 - 0.20, y0 - 0.30), vec2(ww * 0.5 + 0.20, y0 - 0.11), aa);
            float hole = hdBox(q, wlo, whi, aa);
            float pane = hdBox(q, wlo + 0.07, whi - 0.07, aa);
            float bars = max(1.0 - hdBand(abs(q.x), 0.03, 9.0, aa.x), hdBand(q.y, y0 + wh * 0.68 - 0.03, y0 + wh * 0.68 + 0.03, aa.y));
            col = mix(col, trim, max(sur, max(lintel, sill)) * isWin);
            col *= 1.0 - 0.18 * under * isWin * (1.0 - far);
            col = mix(col, frameC, hole * isWin);
            float g1 = pane * (1.0 - bars * (1.0 - far)) * isWin;
            float recess = mix(0.5, 1.0, smoothstep(0.0, 0.22, (y0 + wh) - q.y)) ;
            col *= mix(1.0, recess, hole * isWin);
            glass = g1; lit = g1 * step(0.56, rnd);
            // door
            float dw = 0.62, dh = min(floorH - 0.55, 2.45);
            float dsur = hdBox(q, vec2(-dw - 0.16, -1.0), vec2(dw + 0.16, dh + 0.16), aa) * isDoor;
            float door = hdBox(q, vec2(-dw, -1.0), vec2(dw, dh), aa) * isDoor;
            vec3 doorC = mix(vec3(0.09, 0.055, 0.03), mix(vec3(0.04, 0.10, 0.07), vec3(0.05, 0.07, 0.14), step(0.5, rnd2)), step(0.5, rndB * 6.6));
            float panel = hdBox(vec2(abs(q.x), fract(q.y / 1.15) * 1.15), vec2(0.10, 0.12), vec2(dw - 0.08, 1.03), aa);
            col = mix(col, trim, dsur);
            col = mix(col, doorC * (0.75 + 0.5 * panel * (1.0 - far)), door);
            col *= mix(1.0, mix(0.55, 1.0, smoothstep(0.0, 0.3, dh - q.y)), door);
            // shop front: big pane, dark frame, coloured sign band
            float sTop = min(floorH - 0.85, 2.95), sw = bw * 0.41;
            float sFrame = hdBox(q, vec2(-sw - 0.08, 0.42), vec2(sw + 0.08, sTop + 0.08), aa) * isShop;
            float sPane = hdBox(q, vec2(-sw, 0.50), vec2(sw, sTop), aa) * isShop;
            float sMull = 1.0 - hdBand(abs(q.x), 0.025, 9.0, aa.x) * step(0.5, rnd2);
            float sign = hdBox(q, vec2(-sw - 0.08, sTop + 0.16), vec2(sw + 0.08, sTop + 0.58), aa) * isShop;
            vec3 signC = 0.5 + 0.5 * cos(6.2831 * (rndB * 7.0 + vec3(0.0, 0.33, 0.67)));
            signC = mix(vec3(0.05), signC * 0.55, step(0.35, rnd2));
            col = mix(col, vec3(0.045, 0.045, 0.05), sFrame);
            col = mix(col, signC, sign);
            // lettering hint on the sign
            col = mix(col, vec3(0.85), sign * step(0.62, vnoise(vec2(q.x * 9.0 + rndB * 40.0, 3.0))) * hdBand(q.y, sTop + 0.27, sTop + 0.47, aa.y) * (1.0 - far) * 0.8);
            shopGlass = sPane * sMull;
            col *= mix(1.0, mix(0.6, 1.0, smoothstep(0.0, 0.35, sTop - q.y)), sPane);
            glass = max(glass, shopGlass);
          } else if (modern) {
            float gl0 = isGround > 0.5 ? 0.25 : 0.90, gl1 = floorH - 0.55;
            float ribbon = hdBand(q.y, gl0, gl1, aa.y) * body;
            float mull = hdBand(abs(fract(wx * 2.0) - 0.5) * bw * 0.5, 0.035, 9.0, aa.x);
            float spJoint = hdBand(abs(fract(wx * 2.0) - 0.5) * bw * 0.5, 0.012, 9.0, aa.x);
            col = mix(col * (0.9 + 0.1 * spJoint), vec3(0.05, 0.055, 0.06), ribbon * (1.0 - mull));
            glass = ribbon * mull; lit = glass * step(0.42, rnd) * (1.0 - isGround);
            shopGlass = glass * isGround;
          } else if (util) {
            float on = step(0.5, h21(vec2(colI, fi + seed * 91.0)));
            float hole = hdBox(q, vec2(-0.5, floorH * 0.42), vec2(0.5, floorH * 0.42 + 1.05), aa) * body * on * (1.0 - isGround * step(rndB, 0.3));
            float pane = hdBox(q, vec2(-0.44, floorH * 0.42 + 0.06), vec2(0.44, floorH * 0.42 + 0.99), aa) * body * on;
            col = mix(col, vec3(0.55, 0.55, 0.53), hole);
            glass = pane * hole; lit = glass * step(0.7, rnd);
            float gar = hdBox(q, vec2(-1.25, -1.0), vec2(1.25, 2.35), aa) * isGround * step(rndB, 0.3) * hasBays;
            col = mix(col, vec3(0.30, 0.31, 0.33) * (0.8 + 0.2 * step(0.5, fract(q.y / 0.22))), gar);
            glass *= 1.0 - gar;
          } else if (church) {
            // tall arched windows, no floor lines
            float wTop = min(topH - 2.6, 10.5), wBot = 3.2, hw = min(0.62, bw * 0.16);
            vec2 p2 = vec2((wx - 0.5) * bw, vF.y);
            float arch = 1.0 - smoothstep(hw - aa.x, hw + aa.x, length(vec2(p2.x, max(p2.y - (wTop - hw), 0.0))));
            float lancet = arch * step(wBot, p2.y) * step(6.5, topH) * hasBays * above;
            float archS = 1.0 - smoothstep(hw + 0.16 - aa.x, hw + 0.16 + aa.x, length(vec2(p2.x, max(p2.y - (wTop - hw), 0.0))));
            col = mix(col, trim, archS * step(wBot - 0.16, p2.y) * step(6.5, topH) * hasBays * above);
            float lead = max(1.0 - hdBand(abs(p2.x), 0.025, 9.0, aa.x), 1.0 - hdBand(fract(p2.y / 0.9), 0.05, 0.95, aa.y / 0.9));
            col = mix(col, vec3(0.06, 0.06, 0.07), lancet);
            glass = lancet * (1.0 - lead * (1.0 - far)); lit = glass * 0.5;
            // stone base + buttress hint
            col *= 1.0 - 0.10 * (1.0 - hdBand(wx, 0.04, 0.96, aa.x / bw)) * hasBays;
          }
          // plinth and roof cornice for everything
          col *= mix(0.70, 1.0, smoothstep(0.55, 0.62, vF.y) + (1.0 - above));
          float corn = hdBand(vF.y, topH - 0.50, topH + 1.0, aa.y);
          col = mix(col, trim * 1.03, corn * (kid < 4.5 ? 1.0 : 0.0));
          col *= 1.0 - 0.28 * hdBand(vF.y, topH - 0.72, topH - 0.50, aa.y);

          // \u2500\u2500 glass: dark room behind + reflection of the sky
          vec3 V = normalize(cameraPosition - vWP);
          vec3 N = normalize(vWN); N *= sign(dot(N, V) + 1e-4);
          vec3 R = reflect(-V, N);
          R.y = abs(R.y) * 0.85 + 0.06 + (rnd - 0.5) * 0.10; R.xz += (vec2(rnd2, rndB) - 0.5) * 0.14;
          float fres = 0.10 + 0.90 * pow(1.0 - max(dot(V, N), 0.0), 3.0);
          vec3 refl = hdSky(normalize(R), uSun, uNight);
          float curtain = step(0.45, rnd2) * (1.0 - shopGlass) * smoothstep(0.25, 0.0, abs(fract(q.x * 1.7 + rnd) - 0.5) - 0.18 - 0.2 * rnd);
          vec3 inside = mix(vec3(0.020, 0.024, 0.030), vec3(0.50, 0.47, 0.40), curtain * 0.55);
          inside = mix(inside, vec3(0.10, 0.085, 0.07) * (0.6 + 0.8 * vnoise(q * vec2(3.0, 1.5) + rndB * 20.0)), shopGlass * 0.8);  // goods in the shop window
          col = mix(col, inside, glass);
          diffuseColor.rgb = col;
          totalEmissiveRadiance += refl * fres * glass * (modern ? 0.85 : 0.6);
          float glint = pow(max(dot(normalize(reflect(-V, N)), normalize(uSun)), 0.0), 90.0) * (1.0 - uNight);
          totalEmissiveRadiance += vec3(1.0, 0.9, 0.7) * glint * glass * 2.5;

          // \u2500\u2500 night: lit rooms and shop windows
          vec3 wl = mix(vec3(1.0, 0.70, 0.36), vec3(0.80, 0.88, 1.0), step(0.86, rnd2));
          float roomVar = 0.55 + 0.45 * vnoise(q * 1.6 + rnd * 30.0) + 0.25 * curtain;
          totalEmissiveRadiance += wl * lit * roomVar * 1.05 * uNight;
          totalEmissiveRadiance += vec3(1.0, 0.86, 0.66) * shopGlass * step(0.22, rnd2) * (0.5 + 0.7 * vnoise(q * vec2(2.5, 1.2) + rndB * 20.0)) * 1.25 * uNight;
          vec3 lamp = lampAt(vWP);
          totalEmissiveRadiance += diffuseColor.rgb * lamp * uNight * 1.3 * (1.0 - smoothstep(2.0, 9.0, vF.y));
        }`,vd=`{
          vec3 fn = normalize(cross(dFdx(vWP), dFdy(vWP))); if (fn.y < 0.0) fn = -fn;
          float steep = sqrt(max(1.0 - fn.y * fn.y, 0.0));
          float dist = length(vViewPosition);
          float det = 1.0 - smoothstep(35.0, 130.0, dist);
          diffuseColor.rgb *= 0.86 + 0.26 * vnoise(vWP.xz * 0.22) ;
          if (steep > 0.14) {
            vec2 hd = normalize(vec2(-fn.z, fn.x) + 1e-5);
            float u = dot(vWP.xz, hd), v = vWP.y / max(steep, 0.25);
            float row = v / 0.36, ri = floor(row), rf = fract(row);
            float cc = u / 0.26 + 0.5 * mod(ri, 2.0), cf = fract(cc);
            float id = h21(vec2(floor(cc), ri));
            float sh = mix(0.62, 1.0, smoothstep(0.0, 0.30, rf)) * mix(0.86, 1.0, smoothstep(0.0, 0.14, cf) * (1.0 - smoothstep(0.86, 1.0, cf)));
            diffuseColor.rgb *= mix(0.86, sh * (0.84 + 0.32 * id), det);
            diffuseColor.rgb *= 1.0 - 0.25 * smoothstep(0.75, 1.0, vnoise(vWP.xz * 0.6 + 5.0));   // moss / soot
          } else {
            float seam = smoothstep(0.0, 0.03, abs(fract(vWP.x * 0.5 + vWP.z * 0.13) - 0.5));
            diffuseColor.rgb *= (0.82 + 0.3 * vnoise(vWP.xz * 2.5)) * mix(1.0, mix(0.8, 1.0, seam), det);
          }
        }`,_d=`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      float h2(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        float se = uSun.y;
        vec3 dayTop = vec3(0.22,0.42,0.85), dayHor = vec3(0.75,0.85,1.0);
        vec3 setTop = vec3(0.18,0.2,0.45), setHor = vec3(1.25,0.55,0.22);
        vec3 nTop = vec3(0.004,0.008,0.025), nHor = vec3(0.03,0.04,0.08);
        float sunset = smoothstep(0.35, 0.02, se) * smoothstep(-0.2, 0.02, se);
        vec3 top = mix(mix(dayTop, setTop, sunset), nTop, uNight);
        vec3 hor = mix(mix(dayHor, setHor, sunset), nHor, uNight);
        vec3 c = mix(hor, top, pow(y, 0.42));
        float sd = max(dot(d, normalize(uSun)), 0.0);
        c += vec3(1.6,1.0,0.6) * pow(sd, 400.0) * 6.0 * (1.0-uNight);
        c += vec3(1.0,0.55,0.25) * pow(sd, 8.0) * 0.6 * sunset;
        // clouds: a flat layer high above, lit by the sun, thinning out towards the horizon
        if (d.y > 0.015) {
          vec2 cp = d.xz / (d.y + 0.16) * 1.35 + vec2(uTime * 0.006, uTime * 0.0025);
          float cn = n2(cp) * 0.5 + n2(cp * 2.1 + 3.7) * 0.27 + n2(cp * 4.3 + 9.1) * 0.15 + n2(cp * 8.7 + 1.3) * 0.08;
          float cov = smoothstep(0.50, 0.78, cn) * smoothstep(0.015, 0.16, d.y);
          float thick = smoothstep(0.55, 0.95, cn);
          vec3 cDay = mix(vec3(1.0, 0.99, 0.97), vec3(0.62, 0.66, 0.74), thick * 0.75);
          vec3 cSet = mix(vec3(1.25, 0.72, 0.45), vec3(0.38, 0.30, 0.40), thick * 0.8) * (0.6 + 0.6 * pow(sd, 3.0));
          vec3 cNight = vec3(0.035, 0.04, 0.06);
          vec3 cc = mix(mix(cDay, cSet, sunset), cNight, uNight);
          c = mix(c, cc, cov * 0.92);
        }
        // stars
        vec3 sp = floor(d*220.0);
        float st = step(0.9965, h(sp)) * uNight * smoothstep(0.05, 0.3, d.y);
        c += vec3(st) * (0.6 + 0.4*sin(uTime*3.0 + h(sp)*40.0));
        // city glow at horizon at night
        c += vec3(0.45,0.25,0.12) * uNight * pow(1.0 - y, 8.0) * 0.5;
        gl_FragColor = vec4(c, 1.0);
      }`;var Bt={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new At(0,0,1,0)},uFar:{value:null},uWorld:{value:new be(1,1)},uSun:{value:new D(0,1,0)}},hi=class{constructor(e){this.cell=e,this.m=new Map,this.stamp=0}add(e,t,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(t,i)/a),l=Math.floor(Math.max(t,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let p=f*8192+d,v=this.m.get(p);v||this.m.set(p,v=[]),v.push(e),o&&o.add(p)}}query(e,t,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((e-n)/r),c=Math.floor((e+n)/r),l=Math.floor((t-n)/r),h=Math.floor((t+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let p=0;p<d.length;p++){let v=d[p];v._st!==o&&(v._st=o,i.push(v))}}return i}removeTag(e,t){for(let n of t){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==e);r.length?this.m.set(n,r):this.m.delete(n)}}};function li(s,e="",t="",n=""){s.uniforms.uNight=Bt.uNight,s.uniforms.uTime=Bt.uTime,s.uniforms.uLamp=Bt.uLamp,s.uniforms.uLampRect=Bt.uLampRect,s.uniforms.uFar=Bt.uFar,s.uniforms.uWorld=Bt.uWorld,s.uniforms.uSun=Bt.uSun,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
varying vec3 vWN;
`+e.split("//MAIN")[0]).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 wpp = vec4(transformed, 1.0);
      vec3 wnn = objectNormal;
      #ifdef USE_INSTANCING
      wpp = instanceMatrix * wpp;
      wnn = mat3(instanceMatrix) * wnn;
      #endif
      vWP = (modelMatrix * wpp).xyz;
      vWN = normalize(mat3(modelMatrix) * wnn);
      ${e.split("//MAIN")[1]||""}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWP;
      varying vec3 vWN;
      uniform float uNight; uniform float uTime; uniform sampler2D uLamp; uniform vec4 uLampRect; uniform sampler2D uFar; uniform vec2 uWorld; uniform vec3 uSun;
      float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      vec3 lampAt(vec3 wp){ vec2 uv = (wp.xz - uLampRect.xy)/uLampRect.z; vec2 e = min(uv, 1.0-uv);
        float f = clamp(min(e.x, e.y)*10.0, 0.0, 1.0); return texture2D(uLamp, clamp(uv, 0.0, 1.0)).rgb * f; }
      float fbm(vec2 p){ return vnoise(p)*0.5 + vnoise(p*2.03+7.1)*0.3 + vnoise(p*4.1+3.7)*0.2; }
      ${pd}
      ${t}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var yd=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],Md=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],bd=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],Sd=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],wd=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],Uy={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8,clad:9},to={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},qa=new Oe;function Ed(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Int16Array(t.buffer)}function Td(s,e,t,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>e-1.001?e-1.001:o,a=a<0?0:a>t-1.001?t-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*e+c,d=s[f],p=s[f+1],v=s[f+e],g=s[f+e+1];return h+u<=1?d+(p-d)*h+(v-d)*u:g+(v-g)*(1-h)+(p-g)*(1-u)}var vn=class{constructor(e,t,n={}){this.d=e,this.base=t,this.mobile=!!n.mobile;let i=e.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=Ed(e.hf),a=Ed(e.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,e.hf=e.hc=null,Bt.uWorld.value.set(this.W,this.H),this.group=new Ot,this.colliders=new hi(8),this.decks=new hi(16),this.names=new hi(24),this.edgeGrid=new hi(24),this.pedGrid=new hi(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:e.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?768:1024,this.fountains=[],this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(e,t){let n=e-this.fx,i=t-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?Td(this.hf,this.fn,this.fn,this.fs,n,i):Td(this.hc,this.cnx,this.cnz,this.cs,e,t)}surfaceY(e,t,n=1e9){let i=this.hAt(e,t),r=this.decks.query(e,t,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=ds(e,t,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(e-c.x,t-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(e,t,n){return this.surfaceY(e,t,n)>this.hAt(e,t)+.5}streetAt(e,t){let n=this.names.query(e,t,30,this._tmp),i=null,r=30;for(let o of n){let a=ds(e,t,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(e-a.x,t-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(e){let t=new Image;await new Promise(o=>{t.onload=o,t.onerror=o,t.src=this.base+"far.jpg"}),this.farImg=t;let n=new an(t);n.colorSpace=Lt,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,Bt.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new ei(i);return r.colorSpace=bn,r.minFilter=Jt,r.generateMipmaps=!1,r.flipY=!1,Bt.uLamp.value=r,e&&e(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),e&&e(.5),this.buildRoadGraph(),this.buildPedGraph(),e&&e(.8),this.buildPylon(),this.buildLod(),e&&e(1),this}indexLines(){let e=this.T,t=()=>this.tiles.map(()=>[]);this.ix={road:t(),foot:t(),cross:t(),steps:t(),tram:t(),rail:t()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/e));f<=Math.min(this.ntz-1,Math.floor(u/e));f++)for(let d=Math.max(0,Math.floor(c/e));d<=Math.min(this.ntx-1,Math.floor(h/e));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){this.farMat=new ft({color:16777215,side:Ht}),this.farMat.onBeforeCompile=i=>li(i,"","",`{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`),this.farMat.customProgramCacheKey=()=>"terrFar";let e=this.Rn;if(this.groundHead=md,this.groundBody=th.replace("texture2D(uGMask, vWP.xz / uWorld).rgb","texture2D(map, vMapUv).rgb").replace("diffuseColor.rgb = col;",`vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(e*.55).toFixed(1)}, ${(e*.95).toFixed(1)}, dist));`),this.groundBody===th)throw new Error("ground shader patch failed");this.wallMat=new ft({vertexColors:!0,side:Ht});let n=ih.replace("bool old = kid < 0.5,","bool panel = kid > 5.5 && kid < 6.5; bool clad = kid > 8.5; bool old = kid < 0.5 || (kid > 6.5 && kid < 8.5),").replace("float gType = isGround * (old ? 1.0 : 0.0);","float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);").replace("} else if (util) {",`} else if (panel) {
            float ww = min(1.5, bw * 0.55), y0 = floorH * 0.32, wh = floorH * 0.46;
            float joint = 1.0 - hdBand(q.y, 0.04, floorH + 1.0, aa.y);
            float vj = 1.0 - hdBand(wx, 0.012, 0.988, aa.x / bw);
            col *= 1.0 - 0.20 * max(joint, vj) * (1.0 - far) * above;
            float logg = step(0.62, h21(vec2(colI + seed * 17.0, 1.0))) * body * (1.0 - isGround);
            float hole = hdBox(q, vec2(-ww * 0.5, y0), vec2(ww * 0.5, y0 + wh), aa) * body;
            float pane = hdBox(q, vec2(-ww * 0.5 + 0.06, y0 + 0.06), vec2(ww * 0.5 - 0.06, y0 + wh - 0.06), aa) * body;
            float lg = hdBox(q, vec2(-bw * 0.42, 0.10), vec2(bw * 0.42, floorH - 0.25), aa) * logg;
            col = mix(col, col * 0.55, lg);
            float rail = hdBox(q, vec2(-bw * 0.42, 0.10), vec2(bw * 0.42, 1.05), aa) * logg;
            col = mix(col, mix(vec3(0.70), wall * 1.1, 0.5), rail);
            col = mix(col, vec3(0.84, 0.84, 0.82), hole * (1.0 - logg));
            float mull = hdBand(abs(q.x), 0.03, 9.0, aa.x);
            glass = pane * mix(1.0, mull, 1.0 - far) * (1.0 - logg);
            glass = max(glass, lg * hdBox(q, vec2(-ww * 0.5, 1.05), vec2(ww * 0.5, floorH - 0.45), aa) * (1.0 - rail));
            lit = glass * step(0.5, rnd);
          } else if (clad) {
            // stone cladding of a 1960s department store: blank panelled walls, glass ground floor
            vec2 pm = vec2(vF.x * bw / 1.25, vF.y / 0.95);
            vec2 pf = fract(pm), pa = vec2(aa.x / 1.25, aa.y / 0.95);
            float jn = max(1.0 - hdBand(pf.x, 0.035, 0.965, pa.x), 1.0 - hdBand(pf.y, 0.05, 0.95, pa.y));
            col *= 0.90 + 0.18 * h21(floor(pm) + seed * 7.0);
            col *= 1.0 - 0.26 * jn * (1.0 - far) * above;
            col *= 0.93 + 0.07 * smoothstep(0.15, 0.5, pf.y) * (1.0 - far);
            float gl = isGround * hdBox(q, vec2(-bw * 0.47, 0.22), vec2(bw * 0.47, floorH - 0.55), aa);
            float fr = isGround * hdBox(q, vec2(-bw * 0.5, 0.0), vec2(bw * 0.5, floorH - 0.3), aa);
            col = mix(col, vec3(0.10, 0.10, 0.11), fr * (1.0 - gl));
            glass = gl; lit = gl * step(0.18, rnd);
          } else if (util) {`);if(n.length<ih.length+1700)throw new Error("facade shader patch failed");this.wallMat.onBeforeCompile=i=>li(i,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",xd,n),this.roofMat=new ft({vertexColors:!0,side:Ht,flatShading:!0}),this.roofMat.onBeforeCompile=i=>li(i,"","",vd),this.stoneMat=new ft({vertexColors:!0,side:Ht,flatShading:!0}),this.stoneMat.onBeforeCompile=i=>li(i,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new fn(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new ki(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new fn(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new ai(.28,6,4),this.headGeo.translate(0,4.7,0);for(let i of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])i.userData.shared=!0;this.trunkMat=new ft({color:4864040}),this.crownMat=new ft({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=i=>li(i,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new ft({color:2895408}),this.lampHeadMat=new nn({color:16767392}),this.gateMat=new ft({color:14209212})}tdist(e,t,n){let i=Math.max(e.x0-t,0,t-(e.x0+this.T)),r=Math.max(e.z0-n,0,n-(e.z0+this.T));return Math.hypot(i,r)}fetchTile(e){return e.state=1,e.has?fetch(this.base+"t/"+e.i+"_"+e.j+".json").then(t=>t.ok?t.json():to).catch(()=>to).then(t=>{e.state===1&&(e.data=t,e.state=2)}):(e.data=to,e.state=2,Promise.resolve())}unloadTile(e){this.genTile===e&&(this.gen=null,this.genTile=null);for(let t of e.objs)this.group.remove(t),t.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});e.objs.length=0,this.colliders.removeTag(e,e.keys),e.keys.clear(),this.gates=this.gates.filter(t=>t.tile!==e),this.fountains=this.fountains.filter(t=>t.tile!==e),e.data=null,e.state=0,e.lampPts=[],e.lod&&(e.lod.visible=!0),this.dropTex(e),this.lampDirty=!0}dropTex(e){e.tex&&(e.tex.dispose(),e.tex=null,e.cv=null,e.nearMat&&(e.nearMat.dispose(),e.nearMat=null),e.terr&&(e.terr.material=this.farMat))}runGen(e){let t=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-t>e)););}update(e,t,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,e,t);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(e-this.lampC[0],t-this.lampC[1])>190)&&this.paintLamps(e,t)}async prime(e,t){let n=this.tiles.filter(i=>this.tdist(i,e,t)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,e,t)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,e,t)<this.Rn&&this.paintTile(i);this.paintLamps(e,t)}makeTerrain(e){let t=e.fine?this.fs:this.cs,n=Math.round(this.T/t)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let p=0;p<n;p++)for(let v=0;v<n;v++){let g=p*n+v,m=e.x0+v*t,_=e.z0+p*t;r[g*3]=m,r[g*3+1]=this.hAt(m,_),r[g*3+2]=_;let x=this.hAt(m-t,_)-this.hAt(m+t,_),y=this.hAt(m,_-t)-this.hAt(m,_+t),S=Math.hypot(x,2*t,y);o[g*3]=x/S,o[g*3+1]=2*t/S,o[g*3+2]=y/S,a[g*2]=v*t/this.T,a[g*2+1]=p*t/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let p=0;p<n-1;p++)for(let v=0;v<n-1;v++){let g=p*n+v,m=g+1,_=g+n,x=_+1;c[l++]=g,c[l++]=_,c[l++]=m,c[l++]=m,c[l++]=_,c[l++]=x}let h=n*n,u=p=>{let v=h;for(let g=0;g<n;g++){let m=p(g);if(r[h*3]=r[m*3],r[h*3+1]=r[m*3+1]-5,r[h*3+2]=r[m*3+2],o[h*3]=o[m*3],o[h*3+1]=o[m*3+1],o[h*3+2]=o[m*3+2],a[h*2]=a[m*2],a[h*2+1]=a[m*2+1],g){let _=p(g-1),x=v+g-1,y=v+g;c[l++]=_,c[l++]=x,c[l++]=m,c[l++]=m,c[l++]=x,c[l++]=y}h++}};u(p=>p),u(p=>(n-1)*n+p),u(p=>p*n),u(p=>p*n+n-1);let f=new Rt;f.setAttribute("position",new Ft(r,3)),f.setAttribute("normal",new Ft(o,3)),f.setAttribute("uv",new Ft(a,2)),f.setIndex(new Ft(c,1)),f.computeBoundingSphere();let d=new Xe(f,e.nearMat||this.farMat);d.receiveShadow=!0,e.terr=d,this.group.add(d)}buildWater(){let e=new Qn(this.W+3e3,this.H+3e3,1,1);e.rotateX(-Math.PI/2),e.translate(this.W/2,this.water,this.H/2);let t=new ft({color:16777215}),n=nh.replace("vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)","vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)").replace("float fres = 0.04 + 0.96 *","float fres = 0.12 + 0.88 *");if(n===nh)throw new Error("water shader patch failed");t.onBeforeCompile=r=>li(r,"",gd,n),this.waterMat=t;let i=new Xe(e,t);i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i)}paintTile(e){let n=this.T,i=e.data||to,r=document.createElement("canvas");r.width=r.height=384;let o=r.getContext("2d"),a=384/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=d=>{o.beginPath();for(let p=0;p<d.length;p++){let v=d[p][0]/10,g=d[p][1]/10;p?o.lineTo(v,g):o.moveTo(v,g)}},l=d=>{o.beginPath();for(let p of d){for(let v=0;v<p.length;v++){let g=p[v][0]/10+e.x0,m=p[v][1]/10+e.z0;v?o.lineTo(g,m):o.moveTo(g,m)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let d of i.green)l(d),o.fill("evenodd");o.fillStyle="#b0a389";for(let d of i.parea)l(d),o.fill("evenodd");o.fillStyle="#26323a";for(let d of i.water)l(d),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(d=>!d.b);o.strokeStyle="#a39a8a";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+3.6,c(d.p),o.stroke());o.strokeStyle="#6f685e";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+.6,c(d.p),o.stroke());o.strokeStyle="#a69c86";for(let d of this.ix.foot[e.k])o.lineWidth=d.sw?2.2:2.6,c(d.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let d of this.ix.steps[e.k])c(d),o.stroke();o.strokeStyle="#b5a88e";for(let d of u)d.c===5&&(o.lineWidth=d.w,c(d.p),o.stroke());o.lineCap="butt";for(let d of this.ix.rail[e.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(d),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(d),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(d=>d.c<=4).sort((d,p)=>d.c-p.c);for(let d of f)o.strokeStyle=d.s?"#615850":d.pk?"#46464a":"#3a3b40",o.lineWidth=d.w,c(d.p),o.stroke();o.lineCap="butt";for(let d of f)d.c<2||d.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,d.o?d.w>7&&(o.setLineDash([3,6]),c(d.p),o.stroke()):(o.setLineDash(d.c>=4?[]:[3,6]),c(d.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let d of this.ix.tram[e.k])d.b||(c(d.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let d of this.ix.tram[e.k])if(!d.b)for(let p of[-.72,.72]){o.beginPath();let v=d.p;for(let g=0;g<v.length;g++){let m=v[Math.max(0,g-1)],_=v[Math.min(v.length-1,g+1)],x=_[0]-m[0],y=_[1]-m[1],S=Math.hypot(x,y)||1,b=v[g][0]/10-y/S*p,E=v[g][1]/10+x/S*p;g?o.lineTo(b,E):o.moveTo(b,E)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let d of this.ix.cross[e.k])c(d),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let d of i.bld)(!d.m||d.m<1)&&(l([d.o]),o.fill());e.cv=r,this.paintMask(e)}paintMask(e){let t=this.texRes,n=this.T,i=e.data||to,r=document.createElement("canvas");r.width=r.height=t;let o=r.getContext("2d",{alpha:!1}),a=t/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=p=>{o.beginPath();for(let v=0;v<p.length;v++){let g=p[v][0]/10,m=p[v][1]/10;v?o.lineTo(g,m):o.moveTo(g,m)}},l=p=>{o.beginPath();for(let v of p){for(let g=0;g<v.length;g++){let m=v[g][0]/10+e.x0,_=v[g][1]/10+e.z0;g?o.lineTo(m,_):o.moveTo(m,_)}o.closePath()}};o.fillStyle="#0f0",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#000",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#0f0";for(let p of i.green)l(p),o.fill("evenodd");o.fillStyle="#00f";for(let p of i.parea)l(p),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(p=>!p.b);o.strokeStyle="#000";for(let p of u)p.c>=1&&p.c<=4&&(o.lineWidth=p.w+3.6,c(p.p),o.stroke());for(let p of this.ix.foot[e.k])o.lineWidth=p.sw?2.2:2.6,c(p.p),o.stroke();o.lineWidth=3;for(let p of this.ix.steps[e.k])c(p),o.stroke();o.lineWidth=4.2;for(let p of this.ix.rail[e.k])c(p),o.stroke();o.strokeStyle="#00f";for(let p of u)p.c===5&&(o.lineWidth=p.w,c(p.p),o.stroke());for(let p of u.filter(v=>v.c<=4).sort((v,g)=>v.c-g.c)){let v=p.c===0&&(p.s||p.nv);o.strokeStyle=v?"#00f":p.s?"#f0f":"#f00",o.lineWidth=p.w,c(p.p),o.stroke()}let f=new ei(r);f.colorSpace=bn,f.anisotropy=4,f.flipY=!1,f.minFilter=Wn,f.generateMipmaps=!0,e.tex=f;let d=new ft({map:f,side:Ht});d.onBeforeCompile=p=>li(p,"",this.groundHead,this.groundBody),d.customProgramCacheKey=()=>"terrNear",e.nearMat=d,e.terr&&(e.terr.material=d),f.onUpdate=()=>{r.width=r.height=1}}drawGround(e,t,n,i){this.farImg&&this.farImg.width&&e.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,t,n)<i&&e.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(e,t){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(e/48)*48-1152/2,a=Math.round(t/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}Bt.uLampRect.value.set(o,a,1152,0),Bt.uLamp.value.needsUpdate=!0,this.lampC=[e,t],this.lampDirty=!1,this.lampT=40}emitBuilding(e,t,n,i,r,o,a){let c=1e9,l=-1e9;for(let M of n){let w=this.hAt(M[0],M[1]);w<c&&(c=w),w>l&&(l=w)}let h=t.h,u=c+Math.max(h,l-c+2.5),f=!a&&t.g&&h>6&&!(t.m>.5),d=f?c+4.3:t.m>.5?c+t.m:c-3,p=qa;t.c?p.set(t.c):t.k==="modern"?p.set(Md[r*Md.length|0]):t.k==="util"?p.set("#a8a296"):t.k==="church"?p.set("#eee4cc"):t.k==="house"?p.set(bd[r*bd.length|0]):t.k==="block"?p.set(Sd[r*Sd.length|0]):t.k==="panel"?p.set("#d9d2c0"):p.set(yd[r*yd.length|0]);let v=p.r,g=p.g,m=p.b,_=t.l||Math.max(1,Math.round(h/(t.k==="panel"?2.9:3.4))),x=t.t?7.5:pt(h/Math.max(1,_),2.7,5.5),y=Uy[t.k]??0,S=t.k==="modern"?2.6:t.k==="church"?5:t.k==="panel"?3:t.k==="house"?3.8:3.4,b=[n,...i];for(let M of b){let w=M.length,I=0;for(let P=0;P<w;P++){let L=M[P],H=M[(P+1)%w];I+=L[0]*H[1]-H[0]*L[1]}let U=(I>0?-1:1)*(M===n?1:-1),k=t.p?.06:0;for(let P=0;P<w;P++){let L=M[P],H=M[(P+1)%w],J=Math.hypot(H[0]-L[0],H[1]-L[1]);if(J<.05)continue;let Q=J<2.2?0:Math.max(1,Math.round(J/S)),Y=d-c,K=u-c,ie=Q?0:-1,ae=Q||-1,X=J/Math.max(1,Q),ee=(H[1]-L[1])/J,ue=-(H[0]-L[0])/J,de=ee*U*k,Te=ue*U*k,We=L[0]+de,it=L[1]+Te,pe=H[0]+de,ne=H[1]+Te;e.wp.push(We,d,it,pe,d,ne,pe,u,ne,We,d,it,pe,u,ne,We,u,it),e.wf.push(ie,Y,X,ae,Y,X,ae,K,X,ie,Y,X,ae,K,X,ie,K,X);for(let N=0;N<6;N++)e.wn.push(ee,0,ue),e.wc.push(v,g,m),e.wd.push(x,y,r,u-c);!a&&!(t.m>=2)&&!f&&t.k!=="roof"&&t.k!=="ruin"&&this.colliders.add({ax:L[0],az:L[1],bx:H[0],bz:H[1],y0:d-50,y1:u,kind:"b",tag:o},L[0],L[1],H[0],H[1],o.keys)}}let E=[],R=[];for(let M of n)E.push(M[0],M[1]);for(let M of i){R.push(E.length/2);for(let w of M)E.push(w[0],w[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let M=(0,no.default)(E,R);for(let w=0;w<M.length;w++)e.rp.push(E[M[w]*2],d,E[M[w]*2+1]),e.rc.push(.35,.33,.3)}if(!a&&t.r>.3&&t.s!=="f")this.pitchedRoof(n,i,E,R,u,t,r,e.rp,e.rc);else{let M=(0,no.default)(E,R);t.rc?p.set(t.rc):p.set(t.k==="modern"?"#5d5f63":t.k==="util"?"#6c6a66":t.k==="panel"?"#6f6c66":"#615c58");let w=.9+r*.2;for(let I=0;I<M.length;I++)e.rp.push(E[M[I]*2],u,E[M[I]*2+1]),e.rc.push(p.r*w,p.g*w,p.b*w);if(t.m>.5)for(let I=M.length-1;I>=0;I--)e.rp.push(E[M[I]*2],d,E[M[I]*2+1]),e.rc.push(p.r*.6,p.g*.6,p.b*.6)}}pitchedRoof(e,t,n,i,r,o,a,c,l){let h=(0,no.default)(n,i),u=[];for(let U=0;U<n.length;U+=2)u.push([n[U],n[U+1]]);let f=[];for(let U of[e,...t])for(let k=0;k<U.length;k++)f.push([U[k],U[(k+1)%U.length]]);let d=0;for(let U=0;U<e.length;U++){let k=e[U],P=e[(U+1)%e.length];d+=k[0]*P[1]-P[0]*k[1]}d=Math.abs(d/2);let p=o.k==="house"||this.mobile,v=p?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),g=[];for(let U=0;U<h.length;U+=3)g.push([h[U],h[U+1],h[U+2]]);let m=new Map,_=(U,k)=>{let P=U<k?U*1e6+k:k*1e6+U,L=m.get(P);return L===void 0&&(L=u.length,u.push([(u[U][0]+u[k][0])/2,(u[U][1]+u[k][1])/2]),m.set(P,L)),L},x=(U,k)=>Math.hypot(u[U][0]-u[k][0],u[U][1]-u[k][1])>v;for(let U=0;U<(p?4:7);U++){let k=!1,P=[];for(let L of g){let H=x(L[0],L[1]),J=x(L[1],L[2]),Q=x(L[2],L[0]),Y=H+J+Q;if(!Y){P.push(L);continue}k=!0;let[K,ie,ae]=L,X=[H,J,Q];if(Y===1){for(;!X[0];)[K,ie,ae]=[ie,ae,K],X=[X[1],X[2],X[0]];let ee=_(K,ie);P.push([K,ee,ae],[ee,ie,ae])}else if(Y===2){for(;X[2];)[K,ie,ae]=[ie,ae,K],X=[X[1],X[2],X[0]];let ee=_(K,ie),ue=_(ie,ae);P.push([K,ee,ue],[ee,ie,ue],[K,ue,ae])}else{let ee=_(K,ie),ue=_(ie,ae),de=_(ae,K);P.push([K,ee,de],[ee,ie,ue],[de,ue,ae],[ee,ue,de])}}if(g=P,!k)break}let y=u.map(([U,k])=>{let P=1e9;for(let[L,H]of f){let J=H[0]-L[0],Q=H[1]-L[1],Y=J*J+Q*Q||1e-9,K=((U-L[0])*J+(k-L[1])*Q)/Y;K=K<0?0:K>1?1:K;let ie=L[0]+J*K-U,ae=L[1]+Q*K-k,X=ie*ie+ae*ae;X<P&&(P=X)}return Math.sqrt(P)}),S=.01;for(let U of y)S=Math.max(S,U);let b=o.r,E;o.s==="d"?E=y.map(U=>b*Math.sqrt(Math.max(0,1-(1-U/S)**2))):o.s==="p"?E=y.map(U=>b*U/S):E=y.map(U=>Math.min(U*.82,b+1.2));let R=qa;o.rc?R.set(o.rc):R.set(wd[En(a*1e6|0)*wd.length|0]);let M=R.r,w=R.g,I=R.b;for(let U of g){let k=.88+En(U[0]*31+U[1])*.1;for(let P of U)c.push(u[P][0],r+E[P],u[P][1]),l.push(M*k,w*k,I*k)}}meshesFrom(e,t=!0){let n=[];if(e.wp.length){let i=new Rt;i.setAttribute("position",new nt(e.wp,3)),i.setAttribute("normal",new nt(e.wn,3)),i.setAttribute("color",new nt(e.wc,3)),i.setAttribute("fuv",new nt(e.wf,3)),i.setAttribute("fdat",new nt(e.wd,4)),i.computeBoundingSphere();let r=new Xe(i,this.wallMat);r.castShadow=r.receiveShadow=t,n.push(r)}if(e.rp.length){let i=new Rt;i.setAttribute("position",new nt(e.rp,3)),i.setAttribute("color",new nt(e.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new Xe(i,this.roofMat);r.castShadow=r.receiveShadow=t,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let e=new Map;this.d.tall.forEach((t,n)=>{let i=t.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=pt(Math.floor(r/this.T),0,this.ntx-1),c=pt(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=e.get(l);h||e.set(l,h=this.newArrays()),this.emitBuilding(h,t,i,[],En(n*613+7),l,!0)});for(let[t,n]of e){let i=new Ot;for(let r of this.meshesFrom(n,!1))i.add(r);t.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(e){let t=e.data,n=this.T,i=e.x0,r=e.z0,o=new ot,a=new tn,c=new D,l=new D,h=new D(0,1,0),u=t.trees.length;if(u){let _=new wn(this.trunkGeo,this.trunkMat,u),x=new wn(this.crownGeo,this.crownMat,u);for(let S=0;S<u;S++){let b=t.trees[S][0]/10+i,E=t.trees[S][1]/10+r,R=e.k*4099+S,M=.75+En(R*3+1)*.6,w=this.hAt(b,E);a.setFromAxisAngle(h,En(R)*6.28),o.compose(l.set(b,w,E),a,c.set(M,M*(.9+En(R*5)*.3),M)),_.setMatrixAt(S,o),x.setMatrixAt(S,o),qa.setHSL(.22+En(R*11)*.08,.38+En(R*17)*.2,.22+En(R*19)*.1),x.setColorAt(S,qa),this.colliders.add({ax:b-.25,az:E,bx:b+.25,bz:E,y0:w-2,y1:w+3,kind:"t",tag:e},b-.3,E-.3,b+.3,E+.3,e.keys)}_.castShadow=x.castShadow=!this.mobile||u<500,x.receiveShadow=!0,_.frustumCulled=x.frustumCulled=!1;let y=new Ot;y.add(_,x),e.objs.push(y),this.group.add(y)}yield;let f=t.lamps.map(_=>[_[0]/10+i,_[1]/10+r]),d=new hi(20),p=[];for(let _ of f)d.add(_,_[0],_[1],_[0],_[1]);for(let _ of this.ix.road[e.k]){if(_.b||_.c<1||_.c>5)continue;let x=_.p,y=14+En(x[0][0]*7+x[0][1])*10,S=1;for(let b=0;b<x.length-1;b++){let E=x[b][0]/10,R=x[b][1]/10,M=x[b+1][0]/10,w=x[b+1][1]/10,I=Math.hypot(M-E,w-R);if(!(I<.01)){for(;y<I;){let U=y/I,k=-(w-R)/I,P=(M-E)/I,L=_.c===5?0:_.w/2+.9,H=E+(M-E)*U+k*L*S,J=R+(w-R)*U+P*L*S;if(H>=i&&J>=r&&H<i+n&&J<r+n&&!d.query(H,J,13,p).length){let Q=[H,J];f.push(Q),d.add(Q,H,J,H,J)}S=-S,y+=_.c>=3?26:30}y-=I}}}e.lampPts=f;let v=f.filter(([_,x])=>this.surfaceY(_,x)===this.hAt(_,x));if(v.length){let _=new wn(this.postGeo,this.postMat,v.length),x=new wn(this.headGeo,this.lampHeadMat,v.length);v.forEach(([S,b],E)=>{o.makeTranslation(S,this.hAt(S,b),b),_.setMatrixAt(E,o),x.setMatrixAt(E,o),this.colliders.add({ax:S-.1,az:b,bx:S+.1,bz:b,y0:-50,y1:999,kind:"p",tag:e},S-.2,b-.2,S+.2,b+.2,e.keys)}),_.frustumCulled=x.frustumCulled=!1;let y=new Ot;y.add(_,x),e.objs.push(y),this.group.add(y)}yield;let g=this.newArrays(),m=this.gates.length;for(let _=0;_<t.bld.length;_++){let x=t.bld[_];if(x.n==="UFO")continue;x.n==="Kostol sv. Al\u017Ebety"&&(x.c="#9cc4e8",x.rc="#5f86b4");let y=x.o.map(b=>[b[0]/10+i,b[1]/10+r]),S=(x.i||[]).map(b=>b.map(E=>[E[0]/10+i,E[1]/10+r]));this.emitBuilding(g,x,y,S,En(e.k*7919+_*977+13),e,!1),_%24===23&&(yield)}for(let _=m;_<this.gates.length;_++){let x=this.gates[_],y=x.outer;if(x.tile!==e)continue;let S=0,b=0;for(let R of y)S+=R[0],b+=R[1];S/=y.length,b/=y.length;let E=y.slice().sort((R,M)=>Math.hypot(M[0]-S,M[1]-b)-Math.hypot(R[0]-S,R[1]-b)).slice(0,4);for(let R of E){let M=R[0]+(S-R[0])*.18,w=R[1]+(b-R[1])*.18,I=x.bot-x.gmin+3,U=new Xe(new Xt(1.8,I,1.8),this.gateMat);U.position.set(M,x.gmin-3+I/2,w),U.castShadow=U.receiveShadow=!0,e.objs.push(U),this.group.add(U),this.colliders.add({ax:M-.9,az:w,bx:M+.9,bz:w,y0:-50,y1:x.bot,kind:"b",tag:e},M-1,w-1,M+1,w+1,e.keys),this.colliders.add({ax:M,az:w-.9,bx:M,bz:w+.9,y0:-50,y1:x.bot,kind:"b",tag:e},M-1,w-1,M+1,w+1,e.keys)}}yield;for(let _ of this.meshesFrom(g))e.objs.push(_),this.group.add(_);if(yield,this.buildMarkings(e),yield,this.buildFountains(e),yield,t.walls.length){let _=[],x=[],y=new Oe,S=(R,M,w,I,U,k,P,L,H)=>{let J=Math.hypot(w-R,I-M);if(J<.05)return;let Q=-(I-M)/J*H*.5,Y=(w-R)/J*H*.5,K=[[R+Q,M+Y],[w+Q,I+Y],[w-Q,I-Y],[R-Q,M-Y]],ie=(ee,ue,de,Te)=>{_.push(...ee,...ue,...de,...ee,...de,...Te);for(let We=0;We<6;We++)x.push(y.r,y.g,y.b)},ae=ee=>ee===0||ee===3?U:k,X=ee=>ee===0||ee===3?P:L;for(let ee=0;ee<4;ee++){let ue=(ee+1)%4;ie([K[ee][0],ae(ee),K[ee][1]],[K[ue][0],ae(ue),K[ue][1]],[K[ue][0],X(ue),K[ue][1]],[K[ee][0],X(ee),K[ee][1]])}ie([K[0][0],X(0),K[0][1]],[K[1][0],X(1),K[1][1]],[K[2][0],X(2),K[2][1]],[K[3][0],X(3),K[3][1]])};for(let R of t.walls){let M=R.p.map(I=>[I[0]/10+i,I[1]/10+r]),w=R.k==="c"?2.4:R.k==="r"?.8:.45;y.set(R.k==="c"?"#a39a88":R.k==="r"?"#8f887a":"#a8a092");for(let I=0;I<M.length-1;I++){let[U,k]=M[I],[P,L]=M[I+1],H=this.hAt(U,k),J=this.hAt(P,L),Q=Math.min(R.h,R.k==="c"?9:4);if(S(U,k,P,L,H-2,J-2,H+Q,J+Q,w),this.colliders.add({ax:U,az:k,bx:P,bz:L,y0:Math.min(H,J)-3,y1:Math.max(H,J)+Q,kind:"w",tag:e},U,k,P,L,e.keys),R.k==="c"){let Y=Math.hypot(P-U,L-k);for(let K=.6;K<Y-.6;K+=2.4){let ie=K/Y,ae=Math.min(1,(K+1.2)/Y),X=mt(H,J,ie)+Q,ee=mt(H,J,ae)+Q;S(U+(P-U)*ie,k+(L-k)*ie,U+(P-U)*ae,k+(L-k)*ae,X,ee,X+1.1,ee+1.1,w)}}}}let b=new Rt;b.setAttribute("position",new nt(_,3)),b.setAttribute("color",new nt(x,3)),b.computeVertexNormals();let E=new Xe(b,this.stoneMat);E.castShadow=E.receiveShadow=!0,e.objs.push(E),this.group.add(E)}e.lod&&(e.lod.visible=!1),e.state=4,this.lampDirty=!0}buildMarkings(e){let t=[],n=[],i=this.T,r=e.x0,o=e.z0,a=(S,b)=>S>=r&&b>=o&&S<r+i&&b<o+i,c=(S,b,E,R,M)=>{t.push(...S,...b,...E,...S,...E,...R);for(let w=0;w<6;w++)n.push(M[0],M[1],M[2])},l=S=>S.map(b=>[b[0]/10,b[1]/10]),h=(S,b)=>{let E=[],R=0;for(let M=0;M<S.length-1;M++){let[w,I]=S[M],[U,k]=S[M+1],P=Math.hypot(U-w,k-I);if(P<.01)continue;let L=Math.max(1,Math.ceil(P/b)),H=(U-w)/P,J=(k-I)/P;for(let Q=0;Q<L;Q++)E.push({x:w+(U-w)*Q/L,z:I+(k-I)*Q/L,s:R+P*Q/L,dx:H,dz:J});R+=P,M===S.length-2&&E.push({x:U,z:k,s:R,dx:H,dz:J})}for(let M=1;M<E.length-1;M++){let w=E[M-1],I=E[M+1],U=Math.hypot(I.x-w.x,I.z-w.z)||1;E[M].nx=-(I.z-w.z)/U,E[M].nz=(I.x-w.x)/U}if(E.length){let M=E[0],w=E[E.length-1];M.nx=-M.dz,M.nz=M.dx,w.nx=-w.dz,w.nz=w.dx}return E},u=(S,b,E,R,M,w,I=0,U=0,k=null)=>{for(let P=0;P<S.length-1;P++){let L=S[P],H=S[P+1],J=(L.s+H.s)/2;if(!a((L.x+H.x)/2,(L.z+H.z)/2)||I&&J%(I+U)>I||k&&k.some(([ue,de])=>J>ue&&J<de))continue;let Q=L.x+L.nx*b,Y=L.z+L.nz*b,K=H.x+H.nx*b,ie=H.z+H.nz*b,ae=E/2,X=M(Q,Y)+w,ee=M(K,ie)+w;c([Q+L.nx*ae,X,Y+L.nz*ae],[K+H.nx*ae,ee,ie+H.nz*ae],[K-H.nx*ae,ee,ie-H.nz*ae],[Q-L.nx*ae,X,Y-L.nz*ae],R)}},f=(S,b)=>this.hAt(S,b),d=(S,b)=>this.surfaceY(S,b),p=[.78,.78,.74],v=[.36,.37,.39];this.touch||(this.touch=new Map,this.d.road.forEach((S,b)=>{if(!(S.c<1||S.c>4))for(let E of S.p){let R=E[0]*2e5+E[1],M=this.touch.get(R);M?M.includes(b)||M.push(b):this.touch.set(R,[b])}}),this.d.road.forEach((S,b)=>{S._i=b}));for(let S of this.ix.road[e.k]){if(S.c<1||S.c>4||S.s||S.pk||S.nv)continue;let b=!S.o,E=l(S.p),R=h(E,S.c>=3?2:2.5);if(R.length<2)continue;let M=S.b?d:f,w=R[R.length-1].s,I=[],U=0;for(let L=0;L<S.p.length;L++){L&&(U+=Math.hypot(E[L][0]-E[L-1][0],E[L][1]-E[L-1][1]));let H=(this.touch.get(S.p[L][0]*2e5+S.p[L][1])||[]).filter(Y=>Y!==S._i);if(!H.length)continue;let J=Math.max(...H.map(Y=>this.d.road[Y].w));(L===0||L===S.p.length-1)&&H.length===1&&this.d.road[H[0]].c===S.c&&Math.abs(this.d.road[H[0]].w-S.w)<.1||I.push([U-J/2-3,U+J/2+3])}if(w<14)continue;let k=S.b?.05:.04,P=S.w>=10;if(S.c>=2||S.c===1&&S.w>=6.5)if(P){b&&(u(R,.14,.12,p,M,k,0,0,I),u(R,-.14,.12,p,M,k,0,0,I));for(let L of b?[S.w/4,-S.w/4]:[S.w/6,-S.w/6])u(R,L,.13,p,M,k,3,6,I)}else(b||S.w>=7)&&u(R,0,.13,p,M,k,3,S.c>=3?4.5:6,I);if(S.c>=3)for(let L of[S.w/2-.3,-(S.w/2-.3)])u(R,L,.12,p,M,k,0,0,I)}let g=[],m=(S,b)=>{for(let E of this.edgeGrid.query(S,b,8,g)){let R=ds(S,b,E.ax,E.az,E.bx,E.bz,this._c);if(Math.hypot(S-R.x,b-R.z)<E.e.r.w/2-.1)return!0}return!1};for(let S of this.ix.cross[e.k]){let b=h(l(S),.25);for(let E=0;E<b.length-1;E++){let R=b[E];if(R.s%1>.5)continue;let M=b[E+1],w=(R.x+M.x)/2,I=(R.z+M.z)/2;if(!a(w,I)||!m(w,I))continue;let U=1.7,k=f(w,I)+.045;c([R.x+R.nx*U,k,R.z+R.nz*U],[M.x+M.nx*U,k,M.z+M.nz*U],[M.x-M.nx*U,k,M.z-M.nz*U],[R.x-R.nx*U,k,R.z-R.nz*U],[.82,.82,.78])}}for(let S of this.ix.tram[e.k]){let b=h(l(S.p),1.5);if(b.length<2)continue;let E=S.b?d:f;for(let R of[-.5,.5])u(b,R,.075,v,E,.05),u(b,R+.07*Math.sign(R),.05,[.05,.05,.055],E,.048)}for(let S of this.ix.rail[e.k]){let b=h(l(S),3);if(!(b.length<2)){u(b,0,2.7,[.13,.12,.11],f,.03),u(b,0,2.3,[.2,.17,.14],f,.04,.28,.42);for(let E of[-.72,.72])u(b,E,.09,[.42,.42,.44],f,.06)}}if(!t.length)return;this.markMat||(this.markMat=new ft({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.markMat.onBeforeCompile=S=>li(S,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`));let _=new Rt,x=new Float32Array(t.length);for(let S=1;S<x.length;S+=3)x[S]=1;_.setAttribute("position",new nt(t,3)),_.setAttribute("normal",new Ft(x,3)),_.setAttribute("color",new nt(n,3)),_.computeBoundingSphere();let y=new Xe(_,this.markMat);y.receiveShadow=!0,e.objs.push(y),this.group.add(y)}buildFountains(e){let t=[],n=[],i=[];for(let r of e.data.water){let o=r[0].map(m=>[m[0]/10+e.x0,m[1]/10+e.z0]);if(o.length>60||o.length<3)continue;let a=0,c=0,l=1e9;for(let[m,_]of o)a+=m,c+=_,l=Math.min(l,this.hAt(m,_));if(a/=o.length,c/=o.length,l<this.water+1.5)continue;let h=l+.32,u=[];for(let m of o)u.push(m[0],m[1]);let f=(0,no.default)(u);for(let m=0;m<f.length;m++)i.push(u[f[m]*2],h,u[f[m]*2+1]);let d=0;for(let m=0;m<o.length;m++){let _=o[m],x=o[(m+1)%o.length];d+=_[0]*x[1]-x[0]*_[1]}let p=d>0?1:-1,v=l+.5,g=.28;for(let m=0;m<o.length;m++){let _=o[m],x=o[(m+1)%o.length],y=Math.hypot(x[0]-_[0],x[1]-_[1]);if(y<.05)continue;let S=(x[1]-_[1])/y*p*g,b=-(x[0]-_[0])/y*p*g,E=[_[0],l-1,_[1]],R=[x[0],l-1,x[1]],M=[_[0],v,_[1]],w=[x[0],v,x[1]],I=[_[0]+S,v,_[1]+b],U=[x[0]+S,v,x[1]+b],k=[_[0]+S,l-1,_[1]+b],P=[x[0]+S,l-1,x[1]+b],L=(H,J,Q,Y)=>{t.push(...H,...J,...Q,...H,...Q,...Y);for(let K=0;K<6;K++)n.push(.56,.54,.5)};L(E,R,w,M),L(M,w,U,I),L(I,U,P,k),this.colliders.add({ax:_[0],az:_[1],bx:x[0],bz:x[1],y0:l-2,y1:v+.4,kind:"w",tag:e},_[0],_[1],x[0],x[1],e.keys)}this.fountains.push({x:a,z:c,y:h,area:Math.abs(d)/2,tile:e})}if(i.length){let r=new Rt;r.setAttribute("position",new nt(i,3)),r.computeVertexNormals();let o=new Xe(r,this.waterMat);o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}if(t.length){let r=new Rt;r.setAttribute("position",new nt(t,3)),r.setAttribute("color",new nt(n,3)),r.computeVertexNormals();let o=new Xe(r,this.stoneMat);o.castShadow=o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}}buildBridges(){let e=this.d.road.filter(h=>h.b),t=h=>[h[0]/10,h[1]/10],n=h=>h[0]+","+h[1],i=new Set,r=new Map;e.forEach((h,u)=>{for(let f of[h.p[0],h.p[h.p.length-1]]){let d=n(f);r.has(d)||r.set(d,[]),r.get(d).push(u)}});let o=[];e.forEach((h,u)=>{if(i.has(u))return;i.add(u);let f=h.p.slice(),d=!0;for(;d;){d=!1;for(let p of[!1,!0]){let v=n(p?f[0]:f[f.length-1]);for(let g of r.get(v)||[]){if(i.has(g))continue;let m=e[g];if((m.n||"")===(h.n||"")){if(p){if(n(m.p[m.p.length-1])!==v)continue;f=m.p.slice(0,-1).concat(f)}else{if(n(m.p[0])!==v)continue;f=f.concat(m.p.slice(1))}i.add(g),d=!0;break}}if(d)break}}o.push({pts:f.map(t),w:h.w,n:h.n||"",c:h.c,bh:h.bh})});let a=this.d.river.map(h=>h.map(t)),c=(h,u)=>a.some(f=>dd(h,u,f));this.bridges=[];let l=o.filter(h=>h.n==="Most SNP"&&h.pts.length>3).length;for(let h of o){let u=[],f=0;for(let b=0;b<h.pts.length-1;b++){let[E,R]=h.pts[b],[M,w]=h.pts[b+1],I=Math.hypot(M-E,w-R),U=Math.max(1,Math.ceil(I/2));for(let k=0;k<U;k++)u.push({x:E+(M-E)*k/U,z:R+(w-R)*k/U,d:f+I*k/U});f+=I}let d=h.pts[h.pts.length-1];if(u.push({x:d[0],z:d[1],d:f}),f<1)continue;let p=this.hAt(u[0].x,u[0].z),v=this.hAt(d[0],d[1]),g=h.n==="Most SNP",m=h.bh!==void 0?h.bh:g?11.5:7,_=m===0;for(let b of u)b.base=Math.max(mt(p,v,b.d/f),this.water+1.6),b.tgt=!_&&c(b.x,b.z)?this.water+m:b.base,_||(b.tgt=Math.max(b.tgt,this.hAt(b.x,b.z)+(g?.2:0)));let x=g?.055:.075;for(let b of u){let E=b.base;if(!_)for(let R of u)E=Math.max(E,R.tgt-x*Math.abs(b.d-R.d));b.y=E}let y=g?l>1?6.8:10.8:Math.max(2.5,h.w/2+1.2),S={s:u,hw:y,big:g,low:_,n:h.n};for(let b=0;b<u.length-1;b++){let E=u[b],R=u[b+1],M={ax:E.x,az:E.z,bx:R.x,bz:R.z,ya:E.y,yb:R.y,hw:y,br:S};this.decks.add(M,Math.min(E.x,R.x)-y,Math.min(E.z,R.z)-y,Math.max(E.x,R.x)+y,Math.max(E.z,R.z)+y)}this.bridges.push(S)}}buildBridgeMeshes(){let e=[],t=[],n=new Oe,i=(d,p,v,g,m)=>{e.push(...d,...p,...v,...d,...v,...g);for(let _=0;_<6;_++)t.push(m[0],m[1],m[2])};for(let d of this.bridges){let p=d.s;n.set(d.big?"#8d9297":"#b3aea2");let v=[n.r,n.g,n.b],g=[.24,.24,.26];for(let m=0;m<p.length-1;m++){let _=p[m],x=p[m+1],y=Math.hypot(x.x-_.x,x.z-_.z)||1,S=-(x.z-_.z)/y,b=(x.x-_.x)/y,E=d.hw,R=[_.x+S*E,_.y,_.z+b*E],M=[_.x-S*E,_.y,_.z-b*E],w=[x.x+S*E,x.y,x.z+b*E],I=[x.x-S*E,x.y,x.z-b*E],U=d.big?2.2:d.low?.8:2.2,k=Y=>[Y[0],Y[1]-U,Y[2]];i(R,w,I,M,g),i(k(R),k(M),k(I),k(w),v.map(Y=>Y*.6)),i(R,k(R),k(w),w,v),i(M,I,k(I),k(M),v);let P=[_.x+S*.15,_.y+.03,_.z+b*.15],L=[_.x-S*.15,_.y+.03,_.z-b*.15],H=[x.x-S*.15,x.y+.03,x.z-b*.15],J=[x.x+S*.15,x.y+.03,x.z+b*.15];if((d.big||m%4<2&&E>4)&&i(P,J,H,L,[.8,.78,.7]),_.y>this.hAt(_.x,_.z)+.9||x.y>this.hAt(x.x,x.z)+.9){for(let Y of[1,-1]){let K=[_.x+S*E*Y,_.y,_.z+b*E*Y],ie=[x.x+S*E*Y,x.y,x.z+b*E*Y],ae=(K[0]+ie[0])/2+S*Y*.7,X=(K[2]+ie[2])/2+b*Y*.7,ee=!1;for(let de of this.decks.query(ae,X,1,this._tmp)){if(de.br===d)continue;let Te=ds(ae,X,de.ax,de.az,de.bx,de.bz,this._c);if(Math.hypot(ae-Te.x,X-Te.z)<de.hw&&Math.abs(de.ya+(de.yb-de.ya)*Te.t-_.y)<1.6){ee=!0;break}}if(ee)continue;let ue=(de,Te)=>[de[0],de[1]+Te,de[2]];i(K,ie,ue(ie,1.1),ue(K,1.1),[.78,.79,.8]),this.colliders.add({ax:K[0],az:K[2],bx:ie[0],bz:ie[2],y0:Math.min(_.y,x.y)-1,y1:Math.max(_.y,x.y)+1.4,kind:"r",tag:null},K[0],K[2],ie[0],ie[2])}if(!d.low&&!d.big&&m%30===15){let Y=Math.min(this.hAt(_.x,_.z),this.water)-3;if(_.y-Y>4){let ie=[_.x-2.2,_.y-U,_.z-2.2],ae=[_.x+2.2,_.y-U,_.z-2.2],X=[_.x+2.2,_.y-U,_.z+2.2],ee=[_.x-2.2,_.y-U,_.z+2.2],ue=de=>[de[0],Y,de[2]];i(ie,ae,ue(ae),ue(ie),v),i(ae,X,ue(X),ue(ae),v),i(X,ee,ue(ee),ue(X),v),i(ee,ie,ue(ie),ue(ee),v)}}}}}let r=(d,p,v,g)=>{let m=p[0]-d[0],_=p[1]-d[1],x=p[2]-d[2],y=Math.hypot(m,_,x)||1,S=-x,b=m,E=Math.hypot(S,b);E<1e-4?(S=1,b=0):(S/=E,b/=E);let R=_*b/y,M=(x*S-m*b)/y,w=-_*S/y,I=v/2,U=(P,L,H)=>[P[0]+S*I*L+R*I*H,P[1]+M*I*H,P[2]+b*I*L+w*I*H],k=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let P=0;P<4;P++){let L=(P+1)%4;i(U(d,...k[P]),U(p,...k[P]),U(p,...k[L]),U(d,...k[L]),g)}},o=d=>this.bridges.filter(p=>p.n===d).sort((p,v)=>v.s.length-p.s.length)[0],a=d=>{let p=Math.max(...d.s.map(g=>g.y)),v=d.s.filter(g=>g.y>p-.6);return v.length>8?v:null},c=(d,p,v,g)=>{let m=d[Math.max(0,p-1)],_=d[Math.min(d.length-1,p+1)],x=Math.hypot(_.x-m.x,_.z-m.z)||1;return[d[p].x-(_.z-m.z)/x*v,d[p].y+g,d[p].z+(_.x-m.x)/x*v]},l=o("Most Apollo");if(l&&a(l)){let d=a(l),p=d.length-1,v=[.86,.87,.88];for(let g of[-(l.hw+9),l.hw+9]){let m=null;for(let _=0;_<=p;_+=3){let x=_/p,y=c(d,_,g,34*4*x*(1-x));m&&r(m,y,1.8,v),_%9===0&&_>0&&_<p&&r(y,c(d,_,g*.75,.5),.3,v),m=y}m&&r(m,c(d,p,g,0),1.8,v)}}let h=o("Star\xFD most");if(h&&a(h)){let d=a(h),p=d.length-1,v=[.42,.55,.48];for(let g of[-(h.hw+2.5),h.hw+2.5])for(let m=0;m+6<=p;m+=6){let _=c(d,m,g,.4),x=c(d,m+6,g,.4),y=c(d,m+3,g,8.5),S=c(d,Math.max(0,m-3),g,8.5);r(_,y,.5,v),r(y,x,.5,v),m&&r(S,y,.6,v),r(_,x,.5,v)}}if(!e.length)return;let u=new Rt;u.setAttribute("position",new nt(e,3)),u.setAttribute("color",new nt(t,3)),u.computeVertexNormals();let f=new Xe(u,this.stoneMat);f.castShadow=f.receiveShadow=!0,f.frustumCulled=!1,this.group.add(f)}buildPylon(){let e=this.d.pylon.map(g=>g.map(m=>[m[0]/10,m[1]/10]));if(e.length<2)return;let t=e.map(g=>{let m=0,_=0;for(let x of g)m+=x[0],_+=x[1];return[m/g.length,_/g.length]}),n=new Ot,i=new ft({color:9212310}),r=this.water+84,o=(t[0][0]+t[1][0])/2,a=(t[0][1]+t[1][1])/2,c=14,l=[];for(let g of t){let m=this.hAt(g[0],g[1])-2,_=new D(g[0],m,g[1]),x=new D(o+(g[0]-o)*.55,r,a+c),y=new Xe(new Xt(3.2,_.distanceTo(x),4.2),i);y.position.copy(_).add(x).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new D(0,1,0),x.clone().sub(_).normalize()),y.castShadow=!0,n.add(y),l.push(x),this.colliders.add({ax:g[0]-2,az:g[1]-2,bx:g[0]+2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2),this.colliders.add({ax:g[0]+2,az:g[1]-2,bx:g[0]-2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2)}let h=o,u=a+c,f=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([g,m])=>new be(g,m)),d=new Xe(new ir(f,40),new ft({color:10133670}));d.position.set(h,r+3,u),d.castShadow=!0,n.add(d);let p=new Xe(new sr(15.8,.35,6,48),new nn({color:16765578}));p.rotation.x=Math.PI/2,p.position.set(h,r+3.3,u),this.ufoRing=p,n.add(p);let v=this.bridges.find(g=>g.big);if(v){let g=new ft({color:13159632}),m=v.s.filter(x=>{let y=Math.hypot(x.x-o,x.z-a);return y>40&&y<240&&x.z<a}),_=[];for(let x=0;x<m.length;x+=Math.max(1,Math.floor(m.length/8)))_.push(m[x]);for(let x of _)for(let y of[-1,1]){let S=l[y<0?0:1],b=new D(mt(S.x,o,.2),mt(r-12,r-40,Math.hypot(x.x-o,x.z-a)/240),mt(S.z,a,.6)),E=new D(x.x+y*9.5,x.y+.6,x.z),R=new Xe(new Xt(.35,b.distanceTo(E),.35),g);R.position.copy(b).add(E).multiplyScalar(.5),R.quaternion.setFromUnitVectors(new D(0,1,0),E.clone().sub(b).normalize()),n.add(R)}}n.traverse(g=>{g.frustumCulled=!1}),this.group.add(n),this.ufoPos=new D(h,r+3,u)}buildRoadGraph(){let e=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),t=new Map,n=l=>l[0]*2e5+l[1];for(let l of e)l.p.forEach((h,u)=>{let f=n(h);t.set(f,(t.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of e){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||t.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(m=>[m[0]/10,m[1]/10]),d=r(l.p[h]),p=r(l.p[u]),v=(m,_,x)=>{let y=[0],S=0;for(let E=1;E<x.length;E++)S+=Math.hypot(x[E][0]-x[E-1][0],x[E][1]-x[E-1][1]),y.push(S);let b={a:m,b:_,p:x,cum:y,L:S,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(b),m.out.push(b),_.inn.push(b),b},g=v(d,p,f);if(!l.o){let m=v(p,d,f.slice().reverse());g.rev=m,m.rev=g}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let p of c){if(Math.abs(p.x-h)>18||Math.abs(p.z-u)>18)continue;let v=Math.hypot(p.x-h,p.z-u);v<d&&p.out.length+p.inn.length>=3&&(d=v,f=p)}f&&!f.sig&&(f.sig={phase:En(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(e,t,n=40,i=null){let r=this.edgeGrid.query(e,t,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=ds(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(e-h.x,t-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(e,t,n){if(!e.sig)return!0;let i=(n+e.sig.phase)%30,r=Math.abs(Math.cos(t))>Math.abs(Math.sin(t));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let e=[];for(let c of this.d.foot)e.push(c.p);for(let c of this.d.cross)e.push(c);for(let c of this.d.steps)e.push(c);for(let c of this.d.road)c.c===5&&!c.b&&e.push(c.p);let t=c=>c[0]*2e5+c[1],n=new Map;for(let c of e)c.forEach((l,h)=>n.set(t(l),(n.get(t(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=t(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let v=1;v<c.length;v++)f+=Math.hypot(c[v][0]-c[v-1][0],c[v][1]-c[v-1][1]),d.push(f);if(f<(u?8:.5))return;let p={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(p),h.e.push(p),o.push(p)};for(let c of e){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(t(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let p=c.p[Math.max(0,d-1)],v=c.p[Math.min(c.p.length-1,d+1)],g=v[0]-p[0],m=v[1]-p[1],_=Math.hypot(g,m)||1;return[f[0]/10-m/_*h,f[1]/10+g/_*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(e,t,n){let i=e.cum;t=pt(t,0,e.L);let r=0;for(;r<i.length-2&&i[r+1]<t;)r++;let o=i[r+1]-i[r]||1,a=(t-i[r])/o,c=e.p[r],l=e.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}collide(e,t,n,i,r){let o=this.colliders.query(e,t,i+.5,this._tmp),a=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let c=0;c<o.length;c++){let l=o[c];if(n>l.y1||n+1.5<l.y0)continue;let h=ds(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=e-h.x,f=t-h.z,d=Math.hypot(u,f);if(d<i){d<1e-4&&(u=-(l.bz-l.az),f=l.bx-l.ax);let p=Math.hypot(u,f)||1,v=i-d;e+=u/p*v,t+=f/p*v,r.nx+=u/p,r.nz+=f/p,r.d=Math.max(r.d,v),r.kind=l.kind,a=!0}}if(r.x=e,r.z=t,a){let c=Math.hypot(r.nx,r.nz)||1;r.nx/=c,r.nz/=c}return a}rayHit(e,t,n,i,r){let o=(e+n)/2,a=(t+i)/2,c=Math.hypot(n-e,i-t)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=zy(e,t,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function zy(s,e,t,n,i,r,o,a){let c=t-s,l=n-e,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-e)*h)/f,p=((i-s)*l-(r-e)*c)/f;return d>=0&&d<=1&&p>=0&&p<=1?d:null}var Fy=as,Ad=ri,sh=$n,ur=Jt,io=Aa,so=ta,Ya=be,Oy=At,By=Rt,Rd=nt,ky=Xe,Hy=Bi,Gy=er,Vy=wi,Wy=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ro="precision highp float; in vec3 position; in vec2 uv;"+Wy,Cd=class{constructor(s){this.r=s;let e=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"));this.type=e?Fy:Ad,this.hdr=!!e,this.exposure={value:1},this.samples=4,this.sceneRT=new sh(4,4,{type:this.type,depthBuffer:!0,minFilter:ur,magFilter:ur,samples:this.samples}),this.ldrRT=new sh(4,4,{type:Ad,depthBuffer:!1,minFilter:ur,magFilter:ur}),this.bloom=[];for(let n=0;n<5;n++)this.bloom.push(new sh(4,4,{type:this.type,depthBuffer:!1,minFilter:ur,magFilter:ur}));this.brightMat=new io({glslVersion:so,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new Ya(1,1)}},vertexShader:ro,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new io({glslVersion:so,uniforms:{tSrc:{value:null},uTexel:{value:new Ya(1,1)}},vertexShader:ro,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new io({glslVersion:so,uniforms:{tSrc:{value:null},uTexel:{value:new Ya(1,1)}},vertexShader:ro,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:Vy,transparent:!0}),this.gradeMat=new io({glslVersion:so,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:Bt.uNight},vertexShader:ro,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
        vec3 aces(vec3 c){ return clamp((c*(2.51*c+0.03))/(c*(2.43*c+0.59)+0.14), 0., 1.); }
        void main(){
          vec3 c = texture(tScene, vUv).rgb * uExposure;
          c += texture(tBloom, vUv).rgb * uBloom;
          c = aces(c);
          float l = dot(c, vec3(0.299,0.587,0.114));
          c = mix(vec3(l), c, uSat);
          // gentle filmic split-tone: warm highlights, cool shadows
          c *= mix(vec3(0.96,0.99,1.05), vec3(1.04,1.0,0.95), smoothstep(0.0, 0.7, l));
          c = pow(clamp(c,0.,1.), vec3(1.0/2.2));
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new io({glslVersion:so,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new Ya(1,1)},uFxaa:{value:1},uFlash:{value:new Oy(0,0,0,0)}},vertexShader:ro,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
        void main(){
          vec4 m = texture(tSrc, vUv);
          vec3 col = m.rgb;
          if (uFxaa > 0.5) {
            float lNW = texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).a, lNE = texture(tSrc, vUv + uTexel*vec2(1.,-1.)).a;
            float lSW = texture(tSrc, vUv + uTexel*vec2(-1.,1.)).a,  lSE = texture(tSrc, vUv + uTexel*vec2(1.,1.)).a;
            float lM = m.a, lMin = min(lM, min(min(lNW,lNE), min(lSW,lSE))), lMax = max(lM, max(max(lNW,lNE), max(lSW,lSE)));
            vec2 dir = vec2(-((lNW+lNE)-(lSW+lSE)), ((lNW+lSW)-(lNE+lSE)));
            float red = max((lNW+lNE+lSW+lSE)*0.03125, 0.0078125);
            dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + red), -8.0, 8.0) * uTexel;
            vec3 a = 0.5*(texture(tSrc, vUv + dir*(1./3.-.5)).rgb + texture(tSrc, vUv + dir*(2./3.-.5)).rgb);
            vec4 b4 = 0.25*(texture(tSrc, vUv + dir*-.5) + texture(tSrc, vUv + dir*.5));
            vec3 b = a*0.5 + b4.rgb;
            col = (b4.a*2.0 + dot(a, vec3(0.299,0.587,0.114)))*0.5 < lMin || dot(b, vec3(0.299,0.587,0.114)) > lMax ? a : b;
          }
          col = mix(col, uFlash.rgb, uFlash.a);
          vec2 q = vUv - 0.5; col *= 1.0 - dot(q,q)*0.42;
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let t=new By;t.setAttribute("position",new Rd([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new Rd([0,0,2,0,0,2],2)),this.quad=new ky(t,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new Hy,this.qscene.add(this.quad),this.qcam=new Gy}setSize(s,e,t=1,n=4){let i=Math.max(16,Math.round(s*t)),r=Math.max(16,Math.round(e*t));n!==this.samples&&(this.samples=n,this.sceneRT.dispose(),this.sceneRT.samples=n),this.sceneRT.setSize(i,r),this.ldrRT.setSize(i,r);let o=i>>1,a=r>>1;for(let c of this.bloom)c.setSize(Math.max(2,o),Math.max(2,a)),o>>=1,a>>=1;return this.finalMat.uniforms.uTexel.value.set(1/i,1/r),this.finalMat.uniforms.uFxaa.value=n>0?0:1,this.w=i,this.h=r,this.cw=s,this.ch=e,{aspect:s/e}}_pass(s,e){this.quad.material=s,this.r.setRenderTarget(e),this.r.render(this.qscene,this.qcam)}render(s,e){let t=this.r,n=this.bloom;t.setRenderTarget(this.sceneRT),t.render(s,e),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,n[0]);for(let i=1;i<n.length;i++)this.downMat.uniforms.tSrc.value=n[i-1].texture,this.downMat.uniforms.uTexel.value.set(1/n[i-1].width,1/n[i-1].height),this._pass(this.downMat,n[i]);t.autoClear=!1;for(let i=n.length-1;i>0;i--)this.upMat.uniforms.tSrc.value=n[i].texture,this.upMat.uniforms.uTexel.value.set(.5/n[i].width,.5/n[i].height),this._pass(this.upMat,n[i-1]);t.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),t.setRenderTarget(null),t.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,t.render(this.qscene,this.qcam)}};var oe={Mesh:Xe,Group:Ot,Scene:Bi,Object3D:Gt,InstancedMesh:wn,Vec2:be,Vec3:D,Vec4:At,Mat4:ot,Quat:tn,Color:Oe,Box3:$t,Geo:Rt,F32:nt,Attr:Ft,Box:Xt,Cyl:fn,Sphere:ai,Plane:Qn,Torus:sr,Lathe:ir,Ico:ki,Lambert:ft,Basic:nn,Standard:Hi,Shader:Sn,CanvasTex:ei,DataTex:kr,Linear:Jt,Nearest:jt,MipLinear:Wn,Additive:wi,DoubleSide:Ht,BackSide:un,SRGB:Lt};function Pd(s){let{Fe:e,Wt:t,Tt:n,Pn:i,Ln:r,we:o,q:a,Ve:c,vt:l,Kn:h,an:u,Xs:f,Ye:d,Ge:p,Xn:v,ct:g,en:m,fn:_,Zs:x,mh:y,Zn:S,Yn:b,Ks:E,OX:R,OZ:M}=s;var w=(()=>{let I=Math.PI,U=!1,k={};function P(F,Z,O){let te=document.createElement("canvas");te.width=F,te.height=Z,O(te.getContext("2d"),F,Z);let z=new oe.CanvasTex(te);return z.colorSpace=oe.SRGB,z.anisotropy=4,z}function L(F,Z=1){return F.onBeforeCompile=O=>f(O,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${Z.toFixed(2)}; }`),F}function H(F,Z){if(!F||F._gl||F.isMeshBasicMaterial)return F;F._gl=1;let O=F.name||"",te=Z!==void 0?Z:/window|glass/i.test(O)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(O)?0:/head|tail/i.test(O)?.06:.07;return F.onBeforeCompile=z=>f(z,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${te.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(te*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),F}function J(F){let Z=[],O=[],te=[],z=new oe.Color;for(let[re,fe,Ee,Ge,Ae,$e,tt]of F){let xt=new oe.Box(re,fe,Ee).toNonIndexed();xt.translate(Ge,Ae,$e);let lt=xt.attributes.position.array,wt=xt.attributes.normal.array;z.set(tt);for(let Ye=0;Ye<lt.length;Ye+=3)Z.push(lt[Ye],lt[Ye+1],lt[Ye+2]),O.push(wt[Ye],wt[Ye+1],wt[Ye+2]),te.push(z.r,z.g,z.b)}let V=new oe.Geo;return V.setAttribute("position",new oe.F32(Z,3)),V.setAttribute("normal",new oe.F32(O,3)),V.setAttribute("color",new oe.F32(te,3)),V}let Q=null;function Y(){if(!Q){Q=[];let F="ABCDEFGHJKLMNPRSTVXYZ",Z=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let O=0;O<12;O++){let te=Z[O]+" "+(100+Math.floor(_(O*7+3)*900))+F[Math.floor(_(O*13+1)*F.length)]+F[Math.floor(_(O*17+5)*F.length)],z=P(256,64,(V,re,fe)=>{V.fillStyle="#f5f5f0",V.fillRect(0,0,re,fe),V.fillStyle="#1c3f9e",V.fillRect(0,0,30,fe),V.fillStyle="#fff",V.font="700 15px sans-serif",V.textAlign="center",V.fillText("SK",15,54),V.strokeStyle="#111",V.lineWidth=4,V.strokeRect(2,2,re-4,fe-4),V.fillStyle="#111",V.font='700 42px "JetBrains Mono", monospace',V.textBaseline="middle",V.fillText(te,(re+30)/2,fe/2+3)});Q.push(new oe.Lambert({map:z,name:"Plate"}))}}return m(Q)}let K={};function ie(F){if(K[F])return K[F];let Z=P(512,96,(O,te,z)=>{if(F==="pz"){O.fillStyle="#f2f2f0",O.fillRect(0,0,te,z);let V=12,re=te/V;for(let fe=0;fe<2;fe++)for(let Ee=0;Ee<V;Ee++)O.fillStyle=(Ee+fe)%2?"#0b3fa8":"#d9ea10",O.fillRect(Ee*re,8+fe*40,re+1,40);O.fillStyle="#0b3fa8",O.fillRect(te*.31,4,te*.38,z-8),O.fillStyle="#fff",O.font="900 54px Anton, Impact, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText("POL\xCDCIA",te/2,z/2+4)}else if(F==="pz25")O.fillStyle="#101216",O.fillRect(0,10,te,z-26),O.fillStyle="#0b4fc4",O.beginPath(),O.moveTo(0,10),O.lineTo(150,10),O.lineTo(96,z-16),O.lineTo(0,z-16),O.fill(),O.beginPath(),O.moveTo(te,10),O.lineTo(te-150,10),O.lineTo(te-96,z-16),O.lineTo(te,z-16),O.fill(),O.fillStyle="#e0102a",O.fillRect(0,z-14,te,6),O.fillStyle="#f2f2f0",O.fillRect(0,0,te,8),O.fillRect(0,z-8,te,8),O.fillStyle="#fff",O.font="900 50px Anton, Impact, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText("POL\xCDCIA",te/2,z/2-2);else{O.fillStyle="#f4f4f2",O.fillRect(0,0,te,z);let V=16,re=te/V;for(let fe=0;fe<V;fe++)O.fillStyle=fe%2?"#0d3a8c":"#f4f4f2",O.fillRect(fe*re,z-30,re+1,22);O.fillStyle="#0d3a8c",O.fillRect(0,6,te,5),O.font="900 40px Anton, Impact, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText("MESTSK\xC1 POL\xCDCIA",te/2,38)}});return K[F]=L(new oe.Lambert({map:Z}))}function ae(F,Z){let O=F.wid,te=F.len,z=(b.cars[F.kind]||{}).h||1.5,V=ie(Z),re=new oe.Plane(te*.86,.36);for(let tt of[1,-1]){let xt=new oe.Mesh(re,V);xt.rotation.y=tt*I/2,xt.position.set(tt*(O/2+.014),z>1.6?.86:.74,-.05),F.obj.add(xt)}let fe=new oe.Group,Ee=new oe.Mesh(new oe.Box(O*.62,.05,.3),new oe.Lambert({color:1382170})),Ge=new oe.Box(O*.27,.12,.26),Ae=new oe.Mesh(Ge,new oe.Basic({color:16719904})),$e=new oe.Mesh(Ge,new oe.Basic({color:2113791}));Ae.position.set(O*.16,.085,0),$e.position.set(-O*.16,.085,0),fe.add(Ee,Ae,$e),fe.position.set(0,z+.02,-.15),F.obj.add(fe),F.bar={red:Ae,blue:$e,idle:Z==="mp"},F.livery=Z}function X(F){let Z=F.bar;if(Z.idle&&!F.driver){Z.red.material.color.setRGB(.25,.3,.9),Z.blue.material.color.setRGB(.25,.3,.9);return}let O=Math.sin(a.t*14)>0;Z.red.material.color.setRGB(O?6:.3,.1,.1),Z.blue.material.color.setRGB(.1,.2,O?.3:6)}let ee=null;function ue(F){if(!F||g()>.09)return;ee||(ee=new oe.Basic({map:P(128,48,(te,z,V)=>{te.fillStyle="#ffd21a",te.fillRect(0,0,z,V),te.fillStyle="#111",te.font="900 38px Anton, Impact, sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText("TAXI",z/2,V/2+3)})}));let Z=(b.cars[F.kind]||{}).h||1.5,O=new oe.Mesh(new oe.Box(.46,.16,.16),ee);O.position.set(0,Z+.07,.1),F.obj.add(O),F.taxi=!0}let de=6.3,Te=.5,We=5,it=de+Te,pe=We*de+(We-1)*Te,ne={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},N=[["1","HLAVN\xC1 STANICA"],["3","RA\u010CA"],["4","D\xDABRAVKA"],["4","ZLAT\xC9 PIESKY"],["9","KARLOVA VES"],["9","RU\u017DINOV"],["1","PETR\u017DALKA"]];function ve(){let F="#cf1420",Z="#17181b",O="#0b0d11",te="#8f9398",z=de/2,V=[[2.34,.44,de-.1,0,.34,0,Z],[2.48,.74,de,0,.93,0,F],[2.42,1.2,de,0,1.9,0,O],[2.48,.4,de,0,2.7,0,F],[2.24,.14,de,0,2.97,0,te],[1.5,.3,de*.5,0,3.18,.3,"#b4b8bc"]],re=[2.06,2.5,Te+.14,0,1.6,-z-Te/2,"#131315"],fe=Re=>[[2.2,.44,1,0,.34,Re*(z+.45),Z],[2.36,.74,1,0,.93,Re*(z+.48),F],[2.3,1.2,.86,0,1.9,Re*(z+.4),O],[2.36,.4,.74,0,2.7,Re*(z+.36),F],[2.1,.14,.6,0,2.97,Re*(z+.28),te],[.5,.06,.1,0,1.2,Re*(z+.99),"#f2f2f2"]],Ee=[[1.5,.3,de*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],Ge={front:J([...V,re,...fe(1)]),mid:J([...V,re]),midP:J([...V,re,...Ee]),rear:J([...V,...fe(-1)])},Ae=de-.3,$e=[],tt=[],xt=[];for(let Re of[1,-1]){let T=Re*1.246,B=-Re*Ae/2,W=Re*Ae/2,j=[[T,1.36,W,0,0],[T,1.36,B,1,0],[T,2.44,B,1,1],[T,1.36,W,0,0],[T,2.44,B,1,1],[T,2.44,W,0,1]];for(let q of j)$e.push(q[0],q[1],q[2]),tt.push(q[3],q[4]),xt.push(Re,0,0)}Ge.win=new oe.Geo,Ge.win.setAttribute("position",new oe.F32($e,3)),Ge.win.setAttribute("uv",new oe.F32(tt,2)),Ge.win.setAttribute("normal",new oe.F32(xt,3));let lt=Re=>(T,B,W)=>{T.fillStyle=Re?"#000":"#0c0f13",T.fillRect(0,0,B,W);let j=4,q=B/j;for(let Me=0;Me<j;Me++)if(T.fillStyle=Re?Me===1?"#fff0c8":"#ffe0a0":"#1b2630",T.fillRect(Me*q+5,6,q-10,W-12),Re){T.fillStyle="rgba(40,25,10,0.75)";for(let Ue=0;Ue<2;Ue++){let Be=Me*q+14+_(Me*9+Ue*5)*(q-30);T.beginPath(),T.arc(Be,W*.45,6,0,7),T.fill(),T.fillRect(Be-8,W*.45+5,16,W)}}},wt=H(new oe.Lambert({vertexColors:!0}),.07),Ye=new oe.Lambert({map:P(256,64,lt(!1)),emissiveMap:P(256,64,lt(!0)),emissive:new oe.Color(0,0,0)});ne.geo=Ge,ne.mBody=wt,ne.mWin=Ye,ne.mHead=new oe.Basic({color:16773836}),ne.mTail=new oe.Basic({color:16718352}),ne.gLamp=new oe.Box(.3,.14,.06),ne.gDisp=new oe.Plane(1.7,.3),ne.disp={}}function ce(F){let Z=F[0]+F[1];return ne.disp[Z]||(ne.disp[Z]=new oe.Basic({map:P(256,48,(O,te,z)=>{O.fillStyle="#050505",O.fillRect(0,0,te,z),O.fillStyle="#ffb020",O.font='700 30px "JetBrains Mono", monospace',O.textBaseline="middle",O.textAlign="left",O.fillText(F[0],8,z/2+2),O.font='700 22px "JetBrains Mono", monospace',O.fillText(F[1],44,z/2+2)})})),ne.disp[Z]}function ye(){let F=z=>z[0]*1e5+z[1],Z=new Map;for(let z of e.d.tram){if(z.p.length<2)continue;let V=z.p.map(Ee=>[Ee[0]/10,Ee[1]/10]),re=0;for(let Ee=1;Ee<V.length;Ee++)re+=Math.hypot(V[Ee][0]-V[Ee-1][0],V[Ee][1]-V[Ee-1][1]);let fe={p:V,L:re,k0:F(z.p[0]),k1:F(z.p[z.p.length-1]),next:[],dist:1e9,nin:0};ne.edges.push(fe),(Z.get(fe.k0)||Z.set(fe.k0,[]).get(fe.k0)).push(fe)}for(let z of ne.edges){z.next=Z.get(z.k1)||[];for(let V of z.next)V.nin++}for(let z of ne.edges)z.next.length||(z.dist=z.L);for(let z=0;z<120;z++)for(let V of ne.edges)for(let re of V.next)re.dist+V.L<V.dist&&(V.dist=re.dist+V.L);let O=e.W,te=e.H;ne.sources=ne.edges.filter(z=>{if(z.nin||z.dist>1e8)return!1;let[V,re]=z.p[0];return!0}),ne.max=h?6:10,ve(),He()}function le(F){let Z=[],O=F,te=0,z=new Set;for(;O&&te++<110;){for(let Ee=Z.length?1:0;Ee<O.p.length;Ee++)Z.push(O.p[Ee]);z.add(O);let re=O.next.filter(Ee=>Ee.dist<1e8);if(!re.length)break;let fe=re.filter(Ee=>!z.has(Ee));O=te>50||!fe.length?re.slice().sort((Ee,Ge)=>Ee.dist-Ge.dist)[0]:m(fe)}let V=[0];for(let re=1;re<Z.length;re++)V.push(V[re-1]+Math.hypot(Z[re][0]-Z[re-1][0],Z[re][1]-Z[re-1][1]));return{p:Z,cum:V,L:V[V.length-1]}}function ke(F,Z,O){let te=F.cum,z=0,V=te.length-2;for(Z=d(Z,0,F.L);z<V;){let Ae=z+V+1>>1;te[Ae]<=Z?z=Ae:V=Ae-1}let re=te[z+1]-te[z]||1,fe=(Z-te[z])/re,Ee=F.p[z],Ge=F.p[z+1];return O.x=Ee[0]+(Ge[0]-Ee[0])*fe,O.z=Ee[1]+(Ge[1]-Ee[1])*fe,O.dx=(Ge[0]-Ee[0])/re,O.dz=(Ge[1]-Ee[1])/re,O}function Pe(F){if(!ne.sources.length)return null;let Z=m(ne.sources);if(ne.list.some(V=>V.src===Z&&V.s<pe+30))return null;let O=le(Z);if(O.L<150)return null;let te=m(N),z={src:Z,r:O,s:F||.5,v:F?9:5,secs:[],wait:0,bell:0,obj:new oe.Group,hx:0,hz:0};for(let V=0;V<We;V++){let re=new oe.Group,fe=new oe.Mesh(V===0?ne.geo.front:V===We-1?ne.geo.rear:V===1?ne.geo.midP:ne.geo.mid,ne.mBody),Ee=new oe.Mesh(ne.geo.win,ne.mWin);if(fe.castShadow=!0,fe.receiveShadow=!0,re.add(fe,Ee),V===0){for(let Ae of[-.82,.82]){let $e=new oe.Mesh(ne.gLamp,ne.mHead);$e.position.set(Ae,.86,de/2+.985),re.add($e)}let Ge=new oe.Mesh(ne.gDisp,ce(te));Ge.position.set(0,2.7,de/2+.735),re.add(Ge)}if(V===We-1)for(let Ge of[-.82,.82]){let Ae=new oe.Mesh(ne.gLamp,ne.mTail);Ae.position.set(Ge,.86,-de/2-.985),re.add(Ae)}re.visible=!1,z.obj.add(re),z.secs.push({g:re,x:0,y:0,z:0,h:0,on:!1,len:de})}return t.add(z.obj),ne.list.push(z),z}let C={},A={},$={},me={};function _e(F){let Z=e.W,O=e.H;for(let te=0;te<We;te++){let z=F.s-te*it-de/2,V=F.secs[te];if(z<0||z>F.r.L){V.on=!1,V.g.visible=!1;continue}ke(F.r,z+2.3,C),ke(F.r,z-2.3,A);let re=(C.x+A.x)/2,fe=(C.z+A.z)/2;if(re<1||fe<1||re>Z-1||fe>O-1){V.on=!1,V.g.visible=!1;continue}let Ee=V.on?V.y+1.6:1e9,Ge=e.surfaceY(C.x,C.z,Ee),Ae=e.surfaceY(A.x,A.z,Ee);V.x=re,V.z=fe,V.y=(Ge+Ae)/2,V.h=Math.atan2(C.x-A.x,C.z-A.z),V.on=!0,V.g.visible=!0,V.g.position.set(re,V.y+.03,fe),V.g.rotation.set(0,0,0),V.g.rotateY(V.h),V.g.rotateX(Math.atan2(Ae-Ge,4.6))}}function xe(){l._tone(2100,1900,.22,.1,"triangle"),l._tone(2100,1900,.3,.1,"triangle",.2)}function qe(F,Z){ne.t-=F,ne.t<=0&&(ne.t=5+g()*7,ne.list.length<ne.max&&Pe());let O=!s.pc()&&!Z&&a.mode==="play";ne.proxies.length=0;for(let te=ne.list.length-1;te>=0;te--){let z=ne.list[te];ke(z.r,z.s,$);let V=$.x,re=$.z,fe=$.dx,Ee=$.dz;ke(z.r,z.s+16,me);let Ge=Math.abs(v(Math.atan2(me.dx,me.dz)-Math.atan2(fe,Ee)));ke(z.r,z.s-pe*.6,me),Ge=Math.max(Ge,Math.abs(v(Math.atan2(me.dx,me.dz)-Math.atan2(fe,Ee)))*.8);let Ae=p(11.5,4.2,d(Ge/.6,0,1)),$e=9+z.v*z.v/4.6,tt=99,xt=!0,lt=!1,wt=(Ye,Re,T,B,W)=>{let j=Ye-V,q=Re-re,Me=j*fe+q*Ee;Me<.5||Me>$e||Math.abs(j*Ee-q*fe)>1.3+T||Me<tt&&(tt=Me,xt=B,lt=W)};if(Math.abs(V-(s.pc()?s.pc().x:o.x))<160&&Math.abs(re-(s.pc()?s.pc().z:o.z))<160){for(let Ye of n)wt(Ye.x,Ye.z,Ye.r,!0,Ye===s.pc());for(let Ye of i)Ye.state!=="down"&&wt(Ye.x,Ye.z,.1,!0,!1);O&&wt(o.x,o.z,.3,!0,!0)}if(z.ghost>0)z.ghost-=F;else for(let Ye of ne.list)if(!(Ye===z||Math.abs(Ye.hx-V)>75||Math.abs(Ye.hz-re)>75))for(let Re=3;Re<$e+2&&!(Re>tt);Re+=2.5){ke(z.r,z.s+Re,me);let T=!1;for(let B of Ye.secs){if(!B.on||Math.abs(B.x-me.x)>5||Math.abs(B.z-me.z)>5)continue;let W=Math.sin(B.h)*2.3,j=Math.cos(B.h)*2.3;for(let q=-1;q<=1;q++)if(Math.hypot(B.x+W*q-me.x,B.z+j*q-me.z)<1.5){T=!0;break}if(T)break}if(T){tt=Re,xt=!1,lt=!1;break}}if(tt<99?(Ae=Math.min(Ae,Math.sqrt(Math.max(0,2*2.5*(tt-4.5)))),z.v<.6&&(z.wait+=F),xt&&z.wait>5&&(Ae=Math.max(Ae,1.8)),!xt&&z.wait>14+z.s%7&&(z.ghost=9,z.wait=0),lt&&z.bell<=0&&tt<22&&(xe(),z.bell=2.6)):z.wait=Math.max(0,z.wait-F*2),z.bell>0&&(z.bell-=F),z.v=Math.max(0,z.v+d(Ae-z.v,-3.4*F,1.15*F)),z.s+=z.v*F,z.s-pe-6>z.r.L){t.remove(z.obj),ne.list.splice(te,1);continue}z.hx=V,z.hz=re,z.dx=fe,z.dz=Ee,_e(z);for(let Ye of z.secs)Ye.on&&ne.proxies.push(Ye)}Z||Ne(O)}function Ne(F){let Z=[-2.3,0,2.3];for(let O of ne.list){for(let z of n){if(Math.abs(z.x-O.hx)>46||Math.abs(z.z-O.hz)>46)continue;let V=Math.sin(z.h),re=Math.cos(z.h);for(let fe of O.secs){if(!fe.on||Math.abs(z.y-fe.y)>3||Math.abs(z.x-fe.x)>9||Math.abs(z.z-fe.z)>9)continue;let Ee=Math.sin(fe.h),Ge=Math.cos(fe.h);for(let Ae of Z)for(let $e of[z.off,-z.off]){let tt=z.x+V*$e-(fe.x+Ee*Ae),xt=z.z+re*$e-(fe.z+Ge*Ae),lt=Math.hypot(tt,xt),wt=1.3+z.r;if(lt>=wt||lt<1e-4)continue;tt/=lt,xt/=lt,z.x+=tt*(wt-lt),z.z+=xt*(wt-lt);let Ye=(z.vx-Ee*O.v)*tt+(z.vz-Ge*O.v)*xt;Ye<0&&(z.vx-=1.35*Ye*tt,z.vz-=1.35*Ye*xt,z.w+=($e>0?1:-1)*Ye*.04*(tt*re-xt*V>0?1:-1),-Ye>3.5&&(z.dmg+=-Ye*3,z===s.pc()&&(l.crash(-Ye),y(-Ye*.03),O.hitPl||(O.hitPl=1,x(1,"zr\xE1\u017Eka s elektri\u010Dkou"))))),z.parked&&(z.parked=!1),z.hitT=3}}}let te=F?[o,...i]:i;for(let z of te){let V=z===o,re=V?o.x:z.x,fe=V?o.z:z.z;if(!(Math.abs(re-O.hx)>46||Math.abs(fe-O.hz)>46))for(let Ee of O.secs){if(!Ee.on||Math.abs(re-Ee.x)>6||Math.abs(fe-Ee.z)>6)continue;let Ge=Math.sin(Ee.h),Ae=Math.cos(Ee.h),$e=re-Ee.x,tt=fe-Ee.z,xt=d($e*Ge+tt*Ae,-de/2-.6,de/2+.6),lt=Ee.x+Ge*xt,wt=Ee.z+Ae*xt,Ye=re-lt,Re=fe-wt,T=Math.hypot(Ye,Re),B=1.55;T>=B||(T<.001&&(Ye=Ae,Re=-Ge,T=1),Ye/=T,Re/=T,V?(o.x=lt+Ye*B,o.z=wt+Re*B,O.v>2.5&&S.hurtT<=0&&(a.hp-=O.v*4.5,S.hurtT=1,l.crash(O.v*.6),c.flash("#ff2a2a",.4))):z.state!=="down"&&(O.v>2.2?(z.knock(Ge*O.v*.6+Ye*2,Ae*O.v*.6+Re*2,O.v>7),l.thud()):(z.p.x=lt+Ye*B,z.p.z=wt+Re*B)))}}}}function He(){let F=ne.edges.filter(lt=>Math.hypot(lt.p[0][0]-(554+R),lt.p[0][1]-(713+M))<25&&!lt.nin);if(!F.length)return;let Z=F[0],O=Z.p[0],te=Z.p[1],z=Math.hypot(te[0]-O[0],te[1]-O[1])||1,V=(te[0]-O[0])/z,re=(te[1]-O[1])/z,fe=O[0]-re*1.8-V*1.5,Ee=O[1]+V*1.8-re*1.5,Ge=e.hAt(O[0]+V*6,O[1]+re*6),Ae=new oe.Group,$e=L(new oe.Lambert({vertexColors:!0})),tt=new oe.Mesh(J([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),$e),xt=new oe.Mesh(new oe.Plane(9.9,6.8),new oe.Basic({color:197379}));xt.position.set(0,3.4,-.95),tt.castShadow=tt.receiveShadow=!0,Ae.add(tt,xt),Ae.position.set(fe,Ge-.4,Ee),Ae.rotation.y=Math.atan2(V,re),e.group.add(Ae)}let he={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function ht(){let F=e.d.zone;if(!F)return;let Z=atob(F.b),O=new Uint8Array(Z.length);for(let te=0;te<Z.length;te++)O[te]=Z.charCodeAt(te);he.bits=O,he.N=F.n,he.x0=F.x,he.z0=F.z,he.s=F.s}function ge(F,Z){let O=he.N;if(!O)return!1;let te=Math.floor((F-he.x0)/he.s),z=Math.floor((Z-he.z0)/he.s);if(te<0||z<0||te>=O||z>=O)return!1;let V=z*O+te;return!!(he.bits[V>>3]>>7-(V&7)&1)}function Tt(){ht();let F=T=>T[0]*1e5+T[1],Z=new Set;for(let T of e.d.road)if(T.c>=1&&T.c<=4&&!T.nv)for(let B of T.p)Z.add(F(B));let O=[];for(let T of e.d.road)if(!(T.c!==5||T.p.length<2))for(let B of[0,1]){let W=T.p[B?T.p.length-1:0],j=T.p[B?T.p.length-2:1];if(!Z.has(F(W)))continue;let q=W[0]/10,Me=W[1]/10,Ue=j[0]/10-q,Be=j[1]/10-Me,Ze=Math.hypot(Ue,Be);if(Ze<3)continue;Ue/=Ze,Be/=Ze;let Qe=3;for(;Qe<Math.min(Ze,16)&&!ge(q+Ue*Qe,Me+Be*Qe);)Qe+=1.5;if(!ge(q+Ue*Qe,Me+Be*Qe))continue;let Se=q+Ue*(Qe+1.2),Fe=Me+Be*(Qe+1.2);O.some(Ke=>Math.hypot(Ke.x-Se,Ke.z-Fe)<9)||et(Se,Fe,4.5)||O.push({x:Se,z:Fe,dx:Ue,dz:Be,down:0,tgt:0})}if(he.entries=O,!O.length)return;let te=P(160,208,(T,B,W)=>{T.fillStyle="#f4f4f2",T.fillRect(0,0,B,W),T.strokeStyle="#111",T.lineWidth=4,T.strokeRect(3,3,B-6,W-6),T.fillStyle="#111",T.font="900 22px Anton, Impact, sans-serif",T.textAlign="center",T.fillText("PE\u0160IA Z\xD3NA",B/2,30),T.fillStyle="#1456b8",T.beginPath(),T.arc(B/2,92,50,0,7),T.fill(),T.fillStyle="#fff",T.beginPath(),T.arc(B/2+4,62,9,0,7),T.fill(),T.strokeStyle="#fff",T.lineWidth=9,T.lineCap="round",T.beginPath(),T.moveTo(B/2+2,76),T.lineTo(B/2-2,104),T.lineTo(B/2-16,130),T.moveTo(B/2-2,104),T.lineTo(B/2+14,128),T.moveTo(B/2+2,82),T.lineTo(B/2+20,96),T.moveTo(B/2+2,82),T.lineTo(B/2-18,92),T.stroke(),T.fillStyle="#111",T.font="700 15px sans-serif",T.fillText("Z\xC1SOBOVANIE",B/2,166),T.font="900 22px sans-serif",T.fillText("6 \u2013 9 h",B/2,192)}),z=L(new oe.Lambert({color:9080208})),V=L(new oe.Lambert({map:te})),re=O.length,fe=new oe.InstancedMesh(new oe.Box(.7,.91,.04),[z,z,z,z,V,z],re),Ee=new oe.InstancedMesh(new oe.Cyl(.035,.035,2.9,6),z,re),Ge=new oe.Mat4,Ae=new oe.Quat,$e=new oe.Vec3,tt=new oe.Vec3(1,1,1),xt=new oe.Vec3(0,1,0);O.forEach((T,B)=>{let W=T.x-T.dz*3.4-T.dx*.6,j=T.z+T.dx*3.4-T.dz*.6;e.collide(W,j,e.hAt(W,j),.5,k)&&(W=k.x,j=k.z);let q=e.hAt(W,j);Ae.setFromAxisAngle(xt,Math.atan2(-T.dx,-T.dz)),Ge.compose($e.set(W,q+2.5,j),Ae,tt),fe.setMatrixAt(B,Ge),Ge.compose($e.set(W+T.dx*.045,q+1.45,j+T.dz*.045),Ae,tt),Ee.setMatrixAt(B,Ge),e.colliders.add({ax:W-.06,az:j,bx:W+.06,bz:j,y0:q-2,y1:q+3,kind:"p"},W-.2,j-.2,W+.2,j+.2),T.y=e.hAt(T.x,T.z)}),fe.castShadow=Ee.castShadow=!0,e.group.add(fe,Ee);let lt=new oe.Cyl(.11,.11,.9,10),wt=L(new oe.Lambert({color:13225168})),Ye=new oe.InstancedMesh(lt,wt,re*3),Re=new oe.InstancedMesh(new oe.Cyl(.115,.115,.07,10),new oe.Basic({color:16726815}),re*3);Ye.castShadow=!0,he.boll=Ye,he.cap=Re,he.M=Ge,he.P=$e,he.Q=new oe.Quat,he.S=tt,O.forEach((T,B)=>gt(B,0)),e.group.add(Ye,Re)}function gt(F,Z){let O=he.entries[F];for(let te=0;te<3;te++){let z=(te-1)*1.7,V=O.x-O.dz*z,re=O.z+O.dx*z,fe=e.hAt(V,re)-Z*.86;he.M.compose(he.P.set(V,fe+.45,re),he.Q,he.S),he.boll.setMatrixAt(F*3+te,he.M),he.M.compose(he.P.set(V,fe+.86,re),he.Q,he.S),he.cap.setMatrixAt(F*3+te,he.M)}he.boll.instanceMatrix.needsUpdate=!0,he.cap.instanceMatrix.needsUpdate=!0}function ct(F){let Z=s.pc(),O=Z?Z.x:o.x,te=Z?Z.z:o.z;he.acc=d(he.acc+(ge(O,te)?F:-F)*2.5,0,1),he.acc>=1?he.on=!0:he.acc<=0&&(he.on=!1),w.zoneNow=he.on;let z=a.tod>=6&&a.tod<9,V=he.el||(he.el=document.getElementById("zone"));if(V){let re=s.sandbox?he.on?"PE\u0160IA Z\xD3NA":"":he.on?Z?z?"PE\u0160IA Z\xD3NA \xB7 z\xE1sobovanie do 9:00 \xB7 max 20 km/h":"PE\u0160IA Z\xD3NA \xB7 aut\xE1m vjazd zak\xE1zan\xFD":"PE\u0160IA Z\xD3NA":"";he._txt!==re&&(he._txt=re,V.textContent=re,V.hidden=!re,V.classList.toggle("bad",!!Z&&he.on&&!z))}if(he.cool>0&&(he.cool-=F),Z&&he.on&&a.mode==="play"){if(he.told||(he.told=!0,c.toast("Pe\u0161ia z\xF3na: aut\xE1 len 6:00\u20139:00 (z\xE1sobovanie), max 20 km/h")),!z&&(he.fineT+=F,he.fineT>6)){if(he.fineT=-22,!s.sandbox){let re=Math.min(50,Math.floor(a.money));a.money-=re,c.toast("Mestsk\xE1 pol\xEDcia: jazda v pe\u0161ej z\xF3ne \xB7 pokuta "+(re?"\u2212"+re+" \u20AC":"50 \u20AC (nem\xE1\u0161 z \u010Doho)"))}l._tone(660,330,.3,.14,"square")}Z.speed*3.6>26?(he.fastT+=F,he.fastT>1.2&&he.cool<=0&&(he.cool=16,he.fastT=0,x(1,"r\xFDchla jazda v pe\u0161ej z\xF3ne"))):he.fastT=0}else he.fineT>0?he.fineT=0:he.fineT<0&&(he.fineT=Math.min(0,he.fineT+F));if(he.boll)for(let re=0;re<he.entries.length;re++){let fe=he.entries[re];fe.tgt=Z&&Math.abs(Z.x-fe.x)<11&&Math.abs(Z.z-fe.z)<11?1:0,fe.down!==fe.tgt&&(fe.down=d(fe.down+(fe.tgt>fe.down?1:-1)*F*2.2,0,1),gt(re,fe.down))}}function et(F,Z,O){for(let te of ne.edges){let z=te.p;for(let V=0;V<z.length-1;V++){let re=z[V][0],fe=z[V][1],Ee=z[V+1][0],Ge=z[V+1][1];if(Math.min(re,Ee)-O>F||Math.max(re,Ee)+O<F||Math.min(fe,Ge)-O>Z||Math.max(fe,Ge)+O<Z)continue;let Ae=Ee-re,$e=Ge-fe,tt=d(((F-re)*Ae+(Z-fe)*$e)/(Ae*Ae+$e*$e||1),0,1);if(Math.hypot(re+Ae*tt-F,fe+$e*tt-Z)<O)return!0}}return!1}function Ve(){let F=[],Z=new s.SGrid(12),O=[],te=h?120:200;for(let Re of e.d.road){if(Re.c!==5||F.length>=te||!ge(Re.p[0][0]/10,Re.p[0][1]/10)&&!ge(Re.p[Re.p.length-1][0]/10,Re.p[Re.p.length-1][1]/10))continue;let T=Re.p.map(W=>[W[0]/10,W[1]/10]),B=Math.floor(T[0][0]*7+T[0][1]*13);for(let W=0;W<T.length-1;W++){let j=T[W][0],q=T[W][1],Me=T[W+1][0]-j,Ue=T[W+1][1]-q,Be=Math.hypot(Me,Ue);if(!(Be<5)){Me/=Be,Ue/=Be;for(let Ze=4+_(B+W)*4;Ze<Be-3;Ze+=7.5){let Qe=_(B*3+W*31+Math.floor(Ze));if(Qe>.5)continue;let Se=Qe<.25?1:-1,Fe=2.1,Ke=j+Me*Ze-Ue*Fe*Se,ut=q+Ue*Ze+Me*Fe*Se;if(Ke<5||ut<5||Ke>e.W-5||ut>e.H-5||!ge(Ke,ut))continue;let Et=e.hAt(Ke,ut);if(e.surfaceY(Ke,ut)>Et+.3||Math.abs(e.hAt(Ke+1.5,ut)-Et)>.25||Math.abs(e.hAt(Ke,ut+1.5)-Et)>.25||e.collide(Ke,ut,Et,1.7,k)||he.entries.some(Dt=>Math.hypot(Dt.x-Ke,Dt.z-ut)<9)||et(Ke,ut,3.6)||Z.query(Ke,ut,4.2,O).some(Dt=>Math.hypot(Dt.x-Ke,Dt.z-ut)<4.2))continue;let Bn={x:Ke,y:Et,z:ut,a:Math.atan2(Me,Ue),k:F.length};Z.add(Bn,Ke,ut,Ke,ut),F.push(Bn)}}}}if(!F.length)return;let z=F.length,V=new oe.Cyl(.06,1.5,.55,8),re=L(new oe.Lambert({color:16777215,flatShading:!0}),.9),fe=J([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),Ee=new oe.InstancedMesh(V,re,z),Ge=new oe.InstancedMesh(fe,L(new oe.Lambert({vertexColors:!0})),z),Ae=new oe.Mat4,$e=new oe.Quat,tt=new oe.Vec3,xt=new oe.Vec3(1,1,1),lt=new oe.Vec3(0,1,0),wt=new oe.Color,Ye=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];F.forEach((Re,T)=>{$e.setFromAxisAngle(lt,Re.a+(_(T*3)-.5)*.5),Ae.compose(tt.set(Re.x,Re.y,Re.z),$e,xt),Ge.setMatrixAt(T,Ae),Ae.compose(tt.set(Re.x,Re.y+2.5,Re.z),$e,xt),Ee.setMatrixAt(T,Ae),Ee.setColorAt(T,wt.set(Ye[Math.floor(_(Math.floor(Re.x/26)*31+Math.floor(Re.z/26)*17)*Ye.length)])),e.colliders.add({ax:Re.x-.3,az:Re.z,bx:Re.x+.3,bz:Re.z,y0:Re.y-1,y1:Re.y+2.4,kind:"p"},Re.x-.5,Re.z-.5,Re.x+.5,Re.z+.5)}),Ee.castShadow=Ge.castShadow=!0,Ee.receiveShadow=!0,e.group.add(Ee,Ge),w.terraceN=z}function dt(){let F=(e.fountains||[]).filter(te=>te.area>14);if(!F.length)return;let Z=L(new oe.Lambert({color:10130566,flatShading:!0})),O=new oe.Shader({uniforms:{uTime:u.uTime,uNight:u.uNight},transparent:!0,depthWrite:!1,side:oe.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let te of F){if(te.noTop){let tt=new oe.Mesh(new oe.Cyl(.5,3.4,4.6,18,1,!0),O);tt.position.set(te.x,te.y+2.3,te.z),e.group.add(tt);continue}let z=te.area>60,V=z?1.5:1,re=new oe.Group,fe=new oe.Mesh(new oe.Cyl(.22*V,.36*V,1.9*V,8),Z),Ee=new oe.Mesh(new oe.Cyl(.95*V,.28*V,.32*V,10),Z),Ge=new oe.Mesh(new oe.Cyl(.1*V,.2*V,.9*V,6),Z),Ae=new oe.Mesh(new oe.Sphere(.2*V,8,6),Z),$e=new oe.Mesh(new oe.Cyl(.9*V,1.05*V,1.95*V,14,1,!0),O);fe.position.y=.95*V,Ee.position.y=2.05*V,Ge.position.y=2.6*V,Ae.position.y=3.15*V,$e.position.y=1.02*V,fe.castShadow=Ee.castShadow=!0,re.add(fe,Ee,Ge,Ae,$e),re.position.set(te.x,te.y-.1,te.z),e.group.add(re)}}function Ct(){let F=1031.2+R,Z=766+M,O=e.hAt(F,Z),te=Math.atan2(-10.8,-16.2),z=new oe.Group,V="#e3c56d",re="#d9d2bf",fe=new oe.Mesh(J([[6.8,31,6.8,0,15.5,0,V],[7.3,.5,7.3,0,9.2,0,re],[7.3,.5,7.3,0,20.4,0,re],[8,.7,8,0,31.2,0,re],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),L(new oe.Lambert({vertexColors:!0}))),Ee=L(new oe.Lambert({color:14927213,flatShading:!0})),Ge=L(new oe.Lambert({color:5084288,flatShading:!0})),Ae=new oe.Lambert({color:14266938,emissive:3812360}),$e=(Se,Fe,Ke)=>{let ut=new oe.Mesh(Se,Fe);return ut.position.y=Ke,ut.castShadow=!0,z.add(ut),ut};fe.castShadow=fe.receiveShadow=!0,z.add(fe),$e(new oe.Cyl(2.9,3.1,5.2,8),Ee,34.1),$e(new oe.Cyl(1.5,3.5,3.6,8),Ge,38.5),$e(new oe.Cyl(1.25,1.25,2.2,8),Ee,41.4),$e(new oe.Cyl(.9,1.7,1.6,8),Ge,43.3),$e(new oe.Cyl(.05,.8,5.2,8),Ge,46.7),$e(new oe.Sphere(.35,8,6),Ae,49.4);let tt=P(128,128,(Se,Fe,Ke)=>{Se.fillStyle="#f3efe2",Se.beginPath(),Se.arc(64,64,60,0,7),Se.fill(),Se.strokeStyle="#222",Se.lineWidth=5,Se.stroke();for(let ut=0;ut<12;ut++){let Et=ut/12*I*2;Se.beginPath(),Se.moveTo(64+Math.sin(Et)*46,64-Math.cos(Et)*46),Se.lineTo(64+Math.sin(Et)*54,64-Math.cos(Et)*54),Se.stroke()}Se.lineWidth=6,Se.lineCap="round",Se.beginPath(),Se.moveTo(64,64),Se.lineTo(88,50),Se.moveTo(64,64),Se.lineTo(56,22),Se.stroke()}),xt=new oe.Basic({map:tt,transparent:!0});for(let Se=0;Se<4;Se++){let Fe=new oe.Mesh(new oe.Plane(3.4,3.4),xt),Ke=Se*I/2;Fe.position.set(Math.sin(Ke)*3.43,25.6,Math.cos(Ke)*3.43),Fe.rotation.y=Ke,z.add(Fe)}z.position.set(F,O-.5,Z),z.rotation.y=te,e.group.add(z);let lt=Math.cos(te)*3.4,wt=Math.sin(te)*3.4,Ye=[[F+lt+wt,Z-wt+lt],[F+lt-wt,Z-wt-lt],[F-lt-wt,Z+wt-lt],[F-lt+wt,Z+wt+lt]];for(let Se=0;Se<4;Se++){let Fe=Ye[Se],Ke=Ye[(Se+1)%4];e.colliders.add({ax:Fe[0],az:Fe[1],bx:Ke[0],bz:Ke[1],y0:O-50,y1:O+31,kind:"b"},Fe[0],Fe[1],Ke[0],Ke[1])}let Re=0,T=0,B=!1;for(let[Se,Fe]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]].map(Ke=>[Ke[0]+R,Ke[1]+M]))if(ge(Se,Fe)&&!e.collide(Se,Fe,e.hAt(Se,Fe),5.6,k)){Re=Se,T=Fe,B=!0;break}if(!B)return;let W=Math.min(e.hAt(Re,T),e.hAt(Re+4,T),e.hAt(Re-4,T),e.hAt(Re,T+4),e.hAt(Re,T-4)),j=L(new oe.Lambert({color:10130566,flatShading:!0})),q=new oe.Group,Me=new oe.Mesh(new oe.Cyl(4.7,4.9,.85,16),j),Ue=new oe.Mesh(new oe.Cyl(4.35,4.35,.03,16),e.waterMat||new oe.Lambert({color:2903898})),Be=new oe.Mesh(new oe.Cyl(.5,.75,5.2,8),j),Ze=new oe.Mesh(new oe.Cyl(.9,.5,.5,8),j),Qe=new oe.Mesh(J([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),L(new oe.Lambert({vertexColors:!0})));Me.position.y=.42,Ue.position.y=.86,Be.position.y=3,Ze.position.y=5.8,Qe.position.y=6.05,Me.castShadow=Be.castShadow=Qe.castShadow=!0,Me.receiveShadow=!0,q.add(Me,Ue,Be,Ze,Qe),q.position.set(Re,W-.05,T),e.group.add(q);for(let Se=0;Se<10;Se++){let Fe=Se/10*I*2,Ke=(Se+1)/10*I*2,ut=[Re+Math.sin(Fe)*4.8,T+Math.cos(Fe)*4.8],Et=[Re+Math.sin(Ke)*4.8,T+Math.cos(Ke)*4.8];e.colliders.add({ax:ut[0],az:ut[1],bx:Et[0],bz:Et[1],y0:W-2,y1:W+1.3,kind:"w"},ut[0],ut[1],Et[0],Et[1])}(e.fountains||(e.fountains=[])).push({x:Re,z:T,y:W+.75,area:30,noTop:!0,spray:1})}function Wt(){let F=1038.6+R,Z=849.4+M;for(let Ae=0;Ae<8&&e.collide(F,Z,e.hAt(F,Z),1.2,k);Ae++)F=k.x,Z=k.z;let O=e.hAt(F,Z),te=L(new oe.Lambert({color:5192994}),1.2),z=L(new oe.Lambert({color:1710620})),V=new oe.Group,re=(Ae,$e,tt,xt,lt,wt=0,Ye=0)=>{let Re=new oe.Mesh(Ae,$e);return Re.position.set(tt,xt,lt),Re.rotation.set(wt,0,Ye),Re.castShadow=!0,V.add(Re),Re};re(new oe.Cyl(.52,.52,.05,16),z,0,.025,0),re(new oe.Torus(.5,.05,6,18),te,0,.05,0,I/2),re(new oe.Cyl(.5,.5,.04,16),te,-.35,.3,-.42,.9,.2),re(new oe.Box(.5,.2,.26),te,0,.13,-.1),re(new oe.Box(.56,.12,.2),te,0,.11,.22),re(new oe.Sphere(.15,10,8),te,0,.3,.12),re(new oe.Cyl(.19,.2,.07,12),te,0,.4,.1),re(new oe.Sphere(.16,10,6,0,I*2,0,I/2),te,0,.41,.1);let fe=P(128,128,(Ae,$e,tt)=>{Ae.fillStyle="#1456b8",Ae.beginPath(),Ae.arc($e/2,tt/2,62,0,7),Ae.fill(),Ae.fillStyle="#ffd21a",Ae.beginPath(),Ae.arc($e/2,tt/2,54,0,7),Ae.fill(),Ae.fillStyle="#111",Ae.font="900 30px Anton, Impact, sans-serif",Ae.textAlign="center",Ae.fillText("MAN",$e/2,50),Ae.fillText("AT WORK",$e/2,88)});re(new oe.Cyl(.03,.03,2.2,6),z,1.1,1.1,-.3);let Ee=re(new oe.Cyl(.3,.3,.03,18),[z,new oe.Basic({map:fe}),z],1.1,2.3,-.3,I/2);Ee.rotation.z=0,V.position.set(F,O,Z),V.rotation.y=-.6,e.group.add(V),e.colliders.add({ax:F-.3,az:Z,bx:F+.3,bz:Z,y0:O-1,y1:O+.5,kind:"p"},F-.5,Z-.5,F+.5,Z+.5);let Ge={ax:F-.5,az:Z,bx:F+.5,bz:Z,hw:2.5,n:"\u010Cumil"};e.names.add(Ge,F-3,Z-3,F+3,Z+3),st[0][1]=F,st[0][2]=Z}let st=[["\u010Cumil",1038.6,849.4,14],["Michalsk\xE1 br\xE1na",875.5,598.2,24],["Hlavn\xE9 n\xE1mestie a Star\xE1 radnica",1016,778,30],["Primaci\xE1lny pal\xE1c",1094,722,34],["D\xF3m sv\xE4t\xE9ho Martina",750.5,948,38],["Bratislavsk\xFD hrad",388,946,75],["Slovensk\xE9 n\xE1rodn\xE9 divadlo",1105,920,36],["Reduta",1118,1062,42],["Modr\xFD kostol\xEDk",1438.5,433.8,36],["Prezidentsk\xFD pal\xE1c",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Star\xE1 tr\u017Enica",1217.7,668.9,40],["Slovensk\xE1 n\xE1rodn\xE1 gal\xE9ria",1015,1175,40],["Slovensk\xE9 n\xE1rodn\xE9 m\xFAzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestsk\xE9 k\xFApele Gr\xF6ssling",1306,1076,40]];for(let F of st)F[1]+=R,F[2]+=M;for(let F of s.moreLandmarks||[])st.push(F);let we=new Set;function G(){try{for(let F of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))we.add(F)}catch{}window.__gtbLM=(F,Z)=>{for(let O of st)F(O[1],O[2],we.has(O[0])?"#7dff6a":"#ffffff",Z/150)}}let Le=0;function De(F){if(Le-=F,Le>0||a.mode!=="play")return;Le=.4;let Z=s.pc()?s.pc().x:o.x,O=s.pc()?s.pc().z:o.z;for(let te of st){if(we.has(te[0])||Math.hypot(te[1]-Z,te[2]-O)>te[3])continue;we.add(te[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...we]))}catch{}let z=we.size===st.length,V=z?1500:60;a.money+=V,c.big(z?"CEL\xC1 BRATISLAVA":"OBJAVEN\xC9",s.sandbox?`${te[0]} \xB7 ${we.size}/${st.length}`:`${te[0]} \xB7 ${we.size}/${st.length} \xB7 +${V} \u20AC`,"#ffcc33",3),l.win();break}}function rt(){let F=[[1089+R,725.6+M,2]];for(let[Z,O,te]of F){if(e.collide(Z,O,e.hAt(Z,O),2.2,k)&&(Z=k.x,O=k.z),e.collide(Z,O,e.hAt(Z,O),1.2,k))continue;let z=E("fabka",Z,O,te,"#f3f4f5");z.parked=z.keep=!0,z.mp=!0,ae(z,"mp")}}return{zoneNow:!1,plateMat:Y,gloss:H,livery:ae,flash:X,maybeTaxi:ue,inZone:ge,trams:ne,zone:he,landmarks:st,patchData(F){for(let Z of F.bld)Z.n==="Kostol sv. Al\u017Ebety"&&(Z.c="#9cc4e8",Z.rc="#5f86b4")},init(){let F=(Z,O)=>{try{O()}catch(te){console.error("X3 "+Z,te)}};F("trams",ye),F("zone",Tt),F("cumil",Wt),F("radnica",Ct),F("terraces",Ve),F("fountains",dt),s.sandbox||F("patrol",rt),F("landmarks",G),F("prewarm",()=>{for(let Z=0;Z<40&&ne.list.length<Math.min(5,ne.max);Z++){let O=Pe(1);O&&(O.s=60+g()*Math.max(10,O.r.L-200),_e(O))}}),U=!0},obst(){return U&&ne.proxies.length?w._ob=n.concat(ne.proxies):n},update(F,Z){U&&(qe(F,Z),ne.mWin.emissive.setScalar(.004+u.uNight.value*1.25),ne.mHead.color.setScalar(1+u.uNight.value*3),!Z&&(ct(F),De(F),s.pc()&&s.pc().mp&&!s.pc().mpStolen&&(s.pc().mpStolen=1,x(2,"kr\xE1de\u017E auta mestskej pol\xEDcie"))))},goalText(){return" \xB7 Pamiatky "+we.size+"/"+st.length}}})();return w}var rh=[];function Xy(s,e){let t=document.createElement("canvas"),n=128,i=Math.max(128,Math.round(n*e.w/e.h));t.width=i,t.height=n;let r=t.getContext("2d");e.bg&&(r.fillStyle=e.bg,r.fillRect(0,0,i,n)),r.fillStyle=e.fg||"#fff",r.textAlign="center",r.textBaseline="middle";let o=92;r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`;let a=r.measureText(s).width;a>i*.9&&(o=Math.floor(o*i*.9/a),r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`),r.fillText(s,i/2,n/2+4);let c=new ei(t);return c.colorSpace=Lt,c.anisotropy=4,c}function ui(s,e,t,n){let[i,r]=n.a,[o,a]=n.b,c=n.t??.5,l=i+(o-i)*c,h=r+(a-r)*c,u=Math.hypot(o-i,a-r)||1,f=(a-r)/u,d=-(o-i)/u;(l+f-n.away[0])**2+(h+d-n.away[1])**2<(l-f-n.away[0])**2+(h-d-n.away[1])**2&&(f=-f,d=-d);let p=Xy(t,n),v=new ft({map:p,emissiveMap:p,emissive:16777215,transparent:!n.bg,alphaTest:n.bg?0:.35,side:Ht});v.userData.glow=n.glow??1,rh.push(v);let g=new Xe(new Qn(n.w,n.h),v);return g.position.set(l+f*(n.off??.18),s.hAt(l,h)+n.y,h+d*(n.off??.18)),g.rotation.y=Math.atan2(f,d),e.add(g),{x:l,z:h,nx:f,nz:d}}function Ld(s,e){let t=new Ot,n=[],i=[],r=(l,h,u)=>[l[0]+(h[0]-l[0])*u,l[1]+(h[1]-l[1])*u],o=(l,h,u,f,d,p,v,g=0,m=null)=>{let _=new Xe(new Xt(l,h,u),m||new ft({color:f}));return _.position.set(d,p,v),_.rotation.y=g,_.castShadow=_.receiveShadow=!0,t.add(_),_};{let l=[[2529,1187],[2584,1108]],h=[[2504,1170],[2559,1091]],u=[2540,1146],f=[[2531,1205],[2574,1143]],d=[2571,1183],p=[[2574,1065],[2602,1084]],v=[2592,1069];ui(s,t,"PRIOR",{a:[2501,1171],b:[2557,1090],t:.42,away:u,y:9.2,w:12,h:2.8,fg:"#e8402a",glow:1.2,off:.3}),ui(s,t,"PRIOR",{a:f[0],b:f[1],t:.12,away:d,y:16.6,w:10,h:2.4,fg:"#e8402a",glow:1.2}),ui(s,t,"HOTEL KYJEV",{a:p[0],b:p[1],t:.5,away:v,y:67.2,w:26,h:3.6,fg:"#f4f1e6",off:-1.2,glow:1.4}),ui(s,t,"ost block",{a:h[0],b:h[1],t:.34,away:u,y:3.25,w:5.6,h:1,fg:"#f2efe6",bg:"#161616",weight:500,glow:1.1}),ui(s,t,"K\xC1CE\u010CKO",{a:h[0],b:h[1],t:.76,away:u,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),ui(s,t,"K\xC1CE\u010CKO",{a:l[0],b:l[1],t:.76,away:u,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),ui(s,t,"K\xC1CE\u010CKO \u2191",{a:h[0],b:h[1],t:.62,away:u,y:3.25,w:4.6,h:.9,fg:"#ffd23a",bg:"#1b1b1b",glow:1.1});let g=r(h[0],h[1],.34),m=[h[1][0]-h[0][0],h[1][1]-h[0][1]],_=Math.hypot(m[0],m[1]);m[0]/=_,m[1]/=_;let x=[m[1],-m[0]];(g[0]+x[0]-u[0])**2+(g[1]+x[1]-u[1])**2<(g[0]-x[0]-u[0])**2+(g[1]-x[1]-u[1])**2&&(x=[-x[0],-x[1]]);let y=Math.atan2(m[0],m[1]),S=new ft({color:3107636,flatShading:!0}),b=new ft({color:2367775}),E=new ft({color:9071176});for(let pe=-3;pe<=3;pe++){let ne=g[0]+m[0]*pe*1.7+x[0]*1.1,N=g[1]+m[1]*pe*1.7+x[1]*1.1,ve=s.hAt(ne,N);o(.7,.6,.7,0,ne,ve+.3,N,y,b);let ce=new Xe(new ki(.55+(pe&1)*.15,0),S);if(ce.position.set(ne,ve+1.05+(pe&1)*.2,N),ce.castShadow=!0,t.add(ce),pe%2===0){let ye=ne+x[0]*1.6,le=N+x[1]*1.6,ke=s.hAt(ye,le),Pe=new Xe(new fn(.42,.42,.05,10),E);Pe.position.set(ye,ke+.74,le),t.add(Pe);let C=new Xe(new fn(.04,.04,.74,5),b);C.position.set(ye,ke+.37,le),t.add(C)}}let R=r(r(l[0],l[1],.56),r(h[0],h[1],.56),.5),M=r(r(l[0],l[1],.95),r(h[0],h[1],.95),.5),w=10.5,I=s.hAt(u[0],u[1])+12.05,U=1e9;for(let pe of[...l,...h])U=Math.min(U,s.hAt(pe[0],pe[1]));let k=U+12.12;s.decks.add({ax:R[0],az:R[1],bx:M[0],bz:M[1],ya:k,yb:k,hw:w},Math.min(R[0],M[0])-w,Math.min(R[1],M[1])-w,Math.max(R[0],M[0])+w,Math.max(R[1],M[1])+w);let P=Math.hypot(M[0]-R[0],M[1]-R[1]),L=r(R,M,.5),H=o(w*2,.14,P,8019264,L[0],k-.07,L[1],y);H.castShadow=!1;let J=[[-w,-P/2],[w,-P/2],[w,P/2],[-w,P/2]].map(([pe,ne])=>[L[0]+x[0]*pe+m[0]*ne,L[1]+x[1]*pe+m[1]*ne]),Q=new ft({color:2763308});for(let pe=0;pe<4;pe++){let ne=J[pe],N=J[(pe+1)%4],ve=Math.hypot(N[0]-ne[0],N[1]-ne[1]);o(.08,.08,ve,0,(ne[0]+N[0])/2,k+1.1,(ne[1]+N[1])/2,Math.atan2(N[0]-ne[0],N[1]-ne[1]),Q),o(.05,.05,ve,0,(ne[0]+N[0])/2,k+.55,(ne[1]+N[1])/2,Math.atan2(N[0]-ne[0],N[1]-ne[1]),Q),s.colliders.add({ax:ne[0],az:ne[1],bx:N[0],bz:N[1],y0:k-.5,y1:k+1.6,kind:"r",tag:null},ne[0],ne[1],N[0],N[1])}let Y=(pe,ne)=>[L[0]+x[0]*pe+m[0]*ne,L[1]+x[1]*pe+m[1]*ne];{let[pe,ne]=Y(-w+2.2,-P/2+5);o(1.4,1.1,7,3812386,pe,k+.55,ne,y),o(1.7,.08,7.3,11569756,pe,k+1.14,ne,y)}let K=[14239787,15921126,3107722,15909424],ie=0;for(let pe=-P/2+4;pe<P/2-2;pe+=5.2)for(let ne of[1.5,6.2]){let[N,ve]=Y(ne,pe);o(1.8,.07,.8,10123858,N,k+.75,ve,y,E);for(let le of[-.75,.75]){let[ke,Pe]=Y(ne+le,pe);o(.35,.06,1.8,0,ke,k+.45,Pe,y+Math.PI/2,E)}let ce=new Xe(new fn(.03,.03,2.4,5),Q);ce.position.set(N,k+1.2,ve),t.add(ce);let ye=new Xe(new Wr(1.5,.5,8),new ft({color:K[ie++%4],flatShading:!0}));ye.position.set(N,k+2.55,ve),ye.castShadow=!0,t.add(ye)}let ae=new nn({color:16767392});ae.userData.bulb=!0,rh.push(ae);let X=[];for(let pe=-P/2;pe<=P/2+.1;pe+=P/4)for(let ne=0;ne<=14;ne++){let N=-w+2*w*ne/14,ve=.5*Math.sin(Math.PI*ne/14);X.push([...Y(N,pe),k+3.1-ve])}let ee=new wn(new ai(.07,5,4),ae,X.length),ue=new ot;X.forEach((pe,ne)=>{ue.makeTranslation(pe[0],pe[2],pe[1]),ee.setMatrixAt(ne,ue)}),t.add(ee);for(let pe of[-w,w])for(let ne=-P/2;ne<=P/2+.1;ne+=P/4){let[N,ve]=Y(pe,ne),ce=new Xe(new fn(.04,.04,3.2,5),Q);ce.position.set(N,k+1.6,ve),t.add(ce)}let de=r(h[0],h[1],.62),Te=Y(w-2.2,P/2-2.5);n.push({a:[de[0]+x[0]*1.6,de[1]+x[1]*1.6],b:Te,yb:k,name:"K\xE1ce\u010Dko \u2013 terasa",back:"Kamenn\xE9 n\xE1mestie"});let We=v[0],it=v[1];for(let[pe,ne]of[[-w+3.6,-P/2+4],[-w+3.6,-P/2+6.5],[.4,-1],[2.8,1.2],[5,6.5],[7.4,-6],[w-1.2,3],[w-1.2,5],[-3,P/2-1.2],[-1.2,P/2-1.2]]){let[N,ve]=Y(pe,ne);i.push([N,ve,k,pe>w-2||ne>P/2-2?Math.atan2(We-N,it-ve):Math.atan2(L[0]-N+ne%3,L[1]-ve+pe%2)])}}{let l=[2448,1196],h=[2485,1128],u=Math.hypot(h[0]-l[0],h[1]-l[1]),f=[(h[0]-l[0])/u,(h[1]-l[1])/u],d=[-f[1],f[0]],p=Math.atan2(f[0],f[1]),v=new ft({color:10470616,transparent:!0,opacity:.35,side:Ht}),g=new ft({color:2829616}),m=new ft({color:9071176});for(let[_,x]of[[.38,9.5],[.62,-5.5]]){let y=l[0]+(h[0]-l[0])*_+d[0]*x,S=l[1]+(h[1]-l[1])*_+d[1]*x,b=s.hAt(y,S),E=Math.sign(x);o(1.7,.1,8,0,y,b+2.6,S,p,g),o(.06,2.5,8,0,y+d[0]*.8*E,b+1.3,S+d[1]*.8*E,p,v).castShadow=!1;for(let w of[-3.95,3.95])o(1.6,2.5,.06,0,y+f[0]*w,b+1.3,S+f[1]*w,p,v).castShadow=!1;for(let w of[-3.95,0,3.95])o(.09,2.6,.09,0,y+f[0]*w+d[0]*.8*E,b+1.3,S+f[1]*w+d[1]*.8*E,p,g);o(.45,.08,5,0,y+d[0]*.45*E,b+.5,S+d[1]*.45*E,p,m);let R=[y-f[0]*4-d[0]*.85*E,S-f[1]*4-d[1]*.85*E],M=[y+f[0]*4-d[0]*.85*E,S+f[1]*4-d[1]*.85*E];ui(s,t,"Kamenn\xE9 n\xE1mestie",{a:R,b:M,t:.5,away:[y+d[0]*5*E,S+d[1]*5*E],y:2.86,w:4.2,h:.42,fg:"#ffffff",bg:"#c8102e",weight:700,glow:.9,off:.02}),s.colliders.add({ax:y-f[0]*4+d[0]*.8*E,az:S-f[1]*4+d[1]*.8*E,bx:y+f[0]*4+d[0]*.8*E,bz:S+f[1]*4+d[1]*.8*E,y0:b-1,y1:b+2.7,kind:"w",tag:null},y-5,S-5,y+5,S+5)}}{let l=[2314,1201],h=[2340,1231],f=ui(s,t,"STAR\xC1 TR\u017DNICA",{a:l,b:h,t:.5,away:[2322,1245],y:9.6,w:13,h:1.5,fg:"#f3ead2",glow:1,off:.25}),d=Math.hypot(h[0]-l[0],h[1]-l[1]),p=[(h[0]-l[0])/d,(h[1]-l[1])/d],v=Math.atan2(p[0],p[1]),g=[14239787,15921126,4164175,15909424,3107722],m=new ft({color:9071176}),_=[14254379,12729131,6988604,15255602],x=0;for(let y=0;y<2;y++)for(let S=-2;S<=2;S++){let b=f.x+f.nx*(7+y*6.5)+p[0]*S*4.6,E=f.z+f.nz*(7+y*6.5)+p[1]*S*4.6;if(s.hAt(b,E)<s.water+2)continue;let R=s.hAt(b,E);o(3.2,.08,1.3,0,b,R+.9,E,v+Math.PI/2,m);for(let w of[-1.5,1.5])for(let I of[-.6,.6])o(.07,2.3,.07,3815994,b+p[0]*w+f.nx*I,R+1.15,E+p[1]*w+f.nz*I);let M=new Xe(new Wr(2.6,.9,4),new ft({color:g[x%5],flatShading:!0}));M.position.set(b,R+2.75,E),M.rotation.y=v+Math.PI/4,M.castShadow=!0,t.add(M);for(let w of[-1,0,1])o(.75,.3,.9,_[(x+w+4)%4],b+p[0]*w,R+1.1,E+p[1]*w,v+Math.PI/2);x++}ui(s,t,"MANDERLA",{a:[2388,1235],b:[2401,1224],t:.5,away:[2400,1236],y:46.2,w:11,h:2.2,fg:"#f4f1e6",glow:1.3,off:-.6})}let a=new nn({color:16765498,transparent:!0,opacity:.75,side:Ht});for(let l of n)for(let[h,u]of[[l.a,s.hAt(l.a[0],l.a[1])],[l.b,l.yb]]){let f=new Xe(new Ta(.75,1,20),a);f.rotation.x=-Math.PI/2,f.position.set(h[0],u+.08,h[1]),t.add(f)}e.add(t);let c=0;return{doors:n,guests:i,update(l,h){c=Math.max(0,c-l);for(let u of rh)u.userData.bulb?u.color.setScalar(.25+2.6*h).multiply(new Oe(1,.82,.55)):u.emissiveIntensity=(.75+1.1*h)*u.userData.glow;a.opacity=.5+.3*Math.sin(performance.now()/250)},tryDoor(l,h,u){if(c>0)return null;for(let f of n){let d=s.hAt(f.a[0],f.a[1]);if(Math.hypot(l-f.a[0],h-f.a[1])<1.1&&Math.abs(u-d)<2)return c=2.5,[f.b[0],f.b[1],f.yb,f.name];if(Math.hypot(l-f.b[0],h-f.b[1])<1.1&&Math.abs(u-f.yb)<2)return c=2.5,[f.a[0],f.a[1],d,f.back]}return null}}}var oo={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},zubor:{L:5.9,W:2.06,H:2.02,hood:1.55,wind:.55,rear:"estate",rr:.44,belt:1.34,clear:.52,acc:5.2,vmax:50,nick:"Zubor",acc_:"Zubra",g:"m",boxy:!0},sugga:{L:4.68,W:1.82,H:1.98,hood:1.15,wind:.32,rear:"box",rr:.41,belt:1.28,clear:.5,acc:3.2,vmax:36,nick:"Sugga",acc_:"Suggu",g:"f",boxy:!0},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},qy=new ft({color:3886431,name:"Windows"}),Yy=new ft({color:1381653,name:"Tire"}),Zy=new ft({color:10132898,name:"Rim"}),Id=new ft({color:2303014,name:"Trim"}),Ky=new ft({color:15921902,name:"Plate"});function Nd(s,e,t){let n=new Xr;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new Ea(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(e/2-t,0,0),i}function Dd(s){let e=oo[s],{L:t,W:n,H:i,hood:r,wind:o,belt:a}=e,c=e.rr,l=e.clear||.3,h=t/2,u=new ft({color:16777215,name:"Paint"}),f=new Ot,d=e.boxy?.03:.07,p=e.boxy?a-.08:a-.2,v=e.rear==="liftback"?a+.02:a,g=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,p-.06],[h-.1,p],[h-r,a],[-h+(e.rear==="liftback"?.05:.02),v],[-h,v-.12],[-h,l+.14]],m=new Xe(Nd(g,n,d),u);f.add(m);let _=n-.16,x=h-r,y=x-o,S,b;e.rear==="hatch"?(S=-h+.32,b=-h+.08):e.rear==="liftback"?(S=-h+1.28,b=-h+.28):e.rear==="estate"?(S=-h+.14,b=-h+.04):(S=-h+.1,b=-h+.05);let E=[[b,a-.02],[x,a-.02],[y,i-.04],[S,i-.04]],R=new Xe(Nd(E,_,.04),qy);f.add(R);let M=y-S-.12,w=new Xe(new Xt(_-.06,.07,M),u);w.position.set(0,i-.02,(y+S)/2),f.add(w);let I=new Xe(new Xt(_+.01,i-a-.06,.12),u);I.position.set(0,(i+a)/2-.03,(x+b)/2+(e.rear==="liftback"?.25:.1)),f.add(I);let U=t*.61,k=new fn(c,c,.22,14);k.rotateZ(Math.PI/2);let P=new fn(c*.62,c*.62,.235,10);P.rotateZ(Math.PI/2);let L=U/2+(h-r>.6?.05:0)+.05;for(let X of[L,-U/2+.05])for(let ee of[-1,1]){let ue=new Xe(k,Yy);ue.position.set(ee*(n/2-.13),c,X);let de=new Xe(P,Zy);de.position.copy(ue.position),f.add(ue,de)}let H=new Xe(new Xt(n+.02,.14,t-.3),Id);H.position.set(0,l+.07,0),f.add(H);let J=new ft({color:14673646,name:"HeadLights"}),Q=new ft({color:9048080,name:"TailLights"}),Y=p-.1;for(let X of[-1,1]){let ee=new Xe(new Xt(e.boxy?.32:.38,e.boxy?.16:.11,.08),J);ee.position.set(X*(n/2-.3),Y,h-.03);let ue=new Xe(new Xt(.3,.13,.08),Q);ue.position.set(X*(n/2-.22),v-.2,-h+0),f.add(ee,ue)}let K=new Xe(new Xt(n*.42,.14,.06),Id);K.position.set(0,Y-.02,h+0);let ie=new Xe(new Xt(.52,.12,.03),Ky);ie.position.set(0,l+.22,h+.01);let ae=ie.clone();ae.position.z=-h-.01,ae.position.y=l+.3;for(let X of[-1,1]){let ee=new Xe(new Xt(.16,.1,.12),u);ee.position.set(X*(n/2+.06),a+.08,x-.1),f.add(ee)}return f.add(K,ie,ae),f.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:t,vmax:e.vmax,acc:e.acc,nick:e.nick,acc_:e.acc_,g:e.g},w:n,h:i,len:t}}function oh(s,e){if(e===Wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Jr||e===Oa){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Jr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Za=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Xi.extractUrlBase(e);o=Xi.resolveURL(l,this.path)}else o=Xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bd){try{o[St.KHR_BINARY_GLTF]=new Ah(e)}catch(u){i&&i(u);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Dh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:o[u]=new uh;break;case St.KHR_DRACO_MESH_COMPRESSION:o[u]=new Rh(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[u]=new Ch;break;case St.KHR_MESH_QUANTIZATION:o[u]=new Ph;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function jy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hh=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ia(h),l.distance=u;break;case"spot":l=new ar(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},uh=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}},fh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},dh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],on),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_h=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Sh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},wh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eh=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Th=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let v=new ot,g=new D,m=new tn,_=new D(1,1,1),x=new wn(p.geometry,p.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,v.compose(g,m,_));for(let y in c)if(y==="_COLOR_0"){let S=c[y];x.instanceColor=new ls(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);Gt.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Bd="glTF",ao=12,Ud={JSON:1313821514,BIN:5130562},Ah=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ao,r=new DataView(e,ao),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ud.JSON){let l=new Uint8Array(e,ao+o,a);this.content=n.decode(l)}else if(c===Ud.BIN){let l=ao+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Rh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Ih[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ih[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=fr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let v=d.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}u(d)},a,l,on,f)})})}},Ch=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ph=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Ka=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,v=p-l,g=-2*d+3*f,m=d-f,_=1-g,x=m-f+u;for(let y=0;y!==a;y++){let S=o[v+y+a],b=o[v+y+c]*h,E=o[p+y+a],R=o[p+y]*h;r[y]=_*S+x*b+g*E+m*R}return r}},Jy=new tn,Lh=class extends Ka{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Jy.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zd={9728:jt,9729:Jt,9984:jo,9985:kl,9986:Er,9987:Wn},Fd={33071:Dn,33648:Nr,10497:os},ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$y={CUBICSPLINE:void 0,LINEAR:cs,STEP:js},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),s.DefaultMaterial}function ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function e1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function t1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function n1(s){let e,t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lh(t.attributes):e=s.indices+":"+lh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+lh(s.targets[n]);return e}function lh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Nh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function i1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var s1=new ot,Dh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Pa(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ps(r,a,i),Yi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Xi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=ah[i.type],a=fr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ah[i.type],l=fr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,g;if(d&&d!==u){let m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,x=t.cache.get(_);x||(v=new l(a,m*d,i.count*d/h),x=new Fr(v,d/h),t.cache.add(_,x)),g=new Or(x,c,f%d/h,p)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new Ft(v,c,p);if(i.sparse!==void 0){let m=ah.SCALAR,_=fr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new _(o[1],x,i.sparse.count*m),b=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized));for(let E=0,R=S.length;E<R;E++){let M=S[E];if(g.setX(M,b[E*c]),c>=2&&g.setY(M,b[E*c+1]),c>=3&&g.setZ(M,b[E*c+2]),c>=4&&g.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=zd[f.magFilter]||Jt,h.minFilter=zd[f.minFilter]||Wn,h.wrapS=Fd[f.wrapS]||os,h.wrapT=Fd[f.wrapT]||os,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(v){let g=new an(v);g.needsUpdate=!0,f(g)}),t.load(Xi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||i1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Gr,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Hr,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[St.KHR_MATERIALS_UNLIT]){let u=i[St.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let h=r.alphaMode||ch.OPAQUE;if(h===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ch.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){let u=r.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==nn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Yi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(i,u,r),u})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Od(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=n1(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Od(new Rt,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Qy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let v=h[d],g=o[d],m,_=l[d];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ma(v,_):new Xe(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?m.geometry=oh(m.geometry,Oa):g.mode===Zn.TRIANGLE_FAN&&(m.geometry=oh(m.geometry,Jr));else if(g.mode===Zn.LINES)m=new xa(v,_);else if(g.mode===Zn.LINE_STRIP)m=new nr(v,_);else if(g.mode===Zn.LINE_LOOP)m=new va(v,_);else if(g.mode===Zn.POINTS)m=new _a(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&t1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Yi(m,r),g.extensions&&ps(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ps(i,u[0],r),u[0];let f=new Ot;r.extensions&&ps(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Yf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ga(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],v=d.target,g=v.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let _=0,x=f.length;_<x;_++){let y=f[_],S=d[_],b=p[_],E=v[_],R=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,S,b,E,R);if(M)for(let w=0;w<M.length;w++)m.push(M[w])}return new rr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,s1)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Br:l.length>1?h=new Ot:l.length===1?h=l[0]:h=new Gt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Yi(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){let u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&ps(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Pn||f instanceof an)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];qi[r.path]===qi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(qi[r.path]){case qi.weights:l=Ti;break;case qi.rotation:l=ci;break;case qi.position:case qi.scale:l=Ai;break;default:switch(n.itemSize){case 1:l=Ti;break;case 2:case 3:default:l=Ai;break}break}let h=i.interpolation!==void 0?$y[i.interpolation]:cs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let p=new l(c[f]+"."+qi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ci?Lh:Ka;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function r1(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Nh(fr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let v=Nh(fr[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Od(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Ih[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Pt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),Yi(s,e),r1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?e1(s,e.targets,t):s})}function kd(s){let e=new Map,t=new Map,n=s.clone();return Hd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Hd(s.children[n],e.children[n],t)}var a1=new Za,Uh=null,Gd=async s=>{let e=s.split("/").pop();Uh||(Uh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let t=await Uh,n=atob(t[e]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>a1.parse(i.buffer,"",r,o))},fi={cars:{},people:[]},ja={mat:null},c1=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],Vd={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},Wd=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Xd(s,e){let t=[],n=0,i=Object.keys(Vd).length+Wd.length,r=()=>e&&e(++n/i);for(let[o,a]of Object.entries(Vd))t.push(Gd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new $t().setFromObject(l,!0).getSize(new D),f=u.x>u.z,d=new Ot,p=new Ot;p.add(l),f&&(p.rotation.y=Math.PI/2),d.add(p),d.updateMatrixWorld(!0);let v=new $t().setFromObject(d,!0),g=v.max.z-v.min.z,m=a.len/g;p.scale.multiplyScalar(m),d.updateMatrixWorld(!0),v=new $t().setFromObject(d,!0);let _=v.getCenter(new D);p.position.set(-_.x,-v.min.y,-_.z),d.updateMatrixWorld(!0);let x=0,y=0;d.traverse(b=>{if(b.isMesh){b.castShadow=!0;let E=Array.isArray(b.material)?b.material:[b.material];for(let R of E)if(/head/i.test(R.name)){let M=new $t().setFromObject(b,!0);x+=M.getCenter(new D).z,y++}}}),y&&x/y<0&&(p.rotation.y+=Math.PI,p.position.x*=-1,p.position.z*=-1);let S=new $t().setFromObject(d,!0);fi.cars[o]={obj:d,def:a,w:S.max.x-S.min.x,h:S.max.y-S.min.y,len:S.max.z-S.min.z},r()}));for(let o of Wd)t.push(Gd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new $t().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new Ot;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1)});let d={};for(let p of a.animations)d[p.name.replace(o.pre,"").toLowerCase()]=p;fi.people.push({obj:f,clips:d}),r()}));await Promise.all(t);for(let o of Object.keys(oo))fi.cars[o]=Dd(o)}var l1=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],dr=class{constructor(e=-1,t=!0){let n=e>=0?fi.people[e]:dn(fi.people);if(this.obj=kd(n.obj),t){let i=new Oe(dn(l1));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&Nt()<.6){let a=o.clone();return a.color=new Oe(dn(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new Da(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(Fa,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(Fa,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(e,t=.2,n=1){let i=this.acts[e]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,t,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},An={},Ja=class{constructor(e,t){let n=fi.cars[e]||fi.cars.sedan;this.kind=e,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=t||dn(c1),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new Oe(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.tail=o,o}return r}).map(r=>ja.mat?ja.mat(r):r),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(e,t,n,i){this.x=e,this.z=t,this.h=n,this.y=i.surfaceY(e,t),this.vx=this.vz=this.w=0,this.sync(i,1)}step(e,t,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=pt(this.st*l-this.steer,-e*3.5,e*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=t.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-t.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*pt(d/4,-.4,.4),o+=h*e;let p=this.len*.62,v=o*Math.tan(this.steer)/p,g=this.hb?1.6:9,m=Math.abs(v*o),_=this.hb?6:13,x=m>_?g*_/m:g;this.w+=(v*(this.hb?1.35:1)-this.w)*pt(x*e,0,1),a*=Math.exp(-(this.hb?1.4:m>_?3.2:10)*e),this.h=ti(this.h+this.w*e);let y=Math.sin(this.h),S=Math.cos(this.h);this.vx=o*y+a*S,this.vz=o*S-a*y,this.x+=this.vx*e,this.z+=this.vz*e;let b=0;for(let E of[this.off,-this.off,0]){let R=this.x+y*E,M=this.z+S*E;if(t.collide(R,M,this.y+.3,this.r,An)){this.x+=An.x-R,this.z+=An.z-M;let w=this.vx*An.nx+this.vz*An.nz;w<0&&(this.vx-=1.3*w*An.nx,this.vz-=1.3*w*An.nz,this.vx*=.92,this.vz*=.92,b=Math.max(b,-w),this.w+=E*.05*w*(this.vx*An.nz-this.vz*An.nx>0?1:-1))}}this.x=pt(this.x,2,t.W-2),this.z=pt(this.z,2,t.H-2),this.impact=b,b>4&&(this.dmg+=b*1.5)}sync(e,t){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=e.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=e.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=e.surfaceY(this.x-i*.8,this.z+n*.8,r),l=e.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=pt(t*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let p=pt(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+p)}lights(e,t){this.head&&this.head.emissive.setRGB(e*3,e*2.7,e*2.2),this.tail&&this.tail.emissive.setRGB(t?3:e*1.2,0,0)}};function qd(s,e){let t=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(e.h),r=Math.cos(e.h);if(Math.abs(s.x-e.x)>7||Math.abs(s.z-e.z)>7||Math.abs(s.y-e.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[e.off,-e.off]){let l=s.x+t*a,h=s.z+n*a,u=e.x+i*c,f=e.z+r*c,d=u-l,p=f-h,v=Math.hypot(d,p),g=s.r+e.r;if(v<g&&v>1e-4){d/=v,p/=v;let m=(g-v)/2;s.x-=d*m,s.z-=p*m,e.x+=d*m,e.z+=p*m;let _=(e.vx-s.vx)*d+(e.vz-s.vz)*p;if(_<0){let x=-_*.65;s.vx-=d*x,s.vz-=p*x,e.vx+=d*x,e.vz+=p*x,s.w+=(a>0?1:-1)*x*.05,e.w-=(c>0?1:-1)*x*.05,o=Math.max(o,-_)}}}return o}var Tn={},co=class{constructor(e,t,n,i){this.car=e,this.w=t,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let e=this.e.b.out.filter(t=>t!==this.e.rev&&t.L>.5);this.next=e.length?dn(e):this.e.rev||null}ahead(e,t){let n=this.e,i=this.s+e;i>n.L&&this.next&&(i-=n.L,n=this.next),vn.at(n,Math.min(i,n.L),t);let r=n.lane;return t.x+=-t.dz*r,t.z+=t.dx*r,t}project(){let e=this.car,t=this.e,n=1e9,i=this.s;for(let r=0;r<t.p.length-1;r++){let o=t.p[r][0],a=t.p[r][1],c=t.p[r+1][0],l=t.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=pt(((e.x-o)*h+(e.z-a)*u)/f,0,1),p=Math.hypot(o+h*d-e.x,a+u*d-e.z);p<n&&(n=p,i=t.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(e,t,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,Tn);let l=Tn.x,h=Tn.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let y=Math.hypot(r.x-o.x,r.z-o.z);y<30&&(l=r.x,h=r.z,u=pt(y*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let y=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),S=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),b=Math.abs(ti(S-y));b>.35&&(u=Math.min(u,mt(14,5.5,pt(b/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,y,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),p=Math.cos(o.h),v=99;for(let y of t){if(y===o)continue;let S=y.x-o.x,b=y.z-o.z,E=S*d+b*p;if(E<0||E>22)continue;Math.abs(S*p-b*d)<2.2&&(v=Math.min(v,E-(o.len+y.len)/2))}if(i&&this.mode!=="chase"){let y=i.x-o.x,S=i.z-o.z,b=y*d+S*p;b>0&&b<14&&Math.abs(y*p-S*d)<2&&(v=Math.min(v,b-o.len/2-.5))}v<99&&(u=Math.min(u,Math.max(0,(v-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,v<3?4:u));let g=Math.atan2(l-o.x,h-o.z),m=ti(g-o.h),_=o.fwd;o.st=pt(m*2.2,-1,1),_<-.5&&(o.st=-o.st);let x=u-_;o.thr=pt(x*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),v<4&&a<.5&&(this.honk+=e)}chooseToward(e){let t=this.e.b.out.filter(r=>r.L>.5);if(!t.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of t){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-e.x,o[1]-e.z)+(r===this.e.rev?30:0)+Nt()*8;a<i&&(i=a,n=r)}this.next=n}},lo=class{constructor(e,t,n){this.p=new dr,this.w=e,this.e=t,this.s=n,this.dir=Nt()<.5?1:-1,this.off=(Nt()-.5)*(t.sw?.8:1.6),this.speed=1.1+Nt()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),vn.at(t,n,Tn),this.p.x=Tn.x,this.p.z=Tn.z,this.p.y=e.hAt(Tn.x,Tn.z)}get x(){return this.p.x}get z(){return this.p.z}flee(e,t){if(this.state==="down")return;this.state="flee",this.t=5+Nt()*3;let n=Math.atan2(this.p.x-e,this.p.z-t)+(Nt()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(e,t,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=e,this.p.vz=t,this.p.play("death",.08,n?1.6:1.1),!0)}update(e,t){let n=this.p;if(this.state==="walk"){this.s+=this.speed*e*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&Nt()<.85){let h=dn(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=pt(this.s,0,i.L)}vn.at(this.e,this.s,Tn);let r=Tn.x-Tn.dz*this.off*this.dir,o=Tn.z+Tn.dx*this.off*this.dir,a=Math.atan2(Tn.dx*this.dir,Tn.dz*this.dir);n.h+=ti(a-n.h)*pt(e*6,0,1),n.x+=(r-n.x)*pt(e*4,0,1),n.z+=(o-n.z)*pt(e*4,0,1)}else if(this.state==="flee"){this.t-=e;let i=4.2;if(n.x+=Math.sin(this.fh)*i*e,n.z+=Math.cos(this.fh)*i*e,n.h+=ti(this.fh-n.h)*pt(e*8,0,1),t.collide(n.x,n.z,n.y,.35,An)&&(n.x=An.x,n.z=An.z,this.fh+=(Nt()<.5?1:-1)*1.2),this.t<=0){let r=t.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=dn(r),this.s=Nt()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=e,n.x+=n.vx*e,n.z+=n.vz*e,n.vx*=Math.exp(-4*e),n.vz*=Math.exp(-4*e),t.collide(n.x,n.z,n.y,.3,An)&&(n.x=An.x,n.z=An.z,n.vx=n.vz=0));n.y=t.surfaceY(n.x,n.z,n.y+1),n.mixer.update(e),n.sync()}};var $a=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.7,this.master.connect(t.destination);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}start(){if(!this.ctx||this.started)return;this.started=!0;let e=this.ctx,t=this._noiseSrc(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=e.createGain();i.gain.value=.06,t.connect(n).connect(i).connect(this.master),t.start();let r=e.createOscillator();r.type="sawtooth";let o=e.createOscillator();o.type="square";let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=e.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=e.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=e.createOscillator();f.type="triangle";let d=e.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let p=e.createOscillator(),v=e.createOscillator();p.type=v.type="square",p.frequency.value=392,v.frequency.value=494;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=1500;let m=e.createGain();m.gain.value=0,p.connect(g),v.connect(g),g.connect(m).connect(this.master),p.start(),v.start(),this.hornG=m}mute(e){this.master&&this.master.gain.setTargetAtTime(e||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(e,t,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(t){let c=Math.abs(t.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(t.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(t.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(t.thr)*.06,r,.08);let f=Math.sin(t.h),d=Math.cos(t.h),p=Math.abs(t.vx*d-t.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,p-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(e.t%1.2<.6?720:960,r,.03)}_burst(e,t,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+e),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+e+.05)}_tone(e,t,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(t,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(e){let t=Math.min(1,e/15);this._burst(.35+t*.4,900,.25+t*.5),this._tone(90,40,.3,.3*t)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((e,t)=>this._tone(e,e,.25,.14,"square",t*.11))}fail(){[392,330,262,196].forEach((e,t)=>this._tone(e,e*.98,.3,.14,"sawtooth",t*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(e){this.hornG&&this.hornG.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.02)}};var _t=s=>document.querySelector(s),Qa=class{constructor(e,t){this.G=e,this.mobile=t,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=_t("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",t||matchMedia("(pointer: coarse)").matches),_t("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),_t("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),_t("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),_t("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),_t("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,_t("#map").hidden=!0,this.toggleMap(this.G.world,this.G),_t("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),_t("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();_t("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(e,t){_t("#loadbar i").style.width=Math.round(e*100)+"%",t&&(_t("#loadtxt").textContent=t)}ready(){_t("#load").hidden=!0,_t("#title").hidden=!1}play(){_t("#title").hidden=!0,_t("#hud").hidden=!1,document.body.classList.add("playing")}pause(e){_t("#pause").hidden=!e}error(e){_t("#loadtxt").textContent="Chyba: "+e}toast(e){let t=_t("#toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}big(e,t,n,i=2.6){let r=_t("#big");r.querySelector("b").textContent=e,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=t||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(e,t){let n=_t("#flash");n.style.background=e,n.style.transition="none",n.style.opacity=t,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(e){if(this._hint===e)return;this._hint=e;let t=_t("#hint");t.textContent=e,t.hidden=!e||this.mobile}flashHint(){}bindTouch(e,t){this.snd=t;let n=_t("#stick"),i=_t("#stick i"),r=null,o=0,a=0,c=null,l=0,h=52,u=_t("#touch");u.addEventListener("touchstart",p=>{t.unlock();for(let v of p.changedTouches)v.clientX<innerWidth*.5&&r===null?(r=v.identifier,o=v.clientX,a=v.clientY,n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0):c===null&&(c=v.identifier,l=v.clientX);p.preventDefault()},{passive:!1}),u.addEventListener("touchmove",p=>{for(let v of p.changedTouches)if(v.identifier===r){let g=v.clientX-o,m=v.clientY-a,_=Math.hypot(g,m);_>h&&(g*=h/_,m*=h/_),i.style.transform=`translate(${g}px,${m}px)`,this.stick.x=g/h,this.stick.y=-m/h}else v.identifier===c&&(this.look.dx+=(v.clientX-l)*.009,l=v.clientX);p.preventDefault()},{passive:!1});let f=p=>{for(let v of p.changedTouches)v.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),v.identifier===c&&(c=null)};u.addEventListener("touchend",f),u.addEventListener("touchcancel",f);let d=(p,v)=>{let g=_t(p);g.addEventListener("touchstart",_=>{t.unlock(),this.btn[v]=1,g.classList.add("dn"),_.preventDefault(),_.stopPropagation()},{passive:!1});let m=_=>{this.btn[v]=0,g.classList.remove("dn"),_.preventDefault()};g.addEventListener("touchend",m),g.addEventListener("touchcancel",m)};d("#bGas","gas"),d("#bBrake","brake"),d("#bHb","hb"),d("#bAtk","atk"),_t("#bAct").addEventListener("touchstart",p=>{t.unlock(),e.act=1,p.preventDefault(),p.stopPropagation()},{passive:!1}),_t("#bAct").addEventListener("click",()=>e.act=1)}update(e,t,n){_t("#money").textContent="\u20AC "+Math.floor(e.money).toLocaleString("sk-SK");let i="\u2605".repeat(e.wanted)+"\u2606".repeat(5-e.wanted);this._st!==i&&(this._st=i,_t("#stars").textContent=i,_t("#stars").classList.toggle("hot",e.wanted>0));let r=Math.floor(e.tod),o=Math.floor(e.tod%1*60);_t("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=e.street?e.district?e.street+" \xB7 "+e.district:e.street:e.district||"";if(this._street!==a){this._street=a;let l=_t("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=t.goalText;if(t.goal){let l=Math.hypot(t.goal.x-t.px,t.goal.z-t.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,_t("#goal").textContent=c),_t("#speed").textContent=t.speed!==null?Math.round(t.speed)+" km/h":"",_t("#hp").style.width=Math.max(0,e.hp)+"%",document.body.classList.toggle("incar",t.inCar),document.body.classList.toggle("nearcar",t.nearCar||t.inCar),_t("#bAct").textContent=t.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(t,n))}drawMini(e,t){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=e.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-e.px,-e.pz),i.imageSmoothingEnabled=!0,t.drawGround(i,e.px,e.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let p=(f-e.px)*a,v=(d-e.pz)*a,g=Math.cos(l),m=Math.sin(l);return[r/2+p*g-v*m,r/2+p*m+v*g]},u=(f,d,p,v,g)=>{let[m,_]=h(f,d),x=m-r/2,y=_-r/2,S=Math.hypot(x,y),b=r/2-8;if(S>b){if(!g)return;m=r/2+x/S*b,_=r/2+y/S*b}i.fillStyle=p,i.beginPath(),i.arc(m,_,v,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of e.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of e.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);e.goal&&u(e.goal.x,e.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-e.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(e,t){let n=_t("#map");if(!n.hidden||!e){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(_t("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=_t("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?e.H/2:900,l=Math.min(e.W-c,Math.max(c,a?a.x:e.W/2)),h=Math.min(e.H-c,Math.max(c,a?a.z:e.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),e.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(g,m,_,x)=>{o.fillStyle=_,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(g*u,m*u,x,0,7),o.fill(),o.stroke()},p=t&&t.world?window.__gtbLOC:null;if(window.__gtbLM&&window.__gtbLM(d,r),p){for(let g of p.contacts)d(g[0],g[1],"#ffcc33",r/70);for(let g of p.races)d(g[0],g[1],"#33e0ff",r/70)}let v=window.__gtbPos&&window.__gtbPos();if(v){v.goal&&d(v.goal.x,v.goal.z,"#ff4fd8",r/60),o.save(),o.translate(v.x*u,v.z*u),o.rotate(Math.PI-v.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let g=r/50;o.beginPath(),o.moveTo(0,-g),o.lineTo(g*.7,g*.8),o.lineTo(0,g*.35),o.lineTo(-g*.7,g*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var h1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Fn=h1&&Math.min(screen.width,screen.height)<900,zh=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",se=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},ic=document.getElementById("c"),pr=new zr({canvas:ic,antialias:!1,powerPreference:"high-performance"});pr.setPixelRatio(1);pr.shadowMap.enabled=!0;pr.shadowMap.type=Ua;var vs,uo=[],di=!0,xs=null,Rn={zoneNow:!1,obst:()=>Zt,update(){},flash(){},maybeTaxi(){},livery(){},goalText:()=>""},Qt=new Bi,pn=new rn(60,1,.3,2700),at=new Qa(se,Fn),Vt=new $a,Je,ec=new La(12571903,5918784,1.2),Cn=new cr(16777215,3);Cn.castShadow=!0;Cn.shadow.mapSize.set(Fn?1024:2048,Fn?1024:2048);var fo=75;Object.assign(Cn.shadow.camera,{left:-fo,right:fo,top:fo,bottom:-fo,near:1,far:600});Cn.shadow.bias=-.0015;Cn.shadow.normalBias=.6;Qt.add(ec,Cn,Cn.target);var ms=new ar(16769712,0,55,.55,.6,1.2);Qt.add(ms,ms.target);var ep={uSun:Bt.uSun,uNight:Bt.uNight,uTime:Bt.uTime},xo=new Xe(new ai(1800,32,16),new Sn({uniforms:ep,side:un,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:_d}));xo.frustumCulled=!1;Qt.add(xo);Qt.fog=new pa(9085112,.0026);var tp=new fn(1.6,1.6,26,16,1,!0);tp.translate(0,13,0);function u1(s){let e=new Xe(tp,new Sn({uniforms:{uC:{value:new Oe(s)},uTime:Bt.uTime},transparent:!0,depthWrite:!1,side:Ht,blending:wi,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return e.frustumCulled=!1,e}var Ln={},bt={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(Ln[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(bt.act=1),s.code==="KeyM"&&at.toggleMap(Je,se),s.code==="KeyH"&&Vt.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&cp(),se.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&ap(),Vt.unlock())});addEventListener("keyup",s=>{Ln[s.code]=0,s.code==="KeyH"&&Vt.horn(!1)});var Wh=!1,Gh=0;ic.addEventListener("mousedown",s=>{Wh=!0,Gh=s.clientX,Vt.unlock()});addEventListener("mouseup",()=>Wh=!1);addEventListener("mousemove",s=>{Wh&&(bt.camDX+=(s.clientX-Gh)*.006,Gh=s.clientX,bt.camDrag=1.5)});at.bindTouch(bt,Vt);at.onStart=()=>ap();at.onPause=()=>cp();at.onDetail=s=>{se.detail=s,Xh()};function f1(){let s=0,e=0;(Ln.KeyA||Ln.ArrowLeft)&&(s-=1),(Ln.KeyD||Ln.ArrowRight)&&(s+=1),(Ln.KeyW||Ln.ArrowUp)&&(e+=1),(Ln.KeyS||Ln.ArrowDown)&&(e-=1),at.stick.active&&(s=at.stick.x,e=at.stick.y),bt.mx=s,bt.my=e,bt.run=Ln.ShiftLeft||Ln.ShiftRight||at.stick.active&&Math.hypot(at.stick.x,at.stick.y)>.92?1:0,bt.hb=Ln.Space||at.btn.hb?1:0,bt.atk=Ln.Space||at.btn.atk?1:0,bt.gas=at.btn.gas,bt.brake=at.btn.brake}var ze,Zt=[],zn=[],On=[],Ie=null,np=[],Fh=new D;function _s(s,e,t,n,i){let r=new Ja(s,i);return r.place(e,t,n,Je),Qt.add(r.obj),Zt.push(r),r}function po(s){let e=Zt.indexOf(s);e>=0&&Zt.splice(e,1),Qt.remove(s.obj),s.siren&&(s.siren=null);let t=On.indexOf(s);t>=0&&On.splice(t,1)}var ip=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function d1(s,e){for(let t=0;t<12;t++){let n=Nt()*Math.PI*2,i=70+Nt()*110,r=s+Math.sin(n)*i,o=e+Math.cos(n)*i,a=Je.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=pt(a.s,3,a.e.L-3);vn.at(a.e,c,je);let l=je.x-je.dz*a.e.lane,h=je.z+je.dx*a.e.lane;if(Zt.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-e)<55)continue;let u=_s(dn(ip),l,h,Math.atan2(je.dx,je.dz));Rn.maybeTaxi(u),u.driver="ai",u.ai=new co(u,Je,a.e,c);let f=Math.min(a.e.v,9);return u.vx=je.dx*f,u.vz=je.dz*f,u}}var je={};function p1(s,e){for(let t=0;t<10;t++){let n=Nt()*Math.PI*2,i=50+Nt()*90,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=pt(r.s,4,r.e.L-4);vn.at(r.e,o,je);let a=r.e.r.w/2-1.05,c=je.x-je.dz*a,l=je.z+je.dx*a;if(Zt.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-e)<40)continue;let h=_s(dn(ip),c,l,Math.atan2(je.dx,je.dz));return h.parked=!0,h}}function sp(s,e,t){let n=Je.pedGrid.query(s,e,70,[]);for(let i=0;i<8&&n.length;i++){let r=dn(n),o=Nt()*r.L;vn.at(r,o,je);let a=Math.hypot(je.x-s,je.z-e);if(a<(t?10:26)||a>72||Je.onDeck(je.x,je.z,999)&&!r.sw)continue;let c=new lo(Je,r,o);return Qt.add(c.p.obj),zn.push(c),c}}function m1(s){let e=zn.indexOf(s);e>=0&&zn.splice(e,1),Qt.remove(s.p.obj)}function g1(s,e){if(di)return null;for(let t=0;t<10;t++){let n=Nt()*Math.PI*2,i=90+Nt()*60,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,50);if(!r||(vn.at(r.e,r.s,je),Math.hypot(je.x-s,je.z-e)<70))continue;let o=dn(["kombi","kombi","esuv","golfik"]),a=_s(o,je.x,je.z,Math.atan2(je.dx,je.dz),"#eef0f2");return a.driver="police",a.ai=new co(a,Je,r.e,r.s),a.ai.mode="chase",Rn.livery(a,o==="esuv"?"pz25":"pz"),On.push(a),a}}var ni={vy:0,punchT:0,hurtT:0};function x1(s,e){let t=oo[e],n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");i.fillStyle="#c9ccd2",i.fillRect(0,86,512,42),i.fillStyle="#ffd23a",i.fillRect(0,74,512,8),i.fillStyle="#d7263d",i.fillRect(0,82,512,6),i.fillStyle="#ffffff",i.font="800 62px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e.toUpperCase(),256,40);let r=new ei(n);r.colorSpace=Lt,r.anisotropy=4;let o=new ft({map:r,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}),a=t.L*.5,c=a/4,l=(t.clear||.3)+c/2+.12;for(let h of[1,-1]){let u=new Xe(new Qn(a,c),o);u.position.set(h*(t.W/2+.012),l,-t.L*.06),u.rotation.y=h*Math.PI/2,s.obj.add(u)}}function mr(s,e){ze.x=s,ze.z=e,ze.y=Je.surfaceY(s,e),ze.sync()}function v1(s){if(s.driver==="ai"||s.driver==="police"){let t=new lo(Je,Je.pedEdges[0],0);t.p.x=s.x-Math.cos(s.h)*1.6,t.p.z=s.z+Math.sin(s.h)*1.6,Qt.add(t.p.obj),zn.push(t),t.flee(ze.x,ze.z),ys(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),Vt.shout()}else s.parked&&!s.safe&&Nt()<.35&&(s.alarm=6,ys(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,Ie=s,se.inCar=s,ze.obj.visible=!1;let e=On.indexOf(s);e>=0&&On.splice(e,1),Vt.door(),at.flashHint(""),se.mission&&se.mission.onEnter&&se.mission.onEnter(s)}function gr(){let s=Ie;if(!s)return;let e=-Math.cos(s.h),t=Math.sin(s.h),n=s.x+e*1.7,i=s.z+t*1.7;Je.collide(n,i,s.y,.4,tc)&&(n=s.x-e*1.7,i=s.z-t*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,Ie=null,se.inCar=null,ze.obj.visible=!0,ze.h=s.h,mr(n,i),Vt.door()}var tc={};function ys(s,e){if(di||s<=0||se.mode!=="play")return;se.heat+=s;let t=pt(Math.floor(se.heat),0,5);t>se.wanted&&(se.wanted=t,at.toast("H\u013DADAN\xDD "+"\u2605".repeat(t)+(e?" \xB7 "+e:""))),se.coolT=0}var It={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},_1={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},y1=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],rc=(s,e)=>{let t=Je.d.meta;return[(s-t.lon0)*t.mx,(t.lat1-e)*t.my]};function M1(s,e){let t="",n=1e9;for(let i of y1){i.p||(i.p=rc(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-e);r<n&&(n=r,t=i[2])}return t}function b1(){It.contacts.push([It.contact[0],It.contact[1],"Star\xE9 Mesto"]),It.races.push([It.race[0],It.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[e,t,n]of _1[s]){let[i,r]=rc(e,t),o=null,a=1e9;for(let c of Je.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;vn.at(l,l.L/2,je);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=je.x-je.dz*h,f=je.z+je.dx*h;if(Je.hAt(u,f)<Je.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&It[s].push(o)}}var S1=[["Most Apollo",17.1281,48.1372,60],["Eurovea a nov\xE9 SND",17.1215,48.1405,60],["Star\xFD most",17.1167,48.1385,45],["Sad Janka Kr\xE1\u013Ea",17.109,48.1345,70],["Pr\xEDstavn\xFD most",17.139,48.134,70],["Ve\u013Ek\xFD Dra\u017Ediak",17.1195,48.1095,90],["\u0160trkoveck\xE9 jazero",17.151,48.1545,80],["Zimn\xFD pr\xEDstav",17.142,48.14,90],["Mal\xFD Dunaj vo Vrakuni",17.199,48.1425,80],["Slovnaft",17.179,48.127,160]],w1=[["Kamenn\xE9 n\xE1mestie: Prior a Hotel Kyjev",2562,1150,40],["K\xE1ce\u010Dko \u2013 terasa s v\xFDh\u013Eadom na Kyjev",2563,1116,9]],mo=(s,e,t)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-e,r[1]-t);o<i&&(i=o,n=r)}return n},sc={};window.__gtbLOC=It;window.__gtbPos=()=>({x:Ie?Ie.x:ze.x,z:Ie?Ie.z:ze.z,h:Ie?Ie.h:ze.h,goal:se.mission?se.mission.goal():null});function go(s,e,t,n){let i=sc[s];return i||(i=sc[s]=u1(n),Qt.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(e,Je.surfaceY(e,t),t),i.visible=!0,i}function _n(s){sc[s]&&(sc[s].visible=!1)}function oc(){di||(It.contacts.forEach((s,e)=>go("contact"+e,s[0],s[1],"#ffcc33")),It.races.forEach((s,e)=>go("race"+e,s[0],s[1],"#33e0ff")),_n("target"),_n("cp"))}function E1(){let s=null,e=Je.edgeGrid.query(ze.x,ze.z,650,[]);for(let u=0;u<80&&!s&&e.length;u++){let f=dn(e).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],p=f.p[0][1],v=Math.hypot(d-ze.x,p-ze.z);if(v<220||v>650)continue;vn.at(f,f.L/2,je);let g=f.r.w/2-1.05;s=[je.x-je.dz*g,je.z+je.dx*g,Math.atan2(je.dx,je.dz),f.r.n]}if(!s)return;let t=dn(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=dn(n),o=fi.cars[t].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[t]:o.acc_},l=_s(t,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[t]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>Ie===l?{x:It.garage[0],z:It.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",at.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),ys(1,"majite\u013E vol\xE1 pol\xEDciu"),_n("target"),go("garage",...It.garage,"#7dff6a"))},update(){if(!Zt.includes(l))return Yd("Auto je pre\u010D.");if(l.dmg>260)return Yd("Auto je na \u0161rot.");if(Ie!==l&&go("target",l.x,l.z,"#ff4fd8"),Ie===l&&Math.hypot(l.x-It.garage[0],l.z-It.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(se.wanted?0:200);rp(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),gr(),po(l)}}};_n("contact"),_n("race"),se.mission=h,at.toast("K\u0160EFT: "+h.text),Vt.blip()}function T1(){let s=Je.nearestEdge(ze.x,ze.z,80);if(!s)return;let e=s.e,t=[],n={x:ze.x,z:ze.z},i=0;for(;t.length<8&&i++<400;){let o=e.b.out.filter(c=>c!==e.rev&&c.r.c>=1);if(!o.length)break;e=dn(o);let a=e.p[e.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<Je.W-30&&a[1]<Je.H-30&&(t.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(t.length<4)return at.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:t,par:t.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];go("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=Ie?Ie.x:ze.x,l=Ie?Ie.z:ze.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,Vt.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);rp(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};_n("contact"),_n("race"),se.mission=r,at.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),Vt.blip()}function rp(s,e){se.money+=e,at.big("MISIA SPLNEN\xC1",s,"#7dff6a"),Vt.win(),se.mission=null,_n("garage"),_n("target"),_n("cp"),setTimeout(oc,2500)}function Yd(s){at.big("MISIA ZLYHALA",s,"#ff5a4a"),se.mission=null,_n("garage"),_n("target"),_n("cp"),setTimeout(oc,2500)}function op(s,e,t,n){se.mode="dead",at.big(s,e,t,3.2),Vt.fail(),setTimeout(()=>{Ie&&gr(),se.money=Math.max(0,Math.round(se.money*(1-n))),se.wanted=0,se.heat=0,se.hp=100;for(let i of On.slice())po(i);se.mission&&(se.mission=null,_n("garage"),_n("target"),_n("cp")),oc();{let i=Ie?Ie.x:ze.x,r=Ie?Ie.z:ze.z,a=Math.hypot(i-It.hospital[0],r-It.hospital[1])>1400?mo(It.contacts,i,r):null,c=a?a[0]+3:It.hospital[0],l=a?a[1]+3:It.hospital[1];Ie&&gr(),mr(c,l),Je.prime(c,l)}ze.play("idle"),se.mode="play"},3200)}async function A1(){at.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}vs=new Cd(pr);let e=await(await fetch(zh+"world.json")).json();at.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),Je=new vn(e,zh,{mobile:Fn}),await Je.init(n=>at.loading(.25+n*.15,"Staviam mesto\u2026")),Qt.add(Je.group),se.world=Je,b1(),at.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await Je.prime(...It.start),at.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await Xd(zh+"models/",n=>at.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),ze=new dr(0,!1),Qt.add(ze.obj),mr(...It.start);try{let n=Je.d.meta;Rn=Pd({sandbox:di,Fe:Je,Wt:Qt,Tt:Zt,Pn:zn,Ln:On,we:ze,pc:()=>Ie,q:se,Ve:at,vt:Vt,Kn:Fn,an:Bt,Xs:li,Ye:pt,Ge:mt,Xn:ti,ct:Nt,en:dn,fn:En,Zs:ys,mh:nc,Zn:ni,Yn:fi,Ks:_s,SGrid:hi,OX:n.ox,OZ:n.oz,moreLandmarks:S1.map(([i,r,o,a])=>[i,...rc(r,o),a]).concat(w1)}),ja.mat=i=>i.name==="Plate"?Rn.plateMat():Rn.gloss(i),Rn.init(),se.x3=()=>Rn}catch(n){console.error("X3",n)}try{xs=Ld(Je,Qt),se.ven=xs}catch(n){console.error("venues",n)}if(xs)for(let[n,i,r,o]of xs.guests){let a=new dr(-1,!0);a.x=n,a.z=i,a.y=r,a.h=o,a.sync(),a.mixer.update(Nt(0,3)),Qt.add(a.obj),uo.push(a)}ze.h=Math.PI,oc(),di&&(document.body.classList.add("sandbox"),It.contacts.length=0,It.races.length=0);let t=Je.nearestEdge(It.start[0],It.start[1]+30,60);if(t){let n=pt(t.s,9,t.e.L-9);[["zubor","#14254d",-4.2],["sugga","#1c2f5e",4.4]].forEach(([r,o,a])=>{vn.at(t.e,pt(n+a,3,t.e.L-3),je);let c=t.e.r.w/2-1.2,l=_s(r,je.x-je.dz*c,je.z+je.dx*c,Math.atan2(je.dx,je.dz),o);l.parked=!0,l.safe=!0,l.keep=!0,x1(l,r)}),vn.at(t.e,n,je);let i=t.e.r.w/2+1.6;mr(je.x-je.dz*i,je.z+je.dx*i),ze.h=Math.atan2(je.dz,-je.dx),se.camYaw=Math.atan2(je.dx,je.dz)+Math.PI*.75}for(let n=0;n<10;n++)sp(ze.x,ze.z,!0);Xh(),at.loading(1,""),at.ready(),se.mode="title",se.titleCam=0,requestAnimationFrame(lp)}function ap(){se.mode==="title"&&(Vt.unlock(),Vt.start(),se.mode="play",at.play(),se.camYaw=ze.h+Math.PI)}function cp(){se.mode!=="title"&&(se.paused=!se.paused,at.pause(se.paused),Vt.mute(se.paused))}function Xh(){if(!vs)return;let s=se.detail??1,e=Fn?[2,1.5,1.1][s]:[2,1.5,1][s],t=Math.min(window.devicePixelRatio||1,e),n=Math.floor(innerWidth*t),i=Math.floor(innerHeight*t);ic.width=n,ic.height=i,pr.setSize(n,i,!1),pr.setViewport(0,0,n,i);let r=vs.setSize(n,i,1,Fn?[4,0,0][s]:[4,4,0][s]);pn.aspect=r.aspect;let o=r.aspect<1;pn.fov=o?74:58,pn.updateProjectionMatrix(),se.portrait=o}addEventListener("resize",Xh);var Zd=performance.now(),Oh=0,Bh=new D,Kd=new D,jd=!1;se.camYaw=0;function lp(s){requestAnimationFrame(lp);let e=Math.min(.05,(s-Zd)/1e3);if(Zd=s,se.fixedDt&&(e=se.fixedDt),!se.noLoop){if(se.paused){vs.render(Qt,pn);return}hp(e),vs.render(Qt,pn)}}se.step=hp;se.cars=Zt;se.peds=zn;se.police=On;se.pl=()=>ze;se.pc=()=>Ie;se.key=(s,e)=>dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s}));se.spawn=(s,e,t,n,i)=>{let r=_s(s,e,t,n,i);return r.parked=!0,r.keep=!0,r};se.tp=async(s,e)=>{Ie&&gr(),await Je.prime(s,e),mr(s,e)};se.ll=(s,e)=>rc(s,e);se.LOC=It;se.hY=(s,e)=>Je.hAt(s,e);se.render=()=>vs.render(Qt,pn);function hp(s){if(se.t+=s,Bt.uTime.value=se.t,f1(),(se.mode==="play"||se.mode==="dead")&&(se.tod=(se.tod+s/40)%24),R1(),se.mode==="title"){Je.update(up,fp,6),C1(s),Jd(s,!1),Rn.update(s,!0);return}{let e=Ie||ze,t=Ie?Math.min(60,Math.abs(Ie.speed)*4):0;Je.update(e.x+Math.sin(e.h)*t,e.z+Math.cos(e.h)*t,Fn?4:6)}if(se.mode==="play"?P1(s):ze.mixer.update(s),Jd(s,!0),Rn.update(s,!1),xs){if(xs.update(s,Bt.uNight.value),uo.length&&Math.hypot(ze.x-uo[0].x,ze.z-uo[0].z)<160)for(let e of uo)e.mixer.update(s);if(se.mode==="play"&&!Ie){let e=xs.tryDoor(ze.x,ze.z,ze.y);e&&(mr(e[0],e[1]),at.toast(e[3]))}}if(B1(s),se.mission&&se.mode==="play"&&se.mission.update(s),!di&&!se.mission&&se.mode==="play"){let e=Ie?Ie.x:ze.x,t=Ie?Ie.z:ze.z,n=mo(It.contacts,e,t),i=mo(It.races,e,t);n&&Math.hypot(e-n[0],t-n[1])<4?E1():i&&Math.hypot(e-i[0],t-i[1])<6&&T1()}if(k1(s),se.dbgCam){let e=se.dbgCam;pn.position.set(e[0],e[1],e[2]),pn.lookAt(e[3],e[4],e[5]),xo.position.copy(pn.position),qh(e[3],e[5])}H1(s),Vt.update(se,Ie,On,pn)}function R1(){let s=se.tod,e=Math.sin((s-6.2)/12*Math.PI)*.95,t=(s-6.2)/12*Math.PI+Math.PI/2,n=new D(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)).normalize();ep.uSun.value.copy(n);let i=fd(pt((.04-n.y)/.16,0,1));Bt.uNight.value=i;let r=pt(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;Cn.color.setRGB(1,mt(.95,.62,r),mt(.88,.38,r)),Cn.intensity=o*mt(3.2,2.2,r)*pt(n.y*6,0,1),ec.color.setRGB(mt(.12,mt(.75,.9,r),o),mt(.16,mt(.85,.65,r),o),mt(.32,mt(1,.6,r),o)),ec.groundColor.setRGB(mt(.05,.42,o),mt(.05,.36,o),mt(.07,.3,o)),ec.intensity=mt(.7,1.15,o),i>.5&&(Cn.intensity=.35*i,Cn.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),se.sunDir=n;let a=new Oe().setRGB(mt(.03,mt(.62,.85,r),o),mt(.04,mt(.72,.5,r),o),mt(.08,mt(.85,.36,r),o));Qt.fog.color.copy(a),Qt.fog.density=mt(.002,Fn?.0014:9e-4,o),Je.lampHeadMat.color.setRGB(mt(.5,3,i),mt(.45,2.4,i),mt(.35,1.5,i)),Je.ufoRing&&Je.ufoRing.material.color.setRGB(mt(.6,3,i),mt(.5,2.2,i),mt(.3,1.2,i)),vs.exposure.value=mt(1,1.55,i)}var up=1804,fp=1476;function C1(s){se.titleCam+=s*.035;let e=up,t=fp,n=se.titleCam+2.2;pn.position.set(e+Math.sin(n)*330,Je.hAt(e,t)+95,t+Math.cos(n)*330),pn.lookAt(e,Je.hAt(e,t)+20,t),qh(e,t),xo.position.copy(pn.position)}function qh(s,e){let t=se.sunDir||new D(0,1,0),n=fo*2/Cn.shadow.mapSize.x;s=Math.round(s/n)*n,e=Math.round(e/n)*n;let i=Je.hAt(s,e);Cn.target.position.set(s,i,e),Cn.position.set(s+t.x*250,i+t.y*250,e+t.z*250),Cn.target.updateMatrixWorld()}function P1(s){if(bt.act)if(bt.act=0,Ie)Ie.speed<6&&gr();else{let r=Vh(3.6);r&&v1(r)}if(Ie){let r=Ie,o=bt.my;bt.gas&&(o=1),bt.brake&&(o=-1),r.thr=o,r.st=-bt.mx,r.hb=bt.hb,ze.x=r.x,ze.z=r.z,ze.y=r.y,r.alarm>0&&(r.alarm-=s),at.hint("");return}let e=ze,t=Math.min(1,Math.hypot(bt.mx,bt.my));if(ni.punchT>0&&(ni.punchT-=s),bt.atk&&ni.punchT<=0&&(ni.punchT=.7,e.play("punch",.08,1.4),setTimeout(()=>L1(),220)),t>.08&&ni.punchT<=.25){let r=Math.atan2(bt.mx,bt.my),o=se.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=bt.run?5.2:.9+.75*t;e.h+=ti(o-e.h)*pt(s*10,0,1),e.x+=a*l*s,e.z+=c*l*s,e.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else ni.punchT<=.25&&e.play("idle",.25);Je.collide(e.x,e.z,e.y,.35,tc)&&(e.x=tc.x,e.z=tc.z);for(let r of Zt){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=e.x-(r.x+o*c),h=e.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){e.x+=l/u*(f-u),e.z+=h/u*(f-u);let d=r.speed;d>6&&ni.hurtT<=0&&(se.hp-=d*2.2,ni.hurtT=1,Vt.crash(d*.5),at.flash("#ff2a2a",.35))}}}ni.hurtT>0&&(ni.hurtT-=s),e.x=pt(e.x,2,Je.W-2),e.z=pt(e.z,2,Je.H-2);let n=Je.surfaceY(e.x,e.z,e.y+.8);e.y+=(n-e.y)*pt(s*14,0,1),e.y<Je.water-1.2&&(se.hp=0),e.mixer.update(s),e.sync(),se.hp<=0&&op("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=Vh(3.6);at.hint(i?Fn?"NAST\xDAP":"[E] nast\xFAp":"")}function Vh(s){let e=null,t=s;for(let n of Zt){let i=Math.hypot(n.x-ze.x,n.z-ze.z);i<t&&n.speed<7&&n.burn===void 0&&(t=i,e=n)}return e}function L1(){let s=Math.sin(ze.h),e=Math.cos(ze.h);for(let t of zn){let n=t.x-ze.x,i=t.z-ze.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*e)/(r||1)>.3){Vt.punch(),t.hp--,t.hp<=0?(t.knock(s*2,e*2,!1),se.money+=Math.floor(Nt()*30)+5):t.flee(ze.x,ze.z);for(let o of zn)o!==t&&Math.hypot(o.x-t.x,o.z-t.z)<18&&o.flee(ze.x,ze.z);ys(.34,"bitka");return}}Vt.whoosh()}function Jd(s,e){let t=Ie?Ie.x:ze.x,n=Ie?Ie.z:ze.z;if(Oh-=s,Oh<=0){Oh=.35;let a=Fn?14:22,c=Fn?10:16,l=Math.round((Fn?16:26)*(Rn.zoneNow?1.6:1)),h=0,u=0;for(let f of Zt)f.driver==="ai"?h++:f.parked&&u++;h<a&&d1(t,n),u<c&&p1(t,n),zn.length<l&&sp(t,n,!1);for(let f of Zt.slice())f===Ie||f.keep||f.driver==="police"||Math.hypot(f.x-t,f.z-n)>230&&po(f);for(let f of zn.slice())(Math.hypot(f.x-t,f.z-n)>105||f.state==="down"&&f.t<0)&&m1(f)}let i=se.t;for(let a of Zt)a.ai&&a.driver!=="police"&&a.ai.update(s,Rn.obst(),i,Ie?null:ze,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of Zt){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,Je,Zt),c.impact>5&&c===Ie&&(Vt.crash(c.impact),nc(c.impact*.02))}for(let c=0;c<Zt.length;c++)for(let l=c+1;l<Zt.length;l++){let h=Zt[c],u=Zt[l],f=qd(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,h===Ie||u===Ie))){Vt.crash(f),nc(f*.025);let d=h===Ie?u:h;d.driver==="police"&&ys(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of Zt){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(Je,s),a.lights(Bt.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar&&Rn.flash(a),a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),D1(a),Vt.boom(),a===Ie&&(gr(),se.hp-=60,at.flash("#ff8a2a",.6));for(let c of zn)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==Ie&&!a.keep)){po(a);break}}for(let a of zn)if(a.update(s,Je),a.state!=="down")for(let c of Zt){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,p=f*h+d*u,v=f*u-d*h;if(Math.abs(p)<c.len/2+.3&&Math.abs(v)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),Vt.thud(),c===Ie&&(ys(1,"zrazen\xFD chodec"),nc(.15));for(let g of zn)g!==a&&Math.hypot(g.x-a.x,g.z-a.z)<25&&g.flee(a.x,a.z)}else c===Ie&&p>0&&p<9+l*.4&&Math.abs(v)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}O1(s)}var I1=new Xt(.6,.6,.6),N1=new nn({color:16777215,transparent:!0,blending:wi,depthWrite:!1}),dp=220,Ci=new wn(I1,N1,dp);Ci.frustumCulled=!1;Ci.count=0;Qt.add(Ci);var ho=[];function D1(s){np.push({car:s,t:0})}var $d=new ot,U1=new tn,z1=new D,F1=new D,Qd=new Oe;function O1(s){for(let t of np)if(!(!Zt.includes(t.car)||t.car.burn<-18))for(let n=0;n<3;n++)ho.length<dp&&ho.push({x:t.car.x+(Nt()-.5)*2,y:t.car.y+1.2,z:t.car.z+(Nt()-.5)*3,vy:2+Nt()*3,t:0,life:.6+Nt()*.9});let e=0;for(let t=ho.length-1;t>=0;t--){let n=ho[t];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){ho.splice(t,1);continue}let i=n.t/n.life;$d.compose(F1.set(n.x,n.y,n.z),U1,z1.setScalar(1+i*1.5)),Ci.setMatrixAt(e,$d),Qd.setRGB(mt(4,.3,i),mt(1.8,.25,i),mt(.3,.22,i)),Ci.setColorAt(e,Qd),e++}Ci.count=e,Ci.instanceMatrix.needsUpdate=!0,Ci.instanceColor&&(Ci.instanceColor.needsUpdate=!0)}var kh=0;function B1(s){if(di){se.wanted=0,se.heat=0,se.hp=100;return}let e=Ie?Ie.x:ze.x,t=Ie?Ie.z:ze.z,n=[0,1,2,3,4,6][se.wanted];kh-=s,On.length<n&&kh<=0&&(g1(e,t),kh=3);let i=!1;for(let r of On.slice()){if(!r.ai)continue;r.ai.update(s,Rn.obst(),se.t,null,{x:e,z:t});let o=Math.hypot(r.x-e,r.z-t);o<80&&(i=!0),(o>320||se.wanted===0&&o>90)&&po(r)}if(se.wanted>0?(se.coolT=(se.coolT||0)+s*(i?.25:1),se.coolT>22&&(se.wanted--,se.heat=se.wanted,se.coolT=0,at.toast(se.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(se.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):se.heat=Math.max(0,se.heat-s*.02),se.wanted>0&&se.mode==="play"){let r=!1;for(let a of On)Math.hypot(a.x-e,a.z-t)<(Ie?7.5:6)&&a.speed<6&&(r=!0);let o=Ie?Ie.speed<1.5:!0;se.bustT=r&&o?(se.bustT||0)+s:0,se.bustT>(Ie?2.5:1.2)&&(se.bustT=0,op("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var gs=0;function nc(s){gs=Math.min(.6,gs+s)}function k1(s){let e=se.portrait;bt.camDrag>0&&(bt.camDrag-=s),at.look.dx&&(bt.camDX+=at.look.dx,at.look.dx=0,bt.camDrag=1.5);let t,n,i,r,o,a;if(Ie){let d=Ie,v=d.fwd<-2?d.h:d.h+Math.PI;bt.camDrag>0?se.camYaw+=bt.camDX:se.camYaw+=ti(v-se.camYaw)*pt(s*3.2,0,1),bt.camDX=0,r=(e?11.5:8.6)+pt(d.speed*.09,0,4),o=e?4.6:3.3,t=d.x,i=d.z,n=d.y+1.3,a=2.2}else bt.camDrag>0?se.camYaw+=bt.camDX:Math.hypot(bt.mx,bt.my)>.2&&bt.my>-.3&&(se.camYaw+=ti(ze.h+Math.PI-se.camYaw)*pt(s*1.4,0,1)),bt.camDX=0,r=e?6.8:5,o=e?2.9:2.1,t=ze.x,i=ze.z,n=ze.y+1.45,a=1;let c=t+Math.sin(se.camYaw)*r,l=i+Math.cos(se.camYaw)*r,h=Je.rayHit(t,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=t+(c-t)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),Je.surfaceY(c,l,n+5)+1.2);Fh.set(c,u,l),jd||(Bh.copy(Fh),jd=!0),Bh.lerp(Fh,pt(s*(Ie?6:8),0,1));let f=Ie?e?9:4:e?4.5:1.5;if(Kd.set(t-Math.sin(se.camYaw)*f,n+a*.4+(e?.6:0),i-Math.cos(se.camYaw)*f),pn.position.copy(Bh),gs>0&&(pn.position.x+=(Nt()-.5)*gs,pn.position.y+=(Nt()-.5)*gs,gs=Math.max(0,gs-s*1.5)),pn.lookAt(Kd),xo.position.copy(pn.position),qh(t,i),Ie&&Bt.uNight.value>.2){let d=Ie;ms.intensity=60*Bt.uNight.value,ms.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),ms.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),ms.target.updateMatrixWorld()}else ms.intensity=0}var Hh=0;function H1(s){Hh-=s;let e=Ie?Ie.x:ze.x,t=Ie?Ie.z:ze.z;Hh<=0&&(Hh=.25,se.street=Je.streetAt(e,t)||(Je.onDeck(e,t,(Ie||ze).y+1)?"Most":""),se.district=M1(e,t));let n=null;se.mission&&(n=se.mission.goal()),at.update(se,{px:e,pz:t,h:Ie?Ie.h:ze.h,yaw:se.camYaw,speed:Ie?Ie.speed*3.6:null,goal:n,goalText:se.mission?se.mission.text:di?"Vo\u013En\xE1 jazda po Bratislave"+Rn.goalText():"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body"+Rn.goalText(),markers:[...(di?[]:[mo(It.contacts,e,t)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!se.mission})),...(di?[]:[mo(It.races,e,t)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!se.mission}))],police:On.map(i=>({x:i.x,z:i.z})),inCar:!!Ie,nearCar:!Ie&&!!Vh(3.6)},Je)}A1().catch(s=>{console.error(s),at.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
