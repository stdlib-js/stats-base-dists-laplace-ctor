// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-entropy@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-kurtosis@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-mean@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-median@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-mode@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-skewness@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-stdev@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-variance@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-logcdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-logpdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-mgf@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-pdf@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-quantile@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function x(){var s,e;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!n(s=arguments[0])||r(s))throw new TypeError(y("invalid argument. Location parameter must be a number. Value: `%s`.",s));if(!i(e))throw new TypeError(y("0Wk7u",e))}else s=0,e=1;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!n(t)||r(t))throw new TypeError(y("invalid assignment. Must be a number. Value: `%s`.",t));s=t}}),t(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(y("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),this}e(x.prototype,"entropy",(function(){return o(this.mu,this.b)})),e(x.prototype,"kurtosis",(function(){return m(this.mu,this.b)})),e(x.prototype,"mean",(function(){return d(this.mu,this.b)})),e(x.prototype,"median",(function(){return p(this.mu,this.b)})),e(x.prototype,"mode",(function(){return a(this.mu,this.b)})),e(x.prototype,"skewness",(function(){return l(this.mu,this.b)})),e(x.prototype,"stdev",(function(){return h(this.mu,this.b)})),e(x.prototype,"variance",(function(){return u(this.mu,this.b)})),s(x.prototype,"cdf",(function(t){return c(t,this.mu,this.b)})),s(x.prototype,"logcdf",(function(t){return b(t,this.mu,this.b)})),s(x.prototype,"logpdf",(function(t){return f(t,this.mu,this.b)})),s(x.prototype,"mgf",(function(t){return j(t,this.mu,this.b)})),s(x.prototype,"pdf",(function(t){return g(t,this.mu,this.b)})),s(x.prototype,"quantile",(function(t){return v(t,this.mu,this.b)}));export{x as default};
//# sourceMappingURL=index.mjs.map
