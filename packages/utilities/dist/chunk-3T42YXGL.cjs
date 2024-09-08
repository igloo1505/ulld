'use strict';

var chunkIQLKCCD5_cjs = require('./chunk-IQLKCCD5.cjs');
var l = require('jaro-winkler');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var l__default = /*#__PURE__*/_interopDefault(l);

var o=e=>`${e[0].toUpperCase()}${e.slice(1)}`,u=e=>e.replaceAll(/\-|\_/gm," ").split(" ").map((t,r)=>r===0?t.toLowerCase():o(t)).join(""),a=e=>e.includes(".")?e.slice(e.lastIndexOf(".")):void 0,g=e=>{let t=a(e);return !!(t&&t.length>0&&t.length<=4)},x=(e,t)=>g(e)?e:`${e}${t}`,f=e=>{let t=e.trim();return t.startsWith("$$")&&t.endsWith("$$")&&chunkIQLKCCD5_cjs.a(t,/\$\$/gm).length===2?t.replaceAll("$$","").trim():t.startsWith("$")&&t.endsWith("$")&&chunkIQLKCCD5_cjs.a(t,/\$/gm).length===2?t.replaceAll("$","").trim():t},m=(e,t,r=!1)=>t.map(i=>({similarity:l__default.default(e,i,{caseSensitive:r}),value:i})).sort((i,n)=>i.similarity<n.similarity?1:i.similarity>n.similarity?-1:0),y=(e,t,r=!1)=>m(e,t,r)[0].value;

exports.a = o;
exports.b = u;
exports.c = a;
exports.d = g;
exports.e = x;
exports.f = f;
exports.g = m;
exports.h = y;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-3T42YXGL.cjs.map