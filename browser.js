// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,w=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,g=/\.0*e/,d=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,d,"$1e"),e=l.call(e,g,"e"),e=l.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,v,"e+0$1"),e=l.call(e,w,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+N(e):N(e)+r}var H=String.fromCharCode,I=isNaN,E=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function O(r){var n,t,e,u,o,c,s,p,l;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(u=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,I(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!I(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(o)?String(e.arg):H(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(j(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function S(r){return"string"==typeof r}function k(r){var n,t,e;if(!S(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return O.apply(null,t)}var T=Object.prototype,G=T.toString,F=T.__defineGetter__,L=T.__defineSetter__,W=T.__lookupGetter__,V=T.__lookupSetter__,M=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,o;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,n)||V.call(r,n)?(e=r.__proto__,r.__proto__=T,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,o="set"in t,i&&(u||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&F&&F.call(r,n,t.get),o&&L&&L.call(r,n,t.set),r};function P(r,n,t){M(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r,n,t){M(r,n,{configurable:!1,enumerable:!1,get:t})}function C(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(r){var n,t,e,i,u;if(null==r)return q.call(r);t=r[z],u=z,n=null!=(i=r)&&X.call(i,u);try{r[z]=void 0}catch(n){return q.call(r)}return e=q.call(r),n?r[z]=t:delete r[z],e}:function(r){return q.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return C(r)||Q(r)}function nr(r){return C(r)&&r>0}function tr(r){return Q(r)&&r.valueOf()>0}function er(r){return nr(r)||tr(r)}function ir(r){return r!=r}function ur(r){return C(r)&&ir(r)}function or(r){return Q(r)&&ir(r.valueOf())}function ar(r){return ur(r)||or(r)}P(rr,"isPrimitive",C),P(rr,"isObject",Q),P(er,"isPrimitive",nr),P(er,"isObject",tr),P(ar,"isPrimitive",ur),P(ar,"isObject",or);var fr,cr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,vr=fr,wr="function"==typeof Float64Array,hr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr([1,3.14,-3.14,NaN]),t=n,r=(wr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var br,gr=lr,dr="function"==typeof Uint8Array,mr="function"==typeof Uint8Array?Uint8Array:null,Nr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,256,257]),t=n,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,Hr=br,Ir="function"==typeof Uint16Array,Er="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof Er)return!1;try{n=new Er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or,Ur=Ar,jr={uint16:Ur,uint8:Hr};(Or=new jr.uint16(1))[0]=4660;var xr=52===new jr.uint8(Or.buffer)[0],Sr=!0===xr?1:0,kr=new gr(1),Tr=new vr(kr.buffer);function Gr(r){return kr[0]=r,Tr[Sr]}var Fr=!0===xr?1:0,Lr=new gr(1),Wr=new vr(Lr.buffer),Vr=D.NEGATIVE_INFINITY,Mr=.6931471803691238,Pr=1.9082149292705877e-10,$r=1048575;function Cr(r){var n,t,e,i,u,o,a,f,c,s,p,l;return 0===r?Vr:ir(r)||r<0?NaN:(u=0,(t=Gr(r))<1048576&&(u-=54,t=Gr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=$r)&1048576|0)>>20|0,a=(r=function(r,n){return Lr[0]=r,Wr[Fr]=n>>>0,Lr[0]}(r,t|1072693248^f))-1,($r&2+t)<3?0===a?0===u?0:u*Mr+u*Pr:(o=a*a*(.5-.3333333333333333*a),0===u?a-o:u*Mr-(o-u*Pr-a)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=a/(2+a))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*a*a,0===u?a-(n-s*(n+o)):u*Mr-(n-(s*(n+o)+u*Pr)-a)):0===u?a-s*(a-o):u*Mr-(s*(a-o)-u*Pr-a))))}var Rr=Math.floor,Zr=Math.ceil;function qr(r){return r<0?Zr(r):Rr(r)}var Xr=Number.POSITIVE_INFINITY;function Yr(r){return r===Xr||r===Vr}var zr,Br={uint16:Ur,uint8:Hr};zr=function(){var r;return(r=new Br.uint16(1))[0]=4660,52===new Br.uint8(r.buffer)[0]}();var Dr,Jr,Kr=zr;!0===Kr?(Dr=1,Jr=0):(Dr=0,Jr=1);var Qr={HIGH:Dr,LOW:Jr},rn=new gr(1),nn=new vr(rn.buffer),tn=Qr.HIGH,en=Qr.LOW;function un(r,n,t,e){return rn[0]=r,n[e]=nn[tn],n[e+t]=nn[en],n}function on(r){return un(r,[0,0],1,0)}P(on,"assign",un);var an,fn,cn=!0===Kr?1:0,sn=new gr(1),pn=new vr(sn.buffer);function ln(r){return sn[0]=r,pn[cn]}!0===Kr?(an=1,fn=0):(an=0,fn=1);var vn={HIGH:an,LOW:fn},wn=new gr(1),hn=new vr(wn.buffer),yn=vn.HIGH,bn=vn.LOW;function gn(r,n){return hn[yn]=r,hn[bn]=n,wn[0]}var dn=[0,0];function mn(r,n,t,e){return ir(r)||Yr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return mn(r,[0,0],1,0)}),"assign",mn);var Nn=[0,0],An=[0,0];function Hn(r,n){var t,e,i,u,o,a;return 0===n||0===r||ir(r)||Yr(r)?r:(mn(r,Nn,1,0),n+=Nn[1],n+=function(r){var n=ln(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Nn[0]),n<-1074?(i=0,u=r,on.assign(i,dn,1,0),o=dn[0],o&=2147483647,a=ln(u),gn(o|=a&=2147483648,dn[1])):n>1023?r<0?Vr:Xr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,on.assign(r,An,1,0),t=An[0],t&=2148532223,e*gn(t|=n+1023<<20,An[1])))}var In=1.4426950408889634,En=1/(1<<28);function _n(r){var n;return ir(r)||r===Xr?r:r===Vr?0:r>709.782712893384?Xr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<En?1+r:function(r,n,t){var e,i,u,o;return Hn(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=qr(r<0?In*r-.5:In*r+.5)),1.9082149292705877e-10*n,n)}function On(r,n,t){var e;return ir(r)||ir(n)||ir(t)||t<=0?NaN:(e=(r-n)/t,r<n?.5*_n(e):1-.5*_n(-e))}P(On,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){var e;return ir(t)?NaN:(e=(t-r)/n,t<r?.5*_n(e):1-.5*_n(-e))};var t}));var Un,jn={uint16:Ur,uint8:Hr};Un=function(){var r;return(r=new jn.uint16(1))[0]=4660,52===new jn.uint8(r.buffer)[0]}();var xn=Un,Sn=!0===xn?1:0,kn=new gr(1),Tn=new vr(kn.buffer);function Gn(r){return kn[0]=r,Tn[Sn]}var Fn,Ln,Wn=!0===xn?1:0,Vn=new gr(1),Mn=new vr(Vn.buffer);function Pn(r,n){return Vn[0]=r,Mn[Wn]=n>>>0,Vn[0]}!0===xn?(Fn=1,Ln=0):(Fn=0,Ln=1);var $n={HIGH:Fn,LOW:Ln},Cn=new gr(1),Rn=new vr(Cn.buffer),Zn=$n.HIGH,qn=$n.LOW,Xn=.6931471803691238,Yn=1.9082149292705877e-10,zn=1.4426950408889634;function Bn(r){var n,t,e,i,u,o,a,f,c,s,p,l,v,w,h;if(r===Xr||ir(r))return r;if(r===Vr)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=38.816242111356935){if(e)return-1;if(f>=709.782712893384)return Xr}if(o=0|Gn(f),f>.34657359027997264)f<1.0397207708399179?e?(i=r+Xn,u=-Yn,v=-1):(i=r-Xn,u=Yn,v=1):(v=e?zn*r-.5:zn*r+.5,i=r-(p=v|=0)*Xn,u=p*Yn),s=i-(r=i-u)-u;else{if(o<1016070144)return r;v=0}return a=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((a-(p=3-a*n))/(6-r*p)),0===v?r-(r*l-c):(w=1023+v<<20,h=0,Rn[Zn]=w,Rn[qn]=h,t=Cn[0],l=r*(l-s)-s,l-=c,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(f=1-(l-r),1024===v?f=Pn(f,i=Gn(f)+(v<<20)|0):f*=t,f-1):(p=1,v<20?f=(p=Pn(p,i=1072693248-(2097152>>v)|0))-(l-r):(f=r-(l+(p=Pn(p,i=1023-v<<20|0))),f+=1),f*=t))}var Dn,Jn={uint16:Ur,uint8:Hr};Dn=function(){var r;return(r=new Jn.uint16(1))[0]=4660,52===new Jn.uint8(r.buffer)[0]}();var Kn=Dn,Qn=!0===Kn?1:0,rt=new gr(1),nt=new vr(rt.buffer);function tt(r){return rt[0]=r,nt[Qn]}var et=!0===Kn?1:0,it=new gr(1),ut=new vr(it.buffer);function ot(r,n){return it[0]=r,ut[et]=n>>>0,it[0]}var at=.6931471803691238,ft=1.9082149292705877e-10;function ct(r){var n,t,e,i,u,o,a,f,c,s;if(r<-1||ir(r))return NaN;if(-1===r)return Vr;if(r===Xr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(u=(s=((t=tt(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(s=((t=tt(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=ot(c,1072693248|t):(s+=1,c=ot(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*at+(u+=s*ft):s*at-((f=n*(1-.6666666666666666*i))-(s*ft+u)-i):(f=(a=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===s?i-(n-o*(n+f)):s*at-(n-(o*(n+f)+(s*ft+u))-i))}var st=-.6931471805599453;function pt(r,n,t){var e;return ir(r)||ir(n)||ir(t)||t<=0?NaN:(e=(r-n)/t,r<n?st+e:st+ct(-Bn(-e)))}function lt(r){return Math.abs(r)}P(pt,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){var e;return ir(t)?NaN:(e=(t-r)/n,t<r?st+e:st+ct(-Bn(-e)))};var t}));var vt,wt={uint16:Ur,uint8:Hr};vt=function(){var r;return(r=new wt.uint16(1))[0]=4660,52===new wt.uint8(r.buffer)[0]}();var ht=vt,yt=!0===ht?1:0,bt=new gr(1),gt=new vr(bt.buffer);function dt(r){return bt[0]=r,gt[yt]}var mt=!0===ht?1:0,Nt=new gr(1),At=new vr(Nt.buffer),Ht=.6931471803691238,It=1.9082149292705877e-10,Et=1048575;function _t(r){var n,t,e,i,u,o,a,f,c,s,p,l;return 0===r?Vr:ir(r)||r<0?NaN:(u=0,(t=dt(r))<1048576&&(u-=54,t=dt(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=Et)&1048576|0)>>20|0,a=(r=function(r,n){return Nt[0]=r,At[mt]=n>>>0,Nt[0]}(r,t|1072693248^f))-1,(Et&2+t)<3?0===a?0===u?0:u*Ht+u*It:(o=a*a*(.5-.3333333333333333*a),0===u?a-o:u*Ht-(o-u*It-a)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=a/(2+a))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*a*a,0===u?a-(n-s*(n+o)):u*Ht-(n-(s*(n+o)+u*It)-a)):0===u?a-s*(a-o):u*Ht-(s*(a-o)-u*It-a))))}function Ot(r,n,t){return ir(r)||ir(n)||ir(t)||t<=0?NaN:-(lt((r-n)/t)+_t(2*t))}function Ut(r){return Math.abs(r)}P(Ot,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){return ir(t)?NaN:-(lt((t-r)/n)+_t(2*n))};var t}));var jt=Math.ceil;function xt(r){return r<0?jt(r):Rr(r)}var St=1023;function kt(r){return r===Xr||r===Vr}var Tt,Gt=2147483647,Ft={uint16:Ur,uint8:Hr};Tt=function(){var r;return(r=new Ft.uint16(1))[0]=4660,52===new Ft.uint8(r.buffer)[0]}();var Lt,Wt,Vt=Tt;!0===Vt?(Lt=1,Wt=0):(Lt=0,Wt=1);var Mt={HIGH:Lt,LOW:Wt},Pt=new gr(1),$t=new vr(Pt.buffer),Ct=Mt.HIGH,Rt=Mt.LOW;function Zt(r,n,t,e){return Pt[0]=r,n[e]=$t[Ct],n[e+t]=$t[Rt],n}function qt(r){return Zt(r,[0,0],1,0)}P(qt,"assign",Zt);var Xt,Yt,zt=!0===Vt?1:0,Bt=new gr(1),Dt=new vr(Bt.buffer);function Jt(r){return Bt[0]=r,Dt[zt]}!0===Vt?(Xt=1,Yt=0):(Xt=0,Yt=1);var Kt={HIGH:Xt,LOW:Yt},Qt=new gr(1),re=new vr(Qt.buffer),ne=Kt.HIGH,te=Kt.LOW;function ee(r,n){return re[ne]=r,re[te]=n,Qt[0]}var ie=[0,0];function ue(r,n){var t,e;return qt.assign(r,ie,1,0),t=ie[0],t&=Gt,e=Jt(n),ee(t|=e&=2147483648,ie[1])}function oe(r,n,t,e){return ir(r)||kt(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ut(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return oe(r,[0,0],1,0)}),"assign",oe);var ae=[0,0],fe=[0,0];function ce(r,n){var t,e;return 0===n||0===r||ir(r)||kt(r)?r:(oe(r,ae,1,0),n+=ae[1],n+=function(r){var n=Jt(r);return(n=(2146435072&n)>>>20)-St|0}(r=ae[0]),n<-1074?ue(0,r):n>1023?r<0?Vr:Xr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,qt.assign(r,fe,1,0),t=fe[0],t&=2148532223,e*ee(t|=n+St<<20,fe[1])))}var se=1.4426950408889634,pe=1/(1<<28);function le(r){var n;return ir(r)||r===Xr?r:r===Vr?0:r>709.782712893384?Xr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<pe?1+r:function(r,n,t){var e,i,u,o;return ce(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=xt(r<0?se*r-.5:se*r+.5)),1.9082149292705877e-10*n,n)}function ve(r){return Rr(r)===r}function we(r){return ve(r/2)}function he(r){return we(r>0?r-1:r+1)}var ye=Math.sqrt,be=!0===Vt?0:1,ge=new gr(1),de=new vr(ge.buffer);function me(r,n){return ge[0]=r,de[be]=n>>>0,ge[0]}function Ne(r){return 0|r}var Ae=!0===Vt?1:0,He=new gr(1),Ie=new vr(He.buffer);function Ee(r,n){return He[0]=r,Ie[Ae]=n>>>0,He[0]}var _e=1048576,Oe=[1,1.5],Ue=[0,.5849624872207642],je=[0,1.350039202129749e-8],xe=1048575,Se=1048576,ke=1083179008,Te=1e300,Ge=1e-300,Fe=[0,0],Le=[0,0];function We(r,n){var t,e,i,u,o,a,f,c,s,p,l,v,w,h;if(ir(r)||ir(n))return NaN;if(qt.assign(n,Fe,1,0),o=Fe[0],0===Fe[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ye(r);if(-.5===n)return 1/ye(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(kt(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ut(r)<1==(n===Xr)?0:Xr}(r,n)}if(qt.assign(r,Fe,1,0),u=Fe[0],0===Fe[1]){if(0===u)return function(r,n){return n===Vr?Xr:n===Xr?0:n>0?he(n)?r:0:he(n)?ue(Xr,r):Xr}(r,n);if(1===r)return 1;if(-1===r&&he(n))return-1;if(kt(r))return r===Vr?We(-0,-n):n<0?0:Xr}if(r<0&&!1===ve(n))return(r-r)/(r-r);if(i=Ut(r),t=u&Gt|0,e=o&Gt|0,f=o>>>31|0,a=(a=u>>>31|0)&&he(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Jt(r)&Gt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Te*Te:a*Ge*Ge;if(t>1072693248)return 0===f?a*Te*Te:a*Ge*Ge;l=function(r,n){var t,e,i,u,o,a;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=me(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=t,r}(Le,i)}else l=function(r,n,t){var e,i,u,o,a,f,c,s,p,l,v,w,h,y,b,g,d,m,N,A,H;return m=0,t<_e&&(m-=53,t=Jt(n*=9007199254740992)),m+=(t>>20)-St|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=_e),o=me(i=(g=(n=Ee(n,t))-(c=Oe[A]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Ee(0,e+=A<<18),b=(u=i*i)*u*(0===(H=u)?.5999999999999946:.5999999999999946+H*(.4285714285785502+H*(.33333332981837743+H*(.272728123808534+H*(.23066074577556175+.20697501780033842*H))))),f=me(f=3+(u=o*o)+(b+=(a=d*(g-o*f-o*(n-(f-c))))*(o+i)),0),h=(v=-7.028461650952758e-9*(p=me(p=(g=o*f)+(d=a*f+(b-(f-3-u))*i),0))+.9617966939259756*(d-(p-g))+je[A])-((w=me(w=(l=.9617967009544373*p)+v+(s=Ue[A])+(y=m),0))-y-s-l),r[0]=w,r[1]=h,r}(Le,i,t);if(v=(p=(n-(c=me(n,0)))*l[0]+n*l[1])+(s=c*l[0]),qt.assign(v,Fe,1,0),w=Ne(Fe[0]),h=Ne(Fe[1]),w>=ke){if(0!=(w-ke|h))return a*Te*Te;if(p+8008566259537294e-32>v-s)return a*Te*Te}else if((w&Gt)>=1083231232){if(0!=(w-3230714880|h))return a*Ge*Ge;if(p<=v-s)return a*Ge*Ge}return v=function(r,n,t){var e,i,u,o,a,f,c,s,p,l;return p=((s=r&Gt|0)>>20)-St|0,c=0,s>1071644672&&(i=Ee(0,((c=r+(Se>>p+1)>>>0)&~(xe>>(p=((c&Gt)>>20)-St|0)))>>>0),c=(c&xe|Se)>>20-p>>>0,r<0&&(c=-c),n-=i),r=Ne(r=Jt(f=1-((f=(u=.6931471824645996*(i=me(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=o-(f-u))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?ce(f,c):Ee(f,r)}(w,s,p),a*v}function Ve(r,n,t){var e;return ir(r)||ir(n)||ir(t)||t<=0||Ut(r)>=1/t?NaN:(e=t*r,le(n*r)/(1-We(e,2)))}function Me(r){return Math.abs(r)}P(Ve,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){var e;return Ut(t)>=1/n?NaN:(e=n*t,le(r*t)/(1-We(e,2)))};var t}));var Pe=Math.ceil;function $e(r){return r<0?Pe(r):Rr(r)}function Ce(r){return r===Xr||r===Vr}var Re,Ze={uint16:Ur,uint8:Hr};Re=function(){var r;return(r=new Ze.uint16(1))[0]=4660,52===new Ze.uint8(r.buffer)[0]}();var qe,Xe,Ye=Re;!0===Ye?(qe=1,Xe=0):(qe=0,Xe=1);var ze={HIGH:qe,LOW:Xe},Be=new gr(1),De=new vr(Be.buffer),Je=ze.HIGH,Ke=ze.LOW;function Qe(r,n,t,e){return Be[0]=r,n[e]=De[Je],n[e+t]=De[Ke],n}function ri(r){return Qe(r,[0,0],1,0)}P(ri,"assign",Qe);var ni,ti,ei=!0===Ye?1:0,ii=new gr(1),ui=new vr(ii.buffer);function oi(r){return ii[0]=r,ui[ei]}!0===Ye?(ni=1,ti=0):(ni=0,ti=1);var ai={HIGH:ni,LOW:ti},fi=new gr(1),ci=new vr(fi.buffer),si=ai.HIGH,pi=ai.LOW;function li(r,n){return ci[si]=r,ci[pi]=n,fi[0]}var vi=[0,0];function wi(r,n,t,e){return ir(r)||Ce(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Me(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return wi(r,[0,0],1,0)}),"assign",wi);var hi=[0,0],yi=[0,0];function bi(r,n){var t,e,i,u,o,a;return 0===n||0===r||ir(r)||Ce(r)?r:(wi(r,hi,1,0),n+=hi[1],n+=function(r){var n=oi(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hi[0]),n<-1074?(i=0,u=r,ri.assign(i,vi,1,0),o=vi[0],o&=2147483647,a=oi(u),li(o|=a&=2147483648,vi[1])):n>1023?r<0?Vr:Xr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ri.assign(r,yi,1,0),t=yi[0],t&=2148532223,e*li(t|=n+1023<<20,yi[1])))}var gi=1.4426950408889634,di=1/(1<<28);function mi(r){var n;return ir(r)||r===Xr?r:r===Vr?0:r>709.782712893384?Xr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<di?1+r:function(r,n,t){var e,i,u,o;return bi(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=$e(r<0?gi*r-.5:gi*r+.5)),1.9082149292705877e-10*n,n)}function Ni(r,n,t){return ir(r)||ir(n)||ir(t)||t<=0?NaN:.5*mi(-Me((r-n)/t))/t}function Ai(r){return 0===r||ir(r)?r:r<0?-1:1}function Hi(r){return Math.abs(r)}P(Ni,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){return ir(t)?NaN:.5*mi(-Me((t-r)/n))/n};var t}));var Ii,Ei={uint16:Ur,uint8:Hr};Ii=function(){var r;return(r=new Ei.uint16(1))[0]=4660,52===new Ei.uint8(r.buffer)[0]}();var _i=Ii,Oi=!0===_i?1:0,Ui=new gr(1),ji=new vr(Ui.buffer);function xi(r){return Ui[0]=r,ji[Oi]}var Si=!0===_i?1:0,ki=new gr(1),Ti=new vr(ki.buffer),Gi=.6931471803691238,Fi=1.9082149292705877e-10,Li=1048575;function Wi(r){var n,t,e,i,u,o,a,f,c,s,p,l;return 0===r?Vr:ir(r)||r<0?NaN:(u=0,(t=xi(r))<1048576&&(u-=54,t=xi(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=Li)&1048576|0)>>20|0,a=(r=function(r,n){return ki[0]=r,Ti[Si]=n>>>0,ki[0]}(r,t|1072693248^f))-1,(Li&2+t)<3?0===a?0===u?0:u*Gi+u*Fi:(o=a*a*(.5-.3333333333333333*a),0===u?a-o:u*Gi-(o-u*Fi-a)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=a/(2+a))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*a*a,0===u?a-(n-s*(n+o)):u*Gi-(n-(s*(n+o)+u*Fi)-a)):0===u?a-s*(a-o):u*Gi-(s*(a-o)-u*Fi-a))))}function Vi(r,n,t){return ir(n)||ir(t)||ir(r)||t<=0||r<0||r>1?NaN:n-t*Ai(r-.5)*Wi(1-2*Hi(r-.5))}function Mi(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Pi(){var r,n;if(!(this instanceof Pi))return 0===arguments.length?new Pi:new Pi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!C(r=arguments[0])||ar(r))throw new TypeError(Mi("13h8p,HM",r));if(!nr(n))throw new TypeError(Mi("13h7c,HN",n))}else r=0,n=1;return M(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!C(n)||ar(n))throw new TypeError(Mi("13h8d,H8",n));r=n}}),M(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!nr(r))throw new TypeError(Mi("13h8k,HE",r));n=r}}),this}return P(Vi,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?(t=NaN,function(){return t}):function(t){return ir(t)||t<0||t>1?NaN:r-n*Ai(t-.5)*Wi(1-2*Hi(t-.5))};var t})),$(Pi.prototype,"entropy",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:Cr(2*n*2.718281828459045);var r,n})),$(Pi.prototype,"kurtosis",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:3;var r,n})),$(Pi.prototype,"mean",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),$(Pi.prototype,"median",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),$(Pi.prototype,"mode",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),$(Pi.prototype,"skewness",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:0;var r,n})),$(Pi.prototype,"stdev",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:1.4142135623730951*n;var r,n})),$(Pi.prototype,"variance",(function(){return r=this.mu,n=this.b,ir(r)||ir(n)||n<=0?NaN:2*n*n;var r,n})),P(Pi.prototype,"cdf",(function(r){return On(r,this.mu,this.b)})),P(Pi.prototype,"logcdf",(function(r){return pt(r,this.mu,this.b)})),P(Pi.prototype,"logpdf",(function(r){return Ot(r,this.mu,this.b)})),P(Pi.prototype,"mgf",(function(r){return Ve(r,this.mu,this.b)})),P(Pi.prototype,"pdf",(function(r){return Ni(r,this.mu,this.b)})),P(Pi.prototype,"quantile",(function(r){return Vi(r,this.mu,this.b)})),Pi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Laplace=n();
//# sourceMappingURL=browser.js.map
