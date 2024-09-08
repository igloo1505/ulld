import { a as a$1 } from './chunk-Q7L2DBAQ.js';
import l from 'jaro-winkler';

var o=e=>`${e[0].toUpperCase()}${e.slice(1)}`,$=e=>e.replaceAll(/\-|\_/gm," ").split(" ").map((t,r)=>r===0?t.toLowerCase():o(t)).join(""),a=e=>e.includes(".")?e.slice(e.lastIndexOf(".")):void 0,g=e=>{let t=a(e);return !!(t&&t.length>0&&t.length<=4)},u=(e,t)=>g(e)?e:`${e}${t}`,x=e=>{let t=e.trim();return t.startsWith("$$")&&t.endsWith("$$")&&a$1(t,/\$\$/gm).length===2?t.replaceAll("$$","").trim():t.startsWith("$")&&t.endsWith("$")&&a$1(t,/\$/gm).length===2?t.replaceAll("$","").trim():t},m=(e,t,r=!1)=>t.map(i=>({similarity:l(e,i,{caseSensitive:r}),value:i})).sort((i,n)=>i.similarity<n.similarity?1:i.similarity>n.similarity?-1:0),f=(e,t,r=!1)=>m(e,t,r)[0].value;

export { o as a, $ as b, a as c, g as d, u as e, x as f, m as g, f as h };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-GFP2MCGA.js.map