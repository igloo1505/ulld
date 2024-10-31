'use strict';

var o = require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var n=t=>t.startsWith("/")?t:`/${t}`,f=t=>typeof t>"u"?void 0:n(t),a=t=>t.endsWith("/")?t.slice(0,t.length-1):t,l=t=>t.endsWith("/")?t:`${t}/`,p=t=>/^http(s?):\/\//gm.test(t)||typeof window>"u"?t:`${(window.location.href.startsWith("http")?window.location.href.startsWith("https"):process.env.NEXT_PUBLIC_PRODUCTION_REMOTE)?"https":"http"}://${t}`,g=t=>t.startsWith("/")?t.slice(1,t.length):t,h=({value:t,leading:e,trailing:r})=>{let s=t;return s=e?n(s):g(s),s=r?l(s):a(s),s},i=t=>t.includes("/")?t.slice(0,t.lastIndexOf("/")):t,c=t=>t.includes("/")?t.slice(t.lastIndexOf("/")+1,t.length):t,d=(t,e)=>n(t.includes(e)?t.split(e)[1]:t),x=(t,e)=>t.includes(e)?t:`${e}${h({value:t,leading:!0,trailing:!1})}`,m=(t,e=!0,r)=>({parent:e?d(i(t),r):i(t),filename:c(t)}),w=t=>t.split(".").at(-1)?.toLowerCase(),P=(t,e,r="")=>t.startsWith(e)?`${r}${t.split(e)[1]}`:t,$=(t,e,r="")=>t.endsWith(e)?`${t.slice(0,t.length-e.length)}${r}`:t,S=async t=>{try{let e=await o__default.default.post("/api/glob",t);if(e.data.filePaths)return e.data.filePaths}catch(e){console.error(e);}};

exports.a = n;
exports.b = f;
exports.c = a;
exports.d = l;
exports.e = p;
exports.f = g;
exports.g = h;
exports.h = i;
exports.i = c;
exports.j = d;
exports.k = x;
exports.l = m;
exports.m = w;
exports.n = P;
exports.o = $;
exports.p = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JF6JSIA2.cjs.map