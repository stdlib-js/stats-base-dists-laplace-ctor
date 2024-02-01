// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,d=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,m,"$1e"),e=l.call(e,d,"e"),e=l.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,h,"e-0$1"),r.alternate&&(e=l.call(e,g,"$1."),e=l.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function U(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,o,a,c,s,p,l;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function T(r){return"string"==typeof r}function F(r){var t,n,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return j.apply(null,n)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,L=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=O,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,n.get),a&&$&&$.call(r,t,n.set),r};function W(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){H(r,t,{configurable:!1,enumerable:!1,get:n})}function M(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(r){var t,n,e,i,o;if(null==r)return q.call(r);n=r[z],o=z,t=null!=(i=r)&&X.call(i,o);try{r[z]=void 0}catch(t){return q.call(r)}return e=q.call(r),t?r[z]=n:delete r[z],e}:function(r){return q.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return M(r)||Q(r)}function tr(r){return M(r)&&r>0}function nr(r){return Q(r)&&r.valueOf()>0}function er(r){return tr(r)||nr(r)}function ir(r){return r!=r}function or(r){return M(r)&&ir(r)}function ar(r){return Q(r)&&ir(r.valueOf())}function ur(r){return or(r)||ar(r)}W(rr,"isPrimitive",M),W(rr,"isObject",Q),W(er,"isPrimitive",tr),W(er,"isObject",nr),W(ur,"isPrimitive",or),W(ur,"isObject",ar);var fr,cr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(cr&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,yr=fr,hr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr([1,3.14,-3.14,NaN]),n=t,r=(hr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,dr=lr,mr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,Nr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),n=t,r=(mr&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r=br,Er="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var jr,Ir={uint16:Ar,uint8:_r};(jr=new Ir.uint16(1))[0]=4660;var kr=52===new Ir.uint8(jr.buffer)[0],xr=!0===kr?1:0,Tr=new dr(1),Fr=new yr(Tr.buffer);function Or(r){return Tr[0]=r,Fr[xr]}var Vr=!0===kr?1:0,Pr=new dr(1),$r=new yr(Pr.buffer);function Gr(r,t){return Pr[0]=r,$r[Vr]=t>>>0,Pr[0]}var Lr=1023,Hr=D.NEGATIVE_INFINITY,Wr=.6931471803691238,Cr=1.9082149292705877e-10,Mr=1048575;function Rr(r){var t,n,e,i,o,a,u,f,c,s,p,l;return 0===r?Hr:ir(r)||r<0?NaN:(o=0,(n=Or(r))<1048576&&(o-=54,n=Or(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Lr|0,o+=(f=614244+(n&=Mr)&1048576|0)>>20|0,u=(r=Gr(r,n|1072693248^f))-1,(Mr&2+n)<3?0===u?0===o?0:o*Wr+o*Cr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Wr-(a-o*Cr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Wr-(t-(s*(t+a)+o*Cr)-u)):0===o?u-s*(u-a):o*Wr-(s*(u-a)-o*Cr-u))))}var Zr=Math.floor,qr=Math.ceil;function Xr(r){return r<0?qr(r):Zr(r)}var Yr=Number.POSITIVE_INFINITY;function zr(r){return r===Yr||r===Hr}var Br,Dr,Jr=2147483647;!0===kr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr,Qr,rt={HIGH:Br,LOW:Dr},tt=new dr(1),nt=new yr(tt.buffer),et=rt.HIGH,it=rt.LOW;function ot(r,t,n,e){return tt[0]=r,t[e]=nt[et],t[e+n]=nt[it],t}function at(r){return ot(r,[0,0],1,0)}W(at,"assign",ot),!0===kr?(Kr=1,Qr=0):(Kr=0,Qr=1);var ut={HIGH:Kr,LOW:Qr},ft=new dr(1),ct=new yr(ft.buffer),st=ut.HIGH,pt=ut.LOW;function lt(r,t){return ct[st]=r,ct[pt]=t,ft[0]}var yt=[0,0];function ht(r,t){var n,e;return at.assign(r,yt,1,0),n=yt[0],n&=Jr,e=Or(t),lt(n|=e&=2147483648,yt[1])}function gt(r){return Math.abs(r)}function vt(r,t,n,e){return ir(r)||zr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&gt(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return vt(r,[0,0],1,0)}),"assign",vt);var bt=[0,0],dt=[0,0];function mt(r,t){var n,e;return 0===t||0===r||ir(r)||zr(r)?r:(vt(r,bt,1,0),t+=bt[1],t+=function(r){var t=Or(r);return(t=(2146435072&t)>>>20)-Lr|0}(r=bt[0]),t<-1074?ht(0,r):t>1023?r<0?Hr:Yr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,at.assign(r,dt,1,0),n=dt[0],n&=2148532223,e*lt(n|=t+Lr<<20,dt[1])))}var wt=1.4426950408889634,Nt=1/(1<<28);function At(r){var t;return ir(r)||r===Yr?r:r===Hr?0:r>709.782712893384?Yr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nt?1+r:function(r,t,n){var e,i,o,a;return mt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=Xr(r<0?wt*r-.5:wt*r+.5)),1.9082149292705877e-10*t,t)}function _t(r,t,n){var e;return ir(r)||ir(t)||ir(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*At(e):1-.5*At(-e))}function Et(r){return function(){return r}}W(_t,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){var e;return ir(n)?NaN:(e=(n-r)/t,n<r?.5*At(e):1-.5*At(-e))}}));var St=.6931471803691238,Ut=1.9082149292705877e-10,jt=1.4426950408889634;function It(r){var t,n,e,i,o,a,u,f,c,s,p,l,y;if(r===Yr||ir(r))return r;if(r===Hr)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=38.816242111356935){if(e)return-1;if(f>=709.782712893384)return Yr}if(a=0|Or(f),f>.34657359027997264)f<1.0397207708399179?e?(i=r+St,o=-Ut,y=-1):(i=r-St,o=Ut,y=1):(y=e?jt*r-.5:jt*r+.5,i=r-(p=y|=0)*St,o=p*Ut),s=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(c=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((u-(p=3-u*t))/(6-r*p)),0===y?r-(r*l-c):(n=lt(Lr+y<<20,0),l=r*(l-s)-s,l-=c,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(f=1-(l-r),1024===y?f=Gr(f,i=Or(f)+(y<<20)|0):f*=n,f-1):(p=1,y<20?f=(p=Gr(p,i=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(p=Gr(p,i=Lr-y<<20|0))),f+=1),f*=n))}var kt=.6931471803691238,xt=1.9082149292705877e-10;function Tt(r){var t,n,e,i,o,a,u,f,c,s;if(r<-1||ir(r))return NaN;if(-1===r)return Hr;if(r===Yr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(o=(s=((n=Or(c=1+r))>>20)-Lr)>0?1-(c-r):r-(c-1),o/=c):(s=((n=Or(c=r))>>20)-Lr,o=0),(n&=1048575)<434334?c=Gr(c,1072693248|n):(s+=1,c=Gr(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*kt+(o+=s*xt):s*kt-((f=t*(1-.6666666666666666*i))-(s*xt+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-a*(t+f)):s*kt-(t-(a*(t+f)+(s*xt+o))-i))}var Ft=-.6931471805599453;function Ot(r,t,n){var e;return ir(r)||ir(t)||ir(n)||n<=0?NaN:(e=(r-t)/n,r<t?Ft+e:Ft+Tt(-It(-e)))}function Vt(r,t,n){return ir(r)||ir(t)||ir(n)||n<=0?NaN:-(gt((r-t)/n)+Rr(2*n))}function Pt(r){return Zr(r)===r}function $t(r){return Pt(r/2)}function Gt(r){return $t(r>0?r-1:r+1)}W(Ot,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){var e;return ir(n)?NaN:(e=(n-r)/t,n<r?Ft+e:Ft+Tt(-It(-e)))}})),W(Vt,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){return ir(n)?NaN:-(gt((n-r)/t)+Rr(2*t))}}));var Lt=Math.sqrt,Ht=!0===kr?0:1,Wt=new dr(1),Ct=new yr(Wt.buffer);function Mt(r,t){return Wt[0]=r,Ct[Ht]=t>>>0,Wt[0]}function Rt(r){return 0|r}var Zt=1048576,qt=[1,1.5],Xt=[0,.5849624872207642],Yt=[0,1.350039202129749e-8],zt=1048575,Bt=1048576,Dt=1083179008,Jt=1e300,Kt=1e-300,Qt=[0,0],rn=[0,0];function tn(r,t){var n,e,i,o,a,u,f,c,s,p,l,y,h,g;if(ir(r)||ir(t))return NaN;if(at.assign(t,Qt,1,0),a=Qt[0],0===Qt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Lt(r);if(-.5===t)return 1/Lt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(zr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:gt(r)<1==(t===Yr)?0:Yr}(r,t)}if(at.assign(r,Qt,1,0),o=Qt[0],0===Qt[1]){if(0===o)return function(r,t){return t===Hr?Yr:t===Yr?0:t>0?Gt(t)?r:0:Gt(t)?ht(Yr,r):Yr}(r,t);if(1===r)return 1;if(-1===r&&Gt(t))return-1;if(zr(r))return r===Hr?tn(-0,-t):t<0?0:Yr}if(r<0&&!1===Pt(t))return(r-r)/(r-r);if(i=gt(r),n=o&Jr|0,e=a&Jr|0,f=a>>>31|0,u=(u=o>>>31|0)&&Gt(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Or(r)&Jr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*Jt*Jt:u*Kt*Kt;if(n>1072693248)return 0===f?u*Jt*Jt:u*Kt*Kt;l=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Mt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(rn,i)}else l=function(r,t,n){var e,i,o,a,u,f,c,s,p,l,y,h,g,v,b,d,m,w,N,A,_;return w=0,n<Zt&&(w-=53,n=Or(t*=9007199254740992)),w+=(n>>20)-Lr|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,w+=1,n-=Zt),a=Mt(i=(d=(t=Gr(t,n))-(c=qt[A]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),f=Gr(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Mt(f=3+(o=a*a)+(b+=(u=m*(d-a*f-a*(t-(f-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(p=Mt(p=(d=a*f)+(m=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(m-(p-d))+Yt[A])-((h=Mt(h=(l=.9617967009544373*p)+y+(s=Xt[A])+(v=w),0))-v-s-l),r[0]=h,r[1]=g,r}(rn,i,n);if(y=(p=(t-(c=Mt(t,0)))*l[0]+t*l[1])+(s=c*l[0]),at.assign(y,Qt,1,0),h=Rt(Qt[0]),g=Rt(Qt[1]),h>=Dt){if(0!=(h-Dt|g))return u*Jt*Jt;if(p+8008566259537294e-32>y-s)return u*Jt*Jt}else if((h&Jr)>=1083231232){if(0!=(h-3230714880|g))return u*Kt*Kt;if(p<=y-s)return u*Kt*Kt}return y=function(r,t,n){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Jr|0)>>20)-Lr|0,c=0,s>1071644672&&(i=Gr(0,((c=r+(Bt>>p+1)>>>0)&~(zt>>(p=((c&Jr)>>20)-Lr|0)))>>>0),c=(c&zt|Bt)>>20-p>>>0,r<0&&(c=-c),t-=i),r=Rt(r=Or(f=1-((f=(o=.6931471824645996*(i=Mt(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?mt(f,c):Gr(f,r)}(h,s,p),u*y}function nn(r,t,n){var e;return ir(r)||ir(t)||ir(n)||n<=0||gt(r)>=1/n?NaN:(e=n*r,At(t*r)/(1-tn(e,2)))}function en(r,t,n){return ir(r)||ir(t)||ir(n)||n<=0?NaN:.5*At(-gt((r-t)/n))/n}function on(r){return 0===r||ir(r)?r:r<0?-1:1}function an(r,t,n){return ir(t)||ir(n)||ir(r)||n<=0||r<0||r>1?NaN:t-n*on(r-.5)*Rr(1-2*gt(r-.5))}function un(){var r,t;if(!(this instanceof un))return 0===arguments.length?new un:new un(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!M(r=arguments[0])||ur(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!tr(t))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",t))}else r=0,t=1;return H(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!M(t)||ur(t))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),H(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!tr(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}return W(nn,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){var e;return gt(n)>=1/t?NaN:(e=t*n,At(r*n)/(1-tn(e,2)))}})),W(en,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){return ir(n)?NaN:.5*At(-gt((n-r)/t))/t}})),W(an,"factory",(function(r,t){return ir(r)||ir(t)||t<=0?Et(NaN):function(n){return ir(n)||n<0||n>1?NaN:r-t*on(n-.5)*Rr(1-2*gt(n-.5))}})),C(un.prototype,"entropy",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:Rr(2*t*2.718281828459045);var r,t})),C(un.prototype,"kurtosis",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:3;var r,t})),C(un.prototype,"mean",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:r;var r,t})),C(un.prototype,"median",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:r;var r,t})),C(un.prototype,"mode",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:r;var r,t})),C(un.prototype,"skewness",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:0;var r,t})),C(un.prototype,"stdev",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:1.4142135623730951*t;var r,t})),C(un.prototype,"variance",(function(){return r=this.mu,t=this.b,ir(r)||ir(t)||t<=0?NaN:2*t*t;var r,t})),W(un.prototype,"cdf",(function(r){return _t(r,this.mu,this.b)})),W(un.prototype,"logcdf",(function(r){return Ot(r,this.mu,this.b)})),W(un.prototype,"logpdf",(function(r){return Vt(r,this.mu,this.b)})),W(un.prototype,"mgf",(function(r){return nn(r,this.mu,this.b)})),W(un.prototype,"pdf",(function(r){return en(r,this.mu,this.b)})),W(un.prototype,"quantile",(function(r){return an(r,this.mu,this.b)})),un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Laplace=t();
//# sourceMappingURL=index.js.map
