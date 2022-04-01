// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,u=i.toString,a=i.__defineGetter__,o=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var s=function(r,t,n){var e,s,v,l;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=i,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,l="set"in n,s&&(v||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,t,n.get),l&&o&&o.call(r,t,n.set),r},v=e,l=s,p=n()?v:l,g=p;var h=function(r,t,n){g(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},m=h,y=p;var b=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,get:n})},d=b;var w=function(r){return"number"==typeof r};var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return N&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,P=j;var A=function(r){return P.call(r)},_=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&_.call(r,t)},T="function"==typeof Symbol?Symbol.toStringTag:"",V=O,x=T,S=j;var U=A,k=function(r){var t,n,e;if(null==r)return S.call(r);n=r[x],t=V(r,x);try{r[x]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[x]=n:delete r[x],e},I=E()?k:U,F=Number,M=F.prototype.toString;var R=I,$=F,G=function(r){try{return M.call(r),!0}catch(r){return!1}},L=E();var C=function(r){return"object"==typeof r&&(r instanceof $||(L?G(r):"[object Number]"===R(r)))},H=w,W=C;var B=m,Z=function(r){return H(r)||W(r)},X=C;B(Z,"isPrimitive",w),B(Z,"isObject",X);var q=Z,z=q.isPrimitive;var Y=function(r){return z(r)&&r>0},D=q.isObject;var J=function(r){return D(r)&&r.valueOf()>0},K=Y,Q=J;var rr=m,tr=function(r){return K(r)||Q(r)},nr=J;rr(tr,"isPrimitive",Y),rr(tr,"isObject",nr);var er=tr;var ir=function(r){return r!=r},ur=q.isPrimitive,ar=ir;var or=function(r){return ur(r)&&ar(r)},fr=q.isObject,cr=ir;var sr=function(r){return fr(r)&&cr(r.valueOf())},vr=or,lr=sr;var pr=m,gr=function(r){return vr(r)||lr(r)},hr=sr;pr(gr,"isPrimitive",or),pr(gr,"isObject",hr);var mr=gr,yr=I,br="function"==typeof Uint32Array;var dr="function"==typeof Uint32Array?Uint32Array:null,wr=function(r){return br&&r instanceof Uint32Array||"[object Uint32Array]"===yr(r)},Nr=dr;var Er=function(){var r,t;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,4294967296,4294967297]),r=wr(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var jr="function"==typeof Uint32Array?Uint32Array:void 0,Pr=function(){throw new Error("not implemented")},Ar=Er()?jr:Pr,_r=I,Or="function"==typeof Float64Array;var Tr="function"==typeof Float64Array?Float64Array:null,Vr=function(r){return Or&&r instanceof Float64Array||"[object Float64Array]"===_r(r)},xr=Tr;var Sr=function(){var r,t;if("function"!=typeof xr)return!1;try{t=new xr([1,3.14,-3.14,NaN]),r=Vr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Ur="function"==typeof Float64Array?Float64Array:void 0,kr=function(){throw new Error("not implemented")},Ir=Sr()?Ur:kr,Fr=I,Mr="function"==typeof Uint8Array;var Rr="function"==typeof Uint8Array?Uint8Array:null,$r=function(r){return Mr&&r instanceof Uint8Array||"[object Uint8Array]"===Fr(r)},Gr=Rr;var Lr=function(){var r,t;if("function"!=typeof Gr)return!1;try{t=new Gr(t=[1,3.14,-3.14,256,257]),r=$r(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Cr="function"==typeof Uint8Array?Uint8Array:void 0,Hr=function(){throw new Error("not implemented")},Wr=Lr()?Cr:Hr,Br=I,Zr="function"==typeof Uint16Array;var Xr="function"==typeof Uint16Array?Uint16Array:null,qr=function(r){return Zr&&r instanceof Uint16Array||"[object Uint16Array]"===Br(r)},zr=Xr;var Yr=function(){var r,t;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,65536,65537]),r=qr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Dr,Jr="function"==typeof Uint16Array?Uint16Array:void 0,Kr=function(){throw new Error("not implemented")},Qr={uint16:Yr()?Jr:Kr,uint8:Wr};(Dr=new Qr.uint16(1))[0]=4660;var rt=52===new Qr.uint8(Dr.buffer)[0],tt=Ar,nt=!0===rt?1:0,et=new Ir(1),it=new tt(et.buffer);var ut=function(r){return et[0]=r,it[nt]},at=Ar,ot=!0===rt?1:0,ft=new Ir(1),ct=new at(ft.buffer);var st=function(r,t){return ft[0]=r,ct[ot]=t>>>0,ft[0]},vt=st,lt=F.NEGATIVE_INFINITY;var pt=ut,gt=vt,ht=ir,mt=lt,yt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},bt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},dt=.6931471803691238,wt=1.9082149292705877e-10;var Nt=function(r){var t,n,e,i,u,a,o,f,c,s,v;return 0===r?mt:ht(r)||r<0?NaN:(i=0,(n=pt(r))<1048576&&(i-=54,n=pt(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(o=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=gt(r,n|1072693248^o))-1,(1048575&2+n)<3?0===a?0===i?0:i*dt+i*wt:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*dt-(u-i*wt-a)):(o=n-398458|0,f=440401-n|0,e=(s=(v=(c=a/(2+a))*c)*v)*yt(s),u=v*bt(s)+e,(o|=f)>0?(t=.5*a*a,0===i?a-(t-c*(t+u)):i*dt-(t-(c*(t+u)+i*wt)-a)):0===i?a-c*(a-u):i*dt-(c*(a-u)-i*wt-a))))},Et=Nt,jt=ir,Pt=Et;var At=function(r,t){return jt(r)||jt(t)||t<=0?NaN:Pt(2*t*2.718281828459045)},_t=ir;var Ot=function(r,t){return _t(r)||_t(t)||t<=0?NaN:3},Tt=ir;var Vt=function(r,t){return Tt(r)||Tt(t)||t<=0?NaN:r},xt=ir;var St=function(r,t){return xt(r)||xt(t)||t<=0?NaN:r},Ut=ir;var kt=function(r,t){return Ut(r)||Ut(t)||t<=0?NaN:r},It=ir;var Ft=function(r,t){return It(r)||It(t)||t<=0?NaN:0},Mt=ir;var Rt=function(r,t){return Mt(r)||Mt(t)||t<=0?NaN:1.4142135623730951*t},$t=ir;var Gt=function(r,t){return $t(r)||$t(t)||t<=0?NaN:2*t*t},Lt=Math.floor,Ct=Math.ceil,Ht=Lt,Wt=Ct;var Bt=function(r){return r<0?Wt(r):Ht(r)},Zt=Number.POSITIVE_INFINITY,Xt=Zt,qt=lt;var zt,Yt,Dt=function(r){return r===Xt||r===qt};!0===rt?(zt=1,Yt=0):(zt=0,Yt=1);var Jt=Ar,Kt={HIGH:zt,LOW:Yt},Qt=new Ir(1),rn=new Jt(Qt.buffer),tn=Kt.HIGH,nn=Kt.LOW;var en=function(r,t){return Qt[0]=t,r[0]=rn[tn],r[1]=rn[nn],r};var un,an,on=function(r,t){return 1===arguments.length?en([0,0],r):en(r,t)};!0===rt?(un=1,an=0):(un=0,an=1);var fn=Ar,cn={HIGH:un,LOW:an},sn=new Ir(1),vn=new fn(sn.buffer),ln=cn.HIGH,pn=cn.LOW;var gn=function(r,t){return vn[ln]=r,vn[pn]=t,sn[0]},hn=on,mn=ut,yn=gn,bn=[0,0];var dn=function(r,t){var n,e;return hn(bn,r),n=bn[0],n&=2147483647,e=mn(t),yn(n|=e&=2147483648,bn[1])};var wn=function(r){return Math.abs(r)},Nn=Dt,En=ir,jn=wn;var Pn=function(r,t){return En(t)||Nn(t)?(r[0]=t,r[1]=0,r):0!==t&&jn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var An=ut;var _n=function(r){var t=An(r);return(t=(2146435072&t)>>>20)-1023|0},On=Zt,Tn=lt,Vn=ir,xn=Dt,Sn=dn,Un=function(r,t){return 1===arguments.length?Pn([0,0],r):Pn(r,t)},kn=_n,In=on,Fn=gn,Mn=[0,0],Rn=[0,0];var $n=function(r,t){var n,e;return 0===t||0===r||Vn(r)||xn(r)?r:(Un(Mn,r),t+=Mn[1],(t+=kn(r=Mn[0]))<-1074?Sn(0,r):t>1023?r<0?Tn:On:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,In(Rn,r),n=Rn[0],n&=2148532223,e*Fn(n|=t+1023<<20,Rn[1])))},Gn=$n;var Ln=Gn,Cn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Hn=ir,Wn=Bt,Bn=lt,Zn=Zt,Xn=function(r,t,n){var e,i,u;return u=(e=r-t)-(i=e*e)*Cn(i),Ln(1-(t-e*u/(2-u)-r),n)};var qn=function(r){var t;return Hn(r)||r===Zn?r:r===Bn?0:r>709.782712893384?Zn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=Wn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Xn(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},zn=ir,Yn=qn;var Dn=function(r){return function(){return r}},Jn=Dn,Kn=ir,Qn=qn;var re=function(r,t,n){var e;return zn(r)||zn(t)||zn(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*Yn(e):1-.5*Yn(-e))};m(re,"factory",(function(r,t){return Kn(r)||Kn(t)||t<=0?Jn(NaN):function(n){var e;if(Kn(n))return NaN;if(e=(n-r)/t,n<r)return.5*Qn(e);return 1-.5*Qn(-e)}}));var te=re;var ne=ir,ee=ut,ie=vt,ue=Zt,ae=lt,oe=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},fe=.6931471803691238,ce=1.9082149292705877e-10;var se=function(r){var t,n,e,i,u,a,o,f,c,s,v,l;if(r===ue||ne(r))return r;if(r===ae)return-1;if(0===r)return r;if(r<0?(n=!0,o=-r):(n=!1,o=r),o>=38.816242111356935){if(n)return-1;if(o>=709.782712893384)return ue}if(u=0|ee(o),o>.34657359027997264)o<1.0397207708399179?n?(e=r+fe,i=-ce,l=-1):(e=r-fe,i=ce,l=1):(l=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(s=l|=0)*fe,i=s*ce),c=e-(r=e-i)-i;else{if(u<1016070144)return r;l=0}return v=(f=r*(t=.5*r))*(((a=1+f*oe(f))-(s=3-a*t))/(6-r*s)),0===l?r-(r*v-f):(v=r*(v-c)-c,v-=f,-1===l?.5*(r-v)-.5:1===l?r<-.25?-2*(v-(r+.5)):1+2*(r-v):l<=-2||l>56?(e=ee(o=1-(v-r))+(l<<20)|0,(o=ie(o,e))-1):(s=1,l<20?o=(s=ie(s,e=1072693248-(2097152>>l)|0))-(v-r):(o=r-(v+(s=ie(s,e=1023-l<<20|0))),o+=1),e=ee(o)+(l<<20)|0,ie(o,e)))};var ve=ir,le=ut,pe=vt,ge=Zt,he=lt,me=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},ye=.6931471803691238,be=1.9082149292705877e-10;var de=function(r){var t,n,e,i,u,a,o,f,c,s;if(r<-1||ve(r))return NaN;if(-1===r)return he;if(r===ge)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(u=(s=((n=le(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(s=((n=le(c=r))>>20)-1023,u=0),(n&=1048575)<434334?c=pe(c,1072693248|n):(s+=1,c=pe(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*ye+(u+=s*be):s*ye-((f=t*(1-.6666666666666666*i))-(s*be+u)-i):(f=(o=(a=i/(2+i))*a)*me(o),0===s?i-(t-a*(t+f)):s*ye-(t-(a*(t+f)+(s*be+u))-i))},we=ir,Ne=se,Ee=de;var je=Dn,Pe=ir,Ae=se,_e=de;var Oe=function(r,t,n){var e;return we(r)||we(t)||we(n)||n<=0?NaN:(e=(r-t)/n,r<t?-.6931471805599453+e:-.6931471805599453+Ee(-Ne(-e)))};m(Oe,"factory",(function(r,t){return Pe(r)||Pe(t)||t<=0?je(NaN):function(n){var e;if(Pe(n))return NaN;if(e=(n-r)/t,n<r)return-.6931471805599453+e;return-.6931471805599453+_e(-Ae(-e))}}));var Te=Oe,Ve=ir,xe=wn,Se=Et;var Ue=Dn,ke=ir,Ie=wn,Fe=Et;var Me=function(r,t,n){return Ve(r)||Ve(t)||Ve(n)||n<=0?NaN:-(xe((r-t)/n)+Se(2*n))};m(Me,"factory",(function(r,t){return ke(r)||ke(t)||t<=0?Ue(NaN):function(n){if(ke(n))return NaN;return-(Ie((n-r)/t)+Fe(2*t))}}));var Re=Me,$e=Lt;var Ge=function(r){return $e(r)===r},Le=Ge;var Ce=function(r){return Le(r/2)};var He=function(r){return Ce(r>0?r-1:r+1)},We=Math.sqrt,Be=Ar,Ze=!0===rt?0:1,Xe=new Ir(1),qe=new Be(Xe.buffer);var ze=function(r,t){return Xe[0]=r,qe[Ze]=t>>>0,Xe[0]};var Ye=function(r){return 0|r},De=He,Je=dn,Ke=lt,Qe=Zt;var ri=ut;var ti=wn,ni=Zt;var ei=ut,ii=ze,ui=vt,ai=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},oi=[1,1.5],fi=[0,.5849624872207642],ci=[0,1.350039202129749e-8];var si=ze,vi=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var li=ut,pi=vt,gi=ze,hi=Ye,mi=Gn,yi=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var bi=ir,di=He,wi=Dt,Ni=Ge,Ei=We,ji=wn,Pi=on,Ai=ze,_i=Ye,Oi=lt,Ti=Zt,Vi=function(r,t){return t===Ke?Qe:t===Qe?0:t>0?De(t)?r:0:De(t)?Je(Qe,r):Qe},xi=function(r,t){return(2147483647&ri(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},Si=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:ti(r)<1==(t===ni)?0:ni},Ui=function(r,t,n){var e,i,u,a,o,f,c,s,v,l,p,g,h,m,y,b,d,w,N,E;return w=0,n<1048576&&(w-=53,n=ei(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?E=0:N<767610?E=1:(E=0,w+=1,n-=1048576),e=524288+(n>>1|536870912),o=(d=1/((t=ui(t,n))+(c=oi[E])))*((b=t-c)-(a=ii(i=b*d,0))*(f=ui(0,e+=E<<18))-a*(t-(f-c))),y=(u=i*i)*u*ai(u),f=ii(f=3+(u=a*a)+(y+=o*(a+i)),0),h=(p=-7.028461650952758e-9*(v=ii(v=(b=a*f)+(d=o*f+(y-(f-3-u))*i),0))+.9617966939259756*(d-(v-b))+ci[E])-((g=ii(g=(l=.9617967009544373*v)+p+(s=fi[E])+(m=w),0))-m-s-l),r[0]=g,r[1]=h,r},ki=function(r,t){var n,e,i,u,a;return n=(a=1.9259629911266175e-8*(i=t-1)-1.4426950408889634*(i*i*vi(i)))-((e=si(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=n,r},Ii=function(r,t,n){var e,i,u,a,o,f,c,s,v,l;return l=((v=2147483647&r|0)>>20)-1023|0,s=0,v>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),t-=u=pi(0,e)),f=(o=.6931471805599453*(n-((u=gi(u=n+t,0))-t))+-1.904654299957768e-9*u)-((c=(a=.6931471824645996*u)+o)-a),i=c-(u=c*c)*yi(u),r=li(c=1-(c*i/(i-2)-(f+c*f)-c)),r=hi(r),c=(r+=s<<20>>>0)>>20<=0?mi(c,s):pi(c,r)},Fi=1e300,Mi=1e-300,Ri=[0,0],$i=[0,0];var Gi=function r(t,n){var e,i,u,a,o,f,c,s,v,l,p,g,h,m;if(bi(t)||bi(n))return NaN;if(Pi(Ri,n),o=Ri[0],0===Ri[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return Ei(t);if(-.5===n)return 1/Ei(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(wi(n))return Si(t,n)}if(Pi(Ri,t),a=Ri[0],0===Ri[1]){if(0===a)return Vi(t,n);if(1===t)return 1;if(-1===t&&di(n))return-1;if(wi(t))return t===Oi?r(-0,-n):n<0?0:Ti}if(t<0&&!1===Ni(n))return(t-t)/(t-t);if(u=ji(t),e=2147483647&a|0,i=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&di(n)?-1:1,i>1105199104){if(i>1139802112)return xi(t,n);if(e<1072693247)return 1===c?f*Fi*Fi:f*Mi*Mi;if(e>1072693248)return 0===c?f*Fi*Fi:f*Mi*Mi;p=ki($i,u)}else p=Ui($i,u,e);if(l=(n-(s=Ai(n,0)))*p[0]+n*p[1],v=s*p[0],Pi(Ri,g=l+v),h=_i(Ri[0]),m=_i(Ri[1]),h>=1083179008){if(0!=(h-1083179008|m))return f*Fi*Fi;if(l+8008566259537294e-32>g-v)return f*Fi*Fi}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|m))return f*Mi*Mi;if(l<=g-v)return f*Mi*Mi}return f*(g=Ii(h,v,l))},Li=ir,Ci=wn,Hi=qn,Wi=Gi;var Bi=Dn,Zi=ir,Xi=wn,qi=qn,zi=Gi;var Yi=function(r,t,n){var e;return Li(r)||Li(t)||Li(n)||n<=0||Ci(r)>=1/n?NaN:(e=n*r,Hi(t*r)/(1-Wi(e,2)))};m(Yi,"factory",(function(r,t){return Zi(r)||Zi(t)||t<=0?Bi(NaN):function(n){var e;if(Xi(n)>=1/t)return NaN;return e=t*n,qi(r*n)/(1-zi(e,2))}}));var Di=Yi,Ji=ir,Ki=wn,Qi=qn;var ru=Dn,tu=ir,nu=wn,eu=qn;var iu=function(r,t,n){return Ji(r)||Ji(t)||Ji(n)||n<=0?NaN:.5*Qi(-Ki((r-t)/n))/n};m(iu,"factory",(function(r,t){return tu(r)||tu(t)||t<=0?ru(NaN):function(n){if(tu(n))return NaN;return.5*eu(-nu((n-r)/t))/t}}));var uu=iu,au=ir;var ou=function(r){return 0===r||au(r)?r:r<0?-1:1},fu=ou,cu=ir,su=wn,vu=Et;var lu=Dn,pu=ou,gu=ir,hu=wn,mu=Et;var yu=function(r,t,n){return cu(t)||cu(n)||cu(r)||n<=0||r<0||r>1?NaN:t-n*fu(r-.5)*vu(1-2*su(r-.5))};m(yu,"factory",(function(r,t){return gu(r)||gu(t)||t<=0?lu(NaN):function(n){if(gu(n)||n<0||n>1)return NaN;return r-t*pu(n-.5)*mu(1-2*hu(n-.5))}}));var bu=yu;var du=function(r){return"string"==typeof r},wu=String.prototype.valueOf;var Nu=I,Eu=function(r){try{return wu.call(r),!0}catch(r){return!1}},ju=E();var Pu=function(r){return"object"==typeof r&&(r instanceof String||(ju?Eu(r):"[object String]"===Nu(r)))},Au=du,_u=Pu;var Ou=m,Tu=function(r){return Au(r)||_u(r)},Vu=Pu;Ou(Tu,"isPrimitive",du),Ou(Tu,"isObject",Vu);var xu=Tu,Su=Ge;var Uu=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Su(r.length)&&r.length>=0&&r.length<=9007199254740991},ku=Zt,Iu=lt,Fu=Ge;var Mu=function(r){return r<ku&&r>Iu&&Fu(r)},Ru=q.isPrimitive,$u=Mu;var Gu=function(r){return Ru(r)&&$u(r)},Lu=q.isObject,Cu=Mu;var Hu=function(r){return Lu(r)&&Cu(r.valueOf())},Wu=Gu,Bu=Hu;var Zu=m,Xu=function(r){return Wu(r)||Bu(r)},qu=Hu;Zu(Xu,"isPrimitive",Gu),Zu(Xu,"isObject",qu);var zu=Xu,Yu=Uu,Du=zu.isPrimitive,Ju=xu.isPrimitive,Ku=mr.isPrimitive;var Qu=function(r,t,n){var e,i,u;if(!Yu(r)&&!Ju(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Du(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");(i=n)<0&&(i=0)}else i=0;if(Ju(r)){if(!Ju(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==r.indexOf(t,i)}if(e=r.length,Ku(t)){for(u=i;u<e;u++)if(Ku(r[u]))return!0;return!1}for(u=i;u<e;u++)if(r[u]===t)return!0;return!1},ra=xu.isPrimitive;var ta=function(r){if(!ra(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},na=xu.isPrimitive;var ea=function(r){if(!na(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ia=ta,ua=ea,aa=xu.isPrimitive;var oa=function(r){return aa(r)&&r===ua(r)&&r!==ia(r)},fa=Zt,ca=lt;var sa=function(r){return r==r&&r>ca&&r<fa},va=zu.isPrimitive;var la=function(r){return va(r)&&r>=0},pa=zu.isObject;var ga=function(r){return pa(r)&&r.valueOf()>=0},ha=la,ma=ga;var ya=m,ba=function(r){return ha(r)||ma(r)},da=ga;ya(ba,"isPrimitive",la),ya(ba,"isObject",da);var wa=ba.isPrimitive,Na=xu.isPrimitive;var Ea=function(r,t){var n,e;if(!Na(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!wa(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(n="",e=t;1==(1&e)&&(n+=r),0!==(e>>>=1);)r+=r;return n},ja=zu.isPrimitive,Pa=xu.isPrimitive;var Aa=Ea,_a=function(r,t,n){var e,i;if(!Pa(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Pa(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!ja(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");e=n<0?r.length+n:n}else e=0;if(0===t.length)return!0;if(e<0||e+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(e+i)!==t.charCodeAt(i))return!1;return!0};var Oa=function(r,t,n){var e=!1,i=t-r.length;return i<0||(_a(r,"-")&&(e=!0,r=r.substr(1)),r=n?r+Aa("0",i):Aa("0",i)+r,e&&(r="-"+r)),r},Ta=oa,Va=ea,xa=ta,Sa=sa,Ua=q.isPrimitive,ka=Oa;var Ia=function(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!Sa(e)){if(!Ua(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=ka(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=ka(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=Ta(r.specifier)?Va(n):xa(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n},Fa=xu.isPrimitive,Ma=/[-\/\\^$*+?.()|[\]{}]/g;var Ra=function(r){var t,n;if(!Fa(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(Ma,"\\$&"):(t=(t=r.substring(1,n)).replace(Ma,"\\$&"),r=r[0]+t+r.substring(n))},$a=/./;var Ga=function(r){return"boolean"==typeof r},La=Boolean.prototype.toString;var Ca=I,Ha=function(r){try{return La.call(r),!0}catch(r){return!1}},Wa=E();var Ba=function(r){return"object"==typeof r&&(r instanceof Boolean||(Wa?Ha(r):"[object Boolean]"===Ca(r)))},Za=Ga,Xa=Ba;var qa=m,za=function(r){return Za(r)||Xa(r)},Ya=Ba;qa(za,"isPrimitive",Ga),qa(za,"isObject",Ya);var Da="object"==typeof self?self:null,Ja="object"==typeof window?window:null,Ka=za.isPrimitive,Qa=function(){return new Function("return this;")()},ro=Da,to=Ja,no=r(Object.freeze({__proto__:null}));var eo=function(r){if(arguments.length){if(!Ka(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Qa()}if(ro)return ro;if(to)return to;if(no)return no;throw new Error("unexpected error. Unable to resolve global object.")},io=eo(),uo=io.document&&io.document.childNodes,ao=Int8Array,oo=$a,fo=uo,co=ao;var so=function(){return"function"==typeof oo||"object"==typeof co||"function"==typeof fo};var vo=function(){return/^\s*function\s*([^(]*)/i},lo=vo;m(lo,"REGEXP",vo());var po=lo,go=I;var ho=Array.isArray?Array.isArray:function(r){return"[object Array]"===go(r)};var mo=function(r){return null!==r&&"object"==typeof r};m(mo,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!ho(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(mo));var yo=mo;var bo=I,wo=po.REGEXP,No=function(r){return yo(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Eo=function(r){var t,n,e;if(("Object"===(n=bo(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=wo.exec(e.toString()))return t[1]}return No(r)?"Buffer":n},jo=Eo;var Po=Eo;var Ao=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jo(r).toLowerCase():t},_o=function(r){return Po(r).toLowerCase()},Oo=so()?_o:Ao;var To=function(r){return"function"===Oo(r)},Vo=RegExp.prototype.exec;var xo=I,So=function(r){try{return Vo.call(r),!0}catch(r){return!1}},Uo=E();var ko=Ra,Io=To,Fo=xu.isPrimitive,Mo=function(r){return"object"==typeof r&&(r instanceof RegExp||(Uo?So(r):"[object RegExp]"===xo(r)))};var Ro=oa,$o=ea,Go=ta,Lo=function(r,t,n){if(!Fo(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Fo(t))t=ko(t),t=new RegExp(t,"g");else if(!Mo(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!Fo(n)&&!Io(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return r.replace(t,n)},Co=sa,Ho=q.isPrimitive,Wo=wn,Bo=/e\+(\d)$/,Zo=/e-(\d)$/,Xo=/^(\d+)$/,qo=/^(\d+)e/,zo=/\.0$/,Yo=/\.0*e/,Do=/(\..*[^0])0*e/;var Jo=function(r){var t,n,e=parseFloat(r.arg);if(!Co(e)){if(!Ho(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Wo(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Lo(n,Do,"$1e"),n=Lo(n,Yo,"e"),n=Lo(n,zo,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Lo(n,Bo,"e+0$1"),n=Lo(n,Zo,"e-0$1"),r.alternate&&(n=Lo(n,Xo,"$1."),n=Lo(n,qo,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=Ro(r.specifier)?$o(n):Go(n)},Ko=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Qo=Ea;var rf=xu.isPrimitive,tf=Qu,nf=ir,ef=Ia,uf=Jo,af=function(r){var t,n,e,i,u;for(t=0,e=[],u=Ko.exec(r);u;)(n=r.slice(t,Ko.lastIndex-u[0].length)).length&&e.push(n),(i=a(u,e.length))&&e.push(i),t=Ko.lastIndex,u=Ko.exec(r);return(n=r.slice(t)).length&&e.push(n),e;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},of=function(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Qo(" ",e):Qo(" ",e)+r},ff=Oa,cf=String.fromCharCode;var sf=p,vf=m,lf=d,pf=er.isPrimitive,gf=q.isPrimitive,hf=mr,mf=At,yf=Ot,bf=Vt,df=St,wf=kt,Nf=Ft,Ef=Rt,jf=Gt,Pf=te,Af=Te,_f=Re,Of=Di,Tf=uu,Vf=bu,xf=function(r){var t,n,e,i,u,a,o,f,c;if(!rf(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(t=af(r),a="",o=1,f=0;f<t.length;f++)if(e=t[f],rf(e))a+=e;else{for(e.mapping&&(o=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=!tf(n,"-");break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[o],10),o+=1,nf(e.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if("*"===e.precision&&e.hasPeriod){if(e.precision=parseInt(arguments[o],10),o+=1,nf(e.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,e.hasPeriod=!1)}switch(e.arg=arguments[o],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e.hasPeriod&&(e.padZeros=!1),e.arg=ef(e);break;case"s":e.maxWidth=e.hasPeriod?e.precision:-1;break;case"c":if(!nf(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=nf(u)?String(e.arg):cf(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e.hasPeriod||(e.precision=6),e.arg=uf(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=ff(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=of(e.arg,e.width,e.padRight)),a+=e.arg||"",o+=1}return a};function Sf(){var r,t;if(!(this instanceof Sf))return 0===arguments.length?new Sf:new Sf(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!gf(r=arguments[0])||hf(r))throw new TypeError(xf("invalid argument. Location parameter `mu` must be a number. Value: `%s`.",r));if(!pf(t))throw new TypeError(xf("invalid argument. Scale parameter `b` must be a positive number. Value: `%s`.",t))}else r=0,t=1;return sf(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!gf(t)||hf(t))throw new TypeError(xf("invalid value. Must be a number. Value: `%s`.",t));r=t}}),sf(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!pf(r))throw new TypeError(xf("invalid value. Must be a positive number. Value: `%s`.",r));t=r}}),this}lf(Sf.prototype,"entropy",(function(){return mf(this.mu,this.b)})),lf(Sf.prototype,"kurtosis",(function(){return yf(this.mu,this.b)})),lf(Sf.prototype,"mean",(function(){return bf(this.mu,this.b)})),lf(Sf.prototype,"median",(function(){return df(this.mu,this.b)})),lf(Sf.prototype,"mode",(function(){return wf(this.mu,this.b)})),lf(Sf.prototype,"skewness",(function(){return Nf(this.mu,this.b)})),lf(Sf.prototype,"stdev",(function(){return Ef(this.mu,this.b)})),lf(Sf.prototype,"variance",(function(){return jf(this.mu,this.b)})),vf(Sf.prototype,"cdf",(function(r){return Pf(r,this.mu,this.b)})),vf(Sf.prototype,"logcdf",(function(r){return Af(r,this.mu,this.b)})),vf(Sf.prototype,"logpdf",(function(r){return _f(r,this.mu,this.b)})),vf(Sf.prototype,"mgf",(function(r){return Of(r,this.mu,this.b)})),vf(Sf.prototype,"pdf",(function(r){return Tf(r,this.mu,this.b)})),vf(Sf.prototype,"quantile",(function(r){return Vf(r,this.mu,this.b)}));var Uf=Sf;export{Uf as default};
//# sourceMappingURL=mod.js.map
