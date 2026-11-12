(()=>{var ap=Object.create;var Gh=Object.defineProperty;var cp=Object.getOwnPropertyDescriptor;var lp=Object.getOwnPropertyNames;var hp=Object.getPrototypeOf,up=Object.prototype.hasOwnProperty;var fp=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var dp=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of lp(e))!up.call(s,i)&&i!==t&&Gh(s,i,{get:()=>e[i],enumerable:!(n=cp(e,i))||n.enumerable});return s};var pp=(s,e,t)=>(t=s!=null?ap(hp(s)):{},dp(e||!s||!s.__esModule?Gh(t,"default",{value:s,enumerable:!0}):t,s));var sd=fp((I1,ql)=>{"use strict";ql.exports=Ua;ql.exports.default=Ua;function Ua(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=td(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=gy(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return qr(r,o,t,a,c,d,0),o}function td(s,e,t,n,i){var r,o;if(i===Xl(s,e,t,n)>0)for(r=e;r<t;r+=n)o=ed(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=ed(r,s[r],s[r+1],o);return o&&za(o,o.next)&&(Zr(o),o=o.next),o}function cs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(za(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qr(s,e,t,n,i,r,o){if(s){!o&&r&&My(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?dy(s,n,i,r):fy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Zr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=py(cs(s),e,t),qr(s,e,t,n,i,r,2)):o===2&&my(s,e,t,n,i,r):qr(cs(s),e,t,n,i,r,1);break}}}}function fy(s){var e=s.prev,t=s,n=s.next;if(Xt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ar(i,a,r,c,o,l,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dy(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Xt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Vl(d,p,e,t,n),_=Vl(x,g,e,t,n),v=s.prevZ,y=s.nextZ;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&ar(a,h,c,u,l,f,v.x,v.y)&&Xt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ar(a,h,c,u,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&ar(a,h,c,u,l,f,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ar(a,h,c,u,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function py(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!za(i,r)&&nd(i,n,n.next,r)&&Yr(i,r)&&Yr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zr(n),Zr(n.next),n=s=r),n=n.next}while(n!==s);return cs(n)}function my(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&wy(o,a)){var c=id(o,a);o=cs(o,o.next),c=cs(c,c.next),qr(o,e,t,n,i,r,0),qr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function gy(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=td(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Sy(l));for(i.sort(xy),r=0;r<i.length;r++)t=vy(i[r],t);return t}function xy(s,e){return s.x-e.x}function vy(s,e){var t=_y(s,e);if(!t)return e;var n=id(t,s);return cs(n,n.next),cs(t,t.next)}function _y(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&ar(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Yr(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&yy(o,t)))&&(o=t,u=f)),t=t.next;while(t!==c);return o}function yy(s,e){return Xt(s.prev,s,e.prev)<0&&Xt(e.next,s,s.next)<0}function My(s,e,t,n){var i=s;do i.z===0&&(i.z=Vl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,by(i)}function by(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Vl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Sy(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ar(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function wy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ey(s,e)&&(Yr(s,e)&&Yr(e,s)&&Ty(s,e)&&(Xt(s.prev,s,e.prev)||Xt(s,e.prev,e))||za(s,e)&&Xt(s.prev,s,s.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function za(s,e){return s.x===e.x&&s.y===e.y}function nd(s,e,t,n){var i=Da(Xt(s,e,t)),r=Da(Xt(s,e,n)),o=Da(Xt(t,n,s)),a=Da(Xt(t,n,e));return!!(i!==r&&o!==a||i===0&&Na(s,t,e)||r===0&&Na(s,n,e)||o===0&&Na(t,s,n)||a===0&&Na(t,e,n))}function Na(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Da(s){return s>0?1:s<0?-1:0}function Ey(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&nd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yr(s,e){return Xt(s.prev,s,s.next)<0?Xt(s,e,s.next)>=0&&Xt(s,s.prev,e)>=0:Xt(s,e,s.prev)<0||Xt(s,s.next,e)<0}function Ty(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function id(s,e){var t=new Wl(s.i,s.x,s.y),n=new Wl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ed(s,e,t,n){var i=new Wl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Wl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ua.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(Xl(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs(Xl(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Xl(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}Ua.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t}});var Ll="160";var mp=0,Vh=1,gp=2;var Ta=1,xp=2,mi=3,si=0,hn=1,Jt=2;var Ii=0,Bs=1,_i=2,Wh=3,Xh=4,vp=5,ji=100,_p=101,yp=102,qh=103,Yh=104,Mp=200,bp=201,Sp=202,wp=203,kc=204,Hc=205,Ep=206,Tp=207,Ap=208,Rp=209,Cp=210,Pp=211,Lp=212,Ip=213,Np=214,Dp=0,Up=1,zp=2,Ho=3,Fp=4,Op=5,Bp=6,kp=7,Il=0,Hp=1,Gp=2,Ni=0,Vp=1,Wp=2,Xp=3,qp=4,Yp=5,Zp=6,Zh="attached",Kp="detached",Cf=300,Gs=301,Vs=302,Gc=303,Vc=304,Aa=306,ts=1e3,In=1001,Rr=1002,Kt=1003,Go=1004;var yr=1005;var jt=1006,Nl=1007;var Vn=1008;var ii=1009,jp=1010,Jp=1011,Dl=1012,Pf=1013,Pi=1014,xi=1015,ns=1016,Lf=1017,If=1018,$i=1020,$p=1021,Hn=1023,Qp=1024,em=1025,Qi=1026,Ws=1027,tm=1028,Nf=1029,nm=1030,Df=1031,Uf=1033,sc=33776,rc=33777,oc=33778,ac=33779,Kh=35840,jh=35841,Jh=35842,$h=35843,zf=36196,Qh=37492,eu=37496,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,cu=37815,lu=37816,hu=37817,uu=37818,fu=37819,du=37820,pu=37821,cc=36492,mu=36494,gu=36495,im=36283,xu=36284,vu=36285,_u=36286,Ra=2200,sm=2201,rm=2202,Xs=2300,is=2301,lc=2302,Ns=2400,Ds=2401,Vo=2402,Ul=2500,om=2501,Ff=0,Ca=1,Xr=2,Of=3e3,es=3001,am=3200,cm=3201,zl=0,lm=1,yn="",zt="srgb",sn="srgb-linear",Fl="display-p3",Pa="display-p3-linear",Wo="linear",Ot="srgb",Xo="rec709",qo="p3";var gs=7680;var yu=519,hm=512,um=513,fm=514,Bf=515,dm=516,pm=517,mm=518,gm=519,Wc=35044;var Yo="300 es",Xc=1035,vi=2e3,Zo=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Mr=Math.PI/180,qs=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function tn(s,e,t){return Math.max(e,Math.min(t,s))}function Ol(s,e){return(s%e+e)%e}function xm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vm(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function _m(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function ym(s,e=1){return e-Math.abs(Ol(s,e*2)-e)}function Mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wm(s,e){return s+Math.random()*(e-s)}function Em(s){return s*(.5-Math.random())}function Tm(s){s!==void 0&&(Mu=s);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Am(s){return s*Mr}function Rm(s){return s*qs}function qc(s){return(s&s-1)===0&&s!==0}function Cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ko(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var kf={DEG2RAD:Mr,RAD2DEG:qs,generateUUID:Gn,clamp:tn,euclideanModulo:Ol,mapLinear:xm,inverseLerp:vm,lerp:br,damp:_m,pingpong:ym,smoothstep:Mm,smootherstep:bm,randInt:Sm,randFloat:wm,randFloatSpread:Em,seededRandom:Tm,degToRad:Am,radToDeg:Rm,isPowerOfTwo:qc,ceilPowerOfTwo:Cm,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:Pm,normalize:Nt,denormalize:ni},_e=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],y=i[7],w=i[2],b=i[5],E=i[8];return r[0]=o*x+a*_+c*w,r[3]=o*g+a*v+c*b,r[6]=o*m+a*y+c*E,r[1]=l*x+h*_+u*w,r[4]=l*g+h*v+u*b,r[7]=l*m+h*y+u*E,r[2]=f*x+d*_+p*w,r[5]=f*g+d*v+p*b,r[8]=f*m+d*y+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hc=new yt;function Hf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lm(){let s=Cr("canvas");return s.style.display="block",s}var bu={};function Sr(s){s in bu||(bu[s]=!0,console.warn(s))}var Su=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wu=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[sn]:{transfer:Wo,primaries:Xo,toReference:s=>s,fromReference:s=>s},[zt]:{transfer:Ot,primaries:Xo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pa]:{transfer:Wo,primaries:qo,toReference:s=>s.applyMatrix3(wu),fromReference:s=>s.applyMatrix3(Su)},[Fl]:{transfer:Ot,primaries:qo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wu),fromReference:s=>s.applyMatrix3(Su).convertLinearToSRGB()}},Im=new Set([sn,Pa]),Rt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Im.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=lo[e].toReference,i=lo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return lo[s].primaries},getTransfer:function(s){return s===yn?Wo:lo[s].transfer}};function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xs,jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=Cr("canvas")),xs.width=e.width,xs.height=e.height;let n=xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,Jo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fc(i[o].image)):r.push(fc(i[o]))}else r=fc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dm=0,rn=class s extends yi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=In,i=In,r=jt,o=Vn,a=Hn,c=ii,l=s.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Gn(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===es?zt:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?es:Of}set encoding(e){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?zt:yn}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Cf;rn.DEFAULT_ANISOTROPY=1;var Tt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(d+1)/2,w=(m+1)/2,b=(h+f)/4,E=(u+x)/4,C=(p+g)/4;return v>y&&v>w?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=C/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yc=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===es?zt:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Jo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$o=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zc=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),b=Math.atan2(w,m*_);g=Math.sin(g*b)/w,a=Math.sin(a*b)/w}let y=a*_;if(c=c*g+f*y,l=l*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new N,Eu=new en,$t=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),uo.subVectors(this.max,dr),vs.subVectors(e.a,dr),_s.subVectors(e.b,dr),ys.subVectors(e.c,dr),Ei.subVectors(_s,vs),Ti.subVectors(ys,_s),Xi.subVectors(vs,ys);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Xi.z,Xi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Xi.z,0,-Xi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Xi.y,Xi.x,0];return!pc(t,vs,_s,ys,uo)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,vs,_s,ys,uo))?!1:(fo.crossVectors(Ei,Ti),t=[fo.x,fo.y,fo.z],pc(t,vs,_s,ys,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,ho=new $t,vs=new N,_s=new N,ys=new N,Ei=new N,Ti=new N,Xi=new N,dr=new N,uo=new N,fo=new N,qi=new N;function pc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qi.fromArray(s,r);let a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Um=new $t,pr=new N,mc=new N,Nn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Um.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(mc)),this.expandByPoint(pr.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new N,gc=new N,po=new N,Ai=new N,xc=new N,mo=new N,vc=new N,Ys=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ai.dot(this.direction),c=-Ai.dot(po),l=Ai.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gc).addScaledVector(po,f),d}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,r){xc.subVectors(t,e),mo.subVectors(n,e),vc.crossVectors(xc,mo);let o=this.direction.dot(vc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let c=a*this.direction.dot(mo.crossVectors(Ai,mo));if(c<0)return null;let l=a*this.direction.dot(xc.cross(Ai));if(l<0||c+l>o)return null;let h=-a*Ai.dot(vc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zm,e,Fm)}lookAt(e,t,n){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ri.crossVectors(n,Pn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ri.crossVectors(n,Pn)),Ri.normalize(),go.crossVectors(Pn,Ri),i[0]=Ri.x,i[4]=go.x,i[8]=Pn.x,i[1]=Ri.y,i[5]=go.y,i[9]=Pn.y,i[2]=Ri.z,i[6]=go.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],y=n[11],w=n[15],b=i[0],E=i[4],C=i[8],M=i[12],T=i[1],I=i[5],D=i[9],G=i[13],P=i[2],L=i[6],k=i[10],$=i[14],Q=i[3],K=i[7],Z=i[11],ne=i[15];return r[0]=o*b+a*T+c*P+l*Q,r[4]=o*E+a*I+c*L+l*K,r[8]=o*C+a*D+c*k+l*Z,r[12]=o*M+a*G+c*$+l*ne,r[1]=h*b+u*T+f*P+d*Q,r[5]=h*E+u*I+f*L+d*K,r[9]=h*C+u*D+f*k+d*Z,r[13]=h*M+u*G+f*$+d*ne,r[2]=p*b+x*T+g*P+m*Q,r[6]=p*E+x*I+g*L+m*K,r[10]=p*C+x*D+g*k+m*Z,r[14]=p*M+x*G+g*$+m*ne,r[3]=_*b+v*T+y*P+w*Q,r[7]=_*E+v*I+y*L+w*K,r[11]=_*C+v*D+y*k+w*Z,r[15]=_*M+v*G+y*$+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*l-x*f*l+x*c*d-a*g*d-u*c*m+a*f*m,v=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,y=h*x*l-p*u*l+p*a*d-o*x*d-h*a*m+o*u*m,w=p*u*c-h*x*c-p*a*f+o*x*f+h*a*g-o*u*g,b=t*_+n*v+i*y+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=_*E,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*E,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*m+n*c*m)*E,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,e[4]=v*E,e[5]=(h*g*r-p*f*r+p*i*d-t*g*d-h*i*m+t*f*m)*E,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*E,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*E,e[8]=y*E,e[9]=(p*u*r-h*x*r-p*n*d+t*x*d+h*n*m-t*u*m)*E,e[10]=(o*x*r-p*a*r+p*n*l-t*x*l-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*E,e[12]=w*E,e[13]=(h*x*i-p*u*i+p*n*f-t*x*f-h*n*g+t*u*g)*E,e[14]=(p*a*i-o*x*i-p*n*c+t*x*c+o*n*g-t*a*g)*E,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=c*l,v=c*h,y=c*u,w=n.x,b=n.y,E=n.z;return i[0]=(1-(x+m))*w,i[1]=(d+y)*w,i[2]=(p-v)*w,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+m))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(p+v)*E,i[9]=(g-_)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ms.set(i[0],i[1],i[2]).length(),o=Ms.set(i[4],i[5],i[6]).length(),a=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);let l=1/r,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=vi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,p;if(a===vi)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Zo)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=vi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,p,x;if(a===vi)p=(o+r)*u,x=-2*u;else if(a===Zo)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ms=new N,jn=new at,zm=new N(0,0,0),Fm=new N(1,1,1),Ri=new N,go=new N,Pn=new N,Tu=new at,Au=new en,Qo=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qo.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Om=0,Ru=new N,bs=new en,ui=new at,xo=new N,mr=new N,Bm=new N,km=new en,Cu=new N(1,0,0),Pu=new N(0,1,0),Lu=new N(0,0,1),Hm={type:"added"},Gm={type:"removed"},Bt=class s extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new N,t=new Qo,n=new en,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new yt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(mr,xo,this.up):ui.lookAt(xo,mr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Bt.DEFAULT_UP=new N(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new N,fi=new N,_c=new N,di=new N,Ss=new N,ws=new N,Iu=new N,yc=new N,Mc=new N,bc=new N,vo=!1,Us=class s{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),fi.subVectors(n,t),_c.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(fi),c=Jn.dot(_c),l=fi.dot(fi),h=fi.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,i,r,o,a,c){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),fi.subVectors(e,t),Jn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Jn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ss.subVectors(i,n),ws.subVectors(r,n),yc.subVectors(e,n);let c=Ss.dot(yc),l=ws.dot(yc);if(c<=0&&l<=0)return t.copy(n);Mc.subVectors(e,i);let h=Ss.dot(Mc),u=ws.dot(Mc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ss,o);bc.subVectors(e,r);let d=Ss.dot(bc),p=ws.dot(bc);if(p>=0&&d<=p)return t.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(ws,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Iu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Iu,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(Ss,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Sc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=Ol(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sc(o,r,e+1/3),this.g=Sc(o,r,e),this.b=Sc(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Rt.fromWorkingColorSpace(gn.copy(this),e),Math.round(tn(gn.r*255,0,255))*65536+Math.round(tn(gn.g*255,0,255))*256+Math.round(tn(gn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,r=gn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=zt){Rt.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,i=gn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(_o);let n=br(Ci.h,_o.h,t),i=br(Ci.s,_o.s,t),r=br(Ci.l,_o.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Oe;Oe.NAMES=Gf;var Vm=0,An=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Bs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new N,yo=new _e,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}};var ta=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Wm=0,kn=new at,wc=new Bt,Es=new N,Ln=new $t,gr=new $t,ln=new N,Ct=class s extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?na:ta)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Ln.min,gr.min),Ln.expandByPoint(ln),ln.addVectors(Ln.max,gr.max),Ln.expandByPoint(ln)):(Ln.expandByPoint(gr.min),Ln.expandByPoint(gr.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ln.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),ln.add(Es)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new N,h[T]=new N;let u=new N,f=new N,d=new N,p=new _e,x=new _e,g=new _e,m=new N,_=new N;function v(T,I,D){u.fromArray(i,T*3),f.fromArray(i,I*3),d.fromArray(i,D*3),p.fromArray(o,T*2),x.fromArray(o,I*2),g.fromArray(o,D*2),f.sub(u),d.sub(u),x.sub(p),g.sub(p);let G=1/(x.x*g.y-g.x*x.y);isFinite(G)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(G),_.copy(d).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(G),l[T].add(m),l[I].add(m),l[D].add(m),h[T].add(_),h[I].add(_),h[D].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,I=y.length;T<I;++T){let D=y[T],G=D.start,P=D.count;for(let L=G,k=G+P;L<k;L+=3)v(n[L+0],n[L+1],n[L+2])}let w=new N,b=new N,E=new N,C=new N;function M(T){E.fromArray(r,T*3),C.copy(E);let I=l[T];w.copy(I),w.sub(E.multiplyScalar(E.dot(I))).normalize(),b.crossVectors(C,I);let G=b.dot(h[T])<0?-1:1;c[T*4]=w.x,c[T*4+1]=w.y,c[T*4+2]=w.z,c[T*4+3]=G}for(let T=0,I=y.length;T<I;++T){let D=y[T],G=D.start,P=D.count;for(let L=G,k=G+P;L<k;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Ft(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nu=new at,Yi=new Ys,Mo=new Nn,Du=new N,Ts=new N,As=new N,Rs=new N,Ec=new N,bo=new N,So=new _e,wo=new _e,Eo=new _e,Uu=new N,zu=new N,Fu=new N,To=new N,Ao=new N,et=class extends Bt{constructor(e=new Ct,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ec.fromBufferAttribute(u,e),o?bo.addScaledVector(Ec,h):bo.addScaledVector(Ec.sub(t),h))}t.add(bo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Mo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Mo,Du)===null||Yi.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,w=v;y<w;y+=3){let b=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);i=Ro(this,m,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Ro(this,o,e,n,l,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,w=v;y<w;y+=3){let b=y,E=y+1,C=y+2;i=Ro(this,m,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,y=g+2;i=Ro(this,o,e,n,l,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Xm(s,e,t,n,i,r,o,a){let c;if(e.side===hn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===si,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ao);return l<t.near||l>t.far?null:{distance:l,point:Ao.clone(),object:s}}function Ro(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ts),s.getVertexPosition(c,As),s.getVertexPosition(l,Rs);let h=Xm(s,e,t,n,Ts,As,Rs,To);if(h){i&&(So.fromBufferAttribute(i,a),wo.fromBufferAttribute(i,c),Eo.fromBufferAttribute(i,l),h.uv=Us.getInterpolation(To,Ts,As,Rs,So,wo,Eo,new _e)),r&&(So.fromBufferAttribute(r,a),wo.fromBufferAttribute(r,c),Eo.fromBufferAttribute(r,l),h.uv1=Us.getInterpolation(To,Ts,As,Rs,So,wo,Eo,new _e),h.uv2=h.uv1),o&&(Uu.fromBufferAttribute(o,a),zu.fromBufferAttribute(o,c),Fu.fromBufferAttribute(o,l),h.normal=Us.getInterpolation(To,Ts,As,Rs,Uu,zu,Fu,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};Us.getNormal(Ts,As,Rs,u.normal),h.face=u}return h}var Zt=class s extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function p(x,g,m,_,v,y,w,b,E,C,M){let T=y/E,I=w/C,D=y/2,G=w/2,P=b/2,L=E+1,k=C+1,$=0,Q=0,K=new N;for(let Z=0;Z<k;Z++){let ne=Z*I-G;for(let oe=0;oe<L;oe++){let X=oe*T-D;K[x]=X*_,K[g]=ne*v,K[m]=P,l.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[m]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/E),u.push(1-Z/C),$+=1}}for(let Z=0;Z<C;Z++)for(let ne=0;ne<E;ne++){let oe=f+ne+L*Z,X=f+ne+L*(Z+1),ee=f+(ne+1)+L*(Z+1),he=f+(ne+1)+L*Z;c.push(oe,X,he),c.push(X,ee,he),Q+=6}a.addGroup(d,Q,M),d+=Q,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){let e={};for(let t=0;t<s.length;t++){let n=Zs(s[t]);for(let i in n)e[i]=n[i]}return e}function qm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vf(s){return s.getRenderTarget()===null?s.outputColorSpace:Rt.workingColorSpace}var Ym={clone:Zs,merge:_n},Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ks=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends Ks{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cs=-90,Ps=1,Kc=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Cs,Ps,e,t);i.layers=this.layers,this.add(i);let r=new nn(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let o=new nn(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let a=new nn(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let c=new nn(Cs,Ps,e,t);c.layers=this.layers,this.add(c);let l=new nn(Cs,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ia=class extends rn{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?zt:yn),this.texture=new ia(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ii});r.uniforms.tEquirect.value=t;let o=new et(i,r),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=jt),new Kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Tc=new N,jm=new N,Jm=new yt,gi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tc.subVectors(n,t).cross(jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jm.getNormalMatrix(e),i=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Nn,Co=new N,Pr=class{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,g-d,y-m).normalize(),n[1].setComponents(c+r,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+h,g+p,y+_).normalize(),n[3].setComponents(c-o,f-h,g-p,y-_).normalize(),n[4].setComponents(c-a,f-u,g-x,y-v).normalize(),t===vi)n[5].setComponents(c+a,f+u,g+x,y+v).normalize();else if(t===Zo)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Co.x=i.normal.x>0?e.max.x:e.min.x,Co.y=i.normal.y>0?e.max.y:e.min.y,Co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $m(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,p=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&p.length===0&&s.bufferSubData(u,0,f),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];t?s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ss=class s extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let v=0;v<l;v++){let y=v*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let v=_+l*m,y=_+l*(m+1),w=_+1+l*(m+1),b=_+1+l*m;d.push(v,y,b),d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
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
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`
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
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,$0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,wx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Qm,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:c0,begin_vertex:l0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:f0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:v0,color_pars_fragment:_0,color_pars_vertex:y0,color_vertex:M0,common:b0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:w0,displacementmap_pars_vertex:E0,displacementmap_vertex:T0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:L0,envmap_common_pars_fragment:I0,envmap_pars_fragment:N0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:q0,envmap_vertex:U0,fog_vertex:z0,fog_pars_vertex:F0,fog_fragment:O0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_fragment:H0,lightmap_pars_fragment:G0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:Z0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:J0,lights_physical_pars_fragment:$0,lights_fragment_begin:Q0,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:_g,normal_vertex:yg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Eg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Lg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ug,shadowmap_vertex:zg,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:kg,skinnormal_vertex:Hg,specularmap_fragment:Gg,specularmap_pars_fragment:Vg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:Zg,uv_pars_vertex:Kg,uv_vertex:jg,worldpos_vertex:Jg,background_vert:$g,background_frag:Qg,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distanceRGBA_vert:ox,distanceRGBA_frag:ax,equirect_vert:cx,equirect_frag:lx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:_x,meshphong_vert:yx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:Sx,meshtoon_vert:wx,meshtoon_frag:Ex,points_vert:Tx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Lx},Re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ti={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ti.physical={uniforms:_n([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Po={r:0,b:0,g:0};function Ix(s,e,t,n,i,r,o){let a=new Oe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(g,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Aa)?(h===void 0&&(h=new et(new Zt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new et(new ss(2,2),new Mn({name:"BackgroundMaterial",uniforms:Zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,m){g.getRGB(Po,Vf(s)),n.buffers.color.setClear(Po.r,Po.g,Po.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(a,c)},render:p}}function Nx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(P,L,k,$,Q){let K=!1;if(o){let Z=x($,k,L);l!==Z&&(l=Z,d(l.object)),K=m(P,$,k,Q),K&&_(P,$,k,Q)}else{let Z=L.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==Z)&&(l.geometry=$.id,l.program=k.id,l.wireframe=Z,K=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,C(P,L,k,$),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function p(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,L,k){let $=k.wireframe===!0,Q=a[P.id];Q===void 0&&(Q={},a[P.id]=Q);let K=Q[L.id];K===void 0&&(K={},Q[L.id]=K);let Z=K[$];return Z===void 0&&(Z=g(f()),K[$]=Z),Z}function g(P){let L=[],k=[],$=[];for(let Q=0;Q<i;Q++)L[Q]=0,k[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:$,object:P,attributes:{},index:null}}function m(P,L,k,$){let Q=l.attributes,K=L.attributes,Z=0,ne=k.getAttributes();for(let oe in ne)if(ne[oe].location>=0){let ee=Q[oe],he=K[oe];if(he===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;Z++}return l.attributesNum!==Z||l.index!==$}function _(P,L,k,$){let Q={},K=L.attributes,Z=0,ne=k.getAttributes();for(let oe in ne)if(ne[oe].location>=0){let ee=K[oe];ee===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),Q[oe]=he,Z++}l.attributes=Q,l.attributesNum=Z,l.index=$}function v(){let P=l.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function y(P){w(P,0)}function w(P,L){let k=l.newAttributes,$=l.enabledAttributes,Q=l.attributeDivisors;k[P]=1,$[P]===0&&(s.enableVertexAttribArray(P),$[P]=1),Q[P]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),Q[P]=L)}function b(){let P=l.newAttributes,L=l.enabledAttributes;for(let k=0,$=L.length;k<$;k++)L[k]!==P[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function E(P,L,k,$,Q,K,Z){Z===!0?s.vertexAttribIPointer(P,L,k,Q,K):s.vertexAttribPointer(P,L,k,$,Q,K)}function C(P,L,k,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Q=$.attributes,K=k.getAttributes(),Z=L.defaultAttributeValues;for(let ne in K){let oe=K[ne];if(oe.location>=0){let X=Q[ne];if(X===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let ee=X.normalized,he=X.itemSize,de=t.get(X);if(de===void 0)continue;let Ae=de.buffer,We=de.type,it=de.bytesPerElement,Be=n.isWebGL2===!0&&(We===s.INT||We===s.UNSIGNED_INT||X.gpuType===Pf);if(X.isInterleavedBufferAttribute){let me=X.data,O=me.stride,we=X.offset;if(me.isInstancedInterleavedBuffer){for(let le=0;le<oe.locationSize;le++)w(oe.location+le,me.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let le=0;le<oe.locationSize;le++)y(oe.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let le=0;le<oe.locationSize;le++)E(oe.location+le,he/oe.locationSize,We,ee,O*it,(we+he/oe.locationSize*le)*it,Be)}else{if(X.isInstancedBufferAttribute){for(let me=0;me<oe.locationSize;me++)w(oe.location+me,X.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let me=0;me<oe.locationSize;me++)y(oe.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let me=0;me<oe.locationSize;me++)E(oe.location+me,he/oe.locationSize,We,ee,he*it,he/oe.locationSize*me*it,Be)}}else if(Z!==void 0){let ee=Z[ne];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(oe.location,ee);break;case 3:s.vertexAttrib3fv(oe.location,ee);break;case 4:s.vertexAttrib4fv(oe.location,ee);break;default:s.vertexAttrib1fv(oe.location,ee)}}}}b()}function M(){D();for(let P in a){let L=a[P];for(let k in L){let $=L[k];for(let Q in $)p($[Q].object),delete $[Q];delete L[k]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;let L=a[P.id];for(let k in L){let $=L[k];for(let Q in $)p($[Q].object),delete $[Q];delete L[k]}delete a[P.id]}function I(P){for(let L in a){let k=a[L];if(k[P.id]===void 0)continue;let $=k[P.id];for(let Q in $)p($[Q].object),delete $[Q];delete k[P.id]}}function D(){G(),h=!0,l!==c&&(l=c,d(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function Dx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ux(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),w=v&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:b}}function zx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new gi,a=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,y=m.clippingState||null;c.value=y,y=h(p,f,v,d);for(let w=0;w!==v;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Fx(s){let e=new WeakMap;function t(o,a){return a===Gc?o.mapping=Gs:a===Vc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gc||a===Vc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jc(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var js=class extends Ks{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=4,Ou=[.125,.215,.35,.446,.526,.582],Ji=20,Ac=new js,Bu=new Oe,Rc=null,Cc=0,Pc=0,Ki=(1+Math.sqrt(5))/2,Ls=1/Ki,ku=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ki,Ls),new N(0,Ki,-Ls),new N(Ls,0,Ki),new N(-Ls,0,Ki),new N(Ki,Ls,0),new N(-Ki,Ls,0)],sa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,Pc),e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ns,format:Hn,colorSpace:sn,depthBuffer:!1},i=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ox(r)),this._blurMaterial=Bx(r,e,t)}return i}_compileMaterial(e){let t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Ac)}_sceneToCubeUV(e,t,n,i){let a=new nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bu),h.toneMapping=Ni,h.autoClear=!1;let d=new fn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),p=new et(new Zt,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(Bu),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;Lo(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Gs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Lo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ac)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ku[(i-1)%ku.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Ji;g>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ji}`);let m=[],_=0;for(let E=0;E<Ji;++E){let C=E/x,M=Math.exp(-C*C/2);m.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let y=this._sizeLods[i],w=3*y*(i>v-zs?i-v+zs:0),b=4*(this._cubeSize-y);Lo(t,w,b,3*y,2*y),c.setRenderTarget(t),c.render(u,Ac)}};function Ox(s){let e=[],t=[],n=[],i=s,r=s-zs+1+Ou.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-zs?c=Ou[o-s+zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),v=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,C=b>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(M,x*p*b),v.set(f,g*p*b);let T=[b,b,b,b,b,b];y.set(T,m*p*b)}let w=new Ct;w.setAttribute("position",new Ft(_,x)),w.setAttribute("uv",new Ft(v,g)),w.setAttribute("faceIndex",new Ft(y,m)),e.push(w),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hu(s,e,t){let n=new $n(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bx(s,e,t){let n=new Float32Array(Ji),i=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Gu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Vu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function kx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Gc||c===Vc,h=c===Gs||c===Vs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new sa(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new sa(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let w=_[v+0],b=_[v+1],E=_[v+2];f.push(w,b,b,E,E,w)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let w=v+0,b=v+1,E=v+2;f.push(w,b,b,E,E,w)}}else return;let g=new(Hf(f)?na:ta)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Vx(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function u(d,p,x){if(x===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*c,x),t.update(p,r,x)}function f(d,p,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,a,d,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Wx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xx(s,e){return s[0]-e[0]}function qx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Yx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==p){let P=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],C=0;_===!0&&(C=1),v===!0&&(C=2),y===!0&&(C=3);let M=h.attributes.position.count*C,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let I=new Float32Array(M*T*4*p),D=new $o(I,M,T,p);D.type=xi,D.needsUpdate=!0;let G=C*4;for(let L=0;L<p;L++){let k=w[L],$=b[L],Q=E[L],K=M*T*4*L;for(let Z=0;Z<k.count;Z++){let ne=Z*G;_===!0&&(o.fromBufferAttribute(k,Z),I[K+ne+0]=o.x,I[K+ne+1]=o.y,I[K+ne+2]=o.z,I[K+ne+3]=0),v===!0&&(o.fromBufferAttribute($,Z),I[K+ne+4]=o.x,I[K+ne+5]=o.y,I[K+ne+6]=o.z,I[K+ne+7]=0),y===!0&&(o.fromBufferAttribute(Q,Z),I[K+ne+8]=o.x,I[K+ne+9]=o.y,I[K+ne+10]=o.z,I[K+ne+11]=Q.itemSize===4?o.w:1)}}x={count:p,texture:D,size:new _e(M,T)},r.set(h,x),h.addEventListener("dispose",P)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<d;v++){let y=p[v];y[0]=v,y[1]=f[v]}p.sort(qx);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Xx);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let y=a[v],w=y[0],b=y[1];w!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+v)!==x[w]&&h.setAttribute("morphTarget"+v,x[w]),g&&h.getAttribute("morphNormal"+v)!==g[w]&&h.setAttribute("morphNormal"+v,g[w]),i[v]=b,m+=b):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ra=class extends rn{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Qi,h!==Qi&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=Pi),n===void 0&&h===Ws&&(n=$i),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xf=new rn,qf=new ra(1,1);qf.compareFunction=Bf;var Yf=new $o,Zf=new Zc,Kf=new ia,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function rr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Wu[i];if(r===void 0&&(r=new Float32Array(i),Wu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function La(s,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function Jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function Qx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Zu.set(n),s.uniformMatrix2fv(this.addr,!1,Zu),an(t,n)}}function ev(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Yu.set(n),s.uniformMatrix3fv(this.addr,!1,Yu),an(t,n)}}function tv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;qu.set(n),s.uniformMatrix4fv(this.addr,!1,qu),an(t,n)}}function nv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function ov(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function hv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?qf:Xf;t.setTexture2D(e||r,i)}function uv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zf,i)}function fv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kf,i)}function dv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yf,i)}function pv(s){switch(s){case 5126:return Kx;case 35664:return jx;case 35665:return Jx;case 35666:return $x;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(s,e){s.uniform1fv(this.addr,e)}function gv(s,e){let t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function xv(s,e){let t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function vv(s,e){let t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function _v(s,e){let t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yv(s,e){let t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mv(s,e){let t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bv(s,e){s.uniform1iv(this.addr,e)}function Sv(s,e){s.uniform2iv(this.addr,e)}function wv(s,e){s.uniform3iv(this.addr,e)}function Ev(s,e){s.uniform4iv(this.addr,e)}function Tv(s,e){s.uniform1uiv(this.addr,e)}function Av(s,e){s.uniform2uiv(this.addr,e)}function Rv(s,e){s.uniform3uiv(this.addr,e)}function Cv(s,e){s.uniform4uiv(this.addr,e)}function Pv(s,e,t){let n=this.cache,i=e.length,r=La(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Xf,r[o])}function Lv(s,e,t){let n=this.cache,i=e.length,r=La(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zf,r[o])}function Iv(s,e,t){let n=this.cache,i=e.length,r=La(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kf,r[o])}function Nv(s,e,t){let n=this.cache,i=e.length,r=La(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yf,r[o])}function Dv(s){switch(s){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return _v;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return wv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function Ku(s,e){s.seq.push(e),s.map[e.id]=e}function Uv(s,e,t){let n=s.name,i=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),o=Lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ku(t,l===void 0?new Jc(a,s,e):new $c(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Qc(a),Ku(t,u)),t=u}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Uv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function ju(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var zv=37297,Fv=0;function Ov(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bv(s){let e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(s),n;switch(e===t?n="":e===qo&&t===Xo?n="LinearDisplayP3ToLinearSRGB":e===Xo&&t===qo&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case Pa:return[n,"LinearTransferOETF"];case zt:case Fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ju(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ov(s.getShaderSource(e),o)}else return i}function kv(s,e){let t=Bv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hv(s,e){let t;switch(e){case Vp:t="Linear";break;case Wp:t="Reinhard";break;case Xp:t="OptimizedCineon";break;case qp:t="ACESFilmic";break;case Zp:t="AgX";break;case Yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function Vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fs).join(`
`)}function Wv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Fs(s){return s!==""}function $u(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(qv,Zv)}var Yv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zv(s,e){let t=gt[e];if(t===void 0){let n=Yv.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}var Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(s){return s.replace(Kv,jv)}function jv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ta?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function $v(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function e_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case Hp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function t_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function n_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Jv(t),l=$v(t),h=Qv(t),u=e_(t),f=t_(t),d=t.isWebGL2?"":Gv(t),p=Vv(t),x=Wv(r),g=i.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),_.length>0&&(_+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),_=[d,tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=el(o),o=$u(o,t),o=Qu(o,t),a=el(a),a=$u(a,t),a=Qu(a,t),o=ef(o),a=ef(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+m+o,w=v+_+a,b=ju(i,i.VERTEX_SHADER,y),E=ju(i,i.FRAGMENT_SHADER,w);i.attachShader(g,b),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(D){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(E).trim(),k=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{let Q=Ju(i,b,"vertex"),K=Ju(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+Q+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(P===""||L==="")&&($=!1);$&&(D.diagnostics={runnable:k,programLog:G,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:_}})}i.deleteShader(b),i.deleteShader(E),M=new Hs(i,g),T=Xv(i,g)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,zv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var i_=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}};function s_(s,e,t,n,i,r,o){let a=new ea,c=new tl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,T,I,D,G){let P=D.fog,L=G.geometry,k=M.isMeshStandardMaterial?D.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),Q=$&&$.mapping===Aa?$.image.height:null,K=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=Z!==void 0?Z.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let X,ee,he,de;if(K){let U=ti[K];X=U.vertexShader,ee=U.fragmentShader}else X=M.vertexShader,ee=M.fragmentShader,c.update(M),he=c.getVertexShaderID(M),de=c.getFragmentShaderID(M);let Ae=s.getRenderTarget(),We=G.isInstancedMesh===!0,it=G.isBatchedMesh===!0,Be=!!M.map,me=!!M.matcap,O=!!$,we=!!M.aoMap,le=!!M.lightMap,Me=!!M.bumpMap,ce=!!M.normalMap,Ve=!!M.displacementMap,De=!!M.emissiveMap,R=!!M.metalnessMap,A=!!M.roughnessMap,J=M.anisotropy>0,fe=M.clearcoat>0,xe=M.iridescence>0,ge=M.sheen>0,Xe=M.transmission>0,Pe=J&&!!M.anisotropyMap,Fe=fe&&!!M.clearcoatMap,ae=fe&&!!M.clearcoatNormalMap,ht=fe&&!!M.clearcoatRoughnessMap,pe=xe&&!!M.iridescenceMap,Et=xe&&!!M.iridescenceThicknessMap,pt=ge&&!!M.sheenColorMap,ot=ge&&!!M.sheenRoughnessMap,$e=!!M.specularMap,Ge=!!M.specularColorMap,ft=!!M.specularIntensityMap,At=Xe&&!!M.transmissionMap,Gt=Xe&&!!M.thicknessMap,nt=!!M.gradientMap,Se=!!M.alphaMap,H=M.alphaTest>0,Ce=!!M.alphaHash,Ie=!!M.extensions,st=!!L.attributes.uv1,z=!!L.attributes.uv2,Y=!!L.attributes.uv3,F=Ni;return M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(F=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ee,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:it,instancing:We,instancingColor:We&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:sn,map:Be,matcap:me,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:Q,aoMap:we,lightMap:le,bumpMap:Me,normalMap:ce,displacementMap:f&&Ve,emissiveMap:De,normalMapObjectSpace:ce&&M.normalMapType===lm,normalMapTangentSpace:ce&&M.normalMapType===zl,metalnessMap:R,roughnessMap:A,anisotropy:J,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:Fe,clearcoatNormalMap:ae,clearcoatRoughnessMap:ht,iridescence:xe,iridescenceMap:pe,iridescenceThicknessMap:Et,sheen:ge,sheenColorMap:pt,sheenRoughnessMap:ot,specularMap:$e,specularColorMap:Ge,specularIntensityMap:ft,transmission:Xe,transmissionMap:At,thicknessMap:Gt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===Bs,alphaMap:Se,alphaTest:H,alphaHash:Ce,combine:M.combine,mapUv:Be&&x(M.map.channel),aoMapUv:we&&x(M.aoMap.channel),lightMapUv:le&&x(M.lightMap.channel),bumpMapUv:Me&&x(M.bumpMap.channel),normalMapUv:ce&&x(M.normalMap.channel),displacementMapUv:Ve&&x(M.displacementMap.channel),emissiveMapUv:De&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:Pe&&x(M.anisotropyMap.channel),clearcoatMapUv:Fe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ot&&x(M.sheenRoughnessMap.channel),specularMapUv:$e&&x(M.specularMap.channel),specularColorMapUv:Ge&&x(M.specularColorMap.channel),specularIntensityMapUv:ft&&x(M.specularIntensityMap.channel),transmissionMapUv:At&&x(M.transmissionMap.channel),thicknessMapUv:Gt&&x(M.thicknessMap.channel),alphaMapUv:Se&&x(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ce||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:z,vertexUv3s:Y,pointsUvs:G.isPoints===!0&&!!L.attributes.uv&&(Be||Se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:F,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&Rt.getTransfer(M.map.colorSpace)===Ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ie&&M.extensions.derivatives===!0,extensionFragDepth:Ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let T=p[M.type],I;if(T){let D=ti[T];I=Ym.clone(D.uniforms)}else I=M.uniforms;return I}function w(M,T){let I;for(let D=0,G=l.length;D<G;D++){let P=l[D];if(P.cacheKey===T){I=P,++I.usedTimes;break}}return I===void 0&&(I=new n_(s,T,M,r),l.push(I)),I}function b(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function r_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function o_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,x,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||o_),n.length>1&&n.sort(f||nf),i.length>1&&i.sort(f||nf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function a_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new sf,s.set(n,[o])):i>=r.length?(o=new sf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function c_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function l_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var h_=0;function u_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function f_(s,e){let t=new c_,n=l_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);let r=new N,o=new at,a=new at;function c(h,u){let f=0,d=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,g=0,m=0,_=0,v=0,y=0,w=0,b=0,E=0,C=0,M=0;h.sort(u_);let T=u===!0?Math.PI:1;for(let D=0,G=h.length;D<G;D++){let P=h[D],L=P.color,k=P.intensity,$=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=L.r*k*T,d+=L.g*k*T,p+=L.b*k*T;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],k);M++}else if(P.isDirectionalLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let Z=P.shadow,ne=n.get(P);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=P.shadow.matrix,y++}i.directional[x]=K,x++}else if(P.isSpotLight){let K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(L).multiplyScalar(k*T),K.distance=$,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[m]=K;let Z=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,Z.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[m]=Z.matrix,P.castShadow){let ne=n.get(P);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.spotShadow[m]=ne,i.spotShadowMap[m]=Q,b++}m++}else if(P.isRectAreaLight){let K=t.get(P);K.color.copy(L).multiplyScalar(k),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=K,_++}else if(P.isPointLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){let Z=P.shadow,ne=n.get(P);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=K,g++}else if(P.isHemisphereLight){let K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(k*T),K.groundColor.copy(P.groundColor).multiplyScalar(k*T),i.hemi[v]=K,v++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let I=i.hash;(I.directionalLength!==x||I.pointLength!==g||I.spotLength!==m||I.rectAreaLength!==_||I.hemiLength!==v||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==E||I.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,I.directionalLength=x,I.pointLength=g,I.spotLength=m,I.rectAreaLength=_,I.hemiLength=v,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=E,I.numLightProbes=M,i.version=h_++)}function l(h,u){let f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let y=h[_];if(y.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(y.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function rf(s,e){let t=new f_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function d_(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new rf(s,e),t.set(r,[c])):o>=a.length?(c=new rf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var il=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(s,e,t){let n=new Pr,i=new _e,r=new _e,o=new Tt,a=new il({depthPacking:cm}),c=new sl,l={},h=t.maxTextureSize,u={[si]:hn,[hn]:si,[Jt]:Jt},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ct;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let m=this.type;this.render=function(b,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=m!==mi&&this.type===mi,P=m===mi&&this.type!==mi;for(let L=0,k=b.length;L<k;L++){let $=b[L],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let K=Q.getFrameExtents();if(i.multiply(K),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,Q.mapSize.y=r.y)),Q.map===null||G===!0||P===!0){let ne=this.type!==mi?{minFilter:Kt,magFilter:Kt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new $n(i.x,i.y,ne),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();let Z=Q.getViewportCount();for(let ne=0;ne<Z;ne++){let oe=Q.getViewport(ne);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),D.viewport(o),Q.updateMatrices($,ne),n=Q.getFrustum(),y(E,C,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===mi&&_(Q,C),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,T,I)};function _(b,E){let C=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,d,x,null)}function v(b,E,C,M){let T=null,I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)T=I;else if(T=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let D=T.uuid,G=E.uuid,P=l[D];P===void 0&&(P={},l[D]=P);let L=P[G];L===void 0&&(L=T.clone(),P[G]=L,E.addEventListener("dispose",w)),T=L}if(T.visible=E.visible,T.wireframe=E.wireframe,M===mi?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=s.properties.get(T);D.light=C}return T}function y(b,E,C,M,T){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===mi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let G=e.update(b),P=b.material;if(Array.isArray(P)){let L=G.groups;for(let k=0,$=L.length;k<$;k++){let Q=L[k],K=P[Q.materialIndex];if(K&&K.visible){let Z=v(b,K,M,T);b.onBeforeShadow(s,b,E,C,G,Z,Q),s.renderBufferDirect(C,null,G,Z,b,Q),b.onAfterShadow(s,b,E,C,G,Z,Q)}}}else if(P.visible){let L=v(b,P,M,T);b.onBeforeShadow(s,b,E,C,G,L,null),s.renderBufferDirect(C,null,G,L,b,null),b.onAfterShadow(s,b,E,C,G,L,null)}}let D=b.children;for(let G=0,P=D.length;G<P;G++)y(D[G],E,C,M,T)}function w(b){b.target.removeEventListener("dispose",w);for(let C in l){let M=l[C],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function x_(s,e,t){let n=t.isWebGL2;function i(){let H=!1,Ce=new Tt,Ie=null,st=new Tt(0,0,0,0);return{setMask:function(z){Ie!==z&&!H&&(s.colorMask(z,z,z,z),Ie=z)},setLocked:function(z){H=z},setClear:function(z,Y,F,te,U){U===!0&&(z*=te,Y*=te,F*=te),Ce.set(z,Y,F,te),st.equals(Ce)===!1&&(s.clearColor(z,Y,F,te),st.copy(Ce))},reset:function(){H=!1,Ie=null,st.set(-1,0,0,0)}}}function r(){let H=!1,Ce=null,Ie=null,st=null;return{setTest:function(z){z?it(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(z){Ce!==z&&!H&&(s.depthMask(z),Ce=z)},setFunc:function(z){if(Ie!==z){switch(z){case Dp:s.depthFunc(s.NEVER);break;case Up:s.depthFunc(s.ALWAYS);break;case zp:s.depthFunc(s.LESS);break;case Ho:s.depthFunc(s.LEQUAL);break;case Fp:s.depthFunc(s.EQUAL);break;case Op:s.depthFunc(s.GEQUAL);break;case Bp:s.depthFunc(s.GREATER);break;case kp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=z}},setLocked:function(z){H=z},setClear:function(z){st!==z&&(s.clearDepth(z),st=z)},reset:function(){H=!1,Ce=null,Ie=null,st=null}}}function o(){let H=!1,Ce=null,Ie=null,st=null,z=null,Y=null,F=null,te=null,U=null;return{setTest:function(V){H||(V?it(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(V){Ce!==V&&!H&&(s.stencilMask(V),Ce=V)},setFunc:function(V,ie,ue){(Ie!==V||st!==ie||z!==ue)&&(s.stencilFunc(V,ie,ue),Ie=V,st=ie,z=ue)},setOp:function(V,ie,ue){(Y!==V||F!==ie||te!==ue)&&(s.stencilOp(V,ie,ue),Y=V,F=ie,te=ue)},setLocked:function(V){H=V},setClear:function(V){U!==V&&(s.clearStencil(V),U=V)},reset:function(){H=!1,Ce=null,Ie=null,st=null,z=null,Y=null,F=null,te=null,U=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,y=null,w=null,b=null,E=null,C=null,M=new Oe(0,0,0),T=0,I=!1,D=null,G=null,P=null,L=null,k=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,K=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=K>=2);let ne=null,oe={},X=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),he=new Tt().fromArray(X),de=new Tt().fromArray(ee);function Ae(H,Ce,Ie,st){let z=new Uint8Array(4),Y=s.createTexture();s.bindTexture(H,Y),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let F=0;F<Ie;F++)n&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ce,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,z):s.texImage2D(Ce+F,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,z);return Y}let We={};We[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),We[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),We[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),it(s.DEPTH_TEST),c.setFunc(Ho),De(!1),R(Vh),it(s.CULL_FACE),ce(Ii);function it(H){f[H]!==!0&&(s.enable(H),f[H]=!0)}function Be(H){f[H]!==!1&&(s.disable(H),f[H]=!1)}function me(H,Ce){return d[H]!==Ce?(s.bindFramebuffer(H,Ce),d[H]=Ce,n&&(H===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ce),H===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function O(H,Ce){let Ie=x,st=!1;if(H)if(Ie=p.get(Ce),Ie===void 0&&(Ie=[],p.set(Ce,Ie)),H.isWebGLMultipleRenderTargets){let z=H.texture;if(Ie.length!==z.length||Ie[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,F=z.length;Y<F;Y++)Ie[Y]=s.COLOR_ATTACHMENT0+Y;Ie.length=z.length,st=!0}}else Ie[0]!==s.COLOR_ATTACHMENT0&&(Ie[0]=s.COLOR_ATTACHMENT0,st=!0);else Ie[0]!==s.BACK&&(Ie[0]=s.BACK,st=!0);st&&(t.isWebGL2?s.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function we(H){return g!==H?(s.useProgram(H),g=H,!0):!1}let le={[ji]:s.FUNC_ADD,[_p]:s.FUNC_SUBTRACT,[yp]:s.FUNC_REVERSE_SUBTRACT};if(n)le[qh]=s.MIN,le[Yh]=s.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(le[qh]=H.MIN_EXT,le[Yh]=H.MAX_EXT)}let Me={[Mp]:s.ZERO,[bp]:s.ONE,[Sp]:s.SRC_COLOR,[kc]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[Ap]:s.DST_COLOR,[Ep]:s.DST_ALPHA,[wp]:s.ONE_MINUS_SRC_COLOR,[Hc]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Tp]:s.ONE_MINUS_DST_ALPHA,[Pp]:s.CONSTANT_COLOR,[Lp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Np]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(H,Ce,Ie,st,z,Y,F,te,U,V){if(H===Ii){m===!0&&(Be(s.BLEND),m=!1);return}if(m===!1&&(it(s.BLEND),m=!0),H!==vp){if(H!==_||V!==I){if((v!==ji||b!==ji)&&(s.blendEquation(s.FUNC_ADD),v=ji,b=ji),V)switch(H){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.ONE,s.ONE);break;case Wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,w=null,E=null,C=null,M.set(0,0,0),T=0,_=H,I=V}return}z=z||Ce,Y=Y||Ie,F=F||st,(Ce!==v||z!==b)&&(s.blendEquationSeparate(le[Ce],le[z]),v=Ce,b=z),(Ie!==y||st!==w||Y!==E||F!==C)&&(s.blendFuncSeparate(Me[Ie],Me[st],Me[Y],Me[F]),y=Ie,w=st,E=Y,C=F),(te.equals(M)===!1||U!==T)&&(s.blendColor(te.r,te.g,te.b,U),M.copy(te),T=U),_=H,I=!1}function Ve(H,Ce){H.side===Jt?Be(s.CULL_FACE):it(s.CULL_FACE);let Ie=H.side===hn;Ce&&(Ie=!Ie),De(Ie),H.blending===Bs&&H.transparent===!1?ce(Ii):ce(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);let st=H.stencilWrite;l.setTest(st),st&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),J(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(H){D!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),D=H)}function R(H){H!==mp?(it(s.CULL_FACE),H!==G&&(H===Vh?s.cullFace(s.BACK):H===gp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),G=H}function A(H){H!==P&&(Q&&s.lineWidth(H),P=H)}function J(H,Ce,Ie){H?(it(s.POLYGON_OFFSET_FILL),(L!==Ce||k!==Ie)&&(s.polygonOffset(Ce,Ie),L=Ce,k=Ie)):Be(s.POLYGON_OFFSET_FILL)}function fe(H){H?it(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function xe(H){H===void 0&&(H=s.TEXTURE0+$-1),ne!==H&&(s.activeTexture(H),ne=H)}function ge(H,Ce,Ie){Ie===void 0&&(ne===null?Ie=s.TEXTURE0+$-1:Ie=ne);let st=oe[Ie];st===void 0&&(st={type:void 0,texture:void 0},oe[Ie]=st),(st.type!==H||st.texture!==Ce)&&(ne!==Ie&&(s.activeTexture(Ie),ne=Ie),s.bindTexture(H,Ce||We[H]),st.type=H,st.texture=Ce)}function Xe(){let H=oe[ne];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(H){he.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),he.copy(H))}function At(H){de.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),de.copy(H))}function Gt(H,Ce){let Ie=u.get(Ce);Ie===void 0&&(Ie=new WeakMap,u.set(Ce,Ie));let st=Ie.get(H);st===void 0&&(st=s.getUniformBlockIndex(Ce,H.name),Ie.set(H,st))}function nt(H,Ce){let st=u.get(Ce).get(H);h.get(Ce)!==st&&(s.uniformBlockBinding(Ce,st,H.__bindingPointIndex),h.set(Ce,st))}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,oe={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,y=null,w=null,b=null,E=null,C=null,M=new Oe(0,0,0),T=0,I=!1,D=null,G=null,P=null,L=null,k=null,he.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:it,disable:Be,bindFramebuffer:me,drawBuffers:O,useProgram:we,setBlending:ce,setMaterial:Ve,setFlipSided:De,setCullFace:R,setLineWidth:A,setPolygonOffset:J,setScissorTest:fe,activeTexture:xe,bindTexture:ge,unbindTexture:Xe,compressedTexImage2D:Pe,compressedTexImage3D:Fe,texImage2D:$e,texImage3D:Ge,updateUBOMapping:Gt,uniformBlockBinding:nt,texStorage2D:pt,texStorage3D:ot,texSubImage2D:ae,texSubImage3D:ht,compressedTexSubImage2D:pe,compressedTexSubImage3D:Et,scissor:ft,viewport:At,reset:Se}}function v_(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,A){return d?new OffscreenCanvas(R,A):Cr("canvas")}function x(R,A,J,fe){let xe=1;if((R.width>fe||R.height>fe)&&(xe=fe/Math.max(R.width,R.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ge=A?Ko:Math.floor,Xe=ge(xe*R.width),Pe=ge(xe*R.height);u===void 0&&(u=p(Xe,Pe));let Fe=J?p(Xe,Pe):u;return Fe.width=Xe,Fe.height=Pe,Fe.getContext("2d").drawImage(R,0,0,Xe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Xe+"x"+Pe+")."),Fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return qc(R.width)&&qc(R.height)}function m(R){return a?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==Kt&&R.minFilter!==jt}function _(R,A){return R.generateMipmaps&&A&&R.minFilter!==Kt&&R.minFilter!==jt}function v(R){s.generateMipmap(R)}function y(R,A,J,fe,xe=!1){if(a===!1)return A;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge=A;if(A===s.RED&&(J===s.FLOAT&&(ge=s.R32F),J===s.HALF_FLOAT&&(ge=s.R16F),J===s.UNSIGNED_BYTE&&(ge=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ge=s.R8UI),J===s.UNSIGNED_SHORT&&(ge=s.R16UI),J===s.UNSIGNED_INT&&(ge=s.R32UI),J===s.BYTE&&(ge=s.R8I),J===s.SHORT&&(ge=s.R16I),J===s.INT&&(ge=s.R32I)),A===s.RG&&(J===s.FLOAT&&(ge=s.RG32F),J===s.HALF_FLOAT&&(ge=s.RG16F),J===s.UNSIGNED_BYTE&&(ge=s.RG8)),A===s.RGBA){let Xe=xe?Wo:Rt.getTransfer(fe);J===s.FLOAT&&(ge=s.RGBA32F),J===s.HALF_FLOAT&&(ge=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ge=Xe===Ot?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(R,A,J){return _(R,J)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==jt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function b(R){return R===Kt||R===Go||R===yr?s.NEAREST:s.LINEAR}function E(R){let A=R.target;A.removeEventListener("dispose",E),M(A),A.isVideoTexture&&h.delete(A)}function C(R){let A=R.target;A.removeEventListener("dispose",C),I(A)}function M(R){let A=n.get(R);if(A.__webglInit===void 0)return;let J=R.source,fe=f.get(J);if(fe){let xe=fe[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(R),Object.keys(fe).length===0&&f.delete(J)}n.remove(R)}function T(R){let A=n.get(R);s.deleteTexture(A.__webglTexture);let J=R.source,fe=f.get(J);delete fe[A.__cacheKey],o.memory.textures--}function I(R){let A=R.texture,J=n.get(R),fe=n.get(A);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(J.__webglFramebuffer[xe]))for(let ge=0;ge<J.__webglFramebuffer[xe].length;ge++)s.deleteFramebuffer(J.__webglFramebuffer[xe][ge]);else s.deleteFramebuffer(J.__webglFramebuffer[xe]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[xe])}else{if(Array.isArray(J.__webglFramebuffer))for(let xe=0;xe<J.__webglFramebuffer.length;xe++)s.deleteFramebuffer(J.__webglFramebuffer[xe]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let xe=0;xe<J.__webglColorRenderbuffer.length;xe++)J.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[xe]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let xe=0,ge=A.length;xe<ge;xe++){let Xe=n.get(A[xe]);Xe.__webglTexture&&(s.deleteTexture(Xe.__webglTexture),o.memory.textures--),n.remove(A[xe])}n.remove(A),n.remove(R)}let D=0;function G(){D=0}function P(){let R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function L(R){let A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function k(R,A){let J=n.get(R);if(R.isVideoTexture&&Ve(R),R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){let fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(J,R,A);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function $(R,A){let J=n.get(R);if(R.version>0&&J.__version!==R.version){he(J,R,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function Q(R,A){let J=n.get(R);if(R.version>0&&J.__version!==R.version){he(J,R,A);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function K(R,A){let J=n.get(R);if(R.version>0&&J.__version!==R.version){de(J,R,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}let Z={[ts]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[Rr]:s.MIRRORED_REPEAT},ne={[Kt]:s.NEAREST,[Go]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Nl]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},oe={[hm]:s.NEVER,[gm]:s.ALWAYS,[um]:s.LESS,[Bf]:s.LEQUAL,[fm]:s.EQUAL,[mm]:s.GEQUAL,[dm]:s.GREATER,[pm]:s.NOTEQUAL};function X(R,A,J){if(J?(s.texParameteri(R,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ne[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ne[A.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==In||A.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Kt&&A.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Kt||A.minFilter!==yr&&A.minFilter!==Vn||A.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ns&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ee(R,A){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",E));let fe=A.source,xe=f.get(fe);xe===void 0&&(xe={},f.set(fe,xe));let ge=L(A);if(ge!==R.__cacheKey){xe[ge]===void 0&&(xe[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),xe[ge].usedTimes++;let Xe=xe[R.__cacheKey];Xe!==void 0&&(xe[R.__cacheKey].usedTimes--,Xe.usedTimes===0&&T(A)),R.__cacheKey=ge,R.__webglTexture=xe[ge].texture}return J}function he(R,A,J){let fe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=s.TEXTURE_3D);let xe=ee(R,A),ge=A.source;t.bindTexture(fe,R.__webglTexture,s.TEXTURE0+J);let Xe=n.get(ge);if(ge.version!==Xe.__version||xe===!0){t.activeTexture(s.TEXTURE0+J);let Pe=Rt.getPrimaries(Rt.workingColorSpace),Fe=A.colorSpace===yn?null:Rt.getPrimaries(A.colorSpace),ae=A.colorSpace===yn||Pe===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ht=m(A)&&g(A.image)===!1,pe=x(A.image,ht,!1,i.maxTextureSize);pe=De(A,pe);let Et=g(pe)||a,pt=r.convert(A.format,A.colorSpace),ot=r.convert(A.type),$e=y(A.internalFormat,pt,ot,A.colorSpace,A.isVideoTexture);X(fe,A,Et);let Ge,ft=A.mipmaps,At=a&&A.isVideoTexture!==!0&&$e!==zf,Gt=Xe.__version===void 0||xe===!0,nt=w(A,pe,Et);if(A.isDepthTexture)$e=s.DEPTH_COMPONENT,a?A.type===xi?$e=s.DEPTH_COMPONENT32F:A.type===Pi?$e=s.DEPTH_COMPONENT24:A.type===$i?$e=s.DEPTH24_STENCIL8:$e=s.DEPTH_COMPONENT16:A.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Qi&&$e===s.DEPTH_COMPONENT&&A.type!==Dl&&A.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Pi,ot=r.convert(A.type)),A.format===Ws&&$e===s.DEPTH_COMPONENT&&($e=s.DEPTH_STENCIL,A.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=$i,ot=r.convert(A.type))),Gt&&(At?t.texStorage2D(s.TEXTURE_2D,1,$e,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,$e,pe.width,pe.height,0,pt,ot,null));else if(A.isDataTexture)if(ft.length>0&&Et){At&&Gt&&t.texStorage2D(s.TEXTURE_2D,nt,$e,ft[0].width,ft[0].height);for(let Se=0,H=ft.length;Se<H;Se++)Ge=ft[Se],At?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ge.width,Ge.height,pt,ot,Ge.data):t.texImage2D(s.TEXTURE_2D,Se,$e,Ge.width,Ge.height,0,pt,ot,Ge.data);A.generateMipmaps=!1}else At?(Gt&&t.texStorage2D(s.TEXTURE_2D,nt,$e,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,pt,ot,pe.data)):t.texImage2D(s.TEXTURE_2D,0,$e,pe.width,pe.height,0,pt,ot,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){At&&Gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,$e,ft[0].width,ft[0].height,pe.depth);for(let Se=0,H=ft.length;Se<H;Se++)Ge=ft[Se],A.format!==Hn?pt!==null?At?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ge.width,Ge.height,pe.depth,pt,Ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,$e,Ge.width,Ge.height,pe.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ge.width,Ge.height,pe.depth,pt,ot,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,$e,Ge.width,Ge.height,pe.depth,0,pt,ot,Ge.data)}else{At&&Gt&&t.texStorage2D(s.TEXTURE_2D,nt,$e,ft[0].width,ft[0].height);for(let Se=0,H=ft.length;Se<H;Se++)Ge=ft[Se],A.format!==Hn?pt!==null?At?t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ge.width,Ge.height,pt,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,$e,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ge.width,Ge.height,pt,ot,Ge.data):t.texImage2D(s.TEXTURE_2D,Se,$e,Ge.width,Ge.height,0,pt,ot,Ge.data)}else if(A.isDataArrayTexture)At?(Gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,$e,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,pt,ot,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,pe.width,pe.height,pe.depth,0,pt,ot,pe.data);else if(A.isData3DTexture)At?(Gt&&t.texStorage3D(s.TEXTURE_3D,nt,$e,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,pt,ot,pe.data)):t.texImage3D(s.TEXTURE_3D,0,$e,pe.width,pe.height,pe.depth,0,pt,ot,pe.data);else if(A.isFramebufferTexture){if(Gt)if(At)t.texStorage2D(s.TEXTURE_2D,nt,$e,pe.width,pe.height);else{let Se=pe.width,H=pe.height;for(let Ce=0;Ce<nt;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,$e,Se,H,0,pt,ot,null),Se>>=1,H>>=1}}else if(ft.length>0&&Et){At&&Gt&&t.texStorage2D(s.TEXTURE_2D,nt,$e,ft[0].width,ft[0].height);for(let Se=0,H=ft.length;Se<H;Se++)Ge=ft[Se],At?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,pt,ot,Ge):t.texImage2D(s.TEXTURE_2D,Se,$e,pt,ot,Ge);A.generateMipmaps=!1}else At?(Gt&&t.texStorage2D(s.TEXTURE_2D,nt,$e,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,ot,pe)):t.texImage2D(s.TEXTURE_2D,0,$e,pt,ot,pe);_(A,Et)&&v(fe),Xe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function de(R,A,J){if(A.image.length!==6)return;let fe=ee(R,A),xe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+J);let ge=n.get(xe);if(xe.version!==ge.__version||fe===!0){t.activeTexture(s.TEXTURE0+J);let Xe=Rt.getPrimaries(Rt.workingColorSpace),Pe=A.colorSpace===yn?null:Rt.getPrimaries(A.colorSpace),Fe=A.colorSpace===yn||Xe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ae=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Se=0;Se<6;Se++)!ae&&!ht?pe[Se]=x(A.image[Se],!1,!0,i.maxCubemapSize):pe[Se]=ht?A.image[Se].image:A.image[Se],pe[Se]=De(A,pe[Se]);let Et=pe[0],pt=g(Et)||a,ot=r.convert(A.format,A.colorSpace),$e=r.convert(A.type),Ge=y(A.internalFormat,ot,$e,A.colorSpace),ft=a&&A.isVideoTexture!==!0,At=ge.__version===void 0||fe===!0,Gt=w(A,Et,pt);X(s.TEXTURE_CUBE_MAP,A,pt);let nt;if(ae){ft&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Ge,Et.width,Et.height);for(let Se=0;Se<6;Se++){nt=pe[Se].mipmaps;for(let H=0;H<nt.length;H++){let Ce=nt[H];A.format!==Hn?ot!==null?ft?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H,0,0,Ce.width,Ce.height,ot,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H,Ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H,0,0,Ce.width,Ce.height,ot,$e,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H,Ge,Ce.width,Ce.height,0,ot,$e,Ce.data)}}}else{nt=A.mipmaps,ft&&At&&(nt.length>0&&Gt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Ge,pe[0].width,pe[0].height));for(let Se=0;Se<6;Se++)if(ht){ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe[Se].width,pe[Se].height,ot,$e,pe[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ge,pe[Se].width,pe[Se].height,0,ot,$e,pe[Se].data);for(let H=0;H<nt.length;H++){let Ie=nt[H].image[Se].image;ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H+1,0,0,Ie.width,Ie.height,ot,$e,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H+1,Ge,Ie.width,Ie.height,0,ot,$e,Ie.data)}}else{ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ot,$e,pe[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ge,ot,$e,pe[Se]);for(let H=0;H<nt.length;H++){let Ce=nt[H];ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H+1,0,0,ot,$e,Ce.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,H+1,Ge,ot,$e,Ce.image[Se])}}}_(A,pt)&&v(s.TEXTURE_CUBE_MAP),ge.__version=xe.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Ae(R,A,J,fe,xe,ge){let Xe=r.convert(J.format,J.colorSpace),Pe=r.convert(J.type),Fe=y(J.internalFormat,Xe,Pe,J.colorSpace);if(!n.get(A).__hasExternalTextures){let ht=Math.max(1,A.width>>ge),pe=Math.max(1,A.height>>ge);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,ge,Fe,ht,pe,A.depth,0,Xe,Pe,null):t.texImage2D(xe,ge,Fe,ht,pe,0,Xe,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ce(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,xe,n.get(J).__webglTexture,0,Me(A)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,xe,n.get(J).__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(R,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let fe=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||ce(A)){let xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===xi?fe=s.DEPTH_COMPONENT32F:xe.type===Pi&&(fe=s.DEPTH_COMPONENT24));let ge=Me(A);ce(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,fe,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,fe,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){let fe=Me(A);J&&ce(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,A.width,A.height):ce(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let fe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<fe.length;xe++){let ge=fe[xe],Xe=r.convert(ge.format,ge.colorSpace),Pe=r.convert(ge.type),Fe=y(ge.internalFormat,Xe,Pe,ge.colorSpace),ae=Me(A);J&&ce(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,Fe,A.width,A.height):ce(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let fe=n.get(A.depthTexture).__webglTexture,xe=Me(A);if(A.depthTexture.format===Qi)ce(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(A.depthTexture.format===Ws)ce(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Be(R){let A=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");it(A.__webglFramebuffer,R)}else if(J){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]=s.createRenderbuffer(),We(A.__webglDepthbuffer[fe],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),We(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(R,A,J){let fe=n.get(R);A!==void 0&&Ae(fe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Be(R)}function O(R){let A=R.texture,J=n.get(R),fe=n.get(A);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=A.version,o.memory.textures++);let xe=R.isWebGLCubeRenderTarget===!0,ge=R.isWebGLMultipleRenderTargets===!0,Xe=g(R)||a;if(xe){J.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)J.__webglFramebuffer[Pe][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)J.__webglFramebuffer[Pe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ge)if(i.drawBuffers){let Pe=R.texture;for(let Fe=0,ae=Pe.length;Fe<ae;Fe++){let ht=n.get(Pe[Fe]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ce(R)===!1){let Pe=ge?A:[A];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Pe.length;Fe++){let ae=Pe[Fe];J.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Fe]);let ht=r.convert(ae.format,ae.colorSpace),pe=r.convert(ae.type),Et=y(ae.internalFormat,ht,pe,ae.colorSpace,R.isXRRenderTarget===!0),pt=Me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,J.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),We(J.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),X(s.TEXTURE_CUBE_MAP,A,Xe);for(let Pe=0;Pe<6;Pe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ae(J.__webglFramebuffer[Pe][Fe],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else Ae(J.__webglFramebuffer[Pe],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);_(A,Xe)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Pe=R.texture;for(let Fe=0,ae=Pe.length;Fe<ae;Fe++){let ht=Pe[Fe],pe=n.get(ht);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),X(s.TEXTURE_2D,ht,Xe),Ae(J.__webglFramebuffer,R,ht,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,0),_(ht,Xe)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Pe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,fe.__webglTexture),X(Pe,A,Xe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ae(J.__webglFramebuffer[Fe],R,A,s.COLOR_ATTACHMENT0,Pe,Fe);else Ae(J.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,Pe,0);_(A,Xe)&&v(Pe),t.unbindTexture()}R.depthBuffer&&Be(R)}function we(R){let A=g(R)||a,J=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,xe=J.length;fe<xe;fe++){let ge=J[fe];if(_(ge,A)){let Xe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pe=n.get(ge).__webglTexture;t.bindTexture(Xe,Pe),v(Xe),t.unbindTexture()}}}function le(R){if(a&&R.samples>0&&ce(R)===!1){let A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],J=R.width,fe=R.height,xe=s.COLOR_BUFFER_BIT,ge=[],Xe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(R),Fe=R.isWebGLMultipleRenderTargets===!0;if(Fe)for(let ae=0;ae<A.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ae=0;ae<A.length;ae++){ge.push(s.COLOR_ATTACHMENT0+ae),R.depthBuffer&&ge.push(Xe);let ht=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(ht===!1&&(R.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ae]),ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Xe])),Fe){let pe=n.get(A[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,J,fe,0,0,J,fe,xe,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let ae=0;ae<A.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ae]);let ht=n.get(A[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function Me(R){return Math.min(i.maxSamples,R.samples)}function ce(R){let A=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(R){let A=o.render.frame;h.get(R)!==A&&(h.set(R,A),R.update())}function De(R,A){let J=R.colorSpace,fe=R.format,xe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Xc||J!==sn&&J!==yn&&(Rt.getTransfer(J)===Ot?a===!1?e.has("EXT_sRGB")===!0&&fe===Hn?(R.format=Xc,R.minFilter=jt,R.generateMipmaps=!1):A=jo.sRGBToLinear(A):(fe!==Hn||xe!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=P,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=me,this.setupRenderTarget=O,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ce}function __(s,e,t){let n=t.isWebGL2;function i(r,o=yn){let a,c=Rt.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===If)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jp)return s.BYTE;if(r===Jp)return s.SHORT;if(r===Dl)return s.UNSIGNED_SHORT;if(r===Pf)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===xi)return s.FLOAT;if(r===ns)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$p)return s.ALPHA;if(r===Hn)return s.RGBA;if(r===Qp)return s.LUMINANCE;if(r===em)return s.LUMINANCE_ALPHA;if(r===Qi)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===Xc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tm)return s.RED;if(r===Nf)return s.RED_INTEGER;if(r===nm)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===Uf)return s.RGBA_INTEGER;if(r===sc||r===rc||r===oc||r===ac)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===jh||r===Jh||r===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qh)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===iu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===su)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ru)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ou)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pu)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cc||r===mu||r===gu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cc)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===im||r===xu||r===vu||r===_u)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===cc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_u)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var rl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},y_={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ol=class extends yi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=t.getContextAttributes(),g=null,m=null,_=[],v=[],y=new _e,w=null,b=new nn;b.layers.enable(1),b.viewport=new Tt;let E=new nn;E.layers.enable(2),E.viewport=new Tt;let C=[b,E],M=new rl;M.layers.enable(1),M.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new wr,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new wr,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new wr,_[X]=ee),ee.getHandSpace()};function D(X){let ee=v.indexOf(X.inputSource);if(ee===-1)return;let he=_[ee];he!==void 0&&(he.update(X.inputSource,X.frame,l||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",P);for(let X=0;X<_.length;X++){let ee=v[X];ee!==null&&(v[X]=null,_[X].disconnect(ee))}T=null,I=null,e.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",G),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new $n(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,he=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?Ws:Qi,he=x.stencil?$i:Pi);let Ae={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new $n(f.textureWidth,f.textureHeight,{format:Hn,type:ii,depthTexture:new ra(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let We=e.properties.get(m);We.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let ee=0;ee<X.removed.length;ee++){let he=X.removed[ee],de=v.indexOf(he);de>=0&&(v[de]=null,_[de].disconnect(he))}for(let ee=0;ee<X.added.length;ee++){let he=X.added[ee],de=v.indexOf(he);if(de===-1){for(let We=0;We<_.length;We++)if(We>=v.length){v.push(he),de=We;break}else if(v[We]===null){v[We]=he,de=We;break}if(de===-1)break}let Ae=_[de];Ae&&Ae.connect(he)}}let L=new N,k=new N;function $(X,ee,he){L.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(he.matrixWorld);let de=L.distanceTo(k),Ae=ee.projectionMatrix.elements,We=he.projectionMatrix.elements,it=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),me=(Ae[9]+1)/Ae[5],O=(Ae[9]-1)/Ae[5],we=(Ae[8]-1)/Ae[0],le=(We[8]+1)/We[0],Me=it*we,ce=it*le,Ve=de/(-we+le),De=Ve*-we;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let R=it+Ve,A=Be+Ve,J=Me-De,fe=ce+(de-De),xe=me*Be/A*R,ge=O*Be/A*R;X.projectionMatrix.makePerspective(J,fe,xe,ge,R,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Q(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=E.near=b.near=X.near,M.far=E.far=b.far=X.far,(T!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,I=M.far);let ee=X.parent,he=M.cameras;Q(M,ee);for(let de=0;de<he.length;de++)Q(he[de],ee);he.length===2?$(M,b,E):M.projectionMatrix.copy(b.projectionMatrix),K(X,M,ee)};function K(X,ee,he){he===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let Z=null;function ne(X,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){let he=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let de=!1;he.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ae=0;Ae<he.length;Ae++){let We=he[Ae],it=null;if(d!==null)it=d.getViewport(We);else{let me=u.getViewSubImage(f,We);it=me.viewport,Ae===0&&(e.setRenderTargetTextures(m,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(m))}let Be=C[Ae];Be===void 0&&(Be=new nn,Be.layers.enable(Ae),Be.viewport=new Tt,C[Ae]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(it.x,it.y,it.width,it.height),Ae===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(Be)}}for(let he=0;he<_.length;he++){let de=v[he],Ae=_[he];de!==null&&Ae!==void 0&&Ae.update(de,ee,l||o)}Z&&Z(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let oe=new Wf;oe.setAnimationLoop(ne),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}};function M_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Vf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b_(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(p(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));let w=v.program;n.updateUBOMapping(_,w);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let v=u();_.__bindingPointIndex=v;let y=s.createBuffer(),w=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){let C=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,T=C.length;M<T;M++){let I=C[M];if(d(I,b,M,w)===!0){let D=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],P=0;for(let L=0;L<G.length;L++){let k=G[L],$=x(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,D+P,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y,w){let b=_.value,E=v+"_"+y;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{let C=w[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return w[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function p(_){let v=_.uniforms,y=0,w=16;for(let E=0,C=v.length;E<C;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,I=M.length;T<I;T++){let D=M[T],G=Array.isArray(D.value)?D.value:[D.value];for(let P=0,L=G.length;P<L;P++){let k=G[P],$=x(k),Q=y%w;Q!==0&&w-Q<$.boundary&&(y+=w-Q),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=$.storage}}}let b=y%w;return b>0&&(y+=w-b),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var Lr=class{constructor(e={}){let{canvas:t=Lm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let v=this,y=!1,w=0,b=0,E=null,C=-1,M=null,T=new Tt,I=new Tt,D=null,G=new Oe(0),P=0,L=t.width,k=t.height,$=1,Q=null,K=null,Z=new Tt(0,0,L,k),ne=new Tt(0,0,L,k),oe=!1,X=new Pr,ee=!1,he=!1,de=null,Ae=new at,We=new _e,it=new N,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return E===null?$:1}let O=n;function we(S,B){for(let W=0;W<S.length;W++){let j=S[W],q=t.getContext(j,B);if(q!==null)return q}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),O===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),O=we(B,S),O===null)throw we(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,Me,ce,Ve,De,R,A,J,fe,xe,ge,Xe,Pe,Fe,ae,ht,pe,Et,pt,ot,$e,Ge,ft,At;function Gt(){le=new Hx(O),Me=new Ux(O,le,e),le.init(Me),Ge=new __(O,le,Me),ce=new x_(O,le,Me),Ve=new Wx(O),De=new r_,R=new v_(O,le,ce,De,Me,Ge,Ve),A=new Fx(v),J=new kx(v),fe=new $m(O,Me),ft=new Nx(O,le,fe,Me),xe=new Gx(O,fe,Ve,ft),ge=new Zx(O,xe,fe,Ve),pt=new Yx(O,Me,R),ht=new zx(De),Xe=new s_(v,A,J,le,Me,ft,ht),Pe=new M_(v,De),Fe=new a_,ae=new d_(le,Me),Et=new Ix(v,A,J,ce,ge,f,c),pe=new g_(v,ge,Me),At=new b_(O,Ve,Me,ce),ot=new Dx(O,le,Ve,Me),$e=new Vx(O,le,Ve,Me),Ve.programs=Xe.programs,v.capabilities=Me,v.extensions=le,v.properties=De,v.renderLists=Fe,v.shadowMap=pe,v.state=ce,v.info=Ve}Gt();let nt=new ol(v,O);this.xr=nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(L,k,!1))},this.getSize=function(S){return S.set(L,k)},this.setSize=function(S,B,W=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=S,k=B,t.width=Math.floor(S*$),t.height=Math.floor(B*$),W===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(L*$,k*$).floor()},this.setDrawingBufferSize=function(S,B,W){L=S,k=B,$=W,t.width=Math.floor(S*W),t.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,B,W,j){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,B,W,j),ce.viewport(T.copy(Z).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,B,W,j){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,B,W,j),ce.scissor(I.copy(ne).multiplyScalar($).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){ce.setScissorTest(oe=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(S=!0,B=!0,W=!0){let j=0;if(S){let q=!1;if(E!==null){let ve=E.texture.format;q=ve===Uf||ve===Df||ve===Nf}if(q){let ve=E.texture.type,Ne=ve===ii||ve===Pi||ve===Dl||ve===$i||ve===Lf||ve===If,ze=Et.getClearColor(),Ye=Et.getClearAlpha(),je=ze.r,ye=ze.g,Ue=ze.b;Ne?(d[0]=je,d[1]=ye,d[2]=Ue,d[3]=Ye,O.clearBufferuiv(O.COLOR,0,d)):(p[0]=je,p[1]=ye,p[2]=Ue,p[3]=Ye,O.clearBufferiv(O.COLOR,0,p))}else j|=O.COLOR_BUFFER_BIT}B&&(j|=O.DEPTH_BUFFER_BIT),W&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Fe.dispose(),ae.dispose(),De.dispose(),A.dispose(),J.dispose(),ge.dispose(),ft.dispose(),At.dispose(),Xe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",U),nt.removeEventListener("sessionend",V),de&&(de.dispose(),de=null),ie.stop()};function Se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let S=Ve.autoReset,B=pe.enabled,W=pe.autoUpdate,j=pe.needsUpdate,q=pe.type;Gt(),Ve.autoReset=S,pe.enabled=B,pe.autoUpdate=W,pe.needsUpdate=j,pe.type=q}function Ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ie(S){let B=S.target;B.removeEventListener("dispose",Ie),st(B)}function st(S){z(S),De.remove(S)}function z(S){let B=De.get(S).programs;B!==void 0&&(B.forEach(function(W){Xe.releaseProgram(W)}),S.isShaderMaterial&&Xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,j,q,ve){B===null&&(B=Be);let Ne=q.isMesh&&q.matrixWorld.determinant()<0,ze=St(S,B,W,j,q);ce.setMaterial(j,Ne);let Ye=W.index,je=1;if(j.wireframe===!0){if(Ye=xe.getWireframeAttribute(W),Ye===void 0)return;je=2}let ye=W.drawRange,Ue=W.attributes.position,Ze=ye.start*je,ut=(ye.start+ye.count)*je;ve!==null&&(Ze=Math.max(Ze,ve.start*je),ut=Math.min(ut,(ve.start+ve.count)*je)),Ye!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,Ye.count)):Ue!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,Ue.count));let wt=ut-Ze;if(wt<0||wt===1/0)return;ft.setup(q,j,ze,W,Ye);let On,Pt=ot;if(Ye!==null&&(On=fe.get(Ye),Pt=$e,Pt.setIndex(On)),q.isMesh)j.wireframe===!0?(ce.setLineWidth(j.wireframeLinewidth*me()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(q.isLine){let _t=j.linewidth;_t===void 0&&(_t=1),ce.setLineWidth(_t*me()),q.isLineSegments?Pt.setMode(O.LINES):q.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else q.isPoints?Pt.setMode(O.POINTS):q.isSprite&&Pt.setMode(O.TRIANGLES);if(q.isBatchedMesh)Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Pt.renderInstances(Ze,wt,q.count);else if(W.isInstancedBufferGeometry){let _t=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ec=Math.min(W.instanceCount,_t);Pt.renderInstances(Ze,wt,ec)}else Pt.render(Ze,wt)};function Y(S,B,W){S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,Qe(S,B,W),S.side=si,S.needsUpdate=!0,Qe(S,B,W),S.side=Jt):Qe(S,B,W)}this.compile=function(S,B,W=null){W===null&&(W=S),g=ae.get(W),g.init(),_.push(g),W.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),S!==W&&S.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(v._useLegacyLights);let j=new Set;return S.traverse(function(q){let ve=q.material;if(ve)if(Array.isArray(ve))for(let Ne=0;Ne<ve.length;Ne++){let ze=ve[Ne];Y(ze,W,q),j.add(ze)}else Y(ve,W,q),j.add(ve)}),_.pop(),g=null,j},this.compileAsync=function(S,B,W=null){let j=this.compile(S,B,W);return new Promise(q=>{function ve(){if(j.forEach(function(Ne){De.get(Ne).currentProgram.isReady()&&j.delete(Ne)}),j.size===0){q(S);return}setTimeout(ve,10)}le.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let F=null;function te(S){F&&F(S)}function U(){ie.stop()}function V(){ie.start()}let ie=new Wf;ie.setAnimationLoop(te),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(S){F=S,nt.setAnimationLoop(S),S===null?ie.stop():ie.start()},nt.addEventListener("sessionstart",U),nt.addEventListener("sessionend",V),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,E),g=ae.get(S,_.length),g.init(),_.push(g),Ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(Ae),he=this.localClippingEnabled,ee=ht.init(this.clippingPlanes,he),x=Fe.get(S,m.length),x.init(),m.push(x),ue(S,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Q,K),this.info.render.frame++,ee===!0&&ht.beginShadows();let W=g.state.shadowsArray;if(pe.render(W,S,B),ee===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(x,S),g.setupLights(v._useLegacyLights),B.isArrayCamera){let j=B.cameras;for(let q=0,ve=j.length;q<ve;q++){let Ne=j[q];be(x,S,Ne,Ne.viewport)}}else be(x,S,B);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(v,S,B),ft.resetDefaultState(),C=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ue(S,B,W,j){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){j&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ae);let Ne=ge.update(S),ze=S.material;ze.visible&&x.push(S,Ne,ze,W,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let Ne=ge.update(S),ze=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),it.copy(Ne.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(Ae)),Array.isArray(ze)){let Ye=Ne.groups;for(let je=0,ye=Ye.length;je<ye;je++){let Ue=Ye[je],Ze=ze[Ue.materialIndex];Ze&&Ze.visible&&x.push(S,Ne,Ze,W,it.z,Ue)}}else ze.visible&&x.push(S,Ne,ze,W,it.z,null)}}let ve=S.children;for(let Ne=0,ze=ve.length;Ne<ze;Ne++)ue(ve[Ne],B,W,j)}function be(S,B,W,j){let q=S.opaque,ve=S.transmissive,Ne=S.transparent;g.setupLightsView(W),ee===!0&&ht.setGlobalState(v.clippingPlanes,W),ve.length>0&&ke(q,ve,B,W),j&&ce.viewport(T.copy(j)),q.length>0&&Ee(q,B,W),ve.length>0&&Ee(ve,B,W),Ne.length>0&&Ee(Ne,B,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ke(S,B,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ve=Me.isWebGL2;de===null&&(de=new $n(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?ns:ii,minFilter:Vn,samples:ve?4:0})),v.getDrawingBufferSize(We),ve?de.setSize(We.x,We.y):de.setSize(Ko(We.x),Ko(We.y));let Ne=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(G),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let ze=v.toneMapping;v.toneMapping=Ni,Ee(S,W,j),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de);let Ye=!1;for(let je=0,ye=B.length;je<ye;je++){let Ue=B[je],Ze=Ue.object,ut=Ue.geometry,wt=Ue.material,On=Ue.group;if(wt.side===Jt&&Ze.layers.test(j.layers)){let Pt=wt.side;wt.side=hn,wt.needsUpdate=!0,Ke(Ze,W,j,ut,wt,On),wt.side=Pt,wt.needsUpdate=!0,Ye=!0}}Ye===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de)),v.setRenderTarget(Ne),v.setClearColor(G,P),v.toneMapping=ze}function Ee(S,B,W){let j=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ve=S.length;q<ve;q++){let Ne=S[q],ze=Ne.object,Ye=Ne.geometry,je=j===null?Ne.material:j,ye=Ne.group;ze.layers.test(W.layers)&&Ke(ze,B,W,Ye,je,ye)}}function Ke(S,B,W,j,q,ve){S.onBeforeRender(v,B,W,j,q,ve),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(v,B,W,j,S,ve),q.transparent===!0&&q.side===Jt&&q.forceSinglePass===!1?(q.side=hn,q.needsUpdate=!0,v.renderBufferDirect(W,B,j,q,S,ve),q.side=si,q.needsUpdate=!0,v.renderBufferDirect(W,B,j,q,S,ve),q.side=Jt):v.renderBufferDirect(W,B,j,q,S,ve),S.onAfterRender(v,B,W,j,q,ve)}function Qe(S,B,W){B.isScene!==!0&&(B=Be);let j=De.get(S),q=g.state.lights,ve=g.state.shadowsArray,Ne=q.state.version,ze=Xe.getParameters(S,q.state,ve,B,W),Ye=Xe.getProgramCacheKey(ze),je=j.programs;j.environment=S.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(S.isMeshStandardMaterial?J:A).get(S.envMap||j.environment),je===void 0&&(S.addEventListener("dispose",Ie),je=new Map,j.programs=je);let ye=je.get(Ye);if(ye!==void 0){if(j.currentProgram===ye&&j.lightsStateVersion===Ne)return lt(S,ze),ye}else ze.uniforms=Xe.getUniforms(S),S.onBuild(W,ze,v),S.onBeforeCompile(ze,v),ye=Xe.acquireProgram(ze,Ye),je.set(Ye,ye),j.uniforms=ze.uniforms;let Ue=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=ht.uniform),lt(S,ze),j.needsLights=Te(S),j.lightsStateVersion=Ne,j.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=ye,j.uniformsList=null,ye}function mt(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Hs.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function lt(S,B){let W=De.get(S);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function St(S,B,W,j,q){B.isScene!==!0&&(B=Be),R.resetTextureUnits();let ve=B.fog,Ne=j.isMeshStandardMaterial?B.environment:null,ze=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:sn,Ye=(j.isMeshStandardMaterial?J:A).get(j.envMap||Ne),je=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ye=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color,wt=Ni;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(wt=v.toneMapping);let On=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pt=On!==void 0?On.length:0,_t=De.get(j),ec=g.state.lights;if(ee===!0&&(he===!0||S!==M)){let Bn=S===M&&j.id===C;ht.setState(j,S,Bn)}let Yt=!1;j.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==ec.state.version||_t.outputColorSpace!==ze||q.isBatchedMesh&&_t.batching===!1||!q.isBatchedMesh&&_t.batching===!0||q.isInstancedMesh&&_t.instancing===!1||!q.isInstancedMesh&&_t.instancing===!0||q.isSkinnedMesh&&_t.skinning===!1||!q.isSkinnedMesh&&_t.skinning===!0||q.isInstancedMesh&&_t.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&_t.instancingColor===!1&&q.instanceColor!==null||_t.envMap!==Ye||j.fog===!0&&_t.fog!==ve||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==ht.numPlanes||_t.numIntersection!==ht.numIntersection)||_t.vertexAlphas!==je||_t.vertexTangents!==ye||_t.morphTargets!==Ue||_t.morphNormals!==Ze||_t.morphColors!==ut||_t.toneMapping!==wt||Me.isWebGL2===!0&&_t.morphTargetsCount!==Pt)&&(Yt=!0):(Yt=!0,_t.__version=j.version);let Vi=_t.currentProgram;Yt===!0&&(Vi=Qe(j,B,q));let kh=!1,fr=!1,tc=!1,pn=Vi.getUniforms(),Wi=_t.uniforms;if(ce.useProgram(Vi.program)&&(kh=!0,fr=!0,tc=!0),j.id!==C&&(C=j.id,fr=!0),kh||M!==S){pn.setValue(O,"projectionMatrix",S.projectionMatrix),pn.setValue(O,"viewMatrix",S.matrixWorldInverse);let Bn=pn.map.cameraPosition;Bn!==void 0&&Bn.setValue(O,it.setFromMatrixPosition(S.matrixWorld)),Me.logarithmicDepthBuffer&&pn.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pn.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,fr=!0,tc=!0)}if(q.isSkinnedMesh){pn.setOptional(O,q,"bindMatrix"),pn.setOptional(O,q,"bindMatrixInverse");let Bn=q.skeleton;Bn&&(Me.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),pn.setValue(O,"boneTexture",Bn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(pn.setOptional(O,q,"batchingTexture"),pn.setValue(O,"batchingTexture",q._matricesTexture,R));let nc=W.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&Me.isWebGL2===!0)&&pt.update(q,W,Vi),(fr||_t.receiveShadow!==q.receiveShadow)&&(_t.receiveShadow=q.receiveShadow,pn.setValue(O,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wi.envMap.value=Ye,Wi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),fr&&(pn.setValue(O,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&qe(Wi,tc),ve&&j.fog===!0&&Pe.refreshFogUniforms(Wi,ve),Pe.refreshMaterialUniforms(Wi,j,$,k,de),Hs.upload(O,mt(_t),Wi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Hs.upload(O,mt(_t),Wi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pn.setValue(O,"center",q.center),pn.setValue(O,"modelViewMatrix",q.modelViewMatrix),pn.setValue(O,"normalMatrix",q.normalMatrix),pn.setValue(O,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Bn=j.uniformsGroups;for(let ic=0,op=Bn.length;ic<op;ic++)if(Me.isWebGL2){let Hh=Bn[ic];At.update(Hh,Vi),At.bind(Hh,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function qe(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Te(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,B,W){De.get(S.texture).__webglTexture=B,De.get(S.depthTexture).__webglTexture=W;let j=De.get(S);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){let W=De.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){E=S,w=B,b=W;let j=!0,q=null,ve=!1,Ne=!1;if(S){let Ye=De.get(S);Ye.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):Ye.__webglFramebuffer===void 0?R.setupRenderTarget(S):Ye.__hasExternalTextures&&R.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);let je=S.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);let ye=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[B])?q=ye[B][W]:q=ye[B],ve=!0):Me.isWebGL2&&S.samples>0&&R.useMultisampledRTT(S)===!1?q=De.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?q=ye[W]:q=ye,T.copy(S.viewport),I.copy(S.scissor),D=S.scissorTest}else T.copy(Z).multiplyScalar($).floor(),I.copy(ne).multiplyScalar($).floor(),D=oe;if(ce.bindFramebuffer(O.FRAMEBUFFER,q)&&Me.drawBuffers&&j&&ce.drawBuffers(S,q),ce.viewport(T),ce.scissor(I),ce.setScissorTest(D),ve){let Ye=De.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ye.__webglTexture,W)}else if(Ne){let Ye=De.get(S.texture),je=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,W||0,je)}C=-1},this.readRenderTargetPixels=function(S,B,W,j,q,ve,Ne){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){ce.bindFramebuffer(O.FRAMEBUFFER,ze);try{let Ye=S.texture,je=Ye.format,ye=Ye.type;if(je!==Hn&&Ge.convert(je)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=ye===ns&&(le.has("EXT_color_buffer_half_float")||Me.isWebGL2&&le.has("EXT_color_buffer_float"));if(ye!==ii&&Ge.convert(ye)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===xi&&(Me.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-j&&W>=0&&W<=S.height-q&&O.readPixels(B,W,j,q,Ge.convert(je),Ge.convert(ye),ve)}finally{let Ye=E!==null?De.get(E).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(S,B,W=0){let j=Math.pow(2,-W),q=Math.floor(B.image.width*j),ve=Math.floor(B.image.height*j);R.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,S.x,S.y,q,ve),ce.unbindTexture()},this.copyTextureToTexture=function(S,B,W,j=0){let q=B.image.width,ve=B.image.height,Ne=Ge.convert(W.format),ze=Ge.convert(W.type);R.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,S.x,S.y,q,ve,Ne,ze,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Ne,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,S.x,S.y,Ne,ze,B.image),j===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W,j,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=S.max.x-S.min.x+1,Ne=S.max.y-S.min.y+1,ze=S.max.z-S.min.z+1,Ye=Ge.convert(j.format),je=Ge.convert(j.type),ye;if(j.isData3DTexture)R.setTexture3D(j,0),ye=O.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),ye=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);let Ue=O.getParameter(O.UNPACK_ROW_LENGTH),Ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ut=O.getParameter(O.UNPACK_SKIP_PIXELS),wt=O.getParameter(O.UNPACK_SKIP_ROWS),On=O.getParameter(O.UNPACK_SKIP_IMAGES),Pt=W.isCompressedTexture?W.mipmaps[q]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(ye,q,B.x,B.y,B.z,ve,Ne,ze,Ye,je,Pt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ye,q,B.x,B.y,B.z,ve,Ne,ze,Ye,Pt.data)):O.texSubImage3D(ye,q,B.x,B.y,B.z,ve,Ne,ze,Ye,je,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,On),q===0&&j.generateMipmaps&&O.generateMipmap(ye),ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){w=0,b=0,E=null,ce.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?es:Of}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?zt:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},al=class extends Lr{};al.prototype.isWebGL1Renderer=!0;var oa=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Di=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new N,Nr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var of=new N,af=new Tt,cf=new Tt,S_=new N,lf=new at,Io=new N,Ic=new Nn,hf=new at,Nc=new Ys,aa=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zh,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(i),e.ray.intersectsSphere(Ic)!==!1&&(hf.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(hf),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;af.fromBufferAttribute(i.attributes.skinIndex,e),cf.fromBufferAttribute(i.attributes.skinWeight,e),of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=cf.getComponent(r);if(o!==0){let a=af.getComponent(r);lf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(S_.copy(of).applyMatrix4(lf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Dr=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends rn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Kt,h=Kt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uf=new at,w_=new at,ca=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:w_;uf.multiplyMatrices(a,t[r]),uf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,Hn,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Dr),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},rs=class extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new at,ff=new at,No=[],df=new $t,E_=new at,xr=new et,vr=new Nn,Dn=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,E_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),df.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),vr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),ff.multiplyMatrices(n,Is),xr.matrixWorld=ff,xr.raycast(e,No);for(let o=0,a=No.length;o<a;o++){let c=No[o];c.instanceId=r,c.object=this,t.push(c)}No.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pf=new N,mf=new N,gf=new at,Dc=new Ys,Do=new Nn,Js=class extends Bt{constructor(e=new Ct,t=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pf.fromBufferAttribute(t,i-1),mf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pf.distanceTo(mf);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;gf.copy(i).invert(),Dc.copy(e.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new N,h=new N,u=new N,f=new N,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=d){let w=p.getX(v),b=p.getX(v+1);if(l.fromBufferAttribute(g,w),h.fromBufferAttribute(g,b),Dc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Dc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},xf=new N,vf=new N,la=class extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)xf.fromBufferAttribute(t,i),vf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xf.distanceTo(vf);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ha=class extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new at,cl=new Ys,Uo=new Nn,zo=new N,ua=class extends Bt{constructor(e=new Ct,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;_f.copy(i).invert(),cl.copy(e.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=l.getX(p);zo.fromBufferAttribute(u,g),yf(zo,g,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)zo.fromBufferAttribute(u,p),yf(zo,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(s,e,t,n,i,r,o){let a=cl.distanceSqToPoint(s);if(a<t){let c=new N;cl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var os=class extends rn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new _e:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,i=[],r=[],o=[],a=new N,c=new at;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(tn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(tn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends Wn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new _e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends Or{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Fo=new N,Uc=new kl,zc=new kl,Fc=new kl,hl=class extends Wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Fo.subVectors(i[0],i[1]).add(i[0]),l=Fo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Uc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,g),zc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,g),Fc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Fc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Uc.calc(c),zc.calc(c),Fc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function T_(s,e){let t=1-s;return t*t*e}function A_(s,e){return 2*(1-s)*s*e}function R_(s,e){return s*s*e}function Er(s,e,t,n){return T_(s,e)+A_(s,t)+R_(s,n)}function C_(s,e){let t=1-s;return t*t*t*e}function P_(s,e){let t=1-s;return 3*t*t*s*e}function L_(s,e){return 3*(1-s)*s*s*e}function I_(s,e){return s*s*s*e}function Tr(s,e,t,n,i){return C_(s,e)+P_(s,t)+L_(s,n)+I_(s,i)}var fa=class extends Wn{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ul=class extends Wn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y),Tr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Wn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Wn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Wn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends Wn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y),Er(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Mf(a,c.x,l.x,h.x,u.x),Mf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}},pl=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:hl,CubicBezierCurve:fa,CubicBezierCurve3:ul,EllipseCurve:Or,LineCurve:da,LineCurve3:fl,QuadraticBezierCurve:pa,QuadraticBezierCurve3:dl,SplineCurve:ma}),ml=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new pl[i.type]().fromJSON(i))}return this}},ga=class extends ml{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new da(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new pa(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new fa(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Or(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$s=class s extends Ct{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=tn(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new N,f=new _e,d=new N,p=new N,x=new N,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let v=n+_*h*i,y=Math.sin(v),w=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*w,o.push(u.x,u.y,u.z),f.x=_/t,f.y=b/(e.length-1),a.push(f.x,f.y);let E=c[3*b+0]*y,C=c[3*b+1],M=c[3*b+0]*w;l.push(E,C,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,w=y,b=y+e.length,E=y+e.length+1,C=y+1;r.push(w,b,C),r.push(E,C,b)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Xn=class s extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function _(){let y=new N,w=new N,b=0,E=(t-e)/n;for(let C=0;C<=r;C++){let M=[],T=C/r,I=T*(t-e)+e;for(let D=0;D<=i;D++){let G=D/i,P=G*c+a,L=Math.sin(P),k=Math.cos(P);w.x=I*L,w.y=-T*n+g,w.z=I*k,u.push(w.x,w.y,w.z),y.set(L,E,k).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-T),M.push(p++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let T=x[M][C],I=x[M+1][C],D=x[M+1][C+1],G=x[M][C+1];h.push(T,I,G),h.push(I,D,G),b+=6}l.addGroup(m,b,0),m+=b}function v(y){let w=p,b=new _e,E=new N,C=0,M=y===!0?e:t,T=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),p++;let I=p;for(let D=0;D<=i;D++){let P=D/i*c+a,L=Math.cos(P),k=Math.sin(P);E.x=M*k,E.y=g*T,E.z=M*L,u.push(E.x,E.y,E.z),f.push(0,T,0),b.x=L*.5+.5,b.y=k*.5*T+.5,d.push(b.x,b.y),p++}for(let D=0;D<i;D++){let G=w+D,P=I+D;y===!0?h.push(P,P+1,G):h.push(P+1,P,G),C+=3}l.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var gl=class s extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new N,y=new N,w=new N;for(let b=0;b<t.length;b+=3)d(t[b+0],v),d(t[b+1],y),d(t[b+2],w),c(v,y,w,_)}function c(_,v,y,w){let b=w+1,E=[];for(let C=0;C<=b;C++){E[C]=[];let M=_.clone().lerp(y,C/b),T=v.clone().lerp(y,C/b),I=b-C;for(let D=0;D<=I;D++)D===0&&C===b?E[C][D]=M:E[C][D]=M.clone().lerp(T,D/I)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){let T=Math.floor(M/2);M%2===0?(f(E[C][T+1]),f(E[C+1][T]),f(E[C][T])):(f(E[C][T+1]),f(E[C+1][T+1]),f(E[C+1][T]))}}function l(_){let v=new N;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new N;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],w=o[_+4],b=Math.max(v,y,w),E=Math.min(v,y,w);b>.9&&E<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){let _=new N,v=new N,y=new N,w=new N,b=new _e,E=new _e,C=new _e;for(let M=0,T=0;M<r.length;M+=9,T+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(o[T+0],o[T+1]),E.set(o[T+2],o[T+3]),C.set(o[T+4],o[T+5]),w.copy(_).add(v).add(y).divideScalar(3);let I=g(w);x(b,T+0,_,I),x(E,T+2,v,I),x(C,T+4,y,I)}}function x(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Br=class extends ga{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ga().fromJSON(i))}return this}},N_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=O_(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return kr(r,o,t,a,c,d,0),o}};function jf(s,e,t,n,i){let r,o;if(i===K_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=bf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=bf(r,s[r],s[r+1],o);return o&&Ia(o,o.next)&&(Gr(o),o=o.next),o}function as(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ia(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function kr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&V_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?U_(s,n,i,r):D_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Gr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=z_(as(s),e,t),kr(s,e,t,n,i,r,2)):o===2&&F_(s,e,t,n,i,r):kr(as(s),e,t,n,i,r,1);break}}}function D_(s){let e=s.prev,t=s,n=s.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Os(i,a,r,c,o,l,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function U_(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Wt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=xl(d,p,e,t,n),_=xl(x,g,e,t,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Os(a,h,c,u,l,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Os(a,h,c,u,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Os(a,h,c,u,l,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Os(a,h,c,u,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function z_(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Ia(i,r)&&Jf(i,n,n.next,r)&&Hr(i,r)&&Hr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gr(n),Gr(n.next),n=s=r),n=n.next}while(n!==s);return as(n)}function F_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q_(o,a)){let c=$f(o,a);o=as(o,o.next),c=as(c,c.next),kr(o,e,t,n,i,r,0),kr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function O_(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=jf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(X_(l));for(i.sort(B_),r=0;r<i.length;r++)t=k_(i[r],t);return t}function B_(s,e){return s.x-e.x}function k_(s,e){let t=H_(s,e);if(!t)return e;let n=$f(t,s);return as(n,n.next),as(t,t.next)}function H_(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Os(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Hr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&G_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function G_(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function V_(s,e,t,n){let i=s;do i.z===0&&(i.z=xl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,W_(i)}function W_(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function xl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function X_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Os(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function q_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Y_(s,e)&&(Hr(s,e)&&Hr(e,s)&&Z_(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||Ia(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ia(s,e){return s.x===e.x&&s.y===e.y}function Jf(s,e,t,n){let i=Bo(Wt(s,e,t)),r=Bo(Wt(s,e,n)),o=Bo(Wt(t,n,s)),a=Bo(Wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oo(s,t,e)||r===0&&Oo(s,n,e)||o===0&&Oo(t,s,n)||a===0&&Oo(t,e,n))}function Oo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bo(s){return s>0?1:s<0?-1:0}function Y_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Hr(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function Z_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function $f(s,e){let t=new vl(s.i,s.x,s.y),n=new vl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bf(s,e,t,n){let i=new vl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ar=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Sf(e),wf(n,e);let o=e.length;t.forEach(Sf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,wf(n,t[c]);let a=N_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Sf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var xa=class s extends Ct{constructor(e=new Br([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:j_,v,y=!1,w,b,E,C;m&&(v=m.getSpacedPoints(h),y=!0,f=!1,w=m.computeFrenetFrames(h,!1),b=new N,E=new N,C=new N),f||(g=0,d=0,p=0,x=0);let M=a.extractPoints(l),T=M.shape,I=M.holes;if(!Ar.isClockWise(T)){T=T.reverse();for(let O=0,we=I.length;O<we;O++){let le=I[O];Ar.isClockWise(le)&&(I[O]=le.reverse())}}let G=Ar.triangulateShape(T,I),P=T;for(let O=0,we=I.length;O<we;O++){let le=I[O];T=T.concat(le)}function L(O,we,le){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(we,le)}let k=T.length,$=G.length;function Q(O,we,le){let Me,ce,Ve,De=O.x-we.x,R=O.y-we.y,A=le.x-O.x,J=le.y-O.y,fe=De*De+R*R,xe=De*J-R*A;if(Math.abs(xe)>Number.EPSILON){let ge=Math.sqrt(fe),Xe=Math.sqrt(A*A+J*J),Pe=we.x-R/ge,Fe=we.y+De/ge,ae=le.x-J/Xe,ht=le.y+A/Xe,pe=((ae-Pe)*J-(ht-Fe)*A)/(De*J-R*A);Me=Pe+De*pe-O.x,ce=Fe+R*pe-O.y;let Et=Me*Me+ce*ce;if(Et<=2)return new _e(Me,ce);Ve=Math.sqrt(Et/2)}else{let ge=!1;De>Number.EPSILON?A>Number.EPSILON&&(ge=!0):De<-Number.EPSILON?A<-Number.EPSILON&&(ge=!0):Math.sign(R)===Math.sign(J)&&(ge=!0),ge?(Me=-R,ce=De,Ve=Math.sqrt(fe)):(Me=De,ce=R,Ve=Math.sqrt(fe/2))}return new _e(Me/Ve,ce/Ve)}let K=[];for(let O=0,we=P.length,le=we-1,Me=O+1;O<we;O++,le++,Me++)le===we&&(le=0),Me===we&&(Me=0),K[O]=Q(P[O],P[le],P[Me]);let Z=[],ne,oe=K.concat();for(let O=0,we=I.length;O<we;O++){let le=I[O];ne=[];for(let Me=0,ce=le.length,Ve=ce-1,De=Me+1;Me<ce;Me++,Ve++,De++)Ve===ce&&(Ve=0),De===ce&&(De=0),ne[Me]=Q(le[Me],le[Ve],le[De]);Z.push(ne),oe=oe.concat(ne)}for(let O=0;O<g;O++){let we=O/g,le=d*Math.cos(we*Math.PI/2),Me=p*Math.sin(we*Math.PI/2)+x;for(let ce=0,Ve=P.length;ce<Ve;ce++){let De=L(P[ce],K[ce],Me);Ae(De.x,De.y,-le)}for(let ce=0,Ve=I.length;ce<Ve;ce++){let De=I[ce];ne=Z[ce];for(let R=0,A=De.length;R<A;R++){let J=L(De[R],ne[R],Me);Ae(J.x,J.y,-le)}}}let X=p+x;for(let O=0;O<k;O++){let we=f?L(T[O],oe[O],X):T[O];y?(E.copy(w.normals[0]).multiplyScalar(we.x),b.copy(w.binormals[0]).multiplyScalar(we.y),C.copy(v[0]).add(E).add(b),Ae(C.x,C.y,C.z)):Ae(we.x,we.y,0)}for(let O=1;O<=h;O++)for(let we=0;we<k;we++){let le=f?L(T[we],oe[we],X):T[we];y?(E.copy(w.normals[O]).multiplyScalar(le.x),b.copy(w.binormals[O]).multiplyScalar(le.y),C.copy(v[O]).add(E).add(b),Ae(C.x,C.y,C.z)):Ae(le.x,le.y,u/h*O)}for(let O=g-1;O>=0;O--){let we=O/g,le=d*Math.cos(we*Math.PI/2),Me=p*Math.sin(we*Math.PI/2)+x;for(let ce=0,Ve=P.length;ce<Ve;ce++){let De=L(P[ce],K[ce],Me);Ae(De.x,De.y,u+le)}for(let ce=0,Ve=I.length;ce<Ve;ce++){let De=I[ce];ne=Z[ce];for(let R=0,A=De.length;R<A;R++){let J=L(De[R],ne[R],Me);y?Ae(J.x,J.y+v[h-1].y,v[h-1].x+le):Ae(J.x,J.y,u+le)}}}ee(),he();function ee(){let O=i.length/3;if(f){let we=0,le=k*we;for(let Me=0;Me<$;Me++){let ce=G[Me];We(ce[2]+le,ce[1]+le,ce[0]+le)}we=h+g*2,le=k*we;for(let Me=0;Me<$;Me++){let ce=G[Me];We(ce[0]+le,ce[1]+le,ce[2]+le)}}else{for(let we=0;we<$;we++){let le=G[we];We(le[2],le[1],le[0])}for(let we=0;we<$;we++){let le=G[we];We(le[0]+k*h,le[1]+k*h,le[2]+k*h)}}n.addGroup(O,i.length/3-O,0)}function he(){let O=i.length/3,we=0;de(P,we),we+=P.length;for(let le=0,Me=I.length;le<Me;le++){let ce=I[le];de(ce,we),we+=ce.length}n.addGroup(O,i.length/3-O,1)}function de(O,we){let le=O.length;for(;--le>=0;){let Me=le,ce=le-1;ce<0&&(ce=O.length-1);for(let Ve=0,De=h+g*2;Ve<De;Ve++){let R=k*Ve,A=k*(Ve+1),J=we+Me+R,fe=we+ce+R,xe=we+ce+A,ge=we+Me+A;it(J,fe,xe,ge)}}}function Ae(O,we,le){c.push(O),c.push(we),c.push(le)}function We(O,we,le){Be(O),Be(we),Be(le);let Me=i.length/3,ce=_.generateTopUV(n,i,Me-3,Me-2,Me-1);me(ce[0]),me(ce[1]),me(ce[2])}function it(O,we,le,Me){Be(O),Be(we),Be(Me),Be(we),Be(le),Be(Me);let ce=i.length/3,Ve=_.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);me(Ve[0]),me(Ve[1]),me(Ve[3]),me(Ve[1]),me(Ve[2]),me(Ve[3])}function Be(O){i.push(c[O*3+0]),i.push(c[O*3+1]),i.push(c[O*3+2])}function me(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pl[i.type]().fromJSON(i)),new s(n,e.options)}},j_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new _e(r,o),new _e(a,c),new _e(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-u),new _e(f,1-p),new _e(x,1-m)]:[new _e(a,1-c),new _e(h,1-u),new _e(d,1-p),new _e(g,1-m)]}};function J_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qs=class s extends gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ui=class s extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,f=new N,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let b=w/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(b+y,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],y=h[m][_],w=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&d.push(v,y,b),(m!==n-1||c<Math.PI)&&d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var er=class s extends Ct{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let x=p/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let x=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var va=class extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zi=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dt=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ko(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Q_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ef(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Qf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Fi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends Fi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ds:r=e,a=2*t-n;break;case Vo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ds:o=e,c=2*n-t;break;case Vo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[l+w]+v*o[c+w]+y*o[u+w];return r}},_a=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},yl=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&$_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=is;var Oi=class extends Yn{};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Xs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Yn{};ya.prototype.ValueTypeName="color";var Mi=class extends Yn{};Mi.prototype.ValueTypeName="number";var Ml=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},ri=class extends Yn{InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=is;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Yn{};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Xs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Yn{};bi.prototype.ValueTypeName="vector";var tr=class{constructor(e,t=-1,n,i=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ty(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Q_(c);c=Ef(c,1,h),l=Ef(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,x){if(d.length!==0){let g=[],m=[];Qf(d,g,m,p),g.length!==0&&x.push(new u(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let g=[],m=[];for(let _=0;_!==f[p].morphTargets.length;++_){let v=f[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Mi(".morphTargetInfluence["+x+"]",g,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(bi,d+".position",f,"pos",i),n(ri,d+".quaternion",f,"rot",i),n(bi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ey(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return ya;case"quaternion":return ri;case"bool":case"boolean":return Oi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ty(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ey(s.type);if(s.times===void 0){let t=[],n=[];Qf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},bl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},ny=new bl,Si=class{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Sl=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends Si{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0,x=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let b=0,E=h.length;b<E;b++){let C=h[b];C.onProgress&&C.onProgress(w)}m.enqueue(y),_()}})}}});return new Response(g)}else throw new Sl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Li.add(e,l);let h=pi[e];delete pi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var wl=class extends Si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Cr("img");function c(){h(),Li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ma=class extends Si{constructor(e){super(e)}load(e,t,n,i){let r=new rn,o=new wl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},nr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ba=class extends nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oc=new at,Tf=new N,Af=new N,Wr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},El=class extends Wr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ir=class extends nr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new El}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rf=new at,_r=new N,Bc=new N,Tl=class extends Wr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),i.makeTranslation(-_r.x,-_r.y,-_r.z),Rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf)}},Sa=class extends nr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Al=class extends Wr{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Al}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ki=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wa=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(e,c),r.manager.itemStart(e)}};var Rl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;en.multiplyQuaternionsFlat(e,o,e,t,e,n),en.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Hl="\\[\\]\\.:\\/",iy=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",sy="[^"+Hl.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",Gl),oy=/(WCOD+)?/.source.replace("WCOD",sy),ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),ly=new RegExp("^"+ry+oy+ay+cy+"$"),hy=["material","materials","bones","map"],Cl=class{constructor(e,t,n){let i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iy,"")}static parseTrackName(e){let t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Cl;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ns,endingEnd:Ns};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case om:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ul:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===rm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Ra){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ds,i.endingEnd=Ds):(e?i.endingStart=this.zeroSlopeAtStart?Ds:Ns:i.endingStart=Vo,t?i.endingEnd=this.zeroSlopeAtEnd?Ds:Ns:i.endingEnd=Vo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},uy=new Float32Array(1),Ea=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Rl(Ut.create(n,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new _a(new Float32Array(2),new Float32Array(2),1,uy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?tr.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ul),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Pl(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?tr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);var jr=pp(sd());var xt=(s,e,t)=>s<e?e:s>t?t:s,dt=(s,e,t)=>s+(e-s)*t,rd=s=>s*s*(3-2*s),Qn=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function bn(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var Yl=12345,Lt=()=>(Yl=Yl*1664525+1013904223>>>0,Yl/4294967296),un=s=>s[Lt()*s.length|0];function ls(s,e,t,n,i,r,o){let a=i-t,c=r-n,l=a*a+c*c||1e-9,h=((s-t)*a+(e-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=t+a*h,o.z=n+c*h,o.t=h,o}function od(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let o=t[i][0],a=t[i][1],c=t[r][0],l=t[r][1];a>e!=l>e&&s<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}var ad=`
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
      }`,cd=`
          // staggered stone pattern: returns 0 in the joints, 1 on the stone; id = per-stone random
          float hdSetts(vec2 p, vec2 size, float joint, float aa, out float id){
            vec2 q = p / size; q.x += 0.5 * floor(q.y);
            vec2 c = floor(q); id = h21(c);
            vec2 f = fract(q); vec2 e = min(f, 1.0 - f) * size;
            return smoothstep(joint - aa, joint + aa, min(e.x, e.y));
          }`,Zl=`{
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
        }`,ld=`
          float hdWave(vec2 p){
            float t = uTime;
            return vnoise(p * vec2(0.35, 0.9) + vec2(t * 0.55, t * 0.12)) * 0.6
                 + vnoise(p * vec2(1.3, 2.4) + vec2(-t * 0.8, t * 0.35)) * 0.3
                 + vnoise(p * 5.5 + vec2(t * 1.3, -t * 0.9)) * 0.1;
          }`,Kl=`{
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
        }`,hd=`varying vec3 vF; varying vec4 vD;
          float hdBox(vec2 p, vec2 lo, vec2 hi, vec2 aa){
            vec2 a = smoothstep(lo - aa, lo + aa, p), b = 1.0 - smoothstep(hi - aa, hi + aa, p);
            return a.x * a.y * b.x * b.y;
          }
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,jl=`{
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
        }`,ud=`{
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
        }`,fd=`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
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
      }`;var kt={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new Tt(0,0,1,0)},uFar:{value:null},uWorld:{value:new _e(1,1)},uSun:{value:new N(0,1,0)}},ai=class{constructor(e){this.cell=e,this.m=new Map,this.stamp=0}add(e,t,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(t,i)/a),l=Math.floor(Math.max(t,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let p=f*8192+d,x=this.m.get(p);x||this.m.set(p,x=[]),x.push(e),o&&o.add(p)}}query(e,t,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((e-n)/r),c=Math.floor((e+n)/r),l=Math.floor((t-n)/r),h=Math.floor((t+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let p=0;p<d.length;p++){let x=d[p];x._st!==o&&(x._st=o,i.push(x))}}return i}removeTag(e,t){for(let n of t){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==e);r.length?this.m.set(n,r):this.m.delete(n)}}};function oi(s,e="",t="",n=""){s.uniforms.uNight=kt.uNight,s.uniforms.uTime=kt.uTime,s.uniforms.uLamp=kt.uLamp,s.uniforms.uLampRect=kt.uLampRect,s.uniforms.uFar=kt.uFar,s.uniforms.uWorld=kt.uWorld,s.uniforms.uSun=kt.uSun,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      ${ad}
      ${t}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var dd=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],pd=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],md=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],gd=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],xd=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],Ay={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8},Kr={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},Fa=new Oe;function vd(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Int16Array(t.buffer)}function _d(s,e,t,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>e-1.001?e-1.001:o,a=a<0?0:a>t-1.001?t-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*e+c,d=s[f],p=s[f+1],x=s[f+e],g=s[f+e+1];return h+u<=1?d+(p-d)*h+(x-d)*u:g+(x-g)*(1-h)+(p-g)*(1-u)}var Sn=class{constructor(e,t,n={}){this.d=e,this.base=t,this.mobile=!!n.mobile;let i=e.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=vd(e.hf),a=vd(e.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,e.hf=e.hc=null,kt.uWorld.value.set(this.W,this.H),this.group=new Vt,this.colliders=new ai(8),this.decks=new ai(16),this.names=new ai(24),this.edgeGrid=new ai(24),this.pedGrid=new ai(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:e.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?768:1024,this.fountains=[],this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(e,t){let n=e-this.fx,i=t-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?_d(this.hf,this.fn,this.fn,this.fs,n,i):_d(this.hc,this.cnx,this.cnz,this.cs,e,t)}surfaceY(e,t,n=1e9){let i=this.hAt(e,t),r=this.decks.query(e,t,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=ls(e,t,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(e-c.x,t-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(e,t,n){return this.surfaceY(e,t,n)>this.hAt(e,t)+.5}streetAt(e,t){let n=this.names.query(e,t,30,this._tmp),i=null,r=30;for(let o of n){let a=ls(e,t,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(e-a.x,t-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(e){let t=new Image;await new Promise(o=>{t.onload=o,t.onerror=o,t.src=this.base+"far.jpg"}),this.farImg=t;let n=new rn(t);n.colorSpace=zt,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,kt.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new os(i);return r.colorSpace=yn,r.minFilter=jt,r.generateMipmaps=!1,r.flipY=!1,kt.uLamp.value=r,e&&e(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),e&&e(.5),this.buildRoadGraph(),this.buildPedGraph(),e&&e(.8),this.buildPylon(),this.buildLod(),e&&e(1),this}indexLines(){let e=this.T,t=()=>this.tiles.map(()=>[]);this.ix={road:t(),foot:t(),cross:t(),steps:t(),tram:t(),rail:t()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/e));f<=Math.min(this.ntz-1,Math.floor(u/e));f++)for(let d=Math.max(0,Math.floor(c/e));d<=Math.min(this.ntx-1,Math.floor(h/e));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){this.farMat=new Dt({color:16777215,side:Jt}),this.farMat.onBeforeCompile=i=>oi(i,"","",`{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`),this.farMat.customProgramCacheKey=()=>"terrFar";let e=this.Rn;if(this.groundHead=cd,this.groundBody=Zl.replace("texture2D(uGMask, vWP.xz / uWorld).rgb","texture2D(map, vMapUv).rgb").replace("diffuseColor.rgb = col;",`vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(e*.55).toFixed(1)}, ${(e*.95).toFixed(1)}, dist));`),this.groundBody===Zl)throw new Error("ground shader patch failed");this.wallMat=new Dt({vertexColors:!0,side:Jt});let n=jl.replace("bool old = kid < 0.5,","bool panel = kid > 5.5 && kid < 6.5; bool old = kid < 0.5 || kid > 6.5,").replace("float gType = isGround * (old ? 1.0 : 0.0);","float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);").replace("} else if (util) {",`} else if (panel) {
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
          } else if (util) {`);if(n.length<jl.length+900)throw new Error("facade shader patch failed");this.wallMat.onBeforeCompile=i=>oi(i,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",hd,n),this.roofMat=new Dt({vertexColors:!0,side:Jt,flatShading:!0}),this.roofMat.onBeforeCompile=i=>oi(i,"","",ud),this.stoneMat=new Dt({vertexColors:!0,side:Jt,flatShading:!0}),this.stoneMat.onBeforeCompile=i=>oi(i,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new Xn(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new Qs(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new Xn(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new Ui(.28,6,4),this.headGeo.translate(0,4.7,0);for(let i of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])i.userData.shared=!0;this.trunkMat=new Dt({color:4864040}),this.crownMat=new Dt({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=i=>oi(i,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new Dt({color:2895408}),this.lampHeadMat=new fn({color:16767392}),this.gateMat=new Dt({color:14209212})}tdist(e,t,n){let i=Math.max(e.x0-t,0,t-(e.x0+this.T)),r=Math.max(e.z0-n,0,n-(e.z0+this.T));return Math.hypot(i,r)}fetchTile(e){return e.state=1,e.has?fetch(this.base+"t/"+e.i+"_"+e.j+".json").then(t=>t.ok?t.json():Kr).catch(()=>Kr).then(t=>{e.state===1&&(e.data=t,e.state=2)}):(e.data=Kr,e.state=2,Promise.resolve())}unloadTile(e){this.genTile===e&&(this.gen=null,this.genTile=null);for(let t of e.objs)this.group.remove(t),t.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});e.objs.length=0,this.colliders.removeTag(e,e.keys),e.keys.clear(),this.gates=this.gates.filter(t=>t.tile!==e),this.fountains=this.fountains.filter(t=>t.tile!==e),e.data=null,e.state=0,e.lampPts=[],e.lod&&(e.lod.visible=!0),this.dropTex(e),this.lampDirty=!0}dropTex(e){e.tex&&(e.tex.dispose(),e.tex=null,e.cv=null,e.nearMat&&(e.nearMat.dispose(),e.nearMat=null),e.terr&&(e.terr.material=this.farMat))}runGen(e){let t=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-t>e)););}update(e,t,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,e,t);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(e-this.lampC[0],t-this.lampC[1])>190)&&this.paintLamps(e,t)}async prime(e,t){let n=this.tiles.filter(i=>this.tdist(i,e,t)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,e,t)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,e,t)<this.Rn&&this.paintTile(i);this.paintLamps(e,t)}makeTerrain(e){let t=e.fine?this.fs:this.cs,n=Math.round(this.T/t)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let p=0;p<n;p++)for(let x=0;x<n;x++){let g=p*n+x,m=e.x0+x*t,_=e.z0+p*t;r[g*3]=m,r[g*3+1]=this.hAt(m,_),r[g*3+2]=_;let v=this.hAt(m-t,_)-this.hAt(m+t,_),y=this.hAt(m,_-t)-this.hAt(m,_+t),w=Math.hypot(v,2*t,y);o[g*3]=v/w,o[g*3+1]=2*t/w,o[g*3+2]=y/w,a[g*2]=x*t/this.T,a[g*2+1]=p*t/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let p=0;p<n-1;p++)for(let x=0;x<n-1;x++){let g=p*n+x,m=g+1,_=g+n,v=_+1;c[l++]=g,c[l++]=_,c[l++]=m,c[l++]=m,c[l++]=_,c[l++]=v}let h=n*n,u=p=>{let x=h;for(let g=0;g<n;g++){let m=p(g);if(r[h*3]=r[m*3],r[h*3+1]=r[m*3+1]-5,r[h*3+2]=r[m*3+2],o[h*3]=o[m*3],o[h*3+1]=o[m*3+1],o[h*3+2]=o[m*3+2],a[h*2]=a[m*2],a[h*2+1]=a[m*2+1],g){let _=p(g-1),v=x+g-1,y=x+g;c[l++]=_,c[l++]=v,c[l++]=m,c[l++]=m,c[l++]=v,c[l++]=y}h++}};u(p=>p),u(p=>(n-1)*n+p),u(p=>p*n),u(p=>p*n+n-1);let f=new Ct;f.setAttribute("position",new Ft(r,3)),f.setAttribute("normal",new Ft(o,3)),f.setAttribute("uv",new Ft(a,2)),f.setIndex(new Ft(c,1)),f.computeBoundingSphere();let d=new et(f,e.nearMat||this.farMat);d.receiveShadow=!0,e.terr=d,this.group.add(d)}buildWater(){let e=new ss(this.W+3e3,this.H+3e3,1,1);e.rotateX(-Math.PI/2),e.translate(this.W/2,this.water,this.H/2);let t=new Dt({color:16777215}),n=Kl.replace("vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)","vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)").replace("float fres = 0.04 + 0.96 *","float fres = 0.12 + 0.88 *");if(n===Kl)throw new Error("water shader patch failed");t.onBeforeCompile=r=>oi(r,"",ld,n),this.waterMat=t;let i=new et(e,t);i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i)}paintTile(e){let n=this.T,i=e.data||Kr,r=document.createElement("canvas");r.width=r.height=384;let o=r.getContext("2d"),a=384/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=d=>{o.beginPath();for(let p=0;p<d.length;p++){let x=d[p][0]/10,g=d[p][1]/10;p?o.lineTo(x,g):o.moveTo(x,g)}},l=d=>{o.beginPath();for(let p of d){for(let x=0;x<p.length;x++){let g=p[x][0]/10+e.x0,m=p[x][1]/10+e.z0;x?o.lineTo(g,m):o.moveTo(g,m)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let d of i.green)l(d),o.fill("evenodd");o.fillStyle="#b0a389";for(let d of i.parea)l(d),o.fill("evenodd");o.fillStyle="#26323a";for(let d of i.water)l(d),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(d=>!d.b);o.strokeStyle="#a39a8a";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+3.6,c(d.p),o.stroke());o.strokeStyle="#6f685e";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+.6,c(d.p),o.stroke());o.strokeStyle="#a69c86";for(let d of this.ix.foot[e.k])o.lineWidth=d.sw?2.2:2.6,c(d.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let d of this.ix.steps[e.k])c(d),o.stroke();o.strokeStyle="#b5a88e";for(let d of u)d.c===5&&(o.lineWidth=d.w,c(d.p),o.stroke());o.lineCap="butt";for(let d of this.ix.rail[e.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(d),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(d),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(d=>d.c<=4).sort((d,p)=>d.c-p.c);for(let d of f)o.strokeStyle=d.s?"#615850":d.pk?"#46464a":"#3a3b40",o.lineWidth=d.w,c(d.p),o.stroke();o.lineCap="butt";for(let d of f)d.c<2||d.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,d.o?d.w>7&&(o.setLineDash([3,6]),c(d.p),o.stroke()):(o.setLineDash(d.c>=4?[]:[3,6]),c(d.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let d of this.ix.tram[e.k])d.b||(c(d.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let d of this.ix.tram[e.k])if(!d.b)for(let p of[-.72,.72]){o.beginPath();let x=d.p;for(let g=0;g<x.length;g++){let m=x[Math.max(0,g-1)],_=x[Math.min(x.length-1,g+1)],v=_[0]-m[0],y=_[1]-m[1],w=Math.hypot(v,y)||1,b=x[g][0]/10-y/w*p,E=x[g][1]/10+v/w*p;g?o.lineTo(b,E):o.moveTo(b,E)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let d of this.ix.cross[e.k])c(d),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let d of i.bld)(!d.m||d.m<1)&&(l([d.o]),o.fill());e.cv=r,this.paintMask(e)}paintMask(e){let t=this.texRes,n=this.T,i=e.data||Kr,r=document.createElement("canvas");r.width=r.height=t;let o=r.getContext("2d",{alpha:!1}),a=t/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=p=>{o.beginPath();for(let x=0;x<p.length;x++){let g=p[x][0]/10,m=p[x][1]/10;x?o.lineTo(g,m):o.moveTo(g,m)}},l=p=>{o.beginPath();for(let x of p){for(let g=0;g<x.length;g++){let m=x[g][0]/10+e.x0,_=x[g][1]/10+e.z0;g?o.lineTo(m,_):o.moveTo(m,_)}o.closePath()}};o.fillStyle="#0f0",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#000",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#0f0";for(let p of i.green)l(p),o.fill("evenodd");o.fillStyle="#00f";for(let p of i.parea)l(p),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(p=>!p.b);o.strokeStyle="#000";for(let p of u)p.c>=1&&p.c<=4&&(o.lineWidth=p.w+3.6,c(p.p),o.stroke());for(let p of this.ix.foot[e.k])o.lineWidth=p.sw?2.2:2.6,c(p.p),o.stroke();o.lineWidth=3;for(let p of this.ix.steps[e.k])c(p),o.stroke();o.lineWidth=4.2;for(let p of this.ix.rail[e.k])c(p),o.stroke();o.strokeStyle="#00f";for(let p of u)p.c===5&&(o.lineWidth=p.w,c(p.p),o.stroke());for(let p of u.filter(x=>x.c<=4).sort((x,g)=>x.c-g.c)){let x=p.c===0&&(p.s||p.nv);o.strokeStyle=x?"#00f":p.s?"#f0f":"#f00",o.lineWidth=p.w,c(p.p),o.stroke()}let f=new os(r);f.colorSpace=yn,f.anisotropy=4,f.flipY=!1,f.minFilter=Vn,f.generateMipmaps=!0,e.tex=f;let d=new Dt({map:f,side:Jt});d.onBeforeCompile=p=>oi(p,"",this.groundHead,this.groundBody),d.customProgramCacheKey=()=>"terrNear",e.nearMat=d,e.terr&&(e.terr.material=d),f.onUpdate=()=>{r.width=r.height=1}}drawGround(e,t,n,i){this.farImg&&this.farImg.width&&e.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,t,n)<i&&e.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(e,t){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(e/48)*48-1152/2,a=Math.round(t/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}kt.uLampRect.value.set(o,a,1152,0),kt.uLamp.value.needsUpdate=!0,this.lampC=[e,t],this.lampDirty=!1,this.lampT=40}emitBuilding(e,t,n,i,r,o,a){let c=1e9,l=-1e9;for(let M of n){let T=this.hAt(M[0],M[1]);T<c&&(c=T),T>l&&(l=T)}let h=t.h,u=c+Math.max(h,l-c+2.5),f=!a&&t.g&&h>6&&!(t.m>.5),d=f?c+4.3:t.m>.5?c+t.m:c-3,p=Fa;t.c?p.set(t.c):t.k==="modern"?p.set(pd[r*pd.length|0]):t.k==="util"?p.set("#a8a296"):t.k==="church"?p.set("#eee4cc"):t.k==="house"?p.set(md[r*md.length|0]):t.k==="block"?p.set(gd[r*gd.length|0]):t.k==="panel"?p.set("#d9d2c0"):p.set(dd[r*dd.length|0]);let x=p.r,g=p.g,m=p.b,_=t.l||Math.max(1,Math.round(h/(t.k==="panel"?2.9:3.4))),v=t.t?7.5:xt(h/Math.max(1,_),2.7,5.5),y=Ay[t.k]??0,w=t.k==="modern"?2.6:t.k==="church"?5:t.k==="panel"?3:t.k==="house"?3.8:3.4,b=[n,...i];for(let M of b){let T=M.length,I=0;for(let P=0;P<T;P++){let L=M[P],k=M[(P+1)%T];I+=L[0]*k[1]-k[0]*L[1]}let D=(I>0?-1:1)*(M===n?1:-1),G=t.p?.06:0;for(let P=0;P<T;P++){let L=M[P],k=M[(P+1)%T],$=Math.hypot(k[0]-L[0],k[1]-L[1]);if($<.05)continue;let Q=$<2.2?0:Math.max(1,Math.round($/w)),K=d-c,Z=u-c,ne=Q?0:-1,oe=Q||-1,X=$/Math.max(1,Q),ee=(k[1]-L[1])/$,he=-(k[0]-L[0])/$,de=ee*D*G,Ae=he*D*G,We=L[0]+de,it=L[1]+Ae,Be=k[0]+de,me=k[1]+Ae;e.wp.push(We,d,it,Be,d,me,Be,u,me,We,d,it,Be,u,me,We,u,it),e.wf.push(ne,K,X,oe,K,X,oe,Z,X,ne,K,X,oe,Z,X,ne,Z,X);for(let O=0;O<6;O++)e.wn.push(ee,0,he),e.wc.push(x,g,m),e.wd.push(v,y,r,u-c);!a&&!(t.m>=2)&&!f&&t.k!=="roof"&&t.k!=="ruin"&&this.colliders.add({ax:L[0],az:L[1],bx:k[0],bz:k[1],y0:d-50,y1:u,kind:"b",tag:o},L[0],L[1],k[0],k[1],o.keys)}}let E=[],C=[];for(let M of n)E.push(M[0],M[1]);for(let M of i){C.push(E.length/2);for(let T of M)E.push(T[0],T[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let M=(0,jr.default)(E,C);for(let T=0;T<M.length;T++)e.rp.push(E[M[T]*2],d,E[M[T]*2+1]),e.rc.push(.35,.33,.3)}if(!a&&t.r>.3&&t.s!=="f")this.pitchedRoof(n,i,E,C,u,t,r,e.rp,e.rc);else{let M=(0,jr.default)(E,C);t.rc?p.set(t.rc):p.set(t.k==="modern"?"#5d5f63":t.k==="util"?"#6c6a66":t.k==="panel"?"#6f6c66":"#615c58");let T=.9+r*.2;for(let I=0;I<M.length;I++)e.rp.push(E[M[I]*2],u,E[M[I]*2+1]),e.rc.push(p.r*T,p.g*T,p.b*T);if(t.m>.5)for(let I=M.length-1;I>=0;I--)e.rp.push(E[M[I]*2],d,E[M[I]*2+1]),e.rc.push(p.r*.6,p.g*.6,p.b*.6)}}pitchedRoof(e,t,n,i,r,o,a,c,l){let h=(0,jr.default)(n,i),u=[];for(let D=0;D<n.length;D+=2)u.push([n[D],n[D+1]]);let f=[];for(let D of[e,...t])for(let G=0;G<D.length;G++)f.push([D[G],D[(G+1)%D.length]]);let d=0;for(let D=0;D<e.length;D++){let G=e[D],P=e[(D+1)%e.length];d+=G[0]*P[1]-P[0]*G[1]}d=Math.abs(d/2);let p=o.k==="house"||this.mobile,x=p?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),g=[];for(let D=0;D<h.length;D+=3)g.push([h[D],h[D+1],h[D+2]]);let m=new Map,_=(D,G)=>{let P=D<G?D*1e6+G:G*1e6+D,L=m.get(P);return L===void 0&&(L=u.length,u.push([(u[D][0]+u[G][0])/2,(u[D][1]+u[G][1])/2]),m.set(P,L)),L},v=(D,G)=>Math.hypot(u[D][0]-u[G][0],u[D][1]-u[G][1])>x;for(let D=0;D<(p?4:7);D++){let G=!1,P=[];for(let L of g){let k=v(L[0],L[1]),$=v(L[1],L[2]),Q=v(L[2],L[0]),K=k+$+Q;if(!K){P.push(L);continue}G=!0;let[Z,ne,oe]=L,X=[k,$,Q];if(K===1){for(;!X[0];)[Z,ne,oe]=[ne,oe,Z],X=[X[1],X[2],X[0]];let ee=_(Z,ne);P.push([Z,ee,oe],[ee,ne,oe])}else if(K===2){for(;X[2];)[Z,ne,oe]=[ne,oe,Z],X=[X[1],X[2],X[0]];let ee=_(Z,ne),he=_(ne,oe);P.push([Z,ee,he],[ee,ne,he],[Z,he,oe])}else{let ee=_(Z,ne),he=_(ne,oe),de=_(oe,Z);P.push([Z,ee,de],[ee,ne,he],[de,he,oe],[ee,he,de])}}if(g=P,!G)break}let y=u.map(([D,G])=>{let P=1e9;for(let[L,k]of f){let $=k[0]-L[0],Q=k[1]-L[1],K=$*$+Q*Q||1e-9,Z=((D-L[0])*$+(G-L[1])*Q)/K;Z=Z<0?0:Z>1?1:Z;let ne=L[0]+$*Z-D,oe=L[1]+Q*Z-G,X=ne*ne+oe*oe;X<P&&(P=X)}return Math.sqrt(P)}),w=.01;for(let D of y)w=Math.max(w,D);let b=o.r,E;o.s==="d"?E=y.map(D=>b*Math.sqrt(Math.max(0,1-(1-D/w)**2))):o.s==="p"?E=y.map(D=>b*D/w):E=y.map(D=>Math.min(D*.82,b+1.2));let C=Fa;o.rc?C.set(o.rc):C.set(xd[bn(a*1e6|0)*xd.length|0]);let M=C.r,T=C.g,I=C.b;for(let D of g){let G=.88+bn(D[0]*31+D[1])*.1;for(let P of D)c.push(u[P][0],r+E[P],u[P][1]),l.push(M*G,T*G,I*G)}}meshesFrom(e,t=!0){let n=[];if(e.wp.length){let i=new Ct;i.setAttribute("position",new tt(e.wp,3)),i.setAttribute("normal",new tt(e.wn,3)),i.setAttribute("color",new tt(e.wc,3)),i.setAttribute("fuv",new tt(e.wf,3)),i.setAttribute("fdat",new tt(e.wd,4)),i.computeBoundingSphere();let r=new et(i,this.wallMat);r.castShadow=r.receiveShadow=t,n.push(r)}if(e.rp.length){let i=new Ct;i.setAttribute("position",new tt(e.rp,3)),i.setAttribute("color",new tt(e.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new et(i,this.roofMat);r.castShadow=r.receiveShadow=t,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let e=new Map;this.d.tall.forEach((t,n)=>{let i=t.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=xt(Math.floor(r/this.T),0,this.ntx-1),c=xt(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=e.get(l);h||e.set(l,h=this.newArrays()),this.emitBuilding(h,t,i,[],bn(n*613+7),l,!0)});for(let[t,n]of e){let i=new Vt;for(let r of this.meshesFrom(n,!1))i.add(r);t.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(e){let t=e.data,n=this.T,i=e.x0,r=e.z0,o=new at,a=new en,c=new N,l=new N,h=new N(0,1,0),u=t.trees.length;if(u){let _=new Dn(this.trunkGeo,this.trunkMat,u),v=new Dn(this.crownGeo,this.crownMat,u);for(let w=0;w<u;w++){let b=t.trees[w][0]/10+i,E=t.trees[w][1]/10+r,C=e.k*4099+w,M=.75+bn(C*3+1)*.6,T=this.hAt(b,E);a.setFromAxisAngle(h,bn(C)*6.28),o.compose(l.set(b,T,E),a,c.set(M,M*(.9+bn(C*5)*.3),M)),_.setMatrixAt(w,o),v.setMatrixAt(w,o),Fa.setHSL(.22+bn(C*11)*.08,.38+bn(C*17)*.2,.22+bn(C*19)*.1),v.setColorAt(w,Fa),this.colliders.add({ax:b-.25,az:E,bx:b+.25,bz:E,y0:T-2,y1:T+3,kind:"t",tag:e},b-.3,E-.3,b+.3,E+.3,e.keys)}_.castShadow=v.castShadow=!this.mobile||u<500,v.receiveShadow=!0,_.frustumCulled=v.frustumCulled=!1;let y=new Vt;y.add(_,v),e.objs.push(y),this.group.add(y)}yield;let f=t.lamps.map(_=>[_[0]/10+i,_[1]/10+r]),d=new ai(20),p=[];for(let _ of f)d.add(_,_[0],_[1],_[0],_[1]);for(let _ of this.ix.road[e.k]){if(_.b||_.c<1||_.c>5)continue;let v=_.p,y=14+bn(v[0][0]*7+v[0][1])*10,w=1;for(let b=0;b<v.length-1;b++){let E=v[b][0]/10,C=v[b][1]/10,M=v[b+1][0]/10,T=v[b+1][1]/10,I=Math.hypot(M-E,T-C);if(!(I<.01)){for(;y<I;){let D=y/I,G=-(T-C)/I,P=(M-E)/I,L=_.c===5?0:_.w/2+.9,k=E+(M-E)*D+G*L*w,$=C+(T-C)*D+P*L*w;if(k>=i&&$>=r&&k<i+n&&$<r+n&&!d.query(k,$,13,p).length){let Q=[k,$];f.push(Q),d.add(Q,k,$,k,$)}w=-w,y+=_.c>=3?26:30}y-=I}}}e.lampPts=f;let x=f.filter(([_,v])=>this.surfaceY(_,v)===this.hAt(_,v));if(x.length){let _=new Dn(this.postGeo,this.postMat,x.length),v=new Dn(this.headGeo,this.lampHeadMat,x.length);x.forEach(([w,b],E)=>{o.makeTranslation(w,this.hAt(w,b),b),_.setMatrixAt(E,o),v.setMatrixAt(E,o),this.colliders.add({ax:w-.1,az:b,bx:w+.1,bz:b,y0:-50,y1:999,kind:"p",tag:e},w-.2,b-.2,w+.2,b+.2,e.keys)}),_.frustumCulled=v.frustumCulled=!1;let y=new Vt;y.add(_,v),e.objs.push(y),this.group.add(y)}yield;let g=this.newArrays(),m=this.gates.length;for(let _=0;_<t.bld.length;_++){let v=t.bld[_];if(v.n==="UFO")continue;v.n==="Kostol sv. Al\u017Ebety"&&(v.c="#9cc4e8",v.rc="#5f86b4");let y=v.o.map(b=>[b[0]/10+i,b[1]/10+r]),w=(v.i||[]).map(b=>b.map(E=>[E[0]/10+i,E[1]/10+r]));this.emitBuilding(g,v,y,w,bn(e.k*7919+_*977+13),e,!1),_%24===23&&(yield)}for(let _=m;_<this.gates.length;_++){let v=this.gates[_],y=v.outer;if(v.tile!==e)continue;let w=0,b=0;for(let C of y)w+=C[0],b+=C[1];w/=y.length,b/=y.length;let E=y.slice().sort((C,M)=>Math.hypot(M[0]-w,M[1]-b)-Math.hypot(C[0]-w,C[1]-b)).slice(0,4);for(let C of E){let M=C[0]+(w-C[0])*.18,T=C[1]+(b-C[1])*.18,I=v.bot-v.gmin+3,D=new et(new Zt(1.8,I,1.8),this.gateMat);D.position.set(M,v.gmin-3+I/2,T),D.castShadow=D.receiveShadow=!0,e.objs.push(D),this.group.add(D),this.colliders.add({ax:M-.9,az:T,bx:M+.9,bz:T,y0:-50,y1:v.bot,kind:"b",tag:e},M-1,T-1,M+1,T+1,e.keys),this.colliders.add({ax:M,az:T-.9,bx:M,bz:T+.9,y0:-50,y1:v.bot,kind:"b",tag:e},M-1,T-1,M+1,T+1,e.keys)}}yield;for(let _ of this.meshesFrom(g))e.objs.push(_),this.group.add(_);if(yield,this.buildMarkings(e),yield,this.buildFountains(e),yield,t.walls.length){let _=[],v=[],y=new Oe,w=(C,M,T,I,D,G,P,L,k)=>{let $=Math.hypot(T-C,I-M);if($<.05)return;let Q=-(I-M)/$*k*.5,K=(T-C)/$*k*.5,Z=[[C+Q,M+K],[T+Q,I+K],[T-Q,I-K],[C-Q,M-K]],ne=(ee,he,de,Ae)=>{_.push(...ee,...he,...de,...ee,...de,...Ae);for(let We=0;We<6;We++)v.push(y.r,y.g,y.b)},oe=ee=>ee===0||ee===3?D:G,X=ee=>ee===0||ee===3?P:L;for(let ee=0;ee<4;ee++){let he=(ee+1)%4;ne([Z[ee][0],oe(ee),Z[ee][1]],[Z[he][0],oe(he),Z[he][1]],[Z[he][0],X(he),Z[he][1]],[Z[ee][0],X(ee),Z[ee][1]])}ne([Z[0][0],X(0),Z[0][1]],[Z[1][0],X(1),Z[1][1]],[Z[2][0],X(2),Z[2][1]],[Z[3][0],X(3),Z[3][1]])};for(let C of t.walls){let M=C.p.map(I=>[I[0]/10+i,I[1]/10+r]),T=C.k==="c"?2.4:C.k==="r"?.8:.45;y.set(C.k==="c"?"#a39a88":C.k==="r"?"#8f887a":"#a8a092");for(let I=0;I<M.length-1;I++){let[D,G]=M[I],[P,L]=M[I+1],k=this.hAt(D,G),$=this.hAt(P,L),Q=Math.min(C.h,C.k==="c"?9:4);if(w(D,G,P,L,k-2,$-2,k+Q,$+Q,T),this.colliders.add({ax:D,az:G,bx:P,bz:L,y0:Math.min(k,$)-3,y1:Math.max(k,$)+Q,kind:"w",tag:e},D,G,P,L,e.keys),C.k==="c"){let K=Math.hypot(P-D,L-G);for(let Z=.6;Z<K-.6;Z+=2.4){let ne=Z/K,oe=Math.min(1,(Z+1.2)/K),X=dt(k,$,ne)+Q,ee=dt(k,$,oe)+Q;w(D+(P-D)*ne,G+(L-G)*ne,D+(P-D)*oe,G+(L-G)*oe,X,ee,X+1.1,ee+1.1,T)}}}}let b=new Ct;b.setAttribute("position",new tt(_,3)),b.setAttribute("color",new tt(v,3)),b.computeVertexNormals();let E=new et(b,this.stoneMat);E.castShadow=E.receiveShadow=!0,e.objs.push(E),this.group.add(E)}e.lod&&(e.lod.visible=!1),e.state=4,this.lampDirty=!0}buildMarkings(e){let t=[],n=[],i=this.T,r=e.x0,o=e.z0,a=(w,b)=>w>=r&&b>=o&&w<r+i&&b<o+i,c=(w,b,E,C,M)=>{t.push(...w,...b,...E,...w,...E,...C);for(let T=0;T<6;T++)n.push(M[0],M[1],M[2])},l=w=>w.map(b=>[b[0]/10,b[1]/10]),h=(w,b)=>{let E=[],C=0;for(let M=0;M<w.length-1;M++){let[T,I]=w[M],[D,G]=w[M+1],P=Math.hypot(D-T,G-I);if(P<.01)continue;let L=Math.max(1,Math.ceil(P/b)),k=(D-T)/P,$=(G-I)/P;for(let Q=0;Q<L;Q++)E.push({x:T+(D-T)*Q/L,z:I+(G-I)*Q/L,s:C+P*Q/L,dx:k,dz:$});C+=P,M===w.length-2&&E.push({x:D,z:G,s:C,dx:k,dz:$})}for(let M=1;M<E.length-1;M++){let T=E[M-1],I=E[M+1],D=Math.hypot(I.x-T.x,I.z-T.z)||1;E[M].nx=-(I.z-T.z)/D,E[M].nz=(I.x-T.x)/D}if(E.length){let M=E[0],T=E[E.length-1];M.nx=-M.dz,M.nz=M.dx,T.nx=-T.dz,T.nz=T.dx}return E},u=(w,b,E,C,M,T,I=0,D=0,G=null)=>{for(let P=0;P<w.length-1;P++){let L=w[P],k=w[P+1],$=(L.s+k.s)/2;if(!a((L.x+k.x)/2,(L.z+k.z)/2)||I&&$%(I+D)>I||G&&G.some(([he,de])=>$>he&&$<de))continue;let Q=L.x+L.nx*b,K=L.z+L.nz*b,Z=k.x+k.nx*b,ne=k.z+k.nz*b,oe=E/2,X=M(Q,K)+T,ee=M(Z,ne)+T;c([Q+L.nx*oe,X,K+L.nz*oe],[Z+k.nx*oe,ee,ne+k.nz*oe],[Z-k.nx*oe,ee,ne-k.nz*oe],[Q-L.nx*oe,X,K-L.nz*oe],C)}},f=(w,b)=>this.hAt(w,b),d=(w,b)=>this.surfaceY(w,b),p=[.78,.78,.74],x=[.36,.37,.39];this.touch||(this.touch=new Map,this.d.road.forEach((w,b)=>{if(!(w.c<1||w.c>4))for(let E of w.p){let C=E[0]*2e5+E[1],M=this.touch.get(C);M?M.includes(b)||M.push(b):this.touch.set(C,[b])}}),this.d.road.forEach((w,b)=>{w._i=b}));for(let w of this.ix.road[e.k]){if(w.c<1||w.c>4||w.s||w.pk||w.nv)continue;let b=!w.o,E=l(w.p),C=h(E,w.c>=3?2:2.5);if(C.length<2)continue;let M=w.b?d:f,T=C[C.length-1].s,I=[],D=0;for(let L=0;L<w.p.length;L++){L&&(D+=Math.hypot(E[L][0]-E[L-1][0],E[L][1]-E[L-1][1]));let k=(this.touch.get(w.p[L][0]*2e5+w.p[L][1])||[]).filter(K=>K!==w._i);if(!k.length)continue;let $=Math.max(...k.map(K=>this.d.road[K].w));(L===0||L===w.p.length-1)&&k.length===1&&this.d.road[k[0]].c===w.c&&Math.abs(this.d.road[k[0]].w-w.w)<.1||I.push([D-$/2-3,D+$/2+3])}if(T<14)continue;let G=w.b?.05:.04,P=w.w>=10;if(w.c>=2||w.c===1&&w.w>=6.5)if(P){b&&(u(C,.14,.12,p,M,G,0,0,I),u(C,-.14,.12,p,M,G,0,0,I));for(let L of b?[w.w/4,-w.w/4]:[w.w/6,-w.w/6])u(C,L,.13,p,M,G,3,6,I)}else(b||w.w>=7)&&u(C,0,.13,p,M,G,3,w.c>=3?4.5:6,I);if(w.c>=3)for(let L of[w.w/2-.3,-(w.w/2-.3)])u(C,L,.12,p,M,G,0,0,I)}let g=[],m=(w,b)=>{for(let E of this.edgeGrid.query(w,b,8,g)){let C=ls(w,b,E.ax,E.az,E.bx,E.bz,this._c);if(Math.hypot(w-C.x,b-C.z)<E.e.r.w/2-.1)return!0}return!1};for(let w of this.ix.cross[e.k]){let b=h(l(w),.25);for(let E=0;E<b.length-1;E++){let C=b[E];if(C.s%1>.5)continue;let M=b[E+1],T=(C.x+M.x)/2,I=(C.z+M.z)/2;if(!a(T,I)||!m(T,I))continue;let D=1.7,G=f(T,I)+.045;c([C.x+C.nx*D,G,C.z+C.nz*D],[M.x+M.nx*D,G,M.z+M.nz*D],[M.x-M.nx*D,G,M.z-M.nz*D],[C.x-C.nx*D,G,C.z-C.nz*D],[.82,.82,.78])}}for(let w of this.ix.tram[e.k]){let b=h(l(w.p),1.5);if(b.length<2)continue;let E=w.b?d:f;for(let C of[-.5,.5])u(b,C,.075,x,E,.05),u(b,C+.07*Math.sign(C),.05,[.05,.05,.055],E,.048)}for(let w of this.ix.rail[e.k]){let b=h(l(w),3);if(!(b.length<2)){u(b,0,2.7,[.13,.12,.11],f,.03),u(b,0,2.3,[.2,.17,.14],f,.04,.28,.42);for(let E of[-.72,.72])u(b,E,.09,[.42,.42,.44],f,.06)}}if(!t.length)return;this.markMat||(this.markMat=new Dt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.markMat.onBeforeCompile=w=>oi(w,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`));let _=new Ct,v=new Float32Array(t.length);for(let w=1;w<v.length;w+=3)v[w]=1;_.setAttribute("position",new tt(t,3)),_.setAttribute("normal",new Ft(v,3)),_.setAttribute("color",new tt(n,3)),_.computeBoundingSphere();let y=new et(_,this.markMat);y.receiveShadow=!0,e.objs.push(y),this.group.add(y)}buildFountains(e){let t=[],n=[],i=[];for(let r of e.data.water){let o=r[0].map(m=>[m[0]/10+e.x0,m[1]/10+e.z0]);if(o.length>60||o.length<3)continue;let a=0,c=0,l=1e9;for(let[m,_]of o)a+=m,c+=_,l=Math.min(l,this.hAt(m,_));if(a/=o.length,c/=o.length,l<this.water+1.5)continue;let h=l+.32,u=[];for(let m of o)u.push(m[0],m[1]);let f=(0,jr.default)(u);for(let m=0;m<f.length;m++)i.push(u[f[m]*2],h,u[f[m]*2+1]);let d=0;for(let m=0;m<o.length;m++){let _=o[m],v=o[(m+1)%o.length];d+=_[0]*v[1]-v[0]*_[1]}let p=d>0?1:-1,x=l+.5,g=.28;for(let m=0;m<o.length;m++){let _=o[m],v=o[(m+1)%o.length],y=Math.hypot(v[0]-_[0],v[1]-_[1]);if(y<.05)continue;let w=(v[1]-_[1])/y*p*g,b=-(v[0]-_[0])/y*p*g,E=[_[0],l-1,_[1]],C=[v[0],l-1,v[1]],M=[_[0],x,_[1]],T=[v[0],x,v[1]],I=[_[0]+w,x,_[1]+b],D=[v[0]+w,x,v[1]+b],G=[_[0]+w,l-1,_[1]+b],P=[v[0]+w,l-1,v[1]+b],L=(k,$,Q,K)=>{t.push(...k,...$,...Q,...k,...Q,...K);for(let Z=0;Z<6;Z++)n.push(.56,.54,.5)};L(E,C,T,M),L(M,T,D,I),L(I,D,P,G),this.colliders.add({ax:_[0],az:_[1],bx:v[0],bz:v[1],y0:l-2,y1:x+.4,kind:"w",tag:e},_[0],_[1],v[0],v[1],e.keys)}this.fountains.push({x:a,z:c,y:h,area:Math.abs(d)/2,tile:e})}if(i.length){let r=new Ct;r.setAttribute("position",new tt(i,3)),r.computeVertexNormals();let o=new et(r,this.waterMat);o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}if(t.length){let r=new Ct;r.setAttribute("position",new tt(t,3)),r.setAttribute("color",new tt(n,3)),r.computeVertexNormals();let o=new et(r,this.stoneMat);o.castShadow=o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}}buildBridges(){let e=this.d.road.filter(h=>h.b),t=h=>[h[0]/10,h[1]/10],n=h=>h[0]+","+h[1],i=new Set,r=new Map;e.forEach((h,u)=>{for(let f of[h.p[0],h.p[h.p.length-1]]){let d=n(f);r.has(d)||r.set(d,[]),r.get(d).push(u)}});let o=[];e.forEach((h,u)=>{if(i.has(u))return;i.add(u);let f=h.p.slice(),d=!0;for(;d;){d=!1;for(let p of[!1,!0]){let x=n(p?f[0]:f[f.length-1]);for(let g of r.get(x)||[]){if(i.has(g))continue;let m=e[g];if((m.n||"")===(h.n||"")){if(p){if(n(m.p[m.p.length-1])!==x)continue;f=m.p.slice(0,-1).concat(f)}else{if(n(m.p[0])!==x)continue;f=f.concat(m.p.slice(1))}i.add(g),d=!0;break}}if(d)break}}o.push({pts:f.map(t),w:h.w,n:h.n||"",c:h.c,bh:h.bh})});let a=this.d.river.map(h=>h.map(t)),c=(h,u)=>a.some(f=>od(h,u,f));this.bridges=[];let l=o.filter(h=>h.n==="Most SNP"&&h.pts.length>3).length;for(let h of o){let u=[],f=0;for(let b=0;b<h.pts.length-1;b++){let[E,C]=h.pts[b],[M,T]=h.pts[b+1],I=Math.hypot(M-E,T-C),D=Math.max(1,Math.ceil(I/2));for(let G=0;G<D;G++)u.push({x:E+(M-E)*G/D,z:C+(T-C)*G/D,d:f+I*G/D});f+=I}let d=h.pts[h.pts.length-1];if(u.push({x:d[0],z:d[1],d:f}),f<1)continue;let p=this.hAt(u[0].x,u[0].z),x=this.hAt(d[0],d[1]),g=h.n==="Most SNP",m=h.bh!==void 0?h.bh:g?11.5:7,_=m===0;for(let b of u)b.base=Math.max(dt(p,x,b.d/f),this.water+1.6),b.tgt=!_&&c(b.x,b.z)?this.water+m:b.base,_||(b.tgt=Math.max(b.tgt,this.hAt(b.x,b.z)+(g?.2:0)));let v=g?.055:.075;for(let b of u){let E=b.base;if(!_)for(let C of u)E=Math.max(E,C.tgt-v*Math.abs(b.d-C.d));b.y=E}let y=g?l>1?6.8:10.8:Math.max(2.5,h.w/2+1.2),w={s:u,hw:y,big:g,low:_,n:h.n};for(let b=0;b<u.length-1;b++){let E=u[b],C=u[b+1],M={ax:E.x,az:E.z,bx:C.x,bz:C.z,ya:E.y,yb:C.y,hw:y,br:w};this.decks.add(M,Math.min(E.x,C.x)-y,Math.min(E.z,C.z)-y,Math.max(E.x,C.x)+y,Math.max(E.z,C.z)+y)}this.bridges.push(w)}}buildBridgeMeshes(){let e=[],t=[],n=new Oe,i=(d,p,x,g,m)=>{e.push(...d,...p,...x,...d,...x,...g);for(let _=0;_<6;_++)t.push(m[0],m[1],m[2])};for(let d of this.bridges){let p=d.s;n.set(d.big?"#8d9297":"#b3aea2");let x=[n.r,n.g,n.b],g=[.24,.24,.26];for(let m=0;m<p.length-1;m++){let _=p[m],v=p[m+1],y=Math.hypot(v.x-_.x,v.z-_.z)||1,w=-(v.z-_.z)/y,b=(v.x-_.x)/y,E=d.hw,C=[_.x+w*E,_.y,_.z+b*E],M=[_.x-w*E,_.y,_.z-b*E],T=[v.x+w*E,v.y,v.z+b*E],I=[v.x-w*E,v.y,v.z-b*E],D=d.big?2.2:d.low?.8:2.2,G=K=>[K[0],K[1]-D,K[2]];i(C,T,I,M,g),i(G(C),G(M),G(I),G(T),x.map(K=>K*.6)),i(C,G(C),G(T),T,x),i(M,I,G(I),G(M),x);let P=[_.x+w*.15,_.y+.03,_.z+b*.15],L=[_.x-w*.15,_.y+.03,_.z-b*.15],k=[v.x-w*.15,v.y+.03,v.z-b*.15],$=[v.x+w*.15,v.y+.03,v.z+b*.15];if((d.big||m%4<2&&E>4)&&i(P,$,k,L,[.8,.78,.7]),_.y>this.hAt(_.x,_.z)+.9||v.y>this.hAt(v.x,v.z)+.9){for(let K of[1,-1]){let Z=[_.x+w*E*K,_.y,_.z+b*E*K],ne=[v.x+w*E*K,v.y,v.z+b*E*K],oe=(Z[0]+ne[0])/2+w*K*.7,X=(Z[2]+ne[2])/2+b*K*.7,ee=!1;for(let de of this.decks.query(oe,X,1,this._tmp)){if(de.br===d)continue;let Ae=ls(oe,X,de.ax,de.az,de.bx,de.bz,this._c);if(Math.hypot(oe-Ae.x,X-Ae.z)<de.hw&&Math.abs(de.ya+(de.yb-de.ya)*Ae.t-_.y)<1.6){ee=!0;break}}if(ee)continue;let he=(de,Ae)=>[de[0],de[1]+Ae,de[2]];i(Z,ne,he(ne,1.1),he(Z,1.1),[.78,.79,.8]),this.colliders.add({ax:Z[0],az:Z[2],bx:ne[0],bz:ne[2],y0:Math.min(_.y,v.y)-1,y1:Math.max(_.y,v.y)+1.4,kind:"r",tag:null},Z[0],Z[2],ne[0],ne[2])}if(!d.low&&!d.big&&m%30===15){let K=Math.min(this.hAt(_.x,_.z),this.water)-3;if(_.y-K>4){let ne=[_.x-2.2,_.y-D,_.z-2.2],oe=[_.x+2.2,_.y-D,_.z-2.2],X=[_.x+2.2,_.y-D,_.z+2.2],ee=[_.x-2.2,_.y-D,_.z+2.2],he=de=>[de[0],K,de[2]];i(ne,oe,he(oe),he(ne),x),i(oe,X,he(X),he(oe),x),i(X,ee,he(ee),he(X),x),i(ee,ne,he(ne),he(ee),x)}}}}}let r=(d,p,x,g)=>{let m=p[0]-d[0],_=p[1]-d[1],v=p[2]-d[2],y=Math.hypot(m,_,v)||1,w=-v,b=m,E=Math.hypot(w,b);E<1e-4?(w=1,b=0):(w/=E,b/=E);let C=_*b/y,M=(v*w-m*b)/y,T=-_*w/y,I=x/2,D=(P,L,k)=>[P[0]+w*I*L+C*I*k,P[1]+M*I*k,P[2]+b*I*L+T*I*k],G=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let P=0;P<4;P++){let L=(P+1)%4;i(D(d,...G[P]),D(p,...G[P]),D(p,...G[L]),D(d,...G[L]),g)}},o=d=>this.bridges.filter(p=>p.n===d).sort((p,x)=>x.s.length-p.s.length)[0],a=d=>{let p=Math.max(...d.s.map(g=>g.y)),x=d.s.filter(g=>g.y>p-.6);return x.length>8?x:null},c=(d,p,x,g)=>{let m=d[Math.max(0,p-1)],_=d[Math.min(d.length-1,p+1)],v=Math.hypot(_.x-m.x,_.z-m.z)||1;return[d[p].x-(_.z-m.z)/v*x,d[p].y+g,d[p].z+(_.x-m.x)/v*x]},l=o("Most Apollo");if(l&&a(l)){let d=a(l),p=d.length-1,x=[.86,.87,.88];for(let g of[-(l.hw+9),l.hw+9]){let m=null;for(let _=0;_<=p;_+=3){let v=_/p,y=c(d,_,g,34*4*v*(1-v));m&&r(m,y,1.8,x),_%9===0&&_>0&&_<p&&r(y,c(d,_,g*.75,.5),.3,x),m=y}m&&r(m,c(d,p,g,0),1.8,x)}}let h=o("Star\xFD most");if(h&&a(h)){let d=a(h),p=d.length-1,x=[.42,.55,.48];for(let g of[-(h.hw+2.5),h.hw+2.5])for(let m=0;m+6<=p;m+=6){let _=c(d,m,g,.4),v=c(d,m+6,g,.4),y=c(d,m+3,g,8.5),w=c(d,Math.max(0,m-3),g,8.5);r(_,y,.5,x),r(y,v,.5,x),m&&r(w,y,.6,x),r(_,v,.5,x)}}if(!e.length)return;let u=new Ct;u.setAttribute("position",new tt(e,3)),u.setAttribute("color",new tt(t,3)),u.computeVertexNormals();let f=new et(u,this.stoneMat);f.castShadow=f.receiveShadow=!0,f.frustumCulled=!1,this.group.add(f)}buildPylon(){let e=this.d.pylon.map(g=>g.map(m=>[m[0]/10,m[1]/10]));if(e.length<2)return;let t=e.map(g=>{let m=0,_=0;for(let v of g)m+=v[0],_+=v[1];return[m/g.length,_/g.length]}),n=new Vt,i=new Dt({color:9212310}),r=this.water+84,o=(t[0][0]+t[1][0])/2,a=(t[0][1]+t[1][1])/2,c=14,l=[];for(let g of t){let m=this.hAt(g[0],g[1])-2,_=new N(g[0],m,g[1]),v=new N(o+(g[0]-o)*.55,r,a+c),y=new et(new Zt(3.2,_.distanceTo(v),4.2),i);y.position.copy(_).add(v).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new N(0,1,0),v.clone().sub(_).normalize()),y.castShadow=!0,n.add(y),l.push(v),this.colliders.add({ax:g[0]-2,az:g[1]-2,bx:g[0]+2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2),this.colliders.add({ax:g[0]+2,az:g[1]-2,bx:g[0]-2,bz:g[1]+2,y0:-50,y1:m+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2)}let h=o,u=a+c,f=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([g,m])=>new _e(g,m)),d=new et(new $s(f,40),new Dt({color:10133670}));d.position.set(h,r+3,u),d.castShadow=!0,n.add(d);let p=new et(new er(15.8,.35,6,48),new fn({color:16765578}));p.rotation.x=Math.PI/2,p.position.set(h,r+3.3,u),this.ufoRing=p,n.add(p);let x=this.bridges.find(g=>g.big);if(x){let g=new Dt({color:13159632}),m=x.s.filter(v=>{let y=Math.hypot(v.x-o,v.z-a);return y>40&&y<240&&v.z<a}),_=[];for(let v=0;v<m.length;v+=Math.max(1,Math.floor(m.length/8)))_.push(m[v]);for(let v of _)for(let y of[-1,1]){let w=l[y<0?0:1],b=new N(dt(w.x,o,.2),dt(r-12,r-40,Math.hypot(v.x-o,v.z-a)/240),dt(w.z,a,.6)),E=new N(v.x+y*9.5,v.y+.6,v.z),C=new et(new Zt(.35,b.distanceTo(E),.35),g);C.position.copy(b).add(E).multiplyScalar(.5),C.quaternion.setFromUnitVectors(new N(0,1,0),E.clone().sub(b).normalize()),n.add(C)}}n.traverse(g=>{g.frustumCulled=!1}),this.group.add(n),this.ufoPos=new N(h,r+3,u)}buildRoadGraph(){let e=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),t=new Map,n=l=>l[0]*2e5+l[1];for(let l of e)l.p.forEach((h,u)=>{let f=n(h);t.set(f,(t.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of e){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||t.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(m=>[m[0]/10,m[1]/10]),d=r(l.p[h]),p=r(l.p[u]),x=(m,_,v)=>{let y=[0],w=0;for(let E=1;E<v.length;E++)w+=Math.hypot(v[E][0]-v[E-1][0],v[E][1]-v[E-1][1]),y.push(w);let b={a:m,b:_,p:v,cum:y,L:w,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(b),m.out.push(b),_.inn.push(b),b},g=x(d,p,f);if(!l.o){let m=x(p,d,f.slice().reverse());g.rev=m,m.rev=g}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let p of c){if(Math.abs(p.x-h)>18||Math.abs(p.z-u)>18)continue;let x=Math.hypot(p.x-h,p.z-u);x<d&&p.out.length+p.inn.length>=3&&(d=x,f=p)}f&&!f.sig&&(f.sig={phase:bn(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(e,t,n=40,i=null){let r=this.edgeGrid.query(e,t,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=ls(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(e-h.x,t-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(e,t,n){if(!e.sig)return!0;let i=(n+e.sig.phase)%30,r=Math.abs(Math.cos(t))>Math.abs(Math.sin(t));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let e=[];for(let c of this.d.foot)e.push(c.p);for(let c of this.d.cross)e.push(c);for(let c of this.d.steps)e.push(c);for(let c of this.d.road)c.c===5&&!c.b&&e.push(c.p);let t=c=>c[0]*2e5+c[1],n=new Map;for(let c of e)c.forEach((l,h)=>n.set(t(l),(n.get(t(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=t(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let x=1;x<c.length;x++)f+=Math.hypot(c[x][0]-c[x-1][0],c[x][1]-c[x-1][1]),d.push(f);if(f<(u?8:.5))return;let p={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(p),h.e.push(p),o.push(p)};for(let c of e){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(t(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let p=c.p[Math.max(0,d-1)],x=c.p[Math.min(c.p.length-1,d+1)],g=x[0]-p[0],m=x[1]-p[1],_=Math.hypot(g,m)||1;return[f[0]/10-m/_*h,f[1]/10+g/_*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(e,t,n){let i=e.cum;t=xt(t,0,e.L);let r=0;for(;r<i.length-2&&i[r+1]<t;)r++;let o=i[r+1]-i[r]||1,a=(t-i[r])/o,c=e.p[r],l=e.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}collide(e,t,n,i,r){let o=this.colliders.query(e,t,i+.5,this._tmp),a=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let c=0;c<o.length;c++){let l=o[c];if(n>l.y1||n+1.5<l.y0)continue;let h=ls(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=e-h.x,f=t-h.z,d=Math.hypot(u,f);if(d<i){d<1e-4&&(u=-(l.bz-l.az),f=l.bx-l.ax);let p=Math.hypot(u,f)||1,x=i-d;e+=u/p*x,t+=f/p*x,r.nx+=u/p,r.nz+=f/p,r.d=Math.max(r.d,x),r.kind=l.kind,a=!0}}if(r.x=e,r.z=t,a){let c=Math.hypot(r.nx,r.nz)||1;r.nx/=c,r.nz/=c}return a}rayHit(e,t,n,i,r){let o=(e+n)/2,a=(t+i)/2,c=Math.hypot(n-e,i-t)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=Ry(e,t,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function Ry(s,e,t,n,i,r,o,a){let c=t-s,l=n-e,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-e)*h)/f,p=((i-s)*l-(r-e)*c)/f;return d>=0&&d<=1&&p>=0&&p<=1?d:null}var Cy=ns,yd=ii,Jl=$n,cr=jt,Jr=va,$r=Yo,Oa=_e,Py=Tt,Ly=Ct,Md=tt,Iy=et,Ny=Di,Dy=Ks,Uy=_i,zy=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Qr="precision highp float; in vec3 position; in vec2 uv;"+zy,bd=class{constructor(s){this.r=s;let e=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"));this.type=e?Cy:yd,this.hdr=!!e,this.exposure={value:1},this.samples=4,this.sceneRT=new Jl(4,4,{type:this.type,depthBuffer:!0,minFilter:cr,magFilter:cr,samples:this.samples}),this.ldrRT=new Jl(4,4,{type:yd,depthBuffer:!1,minFilter:cr,magFilter:cr}),this.bloom=[];for(let n=0;n<5;n++)this.bloom.push(new Jl(4,4,{type:this.type,depthBuffer:!1,minFilter:cr,magFilter:cr}));this.brightMat=new Jr({glslVersion:$r,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new Oa(1,1)}},vertexShader:Qr,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new Jr({glslVersion:$r,uniforms:{tSrc:{value:null},uTexel:{value:new Oa(1,1)}},vertexShader:Qr,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new Jr({glslVersion:$r,uniforms:{tSrc:{value:null},uTexel:{value:new Oa(1,1)}},vertexShader:Qr,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:Uy,transparent:!0}),this.gradeMat=new Jr({glslVersion:$r,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:kt.uNight},vertexShader:Qr,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
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
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new Jr({glslVersion:$r,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new Oa(1,1)},uFxaa:{value:1},uFlash:{value:new Py(0,0,0,0)}},vertexShader:Qr,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
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
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let t=new Ly;t.setAttribute("position",new Md([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new Md([0,0,2,0,0,2],2)),this.quad=new Iy(t,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new Ny,this.qscene.add(this.quad),this.qcam=new Dy}setSize(s,e,t=1,n=4){let i=Math.max(16,Math.round(s*t)),r=Math.max(16,Math.round(e*t));n!==this.samples&&(this.samples=n,this.sceneRT.dispose(),this.sceneRT.samples=n),this.sceneRT.setSize(i,r),this.ldrRT.setSize(i,r);let o=i>>1,a=r>>1;for(let c of this.bloom)c.setSize(Math.max(2,o),Math.max(2,a)),o>>=1,a>>=1;return this.finalMat.uniforms.uTexel.value.set(1/i,1/r),this.finalMat.uniforms.uFxaa.value=n>0?0:1,this.w=i,this.h=r,this.cw=s,this.ch=e,{aspect:s/e}}_pass(s,e){this.quad.material=s,this.r.setRenderTarget(e),this.r.render(this.qscene,this.qcam)}render(s,e){let t=this.r,n=this.bloom;t.setRenderTarget(this.sceneRT),t.render(s,e),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,n[0]);for(let i=1;i<n.length;i++)this.downMat.uniforms.tSrc.value=n[i-1].texture,this.downMat.uniforms.uTexel.value.set(1/n[i-1].width,1/n[i-1].height),this._pass(this.downMat,n[i]);t.autoClear=!1;for(let i=n.length-1;i>0;i--)this.upMat.uniforms.tSrc.value=n[i].texture,this.upMat.uniforms.uTexel.value.set(.5/n[i].width,.5/n[i].height),this._pass(this.upMat,n[i-1]);t.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),t.setRenderTarget(null),t.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,t.render(this.qscene,this.qcam)}};var se={Mesh:et,Group:Vt,Scene:Di,Object3D:Bt,InstancedMesh:Dn,Vec2:_e,Vec3:N,Vec4:Tt,Mat4:at,Quat:en,Color:Oe,Box3:$t,Geo:Ct,F32:tt,Attr:Ft,Box:Zt,Cyl:Xn,Sphere:Ui,Plane:ss,Torus:er,Lathe:$s,Ico:Qs,Lambert:Dt,Basic:fn,Standard:zi,Shader:Mn,CanvasTex:os,DataTex:Ur,Linear:jt,Nearest:Kt,MipLinear:Vn,Additive:_i,DoubleSide:Jt,BackSide:hn,SRGB:zt};function Sd(s){let{Fe:e,Wt:t,Tt:n,Pn:i,Ln:r,we:o,q:a,Ve:c,vt:l,Kn:h,an:u,Xs:f,Ye:d,Ge:p,Xn:x,ct:g,en:m,fn:_,Zs:v,mh:y,Zn:w,Yn:b,Ks:E,OX:C,OZ:M}=s;var T=(()=>{let I=Math.PI,D=!1,G={};function P(z,Y,F){let te=document.createElement("canvas");te.width=z,te.height=Y,F(te.getContext("2d"),z,Y);let U=new se.CanvasTex(te);return U.colorSpace=se.SRGB,U.anisotropy=4,U}function L(z,Y=1){return z.onBeforeCompile=F=>f(F,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${Y.toFixed(2)}; }`),z}function k(z,Y){if(!z||z._gl||z.isMeshBasicMaterial)return z;z._gl=1;let F=z.name||"",te=Y!==void 0?Y:/window|glass/i.test(F)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(F)?0:/head|tail/i.test(F)?.06:.07;return z.onBeforeCompile=U=>f(U,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${te.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(te*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),z}function $(z){let Y=[],F=[],te=[],U=new se.Color;for(let[ie,ue,be,ke,Ee,Ke,Qe]of z){let mt=new se.Box(ie,ue,be).toNonIndexed();mt.translate(ke,Ee,Ke);let lt=mt.attributes.position.array,St=mt.attributes.normal.array;U.set(Qe);for(let qe=0;qe<lt.length;qe+=3)Y.push(lt[qe],lt[qe+1],lt[qe+2]),F.push(St[qe],St[qe+1],St[qe+2]),te.push(U.r,U.g,U.b)}let V=new se.Geo;return V.setAttribute("position",new se.F32(Y,3)),V.setAttribute("normal",new se.F32(F,3)),V.setAttribute("color",new se.F32(te,3)),V}let Q=null;function K(){if(!Q){Q=[];let z="ABCDEFGHJKLMNPRSTVXYZ",Y=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let F=0;F<12;F++){let te=Y[F]+" "+(100+Math.floor(_(F*7+3)*900))+z[Math.floor(_(F*13+1)*z.length)]+z[Math.floor(_(F*17+5)*z.length)],U=P(256,64,(V,ie,ue)=>{V.fillStyle="#f5f5f0",V.fillRect(0,0,ie,ue),V.fillStyle="#1c3f9e",V.fillRect(0,0,30,ue),V.fillStyle="#fff",V.font="700 15px sans-serif",V.textAlign="center",V.fillText("SK",15,54),V.strokeStyle="#111",V.lineWidth=4,V.strokeRect(2,2,ie-4,ue-4),V.fillStyle="#111",V.font='700 42px "JetBrains Mono", monospace',V.textBaseline="middle",V.fillText(te,(ie+30)/2,ue/2+3)});Q.push(new se.Lambert({map:U,name:"Plate"}))}}return m(Q)}let Z={};function ne(z){if(Z[z])return Z[z];let Y=P(512,96,(F,te,U)=>{if(z==="pz"){F.fillStyle="#f2f2f0",F.fillRect(0,0,te,U);let V=12,ie=te/V;for(let ue=0;ue<2;ue++)for(let be=0;be<V;be++)F.fillStyle=(be+ue)%2?"#0b3fa8":"#d9ea10",F.fillRect(be*ie,8+ue*40,ie+1,40);F.fillStyle="#0b3fa8",F.fillRect(te*.31,4,te*.38,U-8),F.fillStyle="#fff",F.font="900 54px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("POL\xCDCIA",te/2,U/2+4)}else if(z==="pz25")F.fillStyle="#101216",F.fillRect(0,10,te,U-26),F.fillStyle="#0b4fc4",F.beginPath(),F.moveTo(0,10),F.lineTo(150,10),F.lineTo(96,U-16),F.lineTo(0,U-16),F.fill(),F.beginPath(),F.moveTo(te,10),F.lineTo(te-150,10),F.lineTo(te-96,U-16),F.lineTo(te,U-16),F.fill(),F.fillStyle="#e0102a",F.fillRect(0,U-14,te,6),F.fillStyle="#f2f2f0",F.fillRect(0,0,te,8),F.fillRect(0,U-8,te,8),F.fillStyle="#fff",F.font="900 50px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("POL\xCDCIA",te/2,U/2-2);else{F.fillStyle="#f4f4f2",F.fillRect(0,0,te,U);let V=16,ie=te/V;for(let ue=0;ue<V;ue++)F.fillStyle=ue%2?"#0d3a8c":"#f4f4f2",F.fillRect(ue*ie,U-30,ie+1,22);F.fillStyle="#0d3a8c",F.fillRect(0,6,te,5),F.font="900 40px Anton, Impact, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("MESTSK\xC1 POL\xCDCIA",te/2,38)}});return Z[z]=L(new se.Lambert({map:Y}))}function oe(z,Y){let F=z.wid,te=z.len,U=(b.cars[z.kind]||{}).h||1.5,V=ne(Y),ie=new se.Plane(te*.86,.36);for(let Qe of[1,-1]){let mt=new se.Mesh(ie,V);mt.rotation.y=Qe*I/2,mt.position.set(Qe*(F/2+.014),U>1.6?.86:.74,-.05),z.obj.add(mt)}let ue=new se.Group,be=new se.Mesh(new se.Box(F*.62,.05,.3),new se.Lambert({color:1382170})),ke=new se.Box(F*.27,.12,.26),Ee=new se.Mesh(ke,new se.Basic({color:16719904})),Ke=new se.Mesh(ke,new se.Basic({color:2113791}));Ee.position.set(F*.16,.085,0),Ke.position.set(-F*.16,.085,0),ue.add(be,Ee,Ke),ue.position.set(0,U+.02,-.15),z.obj.add(ue),z.bar={red:Ee,blue:Ke,idle:Y==="mp"},z.livery=Y}function X(z){let Y=z.bar;if(Y.idle&&!z.driver){Y.red.material.color.setRGB(.25,.3,.9),Y.blue.material.color.setRGB(.25,.3,.9);return}let F=Math.sin(a.t*14)>0;Y.red.material.color.setRGB(F?6:.3,.1,.1),Y.blue.material.color.setRGB(.1,.2,F?.3:6)}let ee=null;function he(z){if(!z||g()>.09)return;ee||(ee=new se.Basic({map:P(128,48,(te,U,V)=>{te.fillStyle="#ffd21a",te.fillRect(0,0,U,V),te.fillStyle="#111",te.font="900 38px Anton, Impact, sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText("TAXI",U/2,V/2+3)})}));let Y=(b.cars[z.kind]||{}).h||1.5,F=new se.Mesh(new se.Box(.46,.16,.16),ee);F.position.set(0,Y+.07,.1),z.obj.add(F),z.taxi=!0}let de=6.3,Ae=.5,We=5,it=de+Ae,Be=We*de+(We-1)*Ae,me={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},O=[["1","HLAVN\xC1 STANICA"],["3","RA\u010CA"],["4","D\xDABRAVKA"],["4","ZLAT\xC9 PIESKY"],["9","KARLOVA VES"],["9","RU\u017DINOV"],["1","PETR\u017DALKA"]];function we(){let z="#cf1420",Y="#17181b",F="#0b0d11",te="#8f9398",U=de/2,V=[[2.34,.44,de-.1,0,.34,0,Y],[2.48,.74,de,0,.93,0,z],[2.42,1.2,de,0,1.9,0,F],[2.48,.4,de,0,2.7,0,z],[2.24,.14,de,0,2.97,0,te],[1.5,.3,de*.5,0,3.18,.3,"#b4b8bc"]],ie=[2.06,2.5,Ae+.14,0,1.6,-U-Ae/2,"#131315"],ue=Te=>[[2.2,.44,1,0,.34,Te*(U+.45),Y],[2.36,.74,1,0,.93,Te*(U+.48),z],[2.3,1.2,.86,0,1.9,Te*(U+.4),F],[2.36,.4,.74,0,2.7,Te*(U+.36),z],[2.1,.14,.6,0,2.97,Te*(U+.28),te],[.5,.06,.1,0,1.2,Te*(U+.99),"#f2f2f2"]],be=[[1.5,.3,de*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],ke={front:$([...V,ie,...ue(1)]),mid:$([...V,ie]),midP:$([...V,ie,...be]),rear:$([...V,...ue(-1)])},Ee=de-.3,Ke=[],Qe=[],mt=[];for(let Te of[1,-1]){let S=Te*1.246,B=-Te*Ee/2,W=Te*Ee/2,j=[[S,1.36,W,0,0],[S,1.36,B,1,0],[S,2.44,B,1,1],[S,1.36,W,0,0],[S,2.44,B,1,1],[S,2.44,W,0,1]];for(let q of j)Ke.push(q[0],q[1],q[2]),Qe.push(q[3],q[4]),mt.push(Te,0,0)}ke.win=new se.Geo,ke.win.setAttribute("position",new se.F32(Ke,3)),ke.win.setAttribute("uv",new se.F32(Qe,2)),ke.win.setAttribute("normal",new se.F32(mt,3));let lt=Te=>(S,B,W)=>{S.fillStyle=Te?"#000":"#0c0f13",S.fillRect(0,0,B,W);let j=4,q=B/j;for(let ve=0;ve<j;ve++)if(S.fillStyle=Te?ve===1?"#fff0c8":"#ffe0a0":"#1b2630",S.fillRect(ve*q+5,6,q-10,W-12),Te){S.fillStyle="rgba(40,25,10,0.75)";for(let Ne=0;Ne<2;Ne++){let ze=ve*q+14+_(ve*9+Ne*5)*(q-30);S.beginPath(),S.arc(ze,W*.45,6,0,7),S.fill(),S.fillRect(ze-8,W*.45+5,16,W)}}},St=k(new se.Lambert({vertexColors:!0}),.07),qe=new se.Lambert({map:P(256,64,lt(!1)),emissiveMap:P(256,64,lt(!0)),emissive:new se.Color(0,0,0)});me.geo=ke,me.mBody=St,me.mWin=qe,me.mHead=new se.Basic({color:16773836}),me.mTail=new se.Basic({color:16718352}),me.gLamp=new se.Box(.3,.14,.06),me.gDisp=new se.Plane(1.7,.3),me.disp={}}function le(z){let Y=z[0]+z[1];return me.disp[Y]||(me.disp[Y]=new se.Basic({map:P(256,48,(F,te,U)=>{F.fillStyle="#050505",F.fillRect(0,0,te,U),F.fillStyle="#ffb020",F.font='700 30px "JetBrains Mono", monospace',F.textBaseline="middle",F.textAlign="left",F.fillText(z[0],8,U/2+2),F.font='700 22px "JetBrains Mono", monospace',F.fillText(z[1],44,U/2+2)})})),me.disp[Y]}function Me(){let z=U=>U[0]*1e5+U[1],Y=new Map;for(let U of e.d.tram){if(U.p.length<2)continue;let V=U.p.map(be=>[be[0]/10,be[1]/10]),ie=0;for(let be=1;be<V.length;be++)ie+=Math.hypot(V[be][0]-V[be-1][0],V[be][1]-V[be-1][1]);let ue={p:V,L:ie,k0:z(U.p[0]),k1:z(U.p[U.p.length-1]),next:[],dist:1e9,nin:0};me.edges.push(ue),(Y.get(ue.k0)||Y.set(ue.k0,[]).get(ue.k0)).push(ue)}for(let U of me.edges){U.next=Y.get(U.k1)||[];for(let V of U.next)V.nin++}for(let U of me.edges)U.next.length||(U.dist=U.L);for(let U=0;U<120;U++)for(let V of me.edges)for(let ie of V.next)ie.dist+V.L<V.dist&&(V.dist=ie.dist+V.L);let F=e.W,te=e.H;me.sources=me.edges.filter(U=>{if(U.nin||U.dist>1e8)return!1;let[V,ie]=U.p[0];return!0}),me.max=h?6:10,we(),Fe()}function ce(z){let Y=[],F=z,te=0,U=new Set;for(;F&&te++<110;){for(let be=Y.length?1:0;be<F.p.length;be++)Y.push(F.p[be]);U.add(F);let ie=F.next.filter(be=>be.dist<1e8);if(!ie.length)break;let ue=ie.filter(be=>!U.has(be));F=te>50||!ue.length?ie.slice().sort((be,ke)=>be.dist-ke.dist)[0]:m(ue)}let V=[0];for(let ie=1;ie<Y.length;ie++)V.push(V[ie-1]+Math.hypot(Y[ie][0]-Y[ie-1][0],Y[ie][1]-Y[ie-1][1]));return{p:Y,cum:V,L:V[V.length-1]}}function Ve(z,Y,F){let te=z.cum,U=0,V=te.length-2;for(Y=d(Y,0,z.L);U<V;){let Ee=U+V+1>>1;te[Ee]<=Y?U=Ee:V=Ee-1}let ie=te[U+1]-te[U]||1,ue=(Y-te[U])/ie,be=z.p[U],ke=z.p[U+1];return F.x=be[0]+(ke[0]-be[0])*ue,F.z=be[1]+(ke[1]-be[1])*ue,F.dx=(ke[0]-be[0])/ie,F.dz=(ke[1]-be[1])/ie,F}function De(z){if(!me.sources.length)return null;let Y=m(me.sources);if(me.list.some(V=>V.src===Y&&V.s<Be+30))return null;let F=ce(Y);if(F.L<150)return null;let te=m(O),U={src:Y,r:F,s:z||.5,v:z?9:5,secs:[],wait:0,bell:0,obj:new se.Group,hx:0,hz:0};for(let V=0;V<We;V++){let ie=new se.Group,ue=new se.Mesh(V===0?me.geo.front:V===We-1?me.geo.rear:V===1?me.geo.midP:me.geo.mid,me.mBody),be=new se.Mesh(me.geo.win,me.mWin);if(ue.castShadow=!0,ue.receiveShadow=!0,ie.add(ue,be),V===0){for(let Ee of[-.82,.82]){let Ke=new se.Mesh(me.gLamp,me.mHead);Ke.position.set(Ee,.86,de/2+.985),ie.add(Ke)}let ke=new se.Mesh(me.gDisp,le(te));ke.position.set(0,2.7,de/2+.735),ie.add(ke)}if(V===We-1)for(let ke of[-.82,.82]){let Ee=new se.Mesh(me.gLamp,me.mTail);Ee.position.set(ke,.86,-de/2-.985),ie.add(Ee)}ie.visible=!1,U.obj.add(ie),U.secs.push({g:ie,x:0,y:0,z:0,h:0,on:!1,len:de})}return t.add(U.obj),me.list.push(U),U}let R={},A={},J={},fe={};function xe(z){let Y=e.W,F=e.H;for(let te=0;te<We;te++){let U=z.s-te*it-de/2,V=z.secs[te];if(U<0||U>z.r.L){V.on=!1,V.g.visible=!1;continue}Ve(z.r,U+2.3,R),Ve(z.r,U-2.3,A);let ie=(R.x+A.x)/2,ue=(R.z+A.z)/2;if(ie<1||ue<1||ie>Y-1||ue>F-1){V.on=!1,V.g.visible=!1;continue}let be=V.on?V.y+1.6:1e9,ke=e.surfaceY(R.x,R.z,be),Ee=e.surfaceY(A.x,A.z,be);V.x=ie,V.z=ue,V.y=(ke+Ee)/2,V.h=Math.atan2(R.x-A.x,R.z-A.z),V.on=!0,V.g.visible=!0,V.g.position.set(ie,V.y+.03,ue),V.g.rotation.set(0,0,0),V.g.rotateY(V.h),V.g.rotateX(Math.atan2(Ee-ke,4.6))}}function ge(){l._tone(2100,1900,.22,.1,"triangle"),l._tone(2100,1900,.3,.1,"triangle",.2)}function Xe(z,Y){me.t-=z,me.t<=0&&(me.t=5+g()*7,me.list.length<me.max&&De());let F=!s.pc()&&!Y&&a.mode==="play";me.proxies.length=0;for(let te=me.list.length-1;te>=0;te--){let U=me.list[te];Ve(U.r,U.s,J);let V=J.x,ie=J.z,ue=J.dx,be=J.dz;Ve(U.r,U.s+16,fe);let ke=Math.abs(x(Math.atan2(fe.dx,fe.dz)-Math.atan2(ue,be)));Ve(U.r,U.s-Be*.6,fe),ke=Math.max(ke,Math.abs(x(Math.atan2(fe.dx,fe.dz)-Math.atan2(ue,be)))*.8);let Ee=p(11.5,4.2,d(ke/.6,0,1)),Ke=9+U.v*U.v/4.6,Qe=99,mt=!0,lt=!1,St=(qe,Te,S,B,W)=>{let j=qe-V,q=Te-ie,ve=j*ue+q*be;ve<.5||ve>Ke||Math.abs(j*be-q*ue)>1.3+S||ve<Qe&&(Qe=ve,mt=B,lt=W)};if(Math.abs(V-(s.pc()?s.pc().x:o.x))<160&&Math.abs(ie-(s.pc()?s.pc().z:o.z))<160){for(let qe of n)St(qe.x,qe.z,qe.r,!0,qe===s.pc());for(let qe of i)qe.state!=="down"&&St(qe.x,qe.z,.1,!0,!1);F&&St(o.x,o.z,.3,!0,!0)}if(U.ghost>0)U.ghost-=z;else for(let qe of me.list)if(!(qe===U||Math.abs(qe.hx-V)>75||Math.abs(qe.hz-ie)>75))for(let Te=3;Te<Ke+2&&!(Te>Qe);Te+=2.5){Ve(U.r,U.s+Te,fe);let S=!1;for(let B of qe.secs){if(!B.on||Math.abs(B.x-fe.x)>5||Math.abs(B.z-fe.z)>5)continue;let W=Math.sin(B.h)*2.3,j=Math.cos(B.h)*2.3;for(let q=-1;q<=1;q++)if(Math.hypot(B.x+W*q-fe.x,B.z+j*q-fe.z)<1.5){S=!0;break}if(S)break}if(S){Qe=Te,mt=!1,lt=!1;break}}if(Qe<99?(Ee=Math.min(Ee,Math.sqrt(Math.max(0,2*2.5*(Qe-4.5)))),U.v<.6&&(U.wait+=z),mt&&U.wait>5&&(Ee=Math.max(Ee,1.8)),!mt&&U.wait>14+U.s%7&&(U.ghost=9,U.wait=0),lt&&U.bell<=0&&Qe<22&&(ge(),U.bell=2.6)):U.wait=Math.max(0,U.wait-z*2),U.bell>0&&(U.bell-=z),U.v=Math.max(0,U.v+d(Ee-U.v,-3.4*z,1.15*z)),U.s+=U.v*z,U.s-Be-6>U.r.L){t.remove(U.obj),me.list.splice(te,1);continue}U.hx=V,U.hz=ie,U.dx=ue,U.dz=be,xe(U);for(let qe of U.secs)qe.on&&me.proxies.push(qe)}Y||Pe(F)}function Pe(z){let Y=[-2.3,0,2.3];for(let F of me.list){for(let U of n){if(Math.abs(U.x-F.hx)>46||Math.abs(U.z-F.hz)>46)continue;let V=Math.sin(U.h),ie=Math.cos(U.h);for(let ue of F.secs){if(!ue.on||Math.abs(U.y-ue.y)>3||Math.abs(U.x-ue.x)>9||Math.abs(U.z-ue.z)>9)continue;let be=Math.sin(ue.h),ke=Math.cos(ue.h);for(let Ee of Y)for(let Ke of[U.off,-U.off]){let Qe=U.x+V*Ke-(ue.x+be*Ee),mt=U.z+ie*Ke-(ue.z+ke*Ee),lt=Math.hypot(Qe,mt),St=1.3+U.r;if(lt>=St||lt<1e-4)continue;Qe/=lt,mt/=lt,U.x+=Qe*(St-lt),U.z+=mt*(St-lt);let qe=(U.vx-be*F.v)*Qe+(U.vz-ke*F.v)*mt;qe<0&&(U.vx-=1.35*qe*Qe,U.vz-=1.35*qe*mt,U.w+=(Ke>0?1:-1)*qe*.04*(Qe*ie-mt*V>0?1:-1),-qe>3.5&&(U.dmg+=-qe*3,U===s.pc()&&(l.crash(-qe),y(-qe*.03),F.hitPl||(F.hitPl=1,v(1,"zr\xE1\u017Eka s elektri\u010Dkou"))))),U.parked&&(U.parked=!1),U.hitT=3}}}let te=z?[o,...i]:i;for(let U of te){let V=U===o,ie=V?o.x:U.x,ue=V?o.z:U.z;if(!(Math.abs(ie-F.hx)>46||Math.abs(ue-F.hz)>46))for(let be of F.secs){if(!be.on||Math.abs(ie-be.x)>6||Math.abs(ue-be.z)>6)continue;let ke=Math.sin(be.h),Ee=Math.cos(be.h),Ke=ie-be.x,Qe=ue-be.z,mt=d(Ke*ke+Qe*Ee,-de/2-.6,de/2+.6),lt=be.x+ke*mt,St=be.z+Ee*mt,qe=ie-lt,Te=ue-St,S=Math.hypot(qe,Te),B=1.55;S>=B||(S<.001&&(qe=Ee,Te=-ke,S=1),qe/=S,Te/=S,V?(o.x=lt+qe*B,o.z=St+Te*B,F.v>2.5&&w.hurtT<=0&&(a.hp-=F.v*4.5,w.hurtT=1,l.crash(F.v*.6),c.flash("#ff2a2a",.4))):U.state!=="down"&&(F.v>2.2?(U.knock(ke*F.v*.6+qe*2,Ee*F.v*.6+Te*2,F.v>7),l.thud()):(U.p.x=lt+qe*B,U.p.z=St+Te*B)))}}}}function Fe(){let z=me.edges.filter(lt=>Math.hypot(lt.p[0][0]-(554+C),lt.p[0][1]-(713+M))<25&&!lt.nin);if(!z.length)return;let Y=z[0],F=Y.p[0],te=Y.p[1],U=Math.hypot(te[0]-F[0],te[1]-F[1])||1,V=(te[0]-F[0])/U,ie=(te[1]-F[1])/U,ue=F[0]-ie*1.8-V*1.5,be=F[1]+V*1.8-ie*1.5,ke=e.hAt(F[0]+V*6,F[1]+ie*6),Ee=new se.Group,Ke=L(new se.Lambert({vertexColors:!0})),Qe=new se.Mesh($([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),Ke),mt=new se.Mesh(new se.Plane(9.9,6.8),new se.Basic({color:197379}));mt.position.set(0,3.4,-.95),Qe.castShadow=Qe.receiveShadow=!0,Ee.add(Qe,mt),Ee.position.set(ue,ke-.4,be),Ee.rotation.y=Math.atan2(V,ie),e.group.add(Ee)}let ae={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function ht(){let z=e.d.zone;if(!z)return;let Y=atob(z.b),F=new Uint8Array(Y.length);for(let te=0;te<Y.length;te++)F[te]=Y.charCodeAt(te);ae.bits=F,ae.N=z.n,ae.x0=z.x,ae.z0=z.z,ae.s=z.s}function pe(z,Y){let F=ae.N;if(!F)return!1;let te=Math.floor((z-ae.x0)/ae.s),U=Math.floor((Y-ae.z0)/ae.s);if(te<0||U<0||te>=F||U>=F)return!1;let V=U*F+te;return!!(ae.bits[V>>3]>>7-(V&7)&1)}function Et(){ht();let z=S=>S[0]*1e5+S[1],Y=new Set;for(let S of e.d.road)if(S.c>=1&&S.c<=4&&!S.nv)for(let B of S.p)Y.add(z(B));let F=[];for(let S of e.d.road)if(!(S.c!==5||S.p.length<2))for(let B of[0,1]){let W=S.p[B?S.p.length-1:0],j=S.p[B?S.p.length-2:1];if(!Y.has(z(W)))continue;let q=W[0]/10,ve=W[1]/10,Ne=j[0]/10-q,ze=j[1]/10-ve,Ye=Math.hypot(Ne,ze);if(Ye<3)continue;Ne/=Ye,ze/=Ye;let je=3;for(;je<Math.min(Ye,16)&&!pe(q+Ne*je,ve+ze*je);)je+=1.5;if(!pe(q+Ne*je,ve+ze*je))continue;let ye=q+Ne*(je+1.2),Ue=ve+ze*(je+1.2);F.some(Ze=>Math.hypot(Ze.x-ye,Ze.z-Ue)<9)||$e(ye,Ue,4.5)||F.push({x:ye,z:Ue,dx:Ne,dz:ze,down:0,tgt:0})}if(ae.entries=F,!F.length)return;let te=P(160,208,(S,B,W)=>{S.fillStyle="#f4f4f2",S.fillRect(0,0,B,W),S.strokeStyle="#111",S.lineWidth=4,S.strokeRect(3,3,B-6,W-6),S.fillStyle="#111",S.font="900 22px Anton, Impact, sans-serif",S.textAlign="center",S.fillText("PE\u0160IA Z\xD3NA",B/2,30),S.fillStyle="#1456b8",S.beginPath(),S.arc(B/2,92,50,0,7),S.fill(),S.fillStyle="#fff",S.beginPath(),S.arc(B/2+4,62,9,0,7),S.fill(),S.strokeStyle="#fff",S.lineWidth=9,S.lineCap="round",S.beginPath(),S.moveTo(B/2+2,76),S.lineTo(B/2-2,104),S.lineTo(B/2-16,130),S.moveTo(B/2-2,104),S.lineTo(B/2+14,128),S.moveTo(B/2+2,82),S.lineTo(B/2+20,96),S.moveTo(B/2+2,82),S.lineTo(B/2-18,92),S.stroke(),S.fillStyle="#111",S.font="700 15px sans-serif",S.fillText("Z\xC1SOBOVANIE",B/2,166),S.font="900 22px sans-serif",S.fillText("6 \u2013 9 h",B/2,192)}),U=L(new se.Lambert({color:9080208})),V=L(new se.Lambert({map:te})),ie=F.length,ue=new se.InstancedMesh(new se.Box(.7,.91,.04),[U,U,U,U,V,U],ie),be=new se.InstancedMesh(new se.Cyl(.035,.035,2.9,6),U,ie),ke=new se.Mat4,Ee=new se.Quat,Ke=new se.Vec3,Qe=new se.Vec3(1,1,1),mt=new se.Vec3(0,1,0);F.forEach((S,B)=>{let W=S.x-S.dz*3.4-S.dx*.6,j=S.z+S.dx*3.4-S.dz*.6;e.collide(W,j,e.hAt(W,j),.5,G)&&(W=G.x,j=G.z);let q=e.hAt(W,j);Ee.setFromAxisAngle(mt,Math.atan2(-S.dx,-S.dz)),ke.compose(Ke.set(W,q+2.5,j),Ee,Qe),ue.setMatrixAt(B,ke),ke.compose(Ke.set(W+S.dx*.045,q+1.45,j+S.dz*.045),Ee,Qe),be.setMatrixAt(B,ke),e.colliders.add({ax:W-.06,az:j,bx:W+.06,bz:j,y0:q-2,y1:q+3,kind:"p"},W-.2,j-.2,W+.2,j+.2),S.y=e.hAt(S.x,S.z)}),ue.castShadow=be.castShadow=!0,e.group.add(ue,be);let lt=new se.Cyl(.11,.11,.9,10),St=L(new se.Lambert({color:13225168})),qe=new se.InstancedMesh(lt,St,ie*3),Te=new se.InstancedMesh(new se.Cyl(.115,.115,.07,10),new se.Basic({color:16726815}),ie*3);qe.castShadow=!0,ae.boll=qe,ae.cap=Te,ae.M=ke,ae.P=Ke,ae.Q=new se.Quat,ae.S=Qe,F.forEach((S,B)=>pt(B,0)),e.group.add(qe,Te)}function pt(z,Y){let F=ae.entries[z];for(let te=0;te<3;te++){let U=(te-1)*1.7,V=F.x-F.dz*U,ie=F.z+F.dx*U,ue=e.hAt(V,ie)-Y*.86;ae.M.compose(ae.P.set(V,ue+.45,ie),ae.Q,ae.S),ae.boll.setMatrixAt(z*3+te,ae.M),ae.M.compose(ae.P.set(V,ue+.86,ie),ae.Q,ae.S),ae.cap.setMatrixAt(z*3+te,ae.M)}ae.boll.instanceMatrix.needsUpdate=!0,ae.cap.instanceMatrix.needsUpdate=!0}function ot(z){let Y=s.pc(),F=Y?Y.x:o.x,te=Y?Y.z:o.z;ae.acc=d(ae.acc+(pe(F,te)?z:-z)*2.5,0,1),ae.acc>=1?ae.on=!0:ae.acc<=0&&(ae.on=!1),T.zoneNow=ae.on;let U=a.tod>=6&&a.tod<9,V=ae.el||(ae.el=document.getElementById("zone"));if(V){let ie=ae.on?Y?U?"PE\u0160IA Z\xD3NA \xB7 z\xE1sobovanie do 9:00 \xB7 max 20 km/h":"PE\u0160IA Z\xD3NA \xB7 aut\xE1m vjazd zak\xE1zan\xFD":"PE\u0160IA Z\xD3NA":"";ae._txt!==ie&&(ae._txt=ie,V.textContent=ie,V.hidden=!ie,V.classList.toggle("bad",!!Y&&ae.on&&!U))}if(ae.cool>0&&(ae.cool-=z),Y&&ae.on&&a.mode==="play"){if(ae.told||(ae.told=!0,c.toast("Pe\u0161ia z\xF3na: aut\xE1 len 6:00\u20139:00 (z\xE1sobovanie), max 20 km/h")),!U&&(ae.fineT+=z,ae.fineT>6)){ae.fineT=-22;let ie=Math.min(50,Math.floor(a.money));a.money-=ie,c.toast("Mestsk\xE1 pol\xEDcia: jazda v pe\u0161ej z\xF3ne \xB7 pokuta "+(ie?"\u2212"+ie+" \u20AC":"50 \u20AC (nem\xE1\u0161 z \u010Doho)")),l._tone(660,330,.3,.14,"square")}Y.speed*3.6>26?(ae.fastT+=z,ae.fastT>1.2&&ae.cool<=0&&(ae.cool=16,ae.fastT=0,v(1,"r\xFDchla jazda v pe\u0161ej z\xF3ne"))):ae.fastT=0}else ae.fineT>0?ae.fineT=0:ae.fineT<0&&(ae.fineT=Math.min(0,ae.fineT+z));if(ae.boll)for(let ie=0;ie<ae.entries.length;ie++){let ue=ae.entries[ie];ue.tgt=Y&&Math.abs(Y.x-ue.x)<11&&Math.abs(Y.z-ue.z)<11?1:0,ue.down!==ue.tgt&&(ue.down=d(ue.down+(ue.tgt>ue.down?1:-1)*z*2.2,0,1),pt(ie,ue.down))}}function $e(z,Y,F){for(let te of me.edges){let U=te.p;for(let V=0;V<U.length-1;V++){let ie=U[V][0],ue=U[V][1],be=U[V+1][0],ke=U[V+1][1];if(Math.min(ie,be)-F>z||Math.max(ie,be)+F<z||Math.min(ue,ke)-F>Y||Math.max(ue,ke)+F<Y)continue;let Ee=be-ie,Ke=ke-ue,Qe=d(((z-ie)*Ee+(Y-ue)*Ke)/(Ee*Ee+Ke*Ke||1),0,1);if(Math.hypot(ie+Ee*Qe-z,ue+Ke*Qe-Y)<F)return!0}}return!1}function Ge(){let z=[],Y=new s.SGrid(12),F=[],te=h?120:200;for(let Te of e.d.road){if(Te.c!==5||z.length>=te||!pe(Te.p[0][0]/10,Te.p[0][1]/10)&&!pe(Te.p[Te.p.length-1][0]/10,Te.p[Te.p.length-1][1]/10))continue;let S=Te.p.map(W=>[W[0]/10,W[1]/10]),B=Math.floor(S[0][0]*7+S[0][1]*13);for(let W=0;W<S.length-1;W++){let j=S[W][0],q=S[W][1],ve=S[W+1][0]-j,Ne=S[W+1][1]-q,ze=Math.hypot(ve,Ne);if(!(ze<5)){ve/=ze,Ne/=ze;for(let Ye=4+_(B+W)*4;Ye<ze-3;Ye+=7.5){let je=_(B*3+W*31+Math.floor(Ye));if(je>.5)continue;let ye=je<.25?1:-1,Ue=2.1,Ze=j+ve*Ye-Ne*Ue*ye,ut=q+Ne*Ye+ve*Ue*ye;if(Ze<5||ut<5||Ze>e.W-5||ut>e.H-5||!pe(Ze,ut))continue;let wt=e.hAt(Ze,ut);if(e.surfaceY(Ze,ut)>wt+.3||Math.abs(e.hAt(Ze+1.5,ut)-wt)>.25||Math.abs(e.hAt(Ze,ut+1.5)-wt)>.25||e.collide(Ze,ut,wt,1.7,G)||ae.entries.some(Pt=>Math.hypot(Pt.x-Ze,Pt.z-ut)<9)||$e(Ze,ut,3.6)||Y.query(Ze,ut,4.2,F).some(Pt=>Math.hypot(Pt.x-Ze,Pt.z-ut)<4.2))continue;let On={x:Ze,y:wt,z:ut,a:Math.atan2(ve,Ne),k:z.length};Y.add(On,Ze,ut,Ze,ut),z.push(On)}}}}if(!z.length)return;let U=z.length,V=new se.Cyl(.06,1.5,.55,8),ie=L(new se.Lambert({color:16777215,flatShading:!0}),.9),ue=$([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),be=new se.InstancedMesh(V,ie,U),ke=new se.InstancedMesh(ue,L(new se.Lambert({vertexColors:!0})),U),Ee=new se.Mat4,Ke=new se.Quat,Qe=new se.Vec3,mt=new se.Vec3(1,1,1),lt=new se.Vec3(0,1,0),St=new se.Color,qe=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];z.forEach((Te,S)=>{Ke.setFromAxisAngle(lt,Te.a+(_(S*3)-.5)*.5),Ee.compose(Qe.set(Te.x,Te.y,Te.z),Ke,mt),ke.setMatrixAt(S,Ee),Ee.compose(Qe.set(Te.x,Te.y+2.5,Te.z),Ke,mt),be.setMatrixAt(S,Ee),be.setColorAt(S,St.set(qe[Math.floor(_(Math.floor(Te.x/26)*31+Math.floor(Te.z/26)*17)*qe.length)])),e.colliders.add({ax:Te.x-.3,az:Te.z,bx:Te.x+.3,bz:Te.z,y0:Te.y-1,y1:Te.y+2.4,kind:"p"},Te.x-.5,Te.z-.5,Te.x+.5,Te.z+.5)}),be.castShadow=ke.castShadow=!0,be.receiveShadow=!0,e.group.add(be,ke),T.terraceN=U}function ft(){let z=(e.fountains||[]).filter(te=>te.area>14);if(!z.length)return;let Y=L(new se.Lambert({color:10130566,flatShading:!0})),F=new se.Shader({uniforms:{uTime:u.uTime,uNight:u.uNight},transparent:!0,depthWrite:!1,side:se.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let te of z){if(te.noTop){let Qe=new se.Mesh(new se.Cyl(.5,3.4,4.6,18,1,!0),F);Qe.position.set(te.x,te.y+2.3,te.z),e.group.add(Qe);continue}let U=te.area>60,V=U?1.5:1,ie=new se.Group,ue=new se.Mesh(new se.Cyl(.22*V,.36*V,1.9*V,8),Y),be=new se.Mesh(new se.Cyl(.95*V,.28*V,.32*V,10),Y),ke=new se.Mesh(new se.Cyl(.1*V,.2*V,.9*V,6),Y),Ee=new se.Mesh(new se.Sphere(.2*V,8,6),Y),Ke=new se.Mesh(new se.Cyl(.9*V,1.05*V,1.95*V,14,1,!0),F);ue.position.y=.95*V,be.position.y=2.05*V,ke.position.y=2.6*V,Ee.position.y=3.15*V,Ke.position.y=1.02*V,ue.castShadow=be.castShadow=!0,ie.add(ue,be,ke,Ee,Ke),ie.position.set(te.x,te.y-.1,te.z),e.group.add(ie)}}function At(){let z=1031.2+C,Y=766+M,F=e.hAt(z,Y),te=Math.atan2(-10.8,-16.2),U=new se.Group,V="#e3c56d",ie="#d9d2bf",ue=new se.Mesh($([[6.8,31,6.8,0,15.5,0,V],[7.3,.5,7.3,0,9.2,0,ie],[7.3,.5,7.3,0,20.4,0,ie],[8,.7,8,0,31.2,0,ie],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),L(new se.Lambert({vertexColors:!0}))),be=L(new se.Lambert({color:14927213,flatShading:!0})),ke=L(new se.Lambert({color:5084288,flatShading:!0})),Ee=new se.Lambert({color:14266938,emissive:3812360}),Ke=(ye,Ue,Ze)=>{let ut=new se.Mesh(ye,Ue);return ut.position.y=Ze,ut.castShadow=!0,U.add(ut),ut};ue.castShadow=ue.receiveShadow=!0,U.add(ue),Ke(new se.Cyl(2.9,3.1,5.2,8),be,34.1),Ke(new se.Cyl(1.5,3.5,3.6,8),ke,38.5),Ke(new se.Cyl(1.25,1.25,2.2,8),be,41.4),Ke(new se.Cyl(.9,1.7,1.6,8),ke,43.3),Ke(new se.Cyl(.05,.8,5.2,8),ke,46.7),Ke(new se.Sphere(.35,8,6),Ee,49.4);let Qe=P(128,128,(ye,Ue,Ze)=>{ye.fillStyle="#f3efe2",ye.beginPath(),ye.arc(64,64,60,0,7),ye.fill(),ye.strokeStyle="#222",ye.lineWidth=5,ye.stroke();for(let ut=0;ut<12;ut++){let wt=ut/12*I*2;ye.beginPath(),ye.moveTo(64+Math.sin(wt)*46,64-Math.cos(wt)*46),ye.lineTo(64+Math.sin(wt)*54,64-Math.cos(wt)*54),ye.stroke()}ye.lineWidth=6,ye.lineCap="round",ye.beginPath(),ye.moveTo(64,64),ye.lineTo(88,50),ye.moveTo(64,64),ye.lineTo(56,22),ye.stroke()}),mt=new se.Basic({map:Qe,transparent:!0});for(let ye=0;ye<4;ye++){let Ue=new se.Mesh(new se.Plane(3.4,3.4),mt),Ze=ye*I/2;Ue.position.set(Math.sin(Ze)*3.43,25.6,Math.cos(Ze)*3.43),Ue.rotation.y=Ze,U.add(Ue)}U.position.set(z,F-.5,Y),U.rotation.y=te,e.group.add(U);let lt=Math.cos(te)*3.4,St=Math.sin(te)*3.4,qe=[[z+lt+St,Y-St+lt],[z+lt-St,Y-St-lt],[z-lt-St,Y+St-lt],[z-lt+St,Y+St+lt]];for(let ye=0;ye<4;ye++){let Ue=qe[ye],Ze=qe[(ye+1)%4];e.colliders.add({ax:Ue[0],az:Ue[1],bx:Ze[0],bz:Ze[1],y0:F-50,y1:F+31,kind:"b"},Ue[0],Ue[1],Ze[0],Ze[1])}let Te=0,S=0,B=!1;for(let[ye,Ue]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]].map(Ze=>[Ze[0]+C,Ze[1]+M]))if(pe(ye,Ue)&&!e.collide(ye,Ue,e.hAt(ye,Ue),5.6,G)){Te=ye,S=Ue,B=!0;break}if(!B)return;let W=Math.min(e.hAt(Te,S),e.hAt(Te+4,S),e.hAt(Te-4,S),e.hAt(Te,S+4),e.hAt(Te,S-4)),j=L(new se.Lambert({color:10130566,flatShading:!0})),q=new se.Group,ve=new se.Mesh(new se.Cyl(4.7,4.9,.85,16),j),Ne=new se.Mesh(new se.Cyl(4.35,4.35,.03,16),e.waterMat||new se.Lambert({color:2903898})),ze=new se.Mesh(new se.Cyl(.5,.75,5.2,8),j),Ye=new se.Mesh(new se.Cyl(.9,.5,.5,8),j),je=new se.Mesh($([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),L(new se.Lambert({vertexColors:!0})));ve.position.y=.42,Ne.position.y=.86,ze.position.y=3,Ye.position.y=5.8,je.position.y=6.05,ve.castShadow=ze.castShadow=je.castShadow=!0,ve.receiveShadow=!0,q.add(ve,Ne,ze,Ye,je),q.position.set(Te,W-.05,S),e.group.add(q);for(let ye=0;ye<10;ye++){let Ue=ye/10*I*2,Ze=(ye+1)/10*I*2,ut=[Te+Math.sin(Ue)*4.8,S+Math.cos(Ue)*4.8],wt=[Te+Math.sin(Ze)*4.8,S+Math.cos(Ze)*4.8];e.colliders.add({ax:ut[0],az:ut[1],bx:wt[0],bz:wt[1],y0:W-2,y1:W+1.3,kind:"w"},ut[0],ut[1],wt[0],wt[1])}(e.fountains||(e.fountains=[])).push({x:Te,z:S,y:W+.75,area:30,noTop:!0,spray:1})}function Gt(){let z=1038.6+C,Y=849.4+M;for(let Ee=0;Ee<8&&e.collide(z,Y,e.hAt(z,Y),1.2,G);Ee++)z=G.x,Y=G.z;let F=e.hAt(z,Y),te=L(new se.Lambert({color:5192994}),1.2),U=L(new se.Lambert({color:1710620})),V=new se.Group,ie=(Ee,Ke,Qe,mt,lt,St=0,qe=0)=>{let Te=new se.Mesh(Ee,Ke);return Te.position.set(Qe,mt,lt),Te.rotation.set(St,0,qe),Te.castShadow=!0,V.add(Te),Te};ie(new se.Cyl(.52,.52,.05,16),U,0,.025,0),ie(new se.Torus(.5,.05,6,18),te,0,.05,0,I/2),ie(new se.Cyl(.5,.5,.04,16),te,-.35,.3,-.42,.9,.2),ie(new se.Box(.5,.2,.26),te,0,.13,-.1),ie(new se.Box(.56,.12,.2),te,0,.11,.22),ie(new se.Sphere(.15,10,8),te,0,.3,.12),ie(new se.Cyl(.19,.2,.07,12),te,0,.4,.1),ie(new se.Sphere(.16,10,6,0,I*2,0,I/2),te,0,.41,.1);let ue=P(128,128,(Ee,Ke,Qe)=>{Ee.fillStyle="#1456b8",Ee.beginPath(),Ee.arc(Ke/2,Qe/2,62,0,7),Ee.fill(),Ee.fillStyle="#ffd21a",Ee.beginPath(),Ee.arc(Ke/2,Qe/2,54,0,7),Ee.fill(),Ee.fillStyle="#111",Ee.font="900 30px Anton, Impact, sans-serif",Ee.textAlign="center",Ee.fillText("MAN",Ke/2,50),Ee.fillText("AT WORK",Ke/2,88)});ie(new se.Cyl(.03,.03,2.2,6),U,1.1,1.1,-.3);let be=ie(new se.Cyl(.3,.3,.03,18),[U,new se.Basic({map:ue}),U],1.1,2.3,-.3,I/2);be.rotation.z=0,V.position.set(z,F,Y),V.rotation.y=-.6,e.group.add(V),e.colliders.add({ax:z-.3,az:Y,bx:z+.3,bz:Y,y0:F-1,y1:F+.5,kind:"p"},z-.5,Y-.5,z+.5,Y+.5);let ke={ax:z-.5,az:Y,bx:z+.5,bz:Y,hw:2.5,n:"\u010Cumil"};e.names.add(ke,z-3,Y-3,z+3,Y+3),nt[0][1]=z,nt[0][2]=Y}let nt=[["\u010Cumil",1038.6,849.4,14],["Michalsk\xE1 br\xE1na",875.5,598.2,24],["Hlavn\xE9 n\xE1mestie a Star\xE1 radnica",1016,778,30],["Primaci\xE1lny pal\xE1c",1094,722,34],["D\xF3m sv\xE4t\xE9ho Martina",750.5,948,38],["Bratislavsk\xFD hrad",388,946,75],["Slovensk\xE9 n\xE1rodn\xE9 divadlo",1105,920,36],["Reduta",1118,1062,42],["Modr\xFD kostol\xEDk",1438.5,433.8,36],["Prezidentsk\xFD pal\xE1c",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Star\xE1 tr\u017Enica",1217.7,668.9,40],["Slovensk\xE1 n\xE1rodn\xE1 gal\xE9ria",1015,1175,40],["Slovensk\xE9 n\xE1rodn\xE9 m\xFAzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestsk\xE9 k\xFApele Gr\xF6ssling",1306,1076,40]];for(let z of nt)z[1]+=C,z[2]+=M;for(let z of s.moreLandmarks||[])nt.push(z);let Se=new Set;function H(){try{for(let z of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))Se.add(z)}catch{}window.__gtbLM=(z,Y)=>{for(let F of nt)z(F[1],F[2],Se.has(F[0])?"#7dff6a":"#ffffff",Y/150)}}let Ce=0;function Ie(z){if(Ce-=z,Ce>0||a.mode!=="play")return;Ce=.4;let Y=s.pc()?s.pc().x:o.x,F=s.pc()?s.pc().z:o.z;for(let te of nt){if(Se.has(te[0])||Math.hypot(te[1]-Y,te[2]-F)>te[3])continue;Se.add(te[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...Se]))}catch{}let U=Se.size===nt.length,V=U?1500:60;a.money+=V,c.big(U?"CEL\xC1 BRATISLAVA":"OBJAVEN\xC9",`${te[0]} \xB7 ${Se.size}/${nt.length} \xB7 +${V} \u20AC`,"#ffcc33",3),l.win();break}}function st(){let z=[[1089+C,725.6+M,2]];for(let[Y,F,te]of z){if(e.collide(Y,F,e.hAt(Y,F),2.2,G)&&(Y=G.x,F=G.z),e.collide(Y,F,e.hAt(Y,F),1.2,G))continue;let U=E("fabka",Y,F,te,"#f3f4f5");U.parked=U.keep=!0,U.mp=!0,oe(U,"mp")}}return{zoneNow:!1,plateMat:K,gloss:k,livery:oe,flash:X,maybeTaxi:he,inZone:pe,trams:me,zone:ae,landmarks:nt,patchData(z){for(let Y of z.bld)Y.n==="Kostol sv. Al\u017Ebety"&&(Y.c="#9cc4e8",Y.rc="#5f86b4")},init(){let z=(Y,F)=>{try{F()}catch(te){console.error("X3 "+Y,te)}};z("trams",Me),z("zone",Et),z("cumil",Gt),z("radnica",At),z("terraces",Ge),z("fountains",ft),z("patrol",st),z("landmarks",H),z("prewarm",()=>{for(let Y=0;Y<40&&me.list.length<Math.min(5,me.max);Y++){let F=De(1);F&&(F.s=60+g()*Math.max(10,F.r.L-200),xe(F))}}),D=!0},obst(){return D&&me.proxies.length?T._ob=n.concat(me.proxies):n},update(z,Y){D&&(Xe(z,Y),me.mWin.emissive.setScalar(.004+u.uNight.value*1.25),me.mHead.color.setScalar(1+u.uNight.value*3),!Y&&(ot(z),Ie(z),s.pc()&&s.pc().mp&&!s.pc().mpStolen&&(s.pc().mpStolen=1,v(2,"kr\xE1de\u017E auta mestskej pol\xEDcie"))))},goalText(){return" \xB7 Pamiatky "+Se.size+"/"+nt.length}}})();return T}function $l(s,e){if(e===Ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xr||e===Ca){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Xr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ba=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new vh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ki.extractUrlBase(e);o=ki.resolveURL(l,this.path)}else o=ki.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rd){try{o[bt.KHR_BINARY_GLTF]=new _h(e)}catch(u){i&&i(u);return}r=JSON.parse(o[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Th(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case bt.KHR_MATERIALS_UNLIT:o[u]=new ih;break;case bt.KHR_DRACO_MESH_COMPRESSION:o[u]=new yh(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:o[u]=new Mh;break;case bt.KHR_MESH_QUANTIZATION:o[u]=new bh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Fy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},nh=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sa(h),l.distance=u;break;case"spot":l=new ir(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ih=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(i)}},sh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},rh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},ah=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ch=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},lh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},hh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},uh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},mh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xh=class{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},vh=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let x=new at,g=new N,m=new en,_=new N(1,1,1),v=new Dn(p.geometry,p.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(g,m,_));for(let y in c)if(y==="_COLOR_0"){let w=c[y];v.instanceColor=new rs(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);Bt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Rd="glTF",eo=12,wd={JSON:1313821514,BIN:5130562},_h=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-eo,r=new DataView(e,eo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===wd.JSON){let l=new Uint8Array(e,eo+o,a);this.content=n.decode(l)}else if(c===wd.BIN){let l=eo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},yh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=wh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=wh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=lr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(d)},a,l,sn,f)})})}},Mh=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bh=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},ka=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,x=p-l,g=-2*d+3*f,m=d-f,_=1-g,v=m-f+u;for(let y=0;y!==a;y++){let w=o[x+y+a],b=o[x+y+c]*h,E=o[p+y+a],C=o[p+y]*h;r[y]=_*w+v*b+g*E+m*C}return r}},Oy=new en,Sh=class extends ka{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Oy.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Kt,9729:jt,9984:Go,9985:Nl,9986:yr,9987:Vn},Td={33071:In,33648:Rr,10497:ts},Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},By={CUBICSPLINE:void 0,LINEAR:is,STEP:Xs},eh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ky(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),s.DefaultMaterial}function hs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Gy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vy(s){let e,t=s.extensions&&s.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+th(t.attributes):e=s.indices+":"+th(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+th(s.targets[n]);return e}function th(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Eh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Xy=new at,Th=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ma(this.options.manager):this.textureLoader=new wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(r,a,i),Gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ki.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ql[i.type],a=lr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ql[i.type],l=lr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(d&&d!==u){let m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(_);v||(x=new l(a,m*d,i.count*d/h),v=new Ir(x,d/h),t.cache.add(_,v)),g=new Nr(v,c,f%d/h,p)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),g=new Ft(x,c,p);if(i.sparse!==void 0){let m=Ql.SCALAR,_=lr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new _(o[1],v,i.sparse.count*m),b=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized));for(let E=0,C=w.length;E<C;E++){let M=w[E];if(g.setX(M,b[E*c]),c>=2&&g.setY(M,b[E*c+1]),c>=3&&g.setZ(M,b[E*c+2]),c>=4&&g.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ed[f.magFilter]||jt,h.minFilter=Ed[f.minFilter]||Vn,h.wrapS=Td[f.wrapS]||ts,h.wrapT=Td[f.wrapT]||ts,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let g=new rn(x);g.needsUpdate=!0,f(g)}),t.load(ki.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Wy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fr,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zr,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return zi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let u=i[bt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,zt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jt);let h=r.alphaMode||eh.OPAQUE;if(h===eh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===eh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==fn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fn){let u=r.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==fn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Gi(u,r),t.associations.set(u,{materials:e}),r.extensions&&hs(i,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ad(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Vy(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Ad(new Ct,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?ky(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],g=o[d],m,_=l[d];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new aa(x,_):new et(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?m.geometry=$l(m.geometry,Ca):g.mode===Zn.TRIANGLE_FAN&&(m.geometry=$l(m.geometry,Xr));else if(g.mode===Zn.LINES)m=new la(x,_);else if(g.mode===Zn.LINE_STRIP)m=new Js(x,_);else if(g.mode===Zn.LINE_LOOP)m=new ha(x,_);else if(g.mode===Zn.POINTS)m=new ua(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Gy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Gi(m,r),g.extensions&&hs(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&hs(i,u[0],r),u[0];let f=new Vt;r.extensions&&hs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(kf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new js(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new at;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ca(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],x=d.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let _=0,v=f.length;_<v;_++){let y=f[_],w=d[_],b=p[_],E=x[_],C=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,w,b,E,C);if(M)for(let T=0;T<M.length;T++)m.push(M[T])}return new tr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Xy)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Dr:l.length>1?h=new Vt:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gi(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){let u=new at;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Vt;n.name&&(r.name=i.createUniqueName(n.name)),Gi(r,n),n.extensions&&hs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof An||f instanceof rn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Hi[r.path]===Hi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Hi[r.path]){case Hi.weights:l=Mi;break;case Hi.rotation:l=ri;break;case Hi.position:case Hi.scale:l=bi;break;default:switch(n.itemSize){case 1:l=Mi;break;case 2:case 3:default:l=bi;break}break}let h=i.interpolation!==void 0?By[i.interpolation]:is,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let p=new l(c[f]+"."+Hi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Eh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ri?Sh:ka;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qy(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=Eh(lr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Eh(lr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ad(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=wh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Rt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Gi(s,e),qy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Hy(s,e.targets,t):s})}function Cd(s){let e=new Map,t=new Map,n=s.clone();return Pd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Pd(s.children[n],e.children[n],t)}var Ah={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},Zy=new Dt({color:3886431,name:"Windows"}),Ky=new Dt({color:1381653,name:"Tire"}),jy=new Dt({color:10132898,name:"Rim"}),Ld=new Dt({color:2303014,name:"Trim"}),Jy=new Dt({color:15921902,name:"Plate"});function Id(s,e,t){let n=new Br;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new xa(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(e/2-t,0,0),i}function Nd(s){let e=Ah[s],{L:t,W:n,H:i,hood:r,wind:o,belt:a}=e,c=e.rr,l=e.clear||.3,h=t/2,u=new Dt({color:16777215,name:"Paint"}),f=new Vt,d=e.boxy?.03:.07,p=e.boxy?a-.08:a-.2,x=e.rear==="liftback"?a+.02:a,g=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,p-.06],[h-.1,p],[h-r,a],[-h+(e.rear==="liftback"?.05:.02),x],[-h,x-.12],[-h,l+.14]],m=new et(Id(g,n,d),u);f.add(m);let _=n-.16,v=h-r,y=v-o,w,b;e.rear==="hatch"?(w=-h+.32,b=-h+.08):e.rear==="liftback"?(w=-h+1.28,b=-h+.28):e.rear==="estate"?(w=-h+.14,b=-h+.04):(w=-h+.1,b=-h+.05);let E=[[b,a-.02],[v,a-.02],[y,i-.04],[w,i-.04]],C=new et(Id(E,_,.04),Zy);f.add(C);let M=y-w-.12,T=new et(new Zt(_-.06,.07,M),u);T.position.set(0,i-.02,(y+w)/2),f.add(T);let I=new et(new Zt(_+.01,i-a-.06,.12),u);I.position.set(0,(i+a)/2-.03,(v+b)/2+(e.rear==="liftback"?.25:.1)),f.add(I);let D=t*.61,G=new Xn(c,c,.22,14);G.rotateZ(Math.PI/2);let P=new Xn(c*.62,c*.62,.235,10);P.rotateZ(Math.PI/2);let L=D/2+(h-r>.6?.05:0)+.05;for(let X of[L,-D/2+.05])for(let ee of[-1,1]){let he=new et(G,Ky);he.position.set(ee*(n/2-.13),c,X);let de=new et(P,jy);de.position.copy(he.position),f.add(he,de)}let k=new et(new Zt(n+.02,.14,t-.3),Ld);k.position.set(0,l+.07,0),f.add(k);let $=new Dt({color:14673646,name:"HeadLights"}),Q=new Dt({color:9048080,name:"TailLights"}),K=p-.1;for(let X of[-1,1]){let ee=new et(new Zt(e.boxy?.32:.38,e.boxy?.16:.11,.08),$);ee.position.set(X*(n/2-.3),K,h-.03);let he=new et(new Zt(.3,.13,.08),Q);he.position.set(X*(n/2-.22),x-.2,-h+0),f.add(ee,he)}let Z=new et(new Zt(n*.42,.14,.06),Ld);Z.position.set(0,K-.02,h+0);let ne=new et(new Zt(.52,.12,.03),Jy);ne.position.set(0,l+.22,h+.01);let oe=ne.clone();oe.position.z=-h-.01,oe.position.y=l+.3;for(let X of[-1,1]){let ee=new et(new Zt(.16,.1,.12),u);ee.position.set(X*(n/2+.06),a+.08,v-.1),f.add(ee)}return f.add(Z,ne,oe),f.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:t,vmax:e.vmax,acc:e.acc,nick:e.nick,acc_:e.acc_,g:e.g},w:n,h:i,len:t}}var $y=new Ba,Rh=null,Dd=async s=>{let e=s.split("/").pop();Rh||(Rh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let t=await Rh,n=atob(t[e]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>$y.parse(i.buffer,"",r,o))},ci={cars:{},people:[]},Ha={mat:null},Qy=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],Ud={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},zd=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Fd(s,e){let t=[],n=0,i=Object.keys(Ud).length+zd.length,r=()=>e&&e(++n/i);for(let[o,a]of Object.entries(Ud))t.push(Dd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new $t().setFromObject(l,!0).getSize(new N),f=u.x>u.z,d=new Vt,p=new Vt;p.add(l),f&&(p.rotation.y=Math.PI/2),d.add(p),d.updateMatrixWorld(!0);let x=new $t().setFromObject(d,!0),g=x.max.z-x.min.z,m=a.len/g;p.scale.multiplyScalar(m),d.updateMatrixWorld(!0),x=new $t().setFromObject(d,!0);let _=x.getCenter(new N);p.position.set(-_.x,-x.min.y,-_.z),d.updateMatrixWorld(!0);let v=0,y=0;d.traverse(b=>{if(b.isMesh){b.castShadow=!0;let E=Array.isArray(b.material)?b.material:[b.material];for(let C of E)if(/head/i.test(C.name)){let M=new $t().setFromObject(b,!0);v+=M.getCenter(new N).z,y++}}}),y&&v/y<0&&(p.rotation.y+=Math.PI,p.position.x*=-1,p.position.z*=-1);let w=new $t().setFromObject(d,!0);ci.cars[o]={obj:d,def:a,w:w.max.x-w.min.x,h:w.max.y-w.min.y,len:w.max.z-w.min.z},r()}));for(let o of zd)t.push(Dd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new $t().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new Vt;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1)});let d={};for(let p of a.animations)d[p.name.replace(o.pre,"").toLowerCase()]=p;ci.people.push({obj:f,clips:d}),r()}));await Promise.all(t);for(let o of Object.keys(Ah))ci.cars[o]=Nd(o)}var e1=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],to=class{constructor(e=-1,t=!0){let n=e>=0?ci.people[e]:un(ci.people);if(this.obj=Cd(n.obj),t){let i=new Oe(un(e1));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&Lt()<.6){let a=o.clone();return a.color=new Oe(un(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new Ea(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(Ra,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(Ra,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(e,t=.2,n=1){let i=this.acts[e]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,t,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},En={},Ga=class{constructor(e,t){let n=ci.cars[e]||ci.cars.sedan;this.kind=e,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=t||un(Qy),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new Oe(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.tail=o,o}return r}).map(r=>Ha.mat?Ha.mat(r):r),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(e,t,n,i){this.x=e,this.z=t,this.h=n,this.y=i.surfaceY(e,t),this.vx=this.vz=this.w=0,this.sync(i,1)}step(e,t,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=xt(this.st*l-this.steer,-e*3.5,e*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=t.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-t.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*xt(d/4,-.4,.4),o+=h*e;let p=this.len*.62,x=o*Math.tan(this.steer)/p,g=this.hb?1.6:9,m=Math.abs(x*o),_=this.hb?6:13,v=m>_?g*_/m:g;this.w+=(x*(this.hb?1.35:1)-this.w)*xt(v*e,0,1),a*=Math.exp(-(this.hb?1.4:m>_?3.2:10)*e),this.h=Qn(this.h+this.w*e);let y=Math.sin(this.h),w=Math.cos(this.h);this.vx=o*y+a*w,this.vz=o*w-a*y,this.x+=this.vx*e,this.z+=this.vz*e;let b=0;for(let E of[this.off,-this.off,0]){let C=this.x+y*E,M=this.z+w*E;if(t.collide(C,M,this.y+.3,this.r,En)){this.x+=En.x-C,this.z+=En.z-M;let T=this.vx*En.nx+this.vz*En.nz;T<0&&(this.vx-=1.3*T*En.nx,this.vz-=1.3*T*En.nz,this.vx*=.92,this.vz*=.92,b=Math.max(b,-T),this.w+=E*.05*T*(this.vx*En.nz-this.vz*En.nx>0?1:-1))}}this.x=xt(this.x,2,t.W-2),this.z=xt(this.z,2,t.H-2),this.impact=b,b>4&&(this.dmg+=b*1.5)}sync(e,t){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=e.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=e.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=e.surfaceY(this.x-i*.8,this.z+n*.8,r),l=e.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=xt(t*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let p=xt(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+p)}lights(e,t){this.head&&this.head.emissive.setRGB(e*3,e*2.7,e*2.2),this.tail&&this.tail.emissive.setRGB(t?3:e*1.2,0,0)}};function Od(s,e){let t=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(e.h),r=Math.cos(e.h);if(Math.abs(s.x-e.x)>7||Math.abs(s.z-e.z)>7||Math.abs(s.y-e.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[e.off,-e.off]){let l=s.x+t*a,h=s.z+n*a,u=e.x+i*c,f=e.z+r*c,d=u-l,p=f-h,x=Math.hypot(d,p),g=s.r+e.r;if(x<g&&x>1e-4){d/=x,p/=x;let m=(g-x)/2;s.x-=d*m,s.z-=p*m,e.x+=d*m,e.z+=p*m;let _=(e.vx-s.vx)*d+(e.vz-s.vz)*p;if(_<0){let v=-_*.65;s.vx-=d*v,s.vz-=p*v,e.vx+=d*v,e.vz+=p*v,s.w+=(a>0?1:-1)*v*.05,e.w-=(c>0?1:-1)*v*.05,o=Math.max(o,-_)}}}return o}var wn={},no=class{constructor(e,t,n,i){this.car=e,this.w=t,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let e=this.e.b.out.filter(t=>t!==this.e.rev&&t.L>.5);this.next=e.length?un(e):this.e.rev||null}ahead(e,t){let n=this.e,i=this.s+e;i>n.L&&this.next&&(i-=n.L,n=this.next),Sn.at(n,Math.min(i,n.L),t);let r=n.lane;return t.x+=-t.dz*r,t.z+=t.dx*r,t}project(){let e=this.car,t=this.e,n=1e9,i=this.s;for(let r=0;r<t.p.length-1;r++){let o=t.p[r][0],a=t.p[r][1],c=t.p[r+1][0],l=t.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=xt(((e.x-o)*h+(e.z-a)*u)/f,0,1),p=Math.hypot(o+h*d-e.x,a+u*d-e.z);p<n&&(n=p,i=t.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(e,t,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,wn);let l=wn.x,h=wn.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let y=Math.hypot(r.x-o.x,r.z-o.z);y<30&&(l=r.x,h=r.z,u=xt(y*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let y=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),w=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),b=Math.abs(Qn(w-y));b>.35&&(u=Math.min(u,dt(14,5.5,xt(b/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,y,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),p=Math.cos(o.h),x=99;for(let y of t){if(y===o)continue;let w=y.x-o.x,b=y.z-o.z,E=w*d+b*p;if(E<0||E>22)continue;Math.abs(w*p-b*d)<2.2&&(x=Math.min(x,E-(o.len+y.len)/2))}if(i&&this.mode!=="chase"){let y=i.x-o.x,w=i.z-o.z,b=y*d+w*p;b>0&&b<14&&Math.abs(y*p-w*d)<2&&(x=Math.min(x,b-o.len/2-.5))}x<99&&(u=Math.min(u,Math.max(0,(x-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,x<3?4:u));let g=Math.atan2(l-o.x,h-o.z),m=Qn(g-o.h),_=o.fwd;o.st=xt(m*2.2,-1,1),_<-.5&&(o.st=-o.st);let v=u-_;o.thr=xt(v*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),x<4&&a<.5&&(this.honk+=e)}chooseToward(e){let t=this.e.b.out.filter(r=>r.L>.5);if(!t.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of t){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-e.x,o[1]-e.z)+(r===this.e.rev?30:0)+Lt()*8;a<i&&(i=a,n=r)}this.next=n}},io=class{constructor(e,t,n){this.p=new to,this.w=e,this.e=t,this.s=n,this.dir=Lt()<.5?1:-1,this.off=(Lt()-.5)*(t.sw?.8:1.6),this.speed=1.1+Lt()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),Sn.at(t,n,wn),this.p.x=wn.x,this.p.z=wn.z,this.p.y=e.hAt(wn.x,wn.z)}get x(){return this.p.x}get z(){return this.p.z}flee(e,t){if(this.state==="down")return;this.state="flee",this.t=5+Lt()*3;let n=Math.atan2(this.p.x-e,this.p.z-t)+(Lt()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(e,t,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=e,this.p.vz=t,this.p.play("death",.08,n?1.6:1.1),!0)}update(e,t){let n=this.p;if(this.state==="walk"){this.s+=this.speed*e*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&Lt()<.85){let h=un(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=xt(this.s,0,i.L)}Sn.at(this.e,this.s,wn);let r=wn.x-wn.dz*this.off*this.dir,o=wn.z+wn.dx*this.off*this.dir,a=Math.atan2(wn.dx*this.dir,wn.dz*this.dir);n.h+=Qn(a-n.h)*xt(e*6,0,1),n.x+=(r-n.x)*xt(e*4,0,1),n.z+=(o-n.z)*xt(e*4,0,1)}else if(this.state==="flee"){this.t-=e;let i=4.2;if(n.x+=Math.sin(this.fh)*i*e,n.z+=Math.cos(this.fh)*i*e,n.h+=Qn(this.fh-n.h)*xt(e*8,0,1),t.collide(n.x,n.z,n.y,.35,En)&&(n.x=En.x,n.z=En.z,this.fh+=(Lt()<.5?1:-1)*1.2),this.t<=0){let r=t.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=un(r),this.s=Lt()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=e,n.x+=n.vx*e,n.z+=n.vz*e,n.vx*=Math.exp(-4*e),n.vz*=Math.exp(-4*e),t.collide(n.x,n.z,n.y,.3,En)&&(n.x=En.x,n.z=En.z,n.vx=n.vz=0));n.y=t.surfaceY(n.x,n.z,n.y+1),n.mixer.update(e),n.sync()}};var Va=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.7,this.master.connect(t.destination);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}start(){if(!this.ctx||this.started)return;this.started=!0;let e=this.ctx,t=this._noiseSrc(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=e.createGain();i.gain.value=.06,t.connect(n).connect(i).connect(this.master),t.start();let r=e.createOscillator();r.type="sawtooth";let o=e.createOscillator();o.type="square";let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=e.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=e.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=e.createOscillator();f.type="triangle";let d=e.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let p=e.createOscillator(),x=e.createOscillator();p.type=x.type="square",p.frequency.value=392,x.frequency.value=494;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=1500;let m=e.createGain();m.gain.value=0,p.connect(g),x.connect(g),g.connect(m).connect(this.master),p.start(),x.start(),this.hornG=m}mute(e){this.master&&this.master.gain.setTargetAtTime(e||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(e,t,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(t){let c=Math.abs(t.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(t.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(t.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(t.thr)*.06,r,.08);let f=Math.sin(t.h),d=Math.cos(t.h),p=Math.abs(t.vx*d-t.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,p-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(e.t%1.2<.6?720:960,r,.03)}_burst(e,t,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+e),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+e+.05)}_tone(e,t,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(t,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(e){let t=Math.min(1,e/15);this._burst(.35+t*.4,900,.25+t*.5),this._tone(90,40,.3,.3*t)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((e,t)=>this._tone(e,e,.25,.14,"square",t*.11))}fail(){[392,330,262,196].forEach((e,t)=>this._tone(e,e*.98,.3,.14,"sawtooth",t*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(e){this.hornG&&this.hornG.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.02)}};var vt=s=>document.querySelector(s),Wa=class{constructor(e,t){this.G=e,this.mobile=t,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=vt("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",t||matchMedia("(pointer: coarse)").matches),vt("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),vt("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),vt("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),vt("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),vt("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,vt("#map").hidden=!0,this.toggleMap(this.G.world,this.G),vt("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),vt("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();vt("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(e,t){vt("#loadbar i").style.width=Math.round(e*100)+"%",t&&(vt("#loadtxt").textContent=t)}ready(){vt("#load").hidden=!0,vt("#title").hidden=!1}play(){vt("#title").hidden=!0,vt("#hud").hidden=!1,document.body.classList.add("playing")}pause(e){vt("#pause").hidden=!e}error(e){vt("#loadtxt").textContent="Chyba: "+e}toast(e){let t=vt("#toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}big(e,t,n,i=2.6){let r=vt("#big");r.querySelector("b").textContent=e,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=t||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(e,t){let n=vt("#flash");n.style.background=e,n.style.transition="none",n.style.opacity=t,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(e){if(this._hint===e)return;this._hint=e;let t=vt("#hint");t.textContent=e,t.hidden=!e||this.mobile}flashHint(){}bindTouch(e,t){this.snd=t;let n=vt("#stick"),i=vt("#stick i"),r=null,o=0,a=0,c=null,l=0,h=52,u=vt("#touch");u.addEventListener("touchstart",p=>{t.unlock();for(let x of p.changedTouches)x.clientX<innerWidth*.5&&r===null?(r=x.identifier,o=x.clientX,a=x.clientY,n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0):c===null&&(c=x.identifier,l=x.clientX);p.preventDefault()},{passive:!1}),u.addEventListener("touchmove",p=>{for(let x of p.changedTouches)if(x.identifier===r){let g=x.clientX-o,m=x.clientY-a,_=Math.hypot(g,m);_>h&&(g*=h/_,m*=h/_),i.style.transform=`translate(${g}px,${m}px)`,this.stick.x=g/h,this.stick.y=-m/h}else x.identifier===c&&(this.look.dx+=(x.clientX-l)*.009,l=x.clientX);p.preventDefault()},{passive:!1});let f=p=>{for(let x of p.changedTouches)x.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),x.identifier===c&&(c=null)};u.addEventListener("touchend",f),u.addEventListener("touchcancel",f);let d=(p,x)=>{let g=vt(p);g.addEventListener("touchstart",_=>{t.unlock(),this.btn[x]=1,g.classList.add("dn"),_.preventDefault(),_.stopPropagation()},{passive:!1});let m=_=>{this.btn[x]=0,g.classList.remove("dn"),_.preventDefault()};g.addEventListener("touchend",m),g.addEventListener("touchcancel",m)};d("#bGas","gas"),d("#bBrake","brake"),d("#bHb","hb"),d("#bAtk","atk"),vt("#bAct").addEventListener("touchstart",p=>{t.unlock(),e.act=1,p.preventDefault(),p.stopPropagation()},{passive:!1}),vt("#bAct").addEventListener("click",()=>e.act=1)}update(e,t,n){vt("#money").textContent="\u20AC "+Math.floor(e.money).toLocaleString("sk-SK");let i="\u2605".repeat(e.wanted)+"\u2606".repeat(5-e.wanted);this._st!==i&&(this._st=i,vt("#stars").textContent=i,vt("#stars").classList.toggle("hot",e.wanted>0));let r=Math.floor(e.tod),o=Math.floor(e.tod%1*60);vt("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=e.street?e.district?e.street+" \xB7 "+e.district:e.street:e.district||"";if(this._street!==a){this._street=a;let l=vt("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=t.goalText;if(t.goal){let l=Math.hypot(t.goal.x-t.px,t.goal.z-t.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,vt("#goal").textContent=c),vt("#speed").textContent=t.speed!==null?Math.round(t.speed)+" km/h":"",vt("#hp").style.width=Math.max(0,e.hp)+"%",document.body.classList.toggle("incar",t.inCar),document.body.classList.toggle("nearcar",t.nearCar||t.inCar),vt("#bAct").textContent=t.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(t,n))}drawMini(e,t){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=e.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-e.px,-e.pz),i.imageSmoothingEnabled=!0,t.drawGround(i,e.px,e.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let p=(f-e.px)*a,x=(d-e.pz)*a,g=Math.cos(l),m=Math.sin(l);return[r/2+p*g-x*m,r/2+p*m+x*g]},u=(f,d,p,x,g)=>{let[m,_]=h(f,d),v=m-r/2,y=_-r/2,w=Math.hypot(v,y),b=r/2-8;if(w>b){if(!g)return;m=r/2+v/w*b,_=r/2+y/w*b}i.fillStyle=p,i.beginPath(),i.arc(m,_,x,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of e.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of e.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);e.goal&&u(e.goal.x,e.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-e.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(e,t){let n=vt("#map");if(!n.hidden||!e){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(vt("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=vt("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?e.H/2:900,l=Math.min(e.W-c,Math.max(c,a?a.x:e.W/2)),h=Math.min(e.H-c,Math.max(c,a?a.z:e.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),e.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(g,m,_,v)=>{o.fillStyle=_,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(g*u,m*u,v,0,7),o.fill(),o.stroke()},p=t&&t.world?window.__gtbLOC:null;if(window.__gtbLM&&window.__gtbLM(d,r),p){for(let g of p.contacts)d(g[0],g[1],"#ffcc33",r/70);for(let g of p.races)d(g[0],g[1],"#33e0ff",r/70)}let x=window.__gtbPos&&window.__gtbPos();if(x){x.goal&&d(x.goal.x,x.goal.z,"#ff4fd8",r/60),o.save(),o.translate(x.x*u,x.z*u),o.rotate(Math.PI-x.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let g=r/50;o.beginPath(),o.moveTo(0,-g),o.lineTo(g*.7,g*.8),o.lineTo(0,g*.35),o.lineTo(-g*.7,g*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var t1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,zn=t1&&Math.min(screen.width,screen.height)<900,Ch=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",re=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},Za=document.getElementById("c"),hr=new Lr({canvas:Za,antialias:!1,powerPreference:"high-performance"});hr.setPixelRatio(1);hr.shadowMap.enabled=!0;hr.shadowMap.type=Ta;var ds,Cn={zoneNow:!1,obst:()=>qt,update(){},flash(){},maybeTaxi(){},livery(){},goalText:()=>""},cn=new Di,dn=new nn(60,1,.3,2700),ct=new Wa(re,zn),Ht=new Va,Je,Xa=new ba(12571903,5918784,1.2),Tn=new sr(16777215,3);Tn.castShadow=!0;Tn.shadow.mapSize.set(zn?1024:2048,zn?1024:2048);var ro=75;Object.assign(Tn.shadow.camera,{left:-ro,right:ro,top:ro,bottom:-ro,near:1,far:600});Tn.shadow.bias=-.0015;Tn.shadow.normalBias=.6;cn.add(Xa,Tn,Tn.target);var us=new ir(16769712,0,55,.55,.6,1.2);cn.add(us,us.target);var qd={uSun:kt.uSun,uNight:kt.uNight,uTime:kt.uTime},ja=new et(new Ui(1800,32,16),new Mn({uniforms:qd,side:hn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:fd}));ja.frustumCulled=!1;cn.add(ja);cn.fog=new oa(9085112,.0026);var Yd=new Xn(1.6,1.6,26,16,1,!0);Yd.translate(0,13,0);function n1(s){let e=new et(Yd,new Mn({uniforms:{uC:{value:new Oe(s)},uTime:kt.uTime},transparent:!0,depthWrite:!1,side:Jt,blending:_i,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return e.frustumCulled=!1,e}var Rn={},Mt={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(Rn[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(Mt.act=1),s.code==="KeyM"&&ct.toggleMap(Je,re),s.code==="KeyH"&&Ht.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&ep(),re.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&Qd(),Ht.unlock())});addEventListener("keyup",s=>{Rn[s.code]=0,s.code==="KeyH"&&Ht.horn(!1)});var Fh=!1,Uh=0;Za.addEventListener("mousedown",s=>{Fh=!0,Uh=s.clientX,Ht.unlock()});addEventListener("mouseup",()=>Fh=!1);addEventListener("mousemove",s=>{Fh&&(Mt.camDX+=(s.clientX-Uh)*.006,Uh=s.clientX,Mt.camDrag=1.5)});ct.bindTouch(Mt,Ht);ct.onStart=()=>Qd();ct.onPause=()=>ep();ct.onDetail=s=>{re.detail=s,Oh()};function i1(){let s=0,e=0;(Rn.KeyA||Rn.ArrowLeft)&&(s-=1),(Rn.KeyD||Rn.ArrowRight)&&(s+=1),(Rn.KeyW||Rn.ArrowUp)&&(e+=1),(Rn.KeyS||Rn.ArrowDown)&&(e-=1),ct.stick.active&&(s=ct.stick.x,e=ct.stick.y),Mt.mx=s,Mt.my=e,Mt.run=Rn.ShiftLeft||Rn.ShiftRight||ct.stick.active&&Math.hypot(ct.stick.x,ct.stick.y)>.92?1:0,Mt.hb=Rn.Space||ct.btn.hb?1:0,Mt.atk=Rn.Space||ct.btn.atk?1:0,Mt.gas=ct.btn.gas,Mt.brake=ct.btn.brake}var He,qt=[],Un=[],Fn=[],Le=null,Zd=[],Ph=new N;function ps(s,e,t,n,i){let r=new Ga(s,i);return r.place(e,t,n,Je),cn.add(r.obj),qt.push(r),r}function oo(s){let e=qt.indexOf(s);e>=0&&qt.splice(e,1),cn.remove(s.obj),s.siren&&(s.siren=null);let t=Fn.indexOf(s);t>=0&&Fn.splice(t,1)}var Kd=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function s1(s,e){for(let t=0;t<12;t++){let n=Lt()*Math.PI*2,i=70+Lt()*110,r=s+Math.sin(n)*i,o=e+Math.cos(n)*i,a=Je.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=xt(a.s,3,a.e.L-3);Sn.at(a.e,c,rt);let l=rt.x-rt.dz*a.e.lane,h=rt.z+rt.dx*a.e.lane;if(qt.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-e)<55)continue;let u=ps(un(Kd),l,h,Math.atan2(rt.dx,rt.dz));Cn.maybeTaxi(u),u.driver="ai",u.ai=new no(u,Je,a.e,c);let f=Math.min(a.e.v,9);return u.vx=rt.dx*f,u.vz=rt.dz*f,u}}var rt={};function r1(s,e){for(let t=0;t<10;t++){let n=Lt()*Math.PI*2,i=50+Lt()*90,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=xt(r.s,4,r.e.L-4);Sn.at(r.e,o,rt);let a=r.e.r.w/2-1.05,c=rt.x-rt.dz*a,l=rt.z+rt.dx*a;if(qt.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-e)<40)continue;let h=ps(un(Kd),c,l,Math.atan2(rt.dx,rt.dz));return h.parked=!0,h}}function jd(s,e,t){let n=Je.pedGrid.query(s,e,70,[]);for(let i=0;i<8&&n.length;i++){let r=un(n),o=Lt()*r.L;Sn.at(r,o,rt);let a=Math.hypot(rt.x-s,rt.z-e);if(a<(t?10:26)||a>72||Je.onDeck(rt.x,rt.z,999)&&!r.sw)continue;let c=new io(Je,r,o);return cn.add(c.p.obj),Un.push(c),c}}function o1(s){let e=Un.indexOf(s);e>=0&&Un.splice(e,1),cn.remove(s.p.obj)}function a1(s,e){for(let t=0;t<10;t++){let n=Lt()*Math.PI*2,i=90+Lt()*60,r=Je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,50);if(!r||(Sn.at(r.e,r.s,rt),Math.hypot(rt.x-s,rt.z-e)<70))continue;let o=un(["kombi","kombi","esuv","golfik"]),a=ps(o,rt.x,rt.z,Math.atan2(rt.dx,rt.dz),"#eef0f2");return a.driver="police",a.ai=new no(a,Je,r.e,r.s),a.ai.mode="chase",Cn.livery(a,o==="esuv"?"pz25":"pz"),Fn.push(a),a}}var ei={vy:0,punchT:0,hurtT:0};function Ja(s,e){He.x=s,He.z=e,He.y=Je.surfaceY(s,e),He.sync()}function c1(s){if(s.driver==="ai"||s.driver==="police"){let t=new io(Je,Je.pedEdges[0],0);t.p.x=s.x-Math.cos(s.h)*1.6,t.p.z=s.z+Math.sin(s.h)*1.6,cn.add(t.p.obj),Un.push(t),t.flee(He.x,He.z),ms(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),Ht.shout()}else s.parked&&!s.safe&&Lt()<.35&&(s.alarm=6,ms(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,Le=s,re.inCar=s,He.obj.visible=!1;let e=Fn.indexOf(s);e>=0&&Fn.splice(e,1),Ht.door(),ct.flashHint(""),re.mission&&re.mission.onEnter&&re.mission.onEnter(s)}function ur(){let s=Le;if(!s)return;let e=-Math.cos(s.h),t=Math.sin(s.h),n=s.x+e*1.7,i=s.z+t*1.7;Je.collide(n,i,s.y,.4,qa)&&(n=s.x-e*1.7,i=s.z-t*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,Le=null,re.inCar=null,He.obj.visible=!0,He.h=s.h,Ja(n,i),Ht.door()}var qa={};function ms(s,e){if(s<=0||re.mode!=="play")return;re.heat+=s;let t=xt(Math.floor(re.heat),0,5);t>re.wanted&&(re.wanted=t,ct.toast("H\u013DADAN\xDD "+"\u2605".repeat(t)+(e?" \xB7 "+e:""))),re.coolT=0}var It={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},l1={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},h1=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],$a=(s,e)=>{let t=Je.d.meta;return[(s-t.lon0)*t.mx,(t.lat1-e)*t.my]};function u1(s,e){let t="",n=1e9;for(let i of h1){i.p||(i.p=$a(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-e);r<n&&(n=r,t=i[2])}return t}function f1(){It.contacts.push([It.contact[0],It.contact[1],"Star\xE9 Mesto"]),It.races.push([It.race[0],It.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[e,t,n]of l1[s]){let[i,r]=$a(e,t),o=null,a=1e9;for(let c of Je.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;Sn.at(l,l.L/2,rt);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=rt.x-rt.dz*h,f=rt.z+rt.dx*h;if(Je.hAt(u,f)<Je.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&It[s].push(o)}}var d1=[["Most Apollo",17.1281,48.1372,60],["Eurovea a nov\xE9 SND",17.1215,48.1405,60],["Star\xFD most",17.1167,48.1385,45],["Sad Janka Kr\xE1\u013Ea",17.109,48.1345,70],["Pr\xEDstavn\xFD most",17.139,48.134,70],["Ve\u013Ek\xFD Dra\u017Ediak",17.1195,48.1095,90],["\u0160trkoveck\xE9 jazero",17.151,48.1545,80],["Zimn\xFD pr\xEDstav",17.142,48.14,90],["Mal\xFD Dunaj vo Vrakuni",17.199,48.1425,80],["Slovnaft",17.179,48.127,160]],ao=(s,e,t)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-e,r[1]-t);o<i&&(i=o,n=r)}return n},Ka={};window.__gtbLOC=It;window.__gtbPos=()=>({x:Le?Le.x:He.x,z:Le?Le.z:He.z,h:Le?Le.h:He.h,goal:re.mission?re.mission.goal():null});function co(s,e,t,n){let i=Ka[s];return i||(i=Ka[s]=n1(n),cn.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(e,Je.surfaceY(e,t),t),i.visible=!0,i}function xn(s){Ka[s]&&(Ka[s].visible=!1)}function Qa(){It.contacts.forEach((s,e)=>co("contact"+e,s[0],s[1],"#ffcc33")),It.races.forEach((s,e)=>co("race"+e,s[0],s[1],"#33e0ff")),xn("target"),xn("cp")}function p1(){let s=null,e=Je.edgeGrid.query(He.x,He.z,650,[]);for(let u=0;u<80&&!s&&e.length;u++){let f=un(e).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],p=f.p[0][1],x=Math.hypot(d-He.x,p-He.z);if(x<220||x>650)continue;Sn.at(f,f.L/2,rt);let g=f.r.w/2-1.05;s=[rt.x-rt.dz*g,rt.z+rt.dx*g,Math.atan2(rt.dx,rt.dz),f.r.n]}if(!s)return;let t=un(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=un(n),o=ci.cars[t].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[t]:o.acc_},l=ps(t,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[t]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>Le===l?{x:It.garage[0],z:It.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",ct.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),ms(1,"majite\u013E vol\xE1 pol\xEDciu"),xn("target"),co("garage",...It.garage,"#7dff6a"))},update(){if(!qt.includes(l))return Bd("Auto je pre\u010D.");if(l.dmg>260)return Bd("Auto je na \u0161rot.");if(Le!==l&&co("target",l.x,l.z,"#ff4fd8"),Le===l&&Math.hypot(l.x-It.garage[0],l.z-It.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(re.wanted?0:200);Jd(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),ur(),oo(l)}}};xn("contact"),xn("race"),re.mission=h,ct.toast("K\u0160EFT: "+h.text),Ht.blip()}function m1(){let s=Je.nearestEdge(He.x,He.z,80);if(!s)return;let e=s.e,t=[],n={x:He.x,z:He.z},i=0;for(;t.length<8&&i++<400;){let o=e.b.out.filter(c=>c!==e.rev&&c.r.c>=1);if(!o.length)break;e=un(o);let a=e.p[e.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<Je.W-30&&a[1]<Je.H-30&&(t.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(t.length<4)return ct.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:t,par:t.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];co("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=Le?Le.x:He.x,l=Le?Le.z:He.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,Ht.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);Jd(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};xn("contact"),xn("race"),re.mission=r,ct.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),Ht.blip()}function Jd(s,e){re.money+=e,ct.big("MISIA SPLNEN\xC1",s,"#7dff6a"),Ht.win(),re.mission=null,xn("garage"),xn("target"),xn("cp"),setTimeout(Qa,2500)}function Bd(s){ct.big("MISIA ZLYHALA",s,"#ff5a4a"),re.mission=null,xn("garage"),xn("target"),xn("cp"),setTimeout(Qa,2500)}function $d(s,e,t,n){re.mode="dead",ct.big(s,e,t,3.2),Ht.fail(),setTimeout(()=>{Le&&ur(),re.money=Math.max(0,Math.round(re.money*(1-n))),re.wanted=0,re.heat=0,re.hp=100;for(let i of Fn.slice())oo(i);re.mission&&(re.mission=null,xn("garage"),xn("target"),xn("cp")),Qa();{let i=Le?Le.x:He.x,r=Le?Le.z:He.z,a=Math.hypot(i-It.hospital[0],r-It.hospital[1])>1400?ao(It.contacts,i,r):null,c=a?a[0]+3:It.hospital[0],l=a?a[1]+3:It.hospital[1];Le&&ur(),Ja(c,l),Je.prime(c,l)}He.play("idle"),re.mode="play"},3200)}async function g1(){ct.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}ds=new bd(hr);let e=await(await fetch(Ch+"world.json")).json();ct.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),Je=new Sn(e,Ch,{mobile:zn}),await Je.init(n=>ct.loading(.25+n*.15,"Staviam mesto\u2026")),cn.add(Je.group),re.world=Je,f1(),ct.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await Je.prime(...It.start),ct.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await Fd(Ch+"models/",n=>ct.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),He=new to(0,!1),cn.add(He.obj),Ja(...It.start);try{let n=Je.d.meta;Cn=Sd({Fe:Je,Wt:cn,Tt:qt,Pn:Un,Ln:Fn,we:He,pc:()=>Le,q:re,Ve:ct,vt:Ht,Kn:zn,an:kt,Xs:oi,Ye:xt,Ge:dt,Xn:Qn,ct:Lt,en:un,fn:bn,Zs:ms,mh:Ya,Zn:ei,Yn:ci,Ks:ps,SGrid:ai,OX:n.ox,OZ:n.oz,moreLandmarks:d1.map(([i,r,o,a])=>[i,...$a(r,o),a])}),Ha.mat=i=>i.name==="Plate"?Cn.plateMat():Cn.gloss(i),Cn.init(),re.x3=()=>Cn}catch(n){console.error("X3",n)}He.h=Math.PI,Qa();let t=Je.nearestEdge(It.start[0],It.start[1]+30,60);if(t){Sn.at(t.e,xt(t.s,5,t.e.L-5),rt);let n=t.e.r.w/2-1.05,i=ps("golfik",rt.x-rt.dz*n,rt.z+rt.dx*n,Math.atan2(rt.dx,rt.dz),"#b8352b");i.parked=!0,i.safe=!0,i.keep=!0}for(let n=0;n<10;n++)jd(He.x,He.z,!0);Oh(),ct.loading(1,""),ct.ready(),re.mode="title",re.titleCam=0,requestAnimationFrame(tp)}function Qd(){re.mode==="title"&&(Ht.unlock(),Ht.start(),re.mode="play",ct.play(),re.camYaw=He.h+Math.PI)}function ep(){re.mode!=="title"&&(re.paused=!re.paused,ct.pause(re.paused),Ht.mute(re.paused))}function Oh(){if(!ds)return;let s=re.detail??1,e=zn?[2,1.5,1.1][s]:[2,1.5,1][s],t=Math.min(window.devicePixelRatio||1,e),n=Math.floor(innerWidth*t),i=Math.floor(innerHeight*t);Za.width=n,Za.height=i,hr.setSize(n,i,!1),hr.setViewport(0,0,n,i);let r=ds.setSize(n,i,1,zn?[4,0,0][s]:[4,4,0][s]);dn.aspect=r.aspect;let o=r.aspect<1;dn.fov=o?74:58,dn.updateProjectionMatrix(),re.portrait=o}addEventListener("resize",Oh);var kd=performance.now(),Lh=0,Ih=new N,Hd=new N,Gd=!1;re.camYaw=0;function tp(s){requestAnimationFrame(tp);let e=Math.min(.05,(s-kd)/1e3);if(kd=s,re.fixedDt&&(e=re.fixedDt),!re.noLoop){if(re.paused){ds.render(cn,dn);return}np(e),ds.render(cn,dn)}}re.step=np;re.cars=qt;re.peds=Un;re.police=Fn;re.pl=()=>He;re.pc=()=>Le;re.key=(s,e)=>dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s}));re.spawn=(s,e,t,n,i)=>{let r=ps(s,e,t,n,i);return r.parked=!0,r.keep=!0,r};re.tp=async(s,e)=>{Le&&ur(),await Je.prime(s,e),Ja(s,e)};re.ll=(s,e)=>$a(s,e);re.LOC=It;re.hY=(s,e)=>Je.hAt(s,e);re.render=()=>ds.render(cn,dn);function np(s){if(re.t+=s,kt.uTime.value=re.t,i1(),(re.mode==="play"||re.mode==="dead")&&(re.tod=(re.tod+s/40)%24),x1(),re.mode==="title"){Je.update(ip,sp,6),v1(s),Vd(s,!1),Cn.update(s,!0);return}{let e=Le||He,t=Le?Math.min(60,Math.abs(Le.speed)*4):0;Je.update(e.x+Math.sin(e.h)*t,e.z+Math.cos(e.h)*t,zn?4:6)}if(re.mode==="play"?_1(s):He.mixer.update(s),Vd(s,!0),Cn.update(s,!1),R1(s),re.mission&&re.mode==="play"&&re.mission.update(s),!re.mission&&re.mode==="play"){let e=Le?Le.x:He.x,t=Le?Le.z:He.z,n=ao(It.contacts,e,t),i=ao(It.races,e,t);n&&Math.hypot(e-n[0],t-n[1])<4?p1():i&&Math.hypot(e-i[0],t-i[1])<6&&m1()}if(C1(s),re.dbgCam){let e=re.dbgCam;dn.position.set(e[0],e[1],e[2]),dn.lookAt(e[3],e[4],e[5]),ja.position.copy(dn.position),Bh(e[3],e[5])}P1(s),Ht.update(re,Le,Fn,dn)}function x1(){let s=re.tod,e=Math.sin((s-6.2)/12*Math.PI)*.95,t=(s-6.2)/12*Math.PI+Math.PI/2,n=new N(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)).normalize();qd.uSun.value.copy(n);let i=rd(xt((.04-n.y)/.16,0,1));kt.uNight.value=i;let r=xt(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;Tn.color.setRGB(1,dt(.95,.62,r),dt(.88,.38,r)),Tn.intensity=o*dt(3.2,2.2,r)*xt(n.y*6,0,1),Xa.color.setRGB(dt(.12,dt(.75,.9,r),o),dt(.16,dt(.85,.65,r),o),dt(.32,dt(1,.6,r),o)),Xa.groundColor.setRGB(dt(.05,.42,o),dt(.05,.36,o),dt(.07,.3,o)),Xa.intensity=dt(.7,1.15,o),i>.5&&(Tn.intensity=.35*i,Tn.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),re.sunDir=n;let a=new Oe().setRGB(dt(.03,dt(.62,.85,r),o),dt(.04,dt(.72,.5,r),o),dt(.08,dt(.85,.36,r),o));cn.fog.color.copy(a),cn.fog.density=dt(.002,zn?.0014:9e-4,o),Je.lampHeadMat.color.setRGB(dt(.5,3,i),dt(.45,2.4,i),dt(.35,1.5,i)),Je.ufoRing&&Je.ufoRing.material.color.setRGB(dt(.6,3,i),dt(.5,2.2,i),dt(.3,1.2,i)),ds.exposure.value=dt(1,1.55,i)}var ip=1804,sp=1476;function v1(s){re.titleCam+=s*.035;let e=ip,t=sp,n=re.titleCam+2.2;dn.position.set(e+Math.sin(n)*330,Je.hAt(e,t)+95,t+Math.cos(n)*330),dn.lookAt(e,Je.hAt(e,t)+20,t),Bh(e,t)}function Bh(s,e){let t=re.sunDir||new N(0,1,0),n=ro*2/Tn.shadow.mapSize.x;s=Math.round(s/n)*n,e=Math.round(e/n)*n;let i=Je.hAt(s,e);Tn.target.position.set(s,i,e),Tn.position.set(s+t.x*250,i+t.y*250,e+t.z*250),Tn.target.updateMatrixWorld()}function _1(s){if(Mt.act)if(Mt.act=0,Le)Le.speed<6&&ur();else{let r=zh(3.6);r&&c1(r)}if(Le){let r=Le,o=Mt.my;Mt.gas&&(o=1),Mt.brake&&(o=-1),r.thr=o,r.st=-Mt.mx,r.hb=Mt.hb,He.x=r.x,He.z=r.z,He.y=r.y,r.alarm>0&&(r.alarm-=s),ct.hint("");return}let e=He,t=Math.min(1,Math.hypot(Mt.mx,Mt.my));if(ei.punchT>0&&(ei.punchT-=s),Mt.atk&&ei.punchT<=0&&(ei.punchT=.7,e.play("punch",.08,1.4),setTimeout(()=>y1(),220)),t>.08&&ei.punchT<=.25){let r=Math.atan2(Mt.mx,Mt.my),o=re.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=Mt.run?5.2:.9+.75*t;e.h+=Qn(o-e.h)*xt(s*10,0,1),e.x+=a*l*s,e.z+=c*l*s,e.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else ei.punchT<=.25&&e.play("idle",.25);Je.collide(e.x,e.z,e.y,.35,qa)&&(e.x=qa.x,e.z=qa.z);for(let r of qt){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=e.x-(r.x+o*c),h=e.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){e.x+=l/u*(f-u),e.z+=h/u*(f-u);let d=r.speed;d>6&&ei.hurtT<=0&&(re.hp-=d*2.2,ei.hurtT=1,Ht.crash(d*.5),ct.flash("#ff2a2a",.35))}}}ei.hurtT>0&&(ei.hurtT-=s),e.x=xt(e.x,2,Je.W-2),e.z=xt(e.z,2,Je.H-2);let n=Je.surfaceY(e.x,e.z,e.y+.8);e.y+=(n-e.y)*xt(s*14,0,1),e.y<Je.water-1.2&&(re.hp=0),e.mixer.update(s),e.sync(),re.hp<=0&&$d("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=zh(3.6);ct.hint(i?zn?"NAST\xDAP":"[E] nast\xFAp":"")}function zh(s){let e=null,t=s;for(let n of qt){let i=Math.hypot(n.x-He.x,n.z-He.z);i<t&&n.speed<7&&n.burn===void 0&&(t=i,e=n)}return e}function y1(){let s=Math.sin(He.h),e=Math.cos(He.h);for(let t of Un){let n=t.x-He.x,i=t.z-He.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*e)/(r||1)>.3){Ht.punch(),t.hp--,t.hp<=0?(t.knock(s*2,e*2,!1),re.money+=Math.floor(Lt()*30)+5):t.flee(He.x,He.z);for(let o of Un)o!==t&&Math.hypot(o.x-t.x,o.z-t.z)<18&&o.flee(He.x,He.z);ms(.34,"bitka");return}}Ht.whoosh()}function Vd(s,e){let t=Le?Le.x:He.x,n=Le?Le.z:He.z;if(Lh-=s,Lh<=0){Lh=.35;let a=zn?14:22,c=zn?10:16,l=Math.round((zn?16:26)*(Cn.zoneNow?1.6:1)),h=0,u=0;for(let f of qt)f.driver==="ai"?h++:f.parked&&u++;h<a&&s1(t,n),u<c&&r1(t,n),Un.length<l&&jd(t,n,!1);for(let f of qt.slice())f===Le||f.keep||f.driver==="police"||Math.hypot(f.x-t,f.z-n)>230&&oo(f);for(let f of Un.slice())(Math.hypot(f.x-t,f.z-n)>105||f.state==="down"&&f.t<0)&&o1(f)}let i=re.t;for(let a of qt)a.ai&&a.driver!=="police"&&a.ai.update(s,Cn.obst(),i,Le?null:He,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of qt){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,Je,qt),c.impact>5&&c===Le&&(Ht.crash(c.impact),Ya(c.impact*.02))}for(let c=0;c<qt.length;c++)for(let l=c+1;l<qt.length;l++){let h=qt[c],u=qt[l],f=Od(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,h===Le||u===Le))){Ht.crash(f),Ya(f*.025);let d=h===Le?u:h;d.driver==="police"&&ms(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of qt){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(Je,s),a.lights(kt.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar&&Cn.flash(a),a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),S1(a),Ht.boom(),a===Le&&(ur(),re.hp-=60,ct.flash("#ff8a2a",.6));for(let c of Un)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==Le&&!a.keep)){oo(a);break}}for(let a of Un)if(a.update(s,Je),a.state!=="down")for(let c of qt){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,p=f*h+d*u,x=f*u-d*h;if(Math.abs(p)<c.len/2+.3&&Math.abs(x)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),Ht.thud(),c===Le&&(ms(1,"zrazen\xFD chodec"),Ya(.15));for(let g of Un)g!==a&&Math.hypot(g.x-a.x,g.z-a.z)<25&&g.flee(a.x,a.z)}else c===Le&&p>0&&p<9+l*.4&&Math.abs(x)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}A1(s)}var M1=new Zt(.6,.6,.6),b1=new fn({color:16777215,transparent:!0,blending:_i,depthWrite:!1}),rp=220,wi=new Dn(M1,b1,rp);wi.frustumCulled=!1;wi.count=0;cn.add(wi);var so=[];function S1(s){Zd.push({car:s,t:0})}var Wd=new at,w1=new en,E1=new N,T1=new N,Xd=new Oe;function A1(s){for(let t of Zd)if(!(!qt.includes(t.car)||t.car.burn<-18))for(let n=0;n<3;n++)so.length<rp&&so.push({x:t.car.x+(Lt()-.5)*2,y:t.car.y+1.2,z:t.car.z+(Lt()-.5)*3,vy:2+Lt()*3,t:0,life:.6+Lt()*.9});let e=0;for(let t=so.length-1;t>=0;t--){let n=so[t];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){so.splice(t,1);continue}let i=n.t/n.life;Wd.compose(T1.set(n.x,n.y,n.z),w1,E1.setScalar(1+i*1.5)),wi.setMatrixAt(e,Wd),Xd.setRGB(dt(4,.3,i),dt(1.8,.25,i),dt(.3,.22,i)),wi.setColorAt(e,Xd),e++}wi.count=e,wi.instanceMatrix.needsUpdate=!0,wi.instanceColor&&(wi.instanceColor.needsUpdate=!0)}var Nh=0;function R1(s){let e=Le?Le.x:He.x,t=Le?Le.z:He.z,n=[0,1,2,3,4,6][re.wanted];Nh-=s,Fn.length<n&&Nh<=0&&(a1(e,t),Nh=3);let i=!1;for(let r of Fn.slice()){if(!r.ai)continue;r.ai.update(s,Cn.obst(),re.t,null,{x:e,z:t});let o=Math.hypot(r.x-e,r.z-t);o<80&&(i=!0),(o>320||re.wanted===0&&o>90)&&oo(r)}if(re.wanted>0?(re.coolT=(re.coolT||0)+s*(i?.25:1),re.coolT>22&&(re.wanted--,re.heat=re.wanted,re.coolT=0,ct.toast(re.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(re.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):re.heat=Math.max(0,re.heat-s*.02),re.wanted>0&&re.mode==="play"){let r=!1;for(let a of Fn)Math.hypot(a.x-e,a.z-t)<(Le?7.5:6)&&a.speed<6&&(r=!0);let o=Le?Le.speed<1.5:!0;re.bustT=r&&o?(re.bustT||0)+s:0,re.bustT>(Le?2.5:1.2)&&(re.bustT=0,$d("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var fs=0;function Ya(s){fs=Math.min(.6,fs+s)}function C1(s){let e=re.portrait;Mt.camDrag>0&&(Mt.camDrag-=s),ct.look.dx&&(Mt.camDX+=ct.look.dx,ct.look.dx=0,Mt.camDrag=1.5);let t,n,i,r,o,a;if(Le){let d=Le,x=d.fwd<-2?d.h:d.h+Math.PI;Mt.camDrag>0?re.camYaw+=Mt.camDX:re.camYaw+=Qn(x-re.camYaw)*xt(s*3.2,0,1),Mt.camDX=0,r=(e?11.5:8.6)+xt(d.speed*.09,0,4),o=e?4.6:3.3,t=d.x,i=d.z,n=d.y+1.3,a=2.2}else Mt.camDrag>0?re.camYaw+=Mt.camDX:Math.hypot(Mt.mx,Mt.my)>.2&&Mt.my>-.3&&(re.camYaw+=Qn(He.h+Math.PI-re.camYaw)*xt(s*1.4,0,1)),Mt.camDX=0,r=e?6.8:5,o=e?2.9:2.1,t=He.x,i=He.z,n=He.y+1.45,a=1;let c=t+Math.sin(re.camYaw)*r,l=i+Math.cos(re.camYaw)*r,h=Je.rayHit(t,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=t+(c-t)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),Je.surfaceY(c,l,n+5)+1.2);Ph.set(c,u,l),Gd||(Ih.copy(Ph),Gd=!0),Ih.lerp(Ph,xt(s*(Le?6:8),0,1));let f=Le?e?9:4:e?4.5:1.5;if(Hd.set(t-Math.sin(re.camYaw)*f,n+a*.4+(e?.6:0),i-Math.cos(re.camYaw)*f),dn.position.copy(Ih),fs>0&&(dn.position.x+=(Lt()-.5)*fs,dn.position.y+=(Lt()-.5)*fs,fs=Math.max(0,fs-s*1.5)),dn.lookAt(Hd),ja.position.copy(dn.position),Bh(t,i),Le&&kt.uNight.value>.2){let d=Le;us.intensity=60*kt.uNight.value,us.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),us.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),us.target.updateMatrixWorld()}else us.intensity=0}var Dh=0;function P1(s){Dh-=s;let e=Le?Le.x:He.x,t=Le?Le.z:He.z;Dh<=0&&(Dh=.25,re.street=Je.streetAt(e,t)||(Je.onDeck(e,t,(Le||He).y+1)?"Most":""),re.district=u1(e,t));let n=null;re.mission&&(n=re.mission.goal()),ct.update(re,{px:e,pz:t,h:Le?Le.h:He.h,yaw:re.camYaw,speed:Le?Le.speed*3.6:null,goal:n,goalText:re.mission?re.mission.text:"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body"+Cn.goalText(),markers:[...[ao(It.contacts,e,t)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!re.mission})),...[ao(It.races,e,t)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!re.mission}))],police:Fn.map(i=>({x:i.x,z:i.z})),inCar:!!Le,nearCar:!Le&&!!zh(3.6)},Je)}g1().catch(s=>{console.error(s),ct.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
