import { h } from './chunk-VKRDNKEX.mjs';

var l=()=>{let a={};for(let t of h.internalPackageData)a[t.name]=t.currentVersion;return a},n=()=>h.internalPackageData.filter(a=>a.type==="package"),o=()=>{let a={};for(let t of h.internalPackageData)a[t.name]=t;return a},r=()=>h.internalPackageData.filter(a=>a.type==="app"),m=()=>n().map(a=>a.name),c=()=>n().filter(a=>!a.isTranspiled).map(a=>a.name),s=()=>r().map(a=>a.name),I=()=>h.internalPackageData.map(a=>a.name);

export { l as a, n as b, o as c, r as d, m as e, c as f, s as g, I as h };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-QLNKD5CX.mjs.map