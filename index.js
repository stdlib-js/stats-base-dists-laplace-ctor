// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,f,c,s,p,l,y,h,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+m(g):m(g)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){var t,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function H(r){return"number"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return L&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var t,n,e,i,o;if(null==r)return R.call(r);n=r[q],o=q,t=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[q]=n:delete r[q],e}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString,B=W();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function tr(r){return r!=r}function nr(r){return H(r)&&tr(r)}function er(r){return D(r)&&tr(r.valueOf())}function ir(r){return nr(r)||er(r)}G(J,"isPrimitive",H),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q),G(ir,"isPrimitive",nr),G(ir,"isObject",er);var or,ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=or,pr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var hr,gr=cr,vr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var wr,mr=hr,Nr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:wr,uint8:mr};(Er=new Ur.uint16(1))[0]=4660;var Sr=52===new Ur.uint8(Er.buffer)[0],jr=!0===Sr?1:0,Ir=new gr(1),kr=new sr(Ir.buffer);function xr(r){return Ir[0]=r,kr[jr]}var Tr=!0===Sr?1:0,Fr=new gr(1),Or=new sr(Fr.buffer);function Vr(r,t){return Fr[0]=r,Or[Tr]=t>>>0,Fr[0]}var Pr=1023,$r=Y.NEGATIVE_INFINITY,Gr=.6931471803691238,Cr=1.9082149292705877e-10,Hr=0x40000000000000,Lr=.3333333333333333,Wr=1048575,Rr=2146435072,Mr=1048576,Zr=1072693248;function qr(r){var t,n,e,i,o,a,u,f,c,s,p,l;return 0===r?$r:tr(r)||r<0?NaN:(o=0,(n=xr(r))<Mr&&(o-=54,n=xr(r*=Hr)),n>=Rr?r+r:(o+=(n>>20)-Pr|0,o+=(f=614244+(n&=Wr)&1048576|0)>>20|0,u=(r=Vr(r,n|f^Zr))-1,(Wr&2+n)<3?0===u?0===o?0:o*Gr+o*Cr:(a=u*u*(.5-Lr*u),0===o?u-a:o*Gr-(a-o*Cr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Gr-(t-(s*(t+a)+o*Cr)-u)):0===o?u-s*(u-a):o*Gr-(s*(u-a)-o*Cr-u))))}var Xr=Math.floor,Yr=Math.ceil;function zr(r){return r<0?Yr(r):Xr(r)}var Br=Number.POSITIVE_INFINITY,Dr=1023,Jr=-1023,Kr=-1074;function Qr(r){return r===Br||r===$r}var rt,tt,nt=2147483648,et=2147483647;!0===Sr?(rt=1,tt=0):(rt=0,tt=1);var it,ot,at={HIGH:rt,LOW:tt},ut=new gr(1),ft=new sr(ut.buffer),ct=at.HIGH,st=at.LOW;function pt(r,t,n,e){return ut[0]=r,t[e]=ft[ct],t[e+n]=ft[st],t}function lt(r){return pt(r,[0,0],1,0)}G(lt,"assign",pt),!0===Sr?(it=1,ot=0):(it=0,ot=1);var yt={HIGH:it,LOW:ot},ht=new gr(1),gt=new sr(ht.buffer),vt=yt.HIGH,dt=yt.LOW;function bt(r,t){return gt[vt]=r,gt[dt]=t,ht[0]}var wt=[0,0];function mt(r,t){var n,e;return lt.assign(r,wt,1,0),n=wt[0],n&=et,e=xr(t),bt(n|=e&=nt,wt[1])}var Nt=22250738585072014e-324;function At(r){return Math.abs(r)}var _t=4503599627370496;function Et(r,t,n,e){return tr(r)||Qr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&At(r)<Nt?(t[e]=r*_t,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}G((function(r){return Et(r,[0,0],1,0)}),"assign",Et);var Ut=2146435072,St=2220446049250313e-31,jt=2148532223,It=[0,0],kt=[0,0];function xt(r,t){var n,e;return 0===t||0===r||tr(r)||Qr(r)?r:(Et(r,It,1,0),r=It[0],t+=It[1],t+=function(r){var t=xr(r);return(t=(t&Ut)>>>20)-Pr|0}(r),t<Kr?mt(0,r):t>Dr?r<0?$r:Br:(t<=Jr?(t+=52,e=St):e=1,lt.assign(r,kt,1,0),n=kt[0],n&=jt,e*bt(n|=t+Pr<<20,kt[1])))}var Tt=.6931471803691238,Ft=1.9082149292705877e-10,Ot=1.4426950408889634,Vt=709.782712893384,Pt=-745.1332191019411,$t=1/(1<<28),Gt=-$t;function Ct(r){var t;return tr(r)||r===Br?r:r===$r?0:r>Vt?Br:r<Pt?0:r>Gt&&r<$t?1+r:function(r,t,n){var e,i,o,a;return xt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=zr(r<0?Ot*r-.5:Ot*r+.5))*Tt,t*Ft,t)}function Ht(r,t,n){var e;return tr(r)||tr(t)||tr(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*Ct(e):1-.5*Ct(-e))}function Lt(r){return function(){return r}}G(Ht,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){var e;return tr(n)?NaN:(e=(n-r)/t,n<r?.5*Ct(e):1-.5*Ct(-e))}}));var Wt=.34657359027997264,Rt=709.782712893384,Mt=.6931471803691238,Zt=1.9082149292705877e-10,qt=1.4426950408889634,Xt=38.816242111356935,Yt=1.0397207708399179;function zt(r){var t,n,e,i,o,a,u,f,c,s,p,l,y;if(r===Br||tr(r))return r;if(r===$r)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=Xt){if(e)return-1;if(f>=Rt)return Br}if(a=0|xr(f),f>Wt)f<Yt?e?(i=r+Mt,o=-Zt,y=-1):(i=r-Mt,o=Zt,y=1):(y=e?qt*r-.5:qt*r+.5,i=r-(p=y|=0)*Mt,o=p*Zt),s=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(c=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((u-(p=3-u*t))/(6-r*p)),0===y?r-(r*l-c):(n=bt(Pr+y<<20,0),l=r*(l-s)-s,l-=c,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(f=1-(l-r),1024===y?f=Vr(f,i=xr(f)+(y<<20)|0):f*=n,f-1):(p=1,y<20?f=(p=Vr(p,i=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(p=Vr(p,i=Pr-y<<20|0))),f+=1),f*=n))}var Bt=.6931471803691238,Dt=1.9082149292705877e-10,Jt=.41421356237309503,Kt=-.2928932188134525,Qt=1.862645149230957e-9,rn=5551115123125783e-32,tn=9007199254740992,nn=.6666666666666666;function en(r){var t,n,e,i,o,a,u,f,c,s;if(r<-1||tr(r))return NaN;if(-1===r)return $r;if(r===Br)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Jt){if(e<Qt)return e<rn?r:r-r*r*.5;r>Kt&&(s=0,i=r,n=1)}return 0!==s&&(e<tn?(o=(s=((n=xr(c=1+r))>>20)-Pr)>0?1-(c-r):r-(c-1),o/=c):(s=((n=xr(c=r))>>20)-Pr,o=0),(n&=1048575)<434334?c=Vr(c,1072693248|n):(s+=1,c=Vr(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*Bt+(o+=s*Dt):s*Bt-((f=t*(1-nn*i))-(s*Dt+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-a*(t+f)):s*Bt-(t-(a*(t+f)+(s*Dt+o))-i))}var on=-.6931471805599453;function an(r,t,n){var e;return tr(r)||tr(t)||tr(n)||n<=0?NaN:(e=(r-t)/n,r<t?on+e:on+en(-zt(-e)))}function un(r,t,n){return tr(r)||tr(t)||tr(n)||n<=0?NaN:-(At((r-t)/n)+qr(2*n))}function fn(r){return Xr(r)===r}function cn(r){return fn(r/2)}function sn(r){return cn(r>0?r-1:r+1)}G(an,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){var e;return tr(n)?NaN:(e=(n-r)/t,n<r?on+e:on+en(-zt(-e)))}})),G(un,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){return tr(n)?NaN:-(At((n-r)/t)+qr(2*t))}}));var pn=Math.sqrt,ln=!0===Sr?0:1,yn=new gr(1),hn=new sr(yn.buffer);function gn(r,t){return yn[0]=r,hn[ln]=t>>>0,yn[0]}function vn(r){return 0|r}var dn=1072693247,bn=1e300,wn=1e-300,mn=1048575,Nn=1048576,An=1072693248,_n=536870912,En=524288,Un=20,Sn=9007199254740992,jn=.9617966939259756,In=.9617967009544373,kn=-7.028461650952758e-9,xn=[1,1.5],Tn=[0,.5849624872207642],Fn=[0,1.350039202129749e-8],On=1.4426950408889634,Vn=1.4426950216293335,Pn=1.9259629911266175e-8,$n=.6931471805599453,Gn=1048575,Cn=1048576,Hn=1071644672,Ln=20,Wn=.6931471824645996,Rn=-1.904654299957768e-9,Mn=1072693247,Zn=1105199104,qn=1139802112,Xn=1083179008,Yn=1072693248,zn=1083231232,Bn=3230714880,Dn=31,Jn=1e300,Kn=1e-300,Qn=8008566259537294e-32,re=[0,0],te=[0,0];function ne(r,t){var n,e,i,o,a,u,f,c,s,p,l,y,h,g;if(tr(r)||tr(t))return NaN;if(lt.assign(t,re,1,0),a=re[0],0===re[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return pn(r);if(-.5===t)return 1/pn(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Qr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:At(r)<1==(t===Br)?0:Br}(r,t)}if(lt.assign(r,re,1,0),o=re[0],0===re[1]){if(0===o)return function(r,t){return t===$r?Br:t===Br?0:t>0?sn(t)?r:0:sn(t)?mt(Br,r):Br}(r,t);if(1===r)return 1;if(-1===r&&sn(t))return-1;if(Qr(r))return r===$r?ne(-0,-t):t<0?0:Br}if(r<0&&!1===fn(t))return(r-r)/(r-r);if(i=At(r),n=o&et|0,e=a&et|0,f=a>>>Dn|0,u=(u=o>>>Dn|0)&&sn(t)?-1:1,e>Zn){if(e>qn)return function(r,t){return(xr(r)&et)<=dn?t<0?bn*bn:wn*wn:t>0?bn*bn:wn*wn}(r,t);if(n<Mn)return 1===f?u*Jn*Jn:u*Kn*Kn;if(n>Yn)return 0===f?u*Jn*Jn:u*Kn*Kn;l=function(r,t){var n,e,i,o,a,u,f;return o=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Pn-o*On)-((e=gn(e=(a=Vn*i)+u,0))-a),r[0]=e,r[1]=n,r}(te,i)}else l=function(r,t,n){var e,i,o,a,u,f,c,s,p,l,y,h,g,v,d,b,w,m,N,A,_;return m=0,n<Nn&&(m-=53,n=xr(t*=Sn)),m+=(n>>Un)-Pr|0,n=(N=n&mn|0)|An|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=Nn),a=gn(i=(b=(t=Vr(t,n))-(c=xn[A]))*(w=1/(t+c)),0),e=(n>>1|_n)+En,f=Vr(0,e+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=gn(f=3+(o=a*a)+(d+=(u=w*(b-a*f-a*(t-(f-c))))*(a+i)),0),p=gn(p=(b=a*f)+(w=u*f+(d-(f-3-o))*i),0),l=In*p,g=(y=kn*p+(w-(p-b))*jn+Fn[A])-((h=gn(h=l+y+(s=Tn[A])+(v=m),0))-v-s-l),r[0]=h,r[1]=g,r}(te,i,n);if(y=(p=(t-(c=gn(t,0)))*l[0]+t*l[1])+(s=c*l[0]),lt.assign(y,re,1,0),h=vn(re[0]),g=vn(re[1]),h>=Xn){if(0!=(h-Xn|g))return u*Jn*Jn;if(p+Qn>y-s)return u*Jn*Jn}else if((h&et)>=zn){if(0!=(h-Bn|g))return u*Kn*Kn;if(p<=y-s)return u*Kn*Kn}return y=function(r,t,n){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&et|0)>>Ln)-Pr|0,c=0,s>Hn&&(i=Vr(0,((c=r+(Cn>>p+1)>>>0)&~(Gn>>(p=((c&et)>>Ln)-Pr|0)))>>>0),c=(c&Gn|Cn)>>Ln-p>>>0,r<0&&(c=-c),t-=i),r=vn(r=xr(f=1-((f=(o=(i=gn(i=n+t,0))*Wn)+(a=(n-(i-t))*$n+i*Rn))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Ln>>>0)>>Ln<=0?xt(f,c):Vr(f,r)}(h,s,p),u*y}function ee(r,t,n){var e;return tr(r)||tr(t)||tr(n)||n<=0||At(r)>=1/n?NaN:(e=n*r,Ct(t*r)/(1-ne(e,2)))}function ie(r,t,n){return tr(r)||tr(t)||tr(n)||n<=0?NaN:.5*Ct(-At((r-t)/n))/n}function oe(r){return 0===r||tr(r)?r:r<0?-1:1}function ae(r,t,n){return tr(t)||tr(n)||tr(r)||n<=0||r<0||r>1?NaN:t-n*oe(r-.5)*qr(1-2*At(r-.5))}function ue(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function fe(){var r,t;if(!(this instanceof fe))return 0===arguments.length?new fe:new fe(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!H(r=arguments[0])||ir(r))throw new TypeError(ue("13h8p",r));if(!K(t))throw new TypeError(ue("13h7c",t))}else r=0,t=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!H(t)||ir(t))throw new TypeError(ue("13h8d",t));r=t}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!K(r))throw new TypeError(ue("13h8k",r));t=r}}),this}return G(ee,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){var e;return At(n)>=1/t?NaN:(e=t*n,Ct(r*n)/(1-ne(e,2)))}})),G(ie,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){return tr(n)?NaN:.5*Ct(-At((n-r)/t))/t}})),G(ae,"factory",(function(r,t){return tr(r)||tr(t)||t<=0?Lt(NaN):function(n){return tr(n)||n<0||n>1?NaN:r-t*oe(n-.5)*qr(1-2*At(n-.5))}})),C(fe.prototype,"entropy",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:qr(2*t*2.718281828459045);var r,t})),C(fe.prototype,"kurtosis",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:3;var r,t})),C(fe.prototype,"mean",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:r;var r,t})),C(fe.prototype,"median",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:r;var r,t})),C(fe.prototype,"mode",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:r;var r,t})),C(fe.prototype,"skewness",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:0;var r,t})),C(fe.prototype,"stdev",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:1.4142135623730951*t;var r,t})),C(fe.prototype,"variance",(function(){return r=this.mu,t=this.b,tr(r)||tr(t)||t<=0?NaN:2*t*t;var r,t})),G(fe.prototype,"cdf",(function(r){return Ht(r,this.mu,this.b)})),G(fe.prototype,"logcdf",(function(r){return an(r,this.mu,this.b)})),G(fe.prototype,"logpdf",(function(r){return un(r,this.mu,this.b)})),G(fe.prototype,"mgf",(function(r){return ee(r,this.mu,this.b)})),G(fe.prototype,"pdf",(function(r){return ie(r,this.mu,this.b)})),G(fe.prototype,"quantile",(function(r){return ae(r,this.mu,this.b)})),fe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Laplace=t();
//# sourceMappingURL=index.js.map
