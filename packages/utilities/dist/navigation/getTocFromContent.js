import { a } from '../chunk-G6XFHCMQ.js';
import '../chunk-5WT32FJO.js';
import { getTableOfContents } from 'fumadocs-core/server';

var p=(t=[],e)=>{let r=e.split(`
`).filter(n=>n.trim().startsWith("#")),o=[];return t.length!==r.length&&console.error(`Found different lengths for the toc. Fumadocs found ${t.length} entries, and you found ${r.length}.`),t.forEach((n,i)=>{let l=r[i].trim();o.push({...n,title:a(l)});}),o},c=async t=>{let e=await getTableOfContents(t);return p(e,t)};

export { p as getLatexTocEntries, c as getTocFromContent };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getTocFromContent.js.map