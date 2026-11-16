(()=>{var yp=Object.create;var Qh=Object.defineProperty;var _p=Object.getOwnPropertyDescriptor;var Mp=Object.getOwnPropertyNames;var bp=Object.getPrototypeOf,wp=Object.prototype.hasOwnProperty;var Ep=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Sp=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Mp(t))!wp.call(s,i)&&i!==e&&Qh(s,i,{get:()=>t[i],enumerable:!(n=_p(t,i))||n.enumerable});return s};var Tp=(s,t,e)=>(e=s!=null?yp(bp(s)):{},Sp(t||!s||!s.__esModule?Qh(e,"default",{value:s,enumerable:!0}):e,s));var md=Ep(($_,nh)=>{"use strict";nh.exports=Za;nh.exports.default=Za;function Za(s,t,e){e=e||2;var n=t&&t.length,i=n?t[0]*e:s.length,r=fd(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=R1(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(var p=e;p<i;p+=e)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return to(r,o,e,a,c,d,0),o}function fd(s,t,e,n,i){var r,o;if(i===eh(s,t,e,n)>0)for(r=t;r<e;r+=n)o=ud(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=ud(r,s[r],s[r+1],o);return o&&Ka(o,o.next)&&(no(o),o=o.next),o}function ms(s,t){if(!s)return s;t||(t=s);var e=s,n;do if(n=!1,!e.steiner&&(Ka(e,e.next)||je(e.prev,e,e.next)===0)){if(no(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function to(s,t,e,n,i,r,o){if(s){!o&&r&&N1(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?S1(s,n,i,r):E1(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),no(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=T1(ms(s),t,e),to(s,t,e,n,i,r,2)):o===2&&A1(s,t,e,n,i,r):to(ms(s),t,e,n,i,r,1);break}}}}function E1(s){var t=s.prev,e=s,n=s.next;if(je(t,e,n)>=0)return!1;for(var i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ur(i,a,r,c,o,l,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function S1(s,t,e,n){var i=s.prev,r=s,o=s.next;if(je(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Ql(d,p,t,e,n),M=Ql(x,g,t,e,n),v=s.prevZ,y=s.nextZ;v&&v.z>=m&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&ur(a,h,c,u,l,f,v.x,v.y)&&je(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ur(a,h,c,u,l,f,y.x,y.y)&&je(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&ur(a,h,c,u,l,f,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ur(a,h,c,u,l,f,y.x,y.y)&&je(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function T1(s,t,e){var n=s;do{var i=n.prev,r=n.next.next;!Ka(i,r)&&dd(i,n,n.next,r)&&eo(i,r)&&eo(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),no(n),no(n.next),n=s=r),n=n.next}while(n!==s);return ms(n)}function A1(s,t,e,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&U1(o,a)){var c=pd(o,a);o=ms(o,o.next),c=ms(c,c.next),to(o,t,e,n,i,r,0),to(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function R1(s,t,e,n){var i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=fd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(z1(l));for(i.sort(C1),r=0;r<i.length;r++)e=P1(i[r],e);return e}function C1(s,t){return s.x-t.x}function P1(s,t){var e=L1(s,t);if(!e)return t;var n=pd(e,s);return ms(n,n.next),ms(e,e.next)}function L1(s,t){var e=t,n=s.x,i=s.y,r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>r&&(r=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&ur(i<h?n:r,i,l,h,i<h?r:n,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(n-e.x),eo(e,s)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&I1(o,e)))&&(o=e,u=f)),e=e.next;while(e!==c);return o}function I1(s,t){return je(s.prev,s,t.prev)<0&&je(t.next,s,s.next)<0}function N1(s,t,e,n){var i=s;do i.z===0&&(i.z=Ql(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,D1(i)}function D1(s){var t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Ql(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function z1(s){var t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ur(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function U1(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!F1(s,t)&&(eo(s,t)&&eo(t,s)&&O1(s,t)&&(je(s.prev,s,t.prev)||je(s,t.prev,t))||Ka(s,t)&&je(s.prev,s,s.next)>0&&je(t.prev,t,t.next)>0)}function je(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ka(s,t){return s.x===t.x&&s.y===t.y}function dd(s,t,e,n){var i=Ya(je(s,t,e)),r=Ya(je(s,t,n)),o=Ya(je(e,n,s)),a=Ya(je(e,n,t));return!!(i!==r&&o!==a||i===0&&qa(s,e,t)||r===0&&qa(s,n,t)||o===0&&qa(e,s,n)||a===0&&qa(e,t,n))}function qa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ya(s){return s>0?1:s<0?-1:0}function F1(s,t){var e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function eo(s,t){return je(s.prev,s,s.next)<0?je(s,t,s.next)>=0&&je(s,s.prev,t)>=0:je(s,t,s.prev)<0||je(s,s.next,t)<0}function O1(s,t){var e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function pd(s,t){var e=new th(s.i,s.x,s.y),n=new th(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ud(s,t,e,n){var i=new th(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function th(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Za.deviation=function(s,t,e,n){var i=t&&t.length,r=i?t[0]*e:s.length,o=Math.abs(eh(s,0,r,e));if(i)for(var a=0,c=t.length;a<c;a++){var l=t[a]*e,h=a<c-1?t[a+1]*e:s.length;o-=Math.abs(eh(s,l,h,e))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,p=n[a+2]*e;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function eh(s,t,e,n){for(var i=0,r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}Za.flatten=function(s){for(var t=s[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<t;o++)e.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,e.holes.push(n))}return e}});var Hl="160";var Ap=0,tu=1,Rp=2;var Ba=1,Cp=2,_i=3,li=0,pn=1,Ue=2;var Oi=0,qs=1,Ei=2,eu=3,nu=4,Pp=5,is=100,Lp=101,Ip=102,iu=103,su=104,Np=200,Dp=201,zp=202,Up=203,jc=204,Jc=205,Fp=206,Op=207,Bp=208,kp=209,Hp=210,Gp=211,Vp=212,Wp=213,Xp=214,qp=0,Yp=1,Zp=2,ta=3,Kp=4,jp=5,Jp=6,$p=7,Gl=0,Qp=1,tm=2,Bi=0,em=1,nm=2,im=3,sm=4,rm=5,om=6,ru="attached",am="detached",kf=300,Ks=301,js=302,$c=303,Qc=304,ka=306,cs=1e3,Un=1001,zr=1002,tn=1003,ea=1004;var Ar=1005;var en=1006,Vl=1007;var qn=1008;var ci=1009,cm=1010,lm=1011,Wl=1012,Hf=1013,Ui=1014,bi=1015,ls=1016,Gf=1017,Vf=1018,rs=1020,hm=1021,Wn=1023,um=1024,fm=1025,os=1026,Js=1027,dm=1028,Wf=1029,pm=1030,Xf=1031,qf=1033,pc=33776,mc=33777,gc=33778,xc=33779,ou=35840,au=35841,cu=35842,lu=35843,Yf=36196,hu=37492,uu=37496,fu=37808,du=37809,pu=37810,mu=37811,gu=37812,xu=37813,vu=37814,yu=37815,_u=37816,Mu=37817,bu=37818,wu=37819,Eu=37820,Su=37821,vc=36492,Tu=36494,Au=36495,mm=36283,Ru=36284,Cu=36285,Pu=36286,Ha=2200,gm=2201,xm=2202,$s=2300,hs=2301,yc=2302,ks=2400,Hs=2401,na=2402,Xl=2500,vm=2501,Zf=0,Ga=1,Qr=2,Kf=3e3,as=3001,ym=3200,_m=3201,ql=0,Mm=1,Sn="",Ce="srgb",ln="srgb-linear",Yl="display-p3",Va="display-p3-linear",ia="linear",We="srgb",sa="rec709",ra="p3";var ws=7680;var Lu=519,bm=512,wm=513,Em=514,jf=515,Sm=516,Tm=517,Am=518,Rm=519,tl=35044;var oa="300 es",el=1035,wi=2e3,aa=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Rr=Math.PI/180,Qs=180/Math.PI;function Xn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function an(s,t,e){return Math.max(t,Math.min(e,s))}function Zl(s,t){return(s%t+t)%t}function Cm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Pm(s,t,e){return s!==t?(e-s)/(t-s):0}function Cr(s,t,e){return(1-e)*s+e*t}function Lm(s,t,e,n){return Cr(s,t,1-Math.exp(-e*n))}function Im(s,t=1){return t-Math.abs(Zl(s,t*2)-t)}function Nm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function zm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Um(s,t){return s+Math.random()*(t-s)}function Fm(s){return s*(.5-Math.random())}function Om(s){s!==void 0&&(Iu=s);let t=Iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bm(s){return s*Rr}function km(s){return s*Qs}function nl(s){return(s&s-1)===0&&s!==0}function Hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ca(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:Rr,RAD2DEG:Qs,generateUUID:Xn,clamp:an,euclideanModulo:Zl,mapLinear:Cm,inverseLerp:Pm,lerp:Cr,damp:Lm,pingpong:Im,smoothstep:Nm,smootherstep:Dm,randInt:zm,randFloat:Um,randFloatSpread:Fm,seededRandom:Om,degToRad:Bm,radToDeg:km,isPowerOfTwo:nl,ceilPowerOfTwo:Hm,floorPowerOfTwo:ca,setQuaternionFromProperEuler:Gm,normalize:Be,denormalize:ai},Tt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Me=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],v=i[4],y=i[7],S=i[2],E=i[5],w=i[8];return r[0]=o*x+a*M+c*S,r[3]=o*g+a*v+c*E,r[6]=o*m+a*y+c*w,r[1]=l*x+h*M+u*S,r[4]=l*g+h*v+u*E,r[7]=l*m+h*y+u*w,r[2]=f*x+d*M+p*S,r[5]=f*g+d*v+p*E,r[8]=f*m+d*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_c.makeScale(t,e)),this}rotate(t){return this.premultiply(_c.makeRotation(-t)),this}translate(t,e){return this.premultiply(_c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_c=new Me;function $f(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vm(){let s=Ur("canvas");return s.style.display="block",s}var Nu={};function Pr(s){s in Nu||(Nu[s]=!0,console.warn(s))}var Du=new Me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new Me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[ln]:{transfer:ia,primaries:sa,toReference:s=>s,fromReference:s=>s},[Ce]:{transfer:We,primaries:sa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Va]:{transfer:ia,primaries:ra,toReference:s=>s.applyMatrix3(zu),fromReference:s=>s.applyMatrix3(Du)},[Yl]:{transfer:We,primaries:ra,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zu),fromReference:s=>s.applyMatrix3(Du).convertLinearToSRGB()}},Wm=new Set([ln,Va]),De={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Wm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=wo[t].toReference,i=wo[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return wo[s].primaries},getTransfer:function(s){return s===Sn?ia:wo[s].transfer}};function Ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Es,la=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=Ur("canvas")),Es.width=t.width,Es.height=t.height;let n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ys(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ys(e[n]/255)*255):e[n]=Ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xm=0,ha=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Xn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bc(i[o].image)):r.push(bc(i[o]))}else r=bc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?la.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qm=0,hn=class s extends Si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Un,i=Un,r=en,o=qn,a=Wn,c=ci,l=s.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Xn(),this.name="",this.source=new ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===as?Ce:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?as:Kf}set encoding(t){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===as?Ce:Sn}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=kf;hn.DEFAULT_ANISOTROPY=1;var Pe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(d+1)/2,S=(m+1)/2,E=(h+f)/4,w=(u+x)/4,C=(p+g)/4;return v>y&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=w/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=C/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===as?Ce:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ha(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sl=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let S=Math.sqrt(v),E=Math.atan2(S,m*M);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S}let y=a*M;if(c=c*g+f*y,l=l*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wc=new O,Uu=new Ke,nn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),So.subVectors(this.max,_r),Ss.subVectors(t.a,_r),Ts.subVectors(t.b,_r),As.subVectors(t.c,_r),Li.subVectors(Ts,Ss),Ii.subVectors(As,Ts),$i.subVectors(Ss,As);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-$i.z,$i.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,$i.z,0,-$i.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-$i.y,$i.x,0];return!Ec(e,Ss,Ts,As,So)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,Ss,Ts,As,So))?!1:(To.crossVectors(Li,Ii),e=[To.x,To.y,To.z],Ec(e,Ss,Ts,As,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pi=[new O,new O,new O,new O,new O,new O,new O,new O],$n=new O,Eo=new nn,Ss=new O,Ts=new O,As=new O,Li=new O,Ii=new O,$i=new O,_r=new O,So=new O,To=new O,Qi=new O;function Ec(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);let a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ym=new nn,Mr=new O,Sc=new O,Fn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ym.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(Sc)),this.expandByPoint(Mr.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new O,Tc=new O,Ao=new O,Ni=new O,Ac=new O,Ro=new O,Rc=new O,tr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Tc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ni.dot(this.direction),c=-Ni.dot(Ao),l=Ni.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Tc).addScaledVector(Ao,f),d}intersectSphere(t,e){mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,i,r){Ac.subVectors(e,t),Ro.subVectors(n,t),Rc.crossVectors(Ac,Ro);let o=this.direction.dot(Rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);let c=a*this.direction.dot(Ro.crossVectors(Ni,Ro));if(c<0)return null;let l=a*this.direction.dot(Ac.cross(Ni));if(l<0||c+l>o)return null;let h=-a*Ni.dot(Rc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Km)}lookAt(t,e,n){let i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Di.crossVectors(n,Dn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Di.crossVectors(n,Dn)),Di.normalize(),Co.crossVectors(Dn,Di),i[0]=Di.x,i[4]=Co.x,i[8]=Dn.x,i[1]=Di.y,i[5]=Co.y,i[9]=Dn.y,i[2]=Di.z,i[6]=Co.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],v=n[7],y=n[11],S=n[15],E=i[0],w=i[4],C=i[8],_=i[12],b=i[1],A=i[5],R=i[9],N=i[13],L=i[2],D=i[6],z=i[10],B=i[14],G=i[3],Y=i[7],F=i[11],H=i[15];return r[0]=o*E+a*b+c*L+l*G,r[4]=o*w+a*A+c*D+l*Y,r[8]=o*C+a*R+c*z+l*F,r[12]=o*_+a*N+c*B+l*H,r[1]=h*E+u*b+f*L+d*G,r[5]=h*w+u*A+f*D+d*Y,r[9]=h*C+u*R+f*z+d*F,r[13]=h*_+u*N+f*B+d*H,r[2]=p*E+x*b+g*L+m*G,r[6]=p*w+x*A+g*D+m*Y,r[10]=p*C+x*R+g*z+m*F,r[14]=p*_+x*N+g*B+m*H,r[3]=M*E+v*b+y*L+S*G,r[7]=M*w+v*A+y*D+S*Y,r[11]=M*C+v*R+y*z+S*F,r[15]=M*_+v*N+y*B+S*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=u*g*l-x*f*l+x*c*d-a*g*d-u*c*m+a*f*m,v=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,y=h*x*l-p*u*l+p*a*d-o*x*d-h*a*m+o*u*m,S=p*u*c-h*x*c-p*a*f+o*x*f+h*a*g-o*u*g,E=e*M+n*v+i*y+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=M*w,t[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*w,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*m+n*c*m)*w,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*w,t[4]=v*w,t[5]=(h*g*r-p*f*r+p*i*d-e*g*d-h*i*m+e*f*m)*w,t[6]=(p*c*r-o*g*r-p*i*l+e*g*l+o*i*m-e*c*m)*w,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*w,t[8]=y*w,t[9]=(p*u*r-h*x*r-p*n*d+e*x*d+h*n*m-e*u*m)*w,t[10]=(o*x*r-p*a*r+p*n*l-e*x*l-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=S*w,t[13]=(h*x*i-p*u*i+p*n*f-e*x*f-h*n*g+e*u*g)*w,t[14]=(p*a*i-o*x*i-p*n*c+e*x*c+o*n*g-e*a*g)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,M=c*l,v=c*h,y=c*u,S=n.x,E=n.y,w=n.z;return i[0]=(1-(x+m))*S,i[1]=(d+y)*S,i[2]=(p-v)*S,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+m))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(p+v)*w,i[9]=(g-M)*w,i[10]=(1-(f+x))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Rs.set(i[0],i[1],i[2]).length(),o=Rs.set(i[4],i[5],i[6]).length(),a=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);let l=1/r,h=1/o,u=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=wi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===wi)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=wi){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h,p,x;if(a===wi)p=(o+r)*u,x=-2*u;else if(a===aa)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new O,Qn=new re,Zm=new O(0,0,0),Km=new O(1,1,1),Di=new O,Co=new O,Dn=new O,Fu=new re,Ou=new Ke,fa=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fa.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jm=0,Bu=new O,Cs=new Ke,gi=new re,Po=new O,br=new O,Jm=new O,$m=new Ke,ku=new O(1,0,0),Hu=new O(0,1,0),Gu=new O(0,0,1),Qm={type:"added"},t0={type:"removed"},Xe=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new O,e=new fa,n=new Ke,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Me}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(br,Po,this.up):gi.lookAt(Po,br,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(gi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,$m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Xe.DEFAULT_UP=new O(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new O,xi=new O,Cc=new O,vi=new O,Ps=new O,Ls=new O,Vu=new O,Pc=new O,Lc=new O,Ic=new O,Lo=!1,Gs=class s{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ti.subVectors(t,e),i.cross(ti);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ti.subVectors(i,e),xi.subVectors(n,e),Cc.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(xi),c=ti.dot(Cc),l=xi.dot(xi),h=xi.dot(Cc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,n,i,r,o,a,c){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static isFrontFacing(t,e,n,i){return ti.subVectors(n,e),xi.subVectors(t,e),ti.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ti.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ps.subVectors(i,n),Ls.subVectors(r,n),Pc.subVectors(t,n);let c=Ps.dot(Pc),l=Ls.dot(Pc);if(c<=0&&l<=0)return e.copy(n);Lc.subVectors(t,i);let h=Ps.dot(Lc),u=Ls.dot(Lc);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ps,o);Ic.subVectors(t,r);let d=Ps.dot(Ic),p=Ls.dot(Ic);if(p>=0&&d<=p)return e.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Ls,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Vu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Vu,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Nc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=De.workingColorSpace){if(t=Zl(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nc(o,r,t+1/3),this.g=Nc(o,r,t),this.b=Nc(o,r,t-1/3)}return De.toWorkingColorSpace(this,i),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Qf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}copyLinearToSRGB(t){return this.r=Mc(t.r),this.g=Mc(t.g),this.b=Mc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return De.fromWorkingColorSpace(_n.copy(this),t),Math.round(an(_n.r*255,0,255))*65536+Math.round(an(_n.g*255,0,255))*256+Math.round(an(_n.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(_n.copy(this),e);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Ce){De.fromWorkingColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,i=_n.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Io);let n=Cr(zi.h,Io.h,e),i=Cr(zi.s,Io.s,e),r=Cr(zi.l,Io.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new kt;kt.NAMES=Qf;var e0=0,Ln=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=qs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Jc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qe=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var sn=new O,No=new Tt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}};var pa=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ma=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}};var n0=0,Vn=new re,Dc=new Xe,Is=new O,zn=new nn,wr=new nn,dn=new O,Ee=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($f(t)?ma:pa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(zn.min,wr.min),zn.expandByPoint(dn),dn.addVectors(zn.max,wr.max),zn.expandByPoint(dn)):(zn.expandByPoint(wr.min),zn.expandByPoint(wr.max))}zn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)dn.fromBufferAttribute(a,l),c&&(Is.fromBufferAttribute(t,l),dn.add(Is)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new O,h[b]=new O;let u=new O,f=new O,d=new O,p=new Tt,x=new Tt,g=new Tt,m=new O,M=new O;function v(b,A,R){u.fromArray(i,b*3),f.fromArray(i,A*3),d.fromArray(i,R*3),p.fromArray(o,b*2),x.fromArray(o,A*2),g.fromArray(o,R*2),f.sub(u),d.sub(u),x.sub(p),g.sub(p);let N=1/(x.x*g.y-g.x*x.y);isFinite(N)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(N),M.copy(d).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(N),l[b].add(m),l[A].add(m),l[R].add(m),h[b].add(M),h[A].add(M),h[R].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,A=y.length;b<A;++b){let R=y[b],N=R.start,L=R.count;for(let D=N,z=N+L;D<z;D+=3)v(n[D+0],n[D+1],n[D+2])}let S=new O,E=new O,w=new O,C=new O;function _(b){w.fromArray(r,b*3),C.copy(w);let A=l[b];S.copy(A),S.sub(w.multiplyScalar(w.dot(A))).normalize(),E.crossVectors(C,A);let N=E.dot(h[b])<0?-1:1;c[b*4]=S.x,c[b*4+1]=S.y,c[b*4+2]=S.z,c[b*4+3]=N}for(let b=0,A=y.length;b<A;++b){let R=y[b],N=R.start,L=R.count;for(let D=N,z=N+L;D<z;D+=3)_(n[D+0]),_(n[D+1]),_(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wu=new re,ts=new tr,Do=new Fn,Xu=new O,Ns=new O,Ds=new O,zs=new O,zc=new O,zo=new O,Uo=new Tt,Fo=new Tt,Oo=new Tt,qu=new O,Yu=new O,Zu=new O,Bo=new O,ko=new O,Lt=class extends Xe{constructor(t=new Ee,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(zc.fromBufferAttribute(u,t),o?zo.addScaledVector(zc,h):zo.addScaledVector(zc.sub(e),h))}e.add(zo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Do.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Do,Xu)===null||ts.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=v;y<S;y+=3){let E=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);i=Ho(this,m,t,n,l,h,u,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Ho(this,o,t,n,l,h,u,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=v;y<S;y+=3){let E=y,w=y+1,C=y+2;i=Ho(this,m,t,n,l,h,u,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=g,v=g+1,y=g+2;i=Ho(this,o,t,n,l,h,u,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function i0(s,t,e,n,i,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===li,a),c===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ko);return l<e.near||l>e.far?null:{distance:l,point:ko.clone(),object:s}}function Ho(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Ns),s.getVertexPosition(c,Ds),s.getVertexPosition(l,zs);let h=i0(s,t,e,n,Ns,Ds,zs,Bo);if(h){i&&(Uo.fromBufferAttribute(i,a),Fo.fromBufferAttribute(i,c),Oo.fromBufferAttribute(i,l),h.uv=Gs.getInterpolation(Bo,Ns,Ds,zs,Uo,Fo,Oo,new Tt)),r&&(Uo.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,c),Oo.fromBufferAttribute(r,l),h.uv1=Gs.getInterpolation(Bo,Ns,Ds,zs,Uo,Fo,Oo,new Tt),h.uv2=h.uv1),o&&(qu.fromBufferAttribute(o,a),Yu.fromBufferAttribute(o,c),Zu.fromBufferAttribute(o,l),h.normal=Gs.getInterpolation(Bo,Ns,Ds,zs,qu,Yu,Zu,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};Gs.getNormal(Ns,Ds,zs,u.normal),h.face=u}return h}var He=class s extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(x,g,m,M,v,y,S,E,w,C,_){let b=y/w,A=S/C,R=y/2,N=S/2,L=E/2,D=w+1,z=C+1,B=0,G=0,Y=new O;for(let F=0;F<z;F++){let H=F*A-N;for(let rt=0;rt<D;rt++){let X=rt*b-R;Y[x]=X*M,Y[g]=H*v,Y[m]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/w),u.push(1-F/C),B+=1}}for(let F=0;F<C;F++)for(let H=0;H<w;H++){let rt=f+H+D*F,X=f+H+D*(F+1),Q=f+(H+1)+D*(F+1),at=f+(H+1)+D*F;c.push(rt,X,at),c.push(X,Q,at),G+=6}a.addGroup(d,G,_),d+=G,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function En(s){let t={};for(let e=0;e<s.length;e++){let n=er(s[e]);for(let i in n)t[i]=n[i]}return t}function s0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function td(s){return s.getRenderTarget()===null?s.outputColorSpace:De.workingColorSpace}var r0={clone:er,merge:En},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nr=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends nr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Us=-90,Fs=1,rl=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Us,Fs,t,e);i.layers=this.layers,this.add(i);let r=new cn(Us,Fs,t,e);r.layers=this.layers,this.add(r);let o=new cn(Us,Fs,t,e);o.layers=this.layers,this.add(o);let a=new cn(Us,Fs,t,e);a.layers=this.layers,this.add(a);let c=new cn(Us,Fs,t,e);c.layers=this.layers,this.add(c);let l=new cn(Us,Fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ga=class extends hn{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===as?Ce:Sn),this.texture=new ga(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new He(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Oi});r.uniforms.tEquirect.value=e;let o=new Lt(i,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=en),new rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Uc=new O,c0=new O,l0=new Me,Mi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Uc.subVectors(n,e).cross(c0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||l0.getNormalMatrix(t),i=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Fn,Go=new O,Fr=class{constructor(t=new Mi,e=new Mi,n=new Mi,i=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,g-d,y-m).normalize(),n[1].setComponents(c+r,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+h,g+p,y+M).normalize(),n[3].setComponents(c-o,f-h,g-p,y-M).normalize(),n[4].setComponents(c-a,f-u,g-x,y-v).normalize(),e===wi)n[5].setComponents(c+a,f+u,g+x,y+v).normalize();else if(e===aa)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Go.x=i.normal.x>0?t.max.x:t.min.x,Go.y=i.normal.y>0?t.max.y:t.min.y,Go.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function h0(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,p=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&p.length===0&&s.bufferSubData(u,0,f),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];e?s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ni=class s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let v=0;v<l;v++){let y=v*u-r;p.push(y,-M,0),x.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let v=M+l*m,y=M+l*(m+1),S=M+1+l*(m+1),E=M+1+l*m;d.push(v,y,E),d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`
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
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,hg=`struct PhysicalMaterial {
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
}`,ug=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,vx=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Nx=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,zx=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:_0,begin_vertex:M0,beginnormal_vertex:b0,bsdfs:w0,iridescence_fragment:E0,bumpmap_pars_fragment:S0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:N0,common:D0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:U0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:B0,emissivemap_pars_fragment:k0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:sg,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:j0,fog_pars_fragment:J0,gradientmap_pars_fragment:$0,lightmap_fragment:Q0,lightmap_pars_fragment:tg,lights_lambert_fragment:eg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:cg,lights_physical_fragment:lg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:fg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:yg,map_particle_fragment:_g,map_particle_pars_fragment:Mg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:wg,morphcolor_vertex:Eg,morphnormal_vertex:Sg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Ig,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Fg,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Hg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Kg,skinbase_vertex:jg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Qg,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:cx,worldpos_vertex:lx,background_vert:hx,background_frag:ux,backgroundCube_vert:fx,backgroundCube_frag:dx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distanceRGBA_vert:vx,distanceRGBA_frag:yx,equirect_vert:_x,equirect_frag:Mx,linedashed_vert:bx,linedashed_frag:wx,meshbasic_vert:Ex,meshbasic_frag:Sx,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Nx,meshphysical_vert:Dx,meshphysical_frag:zx,meshtoon_vert:Ux,meshtoon_frag:Fx,points_vert:Ox,points_frag:Bx,shadow_vert:kx,shadow_frag:Hx,sprite_vert:Gx,sprite_frag:Vx},zt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},oi={basic:{uniforms:En([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:En([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new kt(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:En([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:En([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:En([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new kt(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:En([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:En([zt.points,zt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:En([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:En([zt.common,zt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:En([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:En([zt.sprite,zt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:En([zt.common,zt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:En([zt.lights,zt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};oi.physical={uniforms:En([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var Vo={r:0,b:0,g:0};function Wx(s,t,e,n,i,r,o){let a=new kt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(g,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),M=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ka)?(h===void 0&&(h=new Lt(new He(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:er(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=De.getTransfer(v.colorSpace)!==We,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new ni(2,2),new Tn({name:"BackgroundMaterial",uniforms:er(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=De.getTransfer(v.colorSpace)!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,m){g.getRGB(Vo,td(s)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(a,c)},render:p}}function Xx(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(L,D,z,B,G){let Y=!1;if(o){let F=x(B,z,D);l!==F&&(l=F,d(l.object)),Y=m(L,B,z,G),Y&&M(L,B,z,G)}else{let F=D.wireframe===!0;(l.geometry!==B.id||l.program!==z.id||l.wireframe!==F)&&(l.geometry=B.id,l.program=z.id,l.wireframe=F,Y=!0)}G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,C(L,D,z,B),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function p(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,D,z){let B=z.wireframe===!0,G=a[L.id];G===void 0&&(G={},a[L.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let F=Y[B];return F===void 0&&(F=g(f()),Y[B]=F),F}function g(L){let D=[],z=[],B=[];for(let G=0;G<i;G++)D[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:L,attributes:{},index:null}}function m(L,D,z,B){let G=l.attributes,Y=D.attributes,F=0,H=z.getAttributes();for(let rt in H)if(H[rt].location>=0){let Q=G[rt],at=Y[rt];if(at===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),Q===void 0||Q.attribute!==at||at&&Q.data!==at.data)return!0;F++}return l.attributesNum!==F||l.index!==B}function M(L,D,z,B){let G={},Y=D.attributes,F=0,H=z.getAttributes();for(let rt in H)if(H[rt].location>=0){let Q=Y[rt];Q===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let at={};at.attribute=Q,Q&&Q.data&&(at.data=Q.data),G[rt]=at,F++}l.attributes=G,l.attributesNum=F,l.index=B}function v(){let L=l.newAttributes;for(let D=0,z=L.length;D<z;D++)L[D]=0}function y(L){S(L,0)}function S(L,D){let z=l.newAttributes,B=l.enabledAttributes,G=l.attributeDivisors;z[L]=1,B[L]===0&&(s.enableVertexAttribArray(L),B[L]=1),G[L]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),G[L]=D)}function E(){let L=l.newAttributes,D=l.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==L[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function w(L,D,z,B,G,Y,F){F===!0?s.vertexAttribIPointer(L,D,z,G,Y):s.vertexAttribPointer(L,D,z,B,G,Y)}function C(L,D,z,B){if(n.isWebGL2===!1&&(L.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let G=B.attributes,Y=z.getAttributes(),F=D.defaultAttributeValues;for(let H in Y){let rt=Y[H];if(rt.location>=0){let X=G[H];if(X===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Q=X.normalized,at=X.itemSize,ct=e.get(X);if(ct===void 0)continue;let tt=ct.buffer,lt=ct.type,st=ct.bytesPerElement,ft=n.isWebGL2===!0&&(lt===s.INT||lt===s.UNSIGNED_INT||X.gpuType===Hf);if(X.isInterleavedBufferAttribute){let ot=X.data,U=ot.stride,vt=X.offset;if(ot.isInstancedInterleavedBuffer){for(let mt=0;mt<rt.locationSize;mt++)S(rt.location+mt,ot.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let mt=0;mt<rt.locationSize;mt++)y(rt.location+mt);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let mt=0;mt<rt.locationSize;mt++)w(rt.location+mt,at/rt.locationSize,lt,Q,U*st,(vt+at/rt.locationSize*mt)*st,ft)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<rt.locationSize;ot++)S(rt.location+ot,X.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<rt.locationSize;ot++)y(rt.location+ot);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ot=0;ot<rt.locationSize;ot++)w(rt.location+ot,at/rt.locationSize,lt,Q,at*st,at/rt.locationSize*ot*st,ft)}}else if(F!==void 0){let Q=F[H];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(rt.location,Q);break;case 3:s.vertexAttrib3fv(rt.location,Q);break;case 4:s.vertexAttrib4fv(rt.location,Q);break;default:s.vertexAttrib1fv(rt.location,Q)}}}}E()}function _(){R();for(let L in a){let D=a[L];for(let z in D){let B=D[z];for(let G in B)p(B[G].object),delete B[G];delete D[z]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let D=a[L.id];for(let z in D){let B=D[z];for(let G in B)p(B[G].object),delete B[G];delete D[z]}delete a[L.id]}function A(L){for(let D in a){let z=a[D];if(z[L.id]===void 0)continue;let B=z[L.id];for(let G in B)p(B[G].object),delete B[G];delete z[L.id]}}function R(){N(),h=!0,l!==c&&(l=c,d(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:R,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function qx(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];e.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Yx(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||t.has("OES_texture_float"),S=v&&y,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:E}}function Zx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Mi,a=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,v=M*4,y=m.clippingState||null;c.value=y,y=h(p,f,v,d);for(let S=0;S!==v;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Kx(s){let t=new WeakMap;function e(o,a){return a===$c?o.mapping=Ks:a===Qc&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$c||a===Qc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ol(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=class extends nr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vs=4,Ku=[.125,.215,.35,.446,.526,.582],ss=20,Fc=new ir,ju=new kt,Oc=null,Bc=0,kc=0,ns=(1+Math.sqrt(5))/2,Os=1/ns,Ju=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ns,Os),new O(0,ns,-Os),new O(Os,0,ns),new O(-Os,0,ns),new O(ns,Os,0),new O(-ns,Os,0)],xa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,kc),t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ls,format:Wn,colorSpace:ln,depthBuffer:!1},i=$u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(r)),this._blurMaterial=Jx(r,t,e)}return i}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,n,i){let a=new cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ju),h.toneMapping=Bi,h.autoClear=!1;let d=new Qe({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),p=new Lt(new He,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(ju),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;Wo(i,M*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ks||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ju[(i-1)%Ju.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):ss;g>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);let m=[],M=0;for(let w=0;w<ss;++w){let C=w/x,_=Math.exp(-C*C/2);m.push(_),w===0?M+=_:w<g&&(M+=2*_)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let y=this._sizeLods[i],S=3*y*(i>v-Vs?i-v+Vs:0),E=4*(this._cubeSize-y);Wo(e,S,E,3*y,2*y),c.setRenderTarget(e),c.render(u,Fc)}};function jx(s){let t=[],e=[],n=[],i=s,r=s-Vs+1+Ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Vs?c=Ku[o-s+Vs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*d),v=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,C=E>2?0:-1,_=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(_,x*p*E),v.set(f,g*p*E);let b=[E,E,E,E,E,E];y.set(b,m*p*E)}let S=new Ee;S.setAttribute("position",new Ie(M,x)),S.setAttribute("uv",new Ie(v,g)),S.setAttribute("faceIndex",new Ie(y,m)),t.push(S),i>Vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $u(s,t,e){let n=new ei(s,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Jx(s,t,e){let n=new Float32Array(ss),i=new O(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Qu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function tf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function $x(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$c||c===Qc,h=c===Ks||c===js;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new xa(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new xa(s));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tv(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){let S=M[v+0],E=M[v+1],w=M[v+2];f.push(S,E,E,w,w,S)}}else if(p!==void 0){let M=p.array;x=p.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let S=v+0,E=v+1,w=v+2;f.push(S,E,E,w,w,S)}}else return;let g=new($f(f)?ma:pa)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ev(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),e.update(p,r,1)}function u(d,p,x){if(x===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*c,x),e.update(p,r,x)}function f(d,p,x){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,a,d,0,x);let m=0;for(let M=0;M<x;M++)m+=p[M];e.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function nv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function iv(s,t){return s[0]-t[0]}function sv(s,t){return Math.abs(t[1])-Math.abs(s[1])}function rv(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==p){let L=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;M===!0&&(C=1),v===!0&&(C=2),y===!0&&(C=3);let _=h.attributes.position.count*C,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*b*4*p),R=new ua(A,_,b,p);R.type=bi,R.needsUpdate=!0;let N=C*4;for(let D=0;D<p;D++){let z=S[D],B=E[D],G=w[D],Y=_*b*4*D;for(let F=0;F<z.count;F++){let H=F*N;M===!0&&(o.fromBufferAttribute(z,F),A[Y+H+0]=o.x,A[Y+H+1]=o.y,A[Y+H+2]=o.z,A[Y+H+3]=0),v===!0&&(o.fromBufferAttribute(B,F),A[Y+H+4]=o.x,A[Y+H+5]=o.y,A[Y+H+6]=o.z,A[Y+H+7]=0),y===!0&&(o.fromBufferAttribute(G,F),A[Y+H+8]=o.x,A[Y+H+9]=o.y,A[Y+H+10]=o.z,A[Y+H+11]=G.itemSize===4?o.w:1)}}x={count:p,texture:R,size:new Tt(_,b)},r.set(h,x),h.addEventListener("dispose",L)}let g=0;for(let M=0;M<f.length;M++)g+=f[M];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<d;v++){let y=p[v];y[0]=v,y[1]=f[v]}p.sort(sv);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(iv);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let y=a[v],S=y[0],E=y[1];S!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+v)!==x[S]&&h.setAttribute("morphTarget"+v,x[S]),g&&h.getAttribute("morphNormal"+v)!==g[S]&&h.setAttribute("morphNormal"+v,g[S]),i[v]=E,m+=E):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let M=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ov(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var va=class extends hn{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:os,h!==os&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Ui),n===void 0&&h===Js&&(n=rs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nd=new hn,id=new va(1,1);id.compareFunction=jf;var sd=new ua,rd=new sl,od=new ga,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function hr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ef[i];if(r===void 0&&(r=new Float32Array(i),ef[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function un(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function fn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wa(s,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function av(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;s.uniform2fv(this.addr,t),fn(e,t)}}function lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;s.uniform3fv(this.addr,t),fn(e,t)}}function hv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;s.uniform4fv(this.addr,t),fn(e,t)}}function uv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;of.set(n),s.uniformMatrix2fv(this.addr,!1,of),fn(e,n)}}function fv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;rf.set(n),s.uniformMatrix3fv(this.addr,!1,rf),fn(e,n)}}function dv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;sf.set(n),s.uniformMatrix4fv(this.addr,!1,sf),fn(e,n)}}function pv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;s.uniform2iv(this.addr,t),fn(e,t)}}function gv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;s.uniform3iv(this.addr,t),fn(e,t)}}function xv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;s.uniform4iv(this.addr,t),fn(e,t)}}function vv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;s.uniform2uiv(this.addr,t),fn(e,t)}}function _v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;s.uniform3uiv(this.addr,t),fn(e,t)}}function Mv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;s.uniform4uiv(this.addr,t),fn(e,t)}}function bv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?id:nd;e.setTexture2D(t||r,i)}function wv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rd,i)}function Ev(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||od,i)}function Sv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sd,i)}function Tv(s){switch(s){case 5126:return av;case 35664:return cv;case 35665:return lv;case 35666:return hv;case 35674:return uv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return _v;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Sv}}function Av(s,t){s.uniform1fv(this.addr,t)}function Rv(s,t){let e=hr(t,this.size,2);s.uniform2fv(this.addr,e)}function Cv(s,t){let e=hr(t,this.size,3);s.uniform3fv(this.addr,e)}function Pv(s,t){let e=hr(t,this.size,4);s.uniform4fv(this.addr,e)}function Lv(s,t){let e=hr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Iv(s,t){let e=hr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Nv(s,t){let e=hr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dv(s,t){s.uniform1iv(this.addr,t)}function zv(s,t){s.uniform2iv(this.addr,t)}function Uv(s,t){s.uniform3iv(this.addr,t)}function Fv(s,t){s.uniform4iv(this.addr,t)}function Ov(s,t){s.uniform1uiv(this.addr,t)}function Bv(s,t){s.uniform2uiv(this.addr,t)}function kv(s,t){s.uniform3uiv(this.addr,t)}function Hv(s,t){s.uniform4uiv(this.addr,t)}function Gv(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||nd,r[o])}function Vv(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||rd,r[o])}function Wv(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||od,r[o])}function Xv(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||sd,r[o])}function qv(s){switch(s){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Lv;case 35675:return Iv;case 35676:return Nv;case 5124:case 35670:return Dv;case 35667:case 35671:return zv;case 35668:case 35672:return Uv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Bv;case 36295:return kv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tv(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qv(e.type)}},ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function af(s,t){s.seq.push(t),s.map[t.id]=t}function Yv(s,t,e){let n=s.name,i=n.length;for(Hc.lastIndex=0;;){let r=Hc.exec(n),o=Hc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){af(e,l===void 0?new al(a,s,t):new cl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ll(a),af(e,u)),e=u}}}var Zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Yv(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function cf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Zv=37297,Kv=0;function jv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jv(s){let t=De.getPrimaries(De.workingColorSpace),e=De.getPrimaries(s),n;switch(t===e?n="":t===ra&&e===sa?n="LinearDisplayP3ToLinearSRGB":t===sa&&e===ra&&(n="LinearSRGBToLinearDisplayP3"),s){case ln:case Va:return[n,"LinearTransferOETF"];case Ce:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function lf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+jv(s.getShaderSource(t),o)}else return i}function $v(s,t){let e=Jv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qv(s,t){let e;switch(t){case em:e="Linear";break;case nm:e="Reinhard";break;case im:e="OptimizedCineon";break;case sm:e="ACESFilmic";break;case om:e="AgX";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ty(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ws).join(`
`)}function ny(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ws(s){return s!==""}function hf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(s){return s.replace(sy,oy)}var ry=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oy(s,t){let e=xe[t];if(e===void 0){let n=ry.get(t);if(n!==void 0)e=xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(s){return s.replace(ay,cy)}function cy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function df(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ly(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function hy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case js:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function fy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qp:t="ENVMAP_BLENDING_MIX";break;case tm:t="ENVMAP_BLENDING_ADD";break}return t}function dy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function py(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ly(e),l=hy(e),h=uy(e),u=fy(e),f=dy(e),d=e.isWebGL2?"":ty(e),p=ey(e),x=ny(r),g=i.createProgram(),m,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),m.length>0&&(m+=`
`),M=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),M.length>0&&(M+=`
`)):(m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),M=[d,df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?xe.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,$v("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=hl(o),o=hf(o,e),o=uf(o,e),a=hl(a),a=hf(a,e),a=uf(a,e),o=ff(o),a=ff(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let y=v+m+o,S=v+M+a,E=cf(i,i.VERTEX_SHADER,y),w=cf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,E),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(R){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(E).trim(),D=i.getShaderInfoLog(w).trim(),z=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,w);else{let G=lf(i,E,"vertex"),Y=lf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||D==="")&&(B=!1);B&&(R.diagnostics={runnable:z,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:D,prefix:M}})}i.deleteShader(E),i.deleteShader(w),_=new Zs(i,g),b=iy(i,g)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,Zv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}var my=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fl(t),e.set(t,n)),n}},fl=class{constructor(t){this.id=my++,this.code=t,this.usedTimes=0}};function gy(s,t,e,n,i,r,o){let a=new da,c=new ul,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function g(_,b,A,R,N){let L=R.fog,D=N.geometry,z=_.isMeshStandardMaterial?R.environment:null,B=(_.isMeshStandardMaterial?e:t).get(_.envMap||z),G=B&&B.mapping===ka?B.image.height:null,Y=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let F=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,H=F!==void 0?F.length:0,rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let X,Q,at,ct;if(Y){let k=oi[Y];X=k.vertexShader,Q=k.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,c.update(_),at=c.getVertexShaderID(_),ct=c.getFragmentShaderID(_);let tt=s.getRenderTarget(),lt=N.isInstancedMesh===!0,st=N.isBatchedMesh===!0,ft=!!_.map,ot=!!_.matcap,U=!!B,vt=!!_.aoMap,mt=!!_.lightMap,St=!!_.bumpMap,nt=!!_.normalMap,_t=!!_.displacementMap,yt=!!_.emissiveMap,I=!!_.metalnessMap,P=!!_.roughnessMap,J=_.anisotropy>0,gt=_.clearcoat>0,bt=_.iridescence>0,wt=_.sheen>0,qt=_.transmission>0,Ft=J&&!!_.anisotropyMap,Wt=gt&&!!_.clearcoatMap,xt=gt&&!!_.clearcoatNormalMap,ue=gt&&!!_.clearcoatRoughnessMap,Et=bt&&!!_.iridescenceMap,Re=bt&&!!_.iridescenceThicknessMap,me=wt&&!!_.sheenColorMap,le=wt&&!!_.sheenRoughnessMap,ie=!!_.specularMap,Yt=!!_.specularColorMap,de=!!_.specularIntensityMap,Ne=qt&&!!_.transmissionMap,qe=qt&&!!_.thicknessMap,oe=!!_.gradientMap,Ct=!!_.alphaMap,Z=_.alphaTest>0,Ut=!!_.alphaHash,Ot=!!_.extensions,ae=!!D.attributes.uv1,V=!!D.attributes.uv2,et=!!D.attributes.uv3,W=Bi;return _.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(W=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:st,instancing:lt,instancingColor:lt&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ln,map:ft,matcap:ot,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:G,aoMap:vt,lightMap:mt,bumpMap:St,normalMap:nt,displacementMap:f&&_t,emissiveMap:yt,normalMapObjectSpace:nt&&_.normalMapType===Mm,normalMapTangentSpace:nt&&_.normalMapType===ql,metalnessMap:I,roughnessMap:P,anisotropy:J,anisotropyMap:Ft,clearcoat:gt,clearcoatMap:Wt,clearcoatNormalMap:xt,clearcoatRoughnessMap:ue,iridescence:bt,iridescenceMap:Et,iridescenceThicknessMap:Re,sheen:wt,sheenColorMap:me,sheenRoughnessMap:le,specularMap:ie,specularColorMap:Yt,specularIntensityMap:de,transmission:qt,transmissionMap:Ne,thicknessMap:qe,gradientMap:oe,opaque:_.transparent===!1&&_.blending===qs,alphaMap:Ct,alphaTest:Z,alphaHash:Ut,combine:_.combine,mapUv:ft&&x(_.map.channel),aoMapUv:vt&&x(_.aoMap.channel),lightMapUv:mt&&x(_.lightMap.channel),bumpMapUv:St&&x(_.bumpMap.channel),normalMapUv:nt&&x(_.normalMap.channel),displacementMapUv:_t&&x(_.displacementMap.channel),emissiveMapUv:yt&&x(_.emissiveMap.channel),metalnessMapUv:I&&x(_.metalnessMap.channel),roughnessMapUv:P&&x(_.roughnessMap.channel),anisotropyMapUv:Ft&&x(_.anisotropyMap.channel),clearcoatMapUv:Wt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&x(_.sheenRoughnessMap.channel),specularMapUv:ie&&x(_.specularMap.channel),specularColorMapUv:Yt&&x(_.specularColorMap.channel),specularIntensityMapUv:de&&x(_.specularIntensityMap.channel),transmissionMapUv:Ne&&x(_.transmissionMap.channel),thicknessMapUv:qe&&x(_.thicknessMap.channel),alphaMapUv:Ct&&x(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(nt||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:V,vertexUv3s:et,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(ft||Ct),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:W,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&De.getTransfer(_.map.colorSpace)===We,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ue,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Ot&&_.extensions.derivatives===!0,extensionFragDepth:Ot&&_.extensions.fragDepth===!0,extensionDrawBuffers:Ot&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ot&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ot&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(M(b,_),v(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function M(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function y(_){let b=p[_.type],A;if(b){let R=oi[b];A=r0.clone(R.uniforms)}else A=_.uniforms;return A}function S(_,b){let A;for(let R=0,N=l.length;R<N;R++){let L=l[R];if(L.cacheKey===b){A=L,++A.usedTimes;break}}return A===void 0&&(A=new py(s,b,_,r),l.push(A)),A}function E(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),_.destroy()}}function w(_){c.remove(_)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:C}}function xy(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function vy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,x,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||vy),n.length>1&&n.sort(f||pf),i.length>1&&i.sort(f||pf)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function yy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new mf,s.set(n,[o])):i>=r.length?(o=new mf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _y(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function My(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var by=0;function wy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ey(s,t){let e=new _y,n=My(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);let r=new O,o=new re,a=new re;function c(h,u){let f=0,d=0,p=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let x=0,g=0,m=0,M=0,v=0,y=0,S=0,E=0,w=0,C=0,_=0;h.sort(wy);let b=u===!0?Math.PI:1;for(let R=0,N=h.length;R<N;R++){let L=h[R],D=L.color,z=L.intensity,B=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=D.r*z*b,d+=D.g*z*b,p+=D.b*z*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],z);_++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let F=L.shadow,H=n.get(L);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=G,i.directionalShadowMatrix[x]=L.shadow.matrix,y++}i.directional[x]=Y,x++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(D).multiplyScalar(z*b),Y.distance=B,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[m]=Y;let F=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,F.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=F.matrix,L.castShadow){let H=n.get(L);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.spotShadow[m]=H,i.spotShadowMap[m]=G,E++}m++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(D).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Y,M++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let F=L.shadow,H=n.get(L);H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(z*b),Y.groundColor.copy(L.groundColor).multiplyScalar(z*b),i.hemi[v]=Y,v++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let A=i.hash;(A.directionalLength!==x||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==M||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==E||A.numSpotMaps!==w||A.numLightProbes!==_)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=_,A.directionalLength=x,A.pointLength=g,A.spotLength=m,A.rectAreaLength=M,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=E,A.numSpotMaps=w,A.numLightProbes=_,i.version=by++)}function l(h,u){let f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let y=h[M];if(y.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function gf(s,t){let e=new Ey(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sy(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new gf(s,t),e.set(r,[c])):o>=a.length?(c=new gf(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var dl=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pl=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
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
}`;function Ry(s,t,e){let n=new Fr,i=new Tt,r=new Tt,o=new Pe,a=new dl({depthPacking:_m}),c=new pl,l={},h=e.maxTextureSize,u={[li]:pn,[pn]:li,[Ue]:Ue},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Ty,fragmentShader:Ay}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let m=this.type;this.render=function(E,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let _=s.getRenderTarget(),b=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(Oi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let N=m!==_i&&this.type===_i,L=m===_i&&this.type!==_i;for(let D=0,z=E.length;D<z;D++){let B=E[D],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Y=G.getFrameExtents();if(i.multiply(Y),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,G.mapSize.y=r.y)),G.map===null||N===!0||L===!0){let H=this.type!==_i?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new ei(i.x,i.y,H),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let F=G.getViewportCount();for(let H=0;H<F;H++){let rt=G.getViewport(H);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),R.viewport(o),G.updateMatrices(B,H),n=G.getFrustum(),y(w,C,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===_i&&M(G,C),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(_,b,A)};function M(E,w){let C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,C,d,x,null)}function v(E,w,C,_){let b=null,A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)b=A;else if(b=C.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let R=b.uuid,N=w.uuid,L=l[R];L===void 0&&(L={},l[R]=L);let D=L[N];D===void 0&&(D=b.clone(),L[N]=D,w.addEventListener("dispose",S)),b=D}if(b.visible=w.visible,b.wireframe=w.wireframe,_===_i?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let R=s.properties.get(b);R.light=C}return b}function y(E,w,C,_,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===_i)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let N=t.update(E),L=E.material;if(Array.isArray(L)){let D=N.groups;for(let z=0,B=D.length;z<B;z++){let G=D[z],Y=L[G.materialIndex];if(Y&&Y.visible){let F=v(E,Y,_,b);E.onBeforeShadow(s,E,w,C,N,F,G),s.renderBufferDirect(C,null,N,F,E,G),E.onAfterShadow(s,E,w,C,N,F,G)}}}else if(L.visible){let D=v(E,L,_,b);E.onBeforeShadow(s,E,w,C,N,D,null),s.renderBufferDirect(C,null,N,D,E,null),E.onAfterShadow(s,E,w,C,N,D,null)}}let R=E.children;for(let N=0,L=R.length;N<L;N++)y(R[N],w,C,_,b)}function S(E){E.target.removeEventListener("dispose",S);for(let C in l){let _=l[C],b=E.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function Cy(s,t,e){let n=e.isWebGL2;function i(){let Z=!1,Ut=new Pe,Ot=null,ae=new Pe(0,0,0,0);return{setMask:function(V){Ot!==V&&!Z&&(s.colorMask(V,V,V,V),Ot=V)},setLocked:function(V){Z=V},setClear:function(V,et,W,ht,k){k===!0&&(V*=ht,et*=ht,W*=ht),Ut.set(V,et,W,ht),ae.equals(Ut)===!1&&(s.clearColor(V,et,W,ht),ae.copy(Ut))},reset:function(){Z=!1,Ot=null,ae.set(-1,0,0,0)}}}function r(){let Z=!1,Ut=null,Ot=null,ae=null;return{setTest:function(V){V?st(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(V){Ut!==V&&!Z&&(s.depthMask(V),Ut=V)},setFunc:function(V){if(Ot!==V){switch(V){case qp:s.depthFunc(s.NEVER);break;case Yp:s.depthFunc(s.ALWAYS);break;case Zp:s.depthFunc(s.LESS);break;case ta:s.depthFunc(s.LEQUAL);break;case Kp:s.depthFunc(s.EQUAL);break;case jp:s.depthFunc(s.GEQUAL);break;case Jp:s.depthFunc(s.GREATER);break;case $p:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ot=V}},setLocked:function(V){Z=V},setClear:function(V){ae!==V&&(s.clearDepth(V),ae=V)},reset:function(){Z=!1,Ut=null,Ot=null,ae=null}}}function o(){let Z=!1,Ut=null,Ot=null,ae=null,V=null,et=null,W=null,ht=null,k=null;return{setTest:function(K){Z||(K?st(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(K){Ut!==K&&!Z&&(s.stencilMask(K),Ut=K)},setFunc:function(K,dt,Mt){(Ot!==K||ae!==dt||V!==Mt)&&(s.stencilFunc(K,dt,Mt),Ot=K,ae=dt,V=Mt)},setOp:function(K,dt,Mt){(et!==K||W!==dt||ht!==Mt)&&(s.stencilOp(K,dt,Mt),et=K,W=dt,ht=Mt)},setLocked:function(K){Z=K},setClear:function(K){k!==K&&(s.clearStencil(K),k=K)},reset:function(){Z=!1,Ut=null,Ot=null,ae=null,V=null,et=null,W=null,ht=null,k=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},p=new WeakMap,x=[],g=null,m=!1,M=null,v=null,y=null,S=null,E=null,w=null,C=null,_=new kt(0,0,0),b=0,A=!1,R=null,N=null,L=null,D=null,z=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Y=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=Y>=2);let H=null,rt={},X=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),at=new Pe().fromArray(X),ct=new Pe().fromArray(Q);function tt(Z,Ut,Ot,ae){let V=new Uint8Array(4),et=s.createTexture();s.bindTexture(Z,et),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let W=0;W<Ot;W++)n&&(Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ut,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,V):s.texImage2D(Ut+W,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,V);return et}let lt={};lt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(lt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),st(s.DEPTH_TEST),c.setFunc(ta),yt(!1),I(tu),st(s.CULL_FACE),nt(Oi);function st(Z){f[Z]!==!0&&(s.enable(Z),f[Z]=!0)}function ft(Z){f[Z]!==!1&&(s.disable(Z),f[Z]=!1)}function ot(Z,Ut){return d[Z]!==Ut?(s.bindFramebuffer(Z,Ut),d[Z]=Ut,n&&(Z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ut),Z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ut)),!0):!1}function U(Z,Ut){let Ot=x,ae=!1;if(Z)if(Ot=p.get(Ut),Ot===void 0&&(Ot=[],p.set(Ut,Ot)),Z.isWebGLMultipleRenderTargets){let V=Z.texture;if(Ot.length!==V.length||Ot[0]!==s.COLOR_ATTACHMENT0){for(let et=0,W=V.length;et<W;et++)Ot[et]=s.COLOR_ATTACHMENT0+et;Ot.length=V.length,ae=!0}}else Ot[0]!==s.COLOR_ATTACHMENT0&&(Ot[0]=s.COLOR_ATTACHMENT0,ae=!0);else Ot[0]!==s.BACK&&(Ot[0]=s.BACK,ae=!0);ae&&(e.isWebGL2?s.drawBuffers(Ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ot))}function vt(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}let mt={[is]:s.FUNC_ADD,[Lp]:s.FUNC_SUBTRACT,[Ip]:s.FUNC_REVERSE_SUBTRACT};if(n)mt[iu]=s.MIN,mt[su]=s.MAX;else{let Z=t.get("EXT_blend_minmax");Z!==null&&(mt[iu]=Z.MIN_EXT,mt[su]=Z.MAX_EXT)}let St={[Np]:s.ZERO,[Dp]:s.ONE,[zp]:s.SRC_COLOR,[jc]:s.SRC_ALPHA,[Hp]:s.SRC_ALPHA_SATURATE,[Bp]:s.DST_COLOR,[Fp]:s.DST_ALPHA,[Up]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[kp]:s.ONE_MINUS_DST_COLOR,[Op]:s.ONE_MINUS_DST_ALPHA,[Gp]:s.CONSTANT_COLOR,[Vp]:s.ONE_MINUS_CONSTANT_COLOR,[Wp]:s.CONSTANT_ALPHA,[Xp]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(Z,Ut,Ot,ae,V,et,W,ht,k,K){if(Z===Oi){m===!0&&(ft(s.BLEND),m=!1);return}if(m===!1&&(st(s.BLEND),m=!0),Z!==Pp){if(Z!==M||K!==A){if((v!==is||E!==is)&&(s.blendEquation(s.FUNC_ADD),v=is,E=is),K)switch(Z){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.ONE,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}y=null,S=null,w=null,C=null,_.set(0,0,0),b=0,M=Z,A=K}return}V=V||Ut,et=et||Ot,W=W||ae,(Ut!==v||V!==E)&&(s.blendEquationSeparate(mt[Ut],mt[V]),v=Ut,E=V),(Ot!==y||ae!==S||et!==w||W!==C)&&(s.blendFuncSeparate(St[Ot],St[ae],St[et],St[W]),y=Ot,S=ae,w=et,C=W),(ht.equals(_)===!1||k!==b)&&(s.blendColor(ht.r,ht.g,ht.b,k),_.copy(ht),b=k),M=Z,A=!1}function _t(Z,Ut){Z.side===Ue?ft(s.CULL_FACE):st(s.CULL_FACE);let Ot=Z.side===pn;Ut&&(Ot=!Ot),yt(Ot),Z.blending===qs&&Z.transparent===!1?nt(Oi):nt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),c.setFunc(Z.depthFunc),c.setTest(Z.depthTest),c.setMask(Z.depthWrite),a.setMask(Z.colorWrite);let ae=Z.stencilWrite;l.setTest(ae),ae&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),J(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(Z){R!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),R=Z)}function I(Z){Z!==Ap?(st(s.CULL_FACE),Z!==N&&(Z===tu?s.cullFace(s.BACK):Z===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),N=Z}function P(Z){Z!==L&&(G&&s.lineWidth(Z),L=Z)}function J(Z,Ut,Ot){Z?(st(s.POLYGON_OFFSET_FILL),(D!==Ut||z!==Ot)&&(s.polygonOffset(Ut,Ot),D=Ut,z=Ot)):ft(s.POLYGON_OFFSET_FILL)}function gt(Z){Z?st(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function bt(Z){Z===void 0&&(Z=s.TEXTURE0+B-1),H!==Z&&(s.activeTexture(Z),H=Z)}function wt(Z,Ut,Ot){Ot===void 0&&(H===null?Ot=s.TEXTURE0+B-1:Ot=H);let ae=rt[Ot];ae===void 0&&(ae={type:void 0,texture:void 0},rt[Ot]=ae),(ae.type!==Z||ae.texture!==Ut)&&(H!==Ot&&(s.activeTexture(Ot),H=Ot),s.bindTexture(Z,Ut||lt[Z]),ae.type=Z,ae.texture=Ut)}function qt(){let Z=rt[H];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ie(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Yt(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(Z){at.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),at.copy(Z))}function Ne(Z){ct.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),ct.copy(Z))}function qe(Z,Ut){let Ot=u.get(Ut);Ot===void 0&&(Ot=new WeakMap,u.set(Ut,Ot));let ae=Ot.get(Z);ae===void 0&&(ae=s.getUniformBlockIndex(Ut,Z.name),Ot.set(Z,ae))}function oe(Z,Ut){let ae=u.get(Ut).get(Z);h.get(Ut)!==ae&&(s.uniformBlockBinding(Ut,ae,Z.__bindingPointIndex),h.set(Ut,ae))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},H=null,rt={},d={},p=new WeakMap,x=[],g=null,m=!1,M=null,v=null,y=null,S=null,E=null,w=null,C=null,_=new kt(0,0,0),b=0,A=!1,R=null,N=null,L=null,D=null,z=null,at.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:st,disable:ft,bindFramebuffer:ot,drawBuffers:U,useProgram:vt,setBlending:nt,setMaterial:_t,setFlipSided:yt,setCullFace:I,setLineWidth:P,setPolygonOffset:J,setScissorTest:gt,activeTexture:bt,bindTexture:wt,unbindTexture:qt,compressedTexImage2D:Ft,compressedTexImage3D:Wt,texImage2D:ie,texImage3D:Yt,updateUBOMapping:qe,uniformBlockBinding:oe,texStorage2D:me,texStorage3D:le,texSubImage2D:xt,texSubImage3D:ue,compressedTexSubImage2D:Et,compressedTexSubImage3D:Re,scissor:de,viewport:Ne,reset:Ct}}function Py(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,P){return d?new OffscreenCanvas(I,P):Ur("canvas")}function x(I,P,J,gt){let bt=1;if((I.width>gt||I.height>gt)&&(bt=gt/Math.max(I.width,I.height)),bt<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let wt=P?ca:Math.floor,qt=wt(bt*I.width),Ft=wt(bt*I.height);u===void 0&&(u=p(qt,Ft));let Wt=J?p(qt,Ft):u;return Wt.width=qt,Wt.height=Ft,Wt.getContext("2d").drawImage(I,0,0,qt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+qt+"x"+Ft+")."),Wt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function g(I){return nl(I.width)&&nl(I.height)}function m(I){return a?!1:I.wrapS!==Un||I.wrapT!==Un||I.minFilter!==tn&&I.minFilter!==en}function M(I,P){return I.generateMipmaps&&P&&I.minFilter!==tn&&I.minFilter!==en}function v(I){s.generateMipmap(I)}function y(I,P,J,gt,bt=!1){if(a===!1)return P;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt=P;if(P===s.RED&&(J===s.FLOAT&&(wt=s.R32F),J===s.HALF_FLOAT&&(wt=s.R16F),J===s.UNSIGNED_BYTE&&(wt=s.R8)),P===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(wt=s.R8UI),J===s.UNSIGNED_SHORT&&(wt=s.R16UI),J===s.UNSIGNED_INT&&(wt=s.R32UI),J===s.BYTE&&(wt=s.R8I),J===s.SHORT&&(wt=s.R16I),J===s.INT&&(wt=s.R32I)),P===s.RG&&(J===s.FLOAT&&(wt=s.RG32F),J===s.HALF_FLOAT&&(wt=s.RG16F),J===s.UNSIGNED_BYTE&&(wt=s.RG8)),P===s.RGBA){let qt=bt?ia:De.getTransfer(gt);J===s.FLOAT&&(wt=s.RGBA32F),J===s.HALF_FLOAT&&(wt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(wt=qt===We?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(wt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(wt=s.RGB5_A1)}return(wt===s.R16F||wt===s.R32F||wt===s.RG16F||wt===s.RG32F||wt===s.RGBA16F||wt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function S(I,P,J){return M(I,J)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==en?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function E(I){return I===tn||I===ea||I===Ar?s.NEAREST:s.LINEAR}function w(I){let P=I.target;P.removeEventListener("dispose",w),_(P),P.isVideoTexture&&h.delete(P)}function C(I){let P=I.target;P.removeEventListener("dispose",C),A(P)}function _(I){let P=n.get(I);if(P.__webglInit===void 0)return;let J=I.source,gt=f.get(J);if(gt){let bt=gt[P.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&b(I),Object.keys(gt).length===0&&f.delete(J)}n.remove(I)}function b(I){let P=n.get(I);s.deleteTexture(P.__webglTexture);let J=I.source,gt=f.get(J);delete gt[P.__cacheKey],o.memory.textures--}function A(I){let P=I.texture,J=n.get(I),gt=n.get(P);if(gt.__webglTexture!==void 0&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(J.__webglFramebuffer[bt]))for(let wt=0;wt<J.__webglFramebuffer[bt].length;wt++)s.deleteFramebuffer(J.__webglFramebuffer[bt][wt]);else s.deleteFramebuffer(J.__webglFramebuffer[bt]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[bt])}else{if(Array.isArray(J.__webglFramebuffer))for(let bt=0;bt<J.__webglFramebuffer.length;bt++)s.deleteFramebuffer(J.__webglFramebuffer[bt]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let bt=0;bt<J.__webglColorRenderbuffer.length;bt++)J.__webglColorRenderbuffer[bt]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[bt]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let bt=0,wt=P.length;bt<wt;bt++){let qt=n.get(P[bt]);qt.__webglTexture&&(s.deleteTexture(qt.__webglTexture),o.memory.textures--),n.remove(P[bt])}n.remove(P),n.remove(I)}let R=0;function N(){R=0}function L(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function D(I){let P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function z(I,P){let J=n.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){let gt=I.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(J,I,P);return}}e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+P)}function B(I,P){let J=n.get(I);if(I.version>0&&J.__version!==I.version){at(J,I,P);return}e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+P)}function G(I,P){let J=n.get(I);if(I.version>0&&J.__version!==I.version){at(J,I,P);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+P)}function Y(I,P){let J=n.get(I);if(I.version>0&&J.__version!==I.version){ct(J,I,P);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+P)}let F={[cs]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},H={[tn]:s.NEAREST,[ea]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Vl]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},rt={[bm]:s.NEVER,[Rm]:s.ALWAYS,[wm]:s.LESS,[jf]:s.LEQUAL,[Em]:s.EQUAL,[Am]:s.GEQUAL,[Sm]:s.GREATER,[Tm]:s.NOTEQUAL};function X(I,P,J){if(J?(s.texParameteri(I,s.TEXTURE_WRAP_S,F[P.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,F[P.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,F[P.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,H[P.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,H[P.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(P.wrapS!==Un||P.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,E(P.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,E(P.minFilter)),P.minFilter!==tn&&P.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,rt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let gt=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===tn||P.minFilter!==Ar&&P.minFilter!==qn||P.type===bi&&t.has("OES_texture_float_linear")===!1||a===!1&&P.type===ls&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(s.texParameterf(I,gt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function Q(I,P){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",w));let gt=P.source,bt=f.get(gt);bt===void 0&&(bt={},f.set(gt,bt));let wt=D(P);if(wt!==I.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),bt[wt].usedTimes++;let qt=bt[I.__cacheKey];qt!==void 0&&(bt[I.__cacheKey].usedTimes--,qt.usedTimes===0&&b(P)),I.__cacheKey=wt,I.__webglTexture=bt[wt].texture}return J}function at(I,P,J){let gt=s.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),P.isData3DTexture&&(gt=s.TEXTURE_3D);let bt=Q(I,P),wt=P.source;e.bindTexture(gt,I.__webglTexture,s.TEXTURE0+J);let qt=n.get(wt);if(wt.version!==qt.__version||bt===!0){e.activeTexture(s.TEXTURE0+J);let Ft=De.getPrimaries(De.workingColorSpace),Wt=P.colorSpace===Sn?null:De.getPrimaries(P.colorSpace),xt=P.colorSpace===Sn||Ft===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let ue=m(P)&&g(P.image)===!1,Et=x(P.image,ue,!1,i.maxTextureSize);Et=yt(P,Et);let Re=g(Et)||a,me=r.convert(P.format,P.colorSpace),le=r.convert(P.type),ie=y(P.internalFormat,me,le,P.colorSpace,P.isVideoTexture);X(gt,P,Re);let Yt,de=P.mipmaps,Ne=a&&P.isVideoTexture!==!0&&ie!==Yf,qe=qt.__version===void 0||bt===!0,oe=S(P,Et,Re);if(P.isDepthTexture)ie=s.DEPTH_COMPONENT,a?P.type===bi?ie=s.DEPTH_COMPONENT32F:P.type===Ui?ie=s.DEPTH_COMPONENT24:P.type===rs?ie=s.DEPTH24_STENCIL8:ie=s.DEPTH_COMPONENT16:P.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===os&&ie===s.DEPTH_COMPONENT&&P.type!==Wl&&P.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Ui,le=r.convert(P.type)),P.format===Js&&ie===s.DEPTH_COMPONENT&&(ie=s.DEPTH_STENCIL,P.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=rs,le=r.convert(P.type))),qe&&(Ne?e.texStorage2D(s.TEXTURE_2D,1,ie,Et.width,Et.height):e.texImage2D(s.TEXTURE_2D,0,ie,Et.width,Et.height,0,me,le,null));else if(P.isDataTexture)if(de.length>0&&Re){Ne&&qe&&e.texStorage2D(s.TEXTURE_2D,oe,ie,de[0].width,de[0].height);for(let Ct=0,Z=de.length;Ct<Z;Ct++)Yt=de[Ct],Ne?e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,Yt.width,Yt.height,me,le,Yt.data):e.texImage2D(s.TEXTURE_2D,Ct,ie,Yt.width,Yt.height,0,me,le,Yt.data);P.generateMipmaps=!1}else Ne?(qe&&e.texStorage2D(s.TEXTURE_2D,oe,ie,Et.width,Et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et.width,Et.height,me,le,Et.data)):e.texImage2D(s.TEXTURE_2D,0,ie,Et.width,Et.height,0,me,le,Et.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ne&&qe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ie,de[0].width,de[0].height,Et.depth);for(let Ct=0,Z=de.length;Ct<Z;Ct++)Yt=de[Ct],P.format!==Wn?me!==null?Ne?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,Yt.width,Yt.height,Et.depth,me,Yt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ct,ie,Yt.width,Yt.height,Et.depth,0,Yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?e.texSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,Yt.width,Yt.height,Et.depth,me,le,Yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Ct,ie,Yt.width,Yt.height,Et.depth,0,me,le,Yt.data)}else{Ne&&qe&&e.texStorage2D(s.TEXTURE_2D,oe,ie,de[0].width,de[0].height);for(let Ct=0,Z=de.length;Ct<Z;Ct++)Yt=de[Ct],P.format!==Wn?me!==null?Ne?e.compressedTexSubImage2D(s.TEXTURE_2D,Ct,0,0,Yt.width,Yt.height,me,Yt.data):e.compressedTexImage2D(s.TEXTURE_2D,Ct,ie,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,Yt.width,Yt.height,me,le,Yt.data):e.texImage2D(s.TEXTURE_2D,Ct,ie,Yt.width,Yt.height,0,me,le,Yt.data)}else if(P.isDataArrayTexture)Ne?(qe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ie,Et.width,Et.height,Et.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,me,le,Et.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,Et.width,Et.height,Et.depth,0,me,le,Et.data);else if(P.isData3DTexture)Ne?(qe&&e.texStorage3D(s.TEXTURE_3D,oe,ie,Et.width,Et.height,Et.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,me,le,Et.data)):e.texImage3D(s.TEXTURE_3D,0,ie,Et.width,Et.height,Et.depth,0,me,le,Et.data);else if(P.isFramebufferTexture){if(qe)if(Ne)e.texStorage2D(s.TEXTURE_2D,oe,ie,Et.width,Et.height);else{let Ct=Et.width,Z=Et.height;for(let Ut=0;Ut<oe;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,ie,Ct,Z,0,me,le,null),Ct>>=1,Z>>=1}}else if(de.length>0&&Re){Ne&&qe&&e.texStorage2D(s.TEXTURE_2D,oe,ie,de[0].width,de[0].height);for(let Ct=0,Z=de.length;Ct<Z;Ct++)Yt=de[Ct],Ne?e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,me,le,Yt):e.texImage2D(s.TEXTURE_2D,Ct,ie,me,le,Yt);P.generateMipmaps=!1}else Ne?(qe&&e.texStorage2D(s.TEXTURE_2D,oe,ie,Et.width,Et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,me,le,Et)):e.texImage2D(s.TEXTURE_2D,0,ie,me,le,Et);M(P,Re)&&v(gt),qt.__version=wt.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ct(I,P,J){if(P.image.length!==6)return;let gt=Q(I,P),bt=P.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+J);let wt=n.get(bt);if(bt.version!==wt.__version||gt===!0){e.activeTexture(s.TEXTURE0+J);let qt=De.getPrimaries(De.workingColorSpace),Ft=P.colorSpace===Sn?null:De.getPrimaries(P.colorSpace),Wt=P.colorSpace===Sn||qt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let xt=P.isCompressedTexture||P.image[0].isCompressedTexture,ue=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let Ct=0;Ct<6;Ct++)!xt&&!ue?Et[Ct]=x(P.image[Ct],!1,!0,i.maxCubemapSize):Et[Ct]=ue?P.image[Ct].image:P.image[Ct],Et[Ct]=yt(P,Et[Ct]);let Re=Et[0],me=g(Re)||a,le=r.convert(P.format,P.colorSpace),ie=r.convert(P.type),Yt=y(P.internalFormat,le,ie,P.colorSpace),de=a&&P.isVideoTexture!==!0,Ne=wt.__version===void 0||gt===!0,qe=S(P,Re,me);X(s.TEXTURE_CUBE_MAP,P,me);let oe;if(xt){de&&Ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Yt,Re.width,Re.height);for(let Ct=0;Ct<6;Ct++){oe=Et[Ct].mipmaps;for(let Z=0;Z<oe.length;Z++){let Ut=oe[Z];P.format!==Wn?le!==null?de?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z,0,0,Ut.width,Ut.height,le,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z,0,0,Ut.width,Ut.height,le,ie,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z,Yt,Ut.width,Ut.height,0,le,ie,Ut.data)}}}else{oe=P.mipmaps,de&&Ne&&(oe.length>0&&qe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Yt,Et[0].width,Et[0].height));for(let Ct=0;Ct<6;Ct++)if(ue){de?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Et[Ct].width,Et[Ct].height,le,ie,Et[Ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Yt,Et[Ct].width,Et[Ct].height,0,le,ie,Et[Ct].data);for(let Z=0;Z<oe.length;Z++){let Ot=oe[Z].image[Ct].image;de?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z+1,0,0,Ot.width,Ot.height,le,ie,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z+1,Yt,Ot.width,Ot.height,0,le,ie,Ot.data)}}else{de?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,le,ie,Et[Ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Yt,le,ie,Et[Ct]);for(let Z=0;Z<oe.length;Z++){let Ut=oe[Z];de?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z+1,0,0,le,ie,Ut.image[Ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Z+1,Yt,le,ie,Ut.image[Ct])}}}M(P,me)&&v(s.TEXTURE_CUBE_MAP),wt.__version=bt.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function tt(I,P,J,gt,bt,wt){let qt=r.convert(J.format,J.colorSpace),Ft=r.convert(J.type),Wt=y(J.internalFormat,qt,Ft,J.colorSpace);if(!n.get(P).__hasExternalTextures){let ue=Math.max(1,P.width>>wt),Et=Math.max(1,P.height>>wt);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?e.texImage3D(bt,wt,Wt,ue,Et,P.depth,0,qt,Ft,null):e.texImage2D(bt,wt,Wt,ue,Et,0,qt,Ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),nt(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,bt,n.get(J).__webglTexture,0,St(P)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,bt,n.get(J).__webglTexture,wt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(I,P,J){if(s.bindRenderbuffer(s.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let gt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||nt(P)){let bt=P.depthTexture;bt&&bt.isDepthTexture&&(bt.type===bi?gt=s.DEPTH_COMPONENT32F:bt.type===Ui&&(gt=s.DEPTH_COMPONENT24));let wt=St(P);nt(P)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,gt,P.width,P.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,P.width,P.height)}else s.renderbufferStorage(s.RENDERBUFFER,gt,P.width,P.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){let gt=St(P);J&&nt(P)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,s.DEPTH24_STENCIL8,P.width,P.height):nt(P)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,s.DEPTH24_STENCIL8,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{let gt=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let bt=0;bt<gt.length;bt++){let wt=gt[bt],qt=r.convert(wt.format,wt.colorSpace),Ft=r.convert(wt.type),Wt=y(wt.internalFormat,qt,Ft,wt.colorSpace),xt=St(P);J&&nt(P)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,Wt,P.width,P.height):nt(P)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,Wt,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,P.width,P.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),z(P.depthTexture,0);let gt=n.get(P.depthTexture).__webglTexture,bt=St(P);if(P.depthTexture.format===os)nt(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0);else if(P.depthTexture.format===Js)nt(P)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function ft(I){let P=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");st(P.__webglFramebuffer,I)}else if(J){P.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)e.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[gt]),P.__webglDepthbuffer[gt]=s.createRenderbuffer(),lt(P.__webglDepthbuffer[gt],I,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),lt(P.__webglDepthbuffer,I,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(I,P,J){let gt=n.get(I);P!==void 0&&tt(gt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ft(I)}function U(I){let P=I.texture,J=n.get(I),gt=n.get(P);I.addEventListener("dispose",C),I.isWebGLMultipleRenderTargets!==!0&&(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=P.version,o.memory.textures++);let bt=I.isWebGLCubeRenderTarget===!0,wt=I.isWebGLMultipleRenderTargets===!0,qt=g(I)||a;if(bt){J.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(a&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[Ft]=[];for(let Wt=0;Wt<P.mipmaps.length;Wt++)J.__webglFramebuffer[Ft][Wt]=s.createFramebuffer()}else J.__webglFramebuffer[Ft]=s.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ft=0;Ft<P.mipmaps.length;Ft++)J.__webglFramebuffer[Ft]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(wt)if(i.drawBuffers){let Ft=I.texture;for(let Wt=0,xt=Ft.length;Wt<xt;Wt++){let ue=n.get(Ft[Wt]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&nt(I)===!1){let Ft=wt?P:[P];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Wt=0;Wt<Ft.length;Wt++){let xt=Ft[Wt];J.__webglColorRenderbuffer[Wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Wt]);let ue=r.convert(xt.format,xt.colorSpace),Et=r.convert(xt.type),Re=y(xt.internalFormat,ue,Et,xt.colorSpace,I.isXRRenderTarget===!0),me=St(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Re,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,J.__webglColorRenderbuffer[Wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),X(s.TEXTURE_CUBE_MAP,P,qt);for(let Ft=0;Ft<6;Ft++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let Wt=0;Wt<P.mipmaps.length;Wt++)tt(J.__webglFramebuffer[Ft][Wt],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Wt);else tt(J.__webglFramebuffer[Ft],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(P,qt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){let Ft=I.texture;for(let Wt=0,xt=Ft.length;Wt<xt;Wt++){let ue=Ft[Wt],Et=n.get(ue);e.bindTexture(s.TEXTURE_2D,Et.__webglTexture),X(s.TEXTURE_2D,ue,qt),tt(J.__webglFramebuffer,I,ue,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,0),M(ue,qt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let Ft=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?Ft=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Ft,gt.__webglTexture),X(Ft,P,qt),a&&P.mipmaps&&P.mipmaps.length>0)for(let Wt=0;Wt<P.mipmaps.length;Wt++)tt(J.__webglFramebuffer[Wt],I,P,s.COLOR_ATTACHMENT0,Ft,Wt);else tt(J.__webglFramebuffer,I,P,s.COLOR_ATTACHMENT0,Ft,0);M(P,qt)&&v(Ft),e.unbindTexture()}I.depthBuffer&&ft(I)}function vt(I){let P=g(I)||a,J=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let gt=0,bt=J.length;gt<bt;gt++){let wt=J[gt];if(M(wt,P)){let qt=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ft=n.get(wt).__webglTexture;e.bindTexture(qt,Ft),v(qt),e.unbindTexture()}}}function mt(I){if(a&&I.samples>0&&nt(I)===!1){let P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],J=I.width,gt=I.height,bt=s.COLOR_BUFFER_BIT,wt=[],qt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(I),Wt=I.isWebGLMultipleRenderTargets===!0;if(Wt)for(let xt=0;xt<P.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let xt=0;xt<P.length;xt++){wt.push(s.COLOR_ATTACHMENT0+xt),I.depthBuffer&&wt.push(qt);let ue=Ft.__ignoreDepthValues!==void 0?Ft.__ignoreDepthValues:!1;if(ue===!1&&(I.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),Wt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[xt]),ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[qt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[qt])),Wt){let Et=n.get(P[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,J,gt,0,0,J,gt,bt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Wt)for(let xt=0;xt<P.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[xt]);let ue=n.get(P[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,ue,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}}function St(I){return Math.min(i.maxSamples,I.samples)}function nt(I){let P=n.get(I);return a&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function _t(I){let P=o.render.frame;h.get(I)!==P&&(h.set(I,P),I.update())}function yt(I,P){let J=I.colorSpace,gt=I.format,bt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===el||J!==ln&&J!==Sn&&(De.getTransfer(J)===We?a===!1?t.has("EXT_sRGB")===!0&&gt===Wn?(I.format=el,I.minFilter=en,I.generateMipmaps=!1):P=la.sRGBToLinear(P):(gt!==Wn||bt!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ot,this.setupRenderTarget=U,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=nt}function Ly(s,t,e){let n=e.isWebGL2;function i(r,o=Sn){let a,c=De.getTransfer(o);if(r===ci)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cm)return s.BYTE;if(r===lm)return s.SHORT;if(r===Wl)return s.UNSIGNED_SHORT;if(r===Hf)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===ls)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hm)return s.ALPHA;if(r===Wn)return s.RGBA;if(r===um)return s.LUMINANCE;if(r===fm)return s.LUMINANCE_ALPHA;if(r===os)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===el)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===dm)return s.RED;if(r===Wf)return s.RED_INTEGER;if(r===pm)return s.RG;if(r===Xf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===xc)if(c===We)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ou||r===au||r===cu||r===lu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ou)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===au)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hu||r===uu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hu)return c===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===vu||r===yu||r===_u||r===Mu||r===bu||r===wu||r===Eu||r===Su)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===du)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_u)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eu)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Su)return c===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc||r===Tu||r===Au)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vc)return c===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Au)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mm||r===Ru||r===Cu||r===Pu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ru)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ml=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Le=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iy={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gl=class extends Si{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=e.getContextAttributes(),g=null,m=null,M=[],v=[],y=new Tt,S=null,E=new cn;E.layers.enable(1),E.viewport=new Pe;let w=new cn;w.layers.enable(2),w.viewport=new Pe;let C=[E,w],_=new ml;_.layers.enable(1),_.layers.enable(2);let b=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new Lr,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new Lr,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new Lr,M[X]=Q),Q.getHandSpace()};function R(X){let Q=v.indexOf(X.inputSource);if(Q===-1)return;let at=M[Q];at!==void 0&&(at.update(X.inputSource,X.frame,l||o),at.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",L);for(let X=0;X<M.length;X++){let Q=v[X];Q!==null&&(v[X]=null,M[X].disconnect(Q))}b=null,A=null,t.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",N),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new ei(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,at=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Js:os,at=x.stencil?rs:Ui);let tt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new ei(f.textureWidth,f.textureHeight,{format:Wn,type:ci,depthTexture:new va(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let lt=t.properties.get(m);lt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(X){for(let Q=0;Q<X.removed.length;Q++){let at=X.removed[Q],ct=v.indexOf(at);ct>=0&&(v[ct]=null,M[ct].disconnect(at))}for(let Q=0;Q<X.added.length;Q++){let at=X.added[Q],ct=v.indexOf(at);if(ct===-1){for(let lt=0;lt<M.length;lt++)if(lt>=v.length){v.push(at),ct=lt;break}else if(v[lt]===null){v[lt]=at,ct=lt;break}if(ct===-1)break}let tt=M[ct];tt&&tt.connect(at)}}let D=new O,z=new O;function B(X,Q,at){D.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(at.matrixWorld);let ct=D.distanceTo(z),tt=Q.projectionMatrix.elements,lt=at.projectionMatrix.elements,st=tt[14]/(tt[10]-1),ft=tt[14]/(tt[10]+1),ot=(tt[9]+1)/tt[5],U=(tt[9]-1)/tt[5],vt=(tt[8]-1)/tt[0],mt=(lt[8]+1)/lt[0],St=st*vt,nt=st*mt,_t=ct/(-vt+mt),yt=_t*-vt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(yt),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let I=st+_t,P=ft+_t,J=St-yt,gt=nt+(ct-yt),bt=ot*ft/P*I,wt=U*ft/P*I;X.projectionMatrix.makePerspective(J,gt,bt,wt,I,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function G(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.near=w.near=E.near=X.near,_.far=w.far=E.far=X.far,(b!==_.near||A!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,A=_.far);let Q=X.parent,at=_.cameras;G(_,Q);for(let ct=0;ct<at.length;ct++)G(at[ct],Q);at.length===2?B(_,E,w):_.projectionMatrix.copy(E.projectionMatrix),Y(X,_,Q)};function Y(X,Q,at){at===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(at.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let F=null;function H(X,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let ct=!1;at.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let tt=0;tt<at.length;tt++){let lt=at[tt],st=null;if(d!==null)st=d.getViewport(lt);else{let ot=u.getViewSubImage(f,lt);st=ot.viewport,tt===0&&(t.setRenderTargetTextures(m,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(m))}let ft=C[tt];ft===void 0&&(ft=new cn,ft.layers.enable(tt),ft.viewport=new Pe,C[tt]=ft),ft.matrix.fromArray(lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(st.x,st.y,st.width,st.height),tt===0&&(_.matrix.copy(ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(ft)}}for(let at=0;at<M.length;at++){let ct=v[at],tt=M[at];ct!==null&&tt!==void 0&&tt.update(ct,Q,l||o)}F&&F(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let rt=new ed;rt.setAnimationLoop(H),this.setAnimationLoop=function(X){F=X},this.dispose=function(){}}};function Ny(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,td(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dy(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=i[M.id];y===void 0&&(p(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",g));let S=v.program;n.updateUBOMapping(M,S);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let v=u();M.__bindingPointIndex=v;let y=s.createBuffer(),S=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=i[M.id],y=M.uniforms,S=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let _=0,b=C.length;_<b;_++){let A=C[_];if(d(A,E,_,S)===!0){let R=A.__offset,N=Array.isArray(A.value)?A.value:[A.value],L=0;for(let D=0;D<N.length;D++){let z=N[D],B=x(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,R+L,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,v,y,S){let E=M.value,w=v+"_"+y;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{let C=S[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(M){let v=M.uniforms,y=0,S=16;for(let w=0,C=v.length;w<C;w++){let _=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,A=_.length;b<A;b++){let R=_[b],N=Array.isArray(R.value)?R.value:[R.value];for(let L=0,D=N.length;L<D;L++){let z=N[L],B=x(z),G=y%S;G!==0&&S-G<B.boundary&&(y+=S-G),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=B.storage}}}let E=y%S;return E>0&&(y+=S-E),M.__size=y,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var Or=class{constructor(t={}){let{canvas:e=Vm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;let v=this,y=!1,S=0,E=0,w=null,C=-1,_=null,b=new Pe,A=new Pe,R=null,N=new kt(0),L=0,D=e.width,z=e.height,B=1,G=null,Y=null,F=new Pe(0,0,D,z),H=new Pe(0,0,D,z),rt=!1,X=new Fr,Q=!1,at=!1,ct=null,tt=new re,lt=new Tt,st=new O,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return w===null?B:1}let U=n;function vt(T,q){for(let j=0;j<T.length;j++){let it=T[j],$=e.getContext(it,q);if($!==null)return $}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),U===null){let q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),U=vt(q,T),U===null)throw vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,St,nt,_t,yt,I,P,J,gt,bt,wt,qt,Ft,Wt,xt,ue,Et,Re,me,le,ie,Yt,de,Ne;function qe(){mt=new Qx(U),St=new Yx(U,mt,t),mt.init(St),Yt=new Ly(U,mt,St),nt=new Cy(U,mt,St),_t=new nv(U),yt=new xy,I=new Py(U,mt,nt,yt,St,Yt,_t),P=new Kx(v),J=new $x(v),gt=new h0(U,St),de=new Xx(U,mt,gt,St),bt=new tv(U,gt,_t,de),wt=new ov(U,bt,gt,_t),me=new rv(U,St,I),ue=new Zx(yt),qt=new gy(v,P,J,mt,St,de,ue),Ft=new Ny(v,yt),Wt=new yy,xt=new Sy(mt,St),Re=new Wx(v,P,J,nt,wt,f,c),Et=new Ry(v,wt,St),Ne=new Dy(U,_t,St,nt),le=new qx(U,mt,_t,St),ie=new ev(U,mt,_t,St),_t.programs=qt.programs,v.capabilities=St,v.extensions=mt,v.properties=yt,v.renderLists=Wt,v.shadowMap=Et,v.state=nt,v.info=_t}qe();let oe=new gl(v,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(D,z,!1))},this.getSize=function(T){return T.set(D,z)},this.setSize=function(T,q,j=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,z=q,e.width=Math.floor(T*B),e.height=Math.floor(q*B),j===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(D*B,z*B).floor()},this.setDrawingBufferSize=function(T,q,j){D=T,z=q,B=j,e.width=Math.floor(T*j),e.height=Math.floor(q*j),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,q,j,it){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,q,j,it),nt.viewport(b.copy(F).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(H)},this.setScissor=function(T,q,j,it){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,q,j,it),nt.scissor(A.copy(H).multiplyScalar(B).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){nt.setScissorTest(rt=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,q=!0,j=!0){let it=0;if(T){let $=!1;if(w!==null){let At=w.texture.format;$=At===qf||At===Xf||At===Wf}if($){let At=w.texture.type,Bt=At===ci||At===Ui||At===Wl||At===rs||At===Gf||At===Vf,Vt=Re.getClearColor(),Jt=Re.getClearAlpha(),ee=Vt.r,Rt=Vt.g,Gt=Vt.b;Bt?(d[0]=ee,d[1]=Rt,d[2]=Gt,d[3]=Jt,U.clearBufferuiv(U.COLOR,0,d)):(p[0]=ee,p[1]=Rt,p[2]=Gt,p[3]=Jt,U.clearBufferiv(U.COLOR,0,p))}else it|=U.COLOR_BUFFER_BIT}q&&(it|=U.DEPTH_BUFFER_BIT),j&&(it|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Wt.dispose(),xt.dispose(),yt.dispose(),P.dispose(),J.dispose(),wt.dispose(),de.dispose(),Ne.dispose(),qt.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",k),oe.removeEventListener("sessionend",K),ct&&(ct.dispose(),ct=null),dt.stop()};function Ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=_t.autoReset,q=Et.enabled,j=Et.autoUpdate,it=Et.needsUpdate,$=Et.type;qe(),_t.autoReset=T,Et.enabled=q,Et.autoUpdate=j,Et.needsUpdate=it,Et.type=$}function Ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){let q=T.target;q.removeEventListener("dispose",Ot),ae(q)}function ae(T){V(T),yt.remove(T)}function V(T){let q=yt.get(T).programs;q!==void 0&&(q.forEach(function(j){qt.releaseProgram(j)}),T.isShaderMaterial&&qt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,j,it,$,At){q===null&&(q=ft);let Bt=$.isMesh&&$.matrixWorld.determinant()<0,Vt=Te(T,q,j,it,$);nt.setMaterial(it,Bt);let Jt=j.index,ee=1;if(it.wireframe===!0){if(Jt=bt.getWireframeAttribute(j),Jt===void 0)return;ee=2}let Rt=j.drawRange,Gt=j.attributes.position,$t=Rt.start*ee,fe=(Rt.start+Rt.count)*ee;At!==null&&($t=Math.max($t,At.start*ee),fe=Math.min(fe,(At.start+At.count)*ee)),Jt!==null?($t=Math.max($t,0),fe=Math.min(fe,Jt.count)):Gt!=null&&($t=Math.max($t,0),fe=Math.min(fe,Gt.count));let Ae=fe-$t;if(Ae<0||Ae===1/0)return;de.setup($,it,Vt,j,Jt);let Hn,Fe=le;if(Jt!==null&&(Hn=gt.get(Jt),Fe=ie,Fe.setIndex(Hn)),$.isMesh)it.wireframe===!0?(nt.setLineWidth(it.wireframeLinewidth*ot()),Fe.setMode(U.LINES)):Fe.setMode(U.TRIANGLES);else if($.isLine){let _e=it.linewidth;_e===void 0&&(_e=1),nt.setLineWidth(_e*ot()),$.isLineSegments?Fe.setMode(U.LINES):$.isLineLoop?Fe.setMode(U.LINE_LOOP):Fe.setMode(U.LINE_STRIP)}else $.isPoints?Fe.setMode(U.POINTS):$.isSprite&&Fe.setMode(U.TRIANGLES);if($.isBatchedMesh)Fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Fe.renderInstances($t,Ae,$.count);else if(j.isInstancedBufferGeometry){let _e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hc=Math.min(j.instanceCount,_e);Fe.renderInstances($t,Ae,hc)}else Fe.render($t,Ae)};function et(T,q,j){T.transparent===!0&&T.side===Ue&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,se(T,q,j),T.side=li,T.needsUpdate=!0,se(T,q,j),T.side=Ue):se(T,q,j)}this.compile=function(T,q,j=null){j===null&&(j=T),g=xt.get(j),g.init(),M.push(g),j.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(v._useLegacyLights);let it=new Set;return T.traverse(function($){let At=$.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let Vt=At[Bt];et(Vt,j,$),it.add(Vt)}else et(At,j,$),it.add(At)}),M.pop(),g=null,it},this.compileAsync=function(T,q,j=null){let it=this.compile(T,q,j);return new Promise($=>{function At(){if(it.forEach(function(Bt){yt.get(Bt).currentProgram.isReady()&&it.delete(Bt)}),it.size===0){$(T);return}setTimeout(At,10)}mt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let W=null;function ht(T){W&&W(T)}function k(){dt.stop()}function K(){dt.start()}let dt=new ed;dt.setAnimationLoop(ht),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){W=T,oe.setAnimationLoop(T),T===null?dt.stop():dt.start()},oe.addEventListener("sessionstart",k),oe.addEventListener("sessionend",K),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,q,w),g=xt.get(T,M.length),g.init(),M.push(g),tt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(tt),at=this.localClippingEnabled,Q=ue.init(this.clippingPlanes,at),x=Wt.get(T,m.length),x.init(),m.push(x),Mt(T,q,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(G,Y),this.info.render.frame++,Q===!0&&ue.beginShadows();let j=g.state.shadowsArray;if(Et.render(j,T,q),Q===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Re.render(x,T),g.setupLights(v._useLegacyLights),q.isArrayCamera){let it=q.cameras;for(let $=0,At=it.length;$<At;$++){let Bt=it[$];Pt(x,T,Bt,Bt.viewport)}}else Pt(x,T,q);w!==null&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,q),de.resetDefaultState(),C=-1,_=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Mt(T,q,j,it){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){it&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);let Bt=wt.update(T),Vt=T.material;Vt.visible&&x.push(T,Bt,Vt,j,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let Bt=wt.update(T),Vt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),st.copy(Bt.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(Vt)){let Jt=Bt.groups;for(let ee=0,Rt=Jt.length;ee<Rt;ee++){let Gt=Jt[ee],$t=Vt[Gt.materialIndex];$t&&$t.visible&&x.push(T,Bt,$t,j,st.z,Gt)}}else Vt.visible&&x.push(T,Bt,Vt,j,st.z,null)}}let At=T.children;for(let Bt=0,Vt=At.length;Bt<Vt;Bt++)Mt(At[Bt],q,j,it)}function Pt(T,q,j,it){let $=T.opaque,At=T.transmissive,Bt=T.transparent;g.setupLightsView(j),Q===!0&&ue.setGlobalState(v.clippingPlanes,j),At.length>0&&Xt($,At,q,j),it&&nt.viewport(b.copy(it)),$.length>0&&It($,q,j),At.length>0&&It(At,q,j),Bt.length>0&&It(Bt,q,j),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Xt(T,q,j,it){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let At=St.isWebGL2;ct===null&&(ct=new ei(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?ls:ci,minFilter:qn,samples:At?4:0})),v.getDrawingBufferSize(lt),At?ct.setSize(lt.x,lt.y):ct.setSize(ca(lt.x),ca(lt.y));let Bt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(N),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Vt=v.toneMapping;v.toneMapping=Bi,It(T,j,it),I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct);let Jt=!1;for(let ee=0,Rt=q.length;ee<Rt;ee++){let Gt=q[ee],$t=Gt.object,fe=Gt.geometry,Ae=Gt.material,Hn=Gt.group;if(Ae.side===Ue&&$t.layers.test(it.layers)){let Fe=Ae.side;Ae.side=pn,Ae.needsUpdate=!0,te($t,j,it,fe,Ae,Hn),Ae.side=Fe,Ae.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct)),v.setRenderTarget(Bt),v.setClearColor(N,L),v.toneMapping=Vt}function It(T,q,j){let it=q.isScene===!0?q.overrideMaterial:null;for(let $=0,At=T.length;$<At;$++){let Bt=T[$],Vt=Bt.object,Jt=Bt.geometry,ee=it===null?Bt.material:it,Rt=Bt.group;Vt.layers.test(j.layers)&&te(Vt,q,j,Jt,ee,Rt)}}function te(T,q,j,it,$,At){T.onBeforeRender(v,q,j,it,$,At),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(v,q,j,it,T,At),$.transparent===!0&&$.side===Ue&&$.forceSinglePass===!1?($.side=pn,$.needsUpdate=!0,v.renderBufferDirect(j,q,it,$,T,At),$.side=li,$.needsUpdate=!0,v.renderBufferDirect(j,q,it,$,T,At),$.side=Ue):v.renderBufferDirect(j,q,it,$,T,At),T.onAfterRender(v,q,j,it,$,At)}function se(T,q,j){q.isScene!==!0&&(q=ft);let it=yt.get(T),$=g.state.lights,At=g.state.shadowsArray,Bt=$.state.version,Vt=qt.getParameters(T,$.state,At,q,j),Jt=qt.getProgramCacheKey(Vt),ee=it.programs;it.environment=T.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(T.isMeshStandardMaterial?J:P).get(T.envMap||it.environment),ee===void 0&&(T.addEventListener("dispose",Ot),ee=new Map,it.programs=ee);let Rt=ee.get(Jt);if(Rt!==void 0){if(it.currentProgram===Rt&&it.lightsStateVersion===Bt)return he(T,Vt),Rt}else Vt.uniforms=qt.getUniforms(T),T.onBuild(j,Vt,v),T.onBeforeCompile(Vt,v),Rt=qt.acquireProgram(Vt,Jt),ee.set(Jt,Rt),it.uniforms=Vt.uniforms;let Gt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=ue.uniform),he(T,Vt),it.needsLights=Nt(T),it.lightsStateVersion=Bt,it.needsLights&&(Gt.ambientLightColor.value=$.state.ambient,Gt.lightProbe.value=$.state.probe,Gt.directionalLights.value=$.state.directional,Gt.directionalLightShadows.value=$.state.directionalShadow,Gt.spotLights.value=$.state.spot,Gt.spotLightShadows.value=$.state.spotShadow,Gt.rectAreaLights.value=$.state.rectArea,Gt.ltc_1.value=$.state.rectAreaLTC1,Gt.ltc_2.value=$.state.rectAreaLTC2,Gt.pointLights.value=$.state.point,Gt.pointLightShadows.value=$.state.pointShadow,Gt.hemisphereLights.value=$.state.hemi,Gt.directionalShadowMap.value=$.state.directionalShadowMap,Gt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Gt.spotShadowMap.value=$.state.spotShadowMap,Gt.spotLightMatrix.value=$.state.spotLightMatrix,Gt.spotLightMap.value=$.state.spotLightMap,Gt.pointShadowMap.value=$.state.pointShadowMap,Gt.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=Rt,it.uniformsList=null,Rt}function ge(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=Zs.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function he(T,q){let j=yt.get(T);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function Te(T,q,j,it,$){q.isScene!==!0&&(q=ft),I.resetTextureUnits();let At=q.fog,Bt=it.isMeshStandardMaterial?q.environment:null,Vt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ln,Jt=(it.isMeshStandardMaterial?J:P).get(it.envMap||Bt),ee=it.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Rt=!!j.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Gt=!!j.morphAttributes.position,$t=!!j.morphAttributes.normal,fe=!!j.morphAttributes.color,Ae=Bi;it.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ae=v.toneMapping);let Hn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=Hn!==void 0?Hn.length:0,_e=yt.get(it),hc=g.state.lights;if(Q===!0&&(at===!0||T!==_)){let Gn=T===_&&it.id===C;ue.setState(it,T,Gn)}let $e=!1;it.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==hc.state.version||_e.outputColorSpace!==Vt||$.isBatchedMesh&&_e.batching===!1||!$.isBatchedMesh&&_e.batching===!0||$.isInstancedMesh&&_e.instancing===!1||!$.isInstancedMesh&&_e.instancing===!0||$.isSkinnedMesh&&_e.skinning===!1||!$.isSkinnedMesh&&_e.skinning===!0||$.isInstancedMesh&&_e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&_e.instancingColor===!1&&$.instanceColor!==null||_e.envMap!==Jt||it.fog===!0&&_e.fog!==At||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ue.numPlanes||_e.numIntersection!==ue.numIntersection)||_e.vertexAlphas!==ee||_e.vertexTangents!==Rt||_e.morphTargets!==Gt||_e.morphNormals!==$t||_e.morphColors!==fe||_e.toneMapping!==Ae||St.isWebGL2===!0&&_e.morphTargetsCount!==Fe)&&($e=!0):($e=!0,_e.__version=it.version);let ji=_e.currentProgram;$e===!0&&(ji=se(it,q,$));let Jh=!1,yr=!1,uc=!1,vn=ji.getUniforms(),Ji=_e.uniforms;if(nt.useProgram(ji.program)&&(Jh=!0,yr=!0,uc=!0),it.id!==C&&(C=it.id,yr=!0),Jh||_!==T){vn.setValue(U,"projectionMatrix",T.projectionMatrix),vn.setValue(U,"viewMatrix",T.matrixWorldInverse);let Gn=vn.map.cameraPosition;Gn!==void 0&&Gn.setValue(U,st.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&vn.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&vn.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,yr=!0,uc=!0)}if($.isSkinnedMesh){vn.setOptional(U,$,"bindMatrix"),vn.setOptional(U,$,"bindMatrixInverse");let Gn=$.skeleton;Gn&&(St.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),vn.setValue(U,"boneTexture",Gn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(vn.setOptional(U,$,"batchingTexture"),vn.setValue(U,"batchingTexture",$._matricesTexture,I));let fc=j.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&St.isWebGL2===!0)&&me.update($,j,ji),(yr||_e.receiveShadow!==$.receiveShadow)&&(_e.receiveShadow=$.receiveShadow,vn.setValue(U,"receiveShadow",$.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ji.envMap.value=Jt,Ji.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),yr&&(vn.setValue(U,"toneMappingExposure",v.toneMappingExposure),_e.needsLights&&jt(Ji,uc),At&&it.fog===!0&&Ft.refreshFogUniforms(Ji,At),Ft.refreshMaterialUniforms(Ji,it,B,z,ct),Zs.upload(U,ge(_e),Ji,I)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Zs.upload(U,ge(_e),Ji,I),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&vn.setValue(U,"center",$.center),vn.setValue(U,"modelViewMatrix",$.modelViewMatrix),vn.setValue(U,"normalMatrix",$.normalMatrix),vn.setValue(U,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Gn=it.uniformsGroups;for(let dc=0,vp=Gn.length;dc<vp;dc++)if(St.isWebGL2){let $h=Gn[dc];Ne.update($h,ji),Ne.bind($h,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function jt(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Nt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,q,j){yt.get(T.texture).__webglTexture=q,yt.get(T.depthTexture).__webglTexture=j;let it=yt.get(T);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=j===void 0,it.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){let j=yt.get(T);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,j=0){w=T,S=q,E=j;let it=!0,$=null,At=!1,Bt=!1;if(T){let Jt=yt.get(T);Jt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),it=!1):Jt.__webglFramebuffer===void 0?I.setupRenderTarget(T):Jt.__hasExternalTextures&&I.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);let ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Bt=!0);let Rt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Rt[q])?$=Rt[q][j]:$=Rt[q],At=!0):St.isWebGL2&&T.samples>0&&I.useMultisampledRTT(T)===!1?$=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Rt)?$=Rt[j]:$=Rt,b.copy(T.viewport),A.copy(T.scissor),R=T.scissorTest}else b.copy(F).multiplyScalar(B).floor(),A.copy(H).multiplyScalar(B).floor(),R=rt;if(nt.bindFramebuffer(U.FRAMEBUFFER,$)&&St.drawBuffers&&it&&nt.drawBuffers(T,$),nt.viewport(b),nt.scissor(A),nt.setScissorTest(R),At){let Jt=yt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Jt.__webglTexture,j)}else if(Bt){let Jt=yt.get(T.texture),ee=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jt.__webglTexture,j||0,ee)}C=-1},this.readRenderTargetPixels=function(T,q,j,it,$,At,Bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){nt.bindFramebuffer(U.FRAMEBUFFER,Vt);try{let Jt=T.texture,ee=Jt.format,Rt=Jt.type;if(ee!==Wn&&Yt.convert(ee)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Rt===ls&&(mt.has("EXT_color_buffer_half_float")||St.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Rt!==ci&&Yt.convert(Rt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===bi&&(St.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-it&&j>=0&&j<=T.height-$&&U.readPixels(q,j,it,$,Yt.convert(ee),Yt.convert(Rt),At)}finally{let Jt=w!==null?yt.get(w).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Jt)}}},this.copyFramebufferToTexture=function(T,q,j=0){let it=Math.pow(2,-j),$=Math.floor(q.image.width*it),At=Math.floor(q.image.height*it);I.setTexture2D(q,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,T.x,T.y,$,At),nt.unbindTexture()},this.copyTextureToTexture=function(T,q,j,it=0){let $=q.image.width,At=q.image.height,Bt=Yt.convert(j.format),Vt=Yt.convert(j.type);I.setTexture2D(j,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment),q.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,it,T.x,T.y,$,At,Bt,Vt,q.image.data):q.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,it,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,Bt,q.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,it,T.x,T.y,Bt,Vt,q.image),it===0&&j.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(T,q,j,it,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=T.max.x-T.min.x+1,Bt=T.max.y-T.min.y+1,Vt=T.max.z-T.min.z+1,Jt=Yt.convert(it.format),ee=Yt.convert(it.type),Rt;if(it.isData3DTexture)I.setTexture3D(it,0),Rt=U.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)I.setTexture2DArray(it,0),Rt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,it.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,it.unpackAlignment);let Gt=U.getParameter(U.UNPACK_ROW_LENGTH),$t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fe=U.getParameter(U.UNPACK_SKIP_PIXELS),Ae=U.getParameter(U.UNPACK_SKIP_ROWS),Hn=U.getParameter(U.UNPACK_SKIP_IMAGES),Fe=j.isCompressedTexture?j.mipmaps[$]:j.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Rt,$,q.x,q.y,q.z,At,Bt,Vt,Jt,ee,Fe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Rt,$,q.x,q.y,q.z,At,Bt,Vt,Jt,Fe.data)):U.texSubImage3D(Rt,$,q.x,q.y,q.z,At,Bt,Vt,Jt,ee,Fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ae),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hn),$===0&&it.generateMipmaps&&U.generateMipmap(Rt),nt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),nt.unbindTexture()},this.resetState=function(){S=0,E=0,w=null,nt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Yl?"display-p3":"srgb",e.unpackColorSpace=De.workingColorSpace===Va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?as:Kf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===as?Ce:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},xl=class extends Or{};xl.prototype.isWebGL1Renderer=!0;var ya=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ki=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Br=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new O,kr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var xf=new O,vf=new Pe,yf=new Pe,zy=new O,_f=new re,Xo=new O,Gc=new Fn,Mf=new re,Vc=new tr,_a=class extends Lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new re,this.bindMatrixInverse=new re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gc.copy(this.boundingSphere),Gc.applyMatrix4(i),t.ray.intersectsSphere(Gc)!==!1&&(Mf.copy(i).invert(),Vc.copy(t.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&Vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Vc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===am?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;vf.fromBufferAttribute(i.attributes.skinIndex,t),yf.fromBufferAttribute(i.attributes.skinWeight,t),xf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=yf.getComponent(r);if(o!==0){let a=vf.getComponent(r);_f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(zy.copy(xf).applyMatrix4(_f),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Hr=class extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gr=class extends hn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=tn,h=tn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new re,Uy=new re,Ma=class s{constructor(t=[],e=[]){this.uuid=Xn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new re)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new re;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Uy;bf.multiplyMatrices(a,e[r]),bf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Gr(e,t,t,Wn,bi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new re().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},us=class extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new re,wf=new re,qo=[],Ef=new nn,Fy=new re,Er=new Lt,Sr=new Fn,rn=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Ef.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Ef)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Sr.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bs),wf.multiplyMatrices(n,Bs),Er.matrixWorld=wf,Er.raycast(t,qo);for(let o=0,a=qo.length;o<a;o++){let c=qo[o];c.instanceId=r,c.object=this,e.push(c)}qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sf=new O,Tf=new O,Af=new re,Wc=new tr,Yo=new Fn,sr=class extends Xe{constructor(t=new Ee,e=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Sf.fromBufferAttribute(e,i-1),Tf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sf.distanceTo(Tf);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Af.copy(i).invert(),Wc.copy(t.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,h=new O,u=new O,f=new O,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=m,y=M-1;v<y;v+=d){let S=p.getX(v),E=p.getX(v+1);if(l.fromBufferAttribute(g,S),h.fromBufferAttribute(g,E),Wc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=m,y=M-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Wc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Rf=new O,Cf=new O,ba=class extends sr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Rf.fromBufferAttribute(e,i),Cf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rf.distanceTo(Cf);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends sr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Wr=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pf=new re,vl=new tr,Zo=new Fn,Ko=new O,Ea=class extends Xe{constructor(t=new Ee,e=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Pf.copy(i).invert(),vl.copy(t.ray).applyMatrix4(Pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=l.getX(p);Ko.fromBufferAttribute(u,g),Lf(Ko,g,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Ko.fromBufferAttribute(u,p),Lf(Ko,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lf(s,t,e,n,i,r,o){let a=vl.distanceSqToPoint(s);if(a<e){let c=new O;vl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var ii=class extends hn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,i=[],r=[],o=[],a=new O,c=new re;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(an(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(an(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xr=class extends Yn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new Tt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends Xr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var jo=new O,Xc=new jl,qc=new jl,Yc=new jl,_l=class extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(jo.subVectors(i[0],i[1]).add(i[0]),l=jo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(jo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Xc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,g),qc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,g),Yc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),qc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Yc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Xc.calc(c),qc.calc(c),Yc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function If(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Oy(s,t){let e=1-s;return e*e*t}function By(s,t){return 2*(1-s)*s*t}function ky(s,t){return s*s*t}function Ir(s,t,e,n){return Oy(s,t)+By(s,e)+ky(s,n)}function Hy(s,t){let e=1-s;return e*e*e*t}function Gy(s,t){let e=1-s;return 3*e*e*s*t}function Vy(s,t){return 3*(1-s)*s*s*t}function Wy(s,t){return s*s*s*t}function Nr(s,t,e,n,i){return Hy(s,t)+Gy(s,e)+Vy(s,n)+Wy(s,i)}var Sa=class extends Yn{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,i.x,r.x,o.x,a.x),Nr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends Yn{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,i.x,r.x,o.x,a.x),Nr(t,i.y,r.y,o.y,a.y),Nr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends Yn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Yn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Yn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(t,i.x,r.x,o.x),Ir(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Yn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(t,i.x,r.x,o.x),Ir(t,i.y,r.y,o.y),Ir(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(If(a,c.x,l.x,h.x,u.x),If(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}},El=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:_l,CubicBezierCurve:Sa,CubicBezierCurve3:Ml,EllipseCurve:Xr,LineCurve:Ta,LineCurve3:bl,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:wl,SplineCurve:Ra}),Sl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new El[i.type]().fromJSON(i))}return this}},Ca=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ta(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Aa(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Sa(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Xr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hi=class s extends Ee{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=an(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new O,f=new Tt,d=new O,p=new O,x=new O,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let M=0;M<=e;M++){let v=n+M*h*i,y=Math.sin(v),S=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*S,o.push(u.x,u.y,u.z),f.x=M/e,f.y=E/(t.length-1),a.push(f.x,f.y);let w=c[3*E+0]*y,C=c[3*E+1],_=c[3*E+0]*S;l.push(w,C,_)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,S=y,E=y+t.length,w=y+t.length+1,C=y+1;r.push(S,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Oe=class s extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function M(){let y=new O,S=new O,E=0,w=(e-t)/n;for(let C=0;C<=r;C++){let _=[],b=C/r,A=b*(e-t)+t;for(let R=0;R<=i;R++){let N=R/i,L=N*c+a,D=Math.sin(L),z=Math.cos(L);S.x=A*D,S.y=-b*n+g,S.z=A*z,u.push(S.x,S.y,S.z),y.set(D,w,z).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-b),_.push(p++)}x.push(_)}for(let C=0;C<i;C++)for(let _=0;_<r;_++){let b=x[_][C],A=x[_+1][C],R=x[_+1][C+1],N=x[_][C+1];h.push(b,A,N),h.push(A,R,N),E+=6}l.addGroup(m,E,0),m+=E}function v(y){let S=p,E=new Tt,w=new O,C=0,_=y===!0?t:e,b=y===!0?1:-1;for(let R=1;R<=i;R++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let A=p;for(let R=0;R<=i;R++){let L=R/i*c+a,D=Math.cos(L),z=Math.sin(L);w.x=_*z,w.y=g*b,w.z=_*D,u.push(w.x,w.y,w.z),f.push(0,b,0),E.x=D*.5+.5,E.y=z*.5*b+.5,d.push(E.x,E.y),p++}for(let R=0;R<i;R++){let N=S+R,L=A+R;y===!0?h.push(L,L+1,N):h.push(L+1,L,N),C+=3}l.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qr=class s extends Oe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tl=class s extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new O,y=new O,S=new O;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],S),c(v,y,S,M)}function c(M,v,y,S){let E=S+1,w=[];for(let C=0;C<=E;C++){w[C]=[];let _=M.clone().lerp(y,C/E),b=v.clone().lerp(y,C/E),A=E-C;for(let R=0;R<=A;R++)R===0&&C===E?w[C][R]=_:w[C][R]=_.clone().lerp(b,R/A)}for(let C=0;C<E;C++)for(let _=0;_<2*(E-C)-1;_++){let b=Math.floor(_/2);_%2===0?(f(w[C][b+1]),f(w[C+1][b]),f(w[C][b])):(f(w[C][b+1]),f(w[C+1][b+1]),f(w[C+1][b]))}}function l(M){let v=new O;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let M=new O;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=g(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;o.push(y,1-S)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],S=o[M+4],E=Math.max(v,y,S),w=Math.min(v,y,S);E>.9&&w<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){let M=new O,v=new O,y=new O,S=new O,E=new Tt,w=new Tt,C=new Tt;for(let _=0,b=0;_<r.length;_+=9,b+=6){M.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),E.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),S.copy(M).add(v).add(y).divideScalar(3);let A=g(S);x(E,b+0,M,A),x(w,b+2,v,A),x(C,b+4,y,A)}}function x(M,v,y,S){S<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Yr=class extends Ca{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ca().fromJSON(i))}return this}},Xy={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=ad(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=jy(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let p=e;p<i;p+=e)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Zr(r,o,e,a,c,d,0),o}};function ad(s,t,e,n,i){let r,o;if(i===a1(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Nf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Nf(r,s[r],s[r+1],o);return o&&Xa(o,o.next)&&(jr(o),o=o.next),o}function fs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Xa(e,e.next)||Ze(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&e1(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Yy(s,n,i,r):qy(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),jr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Zy(fs(s),t,e),Zr(s,t,e,n,i,r,2)):o===2&&Ky(s,t,e,n,i,r):Zr(fs(s),t,e,n,i,r,1);break}}}function qy(s){let t=s.prev,e=s,n=s.next;if(Ze(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Xs(i,a,r,c,o,l,p.x,p.y)&&Ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Yy(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ze(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Al(d,p,t,e,n),M=Al(x,g,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Xs(a,h,c,u,l,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Xs(a,h,c,u,l,f,y.x,y.y)&&Ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Xs(a,h,c,u,l,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Xs(a,h,c,u,l,f,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Xa(i,r)&&cd(i,n,n.next,r)&&Kr(i,r)&&Kr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),jr(n),jr(n.next),n=s=r),n=n.next}while(n!==s);return fs(n)}function Ky(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s1(o,a)){let c=ld(o,a);o=fs(o,o.next),c=fs(c,c.next),Zr(o,t,e,n,i,r,0),Zr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jy(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=ad(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(i1(l));for(i.sort(Jy),r=0;r<i.length;r++)e=$y(i[r],e);return e}function Jy(s,t){return s.x-t.x}function $y(s,t){let e=Qy(s,t);if(!e)return t;let n=ld(e,s);return fs(n,n.next),fs(e,e.next)}function Qy(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Xs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Kr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&t1(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function t1(s,t){return Ze(s.prev,s,t.prev)<0&&Ze(t.next,s,s.next)<0}function e1(s,t,e,n){let i=s;do i.z===0&&(i.z=Al(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,n1(i)}function n1(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Al(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function i1(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Xs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function s1(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!r1(s,t)&&(Kr(s,t)&&Kr(t,s)&&o1(s,t)&&(Ze(s.prev,s,t.prev)||Ze(s,t.prev,t))||Xa(s,t)&&Ze(s.prev,s,s.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Xa(s,t){return s.x===t.x&&s.y===t.y}function cd(s,t,e,n){let i=$o(Ze(s,t,e)),r=$o(Ze(s,t,n)),o=$o(Ze(e,n,s)),a=$o(Ze(e,n,t));return!!(i!==r&&o!==a||i===0&&Jo(s,e,t)||r===0&&Jo(s,n,t)||o===0&&Jo(e,s,n)||a===0&&Jo(e,t,n))}function Jo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function $o(s){return s>0?1:s<0?-1:0}function r1(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Kr(s,t){return Ze(s.prev,s,s.next)<0?Ze(s,t,s.next)>=0&&Ze(s,s.prev,t)>=0:Ze(s,t,s.prev)<0||Ze(s,s.next,t)<0}function o1(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ld(s,t){let e=new Rl(s.i,s.x,s.y),n=new Rl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nf(s,t,e,n){let i=new Rl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a1(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Dr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Df(t),zf(n,t);let o=t.length;e.forEach(Df);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,zf(n,e[c]);let a=Xy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Df(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function zf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Pa=class s extends Ee{constructor(t=new Yr([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:c1,v,y=!1,S,E,w,C;m&&(v=m.getSpacedPoints(h),y=!0,f=!1,S=m.computeFrenetFrames(h,!1),E=new O,w=new O,C=new O),f||(g=0,d=0,p=0,x=0);let _=a.extractPoints(l),b=_.shape,A=_.holes;if(!Dr.isClockWise(b)){b=b.reverse();for(let U=0,vt=A.length;U<vt;U++){let mt=A[U];Dr.isClockWise(mt)&&(A[U]=mt.reverse())}}let N=Dr.triangulateShape(b,A),L=b;for(let U=0,vt=A.length;U<vt;U++){let mt=A[U];b=b.concat(mt)}function D(U,vt,mt){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(vt,mt)}let z=b.length,B=N.length;function G(U,vt,mt){let St,nt,_t,yt=U.x-vt.x,I=U.y-vt.y,P=mt.x-U.x,J=mt.y-U.y,gt=yt*yt+I*I,bt=yt*J-I*P;if(Math.abs(bt)>Number.EPSILON){let wt=Math.sqrt(gt),qt=Math.sqrt(P*P+J*J),Ft=vt.x-I/wt,Wt=vt.y+yt/wt,xt=mt.x-J/qt,ue=mt.y+P/qt,Et=((xt-Ft)*J-(ue-Wt)*P)/(yt*J-I*P);St=Ft+yt*Et-U.x,nt=Wt+I*Et-U.y;let Re=St*St+nt*nt;if(Re<=2)return new Tt(St,nt);_t=Math.sqrt(Re/2)}else{let wt=!1;yt>Number.EPSILON?P>Number.EPSILON&&(wt=!0):yt<-Number.EPSILON?P<-Number.EPSILON&&(wt=!0):Math.sign(I)===Math.sign(J)&&(wt=!0),wt?(St=-I,nt=yt,_t=Math.sqrt(gt)):(St=yt,nt=I,_t=Math.sqrt(gt/2))}return new Tt(St/_t,nt/_t)}let Y=[];for(let U=0,vt=L.length,mt=vt-1,St=U+1;U<vt;U++,mt++,St++)mt===vt&&(mt=0),St===vt&&(St=0),Y[U]=G(L[U],L[mt],L[St]);let F=[],H,rt=Y.concat();for(let U=0,vt=A.length;U<vt;U++){let mt=A[U];H=[];for(let St=0,nt=mt.length,_t=nt-1,yt=St+1;St<nt;St++,_t++,yt++)_t===nt&&(_t=0),yt===nt&&(yt=0),H[St]=G(mt[St],mt[_t],mt[yt]);F.push(H),rt=rt.concat(H)}for(let U=0;U<g;U++){let vt=U/g,mt=d*Math.cos(vt*Math.PI/2),St=p*Math.sin(vt*Math.PI/2)+x;for(let nt=0,_t=L.length;nt<_t;nt++){let yt=D(L[nt],Y[nt],St);tt(yt.x,yt.y,-mt)}for(let nt=0,_t=A.length;nt<_t;nt++){let yt=A[nt];H=F[nt];for(let I=0,P=yt.length;I<P;I++){let J=D(yt[I],H[I],St);tt(J.x,J.y,-mt)}}}let X=p+x;for(let U=0;U<z;U++){let vt=f?D(b[U],rt[U],X):b[U];y?(w.copy(S.normals[0]).multiplyScalar(vt.x),E.copy(S.binormals[0]).multiplyScalar(vt.y),C.copy(v[0]).add(w).add(E),tt(C.x,C.y,C.z)):tt(vt.x,vt.y,0)}for(let U=1;U<=h;U++)for(let vt=0;vt<z;vt++){let mt=f?D(b[vt],rt[vt],X):b[vt];y?(w.copy(S.normals[U]).multiplyScalar(mt.x),E.copy(S.binormals[U]).multiplyScalar(mt.y),C.copy(v[U]).add(w).add(E),tt(C.x,C.y,C.z)):tt(mt.x,mt.y,u/h*U)}for(let U=g-1;U>=0;U--){let vt=U/g,mt=d*Math.cos(vt*Math.PI/2),St=p*Math.sin(vt*Math.PI/2)+x;for(let nt=0,_t=L.length;nt<_t;nt++){let yt=D(L[nt],Y[nt],St);tt(yt.x,yt.y,u+mt)}for(let nt=0,_t=A.length;nt<_t;nt++){let yt=A[nt];H=F[nt];for(let I=0,P=yt.length;I<P;I++){let J=D(yt[I],H[I],St);y?tt(J.x,J.y+v[h-1].y,v[h-1].x+mt):tt(J.x,J.y,u+mt)}}}Q(),at();function Q(){let U=i.length/3;if(f){let vt=0,mt=z*vt;for(let St=0;St<B;St++){let nt=N[St];lt(nt[2]+mt,nt[1]+mt,nt[0]+mt)}vt=h+g*2,mt=z*vt;for(let St=0;St<B;St++){let nt=N[St];lt(nt[0]+mt,nt[1]+mt,nt[2]+mt)}}else{for(let vt=0;vt<B;vt++){let mt=N[vt];lt(mt[2],mt[1],mt[0])}for(let vt=0;vt<B;vt++){let mt=N[vt];lt(mt[0]+z*h,mt[1]+z*h,mt[2]+z*h)}}n.addGroup(U,i.length/3-U,0)}function at(){let U=i.length/3,vt=0;ct(L,vt),vt+=L.length;for(let mt=0,St=A.length;mt<St;mt++){let nt=A[mt];ct(nt,vt),vt+=nt.length}n.addGroup(U,i.length/3-U,1)}function ct(U,vt){let mt=U.length;for(;--mt>=0;){let St=mt,nt=mt-1;nt<0&&(nt=U.length-1);for(let _t=0,yt=h+g*2;_t<yt;_t++){let I=z*_t,P=z*(_t+1),J=vt+St+I,gt=vt+nt+I,bt=vt+nt+P,wt=vt+St+P;st(J,gt,bt,wt)}}}function tt(U,vt,mt){c.push(U),c.push(vt),c.push(mt)}function lt(U,vt,mt){ft(U),ft(vt),ft(mt);let St=i.length/3,nt=M.generateTopUV(n,i,St-3,St-2,St-1);ot(nt[0]),ot(nt[1]),ot(nt[2])}function st(U,vt,mt,St){ft(U),ft(vt),ft(St),ft(vt),ft(mt),ft(St);let nt=i.length/3,_t=M.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);ot(_t[0]),ot(_t[1]),ot(_t[3]),ot(_t[1]),ot(_t[2]),ot(_t[3])}function ft(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function ot(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l1(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new El[i.type]().fromJSON(i)),new s(n,t.options)}},c1={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new Tt(r,o),new Tt(a,c),new Tt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Tt(o,1-c),new Tt(l,1-u),new Tt(f,1-p),new Tt(x,1-m)]:[new Tt(a,1-c),new Tt(h,1-u),new Tt(d,1-p),new Tt(g,1-m)]}};function l1(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gi=class s extends Tl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var La=class s extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/i,d=new O,p=new Tt;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,v=M,y=M+n+1,S=M+n+2,E=M+1;a.push(v,y,E),a.push(y,S,E)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zn=class s extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let E=S/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+y,1-v),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let v=h[m][M+1],y=h[m][M],S=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&d.push(v,y,E),(m!==n-1||c<Math.PI)&&d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ds=class s extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new O,u=new O,f=new O;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let x=p/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let x=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,M=(i+1)*d+p;o.push(x,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ia=class extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vi=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kn=class extends Vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zt=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function h1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function u1(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Uf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function hd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cl=class extends Wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ks,endingEnd:ks}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hs:r=t,a=2*e-n;break;case na:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hs:o=t,c=2*n-e;break;case na:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+M*o[l+S]+v*o[c+S]+y*o[u+S];return r}},Na=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Pl=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $s:e=this.InterpolantFactoryMethodDiscrete;break;case hs:e=this.InterpolantFactoryMethodLinear;break;case yc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&h1(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=hs;var Xi=class extends jn{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=$s;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends jn{};Da.prototype.ValueTypeName="color";var Ti=class extends jn{};Ti.prototype.ValueTypeName="number";var Ll=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},hi=class extends jn{InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.DefaultInterpolation=hs;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends jn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=$s;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends jn{};Ai.prototype.ValueTypeName="vector";var rr=class{constructor(t,e=-1,n,i=Xl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(d1(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=u1(c);c=Uf(c,1,h),l=Uf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ti(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,x){if(d.length!==0){let g=[],m=[];hd(d,g,m,p),g.length!==0&&x.push(new u(f,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let g=[],m=[];for(let M=0;M!==f[p].morphTargets.length;++M){let v=f[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Ti(".morphTargetInfluence["+x+"]",g,m))}c=d.length*o}else{let d=".bones["+e[u].name+"]";n(Ai,d+".position",f,"pos",i),n(hi,d+".quaternion",f,"rot",i),n(Ai,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function f1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return Da;case"quaternion":return hi;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function d1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=f1(s.type);if(s.times===void 0){let e=[],n=[];hd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Fi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Il=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},p1=new Il,Ri=class{constructor(t){this.manager=t!==void 0?t:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Nl=class extends Error{constructor(t,e){super(t),this.response=e}},Jr=class extends Ri{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Fi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:i});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=yi[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0,x=0,g=new ReadableStream({start(m){M();function M(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let E=0,w=h.length;E<w;E++){let C=h[E];C.onProgress&&C.onProgress(S)}m.enqueue(y),M()}})}}});return new Response(g)}else throw new Nl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Fi.add(t,l);let h=yi[t];delete yi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=yi[t];if(h===void 0)throw this.manager.itemError(t),l;delete yi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Dl=class extends Ri{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ur("img");function c(){h(),Fi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var or=class extends Ri{constructor(t){super(t)}load(t,e,n,i){let r=new hn,o=new Dl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ar=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},za=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zc=new re,Ff=new O,Of=new O,$r=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ff),Of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Of),e.updateMatrixWorld(),Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zl=class extends $r{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Qs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},cr=class extends ar{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Bf=new re,Tr=new O,Kc=new O,Ul=class extends $r{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Kc.copy(n.position),Kc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}},Ua=class extends ar{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fl=class extends $r{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yi=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Fa=class extends Ri{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Fi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Fi.add(t,c),r.manager.itemStart(t)}};var Ol=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ke.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Ke.multiplyQuaternionsFlat(t,o,t,e,t,n),Ke.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Jl="\\[\\]\\.:\\/",m1=new RegExp("["+Jl+"]","g"),$l="[^"+Jl+"]",g1="[^"+Jl.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",$l),v1=/(WCOD+)?/.source.replace("WCOD",g1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),_1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),M1=new RegExp("^"+x1+v1+y1+_1+"$"),b1=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m1,"")}static parseTrackName(t){let e=M1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);b1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Bl;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:ks,endingEnd:ks};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case vm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Xl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===xm;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Ha){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(t?i.endingStart=this.zeroSlopeAtStart?Hs:ks:i.endingStart=na,e?i.endingEnd=this.zeroSlopeAtEnd?Hs:ks:i.endingEnd=na)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},w1=new Float32Array(1),Oa=class extends Si{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;p=new Ol(ke.create(n,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Na(new Float32Array(2),new Float32Array(2),1,w1),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?rr.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new kl(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?rr.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);var ro=Tp(md());var pe=(s,t,e)=>s<t?t:s>e?e:s,be=(s,t,e)=>s+(t-s)*e,gd=s=>s*s*(3-2*s),si=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function xn(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var ih=12345,ye=()=>(ih=ih*1664525+1013904223>>>0,ih/4294967296),mn=s=>s[ye()*s.length|0];function Ci(s,t,e,n,i,r,o){let a=i-e,c=r-n,l=a*a+c*c||1e-9,h=((s-e)*a+(t-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=e+a*h,o.z=n+c*h,o.t=h,o}function io(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],c=e[r][0],l=e[r][1];a>t!=l>t&&s<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}var xd=`
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
          }`,sh=`{
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
          }`,rh=`{
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
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,oh=`{
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
      }`;var Ge={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new Pe(0,0,1,0)},uFar:{value:null},uWorld:{value:new Tt(1,1)},uSun:{value:new O(0,1,0)}},fi=class{constructor(t){this.cell=t,this.m=new Map,this.stamp=0}add(t,e,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(e,i)/a),l=Math.floor(Math.max(e,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let p=f*8192+d,x=this.m.get(p);x||this.m.set(p,x=[]),x.push(t),o&&o.add(p)}}query(t,e,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),l=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let p=0;p<d.length;p++){let x=d[p];x._st!==o&&(x._st=o,i.push(x))}}return i}removeTag(t,e){for(let n of e){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==t);r.length?this.m.set(n,r):this.m.delete(n)}}};function ui(s,t="",e="",n=""){s.uniforms.uNight=Ge.uNight,s.uniforms.uTime=Ge.uTime,s.uniforms.uLamp=Ge.uLamp,s.uniforms.uLampRect=Ge.uLampRect,s.uniforms.uFar=Ge.uFar,s.uniforms.uWorld=Ge.uWorld,s.uniforms.uSun=Ge.uSun,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
varying vec3 vWN;
`+t.split("//MAIN")[0]).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 wpp = vec4(transformed, 1.0);
      vec3 wnn = objectNormal;
      #ifdef USE_INSTANCING
      wpp = instanceMatrix * wpp;
      wnn = mat3(instanceMatrix) * wnn;
      #endif
      vWP = (modelMatrix * wpp).xyz;
      vWN = normalize(mat3(modelMatrix) * wnn);
      ${t.split("//MAIN")[1]||""}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
      ${e}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var wd=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],Ed=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],Sd=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],Td=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],Ad=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],B1={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8,clad:9,glass:10,mall:11},k1=[{n:"Grand Hotel River Park",k:"glass",c:"#dcd5c6",rc:"#6c6f72"},{box:[585,1500,1060,1665],only:"modern",k:"glass",c:"#eceeec",rc:"#6c6f72"},{n:"Nivy Tower",k:"glass",c:"#a9b8bf",rc:"#cfcfca"},{n:"Nivy",k:"mall",c:"#e2d9c6",rc:"#5d7f45"},{box:[3480,1748,3510,1776],only:"modern",k:"glass",c:"#f5f5f1",rc:"#d6d6d2"}];function Rd(s,t){if(s._st)return;s._st=1;let e=0,n=0;for(let i of t)e+=i[0],n+=i[1];e/=t.length,n/=t.length;for(let i of k1)if(!(i.n?s.n!==i.n:!(e>=i.box[0]&&n>=i.box[1]&&e<=i.box[2]&&n<=i.box[3]&&(!i.only||s.k===i.only)))){s.k=i.k,s.c=i.c,s.rc=i.rc,s.r=0,s.s="f";return}}var H1=new Set(["Star\xFD most","Most Apollo","Pr\xEDstavn\xFD most"]),G1=[[2334.6,1209.5,19]],so={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},fr=new kt;function Cd(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer)}function Pd(s,t,e,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>t-1.001?t-1.001:o,a=a<0?0:a>e-1.001?e-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*t+c,d=s[f],p=s[f+1],x=s[f+t],g=s[f+t+1];return h+u<=1?d+(p-d)*h+(x-d)*u:g+(x-g)*(1-h)+(p-g)*(1-u)}var Mn=class{constructor(t,e,n={}){this.d=t,this.base=e,this.mobile=!!n.mobile;let i=t.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=Cd(t.hf),a=Cd(t.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,t.hf=t.hc=null,Ge.uWorld.value.set(this.W,this.H),this.group=new Le,this.colliders=new fi(8),this.decks=new fi(16),this.names=new fi(24),this.edgeGrid=new fi(24),this.pedGrid=new fi(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:t.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?768:1024,this.fountains=[],this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(t,e){let n=t-this.fx,i=e-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?Pd(this.hf,this.fn,this.fn,this.fs,n,i):Pd(this.hc,this.cnx,this.cnz,this.cs,t,e)}surfaceY(t,e,n=1e9){let i=this.hAt(t,e),r=this.decks.query(t,e,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=Ci(t,e,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(t-c.x,e-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(t,e,n){return this.surfaceY(t,e,n)>this.hAt(t,e)+.5}streetAt(t,e){let n=this.names.query(t,e,30,this._tmp),i=null,r=30;for(let o of n){let a=Ci(t,e,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(t-a.x,e-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(t){let e=new Image;await new Promise(o=>{e.onload=o,e.onerror=o,e.src=this.base+"far.jpg"}),this.farImg=e;let n=new hn(e);n.colorSpace=Ce,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,Ge.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new ii(i);return r.colorSpace=Sn,r.minFilter=en,r.generateMipmaps=!1,r.flipY=!1,Ge.uLamp.value=r,t&&t(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),t&&t(.5),this.buildRoadGraph(),this.buildPedGraph(),t&&t(.8),this.buildPylon(),this.buildLod(),t&&t(1),this}indexLines(){let t=this.T,e=()=>this.tiles.map(()=>[]);this.ix={road:e(),foot:e(),cross:e(),steps:e(),tram:e(),rail:e()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/t));f<=Math.min(this.ntz-1,Math.floor(u/t));f++)for(let d=Math.max(0,Math.floor(c/t));d<=Math.min(this.ntx-1,Math.floor(h/t));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){this.farMat=new Zt({color:16777215,side:Ue}),this.farMat.onBeforeCompile=i=>ui(i,"","",`{
      diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;
      diffuseColor.rgb *= 0.80 + 0.22*vnoise(vWP.xz*0.11) + 0.16*vnoise(vWP.xz*0.9+3.0);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`),this.farMat.customProgramCacheKey=()=>"terrFar";let t=this.Rn;if(this.groundHead=vd,this.groundBody=sh.replace("texture2D(uGMask, vWP.xz / uWorld).rgb","texture2D(map, vMapUv).rgb").replace("diffuseColor.rgb = col;",`vec3 farC = texture2D(uFar, vWP.xz/uWorld).rgb * (0.80 + 0.22*nL + 0.16*nM);
          diffuseColor.rgb = mix(col, farC, smoothstep(${(t*.55).toFixed(1)}, ${(t*.95).toFixed(1)}, dist));`),this.groundBody===sh)throw new Error("ground shader patch failed");this.wallMat=new Zt({vertexColors:!0,side:Ue});let n=oh.replace("bool old = kid < 0.5,","bool panel = kid > 5.5 && kid < 6.5; bool clad = kid > 8.5 && kid < 9.5; bool glassW = kid > 9.5 && kid < 10.5; bool mall = kid > 10.5; bool old = kid < 0.5 || (kid > 6.5 && kid < 8.5),").replace("col = mix(col, inside, glass);","inside = mix(inside, vec3(0.04, 0.085, 0.10), (kid > 9.5 && kid < 10.5) ? 0.75 : 0.0); col = mix(col, inside, glass);").replace("(modern ? 0.85 : 0.6)","(modern || kid > 9.5 ? 0.9 : 0.6)").replace("float gType = isGround * (old ? 1.0 : 0.0);","float gType = isGround * (kid < 0.5 ? 1.0 : 0.0);").replace("} else if (util) {",`} else if (panel) {
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
          } else if (glassW) {
            // sklenen\xE1 obvodov\xE1 stena: priebe\u017En\xE9 sklo, tenk\xE9 st\u013Apiky, svetl\xFD p\xE1s pri ka\u017Edej podlahe
            float dm = (0.5 - abs(fract(wx * 2.0) - 0.5)) * bw * 0.5;
            float mul = 1.0 - smoothstep(0.05 - aa.x, 0.05 + aa.x, dm);
            float spd = (1.0 - isGround) * (1.0 - smoothstep(0.95 - aa.y, 0.95 + aa.y, q.y));
            float gl = body * (1.0 - spd);
            col = mix(col, vec3(0.20, 0.22, 0.24), gl * mul * (1.0 - far));
            glass = gl * (1.0 - mul * (1.0 - far)); lit = glass * step(0.5, rnd) * (1.0 - isGround);
            shopGlass = glass * isGround;
          } else if (mall) {
            // Nivy: svetl\xE9 zvisl\xE9 lamely, zelen\xE9 steny z rastl\xEDn, presklen\xE9 pr\xEDzemie
            float fin = fract(vF.x * bw / 0.9);
            float finS = smoothstep(0.0, 0.3, fin) * (1.0 - smoothstep(0.7, 1.0, fin));
            col *= mix(1.0, 0.80 + 0.22 * finS, above * (1.0 - far) * (1.0 - isGround));
            float grn = step(0.70, rndB) * above * (1.0 - isGround) * hasBays;
            vec3 leafC = vec3(0.17, 0.33, 0.13) * (0.65 + 0.7 * vnoise(vec2(vF.x * bw * 2.5, vF.y * 2.5)));
            col = mix(col, leafC, grn);
            float stripe = step(0.45, rndB) * step(rndB, 0.70) * hdBox(q, vec2(-bw * 0.45, floorH * 0.25), vec2(bw * 0.45, floorH * 0.75), aa) * body * (1.0 - isGround);
            float gl = isGround * hasBays * hdBox(q, vec2(-bw * 0.47, 0.25), vec2(bw * 0.47, floorH - 0.6), aa);
            col = mix(col, vec3(0.12, 0.12, 0.13), isGround * hasBays * (1.0 - gl));
            glass = max(gl, stripe); shopGlass = gl; lit = glass;
          } else if (util) {`);if(n.length<oh.length+3500)throw new Error("facade shader patch failed");this.wallMat.onBeforeCompile=i=>ui(i,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",_d,n),this.roofMat=new Zt({vertexColors:!0,side:Ue,flatShading:!0}),this.roofMat.onBeforeCompile=i=>ui(i,"","",Md),this.stoneMat=new Zt({vertexColors:!0,side:Ue,flatShading:!0}),this.stoneMat.onBeforeCompile=i=>ui(i,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new Oe(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new Gi(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new Oe(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new Zn(.28,6,4),this.headGeo.translate(0,4.7,0);for(let i of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])i.userData.shared=!0;this.trunkMat=new Zt({color:4864040}),this.crownMat=new Zt({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=i=>ui(i,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new Zt({color:2895408}),this.lampHeadMat=new Qe({color:16767392}),this.gateMat=new Zt({color:14209212})}tdist(t,e,n){let i=Math.max(t.x0-e,0,e-(t.x0+this.T)),r=Math.max(t.z0-n,0,n-(t.z0+this.T));return Math.hypot(i,r)}fetchTile(t){return t.state=1,t.has?fetch(this.base+"t/"+t.i+"_"+t.j+".json").then(e=>e.ok?e.json():so).catch(()=>so).then(e=>{t.state===1&&(t.data=e,t.state=2)}):(t.data=so,t.state=2,Promise.resolve())}unloadTile(t){this.genTile===t&&(this.gen=null,this.genTile=null);for(let e of t.objs)this.group.remove(e),e.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});t.objs.length=0,this.colliders.removeTag(t,t.keys),t.keys.clear(),this.gates=this.gates.filter(e=>e.tile!==t),this.fountains=this.fountains.filter(e=>e.tile!==t),t.data=null,t.state=0,t.lampPts=[],t.lod&&(t.lod.visible=!0),this.dropTex(t),this.lampDirty=!0}dropTex(t){t.tex&&(t.tex.dispose(),t.tex=null,t.cv=null,t.nearMat&&(t.nearMat.dispose(),t.nearMat=null),t.terr&&(t.terr.material=this.farMat))}runGen(t){let e=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-e>t)););}update(t,e,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,t,e);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(t-this.lampC[0],e-this.lampC[1])>190)&&this.paintLamps(t,e)}async prime(t,e){let n=this.tiles.filter(i=>this.tdist(i,t,e)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,t,e)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,t,e)<this.Rn&&this.paintTile(i);this.paintLamps(t,e)}makeTerrain(t){let e=t.fine?this.fs:this.cs,n=Math.round(this.T/e)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let p=0;p<n;p++)for(let x=0;x<n;x++){let g=p*n+x,m=t.x0+x*e,M=t.z0+p*e;r[g*3]=m,r[g*3+1]=this.hAt(m,M),r[g*3+2]=M;let v=this.hAt(m-e,M)-this.hAt(m+e,M),y=this.hAt(m,M-e)-this.hAt(m,M+e),S=Math.hypot(v,2*e,y);o[g*3]=v/S,o[g*3+1]=2*e/S,o[g*3+2]=y/S,a[g*2]=x*e/this.T,a[g*2+1]=p*e/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let p=0;p<n-1;p++)for(let x=0;x<n-1;x++){let g=p*n+x,m=g+1,M=g+n,v=M+1;c[l++]=g,c[l++]=M,c[l++]=m,c[l++]=m,c[l++]=M,c[l++]=v}let h=n*n,u=p=>{let x=h;for(let g=0;g<n;g++){let m=p(g);if(r[h*3]=r[m*3],r[h*3+1]=r[m*3+1]-5,r[h*3+2]=r[m*3+2],o[h*3]=o[m*3],o[h*3+1]=o[m*3+1],o[h*3+2]=o[m*3+2],a[h*2]=a[m*2],a[h*2+1]=a[m*2+1],g){let M=p(g-1),v=x+g-1,y=x+g;c[l++]=M,c[l++]=v,c[l++]=m,c[l++]=m,c[l++]=v,c[l++]=y}h++}};u(p=>p),u(p=>(n-1)*n+p),u(p=>p*n),u(p=>p*n+n-1);let f=new Ee;f.setAttribute("position",new Ie(r,3)),f.setAttribute("normal",new Ie(o,3)),f.setAttribute("uv",new Ie(a,2)),f.setIndex(new Ie(c,1)),f.computeBoundingSphere();let d=new Lt(f,t.nearMat||this.farMat);d.receiveShadow=!0,t.terr=d,this.group.add(d)}buildWater(){let t=new ni(this.W+3e3,this.H+3e3,1,1);t.rotateX(-Math.PI/2),t.translate(this.W/2,this.water,this.H/2);let e=new Zt({color:16777215}),n=rh.replace("vec3(0.030, 0.062, 0.050), vec3(0.055, 0.085, 0.060)","vec3(0.018, 0.050, 0.072), vec3(0.036, 0.080, 0.100)").replace("float fres = 0.04 + 0.96 *","float fres = 0.12 + 0.88 *");if(n===rh)throw new Error("water shader patch failed");e.onBeforeCompile=r=>ui(r,"",yd,n),this.waterMat=e;let i=new Lt(t,e);i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i)}paintTile(t){let n=this.T,i=t.data||so,r=document.createElement("canvas");r.width=r.height=384;let o=r.getContext("2d"),a=384/n;o.setTransform(a,0,0,a,-t.x0*a,-t.z0*a);let c=d=>{o.beginPath();for(let p=0;p<d.length;p++){let x=d[p][0]/10,g=d[p][1]/10;p?o.lineTo(x,g):o.moveTo(x,g)}},l=d=>{o.beginPath();for(let p of d){for(let x=0;x<p.length;x++){let g=p[x][0]/10+t.x0,m=p[x][1]/10+t.z0;x?o.lineTo(g,m):o.moveTo(g,m)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(t.x0,t.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let d of i.green)l(d),o.fill("evenodd");o.fillStyle="#b0a389";for(let d of i.parea)l(d),o.fill("evenodd");o.fillStyle="#26323a";for(let d of i.water)l(d),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[t.k].filter(d=>!d.b);o.strokeStyle="#a39a8a";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+3.6,c(d.p),o.stroke());o.strokeStyle="#6f685e";for(let d of u)d.c>=1&&d.c<=4&&(o.lineWidth=d.w+.6,c(d.p),o.stroke());o.strokeStyle="#a69c86";for(let d of this.ix.foot[t.k])o.lineWidth=d.sw?2.2:2.6,c(d.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let d of this.ix.steps[t.k])c(d),o.stroke();o.strokeStyle="#b5a88e";for(let d of u)d.c===5&&(o.lineWidth=d.w,c(d.p),o.stroke());o.lineCap="butt";for(let d of this.ix.rail[t.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(d),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(d),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(d=>d.c<=4).sort((d,p)=>d.c-p.c);for(let d of f)o.strokeStyle=d.s?"#615850":d.pk?"#46464a":"#3a3b40",o.lineWidth=d.w,c(d.p),o.stroke();o.lineCap="butt";for(let d of f)d.c<2||d.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,d.o?d.w>7&&(o.setLineDash([3,6]),c(d.p),o.stroke()):(o.setLineDash(d.c>=4?[]:[3,6]),c(d.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let d of this.ix.tram[t.k])d.b||(c(d.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let d of this.ix.tram[t.k])if(!d.b)for(let p of[-.72,.72]){o.beginPath();let x=d.p;for(let g=0;g<x.length;g++){let m=x[Math.max(0,g-1)],M=x[Math.min(x.length-1,g+1)],v=M[0]-m[0],y=M[1]-m[1],S=Math.hypot(v,y)||1,E=x[g][0]/10-y/S*p,w=x[g][1]/10+v/S*p;g?o.lineTo(E,w):o.moveTo(E,w)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let d of this.ix.cross[t.k])c(d),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let d of i.bld)(!d.m||d.m<1)&&(l([d.o]),o.fill());t.cv=r,this.paintMask(t)}paintMask(t){let e=this.texRes,n=this.T,i=t.data||so,r=document.createElement("canvas");r.width=r.height=e;let o=r.getContext("2d",{alpha:!1}),a=e/n;o.setTransform(a,0,0,a,-t.x0*a,-t.z0*a);let c=p=>{o.beginPath();for(let x=0;x<p.length;x++){let g=p[x][0]/10,m=p[x][1]/10;x?o.lineTo(g,m):o.moveTo(g,m)}},l=p=>{o.beginPath();for(let x of p){for(let g=0;g<x.length;g++){let m=x[g][0]/10+t.x0,M=x[g][1]/10+t.z0;g?o.lineTo(m,M):o.moveTo(m,M)}o.closePath()}};o.fillStyle="#0f0",o.fillRect(t.x0,t.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#000",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#0f0";for(let p of i.green)l(p),o.fill("evenodd");o.fillStyle="#00f";for(let p of i.parea)l(p),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[t.k].filter(p=>!p.b);o.strokeStyle="#000";for(let p of u)p.c>=1&&p.c<=4&&(o.lineWidth=p.w+3.6,c(p.p),o.stroke());for(let p of this.ix.foot[t.k])o.lineWidth=p.sw?2.2:2.6,c(p.p),o.stroke();o.lineWidth=3;for(let p of this.ix.steps[t.k])c(p),o.stroke();o.lineWidth=4.2;for(let p of this.ix.rail[t.k])c(p),o.stroke();o.strokeStyle="#00f";for(let p of u)p.c===5&&(o.lineWidth=p.w,c(p.p),o.stroke());for(let p of u.filter(x=>x.c<=4).sort((x,g)=>x.c-g.c)){let x=p.c===0&&(p.s||p.nv);o.strokeStyle=x?"#00f":p.s?"#f0f":"#f00",o.lineWidth=p.w,c(p.p),o.stroke()}let f=new ii(r);f.colorSpace=Sn,f.anisotropy=4,f.flipY=!1,f.minFilter=qn,f.generateMipmaps=!0,t.tex=f;let d=new Zt({map:f,side:Ue});d.onBeforeCompile=p=>ui(p,"",this.groundHead,this.groundBody),d.customProgramCacheKey=()=>"terrNear",t.nearMat=d,t.terr&&(t.terr.material=d),f.onUpdate=()=>{r.width=r.height=1}}drawGround(t,e,n,i){this.farImg&&this.farImg.width&&t.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,e,n)<i&&t.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(t,e){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(t/48)*48-1152/2,a=Math.round(e/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}Ge.uLampRect.value.set(o,a,1152,0),Ge.uLamp.value.needsUpdate=!0,this.lampC=[t,e],this.lampDirty=!1,this.lampT=40}emitBuilding(t,e,n,i,r,o,a){let c=1e9,l=-1e9;for(let _ of n){let b=this.hAt(_[0],_[1]);b<c&&(c=b),b>l&&(l=b)}let h=e.h,u=c+Math.max(h,l-c+2.5),f=!a&&e.g&&h>6&&!(e.m>.5),d=f?c+4.3:e.m>.5?c+e.m:c-3,p=fr;e.c?p.set(e.c):e.k==="modern"?p.set(Ed[r*Ed.length|0]):e.k==="util"?p.set("#a8a296"):e.k==="church"?p.set("#eee4cc"):e.k==="house"?p.set(Sd[r*Sd.length|0]):e.k==="block"?p.set(Td[r*Td.length|0]):e.k==="panel"?p.set("#d9d2c0"):p.set(wd[r*wd.length|0]);let x=p.r,g=p.g,m=p.b,M=e.l||Math.max(1,Math.round(h/(e.k==="panel"?2.9:3.4))),v=e.t?7.5:e.k==="mall"?5.6:pe(h/Math.max(1,M),2.7,5.5),y=B1[e.k]??0,S=e.k==="modern"?2.6:e.k==="glass"?3:e.k==="mall"?4.5:e.k==="church"?5:e.k==="panel"?3:e.k==="house"?3.8:3.4,E=[n,...i];for(let _ of E){let b=_.length,A=0;for(let L=0;L<b;L++){let D=_[L],z=_[(L+1)%b];A+=D[0]*z[1]-z[0]*D[1]}let R=(A>0?-1:1)*(_===n?1:-1),N=e.p?.06:0;for(let L=0;L<b;L++){let D=_[L],z=_[(L+1)%b],B=Math.hypot(z[0]-D[0],z[1]-D[1]);if(B<.05)continue;let G=B<2.2?0:Math.max(1,Math.round(B/S)),Y=d-c,F=u-c,H=G?0:-1,rt=G||-1,X=B/Math.max(1,G),Q=(z[1]-D[1])/B,at=-(z[0]-D[0])/B,ct=Q*R*N,tt=at*R*N,lt=D[0]+ct,st=D[1]+tt,ft=z[0]+ct,ot=z[1]+tt;t.wp.push(lt,d,st,ft,d,ot,ft,u,ot,lt,d,st,ft,u,ot,lt,u,st),t.wf.push(H,Y,X,rt,Y,X,rt,F,X,H,Y,X,rt,F,X,H,F,X);for(let U=0;U<6;U++)t.wn.push(Q,0,at),t.wc.push(x,g,m),t.wd.push(v,y,r,u-c);!a&&!(e.m>=2)&&!f&&e.k!=="roof"&&e.k!=="ruin"&&this.colliders.add({ax:D[0],az:D[1],bx:z[0],bz:z[1],y0:d-50,y1:u,kind:"b",tag:o},D[0],D[1],z[0],z[1],o.keys)}}let w=[],C=[];for(let _ of n)w.push(_[0],_[1]);for(let _ of i){C.push(w.length/2);for(let b of _)w.push(b[0],b[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let _=(0,ro.default)(w,C);for(let b=0;b<_.length;b++)t.rp.push(w[_[b]*2],d,w[_[b]*2+1]),t.rc.push(.35,.33,.3)}if(!a&&e.r>.3&&e.s!=="f")this.pitchedRoof(n,i,w,C,u,e,r,t.rp,t.rc);else{let _=(0,ro.default)(w,C);e.rc?p.set(e.rc):p.set(e.k==="modern"?"#5d5f63":e.k==="util"?"#6c6a66":e.k==="panel"?"#6f6c66":"#615c58");let b=.9+r*.2;for(let A=0;A<_.length;A++)t.rp.push(w[_[A]*2],u,w[_[A]*2+1]),t.rc.push(p.r*b,p.g*b,p.b*b);if(e.m>.5)for(let A=_.length-1;A>=0;A--)t.rp.push(w[_[A]*2],d,w[_[A]*2+1]),t.rc.push(p.r*.6,p.g*.6,p.b*.6)}}pitchedRoof(t,e,n,i,r,o,a,c,l){let h=(0,ro.default)(n,i),u=[];for(let R=0;R<n.length;R+=2)u.push([n[R],n[R+1]]);let f=[];for(let R of[t,...e])for(let N=0;N<R.length;N++)f.push([R[N],R[(N+1)%R.length]]);let d=0;for(let R=0;R<t.length;R++){let N=t[R],L=t[(R+1)%t.length];d+=N[0]*L[1]-L[0]*N[1]}d=Math.abs(d/2);let p=o.k==="house"||this.mobile,x=p?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),g=[];for(let R=0;R<h.length;R+=3)g.push([h[R],h[R+1],h[R+2]]);let m=new Map,M=(R,N)=>{let L=R<N?R*1e6+N:N*1e6+R,D=m.get(L);return D===void 0&&(D=u.length,u.push([(u[R][0]+u[N][0])/2,(u[R][1]+u[N][1])/2]),m.set(L,D)),D},v=(R,N)=>Math.hypot(u[R][0]-u[N][0],u[R][1]-u[N][1])>x;for(let R=0;R<(p?4:7);R++){let N=!1,L=[];for(let D of g){let z=v(D[0],D[1]),B=v(D[1],D[2]),G=v(D[2],D[0]),Y=z+B+G;if(!Y){L.push(D);continue}N=!0;let[F,H,rt]=D,X=[z,B,G];if(Y===1){for(;!X[0];)[F,H,rt]=[H,rt,F],X=[X[1],X[2],X[0]];let Q=M(F,H);L.push([F,Q,rt],[Q,H,rt])}else if(Y===2){for(;X[2];)[F,H,rt]=[H,rt,F],X=[X[1],X[2],X[0]];let Q=M(F,H),at=M(H,rt);L.push([F,Q,at],[Q,H,at],[F,at,rt])}else{let Q=M(F,H),at=M(H,rt),ct=M(rt,F);L.push([F,Q,ct],[Q,H,at],[ct,at,rt],[Q,at,ct])}}if(g=L,!N)break}let y=u.map(([R,N])=>{let L=1e9;for(let[D,z]of f){let B=z[0]-D[0],G=z[1]-D[1],Y=B*B+G*G||1e-9,F=((R-D[0])*B+(N-D[1])*G)/Y;F=F<0?0:F>1?1:F;let H=D[0]+B*F-R,rt=D[1]+G*F-N,X=H*H+rt*rt;X<L&&(L=X)}return Math.sqrt(L)}),S=.01;for(let R of y)S=Math.max(S,R);let E=o.r,w;o.s==="d"?w=y.map(R=>E*Math.sqrt(Math.max(0,1-(1-R/S)**2))):o.s==="p"?w=y.map(R=>E*R/S):w=y.map(R=>Math.min(R*.82,E+1.2));let C=fr;o.rc?C.set(o.rc):C.set(Ad[xn(a*1e6|0)*Ad.length|0]);let _=C.r,b=C.g,A=C.b;for(let R of g){let N=.88+xn(R[0]*31+R[1])*.1;for(let L of R)c.push(u[L][0],r+w[L],u[L][1]),l.push(_*N,b*N,A*N)}}meshesFrom(t,e=!0){let n=[];if(t.wp.length){let i=new Ee;i.setAttribute("position",new ne(t.wp,3)),i.setAttribute("normal",new ne(t.wn,3)),i.setAttribute("color",new ne(t.wc,3)),i.setAttribute("fuv",new ne(t.wf,3)),i.setAttribute("fdat",new ne(t.wd,4)),i.computeBoundingSphere();let r=new Lt(i,this.wallMat);r.castShadow=r.receiveShadow=e,n.push(r)}if(t.rp.length){let i=new Ee;i.setAttribute("position",new ne(t.rp,3)),i.setAttribute("color",new ne(t.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new Lt(i,this.roofMat);r.castShadow=r.receiveShadow=e,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let t=new Map;this.d.tall.forEach((e,n)=>{let i=e.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=pe(Math.floor(r/this.T),0,this.ntx-1),c=pe(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=t.get(l);h||t.set(l,h=this.newArrays()),Rd(e,i),this.emitBuilding(h,e,i,[],xn(n*613+7),l,!0)});for(let[e,n]of t){let i=new Le;for(let r of this.meshesFrom(n,!1))i.add(r);e.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(t){let e=t.data,n=this.T,i=t.x0,r=t.z0,o=new re,a=new Ke,c=new O,l=new O,h=new O(0,1,0),u=e.trees.filter(v=>!G1.some(([y,S,E])=>Math.hypot(v[0]/10+i-y,v[1]/10+r-S)<E)),f=u.length;if(f){let v=new rn(this.trunkGeo,this.trunkMat,f),y=new rn(this.crownGeo,this.crownMat,f);for(let E=0;E<f;E++){let w=u[E][0]/10+i,C=u[E][1]/10+r,_=t.k*4099+E,b=.75+xn(_*3+1)*.6,A=this.hAt(w,C);a.setFromAxisAngle(h,xn(_)*6.28),o.compose(l.set(w,A,C),a,c.set(b,b*(.9+xn(_*5)*.3),b)),v.setMatrixAt(E,o),y.setMatrixAt(E,o),fr.setHSL(.22+xn(_*11)*.08,.38+xn(_*17)*.2,.22+xn(_*19)*.1),y.setColorAt(E,fr),this.colliders.add({ax:w-.25,az:C,bx:w+.25,bz:C,y0:A-2,y1:A+3,kind:"t",tag:t,im:[v,y],idx:E,px:w,pz:C,py:A,sc:b},w-.3,C-.3,w+.3,C+.3,t.keys)}v.castShadow=y.castShadow=!this.mobile||f<500,y.receiveShadow=!0,v.frustumCulled=y.frustumCulled=!1;let S=new Le;S.add(v,y),t.objs.push(S),this.group.add(S)}yield;let d=e.lamps.map(v=>[v[0]/10+i,v[1]/10+r]),p=new fi(20),x=[];for(let v of d)p.add(v,v[0],v[1],v[0],v[1]);for(let v of this.ix.road[t.k]){if(v.b||v.c<1||v.c>5)continue;let y=v.p,S=14+xn(y[0][0]*7+y[0][1])*10,E=1;for(let w=0;w<y.length-1;w++){let C=y[w][0]/10,_=y[w][1]/10,b=y[w+1][0]/10,A=y[w+1][1]/10,R=Math.hypot(b-C,A-_);if(!(R<.01)){for(;S<R;){let N=S/R,L=-(A-_)/R,D=(b-C)/R,z=v.c===5?0:v.w/2+.9,B=C+(b-C)*N+L*z*E,G=_+(A-_)*N+D*z*E;if(B>=i&&G>=r&&B<i+n&&G<r+n&&!p.query(B,G,13,x).length){let Y=[B,G];d.push(Y),p.add(Y,B,G,B,G)}E=-E,S+=v.c>=3?26:30}S-=R}}}t.lampPts=d;let g=d.filter(([v,y])=>this.surfaceY(v,y)===this.hAt(v,y));if(g.length){let v=new rn(this.postGeo,this.postMat,g.length),y=new rn(this.headGeo,this.lampHeadMat,g.length);g.forEach(([E,w],C)=>{o.makeTranslation(E,this.hAt(E,w),w),v.setMatrixAt(C,o),y.setMatrixAt(C,o),this.colliders.add({ax:E-.1,az:w,bx:E+.1,bz:w,y0:-50,y1:999,kind:"p",tag:t,im:[v,y],idx:C,px:E,pz:w,py:this.hAt(E,w),sc:1},E-.2,w-.2,E+.2,w+.2,t.keys)}),v.frustumCulled=y.frustumCulled=!1;let S=new Le;S.add(v,y),t.objs.push(S),this.group.add(S)}yield;let m=this.newArrays(),M=this.gates.length;for(let v=0;v<e.bld.length;v++){let y=e.bld[v];if(y.n==="UFO")continue;y.n==="Kostol sv. Al\u017Ebety"&&(y.c="#9cc4e8",y.rc="#5f86b4");let S=y.o.map(w=>[w[0]/10+i,w[1]/10+r]);if(this.pylonC&&y.h>60&&Math.hypot(S[0][0]-this.pylonC[0],S[0][1]-this.pylonC[1])<40)continue;let E=(y.i||[]).map(w=>w.map(C=>[C[0]/10+i,C[1]/10+r]));Rd(y,S),this.emitBuilding(m,y,S,E,xn(t.k*7919+v*977+13),t,!1),v%24===23&&(yield)}for(let v=M;v<this.gates.length;v++){let y=this.gates[v],S=y.outer;if(y.tile!==t)continue;let E=0,w=0;for(let _ of S)E+=_[0],w+=_[1];E/=S.length,w/=S.length;let C=S.slice().sort((_,b)=>Math.hypot(b[0]-E,b[1]-w)-Math.hypot(_[0]-E,_[1]-w)).slice(0,4);for(let _ of C){let b=_[0]+(E-_[0])*.18,A=_[1]+(w-_[1])*.18,R=y.bot-y.gmin+3,N=new Lt(new He(1.8,R,1.8),this.gateMat);N.position.set(b,y.gmin-3+R/2,A),N.castShadow=N.receiveShadow=!0,t.objs.push(N),this.group.add(N),this.colliders.add({ax:b-.9,az:A,bx:b+.9,bz:A,y0:-50,y1:y.bot,kind:"b",tag:t},b-1,A-1,b+1,A+1,t.keys),this.colliders.add({ax:b,az:A-.9,bx:b,bz:A+.9,y0:-50,y1:y.bot,kind:"b",tag:t},b-1,A-1,b+1,A+1,t.keys)}}yield;for(let v of this.meshesFrom(m))t.objs.push(v),this.group.add(v);if(yield,this.buildMarkings(t),yield,this.buildSigns(t),yield,this.buildFountains(t),yield,e.walls.length){let v=[],y=[],S=new kt,E=(_,b,A,R,N,L,D,z,B)=>{let G=Math.hypot(A-_,R-b);if(G<.05)return;let Y=-(R-b)/G*B*.5,F=(A-_)/G*B*.5,H=[[_+Y,b+F],[A+Y,R+F],[A-Y,R-F],[_-Y,b-F]],rt=(at,ct,tt,lt)=>{v.push(...at,...ct,...tt,...at,...tt,...lt);for(let st=0;st<6;st++)y.push(S.r,S.g,S.b)},X=at=>at===0||at===3?N:L,Q=at=>at===0||at===3?D:z;for(let at=0;at<4;at++){let ct=(at+1)%4;rt([H[at][0],X(at),H[at][1]],[H[ct][0],X(ct),H[ct][1]],[H[ct][0],Q(ct),H[ct][1]],[H[at][0],Q(at),H[at][1]])}rt([H[0][0],Q(0),H[0][1]],[H[1][0],Q(1),H[1][1]],[H[2][0],Q(2),H[2][1]],[H[3][0],Q(3),H[3][1]])};for(let _ of e.walls){let b=_.p.map(R=>[R[0]/10+i,R[1]/10+r]),A=_.k==="c"?2.4:_.k==="r"?.8:.45;S.set(_.k==="c"?"#a39a88":_.k==="r"?"#8f887a":"#a8a092");for(let R=0;R<b.length-1;R++){let[N,L]=b[R],[D,z]=b[R+1],B=this.hAt(N,L),G=this.hAt(D,z),Y=Math.min(_.h,_.k==="c"?9:4);if(E(N,L,D,z,B-2,G-2,B+Y,G+Y,A),this.colliders.add({ax:N,az:L,bx:D,bz:z,y0:Math.min(B,G)-3,y1:Math.max(B,G)+Y,kind:"w",tag:t},N,L,D,z,t.keys),_.k==="c"){let F=Math.hypot(D-N,z-L);for(let H=.6;H<F-.6;H+=2.4){let rt=H/F,X=Math.min(1,(H+1.2)/F),Q=be(B,G,rt)+Y,at=be(B,G,X)+Y;E(N+(D-N)*rt,L+(z-L)*rt,N+(D-N)*X,L+(z-L)*X,Q,at,Q+1.1,at+1.1,A)}}}}let w=new Ee;w.setAttribute("position",new ne(v,3)),w.setAttribute("color",new ne(y,3)),w.computeVertexNormals();let C=new Lt(w,this.stoneMat);C.castShadow=C.receiveShadow=!0,t.objs.push(C),this.group.add(C)}t.lod&&(t.lod.visible=!1),t.state=4,this.lampDirty=!0}buildMarkings(t){let e=[],n=[],i=this.T,r=t.x0,o=t.z0,a=(w,C)=>w>=r&&C>=o&&w<r+i&&C<o+i,c=(w,C,_,b,A)=>{e.push(...w,...C,..._,...w,..._,...b);for(let R=0;R<6;R++)n.push(A[0],A[1],A[2])},l=w=>w.map(C=>[C[0]/10,C[1]/10]),h=(w,C)=>{let _=[],b=0;for(let A=0;A<w.length-1;A++){let[R,N]=w[A],[L,D]=w[A+1],z=Math.hypot(L-R,D-N);if(z<.01)continue;let B=Math.max(1,Math.ceil(z/C)),G=(L-R)/z,Y=(D-N)/z;for(let F=0;F<B;F++)_.push({x:R+(L-R)*F/B,z:N+(D-N)*F/B,s:b+z*F/B,dx:G,dz:Y});b+=z,A===w.length-2&&_.push({x:L,z:D,s:b,dx:G,dz:Y})}for(let A=1;A<_.length-1;A++){let R=_[A-1],N=_[A+1],L=Math.hypot(N.x-R.x,N.z-R.z)||1;_[A].nx=-(N.z-R.z)/L,_[A].nz=(N.x-R.x)/L}if(_.length){let A=_[0],R=_[_.length-1];A.nx=-A.dz,A.nz=A.dx,R.nx=-R.dz,R.nz=R.dx}return _},u=(w,C,_,b,A,R,N=0,L=0,D=null)=>{for(let z=0;z<w.length-1;z++){let B=w[z],G=w[z+1],Y=(B.s+G.s)/2;if(!a((B.x+G.x)/2,(B.z+G.z)/2)||N&&Y%(N+L)>N||D&&D.some(([tt,lt])=>Y>tt&&Y<lt))continue;let F=B.x+B.nx*C,H=B.z+B.nz*C,rt=G.x+G.nx*C,X=G.z+G.nz*C,Q=_/2,at=A(F,H)+R,ct=A(rt,X)+R;c([F+B.nx*Q,at,H+B.nz*Q],[rt+G.nx*Q,ct,X+G.nz*Q],[rt-G.nx*Q,ct,X-G.nz*Q],[F-B.nx*Q,at,H-B.nz*Q],b)}},f=(w,C)=>this.hAt(w,C),d=(w,C)=>this.surfaceY(w,C),p=[.78,.78,.74],x=[.36,.37,.39];this.touch||(this.touch=new Map,this.d.road.forEach((w,C)=>{if(!(w.c<1||w.c>4))for(let _ of w.p){let b=_[0]*2e5+_[1],A=this.touch.get(b);A?A.includes(C)||A.push(C):this.touch.set(b,[C])}}),this.d.road.forEach((w,C)=>{w._i=C}));for(let w of this.ix.road[t.k]){if(w.c<1||w.c>4||w.s||w.pk||w.nv)continue;let C=!w.o,_=l(w.p),b=h(_,w.c>=3?2:2.5);if(b.length<2)continue;let A=w.b?d:f,R=b[b.length-1].s,N=[],L=0;for(let B=0;B<w.p.length;B++){B&&(L+=Math.hypot(_[B][0]-_[B-1][0],_[B][1]-_[B-1][1]));let G=(this.touch.get(w.p[B][0]*2e5+w.p[B][1])||[]).filter(H=>H!==w._i);if(!G.length)continue;let Y=Math.max(...G.map(H=>this.d.road[H].w));(B===0||B===w.p.length-1)&&G.length===1&&this.d.road[G[0]].c===w.c&&Math.abs(this.d.road[G[0]].w-w.w)<.1||N.push([L-Y/2-3,L+Y/2+3])}if(R<14)continue;let D=w.b?.05:.04,z=w.w>=10;if(w.c>=2||w.c===1&&w.w>=6.5)if(z){C&&(u(b,.14,.12,p,A,D,0,0,N),u(b,-.14,.12,p,A,D,0,0,N));for(let B of C?[w.w/4,-w.w/4]:[w.w/6,-w.w/6])u(b,B,.13,p,A,D,3,6,N)}else(C||w.w>=7)&&u(b,0,.13,p,A,D,3,w.c>=3?4.5:6,N);if(w.c>=3)for(let B of[w.w/2-.3,-(w.w/2-.3)])u(b,B,.12,p,A,D,0,0,N)}let g=[.5,.49,.46],m=[.3,.29,.27];for(let w of this.ix.road[t.k]){if(w.c<1||w.c>4||w.b||w.s||w.pk||w.nv)continue;let C=l(w.p),_=h(C,2.5);if(_.length<2)continue;let b=[],A=0;for(let R=0;R<w.p.length;R++){R&&(A+=Math.hypot(C[R][0]-C[R-1][0],C[R][1]-C[R-1][1]));let N=(this.touch.get(w.p[R][0]*2e5+w.p[R][1])||[]).filter(z=>z!==w._i);if(!N.length||(R===0||R===w.p.length-1)&&N.length===1&&Math.abs(this.d.road[N[0]].w-w.w)<.1)continue;let D=Math.max(...N.map(z=>this.d.road[z].w));b.push([A-D/2-2.2,A+D/2+2.2])}for(let R of[1,-1]){let N=R*(w.w/2-.04),L=R*(w.w/2+.26);for(let D=0;D<_.length-1;D++){let z=_[D],B=_[D+1],G=(z.s+B.s)/2;if(!a((z.x+B.x)/2,(z.z+B.z)/2)||b.some(([ft,ot])=>G>ft&&G<ot))continue;let Y=[z.x+z.nx*N,0,z.z+z.nz*N],F=[B.x+B.nx*N,0,B.z+B.nz*N],H=[z.x+z.nx*L,0,z.z+z.nz*L],rt=[B.x+B.nx*L,0,B.z+B.nz*L],X=this.hAt(Y[0],Y[2]),Q=this.hAt(F[0],F[2]),at=.13,ct=[Y[0],X+at,Y[2]],tt=[F[0],Q+at,F[2]],lt=[H[0],this.hAt(H[0],H[2])+at,H[2]],st=[rt[0],this.hAt(rt[0],rt[2])+at,rt[2]];R>0?(c(ct,tt,st,lt,g),c([Y[0],X,Y[2]],[F[0],Q,F[2]],tt,ct,m)):(c(lt,st,tt,ct,g),c(ct,tt,[F[0],Q,F[2]],[Y[0],X,Y[2]],m))}}}let M=[],v=(w,C)=>{for(let _ of this.edgeGrid.query(w,C,8,M)){let b=Ci(w,C,_.ax,_.az,_.bx,_.bz,this._c);if(Math.hypot(w-b.x,C-b.z)<_.e.r.w/2-.1)return!0}return!1};for(let w of this.ix.cross[t.k]){let C=h(l(w),.25);for(let _=0;_<C.length-1;_++){let b=C[_];if(b.s%1>.5)continue;let A=C[_+1],R=(b.x+A.x)/2,N=(b.z+A.z)/2;if(!a(R,N)||!v(R,N))continue;let L=1.7,D=f(R,N)+.045;c([b.x+b.nx*L,D,b.z+b.nz*L],[A.x+A.nx*L,D,A.z+A.nz*L],[A.x-A.nx*L,D,A.z-A.nz*L],[b.x-b.nx*L,D,b.z-b.nz*L],[.82,.82,.78])}}for(let w of this.ix.tram[t.k]){let C=h(l(w.p),1.5);if(C.length<2)continue;let _=w.b?d:f;for(let b of[-.5,.5])u(C,b,.075,x,_,.05),u(C,b+.07*Math.sign(b),.05,[.05,.05,.055],_,.048)}for(let w of this.ix.rail[t.k]){let C=h(l(w),3);if(!(C.length<2)){u(C,0,2.7,[.13,.12,.11],f,.03),u(C,0,2.3,[.2,.17,.14],f,.04,.28,.42);for(let _ of[-.72,.72])u(C,_,.09,[.42,.42,.44],f,.06)}}if(!e.length)return;this.markMat||(this.markMat=new Zt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.markMat.onBeforeCompile=w=>ui(w,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);
        totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`));let y=new Ee,S=new Float32Array(e.length);for(let w=1;w<S.length;w+=3)S[w]=1;y.setAttribute("position",new ne(e,3)),y.setAttribute("normal",new Ie(S,3)),y.setAttribute("color",new ne(n,3)),y.computeBoundingSphere();let E=new Lt(y,this.markMat);E.receiveShadow=!0,t.objs.push(E),this.group.add(E)}buildSigns(t){let e=[],n=this.T;for(let d of this.ix.road[t.k]){if(d.c<1||d.c>3||d.b||d.nv||d.pk)continue;let p=d.p.length;for(let x of[0,1]){let g=x?p-1:0,m=d.p[g][0]*2e5+d.p[g][1],M=(this.touch.get(m)||[]).filter(R=>R!==d._i);if(M.length<1||M.length===1&&this.d.road[M[0]].c===d.c||xn(m%99991)<.35)continue;let v=d.p[g],y=d.p[x?p-2:1],S=(y[0]-v[0])/10,E=(y[1]-v[1])/10,w=Math.hypot(S,E);if(w<9)continue;S/=w,E/=w;let C=Math.min(w-1,8.5),_=(x?-1:1)*(d.w/2+1),b=v[0]/10+S*C-E*_,A=v[1]/10+E*C+S*_;b<t.x0||A<t.z0||b>=t.x0+n||A>=t.z0+n||this.hAt(b,A)<this.water+1||e.push([b,A,Math.atan2(-S,-E),Math.floor(xn(m%7919)*4)])}}if(!e.length)return;if(!this.signGeo){this.signGeo=[new Oe(.035,.035,2.5,5),new Oe(.34,.34,.04,14),new Oe(.24,.24,.05,12)],this.signGeo[0].translate(0,1.25,0);for(let d of this.signGeo.slice(1))d.rotateX(Math.PI/2),d.translate(0,2.35,.03);for(let d of this.signGeo)d.userData.shared=!0;this.signMat=[new Zt({color:9146260}),new Zt({color:16777215}),new Zt({color:16777215})]}let i=this.signGeo.map((d,p)=>new rn(d,this.signMat[p],e.length)),r=new re,o=new Ke,a=new O(0,1,0),c=new O(1,1,1),l=new O,h=["#c8102e","#1456b8","#c8102e","#f2c230"],u=["#ffffff","#1456b8","#c8102e","#f2c230"];e.forEach(([d,p,x,g],m)=>{let M=this.hAt(d,p);o.setFromAxisAngle(a,x),r.compose(l.set(d,M,p),o,c);for(let v of i)v.setMatrixAt(m,r);i[1].setColorAt(m,fr.set(h[g])),i[2].setColorAt(m,fr.set(u[g])),this.colliders.add({ax:d-.08,az:p,bx:d+.08,bz:p,y0:M-1,y1:M+2.6,kind:"p",tag:t,im:i,idx:m,px:d,pz:p,py:M,sc:1,sign:[x,h[g],u[g]]},d-.2,p-.2,d+.2,p+.2,t.keys)});let f=new Le;for(let d of i)d.frustumCulled=!1,d.castShadow=!1,f.add(d);t.objs.push(f),this.group.add(f)}buildFountains(t){let e=[],n=[],i=[];for(let r of t.data.water){let o=r[0].map(m=>[m[0]/10+t.x0,m[1]/10+t.z0]);if(o.length>60||o.length<3)continue;let a=0,c=0,l=1e9;for(let[m,M]of o)a+=m,c+=M,l=Math.min(l,this.hAt(m,M));if(a/=o.length,c/=o.length,l<this.water+1.5)continue;let h=l+.32,u=[];for(let m of o)u.push(m[0],m[1]);let f=(0,ro.default)(u);for(let m=0;m<f.length;m++)i.push(u[f[m]*2],h,u[f[m]*2+1]);let d=0;for(let m=0;m<o.length;m++){let M=o[m],v=o[(m+1)%o.length];d+=M[0]*v[1]-v[0]*M[1]}let p=d>0?1:-1,x=l+.5,g=.28;for(let m=0;m<o.length;m++){let M=o[m],v=o[(m+1)%o.length],y=Math.hypot(v[0]-M[0],v[1]-M[1]);if(y<.05)continue;let S=(v[1]-M[1])/y*p*g,E=-(v[0]-M[0])/y*p*g,w=[M[0],l-1,M[1]],C=[v[0],l-1,v[1]],_=[M[0],x,M[1]],b=[v[0],x,v[1]],A=[M[0]+S,x,M[1]+E],R=[v[0]+S,x,v[1]+E],N=[M[0]+S,l-1,M[1]+E],L=[v[0]+S,l-1,v[1]+E],D=(z,B,G,Y)=>{e.push(...z,...B,...G,...z,...G,...Y);for(let F=0;F<6;F++)n.push(.56,.54,.5)};D(w,C,b,_),D(_,b,R,A),D(A,R,L,N),this.colliders.add({ax:M[0],az:M[1],bx:v[0],bz:v[1],y0:l-2,y1:x+.4,kind:"w",tag:t},M[0],M[1],v[0],v[1],t.keys)}this.fountains.push({x:a,z:c,y:h,area:Math.abs(d)/2,tile:t})}if(i.length){let r=new Ee;r.setAttribute("position",new ne(i,3)),r.computeVertexNormals();let o=new Lt(r,this.waterMat);o.receiveShadow=!0,t.objs.push(o),this.group.add(o)}if(e.length){let r=new Ee;r.setAttribute("position",new ne(e,3)),r.setAttribute("color",new ne(n,3)),r.computeVertexNormals();let o=new Lt(r,this.stoneMat);o.castShadow=o.receiveShadow=!0,t.objs.push(o),this.group.add(o)}}buildBridges(){let t=this.d.road.filter(u=>u.b),e=u=>[u[0]/10,u[1]/10],n=u=>u[0]+","+u[1],i=new Set,r=new Map;t.forEach((u,f)=>{for(let d of[u.p[0],u.p[u.p.length-1]]){let p=n(d);r.has(p)||r.set(p,[]),r.get(p).push(f)}});let o=[];t.forEach((u,f)=>{if(i.has(f))return;i.add(f);let d=u.p.slice(),p=!0;for(;p;){p=!1;for(let x of[!1,!0]){let g=n(x?d[0]:d[d.length-1]);for(let m of r.get(g)||[]){if(i.has(m))continue;let M=t[m];if((M.n||"")===(u.n||"")){if(x){if(n(M.p[M.p.length-1])!==g)continue;d=M.p.slice(0,-1).concat(d)}else{if(n(M.p[0])!==g)continue;d=d.concat(M.p.slice(1))}i.add(m),p=!0;break}}if(p)break}}o.push({pts:d.map(e),w:u.w,n:u.n||"",c:u.c,bh:u.bh})});let a=this.d.river.map(u=>u.map(e)),c=(u,f)=>a.some(d=>io(u,f,d));this.bridges=[];let l=o.filter(u=>u.n==="Most SNP"&&u.pts.length>3).length;for(let u of o){let f=[],d=0;for(let E=0;E<u.pts.length-1;E++){let[w,C]=u.pts[E],[_,b]=u.pts[E+1],A=Math.hypot(_-w,b-C),R=Math.max(1,Math.ceil(A/2));for(let N=0;N<R;N++)f.push({x:w+(_-w)*N/R,z:C+(b-C)*N/R,d:d+A*N/R});d+=A}let p=u.pts[u.pts.length-1];if(f.push({x:p[0],z:p[1],d}),d<1)continue;let x=this.hAt(f[0].x,f[0].z),g=this.hAt(p[0],p[1]),m=u.n==="Most SNP",M=u.bh!==void 0?u.bh:m?11.5:7,v=M===0;for(let E of f)E.base=Math.max(be(x,g,E.d/d),this.water+1.6),E.tgt=!v&&c(E.x,E.z)?this.water+M:E.base,v||(E.tgt=Math.max(E.tgt,this.hAt(E.x,E.z)+(m?.2:0)));let y=m?.055:.075;for(let E of f){let w=E.base;if(!v)for(let C of f)w=Math.max(w,C.tgt-y*Math.abs(E.d-C.d));E.y=w}let S=m?l>1?6.8:10.8:Math.max(2.5,u.w/2+1.2);this.bridges.push({s:f,hw:S,big:m,low:v,n:u.n})}let h=(u,f,d)=>{for(let p of this.bridges)if(p!==d)for(let x=0;x<p.s.length-1;x++){let g=p.s[x],m=p.s[x+1],M=Ci(u,f,g.x,g.z,m.x,m.z,this._c);if(Math.hypot(u-M.x,f-M.z)<1.6)return g.y+(m.y-g.y)*M.t}return null};for(let u of this.bridges){if(u.low)continue;let f=u.s;for(let d of[f[0],f[f.length-1]]){let p=h(d.x,d.z,u),x=p!==null?p:this.hAt(d.x,d.z)+.02;if(p!==null&&Math.abs(p-d.y)<.3)continue;let g=u.big?.06:.11;for(let m of f)m.y=Math.min(m.y,x+g*Math.abs(m.d-d.d));if(p!==null)for(let m of f)m.y=Math.max(m.y,x-g*Math.abs(m.d-d.d))}for(let d of f)d.y=Math.max(d.y,this.hAt(d.x,d.z)+.02)}for(let u of this.bridges){let f=u.s,d=u.hw;for(let p=0;p<f.length-1;p++){let x=f[p],g=f[p+1],m={ax:x.x,az:x.z,bx:g.x,bz:g.z,ya:x.y,yb:g.y,hw:d,br:u};this.decks.add(m,Math.min(x.x,g.x)-d,Math.min(x.z,g.z)-d,Math.max(x.x,g.x)+d,Math.max(x.z,g.z)+d)}}}buildBridgeMeshes(){let t=[],e=[],n=new kt,i=(y,S,E,w,C)=>{t.push(...y,...S,...E,...y,...E,...w);for(let _=0;_<6;_++)e.push(C[0],C[1],C[2])};for(let y of this.bridges){let S=y.s;n.set(y.big?"#8d9297":"#b3aea2");let E=[n.r,n.g,n.b],w=[.24,.24,.26];for(let C=0;C<S.length-1;C++){let _=S[C],b=S[C+1],A=Math.hypot(b.x-_.x,b.z-_.z)||1,R=-(b.z-_.z)/A,N=(b.x-_.x)/A,L=y.hw,D=[_.x+R*L,_.y,_.z+N*L],z=[_.x-R*L,_.y,_.z-N*L],B=[b.x+R*L,b.y,b.z+N*L],G=[b.x-R*L,b.y,b.z-N*L],Y=y.big?3.6:y.low?.8:2.2,F=ct=>[ct[0],ct[1]-Y,ct[2]];i(D,B,G,z,w),i(F(D),F(z),F(G),F(B),E.map(ct=>ct*.6)),i(D,F(D),F(B),B,E),i(z,G,F(G),F(z),E);let H=[_.x+R*.15,_.y+.03,_.z+N*.15],rt=[_.x-R*.15,_.y+.03,_.z-N*.15],X=[b.x-R*.15,b.y+.03,b.z-N*.15],Q=[b.x+R*.15,b.y+.03,b.z+N*.15];if((y.big||C%4<2&&L>4)&&i(H,Q,X,rt,[.8,.78,.7]),_.y>this.hAt(_.x,_.z)+.9||b.y>this.hAt(b.x,b.z)+.9){for(let ct of[1,-1]){let tt=[_.x+R*L*ct,_.y,_.z+N*L*ct],lt=[b.x+R*L*ct,b.y,b.z+N*L*ct],st=(tt[0]+lt[0])/2+R*ct*.7,ft=(tt[2]+lt[2])/2+N*ct*.7,ot=!1;for(let vt of this.decks.query(st,ft,1,this._tmp)){if(vt.br===y)continue;let mt=Ci(st,ft,vt.ax,vt.az,vt.bx,vt.bz,this._c);if(Math.hypot(st-mt.x,ft-mt.z)<vt.hw&&Math.abs(vt.ya+(vt.yb-vt.ya)*mt.t-_.y)<1.6){ot=!0;break}}if(ot)continue;let U=(vt,mt)=>[vt[0],vt[1]+mt,vt[2]];i(tt,lt,U(lt,1.1),U(tt,1.1),[.78,.79,.8]),this.colliders.add({ax:tt[0],az:tt[2],bx:lt[0],bz:lt[2],y0:Math.min(_.y,b.y)-1,y1:Math.max(_.y,b.y)+1.4,kind:"r",tag:null},tt[0],tt[2],lt[0],lt[2]),y.big&&this.snpWalk(y,_,b,R*ct,N*ct,L,C,i)}if(!y.low&&!y.big&&!H1.has(y.n)&&C%30===15){let ct=Math.min(this.hAt(_.x,_.z),this.water)-3;if(_.y-ct>4){let lt=[_.x-2.2,_.y-Y,_.z-2.2],st=[_.x+2.2,_.y-Y,_.z-2.2],ft=[_.x+2.2,_.y-Y,_.z+2.2],ot=[_.x-2.2,_.y-Y,_.z+2.2],U=vt=>[vt[0],ct,vt[2]];i(lt,st,U(st),U(lt),E),i(st,ft,U(ft),U(st),E),i(ft,ot,U(ot),U(ft),E),i(ot,lt,U(lt),U(ot),E)}}}}}let r=(y,S,E,w)=>{let C=S[0]-y[0],_=S[1]-y[1],b=S[2]-y[2],A=Math.hypot(C,_,b)||1,R=-b,N=C,L=Math.hypot(R,N);L<1e-4?(R=1,N=0):(R/=L,N/=L);let D=_*N/A,z=(b*R-C*N)/A,B=-_*R/A,G=E/2,Y=(H,rt,X)=>[H[0]+R*G*rt+D*G*X,H[1]+z*G*X,H[2]+N*G*rt+B*G*X],F=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let H=0;H<4;H++){let rt=(H+1)%4;i(Y(y,...F[H]),Y(S,...F[H]),Y(S,...F[rt]),Y(y,...F[rt]),w)}},o=(y,S)=>Math.max(this.hAt(y,S),this.water),a=y=>{let S=this.bridges.filter(_=>_.n===y&&_.s.length>20);if(!S.length)return null;let E=S.slice().sort((_,b)=>b.s.length-_.s.length)[0],w=E.s,C=[];for(let _=0;_<w.length;_++){let b=w[Math.max(0,_-2)],A=w[Math.min(w.length-1,_+2)],R=Math.hypot(A.x-b.x,A.z-b.z)||1,N=(A.x-b.x)/R,L=(A.z-b.z)/R,D=-L,z=N,B=w[_],G=-E.hw,Y=E.hw,F=B.y;for(let rt of S){if(rt===E)continue;let X=null,Q=1e9;for(let ct=0;ct<rt.s.length-1;ct++){let tt=Ci(B.x,B.z,rt.s[ct].x,rt.s[ct].z,rt.s[ct+1].x,rt.s[ct+1].z,this._c),lt=Math.hypot(B.x-tt.x,B.z-tt.z);lt<Q&&(Q=lt,X={x:tt.x,z:tt.z,y:rt.s[ct].y+(rt.s[ct+1].y-rt.s[ct].y)*tt.t})}if(!X||Q>40||Math.abs((X.x-B.x)*N+(X.z-B.z)*L)>4)continue;let at=(X.x-B.x)*D+(X.z-B.z)*z;G=Math.min(G,at-rt.hw),Y=Math.max(Y,at+rt.hw),F=Math.max(F,X.y)}let H=(G+Y)/2;C.push({x:B.x+D*H,z:B.z+z*H,y:F,tx:N,tz:L,nx:D,nz:z,half:(Y-G)/2,d:B.d})}return C},c=(y,S)=>{let E=0,w=y.length-1;if(S<=y[0].d)return y[0];if(S>=y[w].d)return y[w];for(;w-E>1;){let R=E+w>>1;y[R].d<=S?E=R:w=R}let C=y[E],_=y[w],b=(S-C.d)/(_.d-C.d||1),A={};for(let R of["x","z","y","tx","tz","nx","nz","half"])A[R]=C[R]+(_[R]-C[R])*b;return A.d=S,A},l=(y,S,E,w)=>[y.x+y.nx*S*E,y.y+w,y.z+y.nz*S*E],h=(y,S,E,w,C,_)=>{let b=(R,N,L)=>[y.x+y.tx*R+y.nx*N,L,y.z+y.tz*R+y.nz*N],A=[[-S,-E],[S,-E],[S,E],[-S,E]];for(let R=0;R<4;R++){let N=(R+1)%4;i(b(...A[R],w),b(...A[N],w),b(...A[N],C),b(...A[R],C),_)}i(b(-S,-E,C),b(S,-E,C),b(S,E,C),b(-S,E,C),_)},u=(y,S)=>{let E=-1,w=-1;return y.forEach((C,_)=>{C.y-o(C.x,C.z)>S&&(E<0&&(E=_),w=_)}),E<0?null:y.slice(E,w+1)},f=[.62,.6,.56],d=a("Star\xFD most"),p=d&&u(d,2.5);if(p&&p.length>20){let y=[.4,.5,.45],S=p[0].d,E=p[p.length-1].d-S,w=Math.max(1,Math.round(E/78)),C=E/w,_=Math.max(4,Math.round(C/6.5));for(let b=0;b<w;b++){let A=null;for(let R=0;R<=_;R++){let N=R/_,L=c(d,S+b*C+N*C),D=3.4+6.2*Math.sin(Math.PI*N),z=[];for(let B of[-1,1]){let G=l(L,B,L.half+.45,.15),Y=[G[0],G[1]+D,G[2]];if(z.push([G,Y]),r(G,Y,.32,y),A){let[F,H]=A[B<0?0:1];r(F,G,.6,y),r(H,Y,.62,y),N<=.5?r(F,Y,.28,y):r(H,G,.28,y)}}D>7.6&&R%2===0&&r(z[0][1],z[1][1],.26,y),A=z}if(b>0){let R=c(d,S+b*C);h(R,2.2,R.half+2.2,Math.min(this.hAt(R.x,R.z),this.water)-3,R.y-1,f)}}}let x=a("Most Apollo");if(x){let y=Math.max(...x.map(E=>E.y)),S=x.filter(E=>E.y>y-.8);if(S.length>8){let E=[.88,.89,.9],w=(S[0].d+S[S.length-1].d)/2,C=w-115.5,_=64,b=c(x,C).y,A=c(x,C+231).y;for(let R of[-1,1]){let N=null;for(let L=0;L<=_;L++){let D=L/_,z=c(x,C+D*231),B=b+(A-b)*D-1.5+37.5*4*D*(1-D),G=[z.x+z.nx*R*(z.half+1.6),B,z.z+z.nz*R*(z.half+1.6)];N&&r(N,G,2.3,E),L%2===0&&L>2&&L<_-2&&r(G,l(z,R,z.half+1.6,.4),.22,E),N=G}}for(let R of[C,C+231]){let N=c(x,R);h(N,4,N.half+3.5,Math.min(this.hAt(N.x,N.z),this.water)-3,N.y-1.6,f)}for(let R=x[0].d+30;R<x[x.length-1].d-20;R+=34){if(R>C-20&&R<C+251)continue;let N=c(x,R);N.y-o(N.x,N.z)>3&&h(N,1.4,N.half*.6,this.hAt(N.x,N.z)-2,N.y-1.6,f)}}}let g=a("Pr\xEDstavn\xFD most"),m=g&&u(g,6);if(m&&m.length>20){let y=[.44,.5,.55],S=m[0].d,E=m[m.length-1].d-S,w=Math.round(E/9),C=null;for(let b=0;b<=w;b++){let A=c(g,S+b/w*E),R=Math.min(9.5,A.y-o(A.x,A.z)-1.2),N=[];for(let L of[-1,1]){let D=l(A,L,A.half+.3,-.9),z=l(A,L,A.half+.3,-R);if(N.push([z,D]),b%2===0&&r(z,D,.4,y),C){let[B,G]=C[L<0?0:1];r(G,D,.7,y),r(B,z,.7,y),b%2?r(B,D,.42,y):r(G,z,.42,y)}}r(N[0][0],N[1][0],.4,y),C=N}let _=Math.max(1,Math.round(E/105));for(let b=0;b<=_;b++){let A=c(g,S+b/_*E);h(A,2.6,A.half+1.5,Math.min(this.hAt(A.x,A.z),this.water)-3,A.y-Math.min(9.5,A.y-o(A.x,A.z)-1.2),f)}}if(this._snp=a("Most SNP"),!t.length)return;let M=new Ee;M.setAttribute("position",new ne(t,3)),M.setAttribute("color",new ne(e,3)),M.computeVertexNormals();let v=new Lt(M,this.stoneMat);v.castShadow=v.receiveShadow=!0,v.frustumCulled=!1,this.group.add(v)}snpWalk(t,e,n,i,r,o,a,c){let u=this.hAt(e.x+i*(o+1.5),e.z+r*(o+1.5)),f=this.hAt(n.x+i*(o+1.5),n.z+r*(o+1.5)),d=e.y-3.1,p=n.y-3.1;if(d<Math.max(u,this.water)+.6||p<Math.max(f,this.water)+.6)return;let x=(b,A,R)=>[b.x+i*A,R,b.z+r*A],g=[.56,.58,.6],m=[.42,.41,.4];if(c(x(e,o,e.y),x(n,o,n.y),x(n,o+3,n.y),x(e,o+3,e.y),[.36,.37,.39]),c(x(e,o+3,e.y-.55),x(n,o+3,n.y-.55),x(n,o,n.y-.55),x(e,o,e.y-.55),g.map(b=>b*.7)),c(x(e,o+3,e.y),x(n,o+3,n.y),x(n,o+3,n.y-.55),x(e,o+3,e.y-.55),g),c(x(e,o,d),x(n,o,p),x(n,o+3,p),x(e,o+3,d),m),c(x(e,o+3,d-.3),x(n,o+3,p-.3),x(n,o,p-.3),x(e,o,d-.3),g.map(b=>b*.6)),c(x(e,o+3,d),x(n,o+3,p),x(n,o+3,p-.3),x(e,o+3,d-.3),g),c(x(e,o+3-.05,d),x(n,o+3-.05,p),x(n,o+3-.05,p+1.05),x(e,o+3-.05,d+1.05),[.66,.68,.7]),a%2===0){let b=x(e,o+3-.1,d),A=x(e,o+3-.1,e.y-.55),R=.12,N=n.x-e.x,L=n.z-e.z,D=Math.hypot(N,L)||1,z=N/D*R,B=L/D*R;if(c([b[0]-z,b[1],b[2]-B],[b[0]+z,b[1],b[2]+B],[A[0]+z,A[1],A[2]+B],[A[0]-z,A[1],A[2]-B],g),a%4===0){let G=x(n,o+3-.1,n.y-.55);c([b[0]-z,b[1],b[2]-B],[b[0]+z,b[1],b[2]+B],[G[0]+z,G[1],G[2]+B],[G[0]-z,G[1],G[2]-B],g)}}let M=x(e,o+3*.5,d),v=x(n,o+3*.5,p),y=this._snpWalkBr||(this._snpWalkBr={s:[],hw:3/2,walk:!0,n:"Most SNP \u2013 chodn\xEDk"}),S={ax:M[0],az:M[2],bx:v[0],bz:v[2],ya:d,yb:p,hw:3/2-.05,br:y};this.decks.add(S,Math.min(M[0],v[0])-3,Math.min(M[2],v[2])-3,Math.max(M[0],v[0])+3,Math.max(M[2],v[2])+3);let E=x(e,o+3,0),w=x(n,o+3,0),C=x(e,o,0),_=x(n,o,0);this.colliders.add({ax:E[0],az:E[2],bx:w[0],bz:w[2],y0:Math.min(d,p)-.6,y1:Math.max(d,p)+1.4,kind:"r",tag:null},E[0],E[2],w[0],w[2]),this.colliders.add({ax:C[0],az:C[2],bx:_[0],bz:_[2],y0:Math.min(d,p)-.6,y1:Math.max(d,p)+2.4,kind:"b",tag:null},C[0],C[2],_[0],_[2]),(this.snpWalkEnds||(this.snpWalkEnds=[])).push([M[0],M[2],d,i,r,n.x-e.x,n.z-e.z])}buildPylon(){let t=this.d.pylon.map(F=>F.map(H=>[H[0]/10,H[1]/10]));if(t.length<2)return;let e=t.map(F=>{let H=0,rt=0;for(let X of F)H+=X[0],rt+=X[1];return[H/F.length,rt/F.length]}),n=new Le,i=(e[0][0]+e[1][0])/2,r=(e[0][1]+e[1][1])/2;this.pylonC=[i,r];let o=this._snp,a=0,c=0,l=-1,h=-1;if(o){let F=1e9;o.forEach((X,Q)=>{let at=Math.hypot(X.x-i,X.z-r);at<F&&(F=at,a=Q)}),c=o[a].tx,l=o[a].tz;let H=X=>o[Math.max(0,Math.min(o.length-1,a+Math.round(X/2)))],rt=X=>this.hAt(X.x,X.z)<this.water?1:0;h=rt(H(120))+rt(H(200))>=rt(H(-120))+rt(H(-200))?1:-1}let u=c*h,f=l*h,d=-f,p=u,x=new Zt({color:9343896}),g=this.water+84.6,m=12,M=new O(i-u*m,g,r-f*m),v=[];for(let F of e){let H=Math.sign((F[0]-i)*d+(F[1]-r)*p)||1,rt=this.hAt(F[0],F[1])-2,X=new O(F[0],rt,F[1]),Q=new O(M.x+d*H*2.6,g,M.z+p*H*2.6),at=new Oe(1.75,3.1,X.distanceTo(Q),4,1);at.rotateY(Math.PI/4);let ct=new Lt(at,x);ct.position.copy(X).add(Q).multiplyScalar(.5),ct.quaternion.setFromUnitVectors(new O(0,1,0),Q.clone().sub(X).normalize()),ct.castShadow=!0,n.add(ct),v.push({a:X,b:Q,sd:H}),this.colliders.add({ax:F[0]-2.4,az:F[1]-2.4,bx:F[0]+2.4,bz:F[1]+2.4,y0:-50,y1:rt+40,kind:"b",tag:null},F[0]-3,F[1]-3,F[0]+3,F[1]+3),this.colliders.add({ax:F[0]+2.4,az:F[1]-2.4,bx:F[0]-2.4,bz:F[1]+2.4,y0:-50,y1:rt+40,kind:"b",tag:null},F[0]-3,F[1]-3,F[0]+3,F[1]+3)}{let F=v[0].a.clone().lerp(v[0].b,.93),H=v[1].a.clone().lerp(v[1].b,.93),rt=new Lt(new He(1.6,1.6,F.distanceTo(H)),x);rt.position.copy(F).add(H).multiplyScalar(.5),rt.lookAt(H),n.add(rt)}let y=M.x,S=M.z,E=g+2.6,w=new Zt({color:11844030,side:Ue}),C=new Lt(new Hi([[.5,-4.2],[3.5,-3.9],[9,-2.6],[14.6,-.6],[15.6,0]].map(([F,H])=>new Tt(F,H)),40),w),_=new Lt(new Hi([[15.6,0],[16.1,1.3],[15.7,2.5]].map(([F,H])=>new Tt(F,H)),48),new Zt({color:1844268,emissive:16763274,emissiveIntensity:0})),b=new Lt(new Hi([[15.7,2.5],[14.2,3.2],[9,3.6],[0,3.7]].map(([F,H])=>new Tt(F,H)),40),w);for(let F of[C,_,b])F.position.set(y,E,S),F.castShadow=!0,n.add(F);this.glowMats=[_.material];let A=new Zt({color:8159622}),R=new Lt(new ds(13.6,.08,4,48),A);R.rotation.x=Math.PI/2,R.position.set(y,E+4.75,S),n.add(R);let N=new Lt(new Oe(3.4,3.8,2.4,16),w);N.position.set(y,E+4.9,S),n.add(N);let L=new Lt(new Oe(.12,.22,9,6),A);L.position.set(y,E+10.5,S),n.add(L);let D=new Lt(new ds(16.15,.3,6,56),new Qe({color:16765578}));if(D.rotation.x=Math.PI/2,D.position.set(y,E+2.55,S),this.ufoRing=D,n.add(D),o){let F=new Zt({color:13225425}),H=at=>o[Math.max(0,Math.min(o.length-1,a+Math.round(at*h/2)))],rt=(at,ct,tt)=>{let lt=new Lt(new Oe(tt,tt,at.distanceTo(ct),6),F);lt.position.copy(at).add(ct).multiplyScalar(.5),lt.quaternion.setFromUnitVectors(new O(0,1,0),ct.clone().sub(at).normalize()),lt.castShadow=!0,n.add(lt)};for(let at of v){let ct=tt=>at.a.clone().lerp(at.b,tt);[[.86,238],[.8,168],[.74,98]].forEach(([tt,lt])=>{let st=H(lt);rt(ct(tt),new O(st.x+st.nx*at.sd*(st.half+.3)*Math.sign(st.nx*d+st.nz*p||1),st.y+.3,st.z+st.nz*at.sd*(st.half+.3)*Math.sign(st.nx*d+st.nz*p||1)),.42)}),[[.86,-64],[.8,-50],[.74,-36]].forEach(([tt,lt])=>{let st=H(lt),ft=Math.max(st.y,this.hAt(st.x,st.z))+.3,ot=Math.sign(st.nx*d+st.nz*p||1);rt(ct(tt),new O(st.x+st.nx*at.sd*(st.half+.3)*ot,ft,st.z+st.nz*at.sd*(st.half+.3)*ot),.42)})}let X=H(-58),Q=new Lt(new He(X.half*2+4,4,18),new Zt({color:9341828}));Q.position.set(X.x,Math.min(X.y,this.hAt(X.x,X.z)+1.6)-2.2,X.z),Q.rotation.y=Math.atan2(X.tx,X.tz),n.add(Q)}let z=this.snpWalkEnds||[],B=[],G=[];for(let F of z){let H=G[G.length-1];H&&Math.hypot(F[0]-H[0],F[1]-H[1])>4.5&&(B.push(G),G=[]),G.push(F)}G.length&&B.push(G);let Y=new Zt({color:7039592});for(let F of B)if(!(F.length<3))for(let[H,rt]of[[F[0],-1],[F[F.length-1],1]]){let X=Math.hypot(H[5],H[6])||1,Q=H[5]/X*rt,at=H[6]/X*rt,ct=H[0]+(rt>0?H[5]:0),tt=H[1]+(rt>0?H[6]:0),lt=this.hAt(ct,tt),st=H[2]-lt;if(st<.25)continue;let ft=Math.max(4,st/.16),ot=ct+Q*ft,U=tt+at*ft,vt=this.hAt(ot,U)+.02,mt={ax:ct,az:tt,bx:ot,bz:U,ya:H[2],yb:vt,hw:1.45,br:this._snpWalkBr};this.decks.add(mt,Math.min(ct,ot)-3,Math.min(tt,U)-3,Math.max(ct,ot)+3,Math.max(tt,U)+3);let St=new Lt(new He(2.9,.3,Math.hypot(ft,H[2]-vt)),Y);St.position.set((ct+ot)/2,(H[2]+vt)/2-.15,(tt+U)/2),St.rotation.order="YXZ",St.rotation.y=Math.atan2(Q,at),St.rotation.x=Math.atan2(H[2]-vt,ft),St.receiveShadow=!0,n.add(St)}n.traverse(F=>{F.frustumCulled=!1}),this.group.add(n),this.ufoPos=new O(y,E,S),this.pylonTop=M}buildRoadGraph(){let t=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),e=new Map,n=l=>l[0]*2e5+l[1];for(let l of t)l.p.forEach((h,u)=>{let f=n(h);e.set(f,(e.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of t){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||e.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(m=>[m[0]/10,m[1]/10]),d=r(l.p[h]),p=r(l.p[u]),x=(m,M,v)=>{let y=[0],S=0;for(let w=1;w<v.length;w++)S+=Math.hypot(v[w][0]-v[w-1][0],v[w][1]-v[w-1][1]),y.push(S);let E={a:m,b:M,p:v,cum:y,L:S,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(E),m.out.push(E),M.inn.push(E),E},g=x(d,p,f);if(!l.o){let m=x(p,d,f.slice().reverse());g.rev=m,m.rev=g}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let p of c){if(Math.abs(p.x-h)>18||Math.abs(p.z-u)>18)continue;let x=Math.hypot(p.x-h,p.z-u);x<d&&p.out.length+p.inn.length>=3&&(d=x,f=p)}f&&!f.sig&&(f.sig={phase:xn(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(t,e,n=40,i=null){let r=this.edgeGrid.query(t,e,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=Ci(t,e,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(t-h.x,e-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(t,e,n){if(!t.sig)return!0;let i=(n+t.sig.phase)%30,r=Math.abs(Math.cos(e))>Math.abs(Math.sin(e));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let t=[];for(let c of this.d.foot)t.push(c.p);for(let c of this.d.cross)t.push(c);for(let c of this.d.steps)t.push(c);for(let c of this.d.road)c.c===5&&!c.b&&t.push(c.p);let e=c=>c[0]*2e5+c[1],n=new Map;for(let c of t)c.forEach((l,h)=>n.set(e(l),(n.get(e(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=e(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let x=1;x<c.length;x++)f+=Math.hypot(c[x][0]-c[x-1][0],c[x][1]-c[x-1][1]),d.push(f);if(f<(u?8:.5))return;let p={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(p),h.e.push(p),o.push(p)};for(let c of t){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(e(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let p=c.p[Math.max(0,d-1)],x=c.p[Math.min(c.p.length-1,d+1)],g=x[0]-p[0],m=x[1]-p[1],M=Math.hypot(g,m)||1;return[f[0]/10-m/M*h,f[1]/10+g/M*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(t,e,n){let i=t.cum;e=pe(e,0,t.L);let r=0;for(;r<i.length-2&&i[r+1]<e;)r++;let o=i[r+1]-i[r]||1,a=(e-i[r])/o,c=t.p[r],l=t.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}breakProp(t,e,n){t.dead=!0;let i=new re().makeScale(0,0,0);for(let c of t.im)c.setMatrixAt(t.idx,i),c.instanceMatrix.needsUpdate=!0;let r=new Le;if(t.kind==="t"){let c=new kt(5212732);t.im[1].instanceColor&&t.im[1].getColorAt(t.idx,c);let l=this.crownMat.clone();l.color=c,l.onBeforeCompile=this.crownMat.onBeforeCompile,r.add(new Lt(this.trunkGeo,this.trunkMat),new Lt(this.crownGeo,l))}else if(t.sign){let c=new Le;c.add(new Lt(this.signGeo[0],this.signMat[0]),new Lt(this.signGeo[1],new Zt({color:t.sign[1]})),new Lt(this.signGeo[2],new Zt({color:t.sign[2]}))),c.rotation.y=t.sign[0],r.add(c)}else r.add(new Lt(this.postGeo,this.postMat),new Lt(this.headGeo,new Qe({color:3815994})));r.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),r.position.set(t.px,t.py,t.pz),r.scale.setScalar(t.sc||1);let o=Math.hypot(e,n)||1,a={obj:r,ang:0,w:1.2+o*.12,axis:new O(n/o,0,-e/o),spin:(Math.random()-.5)*.6,t:0,tile:t.tag,max:t.kind==="t"?1.5:1.52};this.group.add(r),(this.debris||(this.debris=[])).push(a),t.kind==="p"&&t.tag&&!t.sign&&(t.tag.lampPts=t.tag.lampPts.filter(c=>Math.hypot(c[0]-t.px,c[1]-t.pz)>.5),this.lampDirty=!0)}tickDebris(t){let e=this.debris;if(!(!e||!e.length))for(let n=e.length-1;n>=0;n--){let i=e[n];i.t+=t,i.ang<i.max&&(i.w+=5.5*t*(.3+Math.sin(i.ang)),i.ang=Math.min(i.max,i.ang+i.w*t),i.obj.quaternion.setFromAxisAngle(i.axis,i.ang),i.obj.rotateY(i.spin*i.ang)),(i.t>40||i.tile&&i.tile.state!==4)&&(this.group.remove(i.obj),e.splice(n,1))}}collide(t,e,n,i,r,o=0,a=0,c=0){r.broke=null;let l=this.colliders.query(t,e,i+.5,this._tmp),h=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let u=0;u<l.length;u++){let f=l[u];if(f.dead||n>f.y1||n+1.5<f.y0)continue;let d=Ci(t,e,f.ax,f.az,f.bx,f.bz,this._c),p=t-d.x,x=e-d.z,g=Math.hypot(p,x);if(g<i&&f.im&&o>(f.kind==="t"?7.5:4.5)){this.breakProp(f,a,c),r.broke=f.kind;continue}if(g<i){g<1e-4&&(p=-(f.bz-f.az),x=f.bx-f.ax);let m=Math.hypot(p,x)||1,M=i-g;t+=p/m*M,e+=x/m*M,r.nx+=p/m,r.nz+=x/m,r.d=Math.max(r.d,M),r.kind=f.kind,h=!0}}if(r.x=t,r.z=e,h){let u=Math.hypot(r.nx,r.nz)||1;r.nx/=u,r.nz/=u}return h}rayHit(t,e,n,i,r){let o=(t+n)/2,a=(e+i)/2,c=Math.hypot(n-t,i-e)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=V1(t,e,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function V1(s,t,e,n,i,r,o,a){let c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-t)*h)/f,p=((i-s)*l-(r-t)*c)/f;return d>=0&&d<=1&&p>=0&&p<=1?d:null}var W1=ls,Ld=ci,ah=ei,dr=en,oo=Ia,ao=oa,ja=Tt,X1=Pe,q1=Ee,Id=ne,Y1=Lt,Z1=ki,K1=nr,j1=Ei,J1=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,co="precision highp float; in vec3 position; in vec2 uv;"+J1,Nd=class{constructor(s){this.r=s;let t=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"));this.type=t?W1:Ld,this.hdr=!!t,this.exposure={value:1},this.samples=4,this.sceneRT=new ah(4,4,{type:this.type,depthBuffer:!0,minFilter:dr,magFilter:dr,samples:this.samples}),this.ldrRT=new ah(4,4,{type:Ld,depthBuffer:!1,minFilter:dr,magFilter:dr}),this.bloom=[];for(let n=0;n<5;n++)this.bloom.push(new ah(4,4,{type:this.type,depthBuffer:!1,minFilter:dr,magFilter:dr}));this.brightMat=new oo({glslVersion:ao,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new ja(1,1)}},vertexShader:co,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new oo({glslVersion:ao,uniforms:{tSrc:{value:null},uTexel:{value:new ja(1,1)}},vertexShader:co,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new oo({glslVersion:ao,uniforms:{tSrc:{value:null},uTexel:{value:new ja(1,1)}},vertexShader:co,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:j1,transparent:!0}),this.gradeMat=new oo({glslVersion:ao,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:Ge.uNight},vertexShader:co,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
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
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new oo({glslVersion:ao,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new ja(1,1)},uFxaa:{value:1},uFlash:{value:new X1(0,0,0,0)}},vertexShader:co,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
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
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let e=new q1;e.setAttribute("position",new Id([-1,-1,0,3,-1,0,-1,3,0],3)),e.setAttribute("uv",new Id([0,0,2,0,0,2],2)),this.quad=new Y1(e,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new Z1,this.qscene.add(this.quad),this.qcam=new K1}setSize(s,t,e=1,n=4){let i=Math.max(16,Math.round(s*e)),r=Math.max(16,Math.round(t*e));n!==this.samples&&(this.samples=n,this.sceneRT.dispose(),this.sceneRT.samples=n),this.sceneRT.setSize(i,r),this.ldrRT.setSize(i,r);let o=i>>1,a=r>>1;for(let c of this.bloom)c.setSize(Math.max(2,o),Math.max(2,a)),o>>=1,a>>=1;return this.finalMat.uniforms.uTexel.value.set(1/i,1/r),this.finalMat.uniforms.uFxaa.value=n>0?0:1,this.w=i,this.h=r,this.cw=s,this.ch=t,{aspect:s/t}}_pass(s,t){this.quad.material=s,this.r.setRenderTarget(t),this.r.render(this.qscene,this.qcam)}render(s,t){let e=this.r,n=this.bloom;e.setRenderTarget(this.sceneRT),e.render(s,t),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,n[0]);for(let i=1;i<n.length;i++)this.downMat.uniforms.tSrc.value=n[i-1].texture,this.downMat.uniforms.uTexel.value.set(1/n[i-1].width,1/n[i-1].height),this._pass(this.downMat,n[i]);e.autoClear=!1;for(let i=n.length-1;i>0;i--)this.upMat.uniforms.tSrc.value=n[i].texture,this.upMat.uniforms.uTexel.value.set(.5/n[i].width,.5/n[i].height),this._pass(this.upMat,n[i-1]);e.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),e.setRenderTarget(null),e.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,e.render(this.qscene,this.qcam)}};var pt={Mesh:Lt,Group:Le,Scene:ki,Object3D:Xe,InstancedMesh:rn,Vec2:Tt,Vec3:O,Vec4:Pe,Mat4:re,Quat:Ke,Color:kt,Box3:nn,Geo:Ee,F32:ne,Attr:Ie,Box:He,Cyl:Oe,Sphere:Zn,Plane:ni,Torus:ds,Lathe:Hi,Ico:Gi,Lambert:Zt,Basic:Qe,Standard:Vi,Shader:Tn,CanvasTex:ii,DataTex:Gr,Linear:en,Nearest:tn,MipLinear:qn,Additive:Ei,DoubleSide:Ue,BackSide:pn,SRGB:Ce};function Dd(s){let{Fe:t,Wt:e,Tt:n,Pn:i,Ln:r,we:o,q:a,Ve:c,vt:l,Kn:h,an:u,Xs:f,Ye:d,Ge:p,Xn:x,ct:g,en:m,fn:M,Zs:v,mh:y,Zn:S,Yn:E,Ks:w,OX:C,OZ:_}=s;var b=(()=>{let A=Math.PI,R=!1,N={};function L(V,et,W){let ht=document.createElement("canvas");ht.width=V,ht.height=et,W(ht.getContext("2d"),V,et);let k=new pt.CanvasTex(ht);return k.colorSpace=pt.SRGB,k.anisotropy=4,k}function D(V,et=1){return V.onBeforeCompile=W=>f(W,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${et.toFixed(2)}; }`),V}function z(V,et){if(!V||V._gl||V.isMeshBasicMaterial)return V;V._gl=1;let W=V.name||"",ht=et!==void 0?et:/window|glass/i.test(W)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(W)?0:/head|tail/i.test(W)?.06:.07;return V.onBeforeCompile=k=>f(k,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${ht.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(ht*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),V}function B(V){let et=[],W=[],ht=[],k=new pt.Color;for(let[dt,Mt,Pt,Xt,It,te,se]of V){let ge=new pt.Box(dt,Mt,Pt).toNonIndexed();ge.translate(Xt,It,te);let he=ge.attributes.position.array,Te=ge.attributes.normal.array;k.set(se);for(let jt=0;jt<he.length;jt+=3)et.push(he[jt],he[jt+1],he[jt+2]),W.push(Te[jt],Te[jt+1],Te[jt+2]),ht.push(k.r,k.g,k.b)}let K=new pt.Geo;return K.setAttribute("position",new pt.F32(et,3)),K.setAttribute("normal",new pt.F32(W,3)),K.setAttribute("color",new pt.F32(ht,3)),K}let G=null;function Y(){if(!G){G=[];let V="ABCDEFGHJKLMNPRSTVXYZ",et=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let W=0;W<12;W++){let ht=et[W]+" "+(100+Math.floor(M(W*7+3)*900))+V[Math.floor(M(W*13+1)*V.length)]+V[Math.floor(M(W*17+5)*V.length)],k=L(256,64,(K,dt,Mt)=>{K.fillStyle="#f5f5f0",K.fillRect(0,0,dt,Mt),K.fillStyle="#1c3f9e",K.fillRect(0,0,30,Mt),K.fillStyle="#fff",K.font="700 15px sans-serif",K.textAlign="center",K.fillText("SK",15,54),K.strokeStyle="#111",K.lineWidth=4,K.strokeRect(2,2,dt-4,Mt-4),K.fillStyle="#111",K.font='700 42px "JetBrains Mono", monospace',K.textBaseline="middle",K.fillText(ht,(dt+30)/2,Mt/2+3)});G.push(new pt.Lambert({map:k,name:"Plate"}))}}return m(G)}let F={};function H(V){if(F[V])return F[V];let et=L(512,96,(W,ht,k)=>{if(V==="pz"){W.fillStyle="#f2f2f0",W.fillRect(0,0,ht,k);let K=12,dt=ht/K;for(let Mt=0;Mt<2;Mt++)for(let Pt=0;Pt<K;Pt++)W.fillStyle=(Pt+Mt)%2?"#0b3fa8":"#d9ea10",W.fillRect(Pt*dt,8+Mt*40,dt+1,40);W.fillStyle="#0b3fa8",W.fillRect(ht*.31,4,ht*.38,k-8),W.fillStyle="#fff",W.font="900 54px Anton, Impact, sans-serif",W.textAlign="center",W.textBaseline="middle",W.fillText("POL\xCDCIA",ht/2,k/2+4)}else if(V==="pz25")W.fillStyle="#101216",W.fillRect(0,10,ht,k-26),W.fillStyle="#0b4fc4",W.beginPath(),W.moveTo(0,10),W.lineTo(150,10),W.lineTo(96,k-16),W.lineTo(0,k-16),W.fill(),W.beginPath(),W.moveTo(ht,10),W.lineTo(ht-150,10),W.lineTo(ht-96,k-16),W.lineTo(ht,k-16),W.fill(),W.fillStyle="#e0102a",W.fillRect(0,k-14,ht,6),W.fillStyle="#f2f2f0",W.fillRect(0,0,ht,8),W.fillRect(0,k-8,ht,8),W.fillStyle="#fff",W.font="900 50px Anton, Impact, sans-serif",W.textAlign="center",W.textBaseline="middle",W.fillText("POL\xCDCIA",ht/2,k/2-2);else{W.fillStyle="#f4f4f2",W.fillRect(0,0,ht,k);let K=16,dt=ht/K;for(let Mt=0;Mt<K;Mt++)W.fillStyle=Mt%2?"#0d3a8c":"#f4f4f2",W.fillRect(Mt*dt,k-30,dt+1,22);W.fillStyle="#0d3a8c",W.fillRect(0,6,ht,5),W.font="900 40px Anton, Impact, sans-serif",W.textAlign="center",W.textBaseline="middle",W.fillText("MESTSK\xC1 POL\xCDCIA",ht/2,38)}});return F[V]=D(new pt.Lambert({map:et}))}function rt(V,et){let W=V.wid,ht=V.len,k=(E.cars[V.kind]||{}).h||1.5,K=H(et),dt=new pt.Plane(ht*.86,.36);for(let se of[1,-1]){let ge=new pt.Mesh(dt,K);ge.rotation.y=se*A/2,ge.position.set(se*(W/2+.014),k>1.6?.86:.74,-.05),V.obj.add(ge)}let Mt=new pt.Group,Pt=new pt.Mesh(new pt.Box(W*.62,.05,.3),new pt.Lambert({color:1382170})),Xt=new pt.Box(W*.27,.12,.26),It=new pt.Mesh(Xt,new pt.Basic({color:16719904})),te=new pt.Mesh(Xt,new pt.Basic({color:2113791}));It.position.set(W*.16,.085,0),te.position.set(-W*.16,.085,0),Mt.add(Pt,It,te),Mt.position.set(0,k+.02,-.15),V.obj.add(Mt),V.bar={red:It,blue:te,idle:et==="mp"},V.livery=et}function X(V){let et=V.bar;if(et.idle&&!V.driver){et.red.material.color.setRGB(.25,.3,.9),et.blue.material.color.setRGB(.25,.3,.9);return}let W=Math.sin(a.t*14)>0;et.red.material.color.setRGB(W?6:.3,.1,.1),et.blue.material.color.setRGB(.1,.2,W?.3:6)}let Q=null;function at(V){if(!V||g()>.09)return;Q||(Q=new pt.Basic({map:L(128,48,(ht,k,K)=>{ht.fillStyle="#ffd21a",ht.fillRect(0,0,k,K),ht.fillStyle="#111",ht.font="900 38px Anton, Impact, sans-serif",ht.textAlign="center",ht.textBaseline="middle",ht.fillText("TAXI",k/2,K/2+3)})}));let et=(E.cars[V.kind]||{}).h||1.5,W=new pt.Mesh(new pt.Box(.46,.16,.16),Q);W.position.set(0,et+.07,.1),V.obj.add(W),V.taxi=!0}let ct=6.3,tt=.5,lt=5,st=ct+tt,ft=lt*ct+(lt-1)*tt,ot={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},U=[["1","HLAVN\xC1 STANICA"],["3","RA\u010CA"],["4","D\xDABRAVKA"],["4","ZLAT\xC9 PIESKY"],["9","KARLOVA VES"],["9","RU\u017DINOV"],["1","PETR\u017DALKA"]];function vt(){let V="#cf1420",et="#17181b",W="#0b0d11",ht="#8f9398",k=ct/2,K=[[2.34,.44,ct-.1,0,.34,0,et],[2.48,.74,ct,0,.93,0,V],[2.42,1.2,ct,0,1.9,0,W],[2.48,.4,ct,0,2.7,0,V],[2.24,.14,ct,0,2.97,0,ht],[1.5,.3,ct*.5,0,3.18,.3,"#b4b8bc"]],dt=[2.06,2.5,tt+.14,0,1.6,-k-tt/2,"#131315"],Mt=Nt=>[[2.2,.44,1,0,.34,Nt*(k+.45),et],[2.36,.74,1,0,.93,Nt*(k+.48),V],[2.3,1.2,.86,0,1.9,Nt*(k+.4),W],[2.36,.4,.74,0,2.7,Nt*(k+.36),V],[2.1,.14,.6,0,2.97,Nt*(k+.28),ht],[.5,.06,.1,0,1.2,Nt*(k+.99),"#f2f2f2"]],Pt=[[1.5,.3,ct*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],Xt={front:B([...K,dt,...Mt(1)]),mid:B([...K,dt]),midP:B([...K,dt,...Pt]),rear:B([...K,...Mt(-1)])},It=ct-.3,te=[],se=[],ge=[];for(let Nt of[1,-1]){let T=Nt*1.246,q=-Nt*It/2,j=Nt*It/2,it=[[T,1.36,j,0,0],[T,1.36,q,1,0],[T,2.44,q,1,1],[T,1.36,j,0,0],[T,2.44,q,1,1],[T,2.44,j,0,1]];for(let $ of it)te.push($[0],$[1],$[2]),se.push($[3],$[4]),ge.push(Nt,0,0)}Xt.win=new pt.Geo,Xt.win.setAttribute("position",new pt.F32(te,3)),Xt.win.setAttribute("uv",new pt.F32(se,2)),Xt.win.setAttribute("normal",new pt.F32(ge,3));let he=Nt=>(T,q,j)=>{T.fillStyle=Nt?"#000":"#0c0f13",T.fillRect(0,0,q,j);let it=4,$=q/it;for(let At=0;At<it;At++)if(T.fillStyle=Nt?At===1?"#fff0c8":"#ffe0a0":"#1b2630",T.fillRect(At*$+5,6,$-10,j-12),Nt){T.fillStyle="rgba(40,25,10,0.75)";for(let Bt=0;Bt<2;Bt++){let Vt=At*$+14+M(At*9+Bt*5)*($-30);T.beginPath(),T.arc(Vt,j*.45,6,0,7),T.fill(),T.fillRect(Vt-8,j*.45+5,16,j)}}},Te=z(new pt.Lambert({vertexColors:!0}),.07),jt=new pt.Lambert({map:L(256,64,he(!1)),emissiveMap:L(256,64,he(!0)),emissive:new pt.Color(0,0,0)});ot.geo=Xt,ot.mBody=Te,ot.mWin=jt,ot.mHead=new pt.Basic({color:16773836}),ot.mTail=new pt.Basic({color:16718352}),ot.gLamp=new pt.Box(.3,.14,.06),ot.gDisp=new pt.Plane(1.7,.3),ot.disp={}}function mt(V){let et=V[0]+V[1];return ot.disp[et]||(ot.disp[et]=new pt.Basic({map:L(256,48,(W,ht,k)=>{W.fillStyle="#050505",W.fillRect(0,0,ht,k),W.fillStyle="#ffb020",W.font='700 30px "JetBrains Mono", monospace',W.textBaseline="middle",W.textAlign="left",W.fillText(V[0],8,k/2+2),W.font='700 22px "JetBrains Mono", monospace',W.fillText(V[1],44,k/2+2)})})),ot.disp[et]}function St(){let V=k=>k[0]*1e5+k[1],et=new Map;for(let k of t.d.tram){if(k.p.length<2)continue;let K=k.p.map(Pt=>[Pt[0]/10,Pt[1]/10]),dt=0;for(let Pt=1;Pt<K.length;Pt++)dt+=Math.hypot(K[Pt][0]-K[Pt-1][0],K[Pt][1]-K[Pt-1][1]);let Mt={p:K,L:dt,k0:V(k.p[0]),k1:V(k.p[k.p.length-1]),next:[],dist:1e9,nin:0};ot.edges.push(Mt),(et.get(Mt.k0)||et.set(Mt.k0,[]).get(Mt.k0)).push(Mt)}for(let k of ot.edges){k.next=et.get(k.k1)||[];for(let K of k.next)K.nin++}for(let k of ot.edges)k.next.length||(k.dist=k.L);for(let k=0;k<120;k++)for(let K of ot.edges)for(let dt of K.next)dt.dist+K.L<K.dist&&(K.dist=dt.dist+K.L);let W=t.W,ht=t.H;ot.sources=ot.edges.filter(k=>{if(k.nin||k.dist>1e8)return!1;let[K,dt]=k.p[0];return!0}),ot.max=h?6:10,vt(),Wt()}function nt(V){let et=[],W=V,ht=0,k=new Set;for(;W&&ht++<110;){for(let Pt=et.length?1:0;Pt<W.p.length;Pt++)et.push(W.p[Pt]);k.add(W);let dt=W.next.filter(Pt=>Pt.dist<1e8);if(!dt.length)break;let Mt=dt.filter(Pt=>!k.has(Pt));W=ht>50||!Mt.length?dt.slice().sort((Pt,Xt)=>Pt.dist-Xt.dist)[0]:m(Mt)}let K=[0];for(let dt=1;dt<et.length;dt++)K.push(K[dt-1]+Math.hypot(et[dt][0]-et[dt-1][0],et[dt][1]-et[dt-1][1]));return{p:et,cum:K,L:K[K.length-1]}}function _t(V,et,W){let ht=V.cum,k=0,K=ht.length-2;for(et=d(et,0,V.L);k<K;){let It=k+K+1>>1;ht[It]<=et?k=It:K=It-1}let dt=ht[k+1]-ht[k]||1,Mt=(et-ht[k])/dt,Pt=V.p[k],Xt=V.p[k+1];return W.x=Pt[0]+(Xt[0]-Pt[0])*Mt,W.z=Pt[1]+(Xt[1]-Pt[1])*Mt,W.dx=(Xt[0]-Pt[0])/dt,W.dz=(Xt[1]-Pt[1])/dt,W}function yt(V){if(!ot.sources.length)return null;let et=m(ot.sources);if(ot.list.some(K=>K.src===et&&K.s<ft+30))return null;let W=nt(et);if(W.L<150)return null;let ht=m(U),k={src:et,r:W,s:V||.5,v:V?9:5,secs:[],wait:0,bell:0,obj:new pt.Group,hx:0,hz:0};for(let K=0;K<lt;K++){let dt=new pt.Group,Mt=new pt.Mesh(K===0?ot.geo.front:K===lt-1?ot.geo.rear:K===1?ot.geo.midP:ot.geo.mid,ot.mBody),Pt=new pt.Mesh(ot.geo.win,ot.mWin);if(Mt.castShadow=!0,Mt.receiveShadow=!0,dt.add(Mt,Pt),K===0){for(let It of[-.82,.82]){let te=new pt.Mesh(ot.gLamp,ot.mHead);te.position.set(It,.86,ct/2+.985),dt.add(te)}let Xt=new pt.Mesh(ot.gDisp,mt(ht));Xt.position.set(0,2.7,ct/2+.735),dt.add(Xt)}if(K===lt-1)for(let Xt of[-.82,.82]){let It=new pt.Mesh(ot.gLamp,ot.mTail);It.position.set(Xt,.86,-ct/2-.985),dt.add(It)}dt.visible=!1,k.obj.add(dt),k.secs.push({g:dt,x:0,y:0,z:0,h:0,on:!1,len:ct})}return e.add(k.obj),ot.list.push(k),k}let I={},P={},J={},gt={};function bt(V){let et=t.W,W=t.H;for(let ht=0;ht<lt;ht++){let k=V.s-ht*st-ct/2,K=V.secs[ht];if(k<0||k>V.r.L){K.on=!1,K.g.visible=!1;continue}_t(V.r,k+2.3,I),_t(V.r,k-2.3,P);let dt=(I.x+P.x)/2,Mt=(I.z+P.z)/2;if(dt<1||Mt<1||dt>et-1||Mt>W-1){K.on=!1,K.g.visible=!1;continue}let Pt=K.on?K.y+1.6:1e9,Xt=t.surfaceY(I.x,I.z,Pt),It=t.surfaceY(P.x,P.z,Pt);K.x=dt,K.z=Mt,K.y=(Xt+It)/2,K.h=Math.atan2(I.x-P.x,I.z-P.z),K.on=!0,K.g.visible=!0,K.g.position.set(dt,K.y+.03,Mt),K.g.rotation.set(0,0,0),K.g.rotateY(K.h),K.g.rotateX(Math.atan2(It-Xt,4.6))}}function wt(){l._tone(2100,1900,.22,.1,"triangle"),l._tone(2100,1900,.3,.1,"triangle",.2)}function qt(V,et){ot.t-=V,ot.t<=0&&(ot.t=5+g()*7,ot.list.length<ot.max&&yt());let W=!s.pc()&&!et&&a.mode==="play";ot.proxies.length=0;for(let ht=ot.list.length-1;ht>=0;ht--){let k=ot.list[ht];_t(k.r,k.s,J);let K=J.x,dt=J.z,Mt=J.dx,Pt=J.dz;_t(k.r,k.s+16,gt);let Xt=Math.abs(x(Math.atan2(gt.dx,gt.dz)-Math.atan2(Mt,Pt)));_t(k.r,k.s-ft*.6,gt),Xt=Math.max(Xt,Math.abs(x(Math.atan2(gt.dx,gt.dz)-Math.atan2(Mt,Pt)))*.8);let It=p(11.5,4.2,d(Xt/.6,0,1)),te=9+k.v*k.v/4.6,se=99,ge=!0,he=!1,Te=(jt,Nt,T,q,j)=>{let it=jt-K,$=Nt-dt,At=it*Mt+$*Pt;At<.5||At>te||Math.abs(it*Pt-$*Mt)>1.3+T||At<se&&(se=At,ge=q,he=j)};if(Math.abs(K-(s.pc()?s.pc().x:o.x))<160&&Math.abs(dt-(s.pc()?s.pc().z:o.z))<160){for(let jt of n)Te(jt.x,jt.z,jt.r,!0,jt===s.pc());for(let jt of i)jt.state!=="down"&&Te(jt.x,jt.z,.1,!0,!1);W&&Te(o.x,o.z,.3,!0,!0)}if(k.ghost>0)k.ghost-=V;else for(let jt of ot.list)if(!(jt===k||Math.abs(jt.hx-K)>75||Math.abs(jt.hz-dt)>75))for(let Nt=3;Nt<te+2&&!(Nt>se);Nt+=2.5){_t(k.r,k.s+Nt,gt);let T=!1;for(let q of jt.secs){if(!q.on||Math.abs(q.x-gt.x)>5||Math.abs(q.z-gt.z)>5)continue;let j=Math.sin(q.h)*2.3,it=Math.cos(q.h)*2.3;for(let $=-1;$<=1;$++)if(Math.hypot(q.x+j*$-gt.x,q.z+it*$-gt.z)<1.5){T=!0;break}if(T)break}if(T){se=Nt,ge=!1,he=!1;break}}if(se<99?(It=Math.min(It,Math.sqrt(Math.max(0,2*2.5*(se-4.5)))),k.v<.6&&(k.wait+=V),ge&&k.wait>5&&(It=Math.max(It,1.8)),!ge&&k.wait>14+k.s%7&&(k.ghost=9,k.wait=0),he&&k.bell<=0&&se<22&&(wt(),k.bell=2.6)):k.wait=Math.max(0,k.wait-V*2),k.bell>0&&(k.bell-=V),k.v=Math.max(0,k.v+d(It-k.v,-3.4*V,1.15*V)),k.s+=k.v*V,k.s-ft-6>k.r.L){e.remove(k.obj),ot.list.splice(ht,1);continue}k.hx=K,k.hz=dt,k.dx=Mt,k.dz=Pt,bt(k);for(let jt of k.secs)jt.on&&ot.proxies.push(jt)}et||Ft(W)}function Ft(V){let et=[-2.3,0,2.3];for(let W of ot.list){for(let k of n){if(Math.abs(k.x-W.hx)>46||Math.abs(k.z-W.hz)>46)continue;let K=Math.sin(k.h),dt=Math.cos(k.h);for(let Mt of W.secs){if(!Mt.on||Math.abs(k.y-Mt.y)>3||Math.abs(k.x-Mt.x)>9||Math.abs(k.z-Mt.z)>9)continue;let Pt=Math.sin(Mt.h),Xt=Math.cos(Mt.h);for(let It of et)for(let te of[k.off,-k.off]){let se=k.x+K*te-(Mt.x+Pt*It),ge=k.z+dt*te-(Mt.z+Xt*It),he=Math.hypot(se,ge),Te=1.3+k.r;if(he>=Te||he<1e-4)continue;se/=he,ge/=he,k.x+=se*(Te-he),k.z+=ge*(Te-he);let jt=(k.vx-Pt*W.v)*se+(k.vz-Xt*W.v)*ge;jt<0&&(k.vx-=1.35*jt*se,k.vz-=1.35*jt*ge,k.w+=(te>0?1:-1)*jt*.04*(se*dt-ge*K>0?1:-1),-jt>3.5&&(k.dmg+=-jt*3,k===s.pc()&&(l.crash(-jt),y(-jt*.03),W.hitPl||(W.hitPl=1,v(1,"zr\xE1\u017Eka s elektri\u010Dkou"))))),k.parked&&(k.parked=!1),k.hitT=3}}}let ht=V?[o,...i]:i;for(let k of ht){let K=k===o,dt=K?o.x:k.x,Mt=K?o.z:k.z;if(!(Math.abs(dt-W.hx)>46||Math.abs(Mt-W.hz)>46))for(let Pt of W.secs){if(!Pt.on||Math.abs(dt-Pt.x)>6||Math.abs(Mt-Pt.z)>6)continue;let Xt=Math.sin(Pt.h),It=Math.cos(Pt.h),te=dt-Pt.x,se=Mt-Pt.z,ge=d(te*Xt+se*It,-ct/2-.6,ct/2+.6),he=Pt.x+Xt*ge,Te=Pt.z+It*ge,jt=dt-he,Nt=Mt-Te,T=Math.hypot(jt,Nt),q=1.55;T>=q||(T<.001&&(jt=It,Nt=-Xt,T=1),jt/=T,Nt/=T,K?(o.x=he+jt*q,o.z=Te+Nt*q,W.v>2.5&&S.hurtT<=0&&(a.hp-=W.v*4.5,S.hurtT=1,l.crash(W.v*.6),c.flash("#ff2a2a",.4))):k.state!=="down"&&(W.v>2.2?(k.knock(Xt*W.v*.6+jt*2,It*W.v*.6+Nt*2,W.v>7),l.thud()):(k.p.x=he+jt*q,k.p.z=Te+Nt*q)))}}}}function Wt(){let V=ot.edges.filter(he=>Math.hypot(he.p[0][0]-(554+C),he.p[0][1]-(713+_))<25&&!he.nin);if(!V.length)return;let et=V[0],W=et.p[0],ht=et.p[1],k=Math.hypot(ht[0]-W[0],ht[1]-W[1])||1,K=(ht[0]-W[0])/k,dt=(ht[1]-W[1])/k,Mt=W[0]-dt*1.8-K*1.5,Pt=W[1]+K*1.8-dt*1.5,Xt=t.hAt(W[0]+K*6,W[1]+dt*6),It=new pt.Group,te=D(new pt.Lambert({vertexColors:!0})),se=new pt.Mesh(B([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),te),ge=new pt.Mesh(new pt.Plane(9.9,6.8),new pt.Basic({color:197379}));ge.position.set(0,3.4,-.95),se.castShadow=se.receiveShadow=!0,It.add(se,ge),It.position.set(Mt,Xt-.4,Pt),It.rotation.y=Math.atan2(K,dt),t.group.add(It)}let xt={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function ue(){let V=t.d.zone;if(!V)return;let et=atob(V.b),W=new Uint8Array(et.length);for(let ht=0;ht<et.length;ht++)W[ht]=et.charCodeAt(ht);xt.bits=W,xt.N=V.n,xt.x0=V.x,xt.z0=V.z,xt.s=V.s}function Et(V,et){let W=xt.N;if(!W)return!1;let ht=Math.floor((V-xt.x0)/xt.s),k=Math.floor((et-xt.z0)/xt.s);if(ht<0||k<0||ht>=W||k>=W)return!1;let K=k*W+ht;return!!(xt.bits[K>>3]>>7-(K&7)&1)}function Re(){ue();let V=T=>T[0]*1e5+T[1],et=new Set;for(let T of t.d.road)if(T.c>=1&&T.c<=4&&!T.nv)for(let q of T.p)et.add(V(q));let W=[];for(let T of t.d.road)if(!(T.c!==5||T.p.length<2))for(let q of[0,1]){let j=T.p[q?T.p.length-1:0],it=T.p[q?T.p.length-2:1];if(!et.has(V(j)))continue;let $=j[0]/10,At=j[1]/10,Bt=it[0]/10-$,Vt=it[1]/10-At,Jt=Math.hypot(Bt,Vt);if(Jt<3)continue;Bt/=Jt,Vt/=Jt;let ee=3;for(;ee<Math.min(Jt,16)&&!Et($+Bt*ee,At+Vt*ee);)ee+=1.5;if(!Et($+Bt*ee,At+Vt*ee))continue;let Rt=$+Bt*(ee+1.2),Gt=At+Vt*(ee+1.2);W.some($t=>Math.hypot($t.x-Rt,$t.z-Gt)<9)||ie(Rt,Gt,4.5)||W.push({x:Rt,z:Gt,dx:Bt,dz:Vt,down:0,tgt:0})}if(xt.entries=W,!W.length)return;let ht=L(160,208,(T,q,j)=>{T.fillStyle="#f4f4f2",T.fillRect(0,0,q,j),T.strokeStyle="#111",T.lineWidth=4,T.strokeRect(3,3,q-6,j-6),T.fillStyle="#111",T.font="900 22px Anton, Impact, sans-serif",T.textAlign="center",T.fillText("PE\u0160IA Z\xD3NA",q/2,30),T.fillStyle="#1456b8",T.beginPath(),T.arc(q/2,92,50,0,7),T.fill(),T.fillStyle="#fff",T.beginPath(),T.arc(q/2+4,62,9,0,7),T.fill(),T.strokeStyle="#fff",T.lineWidth=9,T.lineCap="round",T.beginPath(),T.moveTo(q/2+2,76),T.lineTo(q/2-2,104),T.lineTo(q/2-16,130),T.moveTo(q/2-2,104),T.lineTo(q/2+14,128),T.moveTo(q/2+2,82),T.lineTo(q/2+20,96),T.moveTo(q/2+2,82),T.lineTo(q/2-18,92),T.stroke(),T.fillStyle="#111",T.font="700 15px sans-serif",T.fillText("Z\xC1SOBOVANIE",q/2,166),T.font="900 22px sans-serif",T.fillText("6 \u2013 9 h",q/2,192)}),k=D(new pt.Lambert({color:9080208})),K=D(new pt.Lambert({map:ht})),dt=W.length,Mt=new pt.InstancedMesh(new pt.Box(.7,.91,.04),[k,k,k,k,K,k],dt),Pt=new pt.InstancedMesh(new pt.Cyl(.035,.035,2.9,6),k,dt),Xt=new pt.Mat4,It=new pt.Quat,te=new pt.Vec3,se=new pt.Vec3(1,1,1),ge=new pt.Vec3(0,1,0);W.forEach((T,q)=>{let j=T.x-T.dz*3.4-T.dx*.6,it=T.z+T.dx*3.4-T.dz*.6;t.collide(j,it,t.hAt(j,it),.5,N)&&(j=N.x,it=N.z);let $=t.hAt(j,it);It.setFromAxisAngle(ge,Math.atan2(-T.dx,-T.dz)),Xt.compose(te.set(j,$+2.5,it),It,se),Mt.setMatrixAt(q,Xt),Xt.compose(te.set(j+T.dx*.045,$+1.45,it+T.dz*.045),It,se),Pt.setMatrixAt(q,Xt),t.colliders.add({ax:j-.06,az:it,bx:j+.06,bz:it,y0:$-2,y1:$+3,kind:"p"},j-.2,it-.2,j+.2,it+.2),T.y=t.hAt(T.x,T.z)}),Mt.castShadow=Pt.castShadow=!0,t.group.add(Mt,Pt);let he=new pt.Cyl(.11,.11,.9,10),Te=D(new pt.Lambert({color:13225168})),jt=new pt.InstancedMesh(he,Te,dt*3),Nt=new pt.InstancedMesh(new pt.Cyl(.115,.115,.07,10),new pt.Basic({color:16726815}),dt*3);jt.castShadow=!0,xt.boll=jt,xt.cap=Nt,xt.M=Xt,xt.P=te,xt.Q=new pt.Quat,xt.S=se,W.forEach((T,q)=>me(q,0)),t.group.add(jt,Nt)}function me(V,et){let W=xt.entries[V];for(let ht=0;ht<3;ht++){let k=(ht-1)*1.7,K=W.x-W.dz*k,dt=W.z+W.dx*k,Mt=t.hAt(K,dt)-et*.86;xt.M.compose(xt.P.set(K,Mt+.45,dt),xt.Q,xt.S),xt.boll.setMatrixAt(V*3+ht,xt.M),xt.M.compose(xt.P.set(K,Mt+.86,dt),xt.Q,xt.S),xt.cap.setMatrixAt(V*3+ht,xt.M)}xt.boll.instanceMatrix.needsUpdate=!0,xt.cap.instanceMatrix.needsUpdate=!0}function le(V){let et=s.pc(),W=et?et.x:o.x,ht=et?et.z:o.z;xt.acc=d(xt.acc+(Et(W,ht)?V:-V)*2.5,0,1),xt.acc>=1?xt.on=!0:xt.acc<=0&&(xt.on=!1),b.zoneNow=xt.on;let k=a.tod>=6&&a.tod<9,K=xt.el||(xt.el=document.getElementById("zone"));if(K){let dt=s.sandbox?xt.on?"PE\u0160IA Z\xD3NA":"":xt.on?et?k?"PE\u0160IA Z\xD3NA \xB7 z\xE1sobovanie do 9:00 \xB7 max 20 km/h":"PE\u0160IA Z\xD3NA \xB7 aut\xE1m vjazd zak\xE1zan\xFD":"PE\u0160IA Z\xD3NA":"";xt._txt!==dt&&(xt._txt=dt,K.textContent=dt,K.hidden=!dt,K.classList.toggle("bad",!!et&&xt.on&&!k))}if(xt.cool>0&&(xt.cool-=V),et&&xt.on&&a.mode==="play"){if(xt.told||(xt.told=!0,c.toast("Pe\u0161ia z\xF3na: aut\xE1 len 6:00\u20139:00 (z\xE1sobovanie), max 20 km/h")),!k&&(xt.fineT+=V,xt.fineT>6)){if(xt.fineT=-22,!s.sandbox){let dt=Math.min(50,Math.floor(a.money));a.money-=dt,c.toast("Mestsk\xE1 pol\xEDcia: jazda v pe\u0161ej z\xF3ne \xB7 pokuta "+(dt?"\u2212"+dt+" \u20AC":"50 \u20AC (nem\xE1\u0161 z \u010Doho)"))}l._tone(660,330,.3,.14,"square")}et.speed*3.6>26?(xt.fastT+=V,xt.fastT>1.2&&xt.cool<=0&&(xt.cool=16,xt.fastT=0,v(1,"r\xFDchla jazda v pe\u0161ej z\xF3ne"))):xt.fastT=0}else xt.fineT>0?xt.fineT=0:xt.fineT<0&&(xt.fineT=Math.min(0,xt.fineT+V));if(xt.boll)for(let dt=0;dt<xt.entries.length;dt++){let Mt=xt.entries[dt];Mt.tgt=et&&Math.abs(et.x-Mt.x)<11&&Math.abs(et.z-Mt.z)<11?1:0,Mt.down!==Mt.tgt&&(Mt.down=d(Mt.down+(Mt.tgt>Mt.down?1:-1)*V*2.2,0,1),me(dt,Mt.down))}}function ie(V,et,W){for(let ht of ot.edges){let k=ht.p;for(let K=0;K<k.length-1;K++){let dt=k[K][0],Mt=k[K][1],Pt=k[K+1][0],Xt=k[K+1][1];if(Math.min(dt,Pt)-W>V||Math.max(dt,Pt)+W<V||Math.min(Mt,Xt)-W>et||Math.max(Mt,Xt)+W<et)continue;let It=Pt-dt,te=Xt-Mt,se=d(((V-dt)*It+(et-Mt)*te)/(It*It+te*te||1),0,1);if(Math.hypot(dt+It*se-V,Mt+te*se-et)<W)return!0}}return!1}function Yt(){let V=[],et=new s.SGrid(12),W=[],ht=h?120:200;for(let Nt of t.d.road){if(Nt.c!==5||V.length>=ht||!Et(Nt.p[0][0]/10,Nt.p[0][1]/10)&&!Et(Nt.p[Nt.p.length-1][0]/10,Nt.p[Nt.p.length-1][1]/10))continue;let T=Nt.p.map(j=>[j[0]/10,j[1]/10]),q=Math.floor(T[0][0]*7+T[0][1]*13);for(let j=0;j<T.length-1;j++){let it=T[j][0],$=T[j][1],At=T[j+1][0]-it,Bt=T[j+1][1]-$,Vt=Math.hypot(At,Bt);if(!(Vt<5)){At/=Vt,Bt/=Vt;for(let Jt=4+M(q+j)*4;Jt<Vt-3;Jt+=7.5){let ee=M(q*3+j*31+Math.floor(Jt));if(ee>.5)continue;let Rt=ee<.25?1:-1,Gt=2.1,$t=it+At*Jt-Bt*Gt*Rt,fe=$+Bt*Jt+At*Gt*Rt;if($t<5||fe<5||$t>t.W-5||fe>t.H-5||!Et($t,fe))continue;let Ae=t.hAt($t,fe);if(t.surfaceY($t,fe)>Ae+.3||Math.abs(t.hAt($t+1.5,fe)-Ae)>.25||Math.abs(t.hAt($t,fe+1.5)-Ae)>.25||t.collide($t,fe,Ae,1.7,N)||xt.entries.some(Fe=>Math.hypot(Fe.x-$t,Fe.z-fe)<9)||ie($t,fe,3.6)||et.query($t,fe,4.2,W).some(Fe=>Math.hypot(Fe.x-$t,Fe.z-fe)<4.2))continue;let Hn={x:$t,y:Ae,z:fe,a:Math.atan2(At,Bt),k:V.length};et.add(Hn,$t,fe,$t,fe),V.push(Hn)}}}}if(!V.length)return;let k=V.length,K=new pt.Cyl(.06,1.5,.55,8),dt=D(new pt.Lambert({color:16777215,flatShading:!0}),.9),Mt=B([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),Pt=new pt.InstancedMesh(K,dt,k),Xt=new pt.InstancedMesh(Mt,D(new pt.Lambert({vertexColors:!0})),k),It=new pt.Mat4,te=new pt.Quat,se=new pt.Vec3,ge=new pt.Vec3(1,1,1),he=new pt.Vec3(0,1,0),Te=new pt.Color,jt=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];V.forEach((Nt,T)=>{te.setFromAxisAngle(he,Nt.a+(M(T*3)-.5)*.5),It.compose(se.set(Nt.x,Nt.y,Nt.z),te,ge),Xt.setMatrixAt(T,It),It.compose(se.set(Nt.x,Nt.y+2.5,Nt.z),te,ge),Pt.setMatrixAt(T,It),Pt.setColorAt(T,Te.set(jt[Math.floor(M(Math.floor(Nt.x/26)*31+Math.floor(Nt.z/26)*17)*jt.length)])),t.colliders.add({ax:Nt.x-.3,az:Nt.z,bx:Nt.x+.3,bz:Nt.z,y0:Nt.y-1,y1:Nt.y+2.4,kind:"p"},Nt.x-.5,Nt.z-.5,Nt.x+.5,Nt.z+.5)}),Pt.castShadow=Xt.castShadow=!0,Pt.receiveShadow=!0,t.group.add(Pt,Xt),b.terraceN=k}function de(){let V=(t.fountains||[]).filter(ht=>ht.area>14);if(!V.length)return;let et=D(new pt.Lambert({color:10130566,flatShading:!0})),W=new pt.Shader({uniforms:{uTime:u.uTime,uNight:u.uNight},transparent:!0,depthWrite:!1,side:pt.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let ht of V){if(ht.noTop){let se=new pt.Mesh(new pt.Cyl(.5,3.4,4.6,18,1,!0),W);se.position.set(ht.x,ht.y+2.3,ht.z),t.group.add(se);continue}let k=ht.area>60,K=k?1.5:1,dt=new pt.Group,Mt=new pt.Mesh(new pt.Cyl(.22*K,.36*K,1.9*K,8),et),Pt=new pt.Mesh(new pt.Cyl(.95*K,.28*K,.32*K,10),et),Xt=new pt.Mesh(new pt.Cyl(.1*K,.2*K,.9*K,6),et),It=new pt.Mesh(new pt.Sphere(.2*K,8,6),et),te=new pt.Mesh(new pt.Cyl(.9*K,1.05*K,1.95*K,14,1,!0),W);Mt.position.y=.95*K,Pt.position.y=2.05*K,Xt.position.y=2.6*K,It.position.y=3.15*K,te.position.y=1.02*K,Mt.castShadow=Pt.castShadow=!0,dt.add(Mt,Pt,Xt,It,te),dt.position.set(ht.x,ht.y-.1,ht.z),t.group.add(dt)}}function Ne(){let V=1031.2+C,et=766+_,W=t.hAt(V,et),ht=Math.atan2(-10.8,-16.2),k=new pt.Group,K="#e3c56d",dt="#d9d2bf",Mt=new pt.Mesh(B([[6.8,31,6.8,0,15.5,0,K],[7.3,.5,7.3,0,9.2,0,dt],[7.3,.5,7.3,0,20.4,0,dt],[8,.7,8,0,31.2,0,dt],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),D(new pt.Lambert({vertexColors:!0}))),Pt=D(new pt.Lambert({color:14927213,flatShading:!0})),Xt=D(new pt.Lambert({color:5084288,flatShading:!0})),It=new pt.Lambert({color:14266938,emissive:3812360}),te=(Rt,Gt,$t)=>{let fe=new pt.Mesh(Rt,Gt);return fe.position.y=$t,fe.castShadow=!0,k.add(fe),fe};Mt.castShadow=Mt.receiveShadow=!0,k.add(Mt),te(new pt.Cyl(2.9,3.1,5.2,8),Pt,34.1),te(new pt.Cyl(1.5,3.5,3.6,8),Xt,38.5),te(new pt.Cyl(1.25,1.25,2.2,8),Pt,41.4),te(new pt.Cyl(.9,1.7,1.6,8),Xt,43.3),te(new pt.Cyl(.05,.8,5.2,8),Xt,46.7),te(new pt.Sphere(.35,8,6),It,49.4);let se=L(128,128,(Rt,Gt,$t)=>{Rt.fillStyle="#f3efe2",Rt.beginPath(),Rt.arc(64,64,60,0,7),Rt.fill(),Rt.strokeStyle="#222",Rt.lineWidth=5,Rt.stroke();for(let fe=0;fe<12;fe++){let Ae=fe/12*A*2;Rt.beginPath(),Rt.moveTo(64+Math.sin(Ae)*46,64-Math.cos(Ae)*46),Rt.lineTo(64+Math.sin(Ae)*54,64-Math.cos(Ae)*54),Rt.stroke()}Rt.lineWidth=6,Rt.lineCap="round",Rt.beginPath(),Rt.moveTo(64,64),Rt.lineTo(88,50),Rt.moveTo(64,64),Rt.lineTo(56,22),Rt.stroke()}),ge=new pt.Basic({map:se,transparent:!0});for(let Rt=0;Rt<4;Rt++){let Gt=new pt.Mesh(new pt.Plane(3.4,3.4),ge),$t=Rt*A/2;Gt.position.set(Math.sin($t)*3.43,25.6,Math.cos($t)*3.43),Gt.rotation.y=$t,k.add(Gt)}k.position.set(V,W-.5,et),k.rotation.y=ht,t.group.add(k);let he=Math.cos(ht)*3.4,Te=Math.sin(ht)*3.4,jt=[[V+he+Te,et-Te+he],[V+he-Te,et-Te-he],[V-he-Te,et+Te-he],[V-he+Te,et+Te+he]];for(let Rt=0;Rt<4;Rt++){let Gt=jt[Rt],$t=jt[(Rt+1)%4];t.colliders.add({ax:Gt[0],az:Gt[1],bx:$t[0],bz:$t[1],y0:W-50,y1:W+31,kind:"b"},Gt[0],Gt[1],$t[0],$t[1])}let Nt=0,T=0,q=!1;for(let[Rt,Gt]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]].map($t=>[$t[0]+C,$t[1]+_]))if(Et(Rt,Gt)&&!t.collide(Rt,Gt,t.hAt(Rt,Gt),5.6,N)){Nt=Rt,T=Gt,q=!0;break}if(!q)return;let j=Math.min(t.hAt(Nt,T),t.hAt(Nt+4,T),t.hAt(Nt-4,T),t.hAt(Nt,T+4),t.hAt(Nt,T-4)),it=D(new pt.Lambert({color:10130566,flatShading:!0})),$=new pt.Group,At=new pt.Mesh(new pt.Cyl(4.7,4.9,.85,16),it),Bt=new pt.Mesh(new pt.Cyl(4.35,4.35,.03,16),t.waterMat||new pt.Lambert({color:2903898})),Vt=new pt.Mesh(new pt.Cyl(.5,.75,5.2,8),it),Jt=new pt.Mesh(new pt.Cyl(.9,.5,.5,8),it),ee=new pt.Mesh(B([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),D(new pt.Lambert({vertexColors:!0})));At.position.y=.42,Bt.position.y=.86,Vt.position.y=3,Jt.position.y=5.8,ee.position.y=6.05,At.castShadow=Vt.castShadow=ee.castShadow=!0,At.receiveShadow=!0,$.add(At,Bt,Vt,Jt,ee),$.position.set(Nt,j-.05,T),t.group.add($);for(let Rt=0;Rt<10;Rt++){let Gt=Rt/10*A*2,$t=(Rt+1)/10*A*2,fe=[Nt+Math.sin(Gt)*4.8,T+Math.cos(Gt)*4.8],Ae=[Nt+Math.sin($t)*4.8,T+Math.cos($t)*4.8];t.colliders.add({ax:fe[0],az:fe[1],bx:Ae[0],bz:Ae[1],y0:j-2,y1:j+1.3,kind:"w"},fe[0],fe[1],Ae[0],Ae[1])}(t.fountains||(t.fountains=[])).push({x:Nt,z:T,y:j+.75,area:30,noTop:!0,spray:1})}function qe(){let V=1038.6+C,et=849.4+_;for(let It=0;It<8&&t.collide(V,et,t.hAt(V,et),1.2,N);It++)V=N.x,et=N.z;let W=t.hAt(V,et),ht=D(new pt.Lambert({color:5192994}),1.2),k=D(new pt.Lambert({color:1710620})),K=new pt.Group,dt=(It,te,se,ge,he,Te=0,jt=0)=>{let Nt=new pt.Mesh(It,te);return Nt.position.set(se,ge,he),Nt.rotation.set(Te,0,jt),Nt.castShadow=!0,K.add(Nt),Nt};dt(new pt.Cyl(.52,.52,.05,16),k,0,.025,0),dt(new pt.Torus(.5,.05,6,18),ht,0,.05,0,A/2),dt(new pt.Cyl(.5,.5,.04,16),ht,-.35,.3,-.42,.9,.2),dt(new pt.Box(.5,.2,.26),ht,0,.13,-.1),dt(new pt.Box(.56,.12,.2),ht,0,.11,.22),dt(new pt.Sphere(.15,10,8),ht,0,.3,.12),dt(new pt.Cyl(.19,.2,.07,12),ht,0,.4,.1),dt(new pt.Sphere(.16,10,6,0,A*2,0,A/2),ht,0,.41,.1);let Mt=L(128,128,(It,te,se)=>{It.fillStyle="#1456b8",It.beginPath(),It.arc(te/2,se/2,62,0,7),It.fill(),It.fillStyle="#ffd21a",It.beginPath(),It.arc(te/2,se/2,54,0,7),It.fill(),It.fillStyle="#111",It.font="900 30px Anton, Impact, sans-serif",It.textAlign="center",It.fillText("MAN",te/2,50),It.fillText("AT WORK",te/2,88)});dt(new pt.Cyl(.03,.03,2.2,6),k,1.1,1.1,-.3);let Pt=dt(new pt.Cyl(.3,.3,.03,18),[k,new pt.Basic({map:Mt}),k],1.1,2.3,-.3,A/2);Pt.rotation.z=0,K.position.set(V,W,et),K.rotation.y=-.6,t.group.add(K),t.colliders.add({ax:V-.3,az:et,bx:V+.3,bz:et,y0:W-1,y1:W+.5,kind:"p"},V-.5,et-.5,V+.5,et+.5);let Xt={ax:V-.5,az:et,bx:V+.5,bz:et,hw:2.5,n:"\u010Cumil"};t.names.add(Xt,V-3,et-3,V+3,et+3),oe[0][1]=V,oe[0][2]=et}let oe=[["\u010Cumil",1038.6,849.4,14],["Michalsk\xE1 br\xE1na",875.5,598.2,24],["Hlavn\xE9 n\xE1mestie a Star\xE1 radnica",1016,778,30],["Primaci\xE1lny pal\xE1c",1094,722,34],["D\xF3m sv\xE4t\xE9ho Martina",750.5,948,38],["Bratislavsk\xFD hrad",388,946,75],["Slovensk\xE9 n\xE1rodn\xE9 divadlo",1105,920,36],["Reduta",1118,1062,42],["Modr\xFD kostol\xEDk",1438.5,433.8,36],["Prezidentsk\xFD pal\xE1c",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Star\xE1 tr\u017Enica",1217.7,668.9,40],["Slovensk\xE1 n\xE1rodn\xE1 gal\xE9ria",1015,1175,40],["Slovensk\xE9 n\xE1rodn\xE9 m\xFAzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestsk\xE9 k\xFApele Gr\xF6ssling",1306,1076,40]];for(let V of oe)V[1]+=C,V[2]+=_;for(let V of s.moreLandmarks||[])oe.push(V);let Ct=new Set;function Z(){try{for(let V of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))Ct.add(V)}catch{}window.__gtbLM=(V,et)=>{for(let W of oe)V(W[1],W[2],Ct.has(W[0])?"#7dff6a":"#ffffff",et/150)}}let Ut=0;function Ot(V){if(Ut-=V,Ut>0||a.mode!=="play")return;Ut=.4;let et=s.pc()?s.pc().x:o.x,W=s.pc()?s.pc().z:o.z;for(let ht of oe){if(Ct.has(ht[0])||Math.hypot(ht[1]-et,ht[2]-W)>ht[3])continue;Ct.add(ht[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...Ct]))}catch{}let k=Ct.size===oe.length,K=k?1500:60;a.money+=K,c.big(k?"CEL\xC1 BRATISLAVA":"OBJAVEN\xC9",s.sandbox?`${ht[0]} \xB7 ${Ct.size}/${oe.length}`:`${ht[0]} \xB7 ${Ct.size}/${oe.length} \xB7 +${K} \u20AC`,"#ffcc33",3),l.win();break}}function ae(){let V=[[1089+C,725.6+_,2]];for(let[et,W,ht]of V){if(t.collide(et,W,t.hAt(et,W),2.2,N)&&(et=N.x,W=N.z),t.collide(et,W,t.hAt(et,W),1.2,N))continue;let k=w("fabka",et,W,ht,"#f3f4f5");k.parked=k.keep=!0,k.mp=!0,rt(k,"mp")}}return{zoneNow:!1,plateMat:Y,gloss:z,livery:rt,flash:X,maybeTaxi:at,inZone:Et,trams:ot,zone:xt,landmarks:oe,patchData(V){for(let et of V.bld)et.n==="Kostol sv. Al\u017Ebety"&&(et.c="#9cc4e8",et.rc="#5f86b4")},init(){let V=(et,W)=>{try{W()}catch(ht){console.error("X3 "+et,ht)}};V("trams",St),V("zone",Re),V("cumil",qe),V("radnica",Ne),V("terraces",Yt),V("fountains",de),s.sandbox||V("patrol",ae),V("landmarks",Z),V("prewarm",()=>{for(let et=0;et<40&&ot.list.length<Math.min(5,ot.max);et++){let W=yt(1);W&&(W.s=60+g()*Math.max(10,W.r.L-200),bt(W))}}),R=!0},obst(){return R&&ot.proxies.length?b._ob=n.concat(ot.proxies):n},update(V,et){R&&(qt(V,et),ot.mWin.emissive.setScalar(.004+u.uNight.value*1.25),ot.mHead.color.setScalar(1+u.uNight.value*3),!et&&(le(V),Ot(V),s.pc()&&s.pc().mp&&!s.pc().mpStolen&&(s.pc().mpStolen=1,v(2,"kr\xE1de\u017E auta mestskej pol\xEDcie"))))},goalText(){return" \xB7 Pamiatky "+Ct.size+"/"+oe.length}}})();return b}var Ja=[];function $1(s,t){let e=document.createElement("canvas"),n=128,i=Math.max(128,Math.round(n*t.w/t.h));e.width=i,e.height=n;let r=e.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,i,n)),r.fillStyle=t.fg||"#fff",r.textAlign="center",r.textBaseline="middle";let o=92;r.font=`${t.weight||800} ${o}px ${t.font||"Arial, Helvetica, sans-serif"}`;let a=r.measureText(s).width;a>i*.9&&(o=Math.floor(o*i*.9/a),r.font=`${t.weight||800} ${o}px ${t.font||"Arial, Helvetica, sans-serif"}`),r.fillText(s,i/2,n/2+4);let c=new ii(e);return c.colorSpace=Ce,c.anisotropy=4,c}function An(s,t,e,n){let[i,r]=n.a,[o,a]=n.b,c=n.t??.5,l=i+(o-i)*c,h=r+(a-r)*c,u=Math.hypot(o-i,a-r)||1,f=(a-r)/u,d=-(o-i)/u;(l+f-n.away[0])**2+(h+d-n.away[1])**2<(l-f-n.away[0])**2+(h-d-n.away[1])**2&&(f=-f,d=-d);let p=$1(e,n),x=new Zt({map:p,emissiveMap:p,emissive:16777215,transparent:!n.bg,alphaTest:n.bg?0:.35,side:Ue});x.userData.glow=n.glow??1,Ja.push(x);let g=new Lt(new ni(n.w,n.h),x);return g.position.set(l+f*(n.off??.18),s.hAt(l,h)+n.y,h+d*(n.off??.18)),g.rotation.y=Math.atan2(f,d),t.add(g),{x:l,z:h,nx:f,nz:d}}function zd(s,t){let e=new Le,n=[],i=[],r=null,o=()=>r||(r=new Zt({color:9071176})),a=(x,g,m)=>[x[0]+(g[0]-x[0])*m,x[1]+(g[1]-x[1])*m],c=null,l=(x,g,m,M,v,y,S,E=0,w=null)=>{let C=new Lt(new He(x,g,m),w||new Zt({color:M}));return C.position.set(v,y,S),C.rotation.y=E,C.castShadow=C.receiveShadow=!0,(c||e).add(C),C};{let x=[[2529,1187],[2584,1108]],g=[[2504,1170],[2559,1091]],m=[2540,1146],M=[[2531,1205],[2574,1143]],v=[2571,1183],y=[[2574,1065],[2602,1084]],S=[2592,1069];An(s,e,"PRIOR",{a:[2501,1171],b:[2557,1090],t:.42,away:m,y:9.2,w:12,h:2.8,fg:"#e8402a",glow:1.2,off:.3}),An(s,e,"PRIOR",{a:M[0],b:M[1],t:.12,away:v,y:16.6,w:10,h:2.4,fg:"#e8402a",glow:1.2}),An(s,e,"HOTEL KYJEV",{a:y[0],b:y[1],t:.5,away:S,y:67.2,w:26,h:3.6,fg:"#f4f1e6",off:-1.2,glow:1.4}),An(s,e,"ost block",{a:g[0],b:g[1],t:.34,away:m,y:3.25,w:5.6,h:1,fg:"#f2efe6",bg:"#161616",weight:500,glow:1.1}),An(s,e,"K\xC1CE\u010CKO",{a:g[0],b:g[1],t:.76,away:m,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),An(s,e,"K\xC1CE\u010CKO",{a:x[0],b:x[1],t:.76,away:m,y:13.4,w:9,h:1.7,fg:"#ffd23a",glow:1.5}),An(s,e,"K\xC1CE\u010CKO \u2191",{a:g[0],b:g[1],t:.62,away:m,y:3.25,w:4.6,h:.9,fg:"#ffd23a",bg:"#1b1b1b",glow:1.1});let E=a(g[0],g[1],.34),w=[g[1][0]-g[0][0],g[1][1]-g[0][1]],C=Math.hypot(w[0],w[1]);w[0]/=C,w[1]/=C;let _=[w[1],-w[0]];(E[0]+_[0]-m[0])**2+(E[1]+_[1]-m[1])**2<(E[0]-_[0]-m[0])**2+(E[1]-_[1]-m[1])**2&&(_=[-_[0],-_[1]]);let b=Math.atan2(w[0],w[1]),A=new Zt({color:3107636,flatShading:!0}),R=new Zt({color:2367775}),N=new Zt({color:9071176});for(let nt=-3;nt<=3;nt++){let _t=E[0]+w[0]*nt*1.7+_[0]*1.1,yt=E[1]+w[1]*nt*1.7+_[1]*1.1,I=s.hAt(_t,yt);l(.7,.6,.7,0,_t,I+.3,yt,b,R);let P=new Lt(new Gi(.55+(nt&1)*.15,0),A);if(P.position.set(_t,I+1.05+(nt&1)*.2,yt),P.castShadow=!0,e.add(P),nt%2===0){let J=_t+_[0]*1.6,gt=yt+_[1]*1.6,bt=s.hAt(J,gt),wt=new Lt(new Oe(.42,.42,.05,10),N);wt.position.set(J,bt+.74,gt),e.add(wt);let qt=new Lt(new Oe(.04,.04,.74,5),R);qt.position.set(J,bt+.37,gt),e.add(qt)}}let L=a(a(x[0],x[1],.56),a(g[0],g[1],.56),.5),D=a(a(x[0],x[1],.95),a(g[0],g[1],.95),.5),z=10.5,B=s.hAt(m[0],m[1])+12.05,G=1e9;for(let nt of[...x,...g])G=Math.min(G,s.hAt(nt[0],nt[1]));let Y=G+12.12;s.decks.add({ax:L[0],az:L[1],bx:D[0],bz:D[1],ya:Y,yb:Y,hw:z},Math.min(L[0],D[0])-z,Math.min(L[1],D[1])-z,Math.max(L[0],D[0])+z,Math.max(L[1],D[1])+z);let F=Math.hypot(D[0]-L[0],D[1]-L[1]),H=a(L,D,.5),rt=l(z*2,.14,F,8019264,H[0],Y-.07,H[1],b);rt.castShadow=!1;let X=[[-z,-F/2],[z,-F/2],[z,F/2],[-z,F/2]].map(([nt,_t])=>[H[0]+_[0]*nt+w[0]*_t,H[1]+_[1]*nt+w[1]*_t]),Q=new Zt({color:2763308});for(let nt=0;nt<4;nt++){let _t=X[nt],yt=X[(nt+1)%4],I=Math.hypot(yt[0]-_t[0],yt[1]-_t[1]);l(.08,.08,I,0,(_t[0]+yt[0])/2,Y+1.1,(_t[1]+yt[1])/2,Math.atan2(yt[0]-_t[0],yt[1]-_t[1]),Q),l(.05,.05,I,0,(_t[0]+yt[0])/2,Y+.55,(_t[1]+yt[1])/2,Math.atan2(yt[0]-_t[0],yt[1]-_t[1]),Q),s.colliders.add({ax:_t[0],az:_t[1],bx:yt[0],bz:yt[1],y0:Y-.5,y1:Y+1.6,kind:"r",tag:null},_t[0],_t[1],yt[0],yt[1])}let at=(nt,_t)=>[H[0]+_[0]*nt+w[0]*_t,H[1]+_[1]*nt+w[1]*_t];{let[nt,_t]=at(-z+2.2,-F/2+5);l(1.4,1.1,7,3812386,nt,Y+.55,_t,b),l(1.7,.08,7.3,11569756,nt,Y+1.14,_t,b)}let ct=[14239787,15921126,3107722,15909424],tt=0;for(let nt=-F/2+4;nt<F/2-2;nt+=5.2)for(let _t of[1.5,6.2]){let[yt,I]=at(_t,nt);l(1.8,.07,.8,10123858,yt,Y+.75,I,b,N);for(let gt of[-.75,.75]){let[bt,wt]=at(_t+gt,nt);l(.35,.06,1.8,0,bt,Y+.45,wt,b+Math.PI/2,N)}let P=new Lt(new Oe(.03,.03,2.4,5),Q);P.position.set(yt,Y+1.2,I),e.add(P);let J=new Lt(new qr(1.5,.5,8),new Zt({color:ct[tt++%4],flatShading:!0}));J.position.set(yt,Y+2.55,I),J.castShadow=!0,e.add(J)}let lt=new Qe({color:16767392});lt.userData.bulb=!0,Ja.push(lt);let st=[];for(let nt=-F/2;nt<=F/2+.1;nt+=F/4)for(let _t=0;_t<=14;_t++){let yt=-z+2*z*_t/14,I=.5*Math.sin(Math.PI*_t/14);st.push([...at(yt,nt),Y+3.1-I])}let ft=new rn(new Zn(.07,5,4),lt,st.length),ot=new re;st.forEach((nt,_t)=>{ot.makeTranslation(nt[0],nt[2],nt[1]),ft.setMatrixAt(_t,ot)}),e.add(ft);for(let nt of[-z,z])for(let _t=-F/2;_t<=F/2+.1;_t+=F/4){let[yt,I]=at(nt,_t),P=new Lt(new Oe(.04,.04,3.2,5),Q);P.position.set(yt,Y+1.6,I),e.add(P)}let U=a(g[0],g[1],.62),vt=at(z-2.2,F/2-2.5);n.push({a:[U[0]+_[0]*1.6,U[1]+_[1]*1.6],b:vt,yb:Y,name:"K\xE1ce\u010Dko \u2013 terasa",back:"Kamenn\xE9 n\xE1mestie"});let mt=S[0],St=S[1];for(let[nt,_t]of[[-z+3.6,-F/2+4],[-z+3.6,-F/2+6.5],[.4,-1],[2.8,1.2],[5,6.5],[7.4,-6],[z-1.2,3],[z-1.2,5],[-3,F/2-1.2],[-1.2,F/2-1.2]]){let[yt,I]=at(nt,_t);i.push([yt,I,Y,nt>z-2||_t>F/2-2?Math.atan2(mt-yt,St-I):Math.atan2(H[0]-yt+_t%3,H[1]-I+nt%2)])}}{let x=[2448,1196],g=[2485,1128],m=Math.hypot(g[0]-x[0],g[1]-x[1]),M=[(g[0]-x[0])/m,(g[1]-x[1])/m],v=[-M[1],M[0]],y=Math.atan2(M[0],M[1]),S=new Zt({color:10470616,transparent:!0,opacity:.35,side:Ue}),E=new Zt({color:2829616}),w=new Zt({color:9071176});for(let[C,_]of[[.38,9.5],[.62,-5.5]]){let b=x[0]+(g[0]-x[0])*C+v[0]*_,A=x[1]+(g[1]-x[1])*C+v[1]*_,R=s.hAt(b,A),N=Math.sign(_);l(1.7,.1,8,0,b,R+2.6,A,y,E),l(.06,2.5,8,0,b+v[0]*.8*N,R+1.3,A+v[1]*.8*N,y,S).castShadow=!1;for(let z of[-3.95,3.95])l(1.6,2.5,.06,0,b+M[0]*z,R+1.3,A+M[1]*z,y,S).castShadow=!1;for(let z of[-3.95,0,3.95])l(.09,2.6,.09,0,b+M[0]*z+v[0]*.8*N,R+1.3,A+M[1]*z+v[1]*.8*N,y,E);l(.45,.08,5,0,b+v[0]*.45*N,R+.5,A+v[1]*.45*N,y,w);let L=[b-M[0]*4-v[0]*.85*N,A-M[1]*4-v[1]*.85*N],D=[b+M[0]*4-v[0]*.85*N,A+M[1]*4-v[1]*.85*N];An(s,e,"Kamenn\xE9 n\xE1mestie",{a:L,b:D,t:.5,away:[b+v[0]*5*N,A+v[1]*5*N],y:2.86,w:4.2,h:.42,fg:"#ffffff",bg:"#c8102e",weight:700,glow:.9,off:.02}),s.colliders.add({ax:b-M[0]*4+v[0]*.8*N,az:A-M[1]*4+v[1]*.8*N,bx:b+M[0]*4+v[0]*.8*N,bz:A+M[1]*4+v[1]*.8*N,y0:R-1,y1:R+2.7,kind:"w",tag:null},b-5,A-5,b+5,A+5)}}{let x=[2314,1201],g=[2340,1231],M=An(s,e,"STAR\xC1 TR\u017DNICA",{a:x,b:g,t:.5,away:[2322,1245],y:9.6,w:13,h:1.5,fg:"#f3ead2",glow:1,off:.25}),v=Math.hypot(g[0]-x[0],g[1]-x[1]),y=[(g[0]-x[0])/v,(g[1]-x[1])/v],S=Math.atan2(y[0],y[1]),E=[14239787,15921126,4164175,15909424,3107722],w=new Zt({color:9071176}),C=[14254379,12729131,6988604,15255602],_=0;for(let b=0;b<2;b++)for(let A=-2;A<=2;A++){let R=M.x+M.nx*(7+b*6.5)+y[0]*A*4.6,N=M.z+M.nz*(7+b*6.5)+y[1]*A*4.6;if(s.hAt(R,N)<s.water+2)continue;let L=s.hAt(R,N);l(3.2,.08,1.3,0,R,L+.9,N,S+Math.PI/2,w);for(let z of[-1.5,1.5])for(let B of[-.6,.6])l(.07,2.3,.07,3815994,R+y[0]*z+M.nx*B,L+1.15,N+y[1]*z+M.nz*B);let D=new Lt(new qr(2.6,.9,4),new Zt({color:E[_%5],flatShading:!0}));D.position.set(R,L+2.75,N),D.rotation.y=S+Math.PI/4,D.castShadow=!0,e.add(D);for(let z of[-1,0,1])l(.75,.3,.9,C[(_+z+4)%4],R+y[0]*z,L+1.1,N+y[1]*z,S+Math.PI/2);_++}An(s,e,"MANDERLA",{a:[2388,1235],b:[2401,1224],t:.5,away:[2400,1236],y:46.2,w:11,h:2.2,fg:"#f4f1e6",glow:1.3,off:-.6})}let h=e,u=new Le;{let x=u;h.add(u),c=u;let g=[[3594,1049.1],[3587,1049.2],[3574.5,1048.5],[3565.1,1045.7],[3563.4,1044.2],[3563.3,1042],[3545.5,1039.3],[3544.2,1041.8],[3542.8,1042.3],[3519.5,1041.1],[3517.9,1040.3],[3514.1,1034.5],[3489.2,1030.4],[3466.8,1016.1],[3467.3,1011.8],[3451.9,1009.5],[3449.4,1008.5],[3447.3,1006],[3446.6,1004],[3446.6,1001.5],[3460.7,911.5],[3512.7,893.2],[3555.7,899.9],[3556.7,893.6],[3611.6,902.2],[3609.4,917.3],[3630,920.7],[3640.4,922],[3641.9,912.7],[3719.6,924.8],[3718.1,934.3],[3726.9,935.6],[3729.5,974.4],[3773.7,981.3],[3792.1,1054.9],[3763.7,1050.7],[3769.1,1061.9],[3750,1071.1],[3734.9,1068.5],[3738.9,1043.2],[3687.2,1035.2],[3683.2,1060.9],[3642.3,1054.3],[3638.1,1057.6],[3635.5,1059.1],[3634.7,1059],[3614,1053.1],[3612.5,1052.2],[3611.9,1049.6],[3595.6,1047],[3595.2,1048]],m=1e9,M=-1e9;for(let[tt,lt]of g){let st=s.hAt(tt,lt);m=Math.min(m,st),M=Math.max(M,st)}let v=m+Math.max(22.7,M-m+2.5),y=8.887*Math.PI/180,S=Math.cos(y),E=Math.sin(y),w=[3580,986],C=(tt,lt)=>[w[0]+tt*S-lt*E,w[1]+tt*E+lt*S],_=(tt,lt,st=0)=>{if(!io(tt,lt,g))return!1;if(!st)return!0;for(let ft=0;ft<8;ft++){let ot=ft/8*Math.PI*2;if(!io(tt+Math.cos(ot)*st,lt+Math.sin(ot)*st,g))return!1}return!0},b=(tt,lt,st,ft,ot)=>{let U=[],vt=tt.length,mt=ot?vt:vt-1;for(let _t=0;_t<mt;_t++){let yt=tt[_t],I=tt[(_t+1)%vt],P=Math.hypot(I[0]-yt[0],I[1]-yt[1])||1,J=-(I[1]-yt[1])/P*lt/2,gt=(I[0]-yt[0])/P*lt/2,bt=v+ft;U.push(yt[0]+J,bt,yt[1]+gt,I[0]+J,bt,I[1]+gt,I[0]-J,bt,I[1]-gt,yt[0]+J,bt,yt[1]+gt,I[0]-J,bt,I[1]-gt,yt[0]-J,bt,yt[1]-gt)}let St=new Ee;St.setAttribute("position",new ne(U,3)),St.computeVertexNormals();let nt=new Lt(St,new Zt({color:st,side:Ue}));nt.receiveShadow=!0,x.add(nt)},A=(tt,lt,st=48)=>{let ft=[];for(let ot=0;ot<st;ot++){let U=Math.PI/2-Math.PI*ot/(st-1);ft.push(C(tt+lt*Math.cos(U),lt*Math.sin(U)))}for(let ot=0;ot<st;ot++){let U=-Math.PI/2-Math.PI*ot/(st-1);ft.push(C(-tt+lt*Math.cos(U),lt*Math.sin(U)))}return ft};b(A(90,32),3.4,11818300,.06,!0);for(let tt of[30.9,33.1])b(A(90,tt),.1,15921126,.08,!0);b(A(90,36.4),2.2,13617336,.05,!0),b([C(-140,0),C(150,0)].map(tt=>tt),2.4,13617336,.05,!1),b([C(0,-60),C(0,60)],2.4,13617336,.05,!1);let R=new Zt({color:5209914,flatShading:!0});for(let[tt,lt,st]of[[-45,-14,9],[45,14,10],[-60,16,7],[60,-16,8],[130,25,7],[-120,-30,8]]){let[ft,ot]=C(tt,lt);if(!_(ft,ot,st))continue;let U=new Lt(new Zn(st,10,6,0,Math.PI*2,0,Math.PI/2),R);U.scale.y=.18,U.position.set(ft,v,ot),U.receiveShadow=!0,x.add(U)}let N=[],L=7,D=()=>(L=L*16807%2147483647)/2147483647,z=(tt,lt)=>{let st=tt-w[0],ft=lt-w[1],ot=st*S+ft*E,U=-st*E+ft*S,vt=Math.max(0,Math.abs(ot)-90),mt=Math.hypot(vt,U);return Math.abs(mt-32)<4.5||Math.abs(mt-36.4)<3||Math.abs(U)<2.5||Math.abs(ot)<2.5};for(let tt=0;tt<2500&&N.length<110;tt++){let lt=3450+D()*340,st=895+D()*175;!_(lt,st,4.5)||z(lt,st)||N.some(ft=>Math.hypot(ft[0]-lt,ft[1]-st)<7)||N.push([lt,st])}let B=new rn(s.trunkGeo,s.trunkMat,N.length),G=new rn(s.crownGeo,s.crownMat,N.length),Y=new re,F=new Ke,H=new O,rt=new O,X=new O(0,1,0),Q=new kt;N.forEach(([tt,lt],st)=>{let ft=.6+D()*.45;F.setFromAxisAngle(X,D()*6.28),Y.compose(rt.set(tt,v,lt),F,H.set(ft,ft*(.9+D()*.3),ft)),B.setMatrixAt(st,Y),G.setMatrixAt(st,Y),Q.setHSL(.23+D()*.07,.42+D()*.18,.24+D()*.1),G.setColorAt(st,Q),s.colliders.add({ax:tt-.25,az:lt,bx:tt+.25,bz:lt,y0:v-1,y1:v+3,kind:"w",tag:null},tt-.3,lt-.3,tt+.3,lt+.3)}),B.castShadow=G.castShadow=!0,B.frustumCulled=G.frustumCulled=!1,x.add(B,G);let at=new Zt({color:10470608,transparent:!0,opacity:.45,side:Ue}),ct=new Zt({color:2829616});for(let[tt,lt]of[[-22,14],[22,-14]]){let[st,ft]=C(tt,lt);l(14,4.2,8,0,st,v+2.1,ft,Math.PI/2-y,at).castShadow=!1,l(14.4,.25,8.4,0,st,v+4.3,ft,Math.PI/2-y,ct),s.colliders.add({ax:st-6,az:ft,bx:st+6,bz:ft,y0:v-1,y1:v+4.4,kind:"w",tag:null},st-7,ft-7,st+7,ft+7)}for(let tt=0;tt<5;tt++){let[lt,st]=C(118+tt*2.6,-26);if(_(lt,st,2)){for(let ft of[-.9,.9])l(.1,2.2+tt%2*.4,.1,2829616,lt+ft*Math.cos(y),v+1.1,st+ft*Math.sin(y));l(1.9,.07,.07,10132896,lt,v+2.2+tt%2*.4,st,Math.PI/2-y)}}for(let tt=-80;tt<=80;tt+=20)for(let lt of[-40,40]){let[st,ft]=C(tt,lt);_(st,ft,2)&&l(1.9,.45,.6,9071176,st,v+.25,ft,Math.PI/2-y,o())}for(let tt=0;tt<g.length;tt++){let lt=g[tt],st=g[(tt+1)%g.length],ft=Math.hypot(st[0]-lt[0],st[1]-lt[1]);if(ft<.5)continue;let ot=Math.atan2(st[0]-lt[0],st[1]-lt[1]);l(.06,1.05,ft,0,(lt[0]+st[0])/2,v+.55,(lt[1]+st[1])/2,ot,at).castShadow=!1,l(.1,.08,ft,0,(lt[0]+st[0])/2,v+1.1,(lt[1]+st[1])/2,ot,ct),s.colliders.add({ax:lt[0],az:lt[1],bx:st[0],bz:st[1],y0:v-.6,y1:v+1.6,kind:"r",tag:null},lt[0],lt[1],st[0],st[1])}for(let tt=-100;tt<=100;tt+=7){let lt=[];for(let st=0;st<g.length;st++){let ft=g[st],ot=g[(st+1)%g.length],U=-(ft[0]-w[0])*E+(ft[1]-w[1])*S,vt=-(ot[0]-w[0])*E+(ot[1]-w[1])*S;if((U-tt)*(vt-tt)>0||U===vt)continue;let mt=(tt-U)/(vt-U),St=ft[0]+(ot[0]-ft[0])*mt,nt=ft[1]+(ot[1]-ft[1])*mt;lt.push((St-w[0])*S+(nt-w[1])*E)}lt.sort((st,ft)=>st-ft);for(let st=0;st+1<lt.length;st+=2){let ft=C(lt[st]+.3,tt),ot=C(lt[st+1]-.3,tt),U=3.8;s.decks.add({ax:ft[0],az:ft[1],bx:ot[0],bz:ot[1],ya:v,yb:v,hw:U},Math.min(ft[0],ot[0])-U,Math.min(ft[1],ot[1])-U,Math.max(ft[0],ot[0])+U,Math.max(ft[1],ot[1])+U)}}An(s,x,"NIVY",{a:[3642.3,1054.3],b:[3683.2,1060.9],t:.5,away:[3640,1e3],y:17.5,w:15,h:5,fg:"#f6f4ee",glow:1.3,off:.4,weight:900}),An(s,x,"NIVY",{a:[3446.6,1001.5],b:[3460.7,911.5],t:.5,away:[3600,970],y:17.5,w:15,h:5,fg:"#f6f4ee",glow:1.3,off:.4,weight:900}),An(s,x,"AUTOBUSOV\xC1 STANICA",{a:[3614,1053.1],b:[3634.7,1059],t:.5,away:[3620,1e3],y:6.4,w:12,h:1.1,fg:"#ffffff",bg:"#1d4f91",weight:700,glow:1,off:.3}),An(s,x,"STRECHA \u2191",{a:[3614,1053.1],b:[3634.7,1059],t:.18,away:[3620,1e3],y:3.2,w:3.4,h:.8,fg:"#ffd23a",bg:"#1b1b1b",glow:1.1,off:.3}),n.push({a:[3618.5,1059.6],b:[3622,1043],yb:v,name:"Nivy \u2013 zelen\xE1 strecha",back:"Mlynsk\xE9 nivy"}),c=null}let f=s.tiles[Math.floor(980/s.T)*s.ntx+Math.floor(3602/s.T)];{An(s,e,"GRAND HOTEL RIVER PARK",{a:[754.1,1610.9],b:[732.8,1604.6],t:.5,away:[748,1580],y:39.3,w:19,h:1.5,fg:"#f3ead2",glow:1.2,off:.3});let x=A=>{for(let R=1600;R<1830;R+=1)if(s.hAt(A,R)<s.water+.2)return R;return null},g=s.trunkMat,m=s.crownMat,M=[],v=[],y=[];for(let A=596;A<=1e3;A+=11){let R=x(A);if(R===null)continue;let N=x(A+6)??R,L=Math.atan2(N-R,6);M.push([A,R-10,L]),(A-596)%22===0?v.push([A+5,R-4.5]):y.push([A+5,R-7,L])}let S=new rn(s.trunkGeo,g,M.length),E=new rn(s.crownGeo,m,M.length),w=new re,C=new kt;M.forEach(([A,R],N)=>{w.makeScale(.85,.95,.85).setPosition(A,s.hAt(A,R),R),S.setMatrixAt(N,w),E.setMatrixAt(N,w),C.setHSL(.25,.45,.27+N%3*.03),E.setColorAt(N,C),s.colliders.add({ax:A-.25,az:R,bx:A+.25,bz:R,y0:s.hAt(A,R)-1,y1:s.hAt(A,R)+3,kind:"w",tag:null},A-.3,R-.3,A+.3,R+.3)}),S.castShadow=E.castShadow=!0,S.frustumCulled=E.frustumCulled=!1,e.add(S,E);let _=new Zt({color:2961201}),b=new Qe({color:16769712});b.userData.bulb=!0,Ja.push(b);for(let[A,R]of v){let N=s.hAt(A,R),L=new Lt(new Oe(.07,.1,4.2,6),_);L.position.set(A,N+2.1,R),e.add(L);let D=new Lt(new Zn(.3,8,6),b);D.position.set(A,N+4.3,R),e.add(D)}for(let[A,R,N]of y)l(1.9,.45,.6,9071176,A,s.hAt(A,R)+.25,R,Math.PI/2-N,o());for(let A=0;A+1<M.length;A++){let R=[M[A][0],M[A][1]+9.3],N=[M[A+1][0],M[A+1][1]+9.3],L=Math.hypot(N[0]-R[0],N[1]-R[1]),D=Math.max(s.hAt(R[0],R[1]),s.hAt(N[0],N[1]));l(.5,.55,L+.4,10722188,(R[0]+N[0])/2,D+.2,(R[1]+N[1])/2,Math.atan2(N[0]-R[0],N[1]-R[1]))}}let d=new Qe({color:16765498,transparent:!0,opacity:.75,side:Ue});for(let x of n)for(let[g,m]of[[x.a,s.hAt(x.a[0],x.a[1])],[x.b,x.yb]]){let M=new Lt(new La(.75,1,20),d);M.rotation.x=-Math.PI/2,M.position.set(g[0],m+.08,g[1]),e.add(M)}t.add(e);let p=0;return{doors:n,guests:i,update(x,g){p=Math.max(0,p-x),u.visible=!f||f.state===4;for(let m of Ja)m.userData.bulb?m.color.setScalar(.25+2.6*g).multiply(new kt(1,.82,.55)):m.emissiveIntensity=(.75+1.1*g)*m.userData.glow;d.opacity=.5+.3*Math.sin(performance.now()/250)},tryDoor(x,g,m){if(p>0)return null;for(let M of n){let v=s.hAt(M.a[0],M.a[1]);if(Math.hypot(x-M.a[0],g-M.a[1])<1.1&&Math.abs(m-v)<2)return p=2.5,[M.b[0],M.b[1],M.yb,M.name];if(Math.hypot(x-M.b[0],g-M.b[1])<1.1&&Math.abs(m-M.yb)<2)return p=2.5,[M.a[0],M.a[1],v,M.back]}return null}}}var lo={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},zubor:{L:5.9,W:2.06,H:2.02,hood:1.55,wind:.55,rear:"estate",rr:.44,belt:1.34,clear:.52,acc:5.2,vmax:50,nick:"Zubor",acc_:"Zubra",g:"m",boxy:!0},sugga:{L:4.68,W:1.82,H:1.98,hood:1.15,wind:.32,rear:"box",rr:.41,belt:1.28,clear:.5,acc:3.2,vmax:36,nick:"Sugga",acc_:"Suggu",g:"f",boxy:!0},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},Q1=new Zt({color:3886431,name:"Windows"}),t_=new Zt({color:1381653,name:"Tire"}),e_=new Zt({color:10132898,name:"Rim"}),Ud=new Zt({color:2303014,name:"Trim"}),n_=new Zt({color:15921902,name:"Plate"});function Fd(s,t,e){let n=new Yr;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new Pa(n,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(t/2-e,0,0),i}function Od(s){let t=lo[s],{L:e,W:n,H:i,hood:r,wind:o,belt:a}=t,c=t.rr,l=t.clear||.3,h=e/2,u=new Zt({color:16777215,name:"Paint"}),f=new Le,d=t.boxy?.03:.07,p=t.boxy?a-.08:a-.2,x=t.rear==="liftback"?a+.02:a,g=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,p-.06],[h-.1,p],[h-r,a],[-h+(t.rear==="liftback"?.05:.02),x],[-h,x-.12],[-h,l+.14]],m=new Lt(Fd(g,n,d),u);f.add(m);let M=n-.16,v=h-r,y=v-o,S,E;t.rear==="hatch"?(S=-h+.32,E=-h+.08):t.rear==="liftback"?(S=-h+1.28,E=-h+.28):t.rear==="estate"?(S=-h+.14,E=-h+.04):(S=-h+.1,E=-h+.05);let w=[[E,a-.02],[v,a-.02],[y,i-.04],[S,i-.04]],C=new Lt(Fd(w,M,.04),Q1);f.add(C);let _=y-S-.12,b=new Lt(new He(M-.06,.07,_),u);b.position.set(0,i-.02,(y+S)/2),f.add(b);let A=new Lt(new He(M+.01,i-a-.06,.12),u);A.position.set(0,(i+a)/2-.03,(v+E)/2+(t.rear==="liftback"?.25:.1)),f.add(A);let R=e*.61,N=new Oe(c,c,.22,14);N.rotateZ(Math.PI/2);let L=new Oe(c*.62,c*.62,.235,10);L.rotateZ(Math.PI/2);let D=R/2+(h-r>.6?.05:0)+.05;for(let X of[D,-R/2+.05])for(let Q of[-1,1]){let at=new Lt(N,t_);at.position.set(Q*(n/2-.13),c,X);let ct=new Lt(L,e_);ct.position.copy(at.position),f.add(at,ct)}let z=new Lt(new He(n+.02,.14,e-.3),Ud);z.position.set(0,l+.07,0),f.add(z);let B=new Zt({color:14673646,name:"HeadLights"}),G=new Zt({color:9048080,name:"TailLights"}),Y=p-.1;for(let X of[-1,1]){let Q=new Lt(new He(t.boxy?.32:.38,t.boxy?.16:.11,.08),B);Q.position.set(X*(n/2-.3),Y,h-.03);let at=new Lt(new He(.3,.13,.08),G);at.position.set(X*(n/2-.22),x-.2,-h+0),f.add(Q,at)}let F=new Lt(new He(n*.42,.14,.06),Ud);F.position.set(0,Y-.02,h+0);let H=new Lt(new He(.52,.12,.03),n_);H.position.set(0,l+.22,h+.01);let rt=H.clone();rt.position.z=-h-.01,rt.position.y=l+.3;for(let X of[-1,1]){let Q=new Lt(new He(.16,.1,.12),u);Q.position.set(X*(n/2+.06),a+.08,v-.1),f.add(Q)}return f.add(F,H,rt),f.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:e,vmax:t.vmax,acc:t.acc,nick:t.nick,acc_:t.acc_,g:t.g},w:n,h:i,len:e}}function ch(s,t){if(t===Zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Qr||t===Ga){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Qr)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var $a=class extends Ri{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new mh(e)}),this.register(function(e){return new Eh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new xh(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new _h(e)}),this.register(function(e){return new ph(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new gh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Rh(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Yi.extractUrlBase(t);o=Yi.resolveURL(l,this.path)}else o=Yi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Vd){try{o[Se.KHR_BINARY_GLTF]=new Ch(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Se.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Se.KHR_MATERIALS_UNLIT:o[u]=new dh;break;case Se.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ph(r,this.dracoLoader);break;case Se.KHR_TEXTURE_TRANSFORM:o[u]=new Lh;break;case Se.KHR_MESH_QUANTIZATION:o[u]=new Ih;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function i_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fh=class{constructor(t){this.parser=t,this.name=Se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new kt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],ln);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ua(h),l.distance=u;break;case"spot":l=new cr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},dh=class{constructor(){this.name=Se.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(t,e,n){let i=[];t.color=new kt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ln),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ce))}return Promise.all(i)}},ph=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},mh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Tt(a,a)}return Promise.all(r)}},gh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new kt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ce)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},vh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new kt().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}},_h=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new kt().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ce)),Promise.all(r)}},bh=class{constructor(t){this.parser=t,this.name=Se.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},wh=class{constructor(t){this.parser=t,this.name=Se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eh=class{constructor(t){this.parser=t,this.name=Se.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Sh=class{constructor(t){this.parser=t,this.name=Se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Th=class{constructor(t){this.parser=t,this.name=Se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Ah=class{constructor(t){this.name=Se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Rh=class{constructor(t){this.name=Se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let x=new re,g=new O,m=new Ke,M=new O(1,1,1),v=new rn(p.geometry,p.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(g,m,M));for(let y in c)if(y==="_COLOR_0"){let S=c[y];v.instanceColor=new us(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);Xe.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Vd="glTF",ho=12,Bd={JSON:1313821514,BIN:5130562},Ch=class{constructor(t){this.name=Se.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Vd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ho,r=new DataView(t,ho),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Bd.JSON){let l=new Uint8Array(t,ho+o,a);this.content=n.decode(l)}else if(c===Bd.BIN){let l=ho+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Dh[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Dh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=pr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(d)},a,l,ln,f)})})}},Lh=class{constructor(){this.name=Se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Ih=class{constructor(){this.name=Se.KHR_MESH_QUANTIZATION}},Qa=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,p=t*l,x=p-l,g=-2*d+3*f,m=d-f,M=1-g,v=m-f+u;for(let y=0;y!==a;y++){let S=o[x+y+a],E=o[x+y+c]*h,w=o[p+y+a],C=o[p+y]*h;r[y]=M*S+v*E+g*w+m*C}return r}},s_=new Ke,Nh=class extends Qa{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return s_.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:tn,9729:en,9984:ea,9985:Vl,9986:Ar,9987:qn},Hd={33071:Un,33648:zr,10497:cs},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},r_={CUBICSPLINE:void 0,LINEAR:hs,STEP:$s},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function o_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),s.DefaultMaterial}function gs(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ki(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function a_(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function c_(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function l_(s){let t,e=s.extensions&&s.extensions[Se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+uh(e.attributes):t=s.indices+":"+uh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+uh(s.targets[n]);return t}function uh(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function zh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function h_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var u_=new re,Uh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new i_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new or(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return gs(r,a,i),Ki(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Se.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Yi.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=lh[i.type],a=pr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ie(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=lh[i.type],l=pr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(d&&d!==u){let m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=e.cache.get(M);v||(x=new l(a,m*d,i.count*d/h),v=new Br(x,d/h),e.cache.add(M,v)),g=new kr(v,c,f%d/h,p)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),g=new Ie(x,c,p);if(i.sparse!==void 0){let m=lh.SCALAR,M=pr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new M(o[1],v,i.sparse.count*m),E=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new Ie(g.array.slice(),g.itemSize,g.normalized));for(let w=0,C=S.length;w<C;w++){let _=S[w];if(g.setX(_,E[w*c]),c>=2&&g.setY(_,E[w*c+1]),c>=3&&g.setZ(_,E[w*c+2]),c>=4&&g.setW(_,E[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=kd[f.magFilter]||en,h.minFilter=kd[f.minFilter]||qn,h.wrapS=Hd[f.wrapS]||cs,h.wrapT=Hd[f.wrapT]||cs,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(x){let g=new hn(x);g.needsUpdate=!0,f(g)}),e.load(Yi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||h_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Se.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Se.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Se.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Wr,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Vr,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Vi}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Se.KHR_MATERIALS_UNLIT]){let u=i[Se.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new kt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ln),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ce)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ue);let h=r.alphaMode||hh.OPAQUE;if(h===hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qe&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Tt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Qe&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qe){let u=r.emissiveFactor;a.emissive=new kt().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&o!==Qe&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ce)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ki(u,r),e.associations.set(u,{materials:t}),r.extensions&&gs(i,u,r),u})}createUniqueName(t){let e=ke.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Gd(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l_(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Se.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Gd(new Ee,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?o_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],g=o[d],m,M=l[d];if(g.mode===Jn.TRIANGLES||g.mode===Jn.TRIANGLE_STRIP||g.mode===Jn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new _a(x,M):new Lt(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Jn.TRIANGLE_STRIP?m.geometry=ch(m.geometry,Ga):g.mode===Jn.TRIANGLE_FAN&&(m.geometry=ch(m.geometry,Qr));else if(g.mode===Jn.LINES)m=new ba(x,M);else if(g.mode===Jn.LINE_STRIP)m=new sr(x,M);else if(g.mode===Jn.LINE_LOOP)m=new wa(x,M);else if(g.mode===Jn.POINTS)m=new Ea(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&c_(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),Ki(m,r),g.extensions&&gs(i,m,g),e.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&gs(i,u[0],r),u[0];let f=new Le;r.extensions&&gs(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new cn(Jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ir(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ki(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new re;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ma(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],x=d.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let M=0,v=f.length;M<v;M++){let y=f[M],S=d[M],E=p[M],w=x[M],C=g[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=n._createAnimationTracks(y,S,E,w,C);if(_)for(let b=0;b<_.length;b++)m.push(_[b])}return new rr(r,void 0,m)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,u_)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new Le:l.length===1?h=l[0]:h=new Xe,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ki(h,r),r.extensions&&gs(n,h,r),r.matrix!==void 0){let u=new re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new Le;n.name&&(r.name=i.createUniqueName(n.name)),Ki(r,n),n.extensions&&gs(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Ln||f instanceof hn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];Zi[r.path]===Zi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Zi[r.path]){case Zi.weights:l=Ti;break;case Zi.rotation:l=hi;break;case Zi.position:case Zi.scale:l=Ai;break;default:switch(n.itemSize){case 1:l=Ti;break;case 2:case 3:default:l=Ai;break}break}let h=i.interpolation!==void 0?r_[i.interpolation]:hs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let p=new l(c[f]+"."+Zi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=zh(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof hi?Nh:Qa;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function f_(s,t,e){let n=t.attributes,i=new nn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let h=zh(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=zh(pr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Fn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Gd(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Dh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return De.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${De.workingColorSpace}" not supported.`),Ki(s,t),f_(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?a_(s,t.targets,e):s})}function Wd(s){let t=new Map,e=new Map,n=s.clone();return Xd(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xd(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Xd(s.children[n],t.children[n],e)}var p_=new $a,Fh=null,qd=async s=>{let t=s.split("/").pop();Fh||(Fh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let e=await Fh,n=atob(e[t]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>p_.parse(i.buffer,"",r,o))},On={cars:{},people:[]},tc={mat:null},m_=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],Yd={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},Zd=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Kd(s,t,e,n,i){try{let[r,o]=await Promise.all([fetch(s.replace(/models\/$/,"")+"cars/"+t+".json").then(S=>{if(!S.ok)throw new Error("model");return S.json()}),new Promise((S,E)=>new or().load(s.replace(/models\/$/,"")+"cars/"+t+".jpg",S,void 0,E))]),a=Uint8Array.from(atob(r.bin),S=>S.charCodeAt(0)).buffer;o.flipY=!1,o.colorSpace=Ce,o.anisotropy=4;let c=r.body,l=new Ee;l.setAttribute("position",new Ie(new Float32Array(a,c.pos[0],c.pos[1]),3)),l.setAttribute("normal",new Ie(new Int8Array(a,c.nor[0],c.nor[1]),3,!0)),l.setAttribute("uv",new Ie(new Uint16Array(a,c.uv[0],c.uv[1]),2,!0)),l.setIndex(new Ie(new Uint16Array(a,c.idx[0],c.idx[1]),1)),l.computeBoundingBox(),l.computeBoundingSphere();let h=new Le,u=new Le;u.scale.setScalar(e),h.add(u);let f=new Lt(l,new Zt({map:o,side:Ue,name:"EventBody"}));f.castShadow=!0,u.add(f);let d=r.wr||n,p=r.ww||i,x=new Oe(d,d,p,16);x.rotateZ(Math.PI/2);let g=new Oe(d*.6,d*.6,p*1.03,10);g.rotateZ(Math.PI/2);let m=new Zt({color:1250068,name:"Tire"}),M=new Zt({color:9277590,name:"Rim"});for(let S of r.wheels){let E=new Lt(x,m),w=new Lt(g,M);E.position.set(S.center[0],d,S.center[2]),w.position.copy(E.position),E.castShadow=!0,u.add(E,w)}let v=l.boundingBox,y=On.cars[t];On.cars[t]={obj:h,def:{...y.def,paint:null},w:(v.max.x-v.min.x)*e*.94,h:(v.max.y-v.min.y)*e,len:(v.max.z-v.min.z)*e,real:!0}}catch(r){console.warn("event car model",t,r&&r.message)}}async function jd(s,t){let e=[],n=0,i=Object.keys(Yd).length+Zd.length,r=()=>t&&t(++n/i);for(let[o,a]of Object.entries(Yd))e.push(qd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new nn().setFromObject(l,!0).getSize(new O),f=u.x>u.z,d=new Le,p=new Le;p.add(l),f&&(p.rotation.y=Math.PI/2),d.add(p),d.updateMatrixWorld(!0);let x=new nn().setFromObject(d,!0),g=x.max.z-x.min.z,m=a.len/g;p.scale.multiplyScalar(m),d.updateMatrixWorld(!0),x=new nn().setFromObject(d,!0);let M=x.getCenter(new O);p.position.set(-M.x,-x.min.y,-M.z),d.updateMatrixWorld(!0);let v=0,y=0;d.traverse(E=>{if(E.isMesh){E.castShadow=!0;let w=Array.isArray(E.material)?E.material:[E.material];for(let C of w)if(/head/i.test(C.name)){let _=new nn().setFromObject(E,!0);v+=_.getCenter(new O).z,y++}}}),y&&v/y<0&&(p.rotation.y+=Math.PI,p.position.x*=-1,p.position.z*=-1);let S=new nn().setFromObject(d,!0);On.cars[o]={obj:d,def:a,w:S.max.x-S.min.x,h:S.max.y-S.min.y,len:S.max.z-S.min.z},r()}));for(let o of Zd)e.push(qd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new nn().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new Le;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1)});let d={};for(let p of a.animations)d[p.name.replace(o.pre,"").toLowerCase()]=p;On.people.push({obj:f,clips:d}),r()}));await Promise.all(e);for(let o of Object.keys(lo))On.cars[o]=Od(o);await Promise.all([Kd(s,"zubor",1.05,.42,.38),Kd(s,"sugga",1.07,.345,.42)])}var g_=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],mr=class{constructor(t=-1,e=!0){let n=t>=0?On.people[t]:mn(On.people);if(this.obj=Wd(n.obj),e){let i=new kt(mn(g_));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&ye()<.6){let a=o.clone();return a.color=new kt(mn(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new Oa(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(Ha,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(Ha,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(t,e=.2,n=1){let i=this.acts[t]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,e,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},on={},ec=class{constructor(t,e){let n=On.cars[t]||On.cars.sedan;this.kind=t,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=e||mn(m_),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new kt(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new kt(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new kt(0,0,0),this.tail=o,o}return r}).map(r=>{let o=tc.mat?tc.mat(r):r;return r===this.head&&(this.head=o,o.emissive||(o.emissive=new kt(0,0,0))),r===this.tail&&(this.tail=o,o.emissive||(o.emissive=new kt(0,0,0))),o}),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(t,e,n,i){this.x=t,this.z=e,this.h=n,this.y=i.surfaceY(t,e),this.vx=this.vz=this.w=0,this.sync(i,1)}step(t,e,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=pe(this.st*l-this.steer,-t*3.5,t*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=e.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-e.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*pe(d/4,-.4,.4),o+=h*t;let p=this.len*.62,x=o*Math.tan(this.steer)/p,g=this.hb?1.6:15,m=Math.abs(x*o),M=this.hb?6:19,v=m>M?g*M/m:g;this.w+=(x*(this.hb?1.35:1)-this.w)*pe(v*t,0,1),a*=Math.exp(-(this.hb?1.4:m>M?7:18)*t),this.h=si(this.h+this.w*t);let y=Math.sin(this.h),S=Math.cos(this.h);this.vx=o*y+a*S,this.vz=o*S-a*y,this.x+=this.vx*t,this.z+=this.vz*t;let E=0;for(let w of[this.off,-this.off,0]){let C=this.x+y*w,_=this.z+S*w,b=e.collide(C,_,this.y+.3,this.r,on,Math.hypot(this.vx,this.vz),this.vx,this.vz);if(on.broke){let A=on.broke==="t"?.7:.86;this.vx*=A,this.vz*=A,this.dmg+=on.broke==="t"?9:4,this.broke=on.broke,E=Math.max(E,on.broke==="t"?7:4.5)}if(b){this.x+=on.x-C,this.z+=on.z-_;let A=this.vx*on.nx+this.vz*on.nz;A<0&&(this.vx-=1.3*A*on.nx,this.vz-=1.3*A*on.nz,this.vx*=.92,this.vz*=.92,E=Math.max(E,-A),this.w+=w*.05*A*(this.vx*on.nz-this.vz*on.nx>0?1:-1))}}this.x=pe(this.x,2,e.W-2),this.z=pe(this.z,2,e.H-2),this.impact=E,E>4&&(this.dmg+=E*1.5)}sync(t,e){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=t.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=t.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=t.surfaceY(this.x-i*.8,this.z+n*.8,r),l=t.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=pe(e*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let p=pe(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+p)}lights(t,e){this.head&&this.head.emissive.setRGB(.25+t*3.2,.24+t*2.9,.2+t*2.3),this.tail&&this.tail.emissive.setRGB(e?3.2:.35+t*1.6,0,0)}};function Jd(s,t){let e=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(t.h),r=Math.cos(t.h);if(Math.abs(s.x-t.x)>7||Math.abs(s.z-t.z)>7||Math.abs(s.y-t.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[t.off,-t.off]){let l=s.x+e*a,h=s.z+n*a,u=t.x+i*c,f=t.z+r*c,d=u-l,p=f-h,x=Math.hypot(d,p),g=s.r+t.r;if(x<g&&x>1e-4){d/=x,p/=x;let m=(g-x)/2;s.x-=d*m,s.z-=p*m,t.x+=d*m,t.z+=p*m;let M=(t.vx-s.vx)*d+(t.vz-s.vz)*p;if(M<0){let v=-M*.65;s.vx-=d*v,s.vz-=p*v,t.vx+=d*v,t.vz+=p*v,s.w+=(a>0?1:-1)*v*.05,t.w-=(c>0?1:-1)*v*.05,o=Math.max(o,-M)}}}return o}var Rn={},uo=class{constructor(t,e,n,i){this.car=t,this.w=e,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let t=this.e.b.out.filter(e=>e!==this.e.rev&&e.L>.5);this.next=t.length?mn(t):this.e.rev||null}ahead(t,e){let n=this.e,i=this.s+t;i>n.L&&this.next&&(i-=n.L,n=this.next),Mn.at(n,Math.min(i,n.L),e);let r=n.lane;return e.x+=-e.dz*r,e.z+=e.dx*r,e}project(){let t=this.car,e=this.e,n=1e9,i=this.s;for(let r=0;r<e.p.length-1;r++){let o=e.p[r][0],a=e.p[r][1],c=e.p[r+1][0],l=e.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=pe(((t.x-o)*h+(t.z-a)*u)/f,0,1),p=Math.hypot(o+h*d-t.x,a+u*d-t.z);p<n&&(n=p,i=e.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(t,e,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,Rn);let l=Rn.x,h=Rn.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let y=Math.hypot(r.x-o.x,r.z-o.z);y<30&&(l=r.x,h=r.z,u=pe(y*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let y=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),S=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),E=Math.abs(si(S-y));E>.35&&(u=Math.min(u,be(14,5.5,pe(E/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,y,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),p=Math.cos(o.h),x=99;for(let y of e){if(y===o)continue;let S=y.x-o.x,E=y.z-o.z,w=S*d+E*p;if(w<0||w>22)continue;Math.abs(S*p-E*d)<2.2&&(x=Math.min(x,w-(o.len+y.len)/2))}if(i&&this.mode!=="chase"){let y=i.x-o.x,S=i.z-o.z,E=y*d+S*p;E>0&&E<14&&Math.abs(y*p-S*d)<2&&(x=Math.min(x,E-o.len/2-.5))}x<99&&(u=Math.min(u,Math.max(0,(x-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,x<3?4:u));let g=Math.atan2(l-o.x,h-o.z),m=si(g-o.h),M=o.fwd;o.st=pe(m*2.2,-1,1),M<-.5&&(o.st=-o.st);let v=u-M;o.thr=pe(v*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=t:this.stuck=Math.max(0,this.stuck-t),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),x<4&&a<.5&&(this.honk+=t)}chooseToward(t){let e=this.e.b.out.filter(r=>r.L>.5);if(!e.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of e){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-t.x,o[1]-t.z)+(r===this.e.rev?30:0)+ye()*8;a<i&&(i=a,n=r)}this.next=n}},fo=class{constructor(t,e,n){this.p=new mr,this.w=t,this.e=e,this.s=n,this.dir=ye()<.5?1:-1,this.off=(ye()-.5)*(e.sw?.8:1.6),this.speed=1.1+ye()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),Mn.at(e,n,Rn),this.p.x=Rn.x,this.p.z=Rn.z,this.p.y=t.hAt(Rn.x,Rn.z)}get x(){return this.p.x}get z(){return this.p.z}flee(t,e){if(this.state==="down")return;this.state="flee",this.t=5+ye()*3;let n=Math.atan2(this.p.x-t,this.p.z-e)+(ye()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(t,e,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=t,this.p.vz=e,this.p.play("death",.08,n?1.6:1.1),!0)}update(t,e){let n=this.p;if(this.state==="walk"){this.s+=this.speed*t*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&ye()<.85){let h=mn(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=pe(this.s,0,i.L)}Mn.at(this.e,this.s,Rn);let r=Rn.x-Rn.dz*this.off*this.dir,o=Rn.z+Rn.dx*this.off*this.dir,a=Math.atan2(Rn.dx*this.dir,Rn.dz*this.dir);n.h+=si(a-n.h)*pe(t*6,0,1),n.x+=(r-n.x)*pe(t*4,0,1),n.z+=(o-n.z)*pe(t*4,0,1)}else if(this.state==="flee"){this.t-=t;let i=4.2;if(n.x+=Math.sin(this.fh)*i*t,n.z+=Math.cos(this.fh)*i*t,n.h+=si(this.fh-n.h)*pe(t*8,0,1),e.collide(n.x,n.z,n.y,.35,on)&&(n.x=on.x,n.z=on.z,this.fh+=(ye()<.5?1:-1)*1.2),this.t<=0){let r=e.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=mn(r),this.s=ye()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=t,n.x+=n.vx*t,n.z+=n.vz*t,n.vx*=Math.exp(-4*t),n.vz*=Math.exp(-4*t),e.collide(n.x,n.z,n.y,.3,on)&&(n.x=on.x,n.z=on.z,n.vx=n.vz=0));n.y=e.surfaceY(n.x,n.z,n.y+1),n.mixer.update(t),n.sync()}};var nc=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination);let n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}start(){if(!this.ctx||this.started)return;this.started=!0;let t=this.ctx,e=this._noiseSrc(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=t.createGain();i.gain.value=.06,e.connect(n).connect(i).connect(this.master),e.start();let r=t.createOscillator();r.type="sawtooth";let o=t.createOscillator();o.type="square";let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=t.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=t.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=t.createOscillator();f.type="triangle";let d=t.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let p=t.createOscillator(),x=t.createOscillator();p.type=x.type="square",p.frequency.value=392,x.frequency.value=494;let g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=1500;let m=t.createGain();m.gain.value=0,p.connect(g),x.connect(g),g.connect(m).connect(this.master),p.start(),x.start(),this.hornG=m}mute(t){this.master&&this.master.gain.setTargetAtTime(t||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(t,e,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(e){let c=Math.abs(e.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(e.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(e.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(e.thr)*.06,r,.08);let f=Math.sin(e.h),d=Math.cos(e.h),p=Math.abs(e.vx*d-e.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,p-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(t.t%1.2<.6?720:960,r,.03)}_burst(t,e,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+t),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+t+.05)}_tone(t,e,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(e,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(t){let e=Math.min(1,t/15);this._burst(.35+e*.4,900,.25+e*.5),this._tone(90,40,.3,.3*e)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((t,e)=>this._tone(t,t,.25,.14,"square",e*.11))}fail(){[392,330,262,196].forEach((t,e)=>this._tone(t,t*.98,.3,.14,"sawtooth",e*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(t){this.hornG&&this.hornG.gain.setTargetAtTime(t?.12:0,this.ctx.currentTime,.02)}};var ve=s=>document.querySelector(s),ic=class{constructor(t,e){this.G=t,this.mobile=e,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=ve("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",e||matchMedia("(pointer: coarse)").matches),ve("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),ve("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),ve("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),ve("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),ve("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,ve("#map").hidden=!0,this.toggleMap(this.G.world,this.G),ve("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),ve("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();ve("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(t,e){ve("#loadbar i").style.width=Math.round(t*100)+"%",e&&(ve("#loadtxt").textContent=e)}ready(){ve("#load").hidden=!0,ve("#title").hidden=!1}play(){ve("#title").hidden=!0,ve("#hud").hidden=!1,document.body.classList.add("playing")}pause(t){ve("#pause").hidden=!t}error(t){ve("#loadtxt").textContent="Chyba: "+t}toast(t){let e=ve("#toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}big(t,e,n,i=2.6){let r=ve("#big");r.querySelector("b").textContent=t,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=e||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(t,e){let n=ve("#flash");n.style.background=t,n.style.transition="none",n.style.opacity=e,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(t){if(this._hint===t)return;this._hint=t;let e=ve("#hint");e.textContent=t,e.hidden=!t||this.mobile}flashHint(){}bindTouch(t,e){this.snd=e;let n=ve("#stick"),i=ve("#stick i"),r=null,o=0,a=0,c=null,l=0,h=!1,u=52,f=78,d=ve("#touch");d.addEventListener("touchstart",g=>{e.unlock();for(let m of g.changedTouches)if(m.clientX<innerWidth*.5&&r===null){if(r=m.identifier,o=m.clientX,a=m.clientY,h=document.body.classList.contains("incar"),h){let M=n.getBoundingClientRect();o=M.left+M.width/2;let v=Math.max(-f,Math.min(f,m.clientX-o));i.style.transform=`translate(${v}px,0)`,this.stick.active=!0,this.stick.x=v/f,this.stick.y=0;continue}n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0}else c===null&&(c=m.identifier,l=m.clientX);g.preventDefault()},{passive:!1}),d.addEventListener("touchmove",g=>{for(let m of g.changedTouches)if(m.identifier===r&&h){let M=Math.max(-f,Math.min(f,m.clientX-o));i.style.transform=`translate(${M}px,0)`,this.stick.x=M/f,this.stick.y=0}else if(m.identifier===r){let M=m.clientX-o,v=m.clientY-a,y=Math.hypot(M,v);y>u&&(M*=u/y,v*=u/y),i.style.transform=`translate(${M}px,${v}px)`,this.stick.x=M/u,this.stick.y=-v/u}else m.identifier===c&&(this.look.dx+=(m.clientX-l)*.009,l=m.clientX);g.preventDefault()},{passive:!1});let p=g=>{for(let m of g.changedTouches)m.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),m.identifier===c&&(c=null)};d.addEventListener("touchend",p),d.addEventListener("touchcancel",p);let x=(g,m)=>{let M=ve(g);M.addEventListener("touchstart",y=>{e.unlock(),this.btn[m]=1,M.classList.add("dn"),y.preventDefault(),y.stopPropagation()},{passive:!1});let v=y=>{this.btn[m]=0,M.classList.remove("dn"),y.preventDefault()};M.addEventListener("touchend",v),M.addEventListener("touchcancel",v)};x("#bGas","gas"),x("#bBrake","brake"),x("#bHb","hb"),x("#bAtk","atk"),ve("#bAct").addEventListener("touchstart",g=>{e.unlock(),t.act=1,g.preventDefault(),g.stopPropagation()},{passive:!1}),ve("#bAct").addEventListener("click",()=>t.act=1)}update(t,e,n){ve("#money").textContent="\u20AC "+Math.floor(t.money).toLocaleString("sk-SK");let i="\u2605".repeat(t.wanted)+"\u2606".repeat(5-t.wanted);this._st!==i&&(this._st=i,ve("#stars").textContent=i,ve("#stars").classList.toggle("hot",t.wanted>0));let r=Math.floor(t.tod),o=Math.floor(t.tod%1*60);ve("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=t.street?t.district?t.street+" \xB7 "+t.district:t.street:t.district||"";if(this._street!==a){this._street=a;let l=ve("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=e.goalText;if(e.goal){let l=Math.hypot(e.goal.x-e.px,e.goal.z-e.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,ve("#goal").textContent=c),ve("#speed").textContent=e.speed!==null?Math.round(e.speed)+" km/h":"",ve("#hp").style.width=Math.max(0,t.hp)+"%",document.body.classList.toggle("incar",e.inCar),document.body.classList.toggle("nearcar",e.nearCar||e.inCar),ve("#bAct").textContent=e.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(e,n))}drawMini(t,e){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=t.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-t.px,-t.pz),i.imageSmoothingEnabled=!0,e.drawGround(i,t.px,t.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let p=(f-t.px)*a,x=(d-t.pz)*a,g=Math.cos(l),m=Math.sin(l);return[r/2+p*g-x*m,r/2+p*m+x*g]},u=(f,d,p,x,g)=>{let[m,M]=h(f,d),v=m-r/2,y=M-r/2,S=Math.hypot(v,y),E=r/2-8;if(S>E){if(!g)return;m=r/2+v/S*E,M=r/2+y/S*E}i.fillStyle=p,i.beginPath(),i.arc(m,M,x,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of t.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of t.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);t.goal&&u(t.goal.x,t.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-t.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(t,e){let n=ve("#map");if(!n.hidden||!t){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(ve("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=ve("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?t.H/2:900,l=Math.min(t.W-c,Math.max(c,a?a.x:t.W/2)),h=Math.min(t.H-c,Math.max(c,a?a.z:t.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),t.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(g,m,M,v)=>{o.fillStyle=M,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(g*u,m*u,v,0,7),o.fill(),o.stroke()},p=e&&e.world?window.__gtbLOC:null;if(window.__gtbLM&&window.__gtbLM(d,r),p){for(let g of p.contacts)d(g[0],g[1],"#ffcc33",r/70);for(let g of p.races)d(g[0],g[1],"#33e0ff",r/70)}let x=window.__gtbPos&&window.__gtbPos();if(x){x.goal&&d(x.goal.x,x.goal.z,"#ff4fd8",r/60),o.save(),o.translate(x.x*u,x.z*u),o.rotate(Math.PI-x.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let g=r/50;o.beginPath(),o.moveTo(0,-g),o.lineTo(g*.7,g*.8),o.lineTo(0,g*.35),o.lineTo(-g*.7,g*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var x_=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Nn=x_&&Math.min(screen.width,screen.height)<900,Oh=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",ut=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},oc=document.getElementById("c"),gr=new Or({canvas:oc,antialias:!1,powerPreference:"high-performance"});gr.setPixelRatio(1);gr.shadowMap.enabled=!0;gr.shadowMap.type=Ba;var _s,mo=[],di=!0,ys=null,Cn={zoneNow:!1,obst:()=>Ye,update(){},flash(){},maybeTaxi(){},livery(){},goalText:()=>""},Je=new ki,gn=new cn(60,1,.3,2700),ce=new ic(ut,Nn),Ve=new nc,Kt,sc=new za(12571903,5918784,1.2),Pn=new lr(16777215,3);Pn.castShadow=!0;Pn.shadow.mapSize.set(Nn?1024:2048,Nn?1024:2048);var go=75;Object.assign(Pn.shadow.camera,{left:-go,right:go,top:go,bottom:-go,near:1,far:600});Pn.shadow.bias=-.0015;Pn.shadow.normalBias=.6;Je.add(sc,Pn,Pn.target);var xs=new cr(16769712,0,55,.55,.6,1.2);Je.add(xs,xs.target);var sp={uSun:Ge.uSun,uNight:Ge.uNight,uTime:Ge.uTime},bo=new Lt(new Zn(1800,32,16),new Tn({uniforms:sp,side:pn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:bd}));bo.frustumCulled=!1;Je.add(bo);Je.fog=new ya(9085112,.0026);var rp=new Oe(1.6,1.6,26,16,1,!0);rp.translate(0,13,0);function v_(s){let t=new Lt(rp,new Tn({uniforms:{uC:{value:new kt(s)},uTime:Ge.uTime},transparent:!0,depthWrite:!1,side:Ue,blending:Ei,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return t.frustumCulled=!1,t}var In={},we={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(In[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(we.act=1),s.code==="KeyM"&&ce.toggleMap(Kt,ut),s.code==="KeyH"&&Ve.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&fp(),ut.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&up(),Ve.unlock())});addEventListener("keyup",s=>{In[s.code]=0,s.code==="KeyH"&&Ve.horn(!1)});var Zh=!1,Xh=0;oc.addEventListener("mousedown",s=>{Zh=!0,Xh=s.clientX,Ve.unlock()});addEventListener("mouseup",()=>Zh=!1);addEventListener("mousemove",s=>{Zh&&(we.camDX+=(s.clientX-Xh)*.006,Xh=s.clientX,we.camDrag=1.5)});ce.bindTouch(we,Ve);ce.onStart=()=>up();ce.onPause=()=>fp();ce.onDetail=s=>{ut.detail=s,Kh()};function y_(){let s=0,t=0;(In.KeyA||In.ArrowLeft)&&(s-=1),(In.KeyD||In.ArrowRight)&&(s+=1),(In.KeyW||In.ArrowUp)&&(t+=1),(In.KeyS||In.ArrowDown)&&(t-=1),ce.stick.active&&(s=ce.stick.x,t=ce.stick.y),we.mx=s,we.my=t,we.run=In.ShiftLeft||In.ShiftRight||ce.stick.active&&Math.hypot(ce.stick.x,ce.stick.y)>.92?1:0,we.hb=In.Space||ce.btn.hb?1:0,we.atk=In.Space||ce.btn.atk?1:0,we.gas=ce.btn.gas,we.brake=ce.btn.brake}var Ht,Ye=[],Bn=[],kn=[],Dt=null,op=[],Bh=new O;function Ms(s,t,e,n,i){let r=new ec(s,i);return r.place(t,e,n,Kt),Je.add(r.obj),Ye.push(r),r}function yo(s){let t=Ye.indexOf(s);t>=0&&Ye.splice(t,1),Je.remove(s.obj),s.siren&&(s.siren=null);let e=kn.indexOf(s);e>=0&&kn.splice(e,1)}var ap=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function __(s,t){for(let e=0;e<12;e++){let n=ye()*Math.PI*2,i=70+ye()*110,r=s+Math.sin(n)*i,o=t+Math.cos(n)*i,a=Kt.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=pe(a.s,3,a.e.L-3);Mn.at(a.e,c,Qt);let l=Qt.x-Qt.dz*a.e.lane,h=Qt.z+Qt.dx*a.e.lane;if(Ye.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-t)<55)continue;let u=Ms(mn(ap),l,h,Math.atan2(Qt.dx,Qt.dz));Cn.maybeTaxi(u),u.driver="ai",u.ai=new uo(u,Kt,a.e,c);let f=Math.min(a.e.v,9);return u.vx=Qt.dx*f,u.vz=Qt.dz*f,u}}var Qt={};function M_(s,t){for(let e=0;e<10;e++){let n=ye()*Math.PI*2,i=50+ye()*90,r=Kt.nearestEdge(s+Math.sin(n)*i,t+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=pe(r.s,4,r.e.L-4);Mn.at(r.e,o,Qt);let a=r.e.r.w/2-1.05,c=Qt.x-Qt.dz*a,l=Qt.z+Qt.dx*a;if(Ye.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-t)<40)continue;let h=Ms(mn(ap),c,l,Math.atan2(Qt.dx,Qt.dz));return h.parked=!0,h}}function cp(s,t,e){let n=Kt.pedGrid.query(s,t,70,[]);for(let i=0;i<8&&n.length;i++){let r=mn(n),o=ye()*r.L;Mn.at(r,o,Qt);let a=Math.hypot(Qt.x-s,Qt.z-t);if(a<(e?10:26)||a>72||Kt.onDeck(Qt.x,Qt.z,999)&&!r.sw)continue;let c=new fo(Kt,r,o);return Je.add(c.p.obj),Bn.push(c),c}}function b_(s){let t=Bn.indexOf(s);t>=0&&Bn.splice(t,1),Je.remove(s.p.obj)}function w_(s,t){if(di)return null;for(let e=0;e<10;e++){let n=ye()*Math.PI*2,i=90+ye()*60,r=Kt.nearestEdge(s+Math.sin(n)*i,t+Math.cos(n)*i,50);if(!r||(Mn.at(r.e,r.s,Qt),Math.hypot(Qt.x-s,Qt.z-t)<70))continue;let o=mn(["kombi","kombi","esuv","golfik"]),a=Ms(o,Qt.x,Qt.z,Math.atan2(Qt.dx,Qt.dz),"#eef0f2");return a.driver="police",a.ai=new uo(a,Kt,r.e,r.s),a.ai.mode="chase",Cn.livery(a,o==="esuv"?"pz25":"pz"),kn.push(a),a}}var ri={vy:0,punchT:0,hurtT:0};function E_(s,t){let e=lo[t],n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");i.fillStyle="#c9ccd2",i.fillRect(0,86,512,42),i.fillStyle="#ffd23a",i.fillRect(0,74,512,8),i.fillStyle="#d7263d",i.fillRect(0,82,512,6),i.fillStyle="#ffffff",i.font="800 62px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t.toUpperCase(),256,40);let r=new ii(n);r.colorSpace=Ce,r.anisotropy=4;let o=new Zt({map:r,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}),a=e.L*.5,c=a/4,l=(e.clear||.3)+c/2+.12;for(let h of[1,-1]){let u=new Lt(new ni(a,c),o);u.position.set(h*(e.W/2+.012),l,-e.L*.06),u.rotation.y=h*Math.PI/2,s.obj.add(u)}}var xo=[],S_=new He(.16,.05,.22);function qh(s,t,e){let n=Math.min(.17,(s.crushK||0)+t*.0035);if(s.crushK=n,s.obj.scale.set(1+n*.22,1-n*.5,1-n*.75),e||xo.length>70)return;let i=Math.min(8,2+Math.floor(t/3));for(let r=0;r<i;r++){let o=new Lt(S_,new Zt({color:r%3?new kt(s.paint||"#888"):2237995}));o.position.set(s.x+ye(-.8,.8),s.y+ye(.4,1.1),s.z+ye(-.8,.8)),Je.add(o),xo.push({m:o,vx:s.vx*.5+ye(-4,4),vy:ye(2.5,6),vz:s.vz*.5+ye(-4,4),t:0,r:[ye(-9,9),ye(-9,9),ye(-9,9)]})}}function T_(s){for(let t=xo.length-1;t>=0;t--){let e=xo[t];e.t+=s,e.vy-=16*s,e.m.position.x+=e.vx*s,e.m.position.y+=e.vy*s,e.m.position.z+=e.vz*s;let n=Kt.surfaceY(e.m.position.x,e.m.position.z,e.m.position.y+1)+.04;e.m.position.y<n&&(e.m.position.y=n,e.vy*=-.3,e.vx*=.6,e.vz*=.6,e.r=[0,0,0]),e.m.rotation.x+=e.r[0]*s,e.m.rotation.y+=e.r[1]*s,e.m.rotation.z+=e.r[2]*s,e.t>6&&(Je.remove(e.m),e.m.material.dispose(),xo.splice(t,1))}}function xr(s,t){Ht.x=s,Ht.z=t,Ht.y=Kt.surfaceY(s,t),Ht.sync()}function A_(s){if(s.driver==="ai"||s.driver==="police"){let e=new fo(Kt,Kt.pedEdges[0],0);e.p.x=s.x-Math.cos(s.h)*1.6,e.p.z=s.z+Math.sin(s.h)*1.6,Je.add(e.p.obj),Bn.push(e),e.flee(Ht.x,Ht.z),bs(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),Ve.shout()}else s.parked&&!s.safe&&ye()<.35&&(s.alarm=6,bs(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,Dt=s,ut.inCar=s,Ht.obj.visible=!1;let t=kn.indexOf(s);t>=0&&kn.splice(t,1),Ve.door(),ce.flashHint(""),ut.mission&&ut.mission.onEnter&&ut.mission.onEnter(s)}function vr(){let s=Dt;if(!s)return;let t=-Math.cos(s.h),e=Math.sin(s.h),n=s.x+t*1.7,i=s.z+e*1.7;Kt.collide(n,i,s.y,.4,rc)&&(n=s.x-t*1.7,i=s.z-e*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,Dt=null,ut.inCar=null,Ht.obj.visible=!0,Ht.h=s.h,xr(n,i),Ve.door()}var rc={};function bs(s,t){if(di||s<=0||ut.mode!=="play")return;ut.heat+=s;let e=pe(Math.floor(ut.heat),0,5);e>ut.wanted&&(ut.wanted=e,ce.toast("H\u013DADAN\xDD "+"\u2605".repeat(e)+(t?" \xB7 "+t:""))),ut.coolT=0}var ze={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},R_={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},C_=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],cc=(s,t)=>{let e=Kt.d.meta;return[(s-e.lon0)*e.mx,(e.lat1-t)*e.my]};function P_(s,t){let e="",n=1e9;for(let i of C_){i.p||(i.p=cc(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-t);r<n&&(n=r,e=i[2])}return e}function L_(){ze.contacts.push([ze.contact[0],ze.contact[1],"Star\xE9 Mesto"]),ze.races.push([ze.race[0],ze.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[t,e,n]of R_[s]){let[i,r]=cc(t,e),o=null,a=1e9;for(let c of Kt.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;Mn.at(l,l.L/2,Qt);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=Qt.x-Qt.dz*h,f=Qt.z+Qt.dx*h;if(Kt.hAt(u,f)<Kt.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&ze[s].push(o)}}var I_=[["Most Apollo",17.1281,48.1372,60],["Eurovea a nov\xE9 SND",17.1215,48.1405,60],["Star\xFD most",17.1167,48.1385,45],["Sad Janka Kr\xE1\u013Ea",17.109,48.1345,70],["Pr\xEDstavn\xFD most",17.139,48.134,70],["Ve\u013Ek\xFD Dra\u017Ediak",17.1195,48.1095,90],["\u0160trkoveck\xE9 jazero",17.151,48.1545,80],["Zimn\xFD pr\xEDstav",17.142,48.14,90],["Mal\xFD Dunaj vo Vrakuni",17.199,48.1425,80],["Slovnaft",17.179,48.127,160]],N_=[["Kamenn\xE9 n\xE1mestie: Prior a Hotel Kyjev",2562,1150,40],["K\xE1ce\u010Dko \u2013 terasa s v\xFDh\u013Eadom na Kyjev",2563,1116,9]],_o=(s,t,e)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-t,r[1]-e);o<i&&(i=o,n=r)}return n},ac={};window.__gtbLOC=ze;window.__gtbPos=()=>({x:Dt?Dt.x:Ht.x,z:Dt?Dt.z:Ht.z,h:Dt?Dt.h:Ht.h,goal:ut.mission?ut.mission.goal():null});function Mo(s,t,e,n){let i=ac[s];return i||(i=ac[s]=v_(n),Je.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(t,Kt.surfaceY(t,e),e),i.visible=!0,i}function bn(s){ac[s]&&(ac[s].visible=!1)}function lc(){di||(ze.contacts.forEach((s,t)=>Mo("contact"+t,s[0],s[1],"#ffcc33")),ze.races.forEach((s,t)=>Mo("race"+t,s[0],s[1],"#33e0ff")),bn("target"),bn("cp"))}function D_(){let s=null,t=Kt.edgeGrid.query(Ht.x,Ht.z,650,[]);for(let u=0;u<80&&!s&&t.length;u++){let f=mn(t).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],p=f.p[0][1],x=Math.hypot(d-Ht.x,p-Ht.z);if(x<220||x>650)continue;Mn.at(f,f.L/2,Qt);let g=f.r.w/2-1.05;s=[Qt.x-Qt.dz*g,Qt.z+Qt.dx*g,Math.atan2(Qt.dx,Qt.dz),f.r.n]}if(!s)return;let e=mn(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=mn(n),o=On.cars[e].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[e]:o.acc_},l=Ms(e,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[e]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>Dt===l?{x:ze.garage[0],z:ze.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",ce.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),bs(1,"majite\u013E vol\xE1 pol\xEDciu"),bn("target"),Mo("garage",...ze.garage,"#7dff6a"))},update(){if(!Ye.includes(l))return $d("Auto je pre\u010D.");if(l.dmg>260)return $d("Auto je na \u0161rot.");if(Dt!==l&&Mo("target",l.x,l.z,"#ff4fd8"),Dt===l&&Math.hypot(l.x-ze.garage[0],l.z-ze.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(ut.wanted?0:200);lp(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),vr(),yo(l)}}};bn("contact"),bn("race"),ut.mission=h,ce.toast("K\u0160EFT: "+h.text),Ve.blip()}function z_(){let s=Kt.nearestEdge(Ht.x,Ht.z,80);if(!s)return;let t=s.e,e=[],n={x:Ht.x,z:Ht.z},i=0;for(;e.length<8&&i++<400;){let o=t.b.out.filter(c=>c!==t.rev&&c.r.c>=1);if(!o.length)break;t=mn(o);let a=t.p[t.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<Kt.W-30&&a[1]<Kt.H-30&&(e.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(e.length<4)return ce.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:e,par:e.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];Mo("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=Dt?Dt.x:Ht.x,l=Dt?Dt.z:Ht.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,Ve.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);lp(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};bn("contact"),bn("race"),ut.mission=r,ce.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),Ve.blip()}function lp(s,t){ut.money+=t,ce.big("MISIA SPLNEN\xC1",s,"#7dff6a"),Ve.win(),ut.mission=null,bn("garage"),bn("target"),bn("cp"),setTimeout(lc,2500)}function $d(s){ce.big("MISIA ZLYHALA",s,"#ff5a4a"),ut.mission=null,bn("garage"),bn("target"),bn("cp"),setTimeout(lc,2500)}function hp(s,t,e,n){ut.mode="dead",ce.big(s,t,e,3.2),Ve.fail(),setTimeout(()=>{Dt&&vr(),ut.money=Math.max(0,Math.round(ut.money*(1-n))),ut.wanted=0,ut.heat=0,ut.hp=100;for(let i of kn.slice())yo(i);ut.mission&&(ut.mission=null,bn("garage"),bn("target"),bn("cp")),lc();{let i=Dt?Dt.x:Ht.x,r=Dt?Dt.z:Ht.z,a=Math.hypot(i-ze.hospital[0],r-ze.hospital[1])>1400?_o(ze.contacts,i,r):null,c=a?a[0]+3:ze.hospital[0],l=a?a[1]+3:ze.hospital[1];Dt&&vr(),xr(c,l),Kt.prime(c,l)}Ht.play("idle"),ut.mode="play"},3200)}async function U_(){ce.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}_s=new Nd(gr);let t=await(await fetch(Oh+"world.json")).json();ce.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),Kt=new Mn(t,Oh,{mobile:Nn}),await Kt.init(n=>ce.loading(.25+n*.15,"Staviam mesto\u2026")),Je.add(Kt.group),ut.world=Kt,L_(),ce.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await Kt.prime(...ze.start),ce.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await jd(Oh+"models/",n=>ce.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),Ht=new mr(0,!1),Je.add(Ht.obj),xr(...ze.start);try{let n=Kt.d.meta;Cn=Dd({sandbox:di,Fe:Kt,Wt:Je,Tt:Ye,Pn:Bn,Ln:kn,we:Ht,pc:()=>Dt,q:ut,Ve:ce,vt:Ve,Kn:Nn,an:Ge,Xs:ui,Ye:pe,Ge:be,Xn:si,ct:ye,en:mn,fn:xn,Zs:bs,mh:vo,Zn:ri,Yn:On,Ks:Ms,SGrid:fi,OX:n.ox,OZ:n.oz,moreLandmarks:I_.map(([i,r,o,a])=>[i,...cc(r,o),a]).concat(N_)}),tc.mat=i=>i.name==="Plate"?Cn.plateMat():Cn.gloss(i),Cn.init(),ut.x3=()=>Cn}catch(n){console.error("X3",n)}try{ys=zd(Kt,Je),ut.ven=ys}catch(n){console.error("venues",n)}if(ys)for(let[n,i,r,o]of ys.guests){let a=new mr(-1,!0);a.x=n,a.z=i,a.y=r,a.h=o,a.sync(),a.mixer.update(ye(0,3)),Je.add(a.obj),mo.push(a)}Ht.h=Math.PI,lc(),di&&(document.body.classList.add("sandbox"),ze.contacts.length=0,ze.races.length=0);let e=Kt.nearestEdge(ze.start[0],ze.start[1]+30,60);if(e){let n=pe(e.s,9,e.e.L-9);[["zubor","#14254d",-4.2],["sugga","#1c2f5e",4.4]].forEach(([r,o,a])=>{Mn.at(e.e,pe(n+a,3,e.e.L-3),Qt);let c=e.e.r.w/2-1.2,l=Ms(r,Qt.x-Qt.dz*c,Qt.z+Qt.dx*c,Math.atan2(Qt.dx,Qt.dz),o);l.parked=!0,l.safe=!0,l.keep=!0,On.cars[r].real||E_(l,r)}),Mn.at(e.e,n,Qt);let i=e.e.r.w/2+1.6;xr(Qt.x-Qt.dz*i,Qt.z+Qt.dx*i),Ht.h=Math.atan2(Qt.dz,-Qt.dx),ut.camYaw=Math.atan2(Qt.dx,Qt.dz)+Math.PI*.75}for(let n=0;n<10;n++)cp(Ht.x,Ht.z,!0);Kh(),ce.loading(1,""),ce.ready(),ut.mode="title",ut.titleCam=0,requestAnimationFrame(dp)}function up(){ut.mode==="title"&&(Ve.unlock(),Ve.start(),ut.mode="play",ce.play(),ut.camYaw=Ht.h+Math.PI)}function fp(){ut.mode!=="title"&&(ut.paused=!ut.paused,ce.pause(ut.paused),Ve.mute(ut.paused))}function Kh(){if(!_s)return;let s=ut.detail??1,t=Nn?[1.6,1.25,1][s]:[2,1.5,1][s],e=Math.min(window.devicePixelRatio||1,t),n=Math.floor(innerWidth*e),i=Math.floor(innerHeight*e);oc.width=n,oc.height=i,gr.setSize(n,i,!1),gr.setViewport(0,0,n,i);let r=_s.setSize(n,i,1,Nn?[4,0,0][s]:[4,4,0][s]);gn.aspect=r.aspect;let o=r.aspect<1;gn.fov=o?74:58,gn.updateProjectionMatrix(),ut.portrait=o}addEventListener("resize",Kh);var kh=performance.now(),Hh=0,Gh=new O,Qd=new O,tp=!1;ut.camYaw=0;function dp(s){if(requestAnimationFrame(dp),Nn&&!ut.fixedDt&&s-kh<31)return;let t=Math.min(.07,(s-kh)/1e3);if(kh=s,ut.fixedDt&&(t=ut.fixedDt),!ut.noLoop){if(ut.paused){_s.render(Je,gn);return}pp(t),_s.render(Je,gn)}}ut.step=pp;ut.cars=Ye;ut.peds=Bn;ut.police=kn;ut.pl=()=>Ht;ut.pc=()=>Dt;ut.key=(s,t)=>dispatchEvent(new KeyboardEvent(t?"keydown":"keyup",{code:s}));ut.spawn=(s,t,e,n,i)=>{let r=Ms(s,t,e,n,i);return r.parked=!0,r.keep=!0,r};ut.tp=async(s,t)=>{Dt&&vr(),await Kt.prime(s,t),xr(s,t)};ut.ll=(s,t)=>cc(s,t);ut.LOC=ze;ut.hY=(s,t)=>Kt.hAt(s,t);ut.render=()=>_s.render(Je,gn);function pp(s){if(ut.t+=s,Ge.uTime.value=ut.t,y_(),(ut.mode==="play"||ut.mode==="dead")&&(ut.tod=(ut.tod+s/40)%24),F_(),ut.mode==="title"){Kt.update(mp,gp,6),O_(s),ep(s,!1),Cn.update(s,!0);return}{let t=Dt||Ht,e=Dt?Math.min(60,Math.abs(Dt.speed)*4):0;Kt.update(t.x+Math.sin(t.h)*e,t.z+Math.cos(t.h)*e,Nn?4:6)}ut.mode==="play"?B_(s):Ht.mixer.update(s),ep(s,!0),Cn.update(s,!1),Kt.tickDebris(s),T_(s);for(let t of Ye)t.impact>4.2&&qh(t,t.impact,t!==Dt&&Math.hypot(t.x-Ht.x,t.z-Ht.z)>60),t.broke&&((t===Dt||Math.hypot(t.x-Ht.x,t.z-Ht.z)<50)&&(Ve.thud(),t===Dt&&vo(t.broke==="t"?.3:.16)),t.broke=null);if(ys){if(ys.update(s,Ge.uNight.value),mo.length&&Math.hypot(Ht.x-mo[0].x,Ht.z-mo[0].z)<160)for(let t of mo)t.mixer.update(s);if(ut.mode==="play"&&!Dt){let t=ys.tryDoor(Ht.x,Ht.z,Ht.y);t&&(xr(t[0],t[1]),ce.toast(t[3]))}}if(Z_(s),ut.mission&&ut.mode==="play"&&ut.mission.update(s),!di&&!ut.mission&&ut.mode==="play"){let t=Dt?Dt.x:Ht.x,e=Dt?Dt.z:Ht.z,n=_o(ze.contacts,t,e),i=_o(ze.races,t,e);n&&Math.hypot(t-n[0],e-n[1])<4?D_():i&&Math.hypot(t-i[0],e-i[1])<6&&z_()}if(K_(s),ut.dbgCam){let t=ut.dbgCam;gn.position.set(t[0],t[1],t[2]),gn.lookAt(t[3],t[4],t[5]),bo.position.copy(gn.position),jh(t[3],t[5])}j_(s),Ve.update(ut,Dt,kn,gn)}function F_(){let s=ut.tod,t=Math.sin((s-6.2)/12*Math.PI)*.95,e=(s-6.2)/12*Math.PI+Math.PI/2,n=new O(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)).normalize();sp.uSun.value.copy(n);let i=gd(pe((.04-n.y)/.16,0,1));Ge.uNight.value=i;let r=pe(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;Pn.color.setRGB(1,be(.95,.62,r),be(.88,.38,r)),Pn.intensity=o*be(3.2,2.2,r)*pe(n.y*6,0,1),sc.color.setRGB(be(.12,be(.75,.9,r),o),be(.16,be(.85,.65,r),o),be(.32,be(1,.6,r),o)),sc.groundColor.setRGB(be(.05,.42,o),be(.05,.36,o),be(.07,.3,o)),sc.intensity=be(.7,1.15,o),i>.5&&(Pn.intensity=.35*i,Pn.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),ut.sunDir=n;let a=new kt().setRGB(be(.03,be(.62,.85,r),o),be(.04,be(.72,.5,r),o),be(.08,be(.85,.36,r),o));if(Je.fog.color.copy(a),Je.fog.density=be(.002,Nn?.0014:9e-4,o),Kt.lampHeadMat.color.setRGB(be(.5,3,i),be(.45,2.4,i),be(.35,1.5,i)),Kt.ufoRing&&Kt.ufoRing.material.color.setRGB(be(.6,3,i),be(.5,2.2,i),be(.3,1.2,i)),Kt.glowMats)for(let c of Kt.glowMats)c.emissiveIntensity=(c.userData.day||0)+i*(c.userData.k||1.4);_s.exposure.value=be(1,1.55,i)}var mp=1804,gp=1476;function O_(s){ut.titleCam+=s*.035;let t=mp,e=gp,n=ut.titleCam+2.2;gn.position.set(t+Math.sin(n)*330,Kt.hAt(t,e)+95,e+Math.cos(n)*330),gn.lookAt(t,Kt.hAt(t,e)+20,e),jh(t,e),bo.position.copy(gn.position)}function jh(s,t){let e=ut.sunDir||new O(0,1,0),n=go*2/Pn.shadow.mapSize.x;s=Math.round(s/n)*n,t=Math.round(t/n)*n;let i=Kt.hAt(s,t);Pn.target.position.set(s,i,t),Pn.position.set(s+e.x*250,i+e.y*250,t+e.z*250),Pn.target.updateMatrixWorld()}function B_(s){if(we.act)if(we.act=0,Dt)Dt.speed<6&&vr();else{let r=Yh(3.6);r&&A_(r)}if(Dt){let r=Dt,o=we.my;we.gas&&(o=1),we.brake&&(o=-1),r.thr=o,r.st=-we.mx,r.hb=we.hb,Ht.x=r.x,Ht.z=r.z,Ht.y=r.y,r.alarm>0&&(r.alarm-=s),ce.hint("");return}let t=Ht,e=Math.min(1,Math.hypot(we.mx,we.my));if(ri.punchT>0&&(ri.punchT-=s),we.atk&&ri.punchT<=0&&(ri.punchT=.7,t.play("punch",.08,1.4),setTimeout(()=>k_(),220)),e>.08&&ri.punchT<=.25){let r=Math.atan2(we.mx,we.my),o=ut.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=we.run?5.2:.9+.75*e;t.h+=si(o-t.h)*pe(s*10,0,1),t.x+=a*l*s,t.z+=c*l*s,t.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else ri.punchT<=.25&&t.play("idle",.25);Kt.collide(t.x,t.z,t.y,.35,rc)&&(t.x=rc.x,t.z=rc.z);for(let r of Ye){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=t.x-(r.x+o*c),h=t.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){t.x+=l/u*(f-u),t.z+=h/u*(f-u);let d=r.speed;d>6&&ri.hurtT<=0&&(ut.hp-=d*2.2,ri.hurtT=1,Ve.crash(d*.5),ce.flash("#ff2a2a",.35))}}}ri.hurtT>0&&(ri.hurtT-=s),t.x=pe(t.x,2,Kt.W-2),t.z=pe(t.z,2,Kt.H-2);let n=Kt.surfaceY(t.x,t.z,t.y+.8);t.y+=(n-t.y)*pe(s*14,0,1),t.y<Kt.water-1.2&&(ut.hp=0),t.mixer.update(s),t.sync(),ut.hp<=0&&hp("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=Yh(3.6);ce.hint(i?Nn?"NAST\xDAP":"[E] nast\xFAp":"")}function Yh(s){let t=null,e=s;for(let n of Ye){let i=Math.hypot(n.x-Ht.x,n.z-Ht.z);i<e&&n.speed<7&&n.burn===void 0&&(e=i,t=n)}return t}function k_(){let s=Math.sin(Ht.h),t=Math.cos(Ht.h);for(let e of Bn){let n=e.x-Ht.x,i=e.z-Ht.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*t)/(r||1)>.3){Ve.punch(),e.hp--,e.hp<=0?(e.knock(s*2,t*2,!1),ut.money+=Math.floor(ye()*30)+5):e.flee(Ht.x,Ht.z);for(let o of Bn)o!==e&&Math.hypot(o.x-e.x,o.z-e.z)<18&&o.flee(Ht.x,Ht.z);bs(.34,"bitka");return}}Ve.whoosh()}function ep(s,t){let e=Dt?Dt.x:Ht.x,n=Dt?Dt.z:Ht.z;if(Hh-=s,Hh<=0){Hh=.35;let a=Nn?14:22,c=Nn?10:16,l=Math.round((Nn?16:26)*(Cn.zoneNow?1.6:1)),h=0,u=0;for(let f of Ye)f.driver==="ai"?h++:f.parked&&u++;h<a&&__(e,n),u<c&&M_(e,n),Bn.length<l&&cp(e,n,!1);for(let f of Ye.slice())f===Dt||f.keep||f.driver==="police"||Math.hypot(f.x-e,f.z-n)>230&&yo(f);for(let f of Bn.slice())(Math.hypot(f.x-e,f.z-n)>105||f.state==="down"&&f.t<0)&&b_(f)}let i=ut.t;for(let a of Ye)a.ai&&a.driver!=="police"&&a.ai.update(s,Cn.obst(),i,Dt?null:Ht,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of Ye){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,Kt,Ye),c.impact>5&&c===Dt&&(Ve.crash(c.impact),vo(c.impact*.02))}for(let c=0;c<Ye.length;c++)for(let l=c+1;l<Ye.length;l++){let h=Ye[c],u=Ye[l],f=Jd(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,f>3&&(qh(h,f),qh(u,f,!0)),h===Dt||u===Dt))){Ve.crash(f),vo(f*.025);let d=h===Dt?u:h;d.driver==="police"&&bs(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of Ye){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(Kt,s),a.lights(Ge.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar&&Cn.flash(a),a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),V_(a),Ve.boom(),a===Dt&&(vr(),ut.hp-=60,ce.flash("#ff8a2a",.6));for(let c of Bn)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==Dt&&!a.keep)){yo(a);break}}for(let a of Bn)if(a.update(s,Kt),a.state!=="down")for(let c of Ye){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,p=f*h+d*u,x=f*u-d*h;if(Math.abs(p)<c.len/2+.3&&Math.abs(x)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),Ve.thud(),c===Dt&&(bs(1,"zrazen\xFD chodec"),vo(.15));for(let g of Bn)g!==a&&Math.hypot(g.x-a.x,g.z-a.z)<25&&g.flee(a.x,a.z)}else c===Dt&&p>0&&p<9+l*.4&&Math.abs(x)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}Y_(s)}var H_=new He(.6,.6,.6),G_=new Qe({color:16777215,transparent:!0,blending:Ei,depthWrite:!1}),xp=220,Pi=new rn(H_,G_,xp);Pi.frustumCulled=!1;Pi.count=0;Je.add(Pi);var po=[];function V_(s){op.push({car:s,t:0})}var np=new re,W_=new Ke,X_=new O,q_=new O,ip=new kt;function Y_(s){for(let e of op)if(!(!Ye.includes(e.car)||e.car.burn<-18))for(let n=0;n<3;n++)po.length<xp&&po.push({x:e.car.x+(ye()-.5)*2,y:e.car.y+1.2,z:e.car.z+(ye()-.5)*3,vy:2+ye()*3,t:0,life:.6+ye()*.9});let t=0;for(let e=po.length-1;e>=0;e--){let n=po[e];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){po.splice(e,1);continue}let i=n.t/n.life;np.compose(q_.set(n.x,n.y,n.z),W_,X_.setScalar(1+i*1.5)),Pi.setMatrixAt(t,np),ip.setRGB(be(4,.3,i),be(1.8,.25,i),be(.3,.22,i)),Pi.setColorAt(t,ip),t++}Pi.count=t,Pi.instanceMatrix.needsUpdate=!0,Pi.instanceColor&&(Pi.instanceColor.needsUpdate=!0)}var Vh=0;function Z_(s){if(di){ut.wanted=0,ut.heat=0,ut.hp=100;return}let t=Dt?Dt.x:Ht.x,e=Dt?Dt.z:Ht.z,n=[0,1,2,3,4,6][ut.wanted];Vh-=s,kn.length<n&&Vh<=0&&(w_(t,e),Vh=3);let i=!1;for(let r of kn.slice()){if(!r.ai)continue;r.ai.update(s,Cn.obst(),ut.t,null,{x:t,z:e});let o=Math.hypot(r.x-t,r.z-e);o<80&&(i=!0),(o>320||ut.wanted===0&&o>90)&&yo(r)}if(ut.wanted>0?(ut.coolT=(ut.coolT||0)+s*(i?.25:1),ut.coolT>22&&(ut.wanted--,ut.heat=ut.wanted,ut.coolT=0,ce.toast(ut.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(ut.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):ut.heat=Math.max(0,ut.heat-s*.02),ut.wanted>0&&ut.mode==="play"){let r=!1;for(let a of kn)Math.hypot(a.x-t,a.z-e)<(Dt?7.5:6)&&a.speed<6&&(r=!0);let o=Dt?Dt.speed<1.5:!0;ut.bustT=r&&o?(ut.bustT||0)+s:0,ut.bustT>(Dt?2.5:1.2)&&(ut.bustT=0,hp("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var vs=0;function vo(s){vs=Math.min(.6,vs+s)}function K_(s){let t=ut.portrait;we.camDrag>0&&(we.camDrag-=s),ce.look.dx&&(we.camDX+=ce.look.dx,ce.look.dx=0,we.camDrag=1.5);let e,n,i,r,o,a;if(Dt){let d=Dt,x=d.fwd<-2?d.h:d.h+Math.PI;we.camDrag>0?ut.camYaw+=we.camDX:ut.camYaw+=si(x-ut.camYaw)*pe(s*3.2,0,1),we.camDX=0,r=(t?11.5:8.6)+pe(d.speed*.09,0,4),o=t?4.6:3.3,e=d.x,i=d.z,n=d.y+1.3,a=2.2}else we.camDrag>0?ut.camYaw+=we.camDX:Math.hypot(we.mx,we.my)>.2&&we.my>-.3&&(ut.camYaw+=si(Ht.h+Math.PI-ut.camYaw)*pe(s*1.4,0,1)),we.camDX=0,r=t?6.8:5,o=t?2.9:2.1,e=Ht.x,i=Ht.z,n=Ht.y+1.45,a=1;let c=e+Math.sin(ut.camYaw)*r,l=i+Math.cos(ut.camYaw)*r,h=Kt.rayHit(e,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=e+(c-e)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),Kt.surfaceY(c,l,n+5)+1.2);Bh.set(c,u,l),tp||(Gh.copy(Bh),tp=!0),Gh.lerp(Bh,pe(s*(Dt?6:8),0,1));let f=Dt?t?9:4:t?4.5:1.5;if(Qd.set(e-Math.sin(ut.camYaw)*f,n+a*.4+(t?.6:0),i-Math.cos(ut.camYaw)*f),gn.position.copy(Gh),vs>0&&(gn.position.x+=(ye()-.5)*vs,gn.position.y+=(ye()-.5)*vs,vs=Math.max(0,vs-s*1.5)),gn.lookAt(Qd),bo.position.copy(gn.position),jh(e,i),Dt&&Ge.uNight.value>.2){let d=Dt;xs.intensity=60*Ge.uNight.value,xs.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),xs.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),xs.target.updateMatrixWorld()}else xs.intensity=0}var Wh=0;function j_(s){Wh-=s;let t=Dt?Dt.x:Ht.x,e=Dt?Dt.z:Ht.z;Wh<=0&&(Wh=.25,ut.street=Kt.streetAt(t,e)||(Kt.onDeck(t,e,(Dt||Ht).y+1)?"Most":""),ut.district=P_(t,e));let n=null;ut.mission&&(n=ut.mission.goal()),ce.update(ut,{px:t,pz:e,h:Dt?Dt.h:Ht.h,yaw:ut.camYaw,speed:Dt?Dt.speed*3.6:null,goal:n,goalText:ut.mission?ut.mission.text:di?"Vo\u013En\xE1 jazda po Bratislave"+Cn.goalText():"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body"+Cn.goalText(),markers:[...(di?[]:[_o(ze.contacts,t,e)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!ut.mission})),...(di?[]:[_o(ze.races,t,e)]).filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!ut.mission}))],police:kn.map(i=>({x:i.x,z:i.z})),inCar:!!Dt,nearCar:!Dt&&!!Yh(3.6)},Kt)}U_().catch(s=>{console.error(s),ce.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
