'use strict';

var i=(r,e)=>{if(!r||typeof r!="string")return !1;let t=r.indexOf(e);return t!==-1&&t!==r.lastIndexOf(e)},s=r=>!r||typeof r!="string"?!1:i(r,"$"),o=r=>r?r.includes("<")&&r.includes(">")?!0:["_","*","-","$"].some(e=>i(r,e)):!1,f=(r,e=!0)=>{let t=e?"$$":"$",n=r.indexOf(t);return n===-1||n===r.lastIndexOf(t)?`${t}
${r}
${t}`:r};

exports.a = i;
exports.b = s;
exports.c = o;
exports.d = f;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-EVHGLAPJ.cjs.map