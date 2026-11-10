(()=>{var Yd=Object.create;var Ih=Object.defineProperty;var Zd=Object.getOwnPropertyDescriptor;var Kd=Object.getOwnPropertyNames;var jd=Object.getPrototypeOf,Jd=Object.prototype.hasOwnProperty;var $d=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Qd=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Kd(t))!Jd.call(s,i)&&i!==e&&Ih(s,i,{get:()=>t[i],enumerable:!(n=Zd(t,i))||n.enumerable});return s};var tp=(s,t,e)=>(e=s!=null?Yd(jd(s)):{},Qd(t||!s||!s.__esModule?Ih(e,"default",{value:s,enumerable:!0}):e,s));var Zf=$d((hM,Dl)=>{"use strict";Dl.exports=ba;Dl.exports.default=ba;function ba(s,t,e){e=e||2;var n=t&&t.length,i=n?t[0]*e:s.length,r=Xf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=ny(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(var g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Nr(r,o,e,a,c,d,0),o}function Xf(s,t,e,n,i){var r,o;if(i===Il(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Wf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wf(r,s[r],s[r+1],o);return o&&Sa(o,o.next)&&(Fr(o),o=o.next),o}function qi(s,t){if(!s)return s;t||(t=s);var e=s,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(s,t,e,n,i,r,o){if(s){!o&&r&&ay(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Qv(s,n,i,r):$v(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Fr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ty(qi(s),t,e),Nr(s,t,e,n,i,r,2)):o===2&&ey(s,t,e,n,i,r):Nr(qi(s),t,e,n,i,r,1);break}}}}function $v(s){var t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;for(var i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Xs(i,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qv(s,t,e,n){var i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Pl(d,g,t,e,n),v=Pl(x,m,t,e,n),_=s.prevZ,y=s.nextZ;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Xs(a,h,c,u,l,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Xs(a,h,c,u,l,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Xs(a,h,c,u,l,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Xs(a,h,c,u,l,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ty(s,t,e){var n=s;do{var i=n.prev,r=n.next.next;!Sa(i,r)&&qf(i,n,n.next,r)&&Ur(i,r)&&Ur(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fr(n),Fr(n.next),n=s=r),n=n.next}while(n!==s);return qi(n)}function ey(s,t,e,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){var c=Yf(o,a);o=qi(o,o.next),c=qi(c,c.next),Nr(o,t,e,n,i,r,0),Nr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ny(s,t,e,n){var i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Xf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ly(l));for(i.sort(iy),r=0;r<i.length;r++)e=sy(i[r],e);return e}function iy(s,t){return s.x-t.x}function sy(s,t){var e=ry(s,t);if(!e)return t;var n=Yf(e,s);return qi(n,n.next),qi(e,e.next)}function ry(s,t){var e=t,n=s.x,i=s.y,r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>r&&(r=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Xs(i<h?n:r,i,l,h,i<h?r:n,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(n-e.x),Ur(e,s)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&oy(o,e)))&&(o=e,u=f)),e=e.next;while(e!==c);return o}function oy(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function ay(s,t,e,n){var i=s;do i.z===0&&(i.z=Pl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cy(i)}function cy(s){var t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Pl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ly(s){var t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Xs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function hy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uy(s,t)&&(Ur(s,t)&&Ur(t,s)&&fy(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||Sa(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Sa(s,t){return s.x===t.x&&s.y===t.y}function qf(s,t,e,n){var i=Ma(Ae(s,t,e)),r=Ma(Ae(s,t,n)),o=Ma(Ae(e,n,s)),a=Ma(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&ya(s,e,t)||r===0&&ya(s,n,t)||o===0&&ya(e,s,n)||a===0&&ya(e,t,n))}function ya(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ma(s){return s>0?1:s<0?-1:0}function uy(s,t){var e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&qf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ur(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function fy(s,t){var e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Yf(s,t){var e=new Ll(s.i,s.x,s.y),n=new Ll(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wf(s,t,e,n){var i=new Ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ll(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ba.deviation=function(s,t,e,n){var i=t&&t.length,r=i?t[0]*e:s.length,o=Math.abs(Il(s,0,r,e));if(i)for(var a=0,c=t.length;a<c;a++){var l=t[a]*e,h=a<c-1?t[a+1]*e:s.length;o-=Math.abs(Il(s,l,h,e))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,g=n[a+2]*e;u+=Math.abs((s[f]-s[g])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[g+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Il(s,t,e,n){for(var i=0,r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}ba.flatten=function(s){for(var t=s[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<t;o++)e.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,e.holes.push(n))}return e}});var _l="160";var ep=0,Dh=1,np=2;var da=1,ip=2,ii=3,Vn=0,tn=1,Oe=2;var vi=0,bs=1,pr=2,Nh=3,Uh=4,sp=5,Ui=100,rp=101,op=102,Fh=103,Oh=104,ap=200,cp=201,lp=202,hp=203,Tc=204,Ac=205,up=206,fp=207,dp=208,pp=209,mp=210,gp=211,xp=212,_p=213,vp=214,yp=0,Mp=1,bp=2,To=3,Sp=4,Ep=5,wp=6,Tp=7,vl=0,Ap=1,Rp=2,yi=0,Cp=1,Pp=2,Lp=3,Ip=4,Dp=5,Np=6,zh="attached",Up="detached",vf=300,ws=301,Ts=302,Rc=303,Cc=304,pa=306,ki=1e3,xn=1001,mr=1002,ve=1003,Ao=1004;var or=1005;var De=1006,yl=1007;var On=1008;var Fn=1009,Fp=1010,Op=1011,Ml=1012,yf=1013,xi=1014,ri=1015,Hi=1016,Mf=1017,bf=1018,Oi=1020,zp=1021,En=1023,Bp=1024,kp=1025,zi=1026,As=1027,Hp=1028,Sf=1029,Gp=1030,Ef=1031,wf=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Bh=35840,kh=35841,Hh=35842,Gh=35843,Tf=36196,Vh=37492,Wh=37496,Xh=37808,qh=37809,Yh=37810,Zh=37811,Kh=37812,jh=37813,Jh=37814,$h=37815,Qh=37816,tu=37817,eu=37818,nu=37819,iu=37820,su=37821,Za=36492,ru=36494,ou=36495,Vp=36283,au=36284,cu=36285,lu=36286,ma=2200,Wp=2201,Xp=2202,Rs=2300,Gi=2301,Ka=2302,gs=2400,xs=2401,Ro=2402,bl=2500,qp=2501,Af=0,ga=1,Ir=2,Rf=3e3,Bi=3001,Yp=3200,Zp=3201,Sl=0,Kp=1,Qe="",ge="srgb",ze="srgb-linear",El="display-p3",xa="display-p3-linear",Co="linear",_e="srgb",Po="rec709",Lo="p3";var Qi=7680;var hu=519,jp=512,Jp=513,$p=514,Cf=515,Qp=516,tm=517,em=518,nm=519,Pc=35044;var Cs="300 es",Lc=1035,oi=2e3,Io=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,ar=Math.PI/180,Ps=180/Math.PI;function wn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function wl(s,t){return(s%t+t)%t}function im(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function sm(s,t,e){return s!==t?(e-s)/(t-s):0}function cr(s,t,e){return(1-e)*s+e*t}function rm(s,t,e,n){return cr(s,t,1-Math.exp(-e*n))}function om(s,t=1){return t-Math.abs(wl(s,t*2)-t)}function am(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function lm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hm(s,t){return s+Math.random()*(t-s)}function um(s){return s*(.5-Math.random())}function fm(s){s!==void 0&&(uu=s);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dm(s){return s*ar}function pm(s){return s*Ps}function Ic(s){return(s&s-1)===0&&s!==0}function mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Do(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Pf={DEG2RAD:ar,RAD2DEG:Ps,generateUUID:wn,clamp:Ue,euclideanModulo:wl,mapLinear:im,inverseLerp:sm,lerp:cr,damp:rm,pingpong:om,smoothstep:am,smootherstep:cm,randInt:lm,randFloat:hm,randFloatSpread:um,seededRandom:fm,degToRad:dm,radToDeg:pm,isPowerOfTwo:Ic,ceilPowerOfTwo:mm,floorPowerOfTwo:Do,setQuaternionFromProperEuler:gm,normalize:he,denormalize:Gn},ot=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],_=i[4],y=i[7],T=i[2],b=i[5],E=i[8];return r[0]=o*x+a*v+c*T,r[3]=o*m+a*_+c*b,r[6]=o*p+a*y+c*E,r[1]=l*x+h*v+u*T,r[4]=l*m+h*_+u*b,r[7]=l*p+h*y+u*E,r[2]=f*x+d*v+g*T,r[5]=f*m+d*_+g*b,r[8]=f*p+d*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ja=new te;function Lf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xm(){let s=gr("canvas");return s.style.display="block",s}var fu={};function lr(s){s in fu||(fu[s]=!0,console.warn(s))}var du=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pu=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[ze]:{transfer:Co,primaries:Po,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:_e,primaries:Po,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xa]:{transfer:Co,primaries:Lo,toReference:s=>s.applyMatrix3(pu),fromReference:s=>s.applyMatrix3(du)},[El]:{transfer:_e,primaries:Lo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(pu),fromReference:s=>s.applyMatrix3(du).convertLinearToSRGB()}},_m=new Set([ze,xa]),re={enabled:!0,_workingColorSpace:ze,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_m.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Zr[t].toReference,i=Zr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Zr[s].primaries},getTransfer:function(s){return s===Qe?Co:Zr[s].transfer}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ja(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ts,No=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=gr("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vm=0,Uo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($a(i[o].image)):r.push($a(i[o]))}else r=$a(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function $a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ym=0,Be=class s extends ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=xn,i=xn,r=De,o=On,a=En,c=Fn,l=s.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=wn(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bi?ge:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Bi:Rf}set encoding(t){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bi?ge:Qe}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=vf;Be.DEFAULT_ANISOTROPY=1;var oe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(d+1)/2,T=(p+1)/2,b=(h+f)/4,E=(u+x)/4,L=(g+m)/4;return _>y&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=E/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=L/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=E/r,i=L/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bi?ge:Qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fo=class extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nc=class extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=class extends _n{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},qe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),b=Math.atan2(T,p*v);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let y=a*v;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new P,mu=new qe,ke=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),jr.subVectors(this.max,Qs),es.subVectors(t.a,Qs),ns.subVectors(t.b,Qs),is.subVectors(t.c,Qs),fi.subVectors(ns,es),di.subVectors(is,ns),Pi.subVectors(es,is);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!tc(e,es,ns,is,jr)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,es,ns,is,jr))?!1:(Jr.crossVectors(fi,di),e=[Jr.x,Jr.y,Jr.z],tc(e,es,ns,is,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Jn=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,Kr=new ke,es=new P,ns=new P,is=new P,fi=new P,di=new P,Pi=new P,Qs=new P,jr=new P,Jr=new P,Li=new P;function tc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Li.fromArray(s,r);let a=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Mm=new ke,tr=new P,ec=new P,vn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ec)),this.expandByPoint(tr.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new P,nc=new P,$r=new P,pi=new P,ic=new P,Qr=new P,sc=new P,Ls=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nc.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=pi.dot(this.direction),c=-pi.dot($r),l=pi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nc).addScaledVector($r,f),d}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,r){ic.subVectors(e,t),Qr.subVectors(n,t),sc.crossVectors(ic,Qr);let o=this.direction.dot(sc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let c=a*this.direction.dot(Qr.crossVectors(pi,Qr));if(c<0)return null;let l=a*this.direction.dot(ic.cross(pi));if(l<0||c+l>o)return null;let h=-a*pi.dot(sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,x,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bm,t,Sm)}lookAt(t,e,n){let i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),mi.crossVectors(n,mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),mi.crossVectors(n,mn)),mi.normalize(),to.crossVectors(mn,mi),i[0]=mi.x,i[4]=to.x,i[8]=mn.x,i[1]=mi.y,i[5]=to.y,i[9]=mn.y,i[2]=mi.z,i[6]=to.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],T=n[15],b=i[0],E=i[4],L=i[8],M=i[12],S=i[1],N=i[5],D=i[9],H=i[13],C=i[2],U=i[6],O=i[10],Y=i[14],K=i[3],V=i[7],G=i[11],q=i[15];return r[0]=o*b+a*S+c*C+l*K,r[4]=o*E+a*N+c*U+l*V,r[8]=o*L+a*D+c*O+l*G,r[12]=o*M+a*H+c*Y+l*q,r[1]=h*b+u*S+f*C+d*K,r[5]=h*E+u*N+f*U+d*V,r[9]=h*L+u*D+f*O+d*G,r[13]=h*M+u*H+f*Y+d*q,r[2]=g*b+x*S+m*C+p*K,r[6]=g*E+x*N+m*U+p*V,r[10]=g*L+x*D+m*O+p*G,r[14]=g*M+x*H+m*Y+p*q,r[3]=v*b+_*S+y*C+T*K,r[7]=v*E+_*N+y*U+T*V,r[11]=v*L+_*D+y*O+T*G,r[15]=v*M+_*H+y*Y+T*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,_=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,y=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,T=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,b=e*v+n*_+i*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=v*E,t[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*E,t[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*E,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,t[4]=_*E,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*E,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*E,t[8]=y*E,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*E,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*E,t[12]=T*E,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*E,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=c*l,_=c*h,y=c*u,T=n.x,b=n.y,E=n.z;return i[0]=(1-(x+p))*T,i[1]=(d+y)*T,i[2]=(g-_)*T,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+_)*E,i[9]=(m-v)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ss.set(i[0],i[1],i[2]).length(),o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);let l=1/r,h=1/o,u=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===oi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Io)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=oi){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h,g,x;if(a===oi)g=(o+r)*u,x=-2*u;else if(a===Io)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new P,Nn=new Gt,bm=new P(0,0,0),Sm=new P(1,1,1),mi=new P,to=new P,mn=new P,gu=new Gt,xu=new qe,zo=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zo.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Em=0,_u=new P,rs=new qe,Qn=new Gt,eo=new P,er=new P,wm=new P,Tm=new qe,vu=new P(1,0,0),yu=new P(0,1,0),Mu=new P(0,0,1),Am={type:"added"},Rm={type:"removed"},we=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new zo,n=new qe,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new te}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(er,eo,this.up):Qn.lookAt(eo,er,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Qn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Am)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rm)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new P,ti=new P,rc=new P,ei=new P,os=new P,as=new P,bu=new P,oc=new P,ac=new P,cc=new P,no=!1,_s=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Un.subVectors(i,e),ti.subVectors(n,e),rc.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(ti),c=Un.dot(rc),l=ti.dot(ti),h=ti.dot(rc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,n,i,r,o,a,c){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),ti.subVectors(t,e),Un.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;os.subVectors(i,n),as.subVectors(r,n),oc.subVectors(t,n);let c=os.dot(oc),l=as.dot(oc);if(c<=0&&l<=0)return e.copy(n);ac.subVectors(t,i);let h=os.dot(ac),u=as.dot(ac);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(os,o);cc.subVectors(t,r);let d=os.dot(cc),g=as.dot(cc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(as,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return bu.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(bu,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},io={h:0,s:0,l:0};function lc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=wl(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return re.fromWorkingColorSpace($e.copy(this),t),Math.round(Ue($e.r*255,0,255))*65536+Math.round(Ue($e.g*255,0,255))*256+Math.round(Ue($e.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ge){re.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(io);let n=cr(gi.h,io.h,e),i=cr(gi.s,io.s,e),r=cr(gi.l,io.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new yt;yt.NAMES=If;var Cm=0,fn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=bs,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ze=class extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new P,so=new ot,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}};var ko=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ho=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Pm=0,Sn=new Gt,hc=new we,cs=new P,gn=new ke,nr=new ke,Xe=new P,xe=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?Ho:ko)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(gn.min,nr.min),gn.expandByPoint(Xe),Xe.addVectors(gn.max,nr.max),gn.expandByPoint(Xe)):(gn.expandByPoint(nr.min),gn.expandByPoint(nr.max))}gn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xe.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(t,l),Xe.add(cs)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new P,h[S]=new P;let u=new P,f=new P,d=new P,g=new ot,x=new ot,m=new ot,p=new P,v=new P;function _(S,N,D){u.fromArray(i,S*3),f.fromArray(i,N*3),d.fromArray(i,D*3),g.fromArray(o,S*2),x.fromArray(o,N*2),m.fromArray(o,D*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let H=1/(x.x*m.y-m.x*x.y);isFinite(H)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(H),v.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(H),l[S].add(p),l[N].add(p),l[D].add(p),h[S].add(v),h[N].add(v),h[D].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,N=y.length;S<N;++S){let D=y[S],H=D.start,C=D.count;for(let U=H,O=H+C;U<O;U+=3)_(n[U+0],n[U+1],n[U+2])}let T=new P,b=new P,E=new P,L=new P;function M(S){E.fromArray(r,S*3),L.copy(E);let N=l[S];T.copy(N),T.sub(E.multiplyScalar(E.dot(N))).normalize(),b.crossVectors(L,N);let H=b.dot(h[S])<0?-1:1;c[S*4]=T.x,c[S*4+1]=T.y,c[S*4+2]=T.z,c[S*4+3]=H}for(let S=0,N=y.length;S<N;++S){let D=y[S],H=D.start,C=D.count;for(let U=H,O=H+C;U<O;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new Gt,Ii=new Ls,ro=new vn,Eu=new P,ls=new P,hs=new P,us=new P,uc=new P,oo=new P,ao=new ot,co=new ot,lo=new ot,wu=new P,Tu=new P,Au=new P,ho=new P,uo=new P,Dt=class extends we{constructor(t=new xe,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(uc.fromBufferAttribute(u,t),o?oo.addScaledVector(uc,h):oo.addScaledVector(uc.sub(e),h))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(ro.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ro,Eu)===null||Ii.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=_;y<T;y+=3){let b=a.getX(y),E=a.getX(y+1),L=a.getX(y+2);i=fo(this,p,t,n,l,h,u,b,E,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=fo(this,o,t,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=_;y<T;y+=3){let b=y,E=y+1,L=y+2;i=fo(this,p,t,n,l,h,u,b,E,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,y=m+2;i=fo(this,o,t,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Lm(s,t,e,n,i,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Vn,a),c===null)return null;uo.copy(a),uo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(uo);return l<e.near||l>e.far?null:{distance:l,point:uo.clone(),object:s}}function fo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ls),s.getVertexPosition(c,hs),s.getVertexPosition(l,us);let h=Lm(s,t,e,n,ls,hs,us,ho);if(h){i&&(ao.fromBufferAttribute(i,a),co.fromBufferAttribute(i,c),lo.fromBufferAttribute(i,l),h.uv=_s.getInterpolation(ho,ls,hs,us,ao,co,lo,new ot)),r&&(ao.fromBufferAttribute(r,a),co.fromBufferAttribute(r,c),lo.fromBufferAttribute(r,l),h.uv1=_s.getInterpolation(ho,ls,hs,us,ao,co,lo,new ot),h.uv2=h.uv1),o&&(wu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,c),Au.fromBufferAttribute(o,l),h.normal=_s.getInterpolation(ho,ls,hs,us,wu,Tu,Au,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};_s.getNormal(ls,hs,us,u.normal),h.face=u}return h}var Te=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(x,m,p,v,_,y,T,b,E,L,M){let S=y/E,N=T/L,D=y/2,H=T/2,C=b/2,U=E+1,O=L+1,Y=0,K=0,V=new P;for(let G=0;G<O;G++){let q=G*N-H;for(let et=0;et<U;et++){let z=et*S-D;V[x]=z*v,V[m]=q*_,V[p]=C,l.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),u.push(et/E),u.push(1-G/L),Y+=1}}for(let G=0;G<L;G++)for(let q=0;q<E;q++){let et=f+q+U*G,z=f+q+U*(G+1),W=f+(q+1)+U*(G+1),tt=f+(q+1)+U*G;c.push(et,z,tt),c.push(z,W,tt),K+=6}a.addGroup(d,K,M),d+=K,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=Is(s[e]);for(let i in n)t[i]=n[i]}return t}function Im(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Df(s){return s.getRenderTarget()===null?s.outputColorSpace:re.workingColorSpace}var Dm={clone:Is,merge:an},Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ds=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fe=class extends Ds{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,Uc=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(fs,ds,t,e);i.layers=this.layers,this.add(i);let r=new Fe(fs,ds,t,e);r.layers=this.layers,this.add(r);let o=new Fe(fs,ds,t,e);o.layers=this.layers,this.add(o);let a=new Fe(fs,ds,t,e);a.layers=this.layers,this.add(a);let c=new Fe(fs,ds,t,e);c.layers=this.layers,this.add(c);let l=new Fe(fs,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends Be{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fc=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bi?ge:Qe),this.texture=new Go(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Te(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:vi});r.uniforms.tEquirect.value=e;let o=new Dt(i,r),a=e.minFilter;return e.minFilter===On&&(e.minFilter=De),new Uc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},fc=new P,Fm=new P,Om=new te,si=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fc.subVectors(n,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Om.getNormalMatrix(t),i=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new vn,po=new P,xr=class{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,o=new si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+o,f+h,m+g,y+v).normalize(),n[3].setComponents(c-o,f-h,m-g,y-v).normalize(),n[4].setComponents(c-a,f-u,m-x,y-_).normalize(),e===oi)n[5].setComponents(c+a,f+u,m+x,y+_).normalize();else if(e===Io)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(po.x=i.normal.x>0?t.max.x:t.min.x,po.y=i.normal.y>0?t.max.y:t.min.y,po.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zm(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var _r=class s extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let _=0;_<l;_++){let y=_*u-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,y=v+l*(p+1),T=v+1+l*(p+1),b=v+1+l*p;d.push(_,y,b),d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
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
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Qm=`#ifdef USE_BUMPMAP
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
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
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`
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
}`,xg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
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
}`,Ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lg=`uniform bool receiveShadow;
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
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
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
#endif`,zg=`struct PhysicalMaterial {
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
}`,Bg=`
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ox=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,cx=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
}`,fx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Bm,alphahash_pars_fragment:km,alphamap_fragment:Hm,alphamap_pars_fragment:Gm,alphatest_fragment:Vm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:Zm,begin_vertex:Km,beginnormal_vertex:jm,bsdfs:Jm,iridescence_fragment:$m,bumpmap_pars_fragment:Qm,clipping_planes_fragment:tg,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:sg,color_pars_fragment:rg,color_pars_vertex:og,color_vertex:ag,common:cg,cube_uv_reflection_fragment:lg,defaultnormal_vertex:hg,displacementmap_pars_vertex:ug,displacementmap_vertex:fg,emissivemap_fragment:dg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:xg,envmap_common_pars_fragment:_g,envmap_pars_fragment:vg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Ig,envmap_vertex:Mg,fog_vertex:bg,fog_pars_vertex:Sg,fog_fragment:Eg,fog_pars_fragment:wg,gradientmap_pars_fragment:Tg,lightmap_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Lg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ng,lights_phong_fragment:Ug,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:zg,lights_fragment_begin:Bg,lights_fragment_maps:kg,lights_fragment_end:Hg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:Yg,map_particle_fragment:Zg,map_particle_pars_fragment:Kg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Jg,morphcolor_vertex:$g,morphnormal_vertex:Qg,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:x0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:b0,shadowmask_pars_fragment:S0,skinbase_vertex:E0,skinning_pars_vertex:w0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:I0,transmission_pars_fragment:D0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:F0,worldpos_vertex:O0,background_vert:z0,background_frag:B0,backgroundCube_vert:k0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:Z0,equirect_frag:K0,linedashed_vert:j0,linedashed_frag:J0,meshbasic_vert:$0,meshbasic_frag:Q0,meshlambert_vert:tx,meshlambert_frag:ex,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:cx,meshphysical_frag:lx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:fx,points_frag:dx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:xx},ut={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Hn={basic:{uniforms:an([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:an([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new yt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:an([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:an([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:an([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new yt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:an([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:an([ut.points,ut.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:an([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:an([ut.common,ut.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:an([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:an([ut.sprite,ut.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:an([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:an([ut.lights,ut.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Hn.physical={uniforms:an([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var mo={r:0,b:0,g:0};function _x(s,t,e,n,i,r,o){let a=new yt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===pa)?(h===void 0&&(h=new Dt(new Te(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Is(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=re.getTransfer(_.colorSpace)!==_e,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Dt(new _r(2,2),new yn({name:"BackgroundMaterial",uniforms:Is(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(mo,Df(s)),n.buffers.color.setClear(mo.r,mo.g,mo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function vx(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(C,U,O,Y,K){let V=!1;if(o){let G=x(Y,O,U);l!==G&&(l=G,d(l.object)),V=p(C,Y,O,K),V&&v(C,Y,O,K)}else{let G=U.wireframe===!0;(l.geometry!==Y.id||l.program!==O.id||l.wireframe!==G)&&(l.geometry=Y.id,l.program=O.id,l.wireframe=G,V=!0)}K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,L(C,U,O,Y),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,U,O){let Y=O.wireframe===!0,K=a[C.id];K===void 0&&(K={},a[C.id]=K);let V=K[U.id];V===void 0&&(V={},K[U.id]=V);let G=V[Y];return G===void 0&&(G=m(f()),V[Y]=G),G}function m(C){let U=[],O=[],Y=[];for(let K=0;K<i;K++)U[K]=0,O[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:Y,object:C,attributes:{},index:null}}function p(C,U,O,Y){let K=l.attributes,V=U.attributes,G=0,q=O.getAttributes();for(let et in q)if(q[et].location>=0){let W=K[et],tt=V[et];if(tt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),W===void 0||W.attribute!==tt||tt&&W.data!==tt.data)return!0;G++}return l.attributesNum!==G||l.index!==Y}function v(C,U,O,Y){let K={},V=U.attributes,G=0,q=O.getAttributes();for(let et in q)if(q[et].location>=0){let W=V[et];W===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));let tt={};tt.attribute=W,W&&W.data&&(tt.data=W.data),K[et]=tt,G++}l.attributes=K,l.attributesNum=G,l.index=Y}function _(){let C=l.newAttributes;for(let U=0,O=C.length;U<O;U++)C[U]=0}function y(C){T(C,0)}function T(C,U){let O=l.newAttributes,Y=l.enabledAttributes,K=l.attributeDivisors;O[C]=1,Y[C]===0&&(s.enableVertexAttribArray(C),Y[C]=1),K[C]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,U),K[C]=U)}function b(){let C=l.newAttributes,U=l.enabledAttributes;for(let O=0,Y=U.length;O<Y;O++)U[O]!==C[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function E(C,U,O,Y,K,V,G){G===!0?s.vertexAttribIPointer(C,U,O,K,V):s.vertexAttribPointer(C,U,O,Y,K,V)}function L(C,U,O,Y){if(n.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let K=Y.attributes,V=O.getAttributes(),G=U.defaultAttributeValues;for(let q in V){let et=V[q];if(et.location>=0){let z=K[q];if(z===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),z!==void 0){let W=z.normalized,tt=z.itemSize,at=e.get(z);if(at===void 0)continue;let ft=at.buffer,At=at.type,Ft=at.bytesPerElement,Et=n.isWebGL2===!0&&(At===s.INT||At===s.UNSIGNED_INT||z.gpuType===yf);if(z.isInterleavedBufferAttribute){let kt=z.data,I=kt.stride,lt=z.offset;if(kt.isInstancedInterleavedBuffer){for(let Q=0;Q<et.locationSize;Q++)T(et.location+Q,kt.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let Q=0;Q<et.locationSize;Q++)y(et.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Q=0;Q<et.locationSize;Q++)E(et.location+Q,tt/et.locationSize,At,W,I*Ft,(lt+tt/et.locationSize*Q)*Ft,Et)}else{if(z.isInstancedBufferAttribute){for(let kt=0;kt<et.locationSize;kt++)T(et.location+kt,z.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let kt=0;kt<et.locationSize;kt++)y(et.location+kt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let kt=0;kt<et.locationSize;kt++)E(et.location+kt,tt/et.locationSize,At,W,tt*Ft,tt/et.locationSize*kt*Ft,Et)}}else if(G!==void 0){let W=G[q];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(et.location,W);break;case 3:s.vertexAttrib3fv(et.location,W);break;case 4:s.vertexAttrib4fv(et.location,W);break;default:s.vertexAttrib1fv(et.location,W)}}}}b()}function M(){D();for(let C in a){let U=a[C];for(let O in U){let Y=U[O];for(let K in Y)g(Y[K].object),delete Y[K];delete U[O]}delete a[C]}}function S(C){if(a[C.id]===void 0)return;let U=a[C.id];for(let O in U){let Y=U[O];for(let K in Y)g(Y[K].object),delete Y[K];delete U[O]}delete a[C.id]}function N(C){for(let U in a){let O=a[U];if(O[C.id]===void 0)continue;let Y=O[C.id];for(let K in Y)g(Y[K].object),delete Y[K];delete O[C.id]}}function D(){H(),h=!0,l!==c&&(l=c,d(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function yx(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Mx(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||t.has("OES_texture_float"),T=_&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function bx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new si,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,_=v*4,y=p.clippingState||null;c.value=y,y=h(g,f,_,d);for(let T=0;T!==_;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Sx(s){let t=new WeakMap;function e(o,a){return a===Rc?o.mapping=ws:a===Cc&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rc||a===Cc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ns=class extends Ds{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,Ru=[.125,.215,.35,.446,.526,.582],Fi=20,dc=new Ns,Cu=new yt,pc=null,mc=0,gc=0,Ni=(1+Math.sqrt(5))/2,ps=1/Ni,Pu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ni,ps),new P(0,Ni,-ps),new P(ps,0,Ni),new P(-ps,0,Ni),new P(Ni,ps,0),new P(-Ni,ps,0)],Vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Hi,format:En,colorSpace:ze,depthBuffer:!1},i=Lu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=wx(r,t,e)}return i}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,i){let a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cu),h.toneMapping=yi,h.autoClear=!1;let d=new Ze({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Dt(new Te,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Cu),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;go(i,v*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ws||t.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pu[(i-1)%Pu.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let p=[],v=0;for(let E=0;E<Fi;++E){let L=E/x,M=Math.exp(-L*L/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let y=this._sizeLods[i],T=3*y*(i>_-vs?i-_+vs:0),b=4*(this._cubeSize-y);go(e,T,b,3*y,2*y),c.setRenderTarget(e),c.render(u,dc)}};function Ex(s){let t=[],e=[],n=[],i=s,r=s-vs+1+Ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-vs?c=Ru[o-s+vs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,L=b>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(M,x*g*b),_.set(f,m*g*b);let S=[b,b,b,b,b,b];y.set(S,p*g*b)}let T=new xe;T.setAttribute("position",new Me(v,x)),T.setAttribute("uv",new Me(_,m)),T.setAttribute("faceIndex",new Me(y,p)),t.push(T),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lu(s,t,e){let n=new _n(s,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wx(s,t,e){let n=new Float32Array(Fi),i=new P(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Iu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Du(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function Tx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Rc||c===Cc,h=c===ws||c===Ts;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Vo(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Vo(s));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ax(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rx(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let T=v[_+0],b=v[_+1],E=v[_+2];f.push(T,b,b,E,E,T)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let T=_+0,b=_+1,E=_+2;f.push(T,b,b,E,E,T)}}else return;let m=new(Lf(f)?Ho:ko)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Cx(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Px(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lx(s,t){return s[0]-t[0]}function Ix(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Dx(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new oe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let C=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],L=0;v===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let M=h.attributes.position.count*L,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*S*4*g),D=new Fo(N,M,S,g);D.type=ri,D.needsUpdate=!0;let H=L*4;for(let U=0;U<g;U++){let O=T[U],Y=b[U],K=E[U],V=M*S*4*U;for(let G=0;G<O.count;G++){let q=G*H;v===!0&&(o.fromBufferAttribute(O,G),N[V+q+0]=o.x,N[V+q+1]=o.y,N[V+q+2]=o.z,N[V+q+3]=0),_===!0&&(o.fromBufferAttribute(Y,G),N[V+q+4]=o.x,N[V+q+5]=o.y,N[V+q+6]=o.z,N[V+q+7]=0),y===!0&&(o.fromBufferAttribute(K,G),N[V+q+8]=o.x,N[V+q+9]=o.y,N[V+q+10]=o.z,N[V+q+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:D,size:new ot(M,S)},r.set(h,x),h.addEventListener("dispose",C)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let y=g[_];y[0]=_,y[1]=f[_]}g.sort(Ix);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Lx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let y=a[_],T=y[0],b=y[1];T!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),m&&h.getAttribute("morphNormal"+_)!==m[T]&&h.setAttribute("morphNormal"+_,m[T]),i[_]=b,p+=b):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Nx(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Wo=class extends Be{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:zi,h!==zi&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=xi),n===void 0&&h===As&&(n=Oi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=c!==void 0?c:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uf=new Be,Ff=new Wo(1,1);Ff.compareFunction=Cf;var Of=new Fo,zf=new Nc,Bf=new Go,Nu=[],Uu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),zu=new Float32Array(4);function Ws(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Nu[i];if(r===void 0&&(r=new Float32Array(i),Nu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _a(s,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ux(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function Bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;zu.set(n),s.uniformMatrix2fv(this.addr,!1,zu),Ge(e,n)}}function kx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ou.set(n),s.uniformMatrix3fv(this.addr,!1,Ou),Ge(e,n)}}function Hx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Fu.set(n),s.uniformMatrix4fv(this.addr,!1,Fu),Ge(e,n)}}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function qx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function Zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function Kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Ff:Uf;e.setTexture2D(t||r,i)}function Jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zf,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bf,i)}function Qx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Of,i)}function t_(s){switch(s){case 5126:return Ux;case 35664:return Fx;case 35665:return Ox;case 35666:return zx;case 35674:return Bx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Qx}}function e_(s,t){s.uniform1fv(this.addr,t)}function n_(s,t){let e=Ws(t,this.size,2);s.uniform2fv(this.addr,e)}function i_(s,t){let e=Ws(t,this.size,3);s.uniform3fv(this.addr,e)}function s_(s,t){let e=Ws(t,this.size,4);s.uniform4fv(this.addr,e)}function r_(s,t){let e=Ws(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function o_(s,t){let e=Ws(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function a_(s,t){let e=Ws(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function c_(s,t){s.uniform1iv(this.addr,t)}function l_(s,t){s.uniform2iv(this.addr,t)}function h_(s,t){s.uniform3iv(this.addr,t)}function u_(s,t){s.uniform4iv(this.addr,t)}function f_(s,t){s.uniform1uiv(this.addr,t)}function d_(s,t){s.uniform2uiv(this.addr,t)}function p_(s,t){s.uniform3uiv(this.addr,t)}function m_(s,t){s.uniform4uiv(this.addr,t)}function g_(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Uf,r[o])}function x_(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zf,r[o])}function __(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Bf,r[o])}function v_(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Of,r[o])}function y_(s){switch(s){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return c_;case 35667:case 35671:return l_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return f_;case 36294:return d_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}var Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t_(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y_(e.type)}},Bc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function Bu(s,t){s.seq.push(t),s.map[t.id]=t}function M_(s,t,e){let n=s.name,i=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),o=xc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Bu(e,l===void 0?new Oc(a,s,t):new zc(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Bc(a),Bu(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);M_(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ku(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var b_=37297,S_=0;function E_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function w_(s){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(s),n;switch(t===e?n="":t===Lo&&e===Po?n="LinearDisplayP3ToLinearSRGB":t===Po&&e===Lo&&(n="LinearSRGBToLinearDisplayP3"),s){case ze:case xa:return[n,"LinearTransferOETF"];case ge:case El:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Hu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+E_(s.getShaderSource(t),o)}else return i}function T_(s,t){let e=w_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function A_(s,t){let e;switch(t){case Cp:e="Linear";break;case Pp:e="Reinhard";break;case Lp:e="OptimizedCineon";break;case Ip:e="ACESFilmic";break;case Np:e="AgX";break;case Dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function R_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function C_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function P_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ys(s){return s!==""}function Gu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(s){return s.replace(I_,N_)}var D_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N_(s,t){let e=Yt[t];if(e===void 0){let n=D_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}var U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(s){return s.replace(U_,F_)}function F_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===da?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ip?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ts:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function k_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ap:t="ENVMAP_BLENDING_MIX";break;case Rp:t="ENVMAP_BLENDING_ADD";break}return t}function H_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=O_(e),l=z_(e),h=B_(e),u=k_(e),f=H_(e),d=e.isWebGL2?"":R_(e),g=C_(e),x=P_(r),m=i.createProgram(),p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ys).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ys).join(`
`),v.length>0&&(v+=`
`)):(p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),v=[d,Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==yi?A_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,T_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=kc(o),o=Gu(o,e),o=Vu(o,e),a=kc(a),a=Gu(a,e),a=Vu(a,e),o=Wu(o),a=Wu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Cs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=_+p+o,T=_+v+a,b=ku(i,i.VERTEX_SHADER,y),E=ku(i,i.FRAGMENT_SHADER,T);i.attachShader(m,b),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(D){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(m).trim(),C=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(E).trim(),O=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,E);else{let K=Hu(i,b,"vertex"),V=Hu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+K+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(C===""||U==="")&&(Y=!1);Y&&(D.diagnostics={runnable:O,programLog:H,vertexShader:{log:C,prefix:p},fragmentShader:{log:U,prefix:v}})}i.deleteShader(b),i.deleteShader(E),M=new Es(i,m),S=L_(i,m)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,b_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}var V_=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gc(t),e.set(t,n)),n}},Gc=class{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}};function W_(s,t,e,n,i,r,o){let a=new Bo,c=new Hc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,S,N,D,H){let C=D.fog,U=H.geometry,O=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),K=Y&&Y.mapping===pa?Y.image.height:null,V=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let G=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,q=G!==void 0?G.length:0,et=0;U.morphAttributes.position!==void 0&&(et=1),U.morphAttributes.normal!==void 0&&(et=2),U.morphAttributes.color!==void 0&&(et=3);let z,W,tt,at;if(V){let sn=Hn[V];z=sn.vertexShader,W=sn.fragmentShader}else z=M.vertexShader,W=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),at=c.getFragmentShaderID(M);let ft=s.getRenderTarget(),At=H.isInstancedMesh===!0,Ft=H.isBatchedMesh===!0,Et=!!M.map,kt=!!M.matcap,I=!!Y,lt=!!M.aoMap,Q=!!M.lightMap,ct=!!M.bumpMap,$=!!M.normalMap,Tt=!!M.displacementMap,xt=!!M.emissiveMap,A=!!M.metalnessMap,w=!!M.roughnessMap,k=M.anisotropy>0,rt=M.clearcoat>0,it=M.iridescence>0,nt=M.sheen>0,St=M.transmission>0,pt=k&&!!M.anisotropyMap,vt=rt&&!!M.clearcoatMap,Pt=rt&&!!M.clearcoatNormalMap,Wt=rt&&!!M.clearcoatRoughnessMap,st=it&&!!M.iridescenceMap,se=it&&!!M.iridescenceThicknessMap,ee=nt&&!!M.sheenColorMap,Ht=nt&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,bt=!!M.specularColorMap,qt=!!M.specularIntensityMap,ae=St&&!!M.transmissionMap,Ce=St&&!!M.thicknessMap,$t=!!M.gradientMap,ht=!!M.alphaMap,F=M.alphaTest>0,mt=!!M.alphaHash,gt=!!M.extensions,Ut=!!U.attributes.uv1,Lt=!!U.attributes.uv2,de=!!U.attributes.uv3,pe=yi;return M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(pe=s.toneMapping),{isWebGL2:h,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:W,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ft,instancing:At,instancingColor:At&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ze,map:Et,matcap:kt,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:K,aoMap:lt,lightMap:Q,bumpMap:ct,normalMap:$,displacementMap:f&&Tt,emissiveMap:xt,normalMapObjectSpace:$&&M.normalMapType===Kp,normalMapTangentSpace:$&&M.normalMapType===Sl,metalnessMap:A,roughnessMap:w,anisotropy:k,anisotropyMap:pt,clearcoat:rt,clearcoatMap:vt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Wt,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:se,sheen:nt,sheenColorMap:ee,sheenRoughnessMap:Ht,specularMap:Ct,specularColorMap:bt,specularIntensityMap:qt,transmission:St,transmissionMap:ae,thicknessMap:Ce,gradientMap:$t,opaque:M.transparent===!1&&M.blending===bs,alphaMap:ht,alphaTest:F,alphaHash:mt,combine:M.combine,mapUv:Et&&x(M.map.channel),aoMapUv:lt&&x(M.aoMap.channel),lightMapUv:Q&&x(M.lightMap.channel),bumpMapUv:ct&&x(M.bumpMap.channel),normalMapUv:$&&x(M.normalMap.channel),displacementMapUv:Tt&&x(M.displacementMap.channel),emissiveMapUv:xt&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:w&&x(M.roughnessMap.channel),anisotropyMapUv:pt&&x(M.anisotropyMap.channel),clearcoatMapUv:vt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&x(M.sheenRoughnessMap.channel),specularMapUv:Ct&&x(M.specularMap.channel),specularColorMapUv:bt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:ae&&x(M.transmissionMap.channel),thicknessMapUv:Ce&&x(M.thicknessMap.channel),alphaMapUv:ht&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Lt,vertexUv3s:de,pointsUvs:H.isPoints===!0&&!!U.attributes.uv&&(Et||ht),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:et,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===_e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oe,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:gt&&M.extensions.derivatives===!0,extensionFragDepth:gt&&M.extensions.fragDepth===!0,extensionDrawBuffers:gt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let S=g[M.type],N;if(S){let D=Hn[S];N=Dm.clone(D.uniforms)}else N=M.uniforms;return N}function T(M,S){let N;for(let D=0,H=l.length;D<H;D++){let C=l[D];if(C.cacheKey===S){N=C,++N.usedTimes;break}}return N===void 0&&(N=new G_(s,S,M,r),l.push(N)),N}function b(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:L}}function X_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function q_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function qu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||q_),n.length>1&&n.sort(f||qu),i.length>1&&i.sort(f||qu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Y_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Yu,s.set(n,[o])):i>=r.length?(o=new Yu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Z_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new yt};break;case"SpotLight":e={position:new P,direction:new P,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function K_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var j_=0;function J_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $_(s,t){let e=new Z_,n=K_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);let r=new P,o=new Gt,a=new Gt;function c(h,u){let f=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,y=0,T=0,b=0,E=0,L=0,M=0;h.sort(J_);let S=u===!0?Math.PI:1;for(let D=0,H=h.length;D<H;D++){let C=h[D],U=C.color,O=C.intensity,Y=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=U.r*O*S,d+=U.g*O*S,g+=U.b*O*S;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],O);M++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){let G=C.shadow,q=n.get(C);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.directionalShadow[x]=q,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=C.shadow.matrix,y++}i.directional[x]=V,x++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(O*S),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[p]=V;let G=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,G.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[p]=G.matrix,C.castShadow){let q=n.get(C);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=K,b++}p++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=V,v++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),V.distance=C.distance,V.decay=C.decay,C.castShadow){let G=C.shadow,q=n.get(C);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=C.shadow.matrix,T++}i.point[m]=V,m++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O*S),V.groundColor.copy(C.groundColor).multiplyScalar(O*S),i.hemi[_]=V,_++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==T||N.numSpotShadows!==b||N.numSpotMaps!==E||N.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=T,N.numSpotShadows=b,N.numSpotMaps=E,N.numLightProbes=M,i.version=j_++)}function l(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let y=h[v];if(y.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(y.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Zu(s,t){let e=new $_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Q_(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Zu(s,t),e.set(r,[c])):o>=a.length?(c=new Zu(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Vc=class extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wc=class extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function nv(s,t,e){let n=new xr,i=new ot,r=new ot,o=new oe,a=new Vc({depthPacking:Zp}),c=new Wc,l={},h=e.maxTextureSize,u={[Vn]:tn,[tn]:Vn,[Oe]:Oe},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let p=this.type;this.render=function(b,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(vi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=p!==ii&&this.type===ii,C=p===ii&&this.type!==ii;for(let U=0,O=b.length;U<O;U++){let Y=b[U],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let V=K.getFrameExtents();if(i.multiply(V),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,K.mapSize.y=r.y)),K.map===null||H===!0||C===!0){let q=this.type!==ii?{minFilter:ve,magFilter:ve}:{};K.map!==null&&K.map.dispose(),K.map=new _n(i.x,i.y,q),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();let G=K.getViewportCount();for(let q=0;q<G;q++){let et=K.getViewport(q);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),D.viewport(o),K.updateMatrices(Y,q),n=K.getFrustum(),y(E,L,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===ii&&v(K,L),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,N)};function v(b,E){let L=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _n(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,L,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,L,d,x,null)}function _(b,E,L,M){let S=null,N=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=L.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let D=S.uuid,H=E.uuid,C=l[D];C===void 0&&(C={},l[D]=C);let U=C[H];U===void 0&&(U=S.clone(),C[H]=U,E.addEventListener("dispose",T)),S=U}if(S.visible=E.visible,S.wireframe=E.wireframe,M===ii?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=s.properties.get(S);D.light=L}return S}function y(b,E,L,M,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ii)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);let H=t.update(b),C=b.material;if(Array.isArray(C)){let U=H.groups;for(let O=0,Y=U.length;O<Y;O++){let K=U[O],V=C[K.materialIndex];if(V&&V.visible){let G=_(b,V,M,S);b.onBeforeShadow(s,b,E,L,H,G,K),s.renderBufferDirect(L,null,H,G,b,K),b.onAfterShadow(s,b,E,L,H,G,K)}}}else if(C.visible){let U=_(b,C,M,S);b.onBeforeShadow(s,b,E,L,H,U,null),s.renderBufferDirect(L,null,H,U,b,null),b.onAfterShadow(s,b,E,L,H,U,null)}}let D=b.children;for(let H=0,C=D.length;H<C;H++)y(D[H],E,L,M,S)}function T(b){b.target.removeEventListener("dispose",T);for(let L in l){let M=l[L],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function iv(s,t,e){let n=e.isWebGL2;function i(){let F=!1,mt=new oe,gt=null,Ut=new oe(0,0,0,0);return{setMask:function(Lt){gt!==Lt&&!F&&(s.colorMask(Lt,Lt,Lt,Lt),gt=Lt)},setLocked:function(Lt){F=Lt},setClear:function(Lt,de,pe,Ve,sn){sn===!0&&(Lt*=Ve,de*=Ve,pe*=Ve),mt.set(Lt,de,pe,Ve),Ut.equals(mt)===!1&&(s.clearColor(Lt,de,pe,Ve),Ut.copy(mt))},reset:function(){F=!1,gt=null,Ut.set(-1,0,0,0)}}}function r(){let F=!1,mt=null,gt=null,Ut=null;return{setTest:function(Lt){Lt?Ft(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Lt){mt!==Lt&&!F&&(s.depthMask(Lt),mt=Lt)},setFunc:function(Lt){if(gt!==Lt){switch(Lt){case yp:s.depthFunc(s.NEVER);break;case Mp:s.depthFunc(s.ALWAYS);break;case bp:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case Sp:s.depthFunc(s.EQUAL);break;case Ep:s.depthFunc(s.GEQUAL);break;case wp:s.depthFunc(s.GREATER);break;case Tp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Lt}},setLocked:function(Lt){F=Lt},setClear:function(Lt){Ut!==Lt&&(s.clearDepth(Lt),Ut=Lt)},reset:function(){F=!1,mt=null,gt=null,Ut=null}}}function o(){let F=!1,mt=null,gt=null,Ut=null,Lt=null,de=null,pe=null,Ve=null,sn=null;return{setTest:function(me){F||(me?Ft(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(me){mt!==me&&!F&&(s.stencilMask(me),mt=me)},setFunc:function(me,rn,kn){(gt!==me||Ut!==rn||Lt!==kn)&&(s.stencilFunc(me,rn,kn),gt=me,Ut=rn,Lt=kn)},setOp:function(me,rn,kn){(de!==me||pe!==rn||Ve!==kn)&&(s.stencilOp(me,rn,kn),de=me,pe=rn,Ve=kn)},setLocked:function(me){F=me},setClear:function(me){sn!==me&&(s.clearStencil(me),sn=me)},reset:function(){F=!1,mt=null,gt=null,Ut=null,Lt=null,de=null,pe=null,Ve=null,sn=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,T=null,b=null,E=null,L=null,M=new yt(0,0,0),S=0,N=!1,D=null,H=null,C=null,U=null,O=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,V=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=V>=2);let q=null,et={},z=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),tt=new oe().fromArray(z),at=new oe().fromArray(W);function ft(F,mt,gt,Ut){let Lt=new Uint8Array(4),de=s.createTexture();s.bindTexture(F,de),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<gt;pe++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(mt,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(mt+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return de}let At={};At[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ft(s.DEPTH_TEST),c.setFunc(To),xt(!1),A(Dh),Ft(s.CULL_FACE),$(vi);function Ft(F){f[F]!==!0&&(s.enable(F),f[F]=!0)}function Et(F){f[F]!==!1&&(s.disable(F),f[F]=!1)}function kt(F,mt){return d[F]!==mt?(s.bindFramebuffer(F,mt),d[F]=mt,n&&(F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=mt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=mt)),!0):!1}function I(F,mt){let gt=x,Ut=!1;if(F)if(gt=g.get(mt),gt===void 0&&(gt=[],g.set(mt,gt)),F.isWebGLMultipleRenderTargets){let Lt=F.texture;if(gt.length!==Lt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let de=0,pe=Lt.length;de<pe;de++)gt[de]=s.COLOR_ATTACHMENT0+de;gt.length=Lt.length,Ut=!0}}else gt[0]!==s.COLOR_ATTACHMENT0&&(gt[0]=s.COLOR_ATTACHMENT0,Ut=!0);else gt[0]!==s.BACK&&(gt[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function lt(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let Q={[Ui]:s.FUNC_ADD,[rp]:s.FUNC_SUBTRACT,[op]:s.FUNC_REVERSE_SUBTRACT};if(n)Q[Fh]=s.MIN,Q[Oh]=s.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(Q[Fh]=F.MIN_EXT,Q[Oh]=F.MAX_EXT)}let ct={[ap]:s.ZERO,[cp]:s.ONE,[lp]:s.SRC_COLOR,[Tc]:s.SRC_ALPHA,[mp]:s.SRC_ALPHA_SATURATE,[dp]:s.DST_COLOR,[up]:s.DST_ALPHA,[hp]:s.ONE_MINUS_SRC_COLOR,[Ac]:s.ONE_MINUS_SRC_ALPHA,[pp]:s.ONE_MINUS_DST_COLOR,[fp]:s.ONE_MINUS_DST_ALPHA,[gp]:s.CONSTANT_COLOR,[xp]:s.ONE_MINUS_CONSTANT_COLOR,[_p]:s.CONSTANT_ALPHA,[vp]:s.ONE_MINUS_CONSTANT_ALPHA};function $(F,mt,gt,Ut,Lt,de,pe,Ve,sn,me){if(F===vi){p===!0&&(Et(s.BLEND),p=!1);return}if(p===!1&&(Ft(s.BLEND),p=!0),F!==sp){if(F!==v||me!==N){if((_!==Ui||b!==Ui)&&(s.blendEquation(s.FUNC_ADD),_=Ui,b=Ui),me)switch(F){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.ONE,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,T=null,E=null,L=null,M.set(0,0,0),S=0,v=F,N=me}return}Lt=Lt||mt,de=de||gt,pe=pe||Ut,(mt!==_||Lt!==b)&&(s.blendEquationSeparate(Q[mt],Q[Lt]),_=mt,b=Lt),(gt!==y||Ut!==T||de!==E||pe!==L)&&(s.blendFuncSeparate(ct[gt],ct[Ut],ct[de],ct[pe]),y=gt,T=Ut,E=de,L=pe),(Ve.equals(M)===!1||sn!==S)&&(s.blendColor(Ve.r,Ve.g,Ve.b,sn),M.copy(Ve),S=sn),v=F,N=!1}function Tt(F,mt){F.side===Oe?Et(s.CULL_FACE):Ft(s.CULL_FACE);let gt=F.side===tn;mt&&(gt=!gt),xt(gt),F.blending===bs&&F.transparent===!1?$(vi):$(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);let Ut=F.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),k(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function A(F){F!==ep?(Ft(s.CULL_FACE),F!==H&&(F===Dh?s.cullFace(s.BACK):F===np?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),H=F}function w(F){F!==C&&(K&&s.lineWidth(F),C=F)}function k(F,mt,gt){F?(Ft(s.POLYGON_OFFSET_FILL),(U!==mt||O!==gt)&&(s.polygonOffset(mt,gt),U=mt,O=gt)):Et(s.POLYGON_OFFSET_FILL)}function rt(F){F?Ft(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function it(F){F===void 0&&(F=s.TEXTURE0+Y-1),q!==F&&(s.activeTexture(F),q=F)}function nt(F,mt,gt){gt===void 0&&(q===null?gt=s.TEXTURE0+Y-1:gt=q);let Ut=et[gt];Ut===void 0&&(Ut={type:void 0,texture:void 0},et[gt]=Ut),(Ut.type!==F||Ut.texture!==mt)&&(q!==gt&&(s.activeTexture(gt),q=gt),s.bindTexture(F,mt||At[F]),Ut.type=F,Ut.texture=mt)}function St(){let F=et[q];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(F){tt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function ae(F){at.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),at.copy(F))}function Ce(F,mt){let gt=u.get(mt);gt===void 0&&(gt=new WeakMap,u.set(mt,gt));let Ut=gt.get(F);Ut===void 0&&(Ut=s.getUniformBlockIndex(mt,F.name),gt.set(F,Ut))}function $t(F,mt){let Ut=u.get(mt).get(F);h.get(mt)!==Ut&&(s.uniformBlockBinding(mt,Ut,F.__bindingPointIndex),h.set(mt,Ut))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},q=null,et={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,T=null,b=null,E=null,L=null,M=new yt(0,0,0),S=0,N=!1,D=null,H=null,C=null,U=null,O=null,tt.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ft,disable:Et,bindFramebuffer:kt,drawBuffers:I,useProgram:lt,setBlending:$,setMaterial:Tt,setFlipSided:xt,setCullFace:A,setLineWidth:w,setPolygonOffset:k,setScissorTest:rt,activeTexture:it,bindTexture:nt,unbindTexture:St,compressedTexImage2D:pt,compressedTexImage3D:vt,texImage2D:Ct,texImage3D:bt,updateUBOMapping:Ce,uniformBlockBinding:$t,texStorage2D:ee,texStorage3D:Ht,texSubImage2D:Pt,texSubImage3D:Wt,compressedTexSubImage2D:st,compressedTexSubImage3D:se,scissor:qt,viewport:ae,reset:ht}}function sv(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return d?new OffscreenCanvas(A,w):gr("canvas")}function x(A,w,k,rt){let it=1;if((A.width>rt||A.height>rt)&&(it=rt/Math.max(A.width,A.height)),it<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let nt=w?Do:Math.floor,St=nt(it*A.width),pt=nt(it*A.height);u===void 0&&(u=g(St,pt));let vt=k?g(St,pt):u;return vt.width=St,vt.height=pt,vt.getContext("2d").drawImage(A,0,0,St,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+St+"x"+pt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ic(A.width)&&Ic(A.height)}function p(A){return a?!1:A.wrapS!==xn||A.wrapT!==xn||A.minFilter!==ve&&A.minFilter!==De}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==ve&&A.minFilter!==De}function _(A){s.generateMipmap(A)}function y(A,w,k,rt,it=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt=w;if(w===s.RED&&(k===s.FLOAT&&(nt=s.R32F),k===s.HALF_FLOAT&&(nt=s.R16F),k===s.UNSIGNED_BYTE&&(nt=s.R8)),w===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(nt=s.R8UI),k===s.UNSIGNED_SHORT&&(nt=s.R16UI),k===s.UNSIGNED_INT&&(nt=s.R32UI),k===s.BYTE&&(nt=s.R8I),k===s.SHORT&&(nt=s.R16I),k===s.INT&&(nt=s.R32I)),w===s.RG&&(k===s.FLOAT&&(nt=s.RG32F),k===s.HALF_FLOAT&&(nt=s.RG16F),k===s.UNSIGNED_BYTE&&(nt=s.RG8)),w===s.RGBA){let St=it?Co:re.getTransfer(rt);k===s.FLOAT&&(nt=s.RGBA32F),k===s.HALF_FLOAT&&(nt=s.RGBA16F),k===s.UNSIGNED_BYTE&&(nt=St===_e?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function T(A,w,k){return v(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==ve&&A.minFilter!==De?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){return A===ve||A===Ao||A===or?s.NEAREST:s.LINEAR}function E(A){let w=A.target;w.removeEventListener("dispose",E),M(w),w.isVideoTexture&&h.delete(w)}function L(A){let w=A.target;w.removeEventListener("dispose",L),N(w)}function M(A){let w=n.get(A);if(w.__webglInit===void 0)return;let k=A.source,rt=f.get(k);if(rt){let it=rt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(A),Object.keys(rt).length===0&&f.delete(k)}n.remove(A)}function S(A){let w=n.get(A);s.deleteTexture(w.__webglTexture);let k=A.source,rt=f.get(k);delete rt[w.__cacheKey],o.memory.textures--}function N(A){let w=A.texture,k=n.get(A),rt=n.get(w);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(k.__webglFramebuffer[it]))for(let nt=0;nt<k.__webglFramebuffer[it].length;nt++)s.deleteFramebuffer(k.__webglFramebuffer[it][nt]);else s.deleteFramebuffer(k.__webglFramebuffer[it]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[it])}else{if(Array.isArray(k.__webglFramebuffer))for(let it=0;it<k.__webglFramebuffer.length;it++)s.deleteFramebuffer(k.__webglFramebuffer[it]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,nt=w.length;it<nt;it++){let St=n.get(w[it]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(w[it])}n.remove(w),n.remove(A)}let D=0;function H(){D=0}function C(){let A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function U(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function O(A,w){let k=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(k,A,w);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+w)}function Y(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){tt(k,A,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+w)}function K(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){tt(k,A,w);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+w)}function V(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){at(k,A,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+w)}let G={[ki]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},q={[ve]:s.NEAREST,[Ao]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[yl]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},et={[jp]:s.NEVER,[nm]:s.ALWAYS,[Jp]:s.LESS,[Cf]:s.LEQUAL,[$p]:s.EQUAL,[em]:s.GEQUAL,[Qp]:s.GREATER,[tm]:s.NOTEQUAL};function z(A,w,k){if(k?(s.texParameteri(A,s.TEXTURE_WRAP_S,G[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,G[w.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,G[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,q[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,q[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==xn||w.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,b(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==ve&&w.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===ve||w.minFilter!==or&&w.minFilter!==On||w.type===ri&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function W(A,w){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",E));let rt=w.source,it=f.get(rt);it===void 0&&(it={},f.set(rt,it));let nt=U(w);if(nt!==A.__cacheKey){it[nt]===void 0&&(it[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[nt].usedTimes++;let St=it[A.__cacheKey];St!==void 0&&(it[A.__cacheKey].usedTimes--,St.usedTimes===0&&S(w)),A.__cacheKey=nt,A.__webglTexture=it[nt].texture}return k}function tt(A,w,k){let rt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=s.TEXTURE_3D);let it=W(A,w),nt=w.source;e.bindTexture(rt,A.__webglTexture,s.TEXTURE0+k);let St=n.get(nt);if(nt.version!==St.__version||it===!0){e.activeTexture(s.TEXTURE0+k);let pt=re.getPrimaries(re.workingColorSpace),vt=w.colorSpace===Qe?null:re.getPrimaries(w.colorSpace),Pt=w.colorSpace===Qe||pt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Wt=p(w)&&m(w.image)===!1,st=x(w.image,Wt,!1,i.maxTextureSize);st=xt(w,st);let se=m(st)||a,ee=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),Ct=y(w.internalFormat,ee,Ht,w.colorSpace,w.isVideoTexture);z(rt,w,se);let bt,qt=w.mipmaps,ae=a&&w.isVideoTexture!==!0&&Ct!==Tf,Ce=St.__version===void 0||it===!0,$t=T(w,st,se);if(w.isDepthTexture)Ct=s.DEPTH_COMPONENT,a?w.type===ri?Ct=s.DEPTH_COMPONENT32F:w.type===xi?Ct=s.DEPTH_COMPONENT24:w.type===Oi?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:w.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===zi&&Ct===s.DEPTH_COMPONENT&&w.type!==Ml&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,Ht=r.convert(w.type)),w.format===As&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,w.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Oi,Ht=r.convert(w.type))),Ce&&(ae?e.texStorage2D(s.TEXTURE_2D,1,Ct,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ct,st.width,st.height,0,ee,Ht,null));else if(w.isDataTexture)if(qt.length>0&&se){ae&&Ce&&e.texStorage2D(s.TEXTURE_2D,$t,Ct,qt[0].width,qt[0].height);for(let ht=0,F=qt.length;ht<F;ht++)bt=qt[ht],ae?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,ee,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,bt.width,bt.height,0,ee,Ht,bt.data);w.generateMipmaps=!1}else ae?(Ce&&e.texStorage2D(s.TEXTURE_2D,$t,Ct,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,ee,Ht,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,st.width,st.height,0,ee,Ht,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ae&&Ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,Ct,qt[0].width,qt[0].height,st.depth);for(let ht=0,F=qt.length;ht<F;ht++)bt=qt[ht],w.format!==En?ee!==null?ae?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,st.depth,ee,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,bt.width,bt.height,st.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,st.depth,ee,Ht,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,bt.width,bt.height,st.depth,0,ee,Ht,bt.data)}else{ae&&Ce&&e.texStorage2D(s.TEXTURE_2D,$t,Ct,qt[0].width,qt[0].height);for(let ht=0,F=qt.length;ht<F;ht++)bt=qt[ht],w.format!==En?ee!==null?ae?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,ee,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Ct,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,ee,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,bt.width,bt.height,0,ee,Ht,bt.data)}else if(w.isDataArrayTexture)ae?(Ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,Ct,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ee,Ht,st.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,st.width,st.height,st.depth,0,ee,Ht,st.data);else if(w.isData3DTexture)ae?(Ce&&e.texStorage3D(s.TEXTURE_3D,$t,Ct,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ee,Ht,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,st.width,st.height,st.depth,0,ee,Ht,st.data);else if(w.isFramebufferTexture){if(Ce)if(ae)e.texStorage2D(s.TEXTURE_2D,$t,Ct,st.width,st.height);else{let ht=st.width,F=st.height;for(let mt=0;mt<$t;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ct,ht,F,0,ee,Ht,null),ht>>=1,F>>=1}}else if(qt.length>0&&se){ae&&Ce&&e.texStorage2D(s.TEXTURE_2D,$t,Ct,qt[0].width,qt[0].height);for(let ht=0,F=qt.length;ht<F;ht++)bt=qt[ht],ae?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,ee,Ht,bt):e.texImage2D(s.TEXTURE_2D,ht,Ct,ee,Ht,bt);w.generateMipmaps=!1}else ae?(Ce&&e.texStorage2D(s.TEXTURE_2D,$t,Ct,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ee,Ht,st)):e.texImage2D(s.TEXTURE_2D,0,Ct,ee,Ht,st);v(w,se)&&_(rt),St.__version=nt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function at(A,w,k){if(w.image.length!==6)return;let rt=W(A,w),it=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let nt=n.get(it);if(it.version!==nt.__version||rt===!0){e.activeTexture(s.TEXTURE0+k);let St=re.getPrimaries(re.workingColorSpace),pt=w.colorSpace===Qe?null:re.getPrimaries(w.colorSpace),vt=w.colorSpace===Qe||St===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,Wt=w.image[0]&&w.image[0].isDataTexture,st=[];for(let ht=0;ht<6;ht++)!Pt&&!Wt?st[ht]=x(w.image[ht],!1,!0,i.maxCubemapSize):st[ht]=Wt?w.image[ht].image:w.image[ht],st[ht]=xt(w,st[ht]);let se=st[0],ee=m(se)||a,Ht=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type),bt=y(w.internalFormat,Ht,Ct,w.colorSpace),qt=a&&w.isVideoTexture!==!0,ae=nt.__version===void 0||rt===!0,Ce=T(w,se,ee);z(s.TEXTURE_CUBE_MAP,w,ee);let $t;if(Pt){qt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,bt,se.width,se.height);for(let ht=0;ht<6;ht++){$t=st[ht].mipmaps;for(let F=0;F<$t.length;F++){let mt=$t[F];w.format!==En?Ht!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F,0,0,mt.width,mt.height,Ht,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F,bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F,0,0,mt.width,mt.height,Ht,Ct,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F,bt,mt.width,mt.height,0,Ht,Ct,mt.data)}}}else{$t=w.mipmaps,qt&&ae&&($t.length>0&&Ce++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,bt,st[0].width,st[0].height));for(let ht=0;ht<6;ht++)if(Wt){qt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,st[ht].width,st[ht].height,Ht,Ct,st[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,bt,st[ht].width,st[ht].height,0,Ht,Ct,st[ht].data);for(let F=0;F<$t.length;F++){let gt=$t[F].image[ht].image;qt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F+1,0,0,gt.width,gt.height,Ht,Ct,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F+1,bt,gt.width,gt.height,0,Ht,Ct,gt.data)}}else{qt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ht,Ct,st[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,bt,Ht,Ct,st[ht]);for(let F=0;F<$t.length;F++){let mt=$t[F];qt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F+1,0,0,Ht,Ct,mt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,F+1,bt,Ht,Ct,mt.image[ht])}}}v(w,ee)&&_(s.TEXTURE_CUBE_MAP),nt.__version=it.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ft(A,w,k,rt,it,nt){let St=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),vt=y(k.internalFormat,St,pt,k.colorSpace);if(!n.get(w).__hasExternalTextures){let Wt=Math.max(1,w.width>>nt),st=Math.max(1,w.height>>nt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,vt,Wt,st,w.depth,0,St,pt,null):e.texImage2D(it,nt,vt,Wt,st,0,St,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),$(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,it,n.get(k).__webglTexture,0,ct(w)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,it,n.get(k).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(A,w,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let rt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||$(w)){let it=w.depthTexture;it&&it.isDepthTexture&&(it.type===ri?rt=s.DEPTH_COMPONENT32F:it.type===xi&&(rt=s.DEPTH_COMPONENT24));let nt=ct(w);$(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,rt,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,rt,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let rt=ct(w);k&&$(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,w.width,w.height):$(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let rt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let it=0;it<rt.length;it++){let nt=rt[it],St=r.convert(nt.format,nt.colorSpace),pt=r.convert(nt.type),vt=y(nt.internalFormat,St,pt,nt.colorSpace),Pt=ct(w);k&&$(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,vt,w.width,w.height):$(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,vt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,vt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);let rt=n.get(w.depthTexture).__webglTexture,it=ct(w);if(w.depthTexture.format===zi)$(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(w.depthTexture.format===As)$(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Et(A){let w=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ft(w.__webglFramebuffer,A)}else if(k){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]=s.createRenderbuffer(),At(w.__webglDepthbuffer[rt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),At(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(A,w,k){let rt=n.get(A);w!==void 0&&ft(rt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Et(A)}function I(A){let w=A.texture,k=n.get(A),rt=n.get(w);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=w.version,o.memory.textures++);let it=A.isWebGLCubeRenderTarget===!0,nt=A.isWebGLMultipleRenderTargets===!0,St=m(A)||a;if(it){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let vt=0;vt<w.mipmaps.length;vt++)k.__webglFramebuffer[pt][vt]=s.createFramebuffer()}else k.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)k.__webglFramebuffer[pt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){let pt=A.texture;for(let vt=0,Pt=pt.length;vt<Pt;vt++){let Wt=n.get(pt[vt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&$(A)===!1){let pt=nt?w:[w];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let vt=0;vt<pt.length;vt++){let Pt=pt[vt];k.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[vt]);let Wt=r.convert(Pt.format,Pt.colorSpace),st=r.convert(Pt.type),se=y(Pt.internalFormat,Wt,st,Pt.colorSpace,A.isXRRenderTarget===!0),ee=ct(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,se,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,k.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),At(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),z(s.TEXTURE_CUBE_MAP,w,St);for(let pt=0;pt<6;pt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ft(k.__webglFramebuffer[pt][vt],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else ft(k.__webglFramebuffer[pt],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);v(w,St)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let pt=A.texture;for(let vt=0,Pt=pt.length;vt<Pt;vt++){let Wt=pt[vt],st=n.get(Wt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),z(s.TEXTURE_2D,Wt,St),ft(k.__webglFramebuffer,A,Wt,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),v(Wt,St)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,rt.__webglTexture),z(pt,w,St),a&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ft(k.__webglFramebuffer[vt],A,w,s.COLOR_ATTACHMENT0,pt,vt);else ft(k.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,pt,0);v(w,St)&&_(pt),e.unbindTexture()}A.depthBuffer&&Et(A)}function lt(A){let w=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let rt=0,it=k.length;rt<it;rt++){let nt=k[rt];if(v(nt,w)){let St=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pt=n.get(nt).__webglTexture;e.bindTexture(St,pt),_(St),e.unbindTexture()}}}function Q(A){if(a&&A.samples>0&&$(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,rt=A.height,it=s.COLOR_BUFFER_BIT,nt=[],St=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(A),vt=A.isWebGLMultipleRenderTargets===!0;if(vt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){nt.push(s.COLOR_ATTACHMENT0+Pt),A.depthBuffer&&nt.push(St);let Wt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Wt===!1&&(A.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),vt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Pt]),Wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),vt){let st=n.get(w[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,k,rt,0,0,k,rt,it,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Pt]);let Wt=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function ct(A){return Math.min(i.maxSamples,A.samples)}function $(A){let w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function xt(A,w){let k=A.colorSpace,rt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Lc||k!==ze&&k!==Qe&&(re.getTransfer(k)===_e?a===!1?t.has("EXT_sRGB")===!0&&rt===En?(A.format=Lc,A.minFilter=De,A.generateMipmaps=!1):w=No.sRGBToLinear(w):(rt!==En||it!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}this.allocateTextureUnit=C,this.resetTextureUnits=H,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=$}function rv(s,t,e){let n=e.isWebGL2;function i(r,o=Qe){let a,c=re.getTransfer(o);if(r===Fn)return s.UNSIGNED_BYTE;if(r===Mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fp)return s.BYTE;if(r===Op)return s.SHORT;if(r===Ml)return s.UNSIGNED_SHORT;if(r===yf)return s.INT;if(r===xi)return s.UNSIGNED_INT;if(r===ri)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zp)return s.ALPHA;if(r===En)return s.RGBA;if(r===Bp)return s.LUMINANCE;if(r===kp)return s.LUMINANCE_ALPHA;if(r===zi)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===Lc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hp)return s.RED;if(r===Sf)return s.RED_INTEGER;if(r===Gp)return s.RG;if(r===Ef)return s.RG_INTEGER;if(r===wf)return s.RGBA_INTEGER;if(r===Wa||r===Xa||r===qa||r===Ya)if(c===_e)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bh||r===kh||r===Hh||r===Gh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vh||r===Wh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vh)return c===_e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xh||r===qh||r===Yh||r===Zh||r===Kh||r===jh||r===Jh||r===$h||r===Qh||r===tu||r===eu||r===nu||r===iu||r===su)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$h)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tu)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eu)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nu)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===iu)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===su)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Za||r===ru||r===ou)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Za)return c===_e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ou)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vp||r===au||r===cu||r===lu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Za)return a.COMPRESSED_RED_RGTC1_EXT;if(r===au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Xc=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},ov={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qc=class extends ai{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,v=[],_=[],y=new ot,T=null,b=new Fe;b.layers.enable(1),b.viewport=new oe;let E=new Fe;E.layers.enable(2),E.viewport=new oe;let L=[b,E],M=new Xc;M.layers.enable(1),M.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=v[z];return W===void 0&&(W=new hr,v[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=v[z];return W===void 0&&(W=new hr,v[z]=W),W.getGripSpace()},this.getHand=function(z){let W=v[z];return W===void 0&&(W=new hr,v[z]=W),W.getHandSpace()};function D(z){let W=_.indexOf(z.inputSource);if(W===-1)return;let tt=v[W];tt!==void 0&&(tt.update(z.inputSource,z.frame,l||o),tt.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",C);for(let z=0;z<v.length;z++){let W=_[z];W!==null&&(_[z]=null,v[z].disconnect(W))}S=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",H),i.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let W={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new _n(d.framebufferWidth,d.framebufferHeight,{format:En,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,tt=null,at=null;x.depth&&(at=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?As:zi,tt=x.stencil?Oi:xi);let ft={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(ft),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new _n(f.textureWidth,f.textureHeight,{format:En,type:Fn,depthTexture:new Wo(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let At=t.properties.get(p);At.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(z){for(let W=0;W<z.removed.length;W++){let tt=z.removed[W],at=_.indexOf(tt);at>=0&&(_[at]=null,v[at].disconnect(tt))}for(let W=0;W<z.added.length;W++){let tt=z.added[W],at=_.indexOf(tt);if(at===-1){for(let At=0;At<v.length;At++)if(At>=_.length){_.push(tt),at=At;break}else if(_[At]===null){_[At]=tt,at=At;break}if(at===-1)break}let ft=v[at];ft&&ft.connect(tt)}}let U=new P,O=new P;function Y(z,W,tt){U.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(tt.matrixWorld);let at=U.distanceTo(O),ft=W.projectionMatrix.elements,At=tt.projectionMatrix.elements,Ft=ft[14]/(ft[10]-1),Et=ft[14]/(ft[10]+1),kt=(ft[9]+1)/ft[5],I=(ft[9]-1)/ft[5],lt=(ft[8]-1)/ft[0],Q=(At[8]+1)/At[0],ct=Ft*lt,$=Ft*Q,Tt=at/(-lt+Q),xt=Tt*-lt;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(xt),z.translateZ(Tt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let A=Ft+Tt,w=Et+Tt,k=ct-xt,rt=$+(at-xt),it=kt*Et/w*A,nt=I*Et/w*A;z.projectionMatrix.makePerspective(k,rt,it,nt,A,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;M.near=E.near=b.near=z.near,M.far=E.far=b.far=z.far,(S!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far);let W=z.parent,tt=M.cameras;K(M,W);for(let at=0;at<tt.length;at++)K(tt[at],W);tt.length===2?Y(M,b,E):M.projectionMatrix.copy(b.projectionMatrix),V(z,M,W)};function V(z,W,tt){tt===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(tt.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ps*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let G=null;function q(z,W){if(h=W.getViewerPose(l||o),g=W,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let at=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let ft=0;ft<tt.length;ft++){let At=tt[ft],Ft=null;if(d!==null)Ft=d.getViewport(At);else{let kt=u.getViewSubImage(f,At);Ft=kt.viewport,ft===0&&(t.setRenderTargetTextures(p,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(p))}let Et=L[ft];Et===void 0&&(Et=new Fe,Et.layers.enable(ft),Et.viewport=new oe,L[ft]=Et),Et.matrix.fromArray(At.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(At.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ft===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Et)}}for(let tt=0;tt<v.length;tt++){let at=_[tt],ft=v[tt];at!==null&&ft!==void 0&&ft.update(at,W,l||o)}G&&G(z,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let et=new Nf;et.setAnimationLoop(q),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}};function av(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Df(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cv(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(v,T);let b=t.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function h(v){let _=u();v.__bindingPointIndex=_;let y=s.createBuffer(),T=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,E=y.length;b<E;b++){let L=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=L.length;M<S;M++){let N=L[M];if(d(N,b,M,T)===!0){let D=N.__offset,H=Array.isArray(N.value)?N.value:[N.value],C=0;for(let U=0;U<H.length;U++){let O=H[U],Y=x(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,D+C,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,T){let b=v.value,E=_+"_"+y;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{let L=T[E];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return T[E]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(v){let _=v.uniforms,y=0,T=16;for(let E=0,L=_.length;E<L;E++){let M=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,N=M.length;S<N;S++){let D=M[S],H=Array.isArray(D.value)?D.value:[D.value];for(let C=0,U=H.length;C<U;C++){let O=H[C],Y=x(O),K=y%T;K!==0&&T-K<Y.boundary&&(y+=T-K),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Y.storage}}}let b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var vr=class{constructor(t={}){let{canvas:e=xm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let _=this,y=!1,T=0,b=0,E=null,L=-1,M=null,S=new oe,N=new oe,D=null,H=new yt(0),C=0,U=e.width,O=e.height,Y=1,K=null,V=null,G=new oe(0,0,U,O),q=new oe(0,0,U,O),et=!1,z=new xr,W=!1,tt=!1,at=null,ft=new Gt,At=new ot,Ft=new P,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return E===null?Y:1}let I=n;function lt(R,B){for(let Z=0;Z<R.length;Z++){let j=R[Z],X=e.getContext(j,B);if(X!==null)return X}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",mt,!1),I===null){let B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),I=lt(B,R),I===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,ct,$,Tt,xt,A,w,k,rt,it,nt,St,pt,vt,Pt,Wt,st,se,ee,Ht,Ct,bt,qt,ae;function Ce(){Q=new Ax(I),ct=new Mx(I,Q,t),Q.init(ct),bt=new rv(I,Q,ct),$=new iv(I,Q,ct),Tt=new Px(I),xt=new X_,A=new sv(I,Q,$,xt,ct,bt,Tt),w=new Sx(_),k=new Tx(_),rt=new zm(I,ct),qt=new vx(I,Q,rt,ct),it=new Rx(I,rt,Tt,qt),nt=new Nx(I,it,rt,Tt),ee=new Dx(I,ct,A),Wt=new bx(xt),St=new W_(_,w,k,Q,ct,qt,Wt),pt=new av(_,xt),vt=new Y_,Pt=new Q_(Q,ct),se=new _x(_,w,k,$,nt,f,c),st=new nv(_,nt,ct),ae=new cv(I,Tt,ct,$),Ht=new yx(I,Q,Tt,ct),Ct=new Cx(I,Q,Tt,ct),Tt.programs=St.programs,_.capabilities=ct,_.extensions=Q,_.properties=xt,_.renderLists=vt,_.shadowMap=st,_.state=$,_.info=Tt}Ce();let $t=new qc(_,I);this.xr=$t,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(U,O,!1))},this.getSize=function(R){return R.set(U,O)},this.setSize=function(R,B,Z=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,O=B,e.width=Math.floor(R*Y),e.height=Math.floor(B*Y),Z===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(U*Y,O*Y).floor()},this.setDrawingBufferSize=function(R,B,Z){U=R,O=B,Y=Z,e.width=Math.floor(R*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,B,Z,j){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,B,Z,j),$.viewport(S.copy(G).multiplyScalar(Y).floor())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,B,Z,j){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,B,Z,j),$.scissor(N.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){$.setScissorTest(et=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(R=!0,B=!0,Z=!0){let j=0;if(R){let X=!1;if(E!==null){let _t=E.texture.format;X=_t===wf||_t===Ef||_t===Sf}if(X){let _t=E.texture.type,wt=_t===Fn||_t===xi||_t===Ml||_t===Oi||_t===Mf||_t===bf,It=se.getClearColor(),Ot=se.getClearAlpha(),jt=It.r,Vt=It.g,Xt=It.b;wt?(d[0]=jt,d[1]=Vt,d[2]=Xt,d[3]=Ot,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=jt,g[1]=Vt,g[2]=Xt,g[3]=Ot,I.clearBufferiv(I.COLOR,0,g))}else j|=I.COLOR_BUFFER_BIT}B&&(j|=I.DEPTH_BUFFER_BIT),Z&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),vt.dispose(),Pt.dispose(),xt.dispose(),w.dispose(),k.dispose(),nt.dispose(),qt.dispose(),ae.dispose(),St.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",sn),$t.removeEventListener("sessionend",me),at&&(at.dispose(),at=null),rn.stop()};function ht(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let R=Tt.autoReset,B=st.enabled,Z=st.autoUpdate,j=st.needsUpdate,X=st.type;Ce(),Tt.autoReset=R,st.enabled=B,st.autoUpdate=Z,st.needsUpdate=j,st.type=X}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){let B=R.target;B.removeEventListener("dispose",gt),Ut(B)}function Ut(R){Lt(R),xt.remove(R)}function Lt(R){let B=xt.get(R).programs;B!==void 0&&(B.forEach(function(Z){St.releaseProgram(Z)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Z,j,X,_t){B===null&&(B=Et);let wt=X.isMesh&&X.matrixWorld.determinant()<0,It=Vd(R,B,Z,j,X);$.setMaterial(j,wt);let Ot=Z.index,jt=1;if(j.wireframe===!0){if(Ot=it.getWireframeAttribute(Z),Ot===void 0)return;jt=2}let Vt=Z.drawRange,Xt=Z.attributes.position,Le=Vt.start*jt,pn=(Vt.start+Vt.count)*jt;_t!==null&&(Le=Math.max(Le,_t.start*jt),pn=Math.min(pn,(_t.start+_t.count)*jt)),Ot!==null?(Le=Math.max(Le,0),pn=Math.min(pn,Ot.count)):Xt!=null&&(Le=Math.max(Le,0),pn=Math.min(pn,Xt.count));let We=pn-Le;if(We<0||We===1/0)return;qt.setup(X,j,It,Z,Ot);let jn,Se=Ht;if(Ot!==null&&(jn=rt.get(Ot),Se=Ct,Se.setIndex(jn)),X.isMesh)j.wireframe===!0?($.setLineWidth(j.wireframeLinewidth*kt()),Se.setMode(I.LINES)):Se.setMode(I.TRIANGLES);else if(X.isLine){let Qt=j.linewidth;Qt===void 0&&(Qt=1),$.setLineWidth(Qt*kt()),X.isLineSegments?Se.setMode(I.LINES):X.isLineLoop?Se.setMode(I.LINE_LOOP):Se.setMode(I.LINE_STRIP)}else X.isPoints?Se.setMode(I.POINTS):X.isSprite&&Se.setMode(I.TRIANGLES);if(X.isBatchedMesh)Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Se.renderInstances(Le,We,X.count);else if(Z.isInstancedBufferGeometry){let Qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ka=Math.min(Z.instanceCount,Qt);Se.renderInstances(Le,We,ka)}else Se.render(Le,We)};function de(R,B,Z){R.transparent===!0&&R.side===Oe&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,Yr(R,B,Z),R.side=Vn,R.needsUpdate=!0,Yr(R,B,Z),R.side=Oe):Yr(R,B,Z)}this.compile=function(R,B,Z=null){Z===null&&(Z=R),m=Pt.get(Z),m.init(),v.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(_._useLegacyLights);let j=new Set;return R.traverse(function(X){let _t=X.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){let It=_t[wt];de(It,Z,X),j.add(It)}else de(_t,Z,X),j.add(_t)}),v.pop(),m=null,j},this.compileAsync=function(R,B,Z=null){let j=this.compile(R,B,Z);return new Promise(X=>{function _t(){if(j.forEach(function(wt){xt.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){X(R);return}setTimeout(_t,10)}Q.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let pe=null;function Ve(R){pe&&pe(R)}function sn(){rn.stop()}function me(){rn.start()}let rn=new Nf;rn.setAnimationLoop(Ve),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(R){pe=R,$t.setAnimationLoop(R),R===null?rn.stop():rn.start()},$t.addEventListener("sessionstart",sn),$t.addEventListener("sessionend",me),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(B),B=$t.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,E),m=Pt.get(R,v.length),m.init(),v.push(m),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z.setFromProjectionMatrix(ft),tt=this.localClippingEnabled,W=Wt.init(this.clippingPlanes,tt),x=vt.get(R,p.length),x.init(),p.push(x),kn(R,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,V),this.info.render.frame++,W===!0&&Wt.beginShadows();let Z=m.state.shadowsArray;if(st.render(Z,R,B),W===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(x,R),m.setupLights(_._useLegacyLights),B.isArrayCamera){let j=B.cameras;for(let X=0,_t=j.length;X<_t;X++){let wt=j[X];Th(x,R,wt,wt.viewport)}}else Th(x,R,B);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(_,R,B),qt.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function kn(R,B,Z,j){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){j&&Ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ft);let wt=nt.update(R),It=R.material;It.visible&&x.push(R,wt,It,Z,Ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){let wt=nt.update(R),It=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ft.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ft.copy(wt.boundingSphere.center)),Ft.applyMatrix4(R.matrixWorld).applyMatrix4(ft)),Array.isArray(It)){let Ot=wt.groups;for(let jt=0,Vt=Ot.length;jt<Vt;jt++){let Xt=Ot[jt],Le=It[Xt.materialIndex];Le&&Le.visible&&x.push(R,wt,Le,Z,Ft.z,Xt)}}else It.visible&&x.push(R,wt,It,Z,Ft.z,null)}}let _t=R.children;for(let wt=0,It=_t.length;wt<It;wt++)kn(_t[wt],B,Z,j)}function Th(R,B,Z,j){let X=R.opaque,_t=R.transmissive,wt=R.transparent;m.setupLightsView(Z),W===!0&&Wt.setGlobalState(_.clippingPlanes,Z),_t.length>0&&Gd(X,_t,B,Z),j&&$.viewport(S.copy(j)),X.length>0&&qr(X,B,Z),_t.length>0&&qr(_t,B,Z),wt.length>0&&qr(wt,B,Z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Gd(R,B,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let _t=ct.isWebGL2;at===null&&(at=new _n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Hi:Fn,minFilter:On,samples:_t?4:0})),_.getDrawingBufferSize(At),_t?at.setSize(At.x,At.y):at.setSize(Do(At.x),Do(At.y));let wt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(H),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();let It=_.toneMapping;_.toneMapping=yi,qr(R,Z,j),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at);let Ot=!1;for(let jt=0,Vt=B.length;jt<Vt;jt++){let Xt=B[jt],Le=Xt.object,pn=Xt.geometry,We=Xt.material,jn=Xt.group;if(We.side===Oe&&Le.layers.test(j.layers)){let Se=We.side;We.side=tn,We.needsUpdate=!0,Ah(Le,Z,j,pn,We,jn),We.side=Se,We.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at)),_.setRenderTarget(wt),_.setClearColor(H,C),_.toneMapping=It}function qr(R,B,Z){let j=B.isScene===!0?B.overrideMaterial:null;for(let X=0,_t=R.length;X<_t;X++){let wt=R[X],It=wt.object,Ot=wt.geometry,jt=j===null?wt.material:j,Vt=wt.group;It.layers.test(Z.layers)&&Ah(It,B,Z,Ot,jt,Vt)}}function Ah(R,B,Z,j,X,_t){R.onBeforeRender(_,B,Z,j,X,_t),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(_,B,Z,j,R,_t),X.transparent===!0&&X.side===Oe&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,_.renderBufferDirect(Z,B,j,X,R,_t),X.side=Vn,X.needsUpdate=!0,_.renderBufferDirect(Z,B,j,X,R,_t),X.side=Oe):_.renderBufferDirect(Z,B,j,X,R,_t),R.onAfterRender(_,B,Z,j,X,_t)}function Yr(R,B,Z){B.isScene!==!0&&(B=Et);let j=xt.get(R),X=m.state.lights,_t=m.state.shadowsArray,wt=X.state.version,It=St.getParameters(R,X.state,_t,B,Z),Ot=St.getProgramCacheKey(It),jt=j.programs;j.environment=R.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(R.isMeshStandardMaterial?k:w).get(R.envMap||j.environment),jt===void 0&&(R.addEventListener("dispose",gt),jt=new Map,j.programs=jt);let Vt=jt.get(Ot);if(Vt!==void 0){if(j.currentProgram===Vt&&j.lightsStateVersion===wt)return Ch(R,It),Vt}else It.uniforms=St.getUniforms(R),R.onBuild(Z,It,_),R.onBeforeCompile(It,_),Vt=St.acquireProgram(It,Ot),jt.set(Ot,Vt),j.uniforms=It.uniforms;let Xt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Wt.uniform),Ch(R,It),j.needsLights=Xd(R),j.lightsStateVersion=wt,j.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.directionalShadowMap.value=X.state.directionalShadowMap,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotShadowMap.value=X.state.spotShadowMap,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMap.value=X.state.pointShadowMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Vt,j.uniformsList=null,Vt}function Rh(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=Es.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Ch(R,B){let Z=xt.get(R);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Vd(R,B,Z,j,X){B.isScene!==!0&&(B=Et),A.resetTextureUnits();let _t=B.fog,wt=j.isMeshStandardMaterial?B.environment:null,It=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ze,Ot=(j.isMeshStandardMaterial?k:w).get(j.envMap||wt),jt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xt=!!Z.morphAttributes.position,Le=!!Z.morphAttributes.normal,pn=!!Z.morphAttributes.color,We=yi;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(We=_.toneMapping);let jn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=jn!==void 0?jn.length:0,Qt=xt.get(j),ka=m.state.lights;if(W===!0&&(tt===!0||R!==M)){let bn=R===M&&j.id===L;Wt.setState(j,R,bn)}let Pe=!1;j.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ka.state.version||Qt.outputColorSpace!==It||X.isBatchedMesh&&Qt.batching===!1||!X.isBatchedMesh&&Qt.batching===!0||X.isInstancedMesh&&Qt.instancing===!1||!X.isInstancedMesh&&Qt.instancing===!0||X.isSkinnedMesh&&Qt.skinning===!1||!X.isSkinnedMesh&&Qt.skinning===!0||X.isInstancedMesh&&Qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qt.instancingColor===!1&&X.instanceColor!==null||Qt.envMap!==Ot||j.fog===!0&&Qt.fog!==_t||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Wt.numPlanes||Qt.numIntersection!==Wt.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==Vt||Qt.morphTargets!==Xt||Qt.morphNormals!==Le||Qt.morphColors!==pn||Qt.toneMapping!==We||ct.isWebGL2===!0&&Qt.morphTargetsCount!==Se)&&(Pe=!0):(Pe=!0,Qt.__version=j.version);let Ri=Qt.currentProgram;Pe===!0&&(Ri=Yr(j,B,X));let Ph=!1,$s=!1,Ha=!1,je=Ri.getUniforms(),Ci=Qt.uniforms;if($.useProgram(Ri.program)&&(Ph=!0,$s=!0,Ha=!0),j.id!==L&&(L=j.id,$s=!0),Ph||M!==R){je.setValue(I,"projectionMatrix",R.projectionMatrix),je.setValue(I,"viewMatrix",R.matrixWorldInverse);let bn=je.map.cameraPosition;bn!==void 0&&bn.setValue(I,Ft.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&je.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&je.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,$s=!0,Ha=!0)}if(X.isSkinnedMesh){je.setOptional(I,X,"bindMatrix"),je.setOptional(I,X,"bindMatrixInverse");let bn=X.skeleton;bn&&(ct.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),je.setValue(I,"boneTexture",bn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(je.setOptional(I,X,"batchingTexture"),je.setValue(I,"batchingTexture",X._matricesTexture,A));let Ga=Z.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0&&ct.isWebGL2===!0)&&ee.update(X,Z,Ri),($s||Qt.receiveShadow!==X.receiveShadow)&&(Qt.receiveShadow=X.receiveShadow,je.setValue(I,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ci.envMap.value=Ot,Ci.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),$s&&(je.setValue(I,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights&&Wd(Ci,Ha),_t&&j.fog===!0&&pt.refreshFogUniforms(Ci,_t),pt.refreshMaterialUniforms(Ci,j,Y,O,at),Es.upload(I,Rh(Qt),Ci,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Es.upload(I,Rh(Qt),Ci,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&je.setValue(I,"center",X.center),je.setValue(I,"modelViewMatrix",X.modelViewMatrix),je.setValue(I,"normalMatrix",X.normalMatrix),je.setValue(I,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let bn=j.uniformsGroups;for(let Va=0,qd=bn.length;Va<qd;Va++)if(ct.isWebGL2){let Lh=bn[Va];ae.update(Lh,Ri),ae.bind(Lh,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Wd(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Xd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,B,Z){xt.get(R.texture).__webglTexture=B,xt.get(R.depthTexture).__webglTexture=Z;let j=xt.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){let Z=xt.get(R);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,Z=0){E=R,T=B,b=Z;let j=!0,X=null,_t=!1,wt=!1;if(R){let Ot=xt.get(R);Ot.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(I.FRAMEBUFFER,null),j=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(R):Ot.__hasExternalTextures&&A.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);let jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);let Vt=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?X=Vt[B][Z]:X=Vt[B],_t=!0):ct.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?X=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?X=Vt[Z]:X=Vt,S.copy(R.viewport),N.copy(R.scissor),D=R.scissorTest}else S.copy(G).multiplyScalar(Y).floor(),N.copy(q).multiplyScalar(Y).floor(),D=et;if($.bindFramebuffer(I.FRAMEBUFFER,X)&&ct.drawBuffers&&j&&$.drawBuffers(R,X),$.viewport(S),$.scissor(N),$.setScissorTest(D),_t){let Ot=xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,Z)}else if(wt){let Ot=xt.get(R.texture),jt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,jt)}L=-1},this.readRenderTargetPixels=function(R,B,Z,j,X,_t,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){$.bindFramebuffer(I.FRAMEBUFFER,It);try{let Ot=R.texture,jt=Ot.format,Vt=Ot.type;if(jt!==En&&bt.convert(jt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=Vt===Hi&&(Q.has("EXT_color_buffer_half_float")||ct.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Vt!==Fn&&bt.convert(Vt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===ri&&(ct.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-j&&Z>=0&&Z<=R.height-X&&I.readPixels(B,Z,j,X,bt.convert(jt),bt.convert(Vt),_t)}finally{let Ot=E!==null?xt.get(E).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(R,B,Z=0){let j=Math.pow(2,-Z),X=Math.floor(B.image.width*j),_t=Math.floor(B.image.height*j);A.setTexture2D(B,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,R.x,R.y,X,_t),$.unbindTexture()},this.copyTextureToTexture=function(R,B,Z,j=0){let X=B.image.width,_t=B.image.height,wt=bt.convert(Z.format),It=bt.convert(Z.type);A.setTexture2D(Z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment),B.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,j,R.x,R.y,X,_t,wt,It,B.image.data):B.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,j,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,wt,B.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,j,R.x,R.y,wt,It,B.image),j===0&&Z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,B,Z,j,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=R.max.x-R.min.x+1,wt=R.max.y-R.min.y+1,It=R.max.z-R.min.z+1,Ot=bt.convert(j.format),jt=bt.convert(j.type),Vt;if(j.isData3DTexture)A.setTexture3D(j,0),Vt=I.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)A.setTexture2DArray(j,0),Vt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);let Xt=I.getParameter(I.UNPACK_ROW_LENGTH),Le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pn=I.getParameter(I.UNPACK_SKIP_PIXELS),We=I.getParameter(I.UNPACK_SKIP_ROWS),jn=I.getParameter(I.UNPACK_SKIP_IMAGES),Se=Z.isCompressedTexture?Z.mipmaps[X]:Z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,R.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,R.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?I.texSubImage3D(Vt,X,B.x,B.y,B.z,_t,wt,It,Ot,jt,Se.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Vt,X,B.x,B.y,B.z,_t,wt,It,Ot,Se.data)):I.texSubImage3D(Vt,X,B.x,B.y,B.z,_t,wt,It,Ot,jt,Se),I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pn),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jn),X===0&&j.generateMipmaps&&I.generateMipmap(Vt),$.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,$.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===El?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Bi:Rf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bi?ge:ze}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Yc=class extends vr{};Yc.prototype.isWebGL1Renderer=!0;var Xo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Us=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},yr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new P,Mr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ku=new P,ju=new oe,Ju=new oe,lv=new P,$u=new Gt,xo=new P,_c=new vn,Qu=new Gt,vc=new Ls,qo=class extends Dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(i),t.ray.intersectsSphere(_c)!==!1&&(Qu.copy(i).invert(),vc.copy(t.ray).applyMatrix4(Qu),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,vc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Up?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,t),Ju.fromBufferAttribute(i.attributes.skinWeight,t),Ku.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Ju.getComponent(r);if(o!==0){let a=ju.getComponent(r);$u.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(lv.copy(Ku).applyMatrix4($u),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},br=class extends we{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zc=class extends Be{constructor(t=null,e=1,n=1,i,r,o,a,c,l=ve,h=ve,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tf=new Gt,hv=new Gt,Yo=class s{constructor(t=[],e=[]){this.uuid=wn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:hv;tf.multiplyMatrices(a,e[r]),tf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Zc(e,t,t,En,ri);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new br),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Vi=class extends Me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new Gt,ef=new Gt,_o=[],nf=new ke,uv=new Gt,ir=new Dt,sr=new vn,zn=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),nf.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(nf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),sr.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),ef.multiplyMatrices(n,ms),ir.matrixWorld=ef,ir.raycast(t,_o);for(let o=0,a=_o.length;o<a;o++){let c=_o[o];c.instanceId=r,c.object=this,e.push(c)}_o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Sr=class extends fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sf=new P,rf=new P,of=new Gt,yc=new Ls,vo=new vn,Fs=class extends we{constructor(t=new xe,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)sf.fromBufferAttribute(e,i-1),rf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sf.distanceTo(rf);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;of.copy(i).invert(),yc.copy(t.ray).applyMatrix4(of);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,f=new P,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=d){let T=g.getX(_),b=g.getX(_+1);if(l.fromBufferAttribute(m,T),h.fromBufferAttribute(m,b),yc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=d){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),yc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},af=new P,cf=new P,Zo=class extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)af.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+af.distanceTo(cf);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ko=class extends Fs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lf=new Gt,Kc=new Ls,yo=new vn,Mo=new P,jo=class extends we{constructor(t=new xe,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;lf.copy(i).invert(),Kc.copy(t.ray).applyMatrix4(lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);Mo.fromBufferAttribute(u,m),hf(Mo,m,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Mo.fromBufferAttribute(u,g),hf(Mo,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hf(s,t,e,n,i,r,o){let a=Kc.distanceSqToPoint(s);if(a<e){let c=new P;Kc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Wi=class extends Be{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ot:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],r=[],o=[],a=new P,c=new Gt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ue(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ue(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ot,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jc=class extends wr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Al(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var bo=new P,Mc=new Al,bc=new Al,Sc=new Al,Jc=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),l=bo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Mc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),bc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Sc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Sc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Mc.calc(c),bc.calc(c),Sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function fv(s,t){let e=1-s;return e*e*t}function dv(s,t){return 2*(1-s)*s*t}function pv(s,t){return s*s*t}function ur(s,t,e,n){return fv(s,t)+dv(s,e)+pv(s,n)}function mv(s,t){let e=1-s;return e*e*e*t}function gv(s,t){let e=1-s;return 3*e*e*s*t}function xv(s,t){return 3*(1-s)*s*s*t}function _v(s,t){return s*s*s*t}function fr(s,t,e,n,i){return mv(s,t)+gv(s,e)+xv(s,n)+_v(s,i)}var Jo=class extends Tn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends Tn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y),fr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$o=class extends Tn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends Tn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Tn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,i.x,r.x,o.x),ur(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Tn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,i.x,r.x,o.x),ur(t,i.y,r.y,o.y),ur(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(uf(a,c.x,l.x,h.x,u.x),uf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ot().fromArray(i))}return this}},el=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:Jc,CubicBezierCurve:Jo,CubicBezierCurve3:$c,EllipseCurve:wr,LineCurve:$o,LineCurve3:Qc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:tl,SplineCurve:ta}),nl=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new el[i.type]().fromJSON(i))}return this}},ea=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $o(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Qo(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Jo(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ta(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new wr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},na=class s extends xe{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ue(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new ot,d=new P,g=new P,x=new P,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*i,y=Math.sin(_),T=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*y,u.y=t[b].y,u.z=t[b].x*T,o.push(u.x,u.y,u.z),f.x=v/e,f.y=b/(t.length-1),a.push(f.x,f.y);let E=c[3*b+0]*y,L=c[3*b+1],M=c[3*b+0]*T;l.push(E,L,M)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,T=y,b=y+t.length,E=y+t.length+1,L=y+1;r.push(T,b,L),r.push(E,L,b)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Wn=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function v(){let y=new P,T=new P,b=0,E=(e-t)/n;for(let L=0;L<=r;L++){let M=[],S=L/r,N=S*(e-t)+t;for(let D=0;D<=i;D++){let H=D/i,C=H*c+a,U=Math.sin(C),O=Math.cos(C);T.x=N*U,T.y=-S*n+m,T.z=N*O,u.push(T.x,T.y,T.z),y.set(U,E,O).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-S),M.push(g++)}x.push(M)}for(let L=0;L<i;L++)for(let M=0;M<r;M++){let S=x[M][L],N=x[M+1][L],D=x[M+1][L+1],H=x[M][L+1];h.push(S,N,H),h.push(N,D,H),b+=6}l.addGroup(p,b,0),p+=b}function _(y){let T=g,b=new ot,E=new P,L=0,M=y===!0?t:e,S=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let N=g;for(let D=0;D<=i;D++){let C=D/i*c+a,U=Math.cos(C),O=Math.sin(C);E.x=M*O,E.y=m*S,E.z=M*U,u.push(E.x,E.y,E.z),f.push(0,S,0),b.x=U*.5+.5,b.y=O*.5*S+.5,d.push(b.x,b.y),g++}for(let D=0;D<i;D++){let H=T+D,C=N+D;y===!0?h.push(C,C+1,H):h.push(C+1,C,H),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var il=class s extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new P,y=new P,T=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],y),d(e[b+2],T),c(_,y,T,v)}function c(v,_,y,T){let b=T+1,E=[];for(let L=0;L<=b;L++){E[L]=[];let M=v.clone().lerp(y,L/b),S=_.clone().lerp(y,L/b),N=b-L;for(let D=0;D<=N;D++)D===0&&L===b?E[L][D]=M:E[L][D]=M.clone().lerp(S,D/N)}for(let L=0;L<b;L++)for(let M=0;M<2*(b-L)-1;M++){let S=Math.floor(M/2);M%2===0?(f(E[L][S+1]),f(E[L+1][S]),f(E[L][S])):(f(E[L][S+1]),f(E[L+1][S+1]),f(E[L+1][S]))}}function l(v){let _=new P;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(y,1-T)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],T=o[v+4],b=Math.max(_,y,T),E=Math.min(_,y,T);b>.9&&E<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let v=new P,_=new P,y=new P,T=new P,b=new ot,E=new ot,L=new ot;for(let M=0,S=0;M<r.length;M+=9,S+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),T.copy(v).add(_).add(y).divideScalar(3);let N=m(T);x(b,S+0,v,N),x(E,S+2,_,N),x(L,S+4,y,N)}}function x(v,_,y,T){T<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Tr=class extends ea{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ea().fromJSON(i))}return this}},vv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=kf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Ev(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ar(r,o,e,a,c,d,0),o}};function kf(s,t,e,n,i){let r,o;if(i===Uv(s,t,e,n)>0)for(r=t;r<e;r+=n)o=ff(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=ff(r,s[r],s[r+1],o);return o&&va(o,o.next)&&(Cr(o),o=o.next),o}function Xi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(va(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Cv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Mv(s,n,i,r):yv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Cr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=bv(Xi(s),t,e),Ar(s,t,e,n,i,r,2)):o===2&&Sv(s,t,e,n,i,r):Ar(Xi(s),t,e,n,i,r,1);break}}}function yv(s){let t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ms(i,a,r,c,o,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ee(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=sl(d,g,t,e,n),v=sl(x,m,t,e,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ms(a,h,c,u,l,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ms(a,h,c,u,l,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ms(a,h,c,u,l,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ms(a,h,c,u,l,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bv(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!va(i,r)&&Hf(i,n,n.next,r)&&Rr(i,r)&&Rr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cr(n),Cr(n.next),n=s=r),n=n.next}while(n!==s);return Xi(n)}function Sv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iv(o,a)){let c=Gf(o,a);o=Xi(o,o.next),c=Xi(c,c.next),Ar(o,t,e,n,i,r,0),Ar(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ev(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=kf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Lv(l));for(i.sort(wv),r=0;r<i.length;r++)e=Tv(i[r],e);return e}function wv(s,t){return s.x-t.x}function Tv(s,t){let e=Av(s,t);if(!e)return t;let n=Gf(e,s);return Xi(n,n.next),Xi(e,e.next)}function Av(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Ms(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Rr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Rv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Rv(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function Cv(s,t,e,n){let i=s;do i.z===0&&(i.z=sl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pv(i)}function Pv(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function sl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ms(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Iv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Dv(s,t)&&(Rr(s,t)&&Rr(t,s)&&Nv(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||va(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function va(s,t){return s.x===t.x&&s.y===t.y}function Hf(s,t,e,n){let i=Eo(Ee(s,t,e)),r=Eo(Ee(s,t,n)),o=Eo(Ee(e,n,s)),a=Eo(Ee(e,n,t));return!!(i!==r&&o!==a||i===0&&So(s,e,t)||r===0&&So(s,n,t)||o===0&&So(e,s,n)||a===0&&So(e,t,n))}function So(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Eo(s){return s>0?1:s<0?-1:0}function Dv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Rr(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Nv(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gf(s,t){let e=new rl(s.i,s.x,s.y),n=new rl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ff(s,t,e,n){let i=new rl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var dr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];df(t),pf(n,t);let o=t.length;e.forEach(df);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,pf(n,e[c]);let a=vv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function df(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function pf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ia=class s extends xe{constructor(t=new Tr([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Fv,_,y=!1,T,b,E,L;p&&(_=p.getSpacedPoints(h),y=!0,f=!1,T=p.computeFrenetFrames(h,!1),b=new P,E=new P,L=new P),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(l),S=M.shape,N=M.holes;if(!dr.isClockWise(S)){S=S.reverse();for(let I=0,lt=N.length;I<lt;I++){let Q=N[I];dr.isClockWise(Q)&&(N[I]=Q.reverse())}}let H=dr.triangulateShape(S,N),C=S;for(let I=0,lt=N.length;I<lt;I++){let Q=N[I];S=S.concat(Q)}function U(I,lt,Q){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(lt,Q)}let O=S.length,Y=H.length;function K(I,lt,Q){let ct,$,Tt,xt=I.x-lt.x,A=I.y-lt.y,w=Q.x-I.x,k=Q.y-I.y,rt=xt*xt+A*A,it=xt*k-A*w;if(Math.abs(it)>Number.EPSILON){let nt=Math.sqrt(rt),St=Math.sqrt(w*w+k*k),pt=lt.x-A/nt,vt=lt.y+xt/nt,Pt=Q.x-k/St,Wt=Q.y+w/St,st=((Pt-pt)*k-(Wt-vt)*w)/(xt*k-A*w);ct=pt+xt*st-I.x,$=vt+A*st-I.y;let se=ct*ct+$*$;if(se<=2)return new ot(ct,$);Tt=Math.sqrt(se/2)}else{let nt=!1;xt>Number.EPSILON?w>Number.EPSILON&&(nt=!0):xt<-Number.EPSILON?w<-Number.EPSILON&&(nt=!0):Math.sign(A)===Math.sign(k)&&(nt=!0),nt?(ct=-A,$=xt,Tt=Math.sqrt(rt)):(ct=xt,$=A,Tt=Math.sqrt(rt/2))}return new ot(ct/Tt,$/Tt)}let V=[];for(let I=0,lt=C.length,Q=lt-1,ct=I+1;I<lt;I++,Q++,ct++)Q===lt&&(Q=0),ct===lt&&(ct=0),V[I]=K(C[I],C[Q],C[ct]);let G=[],q,et=V.concat();for(let I=0,lt=N.length;I<lt;I++){let Q=N[I];q=[];for(let ct=0,$=Q.length,Tt=$-1,xt=ct+1;ct<$;ct++,Tt++,xt++)Tt===$&&(Tt=0),xt===$&&(xt=0),q[ct]=K(Q[ct],Q[Tt],Q[xt]);G.push(q),et=et.concat(q)}for(let I=0;I<m;I++){let lt=I/m,Q=d*Math.cos(lt*Math.PI/2),ct=g*Math.sin(lt*Math.PI/2)+x;for(let $=0,Tt=C.length;$<Tt;$++){let xt=U(C[$],V[$],ct);ft(xt.x,xt.y,-Q)}for(let $=0,Tt=N.length;$<Tt;$++){let xt=N[$];q=G[$];for(let A=0,w=xt.length;A<w;A++){let k=U(xt[A],q[A],ct);ft(k.x,k.y,-Q)}}}let z=g+x;for(let I=0;I<O;I++){let lt=f?U(S[I],et[I],z):S[I];y?(E.copy(T.normals[0]).multiplyScalar(lt.x),b.copy(T.binormals[0]).multiplyScalar(lt.y),L.copy(_[0]).add(E).add(b),ft(L.x,L.y,L.z)):ft(lt.x,lt.y,0)}for(let I=1;I<=h;I++)for(let lt=0;lt<O;lt++){let Q=f?U(S[lt],et[lt],z):S[lt];y?(E.copy(T.normals[I]).multiplyScalar(Q.x),b.copy(T.binormals[I]).multiplyScalar(Q.y),L.copy(_[I]).add(E).add(b),ft(L.x,L.y,L.z)):ft(Q.x,Q.y,u/h*I)}for(let I=m-1;I>=0;I--){let lt=I/m,Q=d*Math.cos(lt*Math.PI/2),ct=g*Math.sin(lt*Math.PI/2)+x;for(let $=0,Tt=C.length;$<Tt;$++){let xt=U(C[$],V[$],ct);ft(xt.x,xt.y,u+Q)}for(let $=0,Tt=N.length;$<Tt;$++){let xt=N[$];q=G[$];for(let A=0,w=xt.length;A<w;A++){let k=U(xt[A],q[A],ct);y?ft(k.x,k.y+_[h-1].y,_[h-1].x+Q):ft(k.x,k.y,u+Q)}}}W(),tt();function W(){let I=i.length/3;if(f){let lt=0,Q=O*lt;for(let ct=0;ct<Y;ct++){let $=H[ct];At($[2]+Q,$[1]+Q,$[0]+Q)}lt=h+m*2,Q=O*lt;for(let ct=0;ct<Y;ct++){let $=H[ct];At($[0]+Q,$[1]+Q,$[2]+Q)}}else{for(let lt=0;lt<Y;lt++){let Q=H[lt];At(Q[2],Q[1],Q[0])}for(let lt=0;lt<Y;lt++){let Q=H[lt];At(Q[0]+O*h,Q[1]+O*h,Q[2]+O*h)}}n.addGroup(I,i.length/3-I,0)}function tt(){let I=i.length/3,lt=0;at(C,lt),lt+=C.length;for(let Q=0,ct=N.length;Q<ct;Q++){let $=N[Q];at($,lt),lt+=$.length}n.addGroup(I,i.length/3-I,1)}function at(I,lt){let Q=I.length;for(;--Q>=0;){let ct=Q,$=Q-1;$<0&&($=I.length-1);for(let Tt=0,xt=h+m*2;Tt<xt;Tt++){let A=O*Tt,w=O*(Tt+1),k=lt+ct+A,rt=lt+$+A,it=lt+$+w,nt=lt+ct+w;Ft(k,rt,it,nt)}}}function ft(I,lt,Q){c.push(I),c.push(lt),c.push(Q)}function At(I,lt,Q){Et(I),Et(lt),Et(Q);let ct=i.length/3,$=v.generateTopUV(n,i,ct-3,ct-2,ct-1);kt($[0]),kt($[1]),kt($[2])}function Ft(I,lt,Q,ct){Et(I),Et(lt),Et(ct),Et(lt),Et(Q),Et(ct);let $=i.length/3,Tt=v.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);kt(Tt[0]),kt(Tt[1]),kt(Tt[3]),kt(Tt[1]),kt(Tt[2]),kt(Tt[3])}function Et(I){i.push(c[I*3+0]),i.push(c[I*3+1]),i.push(c[I*3+2])}function kt(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ov(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new el[i.type]().fromJSON(i)),new s(n,t.options)}},Fv={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ot(r,o),new ot(a,c),new ot(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-u),new ot(f,1-g),new ot(x,1-p)]:[new ot(a,1-c),new ot(h,1-u),new ot(d,1-g),new ot(m,1-p)]}};function Ov(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sa=class s extends il{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Os=class s extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let b=T/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let _=h[p][v+1],y=h[p][v],T=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&d.push(_,y,b),(p!==n-1||c<Math.PI)&&d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ra=class s extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var zs=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bs=class extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},An=class extends Bs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var fe=class extends fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function wo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bv(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function mf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Vf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends Mi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xs:r=t,a=2*e-n;break;case Ro:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xs:o=t,c=2*n-e;break;case Ro:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[l+T]+_*o[c+T]+y*o[u+T];return r}},oa=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},al=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Gi:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&zv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Gi;var bi=class extends Rn{};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Rs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Rn{};aa.prototype.ValueTypeName="color";var ci=class extends Rn{};ci.prototype.ValueTypeName="number";var cl=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)qe.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xn=class extends Rn{InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Xn.prototype.ValueTypeName="quaternion";Xn.prototype.DefaultInterpolation=Gi;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Rn{};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Rs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends Rn{};li.prototype.ValueTypeName="vector";var ks=class{constructor(t,e=-1,n,i=bl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Hv(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Bv(c);c=mf(c,1,h),l=mf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ci(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];Vf(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){let _=f[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new ci(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+e[u].name+"]";n(li,d+".position",f,"pos",i),n(Xn,d+".quaternion",f,"rot",i),n(li,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return aa;case"quaternion":return Xn;case"bool":case"boolean":return bi;case"string":return Si}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Hv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=kv(s.type);if(s.times===void 0){let e=[],n=[];Vf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var _i={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ll=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Gv=new ll,hi=class{constructor(t){this.manager=t!==void 0?t:Gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ni={},hl=class extends Error{constructor(t,e){super(t),this.response=e}},Pr=class extends hi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=_i.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ni[t]!==void 0){ni[t].push({onLoad:e,onProgress:n,onError:i});return}ni[t]=[],ni[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ni[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let b=0,E=h.length;b<E;b++){let L=h[b];L.onProgress&&L.onProgress(T)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new hl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{_i.add(t,l);let h=ni[t];delete ni[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ni[t];if(h===void 0)throw this.manager.itemError(t),l;delete ni[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var ul=class extends hi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=_i.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=gr("img");function c(){h(),_i.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ca=class extends hi{constructor(t){super(t)}load(t,e,n,i){let r=new Be,o=new ul(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Hs=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},la=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ec=new Gt,gf=new P,xf=new P,Lr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fl=class extends Lr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Gs=class extends Hs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},_f=new Gt,rr=new P,wc=new P,dl=class extends Lr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),wc.copy(n.position),wc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wc),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f)}},ha=class extends Hs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pl=class extends Lr{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new pl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ei=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var ua=class extends hi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=_i.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _i.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),_i.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});_i.add(t,c),r.manager.itemStart(t)}};var ml=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){qe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;qe.multiplyQuaternionsFlat(t,o,t,e,t,n),qe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Rl="\\[\\]\\.:\\/",Vv=new RegExp("["+Rl+"]","g"),Cl="[^"+Rl+"]",Wv="[^"+Rl.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",Cl),qv=/(WCOD+)?/.source.replace("WCOD",Wv),Yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),Zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),Kv=new RegExp("^"+Xv+qv+Yv+Zv+"$"),jv=["material","materials","bones","map"],gl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(t){let e=Kv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=gl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:gs,endingEnd:gs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case qp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case bl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===Xp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===ma){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=xs,i.endingEnd=xs):(t?i.endingStart=this.zeroSlopeAtStart?xs:gs:i.endingStart=Ro,e?i.endingEnd=this.zeroSlopeAtEnd?xs:gs:i.endingEnd=Ro)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},Jv=new Float32Array(1),fa=class extends ai{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;g=new ml(ue.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new oa(new Float32Array(2),new Float32Array(2),1,Jv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?ks.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new xl(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?ks.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);var Ta=tp(Zf());var Jt=(s,t,e)=>s<t?t:s>e?e:s,Zt=(s,t,e)=>s+(t-s)*e,Kf=s=>s*s*(3-2*s),qn=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function Mn(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s=s^s>>>4,s=Math.imul(s,668265261),s=s^s>>>15,(s>>>0)/4294967296}var Nl=12345,ce=()=>(Nl=Nl*1664525+1013904223>>>0,Nl/4294967296),en=s=>s[ce()*s.length|0];function qs(s,t,e,n,i,r,o){let a=i-e,c=r-n,l=a*a+c*c||1e-9,h=((s-e)*a+(t-n)*c)/l;return h=h<0?0:h>1?1:h,o.x=e+a*h,o.z=n+c*h,o.t=h,o}function jf(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],c=e[r][0],l=e[r][1];a>t!=l>t&&s<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}var Ne={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uLampRect:{value:new oe(0,0,1,0)},uFar:{value:null},uWorld:{value:new ot(1,1)}},wi=class{constructor(t){this.cell=t,this.m=new Map,this.stamp=0}add(t,e,n,i,r,o){let a=this.cell,c=Math.floor(Math.min(e,i)/a),l=Math.floor(Math.max(e,i)/a),h=Math.floor(Math.min(n,r)/a),u=Math.floor(Math.max(n,r)/a);for(let f=h;f<=u;f++)for(let d=c;d<=l;d++){let g=f*8192+d,x=this.m.get(g);x||this.m.set(g,x=[]),x.push(t),o&&o.add(g)}}query(t,e,n,i){i.length=0;let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),l=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let u=l;u<=h;u++)for(let f=a;f<=c;f++){let d=this.m.get(u*8192+f);if(d)for(let g=0;g<d.length;g++){let x=d[g];x._st!==o&&(x._st=o,i.push(x))}}return i}removeTag(t,e){for(let n of e){let i=this.m.get(n);if(!i)continue;let r=i.filter(o=>o.tag!==t);r.length?this.m.set(n,r):this.m.delete(n)}}};function Yi(s,t="",e="",n=""){s.uniforms.uNight=Ne.uNight,s.uniforms.uTime=Ne.uTime,s.uniforms.uLamp=Ne.uLamp,s.uniforms.uLampRect=Ne.uLampRect,s.uniforms.uFar=Ne.uFar,s.uniforms.uWorld=Ne.uWorld,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
`+t.split("//MAIN")[0]).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 wpp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
      wpp = instanceMatrix * wpp;
      #endif
      vWP = (modelMatrix * wpp).xyz;
      ${t.split("//MAIN")[1]||""}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWP;
      uniform float uNight; uniform float uTime; uniform sampler2D uLamp; uniform vec4 uLampRect; uniform sampler2D uFar; uniform vec2 uWorld;
      float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      vec3 lampAt(vec3 wp){ vec2 uv = (wp.xz - uLampRect.xy)/uLampRect.z; vec2 e = min(uv, 1.0-uv);
        float f = clamp(min(e.x, e.y)*10.0, 0.0, 1.0); return texture2D(uLamp, clamp(uv, 0.0, 1.0)).rgb * f; }
      ${e}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+n)}var Jf=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],$f=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],Qf=["#f1ead8","#ece0c2","#e9d6a8","#f4f1ea","#dfd3bd","#e6c9a0","#d9dccf","#efe2cf","#e0b58f","#cfd3d6"],td=["#c9c4b8","#bdb7aa","#d4cdbd","#b3b6b4","#cbbfa8","#c2c7c4"],ed=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],dy={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2,panel:6,house:7,block:8},Ea={bld:[],green:[],water:[],parea:[],walls:[],trees:[],lamps:[]},wa=new yt;function nd(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer)}function id(s,t,e,n,i,r){let o=i/n,a=r/n;o=o<0?0:o>t-1.001?t-1.001:o,a=a<0?0:a>e-1.001?e-1.001:a;let c=o|0,l=a|0,h=o-c,u=a-l,f=l*t+c,d=s[f],g=s[f+1],x=s[f+t],m=s[f+t+1];return h+u<=1?d+(g-d)*h+(x-d)*u:m+(x-m)*(1-h)+(g-m)*(1-u)}var cn=class{constructor(t,e,n={}){this.d=t,this.base=e,this.mobile=!!n.mobile;let i=t.meta;this.W=i.w,this.H=i.h,this.water=i.water,this.T=i.tile,this.ntx=i.ntx,this.ntz=i.ntz;let r=100,o=nd(t.hf),a=nd(t.hc);this.hf=new Float32Array(o.length);for(let c=0;c<o.length;c++)this.hf[c]=o[c]/r;this.hc=new Float32Array(a.length);for(let c=0;c<a.length;c++)this.hc[c]=a[c]/r;this.fs=i.fs,this.fn=i.fn,this.fx=i.fx,this.fz=i.fz,this.fw=(i.fn-1)*i.fs,this.cs=i.cs,this.cnx=i.cnx,this.cnz=i.cnz,t.hf=t.hc=null,Ne.uWorld.value.set(this.W,this.H),this.group=new ye,this.colliders=new wi(8),this.decks=new wi(16),this.names=new wi(24),this.edgeGrid=new wi(24),this.pedGrid=new wi(30),this._tmp=[],this._c={x:0,z:0,t:0},this.gates=[],this.tiles=[];for(let c=0;c<this.ntz;c++)for(let l=0;l<this.ntx;l++)this.tiles.push({i:l,j:c,k:c*this.ntx+l,has:t.have[c*this.ntx+l]==="1",state:0,data:null,objs:[],keys:new Set,lod:null,terr:null,tex:null,lampPts:[],x0:l*this.T,z0:c*this.T,fine:!1});for(let c of this.tiles)c.fine=c.x0<this.fx+this.fw&&c.x0+this.T>this.fx&&c.z0<this.fz+this.fw&&c.z0+this.T>this.fz;this.Rb=this.mobile?640:1e3,this.Rt=this.mobile?1700:2300,this.Rn=this.mobile?330:420,this.texRes=this.mobile?576:1152,this.gen=null,this.genTile=null,this.tick=0,this.lampDirty=!0,this.lampC=[-1e9,-1e9],this.lampT=0,this.makeMaterials()}hAt(t,e){let n=t-this.fx,i=e-this.fz;return n>=0&&i>=0&&n<=this.fw&&i<=this.fw?id(this.hf,this.fn,this.fn,this.fs,n,i):id(this.hc,this.cnx,this.cnz,this.cs,t,e)}surfaceY(t,e,n=1e9){let i=this.hAt(t,e),r=this.decks.query(t,e,1,this._tmp);for(let o=0;o<r.length;o++){let a=r[o],c=qs(t,e,a.ax,a.az,a.bx,a.bz,this._c);if(Math.hypot(t-c.x,e-c.z)>a.hw)continue;let l=a.ya+(a.yb-a.ya)*c.t;l>i&&n>l-2.2&&(i=l)}return i}onDeck(t,e,n){return this.surfaceY(t,e,n)>this.hAt(t,e)+.5}streetAt(t,e){let n=this.names.query(t,e,30,this._tmp),i=null,r=30;for(let o of n){let a=qs(t,e,o.ax,o.az,o.bx,o.bz,this._c),c=Math.hypot(t-a.x,e-a.z)-o.hw;c<r&&(r=c,i=o.n)}return i}async init(t){let e=new Image;await new Promise(o=>{e.onload=o,e.onerror=o,e.src=this.base+"far.jpg"}),this.farImg=e;let n=new Be(e);n.colorSpace=ge,n.flipY=!1,n.anisotropy=4,n.needsUpdate=!0,Ne.uFar.value=n;let i=document.createElement("canvas");i.width=i.height=512,this.lampCv=i;let r=new Wi(i);return r.colorSpace=Qe,r.minFilter=De,r.generateMipmaps=!1,r.flipY=!1,Ne.uLamp.value=r,t&&t(.2),this.indexLines(),this.buildBridges(),this.buildBridgeMeshes(),this.buildWater(),t&&t(.5),this.buildRoadGraph(),this.buildPedGraph(),t&&t(.8),this.buildPylon(),this.buildLod(),t&&t(1),this}indexLines(){let t=this.T,e=()=>this.tiles.map(()=>[]);this.ix={road:e(),foot:e(),cross:e(),steps:e(),tram:e(),rail:e()};let n=(i,r,o,a)=>{let c=1e9,l=1e9,h=-1e9,u=-1e9;for(let f of o)f[0]<c&&(c=f[0]),f[0]>h&&(h=f[0]),f[1]<l&&(l=f[1]),f[1]>u&&(u=f[1]);c=c/10-a,h=h/10+a,l=l/10-a,u=u/10+a;for(let f=Math.max(0,Math.floor(l/t));f<=Math.min(this.ntz-1,Math.floor(u/t));f++)for(let d=Math.max(0,Math.floor(c/t));d<=Math.min(this.ntx-1,Math.floor(h/t));d++)i[f*this.ntx+d].push(r)};for(let i of this.d.road)n(this.ix.road,i,i.p,14);for(let i of this.d.foot)n(this.ix.foot,i,i.p,4);for(let i of this.d.cross)n(this.ix.cross,i,i,4);for(let i of this.d.steps)n(this.ix.steps,i,i,4);for(let i of this.d.tram)n(this.ix.tram,i,i.p,4);for(let i of this.d.rail)n(this.ix.rail,i,i,4)}makeMaterials(){let t=e=>`{
      ${e?"diffuseColor.rgb = texture2D(uFar, vWP.xz/uWorld).rgb;":""}
      float n = vnoise(vWP.xz*1.7)*0.5 + vnoise(vWP.xz*0.21)*0.5;
      diffuseColor.rgb *= 0.86 + 0.28*n;
      vec2 c = fract(vWP.xz*1.25);
      float j = smoothstep(0.0,0.08,c.x)*smoothstep(0.0,0.08,c.y);
      diffuseColor.rgb *= mix(0.9,1.0,j);
      totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6;
    }`;this.farMat=new fe({color:16777215,side:Oe}),this.farMat.onBeforeCompile=e=>Yi(e,"","",t(!0)),this.farMat.customProgramCacheKey=()=>"terrFar",this.nearFrag=t(!1),this.wallMat=new fe({vertexColors:!0,side:Oe}),this.wallMat.onBeforeCompile=e=>Yi(e,"attribute vec2 fuv; attribute vec4 fdat; varying vec2 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;","varying vec2 vF; varying vec4 vD;",`{
          float floorH = vD.x; float kid = vD.y; float seed = vD.z; float topH = vD.w;
          float fl = vF.y / floorH; float fi = floor(fl); float fy = fract(fl);
          float wx = fract(vF.x); float colI = floor(vF.x);
          float isGround = step(fi, 0.5) * step(0.0, vF.y);
          float below = step(topH - 0.9, vF.y);
          float win;
          if (kid > 0.5 && kid < 1.5) win = step(0.08,wx)*step(wx,0.92)*step(0.22,fy)*step(fy,0.92);
          else if (kid > 1.5 && kid < 2.5) win = step(0.3,wx)*step(wx,0.7)*step(0.45,fy)*step(fy,0.8)*step(0.5, h21(vec2(colI, fi+seed*91.)));
          else if (kid > 2.5 && kid < 3.5) win = step(0.38,wx)*step(wx,0.62)*step(0.25,fy)*step(fy,0.9);
          else if (kid > 5.5 && kid < 6.5) win = step(0.14,wx)*step(wx,0.86)*step(0.32,fy)*step(fy,0.8);
          else if (kid > 6.5 && kid < 7.5) win = step(0.3,wx)*step(wx,0.7)*step(0.36,fy)*step(fy,0.8)*step(0.25, h21(vec2(colI+seed*7., fi)));
          else if (kid > 7.5) win = step(0.12,wx)*step(wx,0.88)*step(0.36,fy)*step(fy,0.84);
          else win = step(0.27,wx)*step(wx,0.73)*step(0.3,fy)*step(fy,0.84);
          float shop = (kid < 0.5 || (kid > 3.5 && kid < 4.5)) ? step(0.1,wx)*step(wx,0.9)*step(0.06,fy)*step(fy,0.78) : win;
          win = mix(win, shop, isGround);
          win *= (1.0 - below) * step(0.0, vF.y) * step(0.5, vF.x);
          float plinth = 1.0 - step(0.7, vF.y);
          diffuseColor.rgb *= mix(1.0, 0.72, plinth);
          float corn = step(topH - 0.75, vF.y) * step(vF.y, topH - 0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*1.15+0.05, corn);
          float fb = smoothstep(0.0,0.05,fy) * (1.0 - smoothstep(0.95,1.0,fy));
          diffuseColor.rgb *= mix(0.93, 1.0, fb);
          if (kid > 5.5 && kid < 6.5) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86,0.85,0.8), step(fy, 0.24)*0.55);
            float stair = step(0.86, h21(vec2(floor(colI/5.0), seed*31.)));
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.72, stair*step(mod(colI,5.0),0.5));
          }
          float rnd = h21(vec2(colI*1.7 + seed*13.0, fi*3.1));
          vec3 glass = mix(vec3(0.10,0.12,0.15), vec3(0.32,0.38,0.45), rnd*0.6);
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, win);
          float lit = step(0.52, rnd) * win;
          float shopLit = isGround * win * step(0.25, rnd);
          vec3 wl = mix(vec3(1.0,0.72,0.38), vec3(0.75,0.85,1.0), step(0.85, rnd));
          totalEmissiveRadiance += wl * (lit*0.75 + shopLit*0.4) * uNight;
          totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.3 * (1.0 - smoothstep(2.0, 9.0, vF.y));
        }`),this.roofMat=new fe({vertexColors:!0,side:Oe,flatShading:!0}),this.roofMat.onBeforeCompile=e=>Yi(e,"","","{ float n = vnoise(vWP.xz*vec2(0.6,4.0)); diffuseColor.rgb *= 0.9 + 0.2*n; }"),this.stoneMat=new fe({vertexColors:!0,side:Oe,flatShading:!0}),this.stoneMat.onBeforeCompile=e=>Yi(e,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }"),this.trunkGeo=new Wn(.18,.28,3.2,5),this.trunkGeo.translate(0,1.6,0),this.crownGeo=new sa(2.6,1),this.crownGeo.translate(0,4.9,0),this.postGeo=new Wn(.07,.1,4.6,5),this.postGeo.translate(0,2.3,0),this.headGeo=new Os(.28,6,4),this.headGeo.translate(0,4.7,0);for(let e of[this.trunkGeo,this.crownGeo,this.postGeo,this.headGeo])e.userData.shared=!0;this.trunkMat=new fe({color:4864040}),this.crownMat=new fe({color:16777215,flatShading:!0}),this.crownMat.onBeforeCompile=e=>Yi(e,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }"),this.postMat=new fe({color:2895408}),this.lampHeadMat=new Ze({color:16767392}),this.gateMat=new fe({color:14209212})}tdist(t,e,n){let i=Math.max(t.x0-e,0,e-(t.x0+this.T)),r=Math.max(t.z0-n,0,n-(t.z0+this.T));return Math.hypot(i,r)}fetchTile(t){return t.state=1,t.has?fetch(this.base+"t/"+t.i+"_"+t.j+".json").then(e=>e.ok?e.json():Ea).catch(()=>Ea).then(e=>{t.state===1&&(t.data=e,t.state=2)}):(t.data=Ea,t.state=2,Promise.resolve())}unloadTile(t){this.genTile===t&&(this.gen=null,this.genTile=null);for(let e of t.objs)this.group.remove(e),e.traverse(n=>{n.isInstancedMesh?n.dispose():n.isMesh&&n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose()});t.objs.length=0,this.colliders.removeTag(t,t.keys),t.keys.clear(),this.gates=this.gates.filter(e=>e.tile!==t),t.data=null,t.state=0,t.lampPts=[],t.lod&&(t.lod.visible=!0),this.dropTex(t),this.lampDirty=!0}dropTex(t){t.tex&&(t.tex.dispose(),t.tex=null,t.cv=null,t.nearMat&&(t.nearMat.dispose(),t.nearMat=null),t.terr&&(t.terr.material=this.farMat))}runGen(t){let e=performance.now();for(;this.gen&&(this.gen.next().done&&(this.gen=null,this.genTile=null),!(performance.now()-e>t)););}update(t,e,n=5){if(this.tick++%8===0){let i=null,r=1e9,o=null,a=1e9;for(let c of this.tiles){let l=this.tdist(c,t,e);l<this.Rt?c.terr||this.makeTerrain(c):l>this.Rt+400&&c.terr&&(this.group.remove(c.terr),c.terr.geometry.dispose(),c.terr=null),l<this.Rb?c.state===0?this.fetchTile(c):c.state===2&&l<r&&(r=l,i=c):l>this.Rb+320&&c.state>=1&&this.unloadTile(c),l<this.Rn&&c.state===4&&!c.tex&&l<a?(a=l,o=c):l>this.Rn+260&&c.tex&&this.dropTex(c)}!this.gen&&i?(this.genTile=i,i.state=3,this.gen=this.buildTile(i)):!this.gen&&o&&this.paintTile(o)}this.gen&&this.runGen(n),this.lampT-=1,(this.lampDirty&&this.lampT<=0||Math.hypot(t-this.lampC[0],e-this.lampC[1])>190)&&this.paintLamps(t,e)}async prime(t,e){let n=this.tiles.filter(i=>this.tdist(i,t,e)<this.Rb);await Promise.all(n.filter(i=>i.state===0).map(i=>this.fetchTile(i)));for(let i of this.tiles)this.tdist(i,t,e)<this.Rt&&!i.terr&&this.makeTerrain(i);this.gen&&this.runGen(1e9);for(let i of n)i.state===2&&(i.state=3,this.genTile=i,this.gen=this.buildTile(i),this.runGen(1e9));for(let i of n)i.state===4&&!i.tex&&this.tdist(i,t,e)<this.Rn&&this.paintTile(i);this.paintLamps(t,e)}makeTerrain(t){let e=t.fine?this.fs:this.cs,n=Math.round(this.T/e)+1,i=n*n+4*n,r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*2);for(let g=0;g<n;g++)for(let x=0;x<n;x++){let m=g*n+x,p=t.x0+x*e,v=t.z0+g*e;r[m*3]=p,r[m*3+1]=this.hAt(p,v),r[m*3+2]=v;let _=this.hAt(p-e,v)-this.hAt(p+e,v),y=this.hAt(p,v-e)-this.hAt(p,v+e),T=Math.hypot(_,2*e,y);o[m*3]=_/T,o[m*3+1]=2*e/T,o[m*3+2]=y/T,a[m*2]=x*e/this.T,a[m*2+1]=g*e/this.T}let c=new Uint16Array((n-1)*(n-1)*6+4*(n-1)*6),l=0;for(let g=0;g<n-1;g++)for(let x=0;x<n-1;x++){let m=g*n+x,p=m+1,v=m+n,_=v+1;c[l++]=m,c[l++]=v,c[l++]=p,c[l++]=p,c[l++]=v,c[l++]=_}let h=n*n,u=g=>{let x=h;for(let m=0;m<n;m++){let p=g(m);if(r[h*3]=r[p*3],r[h*3+1]=r[p*3+1]-5,r[h*3+2]=r[p*3+2],o[h*3]=o[p*3],o[h*3+1]=o[p*3+1],o[h*3+2]=o[p*3+2],a[h*2]=a[p*2],a[h*2+1]=a[p*2+1],m){let v=g(m-1),_=x+m-1,y=x+m;c[l++]=v,c[l++]=_,c[l++]=p,c[l++]=p,c[l++]=_,c[l++]=y}h++}};u(g=>g),u(g=>(n-1)*n+g),u(g=>g*n),u(g=>g*n+n-1);let f=new xe;f.setAttribute("position",new Me(r,3)),f.setAttribute("normal",new Me(o,3)),f.setAttribute("uv",new Me(a,2)),f.setIndex(new Me(c,1)),f.computeBoundingSphere();let d=new Dt(f,t.nearMat||this.farMat);d.receiveShadow=!0,t.terr=d,this.group.add(d)}buildWater(){let t=new _r(this.W+3e3,this.H+3e3,1,1);t.rotateX(-Math.PI/2),t.translate(this.W/2,this.water,this.H/2);let e=new fe({color:2770514});e.onBeforeCompile=i=>Yi(i,"","",`{
          float w = vnoise(vWP.xz*vec2(0.08,0.35) + vec2(uTime*0.25, 0.0)) * vnoise(vWP.xz*0.6 + vec2(uTime*0.6,uTime*0.1));
          diffuseColor.rgb *= 0.75 + 0.6*w;
          totalEmissiveRadiance += vec3(1.0,0.75,0.45) * smoothstep(0.55,0.9,w) * (0.15 + uNight*0.35);
        }`);let n=new Dt(t,e);n.receiveShadow=!0,n.frustumCulled=!1,this.group.add(n)}paintTile(t){let e=this.texRes,n=this.T,i=t.data||Ea,r=document.createElement("canvas");r.width=r.height=e;let o=r.getContext("2d"),a=e/n;o.setTransform(a,0,0,a,-t.x0*a,-t.z0*a);let c=x=>{o.beginPath();for(let m=0;m<x.length;m++){let p=x[m][0]/10,v=x[m][1]/10;m?o.lineTo(p,v):o.moveTo(p,v)}},l=x=>{o.beginPath();for(let m of x){for(let p=0;p<m.length;p++){let v=m[p][0]/10+t.x0,_=m[p][1]/10+t.z0;p?o.lineTo(v,_):o.moveTo(v,_)}o.closePath()}};o.fillStyle="#7d8466",o.fillRect(t.x0,t.z0,n,n);let h=this.d.meta.rich;h&&(o.fillStyle="#857f72",o.fillRect(h[0],h[1],h[2]-h[0],h[3]-h[1])),o.fillStyle="#56703c";for(let x of i.green)l(x),o.fill("evenodd");o.fillStyle="#b0a389";for(let x of i.parea)l(x),o.fill("evenodd");o.fillStyle="#26323a";for(let x of i.water)l(x),o.fill("evenodd");o.lineCap="round",o.lineJoin="round";let u=this.ix.road[t.k].filter(x=>!x.b);o.strokeStyle="#a39a8a";for(let x of u)x.c>=1&&x.c<=4&&(o.lineWidth=x.w+3.6,c(x.p),o.stroke());o.strokeStyle="#6f685e";for(let x of u)x.c>=1&&x.c<=4&&(o.lineWidth=x.w+.6,c(x.p),o.stroke());o.strokeStyle="#a69c86";for(let x of this.ix.foot[t.k])o.lineWidth=x.sw?2.2:2.6,c(x.p),o.stroke();o.strokeStyle="#968c7c",o.lineWidth=3;for(let x of this.ix.steps[t.k])c(x),o.stroke();o.strokeStyle="#b5a88e";for(let x of u)x.c===5&&(o.lineWidth=x.w,c(x.p),o.stroke());o.lineCap="butt";for(let x of this.ix.rail[t.k])o.strokeStyle="#5a534c",o.lineWidth=3.4,o.setLineDash([]),c(x),o.stroke(),o.strokeStyle="#8f8a84",o.lineWidth=1.6,o.setLineDash([.35,.55]),c(x),o.stroke();o.setLineDash([]),o.lineCap="round";let f=u.filter(x=>x.c<=4).sort((x,m)=>x.c-m.c);for(let x of f)o.strokeStyle=x.s?"#615850":x.pk?"#46464a":"#3a3b40",o.lineWidth=x.w,c(x.p),o.stroke();o.lineCap="butt";for(let x of f)x.c<2||x.s||(o.strokeStyle="rgba(225,222,210,0.75)",o.lineWidth=.18,x.o?x.w>7&&(o.setLineDash([3,6]),c(x.p),o.stroke()):(o.setLineDash(x.c>=4?[]:[3,6]),c(x.p),o.stroke()),o.setLineDash([]));o.strokeStyle="rgba(40,40,40,0.55)",o.lineWidth=1.8;for(let x of this.ix.tram[t.k])x.b||(c(x.p),o.stroke());o.strokeStyle="rgba(190,190,195,0.8)",o.lineWidth=.15;for(let x of this.ix.tram[t.k])if(!x.b)for(let m of[-.72,.72]){o.beginPath();let p=x.p;for(let v=0;v<p.length;v++){let _=p[Math.max(0,v-1)],y=p[Math.min(p.length-1,v+1)],T=y[0]-_[0],b=y[1]-_[1],E=Math.hypot(T,b)||1,L=p[v][0]/10-b/E*m,M=p[v][1]/10+T/E*m;v?o.lineTo(L,M):o.moveTo(L,M)}o.stroke()}o.strokeStyle="rgba(235,235,228,0.9)",o.lineWidth=3.2,o.setLineDash([.55,.55]);for(let x of this.ix.cross[t.k])c(x),o.stroke();o.setLineDash([]),o.fillStyle="#3c3833";for(let x of i.bld)(!x.m||x.m<1)&&(l([x.o]),o.fill());let d=new Wi(r);d.colorSpace=ge,d.anisotropy=8,d.flipY=!1,t.tex=d,t.cv=r;let g=new fe({map:d,side:Oe});g.onBeforeCompile=x=>Yi(x,"","",this.nearFrag),g.customProgramCacheKey=()=>"terrNear",t.nearMat=g,t.terr&&(t.terr.material=g)}drawGround(t,e,n,i){this.farImg&&this.farImg.width&&t.drawImage(this.farImg,0,0,this.W,this.H);for(let r of this.tiles)r.cv&&this.tdist(r,e,n)<i&&t.drawImage(r.cv,r.x0,r.z0,this.T,this.T)}paintLamps(t,e){let i=this.lampCv,r=i.getContext("2d"),o=Math.round(t/48)*48-1152/2,a=Math.round(e/48)*48-1152/2;r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,i.width,i.height);let c=i.width/1152;r.setTransform(c,0,0,c,-o*c,-a*c),r.globalCompositeOperation="lighter";let l=13;for(let h of this.tiles)if(!(!h.lampPts.length||h.x0>o+1152||h.x0+this.T<o||h.z0>a+1152||h.z0+this.T<a))for(let[u,f]of h.lampPts){if(u<o-l||f<a-l||u>o+1152+l||f>a+1152+l)continue;let d=r.createRadialGradient(u,f,0,u,f,l);d.addColorStop(0,"rgba(255,190,110,0.85)"),d.addColorStop(.35,"rgba(255,170,90,0.35)"),d.addColorStop(1,"rgba(255,150,70,0)"),r.fillStyle=d,r.fillRect(u-l,f-l,l*2,l*2)}Ne.uLampRect.value.set(o,a,1152,0),Ne.uLamp.value.needsUpdate=!0,this.lampC=[t,e],this.lampDirty=!1,this.lampT=40}emitBuilding(t,e,n,i,r,o,a){let c=1e9,l=-1e9;for(let M of n){let S=this.hAt(M[0],M[1]);S<c&&(c=S),S>l&&(l=S)}let h=e.h,u=c+Math.max(h,l-c+2.5),f=!a&&e.g&&h>6&&!(e.m>.5),d=f?c+4.3:e.m>.5?c+e.m:c-3,g=wa;e.c?g.set(e.c):e.k==="modern"?g.set($f[r*$f.length|0]):e.k==="util"?g.set("#a8a296"):e.k==="church"?g.set("#eee4cc"):e.k==="house"?g.set(Qf[r*Qf.length|0]):e.k==="block"?g.set(td[r*td.length|0]):e.k==="panel"?g.set("#d9d2c0"):g.set(Jf[r*Jf.length|0]);let x=g.r,m=g.g,p=g.b,v=e.l||Math.max(1,Math.round(h/(e.k==="panel"?2.9:3.4))),_=e.t?7.5:Jt(h/Math.max(1,v),2.7,5.5),y=dy[e.k]??0,T=e.k==="modern"?2.6:e.k==="church"?5:e.k==="panel"?3:e.k==="house"?3.8:3.4,b=[n,...i];for(let M of b){let S=M.length,N=0;for(let C=0;C<S;C++){let U=M[C],O=M[(C+1)%S];N+=U[0]*O[1]-O[0]*U[1]}let D=(N>0?-1:1)*(M===n?1:-1),H=e.p?.06:0;for(let C=0;C<S;C++){let U=M[C],O=M[(C+1)%S],Y=Math.hypot(O[0]-U[0],O[1]-U[1]);if(Y<.05)continue;let K=Y<2.2?0:Math.max(1,Math.round(Y/T)),V=d-c,G=u-c,q=(O[1]-U[1])/Y,et=-(O[0]-U[0])/Y,z=q*D*H,W=et*D*H,tt=U[0]+z,at=U[1]+W,ft=O[0]+z,At=O[1]+W;t.wp.push(tt,d,at,ft,d,At,ft,u,At,tt,d,at,ft,u,At,tt,u,at),t.wf.push(0,V,K,V,K,G,0,V,K,G,0,G);for(let Ft=0;Ft<6;Ft++)t.wn.push(q,0,et),t.wc.push(x,m,p),t.wd.push(_,y,r,u-c);!a&&!(e.m>=2)&&!f&&e.k!=="roof"&&e.k!=="ruin"&&this.colliders.add({ax:U[0],az:U[1],bx:O[0],bz:O[1],y0:d-50,y1:u,kind:"b",tag:o},U[0],U[1],O[0],O[1],o.keys)}}let E=[],L=[];for(let M of n)E.push(M[0],M[1]);for(let M of i){L.push(E.length/2);for(let S of M)E.push(S[0],S[1])}if(f){this.gates.push({outer:n,gmin:c,bot:d,tile:o});let M=(0,Ta.default)(E,L);for(let S=0;S<M.length;S++)t.rp.push(E[M[S]*2],d,E[M[S]*2+1]),t.rc.push(.35,.33,.3)}if(!a&&e.r>.3&&e.s!=="f")this.pitchedRoof(n,i,E,L,u,e,r,t.rp,t.rc);else{let M=(0,Ta.default)(E,L);e.rc?g.set(e.rc):g.set(e.k==="modern"?"#5d5f63":e.k==="util"?"#6c6a66":e.k==="panel"?"#6f6c66":"#615c58");let S=.9+r*.2;for(let N=0;N<M.length;N++)t.rp.push(E[M[N]*2],u,E[M[N]*2+1]),t.rc.push(g.r*S,g.g*S,g.b*S);if(e.m>.5)for(let N=M.length-1;N>=0;N--)t.rp.push(E[M[N]*2],d,E[M[N]*2+1]),t.rc.push(g.r*.6,g.g*.6,g.b*.6)}}pitchedRoof(t,e,n,i,r,o,a,c,l){let h=(0,Ta.default)(n,i),u=[];for(let D=0;D<n.length;D+=2)u.push([n[D],n[D+1]]);let f=[];for(let D of[t,...e])for(let H=0;H<D.length;H++)f.push([D[H],D[(H+1)%D.length]]);let d=0;for(let D=0;D<t.length;D++){let H=t[D],C=t[(D+1)%t.length];d+=H[0]*C[1]-C[0]*H[1]}d=Math.abs(d/2);let g=o.k==="house"||this.mobile,x=g?Math.max(3.2,Math.sqrt(d)/5):Math.max(2.2,Math.sqrt(d)/14),m=[];for(let D=0;D<h.length;D+=3)m.push([h[D],h[D+1],h[D+2]]);let p=new Map,v=(D,H)=>{let C=D<H?D*1e6+H:H*1e6+D,U=p.get(C);return U===void 0&&(U=u.length,u.push([(u[D][0]+u[H][0])/2,(u[D][1]+u[H][1])/2]),p.set(C,U)),U},_=(D,H)=>Math.hypot(u[D][0]-u[H][0],u[D][1]-u[H][1])>x;for(let D=0;D<(g?4:7);D++){let H=!1,C=[];for(let U of m){let O=_(U[0],U[1]),Y=_(U[1],U[2]),K=_(U[2],U[0]),V=O+Y+K;if(!V){C.push(U);continue}H=!0;let[G,q,et]=U,z=[O,Y,K];if(V===1){for(;!z[0];)[G,q,et]=[q,et,G],z=[z[1],z[2],z[0]];let W=v(G,q);C.push([G,W,et],[W,q,et])}else if(V===2){for(;z[2];)[G,q,et]=[q,et,G],z=[z[1],z[2],z[0]];let W=v(G,q),tt=v(q,et);C.push([G,W,tt],[W,q,tt],[G,tt,et])}else{let W=v(G,q),tt=v(q,et),at=v(et,G);C.push([G,W,at],[W,q,tt],[at,tt,et],[W,tt,at])}}if(m=C,!H)break}let y=u.map(([D,H])=>{let C=1e9;for(let[U,O]of f){let Y=O[0]-U[0],K=O[1]-U[1],V=Y*Y+K*K||1e-9,G=((D-U[0])*Y+(H-U[1])*K)/V;G=G<0?0:G>1?1:G;let q=U[0]+Y*G-D,et=U[1]+K*G-H,z=q*q+et*et;z<C&&(C=z)}return Math.sqrt(C)}),T=.01;for(let D of y)T=Math.max(T,D);let b=o.r,E;o.s==="d"?E=y.map(D=>b*Math.sqrt(Math.max(0,1-(1-D/T)**2))):o.s==="p"?E=y.map(D=>b*D/T):E=y.map(D=>Math.min(D*.82,b+1.2));let L=wa;o.rc?L.set(o.rc):L.set(ed[Mn(a*1e6|0)*ed.length|0]);let M=L.r,S=L.g,N=L.b;for(let D of m){let H=.88+Mn(D[0]*31+D[1])*.1;for(let C of D)c.push(u[C][0],r+E[C],u[C][1]),l.push(M*H,S*H,N*H)}}meshesFrom(t,e=!0){let n=[];if(t.wp.length){let i=new xe;i.setAttribute("position",new zt(t.wp,3)),i.setAttribute("normal",new zt(t.wn,3)),i.setAttribute("color",new zt(t.wc,3)),i.setAttribute("fuv",new zt(t.wf,2)),i.setAttribute("fdat",new zt(t.wd,4)),i.computeBoundingSphere();let r=new Dt(i,this.wallMat);r.castShadow=r.receiveShadow=e,n.push(r)}if(t.rp.length){let i=new xe;i.setAttribute("position",new zt(t.rp,3)),i.setAttribute("color",new zt(t.rc,3)),i.computeVertexNormals(),i.computeBoundingSphere();let r=new Dt(i,this.roofMat);r.castShadow=r.receiveShadow=e,n.push(r)}return n}newArrays(){return{wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]}}buildLod(){let t=new Map;this.d.tall.forEach((e,n)=>{let i=e.o.map(u=>[u[0]/10,u[1]/10]),r=0,o=0;for(let u of i)r+=u[0],o+=u[1];r/=i.length,o/=i.length;let a=Jt(Math.floor(r/this.T),0,this.ntx-1),c=Jt(Math.floor(o/this.T),0,this.ntz-1),l=this.tiles[c*this.ntx+a],h=t.get(l);h||t.set(l,h=this.newArrays()),this.emitBuilding(h,e,i,[],Mn(n*613+7),l,!0)});for(let[e,n]of t){let i=new ye;for(let r of this.meshesFrom(n,!1))i.add(r);e.lod=i,this.group.add(i)}this.d.tall=null}*buildTile(t){let e=t.data,n=this.T,i=t.x0,r=t.z0,o=new Gt,a=new qe,c=new P,l=new P,h=new P(0,1,0),u=e.trees.length;if(u){let v=new zn(this.trunkGeo,this.trunkMat,u),_=new zn(this.crownGeo,this.crownMat,u);for(let T=0;T<u;T++){let b=e.trees[T][0]/10+i,E=e.trees[T][1]/10+r,L=t.k*4099+T,M=.75+Mn(L*3+1)*.6,S=this.hAt(b,E);a.setFromAxisAngle(h,Mn(L)*6.28),o.compose(l.set(b,S,E),a,c.set(M,M*(.9+Mn(L*5)*.3),M)),v.setMatrixAt(T,o),_.setMatrixAt(T,o),wa.setHSL(.22+Mn(L*11)*.08,.38+Mn(L*17)*.2,.22+Mn(L*19)*.1),_.setColorAt(T,wa),this.colliders.add({ax:b-.25,az:E,bx:b+.25,bz:E,y0:S-2,y1:S+3,kind:"t",tag:t},b-.3,E-.3,b+.3,E+.3,t.keys)}v.castShadow=_.castShadow=!this.mobile||u<500,_.receiveShadow=!0,v.frustumCulled=_.frustumCulled=!1;let y=new ye;y.add(v,_),t.objs.push(y),this.group.add(y)}yield;let f=e.lamps.map(v=>[v[0]/10+i,v[1]/10+r]),d=new wi(20),g=[];for(let v of f)d.add(v,v[0],v[1],v[0],v[1]);for(let v of this.ix.road[t.k]){if(v.b||v.c<1||v.c>5)continue;let _=v.p,y=14+Mn(_[0][0]*7+_[0][1])*10,T=1;for(let b=0;b<_.length-1;b++){let E=_[b][0]/10,L=_[b][1]/10,M=_[b+1][0]/10,S=_[b+1][1]/10,N=Math.hypot(M-E,S-L);if(!(N<.01)){for(;y<N;){let D=y/N,H=-(S-L)/N,C=(M-E)/N,U=v.c===5?0:v.w/2+.9,O=E+(M-E)*D+H*U*T,Y=L+(S-L)*D+C*U*T;if(O>=i&&Y>=r&&O<i+n&&Y<r+n&&!d.query(O,Y,13,g).length){let K=[O,Y];f.push(K),d.add(K,O,Y,O,Y)}T=-T,y+=v.c>=3?26:30}y-=N}}}t.lampPts=f;let x=f.filter(([v,_])=>this.surfaceY(v,_)===this.hAt(v,_));if(x.length){let v=new zn(this.postGeo,this.postMat,x.length),_=new zn(this.headGeo,this.lampHeadMat,x.length);x.forEach(([T,b],E)=>{o.makeTranslation(T,this.hAt(T,b),b),v.setMatrixAt(E,o),_.setMatrixAt(E,o),this.colliders.add({ax:T-.1,az:b,bx:T+.1,bz:b,y0:-50,y1:999,kind:"p",tag:t},T-.2,b-.2,T+.2,b+.2,t.keys)}),v.frustumCulled=_.frustumCulled=!1;let y=new ye;y.add(v,_),t.objs.push(y),this.group.add(y)}yield;let m=this.newArrays(),p=this.gates.length;for(let v=0;v<e.bld.length;v++){let _=e.bld[v],y=_.o.map(b=>[b[0]/10+i,b[1]/10+r]),T=(_.i||[]).map(b=>b.map(E=>[E[0]/10+i,E[1]/10+r]));this.emitBuilding(m,_,y,T,Mn(t.k*7919+v*977+13),t,!1),v%24===23&&(yield)}for(let v=p;v<this.gates.length;v++){let _=this.gates[v],y=_.outer;if(_.tile!==t)continue;let T=0,b=0;for(let L of y)T+=L[0],b+=L[1];T/=y.length,b/=y.length;let E=y.slice().sort((L,M)=>Math.hypot(M[0]-T,M[1]-b)-Math.hypot(L[0]-T,L[1]-b)).slice(0,4);for(let L of E){let M=L[0]+(T-L[0])*.18,S=L[1]+(b-L[1])*.18,N=_.bot-_.gmin+3,D=new Dt(new Te(1.8,N,1.8),this.gateMat);D.position.set(M,_.gmin-3+N/2,S),D.castShadow=D.receiveShadow=!0,t.objs.push(D),this.group.add(D),this.colliders.add({ax:M-.9,az:S,bx:M+.9,bz:S,y0:-50,y1:_.bot,kind:"b",tag:t},M-1,S-1,M+1,S+1,t.keys),this.colliders.add({ax:M,az:S-.9,bx:M,bz:S+.9,y0:-50,y1:_.bot,kind:"b",tag:t},M-1,S-1,M+1,S+1,t.keys)}}yield;for(let v of this.meshesFrom(m))t.objs.push(v),this.group.add(v);if(yield,e.walls.length){let v=[],_=[],y=new yt,T=(L,M,S,N,D,H,C,U,O)=>{let Y=Math.hypot(S-L,N-M);if(Y<.05)return;let K=-(N-M)/Y*O*.5,V=(S-L)/Y*O*.5,G=[[L+K,M+V],[S+K,N+V],[S-K,N-V],[L-K,M-V]],q=(W,tt,at,ft)=>{v.push(...W,...tt,...at,...W,...at,...ft);for(let At=0;At<6;At++)_.push(y.r,y.g,y.b)},et=W=>W===0||W===3?D:H,z=W=>W===0||W===3?C:U;for(let W=0;W<4;W++){let tt=(W+1)%4;q([G[W][0],et(W),G[W][1]],[G[tt][0],et(tt),G[tt][1]],[G[tt][0],z(tt),G[tt][1]],[G[W][0],z(W),G[W][1]])}q([G[0][0],z(0),G[0][1]],[G[1][0],z(1),G[1][1]],[G[2][0],z(2),G[2][1]],[G[3][0],z(3),G[3][1]])};for(let L of e.walls){let M=L.p.map(N=>[N[0]/10+i,N[1]/10+r]),S=L.k==="c"?2.4:L.k==="r"?.8:.45;y.set(L.k==="c"?"#a39a88":L.k==="r"?"#8f887a":"#a8a092");for(let N=0;N<M.length-1;N++){let[D,H]=M[N],[C,U]=M[N+1],O=this.hAt(D,H),Y=this.hAt(C,U),K=Math.min(L.h,L.k==="c"?9:4);if(T(D,H,C,U,O-2,Y-2,O+K,Y+K,S),this.colliders.add({ax:D,az:H,bx:C,bz:U,y0:Math.min(O,Y)-3,y1:Math.max(O,Y)+K,kind:"w",tag:t},D,H,C,U,t.keys),L.k==="c"){let V=Math.hypot(C-D,U-H);for(let G=.6;G<V-.6;G+=2.4){let q=G/V,et=Math.min(1,(G+1.2)/V),z=Zt(O,Y,q)+K,W=Zt(O,Y,et)+K;T(D+(C-D)*q,H+(U-H)*q,D+(C-D)*et,H+(U-H)*et,z,W,z+1.1,W+1.1,S)}}}}let b=new xe;b.setAttribute("position",new zt(v,3)),b.setAttribute("color",new zt(_,3)),b.computeVertexNormals();let E=new Dt(b,this.stoneMat);E.castShadow=E.receiveShadow=!0,t.objs.push(E),this.group.add(E)}t.lod&&(t.lod.visible=!1),t.state=4,this.lampDirty=!0}buildBridges(){let t=this.d.road.filter(h=>h.b),e=h=>[h[0]/10,h[1]/10],n=h=>h[0]+","+h[1],i=new Set,r=new Map;t.forEach((h,u)=>{for(let f of[h.p[0],h.p[h.p.length-1]]){let d=n(f);r.has(d)||r.set(d,[]),r.get(d).push(u)}});let o=[];t.forEach((h,u)=>{if(i.has(u))return;i.add(u);let f=h.p.slice(),d=!0;for(;d;){d=!1;for(let g of[!1,!0]){let x=n(g?f[0]:f[f.length-1]);for(let m of r.get(x)||[]){if(i.has(m))continue;let p=t[m];if((p.n||"")===(h.n||"")){if(g){if(n(p.p[p.p.length-1])!==x)continue;f=p.p.slice(0,-1).concat(f)}else{if(n(p.p[0])!==x)continue;f=f.concat(p.p.slice(1))}i.add(m),d=!0;break}}if(d)break}}o.push({pts:f.map(e),w:h.w,n:h.n||"",c:h.c,bh:h.bh})});let a=this.d.river.map(h=>h.map(e)),c=(h,u)=>a.some(f=>jf(h,u,f));this.bridges=[];let l=o.filter(h=>h.n==="Most SNP"&&h.pts.length>3).length;for(let h of o){let u=[],f=0;for(let b=0;b<h.pts.length-1;b++){let[E,L]=h.pts[b],[M,S]=h.pts[b+1],N=Math.hypot(M-E,S-L),D=Math.max(1,Math.ceil(N/2));for(let H=0;H<D;H++)u.push({x:E+(M-E)*H/D,z:L+(S-L)*H/D,d:f+N*H/D});f+=N}let d=h.pts[h.pts.length-1];if(u.push({x:d[0],z:d[1],d:f}),f<1)continue;let g=this.hAt(u[0].x,u[0].z),x=this.hAt(d[0],d[1]),m=h.n==="Most SNP",p=h.bh!==void 0?h.bh:m?11.5:7,v=p===0;for(let b of u)b.base=Math.max(Zt(g,x,b.d/f),this.water+1.6),b.tgt=!v&&c(b.x,b.z)?this.water+p:b.base,v||(b.tgt=Math.max(b.tgt,this.hAt(b.x,b.z)+(m?.2:0)));let _=m?.055:.075;for(let b of u){let E=b.base;if(!v)for(let L of u)E=Math.max(E,L.tgt-_*Math.abs(b.d-L.d));b.y=E}let y=m?l>1?6.8:10.8:Math.max(2.5,h.w/2+1.2),T={s:u,hw:y,big:m,low:v,n:h.n};for(let b=0;b<u.length-1;b++){let E=u[b],L=u[b+1],M={ax:E.x,az:E.z,bx:L.x,bz:L.z,ya:E.y,yb:L.y,hw:y,br:T};this.decks.add(M,Math.min(E.x,L.x)-y,Math.min(E.z,L.z)-y,Math.max(E.x,L.x)+y,Math.max(E.z,L.z)+y)}this.bridges.push(T)}}buildBridgeMeshes(){let t=[],e=[],n=new yt,i=(d,g,x,m,p)=>{t.push(...d,...g,...x,...d,...x,...m);for(let v=0;v<6;v++)e.push(p[0],p[1],p[2])};for(let d of this.bridges){let g=d.s;n.set(d.big?"#8d9297":"#b3aea2");let x=[n.r,n.g,n.b],m=[.24,.24,.26];for(let p=0;p<g.length-1;p++){let v=g[p],_=g[p+1],y=Math.hypot(_.x-v.x,_.z-v.z)||1,T=-(_.z-v.z)/y,b=(_.x-v.x)/y,E=d.hw,L=[v.x+T*E,v.y,v.z+b*E],M=[v.x-T*E,v.y,v.z-b*E],S=[_.x+T*E,_.y,_.z+b*E],N=[_.x-T*E,_.y,_.z-b*E],D=d.big?2.2:d.low?.8:2.2,H=V=>[V[0],V[1]-D,V[2]];i(L,S,N,M,m),i(H(L),H(M),H(N),H(S),x.map(V=>V*.6)),i(L,H(L),H(S),S,x),i(M,N,H(N),H(M),x);let C=[v.x+T*.15,v.y+.03,v.z+b*.15],U=[v.x-T*.15,v.y+.03,v.z-b*.15],O=[_.x-T*.15,_.y+.03,_.z-b*.15],Y=[_.x+T*.15,_.y+.03,_.z+b*.15];if((d.big||p%4<2&&E>4)&&i(C,Y,O,U,[.8,.78,.7]),v.y>this.hAt(v.x,v.z)+.9||_.y>this.hAt(_.x,_.z)+.9){for(let V of[1,-1]){let G=[v.x+T*E*V,v.y,v.z+b*E*V],q=[_.x+T*E*V,_.y,_.z+b*E*V],et=(G[0]+q[0])/2+T*V*.7,z=(G[2]+q[2])/2+b*V*.7,W=!1;for(let at of this.decks.query(et,z,1,this._tmp)){if(at.br===d)continue;let ft=qs(et,z,at.ax,at.az,at.bx,at.bz,this._c);if(Math.hypot(et-ft.x,z-ft.z)<at.hw&&Math.abs(at.ya+(at.yb-at.ya)*ft.t-v.y)<1.6){W=!0;break}}if(W)continue;let tt=(at,ft)=>[at[0],at[1]+ft,at[2]];i(G,q,tt(q,1.1),tt(G,1.1),[.78,.79,.8]),this.colliders.add({ax:G[0],az:G[2],bx:q[0],bz:q[2],y0:Math.min(v.y,_.y)-1,y1:Math.max(v.y,_.y)+1.4,kind:"r",tag:null},G[0],G[2],q[0],q[2])}if(!d.low&&!d.big&&p%30===15){let V=Math.min(this.hAt(v.x,v.z),this.water)-3;if(v.y-V>4){let q=[v.x-2.2,v.y-D,v.z-2.2],et=[v.x+2.2,v.y-D,v.z-2.2],z=[v.x+2.2,v.y-D,v.z+2.2],W=[v.x-2.2,v.y-D,v.z+2.2],tt=at=>[at[0],V,at[2]];i(q,et,tt(et),tt(q),x),i(et,z,tt(z),tt(et),x),i(z,W,tt(W),tt(z),x),i(W,q,tt(q),tt(W),x)}}}}}let r=(d,g,x,m)=>{let p=g[0]-d[0],v=g[1]-d[1],_=g[2]-d[2],y=Math.hypot(p,v,_)||1,T=-_,b=p,E=Math.hypot(T,b);E<1e-4?(T=1,b=0):(T/=E,b/=E);let L=v*b/y,M=(_*T-p*b)/y,S=-v*T/y,N=x/2,D=(C,U,O)=>[C[0]+T*N*U+L*N*O,C[1]+M*N*O,C[2]+b*N*U+S*N*O],H=[[1,1],[-1,1],[-1,-1],[1,-1]];for(let C=0;C<4;C++){let U=(C+1)%4;i(D(d,...H[C]),D(g,...H[C]),D(g,...H[U]),D(d,...H[U]),m)}},o=d=>this.bridges.filter(g=>g.n===d).sort((g,x)=>x.s.length-g.s.length)[0],a=d=>{let g=Math.max(...d.s.map(m=>m.y)),x=d.s.filter(m=>m.y>g-.6);return x.length>8?x:null},c=(d,g,x,m)=>{let p=d[Math.max(0,g-1)],v=d[Math.min(d.length-1,g+1)],_=Math.hypot(v.x-p.x,v.z-p.z)||1;return[d[g].x-(v.z-p.z)/_*x,d[g].y+m,d[g].z+(v.x-p.x)/_*x]},l=o("Most Apollo");if(l&&a(l)){let d=a(l),g=d.length-1,x=[.86,.87,.88];for(let m of[-(l.hw+9),l.hw+9]){let p=null;for(let v=0;v<=g;v+=3){let _=v/g,y=c(d,v,m,34*4*_*(1-_));p&&r(p,y,1.8,x),v%9===0&&v>0&&v<g&&r(y,c(d,v,m*.75,.5),.3,x),p=y}p&&r(p,c(d,g,m,0),1.8,x)}}let h=o("Star\xFD most");if(h&&a(h)){let d=a(h),g=d.length-1,x=[.42,.55,.48];for(let m of[-(h.hw+2.5),h.hw+2.5])for(let p=0;p+6<=g;p+=6){let v=c(d,p,m,.4),_=c(d,p+6,m,.4),y=c(d,p+3,m,8.5),T=c(d,Math.max(0,p-3),m,8.5);r(v,y,.5,x),r(y,_,.5,x),p&&r(T,y,.6,x),r(v,_,.5,x)}}if(!t.length)return;let u=new xe;u.setAttribute("position",new zt(t,3)),u.setAttribute("color",new zt(e,3)),u.computeVertexNormals();let f=new Dt(u,this.stoneMat);f.castShadow=f.receiveShadow=!0,f.frustumCulled=!1,this.group.add(f)}buildPylon(){let t=this.d.pylon.map(m=>m.map(p=>[p[0]/10,p[1]/10]));if(t.length<2)return;let e=t.map(m=>{let p=0,v=0;for(let _ of m)p+=_[0],v+=_[1];return[p/m.length,v/m.length]}),n=new ye,i=new fe({color:9212310}),r=this.water+84,o=(e[0][0]+e[1][0])/2,a=(e[0][1]+e[1][1])/2,c=14,l=[];for(let m of e){let p=this.hAt(m[0],m[1])-2,v=new P(m[0],p,m[1]),_=new P(o+(m[0]-o)*.55,r,a+c),y=new Dt(new Te(3.2,v.distanceTo(_),4.2),i);y.position.copy(v).add(_).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new P(0,1,0),_.clone().sub(v).normalize()),y.castShadow=!0,n.add(y),l.push(_),this.colliders.add({ax:m[0]-2,az:m[1]-2,bx:m[0]+2,bz:m[1]+2,y0:-50,y1:p+30,kind:"b",tag:null},m[0]-2,m[1]-2,m[0]+2,m[1]+2),this.colliders.add({ax:m[0]+2,az:m[1]-2,bx:m[0]-2,bz:m[1]+2,y0:-50,y1:p+30,kind:"b",tag:null},m[0]-2,m[1]-2,m[0]+2,m[1]+2)}let h=o,u=a+c,f=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([m,p])=>new ot(m,p)),d=new Dt(new na(f,40),new fe({color:10133670}));d.position.set(h,r+3,u),d.castShadow=!0,n.add(d);let g=new Dt(new ra(15.8,.35,6,48),new Ze({color:16765578}));g.rotation.x=Math.PI/2,g.position.set(h,r+3.3,u),this.ufoRing=g,n.add(g);let x=this.bridges.find(m=>m.big);if(x){let m=new fe({color:13159632}),p=x.s.filter(_=>{let y=Math.hypot(_.x-o,_.z-a);return y>40&&y<240&&_.z<a}),v=[];for(let _=0;_<p.length;_+=Math.max(1,Math.floor(p.length/8)))v.push(p[_]);for(let _ of v)for(let y of[-1,1]){let T=l[y<0?0:1],b=new P(Zt(T.x,o,.2),Zt(r-12,r-40,Math.hypot(_.x-o,_.z-a)/240),Zt(T.z,a,.6)),E=new P(_.x+y*9.5,_.y+.6,_.z),L=new Dt(new Te(.35,b.distanceTo(E),.35),m);L.position.copy(b).add(E).multiplyScalar(.5),L.quaternion.setFromUnitVectors(new P(0,1,0),E.clone().sub(b).normalize()),n.add(L)}}n.traverse(m=>{m.frustumCulled=!1}),this.group.add(n),this.ufoPos=new P(h,r+3,u)}buildRoadGraph(){let t=this.d.road.filter(l=>l.c>=1&&l.c<=4&&!l.nv),e=new Map,n=l=>l[0]*2e5+l[1];for(let l of t)l.p.forEach((h,u)=>{let f=n(h);e.set(f,(e.get(f)||0)+(u===0||u===l.p.length-1?2:1))});let i=new Map,r=l=>{let h=n(l),u=i.get(h);return u||(u={x:l[0]/10,z:l[1]/10,out:[],inn:[],id:i.size,sig:null},i.set(h,u)),u},o=[],a=l=>{for(let h=0;h<l.p.length-1;h++){let u={ax:l.p[h][0]/10,az:l.p[h][1]/10,bx:l.p[h+1][0]/10,bz:l.p[h+1][1]/10,hw:l.w/2,n:l.n};this.names.add(u,u.ax,u.az,u.bx,u.bz)}};for(let l of t){let h=0;for(let u=1;u<l.p.length;u++)if(u===l.p.length-1||e.get(n(l.p[u]))>1){let f=l.p.slice(h,u+1).map(p=>[p[0]/10,p[1]/10]),d=r(l.p[h]),g=r(l.p[u]),x=(p,v,_)=>{let y=[0],T=0;for(let E=1;E<_.length;E++)T+=Math.hypot(_[E][0]-_[E-1][0],_[E][1]-_[E-1][1]),y.push(T);let b={a:p,b:v,p:_,cum:y,L:T,r:l,lane:l.o?l.w>8?l.w/4:0:Math.min(l.w/4,1.9),v:[6,9,12,14,17][l.c]||9,id:o.length};return o.push(b),p.out.push(b),v.inn.push(b),b},m=x(d,g,f);if(!l.o){let p=x(g,d,f.slice().reverse());m.rev=p,p.rev=m}h=u}l.n&&a(l)}for(let l of this.d.road)(l.c===5||l.c===0||l.nv)&&l.n&&a(l);let c=[...i.values()];this.sigs=[];for(let l of this.d.signals){let h=l[0]/10,u=l[1]/10,f=null,d=18;for(let g of c){if(Math.abs(g.x-h)>18||Math.abs(g.z-u)>18)continue;let x=Math.hypot(g.x-h,g.z-u);x<d&&g.out.length+g.inn.length>=3&&(d=x,f=g)}f&&!f.sig&&(f.sig={phase:Mn(f.id)*30,x:h,z:u},this.sigs.push(f))}for(let l of o)if(!(l.L<=.5))for(let h=0;h<l.p.length-1;h++){let u={e:l,k:h,ax:l.p[h][0],az:l.p[h][1],bx:l.p[h+1][0],bz:l.p[h+1][1]};this.edgeGrid.add(u,u.ax,u.az,u.bx,u.bz)}this.nodes=c,this.edges=o.filter(l=>l.L>.5)}nearestEdge(t,e,n=40,i=null){let r=this.edgeGrid.query(t,e,n,this._tmp),o=null,a=n,c=0;for(let l of r){let h=qs(t,e,l.ax,l.az,l.bx,l.bz,this._c),u=Math.hypot(t-h.x,e-h.z);if(i!==null){let f=Math.atan2(l.bx-l.ax,l.bz-l.az);u+=Math.abs((f-i+Math.PI*3)%(Math.PI*2)-Math.PI)*6}u<a&&(a=u,o=l,c=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return o?{e:o.e,s:c,d:a}:null}signalState(t,e,n){if(!t.sig)return!0;let i=(n+t.sig.phase)%30,r=Math.abs(Math.cos(e))>Math.abs(Math.sin(e));return i<12?r:i<15?!1:i<27?!r:!1}buildPedGraph(){let t=[];for(let c of this.d.foot)t.push(c.p);for(let c of this.d.cross)t.push(c);for(let c of this.d.steps)t.push(c);for(let c of this.d.road)c.c===5&&!c.b&&t.push(c.p);let e=c=>c[0]*2e5+c[1],n=new Map;for(let c of t)c.forEach((l,h)=>n.set(e(l),(n.get(e(l))||0)+(h===0||h===c.length-1?2:1)));let i=new Map,r=c=>{let l=e(c),h=i.get(l);return h||(h={x:c[0]/10,z:c[1]/10,e:[]},i.set(l,h)),h},o=[],a=(c,l,h,u)=>{let f=0,d=[0];for(let x=1;x<c.length;x++)f+=Math.hypot(c[x][0]-c[x-1][0],c[x][1]-c[x-1][1]),d.push(f);if(f<(u?8:.5))return;let g={a:l,b:h,p:c,cum:d,L:f,sw:u};l.e.push(g),h.e.push(g),o.push(g)};for(let c of t){let l=0;for(let h=1;h<c.length;h++)(h===c.length-1||n.get(e(c[h]))>1)&&(a(c.slice(l,h+1).map(u=>[u[0]/10,u[1]/10]),r(c[l]),r(c[h]),0),l=h)}for(let c of this.d.road)if(!(c.c<1||c.c>3||c.b||c.c===3&&c.o&&c.w>9))for(let l of[1,-1]){let h=(c.w/2+1.1)*l,u=c.p.map((f,d)=>{let g=c.p[Math.max(0,d-1)],x=c.p[Math.min(c.p.length-1,d+1)],m=x[0]-g[0],p=x[1]-g[1],v=Math.hypot(m,p)||1;return[f[0]/10-p/v*h,f[1]/10+m/v*h]});a(u,{x:u[0][0],z:u[0][1],e:[]},{x:u[u.length-1][0],z:u[u.length-1][1],e:[]},1)}this.pedEdges=o;for(let c of o){let l=c.p[0],h=c.p[c.p.length-1];this.pedGrid.add(c,Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.max(l[0],h[0]),Math.max(l[1],h[1]))}}static at(t,e,n){let i=t.cum;e=Jt(e,0,t.L);let r=0;for(;r<i.length-2&&i[r+1]<e;)r++;let o=i[r+1]-i[r]||1,a=(e-i[r])/o,c=t.p[r],l=t.p[r+1];return n.x=c[0]+(l[0]-c[0])*a,n.z=c[1]+(l[1]-c[1])*a,n.dx=(l[0]-c[0])/o,n.dz=(l[1]-c[1])/o,n}collide(t,e,n,i,r){let o=this.colliders.query(t,e,i+.5,this._tmp),a=!1;r.nx=0,r.nz=0,r.d=0,r.kind=null;for(let c=0;c<o.length;c++){let l=o[c];if(n>l.y1||n+1.5<l.y0)continue;let h=qs(t,e,l.ax,l.az,l.bx,l.bz,this._c),u=t-h.x,f=e-h.z,d=Math.hypot(u,f);if(d<i){d<1e-4&&(u=-(l.bz-l.az),f=l.bx-l.ax);let g=Math.hypot(u,f)||1,x=i-d;t+=u/g*x,e+=f/g*x,r.nx+=u/g,r.nz+=f/g,r.d=Math.max(r.d,x),r.kind=l.kind,a=!0}}if(r.x=t,r.z=e,a){let c=Math.hypot(r.nx,r.nz)||1;r.nx/=c,r.nz/=c}return a}rayHit(t,e,n,i,r){let o=(t+n)/2,a=(e+i)/2,c=Math.hypot(n-t,i-e)/2+1,l=this.colliders.query(o,a,c,this._tmp),h=1;for(let u of l){if(u.kind!=="b"&&u.kind!=="w"||r>u.y1+.5)continue;let f=py(t,e,n,i,u.ax,u.az,u.bx,u.bz);f!==null&&f<h&&(h=f)}return h}};function py(s,t,e,n,i,r,o,a){let c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return null;let d=((i-s)*u-(r-t)*h)/f,g=((i-s)*l-(r-t)*c)/f;return d>=0&&d<=1&&g>=0&&g<=1?d:null}var sd=" .:-=+*%#@",rd="\u2580\u2584\u258C\u2590\u2598\u259D\u2596\u2597/\\|_',.`",Yn=36,Bn=60,Zi=16;function my(){let s=[...sd,...rd],t=Math.ceil(s.length/Zi),e=document.createElement("canvas");e.width=Zi*Yn,e.height=t*Bn;let n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,e.width,e.height),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${Bn*.78}px "JetBrains Mono", ui-monospace, Menlo, monospace`;let i={"\u2580":[[0,0,1,.5]],"\u2584":[[0,.5,1,.5]],"\u258C":[[0,0,.5,1]],"\u2590":[[.5,0,.5,1]],"\u2598":[[0,0,.5,.5]],"\u259D":[[.5,0,.5,.5]],"\u2596":[[0,.5,.5,.5]],"\u2597":[[.5,.5,.5,.5]],"\u259A":[[0,0,.5,.5],[.5,.5,.5,.5]],"\u259E":[[.5,0,.5,.5],[0,.5,.5,.5]]};s.forEach((c,l)=>{let h=l%Zi*Yn,u=Math.floor(l/Zi)*Bn;if(i[c])for(let[f,d,g,x]of i[c])n.fillRect(h+f*Yn,u+d*Bn,g*Yn,x*Bn);else c!==" "&&n.fillText(c,h+Yn/2,u+Bn*.52)});let r=n.getImageData(0,0,e.width,e.height).data,o=[],a=[];return s.forEach((c,l)=>{let h=l%Zi*Yn,u=Math.floor(l/Zi)*Bn,f=[0,0,0,0,0,0],d=0;for(let x=0;x<Bn;x++)for(let m=0;m<Yn;m++){let p=r[((u+x)*e.width+h+m)*4]/255,v=Math.min(2,Math.floor(x/Bn*3))*2+Math.min(1,Math.floor(m/Yn*2));f[v]+=p,d+=p}let g=Yn*Bn/6;for(let x=0;x<6;x++)f[x]/=g;o.push(f),a.push(d/(Yn*Bn))}),{cv:e,glyphs:s,vecs:o,dens:a,rows:t}}var Ul=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Aa=class{constructor(t){this.r=t;let e=my();this.A=e;let n=new Wi(e.cv);n.colorSpace=Qe,n.generateMipmaps=!0,n.minFilter=On,n.magFilter=De,this.atlas=n;let i=sd.length,r=rd.length,o=[];for(let l=0;l<r;l++){let h=e.vecs[i+l],u=Math.min(...h),f=Math.max(...h),d=h.map(g=>f-u>.001?(g-u)/(f-u):0);o.push(new P(d[0],d[1],d[2]),new P(d[3],d[4],d[5]))}let a=t.capabilities.isWebGL2&&(t.extensions.has("EXT_color_buffer_float")||t.extensions.has("EXT_color_buffer_half_float"));this.type=a?Hi:Fn,this.sceneRT=new _n(4,4,{type:this.type,depthBuffer:!0,minFilter:ve,magFilter:ve}),this.cellRT=new Oo(4,4,2,{type:Fn,minFilter:ve,magFilter:ve,depthBuffer:!1}),this.brightRT=new _n(4,4,{type:this.type,depthBuffer:!1,generateMipmaps:!0,minFilter:On,magFilter:De}),this.exposure={value:1},this.cellMat=new zs({glslVersion:Cs,uniforms:{tScene:{value:this.sceneRT.texture},uShape:{value:o},uExposure:this.exposure,uSat:{value:1.12}},vertexShader:"precision highp float; in vec3 position; in vec2 uv;"+Ul,fragmentShader:`precision highp float; precision highp int;
        uniform sampler2D tScene; uniform vec3 uShape[${r*2}]; uniform float uExposure; uniform float uSat;
        layout(location=0) out vec4 oFG; layout(location=1) out vec4 oBG;
        vec3 tone(vec3 c){ c *= uExposure; c = (c*(2.51*c+0.03))/(c*(2.43*c+0.59)+0.14); c = clamp(c,0.,1.);
          float l = dot(c, vec3(0.299,0.587,0.114)); c = mix(vec3(l), c, uSat); return pow(clamp(c,0.,1.), vec3(1.0/2.2)); }
        void main(){
          ivec2 cell = ivec2(gl_FragCoord.xy);
          ivec2 base = cell * ivec2(4,6);
          vec3 rc[6]; float rl[6];
          vec3 tot = vec3(0.);
          for (int ry=0; ry<3; ry++) for (int rx=0; rx<2; rx++){
            vec3 s = vec3(0.);
            for (int j=0;j<2;j++) for(int i=0;i<2;i++) s += texelFetch(tScene, base + ivec2(rx*2+i, ry*2+j), 0).rgb;
            s = tone(s*0.25);
            int k = (2-ry)*2 + rx;
            rc[k] = s; rl[k] = dot(s, vec3(0.299,0.587,0.114)); tot += s;
          }
          vec3 C = tot/6.0;
          float mn = 1.0, mx = 0.0;
          for (int k=0;k<6;k++){ mn = min(mn, rl[k]); mx = max(mx, rl[k]); }
          float con = mx - mn;
          float L = dot(C, vec3(0.299,0.587,0.114));
          int g; vec3 fg, bg;
          if (con > 0.11) {
            float best = 1e9; int bi = 0;
            float nv[6];
            for (int k=0;k<6;k++) nv[k] = (rl[k]-mn)/con;
            for (int s=0; s<${r}; s++){
              vec3 a = uShape[s*2], b = uShape[s*2+1];
              float d = (nv[0]-a.x)*(nv[0]-a.x)+(nv[1]-a.y)*(nv[1]-a.y)+(nv[2]-a.z)*(nv[2]-a.z)
                      + (nv[3]-b.x)*(nv[3]-b.x)+(nv[4]-b.y)*(nv[4]-b.y)+(nv[5]-b.z)*(nv[5]-b.z);
              if (d < best) { best = d; bi = s; }
            }
            g = ${i} + bi;
            vec3 hi = vec3(0.), lo = vec3(0.); float nh=0., nl=0.;
            for (int k=0;k<6;k++){ if (nv[k] > 0.5){ hi += rc[k]; nh += 1.; } else { lo += rc[k]; nl += 1.; } }
            fg = hi/max(nh,1.); bg = lo/max(nl,1.);
            fg = fg*1.08 + 0.02;
            bg *= 0.92;
          } else {
            float d = clamp(L*1.15, 0.0, 0.999);
            g = int(floor(d * ${i}.0));
            float k = clamp(0.1 + con*2.2, 0.1, 0.28);
            fg = C*(1.0+k) + 0.015;
            bg = C*(1.0-k);
          }
          oFG = vec4(clamp(fg,0.,1.), (float(g)+0.5)/255.0);
          oBG = vec4(clamp(bg,0.,1.), 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.brightMat=new zs({glslVersion:Cs,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure},vertexShader:"precision highp float; in vec3 position; in vec2 uv;"+Ul,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; out vec4 o;
        void main(){ ivec2 b = ivec2(gl_FragCoord.xy)*ivec2(4,6); vec3 s = vec3(0.);
          for(int j=0;j<6;j+=2) for(int i=0;i<4;i+=2) s += texelFetch(tScene, b+ivec2(i,j), 0).rgb;
          s = s/6.0*uExposure; o = vec4(max(s-vec3(1.3), 0.0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new zs({glslVersion:Cs,uniforms:{tFG:{value:this.cellRT.texture[0]},tBG:{value:this.cellRT.texture[1]},tBright:{value:this.brightRT.texture},tAtlas:{value:this.atlas},uCell:{value:new ot(8,14)},uOff:{value:new ot(0,0)},uGrid:{value:new ot(1,1)},uAtlas:{value:new ot(Zi,e.rows)},uBloom:{value:.6},uFlash:{value:new oe(0,0,0,0)}},vertexShader:"precision highp float; in vec3 position; in vec2 uv;"+Ul,fragmentShader:`precision highp float;
        uniform sampler2D tFG, tBG, tBright, tAtlas; uniform vec2 uCell, uOff, uGrid, uAtlas; uniform float uBloom; uniform vec4 uFlash;
        in vec2 vUv; out vec4 o;
        void main(){
          vec2 p = gl_FragCoord.xy - uOff;
          vec2 cf = p / uCell;
          ivec2 c = ivec2(floor(cf));
          if (c.x < 0 || c.y < 0 || float(c.x) >= uGrid.x || float(c.y) >= uGrid.y) { o = vec4(0.,0.,0.,1.); return; }
          vec2 l = fract(cf);
          vec4 fg = texelFetch(tFG, c, 0);
          vec3 bg = texelFetch(tBG, c, 0).rgb;
          float gi = floor(fg.a*255.0);
          vec2 gc = vec2(mod(gi, uAtlas.x), floor(gi / uAtlas.x));
          vec2 auv = vec2((gc.x + l.x)/uAtlas.x, 1.0 - (gc.y + (1.0-l.y))/uAtlas.y);
          float a = texture(tAtlas, auv).r;
          vec3 col = mix(bg, fg.rgb, a);
          vec2 buv = cf / uGrid;
          vec3 bl = textureLod(tBright, buv, 1.0).rgb*0.5 + textureLod(tBright, buv, 2.5).rgb*0.7 + textureLod(tBright, buv, 4.0).rgb*0.9;
          col += bl * uBloom;
          col = mix(col, uFlash.rgb, uFlash.a);
          // vignette
          vec2 q = vUv - 0.5; col *= 1.0 - dot(q,q)*0.55;
          o = vec4(col, 1.0);
        }`,depthTest:!1,depthWrite:!1});let c=new xe;c.setAttribute("position",new zt([-1,-1,0,3,-1,0,-1,3,0],3)),c.setAttribute("uv",new zt([0,0,2,0,0,2],2)),this.quad=new Dt(c,this.cellMat),this.quad.frustumCulled=!1,this.qscene=new Us,this.qscene.add(this.quad),this.qcam=new Ds}setSize(t,e,n){let i=Math.max(6,Math.round(n)),r=Math.max(4,Math.round(i*.58)),o=Math.floor(t/r),a=Math.floor(e/i);this.cols=o,this.rows=a,this.sceneRT.setSize(o*4,a*6),this.cellRT.setSize(o,a),this.brightRT.setSize(o,a);let c=this.finalMat.uniforms;return c.uCell.value.set(r,i),c.uGrid.value.set(o,a),c.uOff.value.set(Math.floor((t-o*r)/2),Math.floor((e-a*i)/2)),this.aspect=o*4/(a*6)*(r/4/(i/6)),{cols:o,rows:a,aspect:o*r/(a*i)}}render(t,e){let n=this.r;n.setRenderTarget(this.sceneRT),n.render(t,e),this.quad.material=this.cellMat,n.setRenderTarget(this.cellRT),n.render(this.qscene,this.qcam),this.quad.material=this.brightMat,n.setRenderTarget(this.brightRT),n.render(this.qscene,this.qcam),this.quad.material=this.finalMat,n.setRenderTarget(null),n.render(this.qscene,this.qcam)}};function Fl(s,t){if(t===Af)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ir||t===ga){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Ir)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var Ra=class extends hi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Vl(e)}),this.register(function(e){return new $l(e)}),this.register(function(e){return new Ql(e)}),this.register(function(e){return new th(e)}),this.register(function(e){return new Xl(e)}),this.register(function(e){return new ql(e)}),this.register(function(e){return new Yl(e)}),this.register(function(e){return new Zl(e)}),this.register(function(e){return new Gl(e)}),this.register(function(e){return new Kl(e)}),this.register(function(e){return new Wl(e)}),this.register(function(e){return new Jl(e)}),this.register(function(e){return new jl(e)}),this.register(function(e){return new kl(e)}),this.register(function(e){return new eh(e)}),this.register(function(e){return new nh(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ei.extractUrlBase(t);o=Ei.resolveURL(l,this.path)}else o=Ei.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Pr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===hd){try{o[ie.KHR_BINARY_GLTF]=new ih(t)}catch(u){i&&i(u);return}r=JSON.parse(o[ie.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ie.KHR_MATERIALS_UNLIT:o[u]=new Hl;break;case ie.KHR_DRACO_MESH_COMPRESSION:o[u]=new sh(r,this.dracoLoader);break;case ie.KHR_TEXTURE_TRANSFORM:o[u]=new rh;break;case ie.KHR_MESH_QUANTIZATION:o[u]=new oh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function gy(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kl=class{constructor(t){this.parser=t,this.name=ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new yt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],ze);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ha(h),l.distance=u;break;case"spot":l=new Gs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},Hl=class{constructor(){this.name=ie.KHR_MATERIALS_UNLIT}getMaterialType(){return Ze}extendParams(t,e,n){let i=[];t.color=new yt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ze),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,ge))}return Promise.all(i)}},Gl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Vl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ot(a,a)}return Promise.all(r)}},Wl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new yt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ze)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ge)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ql=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new yt().setRGB(a[0],a[1],a[2],ze),Promise.all(r)}},Zl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new yt().setRGB(a[0],a[1],a[2],ze),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ge)),Promise.all(r)}},jl=class{constructor(t){this.parser=t,this.name=ie.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jl=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},$l=class{constructor(t){this.parser=t,this.name=ie.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Ql=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},th=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},eh=class{constructor(t){this.name=ie.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},nh=class{constructor(t){this.name=ie.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let x=new Gt,m=new P,p=new qe,v=new P(1,1,1),_=new zn(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(m,p,v));for(let y in c)if(y==="_COLOR_0"){let T=c[y];_.instanceColor=new Vi(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);we.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},hd="glTF",Or=12,od={JSON:1313821514,BIN:5130562},ih=class{constructor(t){this.name=ie.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Or,r=new DataView(t,Or),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===od.JSON){let l=new Uint8Array(t,Or+o,a);this.content=n.decode(l)}else if(c===od.BIN){let l=Or+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ie.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ch[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=ch[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Ys[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(d)},a,l,ze,f)})})}},rh=class{constructor(){this.name=ie.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},oh=class{constructor(){this.name=ie.KHR_MESH_QUANTIZATION}},Ca=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,x=g-l,m=-2*d+3*f,p=d-f,v=1-m,_=p-f+u;for(let y=0;y!==a;y++){let T=o[x+y+a],b=o[x+y+c]*h,E=o[g+y+a],L=o[g+y]*h;r[y]=v*T+_*b+m*E+p*L}return r}},xy=new qe,ah=class extends Ca{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return xy.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:ve,9729:De,9984:Ao,9985:yl,9986:or,9987:On},cd={33071:xn,33648:mr,10497:ki},Ol={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_y={CUBICSPLINE:void 0,LINEAR:Gi,STEP:Rs},zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function Ki(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ai(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function yy(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function My(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function by(s){let t,e=s.extensions&&s.extensions[ie.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Bl(e.attributes):t=s.indices+":"+Bl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Bl(s.targets[n]);return t}function Bl(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function lh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ey=new Gt,hh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new gy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ca(this.options.manager):this.textureLoader=new ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),Ai(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ie.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ei.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ol[i.type],a=Ys[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Me(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ol[i.type],l=Ys[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=e.cache.get(v);_||(x=new l(a,p*d,i.count*d/h),_=new yr(x,d/h),e.cache.add(v,_)),m=new Mr(_,c,f%d/h,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new Me(x,c,g);if(i.sparse!==void 0){let p=Ol.SCALAR,v=Ys[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(o[1],_,i.sparse.count*p),b=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Me(m.array.slice(),m.itemSize,m.normalized));for(let E=0,L=T.length;E<L;E++){let M=T[E];if(m.setX(M,b[E*c]),c>=2&&m.setY(M,b[E*c+1]),c>=3&&m.setZ(M,b[E*c+2]),c>=4&&m.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ad[f.magFilter]||De,h.minFilter=ad[f.minFilter]||On,h.wrapS=cd[f.wrapS]||ki,h.wrapT=cd[f.wrapT]||ki,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(x){let m=new Be(x);m.needsUpdate=!0,f(m)}),e.load(Ei.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Sy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ie.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ie.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ie.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Er,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Sr,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Bs}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[ie.KHR_MATERIALS_UNLIT]){let u=i[ie.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new yt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ze),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,ge)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Oe);let h=r.alphaMode||zl.OPAQUE;if(h===zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ze&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ze&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ze){let u=r.emissiveFactor;a.emissive=new yt().setRGB(u[0],u[1],u[2],ze)}return r.emissiveTexture!==void 0&&o!==Ze&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ge)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ai(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ki(i,u,r),u})}createUniqueName(t){let e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return ld(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=by(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ie.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ld(new xe,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?vy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,v=l[d];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new qo(x,v):new Dt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=Fl(p.geometry,ga):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=Fl(p.geometry,Ir));else if(m.mode===Cn.LINES)p=new Zo(x,v);else if(m.mode===Cn.LINE_STRIP)p=new Fs(x,v);else if(m.mode===Cn.LINE_LOOP)p=new Ko(x,v);else if(m.mode===Cn.POINTS)p=new jo(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&My(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Ai(p,r),m.extensions&&Ki(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ki(i,u[0],r),u[0];let f=new ye;r.extensions&&Ki(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Fe(Pf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ai(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Gt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Yo(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let v=0,_=f.length;v<_;v++){let y=f[v],T=d[v],b=g[v],E=x[v],L=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,T,b,E,L);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new ks(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ey)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new br:l.length>1?h=new ye:l.length===1?h=l[0]:h=new we,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){let u=new Gt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new ye;n.name&&(r.name=i.createUniqueName(n.name)),Ai(r,n),n.extensions&&Ki(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof fn||f instanceof Be)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];Ti[r.path]===Ti.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ti[r.path]){case Ti.weights:l=ci;break;case Ti.rotation:l=Xn;break;case Ti.position:case Ti.scale:l=li;break;default:switch(n.itemSize){case 1:l=ci;break;case 2:case 3:default:l=li;break}break}let h=i.interpolation!==void 0?_y[i.interpolation]:Gi,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Ti[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=lh(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Xn?ah:Ca;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wy(s,t,e){let n=t.attributes,i=new ke;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let h=lh(Ys[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=lh(Ys[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ld(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return re.workingColorSpace!==ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${re.workingColorSpace}" not supported.`),Ai(s,t),wy(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?yy(s,t.targets,e):s})}function ud(s){let t=new Map,e=new Map,n=s.clone();return fd(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function fd(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)fd(s.children[n],t.children[n],e)}var uh={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Okt\xE1vka",acc_:"Okt\xE1vku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Okt\xE1vka kombi",acc_:"Okt\xE1vku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golf\xEDk",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-\u010Dko",acc_:"SUV-\u010Dko",g:"n"},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},Ay=new fe({color:3886431,name:"Windows"}),Ry=new fe({color:1381653,name:"Tire"}),Cy=new fe({color:10132898,name:"Rim"}),dd=new fe({color:2303014,name:"Trim"}),Py=new fe({color:15921902,name:"Plate"});function pd(s,t,e){let n=new Tr;s.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let i=new ia(n,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:1,steps:1,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate(t/2-e,0,0),i}function md(s){let t=uh[s],{L:e,W:n,H:i,hood:r,wind:o,belt:a}=t,c=t.rr,l=t.clear||.3,h=e/2,u=new fe({color:16777215,name:"Paint"}),f=new ye,d=t.boxy?.03:.07,g=t.boxy?a-.08:a-.2,x=t.rear==="liftback"?a+.02:a,m=[[-h+.12,l],[h-.16,l],[h,l+.18],[h,g-.06],[h-.1,g],[h-r,a],[-h+(t.rear==="liftback"?.05:.02),x],[-h,x-.12],[-h,l+.14]],p=new Dt(pd(m,n,d),u);f.add(p);let v=n-.16,_=h-r,y=_-o,T,b;t.rear==="hatch"?(T=-h+.32,b=-h+.08):t.rear==="liftback"?(T=-h+1.28,b=-h+.28):t.rear==="estate"?(T=-h+.14,b=-h+.04):(T=-h+.1,b=-h+.05);let E=[[b,a-.02],[_,a-.02],[y,i-.04],[T,i-.04]],L=new Dt(pd(E,v,.04),Ay);f.add(L);let M=y-T-.12,S=new Dt(new Te(v-.06,.07,M),u);S.position.set(0,i-.02,(y+T)/2),f.add(S);let N=new Dt(new Te(v+.01,i-a-.06,.12),u);N.position.set(0,(i+a)/2-.03,(_+b)/2+(t.rear==="liftback"?.25:.1)),f.add(N);let D=e*.61,H=new Wn(c,c,.22,14);H.rotateZ(Math.PI/2);let C=new Wn(c*.62,c*.62,.235,10);C.rotateZ(Math.PI/2);let U=D/2+(h-r>.6?.05:0)+.05;for(let z of[U,-D/2+.05])for(let W of[-1,1]){let tt=new Dt(H,Ry);tt.position.set(W*(n/2-.13),c,z);let at=new Dt(C,Cy);at.position.copy(tt.position),f.add(tt,at)}let O=new Dt(new Te(n+.02,.14,e-.3),dd);O.position.set(0,l+.07,0),f.add(O);let Y=new fe({color:14673646,name:"HeadLights"}),K=new fe({color:9048080,name:"TailLights"}),V=g-.1;for(let z of[-1,1]){let W=new Dt(new Te(t.boxy?.32:.38,t.boxy?.16:.11,.08),Y);W.position.set(z*(n/2-.3),V,h-.03);let tt=new Dt(new Te(.3,.13,.08),K);tt.position.set(z*(n/2-.22),x-.2,-h+0),f.add(W,tt)}let G=new Dt(new Te(n*.42,.14,.06),dd);G.position.set(0,V-.02,h+0);let q=new Dt(new Te(.52,.12,.03),Py);q.position.set(0,l+.22,h+.01);let et=q.clone();et.position.z=-h-.01,et.position.y=l+.3;for(let z of[-1,1]){let W=new Dt(new Te(.16,.1,.12),u);W.position.set(z*(n/2+.06),a+.08,_-.1),f.add(W)}return f.add(G,q,et),f.traverse(z=>{z.isMesh&&(z.castShadow=!0)}),{obj:f,def:{paint:"Paint",len:e,vmax:t.vmax,acc:t.acc,nick:t.nick,acc_:t.acc_,g:t.g},w:n,h:i,len:e}}var Ly=new Ra,fh=null,gd=async s=>{let t=s.split("/").pop();fh||(fh=fetch(s.slice(0,s.lastIndexOf("/models/"))+"/models.json").then(r=>r.json()));let e=await fh,n=atob(e[t]),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return new Promise((r,o)=>Ly.parse(i.buffer,"",r,o))},Zn={cars:{},people:[]},Iy=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],xd={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},_d=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function vd(s,t){let e=[],n=0,i=Object.keys(xd).length+_d.length,r=()=>t&&t(++n/i);for(let[o,a]of Object.entries(xd))e.push(gd(s+a.file).then(c=>{let l=c.scene;l.updateMatrixWorld(!0);let u=new ke().setFromObject(l,!0).getSize(new P),f=u.x>u.z,d=new ye,g=new ye;g.add(l),f&&(g.rotation.y=Math.PI/2),d.add(g),d.updateMatrixWorld(!0);let x=new ke().setFromObject(d,!0),m=x.max.z-x.min.z,p=a.len/m;g.scale.multiplyScalar(p),d.updateMatrixWorld(!0),x=new ke().setFromObject(d,!0);let v=x.getCenter(new P);g.position.set(-v.x,-x.min.y,-v.z),d.updateMatrixWorld(!0);let _=0,y=0;d.traverse(b=>{if(b.isMesh){b.castShadow=!0;let E=Array.isArray(b.material)?b.material:[b.material];for(let L of E)if(/head/i.test(L.name)){let M=new ke().setFromObject(b,!0);_+=M.getCenter(new P).z,y++}}}),y&&_/y<0&&(g.rotation.y+=Math.PI,g.position.x*=-1,g.position.z*=-1);let T=new ke().setFromObject(d,!0);Zn.cars[o]={obj:d,def:a,w:T.max.x-T.min.x,h:T.max.y-T.min.y,len:T.max.z-T.min.z},r()}));for(let o of _d)e.push(gd(s+o.file).then(a=>{let c=a.scene;c.updateMatrixWorld(!0);let l=new ke().setFromObject(c,!0),u=1.76/(l.max.y-l.min.y),f=new ye;c.scale.multiplyScalar(u),c.position.y=-l.min.y*u,f.add(c),c.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.frustumCulled=!1)});let d={};for(let g of a.animations)d[g.name.replace(o.pre,"").toLowerCase()]=g;Zn.people.push({obj:f,clips:d}),r()}));await Promise.all(e);for(let o of Object.keys(uh))Zn.cars[o]=md(o)}var Dy=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],zr=class{constructor(t=-1,e=!0){let n=t>=0?Zn.people[t]:en(Zn.people);if(this.obj=ud(n.obj),e){let i=new yt(en(Dy));this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(o=>{if(/shirt|dress/i.test(o.name)){let a=o.clone();return a.color=i.clone(),a}if(/pants/i.test(o.name)&&ce()<.6){let a=o.clone();return a.color=new yt(en(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),a}return o}),r.material.length===1&&(r.material=r.material[0]))})}this.mixer=new fa(this.obj),this.acts={};for(let[i,r]of Object.entries(n.clips))this.acts[i]=this.mixer.clipAction(r);this.acts.death&&(this.acts.death.setLoop(ma,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(ma,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(t,e=.2,n=1){let i=this.acts[t]||this.acts.idle;if(this.cur===i){i.timeScale=n;return}i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&this.cur.crossFadeTo(i,e,!1),this.cur=i}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},hn={},Pa=class{constructor(t,e){let n=Zn.cars[t]||Zn.cars.sedan;this.kind=t,this.def=n.def,this.obj=n.obj.clone(!0),this.len=n.len,this.wid=n.w,this.paint=e||en(Iy),this.lightMats=[],this.obj.traverse(i=>{i.isMesh&&(i.material=(Array.isArray(i.material)?i.material:[i.material]).map(r=>{if(n.def.paint&&r.name===n.def.paint){let o=r.clone();return o.color=new yt(this.paint),o}if(/head/i.test(r.name)){let o=r.clone();return o.emissive=new yt(0,0,0),this.head=o,o}if(/tail/i.test(r.name)){let o=r.clone();return o.emissive=new yt(0,0,0),this.tail=o,o}return r}),i.material.length===1&&(i.material=i.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(t,e,n,i){this.x=t,this.z=e,this.h=n,this.y=i.surfaceY(t,e),this.vx=this.vz=this.w=0,this.sync(i,1)}step(t,e,n){let i=Math.sin(this.h),r=Math.cos(this.h),o=this.vx*i+this.vz*r,a=this.vx*r-this.vz*i,c=Math.abs(o),l=.62/(1+c/16);this.steer+=Jt(this.st*l-this.steer,-t*3.5,t*3.5);let h=0,u=this.thr,f=this.def.vmax*(this.driver==="player"?1:.85);u>0?o<-.5?h=10*u:h=this.def.acc*u*Math.max(0,1-o/f)+1*u:u<0&&(o>.5?h=10*u:h=3.5*u*Math.max(0,1+o/9)),this.hb&&(h-=Math.sign(o)*6),h-=o*.06+.0012*o*Math.abs(o)*2.2,Math.abs(u)<.05&&c<.4&&!this.hb&&(o*=.8);let d=e.surfaceY(this.x+i*2,this.z+r*2,this.y+1.2)-e.surfaceY(this.x-i*2,this.z-r*2,this.y+1.2);h-=9.8*Jt(d/4,-.4,.4),o+=h*t;let g=this.len*.62,x=o*Math.tan(this.steer)/g,m=this.hb?1.6:9,p=Math.abs(x*o),v=this.hb?6:13,_=p>v?m*v/p:m;this.w+=(x*(this.hb?1.35:1)-this.w)*Jt(_*t,0,1),a*=Math.exp(-(this.hb?1.4:p>v?3.2:10)*t),this.h=qn(this.h+this.w*t);let y=Math.sin(this.h),T=Math.cos(this.h);this.vx=o*y+a*T,this.vz=o*T-a*y,this.x+=this.vx*t,this.z+=this.vz*t;let b=0;for(let E of[this.off,-this.off,0]){let L=this.x+y*E,M=this.z+T*E;if(e.collide(L,M,this.y+.3,this.r,hn)){this.x+=hn.x-L,this.z+=hn.z-M;let S=this.vx*hn.nx+this.vz*hn.nz;S<0&&(this.vx-=1.3*S*hn.nx,this.vz-=1.3*S*hn.nz,this.vx*=.92,this.vz*=.92,b=Math.max(b,-S),this.w+=E*.05*S*(this.vx*hn.nz-this.vz*hn.nx>0?1:-1))}}this.x=Jt(this.x,2,e.W-2),this.z=Jt(this.z,2,e.H-2),this.impact=b,b>4&&(this.dmg+=b*1.5)}sync(t,e){let n=Math.sin(this.h),i=Math.cos(this.h),r=this.y+1.2,o=t.surfaceY(this.x+n*this.len*.4,this.z+i*this.len*.4,r),a=t.surfaceY(this.x-n*this.len*.4,this.z-i*this.len*.4,r),c=t.surfaceY(this.x-i*.8,this.z+n*.8,r),l=t.surfaceY(this.x+i*.8,this.z-n*.8,r),h=(o+a+c+l)/4;this.y=h;let u=Math.atan2(a-o,this.len*.8),f=Math.atan2(l-c,1.6),d=Jt(e*10,0,1);this.pitch+=(u-this.pitch)*d,this.roll+=(f-this.roll)*d;let g=Jt(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+g)}lights(t,e){this.head&&this.head.emissive.setRGB(t*3,t*2.7,t*2.2),this.tail&&this.tail.emissive.setRGB(e?3:t*1.2,0,0)}};function yd(s,t){let e=Math.sin(s.h),n=Math.cos(s.h),i=Math.sin(t.h),r=Math.cos(t.h);if(Math.abs(s.x-t.x)>7||Math.abs(s.z-t.z)>7||Math.abs(s.y-t.y)>3)return 0;let o=0;for(let a of[s.off,-s.off])for(let c of[t.off,-t.off]){let l=s.x+e*a,h=s.z+n*a,u=t.x+i*c,f=t.z+r*c,d=u-l,g=f-h,x=Math.hypot(d,g),m=s.r+t.r;if(x<m&&x>1e-4){d/=x,g/=x;let p=(m-x)/2;s.x-=d*p,s.z-=g*p,t.x+=d*p,t.z+=g*p;let v=(t.vx-s.vx)*d+(t.vz-s.vz)*g;if(v<0){let _=-v*.65;s.vx-=d*_,s.vz-=g*_,t.vx+=d*_,t.vz+=g*_,s.w+=(a>0?1:-1)*_*.05,t.w-=(c>0?1:-1)*_*.05,o=Math.max(o,-v)}}}return o}var ln={},Br=class{constructor(t,e,n,i){this.car=t,this.w=e,this.e=n,this.s=i,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let t=this.e.b.out.filter(e=>e!==this.e.rev&&e.L>.5);this.next=t.length?en(t):this.e.rev||null}ahead(t,e){let n=this.e,i=this.s+t;i>n.L&&this.next&&(i-=n.L,n=this.next),cn.at(n,Math.min(i,n.L),e);let r=n.lane;return e.x+=-e.dz*r,e.z+=e.dx*r,e}project(){let t=this.car,e=this.e,n=1e9,i=this.s;for(let r=0;r<e.p.length-1;r++){let o=e.p[r][0],a=e.p[r][1],c=e.p[r+1][0],l=e.p[r+1][1],h=c-o,u=l-a,f=h*h+u*u||1,d=Jt(((t.x-o)*h+(t.z-a)*u)/f,0,1),g=Math.hypot(o+h*d-t.x,a+u*d-t.z);g<n&&(n=g,i=e.cum[r]+d*Math.sqrt(f))}this.s=i,this.dev=n}update(t,e,n,i,r){let o=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&r?this.chooseToward(r):this.chooseNext());let a=o.speed,c=4.5+a*.45;this.ahead(c,ln);let l=ln.x,h=ln.z,u=this.e.v;if(this.mode==="chase"&&r){u=26;let y=Math.hypot(r.x-o.x,r.z-o.z);y<30&&(l=r.x,h=r.z,u=Jt(y*1.2,6,30))}let f=this.e.L-this.s;if(this.next&&f<25){let y=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),T=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),b=Math.abs(qn(T-y));b>.35&&(u=Math.min(u,Zt(14,5.5,Jt(b/1.6,0,1))+f*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,y,n)&&f>5&&(u=Math.min(u,Math.max(0,(f-7)*.9)))}let d=Math.sin(o.h),g=Math.cos(o.h),x=99;for(let y of e){if(y===o)continue;let T=y.x-o.x,b=y.z-o.z,E=T*d+b*g;if(E<0||E>22)continue;Math.abs(T*g-b*d)<2.2&&(x=Math.min(x,E-(o.len+y.len)/2))}if(i&&this.mode!=="chase"){let y=i.x-o.x,T=i.z-o.z,b=y*d+T*g;b>0&&b<14&&Math.abs(y*g-T*d)<2&&(x=Math.min(x,b-o.len/2-.5))}x<99&&(u=Math.min(u,Math.max(0,(x-2.5)*1.1))),this.mode==="chase"&&(u=Math.max(u,x<3?4:u));let m=Math.atan2(l-o.x,h-o.z),p=qn(m-o.h),v=o.fwd;o.st=Jt(p*2.2,-1,1),v<-.5&&(o.st=-o.st);let _=u-v;o.thr=Jt(_*.35,-1,1),o.hb=0,a<.5&&u>3?this.stuck+=t:this.stuck=Math.max(0,this.stuck-t),this.stuck>2.2&&(o.thr=-.7,o.st=-o.st,this.stuck>3.6&&(this.stuck=0)),x<4&&a<.5&&(this.honk+=t)}chooseToward(t){let e=this.e.b.out.filter(r=>r.L>.5);if(!e.length){this.next=this.e.rev;return}let n=null,i=1e9;for(let r of e){let o=r.p[Math.min(r.p.length-1,3)],a=Math.hypot(o[0]-t.x,o[1]-t.z)+(r===this.e.rev?30:0)+ce()*8;a<i&&(i=a,n=r)}this.next=n}},kr=class{constructor(t,e,n){this.p=new zr,this.w=t,this.e=e,this.s=n,this.dir=ce()<.5?1:-1,this.off=(ce()-.5)*(e.sw?.8:1.6),this.speed=1.1+ce()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),cn.at(e,n,ln),this.p.x=ln.x,this.p.z=ln.z,this.p.y=t.hAt(ln.x,ln.z)}get x(){return this.p.x}get z(){return this.p.z}flee(t,e){if(this.state==="down")return;this.state="flee",this.t=5+ce()*3;let n=Math.atan2(this.p.x-t,this.p.z-e)+(ce()-.5)*.8;this.fh=n,this.p.play("run",.15,1.1)}knock(t,e,n){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=t,this.p.vz=e,this.p.play("death",.08,n?1.6:1.1),!0)}update(t,e){let n=this.p;if(this.state==="walk"){this.s+=this.speed*t*this.dir;let i=this.e;if(this.s>i.L||this.s<0){let c=this.s>i.L?i.b:i.a,l=c.e.filter(h=>h!==i);if(l.length&&ce()<.85){let h=en(l);this.e=h,h.a===c?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=Jt(this.s,0,i.L)}cn.at(this.e,this.s,ln);let r=ln.x-ln.dz*this.off*this.dir,o=ln.z+ln.dx*this.off*this.dir,a=Math.atan2(ln.dx*this.dir,ln.dz*this.dir);n.h+=qn(a-n.h)*Jt(t*6,0,1),n.x+=(r-n.x)*Jt(t*4,0,1),n.z+=(o-n.z)*Jt(t*4,0,1)}else if(this.state==="flee"){this.t-=t;let i=4.2;if(n.x+=Math.sin(this.fh)*i*t,n.z+=Math.cos(this.fh)*i*t,n.h+=qn(this.fh-n.h)*Jt(t*8,0,1),e.collide(n.x,n.z,n.y,.35,hn)&&(n.x=hn.x,n.z=hn.z,this.fh+=(ce()<.5?1:-1)*1.2),this.t<=0){let r=e.pedGrid.query(n.x,n.z,30,[]);r.length?(this.e=en(r),this.s=ce()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=t,n.x+=n.vx*t,n.z+=n.vz*t,n.vx*=Math.exp(-4*t),n.vz*=Math.exp(-4*t),e.collide(n.x,n.z,n.y,.3,hn)&&(n.x=hn.x,n.z=hn.z,n.vx=n.vz=0));n.y=e.surfaceY(n.x,n.z,n.y+1),n.mixer.update(t),n.sync()}};var La=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination);let n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0),o=0;for(let a=0;a<n;a++){let c=Math.random()*2-1;o=(o+.02*c)/1.02,r[a]=c*.5+o*3}this.noise=i}_noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}start(){if(!this.ctx||this.started)return;this.started=!0;let t=this.ctx,e=this._noiseSrc(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=380;let i=t.createGain();i.gain.value=.06,e.connect(n).connect(i).connect(this.master),e.start();let r=t.createOscillator();r.type="sawtooth";let o=t.createOscillator();o.type="square";let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=600,a.Q.value=3;let c=t.createGain();c.gain.value=0,r.connect(a),o.connect(a),a.connect(c).connect(this.master),r.start(),o.start(),this.eng={o1:r,o2:o,ef:a,eg:c};let l=this._noiseSrc(),h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let u=t.createGain();u.gain.value=0,l.connect(h).connect(u).connect(this.master),l.start(),this.skid=u;let f=t.createOscillator();f.type="triangle";let d=t.createGain();d.gain.value=0,f.connect(d).connect(this.master),f.start(),this.siren={so:f,sgn:d};let g=t.createOscillator(),x=t.createOscillator();g.type=x.type="square",g.frequency.value=392,x.frequency.value=494;let m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=1500;let p=t.createGain();p.gain.value=0,g.connect(m),x.connect(m),m.connect(p).connect(this.master),g.start(),x.start(),this.hornG=p}mute(t){this.master&&this.master.gain.setTargetAtTime(t||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(t,e,n,i){if(!this.eng)return;let r=this.ctx.currentTime;if(e){let c=Math.abs(e.fwd),l=Math.min(5,Math.floor(c/9)),h=.25+(c-l*9)/9*.75+(e.thr>0?.08:0),u=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(u,r,.05),this.eng.o2.frequency.setTargetAtTime(u*.5,r,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(e.thr)*400,r,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(e.thr)*.06,r,.08);let f=Math.sin(e.h),d=Math.cos(e.h),g=Math.abs(e.vx*d-e.vz*f);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,g-2.5)*.04),r,.05)}else this.eng.eg.gain.setTargetAtTime(0,r,.15),this.skid.gain.setTargetAtTime(0,r,.1);let o=1e9;for(let c of n)o=Math.min(o,Math.hypot(c.x-i.position.x,c.z-i.position.z));let a=o<250?Math.min(.09,9/(o+30)):0;this.siren.sgn.gain.setTargetAtTime(a,r,.2),this.siren.so.frequency.setTargetAtTime(t.t%1.2<.6?720:960,r,.03)}_burst(t,e,n,i="lowpass",r=1){if(!this.ctx||!this.started)return;let o=this.ctx,a=o.currentTime,c=this._noiseSrc(),l=o.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let h=o.createGain();h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(.001,a+t),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()),c.stop(a+t+.05)}_tone(t,e,n,i,r="sine",o=0){if(!this.ctx||!this.started)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(e,c+n);let h=a.createGain();h.gain.setValueAtTime(i,c),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h).connect(this.master),l.start(c),l.stop(c+n+.05)}crash(t){let e=Math.min(1,t/15);this._burst(.35+e*.4,900,.25+e*.5),this._tone(90,40,.3,.3*e)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((t,e)=>this._tone(t,t,.25,.14,"square",e*.11))}fail(){[392,330,262,196].forEach((t,e)=>this._tone(t,t*.98,.3,.14,"sawtooth",e*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(t){this.hornG&&this.hornG.gain.setTargetAtTime(t?.12:0,this.ctx.currentTime,.02)}};var Kt=s=>document.querySelector(s),Ia=class{constructor(t,e){this.G=t,this.mobile=e,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=Kt("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",e||matchMedia("(pointer: coarse)").matches),Kt("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),Kt("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),Kt("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),Kt("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),Kt("#map").addEventListener("click",()=>{this.mapWide?this.toggleMap():(this.mapWide=!0,Kt("#map").hidden=!0,this.toggleMap(this.G.world,this.G),Kt("#maphint").textContent="\u0165ukni pre zatvorenie")}),document.querySelectorAll("[data-detail]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(i=>i.classList.toggle("on",i===n)),this.onDetail&&this.onDetail(+n.dataset.detail)})),Kt("#bSound").addEventListener("click",()=>{let n=this.snd&&this.snd.toggle();Kt("#bSound").textContent=n?"Zvuk: ZAP":"Zvuk: VYP"})}loading(t,e){Kt("#loadbar i").style.width=Math.round(t*100)+"%",e&&(Kt("#loadtxt").textContent=e)}ready(){Kt("#load").hidden=!0,Kt("#title").hidden=!1}play(){Kt("#title").hidden=!0,Kt("#hud").hidden=!1,document.body.classList.add("playing")}pause(t){Kt("#pause").hidden=!t}error(t){Kt("#loadtxt").textContent="Chyba: "+t}toast(t){let e=Kt("#toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}big(t,e,n,i=2.6){let r=Kt("#big");r.querySelector("b").textContent=t,r.querySelector("b").style.color=n||"#fff",r.querySelector("span").textContent=e||"",r.classList.remove("show"),r.offsetWidth,r.style.animationDuration=i+"s",r.classList.add("show")}flash(t,e){let n=Kt("#flash");n.style.background=t,n.style.transition="none",n.style.opacity=e,requestAnimationFrame(()=>{n.style.transition="opacity .6s",n.style.opacity=0})}hint(t){if(this._hint===t)return;this._hint=t;let e=Kt("#hint");e.textContent=t,e.hidden=!t||this.mobile}flashHint(){}bindTouch(t,e){this.snd=e;let n=Kt("#stick"),i=Kt("#stick i"),r=null,o=0,a=0,c=null,l=0,h=52,u=Kt("#touch");u.addEventListener("touchstart",g=>{e.unlock();for(let x of g.changedTouches)x.clientX<innerWidth*.5&&r===null?(r=x.identifier,o=x.clientX,a=x.clientY,n.style.left=o+"px",n.style.top=a+"px",n.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0):c===null&&(c=x.identifier,l=x.clientX);g.preventDefault()},{passive:!1}),u.addEventListener("touchmove",g=>{for(let x of g.changedTouches)if(x.identifier===r){let m=x.clientX-o,p=x.clientY-a,v=Math.hypot(m,p);v>h&&(m*=h/v,p*=h/v),i.style.transform=`translate(${m}px,${p}px)`,this.stick.x=m/h,this.stick.y=-p/h}else x.identifier===c&&(this.look.dx+=(x.clientX-l)*.009,l=x.clientX);g.preventDefault()},{passive:!1});let f=g=>{for(let x of g.changedTouches)x.identifier===r&&(r=null,this.stick.active=!1,this.stick.x=this.stick.y=0,i.style.transform="",n.classList.remove("on")),x.identifier===c&&(c=null)};u.addEventListener("touchend",f),u.addEventListener("touchcancel",f);let d=(g,x)=>{let m=Kt(g);m.addEventListener("touchstart",v=>{e.unlock(),this.btn[x]=1,m.classList.add("dn"),v.preventDefault(),v.stopPropagation()},{passive:!1});let p=v=>{this.btn[x]=0,m.classList.remove("dn"),v.preventDefault()};m.addEventListener("touchend",p),m.addEventListener("touchcancel",p)};d("#bGas","gas"),d("#bBrake","brake"),d("#bHb","hb"),d("#bAtk","atk"),Kt("#bAct").addEventListener("touchstart",g=>{e.unlock(),t.act=1,g.preventDefault(),g.stopPropagation()},{passive:!1}),Kt("#bAct").addEventListener("click",()=>t.act=1)}update(t,e,n){Kt("#money").textContent="\u20AC "+Math.floor(t.money).toLocaleString("sk-SK");let i="\u2605".repeat(t.wanted)+"\u2606".repeat(5-t.wanted);this._st!==i&&(this._st=i,Kt("#stars").textContent=i,Kt("#stars").classList.toggle("hot",t.wanted>0));let r=Math.floor(t.tod),o=Math.floor(t.tod%1*60);Kt("#clock").textContent=String(r).padStart(2,"0")+":"+String(o).padStart(2,"0");let a=t.street?t.district?t.street+" \xB7 "+t.district:t.street:t.district||"";if(this._street!==a){this._street=a;let l=Kt("#street");l.textContent=a,l.classList.remove("show"),l.offsetWidth,a&&l.classList.add("show")}let c=e.goalText;if(e.goal){let l=Math.hypot(e.goal.x-e.px,e.goal.z-e.pz);c+=" \xB7 "+(l>1e3?(l/1e3).toFixed(1)+" km":Math.round(l)+" m")}this._gt!==c&&(this._gt=c,Kt("#goal").textContent=c),Kt("#speed").textContent=e.speed!==null?Math.round(e.speed)+" km/h":"",Kt("#hp").style.width=Math.max(0,t.hp)+"%",document.body.classList.toggle("incar",e.inCar),document.body.classList.toggle("nearcar",e.nearCar||e.inCar),Kt("#bAct").textContent=e.inCar?"VYST\xDAP":"NAST\xDAP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(e,n))}drawMini(t,e){let n=this.mm,i=this.mmc,r=n.width,o=130,a=r/2/o,c=t.yaw+Math.PI,l=-Math.PI/2-Math.atan2(Math.cos(c),Math.sin(c));i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#111",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(l),i.scale(a,a),i.translate(-t.px,-t.pz),i.imageSmoothingEnabled=!0,e.drawGround(i,t.px,t.pz,o*1.5),i.restore(),i.fillStyle="rgba(0,0,0,0.15)",i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.fill();let h=(f,d)=>{let g=(f-t.px)*a,x=(d-t.pz)*a,m=Math.cos(l),p=Math.sin(l);return[r/2+g*m-x*p,r/2+g*p+x*m]},u=(f,d,g,x,m)=>{let[p,v]=h(f,d),_=p-r/2,y=v-r/2,T=Math.hypot(_,y),b=r/2-8;if(T>b){if(!m)return;p=r/2+_/T*b,v=r/2+y/T*b}i.fillStyle=g,i.beginPath(),i.arc(p,v,x,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1.5,i.stroke()};for(let f of t.markers)f.on&&u(f.x,f.z,f.c,6,!0);for(let f of t.police)u(f.x,f.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);t.goal&&u(t.goal.x,t.goal.z,"#ff4fd8",7,!0),i.save(),i.translate(r/2,r/2),i.rotate(l+Math.PI-t.h),i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=3,i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.stroke()}toggleMap(t,e){let n=Kt("#map");if(!n.hidden||!t){n.hidden=!0,this.mapWide=!1;return}this.mapWide||(Kt("#maphint").textContent="\u0165ukni pre cel\xE9 mesto"),n.hidden=!1;let i=Kt("#mapc"),r=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);i.width=i.height=r,i.style.width=i.style.height=r/(devicePixelRatio||1)+"px";let o=i.getContext("2d"),a=window.__gtbPos&&window.__gtbPos(),c=this.mapWide?t.H/2:900,l=Math.min(t.W-c,Math.max(c,a?a.x:t.W/2)),h=Math.min(t.H-c,Math.max(c,a?a.z:t.H/2)),u=r/(2*c);o.fillStyle="#111",o.fillRect(0,0,r,r),o.save(),o.scale(u,u),o.translate(-(l-c),-(h-c)),t.drawGround(o,l,h,c*1.5),o.restore(),o.translate(-(l-c)*u,-(h-c)*u);let f=this._lastI,d=(m,p,v,_)=>{o.fillStyle=v,o.strokeStyle="#000",o.lineWidth=3,o.beginPath(),o.arc(m*u,p*u,_,0,7),o.fill(),o.stroke()},g=e&&e.world?window.__gtbLOC:null;if(g){for(let m of g.contacts)d(m[0],m[1],"#ffcc33",r/70);for(let m of g.races)d(m[0],m[1],"#33e0ff",r/70)}let x=window.__gtbPos&&window.__gtbPos();if(x){x.goal&&d(x.goal.x,x.goal.z,"#ff4fd8",r/60),o.save(),o.translate(x.x*u,x.z*u),o.rotate(Math.PI-x.h),o.fillStyle="#fff",o.strokeStyle="#000",o.lineWidth=3;let m=r/50;o.beginPath(),o.moveTo(0,-m),o.lineTo(m*.7,m*.8),o.lineTo(0,m*.35),o.lineTo(-m*.7,m*.8),o.closePath(),o.fill(),o.stroke(),o.restore()}}};var Ny=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Ln=Ny&&Math.min(screen.width,screen.height)<900,dh=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",J=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},Ua=document.getElementById("c"),Zs=new vr({canvas:Ua,antialias:!1,powerPreference:"high-performance"});Zs.setPixelRatio(1);Zs.shadowMap.enabled=!0;Zs.shadowMap.type=da;var $i,Ye=new Us,Ke=new Fe(60,1,.3,2700),Bt=new Ia(J,Ln),be=new La,Rt,Da=new la(12571903,5918784,1.2),un=new Vs(16777215,3);un.castShadow=!0;un.shadow.mapSize.set(Ln?1024:2048,Ln?1024:2048);var Gr=75;Object.assign(un.shadow.camera,{left:-Gr,right:Gr,top:Gr,bottom:-Gr,near:1,far:600});un.shadow.bias=-.0015;un.shadow.normalBias=.6;Ye.add(Da,un,un.target);var ji=new Gs(16769712,0,55,.55,.6,1.2);Ye.add(ji,ji.target);var Rd={uSun:{value:new P(0,1,0)},uNight:Ne.uNight,uTime:Ne.uTime},Oa=new Dt(new Os(1800,32,16),new yn({uniforms:Rd,side:tn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        float se = uSun.y;
        vec3 dayTop = vec3(0.22,0.42,0.85), dayHor = vec3(0.75,0.85,1.0);
        vec3 setTop = vec3(0.18,0.2,0.45), setHor = vec3(1.25,0.55,0.22);
        vec3 nTop = vec3(0.004,0.008,0.025), nHor = vec3(0.03,0.04,0.08);
        float sunset = smoothstep(0.35, 0.02, se) * smoothstep(-0.2, 0.02, se);
        vec3 top = mix(mix(dayTop, setTop, sunset), nTop, uNight);
        vec3 hor = mix(mix(dayHor, setHor, sunset), nHor, uNight);
        vec3 c = mix(hor, top, pow(y, 0.55));
        float sd = max(dot(d, normalize(uSun)), 0.0);
        c += vec3(1.6,1.0,0.6) * pow(sd, 400.0) * 6.0 * (1.0-uNight);
        c += vec3(1.0,0.55,0.25) * pow(sd, 8.0) * 0.6 * sunset;
        // stars
        vec3 sp = floor(d*220.0);
        float st = step(0.9965, h(sp)) * uNight * smoothstep(0.05, 0.3, d.y);
        c += vec3(st) * (0.6 + 0.4*sin(uTime*3.0 + h(sp)*40.0));
        // city glow at horizon at night
        c += vec3(0.45,0.25,0.12) * uNight * pow(1.0 - y, 8.0) * 0.5;
        gl_FragColor = vec4(c, 1.0);
      }`}));Oa.frustumCulled=!1;Ye.add(Oa);Ye.fog=new Xo(9085112,.0026);var Cd=new Wn(1.6,1.6,26,16,1,!0);Cd.translate(0,13,0);function Uy(s){let t=new Dt(Cd,new yn({uniforms:{uC:{value:new yt(s)},uTime:Ne.uTime},transparent:!0,depthWrite:!1,side:Oe,blending:pr,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return t.frustumCulled=!1,t}var dn={},ne={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",s=>{s.repeat||(dn[s.code]=1,(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter")&&(ne.act=1),s.code==="KeyM"&&Bt.toggleMap(Rt,J),s.code==="KeyH"&&be.horn(!0),(s.code==="Escape"||s.code==="KeyP")&&Fd(),J.mode==="title"&&(s.code==="Space"||s.code==="Enter")&&Ud(),be.unlock())});addEventListener("keyup",s=>{dn[s.code]=0,s.code==="KeyH"&&be.horn(!1)});var bh=!1,yh=0;Ua.addEventListener("mousedown",s=>{bh=!0,yh=s.clientX,be.unlock()});addEventListener("mouseup",()=>bh=!1);addEventListener("mousemove",s=>{bh&&(ne.camDX+=(s.clientX-yh)*.006,yh=s.clientX,ne.camDrag=1.5)});Bt.bindTouch(ne,be);Bt.onStart=()=>Ud();Bt.onPause=()=>Fd();Bt.onDetail=s=>{J.detail=s,Eh()};function Fy(){let s=0,t=0;(dn.KeyA||dn.ArrowLeft)&&(s-=1),(dn.KeyD||dn.ArrowRight)&&(s+=1),(dn.KeyW||dn.ArrowUp)&&(t+=1),(dn.KeyS||dn.ArrowDown)&&(t-=1),Bt.stick.active&&(s=Bt.stick.x,t=Bt.stick.y),ne.mx=s,ne.my=t,ne.run=dn.ShiftLeft||dn.ShiftRight||Bt.stick.active&&Math.hypot(Bt.stick.x,Bt.stick.y)>.92?1:0,ne.hb=dn.Space||Bt.btn.hb?1:0,ne.atk=dn.Space||Bt.btn.atk?1:0,ne.gas=Bt.btn.gas,ne.brake=Bt.btn.brake}var Mt,Re=[],Pn=[],In=[],dt=null,Pd=[],ph=new P;function Js(s,t,e,n,i){let r=new Pa(s,i);return r.place(t,e,n,Rt),Ye.add(r.obj),Re.push(r),r}function Vr(s){let t=Re.indexOf(s);t>=0&&Re.splice(t,1),Ye.remove(s.obj),s.siren&&(s.siren=null);let e=In.indexOf(s);e>=0&&In.splice(e,1)}var Ld=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function Oy(s,t){for(let e=0;e<12;e++){let n=ce()*Math.PI*2,i=70+ce()*110,r=s+Math.sin(n)*i,o=t+Math.cos(n)*i,a=Rt.nearestEdge(r,o,40);if(!a||a.e.L<12)continue;let c=Jt(a.s,3,a.e.L-3);cn.at(a.e,c,Nt);let l=Nt.x-Nt.dz*a.e.lane,h=Nt.z+Nt.dx*a.e.lane;if(Re.some(d=>Math.hypot(d.x-l,d.z-h)<9)||Math.hypot(l-s,h-t)<55)continue;let u=Js(en(Ld),l,h,Math.atan2(Nt.dx,Nt.dz));u.driver="ai",u.ai=new Br(u,Rt,a.e,c);let f=Math.min(a.e.v,9);return u.vx=Nt.dx*f,u.vz=Nt.dz*f,u}}var Nt={};function zy(s,t){for(let e=0;e<10;e++){let n=ce()*Math.PI*2,i=50+ce()*90,r=Rt.nearestEdge(s+Math.sin(n)*i,t+Math.cos(n)*i,40);if(!r||r.e.r.c>2||r.e.L<14)continue;let o=Jt(r.s,4,r.e.L-4);cn.at(r.e,o,Nt);let a=r.e.r.w/2-1.05,c=Nt.x-Nt.dz*a,l=Nt.z+Nt.dx*a;if(Re.some(u=>Math.hypot(u.x-c,u.z-l)<6)||Math.hypot(c-s,l-t)<40)continue;let h=Js(en(Ld),c,l,Math.atan2(Nt.dx,Nt.dz));return h.parked=!0,h}}function Id(s,t,e){let n=Rt.pedGrid.query(s,t,70,[]);for(let i=0;i<8&&n.length;i++){let r=en(n),o=ce()*r.L;cn.at(r,o,Nt);let a=Math.hypot(Nt.x-s,Nt.z-t);if(a<(e?10:26)||a>72||Rt.onDeck(Nt.x,Nt.z,999)&&!r.sw)continue;let c=new kr(Rt,r,o);return Ye.add(c.p.obj),Pn.push(c),c}}function By(s){let t=Pn.indexOf(s);t>=0&&Pn.splice(t,1),Ye.remove(s.p.obj)}function ky(s,t){for(let e=0;e<10;e++){let n=ce()*Math.PI*2,i=90+ce()*60,r=Rt.nearestEdge(s+Math.sin(n)*i,t+Math.cos(n)*i,50);if(!r||(cn.at(r.e,r.s,Nt),Math.hypot(Nt.x-s,Nt.z-t)<70))continue;let o=Js(ce()<.7?"oktavka":"esuv",Nt.x,Nt.z,Math.atan2(Nt.dx,Nt.dz),"#e8eaec");o.driver="police",o.ai=new Br(o,Rt,r.e,r.s),o.ai.mode="chase";let a=new ye,c=new Dt(new Te(.5,.18,.28),new Ze({color:16719904})),l=new Dt(new Te(.5,.18,.28),new Ze({color:2113791}));c.position.x=.3,l.position.x=-.3,a.add(c,l),a.position.y=o.obj.userData.h||Zn.cars[o.kind].h+.04,o.obj.add(a),o.bar={red:c,blue:l};let h=new Dt(new Te(o.wid+.02,.22,o.len*.7),new fe({color:1785231}));return h.position.y=.66,o.obj.add(h),In.push(o),o}}var Kn={vy:0,punchT:0,hurtT:0};function za(s,t){Mt.x=s,Mt.z=t,Mt.y=Rt.surfaceY(s,t),Mt.sync()}function Hy(s){if(s.driver==="ai"||s.driver==="police"){let e=new kr(Rt,Rt.pedEdges[0],0);e.p.x=s.x-Math.cos(s.h)*1.6,e.p.z=s.z+Math.sin(s.h)*1.6,Ye.add(e.p.obj),Pn.push(e),e.flee(Mt.x,Mt.z),js(s.driver==="police"?2:1,"kr\xE1de\u017E auta"),be.shout()}else s.parked&&!s.safe&&ce()<.35&&(s.alarm=6,js(1,"alarm"));s.driver="player",s.ai=null,s.parked=!1,dt=s,J.inCar=s,Mt.obj.visible=!1;let t=In.indexOf(s);t>=0&&In.splice(t,1),be.door(),Bt.flashHint(""),J.mission&&J.mission.onEnter&&J.mission.onEnter(s)}function Ks(){let s=dt;if(!s)return;let t=-Math.cos(s.h),e=Math.sin(s.h),n=s.x+t*1.7,i=s.z+e*1.7;Rt.collide(n,i,s.y,.4,Na)&&(n=s.x-t*1.7,i=s.z-e*1.7),s.driver=null,s.thr=0,s.st=0,s.hb=1,dt=null,J.inCar=null,Mt.obj.visible=!0,Mt.h=s.h,za(n,i),be.door()}var Na={};function js(s,t){if(s<=0||J.mode!=="play")return;J.heat+=s;let e=Jt(Math.floor(J.heat),0,5);e>J.wanted&&(J.wanted=e,Bt.toast("H\u013DADAN\xDD "+"\u2605".repeat(e)+(t?" \xB7 "+t:""))),J.coolT=0}var le={start:[2187,1704],contact:[2099,1566],race:[1874,1772],garage:[2066,2110],hospital:[2254,1626],contacts:[],races:[]},Gy={contacts:[[17.1107,48.1128,"Petr\u017Ealka"],[17.1049,48.101,"Petr\u017Ealka \u2013 L\xFAky"],[17.1492,48.1528,"Ru\u017Einov"],[17.1385,48.143,"Nivy"],[17.1985,48.144,"Vraku\u0148a"],[17.206,48.1265,"Podunajsk\xE9 Biskupice"]],races:[[17.1235,48.117,"Petr\u017Ealka"],[17.162,48.147,"Ru\u017Einov"],[17.19,48.1395,"Vraku\u0148a"]]},Vy=[[17.106,48.146,"Star\xE9 Mesto"],[17.118,48.151,"Star\xE9 Mesto"],[17.092,48.146,"Star\xE9 Mesto"],[17.132,48.146,"Nivy"],[17.128,48.139,"Nivy"],[17.152,48.152,"Ru\u017Einov"],[17.15,48.142,"Ru\u017Einov"],[17.172,48.15,"Ru\u017Einov \u2013 Trn\xE1vka"],[17.165,48.138,"Ru\u017Einov \u2013 Prievoz"],[17.197,48.144,"Vraku\u0148a"],[17.207,48.137,"Vraku\u0148a"],[17.203,48.125,"Podunajsk\xE9 Biskupice"],[17.18,48.126,"Vl\u010Die hrdlo"],[17.165,48.112,"Vl\u010Die hrdlo"],[17.15,48.13,"Pr\xEDstav"],[17.11,48.13,"Petr\u017Ealka"],[17.108,48.118,"Petr\u017Ealka"],[17.125,48.122,"Petr\u017Ealka"],[17.105,48.103,"Petr\u017Ealka"],[17.13,48.108,"Petr\u017Ealka"],[17.088,48.125,"Petr\u017Ealka"],[17.145,48.1,"Petr\u017Ealka"]],Sh=(s,t)=>{let e=Rt.d.meta;return[(s-e.lon0)*e.mx,(e.lat1-t)*e.my]};function Wy(s,t){let e="",n=1e9;for(let i of Vy){i.p||(i.p=Sh(i[0],i[1]));let r=Math.hypot(i.p[0]-s,i.p[1]-t);r<n&&(n=r,e=i[2])}return e}function Xy(){le.contacts.push([le.contact[0],le.contact[1],"Star\xE9 Mesto"]),le.races.push([le.race[0],le.race[1],"Star\xE9 Mesto"]);for(let s of["contacts","races"])for(let[t,e,n]of Gy[s]){let[i,r]=Sh(t,e),o=null,a=1e9;for(let c of Rt.edgeGrid.query(i,r,450,[])){let l=c.e;if(l.r.b||l.L<12||l.r.c>3)continue;cn.at(l,l.L/2,Nt);let h=l.r.w/2+(s==="races"?-1.5:2.2),u=Nt.x-Nt.dz*h,f=Nt.z+Nt.dx*h;if(Rt.hAt(u,f)<Rt.water+1.5)continue;let d=Math.hypot(u-i,f-r);d<a&&(a=d,o=[u,f,n])}o&&le[s].push(o)}}var Wr=(s,t,e)=>{let n=null,i=1e9;for(let r of s){let o=Math.hypot(r[0]-t,r[1]-e);o<i&&(i=o,n=r)}return n},Fa={};window.__gtbLOC=le;window.__gtbPos=()=>({x:dt?dt.x:Mt.x,z:dt?dt.z:Mt.z,h:dt?dt.h:Mt.h,goal:J.mission?J.mission.goal():null});function Xr(s,t,e,n){let i=Fa[s];return i||(i=Fa[s]=Uy(n),Ye.add(i)),i.material.uniforms.uC.value.set(n),i.position.set(t,Rt.surfaceY(t,e),e),i.visible=!0,i}function nn(s){Fa[s]&&(Fa[s].visible=!1)}function Ba(){le.contacts.forEach((s,t)=>Xr("contact"+t,s[0],s[1],"#ffcc33")),le.races.forEach((s,t)=>Xr("race"+t,s[0],s[1],"#33e0ff")),nn("target"),nn("cp")}function qy(){let s=null,t=Rt.edgeGrid.query(Mt.x,Mt.z,650,[]);for(let u=0;u<80&&!s&&t.length;u++){let f=en(t).e;if(f.r.c>2||f.L<20||f.r.b)continue;let d=f.p[0][0],g=f.p[0][1],x=Math.hypot(d-Mt.x,g-Mt.z);if(x<220||x>650)continue;cn.at(f,f.L/2,Nt);let m=f.r.w/2-1.05;s=[Nt.x-Nt.dz*m,Nt.z+Nt.dx*m,Math.atan2(Nt.dx,Nt.dz),f.r.n]}if(!s)return;let e=en(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),n=[["#c8102e","\u010Derven"],["#ffd400","\u017Elt"],["#0a7d4f","zelen"],["#ff6a00","oran\u017Eov"],["#7b2cbf","fialov"]],[i,r]=en(n),o=Zn.cars[e].def,a=r+{f:"\xFA",m:"\xE9ho",n:"\xE9",i:"\xFD"}[o.g],c={[e]:o.acc_},l=Js(e,s[0],s[1],s[2],i);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${a} ${c[e]}${s[3]?" \xB7 "+s[3]:""}`,goal:()=>dt===l?{x:le.garage[0],z:le.garage[1]}:{x:l.x,z:l.z},onEnter(u){u===l&&(h.text="Dovez auto do gar\xE1\u017Ee pod UFOm (Petr\u017Ealka)",Bt.toast("M\xE1\u0161 ho! Teraz do gar\xE1\u017Ee pod Mostom SNP."),js(1,"majite\u013E vol\xE1 pol\xEDciu"),nn("target"),Xr("garage",...le.garage,"#7dff6a"))},update(){if(!Re.includes(l))return Md("Auto je pre\u010D.");if(l.dmg>260)return Md("Auto je na \u0161rot.");if(dt!==l&&Xr("target",l.x,l.z,"#ff4fd8"),dt===l&&Math.hypot(l.x-le.garage[0],l.z-le.garage[1])<9&&l.speed<4){let u=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(J.wanted?0:200);Dd(`Auto doru\u010Den\xE9! +${u} \u20AC`,u),Ks(),Vr(l)}}};nn("contact"),nn("race"),J.mission=h,Bt.toast("K\u0160EFT: "+h.text),be.blip()}function Yy(){let s=Rt.nearestEdge(Mt.x,Mt.z,80);if(!s)return;let t=s.e,e=[],n={x:Mt.x,z:Mt.z},i=0;for(;e.length<8&&i++<400;){let o=t.b.out.filter(c=>c!==t.rev&&c.r.c>=1);if(!o.length)break;t=en(o);let a=t.p[t.p.length-1];Math.hypot(a[0]-n.x,a[1]-n.z)>110&&a[0]>30&&a[1]>30&&a[0]<Rt.W-30&&a[1]<Rt.H-30&&(e.push({x:a[0],z:a[1]}),n={x:a[0],z:a[1]})}if(e.length<4)return Bt.toast("Tra\u0165 sa nepodarilo n\xE1js\u0165");let r={type:"race",i:0,t:0,cps:e,par:e.length*14,text:"",goal:()=>r.cps[r.i],update(o){r.t+=o;let a=r.cps[r.i];Xr("cp",a.x,a.z,"#33e0ff"),r.text=`Preteky \xB7 checkpoint ${r.i+1}/${r.cps.length} \xB7 ${r.t.toFixed(1)} s`;let c=dt?dt.x:Mt.x,l=dt?dt.z:Mt.z;if(Math.hypot(c-a.x,l-a.z)<10&&(r.i++,be.blip(),r.i>=r.cps.length)){let h=Math.max(100,Math.round((r.par*2-r.t)*12/10)*10);Dd(`Cie\u013E! ${r.t.toFixed(1)} s \xB7 +${h} \u20AC`,h)}}};nn("contact"),nn("race"),J.mission=r,Bt.toast("PRETEKY! Prejdi v\u0161etky checkpointy."),be.blip()}function Dd(s,t){J.money+=t,Bt.big("MISIA SPLNEN\xC1",s,"#7dff6a"),be.win(),J.mission=null,nn("garage"),nn("target"),nn("cp"),setTimeout(Ba,2500)}function Md(s){Bt.big("MISIA ZLYHALA",s,"#ff5a4a"),J.mission=null,nn("garage"),nn("target"),nn("cp"),setTimeout(Ba,2500)}function Nd(s,t,e,n){J.mode="dead",Bt.big(s,t,e,3.2),be.fail(),setTimeout(()=>{dt&&Ks(),J.money=Math.max(0,Math.round(J.money*(1-n))),J.wanted=0,J.heat=0,J.hp=100;for(let i of In.slice())Vr(i);J.mission&&(J.mission=null,nn("garage"),nn("target"),nn("cp")),Ba();{let i=dt?dt.x:Mt.x,r=dt?dt.z:Mt.z,a=Math.hypot(i-le.hospital[0],r-le.hospital[1])>1400?Wr(le.contacts,i,r):null,c=a?a[0]+3:le.hospital[0],l=a?a[1]+3:le.hospital[1];dt&&Ks(),za(c,l),Rt.prime(c,l)}Mt.play("idle"),J.mode="play"},3200)}async function Zy(){Bt.loading(.02,"Na\u010D\xEDtavam mapu Bratislavy\u2026");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}$i=new Aa(Zs);let t=await(await fetch(dh+"world.json")).json();Bt.loading(.25,"Staviam mesto\u2026"),await new Promise(n=>setTimeout(n,30)),Rt=new cn(t,dh,{mobile:Ln}),await Rt.init(n=>Bt.loading(.25+n*.15,"Staviam mesto\u2026")),Ye.add(Rt.group),J.world=Rt,Xy(),Bt.loading(.42,"Staviam Star\xE9 Mesto\u2026"),await new Promise(n=>setTimeout(n,30)),await Rt.prime(...le.start),Bt.loading(.55,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026"),await vd(dh+"models/",n=>Bt.loading(.55+n*.4,"Na\u010D\xEDtavam aut\xE1 a \u013Eud\xED\u2026")),Mt=new zr(0,!1),Ye.add(Mt.obj),za(...le.start),Mt.h=Math.PI,Ba();let e=Rt.nearestEdge(le.start[0],le.start[1]+30,60);if(e){cn.at(e.e,Jt(e.s,5,e.e.L-5),Nt);let n=e.e.r.w/2-1.05,i=Js("golfik",Nt.x-Nt.dz*n,Nt.z+Nt.dx*n,Math.atan2(Nt.dx,Nt.dz),"#b8352b");i.parked=!0,i.safe=!0,i.keep=!0}for(let n=0;n<10;n++)Id(Mt.x,Mt.z,!0);Eh(),Bt.loading(1,""),Bt.ready(),J.mode="title",J.titleCam=0,requestAnimationFrame(Od)}function Ud(){J.mode==="title"&&(be.unlock(),be.start(),J.mode="play",Bt.play(),J.camYaw=Mt.h+Math.PI)}function Fd(){J.mode!=="title"&&(J.paused=!J.paused,Bt.pause(J.paused),be.mute(J.paused))}function Eh(){if(!$i)return;let s=Math.min(window.devicePixelRatio||1,3),t=Math.floor(innerWidth*s),e=Math.floor(innerHeight*s);Ua.width=t,Ua.height=e,Zs.setSize(t,e,!1),Zs.setViewport(0,0,t,e);let n=J.detail??1,i=Ln?[3.9,4.8,6][n]:[8.5,10.5,13][n],r=$i.setSize(t,e,i*s);Ke.aspect=r.aspect;let o=r.aspect<1;Ke.fov=o?74:58,Ke.updateProjectionMatrix(),J.portrait=o}addEventListener("resize",Eh);var bd=performance.now(),mh=0,gh=new P,Sd=new P,Ed=!1;J.camYaw=0;function Od(s){requestAnimationFrame(Od);let t=Math.min(.05,(s-bd)/1e3);if(bd=s,J.fixedDt&&(t=J.fixedDt),J.paused){$i.render(Ye,Ke);return}zd(t),$i.render(Ye,Ke)}J.step=zd;J.cars=Re;J.peds=Pn;J.police=In;J.pl=()=>Mt;J.pc=()=>dt;J.key=(s,t)=>dispatchEvent(new KeyboardEvent(t?"keydown":"keyup",{code:s}));J.spawn=(s,t,e,n,i)=>{let r=Js(s,t,e,n,i);return r.parked=!0,r.keep=!0,r};J.tp=async(s,t)=>{dt&&Ks(),await Rt.prime(s,t),za(s,t)};J.ll=(s,t)=>Sh(s,t);J.LOC=le;J.hY=(s,t)=>Rt.hAt(s,t);J.render=()=>$i.render(Ye,Ke);function zd(s){if(J.t+=s,Ne.uTime.value=J.t,Fy(),(J.mode==="play"||J.mode==="dead")&&(J.tod=(J.tod+s/40)%24),Ky(),J.mode==="title"){Rt.update(Bd,kd,6),jy(s),wd(s,!1);return}{let t=dt||Mt,e=dt?Math.min(60,Math.abs(dt.speed)*4):0;Rt.update(t.x+Math.sin(t.h)*e,t.z+Math.cos(t.h)*e,Ln?4:6)}if(J.mode==="play"?Jy(s):Mt.mixer.update(s),wd(s,!0),oM(s),J.mission&&J.mode==="play"&&J.mission.update(s),!J.mission&&J.mode==="play"){let t=dt?dt.x:Mt.x,e=dt?dt.z:Mt.z,n=Wr(le.contacts,t,e),i=Wr(le.races,t,e);n&&Math.hypot(t-n[0],e-n[1])<4?qy():i&&Math.hypot(t-i[0],e-i[1])<6&&Yy()}if(aM(s),J.dbgCam){let t=J.dbgCam;Ke.position.set(t[0],t[1],t[2]),Ke.lookAt(t[3],t[4],t[5]),Oa.position.copy(Ke.position),wh(t[3],t[5])}cM(s),be.update(J,dt,In,Ke)}function Ky(){let s=J.tod,t=Math.sin((s-6.2)/12*Math.PI)*.95,e=(s-6.2)/12*Math.PI+Math.PI/2,n=new P(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)).normalize();Rd.uSun.value.copy(n);let i=Kf(Jt((.04-n.y)/.16,0,1));Ne.uNight.value=i;let r=Jt(1-Math.abs(n.y-.05)/.3,0,1)*(1-i),o=1-i;un.color.setRGB(1,Zt(.95,.62,r),Zt(.88,.38,r)),un.intensity=o*Zt(3.2,2.2,r)*Jt(n.y*6,0,1),Da.color.setRGB(Zt(.12,Zt(.75,.9,r),o),Zt(.16,Zt(.85,.65,r),o),Zt(.32,Zt(1,.6,r),o)),Da.groundColor.setRGB(Zt(.05,.42,o),Zt(.05,.36,o),Zt(.07,.3,o)),Da.intensity=Zt(.7,1.15,o),i>.5&&(un.intensity=.35*i,un.color.setRGB(.55,.65,1),n.set(.3,.8,.4).normalize()),J.sunDir=n;let a=new yt().setRGB(Zt(.03,Zt(.62,.85,r),o),Zt(.04,Zt(.72,.5,r),o),Zt(.08,Zt(.85,.36,r),o));Ye.fog.color.copy(a),Ye.fog.density=Zt(.002,Ln?.0016:.0011,o),Rt.lampHeadMat.color.setRGB(Zt(.5,3,i),Zt(.45,2.4,i),Zt(.35,1.5,i)),Rt.ufoRing&&Rt.ufoRing.material.color.setRGB(Zt(.6,3,i),Zt(.5,2.2,i),Zt(.3,1.2,i)),$i.exposure.value=Zt(1,1.55,i)}var Bd=1804,kd=1476;function jy(s){J.titleCam+=s*.035;let t=Bd,e=kd,n=J.titleCam+2.2;Ke.position.set(t+Math.sin(n)*330,Rt.hAt(t,e)+95,e+Math.cos(n)*330),Ke.lookAt(t,Rt.hAt(t,e)+20,e),wh(t,e)}function wh(s,t){let e=J.sunDir||new P(0,1,0),n=Gr*2/un.shadow.mapSize.x;s=Math.round(s/n)*n,t=Math.round(t/n)*n;let i=Rt.hAt(s,t);un.target.position.set(s,i,t),un.position.set(s+e.x*250,i+e.y*250,t+e.z*250),un.target.updateMatrixWorld()}function Jy(s){if(ne.act)if(ne.act=0,dt)dt.speed<6&&Ks();else{let r=Mh(3.6);r&&Hy(r)}if(dt){let r=dt,o=ne.my;ne.gas&&(o=1),ne.brake&&(o=-1),r.thr=o,r.st=-ne.mx,r.hb=ne.hb,Mt.x=r.x,Mt.z=r.z,Mt.y=r.y,r.alarm>0&&(r.alarm-=s),Bt.hint("");return}let t=Mt,e=Math.min(1,Math.hypot(ne.mx,ne.my));if(Kn.punchT>0&&(Kn.punchT-=s),ne.atk&&Kn.punchT<=0&&(Kn.punchT=.7,t.play("punch",.08,1.4),setTimeout(()=>$y(),220)),e>.08&&Kn.punchT<=.25){let r=Math.atan2(ne.mx,ne.my),o=J.camYaw+Math.PI-r,a=Math.sin(o),c=Math.cos(o),l=ne.run?5.2:.9+.75*e;t.h+=qn(o-t.h)*Jt(s*10,0,1),t.x+=a*l*s,t.z+=c*l*s,t.play(l>3.5?"run":"walk",.2,l>3.5?1:.55+l*.28)}else Kn.punchT<=.25&&t.play("idle",.25);Rt.collide(t.x,t.z,t.y,.35,Na)&&(t.x=Na.x,t.z=Na.z);for(let r of Re){let o=Math.sin(r.h),a=Math.cos(r.h);for(let c of[r.off,-r.off]){let l=t.x-(r.x+o*c),h=t.z-(r.z+a*c),u=Math.hypot(l,h),f=r.r+.3;if(u<f&&u>.001){t.x+=l/u*(f-u),t.z+=h/u*(f-u);let d=r.speed;d>6&&Kn.hurtT<=0&&(J.hp-=d*2.2,Kn.hurtT=1,be.crash(d*.5),Bt.flash("#ff2a2a",.35))}}}Kn.hurtT>0&&(Kn.hurtT-=s),t.x=Jt(t.x,2,Rt.W-2),t.z=Jt(t.z,2,Rt.H-2);let n=Rt.surfaceY(t.x,t.z,t.y+.8);t.y+=(n-t.y)*Jt(s*14,0,1),t.y<Rt.water-1.2&&(J.hp=0),t.mixer.update(s),t.sync(),J.hp<=0&&Nd("ZRAZEN\xDD","Preb\xFAdza\u0161 sa v nemocnici \xB7 -10 %","#ff5a4a",.1);let i=Mh(3.6);Bt.hint(i?Ln?"NAST\xDAP":"[E] nast\xFAp":"")}function Mh(s){let t=null,e=s;for(let n of Re){let i=Math.hypot(n.x-Mt.x,n.z-Mt.z);i<e&&n.speed<7&&n.burn===void 0&&(e=i,t=n)}return t}function $y(){let s=Math.sin(Mt.h),t=Math.cos(Mt.h);for(let e of Pn){let n=e.x-Mt.x,i=e.z-Mt.z,r=Math.hypot(n,i);if(r<1.6&&(n*s+i*t)/(r||1)>.3){be.punch(),e.hp--,e.hp<=0?(e.knock(s*2,t*2,!1),J.money+=Math.floor(ce()*30)+5):e.flee(Mt.x,Mt.z);for(let o of Pn)o!==e&&Math.hypot(o.x-e.x,o.z-e.z)<18&&o.flee(Mt.x,Mt.z);js(.34,"bitka");return}}be.whoosh()}function wd(s,t){let e=dt?dt.x:Mt.x,n=dt?dt.z:Mt.z;if(mh-=s,mh<=0){mh=.35;let a=Ln?14:22,c=Ln?10:16,l=Ln?16:26,h=0,u=0;for(let f of Re)f.driver==="ai"?h++:f.parked&&u++;h<a&&Oy(e,n),u<c&&zy(e,n),Pn.length<l&&Id(e,n,!1);for(let f of Re.slice())f===dt||f.keep||f.driver==="police"||Math.hypot(f.x-e,f.z-n)>230&&Vr(f);for(let f of Pn.slice())(Math.hypot(f.x-e,f.z-n)>105||f.state==="down"&&f.t<0)&&By(f)}let i=J.t;for(let a of Re)a.ai&&a.driver!=="police"&&a.ai.update(s,Re,i,dt?null:Mt,null),a.burn!==void 0&&(a.thr=0,a.st=0);let r=2,o=s/r;for(let a=0;a<r;a++){for(let c of Re){if(c.parked&&c.speed<.05&&!c.hitT){c.vx=c.vz=0;continue}!c.driver&&!c.parked&&(c.thr=0,c.st=0,c.hb=1),c.step(o,Rt,Re),c.impact>5&&c===dt&&(be.crash(c.impact),_h(c.impact*.02))}for(let c=0;c<Re.length;c++)for(let l=c+1;l<Re.length;l++){let h=Re[c],u=Re[l],f=yd(h,u);if(f>.5&&(h.hitT=u.hitT=3,h.parked&&(h.parked=!1),u.parked&&(u.parked=!1),f>3&&(h.dmg+=f*2,u.dmg+=f*2,h===dt||u===dt))){be.crash(f),_h(f*.025);let d=h===dt?u:h;d.driver==="police"&&js(1,"\xFAtok na pol\xEDciu"),d.ai&&d.driver==="ai"&&(d.ai.stuck=0,f>6&&(d.angry=4))}}}for(let a of Re){if(a.hitT&&(a.hitT=Math.max(0,a.hitT-s)),a.sync(Rt,s),a.lights(Ne.uNight.value,a.thr<-.1&&a.fwd>.5),a.bar){let c=Math.sin(J.t*14)>0;a.bar.red.material.color.setRGB(c?6:.3,.1,.1),a.bar.blue.material.color.setRGB(.1,.2,c?.3:6)}if(a.dmg>300&&a.burn===void 0){a.burn=12,a.obj.traverse(c=>{c.isMesh&&(c.material=c.material.clone?c.material.clone():c.material,c.material.color&&c.material.color.multiplyScalar(.25))}),eM(a),be.boom(),a===dt&&(Ks(),J.hp-=60,Bt.flash("#ff8a2a",.6));for(let c of Pn)Math.hypot(c.x-a.x,c.z-a.z)<20&&c.flee(a.x,a.z)}if(a.burn!==void 0&&(a.burn-=s,a.burn<-20&&a!==dt&&!a.keep)){Vr(a);break}}for(let a of Pn)if(a.update(s,Rt),a.state!=="down")for(let c of Re){let l=c.speed;if(l<2.5)continue;let h=Math.sin(c.h),u=Math.cos(c.h),f=a.x-c.x,d=a.z-c.z,g=f*h+d*u,x=f*u-d*h;if(Math.abs(g)<c.len/2+.3&&Math.abs(x)<c.wid/2+.3){a.knock(c.vx*.6,c.vz*.6,l>9),be.thud(),c===dt&&(js(1,"zrazen\xFD chodec"),_h(.15));for(let m of Pn)m!==a&&Math.hypot(m.x-a.x,m.z-a.z)<25&&m.flee(a.x,a.z)}else c===dt&&g>0&&g<9+l*.4&&Math.abs(x)<3&&a.state==="walk"&&l>6&&a.flee(c.x,c.z)}rM(s)}var Qy=new Te(.6,.6,.6),tM=new Ze({color:16777215,transparent:!0,blending:pr,depthWrite:!1}),Hd=220,ui=new zn(Qy,tM,Hd);ui.frustumCulled=!1;ui.count=0;Ye.add(ui);var Hr=[];function eM(s){Pd.push({car:s,t:0})}var Td=new Gt,nM=new qe,iM=new P,sM=new P,Ad=new yt;function rM(s){for(let e of Pd)if(!(!Re.includes(e.car)||e.car.burn<-18))for(let n=0;n<3;n++)Hr.length<Hd&&Hr.push({x:e.car.x+(ce()-.5)*2,y:e.car.y+1.2,z:e.car.z+(ce()-.5)*3,vy:2+ce()*3,t:0,life:.6+ce()*.9});let t=0;for(let e=Hr.length-1;e>=0;e--){let n=Hr[e];if(n.t+=s,n.y+=n.vy*s,n.t>n.life){Hr.splice(e,1);continue}let i=n.t/n.life;Td.compose(sM.set(n.x,n.y,n.z),nM,iM.setScalar(1+i*1.5)),ui.setMatrixAt(t,Td),Ad.setRGB(Zt(4,.3,i),Zt(1.8,.25,i),Zt(.3,.22,i)),ui.setColorAt(t,Ad),t++}ui.count=t,ui.instanceMatrix.needsUpdate=!0,ui.instanceColor&&(ui.instanceColor.needsUpdate=!0)}var xh=0;function oM(s){let t=dt?dt.x:Mt.x,e=dt?dt.z:Mt.z,n=[0,1,2,3,4,6][J.wanted];xh-=s,In.length<n&&xh<=0&&(ky(t,e),xh=3);let i=!1;for(let r of In.slice()){if(!r.ai)continue;r.ai.update(s,Re,J.t,null,{x:t,z:e});let o=Math.hypot(r.x-t,r.z-e);o<80&&(i=!0),(o>320||J.wanted===0&&o>90)&&Vr(r)}if(J.wanted>0?(J.coolT=(J.coolT||0)+s*(i?.25:1),J.coolT>22&&(J.wanted--,J.heat=J.wanted,J.coolT=0,Bt.toast(J.wanted?"H\u013Eadanos\u0165 kles\xE1: "+"\u2605".repeat(J.wanted):"Pol\xEDcia \u0165a stratila z o\u010D\xED"))):J.heat=Math.max(0,J.heat-s*.02),J.wanted>0&&J.mode==="play"){let r=!1;for(let a of In)Math.hypot(a.x-t,a.z-e)<(dt?7.5:6)&&a.speed<6&&(r=!0);let o=dt?dt.speed<1.5:!0;J.bustT=r&&o?(J.bustT||0)+s:0,J.bustT>(dt?2.5:1.2)&&(J.bustT=0,Nd("ZATKNUT\xDD","Pol\xEDcia ti zobrala 25 % pe\u0148az\xED","#4fa8ff",.25))}}var Ji=0;function _h(s){Ji=Math.min(.6,Ji+s)}function aM(s){let t=J.portrait;ne.camDrag>0&&(ne.camDrag-=s),Bt.look.dx&&(ne.camDX+=Bt.look.dx,Bt.look.dx=0,ne.camDrag=1.5);let e,n,i,r,o,a;if(dt){let d=dt,x=d.fwd<-2?d.h:d.h+Math.PI;ne.camDrag>0?J.camYaw+=ne.camDX:J.camYaw+=qn(x-J.camYaw)*Jt(s*3.2,0,1),ne.camDX=0,r=(t?11.5:8.6)+Jt(d.speed*.09,0,4),o=t?4.6:3.3,e=d.x,i=d.z,n=d.y+1.3,a=2.2}else ne.camDrag>0?J.camYaw+=ne.camDX:Math.hypot(ne.mx,ne.my)>.2&&ne.my>-.3&&(J.camYaw+=qn(Mt.h+Math.PI-J.camYaw)*Jt(s*1.4,0,1)),ne.camDX=0,r=t?6.8:5,o=t?2.9:2.1,e=Mt.x,i=Mt.z,n=Mt.y+1.45,a=1;let c=e+Math.sin(J.camYaw)*r,l=i+Math.cos(J.camYaw)*r,h=Rt.rayHit(e,i,c,l,n+o-1);if(h<1){let d=Math.max(.18,h-.08);c=e+(c-e)*d,l=i+(l-i)*d}let u=Math.max(n+o*(h<1?1.15:1),Rt.surfaceY(c,l,n+5)+1.2);ph.set(c,u,l),Ed||(gh.copy(ph),Ed=!0),gh.lerp(ph,Jt(s*(dt?6:8),0,1));let f=dt?t?9:4:t?4.5:1.5;if(Sd.set(e-Math.sin(J.camYaw)*f,n+a*.4+(t?.6:0),i-Math.cos(J.camYaw)*f),Ke.position.copy(gh),Ji>0&&(Ke.position.x+=(ce()-.5)*Ji,Ke.position.y+=(ce()-.5)*Ji,Ji=Math.max(0,Ji-s*1.5)),Ke.lookAt(Sd),Oa.position.copy(Ke.position),wh(e,i),dt&&Ne.uNight.value>.2){let d=dt;ji.intensity=60*Ne.uNight.value,ji.position.set(d.x+Math.sin(d.h)*2,d.y+.9,d.z+Math.cos(d.h)*2),ji.target.position.set(d.x+Math.sin(d.h)*22,d.y-1,d.z+Math.cos(d.h)*22),ji.target.updateMatrixWorld()}else ji.intensity=0}var vh=0;function cM(s){vh-=s;let t=dt?dt.x:Mt.x,e=dt?dt.z:Mt.z;vh<=0&&(vh=.25,J.street=Rt.streetAt(t,e)||(Rt.onDeck(t,e,(dt||Mt).y+1)?"Most":""),J.district=Wy(t,e));let n=null;J.mission&&(n=J.mission.goal()),Bt.update(J,{px:t,pz:e,h:dt?dt.h:Mt.h,yaw:J.camYaw,speed:dt?dt.speed*3.6:null,goal:n,goalText:J.mission?J.mission.text:"K\u0161efty: \u017Elt\xE9 body \xB7 Preteky: modr\xE9 body",markers:[...[Wr(le.contacts,t,e)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#ffcc33",on:!J.mission})),...[Wr(le.races,t,e)].filter(Boolean).map(i=>({x:i[0],z:i[1],c:"#33e0ff",on:!J.mission}))],police:In.map(i=>({x:i.x,z:i.z})),inCar:!!dt,nearCar:!dt&&!!Mh(3.6)},Rt)}Zy().catch(s=>{console.error(s),Bt.error(String(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
