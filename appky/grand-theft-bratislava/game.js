(()=>{var dp=Object.create;var Yh=Object.defineProperty;var pp=Object.getOwnPropertyDescriptor;var mp=Object.getOwnPropertyNames;var gp=Object.getPrototypeOf,xp=Object.prototype.hasOwnProperty;var vp=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var _p=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of mp(e))!xp.call(s,i)&&i!==t&&Yh(s,i,{get:()=>e[i],enumerable:!(n=pp(e,i))||n.enumerable});return s};var yp=(s,e,t)=>(t=s!=null?dp(gp(s)):{},_p(e||!s||!s.__esModule?Yh(t,"default",{value:s,enumerable:!0}):t,s));var ld=vp((k1,jl)=>{"use strict";jl.exports=ka;jl.exports.default=ka;function ka(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=od(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=by(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Yr(r,o,t,a,c,d,0),o}function od(s,e,t,n,i){var r,o;if(i===Kl(s,e,t,n)>0)for(r=e;r<t;r+=n)o=rd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=rd(r,s[r],s[r+1],o);return o&&Ha(o,o.next)&&(Kr(o),o=o.next),o}function hs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Ha(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(s,e,t,n,i,r,o){if(s){!o&&r&&Ay(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?_y(s,n,i,r):vy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Kr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=yy(hs(s),e,t),Yr(s,e,t,n,i,r,2)):o===2&&My(s,e,t,n,i,r):Yr(hs(s),e,t,n,i,r,1);break}}}}function vy(s){var e=s.prev,t=s,n=s.next;if(Yt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&cr(i,a,r,c,o,l,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _y(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Yt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Yl(d,p,e,t,n),_=Yl(x,g,e,t,n),v=s.prevZ,M=s.nextZ;v&&v.z>=m&&M&&M.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&cr(a,h,c,u,l,f,v.x,v.y)&&Yt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&cr(a,h,c,u,l,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&cr(a,h,c,u,l,f,v.x,v.y)&&Yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&cr(a,h,c,u,l,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yy(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Ha(i,r)&&ad(i,n,n.next,r)&&Zr(i,r)&&Zr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Kr(n),Kr(n.next),n=s=r),n=n.next}while(n!==s);return hs(n)}function My(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Py(o,a)){var c=cd(o,a);o=hs(o,o.next),c=hs(c,c.next),Yr(o,e,t,n,i,r,0),Yr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function by(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=od(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Cy(l));for(i.sort(Sy),r=0;r<i.length;r++)t=wy(i[r],t);return t}function Sy(s,e){return s.x-e.x}function wy(s,e){var t=Ey(s,e);if(!t)return e;var n=cd(t,s);return hs(n,n.next),hs(t,t.next)}function Ey(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&cr(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Zr(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Ty(o,t)))&&(o=t,u=f)),t=t.next;while(t!==c);return o}function Ty(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function Ay(s,e,t,n){var i=s;do i.z===0&&(i.z=Yl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ry(i)}function Ry(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Yl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Cy(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Py(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ly(s,e)&&(Zr(s,e)&&Zr(e,s)&&Iy(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||Ha(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ha(s,e){return s.x===e.x&&s.y===e.y}function ad(s,e,t,n){var i=Ba(Yt(s,e,t)),r=Ba(Yt(s,e,n)),o=Ba(Yt(t,n,s)),a=Ba(Yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oa(s,t,e)||r===0&&Oa(s,n,e)||o===0&&Oa(t,s,n)||a===0&&Oa(t,e,n))}function Oa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ba(s){return s>0?1:s<0?-1:0}function Ly(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zr(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function Iy(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cd(s,e){var t=new Zl(s.i,s.x,s.y),n=new Zl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rd(s,e,t,n){var i=new Zl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ka.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(Kl(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs(Kl(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Kl(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}ka.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t}});var Ul="160";var Mp=0,Zh=1,bp=2;var La=1,Sp=2,gi=3,si=0,un=1,Wt=2;var Ui=0,Gs=1,yi=2,Kh=3,jh=4,wp=5,Qi=100,Ep=101,Tp=102,Jh=103,$h=104,Ap=200,Rp=201,Cp=202,Pp=203,Wc=204,Xc=205,Lp=206,Ip=207,Np=208,Dp=209,Up=210,zp=211,Fp=212,Op=213,Bp=214,kp=0,Hp=1,Gp=2,Wo=3,Vp=4,Wp=5,Xp=6,qp=7,zl=0,Yp=1,Zp=2,zi=0,Kp=1,jp=2,Jp=3,$p=4,Qp=5,em=6,Qh="attached",tm="detached",Df=300,Xs=301,qs=302,qc=303,Yc=304,Ia=306,ss=1e3,Dn=1001,Cr=1002,jt=1003,Xo=1004;var Mr=1005;var Jt=1006,Fl=1007;var Wn=1008;var ii=1009,nm=1010,im=1011,Ol=1012,Uf=1013,Ni=1014,vi=1015,rs=1016,zf=1017,Ff=1018,ts=1020,sm=1021,Gn=1023,rm=1024,om=1025,ns=1026,Ys=1027,am=1028,Of=1029,cm=1030,Bf=1031,kf=1033,cc=33776,lc=33777,hc=33778,uc=33779,eu=35840,tu=35841,nu=35842,iu=35843,Hf=36196,su=37492,ru=37496,ou=37808,au=37809,cu=37810,lu=37811,hu=37812,uu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,xu=37819,vu=37820,_u=37821,fc=36492,yu=36494,Mu=36495,lm=36283,bu=36284,Su=36285,wu=36286,Na=2200,hm=2201,um=2202,Zs=2300,os=2301,dc=2302,zs=2400,Fs=2401,qo=2402,Bl=2500,fm=2501,Gf=0,Da=1,qr=2,Vf=3e3,is=3001,dm=3200,pm=3201,kl=0,mm=1,Mn="",It="srgb",on="srgb-linear",Hl="display-p3",Ua="display-p3-linear",Yo="linear",kt="srgb",Zo="rec709",Ko="p3";var _s=7680;var Eu=519,gm=512,xm=513,vm=514,Wf=515,_m=516,ym=517,Mm=518,bm=519,Zc=35044;var jo="300 es",Kc=1035,_i=2e3,Jo=2001,Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,br=Math.PI/180,Ks=180/Math.PI;function Vn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function sn(s,e,t){return Math.max(e,Math.min(t,s))}function Gl(s,e){return(s%e+e)%e}function Sm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wm(s,e,t){return s!==e?(t-s)/(e-s):0}function Sr(s,e,t){return(1-t)*s+t*e}function Em(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}function Tm(s,e=1){return e-Math.abs(Gl(s,e*2)-e)}function Am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Rm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Pm(s,e){return s+Math.random()*(e-s)}function Lm(s){return s*(.5-Math.random())}function Im(s){s!==void 0&&(Tu=s);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(s){return s*br}function Dm(s){return s*Ks}function jc(s){return(s&s-1)===0&&s!==0}function Um(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $o(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Xf={DEG2RAD:br,RAD2DEG:Ks,generateUUID:Vn,clamp:sn,euclideanModulo:Gl,mapLinear:Sm,inverseLerp:wm,lerp:Sr,damp:Em,pingpong:Tm,smoothstep:Am,smootherstep:Rm,randInt:Cm,randFloat:Pm,randFloatSpread:Lm,seededRandom:Im,degToRad:Nm,radToDeg:Dm,isPowerOfTwo:jc,ceilPowerOfTwo:Um,floorPowerOfTwo:$o,setQuaternionFromProperEuler:zm,normalize:Ut,denormalize:ni},be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],M=i[7],S=i[2],b=i[5],E=i[8];return r[0]=o*x+a*_+c*S,r[3]=o*g+a*v+c*b,r[6]=o*m+a*M+c*E,r[1]=l*x+h*_+u*S,r[4]=l*g+h*v+u*b,r[7]=l*m+h*M+u*E,r[2]=f*x+d*_+p*S,r[5]=f*g+d*v+p*b,r[8]=f*m+d*M+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pc=new yt;function qf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fm(){let s=Pr("canvas");return s.style.display="block",s}var Au={};function wr(s){s in Au||(Au[s]=!0,console.warn(s))}var Ru=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cu=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[on]:{transfer:Yo,primaries:Zo,toReference:s=>s,fromReference:s=>s},[It]:{transfer:kt,primaries:Zo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ua]:{transfer:Yo,primaries:Ko,toReference:s=>s.applyMatrix3(Cu),fromReference:s=>s.applyMatrix3(Ru)},[Hl]:{transfer:kt,primaries:Ko,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Cu),fromReference:s=>s.applyMatrix3(Ru).convertLinearToSRGB()}},Om=new Set([on,Ua]),Pt={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Om.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=fo[e].toReference,i=fo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return fo[s].primaries},getTransfer:function(s){return s===Mn?Yo:fo[s].transfer}};function Vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ys,Qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Pr("canvas")),ys.width=e.width,ys.height=e.height;let n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bm=0,ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gc(i[o].image)):r.push(gc(i[o]))}else r=gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var km=0,an=class s extends Mi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Dn,i=Dn,r=Jt,o=Wn,a=Gn,c=ii,l=s.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Vn(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===is?It:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?is:Vf}set encoding(e){wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?It:Mn}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Df;an.DEFAULT_ANISOTROPY=1;var At=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(d+1)/2,S=(m+1)/2,b=(h+f)/4,E=(u+x)/4,C=(p+g)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=C/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?It:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Jc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $c=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let S=Math.sqrt(v),b=Math.atan2(S,m*_);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S}let M=a*_;if(c=c*g+f*M,l=l*g+d*M,h=h*g+p*M,u=u*g+x*M,g===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xc=new D,Pu=new en,$t=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),mo.subVectors(this.max,pr),Ms.subVectors(e.a,pr),bs.subVectors(e.b,pr),Ss.subVectors(e.c,pr),Ri.subVectors(bs,Ms),Ci.subVectors(Ss,bs),Zi.subVectors(Ms,Ss);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Zi.y,Zi.x,0];return!vc(t,Ms,bs,Ss,mo)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,Ms,bs,Ss,mo))?!1:(go.crossVectors(Ri,Ci),t=[go.x,go.y,go.z],vc(t,Ms,bs,Ss,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,po=new $t,Ms=new D,bs=new D,Ss=new D,Ri=new D,Ci=new D,Zi=new D,pr=new D,mo=new D,go=new D,Ki=new D;function vc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ki.fromArray(s,r);let a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Hm=new $t,mr=new D,_c=new D,Un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(_c)),this.expandByPoint(mr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new D,yc=new D,xo=new D,Pi=new D,Mc=new D,vo=new D,bc=new D,js=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Pi.dot(this.direction),c=-Pi.dot(xo),l=Pi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yc).addScaledVector(xo,f),d}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){Mc.subVectors(t,e),vo.subVectors(n,e),bc.crossVectors(Mc,vo);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let c=a*this.direction.dot(vo.crossVectors(Pi,vo));if(c<0)return null;let l=a*this.direction.dot(Mc.cross(Pi));if(l<0||c+l>o)return null;let h=-a*Pi.dot(bc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Vm)}lookAt(e,t,n){let i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Li.crossVectors(n,In),Li.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Li.crossVectors(n,In)),Li.normalize(),_o.crossVectors(In,Li),i[0]=Li.x,i[4]=_o.x,i[8]=In.x,i[1]=Li.y,i[5]=_o.y,i[9]=In.y,i[2]=Li.z,i[6]=_o.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],M=n[11],S=n[15],b=i[0],E=i[4],C=i[8],y=i[12],T=i[1],N=i[5],I=i[9],k=i[13],P=i[2],L=i[6],H=i[10],j=i[14],$=i[3],K=i[7],Z=i[11],te=i[15];return r[0]=o*b+a*T+c*P+l*$,r[4]=o*E+a*N+c*L+l*K,r[8]=o*C+a*I+c*H+l*Z,r[12]=o*y+a*k+c*j+l*te,r[1]=h*b+u*T+f*P+d*$,r[5]=h*E+u*N+f*L+d*K,r[9]=h*C+u*I+f*H+d*Z,r[13]=h*y+u*k+f*j+d*te,r[2]=p*b+x*T+g*P+m*$,r[6]=p*E+x*N+g*L+m*K,r[10]=p*C+x*I+g*H+m*Z,r[14]=p*y+x*k+g*j+m*te,r[3]=_*b+v*T+M*P+S*$,r[7]=_*E+v*N+M*L+S*K,r[11]=_*C+v*I+M*H+S*Z,r[15]=_*y+v*k+M*j+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*l-x*f*l+x*c*d-a*g*d-u*c*m+a*f*m,v=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,M=h*x*l-p*u*l+p*a*d-o*x*d-h*a*m+o*u*m,S=p*u*c-h*x*c-p*a*f+o*x*f+h*a*g-o*u*g,b=t*_+n*v+i*M+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=_*E,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*E,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*m+n*c*m)*E,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,e[4]=v*E,e[5]=(h*g*r-p*f*r+p*i*d-t*g*d-h*i*m+t*f*m)*E,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*E,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*E,e[8]=M*E,e[9]=(p*u*r-h*x*r-p*n*d+t*x*d+h*n*m-t*u*m)*E,e[10]=(o*x*r-p*a*r+p*n*l-t*x*l-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*E,e[12]=S*E,e[13]=(h*x*i-p*u*i+p*n*f-t*x*f-h*n*g+t*u*g)*E,e[14]=(p*a*i-o*x*i-p*n*c+t*x*c+o*n*g-t*a*g)*E,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=c*l,v=c*h,M=c*u,S=n.x,b=n.y,E=n.z;return i[0]=(1-(x+m))*S,i[1]=(d+M)*S,i[2]=(p-v)*S,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(f+m))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(p+v)*E,i[9]=(g-_)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ws.set(i[0],i[1],i[2]).length(),o=ws.set(i[4],i[5],i[6]).length(),a=ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);let l=1/r,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=_i){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,p;if(a===_i)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Jo)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=_i){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,p,x;if(a===_i)p=(o+r)*u,x=-2*u;else if(a===Jo)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ws=new D,jn=new rt,Gm=new D(0,0,0),Vm=new D(1,1,1),Li=new D,_o=new D,In=new D,Lu=new rt,Iu=new en,na=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};na.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,Nu=new D,Es=new en,fi=new rt,yo=new D,gr=new D,Xm=new D,qm=new en,Du=new D(1,0,0),Uu=new D(0,1,0),zu=new D(0,0,1),Ym={type:"added"},Zm={type:"removed"},Ht=class s extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new na,n=new en,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new yt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(gr,yo,this.up):fi.lookAt(yo,gr,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(fi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new D,di=new D,Sc=new D,pi=new D,Ts=new D,As=new D,Fu=new D,wc=new D,Ec=new D,Tc=new D,Mo=!1,Os=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),di.subVectors(n,t),Sc.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(di),c=Jn.dot(Sc),l=di.dot(di),h=di.dot(Sc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,n,i,r,o,a,c){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),di.subVectors(e,t),Jn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Jn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ts.subVectors(i,n),As.subVectors(r,n),wc.subVectors(e,n);let c=Ts.dot(wc),l=As.dot(wc);if(c<=0&&l<=0)return t.copy(n);Ec.subVectors(e,i);let h=Ts.dot(Ec),u=As.dot(Ec);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ts,o);Tc.subVectors(e,r);let d=Ts.dot(Tc),p=As.dot(Tc);if(p>=0&&d<=p)return t.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(As,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Fu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Fu,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Gl(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Pt.fromWorkingColorSpace(xn.copy(this),e),Math.round(sn(xn.r*255,0,255))*65536+Math.round(sn(xn.g*255,0,255))*256+Math.round(sn(xn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,r=xn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=It){Pt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(bo);let n=Sr(Ii.h,bo.h,t),i=Sr(Ii.s,bo.s,t),r=Sr(Ii.l,bo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Be;Be.NAMES=Yf;var Km=0,Cn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Gs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new D,So=new be,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var sa=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ra=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var jm=0,Hn=new rt,Rc=new Ht,Rs=new D,Nn=new $t,xr=new $t,hn=new D,Rt=class s extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?ra:sa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Nn.min,xr.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,xr.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(xr.min),Nn.expandByPoint(xr.max))}Nn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(e,l),hn.add(Rs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new D,h[T]=new D;let u=new D,f=new D,d=new D,p=new be,x=new be,g=new be,m=new D,_=new D;function v(T,N,I){u.fromArray(i,T*3),f.fromArray(i,N*3),d.fromArray(i,I*3),p.fromArray(o,T*2),x.fromArray(o,N*2),g.fromArray(o,I*2),f.sub(u),d.sub(u),x.sub(p),g.sub(p);let k=1/(x.x*g.y-g.x*x.y);isFinite(k)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(k),_.copy(d).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(k),l[T].add(m),l[N].add(m),l[I].add(m),h[T].add(_),h[N].add(_),h[I].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,N=M.length;T<N;++T){let I=M[T],k=I.start,P=I.count;for(let L=k,H=k+P;L<H;L+=3)v(n[L+0],n[L+1],n[L+2])}let S=new D,b=new D,E=new D,C=new D;function y(T){E.fromArray(r,T*3),C.copy(E);let N=l[T];S.copy(N),S.sub(E.multiplyScalar(E.dot(N))).normalize(),b.crossVectors(C,N);let k=b.dot(h[T])<0?-1:1;c[T*4]=S.x,c[T*4+1]=S.y,c[T*4+2]=S.z,c[T*4+3]=k}for(let T=0,N=M.length;T<N;++T){let I=M[T],k=I.start,P=I.count;for(let L=k,H=k+P;L<H;L+=3)y(n[L+0]),y(n[L+1]),y(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Ft(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new rt,ji=new js,wo=new Un,Bu=new D,Cs=new D,Ps=new D,Ls=new D,Cc=new D,Eo=new D,To=new be,Ao=new be,Ro=new be,ku=new D,Hu=new D,Gu=new D,Co=new D,Po=new D,Ye=class extends Ht{constructor(e=new Rt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,e),o?Eo.addScaledVector(Cc,h):Eo.addScaledVector(Cc.sub(t),h))}t.add(Eo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(wo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(wo,Bu)===null||ji.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,S=v;M<S;M+=3){let b=a.getX(M),E=a.getX(M+1),C=a.getX(M+2);i=Lo(this,m,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);i=Lo(this,o,e,n,l,h,u,_,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,S=v;M<S;M+=3){let b=M,E=M+1,C=M+2;i=Lo(this,m,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,M=g+2;i=Lo(this,o,e,n,l,h,u,_,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Jm(s,e,t,n,i,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===si,a),c===null)return null;Po.copy(a),Po.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:s}}function Lo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Cs),s.getVertexPosition(c,Ps),s.getVertexPosition(l,Ls);let h=Jm(s,e,t,n,Cs,Ps,Ls,Co);if(h){i&&(To.fromBufferAttribute(i,a),Ao.fromBufferAttribute(i,c),Ro.fromBufferAttribute(i,l),h.uv=Os.getInterpolation(Co,Cs,Ps,Ls,To,Ao,Ro,new be)),r&&(To.fromBufferAttribute(r,a),Ao.fromBufferAttribute(r,c),Ro.fromBufferAttribute(r,l),h.uv1=Os.getInterpolation(Co,Cs,Ps,Ls,To,Ao,Ro,new be),h.uv2=h.uv1),o&&(ku.fromBufferAttribute(o,a),Hu.fromBufferAttribute(o,c),Gu.fromBufferAttribute(o,l),h.normal=Os.getInterpolation(Co,Cs,Ps,Ls,ku,Hu,Gu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Os.getNormal(Cs,Ps,Ls,u.normal),h.face=u}return h}var Xt=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function p(x,g,m,_,v,M,S,b,E,C,y){let T=M/E,N=S/C,I=M/2,k=S/2,P=b/2,L=E+1,H=C+1,j=0,$=0,K=new D;for(let Z=0;Z<H;Z++){let te=Z*N-k;for(let oe=0;oe<L;oe++){let X=oe*T-I;K[x]=X*_,K[g]=te*v,K[m]=P,l.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[m]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/E),u.push(1-Z/C),j+=1}}for(let Z=0;Z<C;Z++)for(let te=0;te<E;te++){let oe=f+te+L*Z,X=f+te+L*(Z+1),ee=f+(te+1)+L*(Z+1),ue=f+(te+1)+L*Z;c.push(oe,X,ue),c.push(X,ee,ue),$+=6}a.addGroup(d,$,y),d+=$,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(s){let e={};for(let t=0;t<s.length;t++){let n=Js(s[t]);for(let i in n)e[i]=n[i]}return e}function $m(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zf(s){return s.getRenderTarget()===null?s.outputColorSpace:Pt.workingColorSpace}var Qm={clone:Js,merge:yn},e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$s=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends $s{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ns=1,Qc=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(Is,Ns,e,t);i.layers=this.layers,this.add(i);let r=new rn(Is,Ns,e,t);r.layers=this.layers,this.add(r);let o=new rn(Is,Ns,e,t);o.layers=this.layers,this.add(o);let a=new rn(Is,Ns,e,t);a.layers=this.layers,this.add(a);let c=new rn(Is,Ns,e,t);c.layers=this.layers,this.add(c);let l=new rn(Is,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oa=class extends an{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===is?It:Mn),this.texture=new oa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ui});r.uniforms.tEquirect.value=t;let o=new Ye(i,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Jt),new Qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Pc=new D,n0=new D,i0=new yt,xi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Pc.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i0.getNormalMatrix(e),i=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Un,Io=new D,Lr=class{constructor(e=new xi,t=new xi,n=new xi,i=new xi,r=new xi,o=new xi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,g-d,M-m).normalize(),n[1].setComponents(c+r,f+l,g+d,M+m).normalize(),n[2].setComponents(c+o,f+h,g+p,M+_).normalize(),n[3].setComponents(c-o,f-h,g-p,M-_).normalize(),n[4].setComponents(c-a,f-u,g-x,M-v).normalize(),t===_i)n[5].setComponents(c+a,f+u,g+x,M+v).normalize();else if(t===Jo)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Io.x=i.normal.x>0?e.max.x:e.min.x,Io.y=i.normal.y>0?e.max.y:e.min.y,Io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function s0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,p=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&p.length===0&&s.bufferSubData(u,0,f),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];t?s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var bi=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let v=0;v<l;v++){let M=v*u-r;p.push(M,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let v=_+l*m,M=_+l*(m+1),S=_+1+l*(m+1),b=_+1+l*m;d.push(v,M,b),d.push(M,S,b)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#endif`,sg=`struct PhysicalMaterial {
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
}`,rg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mg=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,wx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:c0,alphatest_fragment:l0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:f0,batching_pars_vertex:d0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:v0,bumpmap_pars_fragment:_0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:S0,color_fragment:w0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:L0,displacementmap_vertex:I0,emissivemap_fragment:N0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:z0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:H0,fog_vertex:G0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_fragment:Y0,lightmap_pars_fragment:Z0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:j0,lights_pars_begin:J0,lights_toon_fragment:Q0,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:sg,lights_fragment_begin:rg,lights_fragment_maps:og,lights_fragment_end:ag,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:ug,map_fragment:fg,map_pars_fragment:dg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:xg,morphcolor_vertex:vg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:Mg,normal_fragment_begin:bg,normal_fragment_maps:Sg,normal_pars_fragment:wg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Lg,opaque_fragment:Ig,packing:Ng,premultiplied_alpha_fragment:Dg,project_vertex:Ug,dithering_fragment:zg,dithering_pars_fragment:Fg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:jg,tonemapping_pars_fragment:Jg,transmission_fragment:$g,transmission_pars_fragment:Qg,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:cx,cube_frag:lx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:fx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:_x,meshlambert_vert:yx,meshlambert_frag:Mx,meshmatcap_vert:bx,meshmatcap_frag:Sx,meshnormal_vert:wx,meshnormal_frag:Ex,meshphong_vert:Tx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Ix,points_frag:Nx,shadow_vert:Dx,shadow_frag:Ux,sprite_vert:zx,sprite_frag:Fx},Ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ti={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ti.physical={uniforms:yn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var No={r:0,b:0,g:0};function Ox(s,e,t,n,i,r,o){let a=new Be(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(g,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ia)?(h===void 0&&(h=new Ye(new Xt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(v.colorSpace)!==kt,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new bi(2,2),new bn({name:"BackgroundMaterial",uniforms:Js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Pt.getTransfer(v.colorSpace)!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,m){g.getRGB(No,Zf(s)),n.buffers.color.setClear(No.r,No.g,No.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(a,c)},render:p}}function Bx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(P,L,H,j,$){let K=!1;if(o){let Z=x(j,H,L);l!==Z&&(l=Z,d(l.object)),K=m(P,j,H,$),K&&_(P,j,H,$)}else{let Z=L.wireframe===!0;(l.geometry!==j.id||l.program!==H.id||l.wireframe!==Z)&&(l.geometry=j.id,l.program=H.id,l.wireframe=Z,K=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,C(P,L,H,j),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function p(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,L,H){let j=H.wireframe===!0,$=a[P.id];$===void 0&&($={},a[P.id]=$);let K=$[L.id];K===void 0&&(K={},$[L.id]=K);let Z=K[j];return Z===void 0&&(Z=g(f()),K[j]=Z),Z}function g(P){let L=[],H=[],j=[];for(let $=0;$<i;$++)L[$]=0,H[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:j,object:P,attributes:{},index:null}}function m(P,L,H,j){let $=l.attributes,K=L.attributes,Z=0,te=H.getAttributes();for(let oe in te)if(te[oe].location>=0){let ee=$[oe],ue=K[oe];if(ue===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;Z++}return l.attributesNum!==Z||l.index!==j}function _(P,L,H,j){let $={},K=L.attributes,Z=0,te=H.getAttributes();for(let oe in te)if(te[oe].location>=0){let ee=K[oe];ee===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),$[oe]=ue,Z++}l.attributes=$,l.attributesNum=Z,l.index=j}function v(){let P=l.newAttributes;for(let L=0,H=P.length;L<H;L++)P[L]=0}function M(P){S(P,0)}function S(P,L){let H=l.newAttributes,j=l.enabledAttributes,$=l.attributeDivisors;H[P]=1,j[P]===0&&(s.enableVertexAttribArray(P),j[P]=1),$[P]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),$[P]=L)}function b(){let P=l.newAttributes,L=l.enabledAttributes;for(let H=0,j=L.length;H<j;H++)L[H]!==P[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function E(P,L,H,j,$,K,Z){Z===!0?s.vertexAttribIPointer(P,L,H,$,K):s.vertexAttribPointer(P,L,H,j,$,K)}function C(P,L,H,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=j.attributes,K=H.getAttributes(),Z=L.defaultAttributeValues;for(let te in K){let oe=K[te];if(oe.location>=0){let X=$[te];if(X===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let ee=X.normalized,ue=X.itemSize,pe=t.get(X);if(pe===void 0)continue;let ae=pe.buffer,xe=pe.type,Ne=pe.bytesPerElement,Pe=n.isWebGL2===!0&&(xe===s.INT||xe===s.UNSIGNED_INT||X.gpuType===Uf);if(X.isInterleavedBufferAttribute){let fe=X.data,O=fe.stride,Ee=X.offset;if(fe.isInstancedInterleavedBuffer){for(let ce=0;ce<oe.locationSize;ce++)S(oe.location+ce,fe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ce=0;ce<oe.locationSize;ce++)M(oe.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ce=0;ce<oe.locationSize;ce++)E(oe.location+ce,ue/oe.locationSize,xe,ee,O*Ne,(Ee+ue/oe.locationSize*ce)*Ne,Pe)}else{if(X.isInstancedBufferAttribute){for(let fe=0;fe<oe.locationSize;fe++)S(oe.location+fe,X.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let fe=0;fe<oe.locationSize;fe++)M(oe.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let fe=0;fe<oe.locationSize;fe++)E(oe.location+fe,ue/oe.locationSize,xe,ee,ue*Ne,ue/oe.locationSize*fe*Ne,Pe)}}else if(Z!==void 0){let ee=Z[te];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(oe.location,ee);break;case 3:s.vertexAttrib3fv(oe.location,ee);break;case 4:s.vertexAttrib4fv(oe.location,ee);break;default:s.vertexAttrib1fv(oe.location,ee)}}}}b()}function y(){I();for(let P in a){let L=a[P];for(let H in L){let j=L[H];for(let $ in j)p(j[$].object),delete j[$];delete L[H]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;let L=a[P.id];for(let H in L){let j=L[H];for(let $ in j)p(j[$].object),delete j[$];delete L[H]}delete a[P.id]}function N(P){for(let L in a){let H=a[L];if(H[P.id]===void 0)continue;let j=H[P.id];for(let $ in j)p(j[$].object),delete j[$];delete H[P.id]}}function I(){k(),h=!0,l!==c&&(l=c,d(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function kx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Hx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),S=v&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:b}}function Gx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new xi,a=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,M=m.clippingState||null;c.value=M,M=h(p,f,v,d);for(let S=0;S!==v;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,M=d;v!==x;++v,M+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Vx(s){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=Xs:a===Yc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new el(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=class extends $s{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,Vu=[.125,.215,.35,.446,.526,.582],es=20,Lc=new Qs,Wu=new Be,Ic=null,Nc=0,Dc=0,$i=(1+Math.sqrt(5))/2,Ds=1/$i,Xu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,$i,Ds),new D(0,$i,-Ds),new D(Ds,0,$i),new D(-Ds,0,$i),new D($i,Ds,0),new D(-$i,Ds,0)],aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Nc,Dc),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:rs,format:Gn,colorSpace:on,depthBuffer:!1},i=qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(r)),this._blurMaterial=Xx(r,e,t)}return i}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,i){let a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wu),h.toneMapping=zi,h.autoClear=!1;let d=new tn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new Ye(new Xt,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(Wu),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;Do(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xs||e.mapping===qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Do(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Xu[(i-1)%Xu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ye(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*es-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let m=[],_=0;for(let E=0;E<es;++E){let C=E/x,y=Math.exp(-C*C/2);m.push(y),E===0?_+=y:E<g&&(_+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let M=this._sizeLods[i],S=3*M*(i>v-Bs?i-v+Bs:0),b=4*(this._cubeSize-M);Do(t,S,b,3*M,2*M),c.setRenderTarget(t),c.render(u,Lc)}};function Wx(s){let e=[],t=[],n=[],i=s,r=s-Bs+1+Vu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Bs?c=Vu[o-s+Bs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),v=new Float32Array(g*p*d),M=new Float32Array(m*p*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,C=b>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(y,x*p*b),v.set(f,g*p*b);let T=[b,b,b,b,b,b];M.set(T,m*p*b)}let S=new Rt;S.setAttribute("position",new Ft(_,x)),S.setAttribute("uv",new Ft(v,g)),S.setAttribute("faceIndex",new Ft(M,m)),e.push(S),i>Bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qu(s,e,t){let n=new $n(s,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xx(s,e,t){let n=new Float32Array(es),i=new D(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Yu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Zu(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function qx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===qc||c===Yc,h=c===Xs||c===qs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new aa(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new aa(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,M=_.length;v<M;v+=3){let S=_[v+0],b=_[v+1],E=_[v+2];f.push(S,b,b,E,E,S)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,M=_.length/3-1;v<M;v+=3){let S=v+0,b=v+1,E=v+2;f.push(S,b,b,E,E,S)}}else return;let g=new(qf(f)?ra:sa)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Kx(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function u(d,p,x){if(x===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*c,x),t.update(p,r,x)}function f(d,p,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,a,d,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function jx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jx(s,e){return s[0]-e[0]}function $x(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Qx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==p){let P=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],C=0;_===!0&&(C=1),v===!0&&(C=2),M===!0&&(C=3);let y=h.attributes.position.count*C,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let N=new Float32Array(y*T*4*p),I=new ta(N,y,T,p);I.type=vi,I.needsUpdate=!0;let k=C*4;for(let L=0;L<p;L++){let H=S[L],j=b[L],$=E[L],K=y*T*4*L;for(let Z=0;Z<H.count;Z++){let te=Z*k;_===!0&&(o.fromBufferAttribute(H,Z),N[K+te+0]=o.x,N[K+te+1]=o.y,N[K+te+2]=o.z,N[K+te+3]=0),v===!0&&(o.fromBufferAttribute(j,Z),N[K+te+4]=o.x,N[K+te+5]=o.y,N[K+te+6]=o.z,N[K+te+7]=0),M===!0&&(o.fromBufferAttribute($,Z),N[K+te+8]=o.x,N[K+te+9]=o.y,N[K+te+10]=o.z,N[K+te+11]=$.itemSize===4?o.w:1)}}x={count:p,texture:I,size:new be(y,T)},r.set(h,x),h.addEventListener("dispose",P)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<d;v++){let M=p[v];M[0]=v,M[1]=f[v]}p.sort($x);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Jx);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let M=a[v],S=M[0],b=M[1];S!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+v)!==x[S]&&h.setAttribute("morphTarget"+v,x[S]),g&&h.getAttribute("morphNormal"+v)!==g[S]&&h.setAttribute("morphNormal"+v,g[S]),i[v]=b,m+=b):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ev(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ca=class extends an{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ns,h!==ns&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ni),n===void 0&&h===Ys&&(n=ts),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jf=new an,Jf=new ca(1,1);Jf.compareFunction=Wf;var $f=new ta,Qf=new $c,ed=new oa,Ku=[],ju=[],Ju=new Float32Array(16),$u=new Float32Array(9),Qu=new Float32Array(4);function ar(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ku[i];if(r===void 0&&(r=new Float32Array(i),Ku[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function za(s,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function tv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function rv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Qu.set(n),s.uniformMatrix2fv(this.addr,!1,Qu),ln(t,n)}}function ov(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;$u.set(n),s.uniformMatrix3fv(this.addr,!1,$u),ln(t,n)}}function av(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Ju.set(n),s.uniformMatrix4fv(this.addr,!1,Ju),ln(t,n)}}function cv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function uv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function fv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function mv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function gv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Jf:jf;t.setTexture2D(e||r,i)}function xv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qf,i)}function vv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function _v(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$f,i)}function yv(s){switch(s){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(s,e){s.uniform1fv(this.addr,e)}function bv(s,e){let t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function Sv(s,e){let t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function wv(s,e){let t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Ev(s,e){let t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tv(s,e){let t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Av(s,e){let t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Rv(s,e){s.uniform1iv(this.addr,e)}function Cv(s,e){s.uniform2iv(this.addr,e)}function Pv(s,e){s.uniform3iv(this.addr,e)}function Lv(s,e){s.uniform4iv(this.addr,e)}function Iv(s,e){s.uniform1uiv(this.addr,e)}function Nv(s,e){s.uniform2uiv(this.addr,e)}function Dv(s,e){s.uniform3uiv(this.addr,e)}function Uv(s,e){s.uniform4uiv(this.addr,e)}function zv(s,e,t){let n=this.cache,i=e.length,r=za(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jf,r[o])}function Fv(s,e,t){let n=this.cache,i=e.length,r=za(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qf,r[o])}function Ov(s,e,t){let n=this.cache,i=e.length,r=za(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ed,r[o])}function Bv(s,e,t){let n=this.cache,i=e.length,r=za(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$f,r[o])}function kv(s){switch(s){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Nv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function ef(s,e){s.seq.push(e),s.map[e.id]=e}function Hv(s,e,t){let n=s.name,i=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),o=Uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ef(t,l===void 0?new tl(a,s,e):new nl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new il(a),ef(t,u)),t=u}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Hv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function tf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Gv=37297,Vv=0;function Wv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xv(s){let e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(s),n;switch(e===t?n="":e===Ko&&t===Zo?n="LinearDisplayP3ToLinearSRGB":e===Zo&&t===Ko&&(n="LinearSRGBToLinearDisplayP3"),s){case on:case Ua:return[n,"LinearTransferOETF"];case It:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function nf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Wv(s.getShaderSource(e),o)}else return i}function qv(s,e){let t=Xv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yv(s,e){let t;switch(e){case Kp:t="Linear";break;case jp:t="Reinhard";break;case Jp:t="OptimizedCineon";break;case $p:t="ACESFilmic";break;case em:t="AgX";break;case Qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function Kv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ks).join(`
`)}function jv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ks(s){return s!==""}function sf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace($v,e_)}var Qv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e_(s,e){let t=gt[e];if(t===void 0){let n=Qv.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}var t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(s){return s.replace(t_,n_)}function n_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function af(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===La?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function s_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function o_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function a_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=i_(t),l=s_(t),h=r_(t),u=o_(t),f=a_(t),d=t.isWebGL2?"":Zv(t),p=Kv(t),x=jv(r),g=i.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ks).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ks).join(`
`),_.length>0&&(_+=`
`)):(m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),_=[d,af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?gt.tonemapping_pars_fragment:"",t.toneMapping!==zi?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=sl(o),o=sf(o,t),o=rf(o,t),a=sl(a),a=sf(a,t),a=rf(a,t),o=of(o),a=of(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+m+o,S=v+_+a,b=tf(i,i.VERTEX_SHADER,M),E=tf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(I){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(E).trim(),H=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{let $=nf(i,b,"vertex"),K=nf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+$+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||L==="")&&(j=!1);j&&(I.diagnostics={runnable:H,programLog:k,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:_}})}i.deleteShader(b),i.deleteShader(E),y=new Ws(i,g),T=Jv(i,g)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(g,Gv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var l_=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ol(e),t.set(e,n)),n}},ol=class{constructor(e){this.id=l_++,this.code=e,this.usedTimes=0}};function h_(s,e,t,n,i,r,o){let a=new ia,c=new rl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function g(y,T,N,I,k){let P=I.fog,L=k.geometry,H=y.isMeshStandardMaterial?I.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),$=j&&j.mapping===Ia?j.image.height:null,K=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=Z!==void 0?Z.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let X,ee,ue,pe;if(K){let U=ti[K];X=U.vertexShader,ee=U.fragmentShader}else X=y.vertexShader,ee=y.fragmentShader,c.update(y),ue=c.getVertexShaderID(y),pe=c.getFragmentShaderID(y);let ae=s.getRenderTarget(),xe=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,Pe=!!y.map,fe=!!y.matcap,O=!!j,Ee=!!y.aoMap,ce=!!y.lightMap,Me=!!y.bumpMap,he=!!y.normalMap,Xe=!!y.displacementMap,Fe=!!y.emissiveMap,R=!!y.metalnessMap,A=!!y.roughnessMap,Q=y.anisotropy>0,me=y.clearcoat>0,_e=y.iridescence>0,ve=y.sheen>0,qe=y.transmission>0,De=Q&&!!y.anisotropyMap,Ge=me&&!!y.clearcoatMap,le=me&&!!y.clearcoatNormalMap,ht=me&&!!y.clearcoatRoughnessMap,ge=_e&&!!y.iridescenceMap,Tt=_e&&!!y.iridescenceThicknessMap,pt=ve&&!!y.sheenColorMap,ct=ve&&!!y.sheenRoughnessMap,et=!!y.specularMap,We=!!y.specularColorMap,ft=!!y.specularIntensityMap,Ct=qe&&!!y.transmissionMap,Vt=qe&&!!y.thicknessMap,it=!!y.gradientMap,Te=!!y.alphaMap,G=y.alphaTest>0,Le=!!y.alphaHash,Ue=!!y.extensions,st=!!L.attributes.uv1,z=!!L.attributes.uv2,Y=!!L.attributes.uv3,F=zi;return y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(F=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,instancing:xe,instancingColor:xe&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:on,map:Pe,matcap:fe,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:$,aoMap:Ee,lightMap:ce,bumpMap:Me,normalMap:he,displacementMap:f&&Xe,emissiveMap:Fe,normalMapObjectSpace:he&&y.normalMapType===mm,normalMapTangentSpace:he&&y.normalMapType===kl,metalnessMap:R,roughnessMap:A,anisotropy:Q,anisotropyMap:De,clearcoat:me,clearcoatMap:Ge,clearcoatNormalMap:le,clearcoatRoughnessMap:ht,iridescence:_e,iridescenceMap:ge,iridescenceThicknessMap:Tt,sheen:ve,sheenColorMap:pt,sheenRoughnessMap:ct,specularMap:et,specularColorMap:We,specularIntensityMap:ft,transmission:qe,transmissionMap:Ct,thicknessMap:Vt,gradientMap:it,opaque:y.transparent===!1&&y.blending===Gs,alphaMap:Te,alphaTest:G,alphaHash:Le,combine:y.combine,mapUv:Pe&&x(y.map.channel),aoMapUv:Ee&&x(y.aoMap.channel),lightMapUv:ce&&x(y.lightMap.channel),bumpMapUv:Me&&x(y.bumpMap.channel),normalMapUv:he&&x(y.normalMap.channel),displacementMapUv:Xe&&x(y.displacementMap.channel),emissiveMapUv:Fe&&x(y.emissiveMap.channel),metalnessMapUv:R&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:De&&x(y.anisotropyMap.channel),clearcoatMapUv:Ge&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ct&&x(y.sheenRoughnessMap.channel),specularMapUv:et&&x(y.specularMap.channel),specularColorMapUv:We&&x(y.specularColorMap.channel),specularIntensityMapUv:ft&&x(y.specularIntensityMap.channel),transmissionMapUv:Ct&&x(y.transmissionMap.channel),thicknessMapUv:Vt&&x(y.thicknessMap.channel),alphaMapUv:Te&&x(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(he||Q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:z,vertexUv3s:Y,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(Pe||Te),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:F,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&Pt.getTransfer(y.map.colorSpace)===kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wt,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Ue&&y.extensions.derivatives===!0,extensionFragDepth:Ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(T,y),v(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){let T=p[y.type],N;if(T){let I=ti[T];N=Qm.clone(I.uniforms)}else N=y.uniforms;return N}function S(y,T){let N;for(let I=0,k=l.length;I<k;I++){let P=l[I];if(P.cacheKey===T){N=P,++N.usedTimes;break}}return N===void 0&&(N=new c_(s,T,y,r),l.push(N)),N}function b(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function E(y){c.remove(y)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function u_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,x,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||f_),n.length>1&&n.sort(f||cf),i.length>1&&i.sort(f||cf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function d_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new lf,s.set(n,[o])):i>=r.length?(o=new lf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function p_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function m_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var g_=0;function x_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v_(s,e){let t=new p_,n=m_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new rt,a=new rt;function c(h,u){let f=0,d=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let x=0,g=0,m=0,_=0,v=0,M=0,S=0,b=0,E=0,C=0,y=0;h.sort(x_);let T=u===!0?Math.PI:1;for(let I=0,k=h.length;I<k;I++){let P=h[I],L=P.color,H=P.intensity,j=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=L.r*H*T,d+=L.g*H*T,p+=L.b*H*T;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],H);y++}else if(P.isDirectionalLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let Z=P.shadow,te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.directionalShadow[x]=te,i.directionalShadowMap[x]=$,i.directionalShadowMatrix[x]=P.shadow.matrix,M++}i.directional[x]=K,x++}else if(P.isSpotLight){let K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(L).multiplyScalar(H*T),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[m]=K;let Z=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,Z.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[m]=Z.matrix,P.castShadow){let te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.spotShadow[m]=te,i.spotShadowMap[m]=$,b++}m++}else if(P.isRectAreaLight){let K=t.get(P);K.color.copy(L).multiplyScalar(H),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=K,_++}else if(P.isPointLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){let Z=P.shadow,te=n.get(P);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=K,g++}else if(P.isHemisphereLight){let K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(H*T),K.groundColor.copy(P.groundColor).multiplyScalar(H*T),i.hemi[v]=K,v++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let N=i.hash;(N.directionalLength!==x||N.pointLength!==g||N.spotLength!==m||N.rectAreaLength!==_||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==b||N.numSpotMaps!==E||N.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=y,N.directionalLength=x,N.pointLength=g,N.spotLength=m,N.rectAreaLength=_,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=b,N.numSpotMaps=E,N.numLightProbes=y,i.version=g_++)}function l(h,u){let f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let M=h[_];if(M.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function hf(s,e){let t=new v_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function __(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new hf(s,e),t.set(r,[c])):o>=a.length?(c=new hf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var al=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cl=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`;function b_(s,e,t){let n=new Lr,i=new be,r=new be,o=new At,a=new al({depthPacking:pm}),c=new cl,l={},h=t.maxTextureSize,u={[si]:un,[un]:si,[Wt]:Wt},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:y_,fragmentShader:M_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Rt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ye(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let m=this.type;this.render=function(b,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let y=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ui),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=m!==gi&&this.type===gi,P=m===gi&&this.type!==gi;for(let L=0,H=b.length;L<H;L++){let j=b[L],$=j.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let K=$.getFrameExtents();if(i.multiply(K),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,$.mapSize.y=r.y)),$.map===null||k===!0||P===!0){let te=this.type!==gi?{minFilter:jt,magFilter:jt}:{};$.map!==null&&$.map.dispose(),$.map=new $n(i.x,i.y,te),$.map.texture.name=j.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let Z=$.getViewportCount();for(let te=0;te<Z;te++){let oe=$.getViewport(te);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),I.viewport(o),$.updateMatrices(j,te),n=$.getFrustum(),M(E,C,$.camera,j,this.type)}$.isPointLightShadow!==!0&&this.type===gi&&_($,C),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(y,T,N)};function _(b,E){let C=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,d,x,null)}function v(b,E,C,y){let T=null,N=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)T=N;else if(T=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let I=T.uuid,k=E.uuid,P=l[I];P===void 0&&(P={},l[I]=P);let L=P[k];L===void 0&&(L=T.clone(),P[k]=L,E.addEventListener("dispose",S)),T=L}if(T.visible=E.visible,T.wireframe=E.wireframe,y===gi?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let I=s.properties.get(T);I.light=C}return T}function M(b,E,C,y,T){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===gi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let k=e.update(b),P=b.material;if(Array.isArray(P)){let L=k.groups;for(let H=0,j=L.length;H<j;H++){let $=L[H],K=P[$.materialIndex];if(K&&K.visible){let Z=v(b,K,y,T);b.onBeforeShadow(s,b,E,C,k,Z,$),s.renderBufferDirect(C,null,k,Z,b,$),b.onAfterShadow(s,b,E,C,k,Z,$)}}}else if(P.visible){let L=v(b,P,y,T);b.onBeforeShadow(s,b,E,C,k,L,null),s.renderBufferDirect(C,null,k,L,b,null),b.onAfterShadow(s,b,E,C,k,L,null)}}let I=b.children;for(let k=0,P=I.length;k<P;k++)M(I[k],E,C,y,T)}function S(b){b.target.removeEventListener("dispose",S);for(let C in l){let y=l[C],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function S_(s,e,t){let n=t.isWebGL2;function i(){let G=!1,Le=new At,Ue=null,st=new At(0,0,0,0);return{setMask:function(z){Ue!==z&&!G&&(s.colorMask(z,z,z,z),Ue=z)},setLocked:function(z){G=z},setClear:function(z,Y,F,ne,U){U===!0&&(z*=ne,Y*=ne,F*=ne),Le.set(z,Y,F,ne),st.equals(Le)===!1&&(s.clearColor(z,Y,F,ne),st.copy(Le))},reset:function(){G=!1,Ue=null,st.set(-1,0,0,0)}}}function r(){let G=!1,Le=null,Ue=null,st=null;return{setTest:function(z){z?Ne(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(z){Le!==z&&!G&&(s.depthMask(z),Le=z)},setFunc:function(z){if(Ue!==z){switch(z){case kp:s.depthFunc(s.NEVER);break;case Hp:s.depthFunc(s.ALWAYS);break;case Gp:s.depthFunc(s.LESS);break;case Wo:s.depthFunc(s.LEQUAL);break;case Vp:s.depthFunc(s.EQUAL);break;case Wp:s.depthFunc(s.GEQUAL);break;case Xp:s.depthFunc(s.GREATER);break;case qp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=z}},setLocked:function(z){G=z},setClear:function(z){st!==z&&(s.clearDepth(z),st=z)},reset:function(){G=!1,Le=null,Ue=null,st=null}}}function o(){let G=!1,Le=null,Ue=null,st=null,z=null,Y=null,F=null,ne=null,U=null;return{setTest:function(V){G||(V?Ne(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(V){Le!==V&&!G&&(s.stencilMask(V),Le=V)},setFunc:function(V,ie,de){(Ue!==V||st!==ie||z!==de)&&(s.stencilFunc(V,ie,de),Ue=V,st=ie,z=de)},setOp:function(V,ie,de){(Y!==V||F!==ie||ne!==de)&&(s.stencilOp(V,ie,de),Y=V,F=ie,ne=de)},setLocked:function(V){G=V},setClear:function(V){U!==V&&(s.clearStencil(V),U=V)},reset:function(){G=!1,Le=null,Ue=null,st=null,z=null,Y=null,F=null,ne=null,U=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,M=null,S=null,b=null,E=null,C=null,y=new Be(0,0,0),T=0,N=!1,I=null,k=null,P=null,L=null,H=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,K=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=K>=2);let te=null,oe={},X=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ue=new At().fromArray(X),pe=new At().fromArray(ee);function ae(G,Le,Ue,st){let z=new Uint8Array(4),Y=s.createTexture();s.bindTexture(G,Y),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let F=0;F<Ue;F++)n&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Le,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,z):s.texImage2D(Le+F,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,z);return Y}let xe={};xe[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(s.DEPTH_TEST),c.setFunc(Wo),Fe(!1),R(Zh),Ne(s.CULL_FACE),he(Ui);function Ne(G){f[G]!==!0&&(s.enable(G),f[G]=!0)}function Pe(G){f[G]!==!1&&(s.disable(G),f[G]=!1)}function fe(G,Le){return d[G]!==Le?(s.bindFramebuffer(G,Le),d[G]=Le,n&&(G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Le)),!0):!1}function O(G,Le){let Ue=x,st=!1;if(G)if(Ue=p.get(Le),Ue===void 0&&(Ue=[],p.set(Le,Ue)),G.isWebGLMultipleRenderTargets){let z=G.texture;if(Ue.length!==z.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,F=z.length;Y<F;Y++)Ue[Y]=s.COLOR_ATTACHMENT0+Y;Ue.length=z.length,st=!0}}else Ue[0]!==s.COLOR_ATTACHMENT0&&(Ue[0]=s.COLOR_ATTACHMENT0,st=!0);else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,st=!0);st&&(t.isWebGL2?s.drawBuffers(Ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ue))}function Ee(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let ce={[Qi]:s.FUNC_ADD,[Ep]:s.FUNC_SUBTRACT,[Tp]:s.FUNC_REVERSE_SUBTRACT};if(n)ce[Jh]=s.MIN,ce[$h]=s.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(ce[Jh]=G.MIN_EXT,ce[$h]=G.MAX_EXT)}let Me={[Ap]:s.ZERO,[Rp]:s.ONE,[Cp]:s.SRC_COLOR,[Wc]:s.SRC_ALPHA,[Up]:s.SRC_ALPHA_SATURATE,[Np]:s.DST_COLOR,[Lp]:s.DST_ALPHA,[Pp]:s.ONE_MINUS_SRC_COLOR,[Xc]:s.ONE_MINUS_SRC_ALPHA,[Dp]:s.ONE_MINUS_DST_COLOR,[Ip]:s.ONE_MINUS_DST_ALPHA,[zp]:s.CONSTANT_COLOR,[Fp]:s.ONE_MINUS_CONSTANT_COLOR,[Op]:s.CONSTANT_ALPHA,[Bp]:s.ONE_MINUS_CONSTANT_ALPHA};function he(G,Le,Ue,st,z,Y,F,ne,U,V){if(G===Ui){m===!0&&(Pe(s.BLEND),m=!1);return}if(m===!1&&(Ne(s.BLEND),m=!0),G!==wp){if(G!==_||V!==N){if((v!==Qi||b!==Qi)&&(s.blendEquation(s.FUNC_ADD),v=Qi,b=Qi),V)switch(G){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFunc(s.ONE,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,S=null,E=null,C=null,y.set(0,0,0),T=0,_=G,N=V}return}z=z||Le,Y=Y||Ue,F=F||st,(Le!==v||z!==b)&&(s.blendEquationSeparate(ce[Le],ce[z]),v=Le,b=z),(Ue!==M||st!==S||Y!==E||F!==C)&&(s.blendFuncSeparate(Me[Ue],Me[st],Me[Y],Me[F]),M=Ue,S=st,E=Y,C=F),(ne.equals(y)===!1||U!==T)&&(s.blendColor(ne.r,ne.g,ne.b,U),y.copy(ne),T=U),_=G,N=!1}function Xe(G,Le){G.side===Wt?Pe(s.CULL_FACE):Ne(s.CULL_FACE);let Ue=G.side===un;Le&&(Ue=!Ue),Fe(Ue),G.blending===Gs&&G.transparent===!1?he(Ui):he(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let st=G.stencilWrite;l.setTest(st),st&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(G){I!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),I=G)}function R(G){G!==Mp?(Ne(s.CULL_FACE),G!==k&&(G===Zh?s.cullFace(s.BACK):G===bp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),k=G}function A(G){G!==P&&($&&s.lineWidth(G),P=G)}function Q(G,Le,Ue){G?(Ne(s.POLYGON_OFFSET_FILL),(L!==Le||H!==Ue)&&(s.polygonOffset(Le,Ue),L=Le,H=Ue)):Pe(s.POLYGON_OFFSET_FILL)}function me(G){G?Ne(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function _e(G){G===void 0&&(G=s.TEXTURE0+j-1),te!==G&&(s.activeTexture(G),te=G)}function ve(G,Le,Ue){Ue===void 0&&(te===null?Ue=s.TEXTURE0+j-1:Ue=te);let st=oe[Ue];st===void 0&&(st={type:void 0,texture:void 0},oe[Ue]=st),(st.type!==G||st.texture!==Le)&&(te!==Ue&&(s.activeTexture(Ue),te=Ue),s.bindTexture(G,Le||xe[G]),st.type=G,st.texture=Le)}function qe(){let G=oe[te];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function De(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(G){ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function Ct(G){pe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),pe.copy(G))}function Vt(G,Le){let Ue=u.get(Le);Ue===void 0&&(Ue=new WeakMap,u.set(Le,Ue));let st=Ue.get(G);st===void 0&&(st=s.getUniformBlockIndex(Le,G.name),Ue.set(G,st))}function it(G,Le){let st=u.get(Le).get(G);h.get(Le)!==st&&(s.uniformBlockBinding(Le,st,G.__bindingPointIndex),h.set(Le,st))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},te=null,oe={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,M=null,S=null,b=null,E=null,C=null,y=new Be(0,0,0),T=0,N=!1,I=null,k=null,P=null,L=null,H=null,ue.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:Pe,bindFramebuffer:fe,drawBuffers:O,useProgram:Ee,setBlending:he,setMaterial:Xe,setFlipSided:Fe,setCullFace:R,setLineWidth:A,setPolygonOffset:Q,setScissorTest:me,activeTexture:_e,bindTexture:ve,unbindTexture:qe,compressedTexImage2D:De,compressedTexImage3D:Ge,texImage2D:et,texImage3D:We,updateUBOMapping:Vt,uniformBlockBinding:it,texStorage2D:pt,texStorage3D:ct,texSubImage2D:le,texSubImage3D:ht,compressedTexSubImage2D:ge,compressedTexSubImage3D:Tt,scissor:ft,viewport:Ct,reset:Te}}function w_(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,A){return d?new OffscreenCanvas(R,A):Pr("canvas")}function x(R,A,Q,me){let _e=1;if((R.width>me||R.height>me)&&(_e=me/Math.max(R.width,R.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ve=A?$o:Math.floor,qe=ve(_e*R.width),De=ve(_e*R.height);u===void 0&&(u=p(qe,De));let Ge=Q?p(qe,De):u;return Ge.width=qe,Ge.height=De,Ge.getContext("2d").drawImage(R,0,0,qe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+qe+"x"+De+")."),Ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return jc(R.width)&&jc(R.height)}function m(R){return a?!1:R.wrapS!==Dn||R.wrapT!==Dn||R.minFilter!==jt&&R.minFilter!==Jt}function _(R,A){return R.generateMipmaps&&A&&R.minFilter!==jt&&R.minFilter!==Jt}function v(R){s.generateMipmap(R)}function M(R,A,Q,me,_e=!1){if(a===!1)return A;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve=A;if(A===s.RED&&(Q===s.FLOAT&&(ve=s.R32F),Q===s.HALF_FLOAT&&(ve=s.R16F),Q===s.UNSIGNED_BYTE&&(ve=s.R8)),A===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.R8UI),Q===s.UNSIGNED_SHORT&&(ve=s.R16UI),Q===s.UNSIGNED_INT&&(ve=s.R32UI),Q===s.BYTE&&(ve=s.R8I),Q===s.SHORT&&(ve=s.R16I),Q===s.INT&&(ve=s.R32I)),A===s.RG&&(Q===s.FLOAT&&(ve=s.RG32F),Q===s.HALF_FLOAT&&(ve=s.RG16F),Q===s.UNSIGNED_BYTE&&(ve=s.RG8)),A===s.RGBA){let qe=_e?Yo:Pt.getTransfer(me);Q===s.FLOAT&&(ve=s.RGBA32F),Q===s.HALF_FLOAT&&(ve=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ve=qe===kt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function S(R,A,Q){return _(R,Q)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Jt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function b(R){return R===jt||R===Xo||R===Mr?s.NEAREST:s.LINEAR}function E(R){let A=R.target;A.removeEventListener("dispose",E),y(A),A.isVideoTexture&&h.delete(A)}function C(R){let A=R.target;A.removeEventListener("dispose",C),N(A)}function y(R){let A=n.get(R);if(A.__webglInit===void 0)return;let Q=R.source,me=f.get(Q);if(me){let _e=me[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(R),Object.keys(me).length===0&&f.delete(Q)}n.remove(R)}function T(R){let A=n.get(R);s.deleteTexture(A.__webglTexture);let Q=R.source,me=f.get(Q);delete me[A.__cacheKey],o.memory.textures--}function N(R){let A=R.texture,Q=n.get(R),me=n.get(A);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(Q.__webglFramebuffer[_e]))for(let ve=0;ve<Q.__webglFramebuffer[_e].length;ve++)s.deleteFramebuffer(Q.__webglFramebuffer[_e][ve]);else s.deleteFramebuffer(Q.__webglFramebuffer[_e]);Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[_e])}else{if(Array.isArray(Q.__webglFramebuffer))for(let _e=0;_e<Q.__webglFramebuffer.length;_e++)s.deleteFramebuffer(Q.__webglFramebuffer[_e]);else s.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let _e=0;_e<Q.__webglColorRenderbuffer.length;_e++)Q.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer[_e]);Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let _e=0,ve=A.length;_e<ve;_e++){let qe=n.get(A[_e]);qe.__webglTexture&&(s.deleteTexture(qe.__webglTexture),o.memory.textures--),n.remove(A[_e])}n.remove(A),n.remove(R)}let I=0;function k(){I=0}function P(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function L(R){let A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function H(R,A){let Q=n.get(R);if(R.isVideoTexture&&Xe(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){let me=R.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Q,R,A);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+A)}function j(R,A){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){ue(Q,R,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+A)}function $(R,A){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){ue(Q,R,A);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+A)}function K(R,A){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){pe(Q,R,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+A)}let Z={[ss]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},te={[jt]:s.NEAREST,[Xo]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[Fl]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},oe={[gm]:s.NEVER,[bm]:s.ALWAYS,[xm]:s.LESS,[Wf]:s.LEQUAL,[vm]:s.EQUAL,[Mm]:s.GEQUAL,[_m]:s.GREATER,[ym]:s.NOTEQUAL};function X(R,A,Q){if(Q?(s.texParameteri(R,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,te[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,te[A.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Dn||A.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==jt&&A.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===jt||A.minFilter!==Mr&&A.minFilter!==Wn||A.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(R,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ee(R,A){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",E));let me=A.source,_e=f.get(me);_e===void 0&&(_e={},f.set(me,_e));let ve=L(A);if(ve!==R.__cacheKey){_e[ve]===void 0&&(_e[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),_e[ve].usedTimes++;let qe=_e[R.__cacheKey];qe!==void 0&&(_e[R.__cacheKey].usedTimes--,qe.usedTimes===0&&T(A)),R.__cacheKey=ve,R.__webglTexture=_e[ve].texture}return Q}function ue(R,A,Q){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);let _e=ee(R,A),ve=A.source;t.bindTexture(me,R.__webglTexture,s.TEXTURE0+Q);let qe=n.get(ve);if(ve.version!==qe.__version||_e===!0){t.activeTexture(s.TEXTURE0+Q);let De=Pt.getPrimaries(Pt.workingColorSpace),Ge=A.colorSpace===Mn?null:Pt.getPrimaries(A.colorSpace),le=A.colorSpace===Mn||De===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ht=m(A)&&g(A.image)===!1,ge=x(A.image,ht,!1,i.maxTextureSize);ge=Fe(A,ge);let Tt=g(ge)||a,pt=r.convert(A.format,A.colorSpace),ct=r.convert(A.type),et=M(A.internalFormat,pt,ct,A.colorSpace,A.isVideoTexture);X(me,A,Tt);let We,ft=A.mipmaps,Ct=a&&A.isVideoTexture!==!0&&et!==Hf,Vt=qe.__version===void 0||_e===!0,it=S(A,ge,Tt);if(A.isDepthTexture)et=s.DEPTH_COMPONENT,a?A.type===vi?et=s.DEPTH_COMPONENT32F:A.type===Ni?et=s.DEPTH_COMPONENT24:A.type===ts?et=s.DEPTH24_STENCIL8:et=s.DEPTH_COMPONENT16:A.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ns&&et===s.DEPTH_COMPONENT&&A.type!==Ol&&A.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ni,ct=r.convert(A.type)),A.format===Ys&&et===s.DEPTH_COMPONENT&&(et=s.DEPTH_STENCIL,A.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ts,ct=r.convert(A.type))),Vt&&(Ct?t.texStorage2D(s.TEXTURE_2D,1,et,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,pt,ct,null));else if(A.isDataTexture)if(ft.length>0&&Tt){Ct&&Vt&&t.texStorage2D(s.TEXTURE_2D,it,et,ft[0].width,ft[0].height);for(let Te=0,G=ft.length;Te<G;Te++)We=ft[Te],Ct?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,We.width,We.height,pt,ct,We.data):t.texImage2D(s.TEXTURE_2D,Te,et,We.width,We.height,0,pt,ct,We.data);A.generateMipmaps=!1}else Ct?(Vt&&t.texStorage2D(s.TEXTURE_2D,it,et,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,pt,ct,ge.data)):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,pt,ct,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ct&&Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,et,ft[0].width,ft[0].height,ge.depth);for(let Te=0,G=ft.length;Te<G;Te++)We=ft[Te],A.format!==Gn?pt!==null?Ct?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,We.width,We.height,ge.depth,pt,We.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,et,We.width,We.height,ge.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,We.width,We.height,ge.depth,pt,ct,We.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,et,We.width,We.height,ge.depth,0,pt,ct,We.data)}else{Ct&&Vt&&t.texStorage2D(s.TEXTURE_2D,it,et,ft[0].width,ft[0].height);for(let Te=0,G=ft.length;Te<G;Te++)We=ft[Te],A.format!==Gn?pt!==null?Ct?t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,We.width,We.height,pt,We.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,et,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,We.width,We.height,pt,ct,We.data):t.texImage2D(s.TEXTURE_2D,Te,et,We.width,We.height,0,pt,ct,We.data)}else if(A.isDataArrayTexture)Ct?(Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,et,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,pt,ct,ge.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,ge.width,ge.height,ge.depth,0,pt,ct,ge.data);else if(A.isData3DTexture)Ct?(Vt&&t.texStorage3D(s.TEXTURE_3D,it,et,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,pt,ct,ge.data)):t.texImage3D(s.TEXTURE_3D,0,et,ge.width,ge.height,ge.depth,0,pt,ct,ge.data);else if(A.isFramebufferTexture){if(Vt)if(Ct)t.texStorage2D(s.TEXTURE_2D,it,et,ge.width,ge.height);else{let Te=ge.width,G=ge.height;for(let Le=0;Le<it;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,Te,G,0,pt,ct,null),Te>>=1,G>>=1}}else if(ft.length>0&&Tt){Ct&&Vt&&t.texStorage2D(s.TEXTURE_2D,it,et,ft[0].width,ft[0].height);for(let Te=0,G=ft.length;Te<G;Te++)We=ft[Te],Ct?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,pt,ct,We):t.texImage2D(s.TEXTURE_2D,Te,et,pt,ct,We);A.generateMipmaps=!1}else Ct?(Vt&&t.texStorage2D(s.TEXTURE_2D,it,et,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,ct,ge)):t.texImage2D(s.TEXTURE_2D,0,et,pt,ct,ge);_(A,Tt)&&v(me),qe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function pe(R,A,Q){if(A.image.length!==6)return;let me=ee(R,A),_e=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Q);let ve=n.get(_e);if(_e.version!==ve.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);let qe=Pt.getPrimaries(Pt.workingColorSpace),De=A.colorSpace===Mn?null:Pt.getPrimaries(A.colorSpace),Ge=A.colorSpace===Mn||qe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let Te=0;Te<6;Te++)!le&&!ht?ge[Te]=x(A.image[Te],!1,!0,i.maxCubemapSize):ge[Te]=ht?A.image[Te].image:A.image[Te],ge[Te]=Fe(A,ge[Te]);let Tt=ge[0],pt=g(Tt)||a,ct=r.convert(A.format,A.colorSpace),et=r.convert(A.type),We=M(A.internalFormat,ct,et,A.colorSpace),ft=a&&A.isVideoTexture!==!0,Ct=ve.__version===void 0||me===!0,Vt=S(A,Tt,pt);X(s.TEXTURE_CUBE_MAP,A,pt);let it;if(le){ft&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,We,Tt.width,Tt.height);for(let Te=0;Te<6;Te++){it=ge[Te].mipmaps;for(let G=0;G<it.length;G++){let Le=it[G];A.format!==Gn?ct!==null?ft?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Le.width,Le.height,ct,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,We,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Le.width,Le.height,ct,et,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,We,Le.width,Le.height,0,ct,et,Le.data)}}}else{it=A.mipmaps,ft&&Ct&&(it.length>0&&Vt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,We,ge[0].width,ge[0].height));for(let Te=0;Te<6;Te++)if(ht){ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge[Te].width,ge[Te].height,ct,et,ge[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,We,ge[Te].width,ge[Te].height,0,ct,et,ge[Te].data);for(let G=0;G<it.length;G++){let Ue=it[G].image[Te].image;ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,Ue.width,Ue.height,ct,et,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,We,Ue.width,Ue.height,0,ct,et,Ue.data)}}else{ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ct,et,ge[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,We,ct,et,ge[Te]);for(let G=0;G<it.length;G++){let Le=it[G];ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,ct,et,Le.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,We,ct,et,Le.image[Te])}}}_(A,pt)&&v(s.TEXTURE_CUBE_MAP),ve.__version=_e.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ae(R,A,Q,me,_e,ve){let qe=r.convert(Q.format,Q.colorSpace),De=r.convert(Q.type),Ge=M(Q.internalFormat,qe,De,Q.colorSpace);if(!n.get(A).__hasExternalTextures){let ht=Math.max(1,A.width>>ve),ge=Math.max(1,A.height>>ve);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,ve,Ge,ht,ge,A.depth,0,qe,De,null):t.texImage2D(_e,ve,Ge,ht,ge,0,qe,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),he(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,n.get(Q).__webglTexture,0,Me(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,n.get(Q).__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(R,A,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let me=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Q||he(A)){let _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===vi?me=s.DEPTH_COMPONENT32F:_e.type===Ni&&(me=s.DEPTH_COMPONENT24));let ve=Me(A);he(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,me,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,me,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){let me=Me(A);Q&&he(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):he(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<me.length;_e++){let ve=me[_e],qe=r.convert(ve.format,ve.colorSpace),De=r.convert(ve.type),Ge=M(ve.internalFormat,qe,De,ve.colorSpace),le=Me(A);Q&&he(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,Ge,A.width,A.height):he(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,Ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);let me=n.get(A.depthTexture).__webglTexture,_e=Me(A);if(A.depthTexture.format===ns)he(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(A.depthTexture.format===Ys)he(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Pe(R){let A=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,R)}else if(Q){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(A.__webglDepthbuffer[me],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),xe(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(R,A,Q){let me=n.get(R);A!==void 0&&ae(me.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Pe(R)}function O(R){let A=R.texture,Q=n.get(R),me=n.get(A);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,o.memory.textures++);let _e=R.isWebGLCubeRenderTarget===!0,ve=R.isWebGLMultipleRenderTargets===!0,qe=g(R)||a;if(_e){Q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(a&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[De]=[];for(let Ge=0;Ge<A.mipmaps.length;Ge++)Q.__webglFramebuffer[De][Ge]=s.createFramebuffer()}else Q.__webglFramebuffer[De]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let De=0;De<A.mipmaps.length;De++)Q.__webglFramebuffer[De]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(ve)if(i.drawBuffers){let De=R.texture;for(let Ge=0,le=De.length;Ge<le;Ge++){let ht=n.get(De[Ge]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&he(R)===!1){let De=ve?A:[A];Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ge=0;Ge<De.length;Ge++){let le=De[Ge];Q.__webglColorRenderbuffer[Ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ge]);let ht=r.convert(le.format,le.colorSpace),ge=r.convert(le.type),Tt=M(le.internalFormat,ht,ge,le.colorSpace,R.isXRRenderTarget===!0),pt=Me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),X(s.TEXTURE_CUBE_MAP,A,qe);for(let De=0;De<6;De++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)ae(Q.__webglFramebuffer[De][Ge],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ge);else ae(Q.__webglFramebuffer[De],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);_(A,qe)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){let De=R.texture;for(let Ge=0,le=De.length;Ge<le;Ge++){let ht=De[Ge],ge=n.get(ht);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),X(s.TEXTURE_2D,ht,qe),ae(Q.__webglFramebuffer,R,ht,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,0),_(ht,qe)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?De=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,me.__webglTexture),X(De,A,qe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)ae(Q.__webglFramebuffer[Ge],R,A,s.COLOR_ATTACHMENT0,De,Ge);else ae(Q.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,De,0);_(A,qe)&&v(De),t.unbindTexture()}R.depthBuffer&&Pe(R)}function Ee(R){let A=g(R)||a,Q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let me=0,_e=Q.length;me<_e;me++){let ve=Q[me];if(_(ve,A)){let qe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,De=n.get(ve).__webglTexture;t.bindTexture(qe,De),v(qe),t.unbindTexture()}}}function ce(R){if(a&&R.samples>0&&he(R)===!1){let A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Q=R.width,me=R.height,_e=s.COLOR_BUFFER_BIT,ve=[],qe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(R),Ge=R.isWebGLMultipleRenderTargets===!0;if(Ge)for(let le=0;le<A.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let le=0;le<A.length;le++){ve.push(s.COLOR_ATTACHMENT0+le),R.depthBuffer&&ve.push(qe);let ht=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(ht===!1&&(R.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[le]),ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[qe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[qe])),Ge){let ge=n.get(A[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,_e,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ge)for(let le=0;le<A.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,De.__webglColorRenderbuffer[le]);let ht=n.get(A[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(R){return Math.min(i.maxSamples,R.samples)}function he(R){let A=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(R){let A=o.render.frame;h.get(R)!==A&&(h.set(R,A),R.update())}function Fe(R,A){let Q=R.colorSpace,me=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Kc||Q!==on&&Q!==Mn&&(Pt.getTransfer(Q)===kt?a===!1?e.has("EXT_sRGB")===!0&&me===Gn?(R.format=Kc,R.minFilter=Jt,R.generateMipmaps=!1):A=Qo.sRGBToLinear(A):(me!==Gn||_e!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=fe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=he}function E_(s,e,t){let n=t.isWebGL2;function i(r,o=Mn){let a,c=Pt.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===zf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nm)return s.BYTE;if(r===im)return s.SHORT;if(r===Ol)return s.UNSIGNED_SHORT;if(r===Uf)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===vi)return s.FLOAT;if(r===rs)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sm)return s.ALPHA;if(r===Gn)return s.RGBA;if(r===rm)return s.LUMINANCE;if(r===om)return s.LUMINANCE_ALPHA;if(r===ns)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===Kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===am)return s.RED;if(r===Of)return s.RED_INTEGER;if(r===cm)return s.RG;if(r===Bf)return s.RG_INTEGER;if(r===kf)return s.RGBA_INTEGER;if(r===cc||r===lc||r===hc||r===uc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===su)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ru)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===vu||r===_u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ou)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_u)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fc||r===yu||r===Mu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lm||r===bu||r===Su||r===wu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ts?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ll=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hl=class extends Mi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=t.getContextAttributes(),g=null,m=null,_=[],v=[],M=new be,S=null,b=new rn;b.layers.enable(1),b.viewport=new At;let E=new rn;E.layers.enable(2),E.viewport=new At;let C=[b,E],y=new ll;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new Er,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new Er,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new Er,_[X]=ee),ee.getHandSpace()};function I(X){let ee=v.indexOf(X.inputSource);if(ee===-1)return;let ue=_[ee];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let X=0;X<_.length;X++){let ee=v[X];ee!==null&&(v[X]=null,_[X].disconnect(ee))}T=null,N=null,e.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new $n(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,ue=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?Ys:ns,ue=x.stencil?ts:Ni);let ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new $n(f.textureWidth,f.textureHeight,{format:Gn,type:ii,depthTexture:new ca(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let xe=e.properties.get(m);xe.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let ee=0;ee<X.removed.length;ee++){let ue=X.removed[ee],pe=v.indexOf(ue);pe>=0&&(v[pe]=null,_[pe].disconnect(ue))}for(let ee=0;ee<X.added.length;ee++){let ue=X.added[ee],pe=v.indexOf(ue);if(pe===-1){for(let xe=0;xe<_.length;xe++)if(xe>=v.length){v.push(ue),pe=xe;break}else if(v[xe]===null){v[xe]=ue,pe=xe;break}if(pe===-1)break}let ae=_[pe];ae&&ae.connect(ue)}}let L=new D,H=new D;function j(X,ee,ue){L.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);let pe=L.distanceTo(H),ae=ee.projectionMatrix.elements,xe=ue.projectionMatrix.elements,Ne=ae[14]/(ae[10]-1),Pe=ae[14]/(ae[10]+1),fe=(ae[9]+1)/ae[5],O=(ae[9]-1)/ae[5],Ee=(ae[8]-1)/ae[0],ce=(xe[8]+1)/xe[0],Me=Ne*Ee,he=Ne*ce,Xe=pe/(-Ee+ce),Fe=Xe*-Ee;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(Xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let R=Ne+Xe,A=Pe+Xe,Q=Me-Fe,me=he+(pe-Fe),_e=fe*Pe/A*R,ve=O*Pe/A*R;X.projectionMatrix.makePerspective(Q,me,_e,ve,R,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function $(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;y.near=E.near=b.near=X.near,y.far=E.far=b.far=X.far,(T!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);let ee=X.parent,ue=y.cameras;$(y,ee);for(let pe=0;pe<ue.length;pe++)$(ue[pe],ee);ue.length===2?j(y,b,E):y.projectionMatrix.copy(b.projectionMatrix),K(X,y,ee)};function K(X,ee,ue){ue===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let Z=null;function te(X,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let pe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let ae=0;ae<ue.length;ae++){let xe=ue[ae],Ne=null;if(d!==null)Ne=d.getViewport(xe);else{let fe=u.getViewSubImage(f,xe);Ne=fe.viewport,ae===0&&(e.setRenderTargetTextures(m,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(m))}let Pe=C[ae];Pe===void 0&&(Pe=new rn,Pe.layers.enable(ae),Pe.viewport=new At,C[ae]=Pe),Pe.matrix.fromArray(xe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(xe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ae===0&&(y.matrix.copy(Pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(Pe)}}for(let ue=0;ue<_.length;ue++){let pe=v[ue],ae=_[ue];pe!==null&&ae!==void 0&&ae.update(pe,ee,l||o)}Z&&Z(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let oe=new Kf;oe.setAnimationLoop(te),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}};function A_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function R_(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=i[_.id];M===void 0&&(p(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",g));let S=v.program;n.updateUBOMapping(_,S);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let v=u();_.__bindingPointIndex=v;let M=s.createBuffer(),S=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=i[_.id],M=_.uniforms,S=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=M.length;b<E;b++){let C=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,T=C.length;y<T;y++){let N=C[y];if(d(N,b,y,S)===!0){let I=N.__offset,k=Array.isArray(N.value)?N.value:[N.value],P=0;for(let L=0;L<k.length;L++){let H=k[L],j=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,I+P,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,M,S){let b=_.value,E=v+"_"+M;if(S[E]===void 0)return typeof b=="number"||typeof b=="boolean"?S[E]=b:S[E]=b.clone(),!0;{let C=S[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return S[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function p(_){let v=_.uniforms,M=0,S=16;for(let E=0,C=v.length;E<C;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,N=y.length;T<N;T++){let I=y[T],k=Array.isArray(I.value)?I.value:[I.value];for(let P=0,L=k.length;P<L;P++){let H=k[P],j=x(H),$=M%S;$!==0&&S-$<j.boundary&&(M+=S-$),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=j.storage}}}let b=M%S;return b>0&&(M+=S-b),_.__size=M,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var Ir=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let v=this,M=!1,S=0,b=0,E=null,C=-1,y=null,T=new At,N=new At,I=null,k=new Be(0),P=0,L=t.width,H=t.height,j=1,$=null,K=null,Z=new At(0,0,L,H),te=new At(0,0,L,H),oe=!1,X=new Lr,ee=!1,ue=!1,pe=null,ae=new rt,xe=new be,Ne=new D,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return E===null?j:1}let O=n;function Ee(w,B){for(let W=0;W<w.length;W++){let J=w[W],q=t.getContext(J,B);if(q!==null)return q}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Le,!1),O===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),O=Ee(B,w),O===null)throw Ee(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,Me,he,Xe,Fe,R,A,Q,me,_e,ve,qe,De,Ge,le,ht,ge,Tt,pt,ct,et,We,ft,Ct;function Vt(){ce=new Yx(O),Me=new Hx(O,ce,e),ce.init(Me),We=new E_(O,ce,Me),he=new S_(O,ce,Me),Xe=new jx(O),Fe=new u_,R=new w_(O,ce,he,Fe,Me,We,Xe),A=new Vx(v),Q=new qx(v),me=new s0(O,Me),ft=new Bx(O,ce,me,Me),_e=new Zx(O,me,Xe,ft),ve=new ev(O,_e,me,Xe),pt=new Qx(O,Me,R),ht=new Gx(Fe),qe=new h_(v,A,Q,ce,Me,ft,ht),De=new A_(v,Fe),Ge=new d_,le=new __(ce,Me),Tt=new Ox(v,A,Q,he,ve,f,c),ge=new b_(v,ve,Me),Ct=new R_(O,Xe,Me,he),ct=new kx(O,ce,Xe,Me),et=new Kx(O,ce,Xe,Me),Xe.programs=qe.programs,v.capabilities=Me,v.extensions=ce,v.properties=Fe,v.renderLists=Ge,v.shadowMap=ge,v.state=he,v.info=Xe}Vt();let it=new hl(v,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(L,H,!1))},this.getSize=function(w){return w.set(L,H)},this.setSize=function(w,B,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,H=B,t.width=Math.floor(w*j),t.height=Math.floor(B*j),W===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(L*j,H*j).floor()},this.setDrawingBufferSize=function(w,B,W){L=w,H=B,j=W,t.width=Math.floor(w*W),t.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,B,W,J){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,B,W,J),he.viewport(T.copy(Z).multiplyScalar(j).floor())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,B,W,J){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,B,W,J),he.scissor(N.copy(te).multiplyScalar(j).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){he.setScissorTest(oe=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,B=!0,W=!0){let J=0;if(w){let q=!1;if(E!==null){let ye=E.texture.format;q=ye===kf||ye===Bf||ye===Of}if(q){let ye=E.texture.type,ze=ye===ii||ye===Ni||ye===Ol||ye===ts||ye===zf||ye===Ff,ke=Tt.getClearColor(),Ke=Tt.getClearAlpha(),Qe=ke.r,Se=ke.g,Oe=ke.b;ze?(d[0]=Qe,d[1]=Se,d[2]=Oe,d[3]=Ke,O.clearBufferuiv(O.COLOR,0,d)):(p[0]=Qe,p[1]=Se,p[2]=Oe,p[3]=Ke,O.clearBufferiv(O.COLOR,0,p))}else J|=O.COLOR_BUFFER_BIT}B&&(J|=O.DEPTH_BUFFER_BIT),W&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ge.dispose(),le.dispose(),Fe.dispose(),A.dispose(),Q.dispose(),ve.dispose(),ft.dispose(),Ct.dispose(),qe.dispose(),it.dispose(),it.removeEventListener("sessionstart",U),it.removeEventListener("sessionend",V),pe&&(pe.dispose(),pe=null),ie.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=Xe.autoReset,B=ge.enabled,W=ge.autoUpdate,J=ge.needsUpdate,q=ge.type;Vt(),Xe.autoReset=w,ge.enabled=B,ge.autoUpdate=W,ge.needsUpdate=J,ge.type=q}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){let B=w.target;B.removeEventListener("dispose",Ue),st(B)}function st(w){z(w),Fe.remove(w)}function z(w){let B=Fe.get(w).programs;B!==void 0&&(B.forEach(function(W){qe.releaseProgram(W)}),w.isShaderMaterial&&qe.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,J,q,ye){B===null&&(B=Pe);let ze=q.isMesh&&q.matrixWorld.determinant()<0,ke=wt(w,B,W,J,q);he.setMaterial(J,ze);let Ke=W.index,Qe=1;if(J.wireframe===!0){if(Ke=_e.getWireframeAttribute(W),Ke===void 0)return;Qe=2}let Se=W.drawRange,Oe=W.attributes.position,je=Se.start*Qe,ut=(Se.start+Se.count)*Qe;ye!==null&&(je=Math.max(je,ye.start*Qe),ut=Math.min(ut,(ye.start+ye.count)*Qe)),Ke!==null?(je=Math.max(je,0),ut=Math.min(ut,Ke.count)):Oe!=null&&(je=Math.max(je,0),ut=Math.min(ut,Oe.count));let Et=ut-je;if(Et<0||Et===1/0)return;ft.setup(q,J,ke,W,Ke);let Bn,Lt=ct;if(Ke!==null&&(Bn=me.get(Ke),Lt=et,Lt.setIndex(Bn)),q.isMesh)J.wireframe===!0?(he.setLineWidth(J.wireframeLinewidth*fe()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(q.isLine){let _t=J.linewidth;_t===void 0&&(_t=1),he.setLineWidth(_t*fe()),q.isLineSegments?Lt.setMode(O.LINES):q.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else q.isPoints?Lt.setMode(O.POINTS):q.isSprite&&Lt.setMode(O.TRIANGLES);if(q.isBatchedMesh)Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Lt.renderInstances(je,Et,q.count);else if(W.isInstancedBufferGeometry){let _t=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,sc=Math.min(W.instanceCount,_t);Lt.renderInstances(je,Et,sc)}else Lt.render(je,Et)};function Y(w,B,W){w.transparent===!0&&w.side===Wt&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,tt(w,B,W),w.side=si,w.needsUpdate=!0,tt(w,B,W),w.side=Wt):tt(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),g=le.get(W),g.init(),_.push(g),W.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),w!==W&&w.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(v._useLegacyLights);let J=new Set;return w.traverse(function(q){let ye=q.material;if(ye)if(Array.isArray(ye))for(let ze=0;ze<ye.length;ze++){let ke=ye[ze];Y(ke,W,q),J.add(ke)}else Y(ye,W,q),J.add(ye)}),_.pop(),g=null,J},this.compileAsync=function(w,B,W=null){let J=this.compile(w,B,W);return new Promise(q=>{function ye(){if(J.forEach(function(ze){Fe.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){q(w);return}setTimeout(ye,10)}ce.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let F=null;function ne(w){F&&F(w)}function U(){ie.stop()}function V(){ie.start()}let ie=new Kf;ie.setAnimationLoop(ne),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(w){F=w,it.setAnimationLoop(w),w===null?ie.stop():ie.start()},it.addEventListener("sessionstart",U),it.addEventListener("sessionend",V),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,E),g=le.get(w,_.length),g.init(),_.push(g),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(ae),ue=this.localClippingEnabled,ee=ht.init(this.clippingPlanes,ue),x=Ge.get(w,m.length),x.init(),m.push(x),de(w,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,K),this.info.render.frame++,ee===!0&&ht.beginShadows();let W=g.state.shadowsArray;if(ge.render(W,w,B),ee===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(x,w),g.setupLights(v._useLegacyLights),B.isArrayCamera){let J=B.cameras;for(let q=0,ye=J.length;q<ye;q++){let ze=J[q];we(x,w,ze,ze.viewport)}}else we(x,w,B);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,B),ft.resetDefaultState(),C=-1,y=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function de(w,B,W,J){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){J&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let ze=ve.update(w),ke=w.material;ke.visible&&x.push(w,ze,ke,W,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let ze=ve.update(w),ke=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ne.copy(ze.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(ke)){let Ke=ze.groups;for(let Qe=0,Se=Ke.length;Qe<Se;Qe++){let Oe=Ke[Qe],je=ke[Oe.materialIndex];je&&je.visible&&x.push(w,ze,je,W,Ne.z,Oe)}}else ke.visible&&x.push(w,ze,ke,W,Ne.z,null)}}let ye=w.children;for(let ze=0,ke=ye.length;ze<ke;ze++)de(ye[ze],B,W,J)}function we(w,B,W,J){let q=w.opaque,ye=w.transmissive,ze=w.transparent;g.setupLightsView(W),ee===!0&&ht.setGlobalState(v.clippingPlanes,W),ye.length>0&&Ve(q,ye,B,W),J&&he.viewport(T.copy(J)),q.length>0&&Ae(q,B,W),ye.length>0&&Ae(ye,B,W),ze.length>0&&Ae(ze,B,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ve(w,B,W,J){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ye=Me.isWebGL2;pe===null&&(pe=new $n(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?rs:ii,minFilter:Wn,samples:ye?4:0})),v.getDrawingBufferSize(xe),ye?pe.setSize(xe.x,xe.y):pe.setSize($o(xe.x),$o(xe.y));let ze=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(k),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let ke=v.toneMapping;v.toneMapping=zi,Ae(w,W,J),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Ke=!1;for(let Qe=0,Se=B.length;Qe<Se;Qe++){let Oe=B[Qe],je=Oe.object,ut=Oe.geometry,Et=Oe.material,Bn=Oe.group;if(Et.side===Wt&&je.layers.test(J.layers)){let Lt=Et.side;Et.side=un,Et.needsUpdate=!0,$e(je,W,J,ut,Et,Bn),Et.side=Lt,Et.needsUpdate=!0,Ke=!0}}Ke===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),v.setRenderTarget(ze),v.setClearColor(k,P),v.toneMapping=ke}function Ae(w,B,W){let J=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ye=w.length;q<ye;q++){let ze=w[q],ke=ze.object,Ke=ze.geometry,Qe=J===null?ze.material:J,Se=ze.group;ke.layers.test(W.layers)&&$e(ke,B,W,Ke,Qe,Se)}}function $e(w,B,W,J,q,ye){w.onBeforeRender(v,B,W,J,q,ye),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(v,B,W,J,w,ye),q.transparent===!0&&q.side===Wt&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,v.renderBufferDirect(W,B,J,q,w,ye),q.side=si,q.needsUpdate=!0,v.renderBufferDirect(W,B,J,q,w,ye),q.side=Wt):v.renderBufferDirect(W,B,J,q,w,ye),w.onAfterRender(v,B,W,J,q,ye)}function tt(w,B,W){B.isScene!==!0&&(B=Pe);let J=Fe.get(w),q=g.state.lights,ye=g.state.shadowsArray,ze=q.state.version,ke=qe.getParameters(w,q.state,ye,B,W),Ke=qe.getProgramCacheKey(ke),Qe=J.programs;J.environment=w.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(w.isMeshStandardMaterial?Q:A).get(w.envMap||J.environment),Qe===void 0&&(w.addEventListener("dispose",Ue),Qe=new Map,J.programs=Qe);let Se=Qe.get(Ke);if(Se!==void 0){if(J.currentProgram===Se&&J.lightsStateVersion===ze)return lt(w,ke),Se}else ke.uniforms=qe.getUniforms(w),w.onBuild(W,ke,v),w.onBeforeCompile(ke,v),Se=qe.acquireProgram(ke,Ke),Qe.set(Ke,Se),J.uniforms=ke.uniforms;let Oe=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ht.uniform),lt(w,ke),J.needsLights=Re(w),J.lightsStateVersion=ze,J.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Se,J.uniformsList=null,Se}function mt(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Ws.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function lt(w,B){let W=Fe.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function wt(w,B,W,J,q){B.isScene!==!0&&(B=Pe),R.resetTextureUnits();let ye=B.fog,ze=J.isMeshStandardMaterial?B.environment:null,ke=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:on,Ke=(J.isMeshStandardMaterial?Q:A).get(J.envMap||ze),Qe=J.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color,Et=zi;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=v.toneMapping);let Bn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=Bn!==void 0?Bn.length:0,_t=Fe.get(J),sc=g.state.lights;if(ee===!0&&(ue===!0||w!==y)){let kn=w===y&&J.id===C;ht.setState(J,w,kn)}let Kt=!1;J.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==sc.state.version||_t.outputColorSpace!==ke||q.isBatchedMesh&&_t.batching===!1||!q.isBatchedMesh&&_t.batching===!0||q.isInstancedMesh&&_t.instancing===!1||!q.isInstancedMesh&&_t.instancing===!0||q.isSkinnedMesh&&_t.skinning===!1||!q.isSkinnedMesh&&_t.skinning===!0||q.isInstancedMesh&&_t.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&_t.instancingColor===!1&&q.instanceColor!==null||_t.envMap!==Ke||J.fog===!0&&_t.fog!==ye||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==ht.numPlanes||_t.numIntersection!==ht.numIntersection)||_t.vertexAlphas!==Qe||_t.vertexTangents!==Se||_t.morphTargets!==Oe||_t.morphNormals!==je||_t.morphColors!==ut||_t.toneMapping!==Et||Me.isWebGL2===!0&&_t.morphTargetsCount!==Lt)&&(Kt=!0):(Kt=!0,_t.__version=J.version);let qi=_t.currentProgram;Kt===!0&&(qi=tt(J,B,q));let Xh=!1,dr=!1,rc=!1,mn=qi.getUniforms(),Yi=_t.uniforms;if(he.useProgram(qi.program)&&(Xh=!0,dr=!0,rc=!0),J.id!==C&&(C=J.id,dr=!0),Xh||y!==w){mn.setValue(O,"projectionMatrix",w.projectionMatrix),mn.setValue(O,"viewMatrix",w.matrixWorldInverse);let kn=mn.map.cameraPosition;kn!==void 0&&kn.setValue(O,Ne.setFromMatrixPosition(w.matrixWorld)),Me.logarithmicDepthBuffer&&mn.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&mn.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,dr=!0,rc=!0)}if(q.isSkinnedMesh){mn.setOptional(O,q,"bindMatrix"),mn.setOptional(O,q,"bindMatrixInverse");let kn=q.skeleton;kn&&(Me.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),mn.setValue(O,"boneTexture",kn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(mn.setOptional(O,q,"batchingTexture"),mn.setValue(O,"batchingTexture",q._matricesTexture,R));let oc=W.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0&&Me.isWebGL2===!0)&&pt.update(q,W,qi),(dr||_t.receiveShadow!==q.receiveShadow)&&(_t.receiveShadow=q.receiveShadow,mn.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Yi.envMap.value=Ke,Yi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),dr&&(mn.setValue(O,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&Ze(Yi,rc),ye&&J.fog===!0&&De.refreshFogUniforms(Yi,ye),De.refreshMaterialUniforms(Yi,J,j,H,pe),Ws.upload(O,mt(_t),Yi,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ws.upload(O,mt(_t),Yi,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&mn.setValue(O,"center",q.center),mn.setValue(O,"modelViewMatrix",q.modelViewMatrix),mn.setValue(O,"normalMatrix",q.normalMatrix),mn.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let kn=J.uniformsGroups;for(let ac=0,fp=kn.length;ac<fp;ac++)if(Me.isWebGL2){let qh=kn[ac];Ct.update(qh,qi),Ct.bind(qh,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function Ze(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Re(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,B,W){Fe.get(w.texture).__webglTexture=B,Fe.get(w.depthTexture).__webglTexture=W;let J=Fe.get(w);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=W===void 0,J.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){let W=Fe.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,W=0){E=w,S=B,b=W;let J=!0,q=null,ye=!1,ze=!1;if(w){let Ke=Fe.get(w);Ke.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(O.FRAMEBUFFER,null),J=!1):Ke.__webglFramebuffer===void 0?R.setupRenderTarget(w):Ke.__hasExternalTextures&&R.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);let Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ze=!0);let Se=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Se[B])?q=Se[B][W]:q=Se[B],ye=!0):Me.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?q=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Se)?q=Se[W]:q=Se,T.copy(w.viewport),N.copy(w.scissor),I=w.scissorTest}else T.copy(Z).multiplyScalar(j).floor(),N.copy(te).multiplyScalar(j).floor(),I=oe;if(he.bindFramebuffer(O.FRAMEBUFFER,q)&&Me.drawBuffers&&J&&he.drawBuffers(w,q),he.viewport(T),he.scissor(N),he.setScissorTest(I),ye){let Ke=Fe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ke.__webglTexture,W)}else if(ze){let Ke=Fe.get(w.texture),Qe=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,W||0,Qe)}C=-1},this.readRenderTargetPixels=function(w,B,W,J,q,ye,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){he.bindFramebuffer(O.FRAMEBUFFER,ke);try{let Ke=w.texture,Qe=Ke.format,Se=Ke.type;if(Qe!==Gn&&We.convert(Qe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Se===rs&&(ce.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Se!==ii&&We.convert(Se)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===vi&&(Me.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-J&&W>=0&&W<=w.height-q&&O.readPixels(B,W,J,q,We.convert(Qe),We.convert(Se),ye)}finally{let Ke=E!==null?Fe.get(E).__webglFramebuffer:null;he.bindFramebuffer(O.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(w,B,W=0){let J=Math.pow(2,-W),q=Math.floor(B.image.width*J),ye=Math.floor(B.image.height*J);R.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,w.x,w.y,q,ye),he.unbindTexture()},this.copyTextureToTexture=function(w,B,W,J=0){let q=B.image.width,ye=B.image.height,ze=We.convert(W.format),ke=We.convert(W.type);R.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,J,w.x,w.y,q,ye,ze,ke,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,J,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,ze,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,J,w.x,w.y,ze,ke,B.image),J===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(w,B,W,J,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=w.max.x-w.min.x+1,ze=w.max.y-w.min.y+1,ke=w.max.z-w.min.z+1,Ke=We.convert(J.format),Qe=We.convert(J.type),Se;if(J.isData3DTexture)R.setTexture3D(J,0),Se=O.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),Se=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment);let Oe=O.getParameter(O.UNPACK_ROW_LENGTH),je=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ut=O.getParameter(O.UNPACK_SKIP_PIXELS),Et=O.getParameter(O.UNPACK_SKIP_ROWS),Bn=O.getParameter(O.UNPACK_SKIP_IMAGES),Lt=W.isCompressedTexture?W.mipmaps[q]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Se,q,B.x,B.y,B.z,ye,ze,ke,Ke,Qe,Lt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Se,q,B.x,B.y,B.z,ye,ze,ke,Ke,Lt.data)):O.texSubImage3D(Se,q,B.x,B.y,B.z,ye,ze,ke,Ke,Qe,Lt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,je),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,Et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bn),q===0&&J.generateMipmaps&&O.generateMipmap(Se),he.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,he.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hl?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?is:Vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?It:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ul=class extends Ir{};ul.prototype.isWebGL1Renderer=!0;var la=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fi=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new D,Dr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var uf=new D,ff=new At,df=new At,C_=new D,pf=new rt,Uo=new D,zc=new Un,mf=new rt,Fc=new js,ha=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uo),this.boundingBox.expandByPoint(Uo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uo),this.boundingSphere.expandByPoint(Uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(i),e.ray.intersectsSphere(zc)!==!1&&(mf.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ff.fromBufferAttribute(i.attributes.skinIndex,e),df.fromBufferAttribute(i.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=df.getComponent(r);if(o!==0){let a=ff.getComponent(r);pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(C_.copy(uf).applyMatrix4(pf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ur=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},zr=class extends an{constructor(e=null,t=1,n=1,i,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gf=new rt,P_=new rt,ua=class s{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:P_;gf.multiplyMatrices(a,t[r]),gf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zr(t,e,e,Gn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ur),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},as=class extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new rt,xf=new rt,zo=[],vf=new $t,L_=new rt,vr=new Ye,_r=new Un,Sn=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),vf.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),_r.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Us),xf.multiplyMatrices(n,Us),vr.matrixWorld=xf,vr.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){let c=zo[o];c.instanceId=r,c.object=this,t.push(c)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_f=new D,yf=new D,Mf=new rt,Oc=new js,Fo=new Un,er=class extends Ht{constructor(e=new Rt,t=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_f.fromBufferAttribute(t,i-1),yf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_f.distanceTo(yf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Mf.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,M=_-1;v<M;v+=d){let S=p.getX(v),b=p.getX(v+1);if(l.fromBufferAttribute(g,S),h.fromBufferAttribute(g,b),Oc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,M=_-1;v<M;v+=d){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Oc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},bf=new D,Sf=new D,fa=class extends er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bf.fromBufferAttribute(t,i),Sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bf.distanceTo(Sf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Or=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wf=new rt,fl=new js,Oo=new Un,Bo=new D,pa=class extends Ht{constructor(e=new Rt,t=new Or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;wf.copy(i).invert(),fl.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=l.getX(p);Bo.fromBufferAttribute(u,g),Ef(Bo,g,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Bo.fromBufferAttribute(u,p),Ef(Bo,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ef(s,e,t,n,i,r,o){let a=fl.distanceSqToPoint(s);if(a<t){let c=new D;fl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Si=class extends an{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new be:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],o=[],a=new D,c=new rt;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(sn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(sn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new be,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dl=class extends Br{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ko=new D,Bc=new Wl,kc=new Wl,Hc=new Wl,pl=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ko.subVectors(i[0],i[1]).add(i[0]),l=ko);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ko.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,g),kc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,g),Hc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),kc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Bc.calc(c),kc.calc(c),Hc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function I_(s,e){let t=1-s;return t*t*e}function N_(s,e){return 2*(1-s)*s*e}function D_(s,e){return s*s*e}function Tr(s,e,t,n){return I_(s,e)+N_(s,t)+D_(s,n)}function U_(s,e){let t=1-s;return t*t*t*e}function z_(s,e){let t=1-s;return 3*t*t*s*e}function F_(s,e){return 3*(1-s)*s*s*e}function O_(s,e){return s*s*s*e}function Ar(s,e,t,n,i){return U_(s,e)+z_(s,t)+F_(s,n)+O_(s,i)}var ma=class extends Xn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,i.x,r.x,o.x,a.x),Ar(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ml=class extends Xn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,i.x,r.x,o.x,a.x),Ar(e,i.y,r.y,o.y,a.y),Ar(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Xn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,i.x,r.x,o.x),Tr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends Xn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,i.x,r.x,o.x),Tr(e,i.y,r.y,o.y),Tr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Tf(a,c.x,l.x,h.x,u.x),Tf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new be().fromArray(i))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:pl,CubicBezierCurve:ma,CubicBezierCurve3:ml,EllipseCurve:Br,LineCurve:ga,LineCurve3:gl,QuadraticBezierCurve:xa,QuadraticBezierCurve3:xl,SplineCurve:va}),_l=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new vl[i.type]().fromJSON(i))}return this}},_a=class extends _l{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new xa(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ma(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Br(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tr=class s extends Rt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=sn(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new be,d=new D,p=new D,x=new D,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let v=n+_*h*i,M=Math.sin(v),S=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*S,o.push(u.x,u.y,u.z),f.x=_/t,f.y=b/(e.length-1),a.push(f.x,f.y);let E=c[3*b+0]*M,C=c[3*b+1],y=c[3*b+0]*S;l.push(E,C,y)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,S=M,b=M+e.length,E=M+e.length+1,C=M+1;r.push(S,b,C),r.push(E,C,b)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var fn=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){let M=new D,S=new D,b=0,E=(t-e)/n;for(let C=0;C<=r;C++){let y=[],T=C/r,N=T*(t-e)+e;for(let I=0;I<=i;I++){let k=I/i,P=k*c+a,L=Math.sin(P),H=Math.cos(P);S.x=N*L,S.y=-T*n+g,S.z=N*H,u.push(S.x,S.y,S.z),M.set(L,E,H).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-T),y.push(p++)}x.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){let T=x[y][C],N=x[y+1][C],I=x[y+1][C+1],k=x[y][C+1];h.push(T,N,k),h.push(N,I,k),b+=6}l.addGroup(m,b,0),m+=b}function v(M){let S=p,b=new be,E=new D,C=0,y=M===!0?e:t,T=M===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),p++;let N=p;for(let I=0;I<=i;I++){let P=I/i*c+a,L=Math.cos(P),H=Math.sin(P);E.x=y*H,E.y=g*T,E.z=y*L,u.push(E.x,E.y,E.z),f.push(0,T,0),b.x=L*.5+.5,b.y=H*.5*T+.5,d.push(b.x,b.y),p++}for(let I=0;I<i;I++){let k=S+I,P=N+I;M===!0?h.push(P,P+1,k):h.push(P+1,P,k),C+=3}l.addGroup(m,C,M===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class s extends fn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yl=class s extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new D,M=new D,S=new D;for(let b=0;b<t.length;b+=3)d(t[b+0],v),d(t[b+1],M),d(t[b+2],S),c(v,M,S,_)}function c(_,v,M,S){let b=S+1,E=[];for(let C=0;C<=b;C++){E[C]=[];let y=_.clone().lerp(M,C/b),T=v.clone().lerp(M,C/b),N=b-C;for(let I=0;I<=N;I++)I===0&&C===b?E[C][I]=y:E[C][I]=y.clone().lerp(T,I/N)}for(let C=0;C<b;C++)for(let y=0;y<2*(b-C)-1;y++){let T=Math.floor(y/2);y%2===0?(f(E[C][T+1]),f(E[C+1][T]),f(E[C][T])):(f(E[C][T+1]),f(E[C+1][T+1]),f(E[C+1][T]))}}function l(_){let v=new D;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new D;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=g(_)/2/Math.PI+.5,S=m(_)/Math.PI+.5;o.push(M,1-S)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],M=o[_+2],S=o[_+4],b=Math.max(v,M,S),E=Math.min(v,M,S);b>.9&&E<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){let _=new D,v=new D,M=new D,S=new D,b=new be,E=new be,C=new be;for(let y=0,T=0;y<r.length;y+=9,T+=6){_.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(o[T+0],o[T+1]),E.set(o[T+2],o[T+3]),C.set(o[T+4],o[T+5]),S.copy(_).add(v).add(M).divideScalar(3);let N=g(S);x(b,T+0,_,N),x(E,T+2,v,N),x(C,T+4,M,N)}}function x(_,v,M,S){S<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var kr=class extends _a{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new _a().fromJSON(i))}return this}},B_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=td(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=W_(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Hr(r,o,t,a,c,d,0),o}};function td(s,e,t,n,i){let r,o;if(i===ty(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Af(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Af(r,s[r],s[r+1],o);return o&&Fa(o,o.next)&&(Vr(o),o=o.next),o}function cs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Fa(t,t.next)||qt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&K_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?H_(s,n,i,r):k_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Vr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=G_(cs(s),e,t),Hr(s,e,t,n,i,r,2)):o===2&&V_(s,e,t,n,i,r):Hr(cs(s),e,t,n,i,r,1);break}}}function k_(s){let e=s.prev,t=s,n=s.next;if(qt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Hs(i,a,r,c,o,l,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function H_(s,e,t,n){let i=s.prev,r=s,o=s.next;if(qt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Ml(d,p,e,t,n),_=Ml(x,g,e,t,n),v=s.prevZ,M=s.nextZ;for(;v&&v.z>=m&&M&&M.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Hs(a,h,c,u,l,f,v.x,v.y)&&qt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&Hs(a,h,c,u,l,f,M.x,M.y)&&qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Hs(a,h,c,u,l,f,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&Hs(a,h,c,u,l,f,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function G_(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Fa(i,r)&&nd(i,n,n.next,r)&&Gr(i,r)&&Gr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return cs(n)}function V_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$_(o,a)){let c=id(o,a);o=cs(o,o.next),c=cs(c,c.next),Hr(o,e,t,n,i,r,0),Hr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function W_(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=td(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(J_(l));for(i.sort(X_),r=0;r<i.length;r++)t=q_(i[r],t);return t}function X_(s,e){return s.x-e.x}function q_(s,e){let t=Y_(s,e);if(!t)return e;let n=id(t,s);return cs(n,n.next),cs(t,t.next)}function Y_(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Hs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Gr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Z_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Z_(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function K_(s,e,t,n){let i=s;do i.z===0&&(i.z=Ml(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j_(i)}function j_(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ml(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function J_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Hs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function $_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Q_(s,e)&&(Gr(s,e)&&Gr(e,s)&&ey(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||Fa(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Fa(s,e){return s.x===e.x&&s.y===e.y}function nd(s,e,t,n){let i=Go(qt(s,e,t)),r=Go(qt(s,e,n)),o=Go(qt(t,n,s)),a=Go(qt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ho(s,t,e)||r===0&&Ho(s,n,e)||o===0&&Ho(t,s,n)||a===0&&Ho(t,e,n))}function Ho(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Go(s){return s>0?1:s<0?-1:0}function Q_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&nd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Gr(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function ey(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function id(s,e){let t=new bl(s.i,s.x,s.y),n=new bl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Af(s,e,t,n){let i=new bl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ty(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Rr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Rf(e),Cf(n,e);let o=e.length;t.forEach(Rf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Cf(n,t[c]);let a=B_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Rf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Cf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ma=class s extends Rt{constructor(e=new kr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:ny,v,M=!1,S,b,E,C;m&&(v=m.getSpacedPoints(h),M=!0,f=!1,S=m.computeFrenetFrames(h,!1),b=new D,E=new D,C=new D),f||(g=0,d=0,p=0,x=0);let y=a.extractPoints(l),T=y.shape,N=y.holes;if(!Rr.isClockWise(T)){T=T.reverse();for(let O=0,Ee=N.length;O<Ee;O++){let ce=N[O];Rr.isClockWise(ce)&&(N[O]=ce.reverse())}}let k=Rr.triangulateShape(T,N),P=T;for(let O=0,Ee=N.length;O<Ee;O++){let ce=N[O];T=T.concat(ce)}function L(O,Ee,ce){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(Ee,ce)}let H=T.length,j=k.length;function $(O,Ee,ce){let Me,he,Xe,Fe=O.x-Ee.x,R=O.y-Ee.y,A=ce.x-O.x,Q=ce.y-O.y,me=Fe*Fe+R*R,_e=Fe*Q-R*A;if(Math.abs(_e)>Number.EPSILON){let ve=Math.sqrt(me),qe=Math.sqrt(A*A+Q*Q),De=Ee.x-R/ve,Ge=Ee.y+Fe/ve,le=ce.x-Q/qe,ht=ce.y+A/qe,ge=((le-De)*Q-(ht-Ge)*A)/(Fe*Q-R*A);Me=De+Fe*ge-O.x,he=Ge+R*ge-O.y;let Tt=Me*Me+he*he;if(Tt<=2)return new be(Me,he);Xe=Math.sqrt(Tt/2)}else{let ve=!1;Fe>Number.EPSILON?A>Number.EPSILON&&(ve=!0):Fe<-Number.EPSILON?A<-Number.EPSILON&&(ve=!0):Math.sign(R)===Math.sign(Q)&&(ve=!0),ve?(Me=-R,he=Fe,Xe=Math.sqrt(me)):(Me=Fe,he=R,Xe=Math.sqrt(me/2))}return new be(Me/Xe,he/Xe)}let K=[];for(let O=0,Ee=P.length,ce=Ee-1,Me=O+1;O<Ee;O++,ce++,Me++)ce===Ee&&(ce=0),Me===Ee&&(Me=0),K[O]=$(P[O],P[ce],P[Me]);let Z=[],te,oe=K.concat();for(let O=0,Ee=N.length;O<Ee;O++){let ce=N[O];te=[];for(let Me=0,he=ce.length,Xe=he-1,Fe=Me+1;Me<he;Me++,Xe++,Fe++)Xe===he&&(Xe=0),Fe===he&&(Fe=0),te[Me]=$(ce[Me],ce[Xe],ce[Fe]);Z.push(te),oe=oe.concat(te)}for(let O=0;O<g;O++){let Ee=O/g,ce=d*Math.cos(Ee*Math.PI/2),Me=p*Math.sin(Ee*Math.PI/2)+x;for(let he=0,Xe=P.length;he<Xe;he++){let Fe=L(P[he],K[he],Me);ae(Fe.x,Fe.y,-ce)}for(let he=0,Xe=N.length;he<Xe;he++){let Fe=N[he];te=Z[he];for(let R=0,A=Fe.length;R<A;R++){let Q=L(Fe[R],te[R],Me);ae(Q.x,Q.y,-ce)}}}let X=p+x;for(let O=0;O<H;O++){let Ee=f?L(T[O],oe[O],X):T[O];M?(E.copy(S.normals[0]).multiplyScalar(Ee.x),b.copy(S.binormals[0]).multiplyScalar(Ee.y),C.copy(v[0]).add(E).add(b),ae(C.x,C.y,C.z)):ae(Ee.x,Ee.y,0)}for(let O=1;O<=h;O++)for(let Ee=0;Ee<H;Ee++){let ce=f?L(T[Ee],oe[Ee],X):T[Ee];M?(E.copy(S.normals[O]).multiplyScalar(ce.x),b.copy(S.binormals[O]).multiplyScalar(ce.y),C.copy(v[O]).add(E).add(b),ae(C.x,C.y,C.z)):ae(ce.x,ce.y,u/h*O)}for(let O=g-1;O>=0;O--){let Ee=O/g,ce=d*Math.cos(Ee*Math.PI/2),Me=p*Math.sin(Ee*Math.PI/2)+x;for(let he=0,Xe=P.length;he<Xe;he++){let Fe=L(P[he],K[he],Me);ae(Fe.x,Fe.y,u+ce)}for(let he=0,Xe=N.length;he<Xe;he++){let Fe=N[he];te=Z[he];for(let R=0,A=Fe.length;R<A;R++){let Q=L(Fe[R],te[R],Me);M?ae(Q.x,Q.y+v[h-1].y,v[h-1].x+ce):ae(Q.x,Q.y,u+ce)}}}ee(),ue();function ee(){let O=i.length/3;if(f){let Ee=0,ce=H*Ee;for(let Me=0;Me<j;Me++){let he=k[Me];xe(he[2]+ce,he[1]+ce,he[0]+ce)}Ee=h+g*2,ce=H*Ee;for(let Me=0;Me<j;Me++){let he=k[Me];xe(he[0]+ce,he[1]+ce,he[2]+ce)}}else{for(let Ee=0;Ee<j;Ee++){let ce=k[Ee];xe(ce[2],ce[1],ce[0])}for(let Ee=0;Ee<j;Ee++){let ce=k[Ee];xe(ce[0]+H*h,ce[1]+H*h,ce[2]+H*h)}}n.addGroup(O,i.length/3-O,0)}function ue(){let O=i.length/3,Ee=0;pe(P,Ee),Ee+=P.length;for(let ce=0,Me=N.length;ce<Me;ce++){let he=N[ce];pe(he,Ee),Ee+=he.length}n.addGroup(O,i.length/3-O,1)}function pe(O,Ee){let ce=O.length;for(;--ce>=0;){let Me=ce,he=ce-1;he<0&&(he=O.length-1);for(let Xe=0,Fe=h+g*2;Xe<Fe;Xe++){let R=H*Xe,A=H*(Xe+1),Q=Ee+Me+R,me=Ee+he+R,_e=Ee+he+A,ve=Ee+Me+A;Ne(Q,me,_e,ve)}}}function ae(O,Ee,ce){c.push(O),c.push(Ee),c.push(ce)}function xe(O,Ee,ce){Pe(O),Pe(Ee),Pe(ce);let Me=i.length/3,he=_.generateTopUV(n,i,Me-3,Me-2,Me-1);fe(he[0]),fe(he[1]),fe(he[2])}function Ne(O,Ee,ce,Me){Pe(O),Pe(Ee),Pe(Me),Pe(Ee),Pe(ce),Pe(Me);let he=i.length/3,Xe=_.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);fe(Xe[0]),fe(Xe[1]),fe(Xe[3]),fe(Xe[1]),fe(Xe[2]),fe(Xe[3])}function Pe(O){i.push(c[O*3+0]),i.push(c[O*3+1]),i.push(c[O*3+2])}function fe(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return iy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vl[i.type]().fromJSON(i)),new s(n,e.options)}},ny={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new be(r,o),new be(a,c),new be(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-u),new be(f,1-p),new be(x,1-m)]:[new be(a,1-c),new be(h,1-u),new be(d,1-p),new be(g,1-m)]}};function iy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Oi=class s extends yl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ba=class s extends Rt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,p=new be;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,M=_+n+1,S=_+n+2,b=_+1;a.push(v,M,b),a.push(M,S,b)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ri=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,M=0;m===0&&o===0?M=.5/t:m===n&&c===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){let b=S/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(b+M,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],M=h[m][_],S=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&d.push(v,M,b),(m!==n-1||c<Math.PI)&&d.push(M,S,b)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nr=class s extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let x=p/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let x=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sa=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bi=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends Bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bt=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Vo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ry(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function sd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,a=2*t-n;break;case qo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:o=e,c=2*n-t;break;case qo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,M=d*g-d*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+_*o[l+S]+v*o[c+S]+M*o[u+S];return r}},wa=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},wl=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&sy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=os;var Hi=class extends Yn{};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Zs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Yn{};Ea.prototype.ValueTypeName="color";var wi=class extends Yn{};wi.prototype.ValueTypeName="number";var El=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},oi=class extends Yn{InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.DefaultInterpolation=os;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Yn{};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Zs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Yn{};Ei.prototype.ValueTypeName="vector";var ir=class{constructor(e,t=-1,n,i=Bl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ay(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=ry(c);c=Pf(c,1,h),l=Pf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,x){if(d.length!==0){let g=[],m=[];sd(d,g,m,p),g.length!==0&&x.push(new u(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let g=[],m=[];for(let _=0;_!==f[p].morphTargets.length;++_){let v=f[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new wi(".morphTargetInfluence["+x+"]",g,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Ei,d+".position",f,"pos",i),n(oi,d+".quaternion",f,"rot",i),n(Ei,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function oy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return Ea;case"quaternion":return oi;case"bool":case"boolean":return Hi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ay(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=oy(s.type);if(s.times===void 0){let t=[],n=[];sd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Tl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},cy=new Tl,Ti=class{constructor(e){this.manager=e!==void 0?e:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},Al=class extends Error{constructor(e,t){super(e),this.response=t}},Wr=class extends Ti{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=mi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0,x=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:M})=>{if(v)m.close();else{x+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let b=0,E=h.length;b<E;b++){let C=h[b];C.onProgress&&C.onProgress(S)}m.enqueue(M),_()}})}}});return new Response(g)}else throw new Al(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Di.add(e,l);let h=mi[e];delete mi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Rl=class extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Pr("img");function c(){h(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ta=class extends Ti{constructor(e){super(e)}load(e,t,n,i){let r=new an,o=new Rl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},sr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Aa=class extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gc=new rt,Lf=new D,If=new D,Xr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cl=class extends Xr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},rr=class extends sr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nf=new rt,yr=new D,Vc=new D,Pl=class extends Xr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf)}},Ra=class extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ll=class extends Xr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ca=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}};var Il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;en.multiplyQuaternionsFlat(e,o,e,t,e,n),en.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Xl="\\[\\]\\.:\\/",ly=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",hy="[^"+Xl.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",ql),fy=/(WCOD+)?/.source.replace("WCOD",hy),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),my=new RegExp("^"+uy+fy+dy+py+"$"),gy=["material","materials","bones","map"],Nl=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ly,"")}static parseTrackName(e){let t=my.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Nl;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:zs,endingEnd:zs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case fm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Bl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===um;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Na){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Fs,i.endingEnd=Fs):(e?i.endingStart=this.zeroSlopeAtStart?Fs:zs:i.endingStart=qo,t?i.endingEnd=this.zeroSlopeAtEnd?Fs:zs:i.endingEnd=qo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},xy=new Float32Array(1),Pa=class extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Il(zt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new wa(new Float32Array(2),new Float32Array(2),1,xy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?ir.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Bl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Dl(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?ir.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var Jr=yp(ld());var xt=(s,e,t)=>s<e?e:s>t?t:s,dt=(s,e,t)=>s+(e-s)*t,hd=s=>s*s*(3-2*s),Qn=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function wn(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var Jl=12345,Nt=()=>(Jl=Jl*1664525+1013904223>>>0,Jl/4294967296),dn=s=>s[Nt()*s.length|0];function us(s,e,t,n,i,r,o){let a=i-t,c=r-n,l=a*a+c*c||1e-9,h=((s-t)*a+(e-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=t+a*h,o.z=n+c*h,o.t=h,o}function ud(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let o=t[i][0],a=t[i][1],c=t[r][0],l=t[r][1];a>e!=l>e&&s<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}var fd=`
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
      }`,dd=`
          // staggered stone pattern: returns 0 in the joints, 1 on the stone; id = per-stone random
          float hdSetts(vec2 p, vec2 size, float joint, float aa, out float id){
            vec2 q = p / size; q.x += 0.5 * floor(q.y);
            vec2 c = floor(q); id = h21(c);
            vec2 f = fract(q); vec2 e = min(f, 1.0 - f) * size;
            return smoothstep(joint - aa, joint + aa, min(e.x, e.y));
          }`,$l=`{
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
        }`,pd=`
          float hdWave(vec2 p){
            float t = uTime;
            return vnoise(p * vec2(0.35, 0.9) + vec2(t * 0.55, t * 0.12)) * 0.6
                 + vnoise(p * vec2(1.3, 2.4) + vec2(-t * 0.8, t * 0.35)) * 0.3
                 + vnoise(p * 5.5 + vec2(t * 1.3, -t * 0.9)) * 0.1;
          }`,Ql=`{
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
        }`,md=`varying vec3 vF; varying vec4 vD;
          float hdBox(vec2 p, vec2 lo, vec2 hi, vec2 aa){
            vec2 a = smoothstep(lo - aa, lo + aa, p), b = 1.0 - smoothstep(hi - aa, hi + aa, p);
            return a.x * a.y * b.x * b.y;
          }
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,eh=`{
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
        }`,gd=`{
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
        }`,xd=`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
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
      }`;var Bt={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new At(0,0,1,0)},uFar:{value:null},uWorld:{value:new be(1,1)},uSun:{value:new D(0,1,0)}},ci=class{constructor(e){this.cell=e,this.m=new Map,this.stamp=0}add(e,t,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(t,i)/a),l=Math.floor(Math.max(t,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let p=f*8192+d,x=this.m.get(p);x||this.m.set(p,x=[]),x.push(e),o&&o.add(p)}}query(e,t,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((e-n)/r),c=Math.floor((e+n)/r),l=Math.floor((t-n)/r),h=Math.floor((t+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let p=0;p<d.length;p++){let x=d[p];x._st!==o&&(x._st=o,i.push(x))}}return i}removeTag(e,t){for(let n of t){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==e);r.length?this.m.set(n,r):this.m.delete(n)}}};function ai(s,e="",t="",n=""){s.uniforms.uNight=Bt.uNight,s.uniforms.uTime=Bt.uTime,s.uniforms.uLamp=Bt.uLamp,s.uniforms.uLampRect=Bt.uLampRect,s.uniforms.uFar=Bt.uFar,s.uniforms.uWorld=Bt.uWorld,s.uniforms.uSun=Bt.uSun,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      ${fd}
      ${t}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var vd=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],_d=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],yd=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],Md=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],bd=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],Ny={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8,clad:9},jr={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},Ga=new Be;function Sd(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Int16Array(t.buffer)}function wd(s,e,t,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>e-1.001?e-1.001:o,a=a<0?0:a>t-1.001?t-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*e+c,d=s[f],p=s[f+1],x=s[f+e],g=s[f+e+1];return h+u<=1?d+(p-d)*h+(x-d)*u:g+(x-g)*(1-h)+(p-g)*(1-u)}var En=class{constructor(e,t,n={}){this.d=e,this.base=t,this.mobile=!!n.mobile;let i=e.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=Sd(e.hf),a=Sd(e.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,e.hf=e.hc=null,Bt.uWorld.value.set(this.W,this.H),this.group=new Ot,this.colliders=new ci(8),this.decks=new ci(16),this.names=new ci(24),this.edgeGrid=new ci(24),this.pedGrid=new ci(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:e.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?768:1024,this.fountains=[],this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(e,t){let n=e-this.fx,i=t-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?wd(this.hf,this.fn,this.fn,this.fs,n,i):wd(this.hc,this.cnx,this.cnz,this.cs,e,t)}surfaceY(e,t,n=1e9){let i=this.hAt(e,t),r=this.decks.query(e,t,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=us(e,t,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(e-c.x,t-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(e,t,n){return this.surfaceY(e,t,n)>this.hAt(e,t)+.5}streetAt(e,t){let n=this.names.query(e,t,30,this._tmp),i=null,r=30;for(let o of n){let a=us(e,t,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(e-a.x,t-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(e){let t=new Image;await new Promise(o=>{t.onload=o,t.onerror=o,t.src=this.base+"far.jpg"}),this.farImg=t;let n=new an(t);n.colorSpace=It,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,Bt.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new Si(i);return r.colorSpace=Mn,r.minFilter=Jt,r.generateMipmaps=!1,r.flipY=!1,Bt.uLamp.value=r,e&&e(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),e&&e(.5),this.buildRoadGraph(),this.buildPedGraph(),e&&e(.8),this.buildPylon(),this.buildLod(),e&&e(1),this}indexLines(){let e=this.T,t=()=>this.tiles.map(()=>[]);this.ix={road:t(),foot:t(),cross:t(),steps:t(),tram:t(),rail:t()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/e));f<=Math.min(this.ntz-1,Math.floor(u/e));f++)for(let d=Math.max(0,Math.floor(c/e));d<=Math.min(this.ntx-1,Math.floor(h/e));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){this.farMat=new bt({color:16777215,side:Wt}),this.farMat.onBeforeCompile=i=>ai(i,"","",`{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`),this.farMat.customProgramCacheKey=()=>"terrFar";let e=this.Rn;if(this.groundHead=dd,this.groundBody=$l.replace("texture2D(uGMask, vWP.xz / uWorld).rgb","texture2D(map, vMapUv).rgb").replace("diffuseColor.rgb = col;",`vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(e*.55).toFixed(1)}, ${(e*.95).toFixed(1)}, dist));`),this.groundBody===$l)throw new Error("ground shader patch failed");this.wallMat=new bt({vertexColors:!0,side:Wt});let n=eh.replace("bool old = kid < 0.5,","bool panel = kid > 5.5 && kid < 6.5; bool clad = kid > 8.5; bool old = kid < 0.5 || (kid > 6.5 && kid < 8.5),").replace("float gType = isGround * (old ? 1.0 : 0.0);","float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);").replace("} else if (util) {",`} else if (panel) {
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
          } else if (util) {`);if(n.length<eh.length+1700)throw new Error("facade shader patch failed");this.wallMat.onBeforeCompile=i=>ai(i,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",md,n),this.roofMat=new bt({vertexColors:!0,side:Wt,flatShading:!0}),this.roofMat.onBeforeCompile=i=>ai(i,"","",gd),this.stoneMat=new bt({vertexColors:!0,side:Wt,flatShading:!0}),this.stoneMat.onBeforeCompile=i=>ai(i,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new fn(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new Oi(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new fn(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new ri(.28,6,4),this.headGeo.translate(0,4.7,0);for(let i of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])i.userData.shared=!0;this.trunkMat=new bt({color:4864040}),this.crownMat=new bt({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=i=>ai(i,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new bt({color:2895408}),this.lampHeadMat=new tn({color:16767392}),this.gateMat=new bt({color:14209212})}tdist(e,t,n){let i=Math.max(e.x0-t,0,t-(e.x0+this.T)),r=Math.max(e.z0-n,0,n-(e.z0+this.T));return Math.hypot(i,r)}fetchTile(e){return e.state=1,e.has?fetch(this.base+"t/"+e.i+"_"+e.j+".json").then(t=>t.ok?t.json():jr).catch(()=>jr).then(t=>{e.state===1&&(e.data=t,e.state=2)}):(e.data=jr,e.state=2,Promise.resolve())}unloadTile(e){this.genTile===e&&(this.gen=null,this.genTile=null);for(let t of e.objs)this.group.remove(t),t.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});e.objs.length=0,this.colliders.removeTag(e,e.keys),e.keys.clear(),this.gates=this.gates.filter(t=>t.tile!==e),this.fountains=this.fountains.filter(t=>t.tile!==e),e.data=null,e.state=0,e.lampPts=[],e.lod&&(e.lod.visible=!0),this.dropTex(e),this.lampDirty=!0}dropTex(e){e.tex&&(e.tex.dispose(),e.tex=null,e.cv=null,e.nearMat&&(e.nearMat.dispose(),e.nearMat=null),e.terr&&(e.terr.material=this.farMat))}runGen(e){let t=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-t>e)););}update(e,t,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,e,t);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(e-this.lampC[0],t-this.lampC[1])>190)&&this.paintLamps(e,t)}async prime(e,t){let n=this.tiles.filter(i=>this.tdist(i,e,t)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,e,t)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,e,t)<this.Rn&&this.paintTile(i);this.paintLamps(e,t)}makeTerrain(e){let t=e.fine?this.fs:this.cs,n=Math.round(this.T/t)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let p=0;p<n;p++)for(let x=0;x<n;x++){let g=p*n+x,m=e.x0+x*t,_=e.z0+p*t;r[g*3]=m,r[g*3+1]=this.hAt(m,_),r[g*3+2]=_;let v=this.hAt(m-t,_)-this.hAt(m+t,_),M=this.hAt(m,_-t)-this.hAt(m,_+t),S=Math.hypot(v,2*t,M);o[g*3]=v/S,o[g*3+1]=2*t/S,o[g*3+2]=M/S,a[g*2]=x*t/this.T,a[g*2+1]=p*t/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let p=0;p<n-1;p++)for(let x=0;x<n-1;x++){let g=p*n+x,m=g+1,_=g+n,v=_+1;c[l++]=g,c[l++]=_,c[l++]=m,c[l++]=m,c[l++]=_,c[l++]=v}let h=n*n,u=p=>{let x=h;for(let g=0;g<n;g++){let m=p(g);if(r[h*3]=r[m*3],r[h*3+1]=r[m*3+1]-5,r[h*3+2]=r[m*3+2],o[h*3]=o[m*3],o[h*3+1]=o[m*3+1],o[h*3+2]=o[m*3+2],a[h*2]=a[m*2],a[h*2+1]=a[m*2+1],g){let _=p(g-1),v=x+g-1,M=x+g;c[l++]=_,c[l++]=v,c[l++]=m,c[l++]=m,c[l++]=v,c[l++]=M}h++}};u(p=>p),u(p=>(n-1)*n+p),u(p=>p*n),u(p=>p*n+n-1);let f=new Rt;f.setAttribute("position",new Ft(r,3)),f.setAttribute("normal",new Ft(o,3)),f.setAttribute("uv",new Ft(a,2)),f.setIndex(new Ft(c,1)),f.computeBoundingSphere();let d=new Ye(f,e.nearMat||this.farMat);d.receiveShadow=!0,e.terr=d,this.group.add(d)}buildWater(){let e=new bi(this.W+3e3,this.H+3e3,1,1);e.rotateX(-Math.PI/2),e.translate(this.W/2,this.water,this.H/2);let t=new bt({color:16777215}),n=Ql.replace("vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)","vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)").replace("float fres = 0.04 + 0.96 *","float fres = 0.12 + 0.88 *");if(n===Ql)throw new Error("water shader patch failed");t.onBeforeCompile=r=>ai(r,"",pd,n),this.waterMat=t;let i=new Ye(e,t);i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i)}paintTile(e){let n=this.T,i=e.data||jr,r=document.createElement("canvas");r.width=r.height=384;let o=r.getContext("2d"),a=384/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=d=>{o.beginPath();for(let p=0;p<d.length;p++){let x=d[p][0]/10,g=d[p][1]/10;p?o.lineTo(x,g):o.moveTo(x,g)}},l=d=>{o.beginPath();for(let p of d){for(let x=0;x<p.length;x++){let g=p[x][0]/10+e.x0,m=p[x][1]/10+e.z0;x?o.lineTo(g,m):o.moveTo(g,m)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let d of i.green)l(d),o.fill("evenodd");o.fillStyle="#b0a389";for(let d of i.parea)l(d),o.fill("evenodd");o.fillStyle="#26323a";for(let d of i.water)l(d),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(d=>!d.b);o.strokeStyle="#a39a8a";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+3.6,c(d.p),o.stroke());o.strokeStyle="#6f685e";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+.6,c(d.p),o.stroke());o.strokeStyle="#a69c86";for(let d of this.ix.foot[e.k])o.lineWidth=d.sw?2.2:2.6,c(d.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let d of this.ix.steps[e.k])c(d),o.stroke();o.strokeStyle="#b5a88e";for(let d of u)d.c===5&&(o.lineWidth=d.w,c(d.p),o.stroke());o.lineCap="butt";for(let d of this.ix.rail[e.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(d),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(d),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(d=>d.c<=4).sort((d,p)=>d.c-p.c);for(let d of f)o.strokeStyle=d.s?"#615850":d.pk?"#46464a":"#3a3b40",o.lineWidth=d.w,c(d.p),o.stroke();o.lineCap="butt";for(let d of f)d.c<2||d.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,d.o?d.w>7&&(o.setLineDash([3,6]),c(d.p),o.stroke()):(o.setLineDash(d.c>=4?[]:[3,6]),c(d.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let d of this.ix.tram[e.k])d.b||(c(d.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let d of this.ix.tram[e.k])if(!d.b)for(let p of[-.72,.72]){o.beginPath();let x=d.p;for(let g=0;g<x.length;g++){let m=x[Math.max(0,g-1)],_=x[Math.min(x.length-1,g+1)],v=_[0]-m[0],M=_[1]-m[1],S=Math.hypot(v,M)||1,b=x[g][0]/10-M/S*p,E=x[g][1]/10+v/S*p;g?o.lineTo(b,E):o.moveTo(b,E)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let d of this.ix.cross[e.k])c(d),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let d of i.bld)(!d.m||d.m<1)&&(l([d.o]),o.fill());e.cv=r,this.paintMask(e)}paintMask(e){let t=this.texRes,n=this.T,i=e.data||jr,r=document.createElement("canvas");r.width=r.height=t;let o=r.getContext("2d",{alpha:!1}),a=t/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=p=>{o.beginPath();for(let x=0;x<p.length;x++){let g=p[x][0]/10,m=p[x][1]/10;x?o.lineTo(g,m):o.moveTo(g,m)}},l=p=>{o.beginPath();for(let x of p){for(let g=0;g<x.length;g++){let m=x[g][0]/10+e.x0,_=x[g][1]/10+e.z0;g?o.lineTo(m,_):o.moveTo(m,_)}o.closePath()}};o.fillStyle="#0f0",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#000",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#0f0";for(let p of i.green)l(p),o.fill("evenodd");o.fillStyle="#00f";for(let p of i.parea)l(p),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(p=>!p.b);o.strokeStyle="#000";for(let p of u)p.c>=1&&p.c<=4&&(o.lineWidth=p.w+3.6,c(p.p),o.stroke());for(let p of this.ix.foot[e.k])o.lineWidth=p.sw?2.2:2.6,c(p.p),o.stroke();o.lineWidth=3;for(let p of this.ix.steps[e.k])c(p),o.stroke();o.lineWidth=4.2;for(let p of this.ix.rail[e.k])c(p),o.stroke();o.strokeStyle="#00f";for(let p of u)p.c===5&&(o.lineWidth=p.w,c(p.p),o.stroke());for(let p of u.filter(x=>x.c<=4).sort((x,g)=>x.c-g.c)){let x=p.c===0&&(p.s||p.nv);o.strokeStyle=x?"#00f":p.s?"#f0f":"#f00",o.lineWidth=p.w,c(p.p),o.stroke()}let f=new Si(r);f.colorSpace=Mn,f.anisotropy=4,f.flipY=!1,f.minFilter=Wn,f.generateMipmaps=!0,e.tex=f;let d=new bt({map:f,side:Wt});d.onBeforeCompile=p=>ai(p,"",this.groundHead,this.groundBody),d.customProgramCacheKey=()=>"terrNear",e.nearMat=d,e.terr&&(e.terr.material=d),f.onUpdate=()=>{r.width=r.height=1}}drawGround(e,t,n,i){this.farImg&&this.farImg.width&&e.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,t,n)<i&&e.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(e,t){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(e/48)*48-1152/2,a=Math.round(t/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}Bt.uLampRect.value.set(o,a,1152,0),Bt.uLamp.value.needsUpdate=!0,this.lampC=[e,t],this.lampDirty=!1,this.lampT=40}emitBuilding(e,t,n,i,r,o,a){let c=1e9,l=-1e9;for(let y of n){let T=this.hAt(y[0],y[1]);T<c&&(c=T),T>l&&(l=T)}let h=t.h,u=c+Math.max(h,l-c+2.5),f=!a&&t.g&&h>6&&!(t.m>.5),d=f?c+4.3:t.m>.5?c+t.m:c-3,p=Ga;t.c?p.set(t.c):t.k==="modern"?p.set(_d[r*_d.length|0]):t.k==="util"?p.set("#a8a296"):t.k==="church"?p.set("#eee4cc"):t.k==="house"?p.set(yd[r*yd.length|0]):t.k==="block"?p.set(Md[r*Md.length|0]):t.k==="panel"?p.set("#d9d2c0"):p.set(vd[r*vd.length|0]);let x=p.r,g=p.g,m=p.b,_=t.l||Math.max(1,Math.round(h/(t.k==="panel"?2.9:3.4))),v=t.t?7.5:xt(h/Math.max(1,_),2.7,5.5),M=Ny[t.k]??0,S=t.k==="modern"?2.6:t.k==="church"?5:t.k==="panel"?3:t.k==="house"?3.8:3.4,b=[n,...i];for(let y of b){let T=y.length,N=0;for(let P=0;P<T;P++){let L=y[P],H=y[(P+1)%T];N+=L[0]*H[1]-H[0]*L[1]}let I=(N>0?-1:1)*(y===n?1:-1),k=t.p?.06:0;for(let P=0;P<T;P++){let L=y[P],H=y[(P+1)%T],j=Math.hypot(H[0]-L[0],H[1]-L[1]);if(j<.05)continue;let $=j<2.2?0:Math.max(1,Math.round(j/S)),K=d-c,Z=u-c,te=$?0:-1,oe=$||-1,X=j/Math.max(1,$),ee=(H[1]-L[1])/j,ue=-(H[0]-L[0])/j,pe=ee*I*k,ae=ue*I*k,xe=L[0]+pe,Ne=L[1]+ae,Pe=H[0]+pe,fe=H[1]+ae;e.wp.push(xe,d,Ne,Pe,d,fe,Pe,u,fe,xe,d,Ne,Pe,u,fe,xe,u,Ne),e.wf.push(te,K,X,oe,K,X,oe,Z,X,te,K,X,oe,Z,X,te,Z,X);for(let O=0;O<6;O++)e.wn.push(ee,0,ue),e.wc.push(x,g,m),e.wd.push(v,M,r,u-c);!a&&!(t.m>=2)&&!f&&t.k!=="roof"&&t.k!=="ruin"&&this.colliders.add({ax:L[0],az:L[1],bx:H[0],bz:H[1],y0:d-50,y1:u,kind:"b",tag:o},L[0],L[1],H[0],H[1],o.keys)}}let E=[],C=[];for(let y of n)E.push(y[0],y[1]);for(let y of i){C.push(E.length/2);for(let T of y)E.push(T[0],T[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let y=(0,Jr.default)(E,C);for(let T=0;T<y.length;T++)e.rp.push(E[y[T]*2],d,E[y[T]*2+1]),e.rc.push(.35,.33,.3)}if(!a&&t.r>.3&&t.s!=="f")this.pitchedRoof(n,i,E,C,u,t,r,e.rp,e.rc);else{let y=(0,Jr.default)(E,C);t.rc?p.set(t.rc):p.set(t.k==="modern"?"#5d5f63":t.k==="util"?"#6c6a66":t.k==="panel"?"#6f6c66":"#615c58");let T=.9+r*.2;for(let N=0;N<y.length;N++)e.rp.push(E[y[N]*2],u,E[y[N]*2+1]),e.rc.push(p.r*T,p.g*T,p.b*T);if(t.m>.5)for(let N=y.length-1;N>=0;N--)e.rp.push(E[y[N]*2],d,E[y[N]*2+1]),e.rc.push(p.r*.6,p.g*.6,p.b*.6)}}pitchedRoof(e,t,n,i,r,o,a,c,l){let h=(0,Jr.default)(n,i),u=[];for(let I=0;I<n.length;I+=2)u.push([n[I],n[I+1]]);let f=[];for(let I of[e,...t])for(let k=0;k<I.length;k++)f.push([I[k],I[(k+1)%I.length]]);let d=0;for(let I=0;I<e.length;I++){let k=e[I],P=e[(I+1)%e.length];d+=k[0]*P[1]-P[0]*k[1]}d=Math.abs(d/2);let p=o.k==="house"||this.mobile,x=p?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),g=[];for(let I=0;I<h.length;I+=3)g.push([h[I],h[I+1],h[I+2]]);let m=new Map,_=(I,k)=>{let P=I<k?I*1e6+k:k*1e6+I,L=m.get(P);return L===void 0&&(L=u.length,u.push([(u[I][0]+u[k][0])/2,(u[I][1]+u[k][1])/2]),m.set(P,L)),L},v=(I,k)=>Math.hypot(u[I][0]-u[k][0],u[I][1]-u[k][1])>x;for(let I=0;I<(p?4:7);I++){let k=!1,P=[];for(let L of g){let H=v(L[0],L[1]),j=v(L[1],L[2]),$=v(L[2],L[0]),K=H+j+$;if(!K){P.push(L);continue}k=!0;let[Z,te,oe]=L,X=[H,j,$];if(K===1){for(;!X[0];)[Z,te,oe]=[te,oe,Z],X=[X[1],X[2],X[0]];let ee=_(Z,te);P.push([Z,ee,oe],[ee,te,oe])}else if(K===2){for(;X[2];)[Z,te,oe]=[te,oe,Z],X=[X[1],X[2],X[0]];let ee=_(Z,te),ue=_(te,oe);P.push([Z,ee,ue],[ee,te,ue],[Z,ue,oe])}else{let ee=_(Z,te),ue=_(te,oe),pe=_(oe,Z);P.push([Z,ee,pe],[ee,te,ue],[pe,ue,oe],[ee,ue,pe])}}if(g=P,!k)break}let M=u.map(([I,k])=>{let P=1e9;for(let[L,H]of f){let j=H[0]-L[0],$=H[1]-L[1],K=j*j+$*$||1e-9,Z=((I-L[0])*j+(k-L[1])*$)/K;Z=Z<0?0:Z>1?1:Z;let te=L[0]+j*Z-I,oe=L[1]+$*Z-k,X=te*te+oe*oe;X<P&&(P=X)}return Math.sqrt(P)}),S=.01;for(let I of M)S=Math.max(S,I);let b=o.r,E;o.s==="d"?E=M.map(I=>b*Math.sqrt(Math.max(0,1-(1-I/S)**2))):o.s==="p"?E=M.map(I=>b*I/S):E=M.map(I=>Math.min(I*.82,b+1.2));let C=Ga;o.rc?C.set(o.rc):C.set(bd[wn(a*1e6|0)*bd.length|0]);let y=C.r,T=C.g,N=C.b;for(let I of g){let k=.88+wn(I[0]*31+I[1])*.1;for(let P of I)c.push(u[P][0],r+E[P],u[P][1]),l.push(y*k,T*k,N*k)}}meshesFrom(e,t=!0){let n=[];if(e.wp.length){let i=new Rt;i.setAttribute("position",new nt(e.wp,3)),i.setAttribute("normal",new nt(e.wn,3)),i.setAttribute("color",new nt(e.wc,3)),i.setAttribute("fuv",new nt(e.wf,3)),i.setAttribute("fdat",new nt(e.wd,4)),i.computeBoundingSphere();let r=new Ye(i,this.wallMat);r.castShadow=r.receiveShadow=t,n.push(r)}if(e.rp.length){let i=new Rt;i.setAttribute("position",new nt(e.rp,3)),i.setAttribute("color",new nt(e.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new Ye(i,this.roofMat);r.castShadow=r.receiveShadow=t,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let e=new Map;this.d.tall.forEach((t,n)=>{let i=t.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=xt(Math.floor(r/this.T),0,this.ntx-1),c=xt(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=e.get(l);h||e.set(l,h=this.newArrays()),this.emitBuilding(h,t,i,[],wn(n*613+7),l,!0)});for(let[t,n]of e){let i=new Ot;for(let r of this.meshesFrom(n,!1))i.add(r);t.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(e){let t=e.data,n=this.T,i=e.x0,r=e.z0,o=new rt,a=new en,c=new D,l=new D,h=new D(0,1,0),u=t.trees.length;if(u){let _=new Sn(this.trunkGeo,this.trunkMat,u),v=new Sn(this.crownGeo,this.crownMat,u);for(let S=0;S<u;S++){let b=t.trees[S][0]/10+i,E=t.trees[S][1]/10+r,C=e.k*4099+S,y=.75+wn(C*3+1)*.6,T=this.hAt(b,E);a.setFromAxisAngle(h,wn(C)*6.28),o.compose(l.set(b,T,E),a,c.set(y,y*(.9+wn(C*5)*.3),y)),_.setMatrixAt(S,o),v.setMatrixAt(S,o),Ga.setHSL(.22+wn(C*11)*.08,.38+wn(C*17)*.2,.22+wn(C*19)*.1),v.setColorAt(S,Ga),this.colliders.add({ax:b-.25,az:E,bx:b+.25,bz:E,y0:T-2,y1:T+3,kind:"t",tag:e},b-.3,E-.3,b+.3,E+.3,e.keys)}_.castShadow=v.castShadow=!this.mobile||u<500,v.receiveShadow=!0,_.frustumCulled=v.frustumCulled=!1;let M=new Ot;M.add(_,v),e.objs.push(M),this.group.add(M)}yield;let f=t.lamps.map(_=>[_[0]/10+i,_[1]/10+r]),d=new ci(20),p=[];for(let _ of f)d.add(_,_[0],_[1],_[0],_[1]);for(let _ of this.ix.road[e.k]){if(_.b||_.c<1||_.c>5)continue;let v=_.p,M=14+wn(v[0][0]*7+v[0][1])*10,S=1;for(let b=0;b<v.length-1;b++){let E=v[b][0]/10,C=v[b][1]/10,y=v[b+1][0]/10,T=v[b+1][1]/10,N=Math.hypot(y-E,T-C);if(!(N<.01)){for(;M<N;){let I=M/N,k=-(T-C)/N,P=(y-E)/N,L=_.c===5?0:_.w/2+.9,H=E+(y-E)*I+k*L*S,j=C+(T-C)*I+P*L*S;if(H>=i&&j>=r&&H<i+n&&j<r+n&&!d.query(H,j,13,p).length){let $=[H,j];f.push($),d.add($,H,j,H,j)}S=-S,M+=_.c>=3?26:30}M-=N}}}e.lampPts=f;let x=f.filter(([_,v])=>this.surfaceY(_,v)===this.hAt(_,v));if(x.length){let _=new Sn(this.postGeo,this.postMat,x.length),v=new Sn(this.headGeo,this.lampHeadMat,x.length);x.forEach(([S,b],E)=>{o.makeTranslation(S,this.hAt(S,b),b),_.setMatrixAt(E,o),v.setMatrixAt(E,o),this.colliders.add({ax:S-.1,az:b,bx:S+.1,bz:b,y0:-50,y1:999,kind:"p",tag:e},S-.2,b-.2,S+.2,b+.2,e.keys)}),_.frustumCulled=v.frustumCulled=!1;let M=new Ot;M.add(_,v),e.objs.push(M),this.group.add(M)}yield;let g=this.newArrays(),m=this.gates.length;for(let _=0;_<t.bld.length;_++){let v=t.bld[_];if(v.n==="UFO")continue;v.n==="Kostol sv. Al\u017Ebety"&&(v.c="#9cc4e8",v.rc="#5f86b4");let M=v.o.map(b=>[b[0]/10+i,b[1]/10+r]),S=(v.i||[]).map(b=>b.map(E=>[E[0]/10+i,E[1]/10+r]));this.emitBuilding(g,v,M,S,wn(e.k*7919+_*977+13),e,!1),_%24===23&&(yield)}for(let _=m;_<this.gates.length;_++){let v=this.gates[_],M=v.outer;if(v.tile!==e)continue;let S=0,b=0;for(let C of M)S+=C[0],b+=C[1];S/=M.length,b/=M.length;let E=M.slice().sort((C,y)=>Math.hypot(y[0]-S,y[1]-b)-Math.hypot(C[0]-S,C[1]-b)).slice(0,4);for(let C of E){let y=C[0]+(S-C[0])*.18,T=C[1]+(b-C[1])*.18,N=v.bot-v.gmin+3,I=new Ye(new Xt(1.8,N,1.8),this.gateMat);I.position.set(y,v.gmin-3+N/2,T),I.castShadow=I.receiveShadow=!0,e.objs.push(I),this.group.add(I),this.colliders.add({ax:y-.9,az:T,bx:y+.9,bz:T,y0:-50,y1:v.bot,kind:"b",tag:e},y-1,T-1,y+1,T+1,e.keys),this.colliders.add({ax:y,az:T-.9,bx:y,bz:T+.9,y0:-50,y1:v.bot,kind:"b",tag:e},y-1,T-1,y+1,T+1,e.keys)}}yield;for(let _ of this.meshesFrom(g))e.objs.push(_),this.group.add(_);if(yield,this.buildMarkings(e),yield,this.buildFountains(e),yield,t.walls.length){let _=[],v=[],M=new Be,S=(C,y,T,N,I,k,P,L,H)=>{let j=Math.hypot(T-C,N-y);if(j<.05)return;let $=-(N-y)/j*H*.5,K=(T-C)/j*H*.5,Z=[[C+$,y+K],[T+$,N+K],[T-$,N-K],[C-$,y-K]],te=(ee,ue,pe,ae)=>{_.push(...ee,...ue,...pe,...ee,...pe,...ae);for(let xe=0;xe<6;xe++)v.push(M.r,M.g,M.b)},oe=ee=>ee===0||ee===3?I:k,X=ee=>ee===0||ee===3?P:L;for(let ee=0;ee<4;ee++){let ue=(ee+1)%4;te([Z[ee][0],oe(ee),Z[ee][1]],[Z[ue][0],oe(ue),Z[ue][1]],[Z[ue][0],X(ue),Z[ue][1]],[Z[ee][0],X(ee),Z[ee][1]])}te([Z[0][0],X(0),Z[0][1]],[Z[1][0],X(1),Z[1][1]],[Z[2][0],X(2),Z[2][1]],[Z[3][0],X(3),Z[3][1]])};for(let C of t.walls){let y=C.p.map(N=>[N[0]/10+i,N[1]/10+r]),T=C.k==="c"?2.4:C.k==="r"?.8:.45;M.set(C.k==="c"?"#a39a88":C.k==="r"?"#8f887a":"#a8a092");for(let N=0;N<y.length-1;N++){let[I,k]=y[N],[P,L]=y[N+1],H=this.hAt(I,k),j=this.hAt(P,L),$=Math.min(C.h,C.k==="c"?9:4);if(S(I,k,P,L,H-2,j-2,H+$,j+$,T),this.colliders.add({ax:I,az:k,bx:P,bz:L,y0:Math.min(H,j)-3,y1:Math.max(H,j)+$,kind:"w",tag:e},I,k,P,L,e.keys),C.k==="c"){let K=Math.hypot(P-I,L-k);for(let Z=.6;Z<K-.6;Z+=2.4){let te=Z/K,oe=Math.min(1,(Z+1.2)/K),X=dt(H,j,te)+$,ee=dt(H,j,oe)+$;S(I+(P-I)*te,k+(L-k)*te,I+(P-I)*oe,k+(L-k)*oe,X,ee,X+1.1,ee+1.1,T)}}}}let b=new Rt;b.setAttribute("position",new nt(_,3)),b.setAttribute("color",new nt(v,3)),b.computeVertexNormals();let E=new Ye(b,this.stoneMat);E.castShadow=E.receiveShadow=!0,e.objs.push(E),this.group.add(E)}e.lod&&(e.lod.visible=!1),e.state=4,this.lampDirty=!0}buildMarkings(e){let t=[],n=[],i=this.T,r=e.x0,o=e.z0,a=(S,b)=>S>=r&&b>=o&&S<r+i&&b<o+i,c=(S,b,E,C,y)=>{t.push(...S,...b,...E,...S,...E,...C);for(let T=0;T<6;T++)n.push(y[0],y[1],y[2])},l=S=>S.map(b=>[b[0]/10,b[1]/10]),h=(S,b)=>{let E=[],C=0;for(let y=0;y<S.length-1;y++){let[T,N]=S[y],[I,k]=S[y+1],P=Math.hypot(I-T,k-N);if(P<.01)continue;let L=Math.max(1,Math.ceil(P/b)),H=(I-T)/P,j=(k-N)/P;for(let $=0;$<L;$++)E.push({x:T+(I-T)*$/L,z:N+(k-N)*$/L,s:C+P*$/L,dx:H,dz:j});C+=P,y===S.length-2&&E.push({x:I,z:k,s:C,dx:H,dz:j})}for(let y=1;y<E.length-1;y++){let T=E[y-1],N=E[y+1],I=Math.hypot(N.x-T.x,N.z-T.z)||1;E[y].nx=-(N.z-T.z)/I,E[y].nz=(N.x-T.x)/I}if(E.length){let y=E[0],T=E[E.length-1];y.nx=-y.dz,y.nz=y.dx,T.nx=-T.dz,T.nz=T.dx}return E},u=(S,b,E,C,y,T,N=0,I=0,k=null)=>{for(let P=0;P<S.length-1;P++){let L=S[P],H=S[P+1],j=(L.s+H.s)/2;if(!a((L.x+H.x)/2,(L.z+H.z)/2)||N&&j%(N+I)>N||k&&k.some(([ue,pe])=>j>ue&&j<pe))continue;let $=L.x+L.nx*b,K=L.z+L.nz*b,Z=H.x+H.nx*b,te=H.z+H.nz*b,oe=E/2,X=y($,K)+T,ee=y(Z,te)+T;c([$+L.nx*oe,X,K+L.nz*oe],[Z+H.nx*oe,ee,te+H.nz*oe],[Z-H.nx*oe,ee,te-H.nz*oe],[$-L.nx*oe,X,K-L.nz*oe],C)}},f=(S,b)=>this.hAt(S,b),d=(S,b)=>this.surfaceY(S,b),p=[.78,.78,.74],x=[.36,.37,.39];this.touch||(this.touch=new Map,this.d.road.forEach((S,b)=>{if(!(S.c<1||S.c>4))for(let E of S.p){let C=E[0]*2e5+E[1],y=this.touch.get(C);y?y.includes(b)||y.push(b):this.touch.set(C,[b])}}),this.d.road.forEach((S,b)=>{S._i=b}));for(let S of this.ix.road[e.k]){if(S.c<1||S.c>4||S.s||S.pk||S.nv)continue;let b=!S.o,E=l(S.p),C=h(E,S.c>=3?2:2.5);if(C.length<2)continue;let y=S.b?d:f,T=C[C.length-1].s,N=[],I=0;for(let L=0;L<S.p.length;L++){L&&(I+=Math.hypot(E[L][0]-E[L-1][0],E[L][1]-E[L-1][1]));let H=(this.touch.get(S.p[L][0]*2e5+S.p[L][1])||[]).filter(K=>K!==S._i);if(!H.length)continue;let j=Math.max(...H.map(K=>this.d.road[K].w));(L===0||L===S.p.length-1)&&H.length===1&&this.d.road[H[0]].c===S.c&&Math.abs(this.d.road[H[0]].w-S.w)<.1||N.push([I-j/2-3,I+j/2+3])}if(T<14)continue;let k=S.b?.05:.04,P=S.w>=10;if(S.c>=2||S.c===1&&S.w>=6.5)if(P){b&&(u(C,.14,.12,p,y,k,0,0,N),u(C,-.14,.12,p,y,k,0,0,N));for(let L of b?[S.w/4,-S.w/4]:[S.w/6,-S.w/6])u(C,L,.13,p,y,k,3,6,N)}else(b||S.w>=7)&&u(C,0,.13,p,y,k,3,S.c>=3?4.5:6,N);if(S.c>=3)for(let L of[S.w/2-.3,-(S.w/2-.3)])u(C,L,.12,p,y,k,0,0,N)}let g=[],m=(S,b)=>{for(let E of this.edgeGrid.query(S,b,8,g)){let C=us(S,b,E.ax,E.az,E.bx,E.bz,this._c);if(Math.hypot(S-C.x,b-C.z)<E.e.r.w/2-.1)return!0}return!1};for(let S of this.ix.cross[e.k]){let b=h(l(S),.25);for(let E=0;E<b.length-1;E++){let C=b[E];if(C.s%1>.5)continue;let y=b[E+1],T=(C.x+y.x)/2,N=(C.z+y.z)/2;if(!a(T,N)||!m(T,N))continue;let I=1.7,k=f(T,N)+.045;c([C.x+C.nx*I,k,C.z+C.nz*I],[y.x+y.nx*I,k,y.z+y.nz*I],[y.x-y.nx*I,k,y.z-y.nz*I],[C.x-C.nx*I,k,C.z-C.nz*I],[.82,.82,.78])}}for(let S of this.ix.tram[e.k]){let b=h(l(S.p),1.5);if(b.length<2)continue;let E=S.b?d:f;for(let C of[-.5,.5])u(b,C,.075,x,E,.05),u(b,C+.07*Math.sign(C),.05,[.05,.05,.055],E,.048)}for(let S of this.ix.rail[e.k]){let b=h(l(S),3);if(!(b.length<2)){u(b,0,2.7,[.13,.12,.11],f,.03),u(b,0,2.3,[.2,.17,.14],f,.04,.28,.42);for(let E of[-.72,.72])u(b,E,.09,[.42,.42,.44],f,.06)}}if(!t.length)return;this.markMat||(this.markMat=new bt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.markMat.onBeforeCompile=S=>ai(S,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`));let _=new Rt,v=new Float32Array(t.length);for(let S=1;S<v.length;S+=3)v[S]=1;_.setAttribute("position",new nt(t,3)),_.setAttribute("normal",new Ft(v,3)),_.setAttribute("color",new nt(n,3)),_.computeBoundingSphere();let M=new Ye(_,this.markMat);M.receiveShadow=!0,e.objs.push(M),this.group.add(M)}buildFountains(e){let t=[],n=[],i=[];for(let r of e.data.water){let o=r[0].map(m=>[m[0]/10+e.x0,m[1]/10+e.z0]);if(o.length>60||o.length<3)continue;let a=0,c=0,l=1e9;for(let[m,_]of o)a+=m,c+=_,l=Math.min(l,this.hAt(m,_));if(a/=o.length,c/=o.length,l<this.water+1.5)continue;let h=l+.32,u=[];for(let m of o)u.push(m[0],m[1]);let f=(0,Jr.default)(u);for(let m=0;m<f.length;m++)i.push(u[f[m]*2],h,u[f[m]*2+1]);let d=0;for(let m=0;m<o.length;m++){let _=o[m],v=o[(m+1)%o.length];d+=_[0]*v[1]-v[0]*_[1]}let p=d>0?1:-1,x=l+.5,g=.28;for(let m=0;m<o.length;m++){let _=o[m],v=o[(m+1)%o.length],M=Math.hypot(v[0]-_[0],v[1]-_[1]);if(M<.05)continue;let S=(v[1]-_[1])/M*p*g,b=-(v[0]-_[0])/M*p*g,E=[_[0],l-1,_[1]],C=[v[0],l-1,v[1]],y=[_[0],x,_[1]],T=[v[0],x,v[1]],N=[_[0]+S,x,_[1]+b],I=[v[0]+S,x,v[1]+b],k=[_[0]+S,l-1,_[1]+b],P=[v[0]+S,l-1,v[1]+b],L=(H,j,$,K)=>{t.push(...H,...j,...$,...H,...$,...K);for(let Z=0;Z<6;Z++)n.push(.56,.54,.5)};L(E,C,T,y),L(y,T,I,N),L(N,I,P,k),this.colliders.add({ax:_[0],az:_[1],bx:v[0],bz:v[1],y0:l-2,y1:x+.4,kind:"w",tag:e},_[0],_[1],v[0],v[1],e.keys)}this.fountains.push({x:a,z:c,y:h,area:Math.abs(d)/2,tile:e})}if(i.length){let r=new Rt;r.setAttribute("position",new nt(i,3)),r.computeVertexNormals();let o=new Ye(r,this.waterMat);o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}if(t.length){let r=new Rt;r.setAttribute("position",new nt(t,3)),r.setAttribute("color",new nt(n,3)),r.computeVertexNormals();let o=new Ye(r,this.stoneMat);o.castShadow=o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}}buildBridges(){let e=this.d.road.filter(h=>h.b),t=h=>[h[0]/10,h[1]/10],n=h=>h[0]+","+h[1],i=new Set,r=new Map;e.forEach((h,u)=>{for(let f of[h.p[0],h.p[h.p.length-1]]){let d=n(f);r.has(d)||r.set(d,[]),r.get(d).push(u)}});let o=[];e.forEach((h,u)=>{if(i.has(u))return;i.add(u);let f=h.p.slice(),d=!0;for(;d;){d=!1;for(let p of[!1,!0]){let x=n(p?f[0]:f[f.length-1]);for(let g of r.get(x)||[]){if(i.has(g))continue;let m=e[g];if((m.n||"")===(h.n||"")){if(p){if(n(m.p[m.p.length-1])!==x)continue;f=m.p.slice(0,-1).concat(f)}else{if(n(m.p[0])!==x)continue;f=f.concat(m.p.slice(1))}i.add(g),d=!0;break}}if(d)break}}o.push({pts:f.map(t),w:h.w,n:h.n||"",c:h.c,bh:h.bh})});let a=this.d.river.map(h=>h.map(t)),c=(h,u)=>a.some(f=>ud(h,u,f));this.bridges=[];let l=o.filter(h=>h.n==="Most SNP"&&h.pts.length>3).length;for(let h of o){let u=[],f=0;for(let b=0;b<h.pts.length-1;b++){let[E,C]=h.pts[b],[y,T]=h.pts[b+1],N=Math.hypot(y-E,T-C),I=Math.max(1,Math.ceil(N/2));for(let k=0;k<I;k++)u.push({x:E+(y-E)*k/I,z:C+(T-C)*k/I,d:f+N*k/I});f+=N}let d=h.pts[h.pts.length-1];if(u.push({x:d[0],z:d[1],d:f}),f<1)continue;let p=this.hAt(u[0].x,u[0].z),x=this.hAt(d[0],d[1]),g=h.n==="Most SNP",m=h.bh!==void 0?h.bh:g?11.5:7,_=m===0;for(let b of u)b.base=Math.max(dt(p,x,b.d/f),this.water+1.6),b.tgt=!_&&c(b.x,b.z)?this.water+m:b.base,_||(b.tgt=Math.max(b.tgt,this.hAt(b.x,b.z)+(g?.2:0)));let v=g?.055:.075;for(let b of u){let E=b.base;if(!_)for(let C of u)E=Math.max(E,C.tgt-v*Math.abs(b.d-C.d));b.y=E}let M=g?l>1?6.8:10.8:Math.max(2.5,h.w/2+1.2),S={s:u,hw:M,big:g,low:_,n:h.n};for(let b=0;b<u.length-1;b++){let E=u[b],C=u[b+1],y={ax:E.x,az:E.z,bx:C.x,bz:C.z,ya:E.y,yb:C.y,hw:M,br:S};this.decks.add(y,Math.min(E.x,C.x)-M,Math.min(E.z,C.z)-M,Math.max(E.x,C.x)+M,Math.max(E.z,C.z)+M)}this.bridges.push(S)}}buildBridgeMeshes(){let e=[],t=[],n=new Be,i=(d,p,x,g,m)=>{e.push(...d,...p,...x,...d,...x,...g);for(let _=0;_<6;_++)t.push(m[0],m[1],m[2])};for(let d of this.bridges){let p=d.s;n.set(d.big?"#8d9297":"#b3aea2");let x=[n.r,n.g,n.b],g=[.24,.24,.26];for(let m=0;m<p.length-1;m++){let _=p[m],v=p[m+1],M=Math.hypot(v.x-_.x,v.z-_.z)||1,S=-(v.z-_.z)/M,b=(v.x-_.x)/M,E=d.hw,C=[_.x+S*E,_.y,_.z+b*E],y=[_.x-S*E,_.y,_.z-b*E],T=[v.x+S*E,v.y,v.z+b*E],N=[v.x-S*E,v.y,v.z-b*E],I=d.big?2.2:d.low?.8:2.2,k=K=>[K[0],K[1]-I,K[2]];i(C,T,N,y,g),i(k(C),k(y),k(N),k(T),x.map(K=>K*.6)),i(C,k(C),k(T),T,x),i(y,N,k(N),k(y),x);let P=[_.x+S*.15,_.y+.03,_.z+b*.15],L=[_.x-S*.15,_.y+.03,_.z-b*.15],H=[v.x-S*.15,v.y+.03,v.z-b*.15],j=[v.x+S*.15,v.y+.03,v.z+b*.15];if((d.big||m%4<2&&E>4)&&i(P,j,H,L,[.8,.78,.7]),_.y>this.hAt(_.x,_.z)+.9||v.y>this.hAt(v.x,v.z)+.9){for(let K of[1,-1]){let Z=[_.x+S*E*K,_.y,_.z+b*E*K],te=[v.x+S*E*K,v.y,v.z+b*E*K],oe=(Z[0]+te[0])/2+S*K*.7,X=(Z[2]+te[2])/2+b*K*.7,ee=!1;for(let pe of this.decks.query(oe,X,1,this._tmp)){if(pe.br===d)continue;let ae=us(oe,X,pe.ax,pe.az,pe.bx,pe.bz,this._c);if(Math.hypot(oe-ae.x,X-ae.z)<pe.hw&&Math.abs(pe.ya+(pe.yb-pe.ya)*ae.t-_.y)<1.6){ee=!0;break}}if(ee)continue;let ue=(pe,ae)=>[pe[0],pe[1]+ae,pe[2]];i(Z,te,ue(te,1.1),ue(Z,1.1),[.78,.79,.8]),this.colliders.add({ax:Z[0],az:Z[2],bx:te[0],bz:te[2],y0:Math.min(_.y,v.y)-1,y1:Math.max(_.y,v.y)+1.4,kind:"r",tag:null},Z[0],Z[2],te[0],te[2])}if(!d.low&&!d.big&&m%30===15){let K=Math.min(this.hAt(_.x,_.z),this.water)-3;if(_.y-K>4){let te=[_.x-2.2,_.y-I,_.z-2.2],oe=[_.x+2.2,_.y-I,_.z-2.2],X=[_.x+2.2,_.y-I,_.z+2.2],ee=[_.x-2.2,_.y-I,_.z+2.2],ue=pe=>[pe[0],K,pe[2]];i(te,oe,ue(oe),ue(te),x),i(oe,X,ue(X),ue(oe),x),i(X,ee,ue(ee),ue(X),x),i(ee,te,ue(te),ue(ee),x)}}}}}let r=(d,p,x,g)=>{let m=p[0]-d[0],_=p[1]-d[1],v=p[2]-d[2],M=Math.hypot(m,_,v)||1,S=-v,b=m,E=Math.hypot(S,b);E<1e-4?(S=1,b=0):(S/=E,b/=E);let C=_*b/M,y=(v*S-m*b)/M,T=-_*S/M,N=x/2,I=(P,L,H)=>[P[0]+S*N*L+C*N*H,P[1]+y*N*H,P[2]+b*N*L+T*N*H],k=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let P=0;P<4;P++){let L=(P+1)%4;i(I(d,...k[P]),I(p,...k[P]),I(p,...k[L]),I(d,...k[L]),g)}},o=d=>this.bridges.filter(p=>p.n===d).sort((p,x)=>x.s.length-p.s.length)[0],a=d=>{let p=Math.max(...d.s.map(g=>g.y)),x=d.s.filter(g=>g.y>p-.6);return x.length>8?x:null},c=(d,p,x,g)=>{let m=d[Math.max(0,p-1)],_=d[Math.min(d.length-1,p+1)],v=Math.hypot(_.x-m.x,_.z-m.z)||1;return[d[p].x-(_.z-m.z)/v*x,d[p].y+g,d[p].z+(_.x-m.x)/v*x]},l=o("Most Apollo");if(l&&a(l)){let d=a(l),p=d.length-1,x=[.86,.87,.88];for(let g of[-(l.hw+9),l.hw+9]){let m=null;for(let _=0;_<=p;_+=3){let v=_/p,M=c(d,_,g,34*4*v*(1-v));m&&r(m,M,1.8,x),_%9===0&&_>0&&_<p&&r(M,c(d,_,g*.75,.5),.3,x),m=M}m&&r(m,c(d,p,g,0),1.8,x)}}let h=o("Star\xFD most");if(h&&a(h)){let d=a(h),p=d.length-1,x=[.42,.55,.48];for(let g of[-(h.hw+2.5),h.hw+2.5])for(let m=0;m+6<=p;m+=6){let _=c(d,m,g,.4),v=c(d,m+6,g,.4),M=c(d,m+3,g,8.5),S=c(d,Math.max(0,m-3),g,8.5);r(_,M,.5,x),r(M,v,.5,x),m&&r(S,M,.6,x),r(_,v,.5,x)}}if(!e.length)return;let u=new Rt;u.setAttribute("position",new nt(e,3)),u.setAttribute("color",new nt(t,3)),u.computeVertexNormals();let f=new Ye(u,this.stoneMat);f.castShadow=f.receiveShadow=!0,f.frustumCulled=!1,this.group.add(f)}buildPylon(){let e=this.d.pylon.map(g=>g.map(m=>[m[0]/10,m[1]/10]));if(e.length<2)return;let t=e.map(g=>{let m=0,_=0;for(let v of g)m+=v[0],_+=v[1];return[m/g.length,_/g.length]}),n=new Ot,i=new bt({color:9212310}),r=this.water+84,o=(t[0][0]+t[1][0])/2,a=(t[0][1]+t[1][1])/2,c=14,l=[];for(let g of t){let m=this.hAt(g[0],g[1])-2,_=new D(g[0],m,g[1]),v=new D(o+(g[0]-o)*.55,r,a+c),M=new Ye(new Xt(3.2,_.distanceTo(v),4.2),i);M.position.copy(_).add(v).multiplyScalar(.5),M.quaternion.setFromUnitVectors(new D(0,1,0),v.clone().sub(_).normalize()),M.castShadow=!0,n.add(M),l.push(v),this.colliders.add({ax:g[0]-2,az:g[1]-2,bx:g[0]+2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2),this.colliders.add({ax:g[0]+2,az:g[1]-2,bx:g[0]-2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2)}let h=o,u=a+c,f=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([g,m])=>new be(g,m)),d=new Ye(new tr(f,40),new bt({color:10133670}));d.position.set(h,r+3,u),d.castShadow=!0,n.add(d);let p=new Ye(new nr(15.8,.35,6,48),new tn({color:16765578}));p.rotation.x=Math.PI/2,p.position.set(h,r+3.3,u),this.ufoRing=p,n.add(p);let x=this.bridges.find(g=>g.big);if(x){let g=new bt({color:13159632}),m=x.s.filter(v=>{let M=Math.hypot(v.x-o,v.z-a);return M>40&&M<240&&v.z<a}),_=[];for(let v=0;v<m.length;v+=Math.max(1,Math.floor(m.length/8)))_.push(m[v]);for(let v of _)for(let M of[-1,1]){let S=l[M<0?0:1],b=new D(dt(S.x,o,.2),dt(r-12,r-40,Math.hypot(v.x-o,v.z-a)/240),dt(S.z,a,.6)),E=new D(v.x+M*9.5,v.y+.6,v.z),C=new Ye(new Xt(.35,b.distanceTo(E),.35),g);C.position.copy(b).add(E).multiplyScalar(.5),C.quaternion.setFromUnitVectors(new D(0,1,0),E.clone().sub(b).normalize()),n.add(C)}}n.traverse(g=>{g.frustumCulled=!1}),this.group.add(n),this.ufoPos=new D(h,r+3,u)}buildRoadGraph(){let e=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),t=new Map,n=l=>l[0]*2e5+l[1];for(let l of e)l.p.forEach((h,u)=>{let f=n(h);t.set(f,(t.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of e){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||t.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(m=>[m[0]/10,m[1]/10]),d=r(l.p[h]),p=r(l.p[u]),x=(m,_,v)=>{let M=[0],S=0;for(let E=1;E<v.length;E++)S+=Math.hypot(v[E][0]-v[E-1][0],v[E][1]-v[E-1][1]),M.push(S);let b={a:m,b:_,p:v,cum:M,L:S,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(b),m.out.push(b),_.inn.push(b),b},g=x(d,p,f);if(!l.o){let m=x(p,d,f.slice().reverse());g.rev=m,m.rev=g}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let p of c){if(Math.abs(p.x-h)>18||Math.abs(p.z-u)>18)continue;let x=Math.hypot(p.x-h,p.z-u);x<d&&p.out.length+p.inn.length>=3&&(d=x,f=p)}f&&!f.sig&&(f.sig={phase:wn(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(e,t,n=40,i=null){let r=this.edgeGrid.query(e,t,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=us(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(e-h.x,t-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(e,t,n){if(!e.sig)return!0;let i=(n+e.sig.phase)%30,r=Math.abs(Math.cos(t))>Math.abs(Math.sin(t));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let e=[];for(let c of this.d.foot)e.push(c.p);for(let c of this.d.cross)e.push(c);for(let c of this.d.steps)e.push(c);for(let c of this.d.road)c.c===5&&!c.b&&e.push(c.p);let t=c=>c[0]*2e5+c[1],n=new Map;for(let c of e)c.forEach((l,h)=>n.set(t(l),(n.get(t(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=t(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let x=1;x<c.length;x++)f+=Math.hypot(c[x][0]-c[x-1][0],c[x][1]-c[x-1][1]),d.push(f);if(f<(u?8:.5))return;let p={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(p),h.e.push(p),o.push(p)};for(let c of e){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(t(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let p=c.p[Math.max(0,d-1)],x=c.p[Math.min(c.p.length-1,d+1)],g=x[0]-p[0],m=x[1]-p[1],_=Math.hypot(g,m)||1;return[f[0]/10-m/_*h,f[1]/10+g/_*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(e,t,n){let i=e.cum;t=xt(t,0,e.L);let r=0;for(;r<i.length-2&&i[r+1]<t;)r++;let o=i[r+1]-i[r]||1,a=(t-i[r])/o,c=e.p[r],l=e.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}collide(e,t,n,i,r){let o=this.colliders.query(e,t,i+.5,this._tmp),a=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let c=0;c<o.length;c++){let l=o[c];if(n>l.y1||n+1.5<l.y0)continue;let h=us(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=e-h.x,f=t-h.z,d=Math.hypot(u,f);if(d<i){d<1e-4&&(u=-(l.bz-l.az),f=l.bx-l.ax);let p=Math.hypot(u,f)||1,x=i-d;e+=u/p*x,t+=f/p*x,r.nx+=u/p,r.nz+=f/p,r.d=Math.max(r.d,x),r.kind=l.kind,a=!0}}if(r.x=e,r.z=t,a){let c=Math.hypot(r.nx,r.nz)||1;r.nx/=c,r.nz/=c}return a}rayHit(e,t,n,i,r){let o=(e+n)/2,a=(t+i)/2,c=Math.hypot(n-e,i-t)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=Dy(e,t,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function Dy(s,e,t,n,i,r,o,a){let c=t-s,l=n-e,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-e)*h)/f,p=((i-s)*l-(r-e)*c)/f;return d>=0&&d<=1&&p>=0&&p<=1?d:null}var Uy=rs,Ed=ii,th=$n,lr=Jt,$r=Sa,Qr=jo,Va=be,zy=At,Fy=Rt,Td=nt,Oy=Ye,By=Fi,ky=$s,Hy=yi,Gy=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,eo="precision highp float; in vec3 position; in vec2 uv;"+Gy,Ad=class{constructor(s){this.r=s;let e=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"));this.type=e?Uy:Ed,this.hdr=!!e,this.exposure={value:1},this.samples=4,this.sceneRT=new th(4,4,{type:this.type,depthBuffer:!0,minFilter:lr,magFilter:lr,samples:this.samples}),this.ldrRT=new th(4,4,{type:Ed,depthBuffer:!1,minFilter:lr,magFilter:lr}),this.bloom=[];for(let n=0;n<5;n++)this.bloom.push(new th(4,4,{type:this.type,depthBuffer:!1,minFilter:lr,magFilter:lr}));this.brightMat=new $r({glslVersion:Qr,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new Va(1,1)}},vertexShader:eo,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new $r({glslVersion:Qr,uniforms:{tSrc:{value:null},uTexel:{value:new Va(1,1)}},vertexShader:eo,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new $r({glslVersion:Qr,uniforms:{tSrc:{value:null},uTexel:{value:new Va(1,1)}},vertexShader:eo,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:Hy,transparent:!0}),this.gradeMat=new $r({glslVersion:Qr,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:Bt.uNight},vertexShader:eo,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
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
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new $r({glslVersion:Qr,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new Va(1,1)},uFxaa:{value:1},uFlash:{value:new zy(0,0,0,0)}},vertexShader:eo,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
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
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let t=new Fy;t.setAttribute("position",new Td([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new Td([0,0,2,0,0,2],2)),this.quad=new Oy(t,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new By,this.qscene.add(this.quad),this.qcam=new ky}setSize(s,e,t=1,n=4){let i=Math.max(16,Math.round(s*t)),r=Math.max(16,Math.round(e*t));n!==this.samples&&(this.samples=n,this.sceneRT.dispose(),this.sceneRT.samples=n),this.sceneRT.setSize(i,r),this.ldrRT.setSize(i,r);let o=i>>1,a=r>>1;for(let c of this.bloom)c.setSize(Math.max(2,o),Math.max(2,a)),o>>=1,a>>=1;return this.finalMat.uniforms.uTexel.value.set(1/i,1/r),this.finalMat.uniforms.uFxaa.value=n>0?0:1,this.w=i,this.h=r,this.cw=s,this.ch=e,{aspect:s/e}}_pass(s,e){this.quad.material=s,this.r.setRenderTarget(e),this.r.render(this.qscene,this.qcam)}render(s,e){let t=this.r,n=this.bloom;t.setRenderTarget(this.sceneRT),t.render(s,e),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,n[0]);for(let i=1;i<n.length;i++)this.downMat.uniforms.tSrc.value=n[i-1].texture,this.downMat.uniforms.uTexel.value.set(1/n[i-1].width,1/n[i-1].height),this._pass(this.downMat,n[i]);t.autoClear=!1;for(let i=n.length-1;i>0;i--)this.upMat.uniforms.tSrc.value=n[i].texture,this.upMat.uniforms.uTexel.value.set(.5/n[i].width,.5/n[i].height),this._pass(this.upMat,n[i-1]);t.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),t.setRenderTarget(null),t.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,t.render(this.qscene,this.qcam)}};var se={Mesh:Ye,Group:Ot,Scene:Fi,Object3D:Ht,InstancedMesh:Sn,Vec2:be,Vec3:D,Vec4:At,Mat4:rt,Quat:en,Color:Be,Box3:$t,Geo:Rt,F32:nt,Attr:Ft,Box:Xt,Cyl:fn,Sphere:ri,Plane:bi,Torus:nr,Lathe:tr,Ico:Oi,Lambert:bt,Basic:tn,Standard:Bi,Shader:bn,CanvasTex:Si,DataTex:zr,Linear:Jt,Nearest:jt,MipLinear:Wn,Additive:yi,DoubleSide:Wt,BackSide:un,SRGB:It};function Rd(s){let{Fe:e,Wt:t,Tt:n,Pn:i,Ln:r,we:o,q:a,Ve:c,vt:l,Kn:h,an:u,Xs:f,Ye:d,Ge:p,Xn:x,ct:g,en:m,fn:_,Zs:v,mh:M,Zn:S,Yn:b,Ks:E,OX:C,OZ:y}=s;var T=(()=>{let N=Math.PI,I=!1,k={};function P(z,Y,F){let ne=document.createElement("canvas");ne.width=z,ne.height=Y,F(ne.getContext("2d"),z,Y);let U=new se.CanvasTex(ne);return U.colorSpace=se.SRGB,U.anisotropy=4,U}function L(z,Y=1){return z.onBeforeCompile=F=>f(F,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${Y.toFixed(2)}; }`),z}function H(z,Y){if(!z||z._gl||z.isMeshBasicMaterial)return z;z._gl=1;let F=z.name||"",ne=Y!==void 0?Y:/window|glass/i.test(F)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(F)?0:/head|tail/i.test(F)?.06:.07;return z.onBeforeCompile=U=>f(U,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${ne.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(ne*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),z}function j(z){let Y=[],F=[],ne=[],U=new se.Color;for(let[ie,de,we,Ve,Ae,$e,tt]of z){let mt=new se.Box(ie,de,we).toNonIndexed();mt.translate(Ve,Ae,$e);let lt=mt.attributes.position.array,wt=mt.attributes.normal.array;U.set(tt);for(let Ze=0;Ze<lt.length;Ze+=3)Y.push(lt[Ze],lt[Ze+1],lt[Ze+2]),F.push(wt[Ze],wt[Ze+1],wt[Ze+2]),ne.push(U.r,U.g,U.b)}let V=new se.Geo;return V.setAttribute("position",new se.F32(Y,3)),V.setAttribute("normal",new se.F32(F,3)),V.setAttribute("color",new se.F32(ne,3)),V}let $=null;function K(){if(!$){$=[];let z="ABCDEFGHJKLMNPRSTVXYZ",Y=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let F=0;F<12;F++){let ne=Y[F]+" "+(100+Math.floor(_(F*7+3)*900))+z[Math.floor(_(F*13+1)*z.length)]+z[Math.floor(_(F*17+5)*z.length)],U=P(256,64,(V,ie,de)=>{V.fillStyle="#f5f5f0",V.fillRect(0,0,ie,de),V.fillStyle="#1c3f9e",V.fillRect(0,0,30,de),V.fillStyle="#fff",V.font="700 15px sans-serif",V.textAlign="center",V.fillText("SK",15,54),V.strokeStyle="#111",V.lineWidth=4,V.strokeRect(2,2,ie-4,de-4),V.fillStyle="#111",V.font='700 42px "JetBrains Mono", monospace',V.textBaseline="middle",V.fillText(ne,(ie+30)/2,de/2+3)});$.push(new se.Lambert({map:U,name:"Plate"}))}}return m($)}let Z={};function te(z){if(Z[z])return Z[z];let Y=P(512,96,(F,ne,U)=>{if(z==="pz"){F.fillStyle="#f2f2f0",F.fillRect(0,0,ne,U);let V=12,ie=ne/V;for(let de=0;de<2;de++)for(let we=0;we<V;we++)F.fillStyle=(we+de)%2?"#0b3fa8":"#d9ea10",F.fillRect(we*ie,8+de*40,ie+1,40);F.fillStyle="#0b3fa8",F.fillRect(ne*.31,4,ne*.38,U-8),F.fillStyle="#fff",F.font="900 54px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("POL\xCDCIA",ne/2,U/2+4)}else if(z==="pz25")F.fillStyle="#101216",F.fillRect(0,10,ne,U-26),F.fillStyle="#0b4fc4",F.beginPath(),F.moveTo(0,10),F.lineTo(150,10),F.lineTo(96,U-16),F.lineTo(0,U-16),F.fill(),F.beginPath(),F.moveTo(ne,10),F.lineTo(ne-150,10),F.lineTo(ne-96,U-16),F.lineTo(ne,U-16),F.fill(),F.fillStyle="#e0102a",F.fillRect(0,U-14,ne,6),F.fillStyle="#f2f2f0",F.fillRect(0,0,ne,8),F.fillRect(0,U-8,ne,8),F.fillStyle="#fff",F.font="900 50px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("POL\xCDCIA",ne/2,U/2-2);else{F.fillStyle="#f4f4f2",F.fillRect(0,0,ne,U);let V=16,ie=ne/V;for(let de=0;de<V;de++)F.fillStyle=de%2?"#0d3a8c":"#f4f4f2",F.fillRect(de*ie,U-30,ie+1,22);F.fillStyle="#0d3a8c",F.fillRect(0,6,ne,5),F.font="900 40px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("MESTSK\xC1 POL\xCDCIA",ne/2,38)}});return Z[z]=L(new se.Lambert({map:Y}))}function oe(z,Y){let F=z.wid,ne=z.len,U=(b.cars[z.kind]||{}).h||1.5,V=te(Y),ie=new se.Plane(ne*.86,.36);for(let tt of[1,-1]){let mt=new se.Mesh(ie,V);mt.rotation.y=tt*N/2,mt.position.set(tt*(F/2+.014),U>1.6?.86:.74,-.05),z.obj.add(mt)}let de=new se.Group,we=new se.Mesh(new se.Box(F*.62,.05,.3),new se.Lambert({color:1382170})),Ve=new se.Box(F*.27,.12,.26),Ae=new se.Mesh(Ve,new se.Basic({color:16719904})),$e=new se.Mesh(Ve,new se.Basic({color:2113791}));Ae.position.set(F*.16,.085,0),$e.position.set(-F*.16,.085,0),de.add(we,Ae,$e),de.position.set(0,U+.02,-.15),z.obj.add(de),z.bar={red:Ae,blue:$e,idle:Y==="mp"},z.livery=Y}function X(z){let Y=z.bar;if(Y.idle&&!z.driver){Y.red.material.color.setRGB(.25,.3,.9),Y.blue.material.color.setRGB(.25,.3,.9);return}let F=Math.sin(a.t*14)>0;Y.red.material.color.setRGB(F?6:.3,.1,.1),Y.blue.material.color.setRGB(.1,.2,F?.3:6)}let ee=null;function ue(z){if(!z||g()>.09)return;ee||(ee=new se.Basic({map:P(128,48,(ne,U,V)=>{ne.fillStyle="#ffd21a",ne.fillRect(0,0,U,V),ne.fillStyle="#111",ne.font="900 38px Anton, Impact, sans-serif",ne.textAlign="center",ne.textBaseline="middle",ne.fillText("TAXI",U/2,V/2+3)})}));let Y=(b.cars[z.kind]||{}).h||1.5,F=new se.Mesh(new se.Box(.46,.16,.16),ee);F.position.set(0,Y+.07,.1),z.obj.add(F),z.taxi=!0}let pe=6.3,ae=.5,xe=5,Ne=pe+ae,Pe=xe*pe+(xe-1)*ae,fe={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},O=[["1","HLAVN\xC1 STANICA"],["3","RA\u010CA"],["4","D\xDABRAVKA"],["4","ZLAT\xC9 PIESKY"],["9","KARLOVA VES"],["9","RU\u017DINOV"],["1","PETR\u017DALKA"]];function Ee(){let z="#cf1420",Y="#17181b",F="#0b0d11",ne="#8f9398",U=pe/2,V=[[2.34,.44,pe-.1,0,.34,0,Y],[2.48,.74,pe,0,.93,0,z],[2.42,1.2,pe,0,1.9,0,F],[2.48,.4,pe,0,2.7,0,z],[2.24,.14,pe,0,2.97,0,ne],[1.5,.3,pe*.5,0,3.18,.3,"#b4b8bc"]],ie=[2.06,2.5,ae+.14,0,1.6,-U-ae/2,"#131315"],de=Re=>[[2.2,.44,1,0,.34,Re*(U+.45),Y],[2.36,.74,1,0,.93,Re*(U+.48),z],[2.3,1.2,.86,0,1.9,Re*(U+.4),F],[2.36,.4,.74,0,2.7,Re*(U+.36),z],[2.1,.14,.6,0,2.97,Re*(U+.28),ne],[.5,.06,.1,0,1.2,Re*(U+.99),"#f2f2f2"]],we=[[1.5,.3,pe*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],Ve={front:j([...V,ie,...de(1)]),mid:j([...V,ie]),midP:j([...V,ie,...we]),rear:j([...V,...de(-1)])},Ae=pe-.3,$e=[],tt=[],mt=[];for(let Re of[1,-1]){let w=Re*1.246,B=-Re*Ae/2,W=Re*Ae/2,J=[[w,1.36,W,0,0],[w,1.36,B,1,0],[w,2.44,B,1,1],[w,1.36,W,0,0],[w,2.44,B,1,1],[w,2.44,W,0,1]];for(let q of J)$e.push(q[0],q[1],q[2]),tt.push(q[3],q[4]),mt.push(Re,0,0)}Ve.win=new se.Geo,Ve.win.setAttribute("position",new se.F32($e,3)),Ve.win.setAttribute("uv",new se.F32(tt,2)),Ve.win.setAttribute("normal",new se.F32(mt,3));let lt=Re=>(w,B,W)=>{w.fillStyle=Re?"#000":"#0c0f13",w.fillRect(0,0,B,W);let J=4,q=B/J;for(let ye=0;ye<J;ye++)if(w.fillStyle=Re?ye===1?"#fff0c8":"#ffe0a0":"#1b2630",w.fillRect(ye*q+5,6,q-10,W-12),Re){w.fillStyle="rgba(40,25,10,0.75)";for(let ze=0;ze<2;ze++){let ke=ye*q+14+_(ye*9+ze*5)*(q-30);w.beginPath(),w.arc(ke,W*.45,6,0,7),w.fill(),w.fillRect(ke-8,W*.45+5,16,W)}}},wt=H(new se.Lambert({vertexColors:!0}),.07),Ze=new se.Lambert({map:P(256,64,lt(!1)),emissiveMap:P(256,64,lt(!0)),emissive:new se.Color(0,0,0)});fe.geo=Ve,fe.mBody=wt,fe.mWin=Ze,fe.mHead=new se.Basic({color:16773836}),fe.mTail=new se.Basic({color:16718352}),fe.gLamp=new se.Box(.3,.14,.06),fe.gDisp=new se.Plane(1.7,.3),fe.disp={}}function ce(z){let Y=z[0]+z[1];return fe.disp[Y]||(fe.disp[Y]=new se.Basic({map:P(256,48,(F,ne,U)=>{F.fillStyle="#050505",F.fillRect(0,0,ne,U),F.fillStyle="#ffb020",F.font='700 30px "JetBrains Mono", monospace',F.textBaseline="middle",F.textAlign="left",F.fillText(z[0],8,U/2+2),F.font='700 22px "JetBrains Mono", monospace',F.fillText(z[1],44,U/2+2)})})),fe.disp[Y]}function Me(){let z=U=>U[0]*1e5+U[1],Y=new Map;for(let U of e.d.tram){if(U.p.length<2)continue;let V=U.p.map(we=>[we[0]/10,we[1]/10]),ie=0;for(let we=1;we<V.length;we++)ie+=Math.hypot(V[we][0]-V[we-1][0],V[we][1]-V[we-1][1]);let de={p:V,L:ie,k0:z(U.p[0]),k1:z(U.p[U.p.length-1]),next:[],dist:1e9,nin:0};fe.edges.push(de),(Y.get(de.k0)||Y.set(de.k0,[]).get(de.k0)).push(de)}for(let U of fe.edges){U.next=Y.get(U.k1)||[];for(let V of U.next)V.nin++}for(let U of fe.edges)U.next.length||(U.dist=U.L);for(let U=0;U<120;U++)for(let V of fe.edges)for(let ie of V.next)ie.dist+V.L<V.dist&&(V.dist=ie.dist+V.L);let F=e.W,ne=e.H;fe.sources=fe.edges.filter(U=>{if(U.nin||U.dist>1e8)return!1;let[V,ie]=U.p[0];return!0}),fe.max=h?6:10,Ee(),Ge()}function he(z){let Y=[],F=z,ne=0,U=new Set;for(;F&&ne++<110;){for(let we=Y.length?1:0;we<F.p.length;we++)Y.push(F.p[we]);U.add(F);let ie=F.next.filter(we=>we.dist<1e8);if(!ie.length)break;let de=ie.filter(we=>!U.has(we));F=ne>50||!de.length?ie.slice().sort((we,Ve)=>we.dist-Ve.dist)[0]:m(de)}let V=[0];for(let ie=1;ie<Y.length;ie++)V.push(V[ie-1]+Math.hypot(Y[ie][0]-Y[ie-1][0],Y[ie][1]-Y[ie-1][1]));return{p:Y,cum:V,L:V[V.length-1]}}function Xe(z,Y,F){let ne=z.cum,U=0,V=ne.length-2;for(Y=d(Y,0,z.L);U<V;){let Ae=U+V+1>>1;ne[Ae]<=Y?U=Ae:V=Ae-1}let ie=ne[U+1]-ne[U]||1,de=(Y-ne[U])/ie,we=z.p[U],Ve=z.p[U+1];return F.x=we[0]+(Ve[0]-we[0])*de,F.z=we[1]+(Ve[1]-we[1])*de,F.dx=(Ve[0]-we[0])/ie,F.dz=(Ve[1]-we[1])/ie,F}function Fe(z){if(!fe.sources.length)return null;let Y=m(fe.sources);if(fe.list.some(V=>V.src===Y&&V.s<Pe+30))return null;let F=he(Y);if(F.L<150)return null;let ne=m(O),U={src:Y,r:F,s:z||.5,v:z?9:5,secs:[],wait:0,bell:0,obj:new se.Group,hx:0,hz:0};for(let V=0;V<xe;V++){let ie=new se.Group,de=new se.Mesh(V===0?fe.geo.front:V===xe-1?fe.geo.rear:V===1?fe.geo.midP:fe.geo.mid,fe.mBody),we=new se.Mesh(fe.geo.win,fe.mWin);if(de.castShadow=!0,de.receiveShadow=!0,ie.add(de,we),V===0){for(let Ae of[-.82,.82]){let $e=new se.Mesh(fe.gLamp,fe.mHead);$e.position.set(Ae,.86,pe/2+.985),ie.add($e)}let Ve=new se.Mesh(fe.gDisp,ce(ne));Ve.position.set(0,2.7,pe/2+.735),ie.add(Ve)}if(V===xe-1)for(let Ve of[-.82,.82]){let Ae=new se.Mesh(fe.gLamp,fe.mTail);Ae.position.set(Ve,.86,-pe/2-.985),ie.add(Ae)}ie.visible=!1,U.obj.add(ie),U.secs.push({g:ie,x:0,y:0,z:0,h:0,on:!1,len:pe})}return t.add(U.obj),fe.list.push(U),U}let R={},A={},Q={},me={};function _e(z){let Y=e.W,F=e.H;for(let ne=0;ne<xe;ne++){let U=z.s-ne*Ne-pe/2,V=z.secs[ne];if(U<0||U>z.r.L){V.on=!1,V.g.visible=!1;continue}Xe(z.r,U+2.3,R),Xe(z.r,U-2.3,A);let ie=(R.x+A.x)/2,de=(R.z+A.z)/2;if(ie<1||de<1||ie>Y-1||de>F-1){V.on=!1,V.g.visible=!1;continue}let we=V.on?V.y+1.6:1e9,Ve=e.surfaceY(R.x,R.z,we),Ae=e.surfaceY(A.x,A.z,we);V.x=ie,V.z=de,V.y=(Ve+Ae)/2,V.h=Math.atan2(R.x-A.x,R.z-A.z),V.on=!0,V.g.visible=!0,V.g.position.set(ie,V.y+.03,de),V.g.rotation.set(0,0,0),V.g.rotateY(V.h),V.g.rotateX(Math.atan2(Ae-Ve,4.6))}}function ve(){l._tone(2100,1900,.22,.1,"triangle"),l._tone(2100,1900,.3,.1,"triangle",.2)}function qe(z,Y){fe.t-=z,fe.t<=0&&(fe.t=5+g()*7,fe.list.length<fe.max&&Fe());let F=!s.pc()&&!Y&&a.mode==="play";fe.proxies.length=0;for(let ne=fe.list.length-1;ne>=0;ne--){let U=fe.list[ne];Xe(U.r,U.s,Q);let V=Q.x,ie=Q.z,de=Q.dx,we=Q.dz;Xe(U.r,U.s+16,me);let Ve=Math.abs(x(Math.atan2(me.dx,me.dz)-Math.atan2(de,we)));Xe(U.r,U.s-Pe*.6,me),Ve=Math.max(Ve,Math.abs(x(Math.atan2(me.dx,me.dz)-Math.atan2(de,we)))*.8);let Ae=p(11.5,4.2,d(Ve/.6,0,1)),$e=9+U.v*U.v/4.6,tt=99,mt=!0,lt=!1,wt=(Ze,Re,w,B,W)=>{let J=Ze-V,q=Re-ie,ye=J*de+q*we;ye<.5||ye>$e||Math.abs(J*we-q*de)>1.3+w||ye<tt&&(tt=ye,mt=B,lt=W)};if(Math.abs(V-(s.pc()?s.pc().x:o.x))<160&&Math.abs(ie-(s.pc()?s.pc().z:o.z))<160){for(let Ze of n)wt(Ze.x,Ze.z,Ze.r,!0,Ze===s.pc());for(let Ze of i)Ze.state!=="down"&&wt(Ze.x,Ze.z,.1,!0,!1);F&&wt(o.x,o.z,.3,!0,!0)}if(U.ghost>0)U.ghost-=z;else for(let Ze of fe.list)if(!(Ze===U||Math.abs(Ze.hx-V)>75||Math.abs(Ze.hz-ie)>75))for(let Re=3;Re<$e+2&&!(Re>tt);Re+=2.5){Xe(U.r,U.s+Re,me);let w=!1;for(let B of Ze.secs){if(!B.on||Math.abs(B.x-me.x)>5||Math.abs(B.z-me.z)>5)continue;let W=Math.sin(B.h)*2.3,J=Math.cos(B.h)*2.3;for(let q=-1;q<=1;q++)if(Math.hypot(B.x+W*q-me.x,B.z+J*q-me.z)<1.5){w=!0;break}if(w)break}if(w){tt=Re,mt=!1,lt=!1;break}}if(tt<99?(Ae=Math.min(Ae,Math.sqrt(Math.max(0,2*2.5*(tt-4.5)))),U.v<.6&&(U.wait+=z),mt&&U.wait>5&&(Ae=Math.max(Ae,1.8)),!mt&&U.wait>14+U.s%7&&(U.ghost=9,U.wait=0),lt&&U.bell<=0&&tt<22&&(ve(),U.bell=2.6)):U.wait=Math.max(0,U.wait-z*2),U.bell>0&&(U.bell-=z),U.v=Math.max(0,U.v+d(Ae-U.v,-3.4*z,1.15*z)),U.s+=U.v*z,U.s-Pe-6>U.r.L){t.remove(U.obj),fe.list.splice(ne,1);continue}U.hx=V,U.hz=ie,U.dx=de,U.dz=we,_e(U);for(let Ze of U.secs)Ze.on&&fe.proxies.push(Ze)}Y||De(F)}function De(z){let Y=[-2.3,0,2.3];for(let F of fe.list){for(let U of n){if(Math.abs(U.x-F.hx)>46||Math.abs(U.z-F.hz)>46)continue;let V=Math.sin(U.h),ie=Math.cos(U.h);for(let de of F.secs){if(!de.on||Math.abs(U.y-de.y)>3||Math.abs(U.x-de.x)>9||Math.abs(U.z-de.z)>9)continue;let we=Math.sin(de.h),Ve=Math.cos(de.h);for(let Ae of Y)for(let $e of[U.off,-U.off]){let tt=U.x+V*$e-(de.x+we*Ae),mt=U.z+ie*$e-(de.z+Ve*Ae),lt=Math.hypot(tt,mt),wt=1.3+U.r;if(lt>=wt||lt<1e-4)continue;tt/=lt,mt/=lt,U.x+=tt*(wt-lt),U.z+=mt*(wt-lt);let Ze=(U.vx-we*F.v)*tt+(U.vz-Ve*F.v)*mt;Ze<0&&(U.vx-=1.35*Ze*tt,U.vz-=1.35*Ze*mt,U.w+=($e>0?1:-1)*Ze*.04*(tt*ie-mt*V>0?1:-1),-Ze>3.5&&(U.dmg+=-Ze*3,U===s.pc()&&(l.crash(-Ze),M(-Ze*.03),F.hitPl||(F.hitPl=1,v(1,"zr\xE1\u017Eka s elektri\u010Dkou"))))),U.parked&&(U.parked=!1),U.hitT=3}}}let ne=z?[o,...i]:i;for(let U of ne){let V=U===o,ie=V?o.x:U.x,de=V?o.z:U.z;if(!(Math.abs(ie-F.hx)>46||Math.abs(de-F.hz)>46))for(let we of F.secs){if(!we.on||Math.abs(ie-we.x)>6||Math.abs(de-we.z)>6)continue;let Ve=Math.sin(we.h),Ae=Math.cos(we.h),$e=ie-we.x,tt=de-we.z,mt=d($e*Ve+tt*Ae,-pe/2-.6,pe/2+.6),lt=we.x+Ve*mt,wt=we.z+Ae*mt,Ze=ie-lt,Re=de-wt,w=Math.hypot(Ze,Re),B=1.55;w>=B||(w<.001&&(Ze=Ae,Re=-Ve,w=1),Ze/=w,Re/=w,V?(o.x=lt+Ze*B,o.z=wt+Re*B,F.v>2.5&&S.hurtT<=0&&(a.hp-=F.v*4.5,S.hurtT=1,l.crash(F.v*.6),c.flash("#ff2a2a",.4))):U.state!=="down"&&(F.v>2.2?(U.knock(Ve*F.v*.6+Ze*2,Ae*F.v*.6+Re*2,F.v>7),l.thud()):(U.p.x=lt+Ze*B,U.p.z=wt+Re*B)))}}}}function Ge(){let z=fe.edges.filter(lt=>Math.hypot(lt.p[0][0]-(554+C),lt.p[0][1]-(713+y))<25&&!lt.nin);if(!z.length)return;let Y=z[0],F=Y.p[0],ne=Y.p[1],U=Math.hypot(ne[0]-F[0],ne[1]-F[1])||1,V=(ne[0]-F[0])/U,ie=(ne[1]-F[1])/U,de=F[0]-ie*1.8-V*1.5,we=F[1]+V*1.8-ie*1.5,Ve=e.hAt(F[0]+V*6,F[1]+ie*6),Ae=new se.Group,$e=L(new se.Lambert({vertexColors:!0})),tt=new se.Mesh(j([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),$e),mt=new se.Mesh(new se.Plane(9.9,6.8),new se.Basic({color:197379}));mt.position.set(0,3.4,-.95),tt.castShadow=tt.receiveShadow=!0,Ae.add(tt,mt),Ae.position.set(de,Ve-.4,we),Ae.rotation.y=Math.atan2(V,ie),e.group.add(Ae)}let le={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function ht(){let z=e.d.zone;if(!z)return;let Y=atob(z.b),F=new Uint8Array(Y.length);for(let ne=0;ne<Y.length;ne++)F[ne]=Y.charCodeAt(ne);le.bits=F,le.N=z.n,le.x0=z.x,le.z0=z.z,le.s=z.s}function ge(z,Y){let F=le.N;if(!F)return!1;let ne=Math.floor((z-le.x0)/le.s),U=Math.floor((Y-le.z0)/le.s);if(ne<0||U<0||ne>=F||U>=F)return!1;let V=U*F+ne;return!!(le.bits[V>>3]>>7-(V&7)&1)}function Tt(){ht();let z=w=>w[0]*1e5+w[1],Y=new Set;for(let w of e.d.road)if(w.c>=1&&w.c<=4&&!w.nv)for(let B of w.p)Y.add(z(B));let F=[];for(let w of e.d.road)if(!(w.c!==5||w.p.length<2))for(let B of[0,1]){let W=w.p[B?w.p.length-1:0],J=w.p[B?w.p.length-2:1];if(!Y.has(z(W)))continue;let q=W[0]/10,ye=W[1]/10,ze=J[0]/10-q,ke=J[1]/10-ye,Ke=Math.hypot(ze,ke);if(Ke<3)continue;ze/=Ke,ke/=Ke;let Qe=3;for(;Qe<Math.min(Ke,16)&&!ge(q+ze*Qe,ye+ke*Qe);)Qe+=1.5;if(!ge(q+ze*Qe,ye+ke*Qe))continue;let Se=q+ze*(Qe+1.2),Oe=ye+ke*(Qe+1.2);F.some(je=>Math.hypot(je.x-Se,je.z-Oe)<9)||et(Se,Oe,4.5)||F.push({x:Se,z:Oe,dx:ze,dz:ke,down:0,tgt:0})}if(le.entries=F,!F.length)return;let ne=P(160,208,(w,B,W)=>{w.fillStyle="#f4f4f2",w.fillRect(0,0,B,W),w.strokeStyle="#111",w.lineWidth=4,w.strokeRect(3,3,B-6,W-6),w.fillStyle="#111",w.font="900 22px Anton, Impact, sans-serif",w.textAlign="center",w.fillText("PE\u0160IA Z\xD3NA",B/2,30),w.fillStyle="#1456b8",w.beginPath(),w.arc(B/2,92,50,0,7),w.fill(),w.fillStyle="#fff",w.beginPath(),w.arc(B/2+4,62,9,0,7),w.fill(),w.strokeStyle="#fff",w.lineWidth=9,w.lineCap="round",w.beginPath(),w.moveTo(B/2+2,76),w.lineTo(B/2-2,104),w.lineTo(B/2-16,130),w.moveTo(B/2-2,104),w.lineTo(B/2+14,128),w.moveTo(B/2+2,82),w.lineTo(B/2+20,96),w.moveTo(B/2+2,82),w.lineTo(B/2-18,92),w.stroke(),w.fillStyle="#111",w.font="700 15px sans-serif",w.fillText("Z\xC1SOBOVANIE",B/2,166),w.font="900 22px sans-serif",w.fillText("6 \u2013 9 h",B/2,192)}),U=L(new se.Lambert({color:9080208})),V=L(new se.Lambert({map:ne})),ie=F.length,de=new se.InstancedMesh(new se.Box(.7,.91,.04),[U,U,U,U,V,U],ie),we=new se.InstancedMesh(new se.Cyl(.035,.035,2.9,6),U,ie),Ve=new se.Mat4,Ae=new se.Quat,$e=new se.Vec3,tt=new se.Vec3(1,1,1),mt=new se.Vec3(0,1,0);F.forEach((w,B)=>{let W=w.x-w.dz*3.4-w.dx*.6,J=w.z+w.dx*3.4-w.dz*.6;e.collide(W,J,e.hAt(W,J),.5,k)&&(W=k.x,J=k.z);let q=e.hAt(W,J);Ae.setFromAxisAngle(mt,Math.atan2(-w.dx,-w.dz)),Ve.compose($e.set(W,q+2.5,J),Ae,tt),de.setMatrixAt(B,Ve),Ve.compose($e.set(W+w.dx*.045,q+1.45,J+w.dz*.045),Ae,tt),we.setMatrixAt(B,Ve),e.colliders.add({ax:W-.06,az:J,bx:W+.06,bz:J,y0:q-2,y1:q+3,kind:"p"},W-.2,J-.2,W+.2,J+.2),w.y=e.hAt(w.x,w.z)}),de.castShadow=we.castShadow=!0,e.group.add(de,we);let lt=new se.Cyl(.11,.11,.9,10),wt=L(new se.Lambert({color:13225168})),Ze=new se.InstancedMesh(lt,wt,ie*3),Re=new se.InstancedMesh(new se.Cyl(.115,.115,.07,10),new se.Basic({color:16726815}),ie*3);Ze.castShadow=!0,le.boll=Ze,le.cap=Re,le.M=Ve,le.P=$e,le.Q=new se.Quat,le.S=tt,F.forEach((w,B)=>pt(B,0)),e.group.add(Ze,Re)}function pt(z,Y){let F=le.entries[z];for(let ne=0;ne<3;ne++){let U=(ne-1)*1.7,V=F.x-F.dz*U,ie=F.z+F.dx*U,de=e.hAt(V,ie)-Y*.86;le.M.compose(le.P.set(V,de+.45,ie),le.Q,le.S),le.boll.setMatrixAt(z*3+ne,le.M),le.M.compose(le.P.set(V,de+.86,ie),le.Q,le.S),le.cap.setMatrixAt(z*3+ne,le.M)}le.boll.instanceMatrix.needsUpdate=!0,le.cap.instanceMatrix.needsUpdate=!0}function ct(z){let Y=s.pc(),F=Y?Y.x:o.x,ne=Y?Y.z:o.z;le.acc=d(le.acc+(ge(F,ne)?z:-z)*2.5,0,1),le.acc>=1?le.on=!0:le.acc<=0&&(le.on=!1),T.zoneNow=le.on;let U=a.tod>=6&&a.tod<9,V=le.el||(le.el=document.getElementById("zone"));if(V){let ie=le.on?Y?U?"PE\u0160IA Z\xD3NA \xB7 z\xE1sobovanie do 9:00 \xB7 max 20 km/h":"PE\u0160IA Z\xD3NA \xB7 aut\xE1m vjazd zak\xE1zan\xFD":"PE\u0160IA Z\xD3NA":"";le._txt!==ie&&(le._txt=ie,V.textContent=ie,V.hidden=!ie,V.classList.toggle("bad",!!Y&&le.on&&!U))}if(le.cool>0&&(le.cool-=z),Y&&le.on&&a.mode==="play"){if(le.told||(le.told=!0,c.toast("Pe\u0161ia z\xF3na: aut\xE1 len 6:00\u20139:00 (z\xE1sobovanie), max 20 km/h")),!U&&(le.fineT+=z,le.fineT>6)){le.fineT=-22;let ie=Math.min(50,Math.floor(a.money));a.money-=ie,c.toast("Mestsk\xE1 pol\xEDcia: jazda v pe\u0161ej z\xF3ne \xB7 pokuta "+(ie?"\u2212"+ie+" \u20AC":"50 \u20AC (nem\xE1\u0161 z \u010Doho)")),l._tone(660,330,.3,.14,"square")}Y.speed*3.6>26?(le.fastT+=z,le.fastT>1.2&&le.cool<=0&&(le.cool=16,le.fastT=0,v(1,"r\xFDchla jazda v pe\u0161ej z\xF3ne"))):le.fastT=0}else le.fineT>0?le.fineT=0:le.fineT<0&&(le.fineT=Math.min(0,le.fineT+z));if(le.boll)for(let ie=0;ie<le.entries.length;ie++){let de=le.entries[ie];de.tgt=Y&&Math.abs(Y.x-de.x)<11&&Math.abs(Y.z-de.z)<11?1:0,de.down!==de.tgt&&(de.down=d(de.down+(de.tgt>de.down?1:-1)*z*2.2,0,1),pt(ie,de.down))}}function et(z,Y,F){for(let ne of fe.edges){let U=ne.p;for(let V=0;V<U.length-1;V++){let ie=U[V][0],de=U[V][1],we=U[V+1][0],Ve=U[V+1][1];if(Math.min(ie,we)-F>z||Math.max(ie,we)+F<z||Math.min(de,Ve)-F>Y||Math.max(de,Ve)+F<Y)continue;let Ae=we-ie,$e=Ve-de,tt=d(((z-ie)*Ae+(Y-de)*$e)/(Ae*Ae+$e*$e||1),0,1);if(Math.hypot(ie+Ae*tt-z,de+$e*tt-Y)<F)return!0}}return!1}function We(){let z=[],Y=new s.SGrid(12),F=[],ne=h?120:200;for(let Re of e.d.road){if(Re.c!==5||z.length>=ne||!ge(Re.p[0][0]/10,Re.p[0][1]/10)&&!ge(Re.p[Re.p.length-1][0]/10,Re.p[Re.p.length-1][1]/10))continue;let w=Re.p.map(W=>[W[0]/10,W[1]/10]),B=Math.floor(w[0][0]*7+w[0][1]*13);for(let W=0;W<w.length-1;W++){let J=w[W][0],q=w[W][1],ye=w[W+1][0]-J,ze=w[W+1][1]-q,ke=Math.hypot(ye,ze);if(!(ke<5)){ye/=ke,ze/=ke;for(let Ke=4+_(B+W)*4;Ke<ke-3;Ke+=7.5){let Qe=_(B*3+W*31+Math.floor(Ke));if(Qe>.5)continue;let Se=Qe<.25?1:-1,Oe=2.1,je=J+ye*Ke-ze*Oe*Se,ut=q+ze*Ke+ye*Oe*Se;if(je<5||ut<5||je>e.W-5||ut>e.H-5||!ge(je,ut))continue;let Et=e.hAt(je,ut);if(e.surfaceY(je,ut)>Et+.3||Math.abs(e.hAt(je+1.5,ut)-Et)>.25||Math.abs(e.hAt(je,ut+1.5)-Et)>.25||e.collide(je,ut,Et,1.7,k)||le.entries.some(Lt=>Math.hypot(Lt.x-je,Lt.z-ut)<9)||et(je,ut,3.6)||Y.query(je,ut,4.2,F).some(Lt=>Math.hypot(Lt.x-je,Lt.z-ut)<4.2))continue;let Bn={x:je,y:Et,z:ut,a:Math.atan2(ye,ze),k:z.length};Y.add(Bn,je,ut,je,ut),z.push(Bn)}}}}if(!z.length)return;let U=z.length,V=new se.Cyl(.06,1.5,.55,8),ie=L(new se.Lambert({color:16777215,flatShading:!0}),.9),de=j([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),we=new se.InstancedMesh(V,ie,U),Ve=new se.InstancedMesh(de,L(new se.Lambert({vertexColors:!0})),U),Ae=new se.Mat4,$e=new se.Quat,tt=new se.Vec3,mt=new se.Vec3(1,1,1),lt=new se.Vec3(0,1,0),wt=new se.Color,Ze=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];z.forEach((Re,w)=>{$e.setFromAxisAngle(lt,Re.a+(_(w*3)-.5)*.5),Ae.compose(tt.set(Re.x,Re.y,Re.z),$e,mt),Ve.setMatrixAt(w,Ae),Ae.compose(tt.set(Re.x,Re.y+2.5,Re.z),$e,mt),we.setMatrixAt(w,Ae),we.setColorAt(w,wt.set(Ze[Math.floor(_(Math.floor(Re.x/26)*31+Math.floor(Re.z/26)*17)*Ze.length)])),e.colliders.add({ax:Re.x-.3,az:Re.z,bx:Re.x+.3,bz:Re.z,y0:Re.y-1,y1:Re.y+2.4,kind:"p"},Re.x-.5,Re.z-.5,Re.x+.5,Re.z+.5)}),we.castShadow=Ve.castShadow=!0,we.receiveShadow=!0,e.group.add(we,Ve),T.terraceN=U}function ft(){let z=(e.fountains||[]).filter(ne=>ne.area>14);if(!z.length)return;let Y=L(new se.Lambert({color:10130566,flatShading:!0})),F=new se.Shader({uniforms:{uTime:u.uTime,uNight:u.uNight},transparent:!0,depthWrite:!1,side:se.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let ne of z){if(ne.noTop){let tt=new se.Mesh(new se.Cyl(.5,3.4,4.6,18,1,!0),F);tt.position.set(ne.x,ne.y+2.3,ne.z),e.group.add(tt);continue}let U=ne.area>60,V=U?1.5:1,ie=new se.Group,de=new se.Mesh(new se.Cyl(.22*V,.36*V,1.9*V,8),Y),we=new se.Mesh(new se.Cyl(.95*V,.28*V,.32*V,10),Y),Ve=new se.Mesh(new se.Cyl(.1*V,.2*V,.9*V,6),Y),Ae=new se.Mesh(new se.Sphere(.2*V,8,6),Y),$e=new se.Mesh(new se.Cyl(.9*V,1.05*V,1.95*V,14,1,!0),F);de.position.y=.95*V,we.position.y=2.05*V,Ve.position.y=2.6*V,Ae.position.y=3.15*V,$e.position.y=1.02*V,de.castShadow=we.castShadow=!0,ie.add(de,we,Ve,Ae,$e),ie.position.set(ne.x,ne.y-.1,ne.z),e.group.add(ie)}}function Ct(){let z=1031.2+C,Y=766+y,F=e.hAt(z,Y),ne=Math.atan2(-10.8,-16.2),U=new se.Group,V="#e3c56d",ie="#d9d2bf",de=new se.Mesh(j([[6.8,31,6.8,0,15.5,0,V],[7.3,.5,7.3,0,9.2,0,ie],[7.3,.5,7.3,0,20.4,0,ie],[8,.7,8,0,31.2,0,ie],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),L(new se.Lambert({vertexColors:!0}))),we=L(new se.Lambert({color:14927213,flatShading:!0})),Ve=L(new se.Lambert({color:5084288,flatShading:!0})),Ae=new se.Lambert({color:14266938,emissive:3812360}),$e=(Se,Oe,je)=>{let ut=new se.Mesh(Se,Oe);return ut.position.y=je,ut.castShadow=!0,U.add(ut),ut};de.castShadow=de.receiveShadow=!0,U.add(de),$e(new se.Cyl(2.9,3.1,5.2,8),we,34.1),$e(new se.Cyl(1.5,3.5,3.6,8),Ve,38.5),$e(new se.Cyl(1.25,1.25,2.2,8),we,41.4),$e(new se.Cyl(.9,1.7,1.6,8),Ve,43.3),$e(new se.Cyl(.05,.8,5.2,8),Ve,46.7),$e(new se.Sphere(.35,8,6),Ae,49.4);let tt=P(128,128,(Se,Oe,je)=>{Se.fillStyle="#f3efe2",Se.beginPath(),Se.arc(64,64,60,0,7),Se.fill(),Se.strokeStyle="#222",Se.lineWidth=5,Se.stroke();for(let ut=0;ut<12;ut++){let Et=ut/12*N*2;Se.beginPath(),Se.moveTo(64+Math.sin(Et)*46,64-Math.cos(Et)*46),Se.lineTo(64+Math.sin(Et)*54,64-Math.cos(Et)*54),Se.stroke()}Se.lineWidth=6,Se.lineCap="round",Se.beginPath(),Se.moveTo(64,64),Se.lineTo(88,50),Se.moveTo(64,64),Se.lineTo(56,22),Se.stroke()}),mt=new se.Basic({map:tt,transparent:!0});for(let Se=0;Se<4;Se++){let Oe=new se.Mesh(new se.Plane(3.4,3.4),mt),je=Se*N/2;Oe.position.set(Math.sin(je)*3.43,25.6,Math.cos(je)*3.43),Oe.rotation.y=je,U.add(Oe)}U.position.set(z,F-.5,Y),U.rotation.y=ne,e.group.add(U);let lt=Math.cos(ne)*3.4,wt=Math.sin(ne)*3.4,Ze=[[z+lt+wt,Y-wt+lt],[z+lt-wt,Y-wt-lt],[z-lt-wt,Y+wt-lt],[z-lt+wt,Y+wt+lt]];for(let Se=0;Se<4;Se++){let Oe=Ze[Se],je=Ze[(Se+1)%4];e.colliders.add({ax:Oe[0],az:Oe[1],bx:je[0],bz:je[1],y0:F-50,y1:F+31,kind:"b"},Oe[0],Oe[1],je[0],je[1])}let Re=0,w=0,B=!1;for(let[Se,Oe]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]].map(je=>[je[0]+C,je[1]+y]))if(ge(Se,Oe)&&!e.collide(Se,Oe,e.hAt(Se,Oe),5.6,k)){Re=Se,w=Oe,B=!0;break}if(!B)return;let W=Math.min(e.hAt(Re,w),e.hAt(Re+4,w),e.hAt(Re-4,w),e.hAt(Re,w+4),e.hAt(Re,w-4)),J=L(new se.Lambert({color:10130566,flatShading:!0})),q=new se.Group,ye=new se.Mesh(new se.Cyl(4.7,4.9,.85,16),J),ze=new se.Mesh(new se.Cyl(4.35,4.35,.03,16),e.waterMat||new se.Lambert({color:2903898})),ke=new se.Mesh(new se.Cyl(.5,.75,5.2,8),J),Ke=new se.Mesh(new se.Cyl(.9,.5,.5,8),J),Qe=new se.Mesh(j([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),L(new se.Lambert({vertexColors:!0})));ye.position.y=.42,ze.position.y=.86,ke.position.y=3,Ke.position.y=5.8,Qe.position.y=6.05,ye.castShadow=ke.castShadow=Qe.castShadow=!0,ye.receiveShadow=!0,q.add(ye,ze,ke,Ke,Qe),q.position.set(Re,W-.05,w),e.group.add(q);for(let Se=0;Se<10;Se++){let Oe=Se/10*N*2,je=(Se+1)/10*N*2,ut=[Re+Math.sin(Oe)*4.8,w+Math.cos(Oe)*4.8],Et=[Re+Math.sin(je)*4.8,w+Math.cos(je)*4.8];e.colliders.add({ax:ut[0],az:ut[1],bx:Et[0],bz:Et[1],y0:W-2,y1:W+1.3,kind:"w"},ut[0],ut[1],Et[0],Et[1])}(e.fountains||(e.fountains=[])).push({x:Re,z:w,y:W+.75,area:30,noTop:!0,spray:1})}function Vt(){let z=1038.6+C,Y=849.4+y;for(let Ae=0;Ae<8&&e.collide(z,Y,e.hAt(z,Y),1.2,k);Ae++)z=k.x,Y=k.z;let F=e.hAt(z,Y),ne=L(new se.Lambert({color:5192994}),1.2),U=L(new se.Lambert({color:1710620})),V=new se.Group,ie=(Ae,$e,tt,mt,lt,wt=0,Ze=0)=>{let Re=new se.Mesh(Ae,$e);return Re.position.set(tt,mt,lt),Re.rotation.set(wt,0,Ze),Re.castShadow=!0,V.add(Re),Re};ie(new se.Cyl(.52,.52,.05,16),U,0,.025,0),ie(new se.Torus(.5,.05,6,18),ne,0,.05,0,N/2),ie(new se.Cyl(.5,.5,.04,16),ne,-.35,.3,-.42,.9,.2),ie(new se.Box(.5,.2,.26),ne,0,.13,-.1),ie(new se.Box(.56,.12,.2),ne,0,.11,.22),ie(new se.Sphere(.15,10,8),ne,0,.3,.12),ie(new se.Cyl(.19,.2,.07,12),ne,0,.4,.1),ie(new se.Sphere(.16,10,6,0,N*2,0,N/2),ne,0,.41,.1);let de=P(128,128,(Ae,$e,tt)=>{Ae.fillStyle="#1456b8",Ae.beginPath(),Ae.arc($e/2,tt/2,62,0,7),Ae.fill(),Ae.fillStyle="#ffd21a",Ae.beginPath(),Ae.arc($e/2,tt/2,54,0,7),Ae.fill(),Ae.fillStyle="#111",Ae.font="900 30px Anton, Impact, sans-serif",Ae.textAlign="center",Ae.fillText("MAN",$e/2,50),Ae.fillText("AT WORK",$e/2,88)});ie(new se.Cyl(.03,.03,2.2,6),U,1.1,1.1,-.3);let we=ie(new se.Cyl(.3,.3,.03,18),[U,new se.Basic({map:de}),U],1.1,2.3,-.3,N/2);we.rotation.z=0,V.position.set(z,F,Y),V.rotation.y=-.6,e.group.add(V),e.colliders.add({ax:z-.3,az:Y,bx:z+.3,bz:Y,y0:F-1,y1:F+.5,kind:"p"},z-.5,Y-.5,z+.5,Y+.5);let Ve={ax:z-.5,az:Y,bx:z+.5,bz:Y,hw:2.5,n:"\u010Cumil"};e.names.add(Ve,z-3,Y-3,z+3,Y+3),it[0][1]=z,it[0][2]=Y}let it=[["\u010Cumil",1038.6,849.4,14],["Michalsk\xE1 br\xE1na",875.5,598.2,24],["Hlavn\xE9 n\xE1mestie a Star\xE1 radnica",1016,778,30],["Primaci\xE1lny pal\xE1c",1094,722,34],["D\xF3m sv\xE4t\xE9ho Martina",750.5,948,38],["Bratislavsk\xFD hrad",388,946,75],["Slovensk\xE9 n\xE1rodn\xE9 divadlo",1105,920,36],["Reduta",1118,1062,42],["Modr\xFD kostol\xEDk",1438.5,433.8,36],["Prezidentsk\xFD pal\xE1c",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Star\xE1 tr\u017Enica",1217.7,668.9,40],["Slovensk\xE1 n\xE1rodn\xE1 gal\xE9ria",1015,1175,40],["Slovensk\xE9 n\xE1rodn\xE9 m\xFAzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestsk\xE9 k\xFApele Gr\xF6ssling",1306,1076,40]];for(let z of it)z[1]+=C,z[2]+=y;for(let z of s.moreLandmarks||[])it.push(z);let Te=new Set;function G(){try{for(let z of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))Te.add(z)}catch{}window.__gtbLM=(z,Y)=>{for(let F of it)z(F[1],F[2],Te.has(F[0])?"#7dff6a":"#ffffff",Y/150)}}let Le=0;function Ue(z){if(Le-=z,Le>0||a.mode!=="play")return;Le=.4;let Y=s.pc()?s.pc().x:o.x,F=s.pc()?s.pc().z:o.z;for(let ne of it){if(Te.has(ne[0])||Math.hypot(ne[1]-Y,ne[2]-F)>ne[3])continue;Te.add(ne[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...Te]))}catch{}let U=Te.size===it.length,V=U?1500:60;a.money+=V,c.big(U?"CEL\xC1 BRATISLAVA":"OBJAVEN\xC9",`${ne[0]} \xB7 ${Te.size}/${it.length} \xB7 +${V} \u20AC`,"#ffcc33",3),l.win();break}}function st(){let z=[[1089+C,725.6+y,2]];for(let[Y,F,ne]of z){if(e.collide(Y,F,e.hAt(Y,F),2.2,k)&&(Y=k.x,F=k.z),e.collide(Y,F,e.hAt(Y,F),1.2,k))continue;let U=E("fabka",Y,F,ne,"#f3f4f5");U.parked=U.keep=!0,U.mp=!0,oe(U,"mp")}}return{zoneNow:!1,plateMat:K,gloss:H,livery:oe,flash:X,maybeTaxi:ue,inZone:ge,trams:fe,zone:le,landmarks:it,patchData(z){for(let Y of z.bld)Y.n==="Kostol sv. Al\u017Ebety"&&(Y.c="#9cc4e8",Y.rc="#5f86b4")},init(){let z=(Y,F)=>{try{F()}catch(ne){console.error("X3 "+Y,ne)}};z("trams",Me),z("zone",Tt),z("cumil",Vt),z("radnica",Ct),z("terraces",We),z("fountains",ft),z("patrol",st),z("landmarks",G),z("prewarm",()=>{for(let Y=0;Y<40&&fe.list.length<Math.min(5,fe.max);Y++){let F=Fe(1);F&&(F.s=60+g()*Math.max(10,F.r.L-200),_e(F))}}),I=!0},obst(){return I&&fe.proxies.length?T._ob=n.concat(fe.proxies):n},update(z,Y){I&&(qe(z,Y),fe.mWin.emissive.setScalar(.004+u.uNight.value*1.25),fe.mHead.color.setScalar(1+u.uNight.value*3),!Y&&(ct(z),Ue(z),s.pc()&&s.pc().mp&&!s.pc().mpStolen&&(s.pc().mpStolen=1,v(2,"kr\xE1de\u017E auta mestskej pol\xEDcie"))))},goalText(){return" \xB7 Pamiatky "+Te.size+"/"+it.length}}})();return T}var nh=[];function Vy(s,e){let t=document.createElement("canvas"),n=128,i=Math.max(128,Math.round(n*e.w/e.h));t.width=i,t.height=n;let r=t.getContext("2d");e.bg&&(r.fillStyle=e.bg,r.fillRect(0,0,i,n)),r.fillStyle=e.fg||"#fff",r.textAlign="center",r.textBaseline="middle";let o=92;r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`;let a=r.measureText(s).width;a>i*.9&&(o=Math.floor(o*i*.9/a),r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`),r.fillText(s,i/2,n/2+4);let c=new Si(t);return c.colorSpace=It,c.anisotropy=4,c}function fs(s,e,t,n){let[i,r]=n.a,[o,a]=n.b,c=n.t??.5,l=i+(o-i)*c,h=r+(a-r)*c,u=Math.hypot(o-i,a-r)||1,f=(a-r)/u,d=-(o-i)/u;(l+f-n.away[0])**2+(h+d-n.away[1])**2<(l-f-n.away[0])**2+(h-d-n.away[1])**2&&(f=-f,d=-d);let p=Vy(t,n),x=new bt({map:p,emissiveMap:p,emissive:16777215,transparent:!n.bg,alphaTest:n.bg?0:.35,side:Wt});x.userData.glow=n.glow??1,nh.push(x);let g=new Ye(new bi(n.w,n.h),x);return g.position.set(l+f*(n.off??.18),s.hAt(l,h)+n.y,h+d*(n.off??.18)),g.rotation.y=Math.atan2(f,d),e.add(g),{x:l,z:h,nx:f,nz:d}}function Cd(s,e){let t=new Ot,n=[],i=(c,l,h)=>[c[0]+(l[0]-c[0])*h,c[1]+(l[1]-c[1])*h],r=(c,l,h,u,f,d,p,x=0,g=null)=>{let m=new Ye(new Xt(c,l,h),g||new bt({color:u}));return m.position.set(f,d,p),m.rotation.y=x,m.castShadow=m.receiveShadow=!0,t.add(m),m};{let c=[[2529,1187],[2584,1108]],l=[[2504,1170],[2559,1091]],h=[2540,1146],u=[[2531,1205],[2574,1143]],f=[2571,1183],d=[[2574,1065],[2602,1084]],p=[2592,1069];fs(s,t,"PRIOR",{a:[2501,1171],b:[2557,1090],t:.42,away:h,y:9.2,w:12,h:2.8,fg:"#e8402a",glow:1.2,off:.3}),fs(s,t,"PRIOR",{a:u[0],b:u[1],t:.12,away:f,y:16.6,w:10,h:2.4,fg:"#e8402a",glow:1.2}),fs(s,t,"HOTEL KYJEV",{a:d[0],b:d[1],t:.5,away:p,y:67.2,w:26,h:3.6,fg:"#f4f1e6",off:-1.2,glow:1.4}),fs(s,t,"ost block",{a:l[0],b:l[1],t:.34,away:h,y:3.25,w:5.6,h:1,fg:"#f2efe6",bg:"#161616",weight:500,glow:1.1}),fs(s,t,"K\xC1CE\u010CKO",{a:l[0],b:l[1],t:.76,away:h,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),fs(s,t,"K\xC1CE\u010CKO",{a:c[0],b:c[1],t:.76,away:h,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),fs(s,t,"K\xC1CE\u010CKO \u2191",{a:l[0],b:l[1],t:.62,away:h,y:3.25,w:4.6,h:.9,fg:"#ffd23a",bg:"#1b1b1b",glow:1.1});let x=i(l[0],l[1],.34),g=[l[1][0]-l[0][0],l[1][1]-l[0][1]],m=Math.hypot(g[0],g[1]);g[0]/=m,g[1]/=m;let _=[g[1],-g[0]];(x[0]+_[0]-h[0])**2+(x[1]+_[1]-h[1])**2<(x[0]-_[0]-h[0])**2+(x[1]-_[1]-h[1])**2&&(_=[-_[0],-_[1]]);let v=Math.atan2(g[0],g[1]),M=new bt({color:3107636,flatShading:!0}),S=new bt({color:2367775}),b=new bt({color:9071176});for(let ae=-3;ae<=3;ae++){let xe=x[0]+g[0]*ae*1.7+_[0]*1.1,Ne=x[1]+g[1]*ae*1.7+_[1]*1.1,Pe=s.hAt(xe,Ne);r(.7,.6,.7,0,xe,Pe+.3,Ne,v,S);let fe=new Ye(new Oi(.55+(ae&1)*.15,0),M);if(fe.position.set(xe,Pe+1.05+(ae&1)*.2,Ne),fe.castShadow=!0,t.add(fe),ae%2===0){let O=xe+_[0]*1.6,Ee=Ne+_[1]*1.6,ce=s.hAt(O,Ee),Me=new Ye(new fn(.42,.42,.05,10),b);Me.position.set(O,ce+.74,Ee),t.add(Me);let he=new Ye(new fn(.04,.04,.74,5),S);he.position.set(O,ce+.37,Ee),t.add(he)}}let E=i(i(c[0],c[1],.56),i(l[0],l[1],.56),.5),C=i(i(c[0],c[1],.95),i(l[0],l[1],.95),.5),y=10.5,T=s.hAt(h[0],h[1])+12.05,N=1e9;for(let ae of[...c,...l])N=Math.min(N,s.hAt(ae[0],ae[1]));let I=N+12.12;s.decks.add({ax:E[0],az:E[1],bx:C[0],bz:C[1],ya:I,yb:I,hw:y},Math.min(E[0],C[0])-y,Math.min(E[1],C[1])-y,Math.max(E[0],C[0])+y,Math.max(E[1],C[1])+y);let k=Math.hypot(C[0]-E[0],C[1]-E[1]),P=i(E,C,.5),L=r(y*2,.14,k,8019264,P[0],I-.07,P[1],v);L.castShadow=!1;let H=[[-y,-k/2],[y,-k/2],[y,k/2],[-y,k/2]].map(([ae,xe])=>[P[0]+_[0]*ae+g[0]*xe,P[1]+_[1]*ae+g[1]*xe]),j=new bt({color:2763308});for(let ae=0;ae<4;ae++){let xe=H[ae],Ne=H[(ae+1)%4],Pe=Math.hypot(Ne[0]-xe[0],Ne[1]-xe[1]);r(.08,.08,Pe,0,(xe[0]+Ne[0])/2,I+1.1,(xe[1]+Ne[1])/2,Math.atan2(Ne[0]-xe[0],Ne[1]-xe[1]),j),r(.05,.05,Pe,0,(xe[0]+Ne[0])/2,I+.55,(xe[1]+Ne[1])/2,Math.atan2(Ne[0]-xe[0],Ne[1]-xe[1]),j),s.colliders.add({ax:xe[0],az:xe[1],bx:Ne[0],bz:Ne[1],y0:I-.5,y1:I+1.6,kind:"r",tag:null},xe[0],xe[1],Ne[0],Ne[1])}let $=(ae,xe)=>[P[0]+_[0]*ae+g[0]*xe,P[1]+_[1]*ae+g[1]*xe];{let[ae,xe]=$(-y+2.2,-k/2+5);r(1.4,1.1,7,3812386,ae,I+.55,xe,v),r(1.7,.08,7.3,11569756,ae,I+1.14,xe,v)}let K=[14239787,15921126,3107722,15909424],Z=0;for(let ae=-k/2+4;ae<k/2-2;ae+=5.2)for(let xe of[1.5,6.2]){let[Ne,Pe]=$(xe,ae);r(1.8,.07,.8,10123858,Ne,I+.75,Pe,v,b);for(let Ee of[-.75,.75]){let[ce,Me]=$(xe+Ee,ae);r(.35,.06,1.8,0,ce,I+.45,Me,v+Math.PI/2,b)}let fe=new Ye(new fn(.03,.03,2.4,5),j);fe.position.set(Ne,I+1.2,Pe),t.add(fe);let O=new Ye(new ya(1.5,.5,8),new bt({color:K[Z++%4],flatShading:!0}));O.position.set(Ne,I+2.55,Pe),O.castShadow=!0,t.add(O)}let te=new tn({color:16767392});te.userData.bulb=!0,nh.push(te);let oe=[];for(let ae=-k/2;ae<=k/2+.1;ae+=k/4)for(let xe=0;xe<=14;xe++){let Ne=-y+2*y*xe/14,Pe=.5*Math.sin(Math.PI*xe/14);oe.push([...$(Ne,ae),I+3.1-Pe])}let X=new Sn(new ri(.07,5,4),te,oe.length),ee=new rt;oe.forEach((ae,xe)=>{ee.makeTranslation(ae[0],ae[2],ae[1]),X.setMatrixAt(xe,ee)}),t.add(X);for(let ae of[-y,y])for(let xe=-k/2;xe<=k/2+.1;xe+=k/4){let[Ne,Pe]=$(ae,xe),fe=new Ye(new fn(.04,.04,3.2,5),j);fe.position.set(Ne,I+1.6,Pe),t.add(fe)}let ue=i(l[0],l[1],.62),pe=$(y-2.2,k/2-2.5);n.push({a:[ue[0]+_[0]*1.6,ue[1]+_[1]*1.6],b:pe,yb:I,name:"K\xE1ce\u010Dko \u2013 terasa",back:"Kamenn\xE9 n\xE1mestie"})}let o=new tn({color:16765498,transparent:!0,opacity:.75,side:Wt});for(let c of n)for(let[l,h]of[[c.a,s.hAt(c.a[0],c.a[1])],[c.b,c.yb]]){let u=new Ye(new ba(.75,1,20),o);u.rotation.x=-Math.PI/2,u.position.set(l[0],h+.08,l[1]),t.add(u)}e.add(t);let a=0;return{doors:n,update(c,l){a=Math.max(0,a-c);for(let h of nh)h.userData.bulb?h.color.setScalar(.25+2.6*l).multiply(new Be(1,.82,.55)):h.emissiveIntensity=(.75+1.1*l)*h.userData.glow;o.opacity=.5+.3*Math.sin(performance.now()/250)},tryDoor(c,l,h){if(a>0)return null;for(let u of n){let f=s.hAt(u.a[0],u.a[1]);if(Math.hypot(c-u.a[0],l-u.a[1])<1.1&&Math.abs(h-f)<2)return a=2.5,[u.b[0],u.b[1],u.yb,u.name];if(Math.hypot(c-u.b[0],l-u.b[1])<1.1&&Math.abs(h-u.yb)<2)return a=2.5,[u.a[0],u.a[1],f,u.back]}return null}}}function ih(s,e){if(e===Gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qr||e===Da){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===qr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Wa=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Vi.extractUrlBase(e);o=Vi.resolveURL(l,this.path)}else o=Vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Wr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dd){try{o[St.KHR_BINARY_GLTF]=new wh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Lh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:o[u]=new ch;break;case St.KHR_DRACO_MESH_COMPRESSION:o[u]=new Eh(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[u]=new Th;break;case St.KHR_MESH_QUANTIZATION:o[u]=new Ah;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Wy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ah=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new or(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ra(h),l.distance=u;break;case"spot":l=new rr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ch=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let i=[];e.color=new Be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}},lh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},uh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],on),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},yh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bh=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Sh=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let x=new rt,g=new D,m=new en,_=new D(1,1,1),v=new Sn(p.geometry,p.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&_.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,x.compose(g,m,_));for(let M in c)if(M==="_COLOR_0"){let S=c[M];v.instanceColor=new as(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,c[M]);Ht.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Dd="glTF",to=12,Pd={JSON:1313821514,BIN:5130562},wh=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,to),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-to,r=new DataView(e,to),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Pd.JSON){let l=new Uint8Array(e,to+o,a);this.content=n.decode(l)}else if(c===Pd.BIN){let l=to+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Eh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Ch[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ch[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=hr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(d)},a,l,on,f)})})}},Th=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ah=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Xa=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,x=p-l,g=-2*d+3*f,m=d-f,_=1-g,v=m-f+u;for(let M=0;M!==a;M++){let S=o[x+M+a],b=o[x+M+c]*h,E=o[p+M+a],C=o[p+M]*h;r[M]=_*S+v*b+g*E+m*C}return r}},Xy=new en,Rh=class extends Xa{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Xy.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ld={9728:jt,9729:Jt,9984:Xo,9985:Fl,9986:Mr,9987:Wn},Id={33071:Dn,33648:Cr,10497:ss},sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:os,STEP:Zs},rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),s.DefaultMaterial}function ds(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ky(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jy(s){let e,t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=s.indices+":"+oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+oh(s.targets[n]);return e}function oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var $y=new rt,Lh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ta(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ds(r,a,i),Xi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Vi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=sh[i.type],a=hr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=sh[i.type],l=hr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(d&&d!==u){let m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(_);v||(x=new l(a,m*d,i.count*d/h),v=new Nr(x,d/h),t.cache.add(_,v)),g=new Dr(v,c,f%d/h,p)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),g=new Ft(x,c,p);if(i.sparse!==void 0){let m=sh.SCALAR,_=hr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,S=new _(o[1],v,i.sparse.count*m),b=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized));for(let E=0,C=S.length;E<C;E++){let y=S[E];if(g.setX(y,b[E*c]),c>=2&&g.setY(y,b[E*c+1]),c>=3&&g.setZ(y,b[E*c+2]),c>=4&&g.setW(y,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ld[f.magFilter]||Jt,h.minFilter=Ld[f.minFilter]||Wn,h.wrapS=Id[f.wrapS]||ss,h.wrapT=Id[f.wrapT]||ss,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let g=new an(x);g.needsUpdate=!0,f(g)}),t.load(Vi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Jy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Or,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fr,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[St.KHR_MATERIALS_UNLIT]){let u=i[St.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,It)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Wt);let h=r.alphaMode||rh.OPAQUE;if(h===rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){let u=r.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ds(i,u,r),u})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Nd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=jy(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Nd(new Rt,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Yy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],g=o[d],m,_=l[d];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ha(x,_):new Ye(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?m.geometry=ih(m.geometry,Da):g.mode===Zn.TRIANGLE_FAN&&(m.geometry=ih(m.geometry,qr));else if(g.mode===Zn.LINES)m=new fa(x,_);else if(g.mode===Zn.LINE_STRIP)m=new er(x,_);else if(g.mode===Zn.LINE_LOOP)m=new da(x,_);else if(g.mode===Zn.POINTS)m=new pa(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ky(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Xi(m,r),g.extensions&&ds(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ds(i,u[0],r),u[0];let f=new Ot;r.extensions&&ds(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Xf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new rt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ua(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],x=d.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let _=0,v=f.length;_<v;_++){let M=f[_],S=d[_],b=p[_],E=x[_],C=g[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let y=n._createAnimationTracks(M,S,b,E,C);if(y)for(let T=0;T<y.length;T++)m.push(y[T])}return new ir(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,$y)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Ur:l.length>1?h=new Ot:l.length===1?h=l[0]:h=new Ht,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Xi(h,r),r.extensions&&ds(n,h,r),r.matrix!==void 0){let u=new rt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),Xi(r,n),n.extensions&&ds(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Cn||f instanceof an)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Wi[r.path]===Wi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Wi[r.path]){case Wi.weights:l=wi;break;case Wi.rotation:l=oi;break;case Wi.position:case Wi.scale:l=Ei;break;default:switch(n.itemSize){case 1:l=wi;break;case 2:case 3:default:l=Ei;break}break}let h=i.interpolation!==void 0?qy[i.interpolation]:os,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let p=new l(c[f]+"."+Wi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof oi?Rh:Xa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qy(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Ph(hr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Ph(hr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Nd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Pt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),Xi(s,e),Qy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zy(s,e.targets,t):s})}function Ud(s){let e=new Map,t=new Map,n=s.clone();return zd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zd(s.children[n],e.children[n],t)}var Ih={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},t1=new bt({color:3886431,name:"Windows"}),n1=new bt({color:1381653,name:"Tire"}),i1=new bt({color:10132898,name:"Rim"}),Fd=new bt({color:2303014,name:"Trim"}),s1=new bt({color:15921902,name:"Plate"});function Od(s,e,t){let n=new kr;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new Ma(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(e/2-t,0,0),i}function Bd(s){let e=Ih[s],{L:t,W:n,H:i,hood:r,wind:o,belt:a}=e,c=e.rr,l=e.clear||.3,h=t/2,u=new bt({color:16777215,name:"Paint"}),f=new Ot,d=e.boxy?.03:.07,p=e.boxy?a-.08:a-.2,x=e.rear==="liftback"?a+.02:a,g=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,p-.06],[h-.1,p],[h-r,a],[-h+(e.rear==="liftback"?.05:.02),x],[-h,x-.12],[-h,l+.14]],m=new Ye(Od(g,n,d),u);f.add(m);let _=n-.16,v=h-r,M=v-o,S,b;e.rear==="hatch"?(S=-h+.32,b=-h+.08):e.rear==="liftback"?(S=-h+1.28,b=-h+.28):e.rear==="estate"?(S=-h+.14,b=-h+.04):(S=-h+.1,b=-h+.05);let E=[[b,a-.02],[v,a-.02],[M,i-.04],[S,i-.04]],C=new Ye(Od(E,_,.04),t1);f.add(C);let y=M-S-.12,T=new Ye(new Xt(_-.06,.07,y),u);T.position.set(0,i-.02,(M+S)/2),f.add(T);let N=new Ye(new Xt(_+.01,i-a-.06,.12),u);N.position.set(0,(i+a)/2-.03,(v+b)/2+(e.rear==="liftback"?.25:.1)),f.add(N);let I=t*.61,k=new fn(c,c,.22,14);k.rotateZ(Math.PI/2);let P=new fn(c*.62,c*.62,.235,10);P.rotateZ(Math.PI/2);let L=I/2+(h-r>.6?.05:0)+.05;for(let X of[L,-I/2+.05])for(let ee of[-1,1]){let ue=new Ye(k,n1);ue.position.set(ee*(n/2-.13),c,X);let pe=new Ye(P,i1);pe.position.copy(ue.position),f.add(ue,pe)}let H=new Ye(new Xt(n+.02,.14,t-.3),Fd);H.position.set(0,l+.07,0),f.add(H);let j=new bt({color:14673646,name:"HeadLights"}),$=new bt({color:9048080,name:"TailLights"}),K=p-.1;for(let X of[-1,1]){let ee=new Ye(new Xt(e.boxy?.32:.38,e.boxy?.16:.11,.08),j);ee.position.set(X*(n/2-.3),K,h-.03);let ue=new Ye(new Xt(.3,.13,.08),$);ue.position.set(X*(n/2-.22),x-.2,-h+0),f.add(ee,ue)}let Z=new Ye(new Xt(n*.42,.14,.06),Fd);Z.position.set(0,K-.02,h+0);let te=new Ye(new Xt(.52,.12,.03),s1);te.position.set(0,l+.22,h+.01);let oe=te.clone();oe.position.z=-h-.01,oe.position.y=l+.3;for(let X of[-1,1]){let ee=new Ye(new Xt(.16,.1,.12),u);ee.position.set(X*(n/2+.06),a+.08,v-.1),f.add(ee)}return f.add(Z,te,oe),f.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:t,vmax:e.vmax,acc:e.acc,nick:e.nick,acc_:e.acc_,g:e.g},w:n,h:i,len:t}}var r1=new Wa,Nh=null,kd=async s=>{let e=s.split("/").pop();Nh||(Nh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let t=await Nh,n=atob(t[e]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>r1.parse(i.buffer,"",r,o))},li={cars:{},people:[]},qa={mat:null},o1=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],Hd={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},Gd=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Vd(s,e){let t=[],n=0,i=Object.keys(Hd).length+Gd.length,r=()=>e&&e(++n/i);for(let[o,a]of Object.entries(Hd))t.push(kd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new $t().setFromObject(l,!0).getSize(new D),f=u.x>u.z,d=new Ot,p=new Ot;p.add(l),f&&(p.rotation.y=Math.PI/2),d.add(p),d.updateMatrixWorld(!0);let x=new $t().setFromObject(d,!0),g=x.max.z-x.min.z,m=a.len/g;p.scale.multiplyScalar(m),d.updateMatrixWorld(!0),x=new $t().setFromObject(d,!0);let _=x.getCenter(new D);p.position.set(-_.x,-x.min.y,-_.z),d.updateMatrixWorld(!0);let v=0,M=0;d.traverse(b=>{if(b.isMesh){b.castShadow=!0;let E=Array.isArray(b.material)?b.material:[b.material];for(let C of E)if(/head/i.test(C.name)){let y=new $t().setFromObject(b,!0);v+=y.getCenter(new D).z,M++}}}),M&&v/M<0&&(p.rotation.y+=Math.PI,p.position.x*=-1,p.position.z*=-1);let S=new $t().setFromObject(d,!0);li.cars[o]={obj:d,def:a,w:S.max.x-S.min.x,h:S.max.y-S.min.y,len:S.max.z-S.min.z},r()}));for(let o of Gd)t.push(kd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new $t().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new Ot;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1)});let d={};for(let p of a.animations)d[p.name.replace(o.pre,"").toLowerCase()]=p;li.people.push({obj:f,clips:d}),r()}));await Promise.all(t);for(let o of Object.keys(Ih))li.cars[o]=Bd(o)}var a1=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],no=class{constructor(e=-1,t=!0){let n=e>=0?li.people[e]:dn(li.people);if(this.obj=Ud(n.obj),t){let i=new Be(dn(a1));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&Nt()<.6){let a=o.clone();return a.color=new Be(dn(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new Pa(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(Na,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(Na,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(e,t=.2,n=1){let i=this.acts[e]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,t,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},An={},Ya=class{constructor(e,t){let n=li.cars[e]||li.cars.sedan;this.kind=e,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=t||dn(o1),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new Be(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new Be(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new Be(0,0,0),this.tail=o,o}return r}).map(r=>qa.mat?qa.mat(r):r),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(e,t,n,i){this.x=e,this.z=t,this.h=n,this.y=i.surfaceY(e,t),this.vx=this.vz=this.w=0,this.sync(i,1)}step(e,t,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=xt(this.st*l-this.steer,-e*3.5,e*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=t.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-t.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*xt(d/4,-.4,.4),o+=h*e;let p=this.len*.62,x=o*Math.tan(this.steer)/p,g=this.hb?1.6:9,m=Math.abs(x*o),_=this.hb?6:13,v=m>_?g*_/m:g;this.w+=(x*(this.hb?1.35:1)-this.w)*xt(v*e,0,1),a*=Math.exp(-(this.hb?1.4:m>_?3.2:10)*e),this.h=Qn(this.h+this.w*e);let M=Math.sin(this.h),S=Math.cos(this.h);this.vx=o*M+a*S,this.vz=o*S-a*M,this.x+=this.vx*e,this.z+=this.vz*e;let b=0;for(let E of[this.off,-this.off,0]){let C=this.x+M*E,y=this.z+S*E;if(t.collide(C,y,this.y+.3,this.r,An)){this.x+=An.x-C,this.z+=An.z-y;let T=this.vx*An.nx+this.vz*An.nz;T<0&&(this.vx-=1.3*T*An.nx,this.vz-=1.3*T*An.nz,this.vx*=.92,this.vz*=.92,b=Math.max(b,-T),this.w+=E*.05*T*(this.vx*An.nz-this.vz*An.nx>0?1:-1))}}this.x=xt(this.x,2,t.W-2),this.z=xt(this.z,2,t.H-2),this.impact=b,b>4&&(this.dmg+=b*1.5)}sync(e,t){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=e.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=e.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=e.surfaceY(this.x-i*.8,this.z+n*.8,r),l=e.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=xt(t*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let p=xt(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+p)}lights(e,t){this.head&&this.head.emissive.setRGB(e*3,e*2.7,e*2.2),this.tail&&this.tail.emissive.setRGB(t?3:e*1.2,0,0)}};function Wd(s,e){let t=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(e.h),r=Math.cos(e.h);if(Math.abs(s.x-e.x)>7||Math.abs(s.z-e.z)>7||Math.abs(s.y-e.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[e.off,-e.off]){let l=s.x+t*a,h=s.z+n*a,u=e.x+i*c,f=e.z+r*c,d=u-l,p=f-h,x=Math.hypot(d,p),g=s.r+e.r;if(x<g&&x>1e-4){d/=x,p/=x;let m=(g-x)/2;s.x-=d*m,s.z-=p*m,e.x+=d*m,e.z+=p*m;let _=(e.vx-s.vx)*d+(e.vz-s.vz)*p;if(_<0){let v=-_*.65;s.vx-=d*v,s.vz-=p*v,e.vx+=d*v,e.vz+=p*v,s.w+=(a>0?1:-1)*v*.05,e.w-=(c>0?1:-1)*v*.05,o=Math.max(o,-_)}}}return o}var Tn={},io=class{constructor(e,t,n,i){this.car=e,this.w=t,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let e=this.e.b.out.filter(t=>t!==this.e.rev&&t.L>.5);this.next=e.length?dn(e):this.e.rev||null}ahead(e,t){let n=this.e,i=this.s+e;i>n.L&&this.next&&(i-=n.L,n=this.next),En.at(n,Math.min(i,n.L),t);let r=n.lane;return t.x+=-t.dz*r,t.z+=t.dx*r,t}project(){let e=this.car,t=this.e,n=1e9,i=this.s;for(let r=0;r<t.p.length-1;r++){let o=t.p[r][0],a=t.p[r][1],c=t.p[r+1][0],l=t.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=xt(((e.x-o)*h+(e.z-a)*u)/f,0,1),p=Math.hypot(o+h*d-e.x,a+u*d-e.z);p<n&&(n=p,i=t.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(e,t,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,Tn);let l=Tn.x,h=Tn.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let M=Math.hypot(r.x-o.x,r.z-o.z);M<30&&(l=r.x,h=r.z,u=xt(M*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let M=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),S=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),b=Math.abs(Qn(S-M));b>.35&&(u=Math.min(u,dt(14,5.5,xt(b/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,M,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),p=Math.cos(o.h),x=99;for(let M of t){if(M===o)continue;let S=M.x-o.x,b=M.z-o.z,E=S*d+b*p;if(E<0||E>22)continue;Math.abs(S*p-b*d)<2.2&&(x=Math.min(x,E-(o.len+M.len)/2))}if(i&&this.mode!=="chase"){let M=i.x-o.x,S=i.z-o.z,b=M*d+S*p;b>0&&b<14&&Math.abs(M*p-S*d)<2&&(x=Math.min(x,b-o.len/2-.5))}x<99&&(u=Math.min(u,Math.max(0,(x-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,x<3?4:u));let g=Math.atan2(l-o.x,h-o.z),m=Qn(g-o.h),_=o.fwd;o.st=xt(m*2.2,-1,1),_<-.5&&(o.st=-o.st);let v=u-_;o.thr=xt(v*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),x<4&&a<.5&&(this.honk+=e)}chooseToward(e){let t=this.e.b.out.filter(r=>r.L>.5);if(!t.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of t){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-e.x,o[1]-e.z)+(r===this.e.rev?30:0)+Nt()*8;a<i&&(i=a,n=r)}this.next=n}},so=class{constructor(e,t,n){this.p=new no,this.w=e,this.e=t,this.s=n,this.dir=Nt()<.5?1:-1,this.off=(Nt()-.5)*(t.sw?.8:1.6),this.speed=1.1+Nt()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),En.at(t,n,Tn),this.p.x=Tn.x,this.p.z=Tn.z,this.p.y=e.hAt(Tn.x,Tn.z)}get x(){return this.p.x}get z(){return this.p.z}flee(e,t){if(this.state==="down")return;this.state="flee",this.t=5+Nt()*3;let n=Math.atan2(this.p.x-e,this.p.z-t)+(Nt()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(e,t,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=e,this.p.vz=t,this.p.play("death",.08,n?1.6:1.1),!0)}update(e,t){let n=this.p;if(this.state==="walk"){this.s+=this.speed*e*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&Nt()<.85){let h=dn(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=xt(this.s,0,i.L)}En.at(this.e,this.s,Tn);let r=Tn.x-Tn.dz*this.off*this.dir,o=Tn.z+Tn.dx*this.off*this.dir,a=Math.atan2(Tn.dx*this.dir,Tn.dz*this.dir);n.h+=Qn(a-n.h)*xt(e*6,0,1),n.x+=(r-n.x)*xt(e*4,0,1),n.z+=(o-n.z)*xt(e*4,0,1)}else if(this.state==="flee"){this.t-=e;let i=4.2;if(n.x+=Math.sin(this.fh)*i*e,n.z+=Math.cos(this.fh)*i*e,n.h+=Qn(this.fh-n.h)*xt(e*8,0,1),t.collide(n.x,n.z,n.y,.35,An)&&(n.x=An.x,n.z=An.z,this.fh+=(Nt()<.5?1:-1)*1.2),this.t<=0){let r=t.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=dn(r),this.s=Nt()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=e,n.x+=n.vx*e,n.z+=n.vz*e,n.vx*=Math.exp(-4*e),n.vz*=Math.exp(-4*e),t.collide(n.x,n.z,n.y,.3,An)&&(n.x=An.x,n.z=An.z,n.vx=n.vz=0));n.y=t.surfaceY(n.x,n.z,n.y+1),n.mixer.update(e),n.sync()}};var Za=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.7,this.master.connect(t.destination);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}start(){if(!this.ctx||this.started)return;this.started=!0;let e=this.ctx,t=this._noiseSrc(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=e.createGain();i.gain.value=.06,t.connect(n).connect(i).connect(this.master),t.start();let r=e.createOscillator();r.type="sawtooth";let o=e.createOscillator();o.type="square";let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=e.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=e.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=e.createOscillator();f.type="triangle";let d=e.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let p=e.createOscillator(),x=e.createOscillator();p.type=x.type="square",p.frequency.value=392,x.frequency.value=494;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=1500;let m=e.createGain();m.gain.value=0,p.connect(g),x.connect(g),g.connect(m).connect(this.master),p.start(),x.start(),this.hornG=m}mute(e){this.master&&this.master.gain.setTargetAtTime(e||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(e,t,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(t){let c=Math.abs(t.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(t.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(t.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(t.thr)*.06,r,.08);let f=Math.sin(t.h),d=Math.cos(t.h),p=Math.abs(t.vx*d-t.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,p-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(e.t%1.2<.6?720:960,r,.03)}_burst(e,t,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+e),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+e+.05)}_tone(e,t,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(t,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(e){let t=Math.min(1,e/15);this._burst(.35+t*.4,900,.25+t*.5),this._tone(90,40,.3,.3*t)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((e,t)=>this._tone(e,e,.25,.14,"square",t*.11))}fail(){[392,330,262,196].forEach((e,t)=>this._tone(e,e*.98,.3,.14,"sawtooth",t*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(e){this.hornG&&this.hornG.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.02)}};var vt=s=>document.querySelector(s),Ka=class{constructor(e,t){this.G=e,this.mobile=t,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=vt("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",t||matchMedia("(pointer: coarse)").matches),vt("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),vt("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),vt("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),vt("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),vt("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,vt("#map").hidden=!0,this.toggleMap(this.G.world,this.G),vt("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),vt("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();vt("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(e,t){vt("#loadbar i").style.width=Math.round(e*100)+"%",t&&(vt("#loadtxt").textContent=t)}ready(){vt("#load").hidden=!0,vt("#title").hidden=!1}play(){vt("#title").hidden=!0,vt("#hud").hidden=!1,document.body.classList.add("playing")}pause(e){vt("#pause").hidden=!e}error(e){vt("#loadtxt").textContent="Chyba: "+e}toast(e){let t=vt("#toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}big(e,t,n,i=2.6){let r=vt("#big");r.querySelector("b").textContent=e,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=t||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(e,t){let n=vt("#flash");n.style.background=e,n.style.transition="none",n.style.opacity=t,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(e){if(this._hint===e)return;this._hint=e;let t=vt("#hint");t.textContent=e,t.hidden=!e||this.mobile}flashHint(){}bindTouch(e,t){this.snd=t;let n=vt("#stick"),i=vt("#stick i"),r=null,o=0,a=0,c=null,l=0,h=52,u=vt("#touch");u.addEventListener("touchstart",p=>{t.unlock();for(let x of p.changedTouches)x.clientX<innerWidth*.5&&r===null?(r=x.identifier,o=x.clientX,a=x.clientY,n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0):c===null&&(c=x.identifier,l=x.clientX);p.preventDefault()},{passive:!1}),u.addEventListener("touchmove",p=>{for(let x of p.changedTouches)if(x.identifier===r){let g=x.clientX-o,m=x.clientY-a,_=Math.hypot(g,m);_>h&&(g*=h/_,m*=h/_),i.style.transform=`translate(${g}px,${m}px)`,this.stick.x=g/h,this.stick.y=-m/h}else x.identifier===c&&(this.look.dx+=(x.clientX-l)*.009,l=x.clientX);p.preventDefault()},{passive:!1});let f=p=>{for(let x of p.changedTouches)x.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),x.identifier===c&&(c=null)};u.addEventListener("touchend",f),u.addEventListener("touchcancel",f);let d=(p,x)=>{let g=vt(p);g.addEventListener("touchstart",_=>{t.unlock(),this.btn[x]=1,g.classList.add("dn"),_.preventDefault(),_.stopPropagation()},{passive:!1});let m=_=>{this.btn[x]=0,g.classList.remove("dn"),_.preventDefault()};g.addEventListener("touchend",m),g.addEventListener("touchcancel",m)};d("#bGas","gas"),d("#bBrake","brake"),d("#bHb","hb"),d("#bAtk","atk"),vt("#bAct").addEventListener("touchstart",p=>{t.unlock(),e.act=1,p.preventDefault(),p.stopPropagation()},{passive:!1}),vt("#bAct").addEventListener("click",()=>e.act=1)}update(e,t,n){vt("#money").textContent="\u20AC "+Math.floor(e.money).toLocaleString("sk-SK");let i="\u2605".repeat(e.wanted)+"\u2606".repeat(5-e.wanted);this._st!==i&&(this._st=i,vt("#stars").textContent=i,vt("#stars").classList.toggle("hot",e.wanted>0));let r=Math.floor(e.tod),o=Math.floor(e.tod%1*60);vt("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=e.street?e.district?e.street+" \xB7 "+e.district:e.street:e.district||"";if(this._street!==a){this._street=a;let l=vt("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=t.goalText;if(t.goal){let l=Math.hypot(t.goal.x-t.px,t.goal.z-t.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,vt("#goal").textContent=c),vt("#speed").textContent=t.speed!==null?Math.round(t.speed)+" km/h":"",vt("#hp").style.width=Math.max(0,e.hp)+"%",document.body.classList.toggle("incar",t.inCar),document.body.classList.toggle("nearcar",t.nearCar||t.inCar),vt("#bAct").textContent=t.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(t,n))}drawMini(e,t){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=e.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-e.px,-e.pz),i.imageSmoothingEnabled=!0,t.drawGround(i,e.px,e.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let p=(f-e.px)*a,x=(d-e.pz)*a,g=Math.cos(l),m=Math.sin(l);return[r/2+p*g-x*m,r/2+p*m+x*g]},u=(f,d,p,x,g)=>{let[m,_]=h(f,d),v=m-r/2,M=_-r/2,S=Math.hypot(v,M),b=r/2-8;if(S>b){if(!g)return;m=r/2+v/S*b,_=r/2+M/S*b}i.fillStyle=p,i.beginPath(),i.arc(m,_,x,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of e.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of e.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);e.goal&&u(e.goal.x,e.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-e.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(e,t){let n=vt("#map");if(!n.hidden||!e){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(vt("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=vt("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?e.H/2:900,l=Math.min(e.W-c,Math.max(c,a?a.x:e.W/2)),h=Math.min(e.H-c,Math.max(c,a?a.z:e.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),e.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(g,m,_,v)=>{o.fillStyle=_,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(g*u,m*u,v,0,7),o.fill(),o.stroke()},p=t&&t.world?window.__gtbLOC:null;if(window.__gtbLM&&window.__gtbLM(d,r),p){for(let g of p.contacts)d(g[0],g[1],"#ffcc33",r/70);for(let g of p.races)d(g[0],g[1],"#33e0ff",r/70)}let x=window.__gtbPos&&window.__gtbPos();if(x){x.goal&&d(x.goal.x,x.goal.z,"#ff4fd8",r/60),o.save(),o.translate(x.x*u,x.z*u),o.rotate(Math.PI-x.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let g=r/50;o.beginPath(),o.moveTo(0,-g),o.lineTo(g*.7,g*.8),o.lineTo(0,g*.35),o.lineTo(-g*.7,g*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var c1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Fn=c1&&Math.min(screen.width,screen.height)<900,Dh=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",re=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},Qa=document.getElementById("c"),ur=new Ir({canvas:Qa,antialias:!1,powerPreference:"high-performance"});ur.setPixelRatio(1);ur.shadowMap.enabled=!0;ur.shadowMap.type=La;var gs,ao=null,Ln={zoneNow:!1,obst:()=>Zt,update(){},flash(){},maybeTaxi(){},livery(){},goalText:()=>""},nn=new Fi,pn=new rn(60,1,.3,2700),at=new Ka(re,Fn),Gt=new Za,Je,ja=new Aa(12571903,5918784,1.2),Rn=new or(16777215,3);Rn.castShadow=!0;Rn.shadow.mapSize.set(Fn?1024:2048,Fn?1024:2048);var oo=75;Object.assign(Rn.shadow.camera,{left:-oo,right:oo,top:oo,bottom:-oo,near:1,far:600});Rn.shadow.bias=-.0015;Rn.shadow.normalBias=.6;nn.add(ja,Rn,Rn.target);var ps=new rr(16769712,0,55,.55,.6,1.2);nn.add(ps,ps.target);var $d={uSun:Bt.uSun,uNight:Bt.uNight,uTime:Bt.uTime},tc=new Ye(new ri(1800,32,16),new bn({uniforms:$d,side:un,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:xd}));tc.frustumCulled=!1;nn.add(tc);nn.fog=new la(9085112,.0026);var Qd=new fn(1.6,1.6,26,16,1,!0);Qd.translate(0,13,0);function l1(s){let e=new Ye(Qd,new bn({uniforms:{uC:{value:new Be(s)},uTime:Bt.uTime},transparent:!0,depthWrite:!1,side:Wt,blending:yi,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return e.frustumCulled=!1,e}var Pn={},Mt={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(Pn[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(Mt.act=1),s.code==="KeyM"&&at.toggleMap(Je,re),s.code==="KeyH"&&Gt.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&op(),re.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&rp(),Gt.unlock())});addEventListener("keyup",s=>{Pn[s.code]=0,s.code==="KeyH"&&Gt.horn(!1)});var Gh=!1,kh=0;Qa.addEventListener("mousedown",s=>{Gh=!0,kh=s.clientX,Gt.unlock()});addEventListener("mouseup",()=>Gh=!1);addEventListener("mousemove",s=>{Gh&&(Mt.camDX+=(s.clientX-kh)*.006,kh=s.clientX,Mt.camDrag=1.5)});at.bindTouch(Mt,Gt);at.onStart=()=>rp();at.onPause=()=>op();at.onDetail=s=>{re.detail=s,Vh()};function h1(){let s=0,e=0;(Pn.KeyA||Pn.ArrowLeft)&&(s-=1),(Pn.KeyD||Pn.ArrowRight)&&(s+=1),(Pn.KeyW||Pn.ArrowUp)&&(e+=1),(Pn.KeyS||Pn.ArrowDown)&&(e-=1),at.stick.active&&(s=at.stick.x,e=at.stick.y),Mt.mx=s,Mt.my=e,Mt.run=Pn.ShiftLeft||Pn.ShiftRight||at.stick.active&&Math.hypot(at.stick.x,at.stick.y)>.92?1:0,Mt.hb=Pn.Space||at.btn.hb?1:0,Mt.atk=Pn.Space||at.btn.atk?1:0,Mt.gas=at.btn.gas,Mt.brake=at.btn.brake}var He,Zt=[],zn=[],On=[],Ie=null,ep=[],Uh=new D;function xs(s,e,t,n,i){let r=new Ya(s,i);return r.place(e,t,n,Je),nn.add(r.obj),Zt.push(r),r}function co(s){let e=Zt.indexOf(s);e>=0&&Zt.splice(e,1),nn.remove(s.obj),s.siren&&(s.siren=null);let t=On.indexOf(s);t>=0&&On.splice(t,1)}var tp=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function u1(s,e){for(let t=0;t<12;t++){let n=Nt()*Math.PI*2,i=70+Nt()*110,r=s+Math.sin(n)*i,o=e+Math.cos(n)*i,a=Je.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=xt(a.s,3,a.e.L-3);En.at(a.e,c,ot);let l=ot.x-ot.dz*a.e.lane,h=ot.z+ot.dx*a.e.lane;if(Zt.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-e)<55)continue;let u=xs(dn(tp),l,h,Math.atan2(ot.dx,ot.dz));Ln.maybeTaxi(u),u.driver="ai",u.ai=new io(u,Je,a.e,c);let f=Math.min(a.e.v,9);return u.vx=ot.dx*f,u.vz=ot.dz*f,u}}var ot={};function f1(s,e){for(let t=0;t<10;t++){let n=Nt()*Math.PI*2,i=50+Nt()*90,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=xt(r.s,4,r.e.L-4);En.at(r.e,o,ot);let a=r.e.r.w/2-1.05,c=ot.x-ot.dz*a,l=ot.z+ot.dx*a;if(Zt.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-e)<40)continue;let h=xs(dn(tp),c,l,Math.atan2(ot.dx,ot.dz));return h.parked=!0,h}}function np(s,e,t){let n=Je.pedGrid.query(s,e,70,[]);for(let i=0;i<8&&n.length;i++){let r=dn(n),o=Nt()*r.L;En.at(r,o,ot);let a=Math.hypot(ot.x-s,ot.z-e);if(a<(t?10:26)||a>72||Je.onDeck(ot.x,ot.z,999)&&!r.sw)continue;let c=new so(Je,r,o);return nn.add(c.p.obj),zn.push(c),c}}function d1(s){let e=zn.indexOf(s);e>=0&&zn.splice(e,1),nn.remove(s.p.obj)}function p1(s,e){for(let t=0;t<10;t++){let n=Nt()*Math.PI*2,i=90+Nt()*60,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,50);if(!r||(En.at(r.e,r.s,ot),Math.hypot(ot.x-s,ot.z-e)<70))continue;let o=dn(["kombi","kombi","esuv","golfik"]),a=xs(o,ot.x,ot.z,Math.atan2(ot.dx,ot.dz),"#eef0f2");return a.driver="police",a.ai=new io(a,Je,r.e,r.s),a.ai.mode="chase",Ln.livery(a,o==="esuv"?"pz25":"pz"),On.push(a),a}}var ei={vy:0,punchT:0,hurtT:0};function uo(s,e){He.x=s,He.z=e,He.y=Je.surfaceY(s,e),He.sync()}function m1(s){if(s.driver==="ai"||s.driver==="police"){let t=new so(Je,Je.pedEdges[0],0);t.p.x=s.x-Math.cos(s.h)*1.6,t.p.z=s.z+Math.sin(s.h)*1.6,nn.add(t.p.obj),zn.push(t),t.flee(He.x,He.z),vs(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),Gt.shout()}else s.parked&&!s.safe&&Nt()<.35&&(s.alarm=6,vs(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,Ie=s,re.inCar=s,He.obj.visible=!1;let e=On.indexOf(s);e>=0&&On.splice(e,1),Gt.door(),at.flashHint(""),re.mission&&re.mission.onEnter&&re.mission.onEnter(s)}function fr(){let s=Ie;if(!s)return;let e=-Math.cos(s.h),t=Math.sin(s.h),n=s.x+e*1.7,i=s.z+t*1.7;Je.collide(n,i,s.y,.4,Ja)&&(n=s.x-e*1.7,i=s.z-t*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,Ie=null,re.inCar=null,He.obj.visible=!0,He.h=s.h,uo(n,i),Gt.door()}var Ja={};function vs(s,e){if(s<=0||re.mode!=="play")return;re.heat+=s;let t=xt(Math.floor(re.heat),0,5);t>re.wanted&&(re.wanted=t,at.toast("H\u013DADAN\xDD "+"\u2605".repeat(t)+(e?" \xB7 "+e:""))),re.coolT=0}var Dt={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},g1={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},x1=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],nc=(s,e)=>{let t=Je.d.meta;return[(s-t.lon0)*t.mx,(t.lat1-e)*t.my]};function v1(s,e){let t="",n=1e9;for(let i of x1){i.p||(i.p=nc(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-e);r<n&&(n=r,t=i[2])}return t}function _1(){Dt.contacts.push([Dt.contact[0],Dt.contact[1],"Star\xE9 Mesto"]),Dt.races.push([Dt.race[0],Dt.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[e,t,n]of g1[s]){let[i,r]=nc(e,t),o=null,a=1e9;for(let c of Je.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;En.at(l,l.L/2,ot);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=ot.x-ot.dz*h,f=ot.z+ot.dx*h;if(Je.hAt(u,f)<Je.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&Dt[s].push(o)}}var y1=[["Most Apollo",17.1281,48.1372,60],["Eurovea a nov\xE9 SND",17.1215,48.1405,60],["Star\xFD most",17.1167,48.1385,45],["Sad Janka Kr\xE1\u013Ea",17.109,48.1345,70],["Pr\xEDstavn\xFD most",17.139,48.134,70],["Ve\u013Ek\xFD Dra\u017Ediak",17.1195,48.1095,90],["\u0160trkoveck\xE9 jazero",17.151,48.1545,80],["Zimn\xFD pr\xEDstav",17.142,48.14,90],["Mal\xFD Dunaj vo Vrakuni",17.199,48.1425,80],["Slovnaft",17.179,48.127,160]],M1=[["Kamenn\xE9 n\xE1mestie: Prior a Hotel Kyjev",2562,1150,40],["K\xE1ce\u010Dko \u2013 terasa s v\xFDh\u013Eadom na Kyjev",2563,1116,9]],lo=(s,e,t)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-e,r[1]-t);o<i&&(i=o,n=r)}return n},ec={};window.__gtbLOC=Dt;window.__gtbPos=()=>({x:Ie?Ie.x:He.x,z:Ie?Ie.z:He.z,h:Ie?Ie.h:He.h,goal:re.mission?re.mission.goal():null});function ho(s,e,t,n){let i=ec[s];return i||(i=ec[s]=l1(n),nn.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(e,Je.surfaceY(e,t),t),i.visible=!0,i}function vn(s){ec[s]&&(ec[s].visible=!1)}function ic(){Dt.contacts.forEach((s,e)=>ho("contact"+e,s[0],s[1],"#ffcc33")),Dt.races.forEach((s,e)=>ho("race"+e,s[0],s[1],"#33e0ff")),vn("target"),vn("cp")}function b1(){let s=null,e=Je.edgeGrid.query(He.x,He.z,650,[]);for(let u=0;u<80&&!s&&e.length;u++){let f=dn(e).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],p=f.p[0][1],x=Math.hypot(d-He.x,p-He.z);if(x<220||x>650)continue;En.at(f,f.L/2,ot);let g=f.r.w/2-1.05;s=[ot.x-ot.dz*g,ot.z+ot.dx*g,Math.atan2(ot.dx,ot.dz),f.r.n]}if(!s)return;let t=dn(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=dn(n),o=li.cars[t].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[t]:o.acc_},l=xs(t,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[t]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>Ie===l?{x:Dt.garage[0],z:Dt.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",at.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),vs(1,"majite\u013E vol\xE1 pol\xEDciu"),vn("target"),ho("garage",...Dt.garage,"#7dff6a"))},update(){if(!Zt.includes(l))return Xd("Auto je pre\u010D.");if(l.dmg>260)return Xd("Auto je na \u0161rot.");if(Ie!==l&&ho("target",l.x,l.z,"#ff4fd8"),Ie===l&&Math.hypot(l.x-Dt.garage[0],l.z-Dt.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(re.wanted?0:200);ip(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),fr(),co(l)}}};vn("contact"),vn("race"),re.mission=h,at.toast("K\u0160EFT: "+h.text),Gt.blip()}function S1(){let s=Je.nearestEdge(He.x,He.z,80);if(!s)return;let e=s.e,t=[],n={x:He.x,z:He.z},i=0;for(;t.length<8&&i++<400;){let o=e.b.out.filter(c=>c!==e.rev&&c.r.c>=1);if(!o.length)break;e=dn(o);let a=e.p[e.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<Je.W-30&&a[1]<Je.H-30&&(t.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(t.length<4)return at.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:t,par:t.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];ho("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=Ie?Ie.x:He.x,l=Ie?Ie.z:He.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,Gt.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);ip(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};vn("contact"),vn("race"),re.mission=r,at.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),Gt.blip()}function ip(s,e){re.money+=e,at.big("MISIA SPLNEN\xC1",s,"#7dff6a"),Gt.win(),re.mission=null,vn("garage"),vn("target"),vn("cp"),setTimeout(ic,2500)}function Xd(s){at.big("MISIA ZLYHALA",s,"#ff5a4a"),re.mission=null,vn("garage"),vn("target"),vn("cp"),setTimeout(ic,2500)}function sp(s,e,t,n){re.mode="dead",at.big(s,e,t,3.2),Gt.fail(),setTimeout(()=>{Ie&&fr(),re.money=Math.max(0,Math.round(re.money*(1-n))),re.wanted=0,re.heat=0,re.hp=100;for(let i of On.slice())co(i);re.mission&&(re.mission=null,vn("garage"),vn("target"),vn("cp")),ic();{let i=Ie?Ie.x:He.x,r=Ie?Ie.z:He.z,a=Math.hypot(i-Dt.hospital[0],r-Dt.hospital[1])>1400?lo(Dt.contacts,i,r):null,c=a?a[0]+3:Dt.hospital[0],l=a?a[1]+3:Dt.hospital[1];Ie&&fr(),uo(c,l),Je.prime(c,l)}He.play("idle"),re.mode="play"},3200)}async function w1(){at.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}gs=new Ad(ur);let e=await(await fetch(Dh+"world.json")).json();at.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),Je=new En(e,Dh,{mobile:Fn}),await Je.init(n=>at.loading(.25+n*.15,"Staviam mesto\u2026")),nn.add(Je.group),re.world=Je,_1(),at.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await Je.prime(...Dt.start),at.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await Vd(Dh+"models/",n=>at.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),He=new no(0,!1),nn.add(He.obj),uo(...Dt.start);try{let n=Je.d.meta;Ln=Rd({Fe:Je,Wt:nn,Tt:Zt,Pn:zn,Ln:On,we:He,pc:()=>Ie,q:re,Ve:at,vt:Gt,Kn:Fn,an:Bt,Xs:ai,Ye:xt,Ge:dt,Xn:Qn,ct:Nt,en:dn,fn:wn,Zs:vs,mh:$a,Zn:ei,Yn:li,Ks:xs,SGrid:ci,OX:n.ox,OZ:n.oz,moreLandmarks:y1.map(([i,r,o,a])=>[i,...nc(r,o),a]).concat(M1)}),qa.mat=i=>i.name==="Plate"?Ln.plateMat():Ln.gloss(i),Ln.init(),re.x3=()=>Ln}catch(n){console.error("X3",n)}try{ao=Cd(Je,nn),re.ven=ao}catch(n){console.error("venues",n)}He.h=Math.PI,ic();let t=Je.nearestEdge(Dt.start[0],Dt.start[1]+30,60);if(t){En.at(t.e,xt(t.s,5,t.e.L-5),ot);let n=t.e.r.w/2-1.05,i=xs("golfik",ot.x-ot.dz*n,ot.z+ot.dx*n,Math.atan2(ot.dx,ot.dz),"#b8352b");i.parked=!0,i.safe=!0,i.keep=!0}for(let n=0;n<10;n++)np(He.x,He.z,!0);Vh(),at.loading(1,""),at.ready(),re.mode="title",re.titleCam=0,requestAnimationFrame(ap)}function rp(){re.mode==="title"&&(Gt.unlock(),Gt.start(),re.mode="play",at.play(),re.camYaw=He.h+Math.PI)}function op(){re.mode!=="title"&&(re.paused=!re.paused,at.pause(re.paused),Gt.mute(re.paused))}function Vh(){if(!gs)return;let s=re.detail??1,e=Fn?[2,1.5,1.1][s]:[2,1.5,1][s],t=Math.min(window.devicePixelRatio||1,e),n=Math.floor(innerWidth*t),i=Math.floor(innerHeight*t);Qa.width=n,Qa.height=i,ur.setSize(n,i,!1),ur.setViewport(0,0,n,i);let r=gs.setSize(n,i,1,Fn?[4,0,0][s]:[4,4,0][s]);pn.aspect=r.aspect;let o=r.aspect<1;pn.fov=o?74:58,pn.updateProjectionMatrix(),re.portrait=o}addEventListener("resize",Vh);var qd=performance.now(),zh=0,Fh=new D,Yd=new D,Zd=!1;re.camYaw=0;function ap(s){requestAnimationFrame(ap);let e=Math.min(.05,(s-qd)/1e3);if(qd=s,re.fixedDt&&(e=re.fixedDt),!re.noLoop){if(re.paused){gs.render(nn,pn);return}cp(e),gs.render(nn,pn)}}re.step=cp;re.cars=Zt;re.peds=zn;re.police=On;re.pl=()=>He;re.pc=()=>Ie;re.key=(s,e)=>dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s}));re.spawn=(s,e,t,n,i)=>{let r=xs(s,e,t,n,i);return r.parked=!0,r.keep=!0,r};re.tp=async(s,e)=>{Ie&&fr(),await Je.prime(s,e),uo(s,e)};re.ll=(s,e)=>nc(s,e);re.LOC=Dt;re.hY=(s,e)=>Je.hAt(s,e);re.render=()=>gs.render(nn,pn);function cp(s){if(re.t+=s,Bt.uTime.value=re.t,h1(),(re.mode==="play"||re.mode==="dead")&&(re.tod=(re.tod+s/40)%24),E1(),re.mode==="title"){Je.update(lp,hp,6),T1(s),Kd(s,!1),Ln.update(s,!0);return}{let e=Ie||He,t=Ie?Math.min(60,Math.abs(Ie.speed)*4):0;Je.update(e.x+Math.sin(e.h)*t,e.z+Math.cos(e.h)*t,Fn?4:6)}if(re.mode==="play"?A1(s):He.mixer.update(s),Kd(s,!0),Ln.update(s,!1),ao&&(ao.update(s,Bt.uNight.value),re.mode==="play"&&!Ie)){let e=ao.tryDoor(He.x,He.z,He.y);e&&(uo(e[0],e[1]),at.toast(e[3]))}if(z1(s),re.mission&&re.mode==="play"&&re.mission.update(s),!re.mission&&re.mode==="play"){let e=Ie?Ie.x:He.x,t=Ie?Ie.z:He.z,n=lo(Dt.contacts,e,t),i=lo(Dt.races,e,t);n&&Math.hypot(e-n[0],t-n[1])<4?b1():i&&Math.hypot(e-i[0],t-i[1])<6&&S1()}if(F1(s),re.dbgCam){let e=re.dbgCam;pn.position.set(e[0],e[1],e[2]),pn.lookAt(e[3],e[4],e[5]),tc.position.copy(pn.position),Wh(e[3],e[5])}O1(s),Gt.update(re,Ie,On,pn)}function E1(){let s=re.tod,e=Math.sin((s-6.2)/12*Math.PI)*.95,t=(s-6.2)/12*Math.PI+Math.PI/2,n=new D(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)).normalize();$d.uSun.value.copy(n);let i=hd(xt((.04-n.y)/.16,0,1));Bt.uNight.value=i;let r=xt(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;Rn.color.setRGB(1,dt(.95,.62,r),dt(.88,.38,r)),Rn.intensity=o*dt(3.2,2.2,r)*xt(n.y*6,0,1),ja.color.setRGB(dt(.12,dt(.75,.9,r),o),dt(.16,dt(.85,.65,r),o),dt(.32,dt(1,.6,r),o)),ja.groundColor.setRGB(dt(.05,.42,o),dt(.05,.36,o),dt(.07,.3,o)),ja.intensity=dt(.7,1.15,o),i>.5&&(Rn.intensity=.35*i,Rn.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),re.sunDir=n;let a=new Be().setRGB(dt(.03,dt(.62,.85,r),o),dt(.04,dt(.72,.5,r),o),dt(.08,dt(.85,.36,r),o));nn.fog.color.copy(a),nn.fog.density=dt(.002,Fn?.0014:9e-4,o),Je.lampHeadMat.color.setRGB(dt(.5,3,i),dt(.45,2.4,i),dt(.35,1.5,i)),Je.ufoRing&&Je.ufoRing.material.color.setRGB(dt(.6,3,i),dt(.5,2.2,i),dt(.3,1.2,i)),gs.exposure.value=dt(1,1.55,i)}var lp=1804,hp=1476;function T1(s){re.titleCam+=s*.035;let e=lp,t=hp,n=re.titleCam+2.2;pn.position.set(e+Math.sin(n)*330,Je.hAt(e,t)+95,t+Math.cos(n)*330),pn.lookAt(e,Je.hAt(e,t)+20,t),Wh(e,t)}function Wh(s,e){let t=re.sunDir||new D(0,1,0),n=oo*2/Rn.shadow.mapSize.x;s=Math.round(s/n)*n,e=Math.round(e/n)*n;let i=Je.hAt(s,e);Rn.target.position.set(s,i,e),Rn.position.set(s+t.x*250,i+t.y*250,e+t.z*250),Rn.target.updateMatrixWorld()}function A1(s){if(Mt.act)if(Mt.act=0,Ie)Ie.speed<6&&fr();else{let r=Hh(3.6);r&&m1(r)}if(Ie){let r=Ie,o=Mt.my;Mt.gas&&(o=1),Mt.brake&&(o=-1),r.thr=o,r.st=-Mt.mx,r.hb=Mt.hb,He.x=r.x,He.z=r.z,He.y=r.y,r.alarm>0&&(r.alarm-=s),at.hint("");return}let e=He,t=Math.min(1,Math.hypot(Mt.mx,Mt.my));if(ei.punchT>0&&(ei.punchT-=s),Mt.atk&&ei.punchT<=0&&(ei.punchT=.7,e.play("punch",.08,1.4),setTimeout(()=>R1(),220)),t>.08&&ei.punchT<=.25){let r=Math.atan2(Mt.mx,Mt.my),o=re.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=Mt.run?5.2:.9+.75*t;e.h+=Qn(o-e.h)*xt(s*10,0,1),e.x+=a*l*s,e.z+=c*l*s,e.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else ei.punchT<=.25&&e.play("idle",.25);Je.collide(e.x,e.z,e.y,.35,Ja)&&(e.x=Ja.x,e.z=Ja.z);for(let r of Zt){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=e.x-(r.x+o*c),h=e.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){e.x+=l/u*(f-u),e.z+=h/u*(f-u);let d=r.speed;d>6&&ei.hurtT<=0&&(re.hp-=d*2.2,ei.hurtT=1,Gt.crash(d*.5),at.flash("#ff2a2a",.35))}}}ei.hurtT>0&&(ei.hurtT-=s),e.x=xt(e.x,2,Je.W-2),e.z=xt(e.z,2,Je.H-2);let n=Je.surfaceY(e.x,e.z,e.y+.8);e.y+=(n-e.y)*xt(s*14,0,1),e.y<Je.water-1.2&&(re.hp=0),e.mixer.update(s),e.sync(),re.hp<=0&&sp("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=Hh(3.6);at.hint(i?Fn?"NAST\xDAP":"[E] nast\xFAp":"")}function Hh(s){let e=null,t=s;for(let n of Zt){let i=Math.hypot(n.x-He.x,n.z-He.z);i<t&&n.speed<7&&n.burn===void 0&&(t=i,e=n)}return e}function R1(){let s=Math.sin(He.h),e=Math.cos(He.h);for(let t of zn){let n=t.x-He.x,i=t.z-He.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*e)/(r||1)>.3){Gt.punch(),t.hp--,t.hp<=0?(t.knock(s*2,e*2,!1),re.money+=Math.floor(Nt()*30)+5):t.flee(He.x,He.z);for(let o of zn)o!==t&&Math.hypot(o.x-t.x,o.z-t.z)<18&&o.flee(He.x,He.z);vs(.34,"bitka");return}}Gt.whoosh()}function Kd(s,e){let t=Ie?Ie.x:He.x,n=Ie?Ie.z:He.z;if(zh-=s,zh<=0){zh=.35;let a=Fn?14:22,c=Fn?10:16,l=Math.round((Fn?16:26)*(Ln.zoneNow?1.6:1)),h=0,u=0;for(let f of Zt)f.driver==="ai"?h++:f.parked&&u++;h<a&&u1(t,n),u<c&&f1(t,n),zn.length<l&&np(t,n,!1);for(let f of Zt.slice())f===Ie||f.keep||f.driver==="police"||Math.hypot(f.x-t,f.z-n)>230&&co(f);for(let f of zn.slice())(Math.hypot(f.x-t,f.z-n)>105||f.state==="down"&&f.t<0)&&d1(f)}let i=re.t;for(let a of Zt)a.ai&&a.driver!=="police"&&a.ai.update(s,Ln.obst(),i,Ie?null:He,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of Zt){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,Je,Zt),c.impact>5&&c===Ie&&(Gt.crash(c.impact),$a(c.impact*.02))}for(let c=0;c<Zt.length;c++)for(let l=c+1;l<Zt.length;l++){let h=Zt[c],u=Zt[l],f=Wd(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,h===Ie||u===Ie))){Gt.crash(f),$a(f*.025);let d=h===Ie?u:h;d.driver==="police"&&vs(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of Zt){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(Je,s),a.lights(Bt.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar&&Ln.flash(a),a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),L1(a),Gt.boom(),a===Ie&&(fr(),re.hp-=60,at.flash("#ff8a2a",.6));for(let c of zn)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==Ie&&!a.keep)){co(a);break}}for(let a of zn)if(a.update(s,Je),a.state!=="down")for(let c of Zt){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,p=f*h+d*u,x=f*u-d*h;if(Math.abs(p)<c.len/2+.3&&Math.abs(x)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),Gt.thud(),c===Ie&&(vs(1,"zrazen\xFD chodec"),$a(.15));for(let g of zn)g!==a&&Math.hypot(g.x-a.x,g.z-a.z)<25&&g.flee(a.x,a.z)}else c===Ie&&p>0&&p<9+l*.4&&Math.abs(x)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}U1(s)}var C1=new Xt(.6,.6,.6),P1=new tn({color:16777215,transparent:!0,blending:yi,depthWrite:!1}),up=220,Ai=new Sn(C1,P1,up);Ai.frustumCulled=!1;Ai.count=0;nn.add(Ai);var ro=[];function L1(s){ep.push({car:s,t:0})}var jd=new rt,I1=new en,N1=new D,D1=new D,Jd=new Be;function U1(s){for(let t of ep)if(!(!Zt.includes(t.car)||t.car.burn<-18))for(let n=0;n<3;n++)ro.length<up&&ro.push({x:t.car.x+(Nt()-.5)*2,y:t.car.y+1.2,z:t.car.z+(Nt()-.5)*3,vy:2+Nt()*3,t:0,life:.6+Nt()*.9});let e=0;for(let t=ro.length-1;t>=0;t--){let n=ro[t];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){ro.splice(t,1);continue}let i=n.t/n.life;jd.compose(D1.set(n.x,n.y,n.z),I1,N1.setScalar(1+i*1.5)),Ai.setMatrixAt(e,jd),Jd.setRGB(dt(4,.3,i),dt(1.8,.25,i),dt(.3,.22,i)),Ai.setColorAt(e,Jd),e++}Ai.count=e,Ai.instanceMatrix.needsUpdate=!0,Ai.instanceColor&&(Ai.instanceColor.needsUpdate=!0)}var Oh=0;function z1(s){let e=Ie?Ie.x:He.x,t=Ie?Ie.z:He.z,n=[0,1,2,3,4,6][re.wanted];Oh-=s,On.length<n&&Oh<=0&&(p1(e,t),Oh=3);let i=!1;for(let r of On.slice()){if(!r.ai)continue;r.ai.update(s,Ln.obst(),re.t,null,{x:e,z:t});let o=Math.hypot(r.x-e,r.z-t);o<80&&(i=!0),(o>320||re.wanted===0&&o>90)&&co(r)}if(re.wanted>0?(re.coolT=(re.coolT||0)+s*(i?.25:1),re.coolT>22&&(re.wanted--,re.heat=re.wanted,re.coolT=0,at.toast(re.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(re.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):re.heat=Math.max(0,re.heat-s*.02),re.wanted>0&&re.mode==="play"){let r=!1;for(let a of On)Math.hypot(a.x-e,a.z-t)<(Ie?7.5:6)&&a.speed<6&&(r=!0);let o=Ie?Ie.speed<1.5:!0;re.bustT=r&&o?(re.bustT||0)+s:0,re.bustT>(Ie?2.5:1.2)&&(re.bustT=0,sp("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var ms=0;function $a(s){ms=Math.min(.6,ms+s)}function F1(s){let e=re.portrait;Mt.camDrag>0&&(Mt.camDrag-=s),at.look.dx&&(Mt.camDX+=at.look.dx,at.look.dx=0,Mt.camDrag=1.5);let t,n,i,r,o,a;if(Ie){let d=Ie,x=d.fwd<-2?d.h:d.h+Math.PI;Mt.camDrag>0?re.camYaw+=Mt.camDX:re.camYaw+=Qn(x-re.camYaw)*xt(s*3.2,0,1),Mt.camDX=0,r=(e?11.5:8.6)+xt(d.speed*.09,0,4),o=e?4.6:3.3,t=d.x,i=d.z,n=d.y+1.3,a=2.2}else Mt.camDrag>0?re.camYaw+=Mt.camDX:Math.hypot(Mt.mx,Mt.my)>.2&&Mt.my>-.3&&(re.camYaw+=Qn(He.h+Math.PI-re.camYaw)*xt(s*1.4,0,1)),Mt.camDX=0,r=e?6.8:5,o=e?2.9:2.1,t=He.x,i=He.z,n=He.y+1.45,a=1;let c=t+Math.sin(re.camYaw)*r,l=i+Math.cos(re.camYaw)*r,h=Je.rayHit(t,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=t+(c-t)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),Je.surfaceY(c,l,n+5)+1.2);Uh.set(c,u,l),Zd||(Fh.copy(Uh),Zd=!0),Fh.lerp(Uh,xt(s*(Ie?6:8),0,1));let f=Ie?e?9:4:e?4.5:1.5;if(Yd.set(t-Math.sin(re.camYaw)*f,n+a*.4+(e?.6:0),i-Math.cos(re.camYaw)*f),pn.position.copy(Fh),ms>0&&(pn.position.x+=(Nt()-.5)*ms,pn.position.y+=(Nt()-.5)*ms,ms=Math.max(0,ms-s*1.5)),pn.lookAt(Yd),tc.position.copy(pn.position),Wh(t,i),Ie&&Bt.uNight.value>.2){let d=Ie;ps.intensity=60*Bt.uNight.value,ps.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),ps.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),ps.target.updateMatrixWorld()}else ps.intensity=0}var Bh=0;function O1(s){Bh-=s;let e=Ie?Ie.x:He.x,t=Ie?Ie.z:He.z;Bh<=0&&(Bh=.25,re.street=Je.streetAt(e,t)||(Je.onDeck(e,t,(Ie||He).y+1)?"Most":""),re.district=v1(e,t));let n=null;re.mission&&(n=re.mission.goal()),at.update(re,{px:e,pz:t,h:Ie?Ie.h:He.h,yaw:re.camYaw,speed:Ie?Ie.speed*3.6:null,goal:n,goalText:re.mission?re.mission.text:"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body"+Ln.goalText(),markers:[...[lo(Dt.contacts,e,t)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!re.mission})),...[lo(Dt.races,e,t)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!re.mission}))],police:On.map(i=>({x:i.x,z:i.z})),inCar:!!Ie,nearCar:!Ie&&!!Hh(3.6)},Je)}w1().catch(s=>{console.error(s),at.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
