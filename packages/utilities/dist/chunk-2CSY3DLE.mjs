import { i } from './chunk-6XNOREAB.mjs';

var l=()=>{let a={};for(let t of i.internalPackageData)a[t.name]=t.currentVersion;return a},n=()=>i.internalPackageData.filter(a=>a.type==="package"),o=()=>{let a={};for(let t of i.internalPackageData)a[t.name]=t;return a},r=()=>i.internalPackageData.filter(a=>a.type==="app"),m=()=>n().map(a=>a.name),c=()=>n().filter(a=>!a.isTranspiled).map(a=>a.name),s=()=>r().map(a=>a.name),I=()=>i.internalPackageData.map(a=>a.name);

export { l as a, n as b, o as c, r as d, m as e, c as f, s as g, I as h };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-2CSY3DLE.mjs.map