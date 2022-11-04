// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=a.value,r.__proto__=c):r[t]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,a.get),p&&i&&i.call(r,t,a.set),r};function c(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r,t,n){a(r,t,{configurable:!1,enumerable:!1,get:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=s()?function(r){var t,n,e,u,i;if(null==r)return v.call(r);n=r[N],i=N,t=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[N]=n:delete r[N],e}:function(r){return v.call(r)},m=Number,d=m.prototype.toString,w=s();function g(r){return"object"==typeof r&&(r instanceof m||(w?function(r){try{return d.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function A(r){return y(r)||g(r)}function _(r){return y(r)&&r>0}function j(r){return g(r)&&r.valueOf()>0}function U(r){return _(r)||j(r)}function O(r){return r!=r}function E(r){return y(r)&&O(r)}function I(r){return g(r)&&O(r.valueOf())}function T(r){return E(r)||I(r)}c(A,"isPrimitive",y),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",j),c(T,"isPrimitive",E),c(T,"isObject",I);var S,F="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,H="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(F&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,V=S,L="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,k="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),n=t,r=(L&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var W,x=G,q="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,t,n;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,256,257]),n=t,r=(q&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R,z=W,B="function"==typeof Uint16Array,D="function"==typeof Uint16Array?Uint16Array:null,J="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,t,n;if("function"!=typeof D)return!1;try{t=new D(t=[1,3.14,-3.14,65536,65537]),n=t,r=(B&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:R,uint8:z};(K=new Q.uint16(1))[0]=4660;var X=52===new Q.uint8(K.buffer)[0],Z=!0===X?1:0,$=new x(1),rr=new V($.buffer);function tr(r){return $[0]=r,rr[Z]}var nr=!0===X?1:0,er=new x(1),ur=new V(er.buffer);function ir(r,t){return er[0]=r,ur[nr]=t>>>0,er[0]}var or=1023,fr=m.NEGATIVE_INFINITY,ar=.6931471803691238,cr=1.9082149292705877e-10,lr=1048575;function yr(r){var t,n,e,u,i,o,f,a,c,l,y,p;return 0===r?fr:O(r)||r<0?NaN:(i=0,(n=tr(r))<1048576&&(i-=54,n=tr(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-or|0,i+=(a=614244+(n&=lr)&1048576|0)>>20|0,f=(r=ir(r,n|1072693248^a))-1,(lr&2+n)<3?0===f?0===i?0:i*ar+i*cr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*ar-(o-i*cr-f)):(a=n-398458|0,c=440401-n|0,u=(y=(p=(l=f/(2+f))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(a|=c)>0?(t=.5*f*f,0===i?f-(t-l*(t+o)):i*ar-(t-(l*(t+o)+i*cr)-f)):0===i?f-l*(f-o):i*ar-(l*(f-o)-i*cr-f))))}var pr=Math.floor,sr=Math.ceil;function vr(r){return r<0?sr(r):pr(r)}var br,Nr,hr=Number.POSITIVE_INFINITY;function mr(r){return r===hr||r===fr}!0===X?(br=1,Nr=0):(br=0,Nr=1);var dr,wr,gr={HIGH:br,LOW:Nr},Ar=new x(1),_r=new V(Ar.buffer),jr=gr.HIGH,Ur=gr.LOW;function Or(r,t){return Ar[0]=t,r[0]=_r[jr],r[1]=_r[Ur],r}function Er(r,t){return 1===arguments.length?Or([0,0],r):Or(r,t)}!0===X?(dr=1,wr=0):(dr=0,wr=1);var Ir={HIGH:dr,LOW:wr},Tr=new x(1),Sr=new V(Tr.buffer),Fr=Ir.HIGH,Pr=Ir.LOW;function Hr(r,t){return Sr[Fr]=r,Sr[Pr]=t,Tr[0]}var Gr=[0,0];function Vr(r,t){var n,e;return Er(Gr,r),n=Gr[0],n&=2147483647,e=tr(t),Hr(n|=e&=2147483648,Gr[1])}function Lr(r){return Math.abs(r)}function Mr(r,t,n,e){return O(r)||mr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Lr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return Mr(r,[0,0],1,0)}),"assign",Mr);var kr=[0,0],Wr=[0,0];function xr(r,t){var n,e;return 0===t||0===r||O(r)||mr(r)?r:(Mr(r,kr,1,0),t+=kr[1],t+=function(r){var t=tr(r);return(t=(2146435072&t)>>>20)-or|0}(r=kr[0]),t<-1074?Vr(0,r):t>1023?r<0?fr:hr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Er(Wr,r),n=Wr[0],n&=2148532223,e*Hr(n|=t+or<<20,Wr[1])))}var qr=1.4426950408889634,Cr=1/(1<<28);function Yr(r){var t;return O(r)||r===hr?r:r===fr?0:r>709.782712893384?hr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Cr?1+r:function(r,t,n){var e,u,i,o;return xr(1-(t-(e=r-t)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=vr(r<0?qr*r-.5:qr*r+.5)),1.9082149292705877e-10*t,t)}function Rr(r,t,n){var e;return O(r)||O(t)||O(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*Yr(e):1-.5*Yr(-e))}function zr(r){return function(){return r}}c(Rr,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){var e;return O(n)?NaN:(e=(n-r)/t,n<r?.5*Yr(e):1-.5*Yr(-e))}}));var Br=.6931471803691238,Dr=1.9082149292705877e-10,Jr=1.4426950408889634;function Kr(r){var t,n,e,u,i,o,f,a,c,l,y,p;if(r===hr||O(r))return r;if(r===fr)return-1;if(0===r)return r;if(r<0?(n=!0,f=-r):(n=!1,f=r),f>=38.816242111356935){if(n)return-1;if(f>=709.782712893384)return hr}if(i=0|tr(f),f>.34657359027997264)f<1.0397207708399179?n?(e=r+Br,u=-Dr,p=-1):(e=r-Br,u=Dr,p=1):(p=n?Jr*r-.5:Jr*r+.5,e=r-(l=p|=0)*Br,u=l*Dr),c=e-(r=e-u)-u;else{if(i<1016070144)return r;p=0}return o=1+(a=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),y=a*((o-(l=3-o*t))/(6-r*l)),0===p?r-(r*y-a):(y=r*(y-c)-c,y-=a,-1===p?.5*(r-y)-.5:1===p?r<-.25?-2*(y-(r+.5)):1+2*(r-y):p<=-2||p>56?(f=ir(f=1-(y-r),e=tr(f)+(p<<20)|0))-1:(l=1,p<20?f=(l=ir(l,e=1072693248-(2097152>>p)|0))-(y-r):(f=r-(y+(l=ir(l,e=or-p<<20|0))),f+=1),ir(f,e=tr(f)+(p<<20)|0)))}var Qr=.6931471803691238,Xr=1.9082149292705877e-10;function Zr(r){var t,n,e,u,i,o,f,a,c,l;if(r<-1||O(r))return NaN;if(-1===r)return fr;if(r===hr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=tr(c=1+r))>>20)-or)>0?1-(c-r):r-(c-1),i/=c):(l=((n=tr(c=r))>>20)-or,i=0),(n&=1048575)<434334?c=ir(c,1072693248|n):(l+=1,c=ir(c,1071644672|n),n=1048576-n>>2),u=c-1),t=.5*u*u,0===n?0===u?l*Qr+(i+=l*Xr):l*Qr-((a=t*(1-.6666666666666666*u))-(l*Xr+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(t-o*(t+a)):l*Qr-(t-(o*(t+a)+(l*Xr+i))-u))}var $r=-.6931471805599453;function rt(r,t,n){var e;return O(r)||O(t)||O(n)||n<=0?NaN:(e=(r-t)/n,r<t?$r+e:$r+Zr(-Kr(-e)))}function tt(r,t,n){return O(r)||O(t)||O(n)||n<=0?NaN:-(Lr((r-t)/n)+yr(2*n))}function nt(r){return pr(r)===r}function et(r){return nt(r/2)}function ut(r){return et(r>0?r-1:r+1)}c(rt,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){var e;return O(n)?NaN:(e=(n-r)/t,n<r?$r+e:$r+Zr(-Kr(-e)))}})),c(tt,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){return O(n)?NaN:-(Lr((n-r)/t)+yr(2*t))}}));var it=Math.sqrt,ot=!0===X?0:1,ft=new x(1),at=new V(ft.buffer);function ct(r,t){return ft[0]=r,at[ot]=t>>>0,ft[0]}function lt(r){return 0|r}var yt=1048576,pt=[1,1.5],st=[0,.5849624872207642],vt=[0,1.350039202129749e-8],bt=2147483647,Nt=1048575,ht=1048576,mt=2147483647,dt=1083179008,wt=1e300,gt=1e-300,At=[0,0],_t=[0,0];function jt(r,t){var n,e,u,i,o,f,a,c,l,y,p,s,v,b;if(O(r)||O(t))return NaN;if(Er(At,t),o=At[0],0===At[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return it(r);if(-.5===t)return 1/it(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(mr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Lr(r)<1==(t===hr)?0:hr}(r,t)}if(Er(At,r),i=At[0],0===At[1]){if(0===i)return function(r,t){return t===fr?hr:t===hr?0:t>0?ut(t)?r:0:ut(t)?Vr(hr,r):hr}(r,t);if(1===r)return 1;if(-1===r&&ut(t))return-1;if(mr(r))return r===fr?jt(-0,-t):t<0?0:hr}if(r<0&&!1===nt(t))return(r-r)/(r-r);if(u=Lr(r),n=i&mt|0,e=o&mt|0,a=o>>>31|0,f=(f=i>>>31|0)&&ut(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&tr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*wt*wt:f*gt*gt;if(n>1072693248)return 0===a?f*wt*wt:f*gt*gt;p=function(r,t){var n,e,u,i,o,f;return n=(o=1.9259629911266175e-8*(u=t-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ct(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=n,r}(_t,u)}else p=function(r,t,n){var e,u,i,o,f,a,c,l,y,p,s,v,b,N,h,m,d,w,g,A,_;return w=0,n<yt&&(w-=53,n=tr(t*=9007199254740992)),w+=(n>>20)-or|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=yt),o=ct(u=(m=(t=ir(t,n))-(c=pt[A]))*(d=1/(t+c)),0),e=524288+(n>>1|536870912),a=ir(0,e+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=ct(a=3+(i=o*o)+(h+=(f=d*(m-o*a-o*(t-(a-c))))*(o+u)),0),b=(s=-7.028461650952758e-9*(y=ct(y=(m=o*a)+(d=f*a+(h-(a-3-i))*u),0))+.9617966939259756*(d-(y-m))+vt[A])-((v=ct(v=(p=.9617967009544373*y)+s+(l=st[A])+(N=w),0))-N-l-p),r[0]=v,r[1]=b,r}(_t,u,n);if(y=(t-(c=ct(t,0)))*p[0]+t*p[1],l=c*p[0],Er(At,s=y+l),v=lt(At[0]),b=lt(At[1]),v>=dt){if(0!=(v-dt|b))return f*wt*wt;if(y+8008566259537294e-32>s-l)return f*wt*wt}else if((v&mt)>=1083231232){if(0!=(v-3230714880|b))return f*gt*gt;if(y<=s-l)return f*gt*gt}return s=function(r,t,n){var e,u,i,o,f,a,c,l,y,p;return y=((l=r&bt|0)>>20)-or|0,c=0,l>1071644672&&(u=ir(0,((c=r+(ht>>y+1)>>>0)&~(Nt>>(y=((c&bt)>>20)-or|0)))>>>0),c=(c&Nt|ht)>>20-y>>>0,r<0&&(c=-c),t-=u),r=lt(r=tr(a=1-((a=(i=.6931471824645996*(u=ct(u=n+t,0)))+(o=.6931471805599453*(n-(u-t))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?xr(a,c):ir(a,r)}(v,l,y),f*s}function Ut(r,t,n){var e;return O(r)||O(t)||O(n)||n<=0||Lr(r)>=1/n?NaN:(e=n*r,Yr(t*r)/(1-jt(e,2)))}function Ot(r,t,n){return O(r)||O(t)||O(n)||n<=0?NaN:.5*Yr(-Lr((r-t)/n))/n}function Et(r){return 0===r||O(r)?r:r<0?-1:1}function It(r,t,n){return O(t)||O(n)||O(r)||n<=0||r<0||r>1?NaN:t-n*Et(r-.5)*yr(1-2*Lr(r-.5))}function Tt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function St(){var r,t;if(!(this instanceof St))return 0===arguments.length?new St:new St(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!y(r=arguments[0])||T(r))throw new TypeError(Tt("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(t))throw new TypeError(Tt("0Wk7u",t))}else r=0,t=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!y(t)||T(t))throw new TypeError(Tt("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),a(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!_(r))throw new TypeError(Tt("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}return c(Ut,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){var e;return Lr(n)>=1/t?NaN:(e=t*n,Yr(r*n)/(1-jt(e,2)))}})),c(Ot,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){return O(n)?NaN:.5*Yr(-Lr((n-r)/t))/t}})),c(It,"factory",(function(r,t){return O(r)||O(t)||t<=0?zr(NaN):function(n){return O(n)||n<0||n>1?NaN:r-t*Et(n-.5)*yr(1-2*Lr(n-.5))}})),l(St.prototype,"entropy",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:yr(2*t*2.718281828459045);var r,t})),l(St.prototype,"kurtosis",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:3;var r,t})),l(St.prototype,"mean",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:r;var r,t})),l(St.prototype,"median",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:r;var r,t})),l(St.prototype,"mode",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:r;var r,t})),l(St.prototype,"skewness",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:0;var r,t})),l(St.prototype,"stdev",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:1.4142135623730951*t;var r,t})),l(St.prototype,"variance",(function(){return r=this.mu,t=this.b,O(r)||O(t)||t<=0?NaN:2*t*t;var r,t})),c(St.prototype,"cdf",(function(r){return Rr(r,this.mu,this.b)})),c(St.prototype,"logcdf",(function(r){return rt(r,this.mu,this.b)})),c(St.prototype,"logpdf",(function(r){return tt(r,this.mu,this.b)})),c(St.prototype,"mgf",(function(r){return Ut(r,this.mu,this.b)})),c(St.prototype,"pdf",(function(r){return Ot(r,this.mu,this.b)})),c(St.prototype,"quantile",(function(r){return It(r,this.mu,this.b)})),St},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Laplace=t();
//# sourceMappingURL=browser.js.map
