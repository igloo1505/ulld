var i=(r,e)=>{if(!r||typeof r!="string")return !1;let t=r.indexOf(e);return t!==-1&&t!==r.lastIndexOf(e)},f=r=>!r||typeof r!="string"?!1:i(r,"$"),u=r=>r?r.includes("<")&&r.includes(">")?!0:["_","*","-","$"].some(e=>i(r,e)):!1,a=(r,e=!0)=>{let t=e?"$$":"$",n=r.indexOf(t);return n===-1||n===r.lastIndexOf(t)?`${t}
${r}
${t}`:r};

export { i as a, f as b, u as c, a as d };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-4COXG7W4.js.map