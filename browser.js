// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(n){return"number"==typeof n}function e(n){var r,t="";for(r=0;r<n;r++)t+="0";return t}function i(n,r,t){var i=!1,o=r-n.length;return o<0||(function(n){return"-"===n[0]}(n)&&(i=!0,n=n.substr(1)),n=t?n+e(o):e(o)+n,i&&(n="-"+n)),n}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(n){var r,e,a;switch(n.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=n.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===n.specifier||10!==r)&&(a=4294967295+a+1),a<0?(e=(-a).toString(r),n.precision&&(e=i(e,n.precision,n.padRight)),e="-"+e):(e=a.toString(r),a||n.precision?n.precision&&(e=i(e,n.precision,n.padRight)):e="",n.sign&&(e=n.sign+e)),16===r&&(n.alternate&&(e="0x"+e),e=n.specifier===u.call(n.specifier)?u.call(e):o.call(e)),8===r&&n.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(n){return"string"==typeof n}var c=Math.abs,y=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,A=/^(\d+)e/,U=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function d(n){var r,e,i=parseFloat(n.arg);if(!isFinite(i)){if(!t(n.arg))throw new Error("invalid floating-point number. Value: "+e);i=n.arg}switch(n.specifier){case"e":case"E":e=i.toExponential(n.precision);break;case"f":case"F":e=i.toFixed(n.precision);break;case"g":case"G":c(i)<1e-4?((r=n.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(n.precision),n.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,h,"e"),e=s.call(e,U,""));break;default:throw new Error("invalid double notation. Value: "+n.specifier)}return e=s.call(e,l,"e+0$1"),e=s.call(e,v,"e-0$1"),n.alternate&&(e=s.call(e,w,"$1."),e=s.call(e,A,"$1.e")),i>=0&&n.sign&&(e=n.sign+e),e=n.specifier===p.call(n.specifier)?p.call(e):y.call(e)}function m(n){var r,t="";for(r=0;r<n;r++)t+=" ";return t}function g(n,r,t){var e=r-n.length;return e<0?n:n=t?n+m(e):m(e)+n}var N=String.fromCharCode,E=isNaN,j=Array.isArray;function I(n){var r={};return r.specifier=n.specifier,r.precision=void 0===n.precision?1:n.precision,r.width=n.width,r.flags=n.flags||"",r.mapping=n.mapping,r}function _(n){var r,t,e,o,u,c,y,p,s;if(!j(n))throw new TypeError("invalid argument. First argument must be an array. Value: `"+n+"`.");for(c="",y=1,p=0;p<n.length;p++)if(f(e=n[p]))c+=e;else{if(r=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(y=e.mapping),t=e.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[y],10),y+=1,E(e.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[y],10),y+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[y],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=r?e.precision:-1;break;case"c":if(!E(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(u)?String(e.arg):N(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=d(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=g(e.arg,e.width,e.padRight)),c+=e.arg||"",y+=1}return c}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(n){var r={mapping:n[1]?parseInt(n[1],10):void 0,flags:n[2],width:n[3],precision:n[5],specifier:n[6]};return"."===n[4]&&void 0===n[5]&&(r.precision="1"),r}function S(n){var r,t,e,i;for(t=[],i=0,e=H.exec(n);e;)(r=n.slice(i,H.lastIndex-e[0].length)).length&&t.push(r),t.push(O(e)),i=H.lastIndex,e=H.exec(n);return(r=n.slice(i)).length&&t.push(r),t}function x(n){return"string"==typeof n}function k(n){var r,t;if(!x(n))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",n));for(r=[S(n)],t=1;t<arguments.length;t++)r.push(arguments[t]);return _.apply(null,r)}var T=Object.prototype,G=T.toString,L=T.__defineGetter__,F=T.__defineSetter__,W=T.__lookupGetter__,V=T.__lookupSetter__,M=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,t){var e,i,o,u;if("object"!=typeof n||null===n||"[object Array]"===G.call(n))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",n));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(n,r)||V.call(n,r)?(e=n.__proto__,n.__proto__=T,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(n,r,t.get),u&&F&&F.call(n,r,t.set),n};function P(n,r,t){M(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(n,r,t){M(n,r,{configurable:!1,enumerable:!1,get:t})}function C(n){return"number"==typeof n}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(n){var r,t,e,i,o;if(null==n)return q.call(n);t=n[z],o=z,r=null!=(i=n)&&X.call(i,o);try{n[z]=void 0}catch(r){return q.call(n)}return e=q.call(n),r?n[z]=t:delete n[z],e}:function(n){return q.call(n)},D=Number,J=D.prototype.toString,K=Z();function Q(n){return"object"==typeof n&&(n instanceof D||(K?function(n){try{return J.call(n),!0}catch(n){return!1}}(n):"[object Number]"===B(n)))}function nn(n){return C(n)||Q(n)}function rn(n){return C(n)&&n>0}function tn(n){return Q(n)&&n.valueOf()>0}function en(n){return rn(n)||tn(n)}function on(n){return n!=n}function un(n){return C(n)&&on(n)}function an(n){return Q(n)&&on(n.valueOf())}function fn(n){return un(n)||an(n)}function cn(n){return n!=n}P(nn,"isPrimitive",C),P(nn,"isObject",Q),P(en,"isPrimitive",rn),P(en,"isObject",tn),P(fn,"isPrimitive",un),P(fn,"isObject",an);var yn,pn="function"==typeof Uint32Array,sn="function"==typeof Uint32Array?Uint32Array:null,ln="function"==typeof Uint32Array?Uint32Array:void 0;yn=function(){var n,r,t;if("function"!=typeof sn)return!1;try{r=new sn(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(pn&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ln:function(){throw new Error("not implemented")};var vn,wn=yn,An="function"==typeof Float64Array,Un="function"==typeof Float64Array?Float64Array:null,hn="function"==typeof Float64Array?Float64Array:void 0;vn=function(){var n,r,t;if("function"!=typeof Un)return!1;try{r=new Un([1,3.14,-3.14,NaN]),t=r,n=(An&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?hn:function(){throw new Error("not implemented")};var bn,dn=vn,mn="function"==typeof Uint8Array,gn="function"==typeof Uint8Array?Uint8Array:null,Nn="function"==typeof Uint8Array?Uint8Array:void 0;bn=function(){var n,r,t;if("function"!=typeof gn)return!1;try{r=new gn(r=[1,3.14,-3.14,256,257]),t=r,n=(mn&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Nn:function(){throw new Error("not implemented")};var En,jn=bn,In="function"==typeof Uint16Array,_n="function"==typeof Uint16Array?Uint16Array:null,Hn="function"==typeof Uint16Array?Uint16Array:void 0;En=function(){var n,r,t;if("function"!=typeof _n)return!1;try{r=new _n(r=[1,3.14,-3.14,65536,65537]),t=r,n=(In&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Hn:function(){throw new Error("not implemented")};var On,Sn={uint16:En,uint8:jn};(On=new Sn.uint16(1))[0]=4660;var xn=52===new Sn.uint8(On.buffer)[0],kn=!0===xn?1:0,Tn=new dn(1),Gn=new wn(Tn.buffer);function Ln(n){return Tn[0]=n,Gn[kn]}var Fn=!0===xn?1:0,Wn=new dn(1),Vn=new wn(Wn.buffer),Mn=D.NEGATIVE_INFINITY,Pn=.6931471803691238,$n=1.9082149292705877e-10,Cn=1048575;function Rn(n){var r,t,e,i,o,u,a,f,c,y,p,s;return 0===n?Mn:cn(n)||n<0?NaN:(o=0,(t=Ln(n))<1048576&&(o-=54,t=Ln(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=Cn)&1048576|0)>>20|0,a=(n=function(n,r){return Wn[0]=n,Vn[Fn]=r>>>0,Wn[0]}(n,t|1072693248^f))-1,(Cn&2+t)<3?0===a?0===o?0:o*Pn+o*$n:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Pn-(u-o*$n-a)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=a/(2+a))*y)*s)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=s*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-y*(r+u)):o*Pn-(r-(y*(r+u)+o*$n)-a)):0===o?a-y*(a-u):o*Pn-(y*(a-u)-o*$n-a))))}function Zn(n){return n!=n}function qn(n){return n!=n}function Xn(n){return n!=n}function Yn(n){return n!=n}function zn(n){return n!=n}function Bn(n){return n!=n}function Dn(n){return n!=n}function Jn(n){return n!=n}var Kn=Math.floor,Qn=Math.ceil;function nr(n){return n<0?Qn(n):Kn(n)}var rr=Number.POSITIVE_INFINITY;function tr(n){return n===rr||n===Mn}var er,ir="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var n,r,t;if("function"!=typeof or)return!1;try{r=new or(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ur:function(){throw new Error("not implemented")};var ar,fr=er,cr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,pr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var n,r,t;if("function"!=typeof yr)return!1;try{r=new yr(r=[1,3.14,-3.14,256,257]),t=r,n=(cr&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?pr:function(){throw new Error("not implemented")};var sr,lr=ar,vr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var n,r,t;if("function"!=typeof wr)return!1;try{r=new wr(r=[1,3.14,-3.14,65536,65537]),t=r,n=(vr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Ar:function(){throw new Error("not implemented")};var Ur,hr={uint16:sr,uint8:lr};Ur=function(){var n;return(n=new hr.uint16(1))[0]=4660,52===new hr.uint8(n.buffer)[0]}();var br,dr,mr=Ur;!0===mr?(br=1,dr=0):(br=0,dr=1);var gr={HIGH:br,LOW:dr},Nr=new dn(1),Er=new fr(Nr.buffer),jr=gr.HIGH,Ir=gr.LOW;function _r(n,r,t,e){return Nr[0]=n,r[e]=Er[jr],r[e+t]=Er[Ir],r}function Hr(n){return _r(n,[0,0],1,0)}P(Hr,"assign",_r);var Or,Sr,xr=!0===mr?1:0,kr=new dn(1),Tr=new fr(kr.buffer);function Gr(n){return kr[0]=n,Tr[xr]}!0===mr?(Or=1,Sr=0):(Or=0,Sr=1);var Lr={HIGH:Or,LOW:Sr},Fr=new dn(1),Wr=new fr(Fr.buffer),Vr=Lr.HIGH,Mr=Lr.LOW;function Pr(n,r){return Wr[Vr]=n,Wr[Mr]=r,Fr[0]}var $r=[0,0];function Cr(n,r,t,e){return Jn(n)||tr(n)?(r[e]=n,r[e+t]=0,r):0!==n&&function(n){return Math.abs(n)}(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}P((function(n){return Cr(n,[0,0],1,0)}),"assign",Cr);var Rr=[0,0],Zr=[0,0];function qr(n,r){var t,e,i,o,u,a;return 0===r||0===n||Jn(n)||tr(n)?n:(Cr(n,Rr,1,0),r+=Rr[1],r+=function(n){var r=Gr(n);return(r=(2146435072&r)>>>20)-1023|0}(n=Rr[0]),r<-1074?(i=0,o=n,Hr.assign(i,$r,1,0),u=$r[0],u&=2147483647,a=Gr(o),Pr(u|=a&=2147483648,$r[1])):r>1023?n<0?Mn:rr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Hr.assign(n,Zr,1,0),t=Zr[0],t&=2148532223,e*Pr(t|=r+1023<<20,Zr[1])))}var Xr=1.4426950408889634,Yr=1/(1<<28);function zr(n){var r;return Jn(n)||n===rr?n:n===Mn?0:n>709.782712893384?rr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Yr?1+n:function(n,r,t){var e,i,o,u;return qr(1-(r-(e=n-r)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-n),t)}(n-.6931471803691238*(r=nr(n<0?Xr*n-.5:Xr*n+.5)),1.9082149292705877e-10*r,r)}function Br(n,r,t){var e;return Jn(n)||Jn(r)||Jn(t)||t<=0?NaN:(e=(n-r)/t,n<r?.5*zr(e):1-.5*zr(-e))}function Dr(n){return n!=n}P(Br,"factory",(function(n,r){return Jn(n)||Jn(r)||r<=0?(t=NaN,function(){return t}):function(t){var e;return Jn(t)?NaN:(e=(t-n)/r,t<n?.5*zr(e):1-.5*zr(-e))};var t}));var Jr,Kr="function"==typeof Uint32Array,Qr="function"==typeof Uint32Array?Uint32Array:null,nt="function"==typeof Uint32Array?Uint32Array:void 0;Jr=function(){var n,r,t;if("function"!=typeof Qr)return!1;try{r=new Qr(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(Kr&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?nt:function(){throw new Error("not implemented")};var rt,tt=Jr,et="function"==typeof Uint8Array,it="function"==typeof Uint8Array?Uint8Array:null,ot="function"==typeof Uint8Array?Uint8Array:void 0;rt=function(){var n,r,t;if("function"!=typeof it)return!1;try{r=new it(r=[1,3.14,-3.14,256,257]),t=r,n=(et&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ot:function(){throw new Error("not implemented")};var ut,at=rt,ft="function"==typeof Uint16Array,ct="function"==typeof Uint16Array?Uint16Array:null,yt="function"==typeof Uint16Array?Uint16Array:void 0;ut=function(){var n,r,t;if("function"!=typeof ct)return!1;try{r=new ct(r=[1,3.14,-3.14,65536,65537]),t=r,n=(ft&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?yt:function(){throw new Error("not implemented")};var pt,st={uint16:ut,uint8:at};pt=function(){var n;return(n=new st.uint16(1))[0]=4660,52===new st.uint8(n.buffer)[0]}();var lt=pt,vt=!0===lt?1:0,wt=new dn(1),At=new tt(wt.buffer);function Ut(n){return wt[0]=n,At[vt]}var ht,bt,dt=!0===lt?1:0,mt=new dn(1),gt=new tt(mt.buffer);function Nt(n,r){return mt[0]=n,gt[dt]=r>>>0,mt[0]}!0===lt?(ht=1,bt=0):(ht=0,bt=1);var Et={HIGH:ht,LOW:bt},jt=new dn(1),It=new tt(jt.buffer),_t=Et.HIGH,Ht=Et.LOW,Ot=.6931471803691238,St=1.9082149292705877e-10,xt=1.4426950408889634;function kt(n){var r,t,e,i,o,u,a,f,c,y,p,s,l,v,w;if(n===rr||function(n){return n!=n}(n))return n;if(n===Mn)return-1;if(0===n)return n;if(n<0?(e=!0,f=-n):(e=!1,f=n),f>=38.816242111356935){if(e)return-1;if(f>=709.782712893384)return rr}if(u=0|Ut(f),f>.34657359027997264)f<1.0397207708399179?e?(i=n+Ot,o=-St,l=-1):(i=n-Ot,o=St,l=1):(l=e?xt*n-.5:xt*n+.5,i=n-(p=l|=0)*Ot,o=p*St),y=i-(n=i-o)-o;else{if(u<1016070144)return n;l=0}return a=1+(c=n*(r=.5*n))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(c),s=c*((a-(p=3-a*r))/(6-n*p)),0===l?n-(n*s-c):(v=1023+l<<20,w=0,It[_t]=v,It[Ht]=w,t=jt[0],s=n*(s-y)-y,s-=c,-1===l?.5*(n-s)-.5:1===l?n<-.25?-2*(s-(n+.5)):1+2*(n-s):l<=-2||l>56?(f=1-(s-n),1024===l?f=Nt(f,i=Ut(f)+(l<<20)|0):f*=t,f-1):(p=1,l<20?f=(p=Nt(p,i=1072693248-(2097152>>l)|0))-(s-n):(f=n-(s+(p=Nt(p,i=1023-l<<20|0))),f+=1),f*=t))}var Tt,Gt="function"==typeof Uint32Array,Lt="function"==typeof Uint32Array?Uint32Array:null,Ft="function"==typeof Uint32Array?Uint32Array:void 0;Tt=function(){var n,r,t;if("function"!=typeof Lt)return!1;try{r=new Lt(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(Gt&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Ft:function(){throw new Error("not implemented")};var Wt,Vt=Tt,Mt="function"==typeof Uint8Array,Pt="function"==typeof Uint8Array?Uint8Array:null,$t="function"==typeof Uint8Array?Uint8Array:void 0;Wt=function(){var n,r,t;if("function"!=typeof Pt)return!1;try{r=new Pt(r=[1,3.14,-3.14,256,257]),t=r,n=(Mt&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?$t:function(){throw new Error("not implemented")};var Ct,Rt=Wt,Zt="function"==typeof Uint16Array,qt="function"==typeof Uint16Array?Uint16Array:null,Xt="function"==typeof Uint16Array?Uint16Array:void 0;Ct=function(){var n,r,t;if("function"!=typeof qt)return!1;try{r=new qt(r=[1,3.14,-3.14,65536,65537]),t=r,n=(Zt&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Xt:function(){throw new Error("not implemented")};var Yt,zt={uint16:Ct,uint8:Rt};Yt=function(){var n;return(n=new zt.uint16(1))[0]=4660,52===new zt.uint8(n.buffer)[0]}();var Bt=Yt,Dt=!0===Bt?1:0,Jt=new dn(1),Kt=new Vt(Jt.buffer);function Qt(n){return Jt[0]=n,Kt[Dt]}var ne=!0===Bt?1:0,re=new dn(1),te=new Vt(re.buffer);function ee(n,r){return re[0]=n,te[ne]=r>>>0,re[0]}var ie=.6931471803691238,oe=1.9082149292705877e-10;function ue(n){var r,t,e,i,o,u,a,f,c,y;if(n<-1||function(n){return n!=n}(n))return NaN;if(-1===n)return Mn;if(n===rr)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,i=n,t=1)}return 0!==y&&(e<9007199254740992?(o=(y=((t=Qt(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),o/=c):(y=((t=Qt(c=n))>>20)-1023,o=0),(t&=1048575)<434334?c=ee(c,1072693248|t):(y+=1,c=ee(c,1071644672|t),t=1048576-t>>2),i=c-1),r=.5*i*i,0===t?0===i?y*ie+(o+=y*oe):y*ie-((f=r*(1-.6666666666666666*i))-(y*oe+o)-i):(f=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===y?i-(r-u*(r+f)):y*ie-(r-(u*(r+f)+(y*oe+o))-i))}var ae=-.6931471805599453;function fe(n,r,t){var e;return Dr(n)||Dr(r)||Dr(t)||t<=0?NaN:(e=(n-r)/t,n<r?ae+e:ae+ue(-kt(-e)))}function ce(n){return n!=n}function ye(n){return Math.abs(n)}P(fe,"factory",(function(n,r){return Dr(n)||Dr(r)||r<=0?(t=NaN,function(){return t}):function(t){var e;return Dr(t)?NaN:(e=(t-n)/r,t<n?ae+e:ae+ue(-kt(-e)))};var t}));var pe,se="function"==typeof Uint32Array,le="function"==typeof Uint32Array?Uint32Array:null,ve="function"==typeof Uint32Array?Uint32Array:void 0;pe=function(){var n,r,t;if("function"!=typeof le)return!1;try{r=new le(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(se&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ve:function(){throw new Error("not implemented")};var we,Ae=pe,Ue="function"==typeof Uint8Array,he="function"==typeof Uint8Array?Uint8Array:null,be="function"==typeof Uint8Array?Uint8Array:void 0;we=function(){var n,r,t;if("function"!=typeof he)return!1;try{r=new he(r=[1,3.14,-3.14,256,257]),t=r,n=(Ue&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?be:function(){throw new Error("not implemented")};var de,me=we,ge="function"==typeof Uint16Array,Ne="function"==typeof Uint16Array?Uint16Array:null,Ee="function"==typeof Uint16Array?Uint16Array:void 0;de=function(){var n,r,t;if("function"!=typeof Ne)return!1;try{r=new Ne(r=[1,3.14,-3.14,65536,65537]),t=r,n=(ge&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Ee:function(){throw new Error("not implemented")};var je,Ie={uint16:de,uint8:me};je=function(){var n;return(n=new Ie.uint16(1))[0]=4660,52===new Ie.uint8(n.buffer)[0]}();var _e=je,He=!0===_e?1:0,Oe=new dn(1),Se=new Ae(Oe.buffer);function xe(n){return Oe[0]=n,Se[He]}var ke=!0===_e?1:0,Te=new dn(1),Ge=new Ae(Te.buffer),Le=.6931471803691238,Fe=1.9082149292705877e-10,We=1048575;function Ve(n){var r,t,e,i,o,u,a,f,c,y,p,s;return 0===n?Mn:ce(n)||n<0?NaN:(o=0,(t=xe(n))<1048576&&(o-=54,t=xe(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=We)&1048576|0)>>20|0,a=(n=function(n,r){return Te[0]=n,Ge[ke]=r>>>0,Te[0]}(n,t|1072693248^f))-1,(We&2+t)<3?0===a?0===o?0:o*Le+o*Fe:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Le-(u-o*Fe-a)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=a/(2+a))*y)*s)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=s*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-y*(r+u)):o*Le-(r-(y*(r+u)+o*Fe)-a)):0===o?a-y*(a-u):o*Le-(y*(a-u)-o*Fe-a))))}function Me(n,r,t){return ce(n)||ce(r)||ce(t)||t<=0?NaN:-(ye((n-r)/t)+Ve(2*t))}function Pe(n){return n!=n}function $e(n){return Math.abs(n)}P(Me,"factory",(function(n,r){return ce(n)||ce(r)||r<=0?(t=NaN,function(){return t}):function(t){return ce(t)?NaN:-(ye((t-n)/r)+Ve(2*r))};var t}));var Ce=Math.ceil;function Re(n){return n<0?Ce(n):Kn(n)}var Ze=1023;function qe(n){return n===rr||n===Mn}var Xe,Ye=2147483647,ze="function"==typeof Uint32Array,Be="function"==typeof Uint32Array?Uint32Array:null,De="function"==typeof Uint32Array?Uint32Array:void 0;Xe=function(){var n,r,t;if("function"!=typeof Be)return!1;try{r=new Be(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(ze&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?De:function(){throw new Error("not implemented")};var Je,Ke=Xe,Qe="function"==typeof Uint8Array,ni="function"==typeof Uint8Array?Uint8Array:null,ri="function"==typeof Uint8Array?Uint8Array:void 0;Je=function(){var n,r,t;if("function"!=typeof ni)return!1;try{r=new ni(r=[1,3.14,-3.14,256,257]),t=r,n=(Qe&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ri:function(){throw new Error("not implemented")};var ti,ei=Je,ii="function"==typeof Uint16Array,oi="function"==typeof Uint16Array?Uint16Array:null,ui="function"==typeof Uint16Array?Uint16Array:void 0;ti=function(){var n,r,t;if("function"!=typeof oi)return!1;try{r=new oi(r=[1,3.14,-3.14,65536,65537]),t=r,n=(ii&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ui:function(){throw new Error("not implemented")};var ai,fi={uint16:ti,uint8:ei};ai=function(){var n;return(n=new fi.uint16(1))[0]=4660,52===new fi.uint8(n.buffer)[0]}();var ci,yi,pi=ai;!0===pi?(ci=1,yi=0):(ci=0,yi=1);var si={HIGH:ci,LOW:yi},li=new dn(1),vi=new Ke(li.buffer),wi=si.HIGH,Ai=si.LOW;function Ui(n,r,t,e){return li[0]=n,r[e]=vi[wi],r[e+t]=vi[Ai],r}function hi(n){return Ui(n,[0,0],1,0)}P(hi,"assign",Ui);var bi,di,mi=!0===pi?1:0,gi=new dn(1),Ni=new Ke(gi.buffer);function Ei(n){return gi[0]=n,Ni[mi]}!0===pi?(bi=1,di=0):(bi=0,di=1);var ji={HIGH:bi,LOW:di},Ii=new dn(1),_i=new Ke(Ii.buffer),Hi=ji.HIGH,Oi=ji.LOW;function Si(n,r){return _i[Hi]=n,_i[Oi]=r,Ii[0]}var xi=[0,0];function ki(n,r){var t,e;return hi.assign(n,xi,1,0),t=xi[0],t&=Ye,e=Ei(r),Si(t|=e&=2147483648,xi[1])}function Ti(n,r,t,e){return Pe(n)||qe(n)?(r[e]=n,r[e+t]=0,r):0!==n&&$e(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}P((function(n){return Ti(n,[0,0],1,0)}),"assign",Ti);var Gi=[0,0],Li=[0,0];function Fi(n,r){var t,e;return 0===r||0===n||Pe(n)||qe(n)?n:(Ti(n,Gi,1,0),r+=Gi[1],r+=function(n){var r=Ei(n);return(r=(2146435072&r)>>>20)-Ze|0}(n=Gi[0]),r<-1074?ki(0,n):r>1023?n<0?Mn:rr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,hi.assign(n,Li,1,0),t=Li[0],t&=2148532223,e*Si(t|=r+Ze<<20,Li[1])))}var Wi=1.4426950408889634,Vi=1/(1<<28);function Mi(n){var r;return Pe(n)||n===rr?n:n===Mn?0:n>709.782712893384?rr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Vi?1+n:function(n,r,t){var e,i,o,u;return Fi(1-(r-(e=n-r)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-n),t)}(n-.6931471803691238*(r=Re(n<0?Wi*n-.5:Wi*n+.5)),1.9082149292705877e-10*r,r)}function Pi(n){return Kn(n)===n}function $i(n){return Pi(n/2)}function Ci(n){return $i(n>0?n-1:n+1)}var Ri=Math.sqrt,Zi=!0===pi?0:1,qi=new dn(1),Xi=new Ke(qi.buffer);function Yi(n,r){return qi[0]=n,Xi[Zi]=r>>>0,qi[0]}function zi(n){return 0|n}var Bi=!0===pi?1:0,Di=new dn(1),Ji=new Ke(Di.buffer);function Ki(n,r){return Di[0]=n,Ji[Bi]=r>>>0,Di[0]}var Qi=1048576,no=[1,1.5],ro=[0,.5849624872207642],to=[0,1.350039202129749e-8],eo=1048575,io=1048576,oo=1083179008,uo=1e300,ao=1e-300,fo=[0,0],co=[0,0];function yo(n,r){var t,e,i,o,u,a,f,c,y,p,s,l,v,w;if(Pe(n)||Pe(r))return NaN;if(hi.assign(r,fo,1,0),u=fo[0],0===fo[1]){if(0===r)return 1;if(1===r)return n;if(-1===r)return 1/n;if(.5===r)return Ri(n);if(-.5===r)return 1/Ri(n);if(2===r)return n*n;if(3===r)return n*n*n;if(4===r)return(n*=n)*n;if(qe(r))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:$e(n)<1==(r===rr)?0:rr}(n,r)}if(hi.assign(n,fo,1,0),o=fo[0],0===fo[1]){if(0===o)return function(n,r){return r===Mn?rr:r===rr?0:r>0?Ci(r)?n:0:Ci(r)?ki(rr,n):rr}(n,r);if(1===n)return 1;if(-1===n&&Ci(r))return-1;if(qe(n))return n===Mn?yo(-0,-r):r<0?0:rr}if(n<0&&!1===Pi(r))return(n-n)/(n-n);if(i=$e(n),t=o&Ye|0,e=u&Ye|0,f=u>>>31|0,a=(a=o>>>31|0)&&Ci(r)?-1:1,e>1105199104){if(e>1139802112)return function(n,r){return(Ei(n)&Ye)<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,r);if(t<1072693247)return 1===f?a*uo*uo:a*ao*ao;if(t>1072693248)return 0===f?a*uo*uo:a*ao*ao;s=function(n,r){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=r-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Yi(e=(o=1.4426950216293335*i)+u,0))-o),n[0]=e,n[1]=t,n}(co,i)}else s=function(n,r,t){var e,i,o,u,a,f,c,y,p,s,l,v,w,A,U,h,b,d,m,g,N;return d=0,t<Qi&&(d-=53,t=Ei(r*=9007199254740992)),d+=(t>>20)-Ze|0,t=1072693248|(m=1048575&t|0),m<=235662?g=0:m<767610?g=1:(g=0,d+=1,t-=Qi),u=Yi(i=(h=(r=Ki(r,t))-(c=no[g]))*(b=1/(r+c)),0),e=524288+(t>>1|536870912),f=Ki(0,e+=g<<18),U=(o=i*i)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Yi(f=3+(o=u*u)+(U+=(a=b*(h-u*f-u*(r-(f-c))))*(u+i)),0),w=(l=-7.028461650952758e-9*(p=Yi(p=(h=u*f)+(b=a*f+(U-(f-3-o))*i),0))+.9617966939259756*(b-(p-h))+to[g])-((v=Yi(v=(s=.9617967009544373*p)+l+(y=ro[g])+(A=d),0))-A-y-s),n[0]=v,n[1]=w,n}(co,i,t);if(l=(p=(r-(c=Yi(r,0)))*s[0]+r*s[1])+(y=c*s[0]),hi.assign(l,fo,1,0),v=zi(fo[0]),w=zi(fo[1]),v>=oo){if(0!=(v-oo|w))return a*uo*uo;if(p+8008566259537294e-32>l-y)return a*uo*uo}else if((v&Ye)>=1083231232){if(0!=(v-3230714880|w))return a*ao*ao;if(p<=l-y)return a*ao*ao}return l=function(n,r,t){var e,i,o,u,a,f,c,y,p,s;return p=((y=n&Ye|0)>>20)-Ze|0,c=0,y>1071644672&&(i=Ki(0,((c=n+(io>>p+1)>>>0)&~(eo>>(p=((c&Ye)>>20)-Ze|0)))>>>0),c=(c&eo|io)>>20-p>>>0,n<0&&(c=-c),r-=i),n=zi(n=Ei(f=1-((f=(o=.6931471824645996*(i=Yi(i=t+r,0)))+(u=.6931471805599453*(t-(i-r))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(n+=c<<20>>>0)>>20<=0?Fi(f,c):Ki(f,n)}(v,y,p),a*l}function po(n,r,t){var e;return Pe(n)||Pe(r)||Pe(t)||t<=0||$e(n)>=1/t?NaN:(e=t*n,Mi(r*n)/(1-yo(e,2)))}function so(n){return n!=n}function lo(n){return Math.abs(n)}P(po,"factory",(function(n,r){return Pe(n)||Pe(r)||r<=0?(t=NaN,function(){return t}):function(t){var e;return $e(t)>=1/r?NaN:(e=r*t,Mi(n*t)/(1-yo(e,2)))};var t}));var vo=Math.ceil;function wo(n){return n<0?vo(n):Kn(n)}function Ao(n){return n===rr||n===Mn}var Uo,ho="function"==typeof Uint32Array,bo="function"==typeof Uint32Array?Uint32Array:null,mo="function"==typeof Uint32Array?Uint32Array:void 0;Uo=function(){var n,r,t;if("function"!=typeof bo)return!1;try{r=new bo(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(ho&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?mo:function(){throw new Error("not implemented")};var go,No=Uo,Eo="function"==typeof Uint8Array,jo="function"==typeof Uint8Array?Uint8Array:null,Io="function"==typeof Uint8Array?Uint8Array:void 0;go=function(){var n,r,t;if("function"!=typeof jo)return!1;try{r=new jo(r=[1,3.14,-3.14,256,257]),t=r,n=(Eo&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Io:function(){throw new Error("not implemented")};var _o,Ho=go,Oo="function"==typeof Uint16Array,So="function"==typeof Uint16Array?Uint16Array:null,xo="function"==typeof Uint16Array?Uint16Array:void 0;_o=function(){var n,r,t;if("function"!=typeof So)return!1;try{r=new So(r=[1,3.14,-3.14,65536,65537]),t=r,n=(Oo&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?xo:function(){throw new Error("not implemented")};var ko,To={uint16:_o,uint8:Ho};ko=function(){var n;return(n=new To.uint16(1))[0]=4660,52===new To.uint8(n.buffer)[0]}();var Go,Lo,Fo=ko;!0===Fo?(Go=1,Lo=0):(Go=0,Lo=1);var Wo={HIGH:Go,LOW:Lo},Vo=new dn(1),Mo=new No(Vo.buffer),Po=Wo.HIGH,$o=Wo.LOW;function Co(n,r,t,e){return Vo[0]=n,r[e]=Mo[Po],r[e+t]=Mo[$o],r}function Ro(n){return Co(n,[0,0],1,0)}P(Ro,"assign",Co);var Zo,qo,Xo=!0===Fo?1:0,Yo=new dn(1),zo=new No(Yo.buffer);function Bo(n){return Yo[0]=n,zo[Xo]}!0===Fo?(Zo=1,qo=0):(Zo=0,qo=1);var Do={HIGH:Zo,LOW:qo},Jo=new dn(1),Ko=new No(Jo.buffer),Qo=Do.HIGH,nu=Do.LOW;function ru(n,r){return Ko[Qo]=n,Ko[nu]=r,Jo[0]}var tu=[0,0];function eu(n,r,t,e){return so(n)||Ao(n)?(r[e]=n,r[e+t]=0,r):0!==n&&lo(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}P((function(n){return eu(n,[0,0],1,0)}),"assign",eu);var iu=[0,0],ou=[0,0];function uu(n,r){var t,e,i,o,u,a;return 0===r||0===n||so(n)||Ao(n)?n:(eu(n,iu,1,0),r+=iu[1],r+=function(n){var r=Bo(n);return(r=(2146435072&r)>>>20)-1023|0}(n=iu[0]),r<-1074?(i=0,o=n,Ro.assign(i,tu,1,0),u=tu[0],u&=2147483647,a=Bo(o),ru(u|=a&=2147483648,tu[1])):r>1023?n<0?Mn:rr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Ro.assign(n,ou,1,0),t=ou[0],t&=2148532223,e*ru(t|=r+1023<<20,ou[1])))}var au=1.4426950408889634,fu=1/(1<<28);function cu(n){var r;return so(n)||n===rr?n:n===Mn?0:n>709.782712893384?rr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<fu?1+n:function(n,r,t){var e,i,o,u;return uu(1-(r-(e=n-r)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-n),t)}(n-.6931471803691238*(r=wo(n<0?au*n-.5:au*n+.5)),1.9082149292705877e-10*r,r)}function yu(n,r,t){return so(n)||so(r)||so(t)||t<=0?NaN:.5*cu(-lo((n-r)/t))/t}function pu(n){return n!=n}function su(n){return 0===n||pu(n)?n:n<0?-1:1}function lu(n){return Math.abs(n)}P(yu,"factory",(function(n,r){return so(n)||so(r)||r<=0?(t=NaN,function(){return t}):function(t){return so(t)?NaN:.5*cu(-lo((t-n)/r))/r};var t}));var vu,wu="function"==typeof Uint32Array,Au="function"==typeof Uint32Array?Uint32Array:null,Uu="function"==typeof Uint32Array?Uint32Array:void 0;vu=function(){var n,r,t;if("function"!=typeof Au)return!1;try{r=new Au(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(wu&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Uu:function(){throw new Error("not implemented")};var hu,bu=vu,du="function"==typeof Uint8Array,mu="function"==typeof Uint8Array?Uint8Array:null,gu="function"==typeof Uint8Array?Uint8Array:void 0;hu=function(){var n,r,t;if("function"!=typeof mu)return!1;try{r=new mu(r=[1,3.14,-3.14,256,257]),t=r,n=(du&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?gu:function(){throw new Error("not implemented")};var Nu,Eu=hu,ju="function"==typeof Uint16Array,Iu="function"==typeof Uint16Array?Uint16Array:null,_u="function"==typeof Uint16Array?Uint16Array:void 0;Nu=function(){var n,r,t;if("function"!=typeof Iu)return!1;try{r=new Iu(r=[1,3.14,-3.14,65536,65537]),t=r,n=(ju&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?_u:function(){throw new Error("not implemented")};var Hu,Ou={uint16:Nu,uint8:Eu};Hu=function(){var n;return(n=new Ou.uint16(1))[0]=4660,52===new Ou.uint8(n.buffer)[0]}();var Su=Hu,xu=!0===Su?1:0,ku=new dn(1),Tu=new bu(ku.buffer);function Gu(n){return ku[0]=n,Tu[xu]}var Lu=!0===Su?1:0,Fu=new dn(1),Wu=new bu(Fu.buffer),Vu=.6931471803691238,Mu=1.9082149292705877e-10,Pu=1048575;function $u(n){var r,t,e,i,o,u,a,f,c,y,p,s;return 0===n?Mn:pu(n)||n<0?NaN:(o=0,(t=Gu(n))<1048576&&(o-=54,t=Gu(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=Pu)&1048576|0)>>20|0,a=(n=function(n,r){return Fu[0]=n,Wu[Lu]=r>>>0,Fu[0]}(n,t|1072693248^f))-1,(Pu&2+t)<3?0===a?0===o?0:o*Vu+o*Mu:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Vu-(u-o*Mu-a)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=a/(2+a))*y)*s)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=s*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-y*(r+u)):o*Vu-(r-(y*(r+u)+o*Mu)-a)):0===o?a-y*(a-u):o*Vu-(y*(a-u)-o*Mu-a))))}function Cu(n,r,t){return pu(r)||pu(t)||pu(n)||t<=0||n<0||n>1?NaN:r-t*su(n-.5)*$u(1-2*lu(n-.5))}function Ru(){var n,r;if(!(this instanceof Ru))return 0===arguments.length?new Ru:new Ru(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!C(n=arguments[0])||fn(n))throw new TypeError(k("invalid argument. Location parameter must be a number. Value: `%s`.",n));if(!rn(r))throw new TypeError(k("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=0,r=1;return M(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!C(r)||fn(r))throw new TypeError(k("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),M(this,"b",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!rn(n))throw new TypeError(k("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}return P(Cu,"factory",(function(n,r){return pu(n)||pu(r)||r<=0?(t=NaN,function(){return t}):function(t){return pu(t)||t<0||t>1?NaN:n-r*su(t-.5)*$u(1-2*lu(t-.5))};var t})),$(Ru.prototype,"entropy",(function(){return n=this.mu,r=this.b,cn(n)||cn(r)||r<=0?NaN:Rn(2*r*2.718281828459045);var n,r})),$(Ru.prototype,"kurtosis",(function(){return n=this.mu,r=this.b,Zn(n)||Zn(r)||r<=0?NaN:3;var n,r})),$(Ru.prototype,"mean",(function(){return n=this.mu,r=this.b,qn(n)||qn(r)||r<=0?NaN:n;var n,r})),$(Ru.prototype,"median",(function(){return n=this.mu,r=this.b,Xn(n)||Xn(r)||r<=0?NaN:n;var n,r})),$(Ru.prototype,"mode",(function(){return n=this.mu,r=this.b,Yn(n)||Yn(r)||r<=0?NaN:n;var n,r})),$(Ru.prototype,"skewness",(function(){return n=this.mu,r=this.b,zn(n)||zn(r)||r<=0?NaN:0;var n,r})),$(Ru.prototype,"stdev",(function(){return n=this.mu,r=this.b,Bn(n)||Bn(r)||r<=0?NaN:1.4142135623730951*r;var n,r})),$(Ru.prototype,"variance",(function(){return n=this.mu,r=this.b,Dn(n)||Dn(r)||r<=0?NaN:2*r*r;var n,r})),P(Ru.prototype,"cdf",(function(n){return Br(n,this.mu,this.b)})),P(Ru.prototype,"logcdf",(function(n){return fe(n,this.mu,this.b)})),P(Ru.prototype,"logpdf",(function(n){return Me(n,this.mu,this.b)})),P(Ru.prototype,"mgf",(function(n){return po(n,this.mu,this.b)})),P(Ru.prototype,"pdf",(function(n){return yu(n,this.mu,this.b)})),P(Ru.prototype,"quantile",(function(n){return Cu(n,this.mu,this.b)})),Ru},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).Laplace=r();
//# sourceMappingURL=browser.js.map
