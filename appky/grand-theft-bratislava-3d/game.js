(()=>{var $u=Object.create,nl=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,td=Object.getOwnPropertyNames,id=Object.getPrototypeOf,rd=Object.prototype.hasOwnProperty,ad=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),nd=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of td(t))!rd.call(e,a)&&a!==i&&nl(e,a,{get:()=>t[a],enumerable:!(r=ed(t,a))||r.enumerable});return e},sd=(e,t,i)=>(i=e!=null?$u(id(e)):{},nd(t||!e||!e.__esModule?nl(i,"default",{value:e,enumerable:!0}):i,e)),od=ad((e,t)=>{"use strict";t.exports=i,t.exports.default=i;function i(E,R,N){N=N||2;var I=R&&R.length,O=I?R[0]*N:E.length,V=r(E,0,O,N,!0),j=[];if(!V||V.next===V.prev)return j;var Z,me,_e,Fe,Te,Pe,B;if(I&&(V=c(E,R,V,N)),E.length>80*N){Z=_e=E[0],me=Fe=E[1];for(var pe=N;pe<O;pe+=N)Te=E[pe],Pe=E[pe+1],Te<Z&&(Z=Te),Pe<me&&(me=Pe),Te>_e&&(_e=Te),Pe>Fe&&(Fe=Pe);B=Math.max(_e-Z,Fe-me),B=B!==0?32767/B:0}return n(V,j,N,Z,me,B,0),j}function r(E,R,N,I,O){var V,j;if(O===Q(E,R,N,I)>0)for(V=R;V<N;V+=I)j=G(V,E[V],E[V+1],j);else for(V=N-I;V>=R;V-=I)j=G(V,E[V],E[V+1],j);return j&&w(j,j.next)&&(Y(j),j=j.next),j}function a(E,R){if(!E)return E;R||(R=E);var N=E,I;do if(I=!1,!N.steiner&&(w(N,N.next)||A(N.prev,N,N.next)===0)){if(Y(N),N=R=N.prev,N===N.next)break;I=!0}else N=N.next;while(I||N!==R);return R}function n(E,R,N,I,O,V,j){if(E){!j&&V&&f(E,I,O,V);for(var Z=E,me,_e;E.prev!==E.next;){if(me=E.prev,_e=E.next,V?s(E,I,O,V):o(E)){R.push(me.i/N|0),R.push(E.i/N|0),R.push(_e.i/N|0),Y(E),E=_e.next,Z=_e.next;continue}if(E=_e,E===Z){j?j===1?(E=l(a(E),R,N),n(E,R,N,I,O,V,2)):j===2&&h(E,R,N,I,O,V):n(a(E),R,N,I,O,V,1);break}}}}function o(E){var R=E.prev,N=E,I=E.next;if(A(R,N,I)>=0)return!1;for(var O=R.x,V=N.x,j=I.x,Z=R.y,me=N.y,_e=I.y,Fe=O<V?O<j?O:j:V<j?V:j,Te=Z<me?Z<_e?Z:_e:me<_e?me:_e,Pe=O>V?O>j?O:j:V>j?V:j,B=Z>me?Z>_e?Z:_e:me>_e?me:_e,pe=I.next;pe!==R;){if(pe.x>=Fe&&pe.x<=Pe&&pe.y>=Te&&pe.y<=B&&x(O,Z,V,me,j,_e,pe.x,pe.y)&&A(pe.prev,pe,pe.next)>=0)return!1;pe=pe.next}return!0}function s(E,R,N,I){var O=E.prev,V=E,j=E.next;if(A(O,V,j)>=0)return!1;for(var Z=O.x,me=V.x,_e=j.x,Fe=O.y,Te=V.y,Pe=j.y,B=Z<me?Z<_e?Z:_e:me<_e?me:_e,pe=Fe<Te?Fe<Pe?Fe:Pe:Te<Pe?Te:Pe,ge=Z>me?Z>_e?Z:_e:me>_e?me:_e,ye=Fe>Te?Fe>Pe?Fe:Pe:Te>Pe?Te:Pe,xe=p(B,pe,R,N,I),Ue=p(ge,ye,R,N,I),Me=E.prevZ,F=E.nextZ;Me&&Me.z>=xe&&F&&F.z<=Ue;){if(Me.x>=B&&Me.x<=ge&&Me.y>=pe&&Me.y<=ye&&Me!==O&&Me!==j&&x(Z,Fe,me,Te,_e,Pe,Me.x,Me.y)&&A(Me.prev,Me,Me.next)>=0||(Me=Me.prevZ,F.x>=B&&F.x<=ge&&F.y>=pe&&F.y<=ye&&F!==O&&F!==j&&x(Z,Fe,me,Te,_e,Pe,F.x,F.y)&&A(F.prev,F,F.next)>=0))return!1;F=F.nextZ}for(;Me&&Me.z>=xe;){if(Me.x>=B&&Me.x<=ge&&Me.y>=pe&&Me.y<=ye&&Me!==O&&Me!==j&&x(Z,Fe,me,Te,_e,Pe,Me.x,Me.y)&&A(Me.prev,Me,Me.next)>=0)return!1;Me=Me.prevZ}for(;F&&F.z<=Ue;){if(F.x>=B&&F.x<=ge&&F.y>=pe&&F.y<=ye&&F!==O&&F!==j&&x(Z,Fe,me,Te,_e,Pe,F.x,F.y)&&A(F.prev,F,F.next)>=0)return!1;F=F.nextZ}return!0}function l(E,R,N){var I=E;do{var O=I.prev,V=I.next.next;!w(O,V)&&P(O,I,I.next,V)&&k(O,V)&&k(V,O)&&(R.push(O.i/N|0),R.push(I.i/N|0),R.push(V.i/N|0),Y(I),Y(I.next),I=E=V),I=I.next}while(I!==E);return a(I)}function h(E,R,N,I,O,V){var j=E;do{for(var Z=j.next.next;Z!==j.prev;){if(j.i!==Z.i&&M(j,Z)){var me=re(j,Z);j=a(j,j.next),me=a(me,me.next),n(j,R,N,I,O,V,0),n(me,R,N,I,O,V,0);return}Z=Z.next}j=j.next}while(j!==E)}function c(E,R,N,I){var O=[],V,j,Z,me,_e;for(V=0,j=R.length;V<j;V++)Z=R[V]*I,me=V<j-1?R[V+1]*I:E.length,_e=r(E,Z,me,I,!1),_e===_e.next&&(_e.steiner=!0),O.push(y(_e));for(O.sort(u),V=0;V<O.length;V++)N=d(O[V],N);return N}function u(E,R){return E.x-R.x}function d(E,R){var N=m(E,R);if(!N)return R;var I=re(N,E);return a(I,I.next),a(N,N.next)}function m(E,R){var N=R,I=E.x,O=E.y,V=-1/0,j;do{if(O<=N.y&&O>=N.next.y&&N.next.y!==N.y){var Z=N.x+(O-N.y)*(N.next.x-N.x)/(N.next.y-N.y);if(Z<=I&&Z>V&&(V=Z,j=N.x<N.next.x?N:N.next,Z===I))return j}N=N.next}while(N!==R);if(!j)return null;var me=j,_e=j.x,Fe=j.y,Te=1/0,Pe;N=j;do I>=N.x&&N.x>=_e&&I!==N.x&&x(O<Fe?I:V,O,_e,Fe,O<Fe?V:I,O,N.x,N.y)&&(Pe=Math.abs(O-N.y)/(I-N.x),k(N,E)&&(Pe<Te||Pe===Te&&(N.x>j.x||N.x===j.x&&v(j,N)))&&(j=N,Te=Pe)),N=N.next;while(N!==me);return j}function v(E,R){return A(E.prev,E,R.prev)<0&&A(R.next,E,E.next)<0}function f(E,R,N,I){var O=E;do O.z===0&&(O.z=p(O.x,O.y,R,N,I)),O.prevZ=O.prev,O.nextZ=O.next,O=O.next;while(O!==E);O.prevZ.nextZ=null,O.prevZ=null,g(O)}function g(E){var R,N,I,O,V,j,Z,me,_e=1;do{for(N=E,E=null,V=null,j=0;N;){for(j++,I=N,Z=0,R=0;R<_e&&(Z++,I=I.nextZ,!!I);R++);for(me=_e;Z>0||me>0&&I;)Z!==0&&(me===0||!I||N.z<=I.z)?(O=N,N=N.nextZ,Z--):(O=I,I=I.nextZ,me--),V?V.nextZ=O:E=O,O.prevZ=V,V=O;N=I}V.nextZ=null,_e*=2}while(j>1);return E}function p(E,R,N,I,O){return E=(E-N)*O|0,R=(R-I)*O|0,E=(E|E<<8)&16711935,E=(E|E<<4)&252645135,E=(E|E<<2)&858993459,E=(E|E<<1)&1431655765,R=(R|R<<8)&16711935,R=(R|R<<4)&252645135,R=(R|R<<2)&858993459,R=(R|R<<1)&1431655765,E|R<<1}function y(E){var R=E,N=E;do(R.x<N.x||R.x===N.x&&R.y<N.y)&&(N=R),R=R.next;while(R!==E);return N}function x(E,R,N,I,O,V,j,Z){return(O-j)*(R-Z)>=(E-j)*(V-Z)&&(E-j)*(I-Z)>=(N-j)*(R-Z)&&(N-j)*(V-Z)>=(O-j)*(I-Z)}function M(E,R){return E.next.i!==R.i&&E.prev.i!==R.i&&!T(E,R)&&(k(E,R)&&k(R,E)&&K(E,R)&&(A(E.prev,E,R.prev)||A(E,R.prev,R))||w(E,R)&&A(E.prev,E,E.next)>0&&A(R.prev,R,R.next)>0)}function A(E,R,N){return(R.y-E.y)*(N.x-R.x)-(R.x-E.x)*(N.y-R.y)}function w(E,R){return E.x===R.x&&E.y===R.y}function P(E,R,N,I){var O=b(A(E,R,N)),V=b(A(E,R,I)),j=b(A(N,I,E)),Z=b(A(N,I,R));return!!(O!==V&&j!==Z||O===0&&L(E,N,R)||V===0&&L(E,I,R)||j===0&&L(N,E,I)||Z===0&&L(N,R,I))}function L(E,R,N){return R.x<=Math.max(E.x,N.x)&&R.x>=Math.min(E.x,N.x)&&R.y<=Math.max(E.y,N.y)&&R.y>=Math.min(E.y,N.y)}function b(E){return E>0?1:E<0?-1:0}function T(E,R){var N=E;do{if(N.i!==E.i&&N.next.i!==E.i&&N.i!==R.i&&N.next.i!==R.i&&P(N,N.next,E,R))return!0;N=N.next}while(N!==E);return!1}function k(E,R){return A(E.prev,E,E.next)<0?A(E,R,E.next)>=0&&A(E,E.prev,R)>=0:A(E,R,E.prev)<0||A(E,E.next,R)<0}function K(E,R){var N=E,I=!1,O=(E.x+R.x)/2,V=(E.y+R.y)/2;do N.y>V!=N.next.y>V&&N.next.y!==N.y&&O<(N.next.x-N.x)*(V-N.y)/(N.next.y-N.y)+N.x&&(I=!I),N=N.next;while(N!==E);return I}function re(E,R){var N=new J(E.i,E.x,E.y),I=new J(R.i,R.x,R.y),O=E.next,V=R.prev;return E.next=R,R.prev=E,N.next=O,O.prev=N,I.next=N,N.prev=I,V.next=I,I.prev=V,I}function G(E,R,N,I){var O=new J(E,R,N);return I?(O.next=I.next,O.prev=I,I.next.prev=O,I.next=O):(O.prev=O,O.next=O),O}function Y(E){E.next.prev=E.prev,E.prev.next=E.next,E.prevZ&&(E.prevZ.nextZ=E.nextZ),E.nextZ&&(E.nextZ.prevZ=E.prevZ)}function J(E,R,N){this.i=E,this.x=R,this.y=N,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}i.deviation=function(E,R,N,I){var O=R&&R.length,V=O?R[0]*N:E.length,j=Math.abs(Q(E,0,V,N));if(O)for(var Z=0,me=R.length;Z<me;Z++){var _e=R[Z]*N,Fe=Z<me-1?R[Z+1]*N:E.length;j-=Math.abs(Q(E,_e,Fe,N))}var Te=0;for(Z=0;Z<I.length;Z+=3){var Pe=I[Z]*N,B=I[Z+1]*N,pe=I[Z+2]*N;Te+=Math.abs((E[Pe]-E[pe])*(E[B+1]-E[Pe+1])-(E[Pe]-E[B])*(E[pe+1]-E[Pe+1]))}return j===0&&Te===0?0:Math.abs((Te-j)/j)};function Q(E,R,N,I){for(var O=0,V=R,j=N-I;V<N;V+=I)O+=(E[j]-E[V])*(E[V+1]+E[j+1]),j=V;return O}i.flatten=function(E){for(var R=E[0][0].length,N={vertices:[],holes:[],dimensions:R},I=0,O=0;O<E.length;O++){for(var V=0;V<E[O].length;V++)for(var j=0;j<R;j++)N.vertices.push(E[O][V][j]);O>0&&(I+=E[O-1].length,N.holes.push(I))}return N}}),ds="160",ld=0,sl=1,hd=2,ps=1,cd=2,Gi=3,Vi=0,Wt=1,Xt=2,rr=0,kr=1,Hr=2,ol=3,ll=4,ud=5,mr=100,dd=101,pd=102,hl=103,cl=104,fd=200,md=201,gd=202,vd=203,fs=204,ms=205,xd=206,_d=207,yd=208,Md=209,Sd=210,bd=211,wd=212,Td=213,Ed=214,Ad=0,Rd=1,Cd=2,rn=3,Ld=4,Pd=5,Id=6,Nd=7,gs=0,Ud=1,Dd=2,ar=0,Od=1,zd=2,Fd=3,Bd=4,kd=5,Hd=6,ul="attached",Gd="detached",dl=300,Gr=301,Vr=302,vs=303,xs=304,an=306,Wr=1e3,mi=1001,nn=1002,Dt=1003,_s=1004,sn=1005,St=1006,pl=1007,Wi=1008,Ii=1009,Vd=1010,Wd=1011,ys=1012,fl=1013,nr=1014,Xi=1015,Xr=1016,ml=1017,gl=1018,gr=1020,Xd=1021,gi=1023,jd=1024,qd=1025,vr=1026,jr=1027,Yd=1028,vl=1029,Kd=1030,xl=1031,_l=1033,Ms=33776,Ss=33777,bs=33778,ws=33779,yl=35840,Ml=35841,Sl=35842,bl=35843,wl=36196,Tl=37492,El=37496,Al=37808,Rl=37809,Cl=37810,Ll=37811,Pl=37812,Il=37813,Nl=37814,Ul=37815,Dl=37816,Ol=37817,zl=37818,Fl=37819,Bl=37820,kl=37821,Ts=36492,Hl=36494,Gl=36495,Zd=36283,Vl=36284,Wl=36285,Xl=36286,Es=2200,Jd=2201,Qd=2202,Ra=2300,qr=2301,As=2302,Yr=2400,Kr=2401,on=2402,Rs=2500,$d=2501,ep=0,jl=1,Cs=2,ql=3e3,xr=3001,tp=3200,ip=3201,Ls=0,rp=1,li="",bt="srgb",Ht="srgb-linear",Ps="display-p3",ln="display-p3-linear",hn="linear",xt="srgb",cn="rec709",un="p3",Zr=7680,Yl=519,ap=512,np=513,sp=514,Kl=515,op=516,lp=517,hp=518,cp=519,Is=35044,_r="300 es",Ns=1035,ji=2e3,dn=2001,yr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=1234567,Ca=Math.PI/180,Jr=180/Math.PI;function vi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+"-"+jt[t&255]+jt[t>>8&255]+"-"+jt[t>>16&15|64]+jt[t>>24&255]+"-"+jt[i&63|128]+jt[i>>8&255]+"-"+jt[i>>16&255]+jt[i>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function Ot(e,t,i){return Math.max(t,Math.min(i,e))}function Us(e,t){return(e%t+t)%t}function up(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function dp(e,t,i){return e!==t?(i-e)/(t-e):0}function La(e,t,i){return(1-i)*e+i*t}function pp(e,t,i,r){return La(e,t,1-Math.exp(-i*r))}function fp(e,t=1){return t-Math.abs(Us(e,t*2)-t)}function mp(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function gp(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function vp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xp(e,t){return e+Math.random()*(t-e)}function _p(e){return e*(.5-Math.random())}function yp(e){e!==void 0&&(Zl=e);let t=Zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mp(e){return e*Ca}function Sp(e){return e*Jr}function Ds(e){return(e&e-1)===0&&e!==0}function bp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function pn(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function wp(e,t,i,r,a){let n=Math.cos,o=Math.sin,s=n(i/2),l=o(i/2),h=n((t+r)/2),c=o((t+r)/2),u=n((t-r)/2),d=o((t-r)/2),m=n((r-t)/2),v=o((r-t)/2);switch(a){case"XYX":e.set(s*c,l*u,l*d,s*h);break;case"YZY":e.set(l*d,s*c,l*u,s*h);break;case"ZXZ":e.set(l*u,l*d,s*c,s*h);break;case"XZX":e.set(s*c,l*v,l*m,s*h);break;case"YXY":e.set(l*m,s*c,l*v,s*h);break;case"ZYZ":e.set(l*v,l*m,s*c,s*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ni(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function gt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Tp={DEG2RAD:Ca,RAD2DEG:Jr,generateUUID:vi,clamp:Ot,euclideanModulo:Us,mapLinear:up,inverseLerp:dp,lerp:La,damp:pp,pingpong:fp,smoothstep:mp,smootherstep:gp,randInt:vp,randFloat:xp,randFloatSpread:_p,seededRandom:yp,degToRad:Mp,radToDeg:Sp,isPowerOfTwo:Ds,ceilPowerOfTwo:bp,floorPowerOfTwo:pn,setQuaternionFromProperEuler:wp,normalize:gt,denormalize:Ni},we=class Uu{constructor(t=0,i=0){Uu.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ot(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,o=this.y-t.y;return this.x=n*r-o*a+t.x,this.y=n*a+o*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class Du{constructor(t,i,r,a,n,o,s,l,h){Du.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,o,s,l,h)}set(t,i,r,a,n,o,s,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=s,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,o=r[0],s=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],m=r[5],v=r[8],f=a[0],g=a[3],p=a[6],y=a[1],x=a[4],M=a[7],A=a[2],w=a[5],P=a[8];return n[0]=o*f+s*y+l*A,n[3]=o*g+s*x+l*w,n[6]=o*p+s*M+l*P,n[1]=h*f+c*y+u*A,n[4]=h*g+c*x+u*w,n[7]=h*p+c*M+u*P,n[2]=d*f+m*y+v*A,n[5]=d*g+m*x+v*w,n[8]=d*p+m*M+v*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],h=t[7],c=t[8];return i*o*c-i*s*h-r*n*c+r*s*l+a*n*h-a*o*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],h=t[7],c=t[8],u=c*o-s*h,d=s*l-c*n,m=h*n-o*l,v=i*u+r*d+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/v;return t[0]=u*f,t[1]=(a*h-c*r)*f,t[2]=(s*r-a*o)*f,t[3]=d*f,t[4]=(c*i-a*l)*f,t[5]=(a*n-s*i)*f,t[6]=m*f,t[7]=(r*l-h*i)*f,t[8]=(o*i-r*n)*f,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,o,s){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*o+h*s)+o+t,-a*h,a*l,-a*(-h*o+l*s)+s+i,0,0,1),this}scale(t,i){return this.premultiply(Os.makeScale(t,i)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,i){return this.premultiply(Os.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Os=new ct;function Jl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ep(){let e=Pa("canvas");return e.style.display="block",e}var Ql={};function Ia(e){e in Ql||(Ql[e]=!0,console.warn(e))}var $l=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fn={[Ht]:{transfer:hn,primaries:cn,toReference:e=>e,fromReference:e=>e},[bt]:{transfer:xt,primaries:cn,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[ln]:{transfer:hn,primaries:un,toReference:e=>e.applyMatrix3(eh),fromReference:e=>e.applyMatrix3($l)},[Ps]:{transfer:xt,primaries:un,toReference:e=>e.convertSRGBToLinear().applyMatrix3(eh),fromReference:e=>e.applyMatrix3($l).convertLinearToSRGB()}},Ap=new Set([Ht,ln]),ft={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Ap.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,i){if(this.enabled===!1||t===i||!t||!i)return e;let r=fn[t].toReference,a=fn[i].fromReference;return a(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return fn[e].primaries},getTransfer:function(e){return e===li?hn:fn[e].transfer}};function Qr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function zs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var $r,th=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$r===void 0&&($r=Pa("canvas")),$r.width=e.width,$r.height=e.height;let i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Qr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rp=0,ih=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,o=r.length;n<o;n++)r[n].isDataTexture?a.push(Fs(r[n].image)):a.push(Fs(r[n]))}else a=Fs(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Fs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?th.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,hi=class cs extends yr{constructor(t=cs.DEFAULT_IMAGE,i=cs.DEFAULT_MAPPING,r=mi,a=mi,n=St,o=Wi,s=gi,l=Ii,h=cs.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=vi(),this.name="",this.source=new ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=o,this.anisotropy=h,this.format=s,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===xr?bt:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case nn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case nn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?xr:ql}set encoding(t){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xr?bt:li}};hi.DEFAULT_IMAGE=null,hi.DEFAULT_MAPPING=dl,hi.DEFAULT_ANISOTROPY=1;var vt=class Ou{constructor(t=0,i=0,r=0,a=1){Ou.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,o=t.elements;return this.x=o[0]*i+o[4]*r+o[8]*a+o[12]*n,this.y=o[1]*i+o[5]*r+o[9]*a+o[13]*n,this.z=o[2]*i+o[6]*r+o[10]*a+o[14]*n,this.w=o[3]*i+o[7]*r+o[11]*a+o[15]*n,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,o=t.elements,s=o[0],l=o[4],h=o[8],c=o[1],u=o[5],d=o[9],m=o[2],v=o[6],f=o[10];if(Math.abs(l-c)<.01&&Math.abs(h-m)<.01&&Math.abs(d-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+m)<.1&&Math.abs(d+v)<.1&&Math.abs(s+u+f-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(s+1)/2,y=(u+1)/2,x=(f+1)/2,M=(l+c)/4,A=(h+m)/4,w=(d+v)/4;return p>y&&p>x?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=M/r,n=A/r):y>x?y<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),r=M/a,n=w/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=A/n,a=w/n),this.set(r,a,n,i),this}let g=Math.sqrt((v-d)*(v-d)+(h-m)*(h-m)+(c-l)*(c-l));return Math.abs(g)<.001&&(g=1),this.x=(v-d)/g,this.y=(h-m)/g,this.z=(c-l)/g,this.w=Math.acos((s+u+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lp=class extends yr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?bt:li),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends Lp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},rh=class extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pp=class extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},L1=class extends Ti{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;let a=this.texture;this.texture=[];for(let n=0;n<i;n++)this.texture[n]=a.clone(),this.texture[n].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.texture.length;r<a;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},ci=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,o){let s=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],m=a[n+2],v=a[n+3];if(o===0){e[t+0]=s,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(c!==v||s!==u||l!==d||h!==m){let f=1-o,g=s*u+l*d+h*m+c*v,p=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let M=Math.sqrt(y),A=Math.atan2(M,g*p);f=Math.sin(f*A)/M,o=Math.sin(o*A)/M}let x=o*p;if(s=s*f+u*x,l=l*f+d*x,h=h*f+m*x,c=c*f+v*x,f===1-o){let M=1/Math.sqrt(s*s+l*l+h*h+c*c);s*=M,l*=M,h*=M,c*=M}}e[t]=s,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let o=i[r],s=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],m=a[n+3];return e[t]=o*m+h*c+s*d-l*u,e[t+1]=s*m+h*u+l*c-o*d,e[t+2]=l*m+h*d+o*u-s*c,e[t+3]=h*m-o*c-s*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,o=Math.cos,s=Math.sin,l=o(i/2),h=o(r/2),c=o(a/2),u=s(i/2),d=s(r/2),m=s(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*m,this._y=l*d*c-u*h*m,this._z=l*h*m+u*d*c,this._w=l*h*c-u*d*m;break;case"YXZ":this._x=u*h*c+l*d*m,this._y=l*d*c-u*h*m,this._z=l*h*m-u*d*c,this._w=l*h*c+u*d*m;break;case"ZXY":this._x=u*h*c-l*d*m,this._y=l*d*c+u*h*m,this._z=l*h*m+u*d*c,this._w=l*h*c-u*d*m;break;case"ZYX":this._x=u*h*c-l*d*m,this._y=l*d*c+u*h*m,this._z=l*h*m-u*d*c,this._w=l*h*c+u*d*m;break;case"YZX":this._x=u*h*c+l*d*m,this._y=l*d*c+u*h*m,this._z=l*h*m-u*d*c,this._w=l*h*c-u*d*m;break;case"XZY":this._x=u*h*c-l*d*m,this._y=l*d*c-u*h*m,this._z=l*h*m+u*d*c,this._w=l*h*c+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],o=t[5],s=t[9],l=t[2],h=t[6],c=t[10],u=i+o+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-s)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>o&&i>c){let d=2*Math.sqrt(1+i-o-c);this._w=(h-s)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(o>c){let d=2*Math.sqrt(1+o-i-c);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(s+h)/d}else{let d=2*Math.sqrt(1+c-i-o);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(s+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,o=t._x,s=t._y,l=t._z,h=t._w;return this._x=i*h+n*o+r*l-a*s,this._y=r*h+n*s+a*o-i*l,this._z=a*h+n*l+i*s-r*o,this._w=n*h-i*o-r*s-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,o=n*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let s=1-o*o;if(s<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(s),h=Math.atan2(l,o),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class zu{constructor(t=0,i=0,r=0){zu.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ah.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,o=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*o,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*o,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*o,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,o=t.y,s=t.z,l=t.w,h=2*(o*a-s*r),c=2*(s*i-n*a),u=2*(n*r-o*i);return this.x=i+l*h+o*u-s*c,this.y=r+l*c+s*h-n*u,this.z=a+l*u+n*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,o=i.x,s=i.y,l=i.z;return this.x=a*l-n*s,this.y=n*o-r*l,this.z=r*s-a*o,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ot(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bs=new H,ah=new ci,qt=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=a.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,Ei):Ei.fromBufferAttribute(a,n),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mn.copy(i.boundingBox)),mn.applyMatrix4(e.matrixWorld),this.union(mn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),gn.subVectors(this.max,Na),ea.subVectors(e.a,Na),ta.subVectors(e.b,Na),ia.subVectors(e.c,Na),sr.subVectors(ta,ea),or.subVectors(ia,ta),Mr.subVectors(ea,ia);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Mr.z,Mr.y,sr.z,0,-sr.x,or.z,0,-or.x,Mr.z,0,-Mr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Mr.y,Mr.x,0];return!ks(t,ea,ta,ia,gn)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,ea,ta,ia,gn))?!1:(vn.crossVectors(sr,or),t=[vn.x,vn.y,vn.z],ks(t,ea,ta,ia,gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qi=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,mn=new qt,ea=new H,ta=new H,ia=new H,sr=new H,or=new H,Mr=new H,Na=new H,gn=new H,vn=new H,Sr=new H;function ks(e,t,i,r,a){for(let n=0,o=e.length-3;n<=o;n+=3){Sr.fromArray(e,n);let s=a.x*Math.abs(Sr.x)+a.y*Math.abs(Sr.y)+a.z*Math.abs(Sr.z),l=t.dot(Sr),h=i.dot(Sr),c=r.dot(Sr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>s)return!1}return!0}var Ip=new qt,Ua=new H,Hs=new H,Ui=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ip.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);let t=Ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Hs)),this.expandByPoint(Ua.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new H,Gs=new H,xn=new H,lr=new H,Vs=new H,_n=new H,Ws=new H,yn=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gs.copy(e).add(t).multiplyScalar(.5),xn.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(Gs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(xn),o=lr.dot(this.direction),s=-lr.dot(xn),l=lr.lengthSq(),h=Math.abs(1-n*n),c,u,d,m;if(h>0)if(c=n*s-o,u=n*o-s,m=a*h,c>=0)if(u>=-m)if(u<=m){let v=1/h;c*=v,u*=v,d=c*(c+n*u+2*o)+u*(n*c+u+2*s)+l}else u=a,c=Math.max(0,-(n*u+o)),d=-c*c+u*(u+2*s)+l;else u=-a,c=Math.max(0,-(n*u+o)),d=-c*c+u*(u+2*s)+l;else u<=-m?(c=Math.max(0,-(-n*a+o)),u=c>0?-a:Math.min(Math.max(-a,-s),a),d=-c*c+u*(u+2*s)+l):u<=m?(c=0,u=Math.min(Math.max(-a,-s),a),d=u*(u+2*s)+l):(c=Math.max(0,-(n*a+o)),u=c>0?a:Math.min(Math.max(-a,-s),a),d=-c*c+u*(u+2*s)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+o)),d=-c*c+u*(u+2*s)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Gs).addScaledVector(xn,u),d}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),o=i-n,s=i+n;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,o,s,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(o=(e.min.z-u.z)*c,s=(e.max.z-u.z)*c):(o=(e.max.z-u.z)*c,s=(e.min.z-u.z)*c),i>s||o>r)||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,a){Vs.subVectors(t,e),_n.subVectors(i,e),Ws.crossVectors(Vs,_n);let n=this.direction.dot(Ws),o;if(n>0){if(r)return null;o=1}else if(n<0)o=-1,n=-n;else return null;lr.subVectors(this.origin,e);let s=o*this.direction.dot(_n.crossVectors(lr,_n));if(s<0)return null;let l=o*this.direction.dot(Vs.cross(lr));if(l<0||s+l>n)return null;let h=-o*lr.dot(Ws);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class al{constructor(t,i,r,a,n,o,s,l,h,c,u,d,m,v,f,g){al.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,o,s,l,h,c,u,d,m,v,f,g)}set(t,i,r,a,n,o,s,l,h,c,u,d,m,v,f,g){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=o,p[9]=s,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=f,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/ra.setFromMatrixColumn(t,0).length(),n=1/ra.setFromMatrixColumn(t,1).length(),o=1/ra.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=o*c,m=o*u,v=s*c,f=s*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=m+v*h,i[5]=d-f*h,i[9]=-s*l,i[2]=f-d*h,i[6]=v+m*h,i[10]=o*l}else if(t.order==="YXZ"){let d=l*c,m=l*u,v=h*c,f=h*u;i[0]=d+f*s,i[4]=v*s-m,i[8]=o*h,i[1]=o*u,i[5]=o*c,i[9]=-s,i[2]=m*s-v,i[6]=f+d*s,i[10]=o*l}else if(t.order==="ZXY"){let d=l*c,m=l*u,v=h*c,f=h*u;i[0]=d-f*s,i[4]=-o*u,i[8]=v+m*s,i[1]=m+v*s,i[5]=o*c,i[9]=f-d*s,i[2]=-o*h,i[6]=s,i[10]=o*l}else if(t.order==="ZYX"){let d=o*c,m=o*u,v=s*c,f=s*u;i[0]=l*c,i[4]=v*h-m,i[8]=d*h+f,i[1]=l*u,i[5]=f*h+d,i[9]=m*h-v,i[2]=-h,i[6]=s*l,i[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*h,v=s*l,f=s*h;i[0]=l*c,i[4]=f-d*u,i[8]=v*u+m,i[1]=u,i[5]=o*c,i[9]=-s*c,i[2]=-h*c,i[6]=m*u+v,i[10]=d-f*u}else if(t.order==="XZY"){let d=o*l,m=o*h,v=s*l,f=s*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+f,i[5]=o*c,i[9]=m*u-v,i[2]=v*u-m,i[6]=s*c,i[10]=f*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Up)}lookAt(t,i,r){let a=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),hr.crossVectors(r,di),hr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),hr.crossVectors(r,di)),hr.normalize(),Mn.crossVectors(di,hr),a[0]=hr.x,a[4]=Mn.x,a[8]=di.x,a[1]=hr.y,a[5]=Mn.y,a[9]=di.y,a[2]=hr.z,a[6]=Mn.z,a[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,o=r[0],s=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],m=r[13],v=r[2],f=r[6],g=r[10],p=r[14],y=r[3],x=r[7],M=r[11],A=r[15],w=a[0],P=a[4],L=a[8],b=a[12],T=a[1],k=a[5],K=a[9],re=a[13],G=a[2],Y=a[6],J=a[10],Q=a[14],E=a[3],R=a[7],N=a[11],I=a[15];return n[0]=o*w+s*T+l*G+h*E,n[4]=o*P+s*k+l*Y+h*R,n[8]=o*L+s*K+l*J+h*N,n[12]=o*b+s*re+l*Q+h*I,n[1]=c*w+u*T+d*G+m*E,n[5]=c*P+u*k+d*Y+m*R,n[9]=c*L+u*K+d*J+m*N,n[13]=c*b+u*re+d*Q+m*I,n[2]=v*w+f*T+g*G+p*E,n[6]=v*P+f*k+g*Y+p*R,n[10]=v*L+f*K+g*J+p*N,n[14]=v*b+f*re+g*Q+p*I,n[3]=y*w+x*T+M*G+A*E,n[7]=y*P+x*k+M*Y+A*R,n[11]=y*L+x*K+M*J+A*N,n[15]=y*b+x*re+M*Q+A*I,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],o=t[1],s=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],m=t[14],v=t[3],f=t[7],g=t[11],p=t[15];return v*(+n*l*u-a*h*u-n*s*d+r*h*d+a*s*m-r*l*m)+f*(+i*l*m-i*h*d+n*o*d-a*o*m+a*h*c-n*l*c)+g*(+i*h*u-i*s*m-n*o*u+r*o*m+n*s*c-r*h*c)+p*(-a*s*c-i*l*u+i*s*d+a*o*u-r*o*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],m=t[11],v=t[12],f=t[13],g=t[14],p=t[15],y=u*g*h-f*d*h+f*l*m-s*g*m-u*l*p+s*d*p,x=v*d*h-c*g*h-v*l*m+o*g*m+c*l*p-o*d*p,M=c*f*h-v*u*h+v*s*m-o*f*m-c*s*p+o*u*p,A=v*u*l-c*f*l-v*s*d+o*f*d+c*s*g-o*u*g,w=i*y+r*x+a*M+n*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=y*P,t[1]=(f*d*n-u*g*n-f*a*m+r*g*m+u*a*p-r*d*p)*P,t[2]=(s*g*n-f*l*n+f*a*h-r*g*h-s*a*p+r*l*p)*P,t[3]=(u*l*n-s*d*n-u*a*h+r*d*h+s*a*m-r*l*m)*P,t[4]=x*P,t[5]=(c*g*n-v*d*n+v*a*m-i*g*m-c*a*p+i*d*p)*P,t[6]=(v*l*n-o*g*n-v*a*h+i*g*h+o*a*p-i*l*p)*P,t[7]=(o*d*n-c*l*n+c*a*h-i*d*h-o*a*m+i*l*m)*P,t[8]=M*P,t[9]=(v*u*n-c*f*n-v*r*m+i*f*m+c*r*p-i*u*p)*P,t[10]=(o*f*n-v*s*n+v*r*h-i*f*h-o*r*p+i*s*p)*P,t[11]=(c*s*n-o*u*n-c*r*h+i*u*h+o*r*m-i*s*m)*P,t[12]=A*P,t[13]=(c*f*a-v*u*a+v*r*d-i*f*d-c*r*g+i*u*g)*P,t[14]=(v*s*a-o*f*a-v*r*l+i*f*l+o*r*g-i*s*g)*P,t[15]=(o*u*a-c*s*a+c*r*l-i*u*l-o*r*d+i*s*d)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,o=t.x,s=t.y,l=t.z,h=n*o,c=n*s;return this.set(h*o+r,h*s-a*l,h*l+a*s,0,h*s+a*l,c*s+r,c*l-a*o,0,h*l-a*s,c*l+a*o,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,o){return this.set(1,r,n,0,t,1,o,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,o=i._y,s=i._z,l=i._w,h=n+n,c=o+o,u=s+s,d=n*h,m=n*c,v=n*u,f=o*c,g=o*u,p=s*u,y=l*h,x=l*c,M=l*u,A=r.x,w=r.y,P=r.z;return a[0]=(1-(f+p))*A,a[1]=(m+M)*A,a[2]=(v-x)*A,a[3]=0,a[4]=(m-M)*w,a[5]=(1-(d+p))*w,a[6]=(g+y)*w,a[7]=0,a[8]=(v+x)*P,a[9]=(g-y)*P,a[10]=(1-(d+f))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=ra.set(a[0],a[1],a[2]).length(),o=ra.set(a[4],a[5],a[6]).length(),s=ra.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Ai.copy(this);let l=1/n,h=1/o,c=1/s;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=c,Ai.elements[9]*=c,Ai.elements[10]*=c,i.setFromRotationMatrix(Ai),r.x=n,r.y=o,r.z=s,this}makePerspective(t,i,r,a,n,o,s=ji){let l=this.elements,h=2*n/(i-t),c=2*n/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),m,v;if(s===ji)m=-(o+n)/(o-n),v=-2*o*n/(o-n);else if(s===dn)m=-o/(o-n),v=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,o,s=ji){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(o-n),d=(i+t)*h,m=(r+a)*c,v,f;if(s===ji)v=(o+n)*u,f=-2*u;else if(s===dn)v=n*u,f=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=f,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},ra=new H,Ai=new at,Np=new H(0,0,0),Up=new H(1,1,1),hr=new H,Mn=new H,di=new H,nh=new at,sh=new ci,oh=class Fu{constructor(t=0,i=0,r=0,a=Fu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],o=a[4],s=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oh.DEFAULT_ORDER="XYZ";var lh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,hh=new H,aa=new ci,Ki=new at,Sn=new H,Da=new H,Op=new H,zp=new ci,ch=new H(1,0,0),uh=new H(0,1,0),dh=new H(0,0,1),Fp={type:"added"},Bp={type:"removed"},Rt=class us extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=us.DEFAULT_UP.clone();let t=new H,i=new oh,r=new ci,a=new H(1,1,1);function n(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new ct}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=us.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=us.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return aa.setFromAxisAngle(t,i),this.quaternion.multiply(aa),this}rotateOnWorldAxis(t,i){return aa.setFromAxisAngle(t,i),this.quaternion.premultiply(aa),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,i){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Sn.copy(t):Sn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Da,Sn,this.up):Ki.lookAt(Sn,Da,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(Ki),this.quaternion.premultiply(aa.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Bp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,o=a.length;n<o;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++){let n=i[r];(n.matrixWorldAutoUpdate===!0||t===!0)&&n.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let a=this.children;for(let n=0,o=a.length;n<o;n++){let s=a[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,h=this.material.length;l<h;l++)s.push(n(t.materials,this.material[l]));a.material=s}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];a.animations.push(n(t.animations,l))}}if(i){let s=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),v=o(t.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=a,r;function o(s){let l=[];for(let h in s){let c=s[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Rt.DEFAULT_UP=new H(0,1,0),Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new H,Zi=new H,Xs=new H,Ji=new H,na=new H,sa=new H,ph=new H,js=new H,qs=new H,Ys=new H,bn=!1,wn=class Br{constructor(t=new H,i=new H,r=new H){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Ri.subVectors(t,i),a.cross(Ri);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Ri.subVectors(a,i),Zi.subVectors(r,i),Xs.subVectors(t,i);let o=Ri.dot(Ri),s=Ri.dot(Zi),l=Ri.dot(Xs),h=Zi.dot(Zi),c=Zi.dot(Xs),u=o*h-s*s;if(u===0)return n.set(0,0,0),null;let d=1/u,m=(h*l-s*c)*d,v=(o*c-s*l)*d;return n.set(1-m-v,v,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(t,i,r,a,n,o,s,l){return bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bn=!0),this.getInterpolation(t,i,r,a,n,o,s,l)}static getInterpolation(t,i,r,a,n,o,s,l){return this.getBarycoord(t,i,r,a,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(s,Ji.z),l)}static isFrontFacing(t,i,r,a){return Ri.subVectors(r,i),Zi.subVectors(t,i),Ri.cross(Zi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ri.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Br.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Br.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,a,n){return bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bn=!0),Br.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}getInterpolation(t,i,r,a,n){return Br.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Br.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Br.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,o,s;na.subVectors(a,r),sa.subVectors(n,r),js.subVectors(t,r);let l=na.dot(js),h=sa.dot(js);if(l<=0&&h<=0)return i.copy(r);qs.subVectors(t,a);let c=na.dot(qs),u=sa.dot(qs);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),i.copy(r).addScaledVector(na,o);Ys.subVectors(t,n);let m=na.dot(Ys),v=sa.dot(Ys);if(v>=0&&m<=v)return i.copy(n);let f=m*h-l*v;if(f<=0&&h>=0&&v<=0)return s=h/(h-v),i.copy(r).addScaledVector(sa,s);let g=c*v-m*u;if(g<=0&&u-c>=0&&m-v>=0)return ph.subVectors(n,a),s=(u-c)/(u-c+(m-v)),i.copy(a).addScaledVector(ph,s);let p=1/(g+f+d);return o=f*p,s=d*p,i.copy(r).addScaledVector(na,o).addScaledVector(sa,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function Ks(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=Us(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ks(n,a,e+1/3),this.g=Ks(n,a,e),this.b=Ks(n,a,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],o=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=fh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ft.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ot(Yt.r*255,0,255))*65536+Math.round(Ot(Yt.g*255,0,255))*256+Math.round(Ot(Yt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,a=Yt.b,n=Math.max(i,r,a),o=Math.min(i,r,a),s,l,h=(o+n)/2;if(o===n)s=0,l=0;else{let c=n-o;switch(l=h<=.5?c/(n+o):c/(2-n-o),n){case i:s=(r-a)/c+(r<a?6:0);break;case r:s=(a-i)/c+2;break;case a:s=(i-r)/c+4;break}s/=6}return e.h=s,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=bt){ft.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Tn);let i=La(cr.h,Tn.h,t),r=La(cr.s,Tn.s,t),a=La(cr.l,Tn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ke;ke.NAMES=fh;var kp=0,Ci=class extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=kr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=ms,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=rn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fs&&(i.blendSrc=this.blendSrc),this.blendDst!==ms&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let o in a){let s=a[o];delete s.metadata,n.push(s)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Li=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},It=new H,En=new we,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Is,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXY(t,En.x,En.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Is&&(e.usage=this.usage),e}},mh=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},gh=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Qe=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hp=0,xi=new at,Zs=new Rt,oa=new H,pi=new qt,Oa=new qt,Gt=new H,wt=class Bu extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jl(t)?gh:mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new ct().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return Zs.lookAt(t),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(t){let i=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];i.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Qe(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];pi.setFromBufferAttribute(n),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){let r=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),i)for(let n=0,o=i.length;n<o;n++){let s=i[n];Oa.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(pi.min,Oa.min),pi.expandByPoint(Gt),Gt.addVectors(pi.max,Oa.max),pi.expandByPoint(Gt)):(pi.expandByPoint(Oa.min),pi.expandByPoint(Oa.max))}pi.getCenter(r);let a=0;for(let n=0,o=t.count;n<o;n++)Gt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Gt));if(i)for(let n=0,o=i.length;n<o;n++){let s=i[n],l=this.morphTargetsRelative;for(let h=0,c=s.count;h<c;h++)Gt.fromBufferAttribute(s,h),l&&(oa.fromBufferAttribute(t,h),Gt.add(oa)),a=Math.max(a,r.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.array,a=i.position.array,n=i.normal.array,o=i.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*s),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let T=0;T<s;T++)h[T]=new H,c[T]=new H;let u=new H,d=new H,m=new H,v=new we,f=new we,g=new we,p=new H,y=new H;function x(T,k,K){u.fromArray(a,T*3),d.fromArray(a,k*3),m.fromArray(a,K*3),v.fromArray(o,T*2),f.fromArray(o,k*2),g.fromArray(o,K*2),d.sub(u),m.sub(u),f.sub(v),g.sub(v);let re=1/(f.x*g.y-g.x*f.y);isFinite(re)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(re),y.copy(m).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(re),h[T].add(p),h[k].add(p),h[K].add(p),c[T].add(y),c[k].add(y),c[K].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let T=0,k=M.length;T<k;++T){let K=M[T],re=K.start,G=K.count;for(let Y=re,J=re+G;Y<J;Y+=3)x(r[Y+0],r[Y+1],r[Y+2])}let A=new H,w=new H,P=new H,L=new H;function b(T){P.fromArray(n,T*3),L.copy(P);let k=h[T];A.copy(k),A.sub(P.multiplyScalar(P.dot(k))).normalize(),w.crossVectors(L,k);let K=w.dot(c[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=K}for(let T=0,k=M.length;T<k;++T){let K=M[T],re=K.start,G=K.count;for(let Y=re,J=re+G;Y<J;Y+=3)b(r[Y+0]),b(r[Y+1]),b(r[Y+2])}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);let a=new H,n=new H,o=new H,s=new H,l=new H,h=new H,c=new H,u=new H;if(t)for(let d=0,m=t.count;d<m;d+=3){let v=t.getX(d+0),f=t.getX(d+1),g=t.getX(d+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,f),o.fromBufferAttribute(i,g),c.subVectors(o,n),u.subVectors(a,n),c.cross(u),s.fromBufferAttribute(r,v),l.fromBufferAttribute(r,f),h.fromBufferAttribute(r,g),s.add(c),l.add(c),h.add(c),r.setXYZ(v,s.x,s.y,s.z),r.setXYZ(f,l.x,l.y,l.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,m=i.count;d<m;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),o.fromBufferAttribute(i,d+2),c.subVectors(o,n),u.subVectors(a,n),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Gt.fromBufferAttribute(t,i),Gt.normalize(),t.setXYZ(i,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function t(s,l){let h=s.array,c=s.itemSize,u=s.normalized,d=new h.constructor(l.length*c),m=0,v=0;for(let f=0,g=l.length;f<g;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*c;for(let p=0;p<c;p++)d[v++]=h[m++]}return new Nt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Bu,r=this.index.array,a=this.attributes;for(let s in a){let l=a[s],h=t(l,r);i.setAttribute(s,h)}let n=this.morphAttributes;for(let s in n){let l=[],h=n[s];for(let c=0,u=h.length;c<u;c++){let d=h[c],m=t(d,r);l.push(m)}i.morphAttributes[s]=l}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let h=o[s];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let m=h[u];c.push(m.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,m=u.length;d<m;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new at,br=new yn,An=new Ui,xh=new H,la=new H,ha=new H,ca=new H,Js=new H,Rn=new H,Cn=new we,Ln=new we,Pn=new we,_h=new H,yh=new H,Mh=new H,In=new H,Nn=new H,tt=class extends Rt{constructor(e=new wt,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){Rn.set(0,0,0);for(let s=0,l=a.length;s<l;s++){let h=o[s],c=a[s];h!==0&&(Js.fromBufferAttribute(c,e),n?Rn.addScaledVector(Js,h):Rn.addScaledVector(Js.sub(t),h))}t.add(Rn)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),An.copy(i.boundingSphere),An.applyMatrix4(a),br.copy(e.ray).recast(e.near),!(An.containsPoint(br.origin)===!1&&(br.intersectSphere(An,xh)===null||br.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(vh.copy(a).invert(),br.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,o=a.index,s=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(n))for(let m=0,v=u.length;m<v;m++){let f=u[m],g=n[f.materialIndex],p=Math.max(f.start,d.start),y=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let x=p,M=y;x<M;x+=3){let A=o.getX(x),w=o.getX(x+1),P=o.getX(x+2);r=Un(this,g,e,i,l,h,c,A,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let f=m,g=v;f<g;f+=3){let p=o.getX(f),y=o.getX(f+1),x=o.getX(f+2);r=Un(this,n,e,i,l,h,c,p,y,x),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(n))for(let m=0,v=u.length;m<v;m++){let f=u[m],g=n[f.materialIndex],p=Math.max(f.start,d.start),y=Math.min(s.count,Math.min(f.start+f.count,d.start+d.count));for(let x=p,M=y;x<M;x+=3){let A=x,w=x+1,P=x+2;r=Un(this,g,e,i,l,h,c,A,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let f=m,g=v;f<g;f+=3){let p=f,y=f+1,x=f+2;r=Un(this,n,e,i,l,h,c,p,y,x),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}};function Gp(e,t,i,r,a,n,o,s){let l;if(t.side===Wt?l=r.intersectTriangle(o,n,a,!0,s):l=r.intersectTriangle(a,n,o,t.side===Vi,s),l===null)return null;Nn.copy(s),Nn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Nn);return h<i.near||h>i.far?null:{distance:h,point:Nn.clone(),object:e}}function Un(e,t,i,r,a,n,o,s,l,h){e.getVertexPosition(s,la),e.getVertexPosition(l,ha),e.getVertexPosition(h,ca);let c=Gp(e,t,i,r,la,ha,ca,In);if(c){a&&(Cn.fromBufferAttribute(a,s),Ln.fromBufferAttribute(a,l),Pn.fromBufferAttribute(a,h),c.uv=wn.getInterpolation(In,la,ha,ca,Cn,Ln,Pn,new we)),n&&(Cn.fromBufferAttribute(n,s),Ln.fromBufferAttribute(n,l),Pn.fromBufferAttribute(n,h),c.uv1=wn.getInterpolation(In,la,ha,ca,Cn,Ln,Pn,new we),c.uv2=c.uv1),o&&(_h.fromBufferAttribute(o,s),yh.fromBufferAttribute(o,l),Mh.fromBufferAttribute(o,h),c.normal=wn.getInterpolation(In,la,ha,ca,_h,yh,Mh,new H),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:s,b:l,c:h,normal:new H,materialIndex:0};wn.getNormal(la,ha,ca,u.normal),c.face=u}return c}var Kt=class ku extends wt{constructor(t=1,i=1,r=1,a=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:o};let s=this;a=Math.floor(a),n=Math.floor(n),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,m=0;v("z","y","x",-1,-1,r,i,t,o,n,0),v("z","y","x",1,-1,r,i,-t,o,n,1),v("x","z","y",1,1,t,r,i,a,o,2),v("x","z","y",1,-1,t,r,-i,a,o,3),v("x","y","z",1,-1,t,i,r,a,n,4),v("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2));function v(f,g,p,y,x,M,A,w,P,L,b){let T=M/P,k=A/L,K=M/2,re=A/2,G=w/2,Y=P+1,J=L+1,Q=0,E=0,R=new H;for(let N=0;N<J;N++){let I=N*k-re;for(let O=0;O<Y;O++){let V=O*T-K;R[f]=V*y,R[g]=I*x,R[p]=G,h.push(R.x,R.y,R.z),R[f]=0,R[g]=0,R[p]=w>0?1:-1,c.push(R.x,R.y,R.z),u.push(O/P),u.push(1-N/L),Q+=1}}for(let N=0;N<L;N++)for(let I=0;I<P;I++){let O=d+I+Y*N,V=d+I+Y*(N+1),j=d+(I+1)+Y*(N+1),Z=d+(I+1)+Y*N;l.push(O,V,Z),l.push(V,j,Z),E+=6}s.addGroup(m,E,b),m+=E,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ua(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function ei(e){let t={};for(let i=0;i<e.length;i++){let r=ua(e[i]);for(let a in r)t[a]=r[a]}return t}function Vp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Sh(e){return e.getRenderTarget()===null?e.outputColorSpace:ft.workingColorSpace}var Wp={clone:ua,merge:ei},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=class extends Qs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let s=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/s,t-=n.offsetY*i/l,r*=n.width/s,i*=n.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},da=-90,pa=1,qp=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ti(da,pa,e,t);r.layers=this.layers,this.add(r);let a=new ti(da,pa,e,t);a.layers=this.layers,this.add(a);let n=new ti(da,pa,e,t);n.layers=this.layers,this.add(n);let o=new ti(da,pa,e,t);o.layers=this.layers,this.add(o);let s=new ti(da,pa,e,t);s.layers=this.layers,this.add(s);let l=new ti(da,pa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,o,s]=t;for(let l of t)this.remove(l);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===dn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,o,s,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,s),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},bh=class extends hi{constructor(e,t,i,r,a,n,o,s,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,i,r,a,n,o,s,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yp=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xr?bt:li),this.texture=new bh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kt(5,5,5),a=new Pi({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:rr});a.uniforms.tEquirect.value=t;let n=new tt(r,a),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=St),new qp(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},$s=new H,Kp=new H,Zp=new ct,wr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=$s.subVectors(i,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zp.getNormalMatrix(e),r=this.coplanarPoint($s).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Tr=new Ui,Dn=new H,eo=class{constructor(e=new wr,t=new wr,i=new wr,r=new wr,a=new wr,n=new wr){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji){let i=this.planes,r=e.elements,a=r[0],n=r[1],o=r[2],s=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],m=r[9],v=r[10],f=r[11],g=r[12],p=r[13],y=r[14],x=r[15];if(i[0].setComponents(s-a,u-l,f-d,x-g).normalize(),i[1].setComponents(s+a,u+l,f+d,x+g).normalize(),i[2].setComponents(s+n,u+h,f+m,x+p).normalize(),i[3].setComponents(s-n,u-h,f-m,x-p).normalize(),i[4].setComponents(s-o,u-c,f-v,x-y).normalize(),t===ji)i[5].setComponents(s+o,u+c,f+v,x+y).normalize();else if(t===dn)i[5].setComponents(o,c,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Dn.x=r.normal.x>0?e.max.x:e.min.x,Dn.y=r.normal.y>0?e.max.y:e.min.y,Dn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wh(){let e=null,t=!1,i=null,r=null;function a(n,o){i(n,o),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Jp(e,t){let i=t.isWebGL2,r=new WeakMap;function a(h,c){let u=h.array,d=h.usage,m=u.byteLength,v=e.createBuffer();e.bindBuffer(c,v),e.bufferData(c,u,d),h.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(i)f=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:m}}function n(h,c,u){let d=c.array,m=c._updateRange,v=c.updateRanges;if(e.bindBuffer(u,h),m.count===-1&&v.length===0&&e.bufferSubData(u,0,d),v.length!==0){for(let f=0,g=v.length;f<g;f++){let p=v[f];i?e.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):e.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}m.count!==-1&&(i?e.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):e.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=r.get(h);c&&(e.deleteBuffer(c.buffer),r.delete(h))}function l(h,c){if(h.isGLBufferAttribute){let d=r.get(h);(!d||d.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=r.get(h);if(u===void 0)r.set(h,a(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,h,c),u.version=h.version}}return{get:o,remove:s,update:l}}var to=class Hu extends wt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,o=i/2,s=Math.floor(r),l=Math.floor(a),h=s+1,c=l+1,u=t/s,d=i/l,m=[],v=[],f=[],g=[];for(let p=0;p<c;p++){let y=p*d-o;for(let x=0;x<h;x++){let M=x*u-n;v.push(M,-y,0),f.push(0,0,1),g.push(x/s),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<s;y++){let x=y+h*p,M=y+h*(p+1),A=y+1+h*(p+1),w=y+1+h*p;m.push(x,M,w),m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.width,t.height,t.widthSegments,t.heightSegments)}},Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`
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
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,Qf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,T0=`#define TOON
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
}`,E0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Qp,alphahash_pars_fragment:$p,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:hf,beginnormal_vertex:cf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Ef,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Lf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Nf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:jf,envmap_vertex:Df,fog_vertex:Of,fog_pars_vertex:zf,fog_fragment:Ff,fog_pars_fragment:Bf,gradientmap_pars_fragment:kf,lightmap_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:$f,lights_fragment_maps:em,lights_fragment_end:tm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:nm,map_fragment:sm,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:um,morphcolor_vertex:dm,morphnormal_vertex:pm,morphtarget_pars_vertex:fm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:vm,normal_pars_fragment:xm,normal_pars_vertex:_m,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Tm,opaque_fragment:Em,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Lm,dithering_pars_fragment:Pm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Dm,shadowmap_vertex:Om,shadowmask_pars_fragment:zm,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:Hm,specularmap_fragment:Gm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:jm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Qm,background_frag:$m,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:i0,cube_frag:r0,depth_vert:a0,depth_frag:n0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:l0,equirect_frag:h0,linedashed_vert:c0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:p0,meshlambert_vert:f0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:v0,meshnormal_vert:x0,meshnormal_frag:_0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:b0,meshtoon_vert:w0,meshtoon_frag:T0,points_vert:E0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:L0,sprite_frag:P0},Ne={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Di={basic:{uniforms:ei([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ei([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ei([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ei([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ei([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ei([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ei([Ne.points,Ne.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ei([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ei([Ne.common,Ne.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ei([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ei([Ne.sprite,Ne.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:ei([Ne.common,Ne.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:ei([Ne.lights,Ne.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Di.physical={uniforms:ei([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var On={r:0,b:0,g:0};function I0(e,t,i,r,a,n,o){let s=new ke(0),l=n===!0?0:1,h,c,u=null,d=0,m=null;function v(g,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?i:t).get(x)),x===null?f(s,l):x&&x.isColor&&(f(x,1),y=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),x&&(x.isCubeTexture||x.mapping===an)?(c===void 0&&(c=new tt(new Kt(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ua(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==xt,(u!==x||d!==x.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new tt(new to(2,2),new Pi({name:"BackgroundMaterial",uniforms:ua(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ft.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=e.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function f(g,p){g.getRGB(On,Sh(e)),r.buffers.color.setClear(On.r,On.g,On.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(g,p=1){s.set(g),l=p,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(s,l)},render:v}}function N0(e,t,i,r){let a=e.getParameter(e.MAX_VERTEX_ATTRIBS),n=r.isWebGL2?null:t.get("OES_vertex_array_object"),o=r.isWebGL2||n!==null,s={},l=g(null),h=l,c=!1;function u(G,Y,J,Q,E){let R=!1;if(o){let N=f(Q,J,Y);h!==N&&(h=N,m(h.object)),R=p(G,Q,J,E),R&&y(G,Q,J,E)}else{let N=Y.wireframe===!0;(h.geometry!==Q.id||h.program!==J.id||h.wireframe!==N)&&(h.geometry=Q.id,h.program=J.id,h.wireframe=N,R=!0)}E!==null&&i.update(E,e.ELEMENT_ARRAY_BUFFER),(R||c)&&(c=!1,L(G,Y,J,Q),E!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(E).buffer))}function d(){return r.isWebGL2?e.createVertexArray():n.createVertexArrayOES()}function m(G){return r.isWebGL2?e.bindVertexArray(G):n.bindVertexArrayOES(G)}function v(G){return r.isWebGL2?e.deleteVertexArray(G):n.deleteVertexArrayOES(G)}function f(G,Y,J){let Q=J.wireframe===!0,E=s[G.id];E===void 0&&(E={},s[G.id]=E);let R=E[Y.id];R===void 0&&(R={},E[Y.id]=R);let N=R[Q];return N===void 0&&(N=g(d()),R[Q]=N),N}function g(G){let Y=[],J=[],Q=[];for(let E=0;E<a;E++)Y[E]=0,J[E]=0,Q[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:Q,object:G,attributes:{},index:null}}function p(G,Y,J,Q){let E=h.attributes,R=Y.attributes,N=0,I=J.getAttributes();for(let O in I)if(I[O].location>=0){let V=E[O],j=R[O];if(j===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),V===void 0||V.attribute!==j||j&&V.data!==j.data)return!0;N++}return h.attributesNum!==N||h.index!==Q}function y(G,Y,J,Q){let E={},R=Y.attributes,N=0,I=J.getAttributes();for(let O in I)if(I[O].location>=0){let V=R[O];V===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(V=G.instanceColor));let j={};j.attribute=V,V&&V.data&&(j.data=V.data),E[O]=j,N++}h.attributes=E,h.attributesNum=N,h.index=Q}function x(){let G=h.newAttributes;for(let Y=0,J=G.length;Y<J;Y++)G[Y]=0}function M(G){A(G,0)}function A(G,Y){let J=h.newAttributes,Q=h.enabledAttributes,E=h.attributeDivisors;J[G]=1,Q[G]===0&&(e.enableVertexAttribArray(G),Q[G]=1),E[G]!==Y&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Y),E[G]=Y)}function w(){let G=h.newAttributes,Y=h.enabledAttributes;for(let J=0,Q=Y.length;J<Q;J++)Y[J]!==G[J]&&(e.disableVertexAttribArray(J),Y[J]=0)}function P(G,Y,J,Q,E,R,N){N===!0?e.vertexAttribIPointer(G,Y,J,E,R):e.vertexAttribPointer(G,Y,J,Q,E,R)}function L(G,Y,J,Q){if(r.isWebGL2===!1&&(G.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let E=Q.attributes,R=J.getAttributes(),N=Y.defaultAttributeValues;for(let I in R){let O=R[I];if(O.location>=0){let V=E[I];if(V===void 0&&(I==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),I==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),V!==void 0){let j=V.normalized,Z=V.itemSize,me=i.get(V);if(me===void 0)continue;let _e=me.buffer,Fe=me.type,Te=me.bytesPerElement,Pe=r.isWebGL2===!0&&(Fe===e.INT||Fe===e.UNSIGNED_INT||V.gpuType===fl);if(V.isInterleavedBufferAttribute){let B=V.data,pe=B.stride,ge=V.offset;if(B.isInstancedInterleavedBuffer){for(let ye=0;ye<O.locationSize;ye++)A(O.location+ye,B.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ye=0;ye<O.locationSize;ye++)M(O.location+ye);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let ye=0;ye<O.locationSize;ye++)P(O.location+ye,Z/O.locationSize,Fe,j,pe*Te,(ge+Z/O.locationSize*ye)*Te,Pe)}else{if(V.isInstancedBufferAttribute){for(let B=0;B<O.locationSize;B++)A(O.location+B,V.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let B=0;B<O.locationSize;B++)M(O.location+B);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let B=0;B<O.locationSize;B++)P(O.location+B,Z/O.locationSize,Fe,j,Z*Te,Z/O.locationSize*B*Te,Pe)}}else if(N!==void 0){let j=N[I];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(O.location,j);break;case 3:e.vertexAttrib3fv(O.location,j);break;case 4:e.vertexAttrib4fv(O.location,j);break;default:e.vertexAttrib1fv(O.location,j)}}}}w()}function b(){K();for(let G in s){let Y=s[G];for(let J in Y){let Q=Y[J];for(let E in Q)v(Q[E].object),delete Q[E];delete Y[J]}delete s[G]}}function T(G){if(s[G.id]===void 0)return;let Y=s[G.id];for(let J in Y){let Q=Y[J];for(let E in Q)v(Q[E].object),delete Q[E];delete Y[J]}delete s[G.id]}function k(G){for(let Y in s){let J=s[Y];if(J[G.id]===void 0)continue;let Q=J[G.id];for(let E in Q)v(Q[E].object),delete Q[E];delete J[G.id]}}function K(){re(),c=!0,h!==l&&(h=l,m(h.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:re,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function U0(e,t,i,r){let a=r.isWebGL2,n;function o(c){n=c}function s(c,u){e.drawArrays(n,c,u),i.update(u,n,1)}function l(c,u,d){if(d===0)return;let m,v;if(a)m=e,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](n,c,u,d),i.update(u,n,d)}function h(c,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(c[v],u[v]);else{m.multiDrawArraysWEBGL(n,c,0,u,0,d);let v=0;for(let f=0;f<d;f++)v+=u[f];i.update(v,n,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=h}function D0(e,t,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",s=i.precision!==void 0?i.precision:"highp",l=n(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);let h=o||t.has("WEBGL_draw_buffers"),c=i.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),p=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||t.has("OES_texture_float"),A=x&&M,w=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:w}}function O0(e){let t=this,i=null,r=0,a=!1,n=!1,o=new wr,s=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||r!==0||a;return a=d,r=u.length,m},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,m){let v=u.clippingPlanes,f=u.clipIntersection,g=u.clipShadows,p=e.get(u);if(!a||v===null||v.length===0||n&&!g)n?c(null):h();else{let y=n?0:r,x=y*4,M=p.clippingState||null;l.value=M,M=c(v,d,x,m);for(let A=0;A!==x;++A)M[A]=i[A];p.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,m,v){let f=u!==null?u.length:0,g=null;if(f!==0){if(g=l.value,v!==!0||g===null){let p=m+f*4,y=d.matrixWorldInverse;s.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=m;x!==f;++x,M+=4)o.copy(u[x]).applyMatrix4(y,s),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,g}}function z0(e){let t=new WeakMap;function i(o,s){return s===vs?o.mapping=Gr:s===xs&&(o.mapping=Vr),o}function r(o){if(o&&o.isTexture){let s=o.mapping;if(s===vs||s===xs)if(t.has(o)){let l=t.get(o).texture;return i(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Yp(l.height/2);return h.fromEquirectangularTexture(e,o),t.set(o,h),o.addEventListener("dispose",a),i(h.texture,o.mapping)}else return null}}return o}function a(o){let s=o.target;s.removeEventListener("dispose",a);let l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var io=class extends Qs{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,o-=h*this.view.offsetY,s=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fa=4,Th=[.125,.215,.35,.446,.526,.582],Er=20,ro=new io,Eh=new ke,ao=null,no=0,so=0,Ar=(1+Math.sqrt(5))/2,ma=1/Ar,Ah=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ar,ma),new H(0,Ar,-ma),new H(ma,0,Ar),new H(-ma,0,Ar),new H(Ar,ma,0),new H(-Ar,ma,0)],Rh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ao=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,no,so),e.scissorTest=!1,zn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Xr,format:gi,colorSpace:Ht,depthBuffer:!1},r=Ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(a)),this._blurMaterial=B0(a,e,t)}return r}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,i,r){let a=new ti(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,l=s.autoClear,h=s.toneMapping;s.getClearColor(Eh),s.toneMapping=ar,s.autoClear=!1;let c=new Li({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),u=new tt(new Kt,c),d=!1,m=e.background;m?m.isColor&&(c.color.copy(m),e.background=null,d=!0):(c.color.copy(Eh),d=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,n[v],0),a.lookAt(o[v],0,0)):f===1?(a.up.set(0,0,n[v]),a.lookAt(0,o[v],0)):(a.up.set(0,n[v],0),a.lookAt(0,0,o[v]));let g=this._cubeSize;zn(r,f*g,v>2?g:0,g,g),s.setRenderTarget(r),d&&s.render(u,a),s.render(e,a)}u.geometry.dispose(),u.material.dispose(),s.toneMapping=h,s.autoClear=l,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Gr||e.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new tt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;let s=this._cubeSize;zn(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(n,ro)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),n=Ah[(r-1)%Ah.length];this._blur(e,r-1,r,a,n)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,o){let s=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new tt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Er-1),v=a/m,f=isFinite(a)?1+Math.floor(h*v):Er;f>Er&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Er}`);let g=[],p=0;for(let w=0;w<Er;++w){let P=w/v,L=Math.exp(-P*P/2);g.push(L),w===0?p+=L:w<f&&(p+=2*L)}for(let w=0;w<g.length;w++)g[w]=g[w]/p;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=n==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;let x=this._sizeLods[r],M=3*x*(r>y-fa?r-y+fa:0),A=4*(this._cubeSize-x);zn(t,M,A,3*x,2*x),s.setRenderTarget(t),s.render(c,ro)}};function F0(e){let t=[],i=[],r=[],a=e,n=e-fa+1+Th.length;for(let o=0;o<n;o++){let s=Math.pow(2,a);i.push(s);let l=1/s;o>e-fa?l=Th[o-e+fa-1]:o===0&&(l=0),r.push(l);let h=1/(s-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,f=3,g=2,p=1,y=new Float32Array(f*v*m),x=new Float32Array(g*v*m),M=new Float32Array(p*v*m);for(let w=0;w<m;w++){let P=w%3*2/3-1,L=w>2?0:-1,b=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];y.set(b,f*v*w),x.set(d,g*v*w);let T=[w,w,w,w,w,w];M.set(T,p*v*w)}let A=new wt;A.setAttribute("position",new Nt(y,f)),A.setAttribute("uv",new Nt(x,g)),A.setAttribute("faceIndex",new Nt(M,p)),t.push(A),a>fa&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Ch(e,t,i){let r=new Ti(e,t,i);return r.texture.mapping=an,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zn(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function B0(e,t,i){let r=new Float32Array(Er),a=new H(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:oo(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Lh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ph(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function oo(){return`

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
	`}function k0(e){let t=new WeakMap,i=null;function r(s){if(s&&s.isTexture){let l=s.mapping,h=l===vs||l===xs,c=l===Gr||l===Vr;if(h||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=t.get(s);return i===null&&(i=new Rh(e)),u=h?i.fromEquirectangular(s,u):i.fromCubemap(s,u),t.set(s,u),u.texture}else{if(t.has(s))return t.get(s).texture;{let u=s.image;if(h&&u&&u.height>0||c&&u&&a(u)){i===null&&(i=new Rh(e));let d=h?i.fromEquirectangular(s):i.fromCubemap(s);return t.set(s,d),s.addEventListener("dispose",n),d.texture}else return null}}}return s}function a(s){let l=0,h=6;for(let c=0;c<h;c++)s[c]!==void 0&&l++;return l===h}function n(s){let l=s.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:o}}function H0(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){let a=i(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function G0(e,t,i,r){let a={},n=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);for(let v in d.morphAttributes){let f=d.morphAttributes[v];for(let g=0,p=f.length;g<p;g++)t.remove(f[g])}d.removeEventListener("dispose",o),delete a[d.id];let m=n.get(d);m&&(t.remove(m),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function s(u,d){return a[d.id]===!0||(d.addEventListener("dispose",o),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let f=m[v];for(let g=0,p=f.length;g<p;g++)t.update(f[g],e.ARRAY_BUFFER)}}function h(u){let d=[],m=u.index,v=u.attributes.position,f=0;if(m!==null){let y=m.array;f=m.version;for(let x=0,M=y.length;x<M;x+=3){let A=y[x+0],w=y[x+1],P=y[x+2];d.push(A,w,w,P,P,A)}}else if(v!==void 0){let y=v.array;f=v.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let A=x+0,w=x+1,P=x+2;d.push(A,w,w,P,P,A)}}else return;let g=new(Jl(d)?gh:mh)(d,1);g.version=f;let p=n.get(u);p&&t.remove(p),n.set(u,g)}function c(u){let d=n.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&h(u)}else h(u);return n.get(u)}return{get:s,update:l,getWireframeAttribute:c}}function V0(e,t,i,r){let a=r.isWebGL2,n;function o(m){n=m}let s,l;function h(m){s=m.type,l=m.bytesPerElement}function c(m,v){e.drawElements(n,v,s,m*l),i.update(v,n,1)}function u(m,v,f){if(f===0)return;let g,p;if(a)g=e,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](n,v,s,m*l,f),i.update(v,n,f)}function d(m,v,f){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f;p++)this.render(m[p]/l,v[p]);else{g.multiDrawElementsWEBGL(n,v,0,s,m,0,f);let p=0;for(let y=0;y<f;y++)p+=v[y];i.update(p,n,1)}}this.setMode=o,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function W0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,o,s){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=s*(n/3);break;case e.LINES:i.lines+=s*(n/2);break;case e.LINE_STRIP:i.lines+=s*(n-1);break;case e.LINE_LOOP:i.lines+=s*n;break;case e.POINTS:i.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function X0(e,t){return e[0]-t[0]}function j0(e,t){return Math.abs(t[1])-Math.abs(e[1])}function q0(e,t,i){let r={},a=new Float32Array(8),n=new WeakMap,o=new vt,s=[];for(let h=0;h<8;h++)s[h]=[h,0];function l(h,c,u){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=m!==void 0?m.length:0,f=n.get(c);if(f===void 0||f.count!==v){let y=function(){re.dispose(),n.delete(c),c.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],L=c.morphAttributes.color||[],b=0;x===!0&&(b=1),M===!0&&(b=2),A===!0&&(b=3);let T=c.attributes.position.count*b,k=1;T>t.maxTextureSize&&(k=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let K=new Float32Array(T*k*4*v),re=new rh(K,T,k,v);re.type=Xi,re.needsUpdate=!0;let G=b*4;for(let Y=0;Y<v;Y++){let J=w[Y],Q=P[Y],E=L[Y],R=T*k*4*Y;for(let N=0;N<J.count;N++){let I=N*G;x===!0&&(o.fromBufferAttribute(J,N),K[R+I+0]=o.x,K[R+I+1]=o.y,K[R+I+2]=o.z,K[R+I+3]=0),M===!0&&(o.fromBufferAttribute(Q,N),K[R+I+4]=o.x,K[R+I+5]=o.y,K[R+I+6]=o.z,K[R+I+7]=0),A===!0&&(o.fromBufferAttribute(E,N),K[R+I+8]=o.x,K[R+I+9]=o.y,K[R+I+10]=o.z,K[R+I+11]=E.itemSize===4?o.w:1)}}f={count:v,texture:re,size:new we(T,k)},n.set(c,f),c.addEventListener("dispose",y)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let p=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(e,"morphTargetBaseInfluence",p),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",f.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}else{let m=d===void 0?0:d.length,v=r[c.id];if(v===void 0||v.length!==m){v=[];for(let x=0;x<m;x++)v[x]=[x,0];r[c.id]=v}for(let x=0;x<m;x++){let M=v[x];M[0]=x,M[1]=d[x]}v.sort(j0);for(let x=0;x<8;x++)x<m&&v[x][1]?(s[x][0]=v[x][0],s[x][1]=v[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(X0);let f=c.morphAttributes.position,g=c.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=s[x],A=M[0],w=M[1];A!==Number.MAX_SAFE_INTEGER&&w?(f&&c.getAttribute("morphTarget"+x)!==f[A]&&c.setAttribute("morphTarget"+x,f[A]),g&&c.getAttribute("morphNormal"+x)!==g[A]&&c.setAttribute("morphNormal"+x,g[A]),a[x]=w,p+=w):(f&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),g&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),a[x]=0)}let y=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(e,"morphTargetBaseInfluence",y),u.getUniforms().setValue(e,"morphTargetInfluences",a)}}return{update:l}}function Y0(e,t,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function s(l){let h=l.target;h.removeEventListener("dispose",s),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:n,dispose:o}}var Ih=class extends hi{constructor(e,t,i,r,a,n,o,s,l,h){if(h=h!==void 0?h:vr,h!==vr&&h!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vr&&(i=nr),i===void 0&&h===jr&&(i=gr),super(null,r,a,n,o,s,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=s!==void 0?s:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nh=new hi,Uh=new Ih(1,1);Uh.compareFunction=Kl;var Dh=new rh,Oh=new Pp,zh=new bh,Fh=[],Bh=[],kh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function ga(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Fh[a];if(n===void 0&&(n=new Float32Array(a),Fh[a]=n),t!==0){r.toArray(n,0);for(let o=1,s=0;o!==t;++o)s+=i,e[o].toArray(n,s)}return n}function zt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ft(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Fn(e,t){let i=Bh[t];i===void 0&&(i=new Int32Array(t),Bh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function K0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Z0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zt(i,t))return;e.uniform2fv(this.addr,t),Ft(i,t)}}function J0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(zt(i,t))return;e.uniform3fv(this.addr,t),Ft(i,t)}}function Q0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zt(i,t))return;e.uniform4fv(this.addr,t),Ft(i,t)}}function $0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(zt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ft(i,t)}else{if(zt(i,r))return;Gh.set(r),e.uniformMatrix2fv(this.addr,!1,Gh),Ft(i,r)}}function eg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(zt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ft(i,t)}else{if(zt(i,r))return;Hh.set(r),e.uniformMatrix3fv(this.addr,!1,Hh),Ft(i,r)}}function tg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(zt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ft(i,t)}else{if(zt(i,r))return;kh.set(r),e.uniformMatrix4fv(this.addr,!1,kh),Ft(i,r)}}function ig(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function rg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zt(i,t))return;e.uniform2iv(this.addr,t),Ft(i,t)}}function ag(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zt(i,t))return;e.uniform3iv(this.addr,t),Ft(i,t)}}function ng(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zt(i,t))return;e.uniform4iv(this.addr,t),Ft(i,t)}}function sg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function og(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zt(i,t))return;e.uniform2uiv(this.addr,t),Ft(i,t)}}function lg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zt(i,t))return;e.uniform3uiv(this.addr,t),Ft(i,t)}}function hg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zt(i,t))return;e.uniform4uiv(this.addr,t),Ft(i,t)}}function cg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n=this.type===e.SAMPLER_2D_SHADOW?Uh:Nh;i.setTexture2D(t||n,a)}function ug(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Oh,a)}function dg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||zh,a)}function pg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Dh,a)}function fg(e){switch(e){case 5126:return K0;case 35664:return Z0;case 35665:return J0;case 35666:return Q0;case 35674:return $0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return ng;case 5125:return sg;case 36294:return og;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function mg(e,t){e.uniform1fv(this.addr,t)}function gg(e,t){let i=ga(t,this.size,2);e.uniform2fv(this.addr,i)}function vg(e,t){let i=ga(t,this.size,3);e.uniform3fv(this.addr,i)}function xg(e,t){let i=ga(t,this.size,4);e.uniform4fv(this.addr,i)}function _g(e,t){let i=ga(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function yg(e,t){let i=ga(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Mg(e,t){let i=ga(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Sg(e,t){e.uniform1iv(this.addr,t)}function bg(e,t){e.uniform2iv(this.addr,t)}function wg(e,t){e.uniform3iv(this.addr,t)}function Tg(e,t){e.uniform4iv(this.addr,t)}function Eg(e,t){e.uniform1uiv(this.addr,t)}function Ag(e,t){e.uniform2uiv(this.addr,t)}function Rg(e,t){e.uniform3uiv(this.addr,t)}function Cg(e,t){e.uniform4uiv(this.addr,t)}function Lg(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);zt(r,n)||(e.uniform1iv(this.addr,n),Ft(r,n));for(let o=0;o!==a;++o)i.setTexture2D(t[o]||Nh,n[o])}function Pg(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);zt(r,n)||(e.uniform1iv(this.addr,n),Ft(r,n));for(let o=0;o!==a;++o)i.setTexture3D(t[o]||Oh,n[o])}function Ig(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);zt(r,n)||(e.uniform1iv(this.addr,n),Ft(r,n));for(let o=0;o!==a;++o)i.setTextureCube(t[o]||zh,n[o])}function Ng(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);zt(r,n)||(e.uniform1iv(this.addr,n),Ft(r,n));for(let o=0;o!==a;++o)i.setTexture2DArray(t[o]||Dh,n[o])}function Ug(e){switch(e){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return _g;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Eg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}var Dg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fg(t.type)}},Og=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}},zg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},lo=/(\w+)(\])?(\[|\.)?/g;function Vh(e,t){e.seq.push(t),e.map[t.id]=t}function Fg(e,t,i){let r=e.name,a=r.length;for(lo.lastIndex=0;;){let n=lo.exec(r),o=lo.lastIndex,s=n[1],l=n[2]==="]",h=n[3];if(l&&(s=s|0),h===void 0||h==="["&&o+2===a){Vh(i,h===void 0?new Dg(s,e,t):new Og(s,e,t));break}else{let c=i.map[s];c===void 0&&(c=new zg(s),Vh(i,c)),i=c}}}var Bn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);Fg(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let o=t[a],s=i[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Wh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Bg=37297,kg=0;function Hg(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let o=a;o<n;o++){let s=o+1;r.push(`${s===t?">":" "} ${s}: ${i[o]}`)}return r.join(`
`)}function Gg(e){let t=ft.getPrimaries(ft.workingColorSpace),i=ft.getPrimaries(e),r;switch(t===i?r="":t===un&&i===cn?r="LinearDisplayP3ToLinearSRGB":t===cn&&i===un&&(r="LinearSRGBToLinearDisplayP3"),e){case Ht:case ln:return[r,"LinearTransferOETF"];case bt:case Ps:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[r,"LinearTransferOETF"]}}function Xh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let o=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Hg(e.getShaderSource(t),o)}else return a}function Vg(e,t){let i=Gg(t);return`vec4 ${e}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Wg(e,t){let i;switch(t){case Od:i="Linear";break;case zd:i="Reinhard";break;case Fd:i="OptimizedCineon";break;case Bd:i="ACESFilmic";break;case Hd:i="AgX";break;case kd:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Xg(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(va).join(`
`)}function jg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(va).join(`
`)}function qg(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Yg(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),o=n.name,s=1;n.type===e.FLOAT_MAT2&&(s=2),n.type===e.FLOAT_MAT3&&(s=3),n.type===e.FLOAT_MAT4&&(s=4),i[o]={type:n.type,location:e.getAttribLocation(t,o),locationSize:s}}return i}function va(e){return e!==""}function jh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(e){return e.replace(Kg,Jg)}var Zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(e,t){let i=it[t];if(i===void 0){let r=Zg.get(t);if(r!==void 0)i=it[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ho(i)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(e){return e.replace(Qg,$g)}function $g(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Kh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ev(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ps?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Gr:case Vr:t="ENVMAP_TYPE_CUBE";break;case an:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iv(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Vr&&(t="ENVMAP_MODE_REFRACTION"),t}function rv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case gs:t="ENVMAP_BLENDING_MULTIPLY";break;case Ud:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function av(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function nv(e,t,i,r){let a=e.getContext(),n=i.defines,o=i.vertexShader,s=i.fragmentShader,l=ev(i),h=tv(i),c=iv(i),u=rv(i),d=av(i),m=i.isWebGL2?"":Xg(i),v=jg(i),f=qg(n),g=a.createProgram(),p,y,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f].filter(va).join(`
`),p.length>0&&(p+=`
`),y=[m,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f].filter(va).join(`
`),y.length>0&&(y+=`
`)):(p=[Kh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),y=[m,Kh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ar?"#define TONE_MAPPING":"",i.toneMapping!==ar?it.tonemapping_pars_fragment:"",i.toneMapping!==ar?Wg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Vg("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(va).join(`
`)),o=ho(o),o=jh(o,i),o=qh(o,i),s=ho(s),s=jh(s,i),s=qh(s,i),o=Yh(o),s=Yh(s),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,A=x+y+s,w=Wh(a,a.VERTEX_SHADER,M),P=Wh(a,a.FRAGMENT_SHADER,A);a.attachShader(g,w),a.attachShader(g,P),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function L(K){if(e.debug.checkShaderErrors){let re=a.getProgramInfoLog(g).trim(),G=a.getShaderInfoLog(w).trim(),Y=a.getShaderInfoLog(P).trim(),J=!0,Q=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(J=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,w,P);else{let E=Xh(a,w,"vertex"),R=Xh(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+E+`
`+R)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(G===""||Y==="")&&(Q=!1);Q&&(K.diagnostics={runnable:J,programLog:re,vertexShader:{log:G,prefix:p},fragmentShader:{log:Y,prefix:y}})}a.deleteShader(w),a.deleteShader(P),b=new Bn(a,g),T=Yg(a,g)}let b;this.getUniforms=function(){return b===void 0&&L(this),b};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(g,Bg)),k},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=P,this}var sv=0,ov=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lv(e),t.set(e,i)),i}},lv=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function hv(e,t,i,r,a,n,o){let s=new lh,l=new ov,h=[],c=a.isWebGL2,u=a.logarithmicDepthBuffer,d=a.vertexTextures,m=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return b===0?"uv":`uv${b}`}function g(b,T,k,K,re){let G=K.fog,Y=re.geometry,J=b.isMeshStandardMaterial?K.environment:null,Q=(b.isMeshStandardMaterial?i:t).get(b.envMap||J),E=Q&&Q.mapping===an?Q.image.height:null,R=v[b.type];b.precision!==null&&(m=a.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,I=N!==void 0?N.length:0,O=0;Y.morphAttributes.position!==void 0&&(O=1),Y.morphAttributes.normal!==void 0&&(O=2),Y.morphAttributes.color!==void 0&&(O=3);let V,j,Z,me;if(R){let We=Di[R];V=We.vertexShader,j=We.fragmentShader}else V=b.vertexShader,j=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);let _e=e.getRenderTarget(),Fe=re.isInstancedMesh===!0,Te=re.isBatchedMesh===!0,Pe=!!b.map,B=!!b.matcap,pe=!!Q,ge=!!b.aoMap,ye=!!b.lightMap,xe=!!b.bumpMap,Ue=!!b.normalMap,Me=!!b.displacementMap,F=!!b.emissiveMap,S=!!b.metalnessMap,_=!!b.roughnessMap,D=b.anisotropy>0,C=b.clearcoat>0,z=b.iridescence>0,X=b.sheen>0,ee=b.transmission>0,q=D&&!!b.anisotropyMap,ue=C&&!!b.clearcoatMap,se=C&&!!b.clearcoatNormalMap,Se=C&&!!b.clearcoatRoughnessMap,ae=z&&!!b.iridescenceMap,He=z&&!!b.iridescenceThicknessMap,Le=X&&!!b.sheenColorMap,Ie=X&&!!b.sheenRoughnessMap,de=!!b.specularMap,he=!!b.specularColorMap,te=!!b.specularIntensityMap,Re=ee&&!!b.transmissionMap,Ce=ee&&!!b.thicknessMap,Ge=!!b.gradientMap,ve=!!b.alphaMap,W=b.alphaTest>0,be=!!b.alphaHash,Ee=!!b.extensions,Ve=!!Y.attributes.uv1,Be=!!Y.attributes.uv2,Oe=!!Y.attributes.uv3,je=ar;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(je=e.toneMapping),{isWebGL2:c,shaderID:R,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:j,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Te,instancing:Fe,instancingColor:Fe&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?e.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ht,map:Pe,matcap:B,envMap:pe,envMapMode:pe&&Q.mapping,envMapCubeUVHeight:E,aoMap:ge,lightMap:ye,bumpMap:xe,normalMap:Ue,displacementMap:d&&Me,emissiveMap:F,normalMapObjectSpace:Ue&&b.normalMapType===rp,normalMapTangentSpace:Ue&&b.normalMapType===Ls,metalnessMap:S,roughnessMap:_,anisotropy:D,anisotropyMap:q,clearcoat:C,clearcoatMap:ue,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,iridescence:z,iridescenceMap:ae,iridescenceThicknessMap:He,sheen:X,sheenColorMap:Le,sheenRoughnessMap:Ie,specularMap:de,specularColorMap:he,specularIntensityMap:te,transmission:ee,transmissionMap:Re,thicknessMap:Ce,gradientMap:Ge,opaque:b.transparent===!1&&b.blending===kr,alphaMap:ve,alphaTest:W,alphaHash:be,combine:b.combine,mapUv:Pe&&f(b.map.channel),aoMapUv:ge&&f(b.aoMap.channel),lightMapUv:ye&&f(b.lightMap.channel),bumpMapUv:xe&&f(b.bumpMap.channel),normalMapUv:Ue&&f(b.normalMap.channel),displacementMapUv:Me&&f(b.displacementMap.channel),emissiveMapUv:F&&f(b.emissiveMap.channel),metalnessMapUv:S&&f(b.metalnessMap.channel),roughnessMapUv:_&&f(b.roughnessMap.channel),anisotropyMapUv:q&&f(b.anisotropyMap.channel),clearcoatMapUv:ue&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&f(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&f(b.sheenRoughnessMap.channel),specularMapUv:de&&f(b.specularMap.channel),specularColorMapUv:he&&f(b.specularColorMap.channel),specularIntensityMapUv:te&&f(b.specularIntensityMap.channel),transmissionMapUv:Re&&f(b.transmissionMap.channel),thicknessMapUv:Ce&&f(b.thicknessMap.channel),alphaMapUv:ve&&f(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ue||D),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Be,vertexUv3s:Oe,pointsUvs:re.isPoints===!0&&!!Y.attributes.uv&&(Pe||ve),fog:!!G,useFog:b.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:O,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&k.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,useLegacyLights:e._useLegacyLights,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xt,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ee&&b.extensions.derivatives===!0,extensionFragDepth:Ee&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let k in b.defines)T.push(k),T.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(T,b),x(T,b),T.push(e.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),b.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),b.push(s.mask)}function M(b){let T=v[b.type],k;if(T){let K=Di[T];k=Wp.clone(K.uniforms)}else k=b.uniforms;return k}function A(b,T){let k;for(let K=0,re=h.length;K<re;K++){let G=h[K];if(G.cacheKey===T){k=G,++k.usedTimes;break}}return k===void 0&&(k=new nv(e,T,b,n),h.push(k)),k}function w(b){if(--b.usedTimes===0){let T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:L}}function cv(){let e=new WeakMap;function t(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function i(n){e.delete(n)}function r(n,o,s){e.get(n)[o]=s}function a(){e=new WeakMap}return{get:t,remove:i,update:r,dispose:a}}function uv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Jh(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function o(u,d,m,v,f,g){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:f,group:g},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=f,p.group=g),t++,p}function s(u,d,m,v,f,g){let p=o(u,d,m,v,f,g);m.transmission>0?r.push(p):m.transparent===!0?a.push(p):i.push(p)}function l(u,d,m,v,f,g){let p=o(u,d,m,v,f,g);m.transmission>0?r.unshift(p):m.transparent===!0?a.unshift(p):i.unshift(p)}function h(u,d){i.length>1&&i.sort(u||uv),r.length>1&&r.sort(d||Zh),a.length>1&&a.sort(d||Zh)}function c(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:s,unshift:l,finish:c,sort:h}}function dv(){let e=new WeakMap;function t(r,a){let n=e.get(r),o;return n===void 0?(o=new Jh,e.set(r,[o])):a>=n.length?(o=new Jh,n.push(o)):o=n[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function pv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new H,color:new ke};break;case"SpotLight":i={position:new H,direction:new H,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":i={color:new ke,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=i,i}}}function fv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var mv=0;function gv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function vv(e,t){let i=new pv,r=fv(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new H);let n=new H,o=new at,s=new at;function l(c,u){let d=0,m=0,v=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let f=0,g=0,p=0,y=0,x=0,M=0,A=0,w=0,P=0,L=0,b=0;c.sort(gv);let T=u===!0?Math.PI:1;for(let K=0,re=c.length;K<re;K++){let G=c[K],Y=G.color,J=G.intensity,Q=G.distance,E=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=Y.r*J*T,m+=Y.g*J*T,v+=Y.b*J*T;else if(G.isLightProbe){for(let R=0;R<9;R++)a.probe[R].addScaledVector(G.sh.coefficients[R],J);b++}else if(G.isDirectionalLight){let R=i.get(G);if(R.color.copy(G.color).multiplyScalar(G.intensity*T),G.castShadow){let N=G.shadow,I=r.get(G);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,a.directionalShadow[f]=I,a.directionalShadowMap[f]=E,a.directionalShadowMatrix[f]=G.shadow.matrix,M++}a.directional[f]=R,f++}else if(G.isSpotLight){let R=i.get(G);R.position.setFromMatrixPosition(G.matrixWorld),R.color.copy(Y).multiplyScalar(J*T),R.distance=Q,R.coneCos=Math.cos(G.angle),R.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),R.decay=G.decay,a.spot[p]=R;let N=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,N.updateMatrices(G),G.castShadow&&L++),a.spotLightMatrix[p]=N.matrix,G.castShadow){let I=r.get(G);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,a.spotShadow[p]=I,a.spotShadowMap[p]=E,w++}p++}else if(G.isRectAreaLight){let R=i.get(G);R.color.copy(Y).multiplyScalar(J),R.halfWidth.set(G.width*.5,0,0),R.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=R,y++}else if(G.isPointLight){let R=i.get(G);if(R.color.copy(G.color).multiplyScalar(G.intensity*T),R.distance=G.distance,R.decay=G.decay,G.castShadow){let N=G.shadow,I=r.get(G);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,I.shadowCameraNear=N.camera.near,I.shadowCameraFar=N.camera.far,a.pointShadow[g]=I,a.pointShadowMap[g]=E,a.pointShadowMatrix[g]=G.shadow.matrix,A++}a.point[g]=R,g++}else if(G.isHemisphereLight){let R=i.get(G);R.skyColor.copy(G.color).multiplyScalar(J*T),R.groundColor.copy(G.groundColor).multiplyScalar(J*T),a.hemi[x]=R,x++}}y>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=d,a.ambient[1]=m,a.ambient[2]=v;let k=a.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==p||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==M||k.numPointShadows!==A||k.numSpotShadows!==w||k.numSpotMaps!==P||k.numLightProbes!==b)&&(a.directional.length=f,a.spot.length=p,a.rectArea.length=y,a.point.length=g,a.hemi.length=x,a.directionalShadow.length=M,a.directionalShadowMap.length=M,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=M,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=w+P-L,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=b,k.directionalLength=f,k.pointLength=g,k.spotLength=p,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=M,k.numPointShadows=A,k.numSpotShadows=w,k.numSpotMaps=P,k.numLightProbes=b,a.version=mv++)}function h(c,u){let d=0,m=0,v=0,f=0,g=0,p=u.matrixWorldInverse;for(let y=0,x=c.length;y<x;y++){let M=c[y];if(M.isDirectionalLight){let A=a.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(p),d++}else if(M.isSpotLight){let A=a.spot[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(p),v++}else if(M.isRectAreaLight){let A=a.rectArea[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),s.identity(),o.copy(M.matrixWorld),o.premultiply(p),s.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){let A=a.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){let A=a.hemi[g];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:l,setupView:h,state:a}}function Qh(e,t){let i=new vv(e,t),r=[],a=[];function n(){r.length=0,a.length=0}function o(c){r.push(c)}function s(c){a.push(c)}function l(c){i.setup(r,c)}function h(c){i.setupView(r,c)}return{init:n,state:{lightsArray:r,shadowsArray:a,lights:i},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:s}}function xv(e,t){let i=new WeakMap;function r(n,o=0){let s=i.get(n),l;return s===void 0?(l=new Qh(e,t),i.set(n,[l])):o>=s.length?(l=new Qh(e,t),s.push(l)):l=s[o],l}function a(){i=new WeakMap}return{get:r,dispose:a}}var _v=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yv=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`;function bv(e,t,i){let r=new eo,a=new we,n=new we,o=new vt,s=new _v({depthPacking:ip}),l=new yv,h={},c=i.maxTextureSize,u={[Vi]:Wt,[Wt]:Vi,[Xt]:Xt},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new wt;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new tt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(w,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=e.getRenderTarget(),T=e.getActiveCubeFace(),k=e.getActiveMipmapLevel(),K=e.state;K.setBlending(rr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let re=p!==Gi&&this.type===Gi,G=p===Gi&&this.type!==Gi;for(let Y=0,J=w.length;Y<J;Y++){let Q=w[Y],E=Q.shadow;if(E===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;a.copy(E.mapSize);let R=E.getFrameExtents();if(a.multiply(R),n.copy(E.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/R.x),a.x=n.x*R.x,E.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/R.y),a.y=n.y*R.y,E.mapSize.y=n.y)),E.map===null||re===!0||G===!0){let I=this.type!==Gi?{minFilter:Dt,magFilter:Dt}:{};E.map!==null&&E.map.dispose(),E.map=new Ti(a.x,a.y,I),E.map.texture.name=Q.name+".shadowMap",E.camera.updateProjectionMatrix()}e.setRenderTarget(E.map),e.clear();let N=E.getViewportCount();for(let I=0;I<N;I++){let O=E.getViewport(I);o.set(n.x*O.x,n.y*O.y,n.x*O.z,n.y*O.w),K.viewport(o),E.updateMatrices(Q,I),r=E.getFrustum(),M(P,L,E.camera,Q,this.type)}E.isPointLightShadow!==!0&&this.type===Gi&&y(E,L),E.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(b,T,k)};function y(w,P){let L=t.update(f);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ti(a.x,a.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(P,null,L,d,f,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(P,null,L,m,f,null)}function x(w,P,L,b){let T=null,k=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)T=k;else if(T=L.isPointLight===!0?l:s,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let K=T.uuid,re=P.uuid,G=h[K];G===void 0&&(G={},h[K]=G);let Y=G[re];Y===void 0&&(Y=T.clone(),G[re]=Y,P.addEventListener("dispose",A)),T=Y}if(T.visible=P.visible,T.wireframe=P.wireframe,b===Gi?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:u[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=e.properties.get(T);K.light=L}return T}function M(w,P,L,b,T){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Gi)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let K=t.update(w),re=w.material;if(Array.isArray(re)){let G=K.groups;for(let Y=0,J=G.length;Y<J;Y++){let Q=G[Y],E=re[Q.materialIndex];if(E&&E.visible){let R=x(w,E,b,T);w.onBeforeShadow(e,w,P,L,K,R,Q),e.renderBufferDirect(L,null,K,R,w,Q),w.onAfterShadow(e,w,P,L,K,R,Q)}}}else if(re.visible){let G=x(w,re,b,T);w.onBeforeShadow(e,w,P,L,K,G,null),e.renderBufferDirect(L,null,K,G,w,null),w.onAfterShadow(e,w,P,L,K,G,null)}}let k=w.children;for(let K=0,re=k.length;K<re;K++)M(k[K],P,L,b,T)}function A(w){w.target.removeEventListener("dispose",A);for(let P in h){let L=h[P],b=w.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}function wv(e,t,i){let r=i.isWebGL2;function a(){let W=!1,be=new vt,Ee=null,Ve=new vt(0,0,0,0);return{setMask:function(Be){Ee!==Be&&!W&&(e.colorMask(Be,Be,Be,Be),Ee=Be)},setLocked:function(Be){W=Be},setClear:function(Be,Oe,je,We,et){et===!0&&(Be*=We,Oe*=We,je*=We),be.set(Be,Oe,je,We),Ve.equals(be)===!1&&(e.clearColor(Be,Oe,je,We),Ve.copy(be))},reset:function(){W=!1,Ee=null,Ve.set(-1,0,0,0)}}}function n(){let W=!1,be=null,Ee=null,Ve=null;return{setTest:function(Be){Be?Te(e.DEPTH_TEST):Pe(e.DEPTH_TEST)},setMask:function(Be){be!==Be&&!W&&(e.depthMask(Be),be=Be)},setFunc:function(Be){if(Ee!==Be){switch(Be){case Ad:e.depthFunc(e.NEVER);break;case Rd:e.depthFunc(e.ALWAYS);break;case Cd:e.depthFunc(e.LESS);break;case rn:e.depthFunc(e.LEQUAL);break;case Ld:e.depthFunc(e.EQUAL);break;case Pd:e.depthFunc(e.GEQUAL);break;case Id:e.depthFunc(e.GREATER);break;case Nd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ee=Be}},setLocked:function(Be){W=Be},setClear:function(Be){Ve!==Be&&(e.clearDepth(Be),Ve=Be)},reset:function(){W=!1,be=null,Ee=null,Ve=null}}}function o(){let W=!1,be=null,Ee=null,Ve=null,Be=null,Oe=null,je=null,We=null,et=null;return{setTest:function(Ye){W||(Ye?Te(e.STENCIL_TEST):Pe(e.STENCIL_TEST))},setMask:function(Ye){be!==Ye&&!W&&(e.stencilMask(Ye),be=Ye)},setFunc:function(Ye,fi,Jt){(Ee!==Ye||Ve!==fi||Be!==Jt)&&(e.stencilFunc(Ye,fi,Jt),Ee=Ye,Ve=fi,Be=Jt)},setOp:function(Ye,fi,Jt){(Oe!==Ye||je!==fi||We!==Jt)&&(e.stencilOp(Ye,fi,Jt),Oe=Ye,je=fi,We=Jt)},setLocked:function(Ye){W=Ye},setClear:function(Ye){et!==Ye&&(e.clearStencil(Ye),et=Ye)},reset:function(){W=!1,be=null,Ee=null,Ve=null,Be=null,Oe=null,je=null,We=null,et=null}}}let s=new a,l=new n,h=new o,c=new WeakMap,u=new WeakMap,d={},m={},v=new WeakMap,f=[],g=null,p=!1,y=null,x=null,M=null,A=null,w=null,P=null,L=null,b=new ke(0,0,0),T=0,k=!1,K=null,re=null,G=null,Y=null,J=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,R=0,N=e.getParameter(e.VERSION);N.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(N)[1]),E=R>=1):N.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),E=R>=2);let I=null,O={},V=e.getParameter(e.SCISSOR_BOX),j=e.getParameter(e.VIEWPORT),Z=new vt().fromArray(V),me=new vt().fromArray(j);function _e(W,be,Ee,Ve){let Be=new Uint8Array(4),Oe=e.createTexture();e.bindTexture(W,Oe),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let je=0;je<Ee;je++)r&&(W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY)?e.texImage3D(be,0,e.RGBA,1,1,Ve,0,e.RGBA,e.UNSIGNED_BYTE,Be):e.texImage2D(be+je,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Be);return Oe}let Fe={};Fe[e.TEXTURE_2D]=_e(e.TEXTURE_2D,e.TEXTURE_2D,1),Fe[e.TEXTURE_CUBE_MAP]=_e(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Fe[e.TEXTURE_2D_ARRAY]=_e(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Fe[e.TEXTURE_3D]=_e(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Te(e.DEPTH_TEST),l.setFunc(rn),F(!1),S(sl),Te(e.CULL_FACE),Ue(rr);function Te(W){d[W]!==!0&&(e.enable(W),d[W]=!0)}function Pe(W){d[W]!==!1&&(e.disable(W),d[W]=!1)}function B(W,be){return m[W]!==be?(e.bindFramebuffer(W,be),m[W]=be,r&&(W===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=be),W===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=be)),!0):!1}function pe(W,be){let Ee=f,Ve=!1;if(W)if(Ee=v.get(be),Ee===void 0&&(Ee=[],v.set(be,Ee)),W.isWebGLMultipleRenderTargets){let Be=W.texture;if(Ee.length!==Be.length||Ee[0]!==e.COLOR_ATTACHMENT0){for(let Oe=0,je=Be.length;Oe<je;Oe++)Ee[Oe]=e.COLOR_ATTACHMENT0+Oe;Ee.length=Be.length,Ve=!0}}else Ee[0]!==e.COLOR_ATTACHMENT0&&(Ee[0]=e.COLOR_ATTACHMENT0,Ve=!0);else Ee[0]!==e.BACK&&(Ee[0]=e.BACK,Ve=!0);Ve&&(i.isWebGL2?e.drawBuffers(Ee):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function ge(W){return g!==W?(e.useProgram(W),g=W,!0):!1}let ye={[mr]:e.FUNC_ADD,[dd]:e.FUNC_SUBTRACT,[pd]:e.FUNC_REVERSE_SUBTRACT};if(r)ye[hl]=e.MIN,ye[cl]=e.MAX;else{let W=t.get("EXT_blend_minmax");W!==null&&(ye[hl]=W.MIN_EXT,ye[cl]=W.MAX_EXT)}let xe={[fd]:e.ZERO,[md]:e.ONE,[gd]:e.SRC_COLOR,[fs]:e.SRC_ALPHA,[Sd]:e.SRC_ALPHA_SATURATE,[yd]:e.DST_COLOR,[xd]:e.DST_ALPHA,[vd]:e.ONE_MINUS_SRC_COLOR,[ms]:e.ONE_MINUS_SRC_ALPHA,[Md]:e.ONE_MINUS_DST_COLOR,[_d]:e.ONE_MINUS_DST_ALPHA,[bd]:e.CONSTANT_COLOR,[wd]:e.ONE_MINUS_CONSTANT_COLOR,[Td]:e.CONSTANT_ALPHA,[Ed]:e.ONE_MINUS_CONSTANT_ALPHA};function Ue(W,be,Ee,Ve,Be,Oe,je,We,et,Ye){if(W===rr){p===!0&&(Pe(e.BLEND),p=!1);return}if(p===!1&&(Te(e.BLEND),p=!0),W!==ud){if(W!==y||Ye!==k){if((x!==mr||w!==mr)&&(e.blendEquation(e.FUNC_ADD),x=mr,w=mr),Ye)switch(W){case kr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFunc(e.ONE,e.ONE);break;case ol:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ll:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ol:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ll:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}M=null,A=null,P=null,L=null,b.set(0,0,0),T=0,y=W,k=Ye}return}Be=Be||be,Oe=Oe||Ee,je=je||Ve,(be!==x||Be!==w)&&(e.blendEquationSeparate(ye[be],ye[Be]),x=be,w=Be),(Ee!==M||Ve!==A||Oe!==P||je!==L)&&(e.blendFuncSeparate(xe[Ee],xe[Ve],xe[Oe],xe[je]),M=Ee,A=Ve,P=Oe,L=je),(We.equals(b)===!1||et!==T)&&(e.blendColor(We.r,We.g,We.b,et),b.copy(We),T=et),y=W,k=!1}function Me(W,be){W.side===Xt?Pe(e.CULL_FACE):Te(e.CULL_FACE);let Ee=W.side===Wt;be&&(Ee=!Ee),F(Ee),W.blending===kr&&W.transparent===!1?Ue(rr):Ue(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),s.setMask(W.colorWrite);let Ve=W.stencilWrite;h.setTest(Ve),Ve&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),D(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Te(e.SAMPLE_ALPHA_TO_COVERAGE):Pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(W){K!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),K=W)}function S(W){W!==ld?(Te(e.CULL_FACE),W!==re&&(W===sl?e.cullFace(e.BACK):W===hd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pe(e.CULL_FACE),re=W}function _(W){W!==G&&(E&&e.lineWidth(W),G=W)}function D(W,be,Ee){W?(Te(e.POLYGON_OFFSET_FILL),(Y!==be||J!==Ee)&&(e.polygonOffset(be,Ee),Y=be,J=Ee)):Pe(e.POLYGON_OFFSET_FILL)}function C(W){W?Te(e.SCISSOR_TEST):Pe(e.SCISSOR_TEST)}function z(W){W===void 0&&(W=e.TEXTURE0+Q-1),I!==W&&(e.activeTexture(W),I=W)}function X(W,be,Ee){Ee===void 0&&(I===null?Ee=e.TEXTURE0+Q-1:Ee=I);let Ve=O[Ee];Ve===void 0&&(Ve={type:void 0,texture:void 0},O[Ee]=Ve),(Ve.type!==W||Ve.texture!==be)&&(I!==Ee&&(e.activeTexture(Ee),I=Ee),e.bindTexture(W,be||Fe[W]),Ve.type=W,Ve.texture=be)}function ee(){let W=O[I];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{e.compressedTexImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{e.texSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{e.texSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{e.texStorage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{e.texStorage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{e.texImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{e.texImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(W){Z.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),Z.copy(W))}function Re(W){me.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function Ce(W,be){let Ee=u.get(be);Ee===void 0&&(Ee=new WeakMap,u.set(be,Ee));let Ve=Ee.get(W);Ve===void 0&&(Ve=e.getUniformBlockIndex(be,W.name),Ee.set(W,Ve))}function Ge(W,be){let Ee=u.get(be).get(W);c.get(be)!==Ee&&(e.uniformBlockBinding(be,Ee,W.__bindingPointIndex),c.set(be,Ee))}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},I=null,O={},m={},v=new WeakMap,f=[],g=null,p=!1,y=null,x=null,M=null,A=null,w=null,P=null,L=null,b=new ke(0,0,0),T=0,k=!1,K=null,re=null,G=null,Y=null,J=null,Z.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),s.reset(),l.reset(),h.reset()}return{buffers:{color:s,depth:l,stencil:h},enable:Te,disable:Pe,bindFramebuffer:B,drawBuffers:pe,useProgram:ge,setBlending:Ue,setMaterial:Me,setFlipSided:F,setCullFace:S,setLineWidth:_,setPolygonOffset:D,setScissorTest:C,activeTexture:z,bindTexture:X,unbindTexture:ee,compressedTexImage2D:q,compressedTexImage3D:ue,texImage2D:de,texImage3D:he,updateUBOMapping:Ce,uniformBlockBinding:Ge,texStorage2D:Le,texStorage3D:Ie,texSubImage2D:se,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:He,scissor:te,viewport:Re,reset:ve}}function Tv(e,t,i,r,a,n,o){let s=a.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return m?new OffscreenCanvas(S,_):Pa("canvas")}function f(S,_,D,C){let z=1;if((S.width>C||S.height>C)&&(z=C/Math.max(S.width,S.height)),z<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let X=_?pn:Math.floor,ee=X(z*S.width),q=X(z*S.height);u===void 0&&(u=v(ee,q));let ue=D?v(ee,q):u;return ue.width=ee,ue.height=q,ue.getContext("2d").drawImage(S,0,0,ee,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ee+"x"+q+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return Ds(S.width)&&Ds(S.height)}function p(S){return s?!1:S.wrapS!==mi||S.wrapT!==mi||S.minFilter!==Dt&&S.minFilter!==St}function y(S,_){return S.generateMipmaps&&_&&S.minFilter!==Dt&&S.minFilter!==St}function x(S){e.generateMipmap(S)}function M(S,_,D,C,z=!1){if(s===!1)return _;if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=_;if(_===e.RED&&(D===e.FLOAT&&(X=e.R32F),D===e.HALF_FLOAT&&(X=e.R16F),D===e.UNSIGNED_BYTE&&(X=e.R8)),_===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(X=e.R8UI),D===e.UNSIGNED_SHORT&&(X=e.R16UI),D===e.UNSIGNED_INT&&(X=e.R32UI),D===e.BYTE&&(X=e.R8I),D===e.SHORT&&(X=e.R16I),D===e.INT&&(X=e.R32I)),_===e.RG&&(D===e.FLOAT&&(X=e.RG32F),D===e.HALF_FLOAT&&(X=e.RG16F),D===e.UNSIGNED_BYTE&&(X=e.RG8)),_===e.RGBA){let ee=z?hn:ft.getTransfer(C);D===e.FLOAT&&(X=e.RGBA32F),D===e.HALF_FLOAT&&(X=e.RGBA16F),D===e.UNSIGNED_BYTE&&(X=ee===xt?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function A(S,_,D){return y(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==Dt&&S.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){return S===Dt||S===_s||S===sn?e.NEAREST:e.LINEAR}function P(S){let _=S.target;_.removeEventListener("dispose",P),b(_),_.isVideoTexture&&c.delete(_)}function L(S){let _=S.target;_.removeEventListener("dispose",L),k(_)}function b(S){let _=r.get(S);if(_.__webglInit===void 0)return;let D=S.source,C=d.get(D);if(C){let z=C[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&T(S),Object.keys(C).length===0&&d.delete(D)}r.remove(S)}function T(S){let _=r.get(S);e.deleteTexture(_.__webglTexture);let D=S.source,C=d.get(D);delete C[_.__cacheKey],o.memory.textures--}function k(S){let _=S.texture,D=r.get(S),C=r.get(_);if(C.__webglTexture!==void 0&&(e.deleteTexture(C.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(D.__webglFramebuffer[z]))for(let X=0;X<D.__webglFramebuffer[z].length;X++)e.deleteFramebuffer(D.__webglFramebuffer[z][X]);else e.deleteFramebuffer(D.__webglFramebuffer[z]);D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer[z])}else{if(Array.isArray(D.__webglFramebuffer))for(let z=0;z<D.__webglFramebuffer.length;z++)e.deleteFramebuffer(D.__webglFramebuffer[z]);else e.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&e.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let z=0;z<D.__webglColorRenderbuffer.length;z++)D.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(D.__webglColorRenderbuffer[z]);D.__webglDepthRenderbuffer&&e.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let z=0,X=_.length;z<X;z++){let ee=r.get(_[z]);ee.__webglTexture&&(e.deleteTexture(ee.__webglTexture),o.memory.textures--),r.remove(_[z])}r.remove(_),r.remove(S)}let K=0;function re(){K=0}function G(){let S=K;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),K+=1,S}function Y(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function J(S,_){let D=r.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){let C=S.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(D,S,_);return}}i.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+_)}function Q(S,_){let D=r.get(S);if(S.version>0&&D.__version!==S.version){Z(D,S,_);return}i.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+_)}function E(S,_){let D=r.get(S);if(S.version>0&&D.__version!==S.version){Z(D,S,_);return}i.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+_)}function R(S,_){let D=r.get(S);if(S.version>0&&D.__version!==S.version){me(D,S,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+_)}let N={[Wr]:e.REPEAT,[mi]:e.CLAMP_TO_EDGE,[nn]:e.MIRRORED_REPEAT},I={[Dt]:e.NEAREST,[_s]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[St]:e.LINEAR,[pl]:e.LINEAR_MIPMAP_NEAREST,[Wi]:e.LINEAR_MIPMAP_LINEAR},O={[ap]:e.NEVER,[cp]:e.ALWAYS,[np]:e.LESS,[Kl]:e.LEQUAL,[sp]:e.EQUAL,[hp]:e.GEQUAL,[op]:e.GREATER,[lp]:e.NOTEQUAL};function V(S,_,D){if(D?(e.texParameteri(S,e.TEXTURE_WRAP_S,N[_.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,N[_.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,N[_.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,I[_.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,I[_.minFilter])):(e.texParameteri(S,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(S,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(_.wrapS!==mi||_.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(S,e.TEXTURE_MAG_FILTER,w(_.magFilter)),e.texParameteri(S,e.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==Dt&&_.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,O[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Dt||_.minFilter!==sn&&_.minFilter!==Wi||_.type===Xi&&t.has("OES_texture_float_linear")===!1||s===!1&&_.type===Xr&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||r.get(_).__currentAnisotropy)&&(e.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy)}}function j(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",P));let C=_.source,z=d.get(C);z===void 0&&(z={},d.set(C,z));let X=Y(_);if(X!==S.__cacheKey){z[X]===void 0&&(z[X]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,D=!0),z[X].usedTimes++;let ee=z[S.__cacheKey];ee!==void 0&&(z[S.__cacheKey].usedTimes--,ee.usedTimes===0&&T(_)),S.__cacheKey=X,S.__webglTexture=z[X].texture}return D}function Z(S,_,D){let C=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(C=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(C=e.TEXTURE_3D);let z=j(S,_),X=_.source;i.bindTexture(C,S.__webglTexture,e.TEXTURE0+D);let ee=r.get(X);if(X.version!==ee.__version||z===!0){i.activeTexture(e.TEXTURE0+D);let q=ft.getPrimaries(ft.workingColorSpace),ue=_.colorSpace===li?null:ft.getPrimaries(_.colorSpace),se=_.colorSpace===li||q===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Se=p(_)&&g(_.image)===!1,ae=f(_.image,Se,!1,a.maxTextureSize);ae=F(_,ae);let He=g(ae)||s,Le=n.convert(_.format,_.colorSpace),Ie=n.convert(_.type),de=M(_.internalFormat,Le,Ie,_.colorSpace,_.isVideoTexture);V(C,_,He);let he,te=_.mipmaps,Re=s&&_.isVideoTexture!==!0&&de!==wl,Ce=ee.__version===void 0||z===!0,Ge=A(_,ae,He);if(_.isDepthTexture)de=e.DEPTH_COMPONENT,s?_.type===Xi?de=e.DEPTH_COMPONENT32F:_.type===nr?de=e.DEPTH_COMPONENT24:_.type===gr?de=e.DEPTH24_STENCIL8:de=e.DEPTH_COMPONENT16:_.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===vr&&de===e.DEPTH_COMPONENT&&_.type!==ys&&_.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=nr,Ie=n.convert(_.type)),_.format===jr&&de===e.DEPTH_COMPONENT&&(de=e.DEPTH_STENCIL,_.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=gr,Ie=n.convert(_.type))),Ce&&(Re?i.texStorage2D(e.TEXTURE_2D,1,de,ae.width,ae.height):i.texImage2D(e.TEXTURE_2D,0,de,ae.width,ae.height,0,Le,Ie,null));else if(_.isDataTexture)if(te.length>0&&He){Re&&Ce&&i.texStorage2D(e.TEXTURE_2D,Ge,de,te[0].width,te[0].height);for(let ve=0,W=te.length;ve<W;ve++)he=te[ve],Re?i.texSubImage2D(e.TEXTURE_2D,ve,0,0,he.width,he.height,Le,Ie,he.data):i.texImage2D(e.TEXTURE_2D,ve,de,he.width,he.height,0,Le,Ie,he.data);_.generateMipmaps=!1}else Re?(Ce&&i.texStorage2D(e.TEXTURE_2D,Ge,de,ae.width,ae.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,ae.width,ae.height,Le,Ie,ae.data)):i.texImage2D(e.TEXTURE_2D,0,de,ae.width,ae.height,0,Le,Ie,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Ce&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ge,de,te[0].width,te[0].height,ae.depth);for(let ve=0,W=te.length;ve<W;ve++)he=te[ve],_.format!==gi?Le!==null?Re?i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ve,0,0,0,he.width,he.height,ae.depth,Le,he.data,0,0):i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ve,de,he.width,he.height,ae.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?i.texSubImage3D(e.TEXTURE_2D_ARRAY,ve,0,0,0,he.width,he.height,ae.depth,Le,Ie,he.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ve,de,he.width,he.height,ae.depth,0,Le,Ie,he.data)}else{Re&&Ce&&i.texStorage2D(e.TEXTURE_2D,Ge,de,te[0].width,te[0].height);for(let ve=0,W=te.length;ve<W;ve++)he=te[ve],_.format!==gi?Le!==null?Re?i.compressedTexSubImage2D(e.TEXTURE_2D,ve,0,0,he.width,he.height,Le,he.data):i.compressedTexImage2D(e.TEXTURE_2D,ve,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?i.texSubImage2D(e.TEXTURE_2D,ve,0,0,he.width,he.height,Le,Ie,he.data):i.texImage2D(e.TEXTURE_2D,ve,de,he.width,he.height,0,Le,Ie,he.data)}else if(_.isDataArrayTexture)Re?(Ce&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ge,de,ae.width,ae.height,ae.depth),i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Le,Ie,ae.data)):i.texImage3D(e.TEXTURE_2D_ARRAY,0,de,ae.width,ae.height,ae.depth,0,Le,Ie,ae.data);else if(_.isData3DTexture)Re?(Ce&&i.texStorage3D(e.TEXTURE_3D,Ge,de,ae.width,ae.height,ae.depth),i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Le,Ie,ae.data)):i.texImage3D(e.TEXTURE_3D,0,de,ae.width,ae.height,ae.depth,0,Le,Ie,ae.data);else if(_.isFramebufferTexture){if(Ce)if(Re)i.texStorage2D(e.TEXTURE_2D,Ge,de,ae.width,ae.height);else{let ve=ae.width,W=ae.height;for(let be=0;be<Ge;be++)i.texImage2D(e.TEXTURE_2D,be,de,ve,W,0,Le,Ie,null),ve>>=1,W>>=1}}else if(te.length>0&&He){Re&&Ce&&i.texStorage2D(e.TEXTURE_2D,Ge,de,te[0].width,te[0].height);for(let ve=0,W=te.length;ve<W;ve++)he=te[ve],Re?i.texSubImage2D(e.TEXTURE_2D,ve,0,0,Le,Ie,he):i.texImage2D(e.TEXTURE_2D,ve,de,Le,Ie,he);_.generateMipmaps=!1}else Re?(Ce&&i.texStorage2D(e.TEXTURE_2D,Ge,de,ae.width,ae.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,Le,Ie,ae)):i.texImage2D(e.TEXTURE_2D,0,de,Le,Ie,ae);y(_,He)&&x(C),ee.__version=X.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function me(S,_,D){if(_.image.length!==6)return;let C=j(S,_),z=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+D);let X=r.get(z);if(z.version!==X.__version||C===!0){i.activeTexture(e.TEXTURE0+D);let ee=ft.getPrimaries(ft.workingColorSpace),q=_.colorSpace===li?null:ft.getPrimaries(_.colorSpace),ue=_.colorSpace===li||ee===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let se=_.isCompressedTexture||_.image[0].isCompressedTexture,Se=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let ve=0;ve<6;ve++)!se&&!Se?ae[ve]=f(_.image[ve],!1,!0,a.maxCubemapSize):ae[ve]=Se?_.image[ve].image:_.image[ve],ae[ve]=F(_,ae[ve]);let He=ae[0],Le=g(He)||s,Ie=n.convert(_.format,_.colorSpace),de=n.convert(_.type),he=M(_.internalFormat,Ie,de,_.colorSpace),te=s&&_.isVideoTexture!==!0,Re=X.__version===void 0||C===!0,Ce=A(_,He,Le);V(e.TEXTURE_CUBE_MAP,_,Le);let Ge;if(se){te&&Re&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,he,He.width,He.height);for(let ve=0;ve<6;ve++){Ge=ae[ve].mipmaps;for(let W=0;W<Ge.length;W++){let be=Ge[W];_.format!==gi?Ie!==null?te?i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W,0,0,be.width,be.height,Ie,be.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W,he,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W,0,0,be.width,be.height,Ie,de,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W,he,be.width,be.height,0,Ie,de,be.data)}}}else{Ge=_.mipmaps,te&&Re&&(Ge.length>0&&Ce++,i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,he,ae[0].width,ae[0].height));for(let ve=0;ve<6;ve++)if(Se){te?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ae[ve].width,ae[ve].height,Ie,de,ae[ve].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,ae[ve].width,ae[ve].height,0,Ie,de,ae[ve].data);for(let W=0;W<Ge.length;W++){let be=Ge[W].image[ve].image;te?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W+1,0,0,be.width,be.height,Ie,de,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W+1,he,be.width,be.height,0,Ie,de,be.data)}}else{te?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,de,ae[ve]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,Ie,de,ae[ve]);for(let W=0;W<Ge.length;W++){let be=Ge[W];te?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W+1,0,0,Ie,de,be.image[ve]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,W+1,he,Ie,de,be.image[ve])}}}y(_,Le)&&x(e.TEXTURE_CUBE_MAP),X.__version=z.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _e(S,_,D,C,z,X){let ee=n.convert(D.format,D.colorSpace),q=n.convert(D.type),ue=M(D.internalFormat,ee,q,D.colorSpace);if(!r.get(_).__hasExternalTextures){let se=Math.max(1,_.width>>X),Se=Math.max(1,_.height>>X);z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?i.texImage3D(z,X,ue,se,Se,_.depth,0,ee,q,null):i.texImage2D(z,X,ue,se,Se,0,ee,q,null)}i.bindFramebuffer(e.FRAMEBUFFER,S),Ue(_)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,C,z,r.get(D).__webglTexture,0,xe(_)):(z===e.TEXTURE_2D||z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,C,z,r.get(D).__webglTexture,X),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(S,_,D){if(e.bindRenderbuffer(e.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let C=s===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(D||Ue(_)){let z=_.depthTexture;z&&z.isDepthTexture&&(z.type===Xi?C=e.DEPTH_COMPONENT32F:z.type===nr&&(C=e.DEPTH_COMPONENT24));let X=xe(_);Ue(_)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,X,C,_.width,_.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,X,C,_.width,_.height)}else e.renderbufferStorage(e.RENDERBUFFER,C,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let C=xe(_);D&&Ue(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,C,e.DEPTH24_STENCIL8,_.width,_.height):Ue(_)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,C,e.DEPTH24_STENCIL8,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,S)}else{let C=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let z=0;z<C.length;z++){let X=C[z],ee=n.convert(X.format,X.colorSpace),q=n.convert(X.type),ue=M(X.internalFormat,ee,q,X.colorSpace),se=xe(_);D&&Ue(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,se,ue,_.width,_.height):Ue(_)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,se,ue,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ue,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let D=r.get(_.depthTexture).__webglTexture,C=xe(_);if(_.depthTexture.format===vr)Ue(_)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,D,0,C):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,D,0);else if(_.depthTexture.format===jr)Ue(_)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,D,0,C):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Pe(S){let _=r.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let C=0;C<6;C++)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[C]),_.__webglDepthbuffer[C]=e.createRenderbuffer(),Fe(_.__webglDepthbuffer[C],S,!1)}else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=e.createRenderbuffer(),Fe(_.__webglDepthbuffer,S,!1);i.bindFramebuffer(e.FRAMEBUFFER,null)}function B(S,_,D){let C=r.get(S);_!==void 0&&_e(C.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Pe(S)}function pe(S){let _=S.texture,D=r.get(S),C=r.get(_);S.addEventListener("dispose",L),S.isWebGLMultipleRenderTargets!==!0&&(C.__webglTexture===void 0&&(C.__webglTexture=e.createTexture()),C.__version=_.version,o.memory.textures++);let z=S.isWebGLCubeRenderTarget===!0,X=S.isWebGLMultipleRenderTargets===!0,ee=g(S)||s;if(z){D.__webglFramebuffer=[];for(let q=0;q<6;q++)if(s&&_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[q]=[];for(let ue=0;ue<_.mipmaps.length;ue++)D.__webglFramebuffer[q][ue]=e.createFramebuffer()}else D.__webglFramebuffer[q]=e.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)D.__webglFramebuffer[q]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(X)if(a.drawBuffers){let q=S.texture;for(let ue=0,se=q.length;ue<se;ue++){let Se=r.get(q[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&Ue(S)===!1){let q=X?_:[_];D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ue=0;ue<q.length;ue++){let se=q[ue];D.__webglColorRenderbuffer[ue]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[ue]);let Se=n.convert(se.format,se.colorSpace),ae=n.convert(se.type),He=M(se.internalFormat,Se,ae,se.colorSpace,S.isXRRenderTarget===!0),Le=xe(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,Le,He,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,D.__webglColorRenderbuffer[ue])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Fe(D.__webglDepthRenderbuffer,S,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(z){i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture),V(e.TEXTURE_CUBE_MAP,_,ee);for(let q=0;q<6;q++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)_e(D.__webglFramebuffer[q][ue],S,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue);else _e(D.__webglFramebuffer[q],S,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);y(_,ee)&&x(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(X){let q=S.texture;for(let ue=0,se=q.length;ue<se;ue++){let Se=q[ue],ae=r.get(Se);i.bindTexture(e.TEXTURE_2D,ae.__webglTexture),V(e.TEXTURE_2D,Se,ee),_e(D.__webglFramebuffer,S,Se,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,0),y(Se,ee)&&x(e.TEXTURE_2D)}i.unbindTexture()}else{let q=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?q=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(q,C.__webglTexture),V(q,_,ee),s&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)_e(D.__webglFramebuffer[ue],S,_,e.COLOR_ATTACHMENT0,q,ue);else _e(D.__webglFramebuffer,S,_,e.COLOR_ATTACHMENT0,q,0);y(_,ee)&&x(q),i.unbindTexture()}S.depthBuffer&&Pe(S)}function ge(S){let _=g(S)||s,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let C=0,z=D.length;C<z;C++){let X=D[C];if(y(X,_)){let ee=S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,q=r.get(X).__webglTexture;i.bindTexture(ee,q),x(ee),i.unbindTexture()}}}function ye(S){if(s&&S.samples>0&&Ue(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,C=S.height,z=e.COLOR_BUFFER_BIT,X=[],ee=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=r.get(S),ue=S.isWebGLMultipleRenderTargets===!0;if(ue)for(let se=0;se<_.length;se++)i.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,q.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let se=0;se<_.length;se++){X.push(e.COLOR_ATTACHMENT0+se),S.depthBuffer&&X.push(ee);let Se=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(Se===!1&&(S.depthBuffer&&(z|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&(z|=e.STENCIL_BUFFER_BIT)),ue&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,q.__webglColorRenderbuffer[se]),Se===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[ee]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[ee])),ue){let ae=r.get(_[se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0)}e.blitFramebuffer(0,0,D,C,0,0,D,C,z,e.NEAREST),h&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,X)}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ue)for(let se=0;se<_.length;se++){i.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Se=r.get(_[se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,q.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,Se,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function xe(S){return Math.min(a.maxSamples,S.samples)}function Ue(S){let _=r.get(S);return s&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(S){let _=o.render.frame;c.get(S)!==_&&(c.set(S,_),S.update())}function F(S,_){let D=S.colorSpace,C=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ns||D!==Ht&&D!==li&&(ft.getTransfer(D)===xt?s===!1?t.has("EXT_sRGB")===!0&&C===gi?(S.format=Ns,S.minFilter=St,S.generateMipmaps=!1):_=th.sRGBToLinear(_):(C!==gi||z!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}this.allocateTextureUnit=G,this.resetTextureUnits=re,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=E,this.setTextureCube=R,this.rebindTextures=B,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ue}function Ev(e,t,i){let r=i.isWebGL2;function a(n,o=li){let s,l=ft.getTransfer(o);if(n===Ii)return e.UNSIGNED_BYTE;if(n===ml)return e.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Vd)return e.BYTE;if(n===Wd)return e.SHORT;if(n===ys)return e.UNSIGNED_SHORT;if(n===fl)return e.INT;if(n===nr)return e.UNSIGNED_INT;if(n===Xi)return e.FLOAT;if(n===Xr)return r?e.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Xd)return e.ALPHA;if(n===gi)return e.RGBA;if(n===jd)return e.LUMINANCE;if(n===qd)return e.LUMINANCE_ALPHA;if(n===vr)return e.DEPTH_COMPONENT;if(n===jr)return e.DEPTH_STENCIL;if(n===Ns)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Yd)return e.RED;if(n===vl)return e.RED_INTEGER;if(n===Kd)return e.RG;if(n===xl)return e.RG_INTEGER;if(n===_l)return e.RGBA_INTEGER;if(n===Ms||n===Ss||n===bs||n===ws)if(l===xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===Sl||n===bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Tl||n===El)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tl)return l===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Ll||n===Pl||n===Il||n===Nl||n===Ul||n===Dl||n===Ol||n===zl||n===Fl||n===Bl||n===kl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Al)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===Hl||n===Gl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ts)return l===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zd||n===Vl||n===Wl||n===Xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?r?e.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):e[n]!==void 0?e[n]:null}return{convert:a}}var Av=class extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ii=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rv={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,o=this._targetRay,s=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,i),g=this._getHandJoint(l,v);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cv=class extends yr{constructor(e,t){super();let i=this,r=null,a=1,n=null,o="local-floor",s=1,l=null,h=null,c=null,u=null,d=null,m=null,v=t.getContextAttributes(),f=null,g=null,p=[],y=[],x=new we,M=null,A=new ti;A.layers.enable(1),A.viewport=new vt;let w=new ti;w.layers.enable(2),w.viewport=new vt;let P=[A,w],L=new Av;L.layers.enable(1),L.layers.enable(2);let b=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=p[O];return V===void 0&&(V=new co,p[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=p[O];return V===void 0&&(V=new co,p[O]=V),V.getGripSpace()},this.getHand=function(O){let V=p[O];return V===void 0&&(V=new co,p[O]=V),V.getHandSpace()};function k(O){let V=y.indexOf(O.inputSource);if(V===-1)return;let j=p[V];j!==void 0&&(j.update(O.inputSource,O.frame,l||n),j.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",re);for(let O=0;O<p.length;O++){let V=y[O];V!==null&&(y[O]=null,p[O].disconnect(V))}b=null,T=null,e.setRenderTarget(f),d=null,u=null,c=null,r=null,g=null,I.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",re),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Ti(d.framebufferWidth,d.framebufferHeight,{format:gi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let V=null,j=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=v.stencil?jr:vr,j=v.stencil?gr:nr);let me={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(me),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),g=new Ti(u.textureWidth,u.textureHeight,{format:gi,type:Ii,depthTexture:new Ih(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let _e=e.properties.get(g);_e.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(s),l=null,n=await r.requestReferenceSpace(o),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function re(O){for(let V=0;V<O.removed.length;V++){let j=O.removed[V],Z=y.indexOf(j);Z>=0&&(y[Z]=null,p[Z].disconnect(j))}for(let V=0;V<O.added.length;V++){let j=O.added[V],Z=y.indexOf(j);if(Z===-1){for(let _e=0;_e<p.length;_e++)if(_e>=y.length){y.push(j),Z=_e;break}else if(y[_e]===null){y[_e]=j,Z=_e;break}if(Z===-1)break}let me=p[Z];me&&me.connect(j)}}let G=new H,Y=new H;function J(O,V,j){G.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(j.matrixWorld);let Z=G.distanceTo(Y),me=V.projectionMatrix.elements,_e=j.projectionMatrix.elements,Fe=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),Pe=(me[9]+1)/me[5],B=(me[9]-1)/me[5],pe=(me[8]-1)/me[0],ge=(_e[8]+1)/_e[0],ye=Fe*pe,xe=Fe*ge,Ue=Z/(-pe+ge),Me=Ue*-pe;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Me),O.translateZ(Ue),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let F=Fe+Ue,S=Te+Ue,_=ye-Me,D=xe+(Z-Me),C=Pe*Te/S*F,z=B*Te/S*F;O.projectionMatrix.makePerspective(_,D,C,z,F,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Q(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;L.near=w.near=A.near=O.near,L.far=w.far=A.far=O.far,(b!==L.near||T!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),b=L.near,T=L.far);let V=O.parent,j=L.cameras;Q(L,V);for(let Z=0;Z<j.length;Z++)Q(j[Z],V);j.length===2?J(L,A,w):L.projectionMatrix.copy(A.projectionMatrix),E(O,L,V)};function E(O,V,j){j===null?O.matrix.copy(V.matrixWorld):(O.matrix.copy(j.matrixWorld),O.matrix.invert(),O.matrix.multiply(V.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Jr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return s},this.setFoveation=function(O){s=O,u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let R=null;function N(O,V){if(h=V.getViewerPose(l||n),m=V,h!==null){let j=h.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let Z=!1;j.length!==L.cameras.length&&(L.cameras.length=0,Z=!0);for(let me=0;me<j.length;me++){let _e=j[me],Fe=null;if(d!==null)Fe=d.getViewport(_e);else{let Pe=c.getViewSubImage(u,_e);Fe=Pe.viewport,me===0&&(e.setRenderTargetTextures(g,Pe.colorTexture,u.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(g))}let Te=P[me];Te===void 0&&(Te=new ti,Te.layers.enable(me),Te.viewport=new vt,P[me]=Te),Te.matrix.fromArray(_e.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(_e.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(L.matrix.copy(Te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Z===!0&&L.cameras.push(Te)}}for(let j=0;j<p.length;j++){let Z=y[j],me=p[j];Z!==null&&me!==void 0&&me.update(Z,V,l||n)}R&&R(O,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),m=null}let I=new wh;I.setAnimationLoop(N),this.setAnimationLoop=function(O){R=O},this.dispose=function(){}}};function Lv(e,t){function i(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,Sh(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(g,p):p.isMeshToonMaterial?(n(g,p),u(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(n(g,p),v(g,p)):p.isMeshDepthMaterial?n(g,p):p.isMeshDistanceMaterial?(n(g,p),f(g,p)):p.isMeshNormalMaterial?n(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,i(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,i(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,i(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,i(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let x=e._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,i(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform))}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,i(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function f(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Pv(e,t,i,r){let a={},n={},o=[],s=i.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;r.uniformBlockBinding(y,M)}function h(y,x){let M=a[y.id];M===void 0&&(v(y),M=c(y),a[y.id]=M,y.addEventListener("dispose",g));let A=x.program;r.updateUBOMapping(y,A);let w=t.render.frame;n[y.id]!==w&&(d(y),n[y.id]=w)}function c(y){let x=u();y.__bindingPointIndex=x;let M=e.createBuffer(),A=y.__size,w=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=a[y.id],M=y.uniforms,A=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let w=0,P=M.length;w<P;w++){let L=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,T=L.length;b<T;b++){let k=L[b];if(m(k,w,b,A)===!0){let K=k.__offset,re=Array.isArray(k.value)?k.value:[k.value],G=0;for(let Y=0;Y<re.length;Y++){let J=re[Y],Q=f(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,e.bufferSubData(e.UNIFORM_BUFFER,K+G,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,K,k.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(y,x,M,A){let w=y.value,P=x+"_"+M;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{let L=A[P];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[P]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(y){let x=y.uniforms,M=0,A=16;for(let P=0,L=x.length;P<L;P++){let b=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,k=b.length;T<k;T++){let K=b[T],re=Array.isArray(K.value)?K.value:[K.value];for(let G=0,Y=re.length;G<Y;G++){let J=re[G],Q=f(J),E=M%A;E!==0&&A-E<Q.boundary&&(M+=A-E),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=Q.storage}}}let w=M%A;return w>0&&(M+=A-w),y.__size=M,y.__cache={},this}function f(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function p(){for(let y in a)e.deleteBuffer(a[y]);o=[],a={},n={}}return{bind:l,update:h,dispose:p}}var $h=class{constructor(e={}){let{canvas:t=Ep(),context:i=null,depth:r=!0,stencil:a=!0,alpha:n=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=n;let d=new Uint32Array(4),m=new Int32Array(4),v=null,f=null,g=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;let y=this,x=!1,M=0,A=0,w=null,P=-1,L=null,b=new vt,T=new vt,k=null,K=new ke(0),re=0,G=t.width,Y=t.height,J=1,Q=null,E=null,R=new vt(0,0,G,Y),N=new vt(0,0,G,Y),I=!1,O=new eo,V=!1,j=!1,Z=null,me=new at,_e=new we,Fe=new H,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return w===null?J:1}let B=i;function pe(U,$){for(let oe=0;oe<U.length;oe++){let ce=U[oe],ie=t.getContext(ce,$);if(ie!==null)return ie}return null}try{let U={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ds}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",W,!1),B===null){let $=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&$.shift(),B=pe($,U),B===null)throw pe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ge,ye,xe,Ue,Me,F,S,_,D,C,z,X,ee,q,ue,se,Se,ae,He,Le,Ie,de,he,te;function Re(){ge=new H0(B),ye=new D0(B,ge,e),ge.init(ye),de=new Ev(B,ge,ye),xe=new wv(B,ge,ye),Ue=new W0(B),Me=new cv,F=new Tv(B,ge,xe,Me,ye,de,Ue),S=new z0(y),_=new k0(y),D=new Jp(B,ye),he=new N0(B,ge,D,ye),C=new G0(B,D,Ue,he),z=new Y0(B,C,D,Ue),He=new q0(B,ye,F),se=new O0(Me),X=new hv(y,S,_,ge,ye,he,se),ee=new Lv(y,Me),q=new dv,ue=new xv(ge,ye),ae=new I0(y,S,_,xe,z,u,s),Se=new bv(y,z,ye),te=new Pv(B,Ue,ye,xe),Le=new U0(B,ge,Ue,ye),Ie=new V0(B,ge,Ue,ye),Ue.programs=X.programs,y.capabilities=ye,y.extensions=ge,y.properties=Me,y.renderLists=q,y.shadowMap=Se,y.state=xe,y.info=Ue}Re();let Ce=new Cv(y,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let U=ge.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=ge.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(U){U!==void 0&&(J=U,this.setSize(G,Y,!1))},this.getSize=function(U){return U.set(G,Y)},this.setSize=function(U,$,oe=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=U,Y=$,t.width=Math.floor(U*J),t.height=Math.floor($*J),oe===!0&&(t.style.width=U+"px",t.style.height=$+"px"),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(G*J,Y*J).floor()},this.setDrawingBufferSize=function(U,$,oe){G=U,Y=$,J=oe,t.width=Math.floor(U*oe),t.height=Math.floor($*oe),this.setViewport(0,0,U,$)},this.getCurrentViewport=function(U){return U.copy(b)},this.getViewport=function(U){return U.copy(R)},this.setViewport=function(U,$,oe,ce){U.isVector4?R.set(U.x,U.y,U.z,U.w):R.set(U,$,oe,ce),xe.viewport(b.copy(R).multiplyScalar(J).floor())},this.getScissor=function(U){return U.copy(N)},this.setScissor=function(U,$,oe,ce){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,$,oe,ce),xe.scissor(T.copy(N).multiplyScalar(J).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(U){xe.setScissorTest(I=U)},this.setOpaqueSort=function(U){Q=U},this.setTransparentSort=function(U){E=U},this.getClearColor=function(U){return U.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(U=!0,$=!0,oe=!0){let ce=0;if(U){let ie=!1;if(w!==null){let De=w.texture.format;ie=De===_l||De===xl||De===vl}if(ie){let De=w.texture.type,Xe=De===Ii||De===nr||De===ys||De===gr||De===ml||De===gl,qe=ae.getClearColor(),Je=ae.getClearAlpha(),dt=qe.r,nt=qe.g,st=qe.b;Xe?(d[0]=dt,d[1]=nt,d[2]=st,d[3]=Je,B.clearBufferuiv(B.COLOR,0,d)):(m[0]=dt,m[1]=nt,m[2]=st,m[3]=Je,B.clearBufferiv(B.COLOR,0,m))}else ce|=B.COLOR_BUFFER_BIT}$&&(ce|=B.DEPTH_BUFFER_BIT),oe&&(ce|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",W,!1),q.dispose(),ue.dispose(),Me.dispose(),S.dispose(),_.dispose(),z.dispose(),he.dispose(),te.dispose(),X.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",We),Ce.removeEventListener("sessionend",et),Z&&(Z.dispose(),Z=null),Ye.stop()};function Ge(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let U=Ue.autoReset,$=Se.enabled,oe=Se.autoUpdate,ce=Se.needsUpdate,ie=Se.type;Re(),Ue.autoReset=U,Se.enabled=$,Se.autoUpdate=oe,Se.needsUpdate=ce,Se.type=ie}function W(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function be(U){let $=U.target;$.removeEventListener("dispose",be),Ee($)}function Ee(U){Ve(U),Me.remove(U)}function Ve(U){let $=Me.get(U).programs;$!==void 0&&($.forEach(function(oe){X.releaseProgram(oe)}),U.isShaderMaterial&&X.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,oe,ce,ie,De){$===null&&($=Te);let Xe=ie.isMesh&&ie.matrixWorld.determinant()<0,qe=E1(U,$,oe,ce,ie);xe.setMaterial(ce,Xe);let Je=oe.index,dt=1;if(ce.wireframe===!0){if(Je=C.getWireframeAttribute(oe),Je===void 0)return;dt=2}let nt=oe.drawRange,st=oe.attributes.position,Qt=nt.start*dt,kt=(nt.start+nt.count)*dt;De!==null&&(Qt=Math.max(Qt,De.start*dt),kt=Math.min(kt,(De.start+De.count)*dt)),Je!==null?(Qt=Math.max(Qt,0),kt=Math.min(kt,Je.count)):st!=null&&(Qt=Math.max(Qt,0),kt=Math.min(kt,st.count));let bi=kt-Qt;if(bi<0||bi===1/0)return;he.setup(ie,ce,qe,oe,Je);let ir,Pt=Le;if(Je!==null&&(ir=D.get(Je),Pt=Ie,Pt.setIndex(ir)),ie.isMesh)ce.wireframe===!0?(xe.setLineWidth(ce.wireframeLinewidth*Pe()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(ie.isLine){let ot=ce.linewidth;ot===void 0&&(ot=1),xe.setLineWidth(ot*Pe()),ie.isLineSegments?Pt.setMode(B.LINES):ie.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else ie.isPoints?Pt.setMode(B.POINTS):ie.isSprite&&Pt.setMode(B.TRIANGLES);if(ie.isBatchedMesh)Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Pt.renderInstances(Qt,bi,ie.count);else if(oe.isInstancedBufferGeometry){let ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,$o=Math.min(oe.instanceCount,ot);Pt.renderInstances(Qt,bi,$o)}else Pt.render(Qt,bi)};function Be(U,$,oe){U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,hs(U,$,oe),U.side=Vi,U.needsUpdate=!0,hs(U,$,oe),U.side=Xt):hs(U,$,oe)}this.compile=function(U,$,oe=null){oe===null&&(oe=U),f=ue.get(oe),f.init(),p.push(f),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),U!==oe&&U.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),f.setupLights(y._useLegacyLights);let ce=new Set;return U.traverse(function(ie){let De=ie.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){let qe=De[Xe];Be(qe,oe,ie),ce.add(qe)}else Be(De,oe,ie),ce.add(De)}),p.pop(),f=null,ce},this.compileAsync=function(U,$,oe=null){let ce=this.compile(U,$,oe);return new Promise(ie=>{function De(){if(ce.forEach(function(Xe){Me.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){ie(U);return}setTimeout(De,10)}ge.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Oe=null;function je(U){Oe&&Oe(U)}function We(){Ye.stop()}function et(){Ye.start()}let Ye=new wh;Ye.setAnimationLoop(je),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(U){Oe=U,Ce.setAnimationLoop(U),U===null?Ye.stop():Ye.start()},Ce.addEventListener("sessionstart",We),Ce.addEventListener("sessionend",et),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera($),$=Ce.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,$,w),f=ue.get(U,p.length),f.init(),p.push(f),me.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O.setFromProjectionMatrix(me),j=this.localClippingEnabled,V=se.init(this.clippingPlanes,j),v=q.get(U,g.length),v.init(),g.push(v),fi(U,$,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Q,E),this.info.render.frame++,V===!0&&se.beginShadows();let oe=f.state.shadowsArray;if(Se.render(oe,U,$),V===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(v,U),f.setupLights(y._useLegacyLights),$.isArrayCamera){let ce=$.cameras;for(let ie=0,De=ce.length;ie<De;ie++){let Xe=ce[ie];Jt(v,U,Xe,Xe.viewport)}}else Jt(v,U,$);w!==null&&(F.updateMultisampleRenderTarget(w),F.updateRenderTargetMipmap(w)),U.isScene===!0&&U.onAfterRender(y,U,$),he.resetDefaultState(),P=-1,L=null,p.pop(),p.length>0?f=p[p.length-1]:f=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function fi(U,$,oe,ce){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)oe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLight)f.pushLight(U),U.castShadow&&f.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||O.intersectsSprite(U)){ce&&Fe.setFromMatrixPosition(U.matrixWorld).applyMatrix4(me);let De=z.update(U),Xe=U.material;Xe.visible&&v.push(U,De,Xe,oe,Fe.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||O.intersectsObject(U))){let De=z.update(U),Xe=U.material;if(ce&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Fe.copy(U.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(U.matrixWorld).applyMatrix4(me)),Array.isArray(Xe)){let qe=De.groups;for(let Je=0,dt=qe.length;Je<dt;Je++){let nt=qe[Je],st=Xe[nt.materialIndex];st&&st.visible&&v.push(U,De,st,oe,Fe.z,nt)}}else Xe.visible&&v.push(U,De,Xe,oe,Fe.z,null)}}let ie=U.children;for(let De=0,Xe=ie.length;De<Xe;De++)fi(ie[De],$,oe,ce)}function Jt(U,$,oe,ce){let ie=U.opaque,De=U.transmissive,Xe=U.transparent;f.setupLightsView(oe),V===!0&&se.setGlobalState(y.clippingPlanes,oe),De.length>0&&T1(ie,De,$,oe),ce&&xe.viewport(b.copy(ce)),ie.length>0&&ls(ie,$,oe),De.length>0&&ls(De,$,oe),Xe.length>0&&ls(Xe,$,oe),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function T1(U,$,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;let ie=ye.isWebGL2;Z===null&&(Z=new Ti(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Xr:Ii,minFilter:Wi,samples:ie?4:0})),y.getDrawingBufferSize(_e),ie?Z.setSize(_e.x,_e.y):Z.setSize(pn(_e.x),pn(_e.y));let De=y.getRenderTarget();y.setRenderTarget(Z),y.getClearColor(K),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear();let Xe=y.toneMapping;y.toneMapping=ar,ls(U,oe,ce),F.updateMultisampleRenderTarget(Z),F.updateRenderTargetMipmap(Z);let qe=!1;for(let Je=0,dt=$.length;Je<dt;Je++){let nt=$[Je],st=nt.object,Qt=nt.geometry,kt=nt.material,bi=nt.group;if(kt.side===Xt&&st.layers.test(ce.layers)){let ir=kt.side;kt.side=Wt,kt.needsUpdate=!0,Cu(st,oe,ce,Qt,kt,bi),kt.side=ir,kt.needsUpdate=!0,qe=!0}}qe===!0&&(F.updateMultisampleRenderTarget(Z),F.updateRenderTargetMipmap(Z)),y.setRenderTarget(De),y.setClearColor(K,re),y.toneMapping=Xe}function ls(U,$,oe){let ce=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,De=U.length;ie<De;ie++){let Xe=U[ie],qe=Xe.object,Je=Xe.geometry,dt=ce===null?Xe.material:ce,nt=Xe.group;qe.layers.test(oe.layers)&&Cu(qe,$,oe,Je,dt,nt)}}function Cu(U,$,oe,ce,ie,De){U.onBeforeRender(y,$,oe,ce,ie,De),U.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ie.onBeforeRender(y,$,oe,ce,U,De),ie.transparent===!0&&ie.side===Xt&&ie.forceSinglePass===!1?(ie.side=Wt,ie.needsUpdate=!0,y.renderBufferDirect(oe,$,ce,ie,U,De),ie.side=Vi,ie.needsUpdate=!0,y.renderBufferDirect(oe,$,ce,ie,U,De),ie.side=Xt):y.renderBufferDirect(oe,$,ce,ie,U,De),U.onAfterRender(y,$,oe,ce,ie,De)}function hs(U,$,oe){$.isScene!==!0&&($=Te);let ce=Me.get(U),ie=f.state.lights,De=f.state.shadowsArray,Xe=ie.state.version,qe=X.getParameters(U,ie.state,De,$,oe),Je=X.getProgramCacheKey(qe),dt=ce.programs;ce.environment=U.isMeshStandardMaterial?$.environment:null,ce.fog=$.fog,ce.envMap=(U.isMeshStandardMaterial?_:S).get(U.envMap||ce.environment),dt===void 0&&(U.addEventListener("dispose",be),dt=new Map,ce.programs=dt);let nt=dt.get(Je);if(nt!==void 0){if(ce.currentProgram===nt&&ce.lightsStateVersion===Xe)return Pu(U,qe),nt}else qe.uniforms=X.getUniforms(U),U.onBuild(oe,qe,y),U.onBeforeCompile(qe,y),nt=X.acquireProgram(qe,Je),dt.set(Je,nt),ce.uniforms=qe.uniforms;let st=ce.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(st.clippingPlanes=se.uniform),Pu(U,qe),ce.needsLights=R1(U),ce.lightsStateVersion=Xe,ce.needsLights&&(st.ambientLightColor.value=ie.state.ambient,st.lightProbe.value=ie.state.probe,st.directionalLights.value=ie.state.directional,st.directionalLightShadows.value=ie.state.directionalShadow,st.spotLights.value=ie.state.spot,st.spotLightShadows.value=ie.state.spotShadow,st.rectAreaLights.value=ie.state.rectArea,st.ltc_1.value=ie.state.rectAreaLTC1,st.ltc_2.value=ie.state.rectAreaLTC2,st.pointLights.value=ie.state.point,st.pointLightShadows.value=ie.state.pointShadow,st.hemisphereLights.value=ie.state.hemi,st.directionalShadowMap.value=ie.state.directionalShadowMap,st.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,st.spotShadowMap.value=ie.state.spotShadowMap,st.spotLightMatrix.value=ie.state.spotLightMatrix,st.spotLightMap.value=ie.state.spotLightMap,st.pointShadowMap.value=ie.state.pointShadowMap,st.pointShadowMatrix.value=ie.state.pointShadowMatrix),ce.currentProgram=nt,ce.uniformsList=null,nt}function Lu(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=Bn.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function Pu(U,$){let oe=Me.get(U);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function E1(U,$,oe,ce,ie){$.isScene!==!0&&($=Te),F.resetTextureUnits();let De=$.fog,Xe=ce.isMeshStandardMaterial?$.environment:null,qe=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ht,Je=(ce.isMeshStandardMaterial?_:S).get(ce.envMap||Xe),dt=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),st=!!oe.morphAttributes.position,Qt=!!oe.morphAttributes.normal,kt=!!oe.morphAttributes.color,bi=ar;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bi=y.toneMapping);let ir=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Pt=ir!==void 0?ir.length:0,ot=Me.get(ce),$o=f.state.lights;if(V===!0&&(j===!0||U!==L)){let wi=U===L&&ce.id===P;se.setState(ce,U,wi)}let el=!1;ce.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==$o.state.version||ot.outputColorSpace!==qe||ie.isBatchedMesh&&ot.batching===!1||!ie.isBatchedMesh&&ot.batching===!0||ie.isInstancedMesh&&ot.instancing===!1||!ie.isInstancedMesh&&ot.instancing===!0||ie.isSkinnedMesh&&ot.skinning===!1||!ie.isSkinnedMesh&&ot.skinning===!0||ie.isInstancedMesh&&ot.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ot.instancingColor===!1&&ie.instanceColor!==null||ot.envMap!==Je||ce.fog===!0&&ot.fog!==De||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==se.numPlanes||ot.numIntersection!==se.numIntersection)||ot.vertexAlphas!==dt||ot.vertexTangents!==nt||ot.morphTargets!==st||ot.morphNormals!==Qt||ot.morphColors!==kt||ot.toneMapping!==bi||ye.isWebGL2===!0&&ot.morphTargetsCount!==Pt)&&(el=!0):(el=!0,ot.__version=ce.version);let zr=ot.currentProgram;el===!0&&(zr=hs(ce,$,ie));let Iu=!1,tn=!1,tl=!1,$t=zr.getUniforms(),Fr=ot.uniforms;if(xe.useProgram(zr.program)&&(Iu=!0,tn=!0,tl=!0),ce.id!==P&&(P=ce.id,tn=!0),Iu||L!==U){$t.setValue(B,"projectionMatrix",U.projectionMatrix),$t.setValue(B,"viewMatrix",U.matrixWorldInverse);let wi=$t.map.cameraPosition;wi!==void 0&&wi.setValue(B,Fe.setFromMatrixPosition(U.matrixWorld)),ye.logarithmicDepthBuffer&&$t.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&$t.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),L!==U&&(L=U,tn=!0,tl=!0)}if(ie.isSkinnedMesh){$t.setOptional(B,ie,"bindMatrix"),$t.setOptional(B,ie,"bindMatrixInverse");let wi=ie.skeleton;wi&&(ye.floatVertexTextures?(wi.boneTexture===null&&wi.computeBoneTexture(),$t.setValue(B,"boneTexture",wi.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&($t.setOptional(B,ie,"batchingTexture"),$t.setValue(B,"batchingTexture",ie._matricesTexture,F));let il=oe.morphAttributes;if((il.position!==void 0||il.normal!==void 0||il.color!==void 0&&ye.isWebGL2===!0)&&He.update(ie,oe,zr),(tn||ot.receiveShadow!==ie.receiveShadow)&&(ot.receiveShadow=ie.receiveShadow,$t.setValue(B,"receiveShadow",ie.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Fr.envMap.value=Je,Fr.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),tn&&($t.setValue(B,"toneMappingExposure",y.toneMappingExposure),ot.needsLights&&A1(Fr,tl),De&&ce.fog===!0&&ee.refreshFogUniforms(Fr,De),ee.refreshMaterialUniforms(Fr,ce,J,Y,Z),Bn.upload(B,Lu(ot),Fr,F)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Bn.upload(B,Lu(ot),Fr,F),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&$t.setValue(B,"center",ie.center),$t.setValue(B,"modelViewMatrix",ie.modelViewMatrix),$t.setValue(B,"normalMatrix",ie.normalMatrix),$t.setValue(B,"modelMatrix",ie.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let wi=ce.uniformsGroups;for(let rl=0,C1=wi.length;rl<C1;rl++)if(ye.isWebGL2){let Nu=wi[rl];te.update(Nu,zr),te.bind(Nu,zr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zr}function A1(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function R1(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(U,$,oe){Me.get(U.texture).__webglTexture=$,Me.get(U.depthTexture).__webglTexture=oe;let ce=Me.get(U);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,$){let oe=Me.get(U);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,oe=0){w=U,M=$,A=oe;let ce=!0,ie=null,De=!1,Xe=!1;if(U){let qe=Me.get(U);qe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(B.FRAMEBUFFER,null),ce=!1):qe.__webglFramebuffer===void 0?F.setupRenderTarget(U):qe.__hasExternalTextures&&F.rebindTextures(U,Me.get(U.texture).__webglTexture,Me.get(U.depthTexture).__webglTexture);let Je=U.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Xe=!0);let dt=Me.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(dt[$])?ie=dt[$][oe]:ie=dt[$],De=!0):ye.isWebGL2&&U.samples>0&&F.useMultisampledRTT(U)===!1?ie=Me.get(U).__webglMultisampledFramebuffer:Array.isArray(dt)?ie=dt[oe]:ie=dt,b.copy(U.viewport),T.copy(U.scissor),k=U.scissorTest}else b.copy(R).multiplyScalar(J).floor(),T.copy(N).multiplyScalar(J).floor(),k=I;if(xe.bindFramebuffer(B.FRAMEBUFFER,ie)&&ye.drawBuffers&&ce&&xe.drawBuffers(U,ie),xe.viewport(b),xe.scissor(T),xe.setScissorTest(k),De){let qe=Me.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,qe.__webglTexture,oe)}else if(Xe){let qe=Me.get(U.texture),Je=$||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,oe||0,Je)}P=-1},this.readRenderTargetPixels=function(U,$,oe,ce,ie,De,Xe){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Me.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){xe.bindFramebuffer(B.FRAMEBUFFER,qe);try{let Je=U.texture,dt=Je.format,nt=Je.type;if(dt!==gi&&de.convert(dt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=nt===Xr&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(nt!==Ii&&de.convert(nt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Xi&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-ce&&oe>=0&&oe<=U.height-ie&&B.readPixels($,oe,ce,ie,de.convert(dt),de.convert(nt),De)}finally{let Je=w!==null?Me.get(w).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(U,$,oe=0){let ce=Math.pow(2,-oe),ie=Math.floor($.image.width*ce),De=Math.floor($.image.height*ce);F.setTexture2D($,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,U.x,U.y,ie,De),xe.unbindTexture()},this.copyTextureToTexture=function(U,$,oe,ce=0){let ie=$.image.width,De=$.image.height,Xe=de.convert(oe.format),qe=de.convert(oe.type);F.setTexture2D(oe,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,oe.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,oe.unpackAlignment),$.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ce,U.x,U.y,ie,De,Xe,qe,$.image.data):$.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ce,U.x,U.y,$.mipmaps[0].width,$.mipmaps[0].height,Xe,$.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ce,U.x,U.y,Xe,qe,$.image),ce===0&&oe.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(U,$,oe,ce,ie=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let De=U.max.x-U.min.x+1,Xe=U.max.y-U.min.y+1,qe=U.max.z-U.min.z+1,Je=de.convert(ce.format),dt=de.convert(ce.type),nt;if(ce.isData3DTexture)F.setTexture3D(ce,0),nt=B.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)F.setTexture2DArray(ce,0),nt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ce.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ce.unpackAlignment);let st=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),kt=B.getParameter(B.UNPACK_SKIP_PIXELS),bi=B.getParameter(B.UNPACK_SKIP_ROWS),ir=B.getParameter(B.UNPACK_SKIP_IMAGES),Pt=oe.isCompressedTexture?oe.mipmaps[ie]:oe.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,U.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,U.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,U.min.z),oe.isDataTexture||oe.isData3DTexture?B.texSubImage3D(nt,ie,$.x,$.y,$.z,De,Xe,qe,Je,dt,Pt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(nt,ie,$.x,$.y,$.z,De,Xe,qe,Je,Pt.data)):B.texSubImage3D(nt,ie,$.x,$.y,$.z,De,Xe,qe,Je,dt,Pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,st),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,bi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ir),ie===0&&ce.generateMipmaps&&B.generateMipmap(nt),xe.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?F.setTextureCube(U,0):U.isData3DTexture?F.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?F.setTexture2DArray(U,0):F.setTexture2D(U,0),xe.unbindTexture()},this.resetState=function(){M=0,A=0,w=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ps?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===ln?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?xr:ql}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?bt:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Iv=class extends $h{};Iv.prototype.isWebGL1Renderer=!0;var Nv=class Gu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(t),this.density=i}clone(){return new Gu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},uo=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Uv=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Is,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ri=new H,Dv=class Vu{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)ri.fromBufferAttribute(this,i),ri.applyMatrix4(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ri.fromBufferAttribute(this,i),ri.applyNormalMatrix(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ri.fromBufferAttribute(this,i),ri.transformDirection(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}setX(t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ni(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ni(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ni(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ni(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=gt(i,this.array),r=gt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=gt(i,this.array),r=gt(r,this.array),a=gt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=gt(i,this.array),r=gt(r,this.array),a=gt(a,this.array),n=gt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Nt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ec=new H,tc=new vt,ic=new vt,Ov=new H,rc=new at,kn=new H,po=new Ui,ac=new at,fo=new yn,zv=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ul,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,kn),this.boundingBox.expandByPoint(kn)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,kn),this.boundingSphere.expandByPoint(kn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(r),e.ray.intersectsSphere(po)!==!1&&(ac.copy(r).invert(),fo.copy(e.ray).applyMatrix4(ac),!(this.boundingBox!==null&&fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;tc.fromBufferAttribute(r.attributes.skinIndex,e),ic.fromBufferAttribute(r.attributes.skinWeight,e),ec.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let n=ic.getComponent(a);if(n!==0){let o=tc.getComponent(a);rc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ov.copy(ec).applyMatrix4(rc),n)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},nc=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},sc=class extends hi{constructor(e=null,t=1,i=1,r,a,n,o,s,l=Dt,h=Dt,c,u){super(null,n,o,s,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oc=new at,Fv=new at,Bv=class Wu{constructor(t=[],i=[]){this.uuid=vi(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new at;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,o=t.length;n<o;n++){let s=t[n]?t[n].matrixWorld:Fv;oc.multiplyMatrices(s,i[n]),oc.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Wu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new sc(i,t,t,gi,Xi);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],o=i[n];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),o=new nc),this.bones.push(o),this.boneInverses.push(new at().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let o=i[a];t.bones.push(o.uuid);let s=r[a];t.boneInverses.push(s.toArray())}return t}},mo=class extends Nt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xa=new at,lc=new at,Hn=[],hc=new qt,kv=new at,za=new tt,Fa=new Ui,Rr=class extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xa),hc.copy(e.boundingBox).applyMatrix4(xa),this.boundingBox.union(hc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xa),Fa.copy(e.boundingSphere).applyMatrix4(xa),this.boundingSphere.union(Fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(i),e.ray.intersectsSphere(Fa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,xa),lc.multiplyMatrices(i,xa),za.matrixWorld=lc,za.raycast(e,Hn);for(let n=0,o=Hn.length;n<o;n++){let s=Hn[n];s.instanceId=a,s.object=this,t.push(s)}Hn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},cc=class extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uc=new H,dc=new H,pc=new at,go=new yn,Gn=new Ui,vo=class extends Rt{constructor(e=new wt,t=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)uc.fromBufferAttribute(t,r-1),dc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=uc.distanceTo(dc);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gn.copy(i.boundingSphere),Gn.applyMatrix4(r),Gn.radius+=a,e.ray.intersectsSphere(Gn)===!1)return;pc.copy(r).invert(),go.copy(e.ray).applyMatrix4(pc);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,l=new H,h=new H,c=new H,u=new H,d=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){let f=Math.max(0,n.start),g=Math.min(m.count,n.start+n.count);for(let p=f,y=g-1;p<y;p+=d){let x=m.getX(p),M=m.getX(p+1);if(l.fromBufferAttribute(v,x),h.fromBufferAttribute(v,M),go.distanceSqToSegment(l,h,u,c)>s)continue;u.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,n.start),g=Math.min(v.count,n.start+n.count);for(let p=f,y=g-1;p<y;p+=d){if(l.fromBufferAttribute(v,p),h.fromBufferAttribute(v,p+1),go.distanceSqToSegment(l,h,u,c)>s)continue;u.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||t.push({distance:x,point:c.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}},fc=new H,mc=new H,Hv=class extends vo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)fc.fromBufferAttribute(t,r),mc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fc.distanceTo(mc);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gv=class extends vo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gc=class extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vc=new at,xo=new yn,Vn=new Ui,Wn=new H,Vv=class extends Rt{constructor(e=new wt,t=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vn.copy(i.boundingSphere),Vn.applyMatrix4(r),Vn.radius+=a,e.ray.intersectsSphere(Vn)===!1)return;vc.copy(r).invert(),xo.copy(e.ray).applyMatrix4(vc);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),u=Math.min(l.count,n.start+n.count);for(let d=c,m=u;d<m;d++){let v=l.getX(d);Wn.fromBufferAttribute(h,v),xc(Wn,v,s,r,e,t,this)}}else{let c=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let d=c,m=u;d<m;d++)Wn.fromBufferAttribute(h,d),xc(Wn,d,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function xc(e,t,i,r,a,n,o){let s=xo.distanceSqToPoint(e);if(s<i){let l=new H;xo.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:o})}}var _o=class extends hi{constructor(e,t,i,r,a,n,o,s,l){super(e,t,i,r,a,n,o,s,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let o=0,s=a-1,l;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),l=i[r]-n,l<0)o=r+1;else if(l>0)s=r-1;else{s=r;break}if(r=s,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(n-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),o=t||(a.isVector2?new we:new H);return o.copy(n).sub(a).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,r=[],a=[],n=[],o=new H,s=new at;for(let d=0;d<=e;d++){let m=d/e;r[d]=this.getTangentAt(m,new H)}a[0]=new H,n[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),n[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ot(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(s.makeRotationAxis(o,m))}n[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(Ot(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let m=1;m<=e;m++)a[m].applyMatrix4(s.makeRotationAxis(r[m],d*m)),n[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yo=class extends Oi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let i=t||new we,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let o=this.aStartAngle+e*a,s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=s-this.aX,d=l-this.aY;s=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(s,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wv=class extends yo{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Mo(){let e=0,t=0,i=0,r=0;function a(n,o,s,l){e=n,t=s,i=-3*n+3*o-2*s-l,r=2*n-2*o+s+l}return{initCatmullRom:function(n,o,s,l,h){a(o,s,h*(s-n),h*(l-o))},initNonuniformCatmullRom:function(n,o,s,l,h,c,u){let d=(o-n)/h-(s-n)/(h+c)+(s-o)/c,m=(s-o)/c-(l-o)/(c+u)+(l-s)/u;d*=c,m*=c,a(o,s,d,m)},calc:function(n){let o=n*n,s=o*n;return e+t*n+i*o+r*s}}}var Xn=new H,So=new Mo,bo=new Mo,wo=new Mo,Xv=class extends Oi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,o=Math.floor(n),s=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:s===0&&o===a-1&&(o=a-2,s=1);let l,h;this.closed||o>0?l=r[(o-1)%a]:(Xn.subVectors(r[0],r[1]).add(r[0]),l=Xn);let c=r[o%a],u=r[(o+1)%a];if(this.closed||o+2<a?h=r[(o+2)%a]:(Xn.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Xn),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),So.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,m,v,f),bo.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,m,v,f),wo.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,m,v,f)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),bo.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),wo.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(So.calc(s),bo.calc(s),wo.calc(s)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _c(e,t,i,r,a){let n=(r-t)*.5,o=(a-i)*.5,s=e*e,l=e*s;return(2*i-2*r+n+o)*l+(-3*i+3*r-2*n-o)*s+n*e+i}function jv(e,t){let i=1-e;return i*i*t}function qv(e,t){return 2*(1-e)*e*t}function Yv(e,t){return e*e*t}function Ba(e,t,i,r){return jv(e,t)+qv(e,i)+Yv(e,r)}function Kv(e,t){let i=1-e;return i*i*i*t}function Zv(e,t){let i=1-e;return 3*i*i*e*t}function Jv(e,t){return 3*(1-e)*e*e*t}function Qv(e,t){return e*e*e*t}function ka(e,t,i,r,a){return Kv(e,t)+Zv(e,i)+Jv(e,r)+Qv(e,a)}var yc=class extends Oi{constructor(e=new we,t=new we,i=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new we){let i=t,r=this.v0,a=this.v1,n=this.v2,o=this.v3;return i.set(ka(e,r.x,a.x,n.x,o.x),ka(e,r.y,a.y,n.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$v=class extends Oi{constructor(e=new H,t=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){let i=t,r=this.v0,a=this.v1,n=this.v2,o=this.v3;return i.set(ka(e,r.x,a.x,n.x,o.x),ka(e,r.y,a.y,n.y,o.y),ka(e,r.z,a.z,n.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends Oi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ex=class extends Oi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends Oi{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ba(e,r.x,a.x,n.x),Ba(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tx=class extends Oi{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ba(e,r.x,a.x,n.x),Ba(e,r.y,a.y,n.y),Ba(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),o=a-n,s=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(_c(o,s.x,l.x,h.x,c.x),_c(o,s.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new we().fromArray(r))}return this}},To=Object.freeze({__proto__:null,ArcCurve:Wv,CatmullRomCurve3:Xv,CubicBezierCurve:yc,CubicBezierCurve3:$v,EllipseCurve:yo,LineCurve:Mc,LineCurve3:ex,QuadraticBezierCurve:Sc,QuadraticBezierCurve3:tx,SplineCurve:bc}),ix=class extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,o=this.curves[a],s=o.getLength(),l=s===0?0:1-n/s;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],o=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,s=n.getPoints(o);for(let l=0;l<s.length;l++){let h=s[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new To[r.type]().fromJSON(r))}return this}},wc=class extends ix{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Mc(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Sc(this.currentPoint.clone(),new we(e,t),new we(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let o=new yc(this.currentPoint.clone(),new we(e,t),new we(i,r),new we(a,n));return this.curves.push(o),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new bc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,o,s){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,o,s),this}absellipse(e,t,i,r,a,n,o,s){let l=new yo(e,t,i,r,a,n,o,s);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tc=class Xu extends wt{constructor(t=[new we(0,-.5),new we(.5,0),new we(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Ot(a,0,Math.PI*2);let n=[],o=[],s=[],l=[],h=[],c=1/i,u=new H,d=new we,m=new H,v=new H,f=new H,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-g,m.z=p*0,f.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(f.x,f.y,f.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-g,m.z=p*0,v.copy(m),m.x+=f.x,m.y+=f.y,m.z+=f.z,m.normalize(),l.push(m.x,m.y,m.z),f.copy(v)}for(let y=0;y<=i;y++){let x=r+y*c*a,M=Math.sin(x),A=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),d.x=y/i,d.y=w/(t.length-1),s.push(d.x,d.y);let P=l[3*w+0]*M,L=l[3*w+1],b=l[3*w+0]*A;h.push(P,L,b)}}for(let y=0;y<i;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,A=M,w=M+t.length,P=M+t.length+1,L=M+1;n.push(A,w,L),n.push(P,L,w)}this.setIndex(n),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(s,2)),this.setAttribute("normal",new Qe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.points,t.segments,t.phiStart,t.phiLength)}},_a=class ju extends wt{constructor(t=1,i=1,r=1,a=32,n=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:o,thetaStart:s,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],m=[],v=0,f=[],g=r/2,p=0;y(),o===!1&&(t>0&&x(!0),i>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(m,2));function y(){let M=new H,A=new H,w=0,P=(i-t)/r;for(let L=0;L<=n;L++){let b=[],T=L/n,k=T*(i-t)+t;for(let K=0;K<=a;K++){let re=K/a,G=re*l+s,Y=Math.sin(G),J=Math.cos(G);A.x=k*Y,A.y=-T*r+g,A.z=k*J,u.push(A.x,A.y,A.z),M.set(Y,P,J).normalize(),d.push(M.x,M.y,M.z),m.push(re,1-T),b.push(v++)}f.push(b)}for(let L=0;L<a;L++)for(let b=0;b<n;b++){let T=f[b][L],k=f[b+1][L],K=f[b+1][L+1],re=f[b][L+1];c.push(T,k,re),c.push(k,K,re),w+=6}h.addGroup(p,w,0),p+=w}function x(M){let A=v,w=new we,P=new H,L=0,b=M===!0?t:i,T=M===!0?1:-1;for(let K=1;K<=a;K++)u.push(0,g*T,0),d.push(0,T,0),m.push(.5,.5),v++;let k=v;for(let K=0;K<=a;K++){let re=K/a*l+s,G=Math.cos(re),Y=Math.sin(re);P.x=b*Y,P.y=g*T,P.z=b*G,u.push(P.x,P.y,P.z),d.push(0,T,0),w.x=G*.5+.5,w.y=Y*.5*T+.5,m.push(w.x,w.y),v++}for(let K=0;K<a;K++){let re=A+K,G=k+K;M===!0?c.push(G,G+1,re):c.push(G+1,G,re),L+=3}h.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rx=class qu extends wt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],o=[];s(a),h(r),c(),this.setAttribute("position",new Qe(n,3)),this.setAttribute("normal",new Qe(n.slice(),3)),this.setAttribute("uv",new Qe(o,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function s(y){let x=new H,M=new H,A=new H;for(let w=0;w<i.length;w+=3)m(i[w+0],x),m(i[w+1],M),m(i[w+2],A),l(x,M,A,y)}function l(y,x,M,A){let w=A+1,P=[];for(let L=0;L<=w;L++){P[L]=[];let b=y.clone().lerp(M,L/w),T=x.clone().lerp(M,L/w),k=w-L;for(let K=0;K<=k;K++)K===0&&L===w?P[L][K]=b:P[L][K]=b.clone().lerp(T,K/k)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){let T=Math.floor(b/2);b%2===0?(d(P[L][T+1]),d(P[L+1][T]),d(P[L][T])):(d(P[L][T+1]),d(P[L+1][T+1]),d(P[L+1][T]))}}function h(y){let x=new H;for(let M=0;M<n.length;M+=3)x.x=n[M+0],x.y=n[M+1],x.z=n[M+2],x.normalize().multiplyScalar(y),n[M+0]=x.x,n[M+1]=x.y,n[M+2]=x.z}function c(){let y=new H;for(let x=0;x<n.length;x+=3){y.x=n[x+0],y.y=n[x+1],y.z=n[x+2];let M=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(M,1-A)}v(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],A=o[y+4],w=Math.max(x,M,A),P=Math.min(x,M,A);w>.9&&P<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){n.push(y.x,y.y,y.z)}function m(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function v(){let y=new H,x=new H,M=new H,A=new H,w=new we,P=new we,L=new we;for(let b=0,T=0;b<n.length;b+=9,T+=6){y.set(n[b+0],n[b+1],n[b+2]),x.set(n[b+3],n[b+4],n[b+5]),M.set(n[b+6],n[b+7],n[b+8]),w.set(o[T+0],o[T+1]),P.set(o[T+2],o[T+3]),L.set(o[T+4],o[T+5]),A.copy(y).add(x).add(M).divideScalar(3);let k=g(A);f(w,T+0,y,k),f(P,T+2,x,k),f(L,T+4,M,k)}}function f(y,x,M,A){A<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.vertices,t.indices,t.radius,t.details)}},Ec=class extends wc{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new wc().fromJSON(r))}return this}},ax={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Ac(e,0,a,i,!0),o=[];if(!n||n.next===n.prev)return o;let s,l,h,c,u,d,m;if(r&&(n=hx(e,t,n,i)),e.length>80*i){s=h=e[0],l=c=e[1];for(let v=i;v<a;v+=i)u=e[v],d=e[v+1],u<s&&(s=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);m=Math.max(h-s,c-l),m=m!==0?32767/m:0}return Ha(n,o,i,s,l,m,0),o}};function Ac(e,t,i,r,a){let n,o;if(a===yx(e,t,i,r)>0)for(n=t;n<i;n+=r)o=Lc(n,e[n],e[n+1],o);else for(n=i-r;n>=t;n-=r)o=Lc(n,e[n],e[n+1],o);return o&&jn(o,o.next)&&(Va(o),o=o.next),o}function Cr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(jn(i,i.next)||Tt(i.prev,i,i.next)===0)){if(Va(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ha(e,t,i,r,a,n,o){if(!e)return;!o&&n&&fx(e,r,a,n);let s=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?sx(e,r,a,n):nx(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),Va(e),e=h.next,s=h.next;continue}if(e=h,e===s){o?o===1?(e=ox(Cr(e),t,i),Ha(e,t,i,r,a,n,2)):o===2&&lx(e,t,i,r,a,n):Ha(Cr(e),t,i,r,a,n,1);break}}}function nx(e){let t=e.prev,i=e,r=e.next;if(Tt(t,i,r)>=0)return!1;let a=t.x,n=i.x,o=r.x,s=t.y,l=i.y,h=r.y,c=a<n?a<o?a:o:n<o?n:o,u=s<l?s<h?s:h:l<h?l:h,d=a>n?a>o?a:o:n>o?n:o,m=s>l?s>h?s:h:l>h?l:h,v=r.next;for(;v!==t;){if(v.x>=c&&v.x<=d&&v.y>=u&&v.y<=m&&ya(a,s,n,l,o,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function sx(e,t,i,r){let a=e.prev,n=e,o=e.next;if(Tt(a,n,o)>=0)return!1;let s=a.x,l=n.x,h=o.x,c=a.y,u=n.y,d=o.y,m=s<l?s<h?s:h:l<h?l:h,v=c<u?c<d?c:d:u<d?u:d,f=s>l?s>h?s:h:l>h?l:h,g=c>u?c>d?c:d:u>d?u:d,p=Eo(m,v,t,i,r),y=Eo(f,g,t,i,r),x=e.prevZ,M=e.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=m&&x.x<=f&&x.y>=v&&x.y<=g&&x!==a&&x!==o&&ya(s,c,l,u,h,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=f&&M.y>=v&&M.y<=g&&M!==a&&M!==o&&ya(s,c,l,u,h,d,M.x,M.y)&&Tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=f&&x.y>=v&&x.y<=g&&x!==a&&x!==o&&ya(s,c,l,u,h,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=f&&M.y>=v&&M.y<=g&&M!==a&&M!==o&&ya(s,c,l,u,h,d,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ox(e,t,i){let r=e;do{let a=r.prev,n=r.next.next;!jn(a,n)&&Rc(a,r,r.next,n)&&Ga(a,n)&&Ga(n,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(n.i/i|0),Va(r),Va(r.next),r=e=n),r=r.next}while(r!==e);return Cr(r)}function lx(e,t,i,r,a,n){let o=e;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&vx(o,s)){let l=Cc(o,s);o=Cr(o,o.next),l=Cr(l,l.next),Ha(o,t,i,r,a,n,0),Ha(l,t,i,r,a,n,0);return}s=s.next}o=o.next}while(o!==e)}function hx(e,t,i,r){let a=[],n,o,s,l,h;for(n=0,o=t.length;n<o;n++)s=t[n]*r,l=n<o-1?t[n+1]*r:e.length,h=Ac(e,s,l,r,!1),h===h.next&&(h.steiner=!0),a.push(gx(h));for(a.sort(cx),n=0;n<a.length;n++)i=ux(a[n],i);return i}function cx(e,t){return e.x-t.x}function ux(e,t){let i=dx(e,t);if(!i)return t;let r=Cc(i,e);return Cr(r,r.next),Cr(i,i.next)}function dx(e,t){let i=t,r=-1/0,a,n=e.x,o=e.y;do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){let d=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;let s=a,l=a.x,h=a.y,c=1/0,u;i=a;do n>=i.x&&i.x>=l&&n!==i.x&&ya(o<h?n:r,o,l,h,o<h?r:n,o,i.x,i.y)&&(u=Math.abs(o-i.y)/(n-i.x),Ga(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&px(a,i)))&&(a=i,c=u)),i=i.next;while(i!==s);return a}function px(e,t){return Tt(e.prev,e,t.prev)<0&&Tt(t.next,e,e.next)<0}function fx(e,t,i,r){let a=e;do a.z===0&&(a.z=Eo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,mx(a)}function mx(e){let t,i,r,a,n,o,s,l,h=1;do{for(i=e,e=null,n=null,o=0;i;){for(o++,r=i,s=0,t=0;t<h&&(s++,r=r.nextZ,!!r);t++);for(l=h;s>0||l>0&&r;)s!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,s--):(a=r,r=r.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=r}n.nextZ=null,h*=2}while(o>1);return e}function Eo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function gx(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function ya(e,t,i,r,a,n,o,s){return(a-o)*(t-s)>=(e-o)*(n-s)&&(e-o)*(r-s)>=(i-o)*(t-s)&&(i-o)*(n-s)>=(a-o)*(r-s)}function vx(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!xx(e,t)&&(Ga(e,t)&&Ga(t,e)&&_x(e,t)&&(Tt(e.prev,e,t.prev)||Tt(e,t.prev,t))||jn(e,t)&&Tt(e.prev,e,e.next)>0&&Tt(t.prev,t,t.next)>0)}function Tt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function jn(e,t){return e.x===t.x&&e.y===t.y}function Rc(e,t,i,r){let a=Yn(Tt(e,t,i)),n=Yn(Tt(e,t,r)),o=Yn(Tt(i,r,e)),s=Yn(Tt(i,r,t));return!!(a!==n&&o!==s||a===0&&qn(e,i,t)||n===0&&qn(e,r,t)||o===0&&qn(i,e,r)||s===0&&qn(i,t,r))}function qn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Yn(e){return e>0?1:e<0?-1:0}function xx(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Rc(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ga(e,t){return Tt(e.prev,e,e.next)<0?Tt(e,t,e.next)>=0&&Tt(e,e.prev,t)>=0:Tt(e,t,e.prev)<0||Tt(e,e.next,t)<0}function _x(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Cc(e,t){let i=new Ao(e.i,e.x,e.y),r=new Ao(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Lc(e,t,i,r){let a=new Ao(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Va(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ao(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yx(e,t,i,r){let a=0;for(let n=t,o=i-r;n<i;n+=r)a+=(e[o]-e[n])*(e[n+1]+e[o+1]),o=n;return a}var Ro=class Yu{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Yu.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Pc(t),Ic(r,t);let o=t.length;i.forEach(Pc);for(let l=0;l<i.length;l++)a.push(o),o+=i[l].length,Ic(r,i[l]);let s=ax.triangulate(r,a);for(let l=0;l<s.length;l+=3)n.push(s.slice(l,l+3));return n}};function Pc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ic(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Mx=class Ku extends wt{constructor(t=new Ec([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let s=0,l=t.length;s<l;s++){let h=t[s];o(h)}this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(n,2)),this.computeVertexNormals();function o(s){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,m=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:m-.1,f=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3,p=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:Sx,x,M=!1,A,w,P,L;p&&(x=p.getSpacedPoints(c),M=!0,d=!1,A=p.computeFrenetFrames(c,!1),w=new H,P=new H,L=new H),d||(g=0,m=0,v=0,f=0);let b=s.extractPoints(h),T=b.shape,k=b.holes;if(!Ro.isClockWise(T)){T=T.reverse();for(let B=0,pe=k.length;B<pe;B++){let ge=k[B];Ro.isClockWise(ge)&&(k[B]=ge.reverse())}}let K=Ro.triangulateShape(T,k),re=T;for(let B=0,pe=k.length;B<pe;B++){let ge=k[B];T=T.concat(ge)}function G(B,pe,ge){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(pe,ge)}let Y=T.length,J=K.length;function Q(B,pe,ge){let ye,xe,Ue,Me=B.x-pe.x,F=B.y-pe.y,S=ge.x-B.x,_=ge.y-B.y,D=Me*Me+F*F,C=Me*_-F*S;if(Math.abs(C)>Number.EPSILON){let z=Math.sqrt(D),X=Math.sqrt(S*S+_*_),ee=pe.x-F/z,q=pe.y+Me/z,ue=ge.x-_/X,se=ge.y+S/X,Se=((ue-ee)*_-(se-q)*S)/(Me*_-F*S);ye=ee+Me*Se-B.x,xe=q+F*Se-B.y;let ae=ye*ye+xe*xe;if(ae<=2)return new we(ye,xe);Ue=Math.sqrt(ae/2)}else{let z=!1;Me>Number.EPSILON?S>Number.EPSILON&&(z=!0):Me<-Number.EPSILON?S<-Number.EPSILON&&(z=!0):Math.sign(F)===Math.sign(_)&&(z=!0),z?(ye=-F,xe=Me,Ue=Math.sqrt(D)):(ye=Me,xe=F,Ue=Math.sqrt(D/2))}return new we(ye/Ue,xe/Ue)}let E=[];for(let B=0,pe=re.length,ge=pe-1,ye=B+1;B<pe;B++,ge++,ye++)ge===pe&&(ge=0),ye===pe&&(ye=0),E[B]=Q(re[B],re[ge],re[ye]);let R=[],N,I=E.concat();for(let B=0,pe=k.length;B<pe;B++){let ge=k[B];N=[];for(let ye=0,xe=ge.length,Ue=xe-1,Me=ye+1;ye<xe;ye++,Ue++,Me++)Ue===xe&&(Ue=0),Me===xe&&(Me=0),N[ye]=Q(ge[ye],ge[Ue],ge[Me]);R.push(N),I=I.concat(N)}for(let B=0;B<g;B++){let pe=B/g,ge=m*Math.cos(pe*Math.PI/2),ye=v*Math.sin(pe*Math.PI/2)+f;for(let xe=0,Ue=re.length;xe<Ue;xe++){let Me=G(re[xe],E[xe],ye);me(Me.x,Me.y,-ge)}for(let xe=0,Ue=k.length;xe<Ue;xe++){let Me=k[xe];N=R[xe];for(let F=0,S=Me.length;F<S;F++){let _=G(Me[F],N[F],ye);me(_.x,_.y,-ge)}}}let O=v+f;for(let B=0;B<Y;B++){let pe=d?G(T[B],I[B],O):T[B];M?(P.copy(A.normals[0]).multiplyScalar(pe.x),w.copy(A.binormals[0]).multiplyScalar(pe.y),L.copy(x[0]).add(P).add(w),me(L.x,L.y,L.z)):me(pe.x,pe.y,0)}for(let B=1;B<=c;B++)for(let pe=0;pe<Y;pe++){let ge=d?G(T[pe],I[pe],O):T[pe];M?(P.copy(A.normals[B]).multiplyScalar(ge.x),w.copy(A.binormals[B]).multiplyScalar(ge.y),L.copy(x[B]).add(P).add(w),me(L.x,L.y,L.z)):me(ge.x,ge.y,u/c*B)}for(let B=g-1;B>=0;B--){let pe=B/g,ge=m*Math.cos(pe*Math.PI/2),ye=v*Math.sin(pe*Math.PI/2)+f;for(let xe=0,Ue=re.length;xe<Ue;xe++){let Me=G(re[xe],E[xe],ye);me(Me.x,Me.y,u+ge)}for(let xe=0,Ue=k.length;xe<Ue;xe++){let Me=k[xe];N=R[xe];for(let F=0,S=Me.length;F<S;F++){let _=G(Me[F],N[F],ye);M?me(_.x,_.y+x[c-1].y,x[c-1].x+ge):me(_.x,_.y,u+ge)}}}V(),j();function V(){let B=a.length/3;if(d){let pe=0,ge=Y*pe;for(let ye=0;ye<J;ye++){let xe=K[ye];_e(xe[2]+ge,xe[1]+ge,xe[0]+ge)}pe=c+g*2,ge=Y*pe;for(let ye=0;ye<J;ye++){let xe=K[ye];_e(xe[0]+ge,xe[1]+ge,xe[2]+ge)}}else{for(let pe=0;pe<J;pe++){let ge=K[pe];_e(ge[2],ge[1],ge[0])}for(let pe=0;pe<J;pe++){let ge=K[pe];_e(ge[0]+Y*c,ge[1]+Y*c,ge[2]+Y*c)}}r.addGroup(B,a.length/3-B,0)}function j(){let B=a.length/3,pe=0;Z(re,pe),pe+=re.length;for(let ge=0,ye=k.length;ge<ye;ge++){let xe=k[ge];Z(xe,pe),pe+=xe.length}r.addGroup(B,a.length/3-B,1)}function Z(B,pe){let ge=B.length;for(;--ge>=0;){let ye=ge,xe=ge-1;xe<0&&(xe=B.length-1);for(let Ue=0,Me=c+g*2;Ue<Me;Ue++){let F=Y*Ue,S=Y*(Ue+1),_=pe+ye+F,D=pe+xe+F,C=pe+xe+S,z=pe+ye+S;Fe(_,D,C,z)}}}function me(B,pe,ge){l.push(B),l.push(pe),l.push(ge)}function _e(B,pe,ge){Te(B),Te(pe),Te(ge);let ye=a.length/3,xe=y.generateTopUV(r,a,ye-3,ye-2,ye-1);Pe(xe[0]),Pe(xe[1]),Pe(xe[2])}function Fe(B,pe,ge,ye){Te(B),Te(pe),Te(ye),Te(pe),Te(ge),Te(ye);let xe=a.length/3,Ue=y.generateSideWallUV(r,a,xe-6,xe-3,xe-2,xe-1);Pe(Ue[0]),Pe(Ue[1]),Pe(Ue[3]),Pe(Ue[1]),Pe(Ue[2]),Pe(Ue[3])}function Te(B){a.push(l[B*3+0]),a.push(l[B*3+1]),a.push(l[B*3+2])}function Pe(B){n.push(B.x),n.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return bx(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,o=t.shapes.length;n<o;n++){let s=i[t.shapes[n]];r.push(s)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new To[a.type]().fromJSON(a)),new Ku(r,t.options)}},Sx={generateTopUV:function(e,t,i,r,a){let n=t[i*3],o=t[i*3+1],s=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new we(n,o),new we(s,l),new we(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let o=t[i*3],s=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],m=t[a*3+1],v=t[a*3+2],f=t[n*3],g=t[n*3+1],p=t[n*3+2];return Math.abs(s-c)<Math.abs(o-h)?[new we(o,1-l),new we(h,1-u),new we(d,1-v),new we(f,1-p)]:[new we(s,1-l),new we(c,1-u),new we(m,1-v),new we(g,1-p)]}};function bx(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Nc=class Zu extends rx{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Zu(t.radius,t.detail)}},Co=class Ju extends wt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:o,thetaLength:s},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(o+s,Math.PI),h=0,c=[],u=new H,d=new H,m=[],v=[],f=[],g=[];for(let p=0;p<=r;p++){let y=[],x=p/r,M=0;p===0&&o===0?M=.5/i:p===r&&l===Math.PI&&(M=-.5/i);for(let A=0;A<=i;A++){let w=A/i;u.x=-t*Math.cos(a+w*n)*Math.sin(o+x*s),u.y=t*Math.cos(o+x*s),u.z=t*Math.sin(a+w*n)*Math.sin(o+x*s),v.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),g.push(w+M,1-x),y.push(h++)}c.push(y)}for(let p=0;p<r;p++)for(let y=0;y<i;y++){let x=c[p][y+1],M=c[p][y],A=c[p+1][y],w=c[p+1][y+1];(p!==0||o>0)&&m.push(x,M,w),(p!==r-1||l<Math.PI)&&m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Uc=class Qu extends wt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n},r=Math.floor(r),a=Math.floor(a);let o=[],s=[],l=[],h=[],c=new H,u=new H,d=new H;for(let m=0;m<=r;m++)for(let v=0;v<=a;v++){let f=v/a*n,g=m/r*Math.PI*2;u.x=(t+i*Math.cos(g))*Math.cos(f),u.y=(t+i*Math.cos(g))*Math.sin(f),u.z=i*Math.sin(g),s.push(u.x,u.y,u.z),c.x=t*Math.cos(f),c.y=t*Math.sin(f),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(v/a),h.push(m/r)}for(let m=1;m<=r;m++)for(let v=1;v<=a;v++){let f=(a+1)*m+v-1,g=(a+1)*(m-1)+v-1,p=(a+1)*(m-1)+v,y=(a+1)*m+v;o.push(f,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Wa=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kn=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qi=class extends Kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Et=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zn(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function wx(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tx(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Dc(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,o=0;o!==r;++n){let s=i[n]*t;for(let l=0;l!==t;++l)a[o++]=e[s+l]}return a}function Oc(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let o=n[r];if(o!==void 0)if(Array.isArray(o))do o=n[r],o!==void 0&&(t.push(n.time),i.push.apply(i,o)),n=e[a++];while(n!==void 0);else if(o.toArray!==void 0)do o=n[r],o!==void 0&&(t.push(n.time),o.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do o=n[r],o!==void 0&&(t.push(n.time),i.push(o)),n=e[a++];while(n!==void 0)}var Xa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let s=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===s)break;if(r=a,a=t[--i-1],e>=a)break t}n=i,i=0;break i}break e}for(;i<n;){let o=i+n>>>1;e<t[o]?n=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ex=class extends Xa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,o=r[a],s=r[n];if(o===void 0)switch(this.getSettings_().endingStart){case Kr:a=e,o=2*t-i;break;case on:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(s===void 0)switch(this.getSettings_().endingEnd){case Kr:n=e,s=2*i-t;break;case on:n=1,s=i+r[1]-r[0];break;default:n=e-1,s=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(s-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),v=m*m,f=v*m,g=-u*f+2*u*v-u*m,p=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*m+1,y=(-1-d)*f+(1.5+d)*v+.5*m,x=d*f-d*v;for(let M=0;M!==o;++M)a[M]=g*n[h+M]+p*n[l+M]+y*n[s+M]+x*n[c+M];return a}},zc=class extends Xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==o;++u)a[u]=n[l+u]*c+n[s+u]*h;return a}},Ax=class extends Xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zn(t,this.TimeBufferType),this.values=Zn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zn(e.times,Array),values:Zn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case As:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return As}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let o=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*o,n*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let o=0;o!==a;o++){let s=i[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(n!==null&&n>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,n),e=!1;break}n=s}if(r!==void 0&&wx(r))for(let o=0,s=r.length;o!==s;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===As,a=e.length-1,n=1;for(let o=1;o<a;++o){let s=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)s=!0;else{let c=o*i,u=c-i,d=c+i;for(let m=0;m!==i;++m){let v=t[c+m];if(v!==t[u+m]||v!==t[d+m]){s=!0;break}}}if(s){if(o!==n){e[n]=e[o];let c=o*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let o=a*i,s=n*i,l=0;l!==i;++l)t[s+l]=t[o+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};zi.prototype.TimeBufferType=Float32Array,zi.prototype.ValueBufferType=Float32Array,zi.prototype.DefaultInterpolation=qr;var Ma=class extends zi{};Ma.prototype.ValueTypeName="bool",Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=Ra,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends zi{};Fc.prototype.ValueTypeName="color";var Sa=class extends zi{};Sa.prototype.ValueTypeName="number";var Rx=class extends Xa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)ci.slerpFlat(a,0,n,l-o,n,l,s);return a}},Lr=class extends zi{InterpolantFactoryMethodLinear(e){return new Rx(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion",Lr.prototype.DefaultInterpolation=qr,Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends zi{};ba.prototype.ValueTypeName="string",ba.prototype.ValueBufferType=Array,ba.prototype.DefaultInterpolation=Ra,ba.prototype.InterpolantFactoryMethodLinear=void 0,ba.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends zi{};wa.prototype.ValueTypeName="vector";var Lo=class{constructor(e,t=-1,i,r=Rs){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,o=i.length;n!==o;++n)t.push(Lx(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,n=i.length;a!==n;++a)t.push(zi.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let o=0;o<a;o++){let s=[],l=[];s.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);let h=Tx(s);s=Dc(s,1,h),l=Dc(l,1,h),!r&&s[0]===0&&(s.push(a),l.push(l[0])),n.push(new Sa(".morphTargetInfluences["+t[o].name+"]",s,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,s=e.length;o<s;o++){let l=e[o],h=l.name.match(a);if(h&&h.length>1){let c=h[1],u=r[c];u||(r[c]=u=[]),u.push(l)}}let n=[];for(let o in r)n.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,c,u,d,m){if(u.length!==0){let v=[],f=[];Oc(u,v,f,d),v.length!==0&&m.push(new h(c,v,f))}},r=[],a=e.name||"default",n=e.fps||30,o=e.blendMode,s=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let u={},d;for(d=0;d<c.length;d++)if(c[d].morphTargets)for(let m=0;m<c[d].morphTargets.length;m++)u[c[d].morphTargets[m]]=-1;for(let m in u){let v=[],f=[];for(let g=0;g!==c[d].morphTargets.length;++g){let p=c[d];v.push(p.time),f.push(p.morphTarget===m?1:0)}r.push(new Sa(".morphTargetInfluence["+m+"]",v,f))}s=u.length*n}else{let u=".bones["+t[h].name+"]";i(wa,u+".position",c,"pos",r),i(Lr,u+".quaternion",c,"rot",r),i(wa,u+".scale",c,"scl",r)}}return r.length===0?null:new this(a,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Cx(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sa;case"vector":case"vector2":case"vector3":case"vector4":return wa;case"color":return Fc;case"quaternion":return Lr;case"bool":case"boolean":return Ma;case"string":return ba}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Lx(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Cx(e.type);if(e.times===void 0){let i=[],r=[];Oc(e.keys,i,r,"value"),e.times=i,e.values=r}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var ur={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Px=class{constructor(e,t,i){let r=this,a=!1,n=0,o=0,s,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,o),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,o),n===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],m=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Ix=new Px,Ta=class{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i={},Nx=class extends Error{constructor(e,t){super(e),this.response=t}},Bc=class extends Ta{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=ur.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:i,onError:r});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,s=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=$i[e],c=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,m=d!==0,v=0,f=new ReadableStream({start(g){p();function p(){c.read().then(({done:y,value:x})=>{if(y)g.close();else{v+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let A=0,w=h.length;A<w;A++){let P=h[A];P.onProgress&&P.onProgress(M)}g.enqueue(x),p()}})}}});return new Response(f)}else throw new Nx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(s){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),c=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(c);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{ur.add(e,l);let h=$i[e];delete $i[e];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=$i[e];if(h===void 0)throw this.manager.itemError(e),l;delete $i[e];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Ux=class extends Ta{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=ur.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let o=Pa("img");function s(){h(),ur.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",s,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}},Dx=class extends Ta{constructor(e){super(e)}load(e,t,i,r){let a=new hi,n=new Ux(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Jn=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ox=class extends Jn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Po=new at,kc=new H,Hc=new H,Io=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zx=class extends Io{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Gc=class extends Jn{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vc=new at,ja=new H,No=new H,Fx=class extends Io{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ja.setFromMatrixPosition(e.matrixWorld),i.position.copy(ja),No.copy(i.position),No.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(No),i.updateMatrixWorld(),r.makeTranslation(-ja.x,-ja.y,-ja.z),Vc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc)}},Bx=class extends Jn{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},kx=class extends Io{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wc=class extends Jn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qa=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Hx=class extends Ta{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=ur.get(e);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let s=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return ur.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),ur.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});ur.add(e,s),a.manager.itemStart(e)}},Gx=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,n;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,n=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,n=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,n=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=n,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,a=e*r+r,n=this.cumulativeWeight;if(n===0){for(let o=0;o!==r;++o)i[a+o]=i[o];n=t}else{n+=t;let o=t/n;this._mixBufferRegion(i,a,0,o,r)}this.cumulativeWeight=n}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,n=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){let s=t*this._origIndex;this._mixBufferRegion(i,r,s,1-a,t)}n>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let s=t,l=t+t;s!==l;++s)if(i[s]!==i[s+t]){o.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,n=r;a!==n;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let n=0;n!==a;++n)e[t+n]=e[i+n]}_slerp(e,t,i,r){ci.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){let n=this._workIndex*a;ci.multiplyQuaternionsFlat(e,n,e,t,e,i),ci.slerpFlat(e,t,e,t,e,n,r)}_lerp(e,t,i,r,a){let n=1-r;for(let o=0;o!==a;++o){let s=t+o;e[s]=e[s]*n+e[i+o]*r}}_lerpAdditive(e,t,i,r,a){for(let n=0;n!==a;++n){let o=t+n;e[o]=e[o]+e[i+n]*r}}},Uo="\\[\\]\\.:\\/",Vx=new RegExp("["+Uo+"]","g"),Do="[^"+Uo+"]",Wx="[^"+Uo.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",Do),jx=/(WCOD+)?/.source.replace("WCOD",Wx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),Kx=new RegExp("^"+Xx+jx+qx+Yx+"$"),Zx=["material","materials","bones","map"],Jx=class{constructor(e,t,i){let r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class Aa{constructor(t,i,r){this.path=i,this.parsedPath=r||Aa.parseTrackName(i),this.node=Aa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Aa.Composite(t,i,r):new Aa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let i=Kx.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Zx.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let o=0;o<n.length;o++){let s=n[o];if(s.name===i||s.uuid===i)return s;let l=r(s.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Aa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[a];if(o===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=n}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Jx,yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let a=t.tracks,n=a.length,o=new Array(n),s={endingStart:Yr,endingEnd:Yr};for(let l=0;l!==n;++l){let h=a[l].createInterpolant(null);o[l]=h,h.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=new Array(n),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,a=e._clip.duration,n=a/r,o=r/a;e.warp(1,n,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,a=r.time,n=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,l=o.sampleValues;return s[0]=a,s[1]=a+i,l[0]=e/n,l[1]=t/n,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let a=this._startTime;if(a!==null){let s=(e-a)*i;s<0||i===0?t=0:(this._startTime=null,t=i*s)}t*=this._updateTimeScale(e);let n=this._updateTime(t),o=this._updateWeight(e);if(o>0){let s=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $d:for(let h=0,c=s.length;h!==c;++h)s[h].evaluate(n),l[h].accumulateAdditive(o);break;case Rs:default:for(let h=0,c=s.length;h!==c;++h)s[h].evaluate(n),l[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,a=this._loopCount,n=i===Qd;if(e===0)return a===-1?r:n&&(a&1)===1?t-r:r;if(i===Es){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,n)):this._setEndings(this.repetitions===0,!0,n)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,a+=Math.abs(o);let s=this.repetitions-a;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(s===1){let l=e<0;this._setEndings(l,!l,n)}else this._setEndings(!1,!1,n);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(n&&(a&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Kr,r.endingEnd=Kr):(e?r.endingStart=this.zeroSlopeAtStart?Kr:Yr:r.endingStart=on,t?r.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:r.endingEnd=on)}_scheduleFading(e,t,i){let r=this._mixer,a=r.time,n=this._weightInterpolant;n===null&&(n=r._lendControlInterpolant(),this._weightInterpolant=n);let o=n.parameterPositions,s=n.sampleValues;return o[0]=a,s[0]=t,o[1]=a+e,s[1]=i,this}},$x=new Float32Array(1),e_=class extends yr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,n=e._propertyBindings,o=e._interpolants,s=i.uuid,l=this._bindingsByRootAndName,h=l[s];h===void 0&&(h={},l[s]=h);for(let c=0;c!==a;++c){let u=r[c],d=u.name,m=h[d];if(m!==void 0)++m.referenceCount,n[c]=m;else{if(m=n[c],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,s,d));continue}let v=t&&t._propertyBindings[c].binding.parsedPath;m=new Gx(yt.create(i,d,v),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,s,d),n[c]=m}o[c].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,a=this._actionsByClip,n=a[t];if(n===void 0)n={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=n;else{let o=n.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),n.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let a=e._clip.uuid,n=this._actionsByClip,o=n[a],s=o.knownActions,l=s[s.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,s[h]=l,s.pop(),e._byClipCacheIndex=null;let c=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete c[u],s.length===0&&delete n[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,a=this._bindings,n=r[t];n===void 0&&(n={},r[t]=n),n[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,n=this._bindingsByRootAndName,o=n[r],s=t[t.length-1],l=e._cacheIndex;s._cacheIndex=l,t[l]=s,t.pop(),delete o[a],Object.keys(o).length===0&&delete n[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new zc(new Float32Array(2),new Float32Array(2),1,$x),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){let r=t||this._root,a=r.uuid,n=typeof e=="string"?Lo.findByName(r,e):e,o=n!==null?n.uuid:e,s=this._actionsByClip[o],l=null;if(i===void 0&&(n!==null?i=n.blendMode:i=Rs),s!==void 0){let c=s.actionByRoot[a];if(c!==void 0&&c.blendMode===i)return c;l=s.knownActions[0],n===null&&(n=l._clip)}if(n===null)return null;let h=new Qx(this,n,t,i);return this._bindAction(h,l),this._addInactiveAction(h,o,a),h}existingAction(e,t){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Lo.findByName(i,e):e,n=a?a.uuid:e,o=this._actionsByClip[n];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),n=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,a,n);let o=this._bindings,s=this._nActiveBindings;for(let l=0;l!==s;++l)o[l].apply(n);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){let n=a.knownActions;for(let o=0,s=n.length;o!==s;++o){let l=n[o];this._deactivateAction(l);let h=l._cacheIndex,c=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,t[h]=c,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let n in i){let o=i[n].actionByRoot,s=o[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let r=this._bindingsByRootAndName,a=r[t];if(a!==void 0)for(let n in a){let o=a[n];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ds}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ds);var Qn=sd(od()),Ze=(e,t,i)=>e<t?t:e>i?i:e,rt=(e,t,i)=>e+(t-e)*i,t_=e=>e*e*(3-2*e),Fi=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e};function Ct(e){return e=e^61^e>>>16,e=e+(e<<3)|0,e=e^e>>>4,e=Math.imul(e,668265261),e=e^e>>>15,(e>>>0)/4294967296}var Oo=12345,mt=()=>(Oo=Oo*1664525+1013904223>>>0,Oo/4294967296),Bt=e=>e[mt()*e.length|0];function $n(e,t,i,r,a,n,o){let s=a-i,l=n-r,h=s*s+l*l||1e-9,c=((e-i)*s+(t-r)*l)/h;return c=c<0?0:c>1?1:c,o.x=i+s*c,o.z=r+l*c,o.t=c,o}function Xc(e,t,i){let r=!1;for(let a=0,n=i.length-1;a<i.length;n=a++){let o=i[a][0],s=i[a][1],l=i[n][0],h=i[n][1];s>t!=h>t&&e<(l-o)*(t-s)/(h-s)+o&&(r=!r)}return r}var Pr=class{constructor(e,t,i){this.cell=i,this.nx=Math.ceil(e/i)+2,this.nz=Math.ceil(t/i)+2,this.cells=new Array(this.nx*this.nz),this.stamp=0}_i(e,t){let i=Math.floor(e/this.cell)+1,r=Math.floor(t/this.cell)+1;return i<0||r<0||i>=this.nx||r>=this.nz?-1:r*this.nx+i}add(e,t,i,r,a){let n=this.cell,o=Math.max(0,Math.floor(Math.min(t,r)/n)+1),s=Math.min(this.nx-1,Math.floor(Math.max(t,r)/n)+1),l=Math.max(0,Math.floor(Math.min(i,a)/n)+1),h=Math.min(this.nz-1,Math.floor(Math.max(i,a)/n)+1);for(let c=l;c<=h;c++)for(let u=o;u<=s;u++){let d=c*this.nx+u;(this.cells[d]||(this.cells[d]=[])).push(e)}}query(e,t,i,r){r.length=0;let a=this.cell,n=++this.stamp,o=Math.max(0,Math.floor((e-i)/a)+1),s=Math.min(this.nx-1,Math.floor((e+i)/a)+1),l=Math.max(0,Math.floor((t-i)/a)+1),h=Math.min(this.nz-1,Math.floor((t+i)/a)+1);for(let c=l;c<=h;c++)for(let u=o;u<=s;u++){let d=this.cells[c*this.nx+u];if(d)for(let m=0;m<d.length;m++){let v=d[m];v._st!==n&&(v._st=n,r.push(v))}}return r}},le={Mesh:tt,Group:ii,Scene:uo,Object3D:Rt,InstancedMesh:Rr,Vec2:we,Vec3:H,Vec4:vt,Mat4:at,Quat:ci,Color:ke,Box3:qt,Geo:wt,F32:Qe,Attr:Nt,Box:Kt,Cyl:_a,Sphere:Co,Plane:to,Torus:Uc,Lathe:Tc,Ico:Nc,Lambert:Et,Basic:Li,Standard:Kn,Shader:Pi,CanvasTex:_o,DataTex:sc,Linear:St,Nearest:Dt,MipLinear:Wi,Additive:Hr,DoubleSide:Xt,BackSide:Wt,SRGB:bt},At={uNight:{value:0},uTime:{value:0},uLamp:{value:null},uWorld:{value:new we(1,1)},uSunCol:{value:new ke(1,1,1)},uSun:{value:new H(0,1,0)},uGMask:{value:null}},i_=`
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
      }`;function Bi(e,t="",i="",r=""){e.uniforms.uNight=At.uNight,e.uniforms.uTime=At.uTime,e.uniforms.uLamp=At.uLamp,e.uniforms.uWorld=At.uWorld,e.uniforms.uSun=At.uSun,e.uniforms.uGMask=At.uGMask,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
      ${t.split("//MAIN")[1]||""}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWP;
      varying vec3 vWN;
      uniform float uNight; uniform float uTime; uniform sampler2D uLamp; uniform sampler2D uGMask; uniform vec2 uWorld; uniform vec3 uSun;
      float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ return vnoise(p)*0.5 + vnoise(p*2.03+7.1)*0.3 + vnoise(p*4.1+3.7)*0.2; }
      vec3 lampAt(vec3 wp){ return texture2D(uLamp, wp.xz/uWorld).rgb; }
      ${i_}
      ${i}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+r)}var ki=class{constructor(e){this.d=e;let t=e.meta;this.W=t.w,this.H=t.h,this.water=t.water,this.step=t.step,this.nx=t.nx,this.nz=t.nz;let i=t.nx*t.nz;this.hg=new Float32Array(i);let r=e.hgt_scale||100;if(e.hgt16){let a=atob(e.hgt16),n=new Uint8Array(a.length);for(let s=0;s<a.length;s++)n[s]=a.charCodeAt(s);let o=new Int16Array(n.buffer);for(let s=0;s<i;s++)this.hg[s]=o[s]/r}else for(let a=0;a<i;a++)this.hg[a]=e.hgt[a]/r;At.uWorld.value.set(this.W,this.H),this.group=new ii,this.colliders=new Pr(this.W,this.H,8),this.decks=new Pr(this.W,this.H,10),this.names=new Pr(this.W,this.H,20),this._tmp=[],this._c={x:0,z:0,t:0}}hAt(e,t){let i=this.step,r=e/i,a=t/i;r=Ze(r,0,this.nx-1.001),a=Ze(a,0,this.nz-1.001);let n=r|0,o=a|0,s=r-n,l=a-o,h=o*this.nx+n,c=this.hg,u=c[h]+(c[h+1]-c[h])*s,d=c[h+this.nx]+(c[h+this.nx+1]-c[h+this.nx])*s;return u+(d-u)*l}surfaceY(e,t,i=1e9){let r=this.hAt(e,t),a=this.decks.query(e,t,1,this._tmp);for(let n=0;n<a.length;n++){let o=a[n],s=$n(e,t,o.ax,o.az,o.bx,o.bz,this._c);if(Math.hypot(e-s.x,t-s.z)>o.hw)continue;let l=o.ya+(o.yb-o.ya)*s.t;l>r&&i>l-2.2&&(r=l)}return r}onDeck(e,t,i){return this.surfaceY(e,t,i)>this.hAt(e,t)+.5}streetAt(e,t){let i=this.names.query(e,t,30,this._tmp),r=null,a=30;for(let n of i){let o=$n(e,t,n.ax,n.az,n.bx,n.bz,this._c),s=Math.hypot(e-o.x,t-o.z)-n.hw;s<a&&(a=s,r=n.n)}return r}build(e={}){return this.mobile=!!e.mobile,this.buildBridges(),this.paintGround(),this.buildTerrain(),this.buildWater(),this.buildMarkings(),this.buildFountains(),this.buildBuildings(),this.buildWalls(),this.buildProps(),this.buildRoadGraph(),this.buildPedGraph(),this}buildBridges(){let e=this.d.road.filter(l=>l.b),t=l=>[l[0]/10,l[1]/10],i=l=>l[0]+","+l[1],r=new Set,a=new Map;e.forEach((l,h)=>{for(let c of[l.p[0],l.p[l.p.length-1]]){let u=i(c);a.has(u)||a.set(u,[]),a.get(u).push(h)}});let n=[];e.forEach((l,h)=>{if(r.has(h))return;r.add(h);let c=l.p.map(t),u=!0;for(;u;){u=!1;for(let[d,m]of[[c.length-1,!1],[0,!0]]){let v=Math.round(c[d][0]*10)+","+Math.round(c[d][1]*10);for(let f of a.get(v)||[]){if(r.has(f))continue;let g=e[f];if((g.n||"")!==(l.n||""))continue;let p=g.p.map(t),y=Math.round(p[0][0]*10)+","+Math.round(p[0][1]*10);if(m){if(Math.round(p[p.length-1][0]*10)+","+Math.round(p[p.length-1][1]*10)!==v)continue;c=p.slice(0,-1).concat(c)}else{if(y!==v)continue;c=c.concat(p.slice(1))}r.add(f),u=!0;break}if(u)break}}n.push({pts:c,w:l.w,n:l.n||"",c:l.c})});let o=this.d.water.map(l=>l.map(t)),s=(l,h)=>o.some(c=>Xc(l,h,c));this.bridges=[];for(let l of n){let h=[],c=0;for(let y=0;y<l.pts.length-1;y++){let[x,M]=l.pts[y],[A,w]=l.pts[y+1],P=Math.hypot(A-x,w-M),L=Math.max(1,Math.ceil(P/2));for(let b=0;b<L;b++)h.push({x:x+(A-x)*b/L,z:M+(w-M)*b/L,d:c+P*b/L});c+=P}let u=l.pts[l.pts.length-1];h.push({x:u[0],z:u[1],d:c});let d=this.hAt(h[0].x,h[0].z),m=this.hAt(u[0],u[1]),v=l.n==="Most SNP";for(let y of h){let x=y.d/c;y.base=rt(d,m,x),y.tgt=s(y.x,y.z)?this.water+(v?11.5:7):y.base,y.tgt=Math.max(y.tgt,this.hAt(y.x,y.z)+(v?.2:0))}let f=v?.055:.08;for(let y of h){let x=y.base;for(let M of h)x=Math.max(x,M.tgt-f*Math.abs(y.d-M.d));y.y=x}let g=v?10.8:Math.max(2.5,l.w/2+1.2),p=[];for(let y=0;y<h.length-1;y++){let x=h[y],M=h[y+1],A={ax:x.x,az:x.z,bx:M.x,bz:M.z,ya:x.y,yb:M.y,hw:g};p.push(A),this.decks.add(A,x.x-g,x.z-g,M.x+g,M.z+g)}this.bridges.push({s:h,hw:g,big:v,n:l.n,segs:p})}}paintGround(){let e=2048,t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d"),r=e/this.W,a=e/this.H;this.gk=[r,a],i.setTransform(r,0,0,a,0,0);let n=(f,g=!0)=>{i.beginPath();for(let p=0;p<f.length;p++){let y=f[p][0]/10,x=f[p][1]/10;p?i.lineTo(y,x):i.moveTo(y,x)}g&&i.closePath()};i.fillStyle="#857f72",i.fillRect(0,0,this.W,this.H),i.fillStyle="#56703c";for(let f of this.d.green)n(f),i.fill();i.fillStyle="#4b6534";for(let f of this.d.green)f.length>30&&(n(f),i.fill());i.fillStyle="#b0a389";for(let f of this.d.parea)n(f),i.fill();i.fillStyle="#26323a";for(let f of this.d.water)n(f),i.fill();i.lineCap="round",i.lineJoin="round";let o=this.d.road.filter(f=>!f.b);i.strokeStyle="#a39a8a";for(let f of o)f.c>=1&&f.c<=4&&(i.lineWidth=f.w+3.6,n(f.p,!1),i.stroke());i.strokeStyle="#6f685e";for(let f of o)f.c>=1&&f.c<=4&&(i.lineWidth=f.w+.6,n(f.p,!1),i.stroke());i.strokeStyle="#a69c86";for(let f of this.d.foot)i.lineWidth=f.sw?2.2:2.6,n(f.p,!1),i.stroke();i.strokeStyle="#968c7c",i.lineWidth=3;for(let f of this.d.steps)n(f,!1),i.stroke();i.strokeStyle="#b5a88e";for(let f of o)f.c===5&&(i.lineWidth=f.w,n(f.p,!1),i.stroke());let s=o.filter(f=>f.c<=4).sort((f,g)=>f.c-g.c);for(let f of s)i.strokeStyle=f.s?"#615850":f.pk?"#46464a":"#3a3b40",i.lineWidth=f.w,n(f.p,!1),i.stroke();i.lineCap="butt";for(let f of s)f.c<2||f.s||(i.strokeStyle="rgba(225,222,210,0.75)",i.lineWidth=.18,f.o||(i.setLineDash(f.c>=4?[]:[3,6]),n(f.p,!1),i.stroke()),i.setLineDash([]));i.strokeStyle="rgba(40,40,40,0.55)",i.lineWidth=1.8;for(let f of this.d.tram)f.b||(n(f.p,!1),i.stroke());i.strokeStyle="rgba(190,190,195,0.8)",i.lineWidth=.15;for(let f of this.d.tram)if(!f.b)for(let g of[-.72,.72]){i.beginPath();let p=f.p;for(let y=0;y<p.length;y++){let x=p[Math.max(0,y-1)],M=p[Math.min(p.length-1,y+1)],A=M[0]-x[0],w=M[1]-x[1],P=Math.hypot(A,w)||1,L=p[y][0]/10-w/P*g,b=p[y][1]/10+A/P*g;y?i.lineTo(L,b):i.moveTo(L,b)}i.stroke()}i.strokeStyle="rgba(235,235,228,0.9)",i.lineWidth=3.2,i.setLineDash([.55,.55]);for(let f of this.d.cross)n(f,!1),i.stroke();i.setLineDash([]),i.fillStyle="#3c3833";for(let f of this.d.bld)(!f.m||f.m<1)&&(n(f.o),i.fill());this.groundCanvas=t,this.paintGroundMask(o);let l=1024,h=document.createElement("canvas");h.width=h.height=l;let c=h.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,l,l),c.setTransform(l/this.W,0,0,l/this.H,0,0),c.globalCompositeOperation="lighter";let u=this.d.lamps.map(f=>[f[0]/10,f[1]/10]),d=new Pr(this.W,this.H,20);for(let f of u)d.add({x:f[0],z:f[1]},f[0],f[1],f[0],f[1]);let m=[];for(let f of o){if(f.c<1||f.c>5)continue;let g=f.p,p=14+Ct(g[0][0]*7+g[0][1])*10,y=1;for(let x=0;x<g.length-1;x++){let M=g[x][0]/10,A=g[x][1]/10,w=g[x+1][0]/10,P=g[x+1][1]/10,L=Math.hypot(w-M,P-A);for(;p<L;){let b=p/L,T=-(P-A)/L,k=(w-M)/L,K=f.c===5?0:f.w/2+.9,re=M+(w-M)*b+T*K*y,G=A+(P-A)*b+k*K*y;!d.query(re,G,13,m).length&&re>0&&G>0&&re<this.W&&G<this.H&&(u.push([re,G]),d.add({x:re,z:G},re,G,re,G)),y=-y,p+=f.c>=3?26:30}p-=L}}for(let[f,g]of u){let p=c.createRadialGradient(f,g,0,f,g,13);p.addColorStop(0,"rgba(255,190,110,0.85)"),p.addColorStop(.35,"rgba(255,170,90,0.35)"),p.addColorStop(1,"rgba(255,150,70,0)"),c.fillStyle=p,c.fillRect(f-13,g-13,26,26)}this.lampPts=u;let v=new _o(h);v.colorSpace=li,v.minFilter=St,v.flipY=!1,At.uLamp.value=v}paintGroundMask(e){let t=this.mobile?2048:4096,i=document.createElement("canvas");i.width=i.height=t;let r=i.getContext("2d",{alpha:!1});r.setTransform(t/this.W,0,0,t/this.H,0,0);let a=(u,d=!0)=>{r.beginPath();for(let m=0;m<u.length;m++){let v=u[m][0]/10,f=u[m][1]/10;m?r.lineTo(v,f):r.moveTo(v,f)}d&&r.closePath()};r.fillStyle="#000",r.fillRect(0,0,this.W,this.H),r.fillStyle="#0f0";for(let u of this.d.green)a(u),r.fill();r.fillStyle="#00f";for(let u of this.d.parea)a(u),r.fill();r.lineCap="round",r.lineJoin="round",r.strokeStyle="#000";for(let u of e)u.c>=1&&u.c<=4&&(r.lineWidth=u.w+3.6,a(u.p,!1),r.stroke());for(let u of this.d.foot)r.lineWidth=u.sw?2.2:2.6,a(u.p,!1),r.stroke();r.lineWidth=3;for(let u of this.d.steps)a(u,!1),r.stroke();r.strokeStyle="#00f";for(let u of e)u.c===5&&(r.lineWidth=u.w,a(u.p,!1),r.stroke());let n=e.filter(u=>u.c<=4).sort((u,d)=>u.c-d.c);for(let u of n){let d=u.c===0&&(u.s||u.nv);r.strokeStyle=d?"#00f":u.s?"#f0f":"#f00",r.lineWidth=u.w,a(u.p,!1),r.stroke()}let o=new _o(i);o.colorSpace=li,o.flipY=!1,o.anisotropy=4,o.minFilter=Wi,o.magFilter=St,o.generateMipmaps=!0,At.uGMask.value=o;let s=1024,l=document.createElement("canvas");l.width=l.height=s;let h=l.getContext("2d",{willReadFrequently:!0});h.drawImage(i,0,0,s,s);let c=h.getImageData(0,0,s,s).data;this.maskAt=(u,d)=>{let m=Math.min(s-1,Math.max(0,Math.round(u/this.W*s))),v=Math.min(s-1,Math.max(0,Math.round(d/this.H*s))),f=(v*s+m)*4;return[c[f]/255,c[f+1]/255,c[f+2]/255]}}buildTerrain(){let e=this.nx,t=this.nz,i=this.step,r=new Float32Array(e*t*3),a=new Float32Array(e*t*2);for(let c=0;c<t;c++)for(let u=0;u<e;u++){let d=c*e+u;r[d*3]=Math.min(u*i,this.W),r[d*3+1]=this.hg[d],r[d*3+2]=Math.min(c*i,this.H),a[d*2]=r[d*3]/this.W,a[d*2+1]=1-r[d*3+2]/this.H}let n=new Uint32Array((e-1)*(t-1)*6),o=0;for(let c=0;c<t-1;c++)for(let u=0;u<e-1;u++){let d=c*e+u,m=d+1,v=d+e,f=v+1;n[o++]=d,n[o++]=v,n[o++]=m,n[o++]=m,n[o++]=v,n[o++]=f}let s=new wt;s.setAttribute("position",new Nt(r,3)),s.setAttribute("uv",new Nt(a,2)),s.setIndex(new Nt(n,1)),s.computeVertexNormals();let l=new Et({color:16777215});l.onBeforeCompile=c=>Bi(c,"",`
          // staggered stone pattern: returns 0 in the joints, 1 on the stone; id = per-stone random
          float hdSetts(vec2 p, vec2 size, float joint, float aa, out float id){
            vec2 q = p / size; q.x += 0.5 * floor(q.y);
            vec2 c = floor(q); id = h21(c);
            vec2 f = fract(q); vec2 e = min(f, 1.0 - f) * size;
            return smoothstep(joint - aa, joint + aa, min(e.x, e.y));
          }`,`{
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
        }`);let h=new tt(s,l);h.receiveShadow=!0,this.terrain=h,this.group.add(h)}buildWater(){let e=new to(this.W+3e3,this.H+3e3,1,1);e.rotateX(-Math.PI/2),e.translate(this.W/2,this.water,this.H/2);let t=new Et({color:16777215});t.onBeforeCompile=r=>Bi(r,"",`
          float hdWave(vec2 p){
            float t = uTime;
            return vnoise(p * vec2(0.35, 0.9) + vec2(t * 0.55, t * 0.12)) * 0.6
                 + vnoise(p * vec2(1.3, 2.4) + vec2(-t * 0.8, t * 0.35)) * 0.3
                 + vnoise(p * 5.5 + vec2(t * 1.3, -t * 0.9)) * 0.1;
          }`,`{
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
        }`),this.waterMat=t;let i=new tt(e,t);i.receiveShadow=!0,this.group.add(i)}buildMarkings(){const t=Math.ceil(this.W/256),i=new Map,r=(f,g)=>{let p=Math.min(t-1,Math.max(0,Math.floor(f/256)))+t*Math.max(0,Math.floor(g/256)),y=i.get(p);return y||i.set(p,y={p:[],c:[]}),y},a=(f,g,p,y,x)=>{let M=r(f[0],f[2]);M.p.push(...f,...g,...p,...f,...p,...y);for(let A=0;A<6;A++)M.c.push(x[0],x[1],x[2])},n=f=>f.map(g=>[g[0]/10,g[1]/10]),o=(f,g)=>{let p=[],y=0;for(let x=0;x<f.length-1;x++){let[M,A]=f[x],[w,P]=f[x+1],L=Math.hypot(w-M,P-A);if(L<.01)continue;let b=Math.max(1,Math.ceil(L/g)),T=(w-M)/L,k=(P-A)/L;for(let K=0;K<b;K++)p.push({x:M+(w-M)*K/b,z:A+(P-A)*K/b,s:y+L*K/b,dx:T,dz:k});y+=L,x===f.length-2&&p.push({x:w,z:P,s:y,dx:T,dz:k})}for(let x=1;x<p.length-1;x++){let M=p[x-1],A=p[x+1],w=Math.hypot(A.x-M.x,A.z-M.z)||1;p[x].nx=-(A.z-M.z)/w,p[x].nz=(A.x-M.x)/w}if(p.length){let x=p[0],M=p[p.length-1];x.nx=-x.dz,x.nz=x.dx,M.nx=-M.dz,M.nz=M.dx}return p},s=(f,g,p,y,x,M,A=0,w=0,P=null,L=!1)=>{for(let b=0;b<f.length-1;b++){let T=f[b],k=f[b+1],K=(T.s+k.s)/2;if(A&&K%(A+w)>A||P&&P.some(([N,I])=>K>N&&K<I))continue;let re=T.x+T.nx*g,G=T.z+T.nz*g,Y=k.x+k.nx*g,J=k.z+k.nz*g;if(L&&this.maskAt((re+Y)/2,(G+J)/2)[0]<.55)continue;let Q=p/2,E=x(re,G)+M,R=x(Y,J)+M;a([re+T.nx*Q,E,G+T.nz*Q],[Y+k.nx*Q,R,J+k.nz*Q],[Y-k.nx*Q,R,J-k.nz*Q],[re-T.nx*Q,E,G-T.nz*Q],y)}},l=(f,g)=>this.hAt(f,g),h=(f,g)=>this.surfaceY(f,g),c=[.78,.78,.74],u=[.36,.37,.39];let d=new Map,m=f=>f[0]+","+f[1];this.d.road.forEach((f,g)=>{if(!(f.c<1||f.c>4))for(let p of f.p){let y=m(p),x=d.get(y);x||d.set(y,x=[]),x.includes(g)||x.push(g)}}),this.d.road.forEach((f,g)=>{if(f.c<1||f.c>4||f.s||f.pk||f.nv)return;let p=!f.o,y=n(f.p),x=o(y,1.5);if(x.length<2)return;let M=f.b?h:l,A=x[x.length-1].s,w=[],P=0;for(let T=0;T<f.p.length;T++){T&&(P+=Math.hypot(y[T][0]-y[T-1][0],y[T][1]-y[T-1][1]));let k=(d.get(m(f.p[T]))||[]).filter(G=>G!==g);if(!k.length)continue;let K=Math.max(...k.map(G=>this.d.road[G].w));(T===0||T===f.p.length-1)&&k.length===1&&this.d.road[k[0]].c===f.c&&Math.abs(this.d.road[k[0]].w-f.w)<.1||w.push([P-K/2-3,P+K/2+3])}if(A<14)return;let L=f.b?.05:.04,b=f.w>=10;if(f.c>=2||f.c===1&&f.w>=6.5)if(b){p&&(s(x,.14,.12,c,M,L,0,0,w),s(x,-.14,.12,c,M,L,0,0,w));let T=p?[f.w/4,-f.w/4]:[f.w/6,-f.w/6];for(let k of T)s(x,k,.13,c,M,L,3,6,w)}else(p||f.w>=7)&&s(x,0,.13,c,M,L,3,f.c>=3?4.5:6,w);if(f.c>=3)for(let T of[f.w/2-.3,-(f.w/2-.3)])s(x,T,.12,c,M,L,0,0,w)});for(let f of this.d.cross){let g=o(n(f),.25);for(let p=0;p<g.length-1;p++){let y=g[p];if(y.s%1>.5)continue;let x=g[p+1],M=(y.x+x.x)/2,A=(y.z+x.z)/2;if(this.maskAt(M,A)[0]<.5)continue;let w=1.7,P=l(M,A)+.045;a([y.x+y.nx*w,P,y.z+y.nz*w],[x.x+x.nx*w,P,x.z+x.nz*w],[x.x-x.nx*w,P,x.z-x.nz*w],[y.x-y.nx*w,P,y.z-y.nz*w],[.82,.82,.78])}}this.tramLines=[];for(let f of this.d.tram){let g=n(f.p),p=o(g,1.5);if(p.length<2)continue;let y=f.b?h:l;for(let x of[-.5,.5])s(p,x,.075,u,y,.05),s(p,x+.07*Math.sign(x),.05,[.05,.05,.055],y,.048);this.tramLines.push({pts:g,b:f.b})}let v=new Et({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});v.onBeforeCompile=f=>Bi(f,"","",`{ diffuseColor.rgb *= 0.82 + 0.3 * vnoise(vWP.xz * 6.0);   // worn paint
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 1.6; }`),this.markMat=v;for(let f of i.values()){let g=new wt,p=new Float32Array(f.p.length);for(let x=1;x<p.length;x+=3)p[x]=1;g.setAttribute("position",new Qe(f.p,3)),g.setAttribute("normal",new Nt(p,3)),g.setAttribute("color",new Qe(f.c,3)),g.computeBoundingSphere();let y=new tt(g,v);y.receiveShadow=!0,this.group.add(y)}}buildFountains(){let e=[],t=[],i=[];this.fountains=[];for(let r of this.d.water){let a=r.map(f=>[f[0]/10,f[1]/10]);if(a.length>60)continue;let n=0,o=0,s=1e9;for(let[f,g]of a)n+=f,o+=g,s=Math.min(s,this.hAt(f,g));if(n/=a.length,o/=a.length,s<this.water+1.5||n<0||o<0||n>this.W||o>this.H)continue;let l=s+.32,h=[];for(let f of a)h.push(f[0],f[1]);let c=(0,Qn.default)(h);for(let f=0;f<c.length;f++)i.push(h[c[f]*2],l,h[c[f]*2+1]);let u=0;for(let f=0;f<a.length;f++){let g=a[f],p=a[(f+1)%a.length];u+=g[0]*p[1]-p[0]*g[1]}let d=u>0?1:-1,m=s+.5,v=.28;for(let f=0;f<a.length;f++){let g=a[f],p=a[(f+1)%a.length],y=Math.hypot(p[0]-g[0],p[1]-g[1]);if(y<.05)continue;let x=(p[1]-g[1])/y*d*v,M=-(p[0]-g[0])/y*d*v,A=[g[0],s-1,g[1]],w=[p[0],s-1,p[1]],P=[g[0],m,g[1]],L=[p[0],m,p[1]],b=[g[0]+x,m,g[1]+M],T=[p[0]+x,m,p[1]+M],k=[g[0]+x,s-1,g[1]+M],K=[p[0]+x,s-1,p[1]+M],re=(G,Y,J,Q)=>{e.push(...G,...Y,...J,...G,...J,...Q);for(let E=0;E<6;E++)t.push(.56,.54,.5)};re(A,w,L,P),re(P,L,T,b),re(b,T,K,k),this.colliders.add({ax:g[0],az:g[1],bx:p[0],bz:p[1],y0:s-2,y1:m+.4,kind:"w"},g[0],g[1],p[0],p[1])}this.fountains.push({x:n,z:o,y:l,area:Math.abs(u)/2})}if(i.length){let r=new wt;r.setAttribute("position",new Qe(i,3)),r.computeVertexNormals();let a=new tt(r,this.waterMat);a.receiveShadow=!0,this.group.add(a)}if(e.length){let r=new wt;r.setAttribute("position",new Qe(e,3)),r.setAttribute("color",new Qe(t,3)),r.computeVertexNormals();let a=new Et({vertexColors:!0,side:Xt,flatShading:!0});a.onBeforeCompile=o=>Bi(o,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*3.0+vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }");let n=new tt(r,a);n.castShadow=n.receiveShadow=!0,this.group.add(n)}}buildBuildings(){let e=Math.ceil(this.W/128),t=Math.ceil(this.H/128),i=[],r=(d,m)=>{let v=Ze(Math.floor(d/128),0,e-1),f=Ze(Math.floor(m/128),0,t-1)*e+v;return i[f]||(i[f]={wp:[],wn:[],wc:[],wf:[],wd:[],rp:[],rc:[]})},a=["#e9dcb8","#e8cf9a","#f0e6d0","#d9b99a","#e6c3a8","#cfd6c4","#e2d3a0","#f2ead8","#c9b79a","#ddc6c0","#e8d8b0","#d7c7a4","#bfc9c9","#efd9b8"],n=["#b8bcc0","#9aa4ac","#c8c4bc","#a9b3b5","#d0ccc4"],o=["#9a4a32","#a85a3a","#8a3e2c","#7d4434","#b0603f","#94503a","#53565c","#5c5450"],s=new ke,l={old:0,modern:1,util:2,church:3,castle:4,roof:5,ruin:2};this.pylon=[],this.gates=[];let h=0;for(let d of this.d.bld){let m=d.o.map(Q=>[Q[0]/10,Q[1]/10]),v=(d.i||[]).map(Q=>Q.map(E=>[E[0]/10,E[1]/10]));if(d.k==="pylon"){this.pylon.push(m);continue}if(d.n==="UFO")continue;h++;let f=0,g=0;for(let Q of m)f+=Q[0],g+=Q[1];f/=m.length,g/=m.length;let p=1e9,y=-1e9;for(let Q of m){let E=this.hAt(Q[0],Q[1]);p=Math.min(p,E),y=Math.max(y,E)}let x=Ct(h*977+13),M=d.h,A=p+Math.max(M,y-p+2.5),w=d.g&&M>6&&d.m<.5,P=w?p+4.3:d.m>.5?p+d.m:p-3,L=r(f,g);d.c?s.set(d.c):d.k==="modern"?s.set(n[x*n.length|0]):d.k==="util"?s.set("#a8a296"):d.k==="church"?s.set("#eee4cc"):s.set(a[x*a.length|0]);let b=s.r,T=s.g,k=s.b,K=d.l||Math.max(1,Math.round(M/3.4)),re=d.t?7.5:Ze(M/Math.max(1,K),2.8,5.5),G=l[d.k]??0,Y=d.k==="modern"?2.6:d.k==="church"?5:3.4,J=[m,...v];for(let Q of J){let E=Q.length,R=0;for(let V=0;V<E;V++){let j=Q[V],Z=Q[(V+1)%E];R+=j[0]*Z[1]-Z[0]*j[1]}let N=Q===m,I=(R>0?-1:1)*(N?1:-1),O=d.p?.06:0;for(let V=0;V<E;V++){let j=Q[V],Z=Q[(V+1)%E],me=Math.hypot(Z[0]-j[0],Z[1]-j[1]);if(me<.05)continue;let _e=me<2.2?0:Math.max(1,Math.round(me/Y)),Fe=P-p,Te=A-p,Pe=(Z[1]-j[1])/me*I*O,B=-(Z[0]-j[0])/me*I*O,pe=_e?0:-1,ge=_e||-1,ye=me/Math.max(1,_e),xe=[[j[0]+Pe,P,j[1]+B,pe,Fe],[Z[0]+Pe,P,Z[1]+B,ge,Fe],[Z[0]+Pe,A,Z[1]+B,ge,Te],[j[0]+Pe,P,j[1]+B,pe,Fe],[Z[0]+Pe,A,Z[1]+B,ge,Te],[j[0]+Pe,A,j[1]+B,pe,Te]],Ue=(Z[1]-j[1])/me,Me=-(Z[0]-j[0])/me;for(let F of xe)L.wp.push(F[0],F[1],F[2]),L.wn.push(Ue,0,Me),L.wc.push(b,T,k),L.wf.push(F[3],F[4],ye),L.wd.push(re,G,x,A-p);if(d.m<2&&!w&&d.k!=="roof"&&d.k!=="ruin"){let F={ax:j[0],az:j[1],bx:Z[0],bz:Z[1],y0:P-50,y1:A,kind:"b"};this.colliders.add(F,j[0],j[1],Z[0],Z[1])}}}if(w){this.gates.push({outer:m,gmin:p,bot:P});let Q=[];for(let R of m)Q.push(R[0],R[1]);let E=(0,Qn.default)(Q);for(let R=0;R<E.length;R++)L.rp.push(Q[E[R]*2],P,Q[E[R]*2+1]),L.rc.push(.35,.33,.3)}if(d.r>.3&&d.s!=="f")this.pitchedRoof(m,v,A,d,x,L.rp,L.rc,o);else{let Q=[],E=[];for(let I of m)Q.push(I[0],I[1]);for(let I of v){E.push(Q.length/2);for(let O of I)Q.push(O[0],O[1])}let R=(0,Qn.default)(Q,E);d.rc?s.set(d.rc):s.set(d.k==="modern"?"#5d5f63":d.k==="util"?"#6c6a66":"#615c58");let N=.9+x*.2;for(let I=0;I<R.length;I++)L.rp.push(Q[R[I]*2],A,Q[R[I]*2+1]),L.rc.push(s.r*N,s.g*N,s.b*N);if(d.m>.5)for(let I=R.length-1;I>=0;I--)L.rp.push(Q[R[I]*2],P,Q[R[I]*2+1]),L.rc.push(s.r*.6,s.g*.6,s.b*.6)}}let c=new Et({vertexColors:!0,side:Xt});c.onBeforeCompile=d=>Bi(d,"attribute vec3 fuv; attribute vec4 fdat; varying vec3 vF; varying vec4 vD; //MAIN vF = fuv; vD = fdat;",`varying vec3 vF; varying vec4 vD;
          float hdBox(vec2 p, vec2 lo, vec2 hi, vec2 aa){
            vec2 a = smoothstep(lo - aa, lo + aa, p), b = 1.0 - smoothstep(hi - aa, hi + aa, p);
            return a.x * a.y * b.x * b.y;
          }
          float hdBand(float y, float lo, float hi, float aa){ return smoothstep(lo - aa, lo + aa, y) * (1.0 - smoothstep(hi - aa, hi + aa, y)); }`,`{
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

          // ── plaster
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

          // ── glass: dark room behind + reflection of the sky
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

          // ── night: lit rooms and shop windows
          vec3 wl = mix(vec3(1.0, 0.70, 0.36), vec3(0.80, 0.88, 1.0), step(0.86, rnd2));
          float roomVar = 0.55 + 0.45 * vnoise(q * 1.6 + rnd * 30.0) + 0.25 * curtain;
          totalEmissiveRadiance += wl * lit * roomVar * 1.05 * uNight;
          totalEmissiveRadiance += vec3(1.0, 0.86, 0.66) * shopGlass * step(0.22, rnd2) * (0.5 + 0.7 * vnoise(q * vec2(2.5, 1.2) + rndB * 20.0)) * 1.25 * uNight;
          vec3 lamp = lampAt(vWP);
          totalEmissiveRadiance += diffuseColor.rgb * lamp * uNight * 1.3 * (1.0 - smoothstep(2.0, 9.0, vF.y));
        }`);let u=new Et({vertexColors:!0,side:Xt,flatShading:!0});u.onBeforeCompile=d=>Bi(d,"","",`{
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
        }`),this.chunks=[];for(let d=0;d<i.length;d++){let m=i[d];if(!m)continue;let v=new ii;if(m.wp.length){let f=new wt;f.setAttribute("position",new Qe(m.wp,3)),f.setAttribute("normal",new Qe(m.wn,3)),f.setAttribute("color",new Qe(m.wc,3)),f.setAttribute("fuv",new Qe(m.wf,3)),f.setAttribute("fdat",new Qe(m.wd,4)),f.computeBoundingSphere();let g=new tt(f,c);g.castShadow=g.receiveShadow=!0,v.add(g)}if(m.rp.length){let f=new wt;f.setAttribute("position",new Qe(m.rp,3)),f.setAttribute("color",new Qe(m.rc,3)),f.computeVertexNormals(),f.computeBoundingSphere();let g=new tt(f,u);g.castShadow=g.receiveShadow=!0,v.add(g)}this.group.add(v),this.chunks.push(v)}this.buildPylon(),this.buildGates()}pitchedRoof(e,t,i,r,a,n,o,s){let l=[],h=[];for(let L of e)l.push(L[0],L[1]);for(let L of t){h.push(l.length/2);for(let b of L)l.push(b[0],b[1])}let c=(0,Qn.default)(l,h),u=[];for(let L=0;L<l.length;L+=2)u.push([l[L],l[L+1]]);let d=[];for(let L of[e,...t])for(let b=0;b<L.length;b++)d.push([L[b],L[(b+1)%L.length]]);let m=0;for(let L=0;L<e.length;L++){let b=e[L],T=e[(L+1)%e.length];m+=b[0]*T[1]-T[0]*b[1]}m=Math.abs(m/2);let v=Math.max(2.2,Math.sqrt(m)/14),f=[];for(let L=0;L<c.length;L+=3)f.push([c[L],c[L+1],c[L+2]]);let g=new Map,p=(L,b)=>{let T=L<b?L*1e6+b:b*1e6+L,k=g.get(T);return k===void 0&&(k=u.length,u.push([(u[L][0]+u[b][0])/2,(u[L][1]+u[b][1])/2]),g.set(T,k)),k},y=(L,b)=>Math.hypot(u[L][0]-u[b][0],u[L][1]-u[b][1])>v;for(let L=0;L<7;L++){let b=!1,T=[];for(let k of f){let K=y(k[0],k[1]),re=y(k[1],k[2]),G=y(k[2],k[0]),Y=K+re+G;if(!Y){T.push(k);continue}b=!0;let[J,Q,E]=k,R=[K,re,G];if(Y===1){for(;!R[0];)[J,Q,E]=[Q,E,J],R=[R[1],R[2],R[0]];let N=p(J,Q);T.push([J,N,E],[N,Q,E])}else if(Y===2){for(;R[2];)[J,Q,E]=[Q,E,J],R=[R[1],R[2],R[0]];let N=p(J,Q),I=p(Q,E);T.push([J,N,I],[N,Q,I],[J,I,E])}else{let N=p(J,Q),I=p(Q,E),O=p(E,J);T.push([J,N,O],[N,Q,I],[O,I,E],[N,I,O])}}if(f=T,!b)break}let x=u.map(([L,b])=>{let T=1e9;for(let[k,K]of d){let re=K[0]-k[0],G=K[1]-k[1],Y=re*re+G*G||1e-9,J=((L-k[0])*re+(b-k[1])*G)/Y;J=J<0?0:J>1?1:J;let Q=k[0]+re*J-L,E=k[1]+G*J-b,R=Q*Q+E*E;R<T&&(T=R)}return Math.sqrt(T)}),M=.01;for(let L of x)M=Math.max(M,L);let A=r.r,w;r.s==="d"?w=x.map(L=>A*Math.sqrt(Math.max(0,1-(1-L/M)**2))):r.s==="p"?w=x.map(L=>A*L/M):w=x.map(L=>Math.min(L*.82,A+1.2));let P=new ke;r.rc?P.set(r.rc):P.set(s[Ct(a*1e6|0)*s.length|0]);for(let L of f){let b=.88+Ct(L[0]*31+L[1])*.1;for(let T of L)n.push(u[T][0],i+w[T],u[T][1]),o.push(P.r*b,P.g*b,P.b*b)}}buildGates(){let e=new Et({color:14209212});for(let t of this.gates){let i=t.outer,r=0,a=0;for(let o of i)r+=o[0],a+=o[1];r/=i.length,a/=i.length;let n=i.slice().sort((o,s)=>Math.hypot(s[0]-r,s[1]-a)-Math.hypot(o[0]-r,o[1]-a)).slice(0,4);for(let o of n){let s=o[0]+(r-o[0])*.18,l=o[1]+(a-o[1])*.18,h=t.bot-t.gmin+3,c=new tt(new Kt(1.8,h,1.8),e);c.position.set(s,t.gmin-3+h/2,l),c.castShadow=c.receiveShadow=!0,this.group.add(c),this.colliders.add({ax:s-.9,az:l,bx:s+.9,bz:l,y0:-50,y1:t.bot,kind:"b"},s-1,l-1,s+1,l+1),this.colliders.add({ax:s,az:l-.9,bx:s,bz:l+.9,y0:-50,y1:t.bot,kind:"b"},s-1,l-1,s+1,l+1)}}}buildPylon(){if(this.pylon.length<2)return;let e=this.pylon.map(v=>{let f=0,g=0;for(let p of v)f+=p[0],g+=p[1];return[f/v.length,g/v.length]}),t=new ii,i=new Et({color:9212310}),r=this.water+84,a=(e[0][0]+e[1][0])/2,n=(e[0][1]+e[1][1])/2,o=14,s=[];for(let v of e){let f=this.hAt(v[0],v[1])-2,g=a+(v[0]-a)*.55,p=n+o,y=new H(v[0],f,v[1]),x=new H(g,r,p),M=y.distanceTo(x),A=new Kt(3.2,M,4.2),w=new tt(A,i);w.position.copy(y).add(x).multiplyScalar(.5),w.quaternion.setFromUnitVectors(new H(0,1,0),x.clone().sub(y).normalize()),w.castShadow=!0,t.add(w),s.push(x),this.colliders.add({ax:v[0]-2,az:v[1]-2,bx:v[0]+2,bz:v[1]+2,y0:-50,y1:f+30,kind:"b"},v[0]-2,v[1]-2,v[0]+2,v[1]+2),this.colliders.add({ax:v[0]+2,az:v[1]-2,bx:v[0]-2,bz:v[1]+2,y0:-50,y1:f+30,kind:"b"},v[0]-2,v[1]-2,v[0]+2,v[1]+2)}let l=a,h=n+o,c=[[0,-2.2],[6,-2.6],[13,-1.6],[16.5,.2],[15.5,1.4],[12,2.2],[6,2.8],[0,3]].map(([v,f])=>new we(v,f)),u=new tt(new Tc(c,40),new Et({color:10133670}));u.position.set(l,r+3,h),u.castShadow=!0,t.add(u);let d=new tt(new Uc(15.8,.35,6,48),new Li({color:16765578}));d.rotation.x=Math.PI/2,d.position.set(l,r+3.3,h),this.ufoRing=d,t.add(d);let m=this.bridges.find(v=>v.big);if(m){let v=new Et({color:13159632}),f=m.s.filter(p=>Math.hypot(p.x-a,p.z-n)>40&&Math.hypot(p.x-a,p.z-n)<240&&p.z<n),g=[];for(let p=0;p<f.length;p+=Math.max(1,Math.floor(f.length/8)))g.push(f[p]);for(let p of g)for(let y of[-1,1]){let x=s[y<0?0:1],M=new H(rt(x.x,a,.2),rt(r-12,r-40,Math.hypot(p.x-a,p.z-n)/240),rt(x.z,n,.6)),A=new H(p.x+y*9.5,p.y+.6,p.z),w=M.distanceTo(A),P=new tt(new Kt(.35,w,.35),v);P.position.copy(M).add(A).multiplyScalar(.5),P.quaternion.setFromUnitVectors(new H(0,1,0),A.clone().sub(M).normalize()),t.add(P)}}this.group.add(t),this.ufoPos=new H(l,r+3,h)}buildWalls(){let e=[],t=[],i=new ke,r=(s,l,h,c,u,d,m,v,f)=>{let g=Math.hypot(h-s,c-l);if(g<.05)return;let p=-(c-l)/g*f*.5,y=(h-s)/g*f*.5,x=[[s+p,l+y],[h+p,c+y],[h-p,c-y],[s-p,l-y]],M=(P,L,b,T)=>{e.push(...P,...L,...b,...P,...b,...T);for(let k=0;k<6;k++)t.push(i.r,i.g,i.b)},A=P=>P===0||P===3?u:d,w=P=>P===0||P===3?m:v;for(let P=0;P<4;P++){let L=(P+1)%4;M([x[P][0],A(P),x[P][1]],[x[L][0],A(L),x[L][1]],[x[L][0],w(L),x[L][1]],[x[P][0],w(P),x[P][1]])}M([x[0][0],w(0),x[0][1]],[x[1][0],w(1),x[1][1]],[x[2][0],w(2),x[2][1]],[x[3][0],w(3),x[3][1]])};for(let s of this.d.walls){let l=s.p.map(c=>[c[0]/10,c[1]/10]),h=s.k==="c"?2.4:s.k==="r"?.8:.45;i.set(s.k==="c"?"#a39a88":s.k==="r"?"#8f887a":"#a8a092");for(let c=0;c<l.length-1;c++){let[u,d]=l[c],[m,v]=l[c+1],f=this.hAt(u,d),g=this.hAt(m,v),p=Math.min(s.h,s.k==="c"?9:4);if(r(u,d,m,v,f-2,g-2,f+p,g+p,h),this.colliders.add({ax:u,az:d,bx:m,bz:v,y0:Math.min(f,g)-3,y1:Math.max(f,g)+p,kind:"w"},u,d,m,v),s.k==="c"){let y=Math.hypot(m-u,v-d);for(let x=.6;x<y-.6;x+=2.4){let M=x/y,A=Math.min(1,(x+1.2)/y),w=u+(m-u)*M,P=d+(v-d)*M,L=u+(m-u)*A,b=d+(v-d)*A,T=rt(f,g,M)+p,k=rt(f,g,A)+p;r(w,P,L,b,T,k,T+1.1,k+1.1,h)}}}}for(let s of this.bridges){let l=s.s;i.set(s.big?"#7d8287":"#8d877c");for(let h=0;h<l.length-1;h++){let c=l[h],u=l[h+1],d=Math.hypot(u.x-c.x,u.z-c.z)||1,m=-(u.z-c.z)/d,v=(u.x-c.x)/d,f=s.hw,g=(b,T,k,K,re)=>{e.push(...b,...T,...k,...b,...k,...K);for(let G=0;G<6;G++)t.push(re[0],re[1],re[2])},p=[.24,.24,.26],y=[i.r,i.g,i.b],x=[c.x+m*f,c.y,c.z+v*f],M=[c.x-m*f,c.y,c.z-v*f],A=[u.x+m*f,u.y,u.z+v*f],w=[u.x-m*f,u.y,u.z-v*f],P=s.big?2.2:1.1,L=b=>[b[0],b[1]-P,b[2]];if(g(x,A,w,M,p),g(L(x),L(M),L(w),L(A),y.map(b=>b*.6)),g(x,L(x),L(A),A,y),g(M,w,L(w),L(M),y),s.big){let b=[c.x+m*.15,c.y+.02,c.z+v*.15],T=[c.x-m*.15,c.y+.02,c.z-v*.15],k=[u.x-m*.15,u.y+.02,u.z-v*.15],K=[u.x+m*.15,u.y+.02,u.z+v*.15];g(b,K,k,T,[.8,.78,.7])}for(let b of[1,-1]){let T=[c.x+m*f*b,c.y,c.z+v*f*b],k=[u.x+m*f*b,u.y,u.z+v*f*b],K=(re,G)=>[re[0],re[1]+G,re[2]];g(T,k,K(k,1.1),K(T,1.1),[.55,.57,.6]),this.colliders.add({ax:T[0],az:T[2],bx:k[0],bz:k[2],y0:Math.min(c.y,u.y)-1,y1:Math.max(c.y,u.y)+1.4,kind:"r"},T[0],T[2],k[0],k[2])}}}let a=new wt;a.setAttribute("position",new Qe(e,3)),a.setAttribute("color",new Qe(t,3)),a.computeVertexNormals();let n=new Et({vertexColors:!0,side:Xt,flatShading:!0});n.onBeforeCompile=s=>Bi(s,"","","{ diffuseColor.rgb *= 0.85 + 0.3*vnoise(vWP.xz*2.0+vWP.y); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight; }");let o=new tt(a,n);o.castShadow=o.receiveShadow=!0,this.group.add(o)}buildProps(){let e=this.d.trees.map(p=>[p[0]/10,p[1]/10]).filter(([p,y])=>p>0&&y>0&&p<this.W&&y<this.H);for(let p of this.d.green){if(p.length<6)continue;let y=p.map(b=>[b[0]/10,b[1]/10]),x=1e9,M=1e9,A=-1e9,w=-1e9;for(let[b,T]of y)x=Math.min(x,b),M=Math.min(M,T),A=Math.max(A,b),w=Math.max(w,T);let P=(A-x)*(w-M);if(P<1500)continue;let L=Math.min(160,P/260);for(let b=0;b<L;b++){let T=rt(x,A,Ct(b*7+(x|0))),k=rt(M,w,Ct(b*13+(M|0)));Xc(T,k,y)&&T>0&&k>0&&T<this.W&&k<this.H&&e.push([T,k])}}let t=e.length,i=new _a(.18,.28,3.2,5);i.translate(0,1.6,0);let r=new Nc(2.6,1);r.translate(0,4.9,0);let a=new Rr(i,new Et({color:4864040}),t),n=new Et({color:16777215,flatShading:!0});n.onBeforeCompile=p=>Bi(p,"","","{ diffuseColor.rgb *= 0.7 + 0.55*vnoise(vWP.xz*1.3 + vWP.y*2.0); totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.8; }");let o=new Rr(r,n,t),s=new at,l=new ci,h=new H,c=new H,u=new ke;this.treePts=e,e.forEach(([p,y],x)=>{let M=.75+Ct(x*3+1)*.6,A=this.hAt(p,y);l.setFromAxisAngle(new H(0,1,0),Ct(x)*6.28),s.compose(c.set(p,A,y),l,h.set(M,M*(.9+Ct(x*5)*.3),M)),a.setMatrixAt(x,s),o.setMatrixAt(x,s),u.setHSL(.22+Ct(x*11)*.08,.38+Ct(x*17)*.2,.22+Ct(x*19)*.1),o.setColorAt(x,u),this.colliders.add({ax:p-.25,az:y,bx:p+.25,bz:y,y0:A-2,y1:A+3,kind:"t"},p-.3,y-.3,p+.3,y+.3)}),a.castShadow=o.castShadow=!0,o.receiveShadow=!0,this.group.add(a,o);let d=this.lampPts.filter(([p,y])=>p>0&&y>0&&p<this.W&&y<this.H&&this.surfaceY(p,y)===this.hAt(p,y)),m=new _a(.07,.1,4.6,5);m.translate(0,2.3,0);let v=new Co(.28,6,4);v.translate(0,4.7,0);let f=new Rr(m,new Et({color:2895408}),d.length);this.lampHeadMat=new Li({color:16767392});let g=new Rr(v,this.lampHeadMat,d.length);d.forEach(([p,y],x)=>{s.makeTranslation(p,this.hAt(p,y),y),f.setMatrixAt(x,s),g.setMatrixAt(x,s),this.colliders.add({ax:p-.1,az:y,bx:p+.1,bz:y,y0:-50,y1:999,kind:"p"},p-.2,y-.2,p+.2,y+.2)}),f.castShadow=!0,this.group.add(f,g)}buildRoadGraph(){let e=this.d.road.filter(s=>s.c>=1&&s.c<=4&&!s.nv),t=new Map,i=s=>s[0]*1e5+s[1];for(let s of e)s.p.forEach((l,h)=>{let c=i(l);t.set(c,(t.get(c)||0)+(h===0||h===s.p.length-1?2:1))});let r=new Map,a=s=>{let l=i(s),h=r.get(l);return h||(h={x:s[0]/10,z:s[1]/10,out:[],inn:[],id:r.size,sig:null},r.set(l,h)),h},n=[];for(let s of e){let l=0;for(let h=1;h<s.p.length;h++)if(h===s.p.length-1||t.get(i(s.p[h]))>1){let c=s.p.slice(l,h+1).map(f=>[f[0]/10,f[1]/10]),u=a(s.p[l]),d=a(s.p[h]),m=(f,g,p)=>{let y=[],x=0;y.push(0);for(let A=1;A<p.length;A++)x+=Math.hypot(p[A][0]-p[A-1][0],p[A][1]-p[A-1][1]),y.push(x);let M={a:f,b:g,p,cum:y,L:x,r:s,lane:s.o?s.w>8?s.w/4:0:Math.min(s.w/4,1.9),v:[6,9,12,14,17][s.c]||9,id:n.length};return n.push(M),f.out.push(M),g.inn.push(M),M},v=m(u,d,c);if(!s.o){let f=m(d,u,c.slice().reverse());v.rev=f,f.rev=v}l=h}if(s.n)for(let h=0;h<s.p.length-1;h++){let c={ax:s.p[h][0]/10,az:s.p[h][1]/10,bx:s.p[h+1][0]/10,bz:s.p[h+1][1]/10,hw:s.w/2,n:s.n};this.names.add(c,c.ax,c.az,c.bx,c.bz)}}for(let s of this.d.road)if((s.c===5||s.c===0||s.nv)&&s.n)for(let l=0;l<s.p.length-1;l++){let h={ax:s.p[l][0]/10,az:s.p[l][1]/10,bx:s.p[l+1][0]/10,bz:s.p[l+1][1]/10,hw:s.w/2,n:s.n};this.names.add(h,h.ax,h.az,h.bx,h.bz)}let o=[...r.values()];this.sigs=[];for(let s of this.d.signals){let l=s[0]/10,h=s[1]/10,c=null,u=18;for(let d of o){let m=Math.hypot(d.x-l,d.z-h);m<u&&d.out.length+d.inn.length>=3&&(u=m,c=d)}c&&!c.sig&&(c.sig={phase:Ct(c.id)*30,x:l,z:h},this.sigs.push(c))}this.edgeGrid=new Pr(this.W,this.H,24);for(let s of n)for(let l=0;l<s.p.length-1;l++){let h={e:s,k:l,ax:s.p[l][0],az:s.p[l][1],bx:s.p[l+1][0],bz:s.p[l+1][1]};this.edgeGrid.add(h,h.ax,h.az,h.bx,h.bz)}this.nodes=o,this.edges=n.filter(s=>s.L>.5)}nearestEdge(e,t,i=40,r=null){let a=this.edgeGrid.query(e,t,i,this._tmp),n=null,o=i,s=0;for(let l of a){let h=$n(e,t,l.ax,l.az,l.bx,l.bz,this._c),c=Math.hypot(e-h.x,t-h.z);if(r!==null){let u=Math.atan2(l.bx-l.ax,l.bz-l.az),d=Math.abs((u-r+Math.PI*3)%(Math.PI*2)-Math.PI);c+=d*6}c<o&&(o=c,n=l,s=l.e.cum[l.k]+h.t*(l.e.cum[l.k+1]-l.e.cum[l.k]))}return n?{e:n.e,s,d:o}:null}signalState(e,t,i){if(!e.sig)return!0;let r=(i+e.sig.phase)%30,a=Math.abs(Math.cos(t))>Math.abs(Math.sin(t));return r<12?a:r<15?!1:r<27?!a:!1}buildPedGraph(){let e=[];for(let o of this.d.foot)e.push(o.p);for(let o of this.d.cross)e.push(o);for(let o of this.d.steps)e.push(o);for(let o of this.d.road)o.c===5&&e.push(o.p);let t=o=>o[0]*1e5+o[1],i=new Map;for(let o of e)o.forEach((s,l)=>i.set(t(s),(i.get(t(s))||0)+(l===0||l===o.length-1?2:1)));let r=new Map,a=o=>{let s=t(o),l=r.get(s);return l||(l={x:o[0]/10,z:o[1]/10,e:[]},r.set(s,l)),l},n=[];for(let o of e){let s=0;for(let l=1;l<o.length;l++)if(l===o.length-1||i.get(t(o[l]))>1){let h=o.slice(s,l+1).map(d=>[d[0]/10,d[1]/10]),c=0,u=[0];for(let d=1;d<h.length;d++)c+=Math.hypot(h[d][0]-h[d-1][0],h[d][1]-h[d-1][1]),u.push(c);if(c>.5){let d={a:a(o[s]),b:a(o[l]),p:h,cum:u,L:c};d.a.e.push(d),d.b.e.push(d),n.push(d)}s=l}}for(let o of this.d.road)if(!(o.c<1||o.c>4||o.b))for(let s of[1,-1]){let l=(o.w/2+1.1)*s,h=o.p.map((f,g)=>{let p=o.p[Math.max(0,g-1)],y=o.p[Math.min(o.p.length-1,g+1)],x=y[0]-p[0],M=y[1]-p[1],A=Math.hypot(x,M)||1;return[f[0]/10-M/A*l,f[1]/10+x/A*l]}),c=0,u=[0];for(let f=1;f<h.length;f++)c+=Math.hypot(h[f][0]-h[f-1][0],h[f][1]-h[f-1][1]),u.push(c);if(c<8)continue;let d={x:h[0][0],z:h[0][1],e:[]},m={x:h[h.length-1][0],z:h[h.length-1][1],e:[]},v={a:d,b:m,p:h,cum:u,L:c,sw:1};d.e.push(v),m.e.push(v),n.push(v)}this.pedEdges=n,this.pedGrid=new Pr(this.W,this.H,30);for(let o of n){let s=o.p[0],l=o.p[o.p.length-1];this.pedGrid.add(o,Math.min(s[0],l[0]),Math.min(s[1],l[1]),Math.max(s[0],l[0]),Math.max(s[1],l[1]))}}static at(e,t,i){let r=e.cum;t=Ze(t,0,e.L);let a=0;for(;a<r.length-2&&r[a+1]<t;)a++;let n=r[a+1]-r[a]||1,o=(t-r[a])/n,s=e.p[a],l=e.p[a+1];return i.x=s[0]+(l[0]-s[0])*o,i.z=s[1]+(l[1]-s[1])*o,i.dx=(l[0]-s[0])/n,i.dz=(l[1]-s[1])/n,i}collide(e,t,i,r,a){let n=this.colliders.query(e,t,r+.5,this._tmp),o=!1;a.nx=0,a.nz=0,a.d=0,a.kind=null;for(let s=0;s<n.length;s++){let l=n[s];if(i>l.y1||i+1.5<l.y0)continue;let h=$n(e,t,l.ax,l.az,l.bx,l.bz,this._c),c=e-h.x,u=t-h.z,d=Math.hypot(c,u);if(d<r){d<1e-4&&(c=-(l.bz-l.az),u=l.bx-l.ax);let m=Math.hypot(c,u)||1,v=r-d;e+=c/m*v,t+=u/m*v,a.nx+=c/m,a.nz+=u/m,a.d=Math.max(a.d,v),a.kind=l.kind,o=!0}}if(a.x=e,a.z=t,o){let s=Math.hypot(a.nx,a.nz)||1;a.nx/=s,a.nz/=s}return o}rayHit(e,t,i,r,a){let n=(e+i)/2,o=(t+r)/2,s=Math.hypot(i-e,r-t)/2+1,l=this.colliders.query(n,o,s,this._tmp),h=1;for(let c of l){if(c.kind!=="b"&&c.kind!=="w"||a>c.y1+.5)continue;let u=r_(e,t,i,r,c.ax,c.az,c.bx,c.bz);u!==null&&u<h&&(h=u)}return h}};function r_(e,t,i,r,a,n,o,s){let l=i-e,h=r-t,c=o-a,u=s-n,d=l*u-h*c;if(Math.abs(d)<1e-9)return null;let m=((a-e)*u-(n-t)*c)/d,v=((a-e)*h-(n-t)*l)/d;return m>=0&&m<=1&&v>=0&&v<=1?m:null}var a_=`
  out vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ya="precision highp float; in vec3 position; in vec2 uv;"+a_,n_=class{constructor(e){this.r=e;let t=e.capabilities.isWebGL2&&(e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float"));this.type=t?Xr:Ii,this.hdr=!!t,this.exposure={value:1},this.samples=4,this.sceneRT=new Ti(4,4,{type:this.type,depthBuffer:!0,minFilter:St,magFilter:St,samples:this.samples}),this.ldrRT=new Ti(4,4,{type:Ii,depthBuffer:!1,minFilter:St,magFilter:St}),this.bloom=[];for(let r=0;r<5;r++)this.bloom.push(new Ti(4,4,{type:this.type,depthBuffer:!1,minFilter:St,magFilter:St}));this.brightMat=new Wa({glslVersion:_r,uniforms:{tScene:{value:this.sceneRT.texture},uExposure:this.exposure,uTexel:{value:new we(1,1)}},vertexShader:Ya,fragmentShader:`precision highp float; uniform sampler2D tScene; uniform float uExposure; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 s = texture(tScene, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tScene, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tScene, vUv + uTexel*vec2(1.,1.)).rgb;
          s = min(s*0.25*uExposure, vec3(24.0));
          float l = max(s.r, max(s.g, s.b));
          float k = max(l - 1.15, 0.0) / max(l, 1e-4);
          o = vec4(s * k, 1.0); }`,depthTest:!1,depthWrite:!1}),this.downMat=new Wa({glslVersion:_r,uniforms:{tSrc:{value:null},uTexel:{value:new we(1,1)}},vertexShader:Ya,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv).rgb * 4.0;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb;
          c += texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb;
          o = vec4(c/8.0, 1.0); }`,depthTest:!1,depthWrite:!1}),this.upMat=new Wa({glslVersion:_r,uniforms:{tSrc:{value:null},uTexel:{value:new we(1,1)}},vertexShader:Ya,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main(){
          vec3 c = texture(tSrc, vUv + uTexel*vec2(-2.,0.)).rgb + texture(tSrc, vUv + uTexel*vec2(2.,0.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(0.,-2.)).rgb + texture(tSrc, vUv + uTexel*vec2(0.,2.)).rgb;
          c += 2.0*(texture(tSrc, vUv + uTexel*vec2(-1.,-1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,-1.)).rgb
                 + texture(tSrc, vUv + uTexel*vec2(-1.,1.)).rgb + texture(tSrc, vUv + uTexel*vec2(1.,1.)).rgb);
          o = vec4(c/12.0, 1.0); }`,depthTest:!1,depthWrite:!1,blending:Hr,transparent:!0}),this.gradeMat=new Wa({glslVersion:_r,uniforms:{tScene:{value:this.sceneRT.texture},tBloom:{value:this.bloom[0].texture},uExposure:this.exposure,uBloom:{value:.55},uSat:{value:1.1},uNight:At.uNight},vertexShader:Ya,fragmentShader:`precision highp float; uniform sampler2D tScene, tBloom; uniform float uExposure, uBloom, uSat, uNight; in vec2 vUv; out vec4 o;
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
          o = vec4(c, dot(c, vec3(0.299,0.587,0.114))); }`,depthTest:!1,depthWrite:!1}),this.finalMat=new Wa({glslVersion:_r,uniforms:{tSrc:{value:this.ldrRT.texture},uTexel:{value:new we(1,1)},uFxaa:{value:1},uFlash:{value:new vt(0,0,0,0)}},vertexShader:Ya,fragmentShader:`precision highp float; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFxaa; uniform vec4 uFlash; in vec2 vUv; out vec4 o;
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
          o = vec4(col, 1.0); }`,depthTest:!1,depthWrite:!1});let i=new wt;i.setAttribute("position",new Qe([-1,-1,0,3,-1,0,-1,3,0],3)),i.setAttribute("uv",new Qe([0,0,2,0,0,2],2)),this.quad=new tt(i,this.gradeMat),this.quad.frustumCulled=!1,this.qscene=new uo,this.qscene.add(this.quad),this.qcam=new Qs}setSize(e,t,i=1,r=4){let a=Math.max(16,Math.round(e*i)),n=Math.max(16,Math.round(t*i));r!==this.samples&&(this.samples=r,this.sceneRT.dispose(),this.sceneRT.samples=r),this.sceneRT.setSize(a,n),this.ldrRT.setSize(a,n);let o=a>>1,s=n>>1;for(let l of this.bloom)l.setSize(Math.max(2,o),Math.max(2,s)),o>>=1,s>>=1;return this.finalMat.uniforms.uTexel.value.set(1/a,1/n),this.finalMat.uniforms.uFxaa.value=r>0?0:1,this.w=a,this.h=n,this.cw=e,this.ch=t,{aspect:e/t}}_pass(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.qscene,this.qcam)}render(e,t){let i=this.r,r=this.bloom;i.setRenderTarget(this.sceneRT),i.render(e,t),this.brightMat.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._pass(this.brightMat,r[0]);for(let a=1;a<r.length;a++)this.downMat.uniforms.tSrc.value=r[a-1].texture,this.downMat.uniforms.uTexel.value.set(1/r[a-1].width,1/r[a-1].height),this._pass(this.downMat,r[a]);i.autoClear=!1;for(let a=r.length-1;a>0;a--)this.upMat.uniforms.tSrc.value=r[a].texture,this.upMat.uniforms.uTexel.value.set(.5/r[a].width,.5/r[a].height),this._pass(this.upMat,r[a-1]);i.autoClear=!0,this._pass(this.gradeMat,this.ldrRT),i.setRenderTarget(null),i.setViewport(0,0,this.cw,this.ch),this.quad.material=this.finalMat,i.render(this.qscene,this.qcam)}};function jc(e,t){if(t===ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Cs||t===jl){let i=e.getIndex();if(i===null){let o=[],s=e.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)o.push(l);e.setIndex(o),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===Cs)for(let o=1;o<=r;o++)a.push(i.getX(0)),a.push(i.getX(o)),a.push(i.getX(o+1));else for(let o=0;o<r;o++)o%2===0?(a.push(i.getX(o)),a.push(i.getX(o+1)),a.push(i.getX(o+2))):(a.push(i.getX(o+2)),a.push(i.getX(o+1)),a.push(i.getX(o)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=e.clone();return n.setIndex(a),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}var s_=class extends Ta{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new u_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new w_(t)})}load(e,t,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=qa.extractUrlBase(e);n=qa.resolveURL(l,this.path)}else n=qa.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},s=new Bc(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{a.parse(l,n,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,n={},o={},s=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(s.decode(new Uint8Array(e,0,4))===qc){try{n[ut.KHR_BINARY_GLTF]=new T_(e)}catch(h){r&&r(h);return}a=JSON.parse(n[ut.KHR_BINARY_GLTF].content)}else a=JSON.parse(s.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new F_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[c.name]=c,n[c.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let c=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(c){case ut.KHR_MATERIALS_UNLIT:n[c]=new h_;break;case ut.KHR_DRACO_MESH_COMPRESSION:n[c]=new E_(a,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:n[c]=new A_;break;case ut.KHR_MESH_QUANTIZATION:n[c]=new R_;break;default:u.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(n),l.setPlugins(o),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function o_(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},l_=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],o,s=new ke(16777215);n.color!==void 0&&s.setRGB(n.color[0],n.color[1],n.color[2],Ht);let l=n.range!==void 0?n.range:0;switch(n.type){case"directional":o=new Wc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Bx(s),o.distance=l;break;case"spot":o=new Gc(s),o.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle!==void 0?n.spot.innerConeAngle:0,n.spot.outerConeAngle=n.spot.outerConeAngle!==void 0?n.spot.outerConeAngle:Math.PI/4,o.angle=n.spot.outerConeAngle,o.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return o.position.set(0,0,0),o.decay=2,pr(o,n),n.intensity!==void 0&&(o.intensity=n.intensity),o.name=t.createUniqueName(n.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(t.cache,a,n)})}},h_=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Li}extendParams(e,t,i){let r=[];e.color=new ke(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],Ht),e.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,bt))}return Promise.all(r)}},c_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},u_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let o=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(o,o)}return Promise.all(a)}},d_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}},p_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let n=r.extensions[this.name];if(n.sheenColorFactor!==void 0){let o=n.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},f_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(a)}},m_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let o=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(o[0],o[1],o[2],Ht),Promise.all(a)}},g_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},v_=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",n.specularTexture));let o=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(o[0],o[1],o[2],Ht),n.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(a)}},x_=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(a)}},__=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Qi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(a)}},y_=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,n)}},M_=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],o=r.images[n.source],s=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(s=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},S_=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],o=r.images[n.source],s=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(s=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},b_=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let s=r.byteOffset||0,l=r.byteLength||0,h=r.count,c=r.byteStride,u=new Uint8Array(o,s,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(h,c,u,r.mode,r.filter).then(function(d){return d.buffer}):n.ready.then(function(){let d=new ArrayBuffer(h*c);return n.decodeGltfBuffer(new Uint8Array(d),h,c,u,r.mode,r.filter),d})})}else return null}},w_=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let s of r.primitives)if(s.mode!==_i.TRIANGLES&&s.mode!==_i.TRIANGLE_STRIP&&s.mode!==_i.TRIANGLE_FAN&&s.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],o={};for(let s in a)n.push(this.parser.getDependency("accessor",a[s]).then(l=>(o[s]=l,o[s])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(s=>{let l=s.pop(),h=l.isGroup?l.children:[l],c=s[0].count,u=[];for(let d of h){let m=new at,v=new H,f=new ci,g=new H(1,1,1),p=new Rr(d.geometry,d.material,c);for(let y=0;y<c;y++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,y),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,y),o.SCALE&&g.fromBufferAttribute(o.SCALE,y),p.setMatrixAt(y,m.compose(v,f,g));for(let y in o)if(y==="_COLOR_0"){let x=o[y];p.instanceColor=new mo(x.array,x.itemSize,x.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&d.geometry.setAttribute(y,o[y]);Rt.prototype.copy.call(p,d),this.parser.assignFinalMaterial(p),u.push(p)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]}))}},qc="glTF",Ka=12,Yc={JSON:1313821514,BIN:5130562},T_=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ka),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ka,a=new DataView(e,Ka),n=0;for(;n<r;){let o=a.getUint32(n,!0);n+=4;let s=a.getUint32(n,!0);if(n+=4,s===Yc.JSON){let l=new Uint8Array(e,Ka+n,o);this.content=i.decode(l)}else if(s===Yc.BIN){let l=Ka+n;this.body=e.slice(l,l+o)}n+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},E_=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,o={},s={},l={};for(let h in n){let c=Fo[h]||h.toLowerCase();o[c]=n[h]}for(let h in e.attributes){let c=Fo[h]||h.toLowerCase();if(n[h]!==void 0){let u=i.accessors[e.attributes[h]],d=Ea[u.componentType];l[c]=d.name,s[c]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(c,u){r.decodeDracoFile(h,function(d){for(let m in d.attributes){let v=d.attributes[m],f=s[m];f!==void 0&&(v.normalized=f)}c(d)},o,l,Ht,u)})})}},A_=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},R_=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Kc=class extends Xa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[a+n];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=o*2,l=o*3,h=r-t,c=(i-t)/h,u=c*c,d=u*c,m=e*l,v=m-l,f=-2*d+3*u,g=d-u,p=1-f,y=g-u+c;for(let x=0;x!==o;x++){let M=n[v+x+o],A=n[v+x+s]*h,w=n[m+x+o],P=n[m+x]*h;a[x]=p*M+y*A+f*w+g*P}return a}},C_=new ci,L_=class extends Kc{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return C_.fromArray(a).normalize().toArray(a),a}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zc={9728:Dt,9729:St,9984:_s,9985:pl,9986:sn,9987:Wi},Jc={33071:mi,33648:nn,10497:Wr},zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},P_={CUBICSPLINE:void 0,LINEAR:qr,STEP:Ra},Bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function I_(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),e.DefaultMaterial}function Ir(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function pr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function N_(e,t,i){let r=!1,a=!1,n=!1;for(let h=0,c=t.length;h<c;h++){let u=t[h];if(u.POSITION!==void 0&&(r=!0),u.NORMAL!==void 0&&(a=!0),u.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let o=[],s=[],l=[];for(let h=0,c=t.length;h<c;h++){let u=t[h];if(r){let d=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;o.push(d)}if(a){let d=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;s.push(d)}if(n){let d=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l)]).then(function(h){let c=h[0],u=h[1],d=h[2];return r&&(e.morphAttributes.position=c),a&&(e.morphAttributes.normal=u),n&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function U_(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function D_(e){let t,i=e.extensions&&e.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+ko(i.attributes):t=e.indices+":"+ko(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+ko(e.targets[r]);return t}function ko(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function Ho(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function O_(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var z_=new at,F_=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&a<98?this.textureLoader=new Dx(this.options.manager):this.textureLoader=new Hx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let o={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return Ir(a,o,r),pr(o,r),Promise.all(i._invokeAll(function(s){return s.afterRoot&&s.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let n=t[r].joints;for(let o=0,s=n.length;o<s;o++)e[n[o]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(n,o)=>{let s=this.associations.get(n);s!=null&&this.associations.set(o,s);for(let[l,h]of n.children.entries())a(h,o.children[l])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(qa.resolveURL(t.uri,r.path),a,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let n=zo[r.type],o=Ea[r.componentType],s=r.normalized===!0,l=new o(r.count*n);return Promise.resolve(new Nt(l,n,s))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let o=n[0],s=zo[r.type],l=Ea[r.componentType],h=l.BYTES_PER_ELEMENT,c=h*s,u=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,v,f;if(d&&d!==c){let g=Math.floor(u/d),p="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,y=t.cache.get(p);y||(v=new l(o,g*d,r.count*d/h),y=new Uv(v,d/h),t.cache.add(p,y)),f=new Dv(y,s,u%d/h,m)}else o===null?v=new l(r.count*s):v=new l(o,u,r.count*s),f=new Nt(v,s,m);if(r.sparse!==void 0){let g=zo.SCALAR,p=Ea[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,M=new p(n[1],y,r.sparse.count*g),A=new l(n[2],x,r.sparse.count*s);o!==null&&(f=new Nt(f.array.slice(),f.itemSize,f.normalized));for(let w=0,P=M.length;w<P;w++){let L=M[w];if(f.setX(L,A[w*s]),s>=2&&f.setY(L,A[w*s+1]),s>=3&&f.setZ(L,A[w*s+2]),s>=4&&f.setW(L,A[w*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let o=i.manager.getHandler(a.uri);o!==null&&(n=o)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],o=a.images[t],s=(o.uri||o.bufferView)+":"+n.sampler;if(this.textureCache[s])return this.textureCache[s];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=n.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let c=(a.samplers||{})[n.sampler]||{};return h.magFilter=Zc[c.magFilter]||St,h.minFilter=Zc[c.minFilter]||Wi,h.wrapS=Jc[c.wrapS]||Wr,h.wrapT=Jc[c.wrapT]||Wr,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[s]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());let n=r.images[e],o=self.URL||self.webkitURL,s=n.uri||"",l=!1;if(n.bufferView!==void 0)s=i.getDependency("bufferView",n.bufferView).then(function(c){l=!0;let u=new Blob([c],{type:n.mimeType});return s=o.createObjectURL(u),s});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(s).then(function(c){return new Promise(function(u,d){let m=u;t.isImageBitmapLoader===!0&&(m=function(v){let f=new hi(v);f.needsUpdate=!0,u(f)}),t.load(qa.resolveURL(c,a.path),m,void 0,d)})}).then(function(c){return l===!0&&o.revokeObjectURL(s),c.userData.mimeType=n.mimeType||O_(n.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),c});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let s=a.associations.get(n);n=a.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(n,o),a.associations.set(n,s)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,s=this.cache.get(o);s||(s=new gc,Ci.prototype.copy.call(s,i),s.color.copy(i.color),s.map=i.map,s.sizeAttenuation=!1,this.cache.add(o,s)),i=s}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,s=this.cache.get(o);s||(s=new cc,Ci.prototype.copy.call(s,i),s.color.copy(i.color),s.map=i.map,this.cache.add(o,s)),i=s}if(r||a||n){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),n&&(o+="flat-shading:");let s=this.cache.get(o);s||(s=i.clone(),a&&(s.vertexColors=!0),n&&(s.flatShading=!0),r&&(s.normalScale&&(s.normalScale.y*=-1),s.clearcoatNormalScale&&(s.clearcoatNormalScale.y*=-1)),this.cache.add(o,s),this.associations.set(s,this.associations.get(i))),i=s}e.material=i}getMaterialType(){return Kn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],n,o={},s=a.extensions||{},l=[];if(s[ut.KHR_MATERIALS_UNLIT]){let c=r[ut.KHR_MATERIALS_UNLIT];n=c.getMaterialType(),l.push(c.extendParams(o,a,t))}else{let c=a.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){let u=c.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ht),o.opacity=u[3]}c.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",c.baseColorTexture,bt)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),n=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Xt);let h=a.alphaMode||Bo.OPAQUE;if(h===Bo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Bo.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&n!==Li&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new we(1,1),a.normalTexture.scale!==void 0)){let c=a.normalTexture.scale;o.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&n!==Li&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==Li){let c=a.emissiveFactor;o.emissive=new ke().setRGB(c[0],c[1],c[2],Ht)}return a.emissiveTexture!==void 0&&n!==Li&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,bt)),Promise.all(l).then(function(){let c=new n(o);return a.name&&(c.name=a.name),pr(c,a),t.associations.set(c,{materials:e}),a.extensions&&Ir(r,c,a),c})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(o){return i[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(s){return Qc(s,o,t)})}let n=[];for(let o=0,s=e.length;o<s;o++){let l=e[o],h=D_(l),c=r[h];if(c)n.push(c.promise);else{let u;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?u=a(l):u=Qc(new wt,l,t),r[h]={primitive:l,promise:u},n.push(u)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],n=a.primitives,o=[];for(let s=0,l=n.length;s<l;s++){let h=n[s].material===void 0?I_(this.cache):this.getDependency("material",n[s].material);o.push(h)}return o.push(t.loadGeometries(n)),Promise.all(o).then(function(s){let l=s.slice(0,s.length-1),h=s[s.length-1],c=[];for(let d=0,m=h.length;d<m;d++){let v=h[d],f=n[d],g,p=l[d];if(f.mode===_i.TRIANGLES||f.mode===_i.TRIANGLE_STRIP||f.mode===_i.TRIANGLE_FAN||f.mode===void 0)g=a.isSkinnedMesh===!0?new zv(v,p):new tt(v,p),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),f.mode===_i.TRIANGLE_STRIP?g.geometry=jc(g.geometry,jl):f.mode===_i.TRIANGLE_FAN&&(g.geometry=jc(g.geometry,Cs));else if(f.mode===_i.LINES)g=new Hv(v,p);else if(f.mode===_i.LINE_STRIP)g=new vo(v,p);else if(f.mode===_i.LINE_LOOP)g=new Gv(v,p);else if(f.mode===_i.POINTS)g=new Vv(v,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(g.geometry.morphAttributes).length>0&&U_(g,a),g.name=t.createUniqueName(a.name||"mesh_"+e),pr(g,a),f.extensions&&Ir(r,g,f),t.assignFinalMaterial(g),c.push(g)}for(let d=0,m=c.length;d<m;d++)t.associations.set(c[d],{meshes:e,primitives:d});if(c.length===1)return a.extensions&&Ir(r,c[0],a),c[0];let u=new ii;a.extensions&&Ir(r,u,a),t.associations.set(u,{meshes:e});for(let d=0,m=c.length;d<m;d++)u.add(c[d]);return u})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ti(Tp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new io(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),n=r,o=[],s=[];for(let l=0,h=n.length;l<h;l++){let c=n[l];if(c){o.push(c);let u=new at;a!==null&&u.fromArray(a.array,l*16),s.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bv(o,s)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],o=[],s=[],l=[],h=[];for(let c=0,u=r.channels.length;c<u;c++){let d=r.channels[c],m=r.samplers[d.sampler],v=d.target,f=v.node,g=r.parameters!==void 0?r.parameters[m.input]:m.input,p=r.parameters!==void 0?r.parameters[m.output]:m.output;v.node!==void 0&&(n.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",g)),s.push(this.getDependency("accessor",p)),l.push(m),h.push(v))}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(s),Promise.all(l),Promise.all(h)]).then(function(c){let u=c[0],d=c[1],m=c[2],v=c[3],f=c[4],g=[];for(let p=0,y=u.length;p<y;p++){let x=u[p],M=d[p],A=m[p],w=v[p],P=f[p];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let L=i._createAnimationTracks(x,M,A,w,P);if(L)for(let b=0;b<L.length;b++)g.push(L[b])}return new Lo(a,void 0,g)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(o){if(o.isMesh)for(let s=0,l=r.weights.length;s<l;s++)o.morphTargetInfluences[s]=r.weights[s]}),n})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),n=[],o=r.children||[];for(let l=0,h=o.length;l<h;l++)n.push(i.getDependency("node",o[l]));let s=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),s]).then(function(l){let h=l[0],c=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,z_)});for(let d=0,m=c.length;d<m;d++)h.add(c[d]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",o=[],s=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return s&&o.push(s),a.camera!==void 0&&o.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new nc:l.length>1?h=new ii:l.length===1?h=l[0]:h=new Rt,h!==l[0])for(let c=0,u=l.length;c<u;c++)h.add(l[c]);if(a.name&&(h.userData.name=a.name,h.name=n),pr(h,a),a.extensions&&Ir(i,h,a),a.matrix!==void 0){let c=new at;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new ii;i.name&&(a.name=r.createUniqueName(i.name)),pr(a,i),i.extensions&&Ir(t,a,i);let n=i.nodes||[],o=[];for(let s=0,l=n.length;s<l;s++)o.push(r.getDependency("node",n[s]));return Promise.all(o).then(function(s){for(let h=0,c=s.length;h<c;h++)a.add(s[h]);let l=h=>{let c=new Map;for(let[u,d]of r.associations)(u instanceof Ci||u instanceof hi)&&c.set(u,d);return h.traverse(u=>{let d=r.associations.get(u);d!=null&&c.set(u,d)}),c};return r.associations=l(a),a})}_createAnimationTracks(e,t,i,r,a){let n=[],o=e.name?e.name:e.uuid,s=[];dr[a.path]===dr.weights?e.traverse(function(u){u.morphTargetInfluences&&s.push(u.name?u.name:u.uuid)}):s.push(o);let l;switch(dr[a.path]){case dr.weights:l=Sa;break;case dr.rotation:l=Lr;break;case dr.position:case dr.scale:l=wa;break;default:i.itemSize===1?l=Sa:l=wa;break}let h=r.interpolation!==void 0?P_[r.interpolation]:qr,c=this._getArrayFromAccessor(i);for(let u=0,d=s.length;u<d;u++){let m=new l(s[u]+"."+dr[a.path],t.array,c,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),n.push(m)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ho(t.constructor),r=new Float32Array(t.length);for(let a=0,n=t.length;a<n;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof Lr?L_:Kc;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function B_(e,t,i){let r=t.attributes,a=new qt;if(r.POSITION!==void 0){let s=i.json.accessors[r.POSITION],l=s.min,h=s.max;if(l!==void 0&&h!==void 0){if(a.set(new H(l[0],l[1],l[2]),new H(h[0],h[1],h[2])),s.normalized){let c=Ho(Ea[s.componentType]);a.min.multiplyScalar(c),a.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let s=new H,l=new H;for(let h=0,c=n.length;h<c;h++){let u=n[h];if(u.POSITION!==void 0){let d=i.json.accessors[u.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){let f=Ho(Ea[d.componentType]);l.multiplyScalar(f)}s.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(s)}e.boundingBox=a;let o=new Ui;a.getCenter(o.center),o.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=o}function Qc(e,t,i){let r=t.attributes,a=[];function n(o,s){return i.getDependency("accessor",o).then(function(l){e.setAttribute(s,l)})}for(let o in r){let s=Fo[o]||o.toLowerCase();s in e.attributes||a.push(n(r[o],s))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(s){e.setIndex(s)});a.push(o)}return ft.workingColorSpace!==Ht&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),pr(e,t),B_(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?N_(e,t.targets,i):e})}function k_(e){let t=new Map,i=new Map,r=e.clone();return $c(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,o=t.get(a),s=o.skeleton.bones;n.skeleton=o.skeleton.clone(),n.bindMatrix.copy(o.bindMatrix),n.skeleton.bones=s.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function $c(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)$c(e.children[r],t.children[r],i)}var eu={fabka:{L:4.11,W:1.73,H:1.47,hood:.92,wind:.78,rear:"hatch",rr:.3,belt:.97,acc:4.6,vmax:46,nick:"Fabka",acc_:"Fabku",g:"f"},oktavka:{L:4.69,W:1.83,H:1.46,hood:1.05,wind:.85,rear:"liftback",rr:.32,belt:.98,acc:5.4,vmax:56,nick:"Oktávka",acc_:"Oktávku",g:"f"},kombi:{L:4.69,W:1.83,H:1.49,hood:1.05,wind:.85,rear:"estate",rr:.32,belt:.98,acc:5.2,vmax:54,nick:"Oktávka kombi",acc_:"Oktávku kombi",g:"f"},golfik:{L:4.28,W:1.79,H:1.46,hood:1,wind:.8,rear:"hatch",rr:.31,belt:.99,acc:5.6,vmax:52,nick:"Golfík",acc_:"Golfa",g:"m"},favorit:{L:3.82,W:1.62,H:1.42,hood:.95,wind:.5,rear:"box",rr:.29,belt:.95,acc:3.6,vmax:40,nick:"Favorit",acc_:"Favorita",g:"m",boxy:!0},esuv:{L:4.7,W:1.88,H:1.68,hood:1,wind:.8,rear:"estate",rr:.36,belt:1.12,clear:.42,acc:4.9,vmax:50,nick:"SUV-čko",acc_:"SUV-čko",g:"n"},dacik:{L:4.34,W:1.8,H:1.65,hood:.95,wind:.75,rear:"estate",rr:.34,belt:1.08,clear:.4,acc:4.2,vmax:46,nick:"Krosover",acc_:"Krosover",g:"i"}},H_=new Et({color:3886431,name:"Windows"}),G_=new Et({color:1381653,name:"Tire"}),V_=new Et({color:10132898,name:"Rim"}),tu=new Et({color:2303014,name:"Trim"}),W_=new Et({color:15921902,name:"Plate"});function iu(e,t,i){let r=new Ec;e.forEach(([n,o],s)=>s?r.lineTo(n,o):r.moveTo(n,o)),r.closePath();let a=new Mx(r,{depth:t-i*2,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:1,steps:1,curveSegments:1});return a.rotateY(-Math.PI/2),a.translate(t/2-i,0,0),a}function X_(e){let t=eu[e],{L:i,W:r,H:a,hood:n,wind:o,belt:s}=t,l=t.rr,h=t.clear||.3,c=i/2,u=new Et({color:16777215,name:"Paint"}),d=new ii,m=t.boxy?.03:.07,v=t.boxy?s-.08:s-.2,f=t.rear==="liftback"?s+.02:s,g=[[-c+.12,h],[c-.16,h],[c,h+.18],[c,v-.06],[c-.1,v],[c-n,s],[-c+(t.rear==="liftback"?.05:.02),f],[-c,f-.12],[-c,h+.14]],p=new tt(iu(g,r,m),u);d.add(p);let y=r-.16,x=c-n,M=x-o,A,w;t.rear==="hatch"?(A=-c+.32,w=-c+.08):t.rear==="liftback"?(A=-c+1.28,w=-c+.28):t.rear==="estate"?(A=-c+.14,w=-c+.04):(A=-c+.1,w=-c+.05);let P=[[w,s-.02],[x,s-.02],[M,a-.04],[A,a-.04]],L=new tt(iu(P,y,.04),H_);d.add(L);let b=M-A-.12,T=new tt(new Kt(y-.06,.07,b),u);T.position.set(0,a-.02,(M+A)/2),d.add(T);let k=new tt(new Kt(y+.01,a-s-.06,.12),u);k.position.set(0,(a+s)/2-.03,(x+w)/2+(t.rear==="liftback"?.25:.1)),d.add(k);let K=i*.61,re=new _a(l,l,.22,14);re.rotateZ(Math.PI/2);let G=new _a(l*.62,l*.62,.235,10);G.rotateZ(Math.PI/2);let Y=K/2+(c-n>.6?.05:0)+.05;for(let V of[Y,-K/2+.05])for(let j of[-1,1]){let Z=new tt(re,G_);Z.position.set(j*(r/2-.13),l,V);let me=new tt(G,V_);me.position.copy(Z.position),d.add(Z,me)}let J=new tt(new Kt(r+.02,.14,i-.3),tu);J.position.set(0,h+.07,0),d.add(J);let Q=new Et({color:14673646,name:"HeadLights"}),E=new Et({color:9048080,name:"TailLights"}),R=v-.1;for(let V of[-1,1]){let j=new tt(new Kt(t.boxy?.32:.38,t.boxy?.16:.11,.08),Q);j.position.set(V*(r/2-.3),R,c-.03);let Z=new tt(new Kt(.3,.13,.08),E);Z.position.set(V*(r/2-.22),f-.2,-c+0),d.add(j,Z)}let N=new tt(new Kt(r*.42,.14,.06),tu);N.position.set(0,R-.02,c+0);let I=new tt(new Kt(.52,.12,.03),W_);I.position.set(0,h+.22,c+.01);let O=I.clone();O.position.z=-c-.01,O.position.y=h+.3;for(let V of[-1,1]){let j=new tt(new Kt(.16,.1,.12),u);j.position.set(V*(r/2+.06),s+.08,x-.1),d.add(j)}return d.add(N,I,O),d.traverse(V=>{V.isMesh&&(V.castShadow=!0)}),{obj:d,def:{paint:"Paint",len:i,vmax:t.vmax,acc:t.acc,nick:t.nick,acc_:t.acc_,g:t.g},w:r,h:a,len:i}}var j_=new s_,Go=null,ru=async e=>{let t=e.split("/").pop();Go||(Go=fetch(e.slice(0,e.lastIndexOf("/models/"))+"/models.json").then(n=>n.json()));let i=await Go,r=atob(i[t]),a=new Uint8Array(r.length);for(let n=0;n<r.length;n++)a[n]=r.charCodeAt(n);return new Promise((n,o)=>j_.parse(a.buffer,"",n,o))},Hi={cars:{},people:[]},q_=["#c9ccd0","#c9ccd0","#9a9fa6","#3b3f45","#3b3f45","#f2f0ea","#f2f0ea","#101215","#101215","#1e2c4a","#b8352b","#2f5a3a","#6b8fb3","#7a2433","#d8c27a","#4f6b3a"],au={sedan:{file:"car_a.glb",paint:"Blue",len:4.5,vmax:50,acc:5.6},compact:{file:"car_b.glb",paint:"LightBlue",len:3.8,vmax:42,acc:4.8},suv:{file:"car_suv.glb",paint:"White",len:4.6,vmax:46,acc:4.8},hatch:{file:"car_hatch.glb",len:4,vmax:43,acc:4.8},wagon:{file:"car_wagon.glb",len:4.5,vmax:45,acc:4.9}},nu=[{file:"man.glb",pre:"HumanArmature|Man_"},{file:"man_suit.glb",pre:"HumanArmature|Man_"},{file:"woman_casual.glb",pre:"HumanArmature|Female_"},{file:"woman_dress.glb",pre:"HumanArmature|Female_"}];async function Y_(e,t){let i=[],r=0,a=Object.keys(au).length+nu.length,n=()=>t&&t(++r/a);for(let[o,s]of Object.entries(au))i.push(ru(e+s.file).then(l=>{let h=l.scene;h.updateMatrixWorld(!0);let c=new qt().setFromObject(h,!0).getSize(new H),u=c.x>c.z,d=new ii,m=new ii;m.add(h),u&&(m.rotation.y=Math.PI/2),d.add(m),d.updateMatrixWorld(!0);let v=new qt().setFromObject(d,!0),f=v.max.z-v.min.z,g=s.len/f;m.scale.multiplyScalar(g),d.updateMatrixWorld(!0),v=new qt().setFromObject(d,!0);let p=v.getCenter(new H);m.position.set(-p.x,-v.min.y,-p.z),d.updateMatrixWorld(!0);let y=0,x=0;d.traverse(A=>{if(A.isMesh){A.castShadow=!0;let w=Array.isArray(A.material)?A.material:[A.material];for(let P of w)if(/head/i.test(P.name)){let L=new qt().setFromObject(A,!0);y+=L.getCenter(new H).z,x++}}}),x&&y/x<0&&(m.rotation.y+=Math.PI,m.position.x*=-1,m.position.z*=-1);let M=new qt().setFromObject(d,!0);Hi.cars[o]={obj:d,def:s,w:M.max.x-M.min.x,h:M.max.y-M.min.y,len:M.max.z-M.min.z},n()}));for(let o of nu)i.push(ru(e+o.file).then(s=>{let l=s.scene;l.updateMatrixWorld(!0);let h=new qt().setFromObject(l,!0),c=1.76/(h.max.y-h.min.y),u=new ii;l.scale.multiplyScalar(c),l.position.y=-h.min.y*c,u.add(l),l.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.frustumCulled=!1)});let d={};for(let m of s.animations)d[m.name.replace(o.pre,"").toLowerCase()]=m;Hi.people.push({obj:u,clips:d}),n()}));await Promise.all(i);for(let o of Object.keys(eu))Hi.cars[o]=X_(o)}var K_=["#c0392b","#2c3e50","#27ae60","#8e44ad","#f39c12","#16a085","#d35400","#7f8c8d","#2980b9","#e8e2d0","#1b1b1b","#b5651d"],su=class{constructor(e=-1,t=!0){let i=e>=0?Hi.people[e]:Bt(Hi.people);if(this.obj=k_(i.obj),t){let r=new ke(Bt(K_));this.obj.traverse(a=>{a.isMesh&&(a.material=(Array.isArray(a.material)?a.material:[a.material]).map(n=>{if(/shirt|dress/i.test(n.name)){let o=n.clone();return o.color=r.clone(),o}if(/pants/i.test(n.name)&&mt()<.6){let o=n.clone();return o.color=new ke(Bt(["#22252b","#3d4f6b","#5b4b3a","#7d7f7a"])),o}return n}),a.material.length===1&&(a.material=a.material[0]))})}this.mixer=new e_(this.obj),this.acts={};for(let[r,a]of Object.entries(i.clips))this.acts[r]=this.mixer.clipAction(a);this.acts.death&&(this.acts.death.setLoop(Es,1),this.acts.death.clampWhenFinished=!0),this.acts.punch&&(this.acts.punch.setLoop(Es,1),this.acts.punch.clampWhenFinished=!1),this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0}play(e,t=.2,i=1){let r=this.acts[e]||this.acts.idle;if(this.cur===r){r.timeScale=i;return}r.reset(),r.timeScale=i,r.enabled=!0,r.setEffectiveWeight(1),r.play(),this.cur&&this.cur.crossFadeTo(r,t,!1),this.cur=r}sync(){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.h}},ai={},Z_=class{constructor(e,t){let i=Hi.cars[e]||Hi.cars.sedan;this.kind=e,this.def=i.def,this.obj=i.obj.clone(!0),this.len=i.len,this.wid=i.w,this.paint=t||Bt(q_),this.lightMats=[],this.obj.traverse(r=>{r.isMesh&&(r.material=(Array.isArray(r.material)?r.material:[r.material]).map(a=>Mt.gloss((n=>{if(n.name==="Plate")return Mt.plateMat();if(i.def.paint&&n.name===i.def.paint){let o=n.clone();return o.color=new ke(this.paint),o}if(/head/i.test(n.name)){let o=n.clone();return o.emissive=new ke(0,0,0),this.head=o,o}if(/tail/i.test(n.name)){let o=n.clone();return o.emissive=new ke(0,0,0),this.tail=o,o}return n})(a))),r.material.length===1&&(r.material=r.material[0]))}),this.x=0,this.z=0,this.y=0,this.h=0,this.vx=0,this.vz=0,this.w=0,this.pitch=0,this.roll=0,this.thr=0,this.st=0,this.hb=0,this.steer=0,this.r=Math.max(.9,this.wid*.5),this.off=this.len/2-this.r,this.dmg=0,this.driver=null,this.ai=null,this.sleep=!0}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h)}place(e,t,i,r){this.x=e,this.z=t,this.h=i,this.y=r.surfaceY(e,t),this.vx=this.vz=this.w=0,this.sync(r,1)}step(e,t,i){let r=Math.sin(this.h),a=Math.cos(this.h),n=this.vx*r+this.vz*a,o=this.vx*a-this.vz*r,s=Math.abs(n),l=.62/(1+s/16);this.steer+=Ze(this.st*l-this.steer,-e*3.5,e*3.5);let h=0,c=this.thr,u=this.def.vmax*(this.driver==="player"?1:.85);c>0?n<-.5?h=10*c:h=this.def.acc*c*Math.max(0,1-n/u)+1*c:c<0&&(n>.5?h=10*c:h=3.5*c*Math.max(0,1+n/9)),this.hb&&(h-=Math.sign(n)*6),h-=n*.06+.0012*n*Math.abs(n)*2.2,Math.abs(c)<.05&&s<.4&&!this.hb&&(n*=.8);let d=t.surfaceY(this.x+r*2,this.z+a*2,this.y+1.2)-t.surfaceY(this.x-r*2,this.z-a*2,this.y+1.2);h-=9.8*Ze(d/4,-.4,.4),n+=h*e;let m=this.len*.62,v=n*Math.tan(this.steer)/m,f=this.hb?1.6:9,g=Math.abs(v*n),p=this.hb?6:13,y=g>p?f*p/g:f;this.w+=(v*(this.hb?1.35:1)-this.w)*Ze(y*e,0,1),o*=Math.exp(-(this.hb?1.4:g>p?3.2:10)*e),this.h=Fi(this.h+this.w*e);let x=Math.sin(this.h),M=Math.cos(this.h);this.vx=n*x+o*M,this.vz=n*M-o*x,this.x+=this.vx*e,this.z+=this.vz*e;let A=0;for(let w of[this.off,-this.off,0]){let P=this.x+x*w,L=this.z+M*w;if(t.collide(P,L,this.y+.3,this.r,ai)){this.x+=ai.x-P,this.z+=ai.z-L;let b=this.vx*ai.nx+this.vz*ai.nz;b<0&&(this.vx-=1.3*b*ai.nx,this.vz-=1.3*b*ai.nz,this.vx*=.92,this.vz*=.92,A=Math.max(A,-b),this.w+=w*.05*b*(this.vx*ai.nz-this.vz*ai.nx>0?1:-1))}}this.x=Ze(this.x,2,t.W-2),this.z=Ze(this.z,2,t.H-2),this.impact=A,A>4&&(this.dmg+=A*1.5)}sync(e,t){let i=Math.sin(this.h),r=Math.cos(this.h),a=this.y+1.2,n=e.surfaceY(this.x+i*this.len*.4,this.z+r*this.len*.4,a),o=e.surfaceY(this.x-i*this.len*.4,this.z-r*this.len*.4,a),s=e.surfaceY(this.x-r*.8,this.z+i*.8,a),l=e.surfaceY(this.x+r*.8,this.z-i*.8,a),h=(n+o+s+l)/4;this.y=h;let c=Math.atan2(o-n,this.len*.8),u=Math.atan2(l-s,1.6),d=Ze(t*10,0,1);this.pitch+=(c-this.pitch)*d,this.roll+=(u-this.roll)*d;let m=Ze(-this.w*this.fwd*.004,-.06,.06);this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.h),this.obj.rotateX(this.pitch),this.obj.rotateZ(this.roll+m)}lights(e,t){this.head&&this.head.emissive.setRGB(e*3,e*2.7,e*2.2),this.tail&&this.tail.emissive.setRGB(t?3:e*1.2,0,0)}};function J_(e,t){let i=Math.sin(e.h),r=Math.cos(e.h),a=Math.sin(t.h),n=Math.cos(t.h);if(Math.abs(e.x-t.x)>7||Math.abs(e.z-t.z)>7||Math.abs(e.y-t.y)>3)return 0;let o=0;for(let s of[e.off,-e.off])for(let l of[t.off,-t.off]){let h=e.x+i*s,c=e.z+r*s,u=t.x+a*l,d=t.z+n*l,m=u-h,v=d-c,f=Math.hypot(m,v),g=e.r+t.r;if(f<g&&f>1e-4){m/=f,v/=f;let p=(g-f)/2;e.x-=m*p,e.z-=v*p,t.x+=m*p,t.z+=v*p;let y=(t.vx-e.vx)*m+(t.vz-e.vz)*v;if(y<0){let x=-y*.65;e.vx-=m*x,e.vz-=v*x,t.vx+=m*x,t.vz+=v*x,e.w+=(s>0?1:-1)*x*.05,t.w-=(l>0?1:-1)*x*.05,o=Math.max(o,-y)}}}return o}var ni={},ou=class{constructor(e,t,i,r){this.car=e,this.w=t,this.e=i,this.s=r,this.next=null,this.mode="traffic",this.wait=0,this.stuck=0,this.honk=0,this.chooseNext()}chooseNext(){let e=this.e.b.out.filter(t=>t!==this.e.rev&&t.L>.5);this.next=e.length?Bt(e):this.e.rev||null}ahead(e,t){let i=this.e,r=this.s+e;r>i.L&&this.next&&(r-=i.L,i=this.next),ki.at(i,Math.min(r,i.L),t);let a=i.lane;return t.x+=-t.dz*a,t.z+=t.dx*a,t}project(){let e=this.car,t=this.e,i=1e9,r=this.s;for(let a=0;a<t.p.length-1;a++){let n=t.p[a][0],o=t.p[a][1],s=t.p[a+1][0],l=t.p[a+1][1],h=s-n,c=l-o,u=h*h+c*c||1,d=Ze(((e.x-n)*h+(e.z-o)*c)/u,0,1),m=Math.hypot(n+h*d-e.x,o+c*d-e.z);m<i&&(i=m,r=t.cum[a]+d*Math.sqrt(u))}this.s=r,this.dev=i}update(e,t,i,r,a){let n=this.car;this.project(),this.s>this.e.L-1.5&&this.next&&(this.s-=this.e.L,this.e=this.next,this.s=Math.max(0,this.s),this.mode==="chase"&&a?this.chooseToward(a):this.chooseNext());let o=n.speed,s=4.5+o*.45;this.ahead(s,ni);let l=ni.x,h=ni.z,c=this.e.v;if(this.mode==="chase"&&a){c=26;let x=Math.hypot(a.x-n.x,a.z-n.z);x<30&&(l=a.x,h=a.z,c=Ze(x*1.2,6,30))}let u=this.e.L-this.s;if(this.next&&u<25){let x=Math.atan2(this.e.p[this.e.p.length-1][0]-this.e.p[this.e.p.length-2][0],this.e.p[this.e.p.length-1][1]-this.e.p[this.e.p.length-2][1]),M=Math.atan2(this.next.p[1][0]-this.next.p[0][0],this.next.p[1][1]-this.next.p[0][1]),A=Math.abs(Fi(M-x));A>.35&&(c=Math.min(c,rt(14,5.5,Ze(A/1.6,0,1))+u*.25)),this.mode!=="chase"&&this.e.b.sig&&!this.w.signalState(this.e.b,x,i)&&u>5&&(c=Math.min(c,Math.max(0,(u-7)*.9)))}let d=Math.sin(n.h),m=Math.cos(n.h),v=99;for(let x of t){if(x===n)continue;let M=x.x-n.x,A=x.z-n.z,w=M*d+A*m;w<0||w>22||Math.abs(M*m-A*d)<2.2&&(v=Math.min(v,w-(n.len+x.len)/2))}if(r&&this.mode!=="chase"){let x=r.x-n.x,M=r.z-n.z,A=x*d+M*m;A>0&&A<14&&Math.abs(x*m-M*d)<2&&(v=Math.min(v,A-n.len/2-.5))}v<99&&(c=Math.min(c,Math.max(0,(v-2.5)*1.1))),this.mode==="chase"&&(c=Math.max(c,v<3?4:c));let f=Math.atan2(l-n.x,h-n.z),g=Fi(f-n.h),p=n.fwd;n.st=Ze(g*2.2,-1,1),p<-.5&&(n.st=-n.st);let y=c-p;n.thr=Ze(y*.35,-1,1),n.hb=0,o<.5&&c>3?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e),this.stuck>2.2&&(n.thr=-.7,n.st=-n.st,this.stuck>3.6&&(this.stuck=0)),v<4&&o<.5&&(this.honk+=e)}chooseToward(e){let t=this.e.b.out.filter(a=>a.L>.5);if(!t.length){this.next=this.e.rev;return}let i=null,r=1e9;for(let a of t){let n=a.p[Math.min(a.p.length-1,3)],o=Math.hypot(n[0]-e.x,n[1]-e.z)+(a===this.e.rev?30:0)+mt()*8;o<r&&(r=o,i=a)}this.next=i}},lu=class{constructor(e,t,i){this.p=new su,this.w=e,this.e=t,this.s=i,this.dir=mt()<.5?1:-1,this.off=(mt()-.5)*(t.sw?.8:1.6),this.speed=1.1+mt()*.5,this.state="walk",this.t=0,this.hp=2,this.p.play("walk",.2,this.speed/1.3),ki.at(t,i,ni),this.p.x=ni.x,this.p.z=ni.z,this.p.y=e.hAt(ni.x,ni.z)}get x(){return this.p.x}get z(){return this.p.z}flee(e,t){if(this.state==="down")return;this.state="flee",this.t=5+mt()*3;let i=Math.atan2(this.p.x-e,this.p.z-t)+(mt()-.5)*.8;this.fh=i,this.p.play("run",.15,1.1)}knock(e,t,i){return this.state==="down"?!1:(this.state="down",this.t=14,this.p.vx=e,this.p.vz=t,this.p.play("death",.08,i?1.6:1.1),!0)}update(e,t){let i=this.p;if(this.state==="walk"){this.s+=this.speed*e*this.dir;let r=this.e;if(this.s>r.L||this.s<0){let s=this.s>r.L?r.b:r.a,l=s.e.filter(h=>h!==r);if(l.length&&mt()<.85){let h=Bt(l);this.e=h,h.a===s?(this.dir=1,this.s=0):(this.dir=-1,this.s=h.L)}else this.dir=-this.dir,this.s=Ze(this.s,0,r.L)}ki.at(this.e,this.s,ni);let a=ni.x-ni.dz*this.off*this.dir,n=ni.z+ni.dx*this.off*this.dir,o=Math.atan2(ni.dx*this.dir,ni.dz*this.dir);i.h+=Fi(o-i.h)*Ze(e*6,0,1),i.x+=(a-i.x)*Ze(e*4,0,1),i.z+=(n-i.z)*Ze(e*4,0,1)}else if(this.state==="flee"){this.t-=e;let r=4.2;if(i.x+=Math.sin(this.fh)*r*e,i.z+=Math.cos(this.fh)*r*e,i.h+=Fi(this.fh-i.h)*Ze(e*8,0,1),t.collide(i.x,i.z,i.y,.35,ai)&&(i.x=ai.x,i.z=ai.z,this.fh+=(mt()<.5?1:-1)*1.2),this.t<=0){let a=t.pedGrid.query(i.x,i.z,30,[]);a.length?(this.e=Bt(a),this.s=mt()*this.e.L,this.state="walk",this.p.play("walk",.3,this.speed/1.3)):this.t=2}}else this.state==="down"&&(this.t-=e,i.x+=i.vx*e,i.z+=i.vz*e,i.vx*=Math.exp(-4*e),i.vz*=Math.exp(-4*e),t.collide(i.x,i.z,i.y,.3,ai)&&(i.x=ai.x,i.z=ai.z,i.vx=i.vz=0));i.y=t.surfaceY(i.x,i.z,i.y+1),i.mixer.update(e),i.sync()}},Q_=class{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.7,this.master.connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),n=0;for(let o=0;o<i;o++){let s=Math.random()*2-1;n=(n+.02*s)/1.02,a[o]=s*.5+n*3}this.noise=r}_noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}start(){if(!this.ctx||this.started)return;this.started=!0;let e=this.ctx,t=this._noiseSrc(),i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=380;let r=e.createGain();r.gain.value=.06,t.connect(i).connect(r).connect(this.master),t.start();let a=e.createOscillator();a.type="sawtooth";let n=e.createOscillator();n.type="square";let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=600,o.Q.value=3;let s=e.createGain();s.gain.value=0,a.connect(o),n.connect(o),o.connect(s).connect(this.master),a.start(),n.start(),this.eng={o1:a,o2:n,ef:o,eg:s};let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=4;let c=e.createGain();c.gain.value=0,l.connect(h).connect(c).connect(this.master),l.start(),this.skid=c;let u=e.createOscillator();u.type="triangle";let d=e.createGain();d.gain.value=0,u.connect(d).connect(this.master),u.start(),this.siren={so:u,sgn:d};let m=e.createOscillator(),v=e.createOscillator();m.type=v.type="square",m.frequency.value=392,v.frequency.value=494;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=1500;let g=e.createGain();g.gain.value=0,m.connect(f),v.connect(f),f.connect(g).connect(this.master),m.start(),v.start(),this.hornG=g}mute(e){this.master&&this.master.gain.setTargetAtTime(e||!this.on?0:.7,this.ctx.currentTime,.05)}toggle(){return this.on=!this.on,this.mute(!1),this.on}update(e,t,i,r){if(!this.eng)return;let a=this.ctx.currentTime;if(t){let s=Math.abs(t.fwd),l=Math.min(5,Math.floor(s/9)),h=.25+(s-l*9)/9*.75+(t.thr>0?.08:0),c=38+h*70+l*6;this.eng.o1.frequency.setTargetAtTime(c,a,.05),this.eng.o2.frequency.setTargetAtTime(c*.5,a,.05),this.eng.ef.frequency.setTargetAtTime(300+h*900+Math.abs(t.thr)*400,a,.05),this.eng.eg.gain.setTargetAtTime(.05+Math.abs(t.thr)*.06,a,.08);let u=Math.sin(t.h),d=Math.cos(t.h),m=Math.abs(t.vx*d-t.vz*u);this.skid.gain.setTargetAtTime(Math.min(.18,Math.max(0,m-2.5)*.04),a,.05)}else this.eng.eg.gain.setTargetAtTime(0,a,.15),this.skid.gain.setTargetAtTime(0,a,.1);let n=1e9;for(let s of i)n=Math.min(n,Math.hypot(s.x-r.position.x,s.z-r.position.z));let o=n<250?Math.min(.09,9/(n+30)):0;this.siren.sgn.gain.setTargetAtTime(o,a,.2),this.siren.so.frequency.setTargetAtTime(e.t%1.2<.6?720:960,a,.03)}_burst(e,t,i,r="lowpass",a=1){if(!this.ctx||!this.started)return;let n=this.ctx,o=n.currentTime,s=this._noiseSrc(),l=n.createBiquadFilter();l.type=r,l.frequency.value=t,l.Q.value=a;let h=n.createGain();h.gain.setValueAtTime(i,o),h.gain.exponentialRampToValueAtTime(.001,o+e),s.connect(l).connect(h).connect(this.master),s.start(o,Math.random()),s.stop(o+e+.05)}_tone(e,t,i,r,a="sine",n=0){if(!this.ctx||!this.started)return;let o=this.ctx,s=o.currentTime+n,l=o.createOscillator();l.type=a,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(t,s+i);let h=o.createGain();h.gain.setValueAtTime(r,s),h.gain.exponentialRampToValueAtTime(.001,s+i),l.connect(h).connect(this.master),l.start(s),l.stop(s+i+.05)}crash(e){let t=Math.min(1,e/15);this._burst(.35+t*.4,900,.25+t*.5),this._tone(90,40,.3,.3*t)}thud(){this._tone(140,50,.18,.4),this._burst(.12,500,.2)}punch(){this._tone(180,60,.12,.45),this._burst(.08,1200,.25)}whoosh(){this._burst(.15,2500,.12,"bandpass",2)}door(){this._tone(220,120,.1,.2,"square"),this._burst(.06,800,.15)}blip(){this._tone(880,1320,.12,.15,"square"),this._tone(1320,1760,.15,.12,"square",.1)}win(){[523,659,784,1046].forEach((e,t)=>this._tone(e,e,.25,.14,"square",t*.11))}fail(){[392,330,262,196].forEach((e,t)=>this._tone(e,e*.98,.3,.14,"sawtooth",t*.16))}boom(){this._burst(1.6,300,.9),this._tone(70,25,1.2,.6)}shout(){this._tone(320,520,.18,.12,"sawtooth"),this._tone(520,280,.25,.1,"sawtooth",.16)}horn(e){this.hornG&&this.hornG.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.02)}},lt=e=>document.querySelector(e),$_=class{constructor(e,t){this.G=e,this.mobile=t,this.stick={active:!1,x:0,y:0},this.btn={hb:0,atk:0,gas:0,brake:0},this.look={dx:0},this.mm=lt("#mm"),this.mmc=this.mm.getContext("2d"),this.mmT=0,document.body.classList.toggle("touch",t||matchMedia("(pointer: coarse)").matches),lt("#bPlay").addEventListener("click",()=>this.onStart&&this.onStart()),lt("#bResume").addEventListener("click",()=>this.onPause&&this.onPause()),lt("#bPause").addEventListener("click",()=>this.onPause&&this.onPause()),lt("#bMap").addEventListener("click",()=>this.toggleMap(this.G.world,this.G)),lt("#map").addEventListener("click",()=>this.toggleMap()),document.querySelectorAll("[data-detail]").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll("[data-detail]").forEach(r=>r.classList.toggle("on",r===i)),this.onDetail&&this.onDetail(+i.dataset.detail)})),lt("#bSound").addEventListener("click",()=>{let i=this.snd&&this.snd.toggle();lt("#bSound").textContent=i?"Zvuk: ZAP":"Zvuk: VYP"})}loading(e,t){lt("#loadbar i").style.width=Math.round(e*100)+"%",t&&(lt("#loadtxt").textContent=t)}ready(){lt("#load").hidden=!0,lt("#title").hidden=!1}play(){lt("#title").hidden=!0,lt("#hud").hidden=!1,document.body.classList.add("playing")}pause(e){lt("#pause").hidden=!e}error(e){lt("#loadtxt").textContent="Chyba: "+e}toast(e){let t=lt("#toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}big(e,t,i,r=2.6){let a=lt("#big");a.querySelector("b").textContent=e,a.querySelector("b").style.color=i||"#fff",a.querySelector("span").textContent=t||"",a.classList.remove("show"),a.offsetWidth,a.style.animationDuration=r+"s",a.classList.add("show")}flash(e,t){let i=lt("#flash");i.style.background=e,i.style.transition="none",i.style.opacity=t,requestAnimationFrame(()=>{i.style.transition="opacity .6s",i.style.opacity=0})}hint(e){if(this._hint===e)return;this._hint=e;let t=lt("#hint");t.textContent=e,t.hidden=!e||this.mobile}flashHint(){}bindTouch(e,t){this.snd=t;let i=lt("#stick"),r=lt("#stick i"),a=null,n=0,o=0,s=null,l=0,h=52,c=lt("#touch");c.addEventListener("touchstart",m=>{t.unlock();for(let v of m.changedTouches)v.clientX<innerWidth*.5&&a===null?(a=v.identifier,n=v.clientX,o=v.clientY,i.style.left=n+"px",i.style.top=o+"px",i.classList.add("on"),this.stick.active=!0,this.stick.x=this.stick.y=0):s===null&&(s=v.identifier,l=v.clientX);m.preventDefault()},{passive:!1}),c.addEventListener("touchmove",m=>{for(let v of m.changedTouches)if(v.identifier===a){let f=v.clientX-n,g=v.clientY-o,p=Math.hypot(f,g);p>h&&(f*=h/p,g*=h/p),r.style.transform=`translate(${f}px,${g}px)`,this.stick.x=f/h,this.stick.y=-g/h}else v.identifier===s&&(this.look.dx+=(v.clientX-l)*.009,l=v.clientX);m.preventDefault()},{passive:!1});let u=m=>{for(let v of m.changedTouches)v.identifier===a&&(a=null,this.stick.active=!1,this.stick.x=this.stick.y=0,r.style.transform="",i.classList.remove("on")),v.identifier===s&&(s=null)};c.addEventListener("touchend",u),c.addEventListener("touchcancel",u);let d=(m,v)=>{let f=lt(m);f.addEventListener("touchstart",p=>{t.unlock(),this.btn[v]=1,f.classList.add("dn"),p.preventDefault(),p.stopPropagation()},{passive:!1});let g=p=>{this.btn[v]=0,f.classList.remove("dn"),p.preventDefault()};f.addEventListener("touchend",g),f.addEventListener("touchcancel",g)};d("#bGas","gas"),d("#bBrake","brake"),d("#bHb","hb"),d("#bAtk","atk"),lt("#bAct").addEventListener("touchstart",m=>{t.unlock(),e.act=1,m.preventDefault(),m.stopPropagation()},{passive:!1}),lt("#bAct").addEventListener("click",()=>e.act=1)}update(e,t,i){lt("#money").textContent="€ "+Math.floor(e.money).toLocaleString("sk-SK");let r="★".repeat(e.wanted)+"☆".repeat(5-e.wanted);this._st!==r&&(this._st=r,lt("#stars").textContent=r,lt("#stars").classList.toggle("hot",e.wanted>0));let a=Math.floor(e.tod),n=Math.floor(e.tod%1*60);if(lt("#clock").textContent=String(a).padStart(2,"0")+":"+String(n).padStart(2,"0"),this._street!==e.street){this._street=e.street;let s=lt("#street");s.textContent=e.street||"",s.classList.remove("show"),s.offsetWidth,e.street&&s.classList.add("show")}let o=t.goalText;if(t.goal){let s=Math.hypot(t.goal.x-t.px,t.goal.z-t.pz);o+=" · "+(s>1e3?(s/1e3).toFixed(1)+" km":Math.round(s)+" m")}this._gt!==o&&(this._gt=o,lt("#goal").textContent=o),lt("#speed").textContent=t.speed!==null?Math.round(t.speed)+" km/h":"",lt("#hp").style.width=Math.max(0,e.hp)+"%",document.body.classList.toggle("incar",t.inCar),document.body.classList.toggle("nearcar",t.nearCar||t.inCar),lt("#bAct").textContent=t.inCar?"VYSTÚP":"NASTÚP",this.mmT-=1,this.mmT<=0&&(this.mmT=2,this.drawMini(t,i))}drawMini(e,t){let i=this.mm,r=this.mmc,a=i.width,n=t.groundCanvas,o=n.width/t.W,s=130,l=a/2/s,h=e.yaw+Math.PI,c=-Math.PI/2-Math.atan2(Math.cos(h),Math.sin(h));r.save(),r.clearRect(0,0,a,a),r.beginPath(),r.arc(a/2,a/2,a/2-2,0,Math.PI*2),r.clip(),r.fillStyle="#111",r.fillRect(0,0,a,a),r.translate(a/2,a/2),r.rotate(c),r.scale(l/o,l/o),r.translate(-e.px*o,-e.pz*o),r.imageSmoothingEnabled=!0;let u=s*1.5,d=Math.max(0,(e.px-u)*o),m=Math.max(0,(e.pz-u)*o),v=Math.min(n.width-d,2*u*o),f=Math.min(n.height-m,2*u*o);v>0&&f>0&&r.drawImage(n,d,m,v,f,d,m,v,f),r.restore(),r.fillStyle="rgba(0,0,0,0.15)",r.beginPath(),r.arc(a/2,a/2,a/2-2,0,Math.PI*2),r.fill();let g=(y,x)=>{let M=(y-e.px)*l,A=(x-e.pz)*l,w=Math.cos(c),P=Math.sin(c);return[a/2+M*w-A*P,a/2+M*P+A*w]},p=(y,x,M,A,w)=>{let[P,L]=g(y,x),b=P-a/2,T=L-a/2,k=Math.hypot(b,T),K=a/2-8;if(k>K){if(!w)return;P=a/2+b/k*K,L=a/2+T/k*K}r.fillStyle=M,r.beginPath(),r.arc(P,L,A,0,Math.PI*2),r.fill(),r.strokeStyle="#000",r.lineWidth=1.5,r.stroke()};for(let y of e.markers)y.on&&p(y.x,y.z,y.c,6,!0);for(let y of e.police)p(y.x,y.z,performance.now()%500<250?"#ff3030":"#3060ff",4.5,!1);e.goal&&p(e.goal.x,e.goal.z,"#ff4fd8",7,!0),r.save(),r.translate(a/2,a/2),r.rotate(c+Math.PI-e.h),r.fillStyle="#fff",r.strokeStyle="#000",r.lineWidth=2,r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.fill(),r.stroke(),r.restore(),r.strokeStyle="rgba(255,255,255,0.8)",r.lineWidth=3,r.beginPath(),r.arc(a/2,a/2,a/2-2,0,Math.PI*2),r.stroke()}toggleMap(e,t){let i=lt("#map");if(!i.hidden||!e){i.hidden=!0;return}i.hidden=!1;let r=lt("#mapc"),a=Math.min(innerWidth,innerHeight)*.92*(devicePixelRatio||1);r.width=r.height=a,r.style.width=r.style.height=a/(devicePixelRatio||1)+"px";let n=r.getContext("2d");n.drawImage(e.groundCanvas,0,0,a,a);let o=a/e.W,s=this._lastI,l=(u,d,m,v)=>{n.fillStyle=m,n.strokeStyle="#000",n.lineWidth=3,n.beginPath(),n.arc(u*o,d*o,v,0,7),n.fill(),n.stroke()},h=t&&t.world?window.__gtbLOC:null;window.__gtbLM&&window.__gtbLM(l,a),h&&(l(h.contact[0],h.contact[1],"#ffcc33",a/70),l(h.race[0],h.race[1],"#33e0ff",a/70));let c=window.__gtbPos&&window.__gtbPos();if(c){c.goal&&l(c.goal.x,c.goal.z,"#ff4fd8",a/60),n.save(),n.translate(c.x*o,c.z*o),n.rotate(Math.PI-c.h),n.fillStyle="#fff",n.strokeStyle="#000",n.lineWidth=3;let u=a/50;n.beginPath(),n.moveTo(0,-u),n.lineTo(u*.7,u*.8),n.lineTo(0,u*.35),n.lineTo(-u*.7,u*.8),n.closePath(),n.fill(),n.stroke(),n.restore()}}},e1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,yi=e1&&Math.min(screen.width,screen.height)<900,hu=(document.querySelector("meta[name=gtb-base]")||{}).content||"./",ne=window.__gtb={t:0,tod:18.4,money:250,wanted:0,heat:0,hp:100,mode:"load",inCar:null,mission:null,paused:!1},es=document.getElementById("c"),fr=new $h({canvas:es,antialias:!1,powerPreference:"high-performance"});fr.setPixelRatio(1),fr.shadowMap.enabled=!0,fr.shadowMap.type=ps;var Nr,Lt=new uo,Vt=new ti(60,1,.3,2200),Ke=new $_(ne,yi),pt=new Q_,fe,ts=new Ox(12571903,5918784,1.2),si=new Wc(16777215,3);si.castShadow=!0,si.shadow.mapSize.set(yi?1024:2048,yi?1024:2048);var Za=75;Object.assign(si.shadow.camera,{left:-Za,right:Za,top:Za,bottom:-Za,near:1,far:600}),si.shadow.bias=-.0015,si.shadow.normalBias=.6,Lt.add(ts,si,si.target);var Ur=new Gc(16769712,0,55,.55,.6,1.2);Lt.add(Ur,Ur.target);var cu={uSun:{value:new H(0,1,0)},uNight:At.uNight,uTime:At.uTime},is=new tt(new Co(1800,32,16),new Pi({uniforms:cu,side:Wt,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vD; uniform vec3 uSun; uniform float uNight; uniform float uTime;
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
      }`}));is.frustumCulled=!1,Lt.add(is),Lt.fog=new Nv(9085112,.0026);var uu=new _a(1.6,1.6,26,16,1,!0);uu.translate(0,13,0);function t1(e){let t=new tt(uu,new Pi({uniforms:{uC:{value:new ke(e)},uTime:At.uTime},transparent:!0,depthWrite:!1,side:Xt,blending:Hr,vertexShader:"varying vec2 vU; varying float vD; void main(){ vU = uv; vec4 mv = modelViewMatrix*vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec2 vU; varying float vD; uniform vec3 uC; uniform float uTime;
        void main(){ float a = pow(1.0 - vU.y, 1.6) * (0.65 + 0.35*sin(vU.y*30.0 - uTime*5.0)) * smoothstep(4.0, 14.0, vD); gl_FragColor = vec4(uC*a*1.1, a); }`}));return t.frustumCulled=!1,t}var ui={},ht={mx:0,my:0,run:0,act:0,atk:0,hb:0,camDX:0,camDrag:0};addEventListener("keydown",e=>{e.repeat||(ui[e.code]=1,(e.code==="KeyE"||e.code==="KeyF"||e.code==="Enter")&&(ht.act=1),e.code==="KeyM"&&Ke.toggleMap(fe,ne),e.code==="KeyH"&&pt.horn(!0),(e.code==="Escape"||e.code==="KeyP")&&_u(),ne.mode==="title"&&(e.code==="Space"||e.code==="Enter")&&xu(),pt.unlock())}),addEventListener("keyup",e=>{ui[e.code]=0,e.code==="KeyH"&&pt.horn(!1)});var Vo=!1,Wo=0;es.addEventListener("mousedown",e=>{Vo=!0,Wo=e.clientX,pt.unlock()}),addEventListener("mouseup",()=>Vo=!1),addEventListener("mousemove",e=>{Vo&&(ht.camDX+=(e.clientX-Wo)*.006,Wo=e.clientX,ht.camDrag=1.5)}),Ke.bindTouch(ht,pt),Ke.onStart=()=>xu(),Ke.onPause=()=>_u(),Ke.onDetail=e=>{ne.detail=e,jo()};function i1(){let e=0,t=0;(ui.KeyA||ui.ArrowLeft)&&(e-=1),(ui.KeyD||ui.ArrowRight)&&(e+=1),(ui.KeyW||ui.ArrowUp)&&(t+=1),(ui.KeyS||ui.ArrowDown)&&(t-=1),Ke.stick.active&&(e=Ke.stick.x,t=Ke.stick.y),ht.mx=e,ht.my=t,ht.run=ui.ShiftLeft||ui.ShiftRight||Ke.stick.active&&Math.hypot(Ke.stick.x,Ke.stick.y)>.92?1:0,ht.hb=ui.Space||Ke.btn.hb?1:0,ht.atk=ui.Space||Ke.btn.atk?1:0,ht.gas=Ke.btn.gas,ht.brake=Ke.btn.brake}var ze,_t=[],oi=[],Mi=[],Ae=null,du=[],Xo=new H;function Dr(e,t,i,r,a){let n=new Z_(e,a);return n.place(t,i,r,fe),Lt.add(n.obj),_t.push(n),n}function Ja(e){let t=_t.indexOf(e);t>=0&&_t.splice(t,1),Lt.remove(e.obj),e.siren&&(e.siren=null);let i=Mi.indexOf(e);i>=0&&Mi.splice(i,1)}var pu=["fabka","fabka","fabka","oktavka","oktavka","oktavka","kombi","kombi","golfik","golfik","favorit","esuv","esuv","dacik","hatch","wagon"];function r1(e,t){for(let i=0;i<12;i++){let r=mt()*Math.PI*2,a=70+mt()*110,n=e+Math.sin(r)*a,o=t+Math.cos(r)*a,s=fe.nearestEdge(n,o,40);if(!s||s.e.L<12)continue;let l=Ze(s.s,3,s.e.L-3);ki.at(s.e,l,$e);let h=$e.x-$e.dz*s.e.lane,c=$e.z+$e.dx*s.e.lane;if(_t.some(m=>Math.hypot(m.x-h,m.z-c)<9)||Math.hypot(h-e,c-t)<55)continue;let u=Dr(Bt(pu),h,c,Math.atan2($e.dx,$e.dz));Mt.maybeTaxi(u),u.driver="ai",u.ai=new ou(u,fe,s.e,l);let d=Math.min(s.e.v,9);return u.vx=$e.dx*d,u.vz=$e.dz*d,u}}var $e={};function a1(e,t){for(let i=0;i<10;i++){let r=mt()*Math.PI*2,a=50+mt()*90,n=fe.nearestEdge(e+Math.sin(r)*a,t+Math.cos(r)*a,40);if(!n||n.e.r.c>2||n.e.L<14)continue;let o=Ze(n.s,4,n.e.L-4);ki.at(n.e,o,$e);let s=n.e.r.w/2-1.05,l=$e.x-$e.dz*s,h=$e.z+$e.dx*s;if(_t.some(u=>Math.hypot(u.x-l,u.z-h)<6)||Math.hypot(l-e,h-t)<40)continue;let c=Dr(Bt(pu),l,h,Math.atan2($e.dx,$e.dz));return c.parked=!0,c}}function fu(e,t,i){let r=fe.pedGrid.query(e,t,70,[]);for(let a=0;a<8&&r.length;a++){let n=Bt(r),o=mt()*n.L;ki.at(n,o,$e);let s=Math.hypot($e.x-e,$e.z-t);if(s<(i?10:26)||s>72||fe.onDeck($e.x,$e.z,999)&&!n.sw)continue;let l=new lu(fe,n,o);return Lt.add(l.p.obj),oi.push(l),l}}function n1(e){let t=oi.indexOf(e);t>=0&&oi.splice(t,1),Lt.remove(e.p.obj)}function s1(e,t){for(let i=0;i<10;i++){let r=mt()*Math.PI*2,a=90+mt()*60,n=fe.nearestEdge(e+Math.sin(r)*a,t+Math.cos(r)*a,50);if(!n||(ki.at(n.e,n.s,$e),Math.hypot($e.x-e,$e.z-t)<70))continue;let o=Bt(["kombi","kombi","esuv","golfik"]),s=Dr(o,$e.x,$e.z,Math.atan2($e.dx,$e.dz),"#eef0f2");return s.driver="police",s.ai=new ou(s,fe,n.e,n.s),s.ai.mode="chase",Mt.livery(s,o==="esuv"?"pz25":"pz"),Mi.push(s),s}}var Si={vy:0,punchT:0,hurtT:0};function rs(e,t){ze.x=e,ze.z=t,ze.y=fe.surfaceY(e,t),ze.sync()}function o1(e){if(e.driver==="ai"||e.driver==="police"){let i=new lu(fe,fe.pedEdges[0],0);i.p.x=e.x-Math.cos(e.h)*1.6,i.p.z=e.z+Math.sin(e.h)*1.6,Lt.add(i.p.obj),oi.push(i),i.flee(ze.x,ze.z),er(e.driver==="police"?2:1,"krádež auta"),pt.shout()}else e.parked&&!e.safe&&mt()<.35&&(e.alarm=6,er(1,"alarm"));e.driver="player",e.ai=null,e.parked=!1,Ae=e,ne.inCar=e,ze.obj.visible=!1;let t=Mi.indexOf(e);t>=0&&Mi.splice(t,1),pt.door(),Ke.flashHint(""),ne.mission&&ne.mission.onEnter&&ne.mission.onEnter(e)}function Qa(){let e=Ae;if(!e)return;let t=-Math.cos(e.h),i=Math.sin(e.h),r=e.x+t*1.7,a=e.z+i*1.7;fe.collide(r,a,e.y,.4,as)&&(r=e.x-t*1.7,a=e.z-i*1.7),e.driver=null,e.thr=0,e.st=0,e.hb=1,Ae=null,ne.inCar=null,ze.obj.visible=!0,ze.h=e.h,rs(r,a),pt.door()}var as={};function er(e,t){if(e<=0||ne.mode!=="play")return;ne.heat+=e;let i=Ze(Math.floor(ne.heat),0,5);i>ne.wanted&&(ne.wanted=i,Ke.toast("HĽADANÝ "+"★".repeat(i)+(t?" · "+t:""))),ne.coolT=0}var Ut={start:[1083,1128],contact:[995,990],race:[770,1196],garage:[962,1534],hospital:[1150,1050]},ns={};window.__gtbLOC=Ut,window.__gtbPos=()=>({x:Ae?Ae.x:ze.x,z:Ae?Ae.z:ze.z,h:Ae?Ae.h:ze.h,goal:ne.mission?ne.mission.goal():null});function $a(e,t,i,r){let a=ns[e];return a||(a=ns[e]=t1(r),Lt.add(a)),a.material.uniforms.uC.value.set(r),a.position.set(t,fe.surfaceY(t,i),i),a.visible=!0,a}function Zt(e){ns[e]&&(ns[e].visible=!1)}function ss(){$a("contact",...Ut.contact,"#ffcc33"),$a("race",...Ut.race,"#33e0ff"),Zt("target"),Zt("cp")}function l1(){let e=null;for(let c=0;c<60&&!e;c++){let u=Bt(fe.edges);if(u.r.c>2||u.L<20)continue;let d=u.p[0][0],m=u.p[0][1],v=Math.hypot(d-ze.x,m-ze.z);if(v<220||v>650)continue;ki.at(u,u.L/2,$e);let f=u.r.w/2-1.05;e=[$e.x-$e.dz*f,$e.z+$e.dx*f,Math.atan2($e.dx,$e.dz),u.r.n]}if(!e)return;let t=Bt(["fabka","oktavka","kombi","golfik","favorit","esuv","dacik"]),i=[["#c8102e","červen"],["#ffd400","žlt"],["#0a7d4f","zelen"],["#ff6a00","oranžov"],["#7b2cbf","fialov"]],[r,a]=Bt(i),n=Hi.cars[t].def,o=a+{f:"ú",m:"ého",n:"é",i:"ý"}[n.g],s={[t]:n.acc_},l=Dr(t,e[0],e[1],e[2],r);l.parked=!0,l.keep=!0,l.target=!0;let h={type:"theft",car:l,text:`Ukradni ${o} ${s[t]}${e[3]?" · "+e[3]:""}`,goal:()=>Ae===l?{x:Ut.garage[0],z:Ut.garage[1]}:{x:l.x,z:l.z},onEnter(c){c===l&&(h.text="Dovez auto do garáže pod UFOm (Petržalka)",Ke.toast("Máš ho! Teraz do garáže pod Mostom SNP."),er(1,"majiteľ volá políciu"),Zt("target"),$a("garage",...Ut.garage,"#7dff6a"))},update(){if(!_t.includes(l))return gu("Auto je preč.");if(l.dmg>260)return gu("Auto je na šrot.");if(Ae!==l&&$a("target",l.x,l.z,"#ff4fd8"),Ae===l&&Math.hypot(l.x-Ut.garage[0],l.z-Ut.garage[1])<9&&l.speed<4){let c=Math.round((1400-Math.min(l.dmg,260)*3.5)/10)*10+(ne.wanted?0:200);mu(`Auto doručené! +${c} €`,c),Qa(),Ja(l)}}};Zt("contact"),Zt("race"),ne.mission=h,Ke.toast("KŠEFT: "+h.text),pt.blip()}function h1(){let e=fe.nearestEdge(ze.x,ze.z,80);if(!e)return;let t=e.e,i=[],r={x:ze.x,z:ze.z},a=0;for(;i.length<8&&a++<400;){let o=t.b.out.filter(l=>l!==t.rev&&l.r.c>=1);if(!o.length)break;t=Bt(o);let s=t.p[t.p.length-1];Math.hypot(s[0]-r.x,s[1]-r.z)>110&&s[0]>30&&s[1]>30&&s[0]<fe.W-30&&s[1]<fe.H-30&&(i.push({x:s[0],z:s[1]}),r={x:s[0],z:s[1]})}if(i.length<4)return Ke.toast("Trať sa nepodarilo nájsť");let n={type:"race",i:0,t:0,cps:i,par:i.length*14,text:"",goal:()=>n.cps[n.i],update(o){n.t+=o;let s=n.cps[n.i];$a("cp",s.x,s.z,"#33e0ff"),n.text=`Preteky · checkpoint ${n.i+1}/${n.cps.length} · ${n.t.toFixed(1)} s`;let l=Ae?Ae.x:ze.x,h=Ae?Ae.z:ze.z;if(Math.hypot(l-s.x,h-s.z)<10&&(n.i++,pt.blip(),n.i>=n.cps.length)){let c=Math.max(100,Math.round((n.par*2-n.t)*12/10)*10);mu(`Cieľ! ${n.t.toFixed(1)} s · +${c} €`,c)}}};Zt("contact"),Zt("race"),ne.mission=n,Ke.toast("PRETEKY! Prejdi všetky checkpointy."),pt.blip()}function mu(e,t){ne.money+=t,Ke.big("MISIA SPLNENÁ",e,"#7dff6a"),pt.win(),ne.mission=null,Zt("garage"),Zt("target"),Zt("cp"),setTimeout(ss,2500)}function gu(e){Ke.big("MISIA ZLYHALA",e,"#ff5a4a"),ne.mission=null,Zt("garage"),Zt("target"),Zt("cp"),setTimeout(ss,2500)}function vu(e,t,i,r){ne.mode="dead",Ke.big(e,t,i,3.2),pt.fail(),setTimeout(()=>{Ae&&Qa(),ne.money=Math.max(0,Math.round(ne.money*(1-r))),ne.wanted=0,ne.heat=0,ne.hp=100;for(let a of Mi.slice())Ja(a);ne.mission&&(ne.mission=null,Zt("garage"),Zt("target"),Zt("cp")),ss(),rs(...Ut.hospital),ze.play("idle"),ne.mode="play"},3200)}async function c1(){Ke.loading(.02,"Načítavam mapu Bratislavy…");try{await Promise.all([document.fonts.load('700 40px "JetBrains Mono"'),document.fonts.load("400 40px Anton")])}catch{}Nr=new n_(fr);let e=await(await fetch(hu+"world.json")).json();Ke.loading(.25,"Staviam mesto…"),await new Promise(i=>setTimeout(i,30)),Mt.patchData(e),fe=new ki(e),fe.build({mobile:yi}),Lt.add(fe.group),ne.world=fe,Ke.loading(.55,"Načítavam autá a ľudí…"),await Y_(hu+"models/",i=>Ke.loading(.55+i*.4,"Načítavam autá a ľudí…")),Mt.init(),ze=new su(0,!1),Lt.add(ze.obj),rs(...Ut.start),ze.h=Math.PI,ss();let t=fe.nearestEdge(Ut.start[0],Ut.start[1]+30,60);if(t){ki.at(t.e,Ze(t.s,5,t.e.L-5),$e);let i=t.e.r.w/2-1.05,r=Dr("golfik",$e.x-$e.dz*i,$e.z+$e.dx*i,Math.atan2($e.dx,$e.dz),"#b8352b");r.parked=!0,r.safe=!0,r.keep=!0}for(let i=0;i<10;i++)fu(ze.x,ze.z,!0);jo(),Ke.loading(1,""),Ke.ready(),ne.mode="title",ne.titleCam=0,requestAnimationFrame(bu)}function xu(){ne.mode==="title"&&(pt.unlock(),pt.start(),ne.mode="play",Ke.play(),ne.camYaw=ze.h+Math.PI)}function _u(){ne.mode!=="title"&&(ne.paused=!ne.paused,Ke.pause(ne.paused),pt.mute(ne.paused))}function jo(){if(!Nr)return;let e=ne.detail??1,t=yi?[2,1.5,1.1][e]:[2,1.5,1][e],i=Math.min(window.devicePixelRatio||1,t),r=Math.floor(innerWidth*i),a=Math.floor(innerHeight*i);es.width=r,es.height=a,fr.setSize(r,a,!1),fr.setViewport(0,0,r,a);let n=yi?[4,0,0][e]:[4,4,0][e],o=Nr.setSize(r,a,1,n);Vt.aspect=o.aspect;let s=o.aspect<1;Vt.fov=s?74:58,Vt.updateProjectionMatrix(),ne.portrait=s}addEventListener("resize",jo);var yu=performance.now(),qo=0,Yo=new H,Mu=new H,Su=!1;ne.camYaw=0;function bu(e){requestAnimationFrame(bu);let t=Math.min(.05,(e-yu)/1e3);if(yu=e,ne.fixedDt&&(t=ne.fixedDt),ne.paused){Nr.render(Lt,Vt);return}wu(t),Nr.render(Lt,Vt)}ne.step=wu,ne.cars=_t,ne.peds=oi,ne.police=Mi,ne.pl=()=>ze,ne.pc=()=>Ae,ne.key=(e,t)=>dispatchEvent(new KeyboardEvent(t?"keydown":"keyup",{code:e})),ne.spawn=(e,t,i,r,a)=>{let n=Dr(e,t,i,r,a);return n.parked=!0,n.keep=!0,n},ne.tp=(e,t)=>{Ae&&Qa(),rs(e,t)},ne.hY=(e,t)=>fe.hAt(e,t),ne.x3=()=>Mt,ne.ri=()=>{let e=0,t=0,i=0;Lt.traverse(r=>{r.isMesh&&r.visible&&(e++,(r.parent===fe.group||r.parent&&r.parent.parent===fe.group)&&i++)});for(let r of Mt.trams.list)r.obj.traverse(a=>a.isMesh&&t++);return{meshes:e,world:i,tram:t,geo:fr.info.memory.geometries,tex:fr.info.memory.textures}},ne.x3info=()=>({trams:Mt.trams.list.map(e=>[Math.round(e.hx),Math.round(e.hz),+e.v.toFixed(1),Math.round(e.s),Math.round(e.r.L)]),sources:Mt.trams.sources.length,entries:Mt.inZone?Mt.landmarks.length:0,terraces:Mt.terraceN||0,zone:Mt.zoneNow}),ne.render=()=>Nr.render(Lt,Vt);function wu(e){if(ne.t+=e,At.uTime.value=ne.t,i1(),(ne.mode==="play"||ne.mode==="dead")&&(ne.tod=(ne.tod+e/40)%24),u1(),ne.mode==="title"){d1(e),Tu(e,!1),Mt.update(e,!0);return}if(ne.mode==="play"?p1(e):ze.mixer.update(e),Tu(e,!0),Mt.update(e,!1),S1(e),ne.mission&&ne.mode==="play"&&ne.mission.update(e),!ne.mission&&ne.mode==="play"){let t=Ae?Ae.x:ze.x,i=Ae?Ae.z:ze.z;Math.hypot(t-Ut.contact[0],i-Ut.contact[1])<4?l1():Math.hypot(t-Ut.race[0],i-Ut.race[1])<6&&h1()}if(b1(e),ne.dbgCam){let t=ne.dbgCam;Vt.position.set(t[0],t[1],t[2]),Vt.lookAt(t[3],t[4],t[5]),is.position.copy(Vt.position),Ko(t[3],t[5])}w1(e),pt.update(ne,Ae,Mi,Vt)}function u1(){let e=ne.tod,t=Math.sin((e-6.2)/12*Math.PI)*.95,i=(e-6.2)/12*Math.PI+Math.PI/2,r=new H(Math.sin(i)*Math.cos(t),Math.sin(t),-Math.cos(i)*Math.cos(t)).normalize();cu.uSun.value.copy(r);let a=t_(Ze((.04-r.y)/.16,0,1));At.uNight.value=a;let n=Ze(1-Math.abs(r.y-.05)/.3,0,1)*(1-a),o=1-a;si.color.setRGB(1,rt(.95,.62,n),rt(.88,.38,n)),si.intensity=o*rt(3.2,2.2,n)*Ze(r.y*6,0,1),ts.color.setRGB(rt(.12,rt(.75,.9,n),o),rt(.16,rt(.85,.65,n),o),rt(.32,rt(1,.6,n),o)),ts.groundColor.setRGB(rt(.05,.42,o),rt(.05,.36,o),rt(.07,.3,o)),ts.intensity=rt(.7,1.15,o),a>.5&&(si.intensity=.35*a,si.color.setRGB(.55,.65,1),r.set(.3,.8,.4).normalize()),ne.sunDir=r;let s=new ke().setRGB(rt(.03,rt(.62,.85,n),o),rt(.04,rt(.72,.5,n),o),rt(.08,rt(.85,.36,n),o));Lt.fog.color.copy(s),Lt.fog.density=rt(.0021,.0011,o),fe.lampHeadMat.color.setRGB(rt(.5,3,a),rt(.45,2.4,a),rt(.35,1.5,a)),fe.ufoRing&&fe.ufoRing.material.color.setRGB(rt(.6,3,a),rt(.5,2.2,a),rt(.3,1.2,a)),Nr.exposure.value=rt(1,1.55,a)}function d1(e){ne.titleCam+=e*.035;let t=700,i=900,r=ne.titleCam+2.2;Vt.position.set(t+Math.sin(r)*330,fe.hAt(t,i)+95,i+Math.cos(r)*330),Vt.lookAt(t,fe.hAt(t,i)+20,i),Ko(t,i)}function Ko(e,t){let i=ne.sunDir||new H(0,1,0),r=Za*2/si.shadow.mapSize.x;e=Math.round(e/r)*r,t=Math.round(t/r)*r;let a=fe.hAt(e,t);si.target.position.set(e,a,t),si.position.set(e+i.x*250,a+i.y*250,t+i.z*250),si.target.updateMatrixWorld()}function p1(e){if(ht.act)if(ht.act=0,Ae)Ae.speed<6&&Qa();else{let n=Zo(3.6);n&&o1(n)}if(Ae){let n=Ae,o=ht.my;ht.gas&&(o=1),ht.brake&&(o=-1),n.thr=o,n.st=-ht.mx,n.hb=ht.hb,ze.x=n.x,ze.z=n.z,ze.y=n.y,n.alarm>0&&(n.alarm-=e),Ke.hint("");return}let t=ze,i=Math.min(1,Math.hypot(ht.mx,ht.my));if(Si.punchT>0&&(Si.punchT-=e),ht.atk&&Si.punchT<=0&&(Si.punchT=.7,t.play("punch",.08,1.4),setTimeout(()=>f1(),220)),i>.08&&Si.punchT<=.25){let n=Math.atan2(ht.mx,ht.my),o=ne.camYaw+Math.PI-n,s=Math.sin(o),l=Math.cos(o),h=ht.run?5.2:.9+.75*i;t.h+=Fi(o-t.h)*Ze(e*10,0,1),t.x+=s*h*e,t.z+=l*h*e,t.play(h>3.5?"run":"walk",.2,h>3.5?1:.55+h*.28)}else Si.punchT<=.25&&t.play("idle",.25);fe.collide(t.x,t.z,t.y,.35,as)&&(t.x=as.x,t.z=as.z);for(let n of _t){let o=Math.sin(n.h),s=Math.cos(n.h);for(let l of[n.off,-n.off]){let h=t.x-(n.x+o*l),c=t.z-(n.z+s*l),u=Math.hypot(h,c),d=n.r+.3;if(u<d&&u>.001){t.x+=h/u*(d-u),t.z+=c/u*(d-u);let m=n.speed;m>6&&Si.hurtT<=0&&(ne.hp-=m*2.2,Si.hurtT=1,pt.crash(m*.5),Ke.flash("#ff2a2a",.35))}}}Si.hurtT>0&&(Si.hurtT-=e),t.x=Ze(t.x,2,fe.W-2),t.z=Ze(t.z,2,fe.H-2);let r=fe.surfaceY(t.x,t.z,t.y+.8);t.y+=(r-t.y)*Ze(e*14,0,1),t.y<fe.water-1.2&&(ne.hp=0),t.mixer.update(e),t.sync(),ne.hp<=0&&vu("ZRAZENÝ","Prebúdzaš sa v nemocnici · -10 %","#ff5a4a",.1);let a=Zo(3.6);Ke.hint(a?yi?"NASTÚP":"[E] nastúp":"")}function Zo(e){let t=null,i=e;for(let r of _t){let a=Math.hypot(r.x-ze.x,r.z-ze.z);a<i&&r.speed<7&&r.burn===void 0&&(i=a,t=r)}return t}function f1(){let e=Math.sin(ze.h),t=Math.cos(ze.h);for(let i of oi){let r=i.x-ze.x,a=i.z-ze.z,n=Math.hypot(r,a);if(n<1.6&&(r*e+a*t)/(n||1)>.3){pt.punch(),i.hp--,i.hp<=0?(i.knock(e*2,t*2,!1),ne.money+=Math.floor(mt()*30)+5):i.flee(ze.x,ze.z);for(let o of oi)o!==i&&Math.hypot(o.x-i.x,o.z-i.z)<18&&o.flee(ze.x,ze.z);er(.34,"bitka");return}}pt.whoosh()}function Tu(e,t){let i=Ae?Ae.x:ze.x,r=Ae?Ae.z:ze.z;if(qo-=e,qo<=0){qo=.35;let s=yi?14:22,l=yi?10:16,h=Math.round((yi?16:26)*(Mt.zoneNow?1.6:1)),c=0,u=0;for(let d of _t)d.driver==="ai"?c++:d.parked&&u++;c<s&&r1(i,r),u<l&&a1(i,r),oi.length<h&&fu(i,r,!1);for(let d of _t.slice())d===Ae||d.keep||d.driver==="police"||Math.hypot(d.x-i,d.z-r)>230&&Ja(d);for(let d of oi.slice())(Math.hypot(d.x-i,d.z-r)>105||d.state==="down"&&d.t<0)&&n1(d)}let a=ne.t;for(let s of _t)s.ai&&s.driver!=="police"&&s.ai.update(e,Mt.obst(),a,Ae?null:ze,null),s.burn!==void 0&&(s.thr=0,s.st=0);let n=2,o=e/n;for(let s=0;s<n;s++){for(let l of _t){if(l.parked&&l.speed<.05&&!l.hitT){l.vx=l.vz=0;continue}!l.driver&&!l.parked&&(l.thr=0,l.st=0,l.hb=1),l.step(o,fe,_t),l.impact>5&&l===Ae&&(pt.crash(l.impact),os(l.impact*.02))}for(let l=0;l<_t.length;l++)for(let h=l+1;h<_t.length;h++){let c=_t[l],u=_t[h],d=J_(c,u);if(d>.5&&(c.hitT=u.hitT=3,c.parked&&(c.parked=!1),u.parked&&(u.parked=!1),d>3&&(c.dmg+=d*2,u.dmg+=d*2,c===Ae||u===Ae))){pt.crash(d),os(d*.025);let m=c===Ae?u:c;m.driver==="police"&&er(1,"útok na políciu"),m.ai&&m.driver==="ai"&&(m.ai.stuck=0,d>6&&(m.angry=4))}}}for(let s of _t){if(s.hitT&&(s.hitT=Math.max(0,s.hitT-e)),s.sync(fe,e),s.lights(At.uNight.value,s.thr<-.1&&s.fwd>.5),s.bar&&Mt.flash(s),s.dmg>300&&s.burn===void 0){s.burn=12,s.obj.traverse(l=>{l.isMesh&&(l.material=l.material.clone?l.material.clone():l.material,l.material.color&&l.material.color.multiplyScalar(.25))}),v1(s),pt.boom(),s===Ae&&(Qa(),ne.hp-=60,Ke.flash("#ff8a2a",.6));for(let l of oi)Math.hypot(l.x-s.x,l.z-s.z)<20&&l.flee(s.x,s.z)}if(s.burn!==void 0&&(s.burn-=e,s.burn<-20&&s!==Ae&&!s.keep)){Ja(s);break}}for(let s of oi)if(s.update(e,fe),s.state!=="down")for(let l of _t){let h=l.speed;if(h<2.5)continue;let c=Math.sin(l.h),u=Math.cos(l.h),d=s.x-l.x,m=s.z-l.z,v=d*c+m*u,f=d*u-m*c;if(Math.abs(v)<l.len/2+.3&&Math.abs(f)<l.wid/2+.3){s.knock(l.vx*.6,l.vz*.6,h>9),pt.thud(),l===Ae&&(er(1,"zrazený chodec"),os(.15));for(let g of oi)g!==s&&Math.hypot(g.x-s.x,g.z-s.z)<25&&g.flee(s.x,s.z)}else l===Ae&&v>0&&v<9+h*.4&&Math.abs(f)<3&&s.state==="walk"&&h>6&&s.flee(l.x,l.z)}M1(e)}var m1=new Kt(.6,.6,.6),g1=new Li({color:16777215,transparent:!0,blending:Hr,depthWrite:!1}),Eu=220,tr=new Rr(m1,g1,Eu);tr.frustumCulled=!1,tr.count=0,Lt.add(tr);var en=[];function v1(e){du.push({car:e,t:0})}var Au=new at,x1=new ci,_1=new H,y1=new H,Ru=new ke;function M1(e){for(let i of du)if(!(!_t.includes(i.car)||i.car.burn<-18))for(let r=0;r<3;r++)en.length<Eu&&en.push({x:i.car.x+(mt()-.5)*2,y:i.car.y+1.2,z:i.car.z+(mt()-.5)*3,vy:2+mt()*3,t:0,life:.6+mt()*.9});let t=0;for(let i=en.length-1;i>=0;i--){let r=en[i];if(r.t+=e,r.y+=r.vy*e,r.t>r.life){en.splice(i,1);continue}let a=r.t/r.life;Au.compose(y1.set(r.x,r.y,r.z),x1,_1.setScalar(1+a*1.5)),tr.setMatrixAt(t,Au),Ru.setRGB(rt(4,.3,a),rt(1.8,.25,a),rt(.3,.22,a)),tr.setColorAt(t,Ru),t++}tr.count=t,tr.instanceMatrix.needsUpdate=!0,tr.instanceColor&&(tr.instanceColor.needsUpdate=!0)}var Jo=0;function S1(e){let t=Ae?Ae.x:ze.x,i=Ae?Ae.z:ze.z,r=[0,1,2,3,4,6][ne.wanted];Jo-=e,Mi.length<r&&Jo<=0&&(s1(t,i),Jo=3);let a=!1;for(let n of Mi.slice()){if(!n.ai)continue;n.ai.update(e,Mt.obst(),ne.t,null,{x:t,z:i});let o=Math.hypot(n.x-t,n.z-i);o<80&&(a=!0),(o>320||ne.wanted===0&&o>90)&&Ja(n)}if(ne.wanted>0?(ne.coolT=(ne.coolT||0)+e*(a?.25:1),ne.coolT>22&&(ne.wanted--,ne.heat=ne.wanted,ne.coolT=0,Ke.toast(ne.wanted?"Hľadanosť klesá: "+"★".repeat(ne.wanted):"Polícia ťa stratila z očí"))):ne.heat=Math.max(0,ne.heat-e*.02),ne.wanted>0&&ne.mode==="play"){let n=!1;for(let s of Mi)Math.hypot(s.x-t,s.z-i)<(Ae?7.5:6)&&s.speed<6&&(n=!0);let o=Ae?Ae.speed<1.5:!0;ne.bustT=n&&o?(ne.bustT||0)+e:0,ne.bustT>(Ae?2.5:1.2)&&(ne.bustT=0,vu("ZATKNUTÝ","Polícia ti zobrala 25 % peňazí","#4fa8ff",.25))}}var Or=0;function os(e){Or=Math.min(.6,Or+e)}function b1(e){let t=ne.portrait;ht.camDrag>0&&(ht.camDrag-=e),Ke.look.dx&&(ht.camDX+=Ke.look.dx,Ke.look.dx=0,ht.camDrag=1.5);let i,r,a,n,o,s;if(Ae){let m=Ae,v=m.fwd<-2?m.h:m.h+Math.PI;ht.camDrag>0?ne.camYaw+=ht.camDX:ne.camYaw+=Fi(v-ne.camYaw)*Ze(e*3.2,0,1),ht.camDX=0,n=(t?11.5:8.6)+Ze(m.speed*.09,0,4),o=t?4.6:3.3,i=m.x,a=m.z,r=m.y+1.3,s=2.2}else ht.camDrag>0?ne.camYaw+=ht.camDX:Math.hypot(ht.mx,ht.my)>.2&&ht.my>-.3&&(ne.camYaw+=Fi(ze.h+Math.PI-ne.camYaw)*Ze(e*1.4,0,1)),ht.camDX=0,n=t?6.8:5,o=t?2.9:2.1,i=ze.x,a=ze.z,r=ze.y+1.45,s=1;let l=i+Math.sin(ne.camYaw)*n,h=a+Math.cos(ne.camYaw)*n,c=fe.rayHit(i,a,l,h,r+o-1);if(c<1){let m=Math.max(.18,c-.08);l=i+(l-i)*m,h=a+(h-a)*m}let u=Math.max(r+o*(c<1?1.15:1),fe.surfaceY(l,h,r+5)+1.2);Xo.set(l,u,h),Su||(Yo.copy(Xo),Su=!0),Yo.lerp(Xo,Ze(e*(Ae?6:8),0,1));let d=Ae?t?9:4:t?4.5:1.5;if(Mu.set(i-Math.sin(ne.camYaw)*d,r+s*.4+(t?.6:0),a-Math.cos(ne.camYaw)*d),Vt.position.copy(Yo),Or>0&&(Vt.position.x+=(mt()-.5)*Or,Vt.position.y+=(mt()-.5)*Or,Or=Math.max(0,Or-e*1.5)),Vt.lookAt(Mu),is.position.copy(Vt.position),Ko(i,a),Ae&&At.uNight.value>.2){let m=Ae;Ur.intensity=60*At.uNight.value,Ur.position.set(m.x+Math.sin(m.h)*2,m.y+.9,m.z+Math.cos(m.h)*2),Ur.target.position.set(m.x+Math.sin(m.h)*22,m.y-1,m.z+Math.cos(m.h)*22),Ur.target.updateMatrixWorld()}else Ur.intensity=0}var Qo=0;function w1(e){Qo-=e;let t=Ae?Ae.x:ze.x,i=Ae?Ae.z:ze.z;Qo<=0&&(Qo=.25,ne.street=fe.streetAt(t,i)||(fe.onDeck(t,i,(Ae||ze).y+1)?"Most SNP":""));let r=null;ne.mission&&(r=ne.mission.goal()),Ke.update(ne,{px:t,pz:i,h:Ae?Ae.h:ze.h,yaw:ne.camYaw,speed:Ae?Ae.speed*3.6:null,goal:r,goalText:ne.mission?ne.mission.text:"Kšefty: Hviezdoslavovo nám. · Preteky: Most SNP"+Mt.goalText(),markers:[{x:Ut.contact[0],z:Ut.contact[1],c:"#ffcc33",on:!ne.mission},{x:Ut.race[0],z:Ut.race[1],c:"#33e0ff",on:!ne.mission}],police:Mi.map(a=>({x:a.x,z:a.z})),inCar:!!Ae,nearCar:!Ae&&!!Zo(3.6)},fe)}var Mt=(()=>{const e=Math.PI;let t=!1;const i={};function r(F,S,_){let D=document.createElement("canvas");D.width=F,D.height=S,_(D.getContext("2d"),F,S);let C=new le.CanvasTex(D);return C.colorSpace=le.SRGB,C.anisotropy=4,C}function a(F,S=1){return F.onBeforeCompile=_=>Bi(_,"","",`{ totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * ${S.toFixed(2)}; }`),F}function n(F,S){if(!F||F._gl||F.isMeshBasicMaterial)return F;F._gl=1;let _=F.name||"",D=S!==void 0?S:/window|glass/i.test(_)?.34:/tire|tyre|rim|trim|plate|wheel|rubber|black|grey|gray/i.test(_)?0:/head|tail/i.test(_)?.06:.07;return F.onBeforeCompile=C=>Bi(C,"","",`{ vec3 V_ = normalize(cameraPosition - vWP); vec3 N_ = normalize(vWN); N_ *= sign(dot(N_, V_) + 1e-4);
             vec3 R_ = reflect(-V_, N_); float f_ = pow(1.0 - max(dot(V_, N_), 0.0), 4.0);
             float sp_ = pow(max(dot(normalize(R_), normalize(uSun)), 0.0), 70.0) * (1.0 - uNight);
             R_.y = abs(R_.y) + 0.04;
             totalEmissiveRadiance += hdSky(normalize(R_), uSun, uNight) * (0.12 + 0.88 * f_) * ${D.toFixed(2)};
             totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * sp_ * ${(D*6).toFixed(2)};
             totalEmissiveRadiance += diffuseColor.rgb * lampAt(vWP) * uNight * 0.9; }`),F}function o(F){let S=[],_=[],D=[],C=new le.Color;for(let[X,ee,q,ue,se,Se,ae]of F){let He=new le.Box(X,ee,q).toNonIndexed();He.translate(ue,se,Se);let Le=He.attributes.position.array,Ie=He.attributes.normal.array;C.set(ae);for(let de=0;de<Le.length;de+=3)S.push(Le[de],Le[de+1],Le[de+2]),_.push(Ie[de],Ie[de+1],Ie[de+2]),D.push(C.r,C.g,C.b)}let z=new le.Geo;return z.setAttribute("position",new le.F32(S,3)),z.setAttribute("normal",new le.F32(_,3)),z.setAttribute("color",new le.F32(D,3)),z}let s=null;function l(){if(!s){s=[];const F="ABCDEFGHJKLMNPRSTVXYZ",S=["BA","BL","BT","BA","BL","BT","SC","PK","TT","MA","AA","AB"];for(let _=0;_<12;_++){let D=S[_]+" "+(100+Math.floor(Ct(_*7+3)*900))+F[Math.floor(Ct(_*13+1)*F.length)]+F[Math.floor(Ct(_*17+5)*F.length)],C=r(256,64,(z,X,ee)=>{z.fillStyle="#f5f5f0",z.fillRect(0,0,X,ee),z.fillStyle="#1c3f9e",z.fillRect(0,0,30,ee),z.fillStyle="#fff",z.font="700 15px sans-serif",z.textAlign="center",z.fillText("SK",15,54),z.strokeStyle="#111",z.lineWidth=4,z.strokeRect(2,2,X-4,ee-4),z.fillStyle="#111",z.font='700 42px "JetBrains Mono", monospace',z.textBaseline="middle",z.fillText(D,(X+30)/2,ee/2+3)});s.push(new le.Lambert({map:C,name:"Plate"}))}}return Bt(s)}const h={};function c(F){if(h[F])return h[F];let S=r(512,96,(_,D,C)=>{if(F==="pz"){_.fillStyle="#f2f2f0",_.fillRect(0,0,D,C);let z=12,X=D/z;for(let ee=0;ee<2;ee++)for(let q=0;q<z;q++)_.fillStyle=(q+ee)%2?"#0b3fa8":"#d9ea10",_.fillRect(q*X,8+ee*40,X+1,40);_.fillStyle="#0b3fa8",_.fillRect(D*.31,4,D*.38,C-8),_.fillStyle="#fff",_.font="900 54px Anton, Impact, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("POLÍCIA",D/2,C/2+4)}else if(F==="pz25")_.fillStyle="#101216",_.fillRect(0,10,D,C-26),_.fillStyle="#0b4fc4",_.beginPath(),_.moveTo(0,10),_.lineTo(150,10),_.lineTo(96,C-16),_.lineTo(0,C-16),_.fill(),_.beginPath(),_.moveTo(D,10),_.lineTo(D-150,10),_.lineTo(D-96,C-16),_.lineTo(D,C-16),_.fill(),_.fillStyle="#e0102a",_.fillRect(0,C-14,D,6),_.fillStyle="#f2f2f0",_.fillRect(0,0,D,8),_.fillRect(0,C-8,D,8),_.fillStyle="#fff",_.font="900 50px Anton, Impact, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("POLÍCIA",D/2,C/2-2);else{_.fillStyle="#f4f4f2",_.fillRect(0,0,D,C);let z=16,X=D/z;for(let ee=0;ee<z;ee++)_.fillStyle=ee%2?"#0d3a8c":"#f4f4f2",_.fillRect(ee*X,C-30,X+1,22);_.fillStyle="#0d3a8c",_.fillRect(0,6,D,5),_.font="900 40px Anton, Impact, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("MESTSKÁ POLÍCIA",D/2,38)}});return h[F]=a(new le.Lambert({map:S}))}function u(F,S){let _=F.wid,D=F.len,C=(Hi.cars[F.kind]||{}).h||1.5,z=c(S),X=new le.Plane(D*.86,.36);for(let ae of[1,-1]){let He=new le.Mesh(X,z);He.rotation.y=ae*e/2,He.position.set(ae*(_/2+.014),C>1.6?.86:.74,-.05),F.obj.add(He)}let ee=new le.Group,q=new le.Mesh(new le.Box(_*.62,.05,.3),new le.Lambert({color:1382170})),ue=new le.Box(_*.27,.12,.26),se=new le.Mesh(ue,new le.Basic({color:16719904})),Se=new le.Mesh(ue,new le.Basic({color:2113791}));se.position.set(_*.16,.085,0),Se.position.set(-_*.16,.085,0),ee.add(q,se,Se),ee.position.set(0,C+.02,-.15),F.obj.add(ee),F.bar={red:se,blue:Se,idle:S==="mp"},F.livery=S}function d(F){let S=F.bar;if(S.idle&&!F.driver){S.red.material.color.setRGB(.25,.3,.9),S.blue.material.color.setRGB(.25,.3,.9);return}let _=Math.sin(ne.t*14)>0;S.red.material.color.setRGB(_?6:.3,.1,.1),S.blue.material.color.setRGB(.1,.2,_?.3:6)}let m=null;function v(F){if(!F||mt()>.09)return;m||(m=new le.Basic({map:r(128,48,(D,C,z)=>{D.fillStyle="#ffd21a",D.fillRect(0,0,C,z),D.fillStyle="#111",D.font="900 38px Anton, Impact, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("TAXI",C/2,z/2+3)})}));let S=(Hi.cars[F.kind]||{}).h||1.5,_=new le.Mesh(new le.Box(.46,.16,.16),m);_.position.set(0,S+.07,.1),F.obj.add(_),F.taxi=!0}const f=6.3,g=.5,p=5,y=f+g,x=p*f+(p-1)*g,M={list:[],edges:[],sources:[],t:1.5,max:0,geo:null,proxies:[]},A=[["1","HLAVNÁ STANICA"],["3","RAČA"],["4","DÚBRAVKA"],["4","ZLATÉ PIESKY"],["9","KARLOVA VES"],["9","RUŽINOV"],["1","PETRŽALKA"]];function w(){const F="#cf1420",S="#17181b",_="#0b0d11",D="#8f9398",C=f/2;let z=[[2.34,.44,f-.1,0,.34,0,S],[2.48,.74,f,0,.93,0,F],[2.42,1.2,f,0,1.9,0,_],[2.48,.4,f,0,2.7,0,F],[2.24,.14,f,0,2.97,0,D],[1.5,.3,f*.5,0,3.18,.3,"#b4b8bc"]],X=[2.06,2.5,g+.14,0,1.6,-C-g/2,"#131315"],ee=he=>[[2.2,.44,1,0,.34,he*(C+.45),S],[2.36,.74,1,0,.93,he*(C+.48),F],[2.3,1.2,.86,0,1.9,he*(C+.4),_],[2.36,.4,.74,0,2.7,he*(C+.36),F],[2.1,.14,.6,0,2.97,he*(C+.28),D],[.5,.06,.1,0,1.2,he*(C+.99),"#f2f2f2"]],q=[[1.5,.3,f*.5,0,3.18,.3,"#b4b8bc"],[.06,.06,2,.45,3.75,-.4,"#2a2b2e"],[.06,.06,2,-.45,3.75,-.4,"#2a2b2e"],[.06,.9,.06,.45,3.6,.55,"#2a2b2e"],[.06,.9,.06,-.45,3.6,.55,"#2a2b2e"],[1.7,.05,.16,0,4.18,-1.38,"#2a2b2e"]],ue={front:o([...z,X,...ee(1)]),mid:o([...z,X]),midP:o([...z,X,...q]),rear:o([...z,...ee(-1)])},se=f-.3,Se=[],ae=[],He=[];for(let he of[1,-1]){let te=he*1.246,Re=-he*se/2,Ce=he*se/2,Ge=[[te,1.36,Ce,0,0],[te,1.36,Re,1,0],[te,2.44,Re,1,1],[te,1.36,Ce,0,0],[te,2.44,Re,1,1],[te,2.44,Ce,0,1]];for(let ve of Ge)Se.push(ve[0],ve[1],ve[2]),ae.push(ve[3],ve[4]),He.push(he,0,0)}ue.win=new le.Geo,ue.win.setAttribute("position",new le.F32(Se,3)),ue.win.setAttribute("uv",new le.F32(ae,2)),ue.win.setAttribute("normal",new le.F32(He,3));let Le=he=>(te,Re,Ce)=>{te.fillStyle=he?"#000":"#0c0f13",te.fillRect(0,0,Re,Ce);let Ge=4,ve=Re/Ge;for(let W=0;W<Ge;W++)if(te.fillStyle=he?W===1?"#fff0c8":"#ffe0a0":"#1b2630",te.fillRect(W*ve+5,6,ve-10,Ce-12),he){te.fillStyle="rgba(40,25,10,0.75)";for(let be=0;be<2;be++){let Ee=W*ve+14+Ct(W*9+be*5)*(ve-30);te.beginPath(),te.arc(Ee,Ce*.45,6,0,7),te.fill(),te.fillRect(Ee-8,Ce*.45+5,16,Ce)}}},Ie=n(new le.Lambert({vertexColors:!0}),.07),de=new le.Lambert({map:r(256,64,Le(!1)),emissiveMap:r(256,64,Le(!0)),emissive:new le.Color(0,0,0)});M.geo=ue,M.mBody=Ie,M.mWin=de,M.mHead=new le.Basic({color:16773836}),M.mTail=new le.Basic({color:16718352}),M.gLamp=new le.Box(.3,.14,.06),M.gDisp=new le.Plane(1.7,.3),M.disp={}}function P(F){let S=F[0]+F[1];return M.disp[S]||(M.disp[S]=new le.Basic({map:r(256,48,(_,D,C)=>{_.fillStyle="#050505",_.fillRect(0,0,D,C),_.fillStyle="#ffb020",_.font='700 30px "JetBrains Mono", monospace',_.textBaseline="middle",_.textAlign="left",_.fillText(F[0],8,C/2+2),_.font='700 22px "JetBrains Mono", monospace',_.fillText(F[1],44,C/2+2)})})),M.disp[S]}function L(){let F=C=>C[0]*1e5+C[1],S=new Map;for(let C of fe.d.tram){if(C.p.length<2)continue;let z=C.p.map(q=>[q[0]/10,q[1]/10]),X=0;for(let q=1;q<z.length;q++)X+=Math.hypot(z[q][0]-z[q-1][0],z[q][1]-z[q-1][1]);let ee={p:z,L:X,k0:F(C.p[0]),k1:F(C.p[C.p.length-1]),next:[],dist:1e9,nin:0};M.edges.push(ee),(S.get(ee.k0)||S.set(ee.k0,[]).get(ee.k0)).push(ee)}for(let C of M.edges){C.next=S.get(C.k1)||[];for(let z of C.next)z.nin++}for(let C of M.edges)C.next.length||(C.dist=C.L);for(let C=0;C<120;C++)for(let z of M.edges)for(let X of z.next)X.dist+z.L<z.dist&&(z.dist=X.dist+z.L);let _=fe.W,D=fe.H;M.sources=M.edges.filter(C=>{if(C.nin||C.dist>1e8)return!1;let[z,X]=C.p[0];return z<40||X<40||z>_-40||X>D-40||Math.hypot(z-554,X-713)<25}),M.max=yi?6:10,w(),N()}function b(F){let S=[],_=F,D=0,C=new Set;for(;_&&D++<110;){for(let q=S.length?1:0;q<_.p.length;q++)S.push(_.p[q]);C.add(_);let X=_.next.filter(q=>q.dist<1e8);if(!X.length)break;let ee=X.filter(q=>!C.has(q));_=D>50||!ee.length?X.slice().sort((q,ue)=>q.dist-ue.dist)[0]:Bt(ee)}let z=[0];for(let X=1;X<S.length;X++)z.push(z[X-1]+Math.hypot(S[X][0]-S[X-1][0],S[X][1]-S[X-1][1]));return{p:S,cum:z,L:z[z.length-1]}}function T(F,S,_){let D=F.cum,C=0,z=D.length-2;for(S=Ze(S,0,F.L);C<z;){let se=C+z+1>>1;D[se]<=S?C=se:z=se-1}let X=D[C+1]-D[C]||1,ee=(S-D[C])/X,q=F.p[C],ue=F.p[C+1];return _.x=q[0]+(ue[0]-q[0])*ee,_.z=q[1]+(ue[1]-q[1])*ee,_.dx=(ue[0]-q[0])/X,_.dz=(ue[1]-q[1])/X,_}function k(F){if(!M.sources.length)return null;let S=Bt(M.sources);if(M.list.some(z=>z.src===S&&z.s<x+30))return null;let _=b(S);if(_.L<150)return null;let D=Bt(A),C={src:S,r:_,s:F||.5,v:F?9:5,secs:[],wait:0,bell:0,obj:new le.Group,hx:0,hz:0};for(let z=0;z<p;z++){let X=new le.Group,ee=new le.Mesh(z===0?M.geo.front:z===p-1?M.geo.rear:z===1?M.geo.midP:M.geo.mid,M.mBody),q=new le.Mesh(M.geo.win,M.mWin);if(ee.castShadow=!0,ee.receiveShadow=!0,X.add(ee,q),z===0){for(let se of[-.82,.82]){let Se=new le.Mesh(M.gLamp,M.mHead);Se.position.set(se,.86,f/2+.985),X.add(Se)}let ue=new le.Mesh(M.gDisp,P(D));ue.position.set(0,2.7,f/2+.735),X.add(ue)}if(z===p-1)for(let ue of[-.82,.82]){let se=new le.Mesh(M.gLamp,M.mTail);se.position.set(ue,.86,-f/2-.985),X.add(se)}X.visible=!1,C.obj.add(X),C.secs.push({g:X,x:0,y:0,z:0,h:0,on:!1,len:f})}return Lt.add(C.obj),M.list.push(C),C}const K={},re={},G={},Y={};function J(F){let S=fe.W,_=fe.H;for(let D=0;D<p;D++){let C=F.s-D*y-f/2,z=F.secs[D];if(C<0||C>F.r.L){z.on=!1,z.g.visible=!1;continue}T(F.r,C+2.3,K),T(F.r,C-2.3,re);let X=(K.x+re.x)/2,ee=(K.z+re.z)/2;if(X<1||ee<1||X>S-1||ee>_-1){z.on=!1,z.g.visible=!1;continue}let q=z.on?z.y+1.6:1e9,ue=fe.surfaceY(K.x,K.z,q),se=fe.surfaceY(re.x,re.z,q);z.x=X,z.z=ee,z.y=(ue+se)/2,z.h=Math.atan2(K.x-re.x,K.z-re.z),z.on=!0,z.g.visible=!0,z.g.position.set(X,z.y+.03,ee),z.g.rotation.set(0,0,0),z.g.rotateY(z.h),z.g.rotateX(Math.atan2(se-ue,4.6))}}function Q(){pt._tone(2100,1900,.22,.1,"triangle"),pt._tone(2100,1900,.3,.1,"triangle",.2)}function E(F,S){M.t-=F,M.t<=0&&(M.t=5+mt()*7,M.list.length<M.max&&k());let _=!Ae&&!S&&ne.mode==="play";M.proxies.length=0;for(let D=M.list.length-1;D>=0;D--){let C=M.list[D];T(C.r,C.s,G);let z=G.x,X=G.z,ee=G.dx,q=G.dz;T(C.r,C.s+16,Y);let ue=Math.abs(Fi(Math.atan2(Y.dx,Y.dz)-Math.atan2(ee,q)));T(C.r,C.s-x*.6,Y),ue=Math.max(ue,Math.abs(Fi(Math.atan2(Y.dx,Y.dz)-Math.atan2(ee,q)))*.8);let se=rt(11.5,4.2,Ze(ue/.6,0,1)),Se=9+C.v*C.v/4.6,ae=99,He=!0,Le=!1,Ie=(de,he,te,Re,Ce)=>{let Ge=de-z,ve=he-X,W=Ge*ee+ve*q;W<.5||W>Se||Math.abs(Ge*q-ve*ee)>1.3+te||W<ae&&(ae=W,He=Re,Le=Ce)};if(Math.abs(z-(Ae?Ae.x:ze.x))<160&&Math.abs(X-(Ae?Ae.z:ze.z))<160){for(let de of _t)Ie(de.x,de.z,de.r,!0,de===Ae);for(let de of oi)de.state!=="down"&&Ie(de.x,de.z,.1,!0,!1);_&&Ie(ze.x,ze.z,.3,!0,!0)}if(C.ghost>0)C.ghost-=F;else for(let de of M.list)if(!(de===C||Math.abs(de.hx-z)>75||Math.abs(de.hz-X)>75))for(let he=3;he<Se+2&&!(he>ae);he+=2.5){T(C.r,C.s+he,Y);let te=!1;for(let Re of de.secs){if(!Re.on||Math.abs(Re.x-Y.x)>5||Math.abs(Re.z-Y.z)>5)continue;let Ce=Math.sin(Re.h)*2.3,Ge=Math.cos(Re.h)*2.3;for(let ve=-1;ve<=1;ve++)if(Math.hypot(Re.x+Ce*ve-Y.x,Re.z+Ge*ve-Y.z)<1.5){te=!0;break}if(te)break}if(te){ae=he,He=!1,Le=!1;break}}if(ae<99?(se=Math.min(se,Math.sqrt(Math.max(0,2*2.5*(ae-4.5)))),C.v<.6&&(C.wait+=F),He&&C.wait>5&&(se=Math.max(se,1.8)),!He&&C.wait>14+C.s%7&&(C.ghost=9,C.wait=0),Le&&C.bell<=0&&ae<22&&(Q(),C.bell=2.6)):C.wait=Math.max(0,C.wait-F*2),C.bell>0&&(C.bell-=F),C.v=Math.max(0,C.v+Ze(se-C.v,-3.4*F,1.15*F)),C.s+=C.v*F,C.s-x-6>C.r.L){Lt.remove(C.obj),M.list.splice(D,1);continue}C.hx=z,C.hz=X,C.dx=ee,C.dz=q,J(C);for(let de of C.secs)de.on&&M.proxies.push(de)}S||R(_)}function R(F){const S=[-2.3,0,2.3];for(let _ of M.list){for(let C of _t){if(Math.abs(C.x-_.hx)>46||Math.abs(C.z-_.hz)>46)continue;let z=Math.sin(C.h),X=Math.cos(C.h);for(let ee of _.secs){if(!ee.on||Math.abs(C.y-ee.y)>3||Math.abs(C.x-ee.x)>9||Math.abs(C.z-ee.z)>9)continue;let q=Math.sin(ee.h),ue=Math.cos(ee.h);for(let se of S)for(let Se of[C.off,-C.off]){let ae=C.x+z*Se-(ee.x+q*se),He=C.z+X*Se-(ee.z+ue*se),Le=Math.hypot(ae,He),Ie=1.3+C.r;if(Le>=Ie||Le<1e-4)continue;ae/=Le,He/=Le,C.x+=ae*(Ie-Le),C.z+=He*(Ie-Le);let de=(C.vx-q*_.v)*ae+(C.vz-ue*_.v)*He;de<0&&(C.vx-=1.35*de*ae,C.vz-=1.35*de*He,C.w+=(Se>0?1:-1)*de*.04*(ae*X-He*z>0?1:-1),-de>3.5&&(C.dmg+=-de*3,C===Ae&&(pt.crash(-de),os(-de*.03),_.hitPl||(_.hitPl=1,er(1,"zrážka s električkou"))))),C.parked&&(C.parked=!1),C.hitT=3}}}let D=F?[ze,...oi]:oi;for(let C of D){let z=C===ze,X=z?ze.x:C.x,ee=z?ze.z:C.z;if(!(Math.abs(X-_.hx)>46||Math.abs(ee-_.hz)>46))for(let q of _.secs){if(!q.on||Math.abs(X-q.x)>6||Math.abs(ee-q.z)>6)continue;let ue=Math.sin(q.h),se=Math.cos(q.h),Se=X-q.x,ae=ee-q.z,He=Ze(Se*ue+ae*se,-f/2-.6,f/2+.6),Le=q.x+ue*He,Ie=q.z+se*He,de=X-Le,he=ee-Ie,te=Math.hypot(de,he),Re=1.55;te>=Re||(te<.001&&(de=se,he=-ue,te=1),de/=te,he/=te,z?(ze.x=Le+de*Re,ze.z=Ie+he*Re,_.v>2.5&&Si.hurtT<=0&&(ne.hp-=_.v*4.5,Si.hurtT=1,pt.crash(_.v*.6),Ke.flash("#ff2a2a",.4))):C.state!=="down"&&(_.v>2.2?(C.knock(ue*_.v*.6+de*2,se*_.v*.6+he*2,_.v>7),pt.thud()):(C.p.x=Le+de*Re,C.p.z=Ie+he*Re)))}}}}function N(){let F=M.edges.filter(Le=>Math.hypot(Le.p[0][0]-554,Le.p[0][1]-713)<25&&!Le.nin);if(!F.length)return;let S=F[0],_=S.p[0],D=S.p[1],C=Math.hypot(D[0]-_[0],D[1]-_[1])||1,z=(D[0]-_[0])/C,X=(D[1]-_[1])/C,ee=_[0]-X*1.8-z*1.5,q=_[1]+z*1.8-X*1.5,ue=fe.hAt(_[0]+z*6,_[1]+X*6),se=new le.Group,Se=a(new le.Lambert({vertexColors:!0})),ae=new le.Mesh(o([[1.3,7.4,2.4,-5.6,3.7,0,"#8d877b"],[1.3,7.4,2.4,5.6,3.7,0,"#8d877b"],[12.5,1.6,2.6,0,7.6,0,"#989284"],[13.4,.5,3,0,8.6,0,"#7d776c"],[20,9,.6,0,4.2,-1.3,"#6f6a60"]]),Se),He=new le.Mesh(new le.Plane(9.9,6.8),new le.Basic({color:197379}));He.position.set(0,3.4,-.95),ae.castShadow=ae.receiveShadow=!0,se.add(ae,He),se.position.set(ee,ue-.4,q),se.rotation.y=Math.atan2(z,X),fe.group.add(se)}const I={on:!1,acc:0,fineT:0,fastT:0,cool:0,told:!1,el:null,entries:[],boll:null};function O(){const S=document.createElement("canvas");S.width=S.height=512;let _=S.getContext("2d",{willReadFrequently:!0});_.setTransform(512/fe.W,0,0,512/fe.H,0,0),_.fillStyle="#000",_.fillRect(0,0,fe.W,fe.H);let D=(q,ue)=>{_.beginPath(),q.forEach((se,Se)=>Se?_.lineTo(se[0]/10,se[1]/10):_.moveTo(se[0]/10,se[1]/10)),ue&&_.closePath()};_.fillStyle="#f00";for(let q of fe.d.bld)q.k!=="roof"&&q.k!=="pylon"&&(D(q.o,!0),_.fill());_.strokeStyle="#f00",_.lineCap="butt";for(let q of fe.d.road)q.c>=1&&q.c<=4&&!q.nv&&(_.lineWidth=q.w+1,D(q.p,!1),_.stroke());for(let q of fe.d.water)D(q,!0),_.fill();_.fillStyle=_.strokeStyle="#00f";for(let q of fe.d.parea)D(q,!0),_.fill();for(let q of fe.d.road)q.c===5&&(_.lineWidth=6.5,D(q.p,!1),_.stroke());let C=_.getImageData(0,0,512,512).data,z=new Uint8Array(512*512).fill(255),X=[];for(let q=0;q<512*512;q++)C[q*4+2]>128&&C[q*4]<128&&(z[q]=0,X.push(q));const ee=Math.round(27/(fe.W/512));for(let q=0;q<X.length;q++){let ue=X[q],se=z[ue];if(se>=ee)continue;let Se=ue%512,ae=ue/512|0;for(let[He,Le]of[[1,0],[-1,0],[0,1],[0,-1]]){let Ie=Se+He,de=ae+Le;if(Ie<0||de<0||Ie>=512||de>=512)continue;let he=de*512+Ie;z[he]!==255||C[he*4]>128||(z[he]=se+1,X.push(he))}}I.grid=z,I.N=512}function V(F,S){let _=I.N;if(!_)return!1;let D=Math.min(_-1,Math.max(0,Math.floor(F/fe.W*_))),C=Math.min(_-1,Math.max(0,Math.floor(S/fe.H*_)));if(I.grid[C*_+D]===255)return!1;let z=fe.maskAt(F,S);return z[0]<.4||z[2]>.5}function j(){O();let F=te=>te[0]*1e5+te[1],S=new Set;for(let te of fe.d.road)if(te.c>=1&&te.c<=4&&!te.nv)for(let Re of te.p)S.add(F(Re));let _=[];for(let te of fe.d.road)if(!(te.c!==5||te.p.length<2))for(let Re of[0,1]){let Ce=te.p[Re?te.p.length-1:0],Ge=te.p[Re?te.p.length-2:1];if(!S.has(F(Ce)))continue;let ve=Ce[0]/10,W=Ce[1]/10,be=Ge[0]/10-ve,Ee=Ge[1]/10-W,Ve=Math.hypot(be,Ee);if(Ve<3)continue;be/=Ve,Ee/=Ve;let Be=3;for(;Be<Math.min(Ve,16)&&!V(ve+be*Be,W+Ee*Be);)Be+=1.5;if(!V(ve+be*Be,W+Ee*Be))continue;let Oe=ve+be*(Be+1.2),je=W+Ee*(Be+1.2);_.some(We=>Math.hypot(We.x-Oe,We.z-je)<9)||_e(Oe,je,4.5)||_.push({x:Oe,z:je,dx:be,dz:Ee,down:0,tgt:0})}if(I.entries=_,!_.length)return;let D=r(160,208,(te,Re,Ce)=>{te.fillStyle="#f4f4f2",te.fillRect(0,0,Re,Ce),te.strokeStyle="#111",te.lineWidth=4,te.strokeRect(3,3,Re-6,Ce-6),te.fillStyle="#111",te.font="900 22px Anton, Impact, sans-serif",te.textAlign="center",te.fillText("PEŠIA ZÓNA",Re/2,30),te.fillStyle="#1456b8",te.beginPath(),te.arc(Re/2,92,50,0,7),te.fill(),te.fillStyle="#fff",te.beginPath(),te.arc(Re/2+4,62,9,0,7),te.fill(),te.strokeStyle="#fff",te.lineWidth=9,te.lineCap="round",te.beginPath(),te.moveTo(Re/2+2,76),te.lineTo(Re/2-2,104),te.lineTo(Re/2-16,130),te.moveTo(Re/2-2,104),te.lineTo(Re/2+14,128),te.moveTo(Re/2+2,82),te.lineTo(Re/2+20,96),te.moveTo(Re/2+2,82),te.lineTo(Re/2-18,92),te.stroke(),te.fillStyle="#111",te.font="700 15px sans-serif",te.fillText("ZÁSOBOVANIE",Re/2,166),te.font="900 22px sans-serif",te.fillText("6 – 9 h",Re/2,192)}),C=a(new le.Lambert({color:9080208})),z=a(new le.Lambert({map:D})),X=_.length,ee=new le.InstancedMesh(new le.Box(.7,.91,.04),[C,C,C,C,z,C],X),q=new le.InstancedMesh(new le.Cyl(.035,.035,2.9,6),C,X),ue=new le.Mat4,se=new le.Quat,Se=new le.Vec3,ae=new le.Vec3(1,1,1),He=new le.Vec3(0,1,0);_.forEach((te,Re)=>{let Ce=te.x-te.dz*3.4-te.dx*.6,Ge=te.z+te.dx*3.4-te.dz*.6;fe.collide(Ce,Ge,fe.hAt(Ce,Ge),.5,i)&&(Ce=i.x,Ge=i.z);let ve=fe.hAt(Ce,Ge);se.setFromAxisAngle(He,Math.atan2(-te.dx,-te.dz)),ue.compose(Se.set(Ce,ve+2.5,Ge),se,ae),ee.setMatrixAt(Re,ue),ue.compose(Se.set(Ce+te.dx*.045,ve+1.45,Ge+te.dz*.045),se,ae),q.setMatrixAt(Re,ue),fe.colliders.add({ax:Ce-.06,az:Ge,bx:Ce+.06,bz:Ge,y0:ve-2,y1:ve+3,kind:"p"},Ce-.2,Ge-.2,Ce+.2,Ge+.2),te.y=fe.hAt(te.x,te.z)}),ee.castShadow=q.castShadow=!0,fe.group.add(ee,q);let Le=new le.Cyl(.11,.11,.9,10),Ie=a(new le.Lambert({color:13225168})),de=new le.InstancedMesh(Le,Ie,X*3),he=new le.InstancedMesh(new le.Cyl(.115,.115,.07,10),new le.Basic({color:16726815}),X*3);de.castShadow=!0,I.boll=de,I.cap=he,I.M=ue,I.P=Se,I.Q=new le.Quat,I.S=ae,_.forEach((te,Re)=>Z(Re,0)),fe.group.add(de,he)}function Z(F,S){let _=I.entries[F];for(let D=0;D<3;D++){let C=(D-1)*1.7,z=_.x-_.dz*C,X=_.z+_.dx*C,ee=fe.hAt(z,X)-S*.86;I.M.compose(I.P.set(z,ee+.45,X),I.Q,I.S),I.boll.setMatrixAt(F*3+D,I.M),I.M.compose(I.P.set(z,ee+.86,X),I.Q,I.S),I.cap.setMatrixAt(F*3+D,I.M)}I.boll.instanceMatrix.needsUpdate=!0,I.cap.instanceMatrix.needsUpdate=!0}function me(F){let S=Ae,_=S?S.x:ze.x,D=S?S.z:ze.z;I.acc=Ze(I.acc+(V(_,D)?F:-F)*2.5,0,1),I.acc>=1?I.on=!0:I.acc<=0&&(I.on=!1),Mt.zoneNow=I.on;let C=ne.tod>=6&&ne.tod<9,z=I.el||(I.el=document.getElementById("zone"));if(z){let X=I.on?S?C?"PEŠIA ZÓNA · zásobovanie do 9:00 · max 20 km/h":"PEŠIA ZÓNA · autám vjazd zakázaný":"PEŠIA ZÓNA":"";I._txt!==X&&(I._txt=X,z.textContent=X,z.hidden=!X,z.classList.toggle("bad",!!S&&I.on&&!C))}if(I.cool>0&&(I.cool-=F),S&&I.on&&ne.mode==="play"){if(I.told||(I.told=!0,Ke.toast("Pešia zóna: autá len 6:00–9:00 (zásobovanie), max 20 km/h")),!C&&(I.fineT+=F,I.fineT>6)){I.fineT=-22;let X=Math.min(50,Math.floor(ne.money));ne.money-=X,Ke.toast("Mestská polícia: jazda v pešej zóne · pokuta "+(X?"−"+X+" €":"50 € (nemáš z čoho)")),pt._tone(660,330,.3,.14,"square")}S.speed*3.6>26?(I.fastT+=F,I.fastT>1.2&&I.cool<=0&&(I.cool=16,I.fastT=0,er(1,"rýchla jazda v pešej zóne"))):I.fastT=0}else I.fineT>0?I.fineT=0:I.fineT<0&&(I.fineT=Math.min(0,I.fineT+F));if(I.boll)for(let X=0;X<I.entries.length;X++){let ee=I.entries[X];ee.tgt=S&&Math.abs(S.x-ee.x)<11&&Math.abs(S.z-ee.z)<11?1:0,ee.down!==ee.tgt&&(ee.down=Ze(ee.down+(ee.tgt>ee.down?1:-1)*F*2.2,0,1),Z(X,ee.down))}}function _e(F,S,_){for(let D of M.edges){let C=D.p;for(let z=0;z<C.length-1;z++){let X=C[z][0],ee=C[z][1],q=C[z+1][0],ue=C[z+1][1];if(Math.min(X,q)-_>F||Math.max(X,q)+_<F||Math.min(ee,ue)-_>S||Math.max(ee,ue)+_<S)continue;let se=q-X,Se=ue-ee,ae=Ze(((F-X)*se+(S-ee)*Se)/(se*se+Se*Se||1),0,1);if(Math.hypot(X+se*ae-F,ee+Se*ae-S)<_)return!0}}return!1}function Fe(){let F=[],S=new Pr(fe.W,fe.H,12),_=[],D=yi?120:200;for(let he of fe.d.road){if(he.c!==5||F.length>=D)continue;let te=he.p.map(Ce=>[Ce[0]/10,Ce[1]/10]),Re=Math.floor(te[0][0]*7+te[0][1]*13);for(let Ce=0;Ce<te.length-1;Ce++){let Ge=te[Ce][0],ve=te[Ce][1],W=te[Ce+1][0]-Ge,be=te[Ce+1][1]-ve,Ee=Math.hypot(W,be);if(!(Ee<5)){W/=Ee,be/=Ee;for(let Ve=4+Ct(Re+Ce)*4;Ve<Ee-3;Ve+=7.5){let Be=Ct(Re*3+Ce*31+Math.floor(Ve));if(Be>.5)continue;let Oe=Be<.25?1:-1,je=2.1,We=Ge+W*Ve-be*je*Oe,et=ve+be*Ve+W*je*Oe;if(We<5||et<5||We>fe.W-5||et>fe.H-5||!V(We,et))continue;let Ye=fe.hAt(We,et);if(fe.surfaceY(We,et)>Ye+.3||Math.abs(fe.hAt(We+1.5,et)-Ye)>.25||Math.abs(fe.hAt(We,et+1.5)-Ye)>.25||fe.collide(We,et,Ye,1.7,i)||I.entries.some(Jt=>Math.hypot(Jt.x-We,Jt.z-et)<9)||_e(We,et,3.6)||S.query(We,et,4.2,_).some(Jt=>Math.hypot(Jt.x-We,Jt.z-et)<4.2))continue;let fi={x:We,y:Ye,z:et,a:Math.atan2(W,be),k:F.length};S.add(fi,We,et,We,et),F.push(fi)}}}}if(!F.length)return;let C=F.length,z=new le.Cyl(.06,1.5,.55,8),X=a(new le.Lambert({color:16777215,flatShading:!0}),.9),ee=o([[.05,2.5,.05,0,1.25,0,"#3a3b3d"],[.5,.06,.5,0,.03,0,"#2c2d2f"],[.78,.045,.78,0,.74,0,"#5a4632"],[.4,.05,.4,.78,.45,0,"#2f2a26"],[.05,.45,.4,.98,.68,0,"#2f2a26"],[.4,.05,.4,-.78,.45,0,"#2f2a26"],[.05,.45,.4,-.98,.68,0,"#2f2a26"],[.04,.45,.04,.62,.22,.16,"#232323"],[.04,.45,.04,.94,.22,-.16,"#232323"],[.04,.45,.04,-.62,.22,.16,"#232323"],[.04,.45,.04,-.94,.22,-.16,"#232323"]]),q=new le.InstancedMesh(z,X,C),ue=new le.InstancedMesh(ee,a(new le.Lambert({vertexColors:!0})),C),se=new le.Mat4,Se=new le.Quat,ae=new le.Vec3,He=new le.Vec3(1,1,1),Le=new le.Vec3(0,1,0),Ie=new le.Color,de=["#efe6cf","#efe6cf","#b3261e","#1f4d3a","#1e2f55","#e8e2d4","#c9a227","#7a1f2b"];F.forEach((he,te)=>{Se.setFromAxisAngle(Le,he.a+(Ct(te*3)-.5)*.5),se.compose(ae.set(he.x,he.y,he.z),Se,He),ue.setMatrixAt(te,se),se.compose(ae.set(he.x,he.y+2.5,he.z),Se,He),q.setMatrixAt(te,se),q.setColorAt(te,Ie.set(de[Math.floor(Ct(Math.floor(he.x/26)*31+Math.floor(he.z/26)*17)*de.length)])),fe.colliders.add({ax:he.x-.3,az:he.z,bx:he.x+.3,bz:he.z,y0:he.y-1,y1:he.y+2.4,kind:"p"},he.x-.5,he.z-.5,he.x+.5,he.z+.5)}),q.castShadow=ue.castShadow=!0,q.receiveShadow=!0,fe.group.add(q,ue),Mt.terraceN=C}function Te(){let F=(fe.fountains||[]).filter(D=>D.area>14);if(!F.length)return;let S=a(new le.Lambert({color:10130566,flatShading:!0})),_=new le.Shader({uniforms:{uTime:At.uTime,uNight:At.uNight},transparent:!0,depthWrite:!1,side:le.DoubleSide,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vU; uniform float uTime; uniform float uNight;
            float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
            void main(){
              float col = floor(vU.x * 28.0);
              float a = smoothstep(0.25, 1.0, fract(vU.y * 2.5 + uTime * (1.3 + 0.5*h(vec2(col, 1.0))) + h(vec2(col, 7.0))));
              a *= 0.55 * smoothstep(0.0, 0.12, vU.y) * smoothstep(1.0, 0.75, vU.y) * step(0.35, h(vec2(col, 3.0)));
              gl_FragColor = vec4(vec3(0.82, 0.9, 0.96) * mix(1.0, 0.16, uNight), a);
            }`});for(let D of F){if(D.noTop){let ae=new le.Mesh(new le.Cyl(.5,3.4,4.6,18,1,!0),_);ae.position.set(D.x,D.y+2.3,D.z),fe.group.add(ae);continue}let C=D.area>60,z=C?1.5:1,X=new le.Group,ee=new le.Mesh(new le.Cyl(.22*z,.36*z,1.9*z,8),S),q=new le.Mesh(new le.Cyl(.95*z,.28*z,.32*z,10),S),ue=new le.Mesh(new le.Cyl(.1*z,.2*z,.9*z,6),S),se=new le.Mesh(new le.Sphere(.2*z,8,6),S),Se=new le.Mesh(new le.Cyl(.9*z,1.05*z,1.95*z,14,1,!0),_);ee.position.y=.95*z,q.position.y=2.05*z,ue.position.y=2.6*z,se.position.y=3.15*z,Se.position.y=1.02*z,ee.castShadow=q.castShadow=!0,X.add(ee,q,ue,se,Se),X.position.set(D.x,D.y-.1,D.z),fe.group.add(X)}}function Pe(){let F=1031.2,S=766,_=fe.hAt(F,S),D=Math.atan2(-10.8,-16.2),C=new le.Group,z="#e3c56d",X="#d9d2bf",ee=new le.Mesh(o([[6.8,31,6.8,0,15.5,0,z],[7.3,.5,7.3,0,9.2,0,X],[7.3,.5,7.3,0,20.4,0,X],[8,.7,8,0,31.2,0,X],[8,1,.25,0,32,3.9,"#3a3a3a"],[8,1,.25,0,32,-3.9,"#3a3a3a"],[.25,1,8,3.9,32,0,"#3a3a3a"],[.25,1,8,-3.9,32,0,"#3a3a3a"],[1.3,2.6,.2,0,13.5,3.45,"#1d232b"],[1.3,2.6,.2,0,13.5,-3.45,"#1d232b"],[.2,2.6,1.3,3.45,13.5,0,"#1d232b"],[.2,2.6,1.3,-3.45,13.5,0,"#1d232b"]]),a(new le.Lambert({vertexColors:!0}))),q=a(new le.Lambert({color:14927213,flatShading:!0})),ue=a(new le.Lambert({color:5084288,flatShading:!0})),se=new le.Lambert({color:14266938,emissive:3812360}),Se=(Oe,je,We)=>{let et=new le.Mesh(Oe,je);return et.position.y=We,et.castShadow=!0,C.add(et),et};ee.castShadow=ee.receiveShadow=!0,C.add(ee),Se(new le.Cyl(2.9,3.1,5.2,8),q,34.1),Se(new le.Cyl(1.5,3.5,3.6,8),ue,38.5),Se(new le.Cyl(1.25,1.25,2.2,8),q,41.4),Se(new le.Cyl(.9,1.7,1.6,8),ue,43.3),Se(new le.Cyl(.05,.8,5.2,8),ue,46.7),Se(new le.Sphere(.35,8,6),se,49.4);let ae=r(128,128,(Oe,je,We)=>{Oe.fillStyle="#f3efe2",Oe.beginPath(),Oe.arc(64,64,60,0,7),Oe.fill(),Oe.strokeStyle="#222",Oe.lineWidth=5,Oe.stroke();for(let et=0;et<12;et++){let Ye=et/12*e*2;Oe.beginPath(),Oe.moveTo(64+Math.sin(Ye)*46,64-Math.cos(Ye)*46),Oe.lineTo(64+Math.sin(Ye)*54,64-Math.cos(Ye)*54),Oe.stroke()}Oe.lineWidth=6,Oe.lineCap="round",Oe.beginPath(),Oe.moveTo(64,64),Oe.lineTo(88,50),Oe.moveTo(64,64),Oe.lineTo(56,22),Oe.stroke()}),He=new le.Basic({map:ae,transparent:!0});for(let Oe=0;Oe<4;Oe++){let je=new le.Mesh(new le.Plane(3.4,3.4),He),We=Oe*e/2;je.position.set(Math.sin(We)*3.43,25.6,Math.cos(We)*3.43),je.rotation.y=We,C.add(je)}C.position.set(F,_-.5,S),C.rotation.y=D,fe.group.add(C);let Le=Math.cos(D)*3.4,Ie=Math.sin(D)*3.4,de=[[F+Le+Ie,S-Ie+Le],[F+Le-Ie,S-Ie-Le],[F-Le-Ie,S+Ie-Le],[F-Le+Ie,S+Ie+Le]];for(let Oe=0;Oe<4;Oe++){let je=de[Oe],We=de[(Oe+1)%4];fe.colliders.add({ax:je[0],az:je[1],bx:We[0],bz:We[1],y0:_-50,y1:_+31,kind:"b"},je[0],je[1],We[0],We[1])}let he=0,te=0,Re=!1;for(let[Oe,je]of[[997.5,771.5],[993,776],[1001,767],[990,770],[1e3,778],[986,782],[1004,762],[995,764]])if(V(Oe,je)&&!fe.collide(Oe,je,fe.hAt(Oe,je),5.6,i)){he=Oe,te=je,Re=!0;break}if(!Re)return;let Ce=Math.min(fe.hAt(he,te),fe.hAt(he+4,te),fe.hAt(he-4,te),fe.hAt(he,te+4),fe.hAt(he,te-4)),Ge=a(new le.Lambert({color:10130566,flatShading:!0})),ve=new le.Group,W=new le.Mesh(new le.Cyl(4.7,4.9,.85,16),Ge),be=new le.Mesh(new le.Cyl(4.35,4.35,.03,16),fe.waterMat||new le.Lambert({color:2903898})),Ee=new le.Mesh(new le.Cyl(.5,.75,5.2,8),Ge),Ve=new le.Mesh(new le.Cyl(.9,.5,.5,8),Ge),Be=new le.Mesh(o([[.55,1.1,.4,0,.55,0,"#8f897b"],[.75,.75,.45,0,1.45,0,"#989284"],[.36,.4,.36,0,2.05,0,"#a39d8e"],[.1,2,.1,.5,1.2,.1,"#77726a"],[.5,.7,.08,-.35,1.3,.26,"#8a8478"]]),a(new le.Lambert({vertexColors:!0})));W.position.y=.42,be.position.y=.86,Ee.position.y=3,Ve.position.y=5.8,Be.position.y=6.05,W.castShadow=Ee.castShadow=Be.castShadow=!0,W.receiveShadow=!0,ve.add(W,be,Ee,Ve,Be),ve.position.set(he,Ce-.05,te),fe.group.add(ve);for(let Oe=0;Oe<10;Oe++){let je=Oe/10*e*2,We=(Oe+1)/10*e*2,et=[he+Math.sin(je)*4.8,te+Math.cos(je)*4.8],Ye=[he+Math.sin(We)*4.8,te+Math.cos(We)*4.8];fe.colliders.add({ax:et[0],az:et[1],bx:Ye[0],bz:Ye[1],y0:Ce-2,y1:Ce+1.3,kind:"w"},et[0],et[1],Ye[0],Ye[1])}(fe.fountains||(fe.fountains=[])).push({x:he,z:te,y:Ce+.75,area:30,noTop:!0,spray:1})}function B(){let F=1038.6,S=849.4;for(let se=0;se<8&&fe.collide(F,S,fe.hAt(F,S),1.2,i);se++)F=i.x,S=i.z;let _=fe.hAt(F,S),D=a(new le.Lambert({color:5192994}),1.2),C=a(new le.Lambert({color:1710620})),z=new le.Group,X=(se,Se,ae,He,Le,Ie=0,de=0)=>{let he=new le.Mesh(se,Se);return he.position.set(ae,He,Le),he.rotation.set(Ie,0,de),he.castShadow=!0,z.add(he),he};X(new le.Cyl(.52,.52,.05,16),C,0,.025,0),X(new le.Torus(.5,.05,6,18),D,0,.05,0,e/2),X(new le.Cyl(.5,.5,.04,16),D,-.35,.3,-.42,.9,.2),X(new le.Box(.5,.2,.26),D,0,.13,-.1),X(new le.Box(.56,.12,.2),D,0,.11,.22),X(new le.Sphere(.15,10,8),D,0,.3,.12),X(new le.Cyl(.19,.2,.07,12),D,0,.4,.1),X(new le.Sphere(.16,10,6,0,e*2,0,e/2),D,0,.41,.1);let ee=r(128,128,(se,Se,ae)=>{se.fillStyle="#1456b8",se.beginPath(),se.arc(Se/2,ae/2,62,0,7),se.fill(),se.fillStyle="#ffd21a",se.beginPath(),se.arc(Se/2,ae/2,54,0,7),se.fill(),se.fillStyle="#111",se.font="900 30px Anton, Impact, sans-serif",se.textAlign="center",se.fillText("MAN",Se/2,50),se.fillText("AT WORK",Se/2,88)});X(new le.Cyl(.03,.03,2.2,6),C,1.1,1.1,-.3);let q=X(new le.Cyl(.3,.3,.03,18),[C,new le.Basic({map:ee}),C],1.1,2.3,-.3,e/2);q.rotation.z=0,z.position.set(F,_,S),z.rotation.y=-.6,fe.group.add(z),fe.colliders.add({ax:F-.3,az:S,bx:F+.3,bz:S,y0:_-1,y1:_+.5,kind:"p"},F-.5,S-.5,F+.5,S+.5);let ue={ax:F-.5,az:S,bx:F+.5,bz:S,hw:2.5,n:"Čumil"};fe.names.add(ue,F-3,S-3,F+3,S+3),pe[0][1]=F,pe[0][2]=S}const pe=[["Čumil",1038.6,849.4,14],["Michalská brána",875.5,598.2,24],["Hlavné námestie a Stará radnica",1016,778,30],["Primaciálny palác",1094,722,34],["Dóm svätého Martina",750.5,948,38],["Bratislavský hrad",388,946,75],["Slovenské národné divadlo",1105,920,36],["Reduta",1118,1062,42],["Modrý kostolík",1438.5,433.8,36],["Prezidentský palác",945,175,50],["Most SNP a UFO",713.7,1516.8,45],["Stará tržnica",1217.7,668.9,40],["Slovenská národná galéria",1015,1175,40],["Slovenské národné múzeum",1368,1141,46],["Hotel Kyjev",1488,493,40],["Mestské kúpele Grössling",1306,1076,40]],ge=new Set;function ye(){try{for(let F of JSON.parse(localStorage.getItem("gtb3d-pamiatky")||"[]"))ge.add(F)}catch{}window.__gtbLM=(F,S)=>{for(let _ of pe)F(_[1],_[2],ge.has(_[0])?"#7dff6a":"#ffffff",S/150)}}let xe=0;function Ue(F){if(xe-=F,xe>0||ne.mode!=="play")return;xe=.4;let S=Ae?Ae.x:ze.x,_=Ae?Ae.z:ze.z;for(let D of pe){if(ge.has(D[0])||Math.hypot(D[1]-S,D[2]-_)>D[3])continue;ge.add(D[0]);try{localStorage.setItem("gtb3d-pamiatky",JSON.stringify([...ge]))}catch{}let C=ge.size===pe.length,z=C?1500:60;ne.money+=z,Ke.big(C?"CELÁ BRATISLAVA":"OBJAVENÉ",`${D[0]} · ${ge.size}/${pe.length} · +${z} €`,"#ffcc33",3),pt.win();break}}function Me(){let F=[[1089,725.6,2]];for(let[S,_,D]of F){if(fe.collide(S,_,fe.hAt(S,_),2.2,i)&&(S=i.x,_=i.z),fe.collide(S,_,fe.hAt(S,_),1.2,i))continue;let C=Dr("fabka",S,_,D,"#f3f4f5");C.parked=C.keep=!0,C.mp=!0,u(C,"mp")}}return{zoneNow:!1,plateMat:l,gloss:n,livery:u,flash:d,maybeTaxi:v,inZone:V,trams:M,zone:I,landmarks:pe,patchData(F){for(let S of F.bld)S.n==="Kostol sv. Alžbety"&&(S.c="#9cc4e8",S.rc="#5f86b4")},init(){let F=(S,_)=>{try{_()}catch(D){console.error("X3 "+S,D)}};F("trams",L),F("zone",j),F("cumil",B),F("radnica",Pe),F("terraces",Fe),F("fountains",Te),F("patrol",Me),F("landmarks",ye),F("prewarm",()=>{for(let S=0;S<40&&M.list.length<Math.min(5,M.max);S++){let _=k(1);_&&(_.s=60+mt()*Math.max(10,_.r.L-200),J(_))}}),t=!0},obst(){return t&&M.proxies.length?Mt._ob=_t.concat(M.proxies):_t},update(F,S){t&&(E(F,S),M.mWin.emissive.setScalar(.004+At.uNight.value*1.25),M.mHead.color.setScalar(1+At.uNight.value*3),!S&&(me(F),Ue(F),Ae&&Ae.mp&&!Ae.mpStolen&&(Ae.mpStolen=1,er(2,"krádež auta mestskej polície"))))},goalText(){return" · Pamiatky "+ge.size+"/"+pe.length}}})();c1().catch(e=>{console.error(e),Ke.error(String(e&&e.message?e.message:e))})})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
