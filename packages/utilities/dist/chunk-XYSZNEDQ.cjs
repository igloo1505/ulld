'use strict';

var o = require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var i=t=>t.startsWith("/")?t:`/${t}`,x=t=>typeof t>"u"?void 0:i(t),a=t=>t.endsWith("/")?t.slice(0,t.length-1):t,l=t=>t.endsWith("/")?t:`${t}/`,u=t=>/^http(s?):\/\//gm.test(t)||typeof window>"u"?t:`${(window?.location?.href.startsWith("http")?window.location.href.startsWith("https"):process.env.NEXT_PUBLIC_PRODUCTION_REMOTE)?"https":"http"}://${t}`,g=t=>t.startsWith("/")?t.slice(1,t.length):t,h=({value:t,leading:e,trailing:r})=>{let n=t;return n=e?i(n):g(n),n=r?l(n):a(n),n},s=t=>t.indexOf("/")>=0?t.slice(0,t.lastIndexOf("/")):t,c=t=>t.indexOf("/")===-1?t:t.slice(t.lastIndexOf("/")+1,t.length),d=(t,e)=>i(t.indexOf(e)===-1?t:t.split(e)[1]),p=(t,e)=>t.includes(e)?t:`${e}${h({value:t,leading:!0,trailing:!1})}`,m=(t,e=!0,r)=>({parent:e?d(s(t),r):s(t),filename:c(t)}),w=t=>t.split(".").at(-1),P=(t,e,r="")=>t.startsWith(e)?`${r}${t.split(e)[1]}`:t,$=(t,e,r="")=>t.endsWith(e)?`${t.slice(0,t.length-e.length)}${r}`:t,O=async t=>{try{let e=await o__default.default.post("/api/glob",t);if(e.data.filePaths)return e.data.filePaths}catch(e){console.error(e);}};

exports.a = i;
exports.b = x;
exports.c = a;
exports.d = l;
exports.e = u;
exports.f = g;
exports.g = h;
exports.h = s;
exports.i = c;
exports.j = d;
exports.k = p;
exports.l = m;
exports.m = w;
exports.n = P;
exports.o = $;
exports.p = O;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XYSZNEDQ.cjs.map