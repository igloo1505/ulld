import { a } from '../chunk-26ZT3GAC.js';
import '../chunk-GQSCBKA6.js';
import { getTableOfContents } from 'fumadocs-core/server';

var p=(t=[],e)=>{let r=e.split(`
`).filter(n=>n.trim().startsWith("#")),o=[];return t.length!==r.length&&console.error(`Found different lengths for the toc. Fumadocs found ${t.length} entries, and you found ${r.length}.`),t.forEach((n,i)=>{let l=r[i].trim();o.push({...n,title:a(l)});}),o},g=async t=>{let e=await getTableOfContents(t);return p(e,t)};

export { p as getLatexTocEntries, g as getTocFromContent };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getTocFromContent.js.map