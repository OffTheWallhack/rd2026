(()=>{var vp=Object.create;var $h=Object.defineProperty;var yp=Object.getOwnPropertyDescriptor;var _p=Object.getOwnPropertyNames;var Mp=Object.getPrototypeOf,bp=Object.prototype.hasOwnProperty;var wp=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Sp=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of _p(e))!bp.call(s,i)&&i!==t&&$h(s,i,{get:()=>e[i],enumerable:!(n=yp(e,i))||n.enumerable});return s};var Ep=(s,e,t)=>(t=s!=null?vp(Mp(s)):{},Sp(e||!s||!s.__esModule?$h(t,"default",{value:s,enumerable:!0}):t,s));var pd=wp((K1,eh)=>{"use strict";eh.exports=Ya;eh.exports.default=Ya;function Ya(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=ud(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=A_(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var m=t;m<i;m+=t)u=s[m],f=s[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return eo(r,o,t,a,c,d,0),o}function ud(s,e,t,n,i){var r,o;if(i===Ql(s,e,t,n)>0)for(r=e;r<t;r+=n)o=hd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=hd(r,s[r],s[r+1],o);return o&&Za(o,o.next)&&(no(o),o=o.next),o}function fs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Za(t,t.next)||Kt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(s,e,t,n,i,r,o){if(s){!o&&r&&I_(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?S_(s,n,i,r):w_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),no(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=E_(fs(s),e,t),eo(s,e,t,n,i,r,2)):o===2&&T_(s,e,t,n,i,r):eo(fs(s),e,t,n,i,r,1);break}}}}function w_(s){var e=s.prev,t=s,n=s.next;if(Kt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,m=n.next;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ur(i,a,r,c,o,l,m.x,m.y)&&Kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function S_(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Kt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=Jl(d,m,e,t,n),y=Jl(v,g,e,t,n),x=s.prevZ,_=s.nextZ;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ur(a,h,c,u,l,f,x.x,x.y)&&Kt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ur(a,h,c,u,l,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ur(a,h,c,u,l,f,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ur(a,h,c,u,l,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function E_(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Za(i,r)&&fd(i,n,n.next,r)&&to(i,r)&&to(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),no(n),no(n.next),n=s=r),n=n.next}while(n!==s);return fs(n)}function T_(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&U_(o,a)){var c=dd(o,a);o=fs(o,o.next),c=fs(c,c.next),eo(o,e,t,n,i,r,0),eo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function A_(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ud(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(D_(l));for(i.sort(R_),r=0;r<i.length;r++)t=C_(i[r],t);return t}function R_(s,e){return s.x-e.x}function C_(s,e){var t=P_(s,e);if(!t)return e;var n=dd(t,s);return fs(n,n.next),fs(t,t.next)}function P_(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&ur(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),to(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&L_(o,t)))&&(o=t,u=f)),t=t.next;while(t!==c);return o}function L_(s,e){return Kt(s.prev,s,e.prev)<0&&Kt(e.next,s,s.next)<0}function I_(s,e,t,n){var i=s;do i.z===0&&(i.z=Jl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,N_(i)}function N_(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Jl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function D_(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ur(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function U_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!z_(s,e)&&(to(s,e)&&to(e,s)&&F_(s,e)&&(Kt(s.prev,s,e.prev)||Kt(s,e.prev,e))||Za(s,e)&&Kt(s.prev,s,s.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Za(s,e){return s.x===e.x&&s.y===e.y}function fd(s,e,t,n){var i=qa(Kt(s,e,t)),r=qa(Kt(s,e,n)),o=qa(Kt(t,n,s)),a=qa(Kt(t,n,e));return!!(i!==r&&o!==a||i===0&&Xa(s,t,e)||r===0&&Xa(s,n,e)||o===0&&Xa(t,s,n)||a===0&&Xa(t,e,n))}function Xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function qa(s){return s>0?1:s<0?-1:0}function z_(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&fd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return Kt(s.prev,s,s.next)<0?Kt(s,e,s.next)>=0&&Kt(s,s.prev,e)>=0:Kt(s,e,s.prev)<0||Kt(s,s.next,e)<0}function F_(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function dd(s,e){var t=new $l(s.i,s.x,s.y),n=new $l(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(s,e,t,n){var i=new $l(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function $l(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ya.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(Ql(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs(Ql(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,m=n[a+2]*t;u+=Math.abs((s[f]-s[m])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[m+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Ql(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}Ya.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t}});var Bl="160";var Tp=0,Qh=1,Ap=2;var Oa=1,Rp=2,_i=3,ai=0,dn=1,Bt=2;var Fi=0,Ws=1,Si=2,eu=3,tu=4,Cp=5,ts=100,Pp=101,Lp=102,nu=103,iu=104,Ip=200,Np=201,Dp=202,Up=203,Zc=204,Kc=205,zp=206,Fp=207,Op=208,Bp=209,kp=210,Hp=211,Gp=212,Vp=213,Wp=214,Xp=0,qp=1,Yp=2,Qo=3,Zp=4,Kp=5,jp=6,Jp=7,kl=0,$p=1,Qp=2,Oi=0,em=1,tm=2,nm=3,im=4,sm=5,rm=6,su="attached",om="detached",Bf=300,Ys=301,Zs=302,jc=303,Jc=304,Ba=306,os=1e3,Un=1001,Ur=1002,$t=1003,ea=1004;var Ar=1005;var Qt=1006,Hl=1007;var Xn=1008;var oi=1009,am=1010,cm=1011,Gl=1012,kf=1013,Ui=1014,bi=1015,as=1016,Hf=1017,Gf=1018,is=1020,lm=1021,Vn=1023,hm=1024,um=1025,ss=1026,Ks=1027,fm=1028,Vf=1029,dm=1030,Wf=1031,Xf=1033,fc=33776,dc=33777,pc=33778,mc=33779,ru=35840,ou=35841,au=35842,cu=35843,qf=36196,lu=37492,hu=37496,uu=37808,fu=37809,du=37810,pu=37811,mu=37812,gu=37813,xu=37814,vu=37815,yu=37816,_u=37817,Mu=37818,bu=37819,wu=37820,Su=37821,gc=36492,Eu=36494,Tu=36495,pm=36283,Au=36284,Ru=36285,Cu=36286,ka=2200,mm=2201,gm=2202,js=2300,cs=2301,xc=2302,Os=2400,Bs=2401,ta=2402,Vl=2500,xm=2501,Yf=0,Ha=1,Qr=2,Zf=3e3,rs=3001,vm=3200,ym=3201,Wl=0,_m=1,En="",Ct="srgb",cn="srgb-linear",Xl="display-p3",Ga="display-p3-linear",na="linear",Gt="srgb",ia="rec709",sa="p3";var Ms=7680;var Pu=519,Mm=512,bm=513,wm=514,Kf=515,Sm=516,Em=517,Tm=518,Am=519,$c=35044;var ra="300 es",Qc=1035,wi=2e3,oa=2001,Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,Rr=Math.PI/180,Js=180/Math.PI;function Wn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function on(s,e,t){return Math.max(e,Math.min(t,s))}function ql(s,e){return(s%e+e)%e}function Rm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cm(s,e,t){return s!==e?(t-s)/(e-s):0}function Cr(s,e,t){return(1-t)*s+t*e}function Pm(s,e,t,n){return Cr(s,e,1-Math.exp(-t*n))}function Lm(s,e=1){return e-Math.abs(ql(s,e*2)-e)}function Im(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Um(s,e){return s+Math.random()*(e-s)}function zm(s){return s*(.5-Math.random())}function Fm(s){s!==void 0&&(Lu=s);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(s){return s*Rr}function Bm(s){return s*Js}function el(s){return(s&s-1)===0&&s!==0}function km(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function aa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var jf={DEG2RAD:Rr,RAD2DEG:Js,generateUUID:Wn,clamp:on,euclideanModulo:ql,mapLinear:Rm,inverseLerp:Cm,lerp:Cr,damp:Pm,pingpong:Lm,smoothstep:Im,smootherstep:Nm,randInt:Dm,randFloat:Um,randFloatSpread:zm,seededRandom:Fm,degToRad:Om,radToDeg:Bm,isPowerOfTwo:el,ceilPowerOfTwo:km,floorPowerOfTwo:aa,setQuaternionFromProperEuler:Hm,normalize:Ft,denormalize:ri},be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],x=i[4],_=i[7],T=i[2],S=i[5],M=i[8];return r[0]=o*v+a*y+c*T,r[3]=o*g+a*x+c*S,r[6]=o*p+a*_+c*M,r[1]=l*v+h*y+u*T,r[4]=l*g+h*x+u*S,r[7]=l*p+h*_+u*M,r[2]=f*v+d*y+m*T,r[5]=f*g+d*x+m*S,r[8]=f*p+d*_+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vc=new bt;function Jf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gm(){let s=zr("canvas");return s.style.display="block",s}var Iu={};function Pr(s){s in Iu||(Iu[s]=!0,console.warn(s))}var Nu=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[cn]:{transfer:na,primaries:ia,toReference:s=>s,fromReference:s=>s},[Ct]:{transfer:Gt,primaries:ia,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ga]:{transfer:na,primaries:sa,toReference:s=>s.applyMatrix3(Du),fromReference:s=>s.applyMatrix3(Nu)},[Xl]:{transfer:Gt,primaries:sa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Du),fromReference:s=>s.applyMatrix3(Nu).convertLinearToSRGB()}},Vm=new Set([cn,Ga]),Nt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=bo[e].toReference,i=bo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return bo[s].primaries},getTransfer:function(s){return s===En?na:bo[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var bs,ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=zr("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wm=0,la=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Wn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_c(i[o].image)):r.push(_c(i[o]))}else r=_c(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xm=0,ln=class s extends Ei{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Un,i=Un,r=Qt,o=Xn,a=Vn,c=oi,l=s.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Wn(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rs?Ct:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?rs:Zf}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?Ct:En}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Bf;ln.DEFAULT_ANISOTROPY=1;var Pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,_=(d+1)/2,T=(p+1)/2,S=(h+f)/4,M=(u+v)/4,C=(m+g)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=M/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=S/i,r=C/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=M/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?Ct:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new la(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ha=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nl=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==m){let g=1-a,p=c*f+l*d+h*m+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),S=Math.atan2(T,p*y);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T}let _=a*y;if(c=c*g+f*_,l=l*g+d*_,h=h*g+m*_,u=u*g+v*_,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new D,Uu=new en,tn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),So.subVectors(this.max,_r),ws.subVectors(e.a,_r),Ss.subVectors(e.b,_r),Es.subVectors(e.c,_r),Pi.subVectors(Ss,ws),Li.subVectors(Es,Ss),ji.subVectors(ws,Es);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!bc(t,ws,Ss,Es,So)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,ws,Ss,Es,So))?!1:(Eo.crossVectors(Pi,Li),t=[Eo.x,Eo.y,Eo.z],bc(t,ws,Ss,Es,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new D,new D,new D,new D,new D,new D,new D,new D],jn=new D,wo=new tn,ws=new D,Ss=new D,Es=new D,Pi=new D,Li=new D,ji=new D,_r=new D,So=new D,Eo=new D,Ji=new D;function bc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);let a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qm=new tn,Mr=new D,wc=new D,zn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(wc)),this.expandByPoint(Mr.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new D,Sc=new D,To=new D,Ii=new D,Ec=new D,Ao=new D,Tc=new D,$s=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(To),a=Ii.dot(this.direction),c=-Ii.dot(To),l=Ii.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sc).addScaledVector(To,f),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){Ec.subVectors(t,e),Ao.subVectors(n,e),Tc.crossVectors(Ec,Ao);let o=this.direction.dot(Tc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);let c=a*this.direction.dot(Ao.crossVectors(Ii,Ao));if(c<0)return null;let l=a*this.direction.dot(Ec.cross(Ii));if(l<0||c+l>o)return null;let h=-a*Ii.dot(Tc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,m,v,g)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,Zm)}lookAt(e,t,n){let i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ni.crossVectors(n,Nn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ni.crossVectors(n,Nn)),Ni.normalize(),Ro.crossVectors(Nn,Ni),i[0]=Ni.x,i[4]=Ro.x,i[8]=Nn.x,i[1]=Ni.y,i[5]=Ro.y,i[9]=Nn.y,i[2]=Ni.z,i[6]=Ro.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],_=n[11],T=n[15],S=i[0],M=i[4],C=i[8],b=i[12],w=i[1],L=i[5],I=i[9],F=i[13],R=i[2],N=i[6],H=i[10],V=i[14],Z=i[3],W=i[7],$=i[11],j=i[15];return r[0]=o*S+a*w+c*R+l*Z,r[4]=o*M+a*L+c*N+l*W,r[8]=o*C+a*I+c*H+l*$,r[12]=o*b+a*F+c*V+l*j,r[1]=h*S+u*w+f*R+d*Z,r[5]=h*M+u*L+f*N+d*W,r[9]=h*C+u*I+f*H+d*$,r[13]=h*b+u*F+f*V+d*j,r[2]=m*S+v*w+g*R+p*Z,r[6]=m*M+v*L+g*N+p*W,r[10]=m*C+v*I+g*H+p*$,r[14]=m*b+v*F+g*V+p*j,r[3]=y*S+x*w+_*R+T*Z,r[7]=y*M+x*L+_*N+T*W,r[11]=y*C+x*I+_*H+T*$,r[15]=y*b+x*F+_*V+T*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=u*g*l-v*f*l+v*c*d-a*g*d-u*c*p+a*f*p,x=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,_=h*v*l-m*u*l+m*a*d-o*v*d-h*a*p+o*u*p,T=m*u*c-h*v*c-m*a*f+o*v*f+h*a*g-o*u*g,S=t*y+n*x+i*_+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/S;return e[0]=y*M,e[1]=(v*f*r-u*g*r-v*i*d+n*g*d+u*i*p-n*f*p)*M,e[2]=(a*g*r-v*c*r+v*i*l-n*g*l-a*i*p+n*c*p)*M,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*M,e[4]=x*M,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*M,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*M,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*M,e[8]=_*M,e[9]=(m*u*r-h*v*r-m*n*d+t*v*d+h*n*p-t*u*p)*M,e[10]=(o*v*r-m*a*r+m*n*l-t*v*l-o*n*p+t*a*p)*M,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*M,e[12]=T*M,e[13]=(h*v*i-m*u*i+m*n*f-t*v*f-h*n*g+t*u*g)*M,e[14]=(m*a*i-o*v*i-m*n*c+t*v*c+o*n*g-t*a*g)*M,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*M,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,v=o*h,g=o*u,p=a*u,y=c*l,x=c*h,_=c*u,T=n.x,S=n.y,M=n.z;return i[0]=(1-(v+p))*T,i[1]=(d+_)*T,i[2]=(m-x)*T,i[3]=0,i[4]=(d-_)*S,i[5]=(1-(f+p))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(m+x)*M,i[9]=(g-y)*M,i[10]=(1-(f+v))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ts.set(i[0],i[1],i[2]).length(),o=Ts.set(i[4],i[5],i[6]).length(),a=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);let l=1/r,h=1/o,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,m;if(a===wi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===oa)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,m,v;if(a===wi)m=(o+r)*u,v=-2*u;else if(a===oa)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ts=new D,Jn=new ot,Ym=new D(0,0,0),Zm=new D(1,1,1),Ni=new D,Ro=new D,Nn=new D,zu=new ot,Fu=new en,ua=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ua.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Km=0,Ou=new D,As=new en,gi=new ot,Co=new D,br=new D,jm=new D,Jm=new en,Bu=new D(1,0,0),ku=new D(0,1,0),Hu=new D(0,0,1),$m={type:"added"},Qm={type:"removed"},Vt=class s extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new ua,n=new en,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new bt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(br,Co,this.up):gi.lookAt(Co,br,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),As.setFromRotationMatrix(gi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($m)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new D,xi=new D,Ac=new D,vi=new D,Rs=new D,Cs=new D,Gu=new D,Rc=new D,Cc=new D,Pc=new D,Po=!1,ks=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),xi.subVectors(n,t),Ac.subVectors(e,t);let o=$n.dot($n),a=$n.dot(xi),c=$n.dot(Ac),l=xi.dot(xi),h=xi.dot(Ac),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,i,r,o,a,c){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),xi.subVectors(e,t),$n.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),$n.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Rs.subVectors(i,n),Cs.subVectors(r,n),Rc.subVectors(e,n);let c=Rs.dot(Rc),l=Cs.dot(Rc);if(c<=0&&l<=0)return t.copy(n);Cc.subVectors(e,i);let h=Rs.dot(Cc),u=Cs.dot(Cc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Rs,o);Pc.subVectors(e,r);let d=Rs.dot(Pc),m=Cs.dot(Pc);if(m>=0&&d<=m)return t.copy(r);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Cs,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Gu.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Gu,a);let p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Lc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=ql(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lc(o,r,e+1/3),this.g=Lc(o,r,e),this.b=Lc(o,r,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Nt.fromWorkingColorSpace(yn.copy(this),e),Math.round(on(yn.r*255,0,255))*65536+Math.round(on(yn.g*255,0,255))*256+Math.round(on(yn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,r=yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Ct){Nt.fromWorkingColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,i=yn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Lo);let n=Cr(Di.h,Lo.h,t),i=Cr(Di.s,Lo.s,t),r=Cr(Di.l,Lo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Oe;Oe.NAMES=$f;var e0=0,Pn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ws,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Kc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Kc&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var sn=new D,Io=new be,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}};var da=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var t0=0,Gn=new ot,Ic=new Vt,Ps=new D,Dn=new tn,wr=new tn,fn=new D,At=class s extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?pa:da)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Dn.min,wr.min),Dn.expandByPoint(fn),fn.addVectors(Dn.max,wr.max),Dn.expandByPoint(fn)):(Dn.expandByPoint(wr.min),Dn.expandByPoint(wr.max))}Dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),fn.add(Ps)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new D,h[w]=new D;let u=new D,f=new D,d=new D,m=new be,v=new be,g=new be,p=new D,y=new D;function x(w,L,I){u.fromArray(i,w*3),f.fromArray(i,L*3),d.fromArray(i,I*3),m.fromArray(o,w*2),v.fromArray(o,L*2),g.fromArray(o,I*2),f.sub(u),d.sub(u),v.sub(m),g.sub(m);let F=1/(v.x*g.y-g.x*v.y);isFinite(F)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(F),y.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(F),l[w].add(p),l[L].add(p),l[I].add(p),h[w].add(y),h[L].add(y),h[I].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let w=0,L=_.length;w<L;++w){let I=_[w],F=I.start,R=I.count;for(let N=F,H=F+R;N<H;N+=3)x(n[N+0],n[N+1],n[N+2])}let T=new D,S=new D,M=new D,C=new D;function b(w){M.fromArray(r,w*3),C.copy(M);let L=l[w];T.copy(L),T.sub(M.multiplyScalar(M.dot(L))).normalize(),S.crossVectors(C,L);let F=S.dot(h[w])<0?-1:1;c[w*4]=T.x,c[w*4+1]=T.y,c[w*4+2]=T.z,c[w*4+3]=F}for(let w=0,L=_.length;w<L;++w){let I=_[w],F=I.start,R=I.count;for(let N=F,H=F+R;N<H;N+=3)b(n[N+0]),b(n[N+1]),b(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Lt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new ot,$i=new $s,No=new zn,Wu=new D,Ls=new D,Is=new D,Ns=new D,Nc=new D,Do=new D,Uo=new be,zo=new be,Fo=new be,Xu=new D,qu=new D,Yu=new D,Oo=new D,Bo=new D,ze=class extends Vt{constructor(e=new At,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Nc.fromBufferAttribute(u,e),o?Do.addScaledVector(Nc,h):Do.addScaledVector(Nc.sub(t),h))}t.add(Do)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(No.containsPoint($i.origin)===!1&&($i.intersectSphere(No,Wu)===null||$i.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){let S=a.getX(_),M=a.getX(_+1),C=a.getX(_+2);i=ko(this,p,e,n,l,h,u,S,M,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);i=ko(this,o,e,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){let S=_,M=_+1,C=_+2;i=ko(this,p,e,n,l,h,u,S,M,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=g,x=g+1,_=g+2;i=ko(this,o,e,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function n0(s,e,t,n,i,r,o,a){let c;if(e.side===dn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ai,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Bo);return l<t.near||l>t.far?null:{distance:l,point:Bo.clone(),object:s}}function ko(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ls),s.getVertexPosition(c,Is),s.getVertexPosition(l,Ns);let h=n0(s,e,t,n,Ls,Is,Ns,Oo);if(h){i&&(Uo.fromBufferAttribute(i,a),zo.fromBufferAttribute(i,c),Fo.fromBufferAttribute(i,l),h.uv=ks.getInterpolation(Oo,Ls,Is,Ns,Uo,zo,Fo,new be)),r&&(Uo.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,c),Fo.fromBufferAttribute(r,l),h.uv1=ks.getInterpolation(Oo,Ls,Is,Ns,Uo,zo,Fo,new be),h.uv2=h.uv1),o&&(Xu.fromBufferAttribute(o,a),qu.fromBufferAttribute(o,c),Yu.fromBufferAttribute(o,l),h.normal=ks.getInterpolation(Oo,Ls,Is,Ns,Xu,qu,Yu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};ks.getNormal(Ls,Is,Ns,u.normal),h.face=u}return h}var Wt=class s extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(v,g,p,y,x,_,T,S,M,C,b){let w=_/M,L=T/C,I=_/2,F=T/2,R=S/2,N=M+1,H=C+1,V=0,Z=0,W=new D;for(let $=0;$<H;$++){let j=$*L-F;for(let ce=0;ce<N;ce++){let Y=ce*w-I;W[v]=Y*y,W[g]=j*x,W[p]=R,l.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(ce/M),u.push(1-$/C),V+=1}}for(let $=0;$<C;$++)for(let j=0;j<M;j++){let ce=f+j+N*$,Y=f+j+N*($+1),te=f+(j+1)+N*($+1),ae=f+(j+1)+N*$;c.push(ce,Y,ae),c.push(Y,te,ae),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(s){let e={};for(let t=0;t<s.length;t++){let n=Qs(s[t]);for(let i in n)e[i]=n[i]}return e}function i0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qf(s){return s.getRenderTarget()===null?s.outputColorSpace:Nt.workingColorSpace}var s0={clone:Qs,merge:Sn},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},er=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends er{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Us=1,il=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(Ds,Us,e,t);i.layers=this.layers,this.add(i);let r=new an(Ds,Us,e,t);r.layers=this.layers,this.add(r);let o=new an(Ds,Us,e,t);o.layers=this.layers,this.add(o);let a=new an(Ds,Us,e,t);a.layers=this.layers,this.add(a);let c=new an(Ds,Us,e,t);c.layers=this.layers,this.add(c);let l=new an(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ma=class extends ln{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sl=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rs?Ct:En),this.texture=new ma(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wt(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Fi});r.uniforms.tEquirect.value=t;let o=new ze(i,r),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Qt),new il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Dc=new D,a0=new D,c0=new bt,Mi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Dc.subVectors(n,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||c0.getNormalMatrix(e),i=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new zn,Ho=new D,Fr=class{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,g-d,_-p).normalize(),n[1].setComponents(c+r,f+l,g+d,_+p).normalize(),n[2].setComponents(c+o,f+h,g+m,_+y).normalize(),n[3].setComponents(c-o,f-h,g-m,_-y).normalize(),n[4].setComponents(c-a,f-u,g-v,_-x).normalize(),t===wi)n[5].setComponents(c+a,f+u,g+v,_+x).normalize();else if(t===oa)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function l0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&m.length===0&&s.bufferSubData(u,0,f),m.length!==0){for(let v=0,g=m.length;v<g;v++){let p=m[v];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ei=class s extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<l;x++){let _=x*u-r;m.push(_,-y,0),v.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,_=y+l*(p+1),T=y+1+l*(p+1),S=y+1+l*p;d.push(x,_,S),d.push(_,T,S)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,S0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`
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
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`#include <common>
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
}`,gx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,zx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:v0,batching_vertex:y0,begin_vertex:_0,beginnormal_vertex:M0,bsdfs:b0,iridescence_fragment:w0,bumpmap_pars_fragment:S0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:I0,common:N0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:U0,displacementmap_pars_vertex:z0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,colorspace_fragment:k0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:ig,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:K0,fog_pars_fragment:j0,gradientmap_pars_fragment:J0,lightmap_fragment:$0,lightmap_pars_fragment:Q0,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:ag,lights_physical_fragment:cg,lights_physical_pars_fragment:lg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:fg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:_g,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:bg,morphcolor_vertex:wg,morphnormal_vertex:Sg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:Rg,normal_pars_fragment:Cg,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:zg,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Zg,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Jg,skinnormal_vertex:$g,specularmap_fragment:Qg,specularmap_pars_fragment:ex,tonemapping_fragment:tx,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:sx,uv_pars_fragment:rx,uv_pars_vertex:ox,uv_vertex:ax,worldpos_vertex:cx,background_vert:lx,background_frag:hx,backgroundCube_vert:ux,backgroundCube_frag:fx,cube_vert:dx,cube_frag:px,depth_vert:mx,depth_frag:gx,distanceRGBA_vert:xx,distanceRGBA_frag:vx,equirect_vert:yx,equirect_frag:_x,linedashed_vert:Mx,linedashed_frag:bx,meshbasic_vert:wx,meshbasic_frag:Sx,meshlambert_vert:Ex,meshlambert_frag:Tx,meshmatcap_vert:Ax,meshmatcap_frag:Rx,meshnormal_vert:Cx,meshnormal_frag:Px,meshphong_vert:Lx,meshphong_frag:Ix,meshphysical_vert:Nx,meshphysical_frag:Dx,meshtoon_vert:Ux,meshtoon_frag:zx,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:kx,sprite_vert:Hx,sprite_frag:Gx},Pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},si={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};si.physical={uniforms:Sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var Go={r:0,b:0,g:0};function Vx(s,e,t,n,i,r,o){let a=new Oe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(g,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),y=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ba)?(h===void 0&&(h=new ze(new Wt(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Qs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(x.colorSpace)!==Gt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ze(new ei(2,2),new Tn({name:"BackgroundMaterial",uniforms:Qs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Nt.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,p){g.getRGB(Go,Qf(s)),n.buffers.color.setClear(Go.r,Go.g,Go.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:m}}function Wx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(R,N,H,V,Z){let W=!1;if(o){let $=v(V,H,N);l!==$&&(l=$,d(l.object)),W=p(R,V,H,Z),W&&y(R,V,H,Z)}else{let $=N.wireframe===!0;(l.geometry!==V.id||l.program!==H.id||l.wireframe!==$)&&(l.geometry=V.id,l.program=H.id,l.wireframe=$,W=!0)}Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(R,N,H,V),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function m(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function v(R,N,H){let V=H.wireframe===!0,Z=a[R.id];Z===void 0&&(Z={},a[R.id]=Z);let W=Z[N.id];W===void 0&&(W={},Z[N.id]=W);let $=W[V];return $===void 0&&($=g(f()),W[V]=$),$}function g(R){let N=[],H=[],V=[];for(let Z=0;Z<i;Z++)N[Z]=0,H[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:V,object:R,attributes:{},index:null}}function p(R,N,H,V){let Z=l.attributes,W=N.attributes,$=0,j=H.getAttributes();for(let ce in j)if(j[ce].location>=0){let te=Z[ce],ae=W[ce];if(ae===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;$++}return l.attributesNum!==$||l.index!==V}function y(R,N,H,V){let Z={},W=N.attributes,$=0,j=H.getAttributes();for(let ce in j)if(j[ce].location>=0){let te=W[ce];te===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));let ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),Z[ce]=ae,$++}l.attributes=Z,l.attributesNum=$,l.index=V}function x(){let R=l.newAttributes;for(let N=0,H=R.length;N<H;N++)R[N]=0}function _(R){T(R,0)}function T(R,N){let H=l.newAttributes,V=l.enabledAttributes,Z=l.attributeDivisors;H[R]=1,V[R]===0&&(s.enableVertexAttribArray(R),V[R]=1),Z[R]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),Z[R]=N)}function S(){let R=l.newAttributes,N=l.enabledAttributes;for(let H=0,V=N.length;H<V;H++)N[H]!==R[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function M(R,N,H,V,Z,W,$){$===!0?s.vertexAttribIPointer(R,N,H,Z,W):s.vertexAttribPointer(R,N,H,V,Z,W)}function C(R,N,H,V){if(n.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=V.attributes,W=H.getAttributes(),$=N.defaultAttributeValues;for(let j in W){let ce=W[j];if(ce.location>=0){let Y=Z[j];if(Y===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){let te=Y.normalized,ae=Y.itemSize,he=t.get(Y);if(he===void 0)continue;let we=he.buffer,He=he.type,Je=he.bytesPerElement,pe=n.isWebGL2===!0&&(He===s.INT||He===s.UNSIGNED_INT||Y.gpuType===kf);if(Y.isInterleavedBufferAttribute){let ne=Y.data,U=ne.stride,ve=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let le=0;le<ce.locationSize;le++)T(ce.location+le,ne.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<ce.locationSize;le++)_(ce.location+le);s.bindBuffer(s.ARRAY_BUFFER,we);for(let le=0;le<ce.locationSize;le++)M(ce.location+le,ae/ce.locationSize,He,te,U*Je,(ve+ae/ce.locationSize*le)*Je,pe)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<ce.locationSize;ne++)T(ce.location+ne,Y.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<ce.locationSize;ne++)_(ce.location+ne);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ne=0;ne<ce.locationSize;ne++)M(ce.location+ne,ae/ce.locationSize,He,te,ae*Je,ae/ce.locationSize*ne*Je,pe)}}else if($!==void 0){let te=$[j];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(ce.location,te);break;case 3:s.vertexAttrib3fv(ce.location,te);break;case 4:s.vertexAttrib4fv(ce.location,te);break;default:s.vertexAttrib1fv(ce.location,te)}}}}S()}function b(){I();for(let R in a){let N=a[R];for(let H in N){let V=N[H];for(let Z in V)m(V[Z].object),delete V[Z];delete N[H]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let N=a[R.id];for(let H in N){let V=N[H];for(let Z in V)m(V[Z].object),delete V[Z];delete N[H]}delete a[R.id]}function L(R){for(let N in a){let H=a[N];if(H[R.id]===void 0)continue;let V=H[R.id];for(let Z in V)m(V[Z].object),delete V[Z];delete H[R.id]}}function I(){F(),h=!0,l!==c&&(l=c,d(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:_,disableUnusedAttributes:S}}function Xx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(h[m],u[m]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function qx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,_=o||e.has("OES_texture_float"),T=x&&_,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:S}}function Yx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Mi,a=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,x=y*4,_=p.clippingState||null;c.value=_,_=h(m,f,x,d);for(let T=0;T!==x;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Zx(s){let e=new WeakMap;function t(o,a){return a===jc?o.mapping=Ys:a===Jc&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jc||a===Jc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new sl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var tr=class extends er{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,Zu=[.125,.215,.35,.446,.526,.582],ns=20,Uc=new tr,Ku=new Oe,zc=null,Fc=0,Oc=0,es=(1+Math.sqrt(5))/2,zs=1/es,ju=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,es,zs),new D(0,es,-zs),new D(zs,0,es),new D(-zs,0,es),new D(es,zs,0),new D(-es,zs,0)],ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Fc,Oc),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:as,format:Vn,colorSpace:cn,depthBuffer:!1},i=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(r)),this._blurMaterial=jx(r,e,t)}return i}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,i){let a=new an(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ku),h.toneMapping=Oi,h.autoClear=!1;let d=new nn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new ze(new Wt,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Ku),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Vo(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ys||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ju[(i-1)%ju.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):ns;g>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);let p=[],y=0;for(let M=0;M<ns;++M){let C=M/v,b=Math.exp(-C*C/2);p.push(b),M===0?y+=b:M<g&&(y+=2*b)}for(let M=0;M<p.length;M++)p[M]=p[M]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let _=this._sizeLods[i],T=3*_*(i>x-Hs?i-x+Hs:0),S=4*(this._cubeSize-_);Vo(t,T,S,3*_,2*_),c.setRenderTarget(t),c.render(u,Uc)}};function Kx(s){let e=[],t=[],n=[],i=s,r=s-Hs+1+Zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Hs?c=Zu[o-s+Hs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),x=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let S=0;S<d;S++){let M=S%3*2/3-1,C=S>2?0:-1,b=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];y.set(b,v*m*S),x.set(f,g*m*S);let w=[S,S,S,S,S,S];_.set(w,p*m*S)}let T=new At;T.setAttribute("position",new Lt(y,v)),T.setAttribute("uv",new Lt(x,g)),T.setAttribute("faceIndex",new Lt(_,p)),e.push(T),i>Hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(s,e,t){let n=new Qn(s,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jx(s,e,t){let n=new Float32Array(ns),i=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $u(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Qu(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function Jx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===jc||c===Jc,h=c===Ys||c===Zs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ga(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new ga(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $x(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)e.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,m=u.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){let T=y[x+0],S=y[x+1],M=y[x+2];f.push(T,S,S,M,M,T)}}else if(m!==void 0){let y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let T=x+0,S=x+1,M=x+2;f.push(T,S,S,M,M,T)}}else return;let g=new(Jf(f)?pa:da)(f,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ev(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*c),t.update(m,r,1)}function u(d,m,v){if(v===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,d*c,v),t.update(m,r,v)}function f(d,m,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(d[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,a,d,0,v);let p=0;for(let y=0;y<v;y++)p+=m[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function tv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nv(s,e){return s[0]-e[0]}function iv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sv(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==m){let R=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],C=0;y===!0&&(C=1),x===!0&&(C=2),_===!0&&(C=3);let b=h.attributes.position.count*C,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let L=new Float32Array(b*w*4*m),I=new ha(L,b,w,m);I.type=bi,I.needsUpdate=!0;let F=C*4;for(let N=0;N<m;N++){let H=T[N],V=S[N],Z=M[N],W=b*w*4*N;for(let $=0;$<H.count;$++){let j=$*F;y===!0&&(o.fromBufferAttribute(H,$),L[W+j+0]=o.x,L[W+j+1]=o.y,L[W+j+2]=o.z,L[W+j+3]=0),x===!0&&(o.fromBufferAttribute(V,$),L[W+j+4]=o.x,L[W+j+5]=o.y,L[W+j+6]=o.z,L[W+j+7]=0),_===!0&&(o.fromBufferAttribute(Z,$),L[W+j+8]=o.x,L[W+j+9]=o.y,L[W+j+10]=o.z,L[W+j+11]=Z.itemSize===4?o.w:1)}}v={count:m,texture:I,size:new be(b,w)},r.set(h,v),h.addEventListener("dispose",R)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,m=n[h.id];if(m===void 0||m.length!==d){m=[];for(let x=0;x<d;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<d;x++){let _=m[x];_[0]=x,_[1]=f[x]}m.sort(iv);for(let x=0;x<8;x++)x<d&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(nv);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let _=a[x],T=_[0],S=_[1];T!==Number.MAX_SAFE_INTEGER&&S?(v&&h.getAttribute("morphTarget"+x)!==v[T]&&h.setAttribute("morphTarget"+x,v[T]),g&&h.getAttribute("morphNormal"+x)!==g[T]&&h.setAttribute("morphNormal"+x,g[T]),i[x]=S,p+=S):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function rv(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var xa=class extends ln{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ss,h!==ss&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ui),n===void 0&&h===Ks&&(n=is),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new ln,nd=new xa(1,1);nd.compareFunction=Kf;var id=new ha,sd=new nl,rd=new ma,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function hr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ef[i];if(r===void 0&&(r=new Float32Array(i),ef[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Va(s,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ov(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function hv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;rf.set(n),s.uniformMatrix2fv(this.addr,!1,rf),un(t,n)}}function uv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;sf.set(n),s.uniformMatrix3fv(this.addr,!1,sf),un(t,n)}}function fv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;nf.set(n),s.uniformMatrix4fv(this.addr,!1,nf),un(t,n)}}function dv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function mv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function xv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function _v(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function Mv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?nd:td;t.setTexture2D(e||r,i)}function bv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sd,i)}function wv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rd,i)}function Sv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||id,i)}function Ev(s){switch(s){case 5126:return ov;case 35664:return av;case 35665:return cv;case 35666:return lv;case 35674:return hv;case 35675:return uv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return vv;case 36295:return yv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Sv}}function Tv(s,e){s.uniform1fv(this.addr,e)}function Av(s,e){let t=hr(e,this.size,2);s.uniform2fv(this.addr,t)}function Rv(s,e){let t=hr(e,this.size,3);s.uniform3fv(this.addr,t)}function Cv(s,e){let t=hr(e,this.size,4);s.uniform4fv(this.addr,t)}function Pv(s,e){let t=hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Lv(s,e){let t=hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Iv(s,e){let t=hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nv(s,e){s.uniform1iv(this.addr,e)}function Dv(s,e){s.uniform2iv(this.addr,e)}function Uv(s,e){s.uniform3iv(this.addr,e)}function zv(s,e){s.uniform4iv(this.addr,e)}function Fv(s,e){s.uniform1uiv(this.addr,e)}function Ov(s,e){s.uniform2uiv(this.addr,e)}function Bv(s,e){s.uniform3uiv(this.addr,e)}function kv(s,e){s.uniform4uiv(this.addr,e)}function Hv(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||td,r[o])}function Gv(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||sd,r[o])}function Vv(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||rd,r[o])}function Wv(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||id,r[o])}function Xv(s){switch(s){case 5126:return Tv;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Lv;case 35676:return Iv;case 5124:case 35670:return Nv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return zv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Wv}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}},ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function of(s,e){s.seq.push(e),s.map[e.id]=e}function qv(s,e,t){let n=s.name,i=n.length;for(Bc.lastIndex=0;;){let r=Bc.exec(n),o=Bc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){of(t,l===void 0?new rl(a,s,e):new ol(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new al(a),of(t,u)),t=u}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);qv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function af(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Yv=37297,Zv=0;function Kv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jv(s){let e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(s),n;switch(e===t?n="":e===sa&&t===ia?n="LinearDisplayP3ToLinearSRGB":e===ia&&t===sa&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case Ga:return[n,"LinearTransferOETF"];case Ct:case Xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function cf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kv(s.getShaderSource(e),o)}else return i}function Jv(s,e){let t=jv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $v(s,e){let t;switch(e){case em:t="Linear";break;case tm:t="Reinhard";break;case nm:t="OptimizedCineon";break;case im:t="ACESFilmic";break;case rm:t="AgX";break;case sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gs).join(`
`)}function ty(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ny(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Gs(s){return s!==""}function lf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(s){return s.replace(iy,ry)}var sy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ry(s,e){let t=vt[e];if(t===void 0){let n=sy.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}var oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(s){return s.replace(oy,ay)}function ay(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ff(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function ly(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function uy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case $p:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function fy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=cy(t),l=ly(t),h=hy(t),u=uy(t),f=fy(t),d=t.isWebGL2?"":Qv(t),m=ey(t),v=ty(r),g=i.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),y.length>0&&(y+=`
`)):(p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),y=[d,ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=cl(o),o=lf(o,t),o=hf(o,t),a=cl(a),a=lf(a,t),a=hf(a,t),o=uf(o),a=uf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=x+p+o,T=x+y+a,S=af(i,i.VERTEX_SHADER,_),M=af(i,i.FRAGMENT_SHADER,T);i.attachShader(g,S),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(g).trim(),R=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(M).trim(),H=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,M);else{let Z=cf(i,S,"vertex"),W=cf(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+Z+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||N==="")&&(V=!1);V&&(I.diagnostics={runnable:H,programLog:F,vertexShader:{log:R,prefix:p},fragmentShader:{log:N,prefix:y}})}i.deleteShader(S),i.deleteShader(M),b=new qs(i,g),w=ny(i,g)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,Yv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=M,this}var py=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}};function my(s,e,t,n,i,r,o){let a=new fa,c=new ll,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,w,L,I,F){let R=I.fog,N=F.geometry,H=b.isMeshStandardMaterial?I.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),Z=V&&V.mapping===Ba?V.image.height:null,W=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=$!==void 0?$.length:0,ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let Y,te,ae,he;if(W){let z=si[W];Y=z.vertexShader,te=z.fragmentShader}else Y=b.vertexShader,te=b.fragmentShader,c.update(b),ae=c.getVertexShaderID(b),he=c.getFragmentShaderID(b);let we=s.getRenderTarget(),He=F.isInstancedMesh===!0,Je=F.isBatchedMesh===!0,pe=!!b.map,ne=!!b.matcap,U=!!V,ve=!!b.aoMap,le=!!b.lightMap,_e=!!b.bumpMap,ue=!!b.normalMap,Ge=!!b.displacementMap,Le=!!b.emissiveMap,P=!!b.metalnessMap,A=!!b.roughnessMap,ee=b.anisotropy>0,me=b.clearcoat>0,ye=b.iridescence>0,xe=b.sheen>0,qe=b.transmission>0,Ne=ee&&!!b.anisotropyMap,Ve=me&&!!b.clearcoatMap,fe=me&&!!b.clearcoatNormalMap,ut=me&&!!b.clearcoatRoughnessMap,ge=ye&&!!b.iridescenceMap,Rt=ye&&!!b.iridescenceThicknessMap,gt=xe&&!!b.sheenColorMap,lt=xe&&!!b.sheenRoughnessMap,tt=!!b.specularMap,Xe=!!b.specularColorMap,dt=!!b.specularIntensityMap,It=qe&&!!b.transmissionMap,Xt=qe&&!!b.thicknessMap,rt=!!b.gradientMap,Ee=!!b.alphaMap,G=b.alphaTest>0,Ie=!!b.alphaHash,De=!!b.extensions,at=!!N.attributes.uv1,O=!!N.attributes.uv2,J=!!N.attributes.uv3,B=Oi;return b.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(B=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:Y,fragmentShader:te,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Je,instancing:He,instancingColor:He&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:cn,map:pe,matcap:ne,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:Z,aoMap:ve,lightMap:le,bumpMap:_e,normalMap:ue,displacementMap:f&&Ge,emissiveMap:Le,normalMapObjectSpace:ue&&b.normalMapType===_m,normalMapTangentSpace:ue&&b.normalMapType===Wl,metalnessMap:P,roughnessMap:A,anisotropy:ee,anisotropyMap:Ne,clearcoat:me,clearcoatMap:Ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:ut,iridescence:ye,iridescenceMap:ge,iridescenceThicknessMap:Rt,sheen:xe,sheenColorMap:gt,sheenRoughnessMap:lt,specularMap:tt,specularColorMap:Xe,specularIntensityMap:dt,transmission:qe,transmissionMap:It,thicknessMap:Xt,gradientMap:rt,opaque:b.transparent===!1&&b.blending===Ws,alphaMap:Ee,alphaTest:G,alphaHash:Ie,combine:b.combine,mapUv:pe&&v(b.map.channel),aoMapUv:ve&&v(b.aoMap.channel),lightMapUv:le&&v(b.lightMap.channel),bumpMapUv:_e&&v(b.bumpMap.channel),normalMapUv:ue&&v(b.normalMap.channel),displacementMapUv:Ge&&v(b.displacementMap.channel),emissiveMapUv:Le&&v(b.emissiveMap.channel),metalnessMapUv:P&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:Ne&&v(b.anisotropyMap.channel),clearcoatMapUv:Ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(b.sheenRoughnessMap.channel),specularMapUv:tt&&v(b.specularMap.channel),specularColorMapUv:Xe&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:It&&v(b.transmissionMap.channel),thicknessMapUv:Xt&&v(b.thicknessMap.channel),alphaMapUv:Ee&&v(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||ee),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:O,vertexUv3s:J,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(pe||Ee),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:B,useLegacyLights:s._useLegacyLights,decodeVideoTexture:pe&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:De&&b.extensions.derivatives===!0,extensionFragDepth:De&&b.extensions.fragDepth===!0,extensionDrawBuffers:De&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function _(b){let w=m[b.type],L;if(w){let I=si[w];L=s0.clone(I.uniforms)}else L=b.uniforms;return L}function T(b,w){let L;for(let I=0,F=l.length;I<F;I++){let R=l[I];if(R.cacheKey===w){L=R,++L.usedTimes;break}}return L===void 0&&(L=new dy(s,w,b,r),l.push(L)),L}function S(b){if(--b.usedTimes===0){let w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function M(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:C}}function gy(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function df(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,v,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,f,d,m,v,g){let p=o(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,m,v,g){let p=o(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||xy),n.length>1&&n.sort(f||df),i.length>1&&i.sort(f||df)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new pf,s.set(n,[o])):i>=r.length?(o=new pf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function _y(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var My=0;function by(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wy(s,e){let t=new yy,n=_y(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new ot,a=new ot;function c(h,u){let f=0,d=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let v=0,g=0,p=0,y=0,x=0,_=0,T=0,S=0,M=0,C=0,b=0;h.sort(by);let w=u===!0?Math.PI:1;for(let I=0,F=h.length;I<F;I++){let R=h[I],N=R.color,H=R.intensity,V=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=N.r*H*w,d+=N.g*H*w,m+=N.b*H*w;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],H);b++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let $=R.shadow,j=n.get(R);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=Z,i.directionalShadowMatrix[v]=R.shadow.matrix,_++}i.directional[v]=W,v++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(N).multiplyScalar(H*w),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;let $=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,$.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[p]=$.matrix,R.castShadow){let j=n.get(R);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=Z,S++}p++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(N).multiplyScalar(H),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=W,y++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),W.distance=R.distance,W.decay=R.decay,R.castShadow){let $=R.shadow,j=n.get(R);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=W,g++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(H*w),W.groundColor.copy(R.groundColor).multiplyScalar(H*w),i.hemi[x]=W,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;let L=i.hash;(L.directionalLength!==v||L.pointLength!==g||L.spotLength!==p||L.rectAreaLength!==y||L.hemiLength!==x||L.numDirectionalShadows!==_||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==M||L.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,L.directionalLength=v,L.pointLength=g,L.spotLength=p,L.rectAreaLength=y,L.hemiLength=x,L.numDirectionalShadows=_,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=M,L.numLightProbes=b,i.version=My++)}function l(h,u){let f=0,d=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let _=h[y];if(_.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(_.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(_.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function mf(s,e){let t=new wy(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sy(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new mf(s,e),t.set(r,[c])):o>=a.length?(c=new mf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var ul=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
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
}`;function Ay(s,e,t){let n=new Fr,i=new be,r=new be,o=new Pt,a=new ul({depthPacking:ym}),c=new fl,l={},h=t.maxTextureSize,u={[ai]:dn,[dn]:ai,[Bt]:Bt},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Ey,fragmentShader:Ty}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new At;m.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let p=this.type;this.render=function(S,M,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=s.getRenderTarget(),w=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Fi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=p!==_i&&this.type===_i,R=p===_i&&this.type!==_i;for(let N=0,H=S.length;N<H;N++){let V=S[N],Z=V.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let W=Z.getFrameExtents();if(i.multiply(W),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Z.mapSize.y=r.y)),Z.map===null||F===!0||R===!0){let j=this.type!==_i?{minFilter:$t,magFilter:$t}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Qn(i.x,i.y,j),Z.map.texture.name=V.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let $=Z.getViewportCount();for(let j=0;j<$;j++){let ce=Z.getViewport(j);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),I.viewport(o),Z.updateMatrices(V,j),n=Z.getFrustum(),_(M,C,Z.camera,V,this.type)}Z.isPointLightShadow!==!0&&this.type===_i&&y(Z,C),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,w,L)};function y(S,M){let C=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(M,null,C,f,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(M,null,C,d,v,null)}function x(S,M,C,b){let w=null,L=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?c:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let I=w.uuid,F=M.uuid,R=l[I];R===void 0&&(R={},l[I]=R);let N=R[F];N===void 0&&(N=w.clone(),R[F]=N,M.addEventListener("dispose",T)),w=N}if(w.visible=M.visible,w.wireframe=M.wireframe,b===_i?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:u[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let I=s.properties.get(w);I.light=C}return w}function _(S,M,C,b,w){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===_i)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let F=e.update(S),R=S.material;if(Array.isArray(R)){let N=F.groups;for(let H=0,V=N.length;H<V;H++){let Z=N[H],W=R[Z.materialIndex];if(W&&W.visible){let $=x(S,W,b,w);S.onBeforeShadow(s,S,M,C,F,$,Z),s.renderBufferDirect(C,null,F,$,S,Z),S.onAfterShadow(s,S,M,C,F,$,Z)}}}else if(R.visible){let N=x(S,R,b,w);S.onBeforeShadow(s,S,M,C,F,N,null),s.renderBufferDirect(C,null,F,N,S,null),S.onAfterShadow(s,S,M,C,F,N,null)}}let I=S.children;for(let F=0,R=I.length;F<R;F++)_(I[F],M,C,b,w)}function T(S){S.target.removeEventListener("dispose",T);for(let C in l){let b=l[C],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Ry(s,e,t){let n=t.isWebGL2;function i(){let G=!1,Ie=new Pt,De=null,at=new Pt(0,0,0,0);return{setMask:function(O){De!==O&&!G&&(s.colorMask(O,O,O,O),De=O)},setLocked:function(O){G=O},setClear:function(O,J,B,ie,z){z===!0&&(O*=ie,J*=ie,B*=ie),Ie.set(O,J,B,ie),at.equals(Ie)===!1&&(s.clearColor(O,J,B,ie),at.copy(Ie))},reset:function(){G=!1,De=null,at.set(-1,0,0,0)}}}function r(){let G=!1,Ie=null,De=null,at=null;return{setTest:function(O){O?Je(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(O){Ie!==O&&!G&&(s.depthMask(O),Ie=O)},setFunc:function(O){if(De!==O){switch(O){case Xp:s.depthFunc(s.NEVER);break;case qp:s.depthFunc(s.ALWAYS);break;case Yp:s.depthFunc(s.LESS);break;case Qo:s.depthFunc(s.LEQUAL);break;case Zp:s.depthFunc(s.EQUAL);break;case Kp:s.depthFunc(s.GEQUAL);break;case jp:s.depthFunc(s.GREATER);break;case Jp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=O}},setLocked:function(O){G=O},setClear:function(O){at!==O&&(s.clearDepth(O),at=O)},reset:function(){G=!1,Ie=null,De=null,at=null}}}function o(){let G=!1,Ie=null,De=null,at=null,O=null,J=null,B=null,ie=null,z=null;return{setTest:function(X){G||(X?Je(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(X){Ie!==X&&!G&&(s.stencilMask(X),Ie=X)},setFunc:function(X,re,de){(De!==X||at!==re||O!==de)&&(s.stencilFunc(X,re,de),De=X,at=re,O=de)},setOp:function(X,re,de){(J!==X||B!==re||ie!==de)&&(s.stencilOp(X,re,de),J=X,B=re,ie=de)},setLocked:function(X){G=X},setClear:function(X){z!==X&&(s.clearStencil(X),z=X)},reset:function(){G=!1,Ie=null,De=null,at=null,O=null,J=null,B=null,ie=null,z=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,_=null,T=null,S=null,M=null,C=null,b=new Oe(0,0,0),w=0,L=!1,I=null,F=null,R=null,N=null,H=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,W=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=W>=2);let j=null,ce={},Y=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ae=new Pt().fromArray(Y),he=new Pt().fromArray(te);function we(G,Ie,De,at){let O=new Uint8Array(4),J=s.createTexture();s.bindTexture(G,J),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let B=0;B<De;B++)n&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ie,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,O):s.texImage2D(Ie+B,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,O);return J}let He={};He[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Je(s.DEPTH_TEST),c.setFunc(Qo),Le(!1),P(Qh),Je(s.CULL_FACE),ue(Fi);function Je(G){f[G]!==!0&&(s.enable(G),f[G]=!0)}function pe(G){f[G]!==!1&&(s.disable(G),f[G]=!1)}function ne(G,Ie){return d[G]!==Ie?(s.bindFramebuffer(G,Ie),d[G]=Ie,n&&(G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ie),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function U(G,Ie){let De=v,at=!1;if(G)if(De=m.get(Ie),De===void 0&&(De=[],m.set(Ie,De)),G.isWebGLMultipleRenderTargets){let O=G.texture;if(De.length!==O.length||De[0]!==s.COLOR_ATTACHMENT0){for(let J=0,B=O.length;J<B;J++)De[J]=s.COLOR_ATTACHMENT0+J;De.length=O.length,at=!0}}else De[0]!==s.COLOR_ATTACHMENT0&&(De[0]=s.COLOR_ATTACHMENT0,at=!0);else De[0]!==s.BACK&&(De[0]=s.BACK,at=!0);at&&(t.isWebGL2?s.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function ve(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let le={[ts]:s.FUNC_ADD,[Pp]:s.FUNC_SUBTRACT,[Lp]:s.FUNC_REVERSE_SUBTRACT};if(n)le[nu]=s.MIN,le[iu]=s.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(le[nu]=G.MIN_EXT,le[iu]=G.MAX_EXT)}let _e={[Ip]:s.ZERO,[Np]:s.ONE,[Dp]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[kp]:s.SRC_ALPHA_SATURATE,[Op]:s.DST_COLOR,[zp]:s.DST_ALPHA,[Up]:s.ONE_MINUS_SRC_COLOR,[Kc]:s.ONE_MINUS_SRC_ALPHA,[Bp]:s.ONE_MINUS_DST_COLOR,[Fp]:s.ONE_MINUS_DST_ALPHA,[Hp]:s.CONSTANT_COLOR,[Gp]:s.ONE_MINUS_CONSTANT_COLOR,[Vp]:s.CONSTANT_ALPHA,[Wp]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(G,Ie,De,at,O,J,B,ie,z,X){if(G===Fi){p===!0&&(pe(s.BLEND),p=!1);return}if(p===!1&&(Je(s.BLEND),p=!0),G!==Cp){if(G!==y||X!==L){if((x!==ts||S!==ts)&&(s.blendEquation(s.FUNC_ADD),x=ts,S=ts),X)switch(G){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.ONE,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,T=null,M=null,C=null,b.set(0,0,0),w=0,y=G,L=X}return}O=O||Ie,J=J||De,B=B||at,(Ie!==x||O!==S)&&(s.blendEquationSeparate(le[Ie],le[O]),x=Ie,S=O),(De!==_||at!==T||J!==M||B!==C)&&(s.blendFuncSeparate(_e[De],_e[at],_e[J],_e[B]),_=De,T=at,M=J,C=B),(ie.equals(b)===!1||z!==w)&&(s.blendColor(ie.r,ie.g,ie.b,z),b.copy(ie),w=z),y=G,L=!1}function Ge(G,Ie){G.side===Bt?pe(s.CULL_FACE):Je(s.CULL_FACE);let De=G.side===dn;Ie&&(De=!De),Le(De),G.blending===Ws&&G.transparent===!1?ue(Fi):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let at=G.stencilWrite;l.setTest(at),at&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Je(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(G){I!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),I=G)}function P(G){G!==Tp?(Je(s.CULL_FACE),G!==F&&(G===Qh?s.cullFace(s.BACK):G===Ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),F=G}function A(G){G!==R&&(Z&&s.lineWidth(G),R=G)}function ee(G,Ie,De){G?(Je(s.POLYGON_OFFSET_FILL),(N!==Ie||H!==De)&&(s.polygonOffset(Ie,De),N=Ie,H=De)):pe(s.POLYGON_OFFSET_FILL)}function me(G){G?Je(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function ye(G){G===void 0&&(G=s.TEXTURE0+V-1),j!==G&&(s.activeTexture(G),j=G)}function xe(G,Ie,De){De===void 0&&(j===null?De=s.TEXTURE0+V-1:De=j);let at=ce[De];at===void 0&&(at={type:void 0,texture:void 0},ce[De]=at),(at.type!==G||at.texture!==Ie)&&(j!==De&&(s.activeTexture(De),j=De),s.bindTexture(G,Ie||He[G]),at.type=G,at.texture=Ie)}function qe(){let G=ce[j];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(G){ae.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ae.copy(G))}function It(G){he.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),he.copy(G))}function Xt(G,Ie){let De=u.get(Ie);De===void 0&&(De=new WeakMap,u.set(Ie,De));let at=De.get(G);at===void 0&&(at=s.getUniformBlockIndex(Ie,G.name),De.set(G,at))}function rt(G,Ie){let at=u.get(Ie).get(G);h.get(Ie)!==at&&(s.uniformBlockBinding(Ie,at,G.__bindingPointIndex),h.set(Ie,at))}function Ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},j=null,ce={},d={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,_=null,T=null,S=null,M=null,C=null,b=new Oe(0,0,0),w=0,L=!1,I=null,F=null,R=null,N=null,H=null,ae.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Je,disable:pe,bindFramebuffer:ne,drawBuffers:U,useProgram:ve,setBlending:ue,setMaterial:Ge,setFlipSided:Le,setCullFace:P,setLineWidth:A,setPolygonOffset:ee,setScissorTest:me,activeTexture:ye,bindTexture:xe,unbindTexture:qe,compressedTexImage2D:Ne,compressedTexImage3D:Ve,texImage2D:tt,texImage3D:Xe,updateUBOMapping:Xt,uniformBlockBinding:rt,texStorage2D:gt,texStorage3D:lt,texSubImage2D:fe,texSubImage3D:ut,compressedTexSubImage2D:ge,compressedTexSubImage3D:Rt,scissor:dt,viewport:It,reset:Ee}}function Cy(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return d?new OffscreenCanvas(P,A):zr("canvas")}function v(P,A,ee,me){let ye=1;if((P.width>me||P.height>me)&&(ye=me/Math.max(P.width,P.height)),ye<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let xe=A?aa:Math.floor,qe=xe(ye*P.width),Ne=xe(ye*P.height);u===void 0&&(u=m(qe,Ne));let Ve=ee?m(qe,Ne):u;return Ve.width=qe,Ve.height=Ne,Ve.getContext("2d").drawImage(P,0,0,qe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+qe+"x"+Ne+")."),Ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return el(P.width)&&el(P.height)}function p(P){return a?!1:P.wrapS!==Un||P.wrapT!==Un||P.minFilter!==$t&&P.minFilter!==Qt}function y(P,A){return P.generateMipmaps&&A&&P.minFilter!==$t&&P.minFilter!==Qt}function x(P){s.generateMipmap(P)}function _(P,A,ee,me,ye=!1){if(a===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe=A;if(A===s.RED&&(ee===s.FLOAT&&(xe=s.R32F),ee===s.HALF_FLOAT&&(xe=s.R16F),ee===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(xe=s.R8UI),ee===s.UNSIGNED_SHORT&&(xe=s.R16UI),ee===s.UNSIGNED_INT&&(xe=s.R32UI),ee===s.BYTE&&(xe=s.R8I),ee===s.SHORT&&(xe=s.R16I),ee===s.INT&&(xe=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(xe=s.RG32F),ee===s.HALF_FLOAT&&(xe=s.RG16F),ee===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RGBA){let qe=ye?na:Nt.getTransfer(me);ee===s.FLOAT&&(xe=s.RGBA32F),ee===s.HALF_FLOAT&&(xe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(xe=qe===Gt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function T(P,A,ee){return y(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==Qt?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){return P===$t||P===ea||P===Ar?s.NEAREST:s.LINEAR}function M(P){let A=P.target;A.removeEventListener("dispose",M),b(A),A.isVideoTexture&&h.delete(A)}function C(P){let A=P.target;A.removeEventListener("dispose",C),L(A)}function b(P){let A=n.get(P);if(A.__webglInit===void 0)return;let ee=P.source,me=f.get(ee);if(me){let ye=me[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(P),Object.keys(me).length===0&&f.delete(ee)}n.remove(P)}function w(P){let A=n.get(P);s.deleteTexture(A.__webglTexture);let ee=P.source,me=f.get(ee);delete me[A.__cacheKey],o.memory.textures--}function L(P){let A=P.texture,ee=n.get(P),me=n.get(A);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(ee.__webglFramebuffer[ye]))for(let xe=0;xe<ee.__webglFramebuffer[ye].length;xe++)s.deleteFramebuffer(ee.__webglFramebuffer[ye][xe]);else s.deleteFramebuffer(ee.__webglFramebuffer[ye]);ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer[ye])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ye=0;ye<ee.__webglFramebuffer.length;ye++)s.deleteFramebuffer(ee.__webglFramebuffer[ye]);else s.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ye=0;ye<ee.__webglColorRenderbuffer.length;ye++)ee.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(ee.__webglColorRenderbuffer[ye]);ee.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ye=0,xe=A.length;ye<xe;ye++){let qe=n.get(A[ye]);qe.__webglTexture&&(s.deleteTexture(qe.__webglTexture),o.memory.textures--),n.remove(A[ye])}n.remove(A),n.remove(P)}let I=0;function F(){I=0}function R(){let P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function N(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function H(P,A){let ee=n.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){let me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ee,P,A);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function V(P,A){let ee=n.get(P);if(P.version>0&&ee.__version!==P.version){ae(ee,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function Z(P,A){let ee=n.get(P);if(P.version>0&&ee.__version!==P.version){ae(ee,P,A);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function W(P,A){let ee=n.get(P);if(P.version>0&&ee.__version!==P.version){he(ee,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}let $={[os]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Ur]:s.MIRRORED_REPEAT},j={[$t]:s.NEAREST,[ea]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[Hl]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},ce={[Mm]:s.NEVER,[Am]:s.ALWAYS,[bm]:s.LESS,[Kf]:s.LEQUAL,[wm]:s.EQUAL,[Tm]:s.GEQUAL,[Sm]:s.GREATER,[Em]:s.NOTEQUAL};function Y(P,A,ee){if(ee?(s.texParameteri(P,s.TEXTURE_WRAP_S,$[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,$[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,$[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,j[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,j[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Un||A.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==$t&&A.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===$t||A.minFilter!==Ar&&A.minFilter!==Xn||A.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function te(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",M));let me=A.source,ye=f.get(me);ye===void 0&&(ye={},f.set(me,ye));let xe=N(A);if(xe!==P.__cacheKey){ye[xe]===void 0&&(ye[xe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ye[xe].usedTimes++;let qe=ye[P.__cacheKey];qe!==void 0&&(ye[P.__cacheKey].usedTimes--,qe.usedTimes===0&&w(A)),P.__cacheKey=xe,P.__webglTexture=ye[xe].texture}return ee}function ae(P,A,ee){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);let ye=te(P,A),xe=A.source;t.bindTexture(me,P.__webglTexture,s.TEXTURE0+ee);let qe=n.get(xe);if(xe.version!==qe.__version||ye===!0){t.activeTexture(s.TEXTURE0+ee);let Ne=Nt.getPrimaries(Nt.workingColorSpace),Ve=A.colorSpace===En?null:Nt.getPrimaries(A.colorSpace),fe=A.colorSpace===En||Ne===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ut=p(A)&&g(A.image)===!1,ge=v(A.image,ut,!1,i.maxTextureSize);ge=Le(A,ge);let Rt=g(ge)||a,gt=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),tt=_(A.internalFormat,gt,lt,A.colorSpace,A.isVideoTexture);Y(me,A,Rt);let Xe,dt=A.mipmaps,It=a&&A.isVideoTexture!==!0&&tt!==qf,Xt=qe.__version===void 0||ye===!0,rt=T(A,ge,Rt);if(A.isDepthTexture)tt=s.DEPTH_COMPONENT,a?A.type===bi?tt=s.DEPTH_COMPONENT32F:A.type===Ui?tt=s.DEPTH_COMPONENT24:A.type===is?tt=s.DEPTH24_STENCIL8:tt=s.DEPTH_COMPONENT16:A.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ss&&tt===s.DEPTH_COMPONENT&&A.type!==Gl&&A.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ui,lt=r.convert(A.type)),A.format===Ks&&tt===s.DEPTH_COMPONENT&&(tt=s.DEPTH_STENCIL,A.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=is,lt=r.convert(A.type))),Xt&&(It?t.texStorage2D(s.TEXTURE_2D,1,tt,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,tt,ge.width,ge.height,0,gt,lt,null));else if(A.isDataTexture)if(dt.length>0&&Rt){It&&Xt&&t.texStorage2D(s.TEXTURE_2D,rt,tt,dt[0].width,dt[0].height);for(let Ee=0,G=dt.length;Ee<G;Ee++)Xe=dt[Ee],It?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Xe.width,Xe.height,gt,lt,Xe.data):t.texImage2D(s.TEXTURE_2D,Ee,tt,Xe.width,Xe.height,0,gt,lt,Xe.data);A.generateMipmaps=!1}else It?(Xt&&t.texStorage2D(s.TEXTURE_2D,rt,tt,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,gt,lt,ge.data)):t.texImage2D(s.TEXTURE_2D,0,tt,ge.width,ge.height,0,gt,lt,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){It&&Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,rt,tt,dt[0].width,dt[0].height,ge.depth);for(let Ee=0,G=dt.length;Ee<G;Ee++)Xe=dt[Ee],A.format!==Vn?gt!==null?It?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Xe.width,Xe.height,ge.depth,gt,Xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,tt,Xe.width,Xe.height,ge.depth,0,Xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Xe.width,Xe.height,ge.depth,gt,lt,Xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,tt,Xe.width,Xe.height,ge.depth,0,gt,lt,Xe.data)}else{It&&Xt&&t.texStorage2D(s.TEXTURE_2D,rt,tt,dt[0].width,dt[0].height);for(let Ee=0,G=dt.length;Ee<G;Ee++)Xe=dt[Ee],A.format!==Vn?gt!==null?It?t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Xe.width,Xe.height,gt,Xe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,tt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Xe.width,Xe.height,gt,lt,Xe.data):t.texImage2D(s.TEXTURE_2D,Ee,tt,Xe.width,Xe.height,0,gt,lt,Xe.data)}else if(A.isDataArrayTexture)It?(Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,rt,tt,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,gt,lt,ge.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,ge.width,ge.height,ge.depth,0,gt,lt,ge.data);else if(A.isData3DTexture)It?(Xt&&t.texStorage3D(s.TEXTURE_3D,rt,tt,ge.width,ge.height,ge.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,gt,lt,ge.data)):t.texImage3D(s.TEXTURE_3D,0,tt,ge.width,ge.height,ge.depth,0,gt,lt,ge.data);else if(A.isFramebufferTexture){if(Xt)if(It)t.texStorage2D(s.TEXTURE_2D,rt,tt,ge.width,ge.height);else{let Ee=ge.width,G=ge.height;for(let Ie=0;Ie<rt;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,tt,Ee,G,0,gt,lt,null),Ee>>=1,G>>=1}}else if(dt.length>0&&Rt){It&&Xt&&t.texStorage2D(s.TEXTURE_2D,rt,tt,dt[0].width,dt[0].height);for(let Ee=0,G=dt.length;Ee<G;Ee++)Xe=dt[Ee],It?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,gt,lt,Xe):t.texImage2D(s.TEXTURE_2D,Ee,tt,gt,lt,Xe);A.generateMipmaps=!1}else It?(Xt&&t.texStorage2D(s.TEXTURE_2D,rt,tt,ge.width,ge.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,lt,ge)):t.texImage2D(s.TEXTURE_2D,0,tt,gt,lt,ge);y(A,Rt)&&x(me),qe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function he(P,A,ee){if(A.image.length!==6)return;let me=te(P,A),ye=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ee);let xe=n.get(ye);if(ye.version!==xe.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);let qe=Nt.getPrimaries(Nt.workingColorSpace),Ne=A.colorSpace===En?null:Nt.getPrimaries(A.colorSpace),Ve=A.colorSpace===En||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let Ee=0;Ee<6;Ee++)!fe&&!ut?ge[Ee]=v(A.image[Ee],!1,!0,i.maxCubemapSize):ge[Ee]=ut?A.image[Ee].image:A.image[Ee],ge[Ee]=Le(A,ge[Ee]);let Rt=ge[0],gt=g(Rt)||a,lt=r.convert(A.format,A.colorSpace),tt=r.convert(A.type),Xe=_(A.internalFormat,lt,tt,A.colorSpace),dt=a&&A.isVideoTexture!==!0,It=xe.__version===void 0||me===!0,Xt=T(A,Rt,gt);Y(s.TEXTURE_CUBE_MAP,A,gt);let rt;if(fe){dt&&It&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,Xe,Rt.width,Rt.height);for(let Ee=0;Ee<6;Ee++){rt=ge[Ee].mipmaps;for(let G=0;G<rt.length;G++){let Ie=rt[G];A.format!==Vn?lt!==null?dt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G,0,0,Ie.width,Ie.height,lt,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G,Xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G,0,0,Ie.width,Ie.height,lt,tt,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G,Xe,Ie.width,Ie.height,0,lt,tt,Ie.data)}}}else{rt=A.mipmaps,dt&&It&&(rt.length>0&&Xt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,Xe,ge[0].width,ge[0].height));for(let Ee=0;Ee<6;Ee++)if(ut){dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ge[Ee].width,ge[Ee].height,lt,tt,ge[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Xe,ge[Ee].width,ge[Ee].height,0,lt,tt,ge[Ee].data);for(let G=0;G<rt.length;G++){let De=rt[G].image[Ee].image;dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G+1,0,0,De.width,De.height,lt,tt,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G+1,Xe,De.width,De.height,0,lt,tt,De.data)}}else{dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,lt,tt,ge[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Xe,lt,tt,ge[Ee]);for(let G=0;G<rt.length;G++){let Ie=rt[G];dt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G+1,0,0,lt,tt,Ie.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,G+1,Xe,lt,tt,Ie.image[Ee])}}}y(A,gt)&&x(s.TEXTURE_CUBE_MAP),xe.__version=ye.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function we(P,A,ee,me,ye,xe){let qe=r.convert(ee.format,ee.colorSpace),Ne=r.convert(ee.type),Ve=_(ee.internalFormat,qe,Ne,ee.colorSpace);if(!n.get(A).__hasExternalTextures){let ut=Math.max(1,A.width>>xe),ge=Math.max(1,A.height>>xe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,xe,Ve,ut,ge,A.depth,0,qe,Ne,null):t.texImage2D(ye,xe,Ve,ut,ge,0,qe,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ue(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ye,n.get(ee).__webglTexture,0,_e(A)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ye,n.get(ee).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(P,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let me=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ee||ue(A)){let ye=A.depthTexture;ye&&ye.isDepthTexture&&(ye.type===bi?me=s.DEPTH_COMPONENT32F:ye.type===Ui&&(me=s.DEPTH_COMPONENT24));let xe=_e(A);ue(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,me,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,me,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){let me=_e(A);ee&&ue(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):ue(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{let me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ye=0;ye<me.length;ye++){let xe=me[ye],qe=r.convert(xe.format,xe.colorSpace),Ne=r.convert(xe.type),Ve=_(xe.internalFormat,qe,Ne,xe.colorSpace),fe=_e(A);ee&&ue(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Ve,A.width,A.height):ue(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);let me=n.get(A.depthTexture).__webglTexture,ye=_e(A);if(A.depthTexture.format===ss)ue(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(A.depthTexture.format===Ks)ue(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function pe(P){let A=n.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Je(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=s.createRenderbuffer(),He(A.__webglDepthbuffer[me],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),He(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(P,A,ee){let me=n.get(P);A!==void 0&&we(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&pe(P)}function U(P){let A=P.texture,ee=n.get(P),me=n.get(A);P.addEventListener("dispose",C),P.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,o.memory.textures++);let ye=P.isWebGLCubeRenderTarget===!0,xe=P.isWebGLMultipleRenderTargets===!0,qe=g(P)||a;if(ye){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<A.mipmaps.length;Ve++)ee.__webglFramebuffer[Ne][Ve]=s.createFramebuffer()}else ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(xe)if(i.drawBuffers){let Ne=P.texture;for(let Ve=0,fe=Ne.length;Ve<fe;Ve++){let ut=n.get(Ne[Ve]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ue(P)===!1){let Ne=xe?A:[A];ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ve=0;Ve<Ne.length;Ve++){let fe=Ne[Ve];ee.__webglColorRenderbuffer[Ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ve]);let ut=r.convert(fe.format,fe.colorSpace),ge=r.convert(fe.type),Rt=_(fe.internalFormat,ut,ge,fe.colorSpace,P.isXRRenderTarget===!0),gt=_e(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Rt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),He(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Y(s.TEXTURE_CUBE_MAP,A,qe);for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Ne][Ve],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else we(ee.__webglFramebuffer[Ne],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(A,qe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){let Ne=P.texture;for(let Ve=0,fe=Ne.length;Ve<fe;Ve++){let ut=Ne[Ve],ge=n.get(ut);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),Y(s.TEXTURE_2D,ut,qe),we(ee.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,0),y(ut,qe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,me.__webglTexture),Y(Ne,A,qe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Ve],P,A,s.COLOR_ATTACHMENT0,Ne,Ve);else we(ee.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,Ne,0);y(A,qe)&&x(Ne),t.unbindTexture()}P.depthBuffer&&pe(P)}function ve(P){let A=g(P)||a,ee=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let me=0,ye=ee.length;me<ye;me++){let xe=ee[me];if(y(xe,A)){let qe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=n.get(xe).__webglTexture;t.bindTexture(qe,Ne),x(qe),t.unbindTexture()}}}function le(P){if(a&&P.samples>0&&ue(P)===!1){let A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ee=P.width,me=P.height,ye=s.COLOR_BUFFER_BIT,xe=[],qe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(P),Ve=P.isWebGLMultipleRenderTargets===!0;if(Ve)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){xe.push(s.COLOR_ATTACHMENT0+fe),P.depthBuffer&&xe.push(qe);let ut=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ut===!1&&(P.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ve&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]),ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[qe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[qe])),Ve){let ge=n.get(A[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,ye,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ve)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]);let ut=n.get(A[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function _e(P){return Math.min(i.maxSamples,P.samples)}function ue(P){let A=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ge(P){let A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Le(P,A){let ee=P.colorSpace,me=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Qc||ee!==cn&&ee!==En&&(Nt.getTransfer(ee)===Gt?a===!1?e.has("EXT_sRGB")===!0&&me===Vn?(P.format=Qc,P.minFilter=Qt,P.generateMipmaps=!1):A=ca.sRGBToLinear(A):(me!==Vn||ye!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=R,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=ne,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ue}function Py(s,e,t){let n=t.isWebGL2;function i(r,o=En){let a,c=Nt.getTransfer(o);if(r===oi)return s.UNSIGNED_BYTE;if(r===Hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===am)return s.BYTE;if(r===cm)return s.SHORT;if(r===Gl)return s.UNSIGNED_SHORT;if(r===kf)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===as)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lm)return s.ALPHA;if(r===Vn)return s.RGBA;if(r===hm)return s.LUMINANCE;if(r===um)return s.LUMINANCE_ALPHA;if(r===ss)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===Qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===fm)return s.RED;if(r===Vf)return s.RED_INTEGER;if(r===dm)return s.RG;if(r===Wf)return s.RG_INTEGER;if(r===Xf)return s.RGBA_INTEGER;if(r===fc||r===dc||r===pc||r===mc)if(c===Gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ru||r===ou||r===au||r===cu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ru)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ou)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===au)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lu||r===hu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lu)return c===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===hu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uu||r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===vu||r===yu||r===_u||r===Mu||r===bu||r===wu||r===Su)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===uu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===du)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_u)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wu)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Su)return c===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gc||r===Eu||r===Tu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===gc)return c===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pm||r===Au||r===Ru||r===Cu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ru)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var dl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Dt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pl=class extends Ei{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,v=t.getContextAttributes(),g=null,p=null,y=[],x=[],_=new be,T=null,S=new an;S.layers.enable(1),S.viewport=new Pt;let M=new an;M.layers.enable(2),M.viewport=new Pt;let C=[S,M],b=new dl;b.layers.enable(1),b.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=y[Y];return te===void 0&&(te=new Lr,y[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=y[Y];return te===void 0&&(te=new Lr,y[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=y[Y];return te===void 0&&(te=new Lr,y[Y]=te),te.getHandSpace()};function I(Y){let te=x.indexOf(Y.inputSource);if(te===-1)return;let ae=y[te];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,l||o),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",R);for(let Y=0;Y<y.length;Y++){let te=x[Y];te!==null&&(x[Y]=null,y[Y].disconnect(te))}w=null,L=null,e.setRenderTarget(g),d=null,f=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",F),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let te=null,ae=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?Ks:ss,ae=v.stencil?is:Ui);let we={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(we),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Qn(f.textureWidth,f.textureHeight,{format:Vn,type:oi,depthTexture:new xa(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let He=e.properties.get(p);He.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(Y){for(let te=0;te<Y.removed.length;te++){let ae=Y.removed[te],he=x.indexOf(ae);he>=0&&(x[he]=null,y[he].disconnect(ae))}for(let te=0;te<Y.added.length;te++){let ae=Y.added[te],he=x.indexOf(ae);if(he===-1){for(let He=0;He<y.length;He++)if(He>=x.length){x.push(ae),he=He;break}else if(x[He]===null){x[He]=ae,he=He;break}if(he===-1)break}let we=y[he];we&&we.connect(ae)}}let N=new D,H=new D;function V(Y,te,ae){N.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(ae.matrixWorld);let he=N.distanceTo(H),we=te.projectionMatrix.elements,He=ae.projectionMatrix.elements,Je=we[14]/(we[10]-1),pe=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],U=(we[9]-1)/we[5],ve=(we[8]-1)/we[0],le=(He[8]+1)/He[0],_e=Je*ve,ue=Je*le,Ge=he/(-ve+le),Le=Ge*-ve;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Le),Y.translateZ(Ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let P=Je+Ge,A=pe+Ge,ee=_e-Le,me=ue+(he-Le),ye=ne*pe/A*P,xe=U*pe/A*P;Y.projectionMatrix.makePerspective(ee,me,ye,xe,P,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Z(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;b.near=M.near=S.near=Y.near,b.far=M.far=S.far=Y.far,(w!==b.near||L!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,L=b.far);let te=Y.parent,ae=b.cameras;Z(b,te);for(let he=0;he<ae.length;he++)Z(ae[he],te);ae.length===2?V(b,S,M):b.projectionMatrix.copy(S.projectionMatrix),W(Y,b,te)};function W(Y,te,ae){ae===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let $=null;function j(Y,te){if(h=te.getViewerPose(l||o),m=te,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let he=!1;ae.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let we=0;we<ae.length;we++){let He=ae[we],Je=null;if(d!==null)Je=d.getViewport(He);else{let ne=u.getViewSubImage(f,He);Je=ne.viewport,we===0&&(e.setRenderTargetTextures(p,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(p))}let pe=C[we];pe===void 0&&(pe=new an,pe.layers.enable(we),pe.viewport=new Pt,C[we]=pe),pe.matrix.fromArray(He.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(He.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(b.matrix.copy(pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(pe)}}for(let ae=0;ae<y.length;ae++){let he=x[ae],we=y[ae];he!==null&&we!==void 0&&we.update(he,te,l||o)}$&&$(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let ce=new ed;ce.setAnimationLoop(j),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}};function Iy(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ny(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=i[y.id];_===void 0&&(m(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",g));let T=x.program;n.updateUBOMapping(y,T);let S=e.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let x=u();y.__bindingPointIndex=x;let _=s.createBuffer(),T=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,M=_.length;S<M;S++){let C=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,w=C.length;b<w;b++){let L=C[b];if(d(L,S,b,T)===!0){let I=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],R=0;for(let N=0;N<F.length;N++){let H=F[N],V=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,I+R,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,_,T){let S=y.value,M=x+"_"+_;if(T[M]===void 0)return typeof S=="number"||typeof S=="boolean"?T[M]=S:T[M]=S.clone(),!0;{let C=T[M];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return T[M]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(y){let x=y.uniforms,_=0,T=16;for(let M=0,C=x.length;M<C;M++){let b=Array.isArray(x[M])?x[M]:[x[M]];for(let w=0,L=b.length;w<L;w++){let I=b[w],F=Array.isArray(I.value)?I.value:[I.value];for(let R=0,N=F.length;R<N;R++){let H=F[R],V=v(H),Z=_%T;Z!==0&&T-Z<V.boundary&&(_+=T-Z),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=V.storage}}}let S=_%T;return S>0&&(_+=T-S),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Or=class{constructor(e={}){let{canvas:t=Gm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;let x=this,_=!1,T=0,S=0,M=null,C=-1,b=null,w=new Pt,L=new Pt,I=null,F=new Oe(0),R=0,N=t.width,H=t.height,V=1,Z=null,W=null,$=new Pt(0,0,N,H),j=new Pt(0,0,N,H),ce=!1,Y=new Fr,te=!1,ae=!1,he=null,we=new ot,He=new be,Je=new D,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return M===null?V:1}let U=n;function ve(E,k){for(let q=0;q<E.length;q++){let Q=E[q],K=t.getContext(Q,k);if(K!==null)return K}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),U===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),U=ve(k,E),U===null)throw ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let le,_e,ue,Ge,Le,P,A,ee,me,ye,xe,qe,Ne,Ve,fe,ut,ge,Rt,gt,lt,tt,Xe,dt,It;function Xt(){le=new $x(U),_e=new qx(U,le,e),le.init(_e),Xe=new Py(U,le,_e),ue=new Ry(U,le,_e),Ge=new tv(U),Le=new gy,P=new Cy(U,le,ue,Le,_e,Xe,Ge),A=new Zx(x),ee=new Jx(x),me=new l0(U,_e),dt=new Wx(U,le,me,_e),ye=new Qx(U,me,Ge,dt),xe=new rv(U,ye,me,Ge),gt=new sv(U,_e,P),ut=new Yx(Le),qe=new my(x,A,ee,le,_e,dt,ut),Ne=new Iy(x,Le),Ve=new vy,fe=new Sy(le,_e),Rt=new Vx(x,A,ee,ue,xe,f,c),ge=new Ay(x,xe,_e),It=new Ny(U,Ge,_e,ue),lt=new Xx(U,le,Ge,_e),tt=new ev(U,le,Ge,_e),Ge.programs=qe.programs,x.capabilities=_e,x.extensions=le,x.properties=Le,x.renderLists=Ve,x.shadowMap=ge,x.state=ue,x.info=Ge}Xt();let rt=new pl(x,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,H,!1))},this.getSize=function(E){return E.set(N,H)},this.setSize=function(E,k,q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,H=k,t.width=Math.floor(E*V),t.height=Math.floor(k*V),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*V,H*V).floor()},this.setDrawingBufferSize=function(E,k,q){N=E,H=k,V=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,k,q,Q){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,k,q,Q),ue.viewport(w.copy($).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,k,q,Q){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,k,q,Q),ue.scissor(L.copy(j).multiplyScalar(V).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){ue.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,k=!0,q=!0){let Q=0;if(E){let K=!1;if(M!==null){let Me=M.texture.format;K=Me===Xf||Me===Wf||Me===Vf}if(K){let Me=M.texture.type,Ue=Me===oi||Me===Ui||Me===Gl||Me===is||Me===Hf||Me===Gf,ke=Rt.getClearColor(),Ze=Rt.getClearAlpha(),et=ke.r,Se=ke.g,Be=ke.b;Ue?(d[0]=et,d[1]=Se,d[2]=Be,d[3]=Ze,U.clearBufferuiv(U.COLOR,0,d)):(m[0]=et,m[1]=Se,m[2]=Be,m[3]=Ze,U.clearBufferiv(U.COLOR,0,m))}else Q|=U.COLOR_BUFFER_BIT}k&&(Q|=U.DEPTH_BUFFER_BIT),q&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ve.dispose(),fe.dispose(),Le.dispose(),A.dispose(),ee.dispose(),xe.dispose(),dt.dispose(),It.dispose(),qe.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",z),rt.removeEventListener("sessionend",X),he&&(he.dispose(),he=null),re.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let E=Ge.autoReset,k=ge.enabled,q=ge.autoUpdate,Q=ge.needsUpdate,K=ge.type;Xt(),Ge.autoReset=E,ge.enabled=k,ge.autoUpdate=q,ge.needsUpdate=Q,ge.type=K}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){let k=E.target;k.removeEventListener("dispose",De),at(k)}function at(E){O(E),Le.remove(E)}function O(E){let k=Le.get(E).programs;k!==void 0&&(k.forEach(function(q){qe.releaseProgram(q)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,Q,K,Me){k===null&&(k=pe);let Ue=K.isMesh&&K.matrixWorld.determinant()<0,ke=Et(E,k,q,Q,K);ue.setMaterial(Q,Ue);let Ze=q.index,et=1;if(Q.wireframe===!0){if(Ze=ye.getWireframeAttribute(q),Ze===void 0)return;et=2}let Se=q.drawRange,Be=q.attributes.position,Ke=Se.start*et,ft=(Se.start+Se.count)*et;Me!==null&&(Ke=Math.max(Ke,Me.start*et),ft=Math.min(ft,(Me.start+Me.count)*et)),Ze!==null?(Ke=Math.max(Ke,0),ft=Math.min(ft,Ze.count)):Be!=null&&(Ke=Math.max(Ke,0),ft=Math.min(ft,Be.count));let Tt=ft-Ke;if(Tt<0||Tt===1/0)return;dt.setup(K,Q,ke,q,Ze);let kn,zt=lt;if(Ze!==null&&(kn=me.get(Ze),zt=tt,zt.setIndex(kn)),K.isMesh)Q.wireframe===!0?(ue.setLineWidth(Q.wireframeLinewidth*ne()),zt.setMode(U.LINES)):zt.setMode(U.TRIANGLES);else if(K.isLine){let Mt=Q.linewidth;Mt===void 0&&(Mt=1),ue.setLineWidth(Mt*ne()),K.isLineSegments?zt.setMode(U.LINES):K.isLineLoop?zt.setMode(U.LINE_LOOP):zt.setMode(U.LINE_STRIP)}else K.isPoints?zt.setMode(U.POINTS):K.isSprite&&zt.setMode(U.TRIANGLES);if(K.isBatchedMesh)zt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)zt.renderInstances(Ke,Tt,K.count);else if(q.isInstancedBufferGeometry){let Mt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,cc=Math.min(q.instanceCount,Mt);zt.renderInstances(Ke,Tt,cc)}else zt.render(Ke,Tt)};function J(E,k,q){E.transparent===!0&&E.side===Bt&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,nt(E,k,q),E.side=ai,E.needsUpdate=!0,nt(E,k,q),E.side=Bt):nt(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),g=fe.get(q),g.init(),y.push(g),q.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),E!==q&&E.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(x._useLegacyLights);let Q=new Set;return E.traverse(function(K){let Me=K.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){let ke=Me[Ue];J(ke,q,K),Q.add(ke)}else J(Me,q,K),Q.add(Me)}),y.pop(),g=null,Q},this.compileAsync=function(E,k,q=null){let Q=this.compile(E,k,q);return new Promise(K=>{function Me(){if(Q.forEach(function(Ue){Le.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){K(E);return}setTimeout(Me,10)}le.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let B=null;function ie(E){B&&B(E)}function z(){re.stop()}function X(){re.start()}let re=new ed;re.setAnimationLoop(ie),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(E){B=E,rt.setAnimationLoop(E),E===null?re.stop():re.start()},rt.addEventListener("sessionstart",z),rt.addEventListener("sessionend",X),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,M),g=fe.get(E,y.length),g.init(),y.push(g),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(we),ae=this.localClippingEnabled,te=ut.init(this.clippingPlanes,ae),v=Ve.get(E,p.length),v.init(),p.push(v),de(E,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Z,W),this.info.render.frame++,te===!0&&ut.beginShadows();let q=g.state.shadowsArray;if(ge.render(q,E,k),te===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(v,E),g.setupLights(x._useLegacyLights),k.isArrayCamera){let Q=k.cameras;for(let K=0,Me=Q.length;K<Me;K++){let Ue=Q[K];Te(v,E,Ue,Ue.viewport)}}else Te(v,E,k);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(x,E,k),dt.resetDefaultState(),C=-1,b=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function de(E,k,q,Q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){Q&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);let Ue=xe.update(E),ke=E.material;ke.visible&&v.push(E,Ue,ke,q,Je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let Ue=xe.update(E),ke=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Je.copy(Ue.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(ke)){let Ze=Ue.groups;for(let et=0,Se=Ze.length;et<Se;et++){let Be=Ze[et],Ke=ke[Be.materialIndex];Ke&&Ke.visible&&v.push(E,Ue,Ke,q,Je.z,Be)}}else ke.visible&&v.push(E,Ue,ke,q,Je.z,null)}}let Me=E.children;for(let Ue=0,ke=Me.length;Ue<ke;Ue++)de(Me[Ue],k,q,Q)}function Te(E,k,q,Q){let K=E.opaque,Me=E.transmissive,Ue=E.transparent;g.setupLightsView(q),te===!0&&ut.setGlobalState(x.clippingPlanes,q),Me.length>0&&We(K,Me,k,q),Q&&ue.viewport(w.copy(Q)),K.length>0&&Ae(K,k,q),Me.length>0&&Ae(Me,k,q),Ue.length>0&&Ae(Ue,k,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function We(E,k,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Me=_e.isWebGL2;he===null&&(he=new Qn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?as:oi,minFilter:Xn,samples:Me?4:0})),x.getDrawingBufferSize(He),Me?he.setSize(He.x,He.y):he.setSize(aa(He.x),aa(He.y));let Ue=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(F),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let ke=x.toneMapping;x.toneMapping=Oi,Ae(E,q,Q),P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he);let Ze=!1;for(let et=0,Se=k.length;et<Se;et++){let Be=k[et],Ke=Be.object,ft=Be.geometry,Tt=Be.material,kn=Be.group;if(Tt.side===Bt&&Ke.layers.test(Q.layers)){let zt=Tt.side;Tt.side=dn,Tt.needsUpdate=!0,Qe(Ke,q,Q,ft,Tt,kn),Tt.side=zt,Tt.needsUpdate=!0,Ze=!0}}Ze===!0&&(P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he)),x.setRenderTarget(Ue),x.setClearColor(F,R),x.toneMapping=ke}function Ae(E,k,q){let Q=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Me=E.length;K<Me;K++){let Ue=E[K],ke=Ue.object,Ze=Ue.geometry,et=Q===null?Ue.material:Q,Se=Ue.group;ke.layers.test(q.layers)&&Qe(ke,k,q,Ze,et,Se)}}function Qe(E,k,q,Q,K,Me){E.onBeforeRender(x,k,q,Q,K,Me),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(x,k,q,Q,E,Me),K.transparent===!0&&K.side===Bt&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,x.renderBufferDirect(q,k,Q,K,E,Me),K.side=ai,K.needsUpdate=!0,x.renderBufferDirect(q,k,Q,K,E,Me),K.side=Bt):x.renderBufferDirect(q,k,Q,K,E,Me),E.onAfterRender(x,k,q,Q,K,Me)}function nt(E,k,q){k.isScene!==!0&&(k=pe);let Q=Le.get(E),K=g.state.lights,Me=g.state.shadowsArray,Ue=K.state.version,ke=qe.getParameters(E,K.state,Me,k,q),Ze=qe.getProgramCacheKey(ke),et=Q.programs;Q.environment=E.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(E.isMeshStandardMaterial?ee:A).get(E.envMap||Q.environment),et===void 0&&(E.addEventListener("dispose",De),et=new Map,Q.programs=et);let Se=et.get(Ze);if(Se!==void 0){if(Q.currentProgram===Se&&Q.lightsStateVersion===Ue)return ht(E,ke),Se}else ke.uniforms=qe.getUniforms(E),E.onBuild(q,ke,x),E.onBeforeCompile(ke,x),Se=qe.acquireProgram(ke,Ze),et.set(Ze,Se),Q.uniforms=ke.uniforms;let Be=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ut.uniform),ht(E,ke),Q.needsLights=Re(E),Q.lightsStateVersion=Ue,Q.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Se,Q.uniformsList=null,Se}function xt(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=qs.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function ht(E,k){let q=Le.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Et(E,k,q,Q,K){k.isScene!==!0&&(k=pe),P.resetTextureUnits();let Me=k.fog,Ue=Q.isMeshStandardMaterial?k.environment:null,ke=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:cn,Ze=(Q.isMeshStandardMaterial?ee:A).get(Q.envMap||Ue),et=Q.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Se=!!q.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!q.morphAttributes.position,Ke=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color,Tt=Oi;Q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Tt=x.toneMapping);let kn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=kn!==void 0?kn.length:0,Mt=Le.get(Q),cc=g.state.lights;if(te===!0&&(ae===!0||E!==b)){let Hn=E===b&&Q.id===C;ut.setState(Q,E,Hn)}let Jt=!1;Q.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==cc.state.version||Mt.outputColorSpace!==ke||K.isBatchedMesh&&Mt.batching===!1||!K.isBatchedMesh&&Mt.batching===!0||K.isInstancedMesh&&Mt.instancing===!1||!K.isInstancedMesh&&Mt.instancing===!0||K.isSkinnedMesh&&Mt.skinning===!1||!K.isSkinnedMesh&&Mt.skinning===!0||K.isInstancedMesh&&Mt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Mt.instancingColor===!1&&K.instanceColor!==null||Mt.envMap!==Ze||Q.fog===!0&&Mt.fog!==Me||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==ut.numPlanes||Mt.numIntersection!==ut.numIntersection)||Mt.vertexAlphas!==et||Mt.vertexTangents!==Se||Mt.morphTargets!==Be||Mt.morphNormals!==Ke||Mt.morphColors!==ft||Mt.toneMapping!==Tt||_e.isWebGL2===!0&&Mt.morphTargetsCount!==zt)&&(Jt=!0):(Jt=!0,Mt.__version=Q.version);let Zi=Mt.currentProgram;Jt===!0&&(Zi=nt(Q,k,K));let jh=!1,yr=!1,lc=!1,xn=Zi.getUniforms(),Ki=Mt.uniforms;if(ue.useProgram(Zi.program)&&(jh=!0,yr=!0,lc=!0),Q.id!==C&&(C=Q.id,yr=!0),jh||b!==E){xn.setValue(U,"projectionMatrix",E.projectionMatrix),xn.setValue(U,"viewMatrix",E.matrixWorldInverse);let Hn=xn.map.cameraPosition;Hn!==void 0&&Hn.setValue(U,Je.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&xn.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xn.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,yr=!0,lc=!0)}if(K.isSkinnedMesh){xn.setOptional(U,K,"bindMatrix"),xn.setOptional(U,K,"bindMatrixInverse");let Hn=K.skeleton;Hn&&(_e.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),xn.setValue(U,"boneTexture",Hn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(xn.setOptional(U,K,"batchingTexture"),xn.setValue(U,"batchingTexture",K._matricesTexture,P));let hc=q.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0&&_e.isWebGL2===!0)&&gt.update(K,q,Zi),(yr||Mt.receiveShadow!==K.receiveShadow)&&(Mt.receiveShadow=K.receiveShadow,xn.setValue(U,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ki.envMap.value=Ze,Ki.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),yr&&(xn.setValue(U,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&Ye(Ki,lc),Me&&Q.fog===!0&&Ne.refreshFogUniforms(Ki,Me),Ne.refreshMaterialUniforms(Ki,Q,V,H,he),qs.upload(U,xt(Mt),Ki,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qs.upload(U,xt(Mt),Ki,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xn.setValue(U,"center",K.center),xn.setValue(U,"modelViewMatrix",K.modelViewMatrix),xn.setValue(U,"normalMatrix",K.normalMatrix),xn.setValue(U,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Hn=Q.uniformsGroups;for(let uc=0,xp=Hn.length;uc<xp;uc++)if(_e.isWebGL2){let Jh=Hn[uc];It.update(Jh,Zi),It.bind(Jh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Ye(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Re(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,k,q){Le.get(E.texture).__webglTexture=k,Le.get(E.depthTexture).__webglTexture=q;let Q=Le.get(E);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=q===void 0,Q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){let q=Le.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){M=E,T=k,S=q;let Q=!0,K=null,Me=!1,Ue=!1;if(E){let Ze=Le.get(E);Ze.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1):Ze.__webglFramebuffer===void 0?P.setupRenderTarget(E):Ze.__hasExternalTextures&&P.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);let et=E.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);let Se=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Se[k])?K=Se[k][q]:K=Se[k],Me=!0):_e.isWebGL2&&E.samples>0&&P.useMultisampledRTT(E)===!1?K=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Se)?K=Se[q]:K=Se,w.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else w.copy($).multiplyScalar(V).floor(),L.copy(j).multiplyScalar(V).floor(),I=ce;if(ue.bindFramebuffer(U.FRAMEBUFFER,K)&&_e.drawBuffers&&Q&&ue.drawBuffers(E,K),ue.viewport(w),ue.scissor(L),ue.setScissorTest(I),Me){let Ze=Le.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ze.__webglTexture,q)}else if(Ue){let Ze=Le.get(E.texture),et=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,q||0,et)}C=-1},this.readRenderTargetPixels=function(E,k,q,Q,K,Me,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){ue.bindFramebuffer(U.FRAMEBUFFER,ke);try{let Ze=E.texture,et=Ze.format,Se=Ze.type;if(et!==Vn&&Xe.convert(et)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Se===as&&(le.has("EXT_color_buffer_half_float")||_e.isWebGL2&&le.has("EXT_color_buffer_float"));if(Se!==oi&&Xe.convert(Se)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===bi&&(_e.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Q&&q>=0&&q<=E.height-K&&U.readPixels(k,q,Q,K,Xe.convert(et),Xe.convert(Se),Me)}finally{let Ze=M!==null?Le.get(M).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(E,k,q=0){let Q=Math.pow(2,-q),K=Math.floor(k.image.width*Q),Me=Math.floor(k.image.height*Q);P.setTexture2D(k,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,E.x,E.y,K,Me),ue.unbindTexture()},this.copyTextureToTexture=function(E,k,q,Q=0){let K=k.image.width,Me=k.image.height,Ue=Xe.convert(q.format),ke=Xe.convert(q.type);P.setTexture2D(q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Q,E.x,E.y,K,Me,Ue,ke,k.image.data):k.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Q,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Ue,k.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Q,E.x,E.y,Ue,ke,k.image),Q===0&&q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q,Q,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,Ze=Xe.convert(Q.format),et=Xe.convert(Q.type),Se;if(Q.isData3DTexture)P.setTexture3D(Q,0),Se=U.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)P.setTexture2DArray(Q,0),Se=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment);let Be=U.getParameter(U.UNPACK_ROW_LENGTH),Ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ft=U.getParameter(U.UNPACK_SKIP_PIXELS),Tt=U.getParameter(U.UNPACK_SKIP_ROWS),kn=U.getParameter(U.UNPACK_SKIP_IMAGES),zt=q.isCompressedTexture?q.mipmaps[K]:q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(Se,K,k.x,k.y,k.z,Me,Ue,ke,Ze,et,zt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Se,K,k.x,k.y,k.z,Me,Ue,ke,Ze,zt.data)):U.texSubImage3D(Se,K,k.x,k.y,k.z,Me,Ue,ke,Ze,et,zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Be),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ft),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kn),K===0&&Q.generateMipmaps&&U.generateMipmap(Se),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){T=0,S=0,M=null,ue.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xl?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===Ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?rs:Zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?Ct:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ml=class extends Or{};ml.prototype.isWebGL1Renderer=!0;var va=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new D,kr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var gf=new D,xf=new Pt,vf=new Pt,Dy=new D,yf=new ot,Wo=new D,kc=new zn,_f=new ot,Hc=new $s,ya=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kc.copy(this.boundingSphere),kc.applyMatrix4(i),e.ray.intersectsSphere(kc)!==!1&&(_f.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(_f),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;xf.fromBufferAttribute(i.attributes.skinIndex,e),vf.fromBufferAttribute(i.attributes.skinWeight,e),gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=vf.getComponent(r);if(o!==0){let a=xf.getComponent(r);yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Dy.copy(gf).applyMatrix4(yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Hr=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gr=class extends ln{constructor(e=null,t=1,n=1,i,r,o,a,c,l=$t,h=$t,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mf=new ot,Uy=new ot,_a=class s{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Uy;Mf.multiplyMatrices(a,t[r]),Mf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gr(t,e,e,Vn,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ls=class extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new ot,bf=new ot,Xo=[],wf=new tn,zy=new ot,Sr=new ze,Er=new zn,_n=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),wf.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Er.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),bf.multiplyMatrices(n,Fs),Sr.matrixWorld=bf,Sr.raycast(e,Xo);for(let o=0,a=Xo.length;o<a;o++){let c=Xo[o];c.instanceId=r,c.object=this,t.push(c)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sf=new D,Ef=new D,Tf=new ot,Gc=new $s,qo=new zn,nr=class extends Vt{constructor(e=new At,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sf.fromBufferAttribute(t,i-1),Ef.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sf.distanceTo(Ef);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Tf.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,_=y-1;x<_;x+=d){let T=m.getX(x),S=m.getX(x+1);if(l.fromBufferAttribute(g,T),h.fromBufferAttribute(g,S),Gc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,_=y-1;x<_;x+=d){if(l.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),Gc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Af=new D,Rf=new D,Ma=class extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Af.fromBufferAttribute(t,i),Rf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Af.distanceTo(Rf);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Wr=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cf=new ot,gl=new $s,Yo=new zn,Zo=new D,wa=class extends Vt{constructor(e=new At,t=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Cf.copy(i).invert(),gl.copy(e.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,v=d;m<v;m++){let g=l.getX(m);Zo.fromBufferAttribute(u,g),Pf(Zo,g,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Zo.fromBufferAttribute(u,m),Pf(Zo,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pf(s,e,t,n,i,r,o){let a=gl.distanceSqToPoint(s);if(a<t){let c=new D;gl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var ti=class extends ln{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new be:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],o=[],a=new D,c=new ot;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(on(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(on(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends qn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new be,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends Xr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ko=new D,Vc=new Zl,Wc=new Zl,Xc=new Zl,vl=class extends qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ko.subVectors(i[0],i[1]).add(i[0]),l=Ko);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ko.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Vc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,v,g),Wc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,v,g),Xc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Wc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Xc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Vc.calc(c),Wc.calc(c),Xc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Fy(s,e){let t=1-s;return t*t*e}function Oy(s,e){return 2*(1-s)*s*e}function By(s,e){return s*s*e}function Ir(s,e,t,n){return Fy(s,e)+Oy(s,t)+By(s,n)}function ky(s,e){let t=1-s;return t*t*t*e}function Hy(s,e){let t=1-s;return 3*t*t*s*e}function Gy(s,e){return 3*(1-s)*s*s*e}function Vy(s,e){return s*s*s*e}function Nr(s,e,t,n,i){return ky(s,e)+Hy(s,t)+Gy(s,n)+Vy(s,i)}var Sa=class extends qn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(e,i.x,r.x,o.x,a.x),Nr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends qn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(e,i.x,r.x,o.x,a.x),Nr(e,i.y,r.y,o.y,a.y),Nr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends qn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends qn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends qn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,i.x,r.x,o.x),Ir(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends qn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,i.x,r.x,o.x),Ir(e,i.y,r.y,o.y),Ir(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Lf(a,c.x,l.x,h.x,u.x),Lf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new be().fromArray(i))}return this}},bl=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:vl,CubicBezierCurve:Sa,CubicBezierCurve3:yl,EllipseCurve:Xr,LineCurve:Ea,LineCurve3:_l,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Ml,SplineCurve:Aa}),wl=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new bl[i.type]().fromJSON(i))}return this}},Ra=class extends wl{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ea(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ta(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Sa(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Xr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ir=class s extends At{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=on(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new be,d=new D,m=new D,v=new D,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=t;y++){let x=n+y*h*i,_=Math.sin(x),T=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*_,u.y=e[S].y,u.z=e[S].x*T,o.push(u.x,u.y,u.z),f.x=y/t,f.y=S/(e.length-1),a.push(f.x,f.y);let M=c[3*S+0]*_,C=c[3*S+1],b=c[3*S+0]*T;l.push(M,C,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let _=x+y*e.length,T=_,S=_+e.length,M=_+e.length+1,C=_+1;r.push(T,S,C),r.push(M,C,S)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var qt=class s extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,v=[],g=n/2,p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function y(){let _=new D,T=new D,S=0,M=(t-e)/n;for(let C=0;C<=r;C++){let b=[],w=C/r,L=w*(t-e)+e;for(let I=0;I<=i;I++){let F=I/i,R=F*c+a,N=Math.sin(R),H=Math.cos(R);T.x=L*N,T.y=-w*n+g,T.z=L*H,u.push(T.x,T.y,T.z),_.set(N,M,H).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-w),b.push(m++)}v.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){let w=v[b][C],L=v[b+1][C],I=v[b+1][C+1],F=v[b][C+1];h.push(w,L,F),h.push(L,I,F),S+=6}l.addGroup(p,S,0),p+=S}function x(_){let T=m,S=new be,M=new D,C=0,b=_===!0?e:t,w=_===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),m++;let L=m;for(let I=0;I<=i;I++){let R=I/i*c+a,N=Math.cos(R),H=Math.sin(R);M.x=b*H,M.y=g*w,M.z=b*N,u.push(M.x,M.y,M.z),f.push(0,w,0),S.x=N*.5+.5,S.y=H*.5*w+.5,d.push(S.x,S.y),m++}for(let I=0;I<i;I++){let F=T+I,R=L+I;_===!0?h.push(R,R+1,F):h.push(R+1,R,F),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class s extends qt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sl=class s extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new D,_=new D,T=new D;for(let S=0;S<t.length;S+=3)d(t[S+0],x),d(t[S+1],_),d(t[S+2],T),c(x,_,T,y)}function c(y,x,_,T){let S=T+1,M=[];for(let C=0;C<=S;C++){M[C]=[];let b=y.clone().lerp(_,C/S),w=x.clone().lerp(_,C/S),L=S-C;for(let I=0;I<=L;I++)I===0&&C===S?M[C][I]=b:M[C][I]=b.clone().lerp(w,I/L)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let w=Math.floor(b/2);b%2===0?(f(M[C][w+1]),f(M[C+1][w]),f(M[C][w])):(f(M[C][w+1]),f(M[C+1][w+1]),f(M[C+1][w]))}}function l(y){let x=new D;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){let y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let _=g(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(_,1-T)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],_=o[y+2],T=o[y+4],S=Math.max(x,_,T),M=Math.min(x,_,T);S>.9&&M<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){let y=new D,x=new D,_=new D,T=new D,S=new be,M=new be,C=new be;for(let b=0,w=0;b<r.length;b+=9,w+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),S.set(o[w+0],o[w+1]),M.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),T.copy(y).add(x).add(_).divideScalar(3);let L=g(T);v(S,w+0,y,L),v(M,w+2,x,L),v(C,w+4,_,L)}}function v(y,x,_,T){T<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Yr=class extends Ra{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ra().fromJSON(i))}return this}},Wy={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=od(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Ky(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let m=t;m<i;m+=t)u=s[m],f=s[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Zr(r,o,t,a,c,d,0),o}};function od(s,e,t,n,i){let r,o;if(i===o_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=If(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=If(r,s[r],s[r+1],o);return o&&Wa(o,o.next)&&(jr(o),o=o.next),o}function hs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||Zt(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&e_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?qy(s,n,i,r):Xy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),jr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Yy(hs(s),e,t),Zr(s,e,t,n,i,r,2)):o===2&&Zy(s,e,t,n,i,r):Zr(hs(s),e,t,n,i,r,1);break}}}function Xy(s){let e=s.prev,t=s,n=s.next;if(Zt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Vs(i,a,r,c,o,l,m.x,m.y)&&Zt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qy(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Zt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=El(d,m,e,t,n),y=El(v,g,e,t,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Vs(a,h,c,u,l,f,x.x,x.y)&&Zt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Vs(a,h,c,u,l,f,_.x,_.y)&&Zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Vs(a,h,c,u,l,f,x.x,x.y)&&Zt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Vs(a,h,c,u,l,f,_.x,_.y)&&Zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Yy(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Wa(i,r)&&ad(i,n,n.next,r)&&Kr(i,r)&&Kr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),jr(n),jr(n.next),n=s=r),n=n.next}while(n!==s);return hs(n)}function Zy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i_(o,a)){let c=cd(o,a);o=hs(o,o.next),c=hs(c,c.next),Zr(o,e,t,n,i,r,0),Zr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ky(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=od(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(n_(l));for(i.sort(jy),r=0;r<i.length;r++)t=Jy(i[r],t);return t}function jy(s,e){return s.x-e.x}function Jy(s,e){let t=$y(s,e);if(!t)return e;let n=cd(t,s);return hs(n,n.next),hs(t,t.next)}function $y(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Vs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Kr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Qy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Qy(s,e){return Zt(s.prev,s,e.prev)<0&&Zt(e.next,s,s.next)<0}function e_(s,e,t,n){let i=s;do i.z===0&&(i.z=El(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,t_(i)}function t_(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function El(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function n_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function i_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!s_(s,e)&&(Kr(s,e)&&Kr(e,s)&&r_(s,e)&&(Zt(s.prev,s,e.prev)||Zt(s,e.prev,e))||Wa(s,e)&&Zt(s.prev,s,s.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wa(s,e){return s.x===e.x&&s.y===e.y}function ad(s,e,t,n){let i=Jo(Zt(s,e,t)),r=Jo(Zt(s,e,n)),o=Jo(Zt(t,n,s)),a=Jo(Zt(t,n,e));return!!(i!==r&&o!==a||i===0&&jo(s,t,e)||r===0&&jo(s,n,e)||o===0&&jo(t,s,n)||a===0&&jo(t,e,n))}function jo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Jo(s){return s>0?1:s<0?-1:0}function s_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Kr(s,e){return Zt(s.prev,s,s.next)<0?Zt(s,e,s.next)>=0&&Zt(s,s.prev,e)>=0:Zt(s,e,s.prev)<0||Zt(s,s.next,e)<0}function r_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cd(s,e){let t=new Tl(s.i,s.x,s.y),n=new Tl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function If(s,e,t,n){let i=new Tl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Dr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Nf(e),Df(n,e);let o=e.length;t.forEach(Nf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Df(n,t[c]);let a=Wy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Df(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ca=class s extends At{constructor(e=new Yr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:a_,x,_=!1,T,S,M,C;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,T=p.computeFrenetFrames(h,!1),S=new D,M=new D,C=new D),f||(g=0,d=0,m=0,v=0);let b=a.extractPoints(l),w=b.shape,L=b.holes;if(!Dr.isClockWise(w)){w=w.reverse();for(let U=0,ve=L.length;U<ve;U++){let le=L[U];Dr.isClockWise(le)&&(L[U]=le.reverse())}}let F=Dr.triangulateShape(w,L),R=w;for(let U=0,ve=L.length;U<ve;U++){let le=L[U];w=w.concat(le)}function N(U,ve,le){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ve,le)}let H=w.length,V=F.length;function Z(U,ve,le){let _e,ue,Ge,Le=U.x-ve.x,P=U.y-ve.y,A=le.x-U.x,ee=le.y-U.y,me=Le*Le+P*P,ye=Le*ee-P*A;if(Math.abs(ye)>Number.EPSILON){let xe=Math.sqrt(me),qe=Math.sqrt(A*A+ee*ee),Ne=ve.x-P/xe,Ve=ve.y+Le/xe,fe=le.x-ee/qe,ut=le.y+A/qe,ge=((fe-Ne)*ee-(ut-Ve)*A)/(Le*ee-P*A);_e=Ne+Le*ge-U.x,ue=Ve+P*ge-U.y;let Rt=_e*_e+ue*ue;if(Rt<=2)return new be(_e,ue);Ge=Math.sqrt(Rt/2)}else{let xe=!1;Le>Number.EPSILON?A>Number.EPSILON&&(xe=!0):Le<-Number.EPSILON?A<-Number.EPSILON&&(xe=!0):Math.sign(P)===Math.sign(ee)&&(xe=!0),xe?(_e=-P,ue=Le,Ge=Math.sqrt(me)):(_e=Le,ue=P,Ge=Math.sqrt(me/2))}return new be(_e/Ge,ue/Ge)}let W=[];for(let U=0,ve=R.length,le=ve-1,_e=U+1;U<ve;U++,le++,_e++)le===ve&&(le=0),_e===ve&&(_e=0),W[U]=Z(R[U],R[le],R[_e]);let $=[],j,ce=W.concat();for(let U=0,ve=L.length;U<ve;U++){let le=L[U];j=[];for(let _e=0,ue=le.length,Ge=ue-1,Le=_e+1;_e<ue;_e++,Ge++,Le++)Ge===ue&&(Ge=0),Le===ue&&(Le=0),j[_e]=Z(le[_e],le[Ge],le[Le]);$.push(j),ce=ce.concat(j)}for(let U=0;U<g;U++){let ve=U/g,le=d*Math.cos(ve*Math.PI/2),_e=m*Math.sin(ve*Math.PI/2)+v;for(let ue=0,Ge=R.length;ue<Ge;ue++){let Le=N(R[ue],W[ue],_e);we(Le.x,Le.y,-le)}for(let ue=0,Ge=L.length;ue<Ge;ue++){let Le=L[ue];j=$[ue];for(let P=0,A=Le.length;P<A;P++){let ee=N(Le[P],j[P],_e);we(ee.x,ee.y,-le)}}}let Y=m+v;for(let U=0;U<H;U++){let ve=f?N(w[U],ce[U],Y):w[U];_?(M.copy(T.normals[0]).multiplyScalar(ve.x),S.copy(T.binormals[0]).multiplyScalar(ve.y),C.copy(x[0]).add(M).add(S),we(C.x,C.y,C.z)):we(ve.x,ve.y,0)}for(let U=1;U<=h;U++)for(let ve=0;ve<H;ve++){let le=f?N(w[ve],ce[ve],Y):w[ve];_?(M.copy(T.normals[U]).multiplyScalar(le.x),S.copy(T.binormals[U]).multiplyScalar(le.y),C.copy(x[U]).add(M).add(S),we(C.x,C.y,C.z)):we(le.x,le.y,u/h*U)}for(let U=g-1;U>=0;U--){let ve=U/g,le=d*Math.cos(ve*Math.PI/2),_e=m*Math.sin(ve*Math.PI/2)+v;for(let ue=0,Ge=R.length;ue<Ge;ue++){let Le=N(R[ue],W[ue],_e);we(Le.x,Le.y,u+le)}for(let ue=0,Ge=L.length;ue<Ge;ue++){let Le=L[ue];j=$[ue];for(let P=0,A=Le.length;P<A;P++){let ee=N(Le[P],j[P],_e);_?we(ee.x,ee.y+x[h-1].y,x[h-1].x+le):we(ee.x,ee.y,u+le)}}}te(),ae();function te(){let U=i.length/3;if(f){let ve=0,le=H*ve;for(let _e=0;_e<V;_e++){let ue=F[_e];He(ue[2]+le,ue[1]+le,ue[0]+le)}ve=h+g*2,le=H*ve;for(let _e=0;_e<V;_e++){let ue=F[_e];He(ue[0]+le,ue[1]+le,ue[2]+le)}}else{for(let ve=0;ve<V;ve++){let le=F[ve];He(le[2],le[1],le[0])}for(let ve=0;ve<V;ve++){let le=F[ve];He(le[0]+H*h,le[1]+H*h,le[2]+H*h)}}n.addGroup(U,i.length/3-U,0)}function ae(){let U=i.length/3,ve=0;he(R,ve),ve+=R.length;for(let le=0,_e=L.length;le<_e;le++){let ue=L[le];he(ue,ve),ve+=ue.length}n.addGroup(U,i.length/3-U,1)}function he(U,ve){let le=U.length;for(;--le>=0;){let _e=le,ue=le-1;ue<0&&(ue=U.length-1);for(let Ge=0,Le=h+g*2;Ge<Le;Ge++){let P=H*Ge,A=H*(Ge+1),ee=ve+_e+P,me=ve+ue+P,ye=ve+ue+A,xe=ve+_e+A;Je(ee,me,ye,xe)}}}function we(U,ve,le){c.push(U),c.push(ve),c.push(le)}function He(U,ve,le){pe(U),pe(ve),pe(le);let _e=i.length/3,ue=y.generateTopUV(n,i,_e-3,_e-2,_e-1);ne(ue[0]),ne(ue[1]),ne(ue[2])}function Je(U,ve,le,_e){pe(U),pe(ve),pe(_e),pe(ve),pe(le),pe(_e);let ue=i.length/3,Ge=y.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);ne(Ge[0]),ne(Ge[1]),ne(Ge[3]),ne(Ge[1]),ne(Ge[2]),ne(Ge[3])}function pe(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function ne(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return c_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new bl[i.type]().fromJSON(i)),new s(n,e.options)}},a_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new be(r,o),new be(a,c),new be(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-u),new be(f,1-m),new be(v,1-p)]:[new be(a,1-c),new be(h,1-u),new be(d,1-m),new be(g,1-p)]}};function c_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ki=class s extends Sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pa=class s extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,m=new be;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let y=p+g,x=y,_=y+n+1,T=y+n+2,S=y+1;a.push(x,_,S),a.push(_,T,S)}}this.setIndex(a),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ci=class s extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let S=T/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(S+_,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=h[p][y+1],_=h[p][y],T=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(x,_,S),(p!==n-1||c<Math.PI)&&d.push(_,T,S)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sr=class s extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let v=m/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var La=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hi=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends Hi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var st=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $o(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function l_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function h_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ld(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends Gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,a=2*t-n;break;case ta:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bs:o=e,c=2*n-t;break;case ta:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+y*o[l+T]+x*o[c+T]+_*o[u+T];return r}},Ia=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Rl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&l_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[f+m]||v!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=cs;var Vi=class extends Zn{};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=js;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Zn{};Na.prototype.ValueTypeName="color";var Ti=class extends Zn{};Ti.prototype.ValueTypeName="number";var Cl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},li=class extends Zn{InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=cs;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Zn{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=js;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Zn{};Ai.prototype.ValueTypeName="vector";var rr=class{constructor(e,t=-1,n,i=Vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(f_(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=h_(c);c=Uf(c,1,h),l=Uf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ti(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,v){if(d.length!==0){let g=[],p=[];ld(d,g,p,m),g.length!==0&&v.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(let v in d){let g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){let x=f[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Ti(".morphTargetInfluence["+v+"]",g,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Ai,d+".position",f,"pos",i),n(li,d+".quaternion",f,"rot",i),n(Ai,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function u_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return Na;case"quaternion":return li;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function f_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=u_(s.type);if(s.times===void 0){let t=[],n=[];ld(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Pl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},d_=new Pl,Ri=class{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Ll=class extends Error{constructor(e,t){super(e),this.response=t}},Jr=class extends Ri{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:i});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=yi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0,v=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let S=0,M=h.length;S<M;S++){let C=h[S];C.onProgress&&C.onProgress(T)}p.enqueue(_),y()}})}}});return new Response(g)}else throw new Ll(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{zi.add(e,l);let h=yi[e];delete yi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=yi[e];if(h===void 0)throw this.manager.itemError(e),l;delete yi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Il=class extends Ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=zr("img");function c(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var or=class extends Ri{constructor(e){super(e)}load(e,t,n,i){let r=new ln,o=new Il(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ar=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Da=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qc=new ot,zf=new D,Ff=new D,$r=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nl=class extends $r{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},cr=class extends ar{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Of=new ot,Tr=new D,Yc=new D,Dl=class extends $r{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Yc.copy(n.position),Yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yc),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},Ua=class extends ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ul=class extends $r{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var za=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}};var zl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;en.multiplyQuaternionsFlat(e,o,e,t,e,n),en.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Kl="\\[\\]\\.:\\/",p_=new RegExp("["+Kl+"]","g"),jl="[^"+Kl+"]",m_="[^"+Kl.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",jl),x_=/(WCOD+)?/.source.replace("WCOD",m_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),__=new RegExp("^"+g_+x_+v_+y_+"$"),M_=["material","materials","bones","map"],Fl=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(e){let t=__.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);M_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Fl;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ol=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case xm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Vl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===gm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ka){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Bs,i.endingEnd=Bs):(e?i.endingStart=this.zeroSlopeAtStart?Bs:Os:i.endingStart=ta,t?i.endingEnd=this.zeroSlopeAtEnd?Bs:Os:i.endingEnd=ta)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},b_=new Float32Array(1),Fa=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new zl(Ot.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ia(new Float32Array(2),new Float32Array(2),1,b_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?rr.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Vl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Ol(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?rr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var so=Ep(pd());var pt=(s,e,t)=>s<e?e:s>t?t:s,mt=(s,e,t)=>s+(e-s)*t,md=s=>s*s*(3-2*s),ni=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function gn(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var th=12345,_t=()=>(th=th*1664525+1013904223>>>0,th/4294967296),pn=s=>s[_t()*s.length|0];function ds(s,e,t,n,i,r,o){let a=i-t,c=r-n,l=a*a+c*c||1e-9,h=((s-t)*a+(e-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=t+a*h,o.z=n+c*h,o.t=h,o}function gd(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let o=t[i][0],a=t[i][1],c=t[r][0],l=t[r][1];a>e!=l>e&&s<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}var xd=`
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
      }`,vd=`
          // staggered stone pattern: returns 0 in the joints, 1 on the stone; id = per-stone random
          float hdSetts(vec2 p, vec2 size, float joint, float aa, out float id){
            vec2 q = p / size; q.x += 0.5 * floor(q.y);
            vec2 c = floor(q); id = h21(c);
            vec2 f = fract(q); vec2 e = min(f, 1.0 - f) * size;
            return smoothstep(joint - aa, joint + aa, min(e.x, e.y));
          }`,nh=`{
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
        }`,yd=`
          float hdWave(vec2 p){
            float t = uTime;
            return vnoise(p * vec2(0.35, 0.9) + vec2(t * 0.55, t * 0.12)) * 0.6
                 + vnoise(p * vec2(1.3, 2.4) + vec2(-t * 0.8, t * 0.35)) * 0.3
                 + vnoise(p * 5.5 + vec2(t * 1.3, -t * 0.9)) * 0.1;
          }`,ih=`{
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
        }`,_d=`varying vec3 vF; varying vec4 vD;
          float hdBox(vec2 p, vec2 lo, vec2 hi, vec2 aa){
            vec2 a = smoothstep(lo - aa, lo + aa, p), b = 1.0 - smoothstep(hi - aa, hi + aa, p);
            return a.x * a.y * b.x * b.y;
          }
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,sh=`{
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
        }`,Md=`{
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
        }`,bd=`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
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
      }`;var kt={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new Pt(0,0,1,0)},uFar:{value:null},uWorld:{value:new be(1,1)},uSun:{value:new D(0,1,0)}},ui=class{constructor(e){this.cell=e,this.m=new Map,this.stamp=0}add(e,t,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(t,i)/a),l=Math.floor(Math.max(t,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let m=f*8192+d,v=this.m.get(m);v||this.m.set(m,v=[]),v.push(e),o&&o.add(m)}}query(e,t,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((e-n)/r),c=Math.floor((e+n)/r),l=Math.floor((t-n)/r),h=Math.floor((t+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let m=0;m<d.length;m++){let v=d[m];v._st!==o&&(v._st=o,i.push(v))}}return i}removeTag(e,t){for(let n of t){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==e);r.length?this.m.set(n,r):this.m.delete(n)}}};function hi(s,e="",t="",n=""){s.uniforms.uNight=kt.uNight,s.uniforms.uTime=kt.uTime,s.uniforms.uLamp=kt.uLamp,s.uniforms.uLampRect=kt.uLampRect,s.uniforms.uFar=kt.uFar,s.uniforms.uWorld=kt.uWorld,s.uniforms.uSun=kt.uSun,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      ${xd}
      ${t}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var wd=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],Sd=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],Ed=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],Td=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],Ad=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],O_={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8,clad:9},B_=[[2334.6,1209.5,19]],io={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},fr=new Oe;function Rd(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Int16Array(t.buffer)}function Cd(s,e,t,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>e-1.001?e-1.001:o,a=a<0?0:a>t-1.001?t-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*e+c,d=s[f],m=s[f+1],v=s[f+e],g=s[f+e+1];return h+u<=1?d+(m-d)*h+(v-d)*u:g+(v-g)*(1-h)+(m-g)*(1-u)}var Mn=class{constructor(e,t,n={}){this.d=e,this.base=t,this.mobile=!!n.mobile;let i=e.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=Rd(e.hf),a=Rd(e.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,e.hf=e.hc=null,kt.uWorld.value.set(this.W,this.H),this.group=new Dt,this.colliders=new ui(8),this.decks=new ui(16),this.names=new ui(24),this.edgeGrid=new ui(24),this.pedGrid=new ui(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:e.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?768:1024,this.fountains=[],this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(e,t){let n=e-this.fx,i=t-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?Cd(this.hf,this.fn,this.fn,this.fs,n,i):Cd(this.hc,this.cnx,this.cnz,this.cs,e,t)}surfaceY(e,t,n=1e9){let i=this.hAt(e,t),r=this.decks.query(e,t,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=ds(e,t,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(e-c.x,t-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(e,t,n){return this.surfaceY(e,t,n)>this.hAt(e,t)+.5}streetAt(e,t){let n=this.names.query(e,t,30,this._tmp),i=null,r=30;for(let o of n){let a=ds(e,t,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(e-a.x,t-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(e){let t=new Image;await new Promise(o=>{t.onload=o,t.onerror=o,t.src=this.base+"far.jpg"}),this.farImg=t;let n=new ln(t);n.colorSpace=Ct,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,kt.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new ti(i);return r.colorSpace=En,r.minFilter=Qt,r.generateMipmaps=!1,r.flipY=!1,kt.uLamp.value=r,e&&e(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),e&&e(.5),this.buildRoadGraph(),this.buildPedGraph(),e&&e(.8),this.buildPylon(),this.buildLod(),e&&e(1),this}indexLines(){let e=this.T,t=()=>this.tiles.map(()=>[]);this.ix={road:t(),foot:t(),cross:t(),steps:t(),tram:t(),rail:t()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/e));f<=Math.min(this.ntz-1,Math.floor(u/e));f++)for(let d=Math.max(0,Math.floor(c/e));d<=Math.min(this.ntx-1,Math.floor(h/e));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){this.farMat=new st({color:16777215,side:Bt}),this.farMat.onBeforeCompile=i=>hi(i,"","",`{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`),this.farMat.customProgramCacheKey=()=>"terrFar";let e=this.Rn;if(this.groundHead=vd,this.groundBody=nh.replace("texture2D(uGMask, vWP.xz / uWorld).rgb","texture2D(map, vMapUv).rgb").replace("diffuseColor.rgb = col;",`vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(e*.55).toFixed(1)}, ${(e*.95).toFixed(1)}, dist));`),this.groundBody===nh)throw new Error("ground shader patch failed");this.wallMat=new st({vertexColors:!0,side:Bt});let n=sh.replace("bool old = kid < 0.5,","bool panel = kid > 5.5 && kid < 6.5; bool clad = kid > 8.5; bool old = kid < 0.5 || (kid > 6.5 && kid < 8.5),").replace("float gType = isGround * (old ? 1.0 : 0.0);","float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);").replace("} else if (util) {",`} else if (panel) {
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
          } else if (util) {`);if(n.length<sh.length+1700)throw new Error("facade shader patch failed");this.wallMat.onBeforeCompile=i=>hi(i,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",_d,n),this.roofMat=new st({vertexColors:!0,side:Bt,flatShading:!0}),this.roofMat.onBeforeCompile=i=>hi(i,"","",Md),this.stoneMat=new st({vertexColors:!0,side:Bt,flatShading:!0}),this.stoneMat.onBeforeCompile=i=>hi(i,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new qt(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new ki(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new qt(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new ci(.28,6,4),this.headGeo.translate(0,4.7,0);for(let i of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])i.userData.shared=!0;this.trunkMat=new st({color:4864040}),this.crownMat=new st({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=i=>hi(i,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new st({color:2895408}),this.lampHeadMat=new nn({color:16767392}),this.gateMat=new st({color:14209212})}tdist(e,t,n){let i=Math.max(e.x0-t,0,t-(e.x0+this.T)),r=Math.max(e.z0-n,0,n-(e.z0+this.T));return Math.hypot(i,r)}fetchTile(e){return e.state=1,e.has?fetch(this.base+"t/"+e.i+"_"+e.j+".json").then(t=>t.ok?t.json():io).catch(()=>io).then(t=>{e.state===1&&(e.data=t,e.state=2)}):(e.data=io,e.state=2,Promise.resolve())}unloadTile(e){this.genTile===e&&(this.gen=null,this.genTile=null);for(let t of e.objs)this.group.remove(t),t.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});e.objs.length=0,this.colliders.removeTag(e,e.keys),e.keys.clear(),this.gates=this.gates.filter(t=>t.tile!==e),this.fountains=this.fountains.filter(t=>t.tile!==e),e.data=null,e.state=0,e.lampPts=[],e.lod&&(e.lod.visible=!0),this.dropTex(e),this.lampDirty=!0}dropTex(e){e.tex&&(e.tex.dispose(),e.tex=null,e.cv=null,e.nearMat&&(e.nearMat.dispose(),e.nearMat=null),e.terr&&(e.terr.material=this.farMat))}runGen(e){let t=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-t>e)););}update(e,t,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,e,t);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(e-this.lampC[0],t-this.lampC[1])>190)&&this.paintLamps(e,t)}async prime(e,t){let n=this.tiles.filter(i=>this.tdist(i,e,t)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,e,t)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,e,t)<this.Rn&&this.paintTile(i);this.paintLamps(e,t)}makeTerrain(e){let t=e.fine?this.fs:this.cs,n=Math.round(this.T/t)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let m=0;m<n;m++)for(let v=0;v<n;v++){let g=m*n+v,p=e.x0+v*t,y=e.z0+m*t;r[g*3]=p,r[g*3+1]=this.hAt(p,y),r[g*3+2]=y;let x=this.hAt(p-t,y)-this.hAt(p+t,y),_=this.hAt(p,y-t)-this.hAt(p,y+t),T=Math.hypot(x,2*t,_);o[g*3]=x/T,o[g*3+1]=2*t/T,o[g*3+2]=_/T,a[g*2]=v*t/this.T,a[g*2+1]=m*t/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let m=0;m<n-1;m++)for(let v=0;v<n-1;v++){let g=m*n+v,p=g+1,y=g+n,x=y+1;c[l++]=g,c[l++]=y,c[l++]=p,c[l++]=p,c[l++]=y,c[l++]=x}let h=n*n,u=m=>{let v=h;for(let g=0;g<n;g++){let p=m(g);if(r[h*3]=r[p*3],r[h*3+1]=r[p*3+1]-5,r[h*3+2]=r[p*3+2],o[h*3]=o[p*3],o[h*3+1]=o[p*3+1],o[h*3+2]=o[p*3+2],a[h*2]=a[p*2],a[h*2+1]=a[p*2+1],g){let y=m(g-1),x=v+g-1,_=v+g;c[l++]=y,c[l++]=x,c[l++]=p,c[l++]=p,c[l++]=x,c[l++]=_}h++}};u(m=>m),u(m=>(n-1)*n+m),u(m=>m*n),u(m=>m*n+n-1);let f=new At;f.setAttribute("position",new Lt(r,3)),f.setAttribute("normal",new Lt(o,3)),f.setAttribute("uv",new Lt(a,2)),f.setIndex(new Lt(c,1)),f.computeBoundingSphere();let d=new ze(f,e.nearMat||this.farMat);d.receiveShadow=!0,e.terr=d,this.group.add(d)}buildWater(){let e=new ei(this.W+3e3,this.H+3e3,1,1);e.rotateX(-Math.PI/2),e.translate(this.W/2,this.water,this.H/2);let t=new st({color:16777215}),n=ih.replace("vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)","vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)").replace("float fres = 0.04 + 0.96 *","float fres = 0.12 + 0.88 *");if(n===ih)throw new Error("water shader patch failed");t.onBeforeCompile=r=>hi(r,"",yd,n),this.waterMat=t;let i=new ze(e,t);i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i)}paintTile(e){let n=this.T,i=e.data||io,r=document.createElement("canvas");r.width=r.height=384;let o=r.getContext("2d"),a=384/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=d=>{o.beginPath();for(let m=0;m<d.length;m++){let v=d[m][0]/10,g=d[m][1]/10;m?o.lineTo(v,g):o.moveTo(v,g)}},l=d=>{o.beginPath();for(let m of d){for(let v=0;v<m.length;v++){let g=m[v][0]/10+e.x0,p=m[v][1]/10+e.z0;v?o.lineTo(g,p):o.moveTo(g,p)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let d of i.green)l(d),o.fill("evenodd");o.fillStyle="#b0a389";for(let d of i.parea)l(d),o.fill("evenodd");o.fillStyle="#26323a";for(let d of i.water)l(d),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(d=>!d.b);o.strokeStyle="#a39a8a";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+3.6,c(d.p),o.stroke());o.strokeStyle="#6f685e";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+.6,c(d.p),o.stroke());o.strokeStyle="#a69c86";for(let d of this.ix.foot[e.k])o.lineWidth=d.sw?2.2:2.6,c(d.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let d of this.ix.steps[e.k])c(d),o.stroke();o.strokeStyle="#b5a88e";for(let d of u)d.c===5&&(o.lineWidth=d.w,c(d.p),o.stroke());o.lineCap="butt";for(let d of this.ix.rail[e.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(d),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(d),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(d=>d.c<=4).sort((d,m)=>d.c-m.c);for(let d of f)o.strokeStyle=d.s?"#615850":d.pk?"#46464a":"#3a3b40",o.lineWidth=d.w,c(d.p),o.stroke();o.lineCap="butt";for(let d of f)d.c<2||d.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,d.o?d.w>7&&(o.setLineDash([3,6]),c(d.p),o.stroke()):(o.setLineDash(d.c>=4?[]:[3,6]),c(d.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let d of this.ix.tram[e.k])d.b||(c(d.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let d of this.ix.tram[e.k])if(!d.b)for(let m of[-.72,.72]){o.beginPath();let v=d.p;for(let g=0;g<v.length;g++){let p=v[Math.max(0,g-1)],y=v[Math.min(v.length-1,g+1)],x=y[0]-p[0],_=y[1]-p[1],T=Math.hypot(x,_)||1,S=v[g][0]/10-_/T*m,M=v[g][1]/10+x/T*m;g?o.lineTo(S,M):o.moveTo(S,M)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let d of this.ix.cross[e.k])c(d),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let d of i.bld)(!d.m||d.m<1)&&(l([d.o]),o.fill());e.cv=r,this.paintMask(e)}paintMask(e){let t=this.texRes,n=this.T,i=e.data||io,r=document.createElement("canvas");r.width=r.height=t;let o=r.getContext("2d",{alpha:!1}),a=t/n;o.setTransform(a,0,0,a,-e.x0*a,-e.z0*a);let c=m=>{o.beginPath();for(let v=0;v<m.length;v++){let g=m[v][0]/10,p=m[v][1]/10;v?o.lineTo(g,p):o.moveTo(g,p)}},l=m=>{o.beginPath();for(let v of m){for(let g=0;g<v.length;g++){let p=v[g][0]/10+e.x0,y=v[g][1]/10+e.z0;g?o.lineTo(p,y):o.moveTo(p,y)}o.closePath()}};o.fillStyle="#0f0",o.fillRect(e.x0,e.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#000",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#0f0";for(let m of i.green)l(m),o.fill("evenodd");o.fillStyle="#00f";for(let m of i.parea)l(m),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[e.k].filter(m=>!m.b);o.strokeStyle="#000";for(let m of u)m.c>=1&&m.c<=4&&(o.lineWidth=m.w+3.6,c(m.p),o.stroke());for(let m of this.ix.foot[e.k])o.lineWidth=m.sw?2.2:2.6,c(m.p),o.stroke();o.lineWidth=3;for(let m of this.ix.steps[e.k])c(m),o.stroke();o.lineWidth=4.2;for(let m of this.ix.rail[e.k])c(m),o.stroke();o.strokeStyle="#00f";for(let m of u)m.c===5&&(o.lineWidth=m.w,c(m.p),o.stroke());for(let m of u.filter(v=>v.c<=4).sort((v,g)=>v.c-g.c)){let v=m.c===0&&(m.s||m.nv);o.strokeStyle=v?"#00f":m.s?"#f0f":"#f00",o.lineWidth=m.w,c(m.p),o.stroke()}let f=new ti(r);f.colorSpace=En,f.anisotropy=4,f.flipY=!1,f.minFilter=Xn,f.generateMipmaps=!0,e.tex=f;let d=new st({map:f,side:Bt});d.onBeforeCompile=m=>hi(m,"",this.groundHead,this.groundBody),d.customProgramCacheKey=()=>"terrNear",e.nearMat=d,e.terr&&(e.terr.material=d),f.onUpdate=()=>{r.width=r.height=1}}drawGround(e,t,n,i){this.farImg&&this.farImg.width&&e.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,t,n)<i&&e.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(e,t){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(e/48)*48-1152/2,a=Math.round(t/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}kt.uLampRect.value.set(o,a,1152,0),kt.uLamp.value.needsUpdate=!0,this.lampC=[e,t],this.lampDirty=!1,this.lampT=40}emitBuilding(e,t,n,i,r,o,a){let c=1e9,l=-1e9;for(let b of n){let w=this.hAt(b[0],b[1]);w<c&&(c=w),w>l&&(l=w)}let h=t.h,u=c+Math.max(h,l-c+2.5),f=!a&&t.g&&h>6&&!(t.m>.5),d=f?c+4.3:t.m>.5?c+t.m:c-3,m=fr;t.c?m.set(t.c):t.k==="modern"?m.set(Sd[r*Sd.length|0]):t.k==="util"?m.set("#a8a296"):t.k==="church"?m.set("#eee4cc"):t.k==="house"?m.set(Ed[r*Ed.length|0]):t.k==="block"?m.set(Td[r*Td.length|0]):t.k==="panel"?m.set("#d9d2c0"):m.set(wd[r*wd.length|0]);let v=m.r,g=m.g,p=m.b,y=t.l||Math.max(1,Math.round(h/(t.k==="panel"?2.9:3.4))),x=t.t?7.5:pt(h/Math.max(1,y),2.7,5.5),_=O_[t.k]??0,T=t.k==="modern"?2.6:t.k==="church"?5:t.k==="panel"?3:t.k==="house"?3.8:3.4,S=[n,...i];for(let b of S){let w=b.length,L=0;for(let R=0;R<w;R++){let N=b[R],H=b[(R+1)%w];L+=N[0]*H[1]-H[0]*N[1]}let I=(L>0?-1:1)*(b===n?1:-1),F=t.p?.06:0;for(let R=0;R<w;R++){let N=b[R],H=b[(R+1)%w],V=Math.hypot(H[0]-N[0],H[1]-N[1]);if(V<.05)continue;let Z=V<2.2?0:Math.max(1,Math.round(V/T)),W=d-c,$=u-c,j=Z?0:-1,ce=Z||-1,Y=V/Math.max(1,Z),te=(H[1]-N[1])/V,ae=-(H[0]-N[0])/V,he=te*I*F,we=ae*I*F,He=N[0]+he,Je=N[1]+we,pe=H[0]+he,ne=H[1]+we;e.wp.push(He,d,Je,pe,d,ne,pe,u,ne,He,d,Je,pe,u,ne,He,u,Je),e.wf.push(j,W,Y,ce,W,Y,ce,$,Y,j,W,Y,ce,$,Y,j,$,Y);for(let U=0;U<6;U++)e.wn.push(te,0,ae),e.wc.push(v,g,p),e.wd.push(x,_,r,u-c);!a&&!(t.m>=2)&&!f&&t.k!=="roof"&&t.k!=="ruin"&&this.colliders.add({ax:N[0],az:N[1],bx:H[0],bz:H[1],y0:d-50,y1:u,kind:"b",tag:o},N[0],N[1],H[0],H[1],o.keys)}}let M=[],C=[];for(let b of n)M.push(b[0],b[1]);for(let b of i){C.push(M.length/2);for(let w of b)M.push(w[0],w[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let b=(0,so.default)(M,C);for(let w=0;w<b.length;w++)e.rp.push(M[b[w]*2],d,M[b[w]*2+1]),e.rc.push(.35,.33,.3)}if(!a&&t.r>.3&&t.s!=="f")this.pitchedRoof(n,i,M,C,u,t,r,e.rp,e.rc);else{let b=(0,so.default)(M,C);t.rc?m.set(t.rc):m.set(t.k==="modern"?"#5d5f63":t.k==="util"?"#6c6a66":t.k==="panel"?"#6f6c66":"#615c58");let w=.9+r*.2;for(let L=0;L<b.length;L++)e.rp.push(M[b[L]*2],u,M[b[L]*2+1]),e.rc.push(m.r*w,m.g*w,m.b*w);if(t.m>.5)for(let L=b.length-1;L>=0;L--)e.rp.push(M[b[L]*2],d,M[b[L]*2+1]),e.rc.push(m.r*.6,m.g*.6,m.b*.6)}}pitchedRoof(e,t,n,i,r,o,a,c,l){let h=(0,so.default)(n,i),u=[];for(let I=0;I<n.length;I+=2)u.push([n[I],n[I+1]]);let f=[];for(let I of[e,...t])for(let F=0;F<I.length;F++)f.push([I[F],I[(F+1)%I.length]]);let d=0;for(let I=0;I<e.length;I++){let F=e[I],R=e[(I+1)%e.length];d+=F[0]*R[1]-R[0]*F[1]}d=Math.abs(d/2);let m=o.k==="house"||this.mobile,v=m?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),g=[];for(let I=0;I<h.length;I+=3)g.push([h[I],h[I+1],h[I+2]]);let p=new Map,y=(I,F)=>{let R=I<F?I*1e6+F:F*1e6+I,N=p.get(R);return N===void 0&&(N=u.length,u.push([(u[I][0]+u[F][0])/2,(u[I][1]+u[F][1])/2]),p.set(R,N)),N},x=(I,F)=>Math.hypot(u[I][0]-u[F][0],u[I][1]-u[F][1])>v;for(let I=0;I<(m?4:7);I++){let F=!1,R=[];for(let N of g){let H=x(N[0],N[1]),V=x(N[1],N[2]),Z=x(N[2],N[0]),W=H+V+Z;if(!W){R.push(N);continue}F=!0;let[$,j,ce]=N,Y=[H,V,Z];if(W===1){for(;!Y[0];)[$,j,ce]=[j,ce,$],Y=[Y[1],Y[2],Y[0]];let te=y($,j);R.push([$,te,ce],[te,j,ce])}else if(W===2){for(;Y[2];)[$,j,ce]=[j,ce,$],Y=[Y[1],Y[2],Y[0]];let te=y($,j),ae=y(j,ce);R.push([$,te,ae],[te,j,ae],[$,ae,ce])}else{let te=y($,j),ae=y(j,ce),he=y(ce,$);R.push([$,te,he],[te,j,ae],[he,ae,ce],[te,ae,he])}}if(g=R,!F)break}let _=u.map(([I,F])=>{let R=1e9;for(let[N,H]of f){let V=H[0]-N[0],Z=H[1]-N[1],W=V*V+Z*Z||1e-9,$=((I-N[0])*V+(F-N[1])*Z)/W;$=$<0?0:$>1?1:$;let j=N[0]+V*$-I,ce=N[1]+Z*$-F,Y=j*j+ce*ce;Y<R&&(R=Y)}return Math.sqrt(R)}),T=.01;for(let I of _)T=Math.max(T,I);let S=o.r,M;o.s==="d"?M=_.map(I=>S*Math.sqrt(Math.max(0,1-(1-I/T)**2))):o.s==="p"?M=_.map(I=>S*I/T):M=_.map(I=>Math.min(I*.82,S+1.2));let C=fr;o.rc?C.set(o.rc):C.set(Ad[gn(a*1e6|0)*Ad.length|0]);let b=C.r,w=C.g,L=C.b;for(let I of g){let F=.88+gn(I[0]*31+I[1])*.1;for(let R of I)c.push(u[R][0],r+M[R],u[R][1]),l.push(b*F,w*F,L*F)}}meshesFrom(e,t=!0){let n=[];if(e.wp.length){let i=new At;i.setAttribute("position",new it(e.wp,3)),i.setAttribute("normal",new it(e.wn,3)),i.setAttribute("color",new it(e.wc,3)),i.setAttribute("fuv",new it(e.wf,3)),i.setAttribute("fdat",new it(e.wd,4)),i.computeBoundingSphere();let r=new ze(i,this.wallMat);r.castShadow=r.receiveShadow=t,n.push(r)}if(e.rp.length){let i=new At;i.setAttribute("position",new it(e.rp,3)),i.setAttribute("color",new it(e.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new ze(i,this.roofMat);r.castShadow=r.receiveShadow=t,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let e=new Map;this.d.tall.forEach((t,n)=>{let i=t.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=pt(Math.floor(r/this.T),0,this.ntx-1),c=pt(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=e.get(l);h||e.set(l,h=this.newArrays()),this.emitBuilding(h,t,i,[],gn(n*613+7),l,!0)});for(let[t,n]of e){let i=new Dt;for(let r of this.meshesFrom(n,!1))i.add(r);t.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(e){let t=e.data,n=this.T,i=e.x0,r=e.z0,o=new ot,a=new en,c=new D,l=new D,h=new D(0,1,0),u=t.trees.filter(x=>!B_.some(([_,T,S])=>Math.hypot(x[0]/10+i-_,x[1]/10+r-T)<S)),f=u.length;if(f){let x=new _n(this.trunkGeo,this.trunkMat,f),_=new _n(this.crownGeo,this.crownMat,f);for(let S=0;S<f;S++){let M=u[S][0]/10+i,C=u[S][1]/10+r,b=e.k*4099+S,w=.75+gn(b*3+1)*.6,L=this.hAt(M,C);a.setFromAxisAngle(h,gn(b)*6.28),o.compose(l.set(M,L,C),a,c.set(w,w*(.9+gn(b*5)*.3),w)),x.setMatrixAt(S,o),_.setMatrixAt(S,o),fr.setHSL(.22+gn(b*11)*.08,.38+gn(b*17)*.2,.22+gn(b*19)*.1),_.setColorAt(S,fr),this.colliders.add({ax:M-.25,az:C,bx:M+.25,bz:C,y0:L-2,y1:L+3,kind:"t",tag:e,im:[x,_],idx:S,px:M,pz:C,py:L,sc:w},M-.3,C-.3,M+.3,C+.3,e.keys)}x.castShadow=_.castShadow=!this.mobile||f<500,_.receiveShadow=!0,x.frustumCulled=_.frustumCulled=!1;let T=new Dt;T.add(x,_),e.objs.push(T),this.group.add(T)}yield;let d=t.lamps.map(x=>[x[0]/10+i,x[1]/10+r]),m=new ui(20),v=[];for(let x of d)m.add(x,x[0],x[1],x[0],x[1]);for(let x of this.ix.road[e.k]){if(x.b||x.c<1||x.c>5)continue;let _=x.p,T=14+gn(_[0][0]*7+_[0][1])*10,S=1;for(let M=0;M<_.length-1;M++){let C=_[M][0]/10,b=_[M][1]/10,w=_[M+1][0]/10,L=_[M+1][1]/10,I=Math.hypot(w-C,L-b);if(!(I<.01)){for(;T<I;){let F=T/I,R=-(L-b)/I,N=(w-C)/I,H=x.c===5?0:x.w/2+.9,V=C+(w-C)*F+R*H*S,Z=b+(L-b)*F+N*H*S;if(V>=i&&Z>=r&&V<i+n&&Z<r+n&&!m.query(V,Z,13,v).length){let W=[V,Z];d.push(W),m.add(W,V,Z,V,Z)}S=-S,T+=x.c>=3?26:30}T-=I}}}e.lampPts=d;let g=d.filter(([x,_])=>this.surfaceY(x,_)===this.hAt(x,_));if(g.length){let x=new _n(this.postGeo,this.postMat,g.length),_=new _n(this.headGeo,this.lampHeadMat,g.length);g.forEach(([S,M],C)=>{o.makeTranslation(S,this.hAt(S,M),M),x.setMatrixAt(C,o),_.setMatrixAt(C,o),this.colliders.add({ax:S-.1,az:M,bx:S+.1,bz:M,y0:-50,y1:999,kind:"p",tag:e,im:[x,_],idx:C,px:S,pz:M,py:this.hAt(S,M),sc:1},S-.2,M-.2,S+.2,M+.2,e.keys)}),x.frustumCulled=_.frustumCulled=!1;let T=new Dt;T.add(x,_),e.objs.push(T),this.group.add(T)}yield;let p=this.newArrays(),y=this.gates.length;for(let x=0;x<t.bld.length;x++){let _=t.bld[x];if(_.n==="UFO")continue;_.n==="Kostol sv. Al\u017Ebety"&&(_.c="#9cc4e8",_.rc="#5f86b4");let T=_.o.map(M=>[M[0]/10+i,M[1]/10+r]),S=(_.i||[]).map(M=>M.map(C=>[C[0]/10+i,C[1]/10+r]));this.emitBuilding(p,_,T,S,gn(e.k*7919+x*977+13),e,!1),x%24===23&&(yield)}for(let x=y;x<this.gates.length;x++){let _=this.gates[x],T=_.outer;if(_.tile!==e)continue;let S=0,M=0;for(let b of T)S+=b[0],M+=b[1];S/=T.length,M/=T.length;let C=T.slice().sort((b,w)=>Math.hypot(w[0]-S,w[1]-M)-Math.hypot(b[0]-S,b[1]-M)).slice(0,4);for(let b of C){let w=b[0]+(S-b[0])*.18,L=b[1]+(M-b[1])*.18,I=_.bot-_.gmin+3,F=new ze(new Wt(1.8,I,1.8),this.gateMat);F.position.set(w,_.gmin-3+I/2,L),F.castShadow=F.receiveShadow=!0,e.objs.push(F),this.group.add(F),this.colliders.add({ax:w-.9,az:L,bx:w+.9,bz:L,y0:-50,y1:_.bot,kind:"b",tag:e},w-1,L-1,w+1,L+1,e.keys),this.colliders.add({ax:w,az:L-.9,bx:w,bz:L+.9,y0:-50,y1:_.bot,kind:"b",tag:e},w-1,L-1,w+1,L+1,e.keys)}}yield;for(let x of this.meshesFrom(p))e.objs.push(x),this.group.add(x);if(yield,this.buildMarkings(e),yield,this.buildSigns(e),yield,this.buildFountains(e),yield,t.walls.length){let x=[],_=[],T=new Oe,S=(b,w,L,I,F,R,N,H,V)=>{let Z=Math.hypot(L-b,I-w);if(Z<.05)return;let W=-(I-w)/Z*V*.5,$=(L-b)/Z*V*.5,j=[[b+W,w+$],[L+W,I+$],[L-W,I-$],[b-W,w-$]],ce=(ae,he,we,He)=>{x.push(...ae,...he,...we,...ae,...we,...He);for(let Je=0;Je<6;Je++)_.push(T.r,T.g,T.b)},Y=ae=>ae===0||ae===3?F:R,te=ae=>ae===0||ae===3?N:H;for(let ae=0;ae<4;ae++){let he=(ae+1)%4;ce([j[ae][0],Y(ae),j[ae][1]],[j[he][0],Y(he),j[he][1]],[j[he][0],te(he),j[he][1]],[j[ae][0],te(ae),j[ae][1]])}ce([j[0][0],te(0),j[0][1]],[j[1][0],te(1),j[1][1]],[j[2][0],te(2),j[2][1]],[j[3][0],te(3),j[3][1]])};for(let b of t.walls){let w=b.p.map(I=>[I[0]/10+i,I[1]/10+r]),L=b.k==="c"?2.4:b.k==="r"?.8:.45;T.set(b.k==="c"?"#a39a88":b.k==="r"?"#8f887a":"#a8a092");for(let I=0;I<w.length-1;I++){let[F,R]=w[I],[N,H]=w[I+1],V=this.hAt(F,R),Z=this.hAt(N,H),W=Math.min(b.h,b.k==="c"?9:4);if(S(F,R,N,H,V-2,Z-2,V+W,Z+W,L),this.colliders.add({ax:F,az:R,bx:N,bz:H,y0:Math.min(V,Z)-3,y1:Math.max(V,Z)+W,kind:"w",tag:e},F,R,N,H,e.keys),b.k==="c"){let $=Math.hypot(N-F,H-R);for(let j=.6;j<$-.6;j+=2.4){let ce=j/$,Y=Math.min(1,(j+1.2)/$),te=mt(V,Z,ce)+W,ae=mt(V,Z,Y)+W;S(F+(N-F)*ce,R+(H-R)*ce,F+(N-F)*Y,R+(H-R)*Y,te,ae,te+1.1,ae+1.1,L)}}}}let M=new At;M.setAttribute("position",new it(x,3)),M.setAttribute("color",new it(_,3)),M.computeVertexNormals();let C=new ze(M,this.stoneMat);C.castShadow=C.receiveShadow=!0,e.objs.push(C),this.group.add(C)}e.lod&&(e.lod.visible=!1),e.state=4,this.lampDirty=!0}buildMarkings(e){let t=[],n=[],i=this.T,r=e.x0,o=e.z0,a=(M,C)=>M>=r&&C>=o&&M<r+i&&C<o+i,c=(M,C,b,w,L)=>{t.push(...M,...C,...b,...M,...b,...w);for(let I=0;I<6;I++)n.push(L[0],L[1],L[2])},l=M=>M.map(C=>[C[0]/10,C[1]/10]),h=(M,C)=>{let b=[],w=0;for(let L=0;L<M.length-1;L++){let[I,F]=M[L],[R,N]=M[L+1],H=Math.hypot(R-I,N-F);if(H<.01)continue;let V=Math.max(1,Math.ceil(H/C)),Z=(R-I)/H,W=(N-F)/H;for(let $=0;$<V;$++)b.push({x:I+(R-I)*$/V,z:F+(N-F)*$/V,s:w+H*$/V,dx:Z,dz:W});w+=H,L===M.length-2&&b.push({x:R,z:N,s:w,dx:Z,dz:W})}for(let L=1;L<b.length-1;L++){let I=b[L-1],F=b[L+1],R=Math.hypot(F.x-I.x,F.z-I.z)||1;b[L].nx=-(F.z-I.z)/R,b[L].nz=(F.x-I.x)/R}if(b.length){let L=b[0],I=b[b.length-1];L.nx=-L.dz,L.nz=L.dx,I.nx=-I.dz,I.nz=I.dx}return b},u=(M,C,b,w,L,I,F=0,R=0,N=null)=>{for(let H=0;H<M.length-1;H++){let V=M[H],Z=M[H+1],W=(V.s+Z.s)/2;if(!a((V.x+Z.x)/2,(V.z+Z.z)/2)||F&&W%(F+R)>F||N&&N.some(([we,He])=>W>we&&W<He))continue;let $=V.x+V.nx*C,j=V.z+V.nz*C,ce=Z.x+Z.nx*C,Y=Z.z+Z.nz*C,te=b/2,ae=L($,j)+I,he=L(ce,Y)+I;c([$+V.nx*te,ae,j+V.nz*te],[ce+Z.nx*te,he,Y+Z.nz*te],[ce-Z.nx*te,he,Y-Z.nz*te],[$-V.nx*te,ae,j-V.nz*te],w)}},f=(M,C)=>this.hAt(M,C),d=(M,C)=>this.surfaceY(M,C),m=[.78,.78,.74],v=[.36,.37,.39];this.touch||(this.touch=new Map,this.d.road.forEach((M,C)=>{if(!(M.c<1||M.c>4))for(let b of M.p){let w=b[0]*2e5+b[1],L=this.touch.get(w);L?L.includes(C)||L.push(C):this.touch.set(w,[C])}}),this.d.road.forEach((M,C)=>{M._i=C}));for(let M of this.ix.road[e.k]){if(M.c<1||M.c>4||M.s||M.pk||M.nv)continue;let C=!M.o,b=l(M.p),w=h(b,M.c>=3?2:2.5);if(w.length<2)continue;let L=M.b?d:f,I=w[w.length-1].s,F=[],R=0;for(let V=0;V<M.p.length;V++){V&&(R+=Math.hypot(b[V][0]-b[V-1][0],b[V][1]-b[V-1][1]));let Z=(this.touch.get(M.p[V][0]*2e5+M.p[V][1])||[]).filter(j=>j!==M._i);if(!Z.length)continue;let W=Math.max(...Z.map(j=>this.d.road[j].w));(V===0||V===M.p.length-1)&&Z.length===1&&this.d.road[Z[0]].c===M.c&&Math.abs(this.d.road[Z[0]].w-M.w)<.1||F.push([R-W/2-3,R+W/2+3])}if(I<14)continue;let N=M.b?.05:.04,H=M.w>=10;if(M.c>=2||M.c===1&&M.w>=6.5)if(H){C&&(u(w,.14,.12,m,L,N,0,0,F),u(w,-.14,.12,m,L,N,0,0,F));for(let V of C?[M.w/4,-M.w/4]:[M.w/6,-M.w/6])u(w,V,.13,m,L,N,3,6,F)}else(C||M.w>=7)&&u(w,0,.13,m,L,N,3,M.c>=3?4.5:6,F);if(M.c>=3)for(let V of[M.w/2-.3,-(M.w/2-.3)])u(w,V,.12,m,L,N,0,0,F)}let g=[.5,.49,.46],p=[.3,.29,.27];for(let M of this.ix.road[e.k]){if(M.c<1||M.c>4||M.b||M.s||M.pk||M.nv)continue;let C=l(M.p),b=h(C,2.5);if(b.length<2)continue;let w=[],L=0;for(let I=0;I<M.p.length;I++){I&&(L+=Math.hypot(C[I][0]-C[I-1][0],C[I][1]-C[I-1][1]));let F=(this.touch.get(M.p[I][0]*2e5+M.p[I][1])||[]).filter(H=>H!==M._i);if(!F.length||(I===0||I===M.p.length-1)&&F.length===1&&Math.abs(this.d.road[F[0]].w-M.w)<.1)continue;let N=Math.max(...F.map(H=>this.d.road[H].w));w.push([L-N/2-2.2,L+N/2+2.2])}for(let I of[1,-1]){let F=I*(M.w/2-.04),R=I*(M.w/2+.26);for(let N=0;N<b.length-1;N++){let H=b[N],V=b[N+1],Z=(H.s+V.s)/2;if(!a((H.x+V.x)/2,(H.z+V.z)/2)||w.some(([pe,ne])=>Z>pe&&Z<ne))continue;let W=[H.x+H.nx*F,0,H.z+H.nz*F],$=[V.x+V.nx*F,0,V.z+V.nz*F],j=[H.x+H.nx*R,0,H.z+H.nz*R],ce=[V.x+V.nx*R,0,V.z+V.nz*R],Y=this.hAt(W[0],W[2]),te=this.hAt($[0],$[2]),ae=.13,he=[W[0],Y+ae,W[2]],we=[$[0],te+ae,$[2]],He=[j[0],this.hAt(j[0],j[2])+ae,j[2]],Je=[ce[0],this.hAt(ce[0],ce[2])+ae,ce[2]];I>0?(c(he,we,Je,He,g),c([W[0],Y,W[2]],[$[0],te,$[2]],we,he,p)):(c(He,Je,we,he,g),c(he,we,[$[0],te,$[2]],[W[0],Y,W[2]],p))}}}let y=[],x=(M,C)=>{for(let b of this.edgeGrid.query(M,C,8,y)){let w=ds(M,C,b.ax,b.az,b.bx,b.bz,this._c);if(Math.hypot(M-w.x,C-w.z)<b.e.r.w/2-.1)return!0}return!1};for(let M of this.ix.cross[e.k]){let C=h(l(M),.25);for(let b=0;b<C.length-1;b++){let w=C[b];if(w.s%1>.5)continue;let L=C[b+1],I=(w.x+L.x)/2,F=(w.z+L.z)/2;if(!a(I,F)||!x(I,F))continue;let R=1.7,N=f(I,F)+.045;c([w.x+w.nx*R,N,w.z+w.nz*R],[L.x+L.nx*R,N,L.z+L.nz*R],[L.x-L.nx*R,N,L.z-L.nz*R],[w.x-w.nx*R,N,w.z-w.nz*R],[.82,.82,.78])}}for(let M of this.ix.tram[e.k]){let C=h(l(M.p),1.5);if(C.length<2)continue;let b=M.b?d:f;for(let w of[-.5,.5])u(C,w,.075,v,b,.05),u(C,w+.07*Math.sign(w),.05,[.05,.05,.055],b,.048)}for(let M of this.ix.rail[e.k]){let C=h(l(M),3);if(!(C.length<2)){u(C,0,2.7,[.13,.12,.11],f,.03),u(C,0,2.3,[.2,.17,.14],f,.04,.28,.42);for(let b of[-.72,.72])u(C,b,.09,[.42,.42,.44],f,.06)}}if(!t.length)return;this.markMat||(this.markMat=new st({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.markMat.onBeforeCompile=M=>hi(M,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`));let _=new At,T=new Float32Array(t.length);for(let M=1;M<T.length;M+=3)T[M]=1;_.setAttribute("position",new it(t,3)),_.setAttribute("normal",new Lt(T,3)),_.setAttribute("color",new it(n,3)),_.computeBoundingSphere();let S=new ze(_,this.markMat);S.receiveShadow=!0,e.objs.push(S),this.group.add(S)}buildSigns(e){let t=[],n=this.T;for(let d of this.ix.road[e.k]){if(d.c<1||d.c>3||d.b||d.nv||d.pk)continue;let m=d.p.length;for(let v of[0,1]){let g=v?m-1:0,p=d.p[g][0]*2e5+d.p[g][1],y=(this.touch.get(p)||[]).filter(I=>I!==d._i);if(y.length<1||y.length===1&&this.d.road[y[0]].c===d.c||gn(p%99991)<.35)continue;let x=d.p[g],_=d.p[v?m-2:1],T=(_[0]-x[0])/10,S=(_[1]-x[1])/10,M=Math.hypot(T,S);if(M<9)continue;T/=M,S/=M;let C=Math.min(M-1,8.5),b=(v?-1:1)*(d.w/2+1),w=x[0]/10+T*C-S*b,L=x[1]/10+S*C+T*b;w<e.x0||L<e.z0||w>=e.x0+n||L>=e.z0+n||this.hAt(w,L)<this.water+1||t.push([w,L,Math.atan2(-T,-S),Math.floor(gn(p%7919)*4)])}}if(!t.length)return;if(!this.signGeo){this.signGeo=[new qt(.035,.035,2.5,5),new qt(.34,.34,.04,14),new qt(.24,.24,.05,12)],this.signGeo[0].translate(0,1.25,0);for(let d of this.signGeo.slice(1))d.rotateX(Math.PI/2),d.translate(0,2.35,.03);for(let d of this.signGeo)d.userData.shared=!0;this.signMat=[new st({color:9146260}),new st({color:16777215}),new st({color:16777215})]}let i=this.signGeo.map((d,m)=>new _n(d,this.signMat[m],t.length)),r=new ot,o=new en,a=new D(0,1,0),c=new D(1,1,1),l=new D,h=["#c8102e","#1456b8","#c8102e","#f2c230"],u=["#ffffff","#1456b8","#c8102e","#f2c230"];t.forEach(([d,m,v,g],p)=>{let y=this.hAt(d,m);o.setFromAxisAngle(a,v),r.compose(l.set(d,y,m),o,c);for(let x of i)x.setMatrixAt(p,r);i[1].setColorAt(p,fr.set(h[g])),i[2].setColorAt(p,fr.set(u[g])),this.colliders.add({ax:d-.08,az:m,bx:d+.08,bz:m,y0:y-1,y1:y+2.6,kind:"p",tag:e,im:i,idx:p,px:d,pz:m,py:y,sc:1,sign:[v,h[g],u[g]]},d-.2,m-.2,d+.2,m+.2,e.keys)});let f=new Dt;for(let d of i)d.frustumCulled=!1,d.castShadow=!1,f.add(d);e.objs.push(f),this.group.add(f)}buildFountains(e){let t=[],n=[],i=[];for(let r of e.data.water){let o=r[0].map(p=>[p[0]/10+e.x0,p[1]/10+e.z0]);if(o.length>60||o.length<3)continue;let a=0,c=0,l=1e9;for(let[p,y]of o)a+=p,c+=y,l=Math.min(l,this.hAt(p,y));if(a/=o.length,c/=o.length,l<this.water+1.5)continue;let h=l+.32,u=[];for(let p of o)u.push(p[0],p[1]);let f=(0,so.default)(u);for(let p=0;p<f.length;p++)i.push(u[f[p]*2],h,u[f[p]*2+1]);let d=0;for(let p=0;p<o.length;p++){let y=o[p],x=o[(p+1)%o.length];d+=y[0]*x[1]-x[0]*y[1]}let m=d>0?1:-1,v=l+.5,g=.28;for(let p=0;p<o.length;p++){let y=o[p],x=o[(p+1)%o.length],_=Math.hypot(x[0]-y[0],x[1]-y[1]);if(_<.05)continue;let T=(x[1]-y[1])/_*m*g,S=-(x[0]-y[0])/_*m*g,M=[y[0],l-1,y[1]],C=[x[0],l-1,x[1]],b=[y[0],v,y[1]],w=[x[0],v,x[1]],L=[y[0]+T,v,y[1]+S],I=[x[0]+T,v,x[1]+S],F=[y[0]+T,l-1,y[1]+S],R=[x[0]+T,l-1,x[1]+S],N=(H,V,Z,W)=>{t.push(...H,...V,...Z,...H,...Z,...W);for(let $=0;$<6;$++)n.push(.56,.54,.5)};N(M,C,w,b),N(b,w,I,L),N(L,I,R,F),this.colliders.add({ax:y[0],az:y[1],bx:x[0],bz:x[1],y0:l-2,y1:v+.4,kind:"w",tag:e},y[0],y[1],x[0],x[1],e.keys)}this.fountains.push({x:a,z:c,y:h,area:Math.abs(d)/2,tile:e})}if(i.length){let r=new At;r.setAttribute("position",new it(i,3)),r.computeVertexNormals();let o=new ze(r,this.waterMat);o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}if(t.length){let r=new At;r.setAttribute("position",new it(t,3)),r.setAttribute("color",new it(n,3)),r.computeVertexNormals();let o=new ze(r,this.stoneMat);o.castShadow=o.receiveShadow=!0,e.objs.push(o),this.group.add(o)}}buildBridges(){let e=this.d.road.filter(h=>h.b),t=h=>[h[0]/10,h[1]/10],n=h=>h[0]+","+h[1],i=new Set,r=new Map;e.forEach((h,u)=>{for(let f of[h.p[0],h.p[h.p.length-1]]){let d=n(f);r.has(d)||r.set(d,[]),r.get(d).push(u)}});let o=[];e.forEach((h,u)=>{if(i.has(u))return;i.add(u);let f=h.p.slice(),d=!0;for(;d;){d=!1;for(let m of[!1,!0]){let v=n(m?f[0]:f[f.length-1]);for(let g of r.get(v)||[]){if(i.has(g))continue;let p=e[g];if((p.n||"")===(h.n||"")){if(m){if(n(p.p[p.p.length-1])!==v)continue;f=p.p.slice(0,-1).concat(f)}else{if(n(p.p[0])!==v)continue;f=f.concat(p.p.slice(1))}i.add(g),d=!0;break}}if(d)break}}o.push({pts:f.map(t),w:h.w,n:h.n||"",c:h.c,bh:h.bh})});let a=this.d.river.map(h=>h.map(t)),c=(h,u)=>a.some(f=>gd(h,u,f));this.bridges=[];let l=o.filter(h=>h.n==="Most SNP"&&h.pts.length>3).length;for(let h of o){let u=[],f=0;for(let S=0;S<h.pts.length-1;S++){let[M,C]=h.pts[S],[b,w]=h.pts[S+1],L=Math.hypot(b-M,w-C),I=Math.max(1,Math.ceil(L/2));for(let F=0;F<I;F++)u.push({x:M+(b-M)*F/I,z:C+(w-C)*F/I,d:f+L*F/I});f+=L}let d=h.pts[h.pts.length-1];if(u.push({x:d[0],z:d[1],d:f}),f<1)continue;let m=this.hAt(u[0].x,u[0].z),v=this.hAt(d[0],d[1]),g=h.n==="Most SNP",p=h.bh!==void 0?h.bh:g?11.5:7,y=p===0;for(let S of u)S.base=Math.max(mt(m,v,S.d/f),this.water+1.6),S.tgt=!y&&c(S.x,S.z)?this.water+p:S.base,y||(S.tgt=Math.max(S.tgt,this.hAt(S.x,S.z)+(g?.2:0)));let x=g?.055:.075;for(let S of u){let M=S.base;if(!y)for(let C of u)M=Math.max(M,C.tgt-x*Math.abs(S.d-C.d));S.y=M}let _=g?l>1?6.8:10.8:Math.max(2.5,h.w/2+1.2),T={s:u,hw:_,big:g,low:y,n:h.n};for(let S=0;S<u.length-1;S++){let M=u[S],C=u[S+1],b={ax:M.x,az:M.z,bx:C.x,bz:C.z,ya:M.y,yb:C.y,hw:_,br:T};this.decks.add(b,Math.min(M.x,C.x)-_,Math.min(M.z,C.z)-_,Math.max(M.x,C.x)+_,Math.max(M.z,C.z)+_)}this.bridges.push(T)}}buildBridgeMeshes(){let e=[],t=[],n=new Oe,i=(d,m,v,g,p)=>{e.push(...d,...m,...v,...d,...v,...g);for(let y=0;y<6;y++)t.push(p[0],p[1],p[2])};for(let d of this.bridges){let m=d.s;n.set(d.big?"#8d9297":"#b3aea2");let v=[n.r,n.g,n.b],g=[.24,.24,.26];for(let p=0;p<m.length-1;p++){let y=m[p],x=m[p+1],_=Math.hypot(x.x-y.x,x.z-y.z)||1,T=-(x.z-y.z)/_,S=(x.x-y.x)/_,M=d.hw,C=[y.x+T*M,y.y,y.z+S*M],b=[y.x-T*M,y.y,y.z-S*M],w=[x.x+T*M,x.y,x.z+S*M],L=[x.x-T*M,x.y,x.z-S*M],I=d.big?2.2:d.low?.8:2.2,F=W=>[W[0],W[1]-I,W[2]];i(C,w,L,b,g),i(F(C),F(b),F(L),F(w),v.map(W=>W*.6)),i(C,F(C),F(w),w,v),i(b,L,F(L),F(b),v);let R=[y.x+T*.15,y.y+.03,y.z+S*.15],N=[y.x-T*.15,y.y+.03,y.z-S*.15],H=[x.x-T*.15,x.y+.03,x.z-S*.15],V=[x.x+T*.15,x.y+.03,x.z+S*.15];if((d.big||p%4<2&&M>4)&&i(R,V,H,N,[.8,.78,.7]),y.y>this.hAt(y.x,y.z)+.9||x.y>this.hAt(x.x,x.z)+.9){for(let W of[1,-1]){let $=[y.x+T*M*W,y.y,y.z+S*M*W],j=[x.x+T*M*W,x.y,x.z+S*M*W],ce=($[0]+j[0])/2+T*W*.7,Y=($[2]+j[2])/2+S*W*.7,te=!1;for(let he of this.decks.query(ce,Y,1,this._tmp)){if(he.br===d)continue;let we=ds(ce,Y,he.ax,he.az,he.bx,he.bz,this._c);if(Math.hypot(ce-we.x,Y-we.z)<he.hw&&Math.abs(he.ya+(he.yb-he.ya)*we.t-y.y)<1.6){te=!0;break}}if(te)continue;let ae=(he,we)=>[he[0],he[1]+we,he[2]];i($,j,ae(j,1.1),ae($,1.1),[.78,.79,.8]),this.colliders.add({ax:$[0],az:$[2],bx:j[0],bz:j[2],y0:Math.min(y.y,x.y)-1,y1:Math.max(y.y,x.y)+1.4,kind:"r",tag:null},$[0],$[2],j[0],j[2])}if(!d.low&&!d.big&&p%30===15){let W=Math.min(this.hAt(y.x,y.z),this.water)-3;if(y.y-W>4){let j=[y.x-2.2,y.y-I,y.z-2.2],ce=[y.x+2.2,y.y-I,y.z-2.2],Y=[y.x+2.2,y.y-I,y.z+2.2],te=[y.x-2.2,y.y-I,y.z+2.2],ae=he=>[he[0],W,he[2]];i(j,ce,ae(ce),ae(j),v),i(ce,Y,ae(Y),ae(ce),v),i(Y,te,ae(te),ae(Y),v),i(te,j,ae(j),ae(te),v)}}}}}let r=(d,m,v,g)=>{let p=m[0]-d[0],y=m[1]-d[1],x=m[2]-d[2],_=Math.hypot(p,y,x)||1,T=-x,S=p,M=Math.hypot(T,S);M<1e-4?(T=1,S=0):(T/=M,S/=M);let C=y*S/_,b=(x*T-p*S)/_,w=-y*T/_,L=v/2,I=(R,N,H)=>[R[0]+T*L*N+C*L*H,R[1]+b*L*H,R[2]+S*L*N+w*L*H],F=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let R=0;R<4;R++){let N=(R+1)%4;i(I(d,...F[R]),I(m,...F[R]),I(m,...F[N]),I(d,...F[N]),g)}},o=d=>this.bridges.filter(m=>m.n===d).sort((m,v)=>v.s.length-m.s.length)[0],a=d=>{let m=Math.max(...d.s.map(g=>g.y)),v=d.s.filter(g=>g.y>m-.6);return v.length>8?v:null},c=(d,m,v,g)=>{let p=d[Math.max(0,m-1)],y=d[Math.min(d.length-1,m+1)],x=Math.hypot(y.x-p.x,y.z-p.z)||1;return[d[m].x-(y.z-p.z)/x*v,d[m].y+g,d[m].z+(y.x-p.x)/x*v]},l=o("Most Apollo");if(l&&a(l)){let d=a(l),m=d.length-1,v=[.86,.87,.88];for(let g of[-(l.hw+9),l.hw+9]){let p=null;for(let y=0;y<=m;y+=3){let x=y/m,_=c(d,y,g,34*4*x*(1-x));p&&r(p,_,1.8,v),y%9===0&&y>0&&y<m&&r(_,c(d,y,g*.75,.5),.3,v),p=_}p&&r(p,c(d,m,g,0),1.8,v)}}let h=o("Star\xFD most");if(h&&a(h)){let d=a(h),m=d.length-1,v=[.42,.55,.48];for(let g of[-(h.hw+2.5),h.hw+2.5])for(let p=0;p+6<=m;p+=6){let y=c(d,p,g,.4),x=c(d,p+6,g,.4),_=c(d,p+3,g,8.5),T=c(d,Math.max(0,p-3),g,8.5);r(y,_,.5,v),r(_,x,.5,v),p&&r(T,_,.6,v),r(y,x,.5,v)}}if(!e.length)return;let u=new At;u.setAttribute("position",new it(e,3)),u.setAttribute("color",new it(t,3)),u.computeVertexNormals();let f=new ze(u,this.stoneMat);f.castShadow=f.receiveShadow=!0,f.frustumCulled=!1,this.group.add(f)}buildPylon(){let e=this.d.pylon.map(g=>g.map(p=>[p[0]/10,p[1]/10]));if(e.length<2)return;let t=e.map(g=>{let p=0,y=0;for(let x of g)p+=x[0],y+=x[1];return[p/g.length,y/g.length]}),n=new Dt,i=new st({color:9212310}),r=this.water+84,o=(t[0][0]+t[1][0])/2,a=(t[0][1]+t[1][1])/2,c=14,l=[];for(let g of t){let p=this.hAt(g[0],g[1])-2,y=new D(g[0],p,g[1]),x=new D(o+(g[0]-o)*.55,r,a+c),_=new ze(new Wt(3.2,y.distanceTo(x),4.2),i);_.position.copy(y).add(x).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new D(0,1,0),x.clone().sub(y).normalize()),_.castShadow=!0,n.add(_),l.push(x),this.colliders.add({ax:g[0]-2,az:g[1]-2,bx:g[0]+2,bz:g[1]+2,y0:-50,y1:p+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2),this.colliders.add({ax:g[0]+2,az:g[1]-2,bx:g[0]-2,bz:g[1]+2,y0:-50,y1:p+30,kind:"b",tag:null},g[0]-2,g[1]-2,g[0]+2,g[1]+2)}let h=o,u=a+c,f=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([g,p])=>new be(g,p)),d=new ze(new ir(f,40),new st({color:10133670}));d.position.set(h,r+3,u),d.castShadow=!0,n.add(d);let m=new ze(new sr(15.8,.35,6,48),new nn({color:16765578}));m.rotation.x=Math.PI/2,m.position.set(h,r+3.3,u),this.ufoRing=m,n.add(m);let v=this.bridges.find(g=>g.big);if(v){let g=new st({color:13159632}),p=v.s.filter(x=>{let _=Math.hypot(x.x-o,x.z-a);return _>40&&_<240&&x.z<a}),y=[];for(let x=0;x<p.length;x+=Math.max(1,Math.floor(p.length/8)))y.push(p[x]);for(let x of y)for(let _ of[-1,1]){let T=l[_<0?0:1],S=new D(mt(T.x,o,.2),mt(r-12,r-40,Math.hypot(x.x-o,x.z-a)/240),mt(T.z,a,.6)),M=new D(x.x+_*9.5,x.y+.6,x.z),C=new ze(new Wt(.35,S.distanceTo(M),.35),g);C.position.copy(S).add(M).multiplyScalar(.5),C.quaternion.setFromUnitVectors(new D(0,1,0),M.clone().sub(S).normalize()),n.add(C)}}n.traverse(g=>{g.frustumCulled=!1}),this.group.add(n),this.ufoPos=new D(h,r+3,u)}buildRoadGraph(){let e=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),t=new Map,n=l=>l[0]*2e5+l[1];for(let l of e)l.p.forEach((h,u)=>{let f=n(h);t.set(f,(t.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of e){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||t.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(p=>[p[0]/10,p[1]/10]),d=r(l.p[h]),m=r(l.p[u]),v=(p,y,x)=>{let _=[0],T=0;for(let M=1;M<x.length;M++)T+=Math.hypot(x[M][0]-x[M-1][0],x[M][1]-x[M-1][1]),_.push(T);let S={a:p,b:y,p:x,cum:_,L:T,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(S),p.out.push(S),y.inn.push(S),S},g=v(d,m,f);if(!l.o){let p=v(m,d,f.slice().reverse());g.rev=p,p.rev=g}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let m of c){if(Math.abs(m.x-h)>18||Math.abs(m.z-u)>18)continue;let v=Math.hypot(m.x-h,m.z-u);v<d&&m.out.length+m.inn.length>=3&&(d=v,f=m)}f&&!f.sig&&(f.sig={phase:gn(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(e,t,n=40,i=null){let r=this.edgeGrid.query(e,t,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=ds(e,t,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(e-h.x,t-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(e,t,n){if(!e.sig)return!0;let i=(n+e.sig.phase)%30,r=Math.abs(Math.cos(t))>Math.abs(Math.sin(t));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let e=[];for(let c of this.d.foot)e.push(c.p);for(let c of this.d.cross)e.push(c);for(let c of this.d.steps)e.push(c);for(let c of this.d.road)c.c===5&&!c.b&&e.push(c.p);let t=c=>c[0]*2e5+c[1],n=new Map;for(let c of e)c.forEach((l,h)=>n.set(t(l),(n.get(t(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=t(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let v=1;v<c.length;v++)f+=Math.hypot(c[v][0]-c[v-1][0],c[v][1]-c[v-1][1]),d.push(f);if(f<(u?8:.5))return;let m={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(m),h.e.push(m),o.push(m)};for(let c of e){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(t(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let m=c.p[Math.max(0,d-1)],v=c.p[Math.min(c.p.length-1,d+1)],g=v[0]-m[0],p=v[1]-m[1],y=Math.hypot(g,p)||1;return[f[0]/10-p/y*h,f[1]/10+g/y*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(e,t,n){let i=e.cum;t=pt(t,0,e.L);let r=0;for(;r<i.length-2&&i[r+1]<t;)r++;let o=i[r+1]-i[r]||1,a=(t-i[r])/o,c=e.p[r],l=e.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}breakProp(e,t,n){e.dead=!0;let i=new ot().makeScale(0,0,0);for(let c of e.im)c.setMatrixAt(e.idx,i),c.instanceMatrix.needsUpdate=!0;let r=new Dt;if(e.kind==="t"){let c=new Oe(5212732);e.im[1].instanceColor&&e.im[1].getColorAt(e.idx,c);let l=this.crownMat.clone();l.color=c,l.onBeforeCompile=this.crownMat.onBeforeCompile,r.add(new ze(this.trunkGeo,this.trunkMat),new ze(this.crownGeo,l))}else if(e.sign){let c=new Dt;c.add(new ze(this.signGeo[0],this.signMat[0]),new ze(this.signGeo[1],new st({color:e.sign[1]})),new ze(this.signGeo[2],new st({color:e.sign[2]}))),c.rotation.y=e.sign[0],r.add(c)}else r.add(new ze(this.postGeo,this.postMat),new ze(this.headGeo,new nn({color:3815994})));r.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),r.position.set(e.px,e.py,e.pz),r.scale.setScalar(e.sc||1);let o=Math.hypot(t,n)||1,a={obj:r,ang:0,w:1.2+o*.12,axis:new D(n/o,0,-t/o),spin:(Math.random()-.5)*.6,t:0,tile:e.tag,max:e.kind==="t"?1.5:1.52};this.group.add(r),(this.debris||(this.debris=[])).push(a),e.kind==="p"&&e.tag&&!e.sign&&(e.tag.lampPts=e.tag.lampPts.filter(c=>Math.hypot(c[0]-e.px,c[1]-e.pz)>.5),this.lampDirty=!0)}tickDebris(e){let t=this.debris;if(!(!t||!t.length))for(let n=t.length-1;n>=0;n--){let i=t[n];i.t+=e,i.ang<i.max&&(i.w+=5.5*e*(.3+Math.sin(i.ang)),i.ang=Math.min(i.max,i.ang+i.w*e),i.obj.quaternion.setFromAxisAngle(i.axis,i.ang),i.obj.rotateY(i.spin*i.ang)),(i.t>40||i.tile&&i.tile.state!==4)&&(this.group.remove(i.obj),t.splice(n,1))}}collide(e,t,n,i,r,o=0,a=0,c=0){r.broke=null;let l=this.colliders.query(e,t,i+.5,this._tmp),h=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let u=0;u<l.length;u++){let f=l[u];if(f.dead||n>f.y1||n+1.5<f.y0)continue;let d=ds(e,t,f.ax,f.az,f.bx,f.bz,this._c),m=e-d.x,v=t-d.z,g=Math.hypot(m,v);if(g<i&&f.im&&o>(f.kind==="t"?7.5:4.5)){this.breakProp(f,a,c),r.broke=f.kind;continue}if(g<i){g<1e-4&&(m=-(f.bz-f.az),v=f.bx-f.ax);let p=Math.hypot(m,v)||1,y=i-g;e+=m/p*y,t+=v/p*y,r.nx+=m/p,r.nz+=v/p,r.d=Math.max(r.d,y),r.kind=f.kind,h=!0}}if(r.x=e,r.z=t,h){let u=Math.hypot(r.nx,r.nz)||1;r.nx/=u,r.nz/=u}return h}rayHit(e,t,n,i,r){let o=(e+n)/2,a=(t+i)/2,c=Math.hypot(n-e,i-t)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=k_(e,t,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function k_(s,e,t,n,i,r,o,a){let c=t-s,l=n-e,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-e)*h)/f,m=((i-s)*l-(r-e)*c)/f;return d>=0&&d<=1&&m>=0&&m<=1?d:null}var H_=as,Pd=oi,rh=Qn,dr=Qt,ro=La,oo=ra,Ka=be,G_=Pt,V_=At,Ld=it,W_=ze,X_=Bi,q_=er,Y_=Si,Z_=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ao="precision highp float; in vec3 position; in vec2 uv;"+Z_,Id=class{constructor(s){this.r=s;let e=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"));this.type=e?H_:Pd,this.hdr=!!e,this.exposure={value:1},this.samples=4,this.sceneRT=new rh(4,4,{type:this.type,depthBuffer:!0,minFilter:dr,magFilter:dr,samples:this.samples}),this.ldrRT=new rh(4,4,{type:Pd,depthBuffer:!1,minFilter:dr,magFilter:dr}),this.bloom=[];for(let n=0;n<5;n++)this.bloom.push(new rh(4,4,{type:this.type,depthBuffer:!1,minFilter:dr,magFilter:dr}));this.brightMat=new ro({glslVersion:oo,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new Ka(1,1)}},vertexShader:ao,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new ro({glslVersion:oo,uniforms:{tSrc:{value:null},uTexel:{value:new Ka(1,1)}},vertexShader:ao,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new ro({glslVersion:oo,uniforms:{tSrc:{value:null},uTexel:{value:new Ka(1,1)}},vertexShader:ao,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:Y_,transparent:!0}),this.gradeMat=new ro({glslVersion:oo,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:kt.uNight},vertexShader:ao,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
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
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new ro({glslVersion:oo,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new Ka(1,1)},uFxaa:{value:1},uFlash:{value:new G_(0,0,0,0)}},vertexShader:ao,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
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
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let t=new V_;t.setAttribute("position",new Ld([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new Ld([0,0,2,0,0,2],2)),this.quad=new W_(t,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new X_,this.qscene.add(this.quad),this.qcam=new q_}setSize(s,e,t=1,n=4){let i=Math.max(16,Math.round(s*t)),r=Math.max(16,Math.round(e*t));n!==this.samples&&(this.samples=n,this.sceneRT.dispose(),this.sceneRT.samples=n),this.sceneRT.setSize(i,r),this.ldrRT.setSize(i,r);let o=i>>1,a=r>>1;for(let c of this.bloom)c.setSize(Math.max(2,o),Math.max(2,a)),o>>=1,a>>=1;return this.finalMat.uniforms.uTexel.value.set(1/i,1/r),this.finalMat.uniforms.uFxaa.value=n>0?0:1,this.w=i,this.h=r,this.cw=s,this.ch=e,{aspect:s/e}}_pass(s,e){this.quad.material=s,this.r.setRenderTarget(e),this.r.render(this.qscene,this.qcam)}render(s,e){let t=this.r,n=this.bloom;t.setRenderTarget(this.sceneRT),t.render(s,e),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,n[0]);for(let i=1;i<n.length;i++)this.downMat.uniforms.tSrc.value=n[i-1].texture,this.downMat.uniforms.uTexel.value.set(1/n[i-1].width,1/n[i-1].height),this._pass(this.downMat,n[i]);t.autoClear=!1;for(let i=n.length-1;i>0;i--)this.upMat.uniforms.tSrc.value=n[i].texture,this.upMat.uniforms.uTexel.value.set(.5/n[i].width,.5/n[i].height),this._pass(this.upMat,n[i-1]);t.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),t.setRenderTarget(null),t.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,t.render(this.qscene,this.qcam)}};var oe={Mesh:ze,Group:Dt,Scene:Bi,Object3D:Vt,InstancedMesh:_n,Vec2:be,Vec3:D,Vec4:Pt,Mat4:ot,Quat:en,Color:Oe,Box3:tn,Geo:At,F32:it,Attr:Lt,Box:Wt,Cyl:qt,Sphere:ci,Plane:ei,Torus:sr,Lathe:ir,Ico:ki,Lambert:st,Basic:nn,Standard:Hi,Shader:Tn,CanvasTex:ti,DataTex:Gr,Linear:Qt,Nearest:$t,MipLinear:Xn,Additive:Si,DoubleSide:Bt,BackSide:dn,SRGB:Ct};function Nd(s){let{Fe:e,Wt:t,Tt:n,Pn:i,Ln:r,we:o,q:a,Ve:c,vt:l,Kn:h,an:u,Xs:f,Ye:d,Ge:m,Xn:v,ct:g,en:p,fn:y,Zs:x,mh:_,Zn:T,Yn:S,Ks:M,OX:C,OZ:b}=s;var w=(()=>{let L=Math.PI,I=!1,F={};function R(O,J,B){let ie=document.createElement("canvas");ie.width=O,ie.height=J,B(ie.getContext("2d"),O,J);let z=new oe.CanvasTex(ie);return z.colorSpace=oe.SRGB,z.anisotropy=4,z}function N(O,J=1){return O.onBeforeCompile=B=>f(B,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${J.toFixed(2)}; }`),O}function H(O,J){if(!O||O._gl||O.isMeshBasicMaterial)return O;O._gl=1;let B=O.name||"",ie=J!==void 0?J:/window|glass/i.test(B)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(B)?0:/head|tail/i.test(B)?.06:.07;return O.onBeforeCompile=z=>f(z,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${ie.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(ie*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),O}function V(O){let J=[],B=[],ie=[],z=new oe.Color;for(let[re,de,Te,We,Ae,Qe,nt]of O){let xt=new oe.Box(re,de,Te).toNonIndexed();xt.translate(We,Ae,Qe);let ht=xt.attributes.position.array,Et=xt.attributes.normal.array;z.set(nt);for(let Ye=0;Ye<ht.length;Ye+=3)J.push(ht[Ye],ht[Ye+1],ht[Ye+2]),B.push(Et[Ye],Et[Ye+1],Et[Ye+2]),ie.push(z.r,z.g,z.b)}let X=new oe.Geo;return X.setAttribute("position",new oe.F32(J,3)),X.setAttribute("normal",new oe.F32(B,3)),X.setAttribute("color",new oe.F32(ie,3)),X}let Z=null;function W(){if(!Z){Z=[];let O="ABCDEFGHJKLMNPRSTVXYZ",J=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let B=0;B<12;B++){let ie=J[B]+" "+(100+Math.floor(y(B*7+3)*900))+O[Math.floor(y(B*13+1)*O.length)]+O[Math.floor(y(B*17+5)*O.length)],z=R(256,64,(X,re,de)=>{X.fillStyle="#f5f5f0",X.fillRect(0,0,re,de),X.fillStyle="#1c3f9e",X.fillRect(0,0,30,de),X.fillStyle="#fff",X.font="700 15px sans-serif",X.textAlign="center",X.fillText("SK",15,54),X.strokeStyle="#111",X.lineWidth=4,X.strokeRect(2,2,re-4,de-4),X.fillStyle="#111",X.font='700 42px "JetBrains Mono", monospace',X.textBaseline="middle",X.fillText(ie,(re+30)/2,de/2+3)});Z.push(new oe.Lambert({map:z,name:"Plate"}))}}return p(Z)}let $={};function j(O){if($[O])return $[O];let J=R(512,96,(B,ie,z)=>{if(O==="pz"){B.fillStyle="#f2f2f0",B.fillRect(0,0,ie,z);let X=12,re=ie/X;for(let de=0;de<2;de++)for(let Te=0;Te<X;Te++)B.fillStyle=(Te+de)%2?"#0b3fa8":"#d9ea10",B.fillRect(Te*re,8+de*40,re+1,40);B.fillStyle="#0b3fa8",B.fillRect(ie*.31,4,ie*.38,z-8),B.fillStyle="#fff",B.font="900 54px Anton, Impact, sans-serif",B.textAlign="center",B.textBaseline="middle",B.fillText("POL\xCDCIA",ie/2,z/2+4)}else if(O==="pz25")B.fillStyle="#101216",B.fillRect(0,10,ie,z-26),B.fillStyle="#0b4fc4",B.beginPath(),B.moveTo(0,10),B.lineTo(150,10),B.lineTo(96,z-16),B.lineTo(0,z-16),B.fill(),B.beginPath(),B.moveTo(ie,10),B.lineTo(ie-150,10),B.lineTo(ie-96,z-16),B.lineTo(ie,z-16),B.fill(),B.fillStyle="#e0102a",B.fillRect(0,z-14,ie,6),B.fillStyle="#f2f2f0",B.fillRect(0,0,ie,8),B.fillRect(0,z-8,ie,8),B.fillStyle="#fff",B.font="900 50px Anton, Impact, sans-serif",B.textAlign="center",B.textBaseline="middle",B.fillText("POL\xCDCIA",ie/2,z/2-2);else{B.fillStyle="#f4f4f2",B.fillRect(0,0,ie,z);let X=16,re=ie/X;for(let de=0;de<X;de++)B.fillStyle=de%2?"#0d3a8c":"#f4f4f2",B.fillRect(de*re,z-30,re+1,22);B.fillStyle="#0d3a8c",B.fillRect(0,6,ie,5),B.font="900 40px Anton, Impact, sans-serif",B.textAlign="center",B.textBaseline="middle",B.fillText("MESTSK\xC1 POL\xCDCIA",ie/2,38)}});return $[O]=N(new oe.Lambert({map:J}))}function ce(O,J){let B=O.wid,ie=O.len,z=(S.cars[O.kind]||{}).h||1.5,X=j(J),re=new oe.Plane(ie*.86,.36);for(let nt of[1,-1]){let xt=new oe.Mesh(re,X);xt.rotation.y=nt*L/2,xt.position.set(nt*(B/2+.014),z>1.6?.86:.74,-.05),O.obj.add(xt)}let de=new oe.Group,Te=new oe.Mesh(new oe.Box(B*.62,.05,.3),new oe.Lambert({color:1382170})),We=new oe.Box(B*.27,.12,.26),Ae=new oe.Mesh(We,new oe.Basic({color:16719904})),Qe=new oe.Mesh(We,new oe.Basic({color:2113791}));Ae.position.set(B*.16,.085,0),Qe.position.set(-B*.16,.085,0),de.add(Te,Ae,Qe),de.position.set(0,z+.02,-.15),O.obj.add(de),O.bar={red:Ae,blue:Qe,idle:J==="mp"},O.livery=J}function Y(O){let J=O.bar;if(J.idle&&!O.driver){J.red.material.color.setRGB(.25,.3,.9),J.blue.material.color.setRGB(.25,.3,.9);return}let B=Math.sin(a.t*14)>0;J.red.material.color.setRGB(B?6:.3,.1,.1),J.blue.material.color.setRGB(.1,.2,B?.3:6)}let te=null;function ae(O){if(!O||g()>.09)return;te||(te=new oe.Basic({map:R(128,48,(ie,z,X)=>{ie.fillStyle="#ffd21a",ie.fillRect(0,0,z,X),ie.fillStyle="#111",ie.font="900 38px Anton, Impact, sans-serif",ie.textAlign="center",ie.textBaseline="middle",ie.fillText("TAXI",z/2,X/2+3)})}));let J=(S.cars[O.kind]||{}).h||1.5,B=new oe.Mesh(new oe.Box(.46,.16,.16),te);B.position.set(0,J+.07,.1),O.obj.add(B),O.taxi=!0}let he=6.3,we=.5,He=5,Je=he+we,pe=He*he+(He-1)*we,ne={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},U=[["1","HLAVN\xC1 STANICA"],["3","RA\u010CA"],["4","D\xDABRAVKA"],["4","ZLAT\xC9 PIESKY"],["9","KARLOVA VES"],["9","RU\u017DINOV"],["1","PETR\u017DALKA"]];function ve(){let O="#cf1420",J="#17181b",B="#0b0d11",ie="#8f9398",z=he/2,X=[[2.34,.44,he-.1,0,.34,0,J],[2.48,.74,he,0,.93,0,O],[2.42,1.2,he,0,1.9,0,B],[2.48,.4,he,0,2.7,0,O],[2.24,.14,he,0,2.97,0,ie],[1.5,.3,he*.5,0,3.18,.3,"#b4b8bc"]],re=[2.06,2.5,we+.14,0,1.6,-z-we/2,"#131315"],de=Re=>[[2.2,.44,1,0,.34,Re*(z+.45),J],[2.36,.74,1,0,.93,Re*(z+.48),O],[2.3,1.2,.86,0,1.9,Re*(z+.4),B],[2.36,.4,.74,0,2.7,Re*(z+.36),O],[2.1,.14,.6,0,2.97,Re*(z+.28),ie],[.5,.06,.1,0,1.2,Re*(z+.99),"#f2f2f2"]],Te=[[1.5,.3,he*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],We={front:V([...X,re,...de(1)]),mid:V([...X,re]),midP:V([...X,re,...Te]),rear:V([...X,...de(-1)])},Ae=he-.3,Qe=[],nt=[],xt=[];for(let Re of[1,-1]){let E=Re*1.246,k=-Re*Ae/2,q=Re*Ae/2,Q=[[E,1.36,q,0,0],[E,1.36,k,1,0],[E,2.44,k,1,1],[E,1.36,q,0,0],[E,2.44,k,1,1],[E,2.44,q,0,1]];for(let K of Q)Qe.push(K[0],K[1],K[2]),nt.push(K[3],K[4]),xt.push(Re,0,0)}We.win=new oe.Geo,We.win.setAttribute("position",new oe.F32(Qe,3)),We.win.setAttribute("uv",new oe.F32(nt,2)),We.win.setAttribute("normal",new oe.F32(xt,3));let ht=Re=>(E,k,q)=>{E.fillStyle=Re?"#000":"#0c0f13",E.fillRect(0,0,k,q);let Q=4,K=k/Q;for(let Me=0;Me<Q;Me++)if(E.fillStyle=Re?Me===1?"#fff0c8":"#ffe0a0":"#1b2630",E.fillRect(Me*K+5,6,K-10,q-12),Re){E.fillStyle="rgba(40,25,10,0.75)";for(let Ue=0;Ue<2;Ue++){let ke=Me*K+14+y(Me*9+Ue*5)*(K-30);E.beginPath(),E.arc(ke,q*.45,6,0,7),E.fill(),E.fillRect(ke-8,q*.45+5,16,q)}}},Et=H(new oe.Lambert({vertexColors:!0}),.07),Ye=new oe.Lambert({map:R(256,64,ht(!1)),emissiveMap:R(256,64,ht(!0)),emissive:new oe.Color(0,0,0)});ne.geo=We,ne.mBody=Et,ne.mWin=Ye,ne.mHead=new oe.Basic({color:16773836}),ne.mTail=new oe.Basic({color:16718352}),ne.gLamp=new oe.Box(.3,.14,.06),ne.gDisp=new oe.Plane(1.7,.3),ne.disp={}}function le(O){let J=O[0]+O[1];return ne.disp[J]||(ne.disp[J]=new oe.Basic({map:R(256,48,(B,ie,z)=>{B.fillStyle="#050505",B.fillRect(0,0,ie,z),B.fillStyle="#ffb020",B.font='700 30px "JetBrains Mono", monospace',B.textBaseline="middle",B.textAlign="left",B.fillText(O[0],8,z/2+2),B.font='700 22px "JetBrains Mono", monospace',B.fillText(O[1],44,z/2+2)})})),ne.disp[J]}function _e(){let O=z=>z[0]*1e5+z[1],J=new Map;for(let z of e.d.tram){if(z.p.length<2)continue;let X=z.p.map(Te=>[Te[0]/10,Te[1]/10]),re=0;for(let Te=1;Te<X.length;Te++)re+=Math.hypot(X[Te][0]-X[Te-1][0],X[Te][1]-X[Te-1][1]);let de={p:X,L:re,k0:O(z.p[0]),k1:O(z.p[z.p.length-1]),next:[],dist:1e9,nin:0};ne.edges.push(de),(J.get(de.k0)||J.set(de.k0,[]).get(de.k0)).push(de)}for(let z of ne.edges){z.next=J.get(z.k1)||[];for(let X of z.next)X.nin++}for(let z of ne.edges)z.next.length||(z.dist=z.L);for(let z=0;z<120;z++)for(let X of ne.edges)for(let re of X.next)re.dist+X.L<X.dist&&(X.dist=re.dist+X.L);let B=e.W,ie=e.H;ne.sources=ne.edges.filter(z=>{if(z.nin||z.dist>1e8)return!1;let[X,re]=z.p[0];return!0}),ne.max=h?6:10,ve(),Ve()}function ue(O){let J=[],B=O,ie=0,z=new Set;for(;B&&ie++<110;){for(let Te=J.length?1:0;Te<B.p.length;Te++)J.push(B.p[Te]);z.add(B);let re=B.next.filter(Te=>Te.dist<1e8);if(!re.length)break;let de=re.filter(Te=>!z.has(Te));B=ie>50||!de.length?re.slice().sort((Te,We)=>Te.dist-We.dist)[0]:p(de)}let X=[0];for(let re=1;re<J.length;re++)X.push(X[re-1]+Math.hypot(J[re][0]-J[re-1][0],J[re][1]-J[re-1][1]));return{p:J,cum:X,L:X[X.length-1]}}function Ge(O,J,B){let ie=O.cum,z=0,X=ie.length-2;for(J=d(J,0,O.L);z<X;){let Ae=z+X+1>>1;ie[Ae]<=J?z=Ae:X=Ae-1}let re=ie[z+1]-ie[z]||1,de=(J-ie[z])/re,Te=O.p[z],We=O.p[z+1];return B.x=Te[0]+(We[0]-Te[0])*de,B.z=Te[1]+(We[1]-Te[1])*de,B.dx=(We[0]-Te[0])/re,B.dz=(We[1]-Te[1])/re,B}function Le(O){if(!ne.sources.length)return null;let J=p(ne.sources);if(ne.list.some(X=>X.src===J&&X.s<pe+30))return null;let B=ue(J);if(B.L<150)return null;let ie=p(U),z={src:J,r:B,s:O||.5,v:O?9:5,secs:[],wait:0,bell:0,obj:new oe.Group,hx:0,hz:0};for(let X=0;X<He;X++){let re=new oe.Group,de=new oe.Mesh(X===0?ne.geo.front:X===He-1?ne.geo.rear:X===1?ne.geo.midP:ne.geo.mid,ne.mBody),Te=new oe.Mesh(ne.geo.win,ne.mWin);if(de.castShadow=!0,de.receiveShadow=!0,re.add(de,Te),X===0){for(let Ae of[-.82,.82]){let Qe=new oe.Mesh(ne.gLamp,ne.mHead);Qe.position.set(Ae,.86,he/2+.985),re.add(Qe)}let We=new oe.Mesh(ne.gDisp,le(ie));We.position.set(0,2.7,he/2+.735),re.add(We)}if(X===He-1)for(let We of[-.82,.82]){let Ae=new oe.Mesh(ne.gLamp,ne.mTail);Ae.position.set(We,.86,-he/2-.985),re.add(Ae)}re.visible=!1,z.obj.add(re),z.secs.push({g:re,x:0,y:0,z:0,h:0,on:!1,len:he})}return t.add(z.obj),ne.list.push(z),z}let P={},A={},ee={},me={};function ye(O){let J=e.W,B=e.H;for(let ie=0;ie<He;ie++){let z=O.s-ie*Je-he/2,X=O.secs[ie];if(z<0||z>O.r.L){X.on=!1,X.g.visible=!1;continue}Ge(O.r,z+2.3,P),Ge(O.r,z-2.3,A);let re=(P.x+A.x)/2,de=(P.z+A.z)/2;if(re<1||de<1||re>J-1||de>B-1){X.on=!1,X.g.visible=!1;continue}let Te=X.on?X.y+1.6:1e9,We=e.surfaceY(P.x,P.z,Te),Ae=e.surfaceY(A.x,A.z,Te);X.x=re,X.z=de,X.y=(We+Ae)/2,X.h=Math.atan2(P.x-A.x,P.z-A.z),X.on=!0,X.g.visible=!0,X.g.position.set(re,X.y+.03,de),X.g.rotation.set(0,0,0),X.g.rotateY(X.h),X.g.rotateX(Math.atan2(Ae-We,4.6))}}function xe(){l._tone(2100,1900,.22,.1,"triangle"),l._tone(2100,1900,.3,.1,"triangle",.2)}function qe(O,J){ne.t-=O,ne.t<=0&&(ne.t=5+g()*7,ne.list.length<ne.max&&Le());let B=!s.pc()&&!J&&a.mode==="play";ne.proxies.length=0;for(let ie=ne.list.length-1;ie>=0;ie--){let z=ne.list[ie];Ge(z.r,z.s,ee);let X=ee.x,re=ee.z,de=ee.dx,Te=ee.dz;Ge(z.r,z.s+16,me);let We=Math.abs(v(Math.atan2(me.dx,me.dz)-Math.atan2(de,Te)));Ge(z.r,z.s-pe*.6,me),We=Math.max(We,Math.abs(v(Math.atan2(me.dx,me.dz)-Math.atan2(de,Te)))*.8);let Ae=m(11.5,4.2,d(We/.6,0,1)),Qe=9+z.v*z.v/4.6,nt=99,xt=!0,ht=!1,Et=(Ye,Re,E,k,q)=>{let Q=Ye-X,K=Re-re,Me=Q*de+K*Te;Me<.5||Me>Qe||Math.abs(Q*Te-K*de)>1.3+E||Me<nt&&(nt=Me,xt=k,ht=q)};if(Math.abs(X-(s.pc()?s.pc().x:o.x))<160&&Math.abs(re-(s.pc()?s.pc().z:o.z))<160){for(let Ye of n)Et(Ye.x,Ye.z,Ye.r,!0,Ye===s.pc());for(let Ye of i)Ye.state!=="down"&&Et(Ye.x,Ye.z,.1,!0,!1);B&&Et(o.x,o.z,.3,!0,!0)}if(z.ghost>0)z.ghost-=O;else for(let Ye of ne.list)if(!(Ye===z||Math.abs(Ye.hx-X)>75||Math.abs(Ye.hz-re)>75))for(let Re=3;Re<Qe+2&&!(Re>nt);Re+=2.5){Ge(z.r,z.s+Re,me);let E=!1;for(let k of Ye.secs){if(!k.on||Math.abs(k.x-me.x)>5||Math.abs(k.z-me.z)>5)continue;let q=Math.sin(k.h)*2.3,Q=Math.cos(k.h)*2.3;for(let K=-1;K<=1;K++)if(Math.hypot(k.x+q*K-me.x,k.z+Q*K-me.z)<1.5){E=!0;break}if(E)break}if(E){nt=Re,xt=!1,ht=!1;break}}if(nt<99?(Ae=Math.min(Ae,Math.sqrt(Math.max(0,2*2.5*(nt-4.5)))),z.v<.6&&(z.wait+=O),xt&&z.wait>5&&(Ae=Math.max(Ae,1.8)),!xt&&z.wait>14+z.s%7&&(z.ghost=9,z.wait=0),ht&&z.bell<=0&&nt<22&&(xe(),z.bell=2.6)):z.wait=Math.max(0,z.wait-O*2),z.bell>0&&(z.bell-=O),z.v=Math.max(0,z.v+d(Ae-z.v,-3.4*O,1.15*O)),z.s+=z.v*O,z.s-pe-6>z.r.L){t.remove(z.obj),ne.list.splice(ie,1);continue}z.hx=X,z.hz=re,z.dx=de,z.dz=Te,ye(z);for(let Ye of z.secs)Ye.on&&ne.proxies.push(Ye)}J||Ne(B)}function Ne(O){let J=[-2.3,0,2.3];for(let B of ne.list){for(let z of n){if(Math.abs(z.x-B.hx)>46||Math.abs(z.z-B.hz)>46)continue;let X=Math.sin(z.h),re=Math.cos(z.h);for(let de of B.secs){if(!de.on||Math.abs(z.y-de.y)>3||Math.abs(z.x-de.x)>9||Math.abs(z.z-de.z)>9)continue;let Te=Math.sin(de.h),We=Math.cos(de.h);for(let Ae of J)for(let Qe of[z.off,-z.off]){let nt=z.x+X*Qe-(de.x+Te*Ae),xt=z.z+re*Qe-(de.z+We*Ae),ht=Math.hypot(nt,xt),Et=1.3+z.r;if(ht>=Et||ht<1e-4)continue;nt/=ht,xt/=ht,z.x+=nt*(Et-ht),z.z+=xt*(Et-ht);let Ye=(z.vx-Te*B.v)*nt+(z.vz-We*B.v)*xt;Ye<0&&(z.vx-=1.35*Ye*nt,z.vz-=1.35*Ye*xt,z.w+=(Qe>0?1:-1)*Ye*.04*(nt*re-xt*X>0?1:-1),-Ye>3.5&&(z.dmg+=-Ye*3,z===s.pc()&&(l.crash(-Ye),_(-Ye*.03),B.hitPl||(B.hitPl=1,x(1,"zr\xE1\u017Eka s elektri\u010Dkou"))))),z.parked&&(z.parked=!1),z.hitT=3}}}let ie=O?[o,...i]:i;for(let z of ie){let X=z===o,re=X?o.x:z.x,de=X?o.z:z.z;if(!(Math.abs(re-B.hx)>46||Math.abs(de-B.hz)>46))for(let Te of B.secs){if(!Te.on||Math.abs(re-Te.x)>6||Math.abs(de-Te.z)>6)continue;let We=Math.sin(Te.h),Ae=Math.cos(Te.h),Qe=re-Te.x,nt=de-Te.z,xt=d(Qe*We+nt*Ae,-he/2-.6,he/2+.6),ht=Te.x+We*xt,Et=Te.z+Ae*xt,Ye=re-ht,Re=de-Et,E=Math.hypot(Ye,Re),k=1.55;E>=k||(E<.001&&(Ye=Ae,Re=-We,E=1),Ye/=E,Re/=E,X?(o.x=ht+Ye*k,o.z=Et+Re*k,B.v>2.5&&T.hurtT<=0&&(a.hp-=B.v*4.5,T.hurtT=1,l.crash(B.v*.6),c.flash("#ff2a2a",.4))):z.state!=="down"&&(B.v>2.2?(z.knock(We*B.v*.6+Ye*2,Ae*B.v*.6+Re*2,B.v>7),l.thud()):(z.p.x=ht+Ye*k,z.p.z=Et+Re*k)))}}}}function Ve(){let O=ne.edges.filter(ht=>Math.hypot(ht.p[0][0]-(554+C),ht.p[0][1]-(713+b))<25&&!ht.nin);if(!O.length)return;let J=O[0],B=J.p[0],ie=J.p[1],z=Math.hypot(ie[0]-B[0],ie[1]-B[1])||1,X=(ie[0]-B[0])/z,re=(ie[1]-B[1])/z,de=B[0]-re*1.8-X*1.5,Te=B[1]+X*1.8-re*1.5,We=e.hAt(B[0]+X*6,B[1]+re*6),Ae=new oe.Group,Qe=N(new oe.Lambert({vertexColors:!0})),nt=new oe.Mesh(V([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),Qe),xt=new oe.Mesh(new oe.Plane(9.9,6.8),new oe.Basic({color:197379}));xt.position.set(0,3.4,-.95),nt.castShadow=nt.receiveShadow=!0,Ae.add(nt,xt),Ae.position.set(de,We-.4,Te),Ae.rotation.y=Math.atan2(X,re),e.group.add(Ae)}let fe={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function ut(){let O=e.d.zone;if(!O)return;let J=atob(O.b),B=new Uint8Array(J.length);for(let ie=0;ie<J.length;ie++)B[ie]=J.charCodeAt(ie);fe.bits=B,fe.N=O.n,fe.x0=O.x,fe.z0=O.z,fe.s=O.s}function ge(O,J){let B=fe.N;if(!B)return!1;let ie=Math.floor((O-fe.x0)/fe.s),z=Math.floor((J-fe.z0)/fe.s);if(ie<0||z<0||ie>=B||z>=B)return!1;let X=z*B+ie;return!!(fe.bits[X>>3]>>7-(X&7)&1)}function Rt(){ut();let O=E=>E[0]*1e5+E[1],J=new Set;for(let E of e.d.road)if(E.c>=1&&E.c<=4&&!E.nv)for(let k of E.p)J.add(O(k));let B=[];for(let E of e.d.road)if(!(E.c!==5||E.p.length<2))for(let k of[0,1]){let q=E.p[k?E.p.length-1:0],Q=E.p[k?E.p.length-2:1];if(!J.has(O(q)))continue;let K=q[0]/10,Me=q[1]/10,Ue=Q[0]/10-K,ke=Q[1]/10-Me,Ze=Math.hypot(Ue,ke);if(Ze<3)continue;Ue/=Ze,ke/=Ze;let et=3;for(;et<Math.min(Ze,16)&&!ge(K+Ue*et,Me+ke*et);)et+=1.5;if(!ge(K+Ue*et,Me+ke*et))continue;let Se=K+Ue*(et+1.2),Be=Me+ke*(et+1.2);B.some(Ke=>Math.hypot(Ke.x-Se,Ke.z-Be)<9)||tt(Se,Be,4.5)||B.push({x:Se,z:Be,dx:Ue,dz:ke,down:0,tgt:0})}if(fe.entries=B,!B.length)return;let ie=R(160,208,(E,k,q)=>{E.fillStyle="#f4f4f2",E.fillRect(0,0,k,q),E.strokeStyle="#111",E.lineWidth=4,E.strokeRect(3,3,k-6,q-6),E.fillStyle="#111",E.font="900 22px Anton, Impact, sans-serif",E.textAlign="center",E.fillText("PE\u0160IA Z\xD3NA",k/2,30),E.fillStyle="#1456b8",E.beginPath(),E.arc(k/2,92,50,0,7),E.fill(),E.fillStyle="#fff",E.beginPath(),E.arc(k/2+4,62,9,0,7),E.fill(),E.strokeStyle="#fff",E.lineWidth=9,E.lineCap="round",E.beginPath(),E.moveTo(k/2+2,76),E.lineTo(k/2-2,104),E.lineTo(k/2-16,130),E.moveTo(k/2-2,104),E.lineTo(k/2+14,128),E.moveTo(k/2+2,82),E.lineTo(k/2+20,96),E.moveTo(k/2+2,82),E.lineTo(k/2-18,92),E.stroke(),E.fillStyle="#111",E.font="700 15px sans-serif",E.fillText("Z\xC1SOBOVANIE",k/2,166),E.font="900 22px sans-serif",E.fillText("6 \u2013 9 h",k/2,192)}),z=N(new oe.Lambert({color:9080208})),X=N(new oe.Lambert({map:ie})),re=B.length,de=new oe.InstancedMesh(new oe.Box(.7,.91,.04),[z,z,z,z,X,z],re),Te=new oe.InstancedMesh(new oe.Cyl(.035,.035,2.9,6),z,re),We=new oe.Mat4,Ae=new oe.Quat,Qe=new oe.Vec3,nt=new oe.Vec3(1,1,1),xt=new oe.Vec3(0,1,0);B.forEach((E,k)=>{let q=E.x-E.dz*3.4-E.dx*.6,Q=E.z+E.dx*3.4-E.dz*.6;e.collide(q,Q,e.hAt(q,Q),.5,F)&&(q=F.x,Q=F.z);let K=e.hAt(q,Q);Ae.setFromAxisAngle(xt,Math.atan2(-E.dx,-E.dz)),We.compose(Qe.set(q,K+2.5,Q),Ae,nt),de.setMatrixAt(k,We),We.compose(Qe.set(q+E.dx*.045,K+1.45,Q+E.dz*.045),Ae,nt),Te.setMatrixAt(k,We),e.colliders.add({ax:q-.06,az:Q,bx:q+.06,bz:Q,y0:K-2,y1:K+3,kind:"p"},q-.2,Q-.2,q+.2,Q+.2),E.y=e.hAt(E.x,E.z)}),de.castShadow=Te.castShadow=!0,e.group.add(de,Te);let ht=new oe.Cyl(.11,.11,.9,10),Et=N(new oe.Lambert({color:13225168})),Ye=new oe.InstancedMesh(ht,Et,re*3),Re=new oe.InstancedMesh(new oe.Cyl(.115,.115,.07,10),new oe.Basic({color:16726815}),re*3);Ye.castShadow=!0,fe.boll=Ye,fe.cap=Re,fe.M=We,fe.P=Qe,fe.Q=new oe.Quat,fe.S=nt,B.forEach((E,k)=>gt(k,0)),e.group.add(Ye,Re)}function gt(O,J){let B=fe.entries[O];for(let ie=0;ie<3;ie++){let z=(ie-1)*1.7,X=B.x-B.dz*z,re=B.z+B.dx*z,de=e.hAt(X,re)-J*.86;fe.M.compose(fe.P.set(X,de+.45,re),fe.Q,fe.S),fe.boll.setMatrixAt(O*3+ie,fe.M),fe.M.compose(fe.P.set(X,de+.86,re),fe.Q,fe.S),fe.cap.setMatrixAt(O*3+ie,fe.M)}fe.boll.instanceMatrix.needsUpdate=!0,fe.cap.instanceMatrix.needsUpdate=!0}function lt(O){let J=s.pc(),B=J?J.x:o.x,ie=J?J.z:o.z;fe.acc=d(fe.acc+(ge(B,ie)?O:-O)*2.5,0,1),fe.acc>=1?fe.on=!0:fe.acc<=0&&(fe.on=!1),w.zoneNow=fe.on;let z=a.tod>=6&&a.tod<9,X=fe.el||(fe.el=document.getElementById("zone"));if(X){let re=s.sandbox?fe.on?"PE\u0160IA Z\xD3NA":"":fe.on?J?z?"PE\u0160IA Z\xD3NA \xB7 z\xE1sobovanie do 9:00 \xB7 max 20 km/h":"PE\u0160IA Z\xD3NA \xB7 aut\xE1m vjazd zak\xE1zan\xFD":"PE\u0160IA Z\xD3NA":"";fe._txt!==re&&(fe._txt=re,X.textContent=re,X.hidden=!re,X.classList.toggle("bad",!!J&&fe.on&&!z))}if(fe.cool>0&&(fe.cool-=O),J&&fe.on&&a.mode==="play"){if(fe.told||(fe.told=!0,c.toast("Pe\u0161ia z\xF3na: aut\xE1 len 6:00\u20139:00 (z\xE1sobovanie), max 20 km/h")),!z&&(fe.fineT+=O,fe.fineT>6)){if(fe.fineT=-22,!s.sandbox){let re=Math.min(50,Math.floor(a.money));a.money-=re,c.toast("Mestsk\xE1 pol\xEDcia: jazda v pe\u0161ej z\xF3ne \xB7 pokuta "+(re?"\u2212"+re+" \u20AC":"50 \u20AC (nem\xE1\u0161 z \u010Doho)"))}l._tone(660,330,.3,.14,"square")}J.speed*3.6>26?(fe.fastT+=O,fe.fastT>1.2&&fe.cool<=0&&(fe.cool=16,fe.fastT=0,x(1,"r\xFDchla jazda v pe\u0161ej z\xF3ne"))):fe.fastT=0}else fe.fineT>0?fe.fineT=0:fe.fineT<0&&(fe.fineT=Math.min(0,fe.fineT+O));if(fe.boll)for(let re=0;re<fe.entries.length;re++){let de=fe.entries[re];de.tgt=J&&Math.abs(J.x-de.x)<11&&Math.abs(J.z-de.z)<11?1:0,de.down!==de.tgt&&(de.down=d(de.down+(de.tgt>de.down?1:-1)*O*2.2,0,1),gt(re,de.down))}}function tt(O,J,B){for(let ie of ne.edges){let z=ie.p;for(let X=0;X<z.length-1;X++){let re=z[X][0],de=z[X][1],Te=z[X+1][0],We=z[X+1][1];if(Math.min(re,Te)-B>O||Math.max(re,Te)+B<O||Math.min(de,We)-B>J||Math.max(de,We)+B<J)continue;let Ae=Te-re,Qe=We-de,nt=d(((O-re)*Ae+(J-de)*Qe)/(Ae*Ae+Qe*Qe||1),0,1);if(Math.hypot(re+Ae*nt-O,de+Qe*nt-J)<B)return!0}}return!1}function Xe(){let O=[],J=new s.SGrid(12),B=[],ie=h?120:200;for(let Re of e.d.road){if(Re.c!==5||O.length>=ie||!ge(Re.p[0][0]/10,Re.p[0][1]/10)&&!ge(Re.p[Re.p.length-1][0]/10,Re.p[Re.p.length-1][1]/10))continue;let E=Re.p.map(q=>[q[0]/10,q[1]/10]),k=Math.floor(E[0][0]*7+E[0][1]*13);for(let q=0;q<E.length-1;q++){let Q=E[q][0],K=E[q][1],Me=E[q+1][0]-Q,Ue=E[q+1][1]-K,ke=Math.hypot(Me,Ue);if(!(ke<5)){Me/=ke,Ue/=ke;for(let Ze=4+y(k+q)*4;Ze<ke-3;Ze+=7.5){let et=y(k*3+q*31+Math.floor(Ze));if(et>.5)continue;let Se=et<.25?1:-1,Be=2.1,Ke=Q+Me*Ze-Ue*Be*Se,ft=K+Ue*Ze+Me*Be*Se;if(Ke<5||ft<5||Ke>e.W-5||ft>e.H-5||!ge(Ke,ft))continue;let Tt=e.hAt(Ke,ft);if(e.surfaceY(Ke,ft)>Tt+.3||Math.abs(e.hAt(Ke+1.5,ft)-Tt)>.25||Math.abs(e.hAt(Ke,ft+1.5)-Tt)>.25||e.collide(Ke,ft,Tt,1.7,F)||fe.entries.some(zt=>Math.hypot(zt.x-Ke,zt.z-ft)<9)||tt(Ke,ft,3.6)||J.query(Ke,ft,4.2,B).some(zt=>Math.hypot(zt.x-Ke,zt.z-ft)<4.2))continue;let kn={x:Ke,y:Tt,z:ft,a:Math.atan2(Me,Ue),k:O.length};J.add(kn,Ke,ft,Ke,ft),O.push(kn)}}}}if(!O.length)return;let z=O.length,X=new oe.Cyl(.06,1.5,.55,8),re=N(new oe.Lambert({color:16777215,flatShading:!0}),.9),de=V([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),Te=new oe.InstancedMesh(X,re,z),We=new oe.InstancedMesh(de,N(new oe.Lambert({vertexColors:!0})),z),Ae=new oe.Mat4,Qe=new oe.Quat,nt=new oe.Vec3,xt=new oe.Vec3(1,1,1),ht=new oe.Vec3(0,1,0),Et=new oe.Color,Ye=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];O.forEach((Re,E)=>{Qe.setFromAxisAngle(ht,Re.a+(y(E*3)-.5)*.5),Ae.compose(nt.set(Re.x,Re.y,Re.z),Qe,xt),We.setMatrixAt(E,Ae),Ae.compose(nt.set(Re.x,Re.y+2.5,Re.z),Qe,xt),Te.setMatrixAt(E,Ae),Te.setColorAt(E,Et.set(Ye[Math.floor(y(Math.floor(Re.x/26)*31+Math.floor(Re.z/26)*17)*Ye.length)])),e.colliders.add({ax:Re.x-.3,az:Re.z,bx:Re.x+.3,bz:Re.z,y0:Re.y-1,y1:Re.y+2.4,kind:"p"},Re.x-.5,Re.z-.5,Re.x+.5,Re.z+.5)}),Te.castShadow=We.castShadow=!0,Te.receiveShadow=!0,e.group.add(Te,We),w.terraceN=z}function dt(){let O=(e.fountains||[]).filter(ie=>ie.area>14);if(!O.length)return;let J=N(new oe.Lambert({color:10130566,flatShading:!0})),B=new oe.Shader({uniforms:{uTime:u.uTime,uNight:u.uNight},transparent:!0,depthWrite:!1,side:oe.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let ie of O){if(ie.noTop){let nt=new oe.Mesh(new oe.Cyl(.5,3.4,4.6,18,1,!0),B);nt.position.set(ie.x,ie.y+2.3,ie.z),e.group.add(nt);continue}let z=ie.area>60,X=z?1.5:1,re=new oe.Group,de=new oe.Mesh(new oe.Cyl(.22*X,.36*X,1.9*X,8),J),Te=new oe.Mesh(new oe.Cyl(.95*X,.28*X,.32*X,10),J),We=new oe.Mesh(new oe.Cyl(.1*X,.2*X,.9*X,6),J),Ae=new oe.Mesh(new oe.Sphere(.2*X,8,6),J),Qe=new oe.Mesh(new oe.Cyl(.9*X,1.05*X,1.95*X,14,1,!0),B);de.position.y=.95*X,Te.position.y=2.05*X,We.position.y=2.6*X,Ae.position.y=3.15*X,Qe.position.y=1.02*X,de.castShadow=Te.castShadow=!0,re.add(de,Te,We,Ae,Qe),re.position.set(ie.x,ie.y-.1,ie.z),e.group.add(re)}}function It(){let O=1031.2+C,J=766+b,B=e.hAt(O,J),ie=Math.atan2(-10.8,-16.2),z=new oe.Group,X="#e3c56d",re="#d9d2bf",de=new oe.Mesh(V([[6.8,31,6.8,0,15.5,0,X],[7.3,.5,7.3,0,9.2,0,re],[7.3,.5,7.3,0,20.4,0,re],[8,.7,8,0,31.2,0,re],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),N(new oe.Lambert({vertexColors:!0}))),Te=N(new oe.Lambert({color:14927213,flatShading:!0})),We=N(new oe.Lambert({color:5084288,flatShading:!0})),Ae=new oe.Lambert({color:14266938,emissive:3812360}),Qe=(Se,Be,Ke)=>{let ft=new oe.Mesh(Se,Be);return ft.position.y=Ke,ft.castShadow=!0,z.add(ft),ft};de.castShadow=de.receiveShadow=!0,z.add(de),Qe(new oe.Cyl(2.9,3.1,5.2,8),Te,34.1),Qe(new oe.Cyl(1.5,3.5,3.6,8),We,38.5),Qe(new oe.Cyl(1.25,1.25,2.2,8),Te,41.4),Qe(new oe.Cyl(.9,1.7,1.6,8),We,43.3),Qe(new oe.Cyl(.05,.8,5.2,8),We,46.7),Qe(new oe.Sphere(.35,8,6),Ae,49.4);let nt=R(128,128,(Se,Be,Ke)=>{Se.fillStyle="#f3efe2",Se.beginPath(),Se.arc(64,64,60,0,7),Se.fill(),Se.strokeStyle="#222",Se.lineWidth=5,Se.stroke();for(let ft=0;ft<12;ft++){let Tt=ft/12*L*2;Se.beginPath(),Se.moveTo(64+Math.sin(Tt)*46,64-Math.cos(Tt)*46),Se.lineTo(64+Math.sin(Tt)*54,64-Math.cos(Tt)*54),Se.stroke()}Se.lineWidth=6,Se.lineCap="round",Se.beginPath(),Se.moveTo(64,64),Se.lineTo(88,50),Se.moveTo(64,64),Se.lineTo(56,22),Se.stroke()}),xt=new oe.Basic({map:nt,transparent:!0});for(let Se=0;Se<4;Se++){let Be=new oe.Mesh(new oe.Plane(3.4,3.4),xt),Ke=Se*L/2;Be.position.set(Math.sin(Ke)*3.43,25.6,Math.cos(Ke)*3.43),Be.rotation.y=Ke,z.add(Be)}z.position.set(O,B-.5,J),z.rotation.y=ie,e.group.add(z);let ht=Math.cos(ie)*3.4,Et=Math.sin(ie)*3.4,Ye=[[O+ht+Et,J-Et+ht],[O+ht-Et,J-Et-ht],[O-ht-Et,J+Et-ht],[O-ht+Et,J+Et+ht]];for(let Se=0;Se<4;Se++){let Be=Ye[Se],Ke=Ye[(Se+1)%4];e.colliders.add({ax:Be[0],az:Be[1],bx:Ke[0],bz:Ke[1],y0:B-50,y1:B+31,kind:"b"},Be[0],Be[1],Ke[0],Ke[1])}let Re=0,E=0,k=!1;for(let[Se,Be]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]].map(Ke=>[Ke[0]+C,Ke[1]+b]))if(ge(Se,Be)&&!e.collide(Se,Be,e.hAt(Se,Be),5.6,F)){Re=Se,E=Be,k=!0;break}if(!k)return;let q=Math.min(e.hAt(Re,E),e.hAt(Re+4,E),e.hAt(Re-4,E),e.hAt(Re,E+4),e.hAt(Re,E-4)),Q=N(new oe.Lambert({color:10130566,flatShading:!0})),K=new oe.Group,Me=new oe.Mesh(new oe.Cyl(4.7,4.9,.85,16),Q),Ue=new oe.Mesh(new oe.Cyl(4.35,4.35,.03,16),e.waterMat||new oe.Lambert({color:2903898})),ke=new oe.Mesh(new oe.Cyl(.5,.75,5.2,8),Q),Ze=new oe.Mesh(new oe.Cyl(.9,.5,.5,8),Q),et=new oe.Mesh(V([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),N(new oe.Lambert({vertexColors:!0})));Me.position.y=.42,Ue.position.y=.86,ke.position.y=3,Ze.position.y=5.8,et.position.y=6.05,Me.castShadow=ke.castShadow=et.castShadow=!0,Me.receiveShadow=!0,K.add(Me,Ue,ke,Ze,et),K.position.set(Re,q-.05,E),e.group.add(K);for(let Se=0;Se<10;Se++){let Be=Se/10*L*2,Ke=(Se+1)/10*L*2,ft=[Re+Math.sin(Be)*4.8,E+Math.cos(Be)*4.8],Tt=[Re+Math.sin(Ke)*4.8,E+Math.cos(Ke)*4.8];e.colliders.add({ax:ft[0],az:ft[1],bx:Tt[0],bz:Tt[1],y0:q-2,y1:q+1.3,kind:"w"},ft[0],ft[1],Tt[0],Tt[1])}(e.fountains||(e.fountains=[])).push({x:Re,z:E,y:q+.75,area:30,noTop:!0,spray:1})}function Xt(){let O=1038.6+C,J=849.4+b;for(let Ae=0;Ae<8&&e.collide(O,J,e.hAt(O,J),1.2,F);Ae++)O=F.x,J=F.z;let B=e.hAt(O,J),ie=N(new oe.Lambert({color:5192994}),1.2),z=N(new oe.Lambert({color:1710620})),X=new oe.Group,re=(Ae,Qe,nt,xt,ht,Et=0,Ye=0)=>{let Re=new oe.Mesh(Ae,Qe);return Re.position.set(nt,xt,ht),Re.rotation.set(Et,0,Ye),Re.castShadow=!0,X.add(Re),Re};re(new oe.Cyl(.52,.52,.05,16),z,0,.025,0),re(new oe.Torus(.5,.05,6,18),ie,0,.05,0,L/2),re(new oe.Cyl(.5,.5,.04,16),ie,-.35,.3,-.42,.9,.2),re(new oe.Box(.5,.2,.26),ie,0,.13,-.1),re(new oe.Box(.56,.12,.2),ie,0,.11,.22),re(new oe.Sphere(.15,10,8),ie,0,.3,.12),re(new oe.Cyl(.19,.2,.07,12),ie,0,.4,.1),re(new oe.Sphere(.16,10,6,0,L*2,0,L/2),ie,0,.41,.1);let de=R(128,128,(Ae,Qe,nt)=>{Ae.fillStyle="#1456b8",Ae.beginPath(),Ae.arc(Qe/2,nt/2,62,0,7),Ae.fill(),Ae.fillStyle="#ffd21a",Ae.beginPath(),Ae.arc(Qe/2,nt/2,54,0,7),Ae.fill(),Ae.fillStyle="#111",Ae.font="900 30px Anton, Impact, sans-serif",Ae.textAlign="center",Ae.fillText("MAN",Qe/2,50),Ae.fillText("AT WORK",Qe/2,88)});re(new oe.Cyl(.03,.03,2.2,6),z,1.1,1.1,-.3);let Te=re(new oe.Cyl(.3,.3,.03,18),[z,new oe.Basic({map:de}),z],1.1,2.3,-.3,L/2);Te.rotation.z=0,X.position.set(O,B,J),X.rotation.y=-.6,e.group.add(X),e.colliders.add({ax:O-.3,az:J,bx:O+.3,bz:J,y0:B-1,y1:B+.5,kind:"p"},O-.5,J-.5,O+.5,J+.5);let We={ax:O-.5,az:J,bx:O+.5,bz:J,hw:2.5,n:"\u010Cumil"};e.names.add(We,O-3,J-3,O+3,J+3),rt[0][1]=O,rt[0][2]=J}let rt=[["\u010Cumil",1038.6,849.4,14],["Michalsk\xE1 br\xE1na",875.5,598.2,24],["Hlavn\xE9 n\xE1mestie a Star\xE1 radnica",1016,778,30],["Primaci\xE1lny pal\xE1c",1094,722,34],["D\xF3m sv\xE4t\xE9ho Martina",750.5,948,38],["Bratislavsk\xFD hrad",388,946,75],["Slovensk\xE9 n\xE1rodn\xE9 divadlo",1105,920,36],["Reduta",1118,1062,42],["Modr\xFD kostol\xEDk",1438.5,433.8,36],["Prezidentsk\xFD pal\xE1c",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Star\xE1 tr\u017Enica",1217.7,668.9,40],["Slovensk\xE1 n\xE1rodn\xE1 gal\xE9ria",1015,1175,40],["Slovensk\xE9 n\xE1rodn\xE9 m\xFAzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestsk\xE9 k\xFApele Gr\xF6ssling",1306,1076,40]];for(let O of rt)O[1]+=C,O[2]+=b;for(let O of s.moreLandmarks||[])rt.push(O);let Ee=new Set;function G(){try{for(let O of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))Ee.add(O)}catch{}window.__gtbLM=(O,J)=>{for(let B of rt)O(B[1],B[2],Ee.has(B[0])?"#7dff6a":"#ffffff",J/150)}}let Ie=0;function De(O){if(Ie-=O,Ie>0||a.mode!=="play")return;Ie=.4;let J=s.pc()?s.pc().x:o.x,B=s.pc()?s.pc().z:o.z;for(let ie of rt){if(Ee.has(ie[0])||Math.hypot(ie[1]-J,ie[2]-B)>ie[3])continue;Ee.add(ie[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...Ee]))}catch{}let z=Ee.size===rt.length,X=z?1500:60;a.money+=X,c.big(z?"CEL\xC1 BRATISLAVA":"OBJAVEN\xC9",s.sandbox?`${ie[0]} \xB7 ${Ee.size}/${rt.length}`:`${ie[0]} \xB7 ${Ee.size}/${rt.length} \xB7 +${X} \u20AC`,"#ffcc33",3),l.win();break}}function at(){let O=[[1089+C,725.6+b,2]];for(let[J,B,ie]of O){if(e.collide(J,B,e.hAt(J,B),2.2,F)&&(J=F.x,B=F.z),e.collide(J,B,e.hAt(J,B),1.2,F))continue;let z=M("fabka",J,B,ie,"#f3f4f5");z.parked=z.keep=!0,z.mp=!0,ce(z,"mp")}}return{zoneNow:!1,plateMat:W,gloss:H,livery:ce,flash:Y,maybeTaxi:ae,inZone:ge,trams:ne,zone:fe,landmarks:rt,patchData(O){for(let J of O.bld)J.n==="Kostol sv. Al\u017Ebety"&&(J.c="#9cc4e8",J.rc="#5f86b4")},init(){let O=(J,B)=>{try{B()}catch(ie){console.error("X3 "+J,ie)}};O("trams",_e),O("zone",Rt),O("cumil",Xt),O("radnica",It),O("terraces",Xe),O("fountains",dt),s.sandbox||O("patrol",at),O("landmarks",G),O("prewarm",()=>{for(let J=0;J<40&&ne.list.length<Math.min(5,ne.max);J++){let B=Le(1);B&&(B.s=60+g()*Math.max(10,B.r.L-200),ye(B))}}),I=!0},obst(){return I&&ne.proxies.length?w._ob=n.concat(ne.proxies):n},update(O,J){I&&(qe(O,J),ne.mWin.emissive.setScalar(.004+u.uNight.value*1.25),ne.mHead.color.setScalar(1+u.uNight.value*3),!J&&(lt(O),De(O),s.pc()&&s.pc().mp&&!s.pc().mpStolen&&(s.pc().mpStolen=1,x(2,"kr\xE1de\u017E auta mestskej pol\xEDcie"))))},goalText(){return" \xB7 Pamiatky "+Ee.size+"/"+rt.length}}})();return w}var oh=[];function K_(s,e){let t=document.createElement("canvas"),n=128,i=Math.max(128,Math.round(n*e.w/e.h));t.width=i,t.height=n;let r=t.getContext("2d");e.bg&&(r.fillStyle=e.bg,r.fillRect(0,0,i,n)),r.fillStyle=e.fg||"#fff",r.textAlign="center",r.textBaseline="middle";let o=92;r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`;let a=r.measureText(s).width;a>i*.9&&(o=Math.floor(o*i*.9/a),r.font=`${e.weight||800} ${o}px ${e.font||"Arial, Helvetica, sans-serif"}`),r.fillText(s,i/2,n/2+4);let c=new ti(t);return c.colorSpace=Ct,c.anisotropy=4,c}function fi(s,e,t,n){let[i,r]=n.a,[o,a]=n.b,c=n.t??.5,l=i+(o-i)*c,h=r+(a-r)*c,u=Math.hypot(o-i,a-r)||1,f=(a-r)/u,d=-(o-i)/u;(l+f-n.away[0])**2+(h+d-n.away[1])**2<(l-f-n.away[0])**2+(h-d-n.away[1])**2&&(f=-f,d=-d);let m=K_(t,n),v=new st({map:m,emissiveMap:m,emissive:16777215,transparent:!n.bg,alphaTest:n.bg?0:.35,side:Bt});v.userData.glow=n.glow??1,oh.push(v);let g=new ze(new ei(n.w,n.h),v);return g.position.set(l+f*(n.off??.18),s.hAt(l,h)+n.y,h+d*(n.off??.18)),g.rotation.y=Math.atan2(f,d),e.add(g),{x:l,z:h,nx:f,nz:d}}function Dd(s,e){let t=new Dt,n=[],i=[],r=(l,h,u)=>[l[0]+(h[0]-l[0])*u,l[1]+(h[1]-l[1])*u],o=(l,h,u,f,d,m,v,g=0,p=null)=>{let y=new ze(new Wt(l,h,u),p||new st({color:f}));return y.position.set(d,m,v),y.rotation.y=g,y.castShadow=y.receiveShadow=!0,t.add(y),y};{let l=[[2529,1187],[2584,1108]],h=[[2504,1170],[2559,1091]],u=[2540,1146],f=[[2531,1205],[2574,1143]],d=[2571,1183],m=[[2574,1065],[2602,1084]],v=[2592,1069];fi(s,t,"PRIOR",{a:[2501,1171],b:[2557,1090],t:.42,away:u,y:9.2,w:12,h:2.8,fg:"#e8402a",glow:1.2,off:.3}),fi(s,t,"PRIOR",{a:f[0],b:f[1],t:.12,away:d,y:16.6,w:10,h:2.4,fg:"#e8402a",glow:1.2}),fi(s,t,"HOTEL KYJEV",{a:m[0],b:m[1],t:.5,away:v,y:67.2,w:26,h:3.6,fg:"#f4f1e6",off:-1.2,glow:1.4}),fi(s,t,"ost block",{a:h[0],b:h[1],t:.34,away:u,y:3.25,w:5.6,h:1,fg:"#f2efe6",bg:"#161616",weight:500,glow:1.1}),fi(s,t,"K\xC1CE\u010CKO",{a:h[0],b:h[1],t:.76,away:u,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),fi(s,t,"K\xC1CE\u010CKO",{a:l[0],b:l[1],t:.76,away:u,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),fi(s,t,"K\xC1CE\u010CKO \u2191",{a:h[0],b:h[1],t:.62,away:u,y:3.25,w:4.6,h:.9,fg:"#ffd23a",bg:"#1b1b1b",glow:1.1});let g=r(h[0],h[1],.34),p=[h[1][0]-h[0][0],h[1][1]-h[0][1]],y=Math.hypot(p[0],p[1]);p[0]/=y,p[1]/=y;let x=[p[1],-p[0]];(g[0]+x[0]-u[0])**2+(g[1]+x[1]-u[1])**2<(g[0]-x[0]-u[0])**2+(g[1]-x[1]-u[1])**2&&(x=[-x[0],-x[1]]);let _=Math.atan2(p[0],p[1]),T=new st({color:3107636,flatShading:!0}),S=new st({color:2367775}),M=new st({color:9071176});for(let pe=-3;pe<=3;pe++){let ne=g[0]+p[0]*pe*1.7+x[0]*1.1,U=g[1]+p[1]*pe*1.7+x[1]*1.1,ve=s.hAt(ne,U);o(.7,.6,.7,0,ne,ve+.3,U,_,S);let le=new ze(new ki(.55+(pe&1)*.15,0),T);if(le.position.set(ne,ve+1.05+(pe&1)*.2,U),le.castShadow=!0,t.add(le),pe%2===0){let _e=ne+x[0]*1.6,ue=U+x[1]*1.6,Ge=s.hAt(_e,ue),Le=new ze(new qt(.42,.42,.05,10),M);Le.position.set(_e,Ge+.74,ue),t.add(Le);let P=new ze(new qt(.04,.04,.74,5),S);P.position.set(_e,Ge+.37,ue),t.add(P)}}let C=r(r(l[0],l[1],.56),r(h[0],h[1],.56),.5),b=r(r(l[0],l[1],.95),r(h[0],h[1],.95),.5),w=10.5,L=s.hAt(u[0],u[1])+12.05,I=1e9;for(let pe of[...l,...h])I=Math.min(I,s.hAt(pe[0],pe[1]));let F=I+12.12;s.decks.add({ax:C[0],az:C[1],bx:b[0],bz:b[1],ya:F,yb:F,hw:w},Math.min(C[0],b[0])-w,Math.min(C[1],b[1])-w,Math.max(C[0],b[0])+w,Math.max(C[1],b[1])+w);let R=Math.hypot(b[0]-C[0],b[1]-C[1]),N=r(C,b,.5),H=o(w*2,.14,R,8019264,N[0],F-.07,N[1],_);H.castShadow=!1;let V=[[-w,-R/2],[w,-R/2],[w,R/2],[-w,R/2]].map(([pe,ne])=>[N[0]+x[0]*pe+p[0]*ne,N[1]+x[1]*pe+p[1]*ne]),Z=new st({color:2763308});for(let pe=0;pe<4;pe++){let ne=V[pe],U=V[(pe+1)%4],ve=Math.hypot(U[0]-ne[0],U[1]-ne[1]);o(.08,.08,ve,0,(ne[0]+U[0])/2,F+1.1,(ne[1]+U[1])/2,Math.atan2(U[0]-ne[0],U[1]-ne[1]),Z),o(.05,.05,ve,0,(ne[0]+U[0])/2,F+.55,(ne[1]+U[1])/2,Math.atan2(U[0]-ne[0],U[1]-ne[1]),Z),s.colliders.add({ax:ne[0],az:ne[1],bx:U[0],bz:U[1],y0:F-.5,y1:F+1.6,kind:"r",tag:null},ne[0],ne[1],U[0],U[1])}let W=(pe,ne)=>[N[0]+x[0]*pe+p[0]*ne,N[1]+x[1]*pe+p[1]*ne];{let[pe,ne]=W(-w+2.2,-R/2+5);o(1.4,1.1,7,3812386,pe,F+.55,ne,_),o(1.7,.08,7.3,11569756,pe,F+1.14,ne,_)}let $=[14239787,15921126,3107722,15909424],j=0;for(let pe=-R/2+4;pe<R/2-2;pe+=5.2)for(let ne of[1.5,6.2]){let[U,ve]=W(ne,pe);o(1.8,.07,.8,10123858,U,F+.75,ve,_,M);for(let ue of[-.75,.75]){let[Ge,Le]=W(ne+ue,pe);o(.35,.06,1.8,0,Ge,F+.45,Le,_+Math.PI/2,M)}let le=new ze(new qt(.03,.03,2.4,5),Z);le.position.set(U,F+1.2,ve),t.add(le);let _e=new ze(new qr(1.5,.5,8),new st({color:$[j++%4],flatShading:!0}));_e.position.set(U,F+2.55,ve),_e.castShadow=!0,t.add(_e)}let ce=new nn({color:16767392});ce.userData.bulb=!0,oh.push(ce);let Y=[];for(let pe=-R/2;pe<=R/2+.1;pe+=R/4)for(let ne=0;ne<=14;ne++){let U=-w+2*w*ne/14,ve=.5*Math.sin(Math.PI*ne/14);Y.push([...W(U,pe),F+3.1-ve])}let te=new _n(new ci(.07,5,4),ce,Y.length),ae=new ot;Y.forEach((pe,ne)=>{ae.makeTranslation(pe[0],pe[2],pe[1]),te.setMatrixAt(ne,ae)}),t.add(te);for(let pe of[-w,w])for(let ne=-R/2;ne<=R/2+.1;ne+=R/4){let[U,ve]=W(pe,ne),le=new ze(new qt(.04,.04,3.2,5),Z);le.position.set(U,F+1.6,ve),t.add(le)}let he=r(h[0],h[1],.62),we=W(w-2.2,R/2-2.5);n.push({a:[he[0]+x[0]*1.6,he[1]+x[1]*1.6],b:we,yb:F,name:"K\xE1ce\u010Dko \u2013 terasa",back:"Kamenn\xE9 n\xE1mestie"});let He=v[0],Je=v[1];for(let[pe,ne]of[[-w+3.6,-R/2+4],[-w+3.6,-R/2+6.5],[.4,-1],[2.8,1.2],[5,6.5],[7.4,-6],[w-1.2,3],[w-1.2,5],[-3,R/2-1.2],[-1.2,R/2-1.2]]){let[U,ve]=W(pe,ne);i.push([U,ve,F,pe>w-2||ne>R/2-2?Math.atan2(He-U,Je-ve):Math.atan2(N[0]-U+ne%3,N[1]-ve+pe%2)])}}{let l=[2448,1196],h=[2485,1128],u=Math.hypot(h[0]-l[0],h[1]-l[1]),f=[(h[0]-l[0])/u,(h[1]-l[1])/u],d=[-f[1],f[0]],m=Math.atan2(f[0],f[1]),v=new st({color:10470616,transparent:!0,opacity:.35,side:Bt}),g=new st({color:2829616}),p=new st({color:9071176});for(let[y,x]of[[.38,9.5],[.62,-5.5]]){let _=l[0]+(h[0]-l[0])*y+d[0]*x,T=l[1]+(h[1]-l[1])*y+d[1]*x,S=s.hAt(_,T),M=Math.sign(x);o(1.7,.1,8,0,_,S+2.6,T,m,g),o(.06,2.5,8,0,_+d[0]*.8*M,S+1.3,T+d[1]*.8*M,m,v).castShadow=!1;for(let w of[-3.95,3.95])o(1.6,2.5,.06,0,_+f[0]*w,S+1.3,T+f[1]*w,m,v).castShadow=!1;for(let w of[-3.95,0,3.95])o(.09,2.6,.09,0,_+f[0]*w+d[0]*.8*M,S+1.3,T+f[1]*w+d[1]*.8*M,m,g);o(.45,.08,5,0,_+d[0]*.45*M,S+.5,T+d[1]*.45*M,m,p);let C=[_-f[0]*4-d[0]*.85*M,T-f[1]*4-d[1]*.85*M],b=[_+f[0]*4-d[0]*.85*M,T+f[1]*4-d[1]*.85*M];fi(s,t,"Kamenn\xE9 n\xE1mestie",{a:C,b,t:.5,away:[_+d[0]*5*M,T+d[1]*5*M],y:2.86,w:4.2,h:.42,fg:"#ffffff",bg:"#c8102e",weight:700,glow:.9,off:.02}),s.colliders.add({ax:_-f[0]*4+d[0]*.8*M,az:T-f[1]*4+d[1]*.8*M,bx:_+f[0]*4+d[0]*.8*M,bz:T+f[1]*4+d[1]*.8*M,y0:S-1,y1:S+2.7,kind:"w",tag:null},_-5,T-5,_+5,T+5)}}{let l=[2314,1201],h=[2340,1231],f=fi(s,t,"STAR\xC1 TR\u017DNICA",{a:l,b:h,t:.5,away:[2322,1245],y:9.6,w:13,h:1.5,fg:"#f3ead2",glow:1,off:.25}),d=Math.hypot(h[0]-l[0],h[1]-l[1]),m=[(h[0]-l[0])/d,(h[1]-l[1])/d],v=Math.atan2(m[0],m[1]),g=[14239787,15921126,4164175,15909424,3107722],p=new st({color:9071176}),y=[14254379,12729131,6988604,15255602],x=0;for(let _=0;_<2;_++)for(let T=-2;T<=2;T++){let S=f.x+f.nx*(7+_*6.5)+m[0]*T*4.6,M=f.z+f.nz*(7+_*6.5)+m[1]*T*4.6;if(s.hAt(S,M)<s.water+2)continue;let C=s.hAt(S,M);o(3.2,.08,1.3,0,S,C+.9,M,v+Math.PI/2,p);for(let w of[-1.5,1.5])for(let L of[-.6,.6])o(.07,2.3,.07,3815994,S+m[0]*w+f.nx*L,C+1.15,M+m[1]*w+f.nz*L);let b=new ze(new qr(2.6,.9,4),new st({color:g[x%5],flatShading:!0}));b.position.set(S,C+2.75,M),b.rotation.y=v+Math.PI/4,b.castShadow=!0,t.add(b);for(let w of[-1,0,1])o(.75,.3,.9,y[(x+w+4)%4],S+m[0]*w,C+1.1,M+m[1]*w,v+Math.PI/2);x++}fi(s,t,"MANDERLA",{a:[2388,1235],b:[2401,1224],t:.5,away:[2400,1236],y:46.2,w:11,h:2.2,fg:"#f4f1e6",glow:1.3,off:-.6})}let a=new nn({color:16765498,transparent:!0,opacity:.75,side:Bt});for(let l of n)for(let[h,u]of[[l.a,s.hAt(l.a[0],l.a[1])],[l.b,l.yb]]){let f=new ze(new Pa(.75,1,20),a);f.rotation.x=-Math.PI/2,f.position.set(h[0],u+.08,h[1]),t.add(f)}e.add(t);let c=0;return{doors:n,guests:i,update(l,h){c=Math.max(0,c-l);for(let u of oh)u.userData.bulb?u.color.setScalar(.25+2.6*h).multiply(new Oe(1,.82,.55)):u.emissiveIntensity=(.75+1.1*h)*u.userData.glow;a.opacity=.5+.3*Math.sin(performance.now()/250)},tryDoor(l,h,u){if(c>0)return null;for(let f of n){let d=s.hAt(f.a[0],f.a[1]);if(Math.hypot(l-f.a[0],h-f.a[1])<1.1&&Math.abs(u-d)<2)return c=2.5,[f.b[0],f.b[1],f.yb,f.name];if(Math.hypot(l-f.b[0],h-f.b[1])<1.1&&Math.abs(u-f.yb)<2)return c=2.5,[f.a[0],f.a[1],d,f.back]}return null}}}var co={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},zubor:{L:5.9,W:2.06,H:2.02,hood:1.55,wind:.55,rear:"estate",rr:.44,belt:1.34,clear:.52,acc:5.2,vmax:50,nick:"Zubor",acc_:"Zubra",g:"m",boxy:!0},sugga:{L:4.68,W:1.82,H:1.98,hood:1.15,wind:.32,rear:"box",rr:.41,belt:1.28,clear:.5,acc:3.2,vmax:36,nick:"Sugga",acc_:"Suggu",g:"f",boxy:!0},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},j_=new st({color:3886431,name:"Windows"}),J_=new st({color:1381653,name:"Tire"}),$_=new st({color:10132898,name:"Rim"}),Ud=new st({color:2303014,name:"Trim"}),Q_=new st({color:15921902,name:"Plate"});function zd(s,e,t){let n=new Yr;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new Ca(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(e/2-t,0,0),i}function Fd(s){let e=co[s],{L:t,W:n,H:i,hood:r,wind:o,belt:a}=e,c=e.rr,l=e.clear||.3,h=t/2,u=new st({color:16777215,name:"Paint"}),f=new Dt,d=e.boxy?.03:.07,m=e.boxy?a-.08:a-.2,v=e.rear==="liftback"?a+.02:a,g=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,m-.06],[h-.1,m],[h-r,a],[-h+(e.rear==="liftback"?.05:.02),v],[-h,v-.12],[-h,l+.14]],p=new ze(zd(g,n,d),u);f.add(p);let y=n-.16,x=h-r,_=x-o,T,S;e.rear==="hatch"?(T=-h+.32,S=-h+.08):e.rear==="liftback"?(T=-h+1.28,S=-h+.28):e.rear==="estate"?(T=-h+.14,S=-h+.04):(T=-h+.1,S=-h+.05);let M=[[S,a-.02],[x,a-.02],[_,i-.04],[T,i-.04]],C=new ze(zd(M,y,.04),j_);f.add(C);let b=_-T-.12,w=new ze(new Wt(y-.06,.07,b),u);w.position.set(0,i-.02,(_+T)/2),f.add(w);let L=new ze(new Wt(y+.01,i-a-.06,.12),u);L.position.set(0,(i+a)/2-.03,(x+S)/2+(e.rear==="liftback"?.25:.1)),f.add(L);let I=t*.61,F=new qt(c,c,.22,14);F.rotateZ(Math.PI/2);let R=new qt(c*.62,c*.62,.235,10);R.rotateZ(Math.PI/2);let N=I/2+(h-r>.6?.05:0)+.05;for(let Y of[N,-I/2+.05])for(let te of[-1,1]){let ae=new ze(F,J_);ae.position.set(te*(n/2-.13),c,Y);let he=new ze(R,$_);he.position.copy(ae.position),f.add(ae,he)}let H=new ze(new Wt(n+.02,.14,t-.3),Ud);H.position.set(0,l+.07,0),f.add(H);let V=new st({color:14673646,name:"HeadLights"}),Z=new st({color:9048080,name:"TailLights"}),W=m-.1;for(let Y of[-1,1]){let te=new ze(new Wt(e.boxy?.32:.38,e.boxy?.16:.11,.08),V);te.position.set(Y*(n/2-.3),W,h-.03);let ae=new ze(new Wt(.3,.13,.08),Z);ae.position.set(Y*(n/2-.22),v-.2,-h+0),f.add(te,ae)}let $=new ze(new Wt(n*.42,.14,.06),Ud);$.position.set(0,W-.02,h+0);let j=new ze(new Wt(.52,.12,.03),Q_);j.position.set(0,l+.22,h+.01);let ce=j.clone();ce.position.z=-h-.01,ce.position.y=l+.3;for(let Y of[-1,1]){let te=new ze(new Wt(.16,.1,.12),u);te.position.set(Y*(n/2+.06),a+.08,x-.1),f.add(te)}return f.add($,j,ce),f.traverse(Y=>{Y.isMesh&&(Y.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:t,vmax:e.vmax,acc:e.acc,nick:e.nick,acc_:e.acc_,g:e.g},w:n,h:i,len:t}}function ah(s,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Qr||e===Ha){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Qr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ja=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ph(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Xi.extractUrlBase(e);o=Xi.resolveURL(l,this.path)}else o=Xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gd){try{o[St.KHR_BINARY_GLTF]=new Rh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:o[u]=new fh;break;case St.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ch(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[u]=new Ph;break;case St.KHR_MESH_QUANTIZATION:o[u]=new Lh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function e1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uh=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ua(h),l.distance=u;break;case"spot":l=new cr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},fh=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],cn),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_h=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Sh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Th=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ah=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let v=new ot,g=new D,p=new en,y=new D(1,1,1),x=new _n(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,v.compose(g,p,y));for(let _ in c)if(_==="_COLOR_0"){let T=c[_];x.instanceColor=new ls(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);Vt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Gd="glTF",lo=12,Od={JSON:1313821514,BIN:5130562},Rh=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-lo,r=new DataView(e,lo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Od.JSON){let l=new Uint8Array(e,lo+o,a);this.content=n.decode(l)}else if(c===Od.BIN){let l=lo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ch=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Nh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=pr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let v=d.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(d)},a,l,cn,f)})})}},Ph=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lh=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Ja=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,v=m-l,g=-2*d+3*f,p=d-f,y=1-g,x=p-f+u;for(let _=0;_!==a;_++){let T=o[v+_+a],S=o[v+_+c]*h,M=o[m+_+a],C=o[m+_]*h;r[_]=y*T+x*S+g*M+p*C}return r}},t1=new en,Ih=class extends Ja{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return t1.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:$t,9729:Qt,9984:ea,9985:Hl,9986:Ar,9987:Xn},kd={33071:Un,33648:Ur,10497:os},ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},n1={CUBICSPLINE:void 0,LINEAR:cs,STEP:js},lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function i1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function s1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function r1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o1(s){let e,t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hh(t.attributes):e=s.indices+":"+hh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hh(s.targets[n]);return e}function hh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var c1=new ot,Uh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new or(this.options.manager):this.textureLoader=new za(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ps(r,a,i),Yi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Xi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=ch[i.type],a=pr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Lt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ch[i.type],l=pr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,g;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(y);x||(v=new l(a,p*d,i.count*d/h),x=new Br(v,d/h),t.cache.add(y,x)),g=new kr(x,c,f%d/h,m)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new Lt(v,c,m);if(i.sparse!==void 0){let p=ch.SCALAR,y=pr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new y(o[1],x,i.sparse.count*p),S=new l(o[2],_,i.sparse.count*c);a!==null&&(g=new Lt(g.array.slice(),g.itemSize,g.normalized));for(let M=0,C=T.length;M<C;M++){let b=T[M];if(g.setX(b,S[M*c]),c>=2&&g.setY(b,S[M*c+1]),c>=3&&g.setZ(b,S[M*c+2]),c>=4&&g.setW(b,S[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Bd[f.magFilter]||Qt,h.minFilter=Bd[f.minFilter]||Xn,h.wrapS=kd[f.wrapS]||os,h.wrapT=kd[f.wrapT]||os,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){let g=new ln(v);g.needsUpdate=!0,f(g)}),t.load(Xi.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||a1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Wr,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Vr,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[St.KHR_MATERIALS_UNLIT]){let u=i[St.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],cn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);let h=r.alphaMode||lh.OPAQUE;if(h===lh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===lh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){let u=r.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&o!==nn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Yi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(i,u,r),u})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Hd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=o1(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Hd(new At,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?i1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let v=h[d],g=o[d],p,y=l[d];if(g.mode===Kn.TRIANGLES||g.mode===Kn.TRIANGLE_STRIP||g.mode===Kn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ya(v,y):new ze(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Kn.TRIANGLE_STRIP?p.geometry=ah(p.geometry,Ha):g.mode===Kn.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,Qr));else if(g.mode===Kn.LINES)p=new Ma(v,y);else if(g.mode===Kn.LINE_STRIP)p=new nr(v,y);else if(g.mode===Kn.LINE_LOOP)p=new ba(v,y);else if(g.mode===Kn.POINTS)p=new wa(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&r1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yi(p,r),g.extensions&&ps(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ps(i,u[0],r),u[0];let f=new Dt;r.extensions&&ps(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _a(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],v=d.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,x=f.length;y<x;y++){let _=f[y],T=d[y],S=m[y],M=v[y],C=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,T,S,M,C);if(b)for(let w=0;w<b.length;w++)p.push(b[w])}return new rr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,c1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new Dt:l.length===1?h=l[0]:h=new Vt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Yi(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){let u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Dt;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&ps(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Pn||f instanceof ln)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];qi[r.path]===qi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(qi[r.path]){case qi.weights:l=Ti;break;case qi.rotation:l=li;break;case qi.position:case qi.scale:l=Ai;break;default:switch(n.itemSize){case 1:l=Ti;break;case 2:case 3:default:l=Ai;break}break}let h=i.interpolation!==void 0?n1[i.interpolation]:cs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let m=new l(c[f]+"."+qi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof li?Ih:Ja;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function l1(s,e,t){let n=e.attributes,i=new tn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Dh(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let v=Dh(pr[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Hd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Nh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Nt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Nt.workingColorSpace}" not supported.`),Yi(s,e),l1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?s1(s,e.targets,t):s})}function Vd(s){let e=new Map,t=new Map,n=s.clone();return Wd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Wd(s.children[n],e.children[n],t)}var u1=new ja,zh=null,Xd=async s=>{let e=s.split("/").pop();zh||(zh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let t=await zh,n=atob(t[e]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>u1.parse(i.buffer,"",r,o))},Fn={cars:{},people:[]},$a={mat:null},f1=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],qd={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},Yd=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Zd(s,e,t,n,i){try{let[r,o]=await Promise.all([fetch(s.replace(/models\/$/,"")+"cars/"+e+".json").then(T=>{if(!T.ok)throw new Error("model");return T.json()}),new Promise((T,S)=>new or().load(s.replace(/models\/$/,"")+"cars/"+e+".jpg",T,void 0,S))]),a=Uint8Array.from(atob(r.bin),T=>T.charCodeAt(0)).buffer;o.flipY=!1,o.colorSpace=Ct,o.anisotropy=4;let c=r.body,l=new At;l.setAttribute("position",new Lt(new Float32Array(a,c.pos[0],c.pos[1]),3)),l.setAttribute("normal",new Lt(new Int8Array(a,c.nor[0],c.nor[1]),3,!0)),l.setAttribute("uv",new Lt(new Uint16Array(a,c.uv[0],c.uv[1]),2,!0)),l.setIndex(new Lt(new Uint16Array(a,c.idx[0],c.idx[1]),1)),l.computeBoundingBox(),l.computeBoundingSphere();let h=new Dt,u=new Dt;u.scale.setScalar(t),h.add(u);let f=new ze(l,new st({map:o,side:Bt,name:"EventBody"}));f.castShadow=!0,u.add(f);let d=r.wr||n,m=r.ww||i,v=new qt(d,d,m,16);v.rotateZ(Math.PI/2);let g=new qt(d*.6,d*.6,m*1.03,10);g.rotateZ(Math.PI/2);let p=new st({color:1250068,name:"Tire"}),y=new st({color:9277590,name:"Rim"});for(let T of r.wheels){let S=new ze(v,p),M=new ze(g,y);S.position.set(T.center[0],d,T.center[2]),M.position.copy(S.position),S.castShadow=!0,u.add(S,M)}let x=l.boundingBox,_=Fn.cars[e];Fn.cars[e]={obj:h,def:{..._.def,paint:null},w:(x.max.x-x.min.x)*t*.94,h:(x.max.y-x.min.y)*t,len:(x.max.z-x.min.z)*t,real:!0}}catch(r){console.warn("event car model",e,r&&r.message)}}async function Kd(s,e){let t=[],n=0,i=Object.keys(qd).length+Yd.length,r=()=>e&&e(++n/i);for(let[o,a]of Object.entries(qd))t.push(Xd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new tn().setFromObject(l,!0).getSize(new D),f=u.x>u.z,d=new Dt,m=new Dt;m.add(l),f&&(m.rotation.y=Math.PI/2),d.add(m),d.updateMatrixWorld(!0);let v=new tn().setFromObject(d,!0),g=v.max.z-v.min.z,p=a.len/g;m.scale.multiplyScalar(p),d.updateMatrixWorld(!0),v=new tn().setFromObject(d,!0);let y=v.getCenter(new D);m.position.set(-y.x,-v.min.y,-y.z),d.updateMatrixWorld(!0);let x=0,_=0;d.traverse(S=>{if(S.isMesh){S.castShadow=!0;let M=Array.isArray(S.material)?S.material:[S.material];for(let C of M)if(/head/i.test(C.name)){let b=new tn().setFromObject(S,!0);x+=b.getCenter(new D).z,_++}}}),_&&x/_<0&&(m.rotation.y+=Math.PI,m.position.x*=-1,m.position.z*=-1);let T=new tn().setFromObject(d,!0);Fn.cars[o]={obj:d,def:a,w:T.max.x-T.min.x,h:T.max.y-T.min.y,len:T.max.z-T.min.z},r()}));for(let o of Yd)t.push(Xd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new tn().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new Dt;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.frustumCulled=!1)});let d={};for(let m of a.animations)d[m.name.replace(o.pre,"").toLowerCase()]=m;Fn.people.push({obj:f,clips:d}),r()}));await Promise.all(t);for(let o of Object.keys(co))Fn.cars[o]=Fd(o);await Promise.all([Zd(s,"zubor",1.05,.42,.38),Zd(s,"sugga",1.07,.345,.42)])}var d1=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],mr=class{constructor(e=-1,t=!0){let n=e>=0?Fn.people[e]:pn(Fn.people);if(this.obj=Vd(n.obj),t){let i=new Oe(pn(d1));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&_t()<.6){let a=o.clone();return a.color=new Oe(pn(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new Fa(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(ka,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(ka,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(e,t=.2,n=1){let i=this.acts[e]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,t,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},rn={},Qa=class{constructor(e,t){let n=Fn.cars[e]||Fn.cars.sedan;this.kind=e,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=t||pn(f1),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new Oe(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new Oe(0,0,0),this.tail=o,o}return r}).map(r=>{let o=$a.mat?$a.mat(r):r;return r===this.head&&(this.head=o,o.emissive||(o.emissive=new Oe(0,0,0))),r===this.tail&&(this.tail=o,o.emissive||(o.emissive=new Oe(0,0,0))),o}),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(e,t,n,i){this.x=e,this.z=t,this.h=n,this.y=i.surfaceY(e,t),this.vx=this.vz=this.w=0,this.sync(i,1)}step(e,t,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=pt(this.st*l-this.steer,-e*3.5,e*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=t.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-t.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*pt(d/4,-.4,.4),o+=h*e;let m=this.len*.62,v=o*Math.tan(this.steer)/m,g=this.hb?1.6:15,p=Math.abs(v*o),y=this.hb?6:19,x=p>y?g*y/p:g;this.w+=(v*(this.hb?1.35:1)-this.w)*pt(x*e,0,1),a*=Math.exp(-(this.hb?1.4:p>y?7:18)*e),this.h=ni(this.h+this.w*e);let _=Math.sin(this.h),T=Math.cos(this.h);this.vx=o*_+a*T,this.vz=o*T-a*_,this.x+=this.vx*e,this.z+=this.vz*e;let S=0;for(let M of[this.off,-this.off,0]){let C=this.x+_*M,b=this.z+T*M,w=t.collide(C,b,this.y+.3,this.r,rn,Math.hypot(this.vx,this.vz),this.vx,this.vz);if(rn.broke){let L=rn.broke==="t"?.7:.86;this.vx*=L,this.vz*=L,this.dmg+=rn.broke==="t"?9:4,this.broke=rn.broke,S=Math.max(S,rn.broke==="t"?7:4.5)}if(w){this.x+=rn.x-C,this.z+=rn.z-b;let L=this.vx*rn.nx+this.vz*rn.nz;L<0&&(this.vx-=1.3*L*rn.nx,this.vz-=1.3*L*rn.nz,this.vx*=.92,this.vz*=.92,S=Math.max(S,-L),this.w+=M*.05*L*(this.vx*rn.nz-this.vz*rn.nx>0?1:-1))}}this.x=pt(this.x,2,t.W-2),this.z=pt(this.z,2,t.H-2),this.impact=S,S>4&&(this.dmg+=S*1.5)}sync(e,t){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=e.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=e.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=e.surfaceY(this.x-i*.8,this.z+n*.8,r),l=e.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=pt(t*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let m=pt(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+m)}lights(e,t){this.head&&this.head.emissive.setRGB(.25+e*3.2,.24+e*2.9,.2+e*2.3),this.tail&&this.tail.emissive.setRGB(t?3.2:.35+e*1.6,0,0)}};function jd(s,e){let t=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(e.h),r=Math.cos(e.h);if(Math.abs(s.x-e.x)>7||Math.abs(s.z-e.z)>7||Math.abs(s.y-e.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[e.off,-e.off]){let l=s.x+t*a,h=s.z+n*a,u=e.x+i*c,f=e.z+r*c,d=u-l,m=f-h,v=Math.hypot(d,m),g=s.r+e.r;if(v<g&&v>1e-4){d/=v,m/=v;let p=(g-v)/2;s.x-=d*p,s.z-=m*p,e.x+=d*p,e.z+=m*p;let y=(e.vx-s.vx)*d+(e.vz-s.vz)*m;if(y<0){let x=-y*.65;s.vx-=d*x,s.vz-=m*x,e.vx+=d*x,e.vz+=m*x,s.w+=(a>0?1:-1)*x*.05,e.w-=(c>0?1:-1)*x*.05,o=Math.max(o,-y)}}}return o}var An={},ho=class{constructor(e,t,n,i){this.car=e,this.w=t,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let e=this.e.b.out.filter(t=>t!==this.e.rev&&t.L>.5);this.next=e.length?pn(e):this.e.rev||null}ahead(e,t){let n=this.e,i=this.s+e;i>n.L&&this.next&&(i-=n.L,n=this.next),Mn.at(n,Math.min(i,n.L),t);let r=n.lane;return t.x+=-t.dz*r,t.z+=t.dx*r,t}project(){let e=this.car,t=this.e,n=1e9,i=this.s;for(let r=0;r<t.p.length-1;r++){let o=t.p[r][0],a=t.p[r][1],c=t.p[r+1][0],l=t.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=pt(((e.x-o)*h+(e.z-a)*u)/f,0,1),m=Math.hypot(o+h*d-e.x,a+u*d-e.z);m<n&&(n=m,i=t.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(e,t,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,An);let l=An.x,h=An.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let _=Math.hypot(r.x-o.x,r.z-o.z);_<30&&(l=r.x,h=r.z,u=pt(_*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let _=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),T=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),S=Math.abs(ni(T-_));S>.35&&(u=Math.min(u,mt(14,5.5,pt(S/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,_,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),m=Math.cos(o.h),v=99;for(let _ of t){if(_===o)continue;let T=_.x-o.x,S=_.z-o.z,M=T*d+S*m;if(M<0||M>22)continue;Math.abs(T*m-S*d)<2.2&&(v=Math.min(v,M-(o.len+_.len)/2))}if(i&&this.mode!=="chase"){let _=i.x-o.x,T=i.z-o.z,S=_*d+T*m;S>0&&S<14&&Math.abs(_*m-T*d)<2&&(v=Math.min(v,S-o.len/2-.5))}v<99&&(u=Math.min(u,Math.max(0,(v-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,v<3?4:u));let g=Math.atan2(l-o.x,h-o.z),p=ni(g-o.h),y=o.fwd;o.st=pt(p*2.2,-1,1),y<-.5&&(o.st=-o.st);let x=u-y;o.thr=pt(x*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),v<4&&a<.5&&(this.honk+=e)}chooseToward(e){let t=this.e.b.out.filter(r=>r.L>.5);if(!t.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of t){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-e.x,o[1]-e.z)+(r===this.e.rev?30:0)+_t()*8;a<i&&(i=a,n=r)}this.next=n}},uo=class{constructor(e,t,n){this.p=new mr,this.w=e,this.e=t,this.s=n,this.dir=_t()<.5?1:-1,this.off=(_t()-.5)*(t.sw?.8:1.6),this.speed=1.1+_t()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),Mn.at(t,n,An),this.p.x=An.x,this.p.z=An.z,this.p.y=e.hAt(An.x,An.z)}get x(){return this.p.x}get z(){return this.p.z}flee(e,t){if(this.state==="down")return;this.state="flee",this.t=5+_t()*3;let n=Math.atan2(this.p.x-e,this.p.z-t)+(_t()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(e,t,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=e,this.p.vz=t,this.p.play("death",.08,n?1.6:1.1),!0)}update(e,t){let n=this.p;if(this.state==="walk"){this.s+=this.speed*e*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&_t()<.85){let h=pn(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=pt(this.s,0,i.L)}Mn.at(this.e,this.s,An);let r=An.x-An.dz*this.off*this.dir,o=An.z+An.dx*this.off*this.dir,a=Math.atan2(An.dx*this.dir,An.dz*this.dir);n.h+=ni(a-n.h)*pt(e*6,0,1),n.x+=(r-n.x)*pt(e*4,0,1),n.z+=(o-n.z)*pt(e*4,0,1)}else if(this.state==="flee"){this.t-=e;let i=4.2;if(n.x+=Math.sin(this.fh)*i*e,n.z+=Math.cos(this.fh)*i*e,n.h+=ni(this.fh-n.h)*pt(e*8,0,1),t.collide(n.x,n.z,n.y,.35,rn)&&(n.x=rn.x,n.z=rn.z,this.fh+=(_t()<.5?1:-1)*1.2),this.t<=0){let r=t.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=pn(r),this.s=_t()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=e,n.x+=n.vx*e,n.z+=n.vz*e,n.vx*=Math.exp(-4*e),n.vz*=Math.exp(-4*e),t.collide(n.x,n.z,n.y,.3,rn)&&(n.x=rn.x,n.z=rn.z,n.vx=n.vz=0));n.y=t.surfaceY(n.x,n.z,n.y+1),n.mixer.update(e),n.sync()}};var ec=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.7,this.master.connect(t.destination);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}start(){if(!this.ctx||this.started)return;this.started=!0;let e=this.ctx,t=this._noiseSrc(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=e.createGain();i.gain.value=.06,t.connect(n).connect(i).connect(this.master),t.start();let r=e.createOscillator();r.type="sawtooth";let o=e.createOscillator();o.type="square";let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=e.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=e.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=e.createOscillator();f.type="triangle";let d=e.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let m=e.createOscillator(),v=e.createOscillator();m.type=v.type="square",m.frequency.value=392,v.frequency.value=494;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=1500;let p=e.createGain();p.gain.value=0,m.connect(g),v.connect(g),g.connect(p).connect(this.master),m.start(),v.start(),this.hornG=p}mute(e){this.master&&this.master.gain.setTargetAtTime(e||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(e,t,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(t){let c=Math.abs(t.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(t.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(t.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(t.thr)*.06,r,.08);let f=Math.sin(t.h),d=Math.cos(t.h),m=Math.abs(t.vx*d-t.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,m-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(e.t%1.2<.6?720:960,r,.03)}_burst(e,t,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+e),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+e+.05)}_tone(e,t,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(t,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(e){let t=Math.min(1,e/15);this._burst(.35+t*.4,900,.25+t*.5),this._tone(90,40,.3,.3*t)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((e,t)=>this._tone(e,e,.25,.14,"square",t*.11))}fail(){[392,330,262,196].forEach((e,t)=>this._tone(e,e*.98,.3,.14,"sawtooth",t*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(e){this.hornG&&this.hornG.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.02)}};var yt=s=>document.querySelector(s),tc=class{constructor(e,t){this.G=e,this.mobile=t,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=yt("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",t||matchMedia("(pointer: coarse)").matches),yt("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),yt("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),yt("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),yt("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),yt("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,yt("#map").hidden=!0,this.toggleMap(this.G.world,this.G),yt("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),yt("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();yt("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(e,t){yt("#loadbar i").style.width=Math.round(e*100)+"%",t&&(yt("#loadtxt").textContent=t)}ready(){yt("#load").hidden=!0,yt("#title").hidden=!1}play(){yt("#title").hidden=!0,yt("#hud").hidden=!1,document.body.classList.add("playing")}pause(e){yt("#pause").hidden=!e}error(e){yt("#loadtxt").textContent="Chyba: "+e}toast(e){let t=yt("#toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}big(e,t,n,i=2.6){let r=yt("#big");r.querySelector("b").textContent=e,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=t||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(e,t){let n=yt("#flash");n.style.background=e,n.style.transition="none",n.style.opacity=t,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(e){if(this._hint===e)return;this._hint=e;let t=yt("#hint");t.textContent=e,t.hidden=!e||this.mobile}flashHint(){}bindTouch(e,t){this.snd=t;let n=yt("#stick"),i=yt("#stick i"),r=null,o=0,a=0,c=null,l=0,h=!1,u=52,f=78,d=yt("#touch");d.addEventListener("touchstart",g=>{t.unlock();for(let p of g.changedTouches)if(p.clientX<innerWidth*.5&&r===null){if(r=p.identifier,o=p.clientX,a=p.clientY,h=document.body.classList.contains("incar"),h){let y=n.getBoundingClientRect();o=y.left+y.width/2;let x=Math.max(-f,Math.min(f,p.clientX-o));i.style.transform=`translate(${x}px,0)`,this.stick.active=!0,this.stick.x=x/f,this.stick.y=0;continue}n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0}else c===null&&(c=p.identifier,l=p.clientX);g.preventDefault()},{passive:!1}),d.addEventListener("touchmove",g=>{for(let p of g.changedTouches)if(p.identifier===r&&h){let y=Math.max(-f,Math.min(f,p.clientX-o));i.style.transform=`translate(${y}px,0)`,this.stick.x=y/f,this.stick.y=0}else if(p.identifier===r){let y=p.clientX-o,x=p.clientY-a,_=Math.hypot(y,x);_>u&&(y*=u/_,x*=u/_),i.style.transform=`translate(${y}px,${x}px)`,this.stick.x=y/u,this.stick.y=-x/u}else p.identifier===c&&(this.look.dx+=(p.clientX-l)*.009,l=p.clientX);g.preventDefault()},{passive:!1});let m=g=>{for(let p of g.changedTouches)p.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),p.identifier===c&&(c=null)};d.addEventListener("touchend",m),d.addEventListener("touchcancel",m);let v=(g,p)=>{let y=yt(g);y.addEventListener("touchstart",_=>{t.unlock(),this.btn[p]=1,y.classList.add("dn"),_.preventDefault(),_.stopPropagation()},{passive:!1});let x=_=>{this.btn[p]=0,y.classList.remove("dn"),_.preventDefault()};y.addEventListener("touchend",x),y.addEventListener("touchcancel",x)};v("#bGas","gas"),v("#bBrake","brake"),v("#bHb","hb"),v("#bAtk","atk"),yt("#bAct").addEventListener("touchstart",g=>{t.unlock(),e.act=1,g.preventDefault(),g.stopPropagation()},{passive:!1}),yt("#bAct").addEventListener("click",()=>e.act=1)}update(e,t,n){yt("#money").textContent="\u20AC "+Math.floor(e.money).toLocaleString("sk-SK");let i="\u2605".repeat(e.wanted)+"\u2606".repeat(5-e.wanted);this._st!==i&&(this._st=i,yt("#stars").textContent=i,yt("#stars").classList.toggle("hot",e.wanted>0));let r=Math.floor(e.tod),o=Math.floor(e.tod%1*60);yt("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=e.street?e.district?e.street+" \xB7 "+e.district:e.street:e.district||"";if(this._street!==a){this._street=a;let l=yt("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=t.goalText;if(t.goal){let l=Math.hypot(t.goal.x-t.px,t.goal.z-t.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,yt("#goal").textContent=c),yt("#speed").textContent=t.speed!==null?Math.round(t.speed)+" km/h":"",yt("#hp").style.width=Math.max(0,e.hp)+"%",document.body.classList.toggle("incar",t.inCar),document.body.classList.toggle("nearcar",t.nearCar||t.inCar),yt("#bAct").textContent=t.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(t,n))}drawMini(e,t){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=e.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-e.px,-e.pz),i.imageSmoothingEnabled=!0,t.drawGround(i,e.px,e.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let m=(f-e.px)*a,v=(d-e.pz)*a,g=Math.cos(l),p=Math.sin(l);return[r/2+m*g-v*p,r/2+m*p+v*g]},u=(f,d,m,v,g)=>{let[p,y]=h(f,d),x=p-r/2,_=y-r/2,T=Math.hypot(x,_),S=r/2-8;if(T>S){if(!g)return;p=r/2+x/T*S,y=r/2+_/T*S}i.fillStyle=m,i.beginPath(),i.arc(p,y,v,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of e.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of e.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);e.goal&&u(e.goal.x,e.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-e.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(e,t){let n=yt("#map");if(!n.hidden||!e){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(yt("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=yt("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?e.H/2:900,l=Math.min(e.W-c,Math.max(c,a?a.x:e.W/2)),h=Math.min(e.H-c,Math.max(c,a?a.z:e.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),e.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(g,p,y,x)=>{o.fillStyle=y,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(g*u,p*u,x,0,7),o.fill(),o.stroke()},m=t&&t.world?window.__gtbLOC:null;if(window.__gtbLM&&window.__gtbLM(d,r),m){for(let g of m.contacts)d(g[0],g[1],"#ffcc33",r/70);for(let g of m.races)d(g[0],g[1],"#33e0ff",r/70)}let v=window.__gtbPos&&window.__gtbPos();if(v){v.goal&&d(v.goal.x,v.goal.z,"#ff4fd8",r/60),o.save(),o.translate(v.x*u,v.z*u),o.rotate(Math.PI-v.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let g=r/50;o.beginPath(),o.moveTo(0,-g),o.lineTo(g*.7,g*.8),o.lineTo(0,g*.35),o.lineTo(-g*.7,g*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var p1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,In=p1&&Math.min(screen.width,screen.height)<900,Fh=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",se=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},sc=document.getElementById("c"),gr=new Or({canvas:sc,antialias:!1,powerPreference:"high-performance"});gr.setPixelRatio(1);gr.shadowMap.enabled=!0;gr.shadowMap.type=Oa;var vs,po=[],di=!0,xs=null,Rn={zoneNow:!1,obst:()=>Yt,update(){},flash(){},maybeTaxi(){},livery(){},goalText:()=>""},jt=new Bi,mn=new an(60,1,.3,2700),ct=new tc(se,In),Ht=new ec,je,nc=new Da(12571903,5918784,1.2),Cn=new lr(16777215,3);Cn.castShadow=!0;Cn.shadow.mapSize.set(In?1024:2048,In?1024:2048);var mo=75;Object.assign(Cn.shadow.camera,{left:-mo,right:mo,top:mo,bottom:-mo,near:1,far:600});Cn.shadow.bias=-.0015;Cn.shadow.normalBias=.6;jt.add(nc,Cn,Cn.target);var ms=new cr(16769712,0,55,.55,.6,1.2);jt.add(ms,ms.target);var ip={uSun:kt.uSun,uNight:kt.uNight,uTime:kt.uTime},Mo=new ze(new ci(1800,32,16),new Tn({uniforms:ip,side:dn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:bd}));Mo.frustumCulled=!1;jt.add(Mo);jt.fog=new va(9085112,.0026);var sp=new qt(1.6,1.6,26,16,1,!0);sp.translate(0,13,0);function m1(s){let e=new ze(sp,new Tn({uniforms:{uC:{value:new Oe(s)},uTime:kt.uTime},transparent:!0,depthWrite:!1,side:Bt,blending:Si,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return e.frustumCulled=!1,e}var Ln={},wt={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(Ln[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(wt.act=1),s.code==="KeyM"&&ct.toggleMap(je,se),s.code==="KeyH"&&Ht.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&up(),se.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&hp(),Ht.unlock())});addEventListener("keyup",s=>{Ln[s.code]=0,s.code==="KeyH"&&Ht.horn(!1)});var Yh=!1,Wh=0;sc.addEventListener("mousedown",s=>{Yh=!0,Wh=s.clientX,Ht.unlock()});addEventListener("mouseup",()=>Yh=!1);addEventListener("mousemove",s=>{Yh&&(wt.camDX+=(s.clientX-Wh)*.006,Wh=s.clientX,wt.camDrag=1.5)});ct.bindTouch(wt,Ht);ct.onStart=()=>hp();ct.onPause=()=>up();ct.onDetail=s=>{se.detail=s,Zh()};function g1(){let s=0,e=0;(Ln.KeyA||Ln.ArrowLeft)&&(s-=1),(Ln.KeyD||Ln.ArrowRight)&&(s+=1),(Ln.KeyW||Ln.ArrowUp)&&(e+=1),(Ln.KeyS||Ln.ArrowDown)&&(e-=1),ct.stick.active&&(s=ct.stick.x,e=ct.stick.y),wt.mx=s,wt.my=e,wt.run=Ln.ShiftLeft||Ln.ShiftRight||ct.stick.active&&Math.hypot(ct.stick.x,ct.stick.y)>.92?1:0,wt.hb=Ln.Space||ct.btn.hb?1:0,wt.atk=Ln.Space||ct.btn.atk?1:0,wt.gas=ct.btn.gas,wt.brake=ct.btn.brake}var Fe,Yt=[],On=[],Bn=[],Ce=null,rp=[],Oh=new D;function ys(s,e,t,n,i){let r=new Qa(s,i);return r.place(e,t,n,je),jt.add(r.obj),Yt.push(r),r}function vo(s){let e=Yt.indexOf(s);e>=0&&Yt.splice(e,1),jt.remove(s.obj),s.siren&&(s.siren=null);let t=Bn.indexOf(s);t>=0&&Bn.splice(t,1)}var op=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function x1(s,e){for(let t=0;t<12;t++){let n=_t()*Math.PI*2,i=70+_t()*110,r=s+Math.sin(n)*i,o=e+Math.cos(n)*i,a=je.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=pt(a.s,3,a.e.L-3);Mn.at(a.e,c,$e);let l=$e.x-$e.dz*a.e.lane,h=$e.z+$e.dx*a.e.lane;if(Yt.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-e)<55)continue;let u=ys(pn(op),l,h,Math.atan2($e.dx,$e.dz));Rn.maybeTaxi(u),u.driver="ai",u.ai=new ho(u,je,a.e,c);let f=Math.min(a.e.v,9);return u.vx=$e.dx*f,u.vz=$e.dz*f,u}}var $e={};function v1(s,e){for(let t=0;t<10;t++){let n=_t()*Math.PI*2,i=50+_t()*90,r=je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=pt(r.s,4,r.e.L-4);Mn.at(r.e,o,$e);let a=r.e.r.w/2-1.05,c=$e.x-$e.dz*a,l=$e.z+$e.dx*a;if(Yt.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-e)<40)continue;let h=ys(pn(op),c,l,Math.atan2($e.dx,$e.dz));return h.parked=!0,h}}function ap(s,e,t){let n=je.pedGrid.query(s,e,70,[]);for(let i=0;i<8&&n.length;i++){let r=pn(n),o=_t()*r.L;Mn.at(r,o,$e);let a=Math.hypot($e.x-s,$e.z-e);if(a<(t?10:26)||a>72||je.onDeck($e.x,$e.z,999)&&!r.sw)continue;let c=new uo(je,r,o);return jt.add(c.p.obj),On.push(c),c}}function y1(s){let e=On.indexOf(s);e>=0&&On.splice(e,1),jt.remove(s.p.obj)}function _1(s,e){if(di)return null;for(let t=0;t<10;t++){let n=_t()*Math.PI*2,i=90+_t()*60,r=je.nearestEdge(s+Math.sin(n)*i,e+Math.cos(n)*i,50);if(!r||(Mn.at(r.e,r.s,$e),Math.hypot($e.x-s,$e.z-e)<70))continue;let o=pn(["kombi","kombi","esuv","golfik"]),a=ys(o,$e.x,$e.z,Math.atan2($e.dx,$e.dz),"#eef0f2");return a.driver="police",a.ai=new ho(a,je,r.e,r.s),a.ai.mode="chase",Rn.livery(a,o==="esuv"?"pz25":"pz"),Bn.push(a),a}}var ii={vy:0,punchT:0,hurtT:0};function M1(s,e){let t=co[e],n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");i.fillStyle="#c9ccd2",i.fillRect(0,86,512,42),i.fillStyle="#ffd23a",i.fillRect(0,74,512,8),i.fillStyle="#d7263d",i.fillRect(0,82,512,6),i.fillStyle="#ffffff",i.font="800 62px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e.toUpperCase(),256,40);let r=new ti(n);r.colorSpace=Ct,r.anisotropy=4;let o=new st({map:r,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}),a=t.L*.5,c=a/4,l=(t.clear||.3)+c/2+.12;for(let h of[1,-1]){let u=new ze(new ei(a,c),o);u.position.set(h*(t.W/2+.012),l,-t.L*.06),u.rotation.y=h*Math.PI/2,s.obj.add(u)}}var go=[],b1=new Wt(.16,.05,.22);function Xh(s,e,t){let n=Math.min(.17,(s.crushK||0)+e*.0035);if(s.crushK=n,s.obj.scale.set(1+n*.22,1-n*.5,1-n*.75),t||go.length>70)return;let i=Math.min(8,2+Math.floor(e/3));for(let r=0;r<i;r++){let o=new ze(b1,new st({color:r%3?new Oe(s.paint||"#888"):2237995}));o.position.set(s.x+_t(-.8,.8),s.y+_t(.4,1.1),s.z+_t(-.8,.8)),jt.add(o),go.push({m:o,vx:s.vx*.5+_t(-4,4),vy:_t(2.5,6),vz:s.vz*.5+_t(-4,4),t:0,r:[_t(-9,9),_t(-9,9),_t(-9,9)]})}}function w1(s){for(let e=go.length-1;e>=0;e--){let t=go[e];t.t+=s,t.vy-=16*s,t.m.position.x+=t.vx*s,t.m.position.y+=t.vy*s,t.m.position.z+=t.vz*s;let n=je.surfaceY(t.m.position.x,t.m.position.z,t.m.position.y+1)+.04;t.m.position.y<n&&(t.m.position.y=n,t.vy*=-.3,t.vx*=.6,t.vz*=.6,t.r=[0,0,0]),t.m.rotation.x+=t.r[0]*s,t.m.rotation.y+=t.r[1]*s,t.m.rotation.z+=t.r[2]*s,t.t>6&&(jt.remove(t.m),t.m.material.dispose(),go.splice(e,1))}}function xr(s,e){Fe.x=s,Fe.z=e,Fe.y=je.surfaceY(s,e),Fe.sync()}function S1(s){if(s.driver==="ai"||s.driver==="police"){let t=new uo(je,je.pedEdges[0],0);t.p.x=s.x-Math.cos(s.h)*1.6,t.p.z=s.z+Math.sin(s.h)*1.6,jt.add(t.p.obj),On.push(t),t.flee(Fe.x,Fe.z),_s(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),Ht.shout()}else s.parked&&!s.safe&&_t()<.35&&(s.alarm=6,_s(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,Ce=s,se.inCar=s,Fe.obj.visible=!1;let e=Bn.indexOf(s);e>=0&&Bn.splice(e,1),Ht.door(),ct.flashHint(""),se.mission&&se.mission.onEnter&&se.mission.onEnter(s)}function vr(){let s=Ce;if(!s)return;let e=-Math.cos(s.h),t=Math.sin(s.h),n=s.x+e*1.7,i=s.z+t*1.7;je.collide(n,i,s.y,.4,ic)&&(n=s.x-e*1.7,i=s.z-t*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,Ce=null,se.inCar=null,Fe.obj.visible=!0,Fe.h=s.h,xr(n,i),Ht.door()}var ic={};function _s(s,e){if(di||s<=0||se.mode!=="play")return;se.heat+=s;let t=pt(Math.floor(se.heat),0,5);t>se.wanted&&(se.wanted=t,ct.toast("H\u013DADAN\xDD "+"\u2605".repeat(t)+(e?" \xB7 "+e:""))),se.coolT=0}var Ut={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},E1={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},T1=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],oc=(s,e)=>{let t=je.d.meta;return[(s-t.lon0)*t.mx,(t.lat1-e)*t.my]};function A1(s,e){let t="",n=1e9;for(let i of T1){i.p||(i.p=oc(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-e);r<n&&(n=r,t=i[2])}return t}function R1(){Ut.contacts.push([Ut.contact[0],Ut.contact[1],"Star\xE9 Mesto"]),Ut.races.push([Ut.race[0],Ut.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[e,t,n]of E1[s]){let[i,r]=oc(e,t),o=null,a=1e9;for(let c of je.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;Mn.at(l,l.L/2,$e);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=$e.x-$e.dz*h,f=$e.z+$e.dx*h;if(je.hAt(u,f)<je.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&Ut[s].push(o)}}var C1=[["Most Apollo",17.1281,48.1372,60],["Eurovea a nov\xE9 SND",17.1215,48.1405,60],["Star\xFD most",17.1167,48.1385,45],["Sad Janka Kr\xE1\u013Ea",17.109,48.1345,70],["Pr\xEDstavn\xFD most",17.139,48.134,70],["Ve\u013Ek\xFD Dra\u017Ediak",17.1195,48.1095,90],["\u0160trkoveck\xE9 jazero",17.151,48.1545,80],["Zimn\xFD pr\xEDstav",17.142,48.14,90],["Mal\xFD Dunaj vo Vrakuni",17.199,48.1425,80],["Slovnaft",17.179,48.127,160]],P1=[["Kamenn\xE9 n\xE1mestie: Prior a Hotel Kyjev",2562,1150,40],["K\xE1ce\u010Dko \u2013 terasa s v\xFDh\u013Eadom na Kyjev",2563,1116,9]],yo=(s,e,t)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-e,r[1]-t);o<i&&(i=o,n=r)}return n},rc={};window.__gtbLOC=Ut;window.__gtbPos=()=>({x:Ce?Ce.x:Fe.x,z:Ce?Ce.z:Fe.z,h:Ce?Ce.h:Fe.h,goal:se.mission?se.mission.goal():null});function _o(s,e,t,n){let i=rc[s];return i||(i=rc[s]=m1(n),jt.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(e,je.surfaceY(e,t),t),i.visible=!0,i}function bn(s){rc[s]&&(rc[s].visible=!1)}function ac(){di||(Ut.contacts.forEach((s,e)=>_o("contact"+e,s[0],s[1],"#ffcc33")),Ut.races.forEach((s,e)=>_o("race"+e,s[0],s[1],"#33e0ff")),bn("target"),bn("cp"))}function L1(){let s=null,e=je.edgeGrid.query(Fe.x,Fe.z,650,[]);for(let u=0;u<80&&!s&&e.length;u++){let f=pn(e).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],m=f.p[0][1],v=Math.hypot(d-Fe.x,m-Fe.z);if(v<220||v>650)continue;Mn.at(f,f.L/2,$e);let g=f.r.w/2-1.05;s=[$e.x-$e.dz*g,$e.z+$e.dx*g,Math.atan2($e.dx,$e.dz),f.r.n]}if(!s)return;let t=pn(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=pn(n),o=Fn.cars[t].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[t]:o.acc_},l=ys(t,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[t]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>Ce===l?{x:Ut.garage[0],z:Ut.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",ct.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),_s(1,"majite\u013E vol\xE1 pol\xEDciu"),bn("target"),_o("garage",...Ut.garage,"#7dff6a"))},update(){if(!Yt.includes(l))return Jd("Auto je pre\u010D.");if(l.dmg>260)return Jd("Auto je na \u0161rot.");if(Ce!==l&&_o("target",l.x,l.z,"#ff4fd8"),Ce===l&&Math.hypot(l.x-Ut.garage[0],l.z-Ut.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(se.wanted?0:200);cp(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),vr(),vo(l)}}};bn("contact"),bn("race"),se.mission=h,ct.toast("K\u0160EFT: "+h.text),Ht.blip()}function I1(){let s=je.nearestEdge(Fe.x,Fe.z,80);if(!s)return;let e=s.e,t=[],n={x:Fe.x,z:Fe.z},i=0;for(;t.length<8&&i++<400;){let o=e.b.out.filter(c=>c!==e.rev&&c.r.c>=1);if(!o.length)break;e=pn(o);let a=e.p[e.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<je.W-30&&a[1]<je.H-30&&(t.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(t.length<4)return ct.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:t,par:t.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];_o("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=Ce?Ce.x:Fe.x,l=Ce?Ce.z:Fe.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,Ht.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);cp(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};bn("contact"),bn("race"),se.mission=r,ct.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),Ht.blip()}function cp(s,e){se.money+=e,ct.big("MISIA SPLNEN\xC1",s,"#7dff6a"),Ht.win(),se.mission=null,bn("garage"),bn("target"),bn("cp"),setTimeout(ac,2500)}function Jd(s){ct.big("MISIA ZLYHALA",s,"#ff5a4a"),se.mission=null,bn("garage"),bn("target"),bn("cp"),setTimeout(ac,2500)}function lp(s,e,t,n){se.mode="dead",ct.big(s,e,t,3.2),Ht.fail(),setTimeout(()=>{Ce&&vr(),se.money=Math.max(0,Math.round(se.money*(1-n))),se.wanted=0,se.heat=0,se.hp=100;for(let i of Bn.slice())vo(i);se.mission&&(se.mission=null,bn("garage"),bn("target"),bn("cp")),ac();{let i=Ce?Ce.x:Fe.x,r=Ce?Ce.z:Fe.z,a=Math.hypot(i-Ut.hospital[0],r-Ut.hospital[1])>1400?yo(Ut.contacts,i,r):null,c=a?a[0]+3:Ut.hospital[0],l=a?a[1]+3:Ut.hospital[1];Ce&&vr(),xr(c,l),je.prime(c,l)}Fe.play("idle"),se.mode="play"},3200)}async function N1(){ct.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}vs=new Id(gr);let e=await(await fetch(Fh+"world.json")).json();ct.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),je=new Mn(e,Fh,{mobile:In}),await je.init(n=>ct.loading(.25+n*.15,"Staviam mesto\u2026")),jt.add(je.group),se.world=je,R1(),ct.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await je.prime(...Ut.start),ct.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await Kd(Fh+"models/",n=>ct.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),Fe=new mr(0,!1),jt.add(Fe.obj),xr(...Ut.start);try{let n=je.d.meta;Rn=Nd({sandbox:di,Fe:je,Wt:jt,Tt:Yt,Pn:On,Ln:Bn,we:Fe,pc:()=>Ce,q:se,Ve:ct,vt:Ht,Kn:In,an:kt,Xs:hi,Ye:pt,Ge:mt,Xn:ni,ct:_t,en:pn,fn:gn,Zs:_s,mh:xo,Zn:ii,Yn:Fn,Ks:ys,SGrid:ui,OX:n.ox,OZ:n.oz,moreLandmarks:C1.map(([i,r,o,a])=>[i,...oc(r,o),a]).concat(P1)}),$a.mat=i=>i.name==="Plate"?Rn.plateMat():Rn.gloss(i),Rn.init(),se.x3=()=>Rn}catch(n){console.error("X3",n)}try{xs=Dd(je,jt),se.ven=xs}catch(n){console.error("venues",n)}if(xs)for(let[n,i,r,o]of xs.guests){let a=new mr(-1,!0);a.x=n,a.z=i,a.y=r,a.h=o,a.sync(),a.mixer.update(_t(0,3)),jt.add(a.obj),po.push(a)}Fe.h=Math.PI,ac(),di&&(document.body.classList.add("sandbox"),Ut.contacts.length=0,Ut.races.length=0);let t=je.nearestEdge(Ut.start[0],Ut.start[1]+30,60);if(t){let n=pt(t.s,9,t.e.L-9);[["zubor","#14254d",-4.2],["sugga","#1c2f5e",4.4]].forEach(([r,o,a])=>{Mn.at(t.e,pt(n+a,3,t.e.L-3),$e);let c=t.e.r.w/2-1.2,l=ys(r,$e.x-$e.dz*c,$e.z+$e.dx*c,Math.atan2($e.dx,$e.dz),o);l.parked=!0,l.safe=!0,l.keep=!0,Fn.cars[r].real||M1(l,r)}),Mn.at(t.e,n,$e);let i=t.e.r.w/2+1.6;xr($e.x-$e.dz*i,$e.z+$e.dx*i),Fe.h=Math.atan2($e.dz,-$e.dx),se.camYaw=Math.atan2($e.dx,$e.dz)+Math.PI*.75}for(let n=0;n<10;n++)ap(Fe.x,Fe.z,!0);Zh(),ct.loading(1,""),ct.ready(),se.mode="title",se.titleCam=0,requestAnimationFrame(fp)}function hp(){se.mode==="title"&&(Ht.unlock(),Ht.start(),se.mode="play",ct.play(),se.camYaw=Fe.h+Math.PI)}function up(){se.mode!=="title"&&(se.paused=!se.paused,ct.pause(se.paused),Ht.mute(se.paused))}function Zh(){if(!vs)return;let s=se.detail??1,e=In?[1.6,1.25,1][s]:[2,1.5,1][s],t=Math.min(window.devicePixelRatio||1,e),n=Math.floor(innerWidth*t),i=Math.floor(innerHeight*t);sc.width=n,sc.height=i,gr.setSize(n,i,!1),gr.setViewport(0,0,n,i);let r=vs.setSize(n,i,1,In?[4,0,0][s]:[4,4,0][s]);mn.aspect=r.aspect;let o=r.aspect<1;mn.fov=o?74:58,mn.updateProjectionMatrix(),se.portrait=o}addEventListener("resize",Zh);var Bh=performance.now(),kh=0,Hh=new D,$d=new D,Qd=!1;se.camYaw=0;function fp(s){if(requestAnimationFrame(fp),In&&!se.fixedDt&&s-Bh<31)return;let e=Math.min(.07,(s-Bh)/1e3);if(Bh=s,se.fixedDt&&(e=se.fixedDt),!se.noLoop){if(se.paused){vs.render(jt,mn);return}dp(e),vs.render(jt,mn)}}se.step=dp;se.cars=Yt;se.peds=On;se.police=Bn;se.pl=()=>Fe;se.pc=()=>Ce;se.key=(s,e)=>dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s}));se.spawn=(s,e,t,n,i)=>{let r=ys(s,e,t,n,i);return r.parked=!0,r.keep=!0,r};se.tp=async(s,e)=>{Ce&&vr(),await je.prime(s,e),xr(s,e)};se.ll=(s,e)=>oc(s,e);se.LOC=Ut;se.hY=(s,e)=>je.hAt(s,e);se.render=()=>vs.render(jt,mn);function dp(s){if(se.t+=s,kt.uTime.value=se.t,g1(),(se.mode==="play"||se.mode==="dead")&&(se.tod=(se.tod+s/40)%24),D1(),se.mode==="title"){je.update(pp,mp,6),U1(s),ep(s,!1),Rn.update(s,!0);return}{let e=Ce||Fe,t=Ce?Math.min(60,Math.abs(Ce.speed)*4):0;je.update(e.x+Math.sin(e.h)*t,e.z+Math.cos(e.h)*t,In?4:6)}se.mode==="play"?z1(s):Fe.mixer.update(s),ep(s,!0),Rn.update(s,!1),je.tickDebris(s),w1(s);for(let e of Yt)e.impact>4.2&&Xh(e,e.impact,e!==Ce&&Math.hypot(e.x-Fe.x,e.z-Fe.z)>60),e.broke&&((e===Ce||Math.hypot(e.x-Fe.x,e.z-Fe.z)<50)&&(Ht.thud(),e===Ce&&xo(e.broke==="t"?.3:.16)),e.broke=null);if(xs){if(xs.update(s,kt.uNight.value),po.length&&Math.hypot(Fe.x-po[0].x,Fe.z-po[0].z)<160)for(let e of po)e.mixer.update(s);if(se.mode==="play"&&!Ce){let e=xs.tryDoor(Fe.x,Fe.z,Fe.y);e&&(xr(e[0],e[1]),ct.toast(e[3]))}}if(X1(s),se.mission&&se.mode==="play"&&se.mission.update(s),!di&&!se.mission&&se.mode==="play"){let e=Ce?Ce.x:Fe.x,t=Ce?Ce.z:Fe.z,n=yo(Ut.contacts,e,t),i=yo(Ut.races,e,t);n&&Math.hypot(e-n[0],t-n[1])<4?L1():i&&Math.hypot(e-i[0],t-i[1])<6&&I1()}if(q1(s),se.dbgCam){let e=se.dbgCam;mn.position.set(e[0],e[1],e[2]),mn.lookAt(e[3],e[4],e[5]),Mo.position.copy(mn.position),Kh(e[3],e[5])}Y1(s),Ht.update(se,Ce,Bn,mn)}function D1(){let s=se.tod,e=Math.sin((s-6.2)/12*Math.PI)*.95,t=(s-6.2)/12*Math.PI+Math.PI/2,n=new D(Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)).normalize();ip.uSun.value.copy(n);let i=md(pt((.04-n.y)/.16,0,1));kt.uNight.value=i;let r=pt(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;Cn.color.setRGB(1,mt(.95,.62,r),mt(.88,.38,r)),Cn.intensity=o*mt(3.2,2.2,r)*pt(n.y*6,0,1),nc.color.setRGB(mt(.12,mt(.75,.9,r),o),mt(.16,mt(.85,.65,r),o),mt(.32,mt(1,.6,r),o)),nc.groundColor.setRGB(mt(.05,.42,o),mt(.05,.36,o),mt(.07,.3,o)),nc.intensity=mt(.7,1.15,o),i>.5&&(Cn.intensity=.35*i,Cn.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),se.sunDir=n;let a=new Oe().setRGB(mt(.03,mt(.62,.85,r),o),mt(.04,mt(.72,.5,r),o),mt(.08,mt(.85,.36,r),o));jt.fog.color.copy(a),jt.fog.density=mt(.002,In?.0014:9e-4,o),je.lampHeadMat.color.setRGB(mt(.5,3,i),mt(.45,2.4,i),mt(.35,1.5,i)),je.ufoRing&&je.ufoRing.material.color.setRGB(mt(.6,3,i),mt(.5,2.2,i),mt(.3,1.2,i)),vs.exposure.value=mt(1,1.55,i)}var pp=1804,mp=1476;function U1(s){se.titleCam+=s*.035;let e=pp,t=mp,n=se.titleCam+2.2;mn.position.set(e+Math.sin(n)*330,je.hAt(e,t)+95,t+Math.cos(n)*330),mn.lookAt(e,je.hAt(e,t)+20,t),Kh(e,t),Mo.position.copy(mn.position)}function Kh(s,e){let t=se.sunDir||new D(0,1,0),n=mo*2/Cn.shadow.mapSize.x;s=Math.round(s/n)*n,e=Math.round(e/n)*n;let i=je.hAt(s,e);Cn.target.position.set(s,i,e),Cn.position.set(s+t.x*250,i+t.y*250,e+t.z*250),Cn.target.updateMatrixWorld()}function z1(s){if(wt.act)if(wt.act=0,Ce)Ce.speed<6&&vr();else{let r=qh(3.6);r&&S1(r)}if(Ce){let r=Ce,o=wt.my;wt.gas&&(o=1),wt.brake&&(o=-1),r.thr=o,r.st=-wt.mx,r.hb=wt.hb,Fe.x=r.x,Fe.z=r.z,Fe.y=r.y,r.alarm>0&&(r.alarm-=s),ct.hint("");return}let e=Fe,t=Math.min(1,Math.hypot(wt.mx,wt.my));if(ii.punchT>0&&(ii.punchT-=s),wt.atk&&ii.punchT<=0&&(ii.punchT=.7,e.play("punch",.08,1.4),setTimeout(()=>F1(),220)),t>.08&&ii.punchT<=.25){let r=Math.atan2(wt.mx,wt.my),o=se.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=wt.run?5.2:.9+.75*t;e.h+=ni(o-e.h)*pt(s*10,0,1),e.x+=a*l*s,e.z+=c*l*s,e.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else ii.punchT<=.25&&e.play("idle",.25);je.collide(e.x,e.z,e.y,.35,ic)&&(e.x=ic.x,e.z=ic.z);for(let r of Yt){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=e.x-(r.x+o*c),h=e.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){e.x+=l/u*(f-u),e.z+=h/u*(f-u);let d=r.speed;d>6&&ii.hurtT<=0&&(se.hp-=d*2.2,ii.hurtT=1,Ht.crash(d*.5),ct.flash("#ff2a2a",.35))}}}ii.hurtT>0&&(ii.hurtT-=s),e.x=pt(e.x,2,je.W-2),e.z=pt(e.z,2,je.H-2);let n=je.surfaceY(e.x,e.z,e.y+.8);e.y+=(n-e.y)*pt(s*14,0,1),e.y<je.water-1.2&&(se.hp=0),e.mixer.update(s),e.sync(),se.hp<=0&&lp("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=qh(3.6);ct.hint(i?In?"NAST\xDAP":"[E] nast\xFAp":"")}function qh(s){let e=null,t=s;for(let n of Yt){let i=Math.hypot(n.x-Fe.x,n.z-Fe.z);i<t&&n.speed<7&&n.burn===void 0&&(t=i,e=n)}return e}function F1(){let s=Math.sin(Fe.h),e=Math.cos(Fe.h);for(let t of On){let n=t.x-Fe.x,i=t.z-Fe.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*e)/(r||1)>.3){Ht.punch(),t.hp--,t.hp<=0?(t.knock(s*2,e*2,!1),se.money+=Math.floor(_t()*30)+5):t.flee(Fe.x,Fe.z);for(let o of On)o!==t&&Math.hypot(o.x-t.x,o.z-t.z)<18&&o.flee(Fe.x,Fe.z);_s(.34,"bitka");return}}Ht.whoosh()}function ep(s,e){let t=Ce?Ce.x:Fe.x,n=Ce?Ce.z:Fe.z;if(kh-=s,kh<=0){kh=.35;let a=In?14:22,c=In?10:16,l=Math.round((In?16:26)*(Rn.zoneNow?1.6:1)),h=0,u=0;for(let f of Yt)f.driver==="ai"?h++:f.parked&&u++;h<a&&x1(t,n),u<c&&v1(t,n),On.length<l&&ap(t,n,!1);for(let f of Yt.slice())f===Ce||f.keep||f.driver==="police"||Math.hypot(f.x-t,f.z-n)>230&&vo(f);for(let f of On.slice())(Math.hypot(f.x-t,f.z-n)>105||f.state==="down"&&f.t<0)&&y1(f)}let i=se.t;for(let a of Yt)a.ai&&a.driver!=="police"&&a.ai.update(s,Rn.obst(),i,Ce?null:Fe,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of Yt){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,je,Yt),c.impact>5&&c===Ce&&(Ht.crash(c.impact),xo(c.impact*.02))}for(let c=0;c<Yt.length;c++)for(let l=c+1;l<Yt.length;l++){let h=Yt[c],u=Yt[l],f=jd(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,f>3&&(Xh(h,f),Xh(u,f,!0)),h===Ce||u===Ce))){Ht.crash(f),xo(f*.025);let d=h===Ce?u:h;d.driver==="police"&&_s(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of Yt){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(je,s),a.lights(kt.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar&&Rn.flash(a),a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),k1(a),Ht.boom(),a===Ce&&(vr(),se.hp-=60,ct.flash("#ff8a2a",.6));for(let c of On)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==Ce&&!a.keep)){vo(a);break}}for(let a of On)if(a.update(s,je),a.state!=="down")for(let c of Yt){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,m=f*h+d*u,v=f*u-d*h;if(Math.abs(m)<c.len/2+.3&&Math.abs(v)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),Ht.thud(),c===Ce&&(_s(1,"zrazen\xFD chodec"),xo(.15));for(let g of On)g!==a&&Math.hypot(g.x-a.x,g.z-a.z)<25&&g.flee(a.x,a.z)}else c===Ce&&m>0&&m<9+l*.4&&Math.abs(v)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}W1(s)}var O1=new Wt(.6,.6,.6),B1=new nn({color:16777215,transparent:!0,blending:Si,depthWrite:!1}),gp=220,Ci=new _n(O1,B1,gp);Ci.frustumCulled=!1;Ci.count=0;jt.add(Ci);var fo=[];function k1(s){rp.push({car:s,t:0})}var tp=new ot,H1=new en,G1=new D,V1=new D,np=new Oe;function W1(s){for(let t of rp)if(!(!Yt.includes(t.car)||t.car.burn<-18))for(let n=0;n<3;n++)fo.length<gp&&fo.push({x:t.car.x+(_t()-.5)*2,y:t.car.y+1.2,z:t.car.z+(_t()-.5)*3,vy:2+_t()*3,t:0,life:.6+_t()*.9});let e=0;for(let t=fo.length-1;t>=0;t--){let n=fo[t];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){fo.splice(t,1);continue}let i=n.t/n.life;tp.compose(V1.set(n.x,n.y,n.z),H1,G1.setScalar(1+i*1.5)),Ci.setMatrixAt(e,tp),np.setRGB(mt(4,.3,i),mt(1.8,.25,i),mt(.3,.22,i)),Ci.setColorAt(e,np),e++}Ci.count=e,Ci.instanceMatrix.needsUpdate=!0,Ci.instanceColor&&(Ci.instanceColor.needsUpdate=!0)}var Gh=0;function X1(s){if(di){se.wanted=0,se.heat=0,se.hp=100;return}let e=Ce?Ce.x:Fe.x,t=Ce?Ce.z:Fe.z,n=[0,1,2,3,4,6][se.wanted];Gh-=s,Bn.length<n&&Gh<=0&&(_1(e,t),Gh=3);let i=!1;for(let r of Bn.slice()){if(!r.ai)continue;r.ai.update(s,Rn.obst(),se.t,null,{x:e,z:t});let o=Math.hypot(r.x-e,r.z-t);o<80&&(i=!0),(o>320||se.wanted===0&&o>90)&&vo(r)}if(se.wanted>0?(se.coolT=(se.coolT||0)+s*(i?.25:1),se.coolT>22&&(se.wanted--,se.heat=se.wanted,se.coolT=0,ct.toast(se.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(se.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):se.heat=Math.max(0,se.heat-s*.02),se.wanted>0&&se.mode==="play"){let r=!1;for(let a of Bn)Math.hypot(a.x-e,a.z-t)<(Ce?7.5:6)&&a.speed<6&&(r=!0);let o=Ce?Ce.speed<1.5:!0;se.bustT=r&&o?(se.bustT||0)+s:0,se.bustT>(Ce?2.5:1.2)&&(se.bustT=0,lp("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var gs=0;function xo(s){gs=Math.min(.6,gs+s)}function q1(s){let e=se.portrait;wt.camDrag>0&&(wt.camDrag-=s),ct.look.dx&&(wt.camDX+=ct.look.dx,ct.look.dx=0,wt.camDrag=1.5);let t,n,i,r,o,a;if(Ce){let d=Ce,v=d.fwd<-2?d.h:d.h+Math.PI;wt.camDrag>0?se.camYaw+=wt.camDX:se.camYaw+=ni(v-se.camYaw)*pt(s*3.2,0,1),wt.camDX=0,r=(e?11.5:8.6)+pt(d.speed*.09,0,4),o=e?4.6:3.3,t=d.x,i=d.z,n=d.y+1.3,a=2.2}else wt.camDrag>0?se.camYaw+=wt.camDX:Math.hypot(wt.mx,wt.my)>.2&&wt.my>-.3&&(se.camYaw+=ni(Fe.h+Math.PI-se.camYaw)*pt(s*1.4,0,1)),wt.camDX=0,r=e?6.8:5,o=e?2.9:2.1,t=Fe.x,i=Fe.z,n=Fe.y+1.45,a=1;let c=t+Math.sin(se.camYaw)*r,l=i+Math.cos(se.camYaw)*r,h=je.rayHit(t,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=t+(c-t)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),je.surfaceY(c,l,n+5)+1.2);Oh.set(c,u,l),Qd||(Hh.copy(Oh),Qd=!0),Hh.lerp(Oh,pt(s*(Ce?6:8),0,1));let f=Ce?e?9:4:e?4.5:1.5;if($d.set(t-Math.sin(se.camYaw)*f,n+a*.4+(e?.6:0),i-Math.cos(se.camYaw)*f),mn.position.copy(Hh),gs>0&&(mn.position.x+=(_t()-.5)*gs,mn.position.y+=(_t()-.5)*gs,gs=Math.max(0,gs-s*1.5)),mn.lookAt($d),Mo.position.copy(mn.position),Kh(t,i),Ce&&kt.uNight.value>.2){let d=Ce;ms.intensity=60*kt.uNight.value,ms.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),ms.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),ms.target.updateMatrixWorld()}else ms.intensity=0}var Vh=0;function Y1(s){Vh-=s;let e=Ce?Ce.x:Fe.x,t=Ce?Ce.z:Fe.z;Vh<=0&&(Vh=.25,se.street=je.streetAt(e,t)||(je.onDeck(e,t,(Ce||Fe).y+1)?"Most":""),se.district=A1(e,t));let n=null;se.mission&&(n=se.mission.goal()),ct.update(se,{px:e,pz:t,h:Ce?Ce.h:Fe.h,yaw:se.camYaw,speed:Ce?Ce.speed*3.6:null,goal:n,goalText:se.mission?se.mission.text:di?"Vo\u013En\xE1 jazda po Bratislave"+Rn.goalText():"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body"+Rn.goalText(),markers:[...(di?[]:[yo(Ut.contacts,e,t)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!se.mission})),...(di?[]:[yo(Ut.races,e,t)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!se.mission}))],police:Bn.map(i=>({x:i.x,z:i.z})),inCar:!!Ce,nearCar:!Ce&&!!qh(3.6)},je)}N1().catch(s=>{console.error(s),ct.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
