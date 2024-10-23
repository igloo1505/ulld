import i from 'fs';
import p from 'path';

var o=(t,s)=>{let r=t;return t.endsWith(".d.ts")?r=r.slice(0,r.length-5):r=r.slice(0,r.lastIndexOf(".")),`${r}${s}`},n=(t,s,r)=>{let e=t;return s==="src"&&e.startsWith("./dist")?e=e.replace("./dist","./src"):s==="dist"&&e.startsWith("./src")&&(e=e.replace("./src","./dist")),o(e,r)},d=(t,s)=>{let r=o(t,".ts"),e=p.join(s.dirname,r),a=o(t,".tsx"),l=p.join(s.dirname,a);if(i.existsSync(e))return r;if(i.existsSync(l))return a;let c=o(t,".json");if(i.existsSync(p.join(s.dirname,c)))return c;throw new Error(`Could not find a path that exists for file ${t}`)},g=(t,s,r)=>{if(s==="dist dir object")return typeof t.value=="object"?t:{...t,value:{types:n(t.value,"dist",".d.ts"),import:n(t.value,"dist",".mjs"),require:n(t.value,"dist",".cjs")}};if(s==="src dir string"){let e=typeof t.value=="string"?t.value:d(n(t.value.import,"src",".ts"),r);if(!e)throw new Error(`Could not find file for ${t.value}`);return typeof t.value=="string"?t:{...t,value:e}}return t};

export { g as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-M7LNJ3QP.js.map