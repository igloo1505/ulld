'use strict';

var chunk4TCNH4QA_cjs = require('../chunk-4TCNH4QA.cjs');
require('../chunk-7ARU3YXQ.cjs');
var server = require('fumadocs-core/server');

var p=(t=[],e)=>{let r=e.split(`
`).filter(n=>n.trim().startsWith("#")),o=[];return t.length!==r.length&&console.error(`Found different lengths for the toc. Fumadocs found ${t.length} entries, and you found ${r.length}.`),t.forEach((n,i)=>{let l=r[i].trim();o.push({...n,title:chunk4TCNH4QA_cjs.a(l)});}),o},g=async t=>{let e=await server.getTableOfContents(t);return p(e,t)};

exports.getLatexTocEntries = p;
exports.getTocFromContent = g;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getTocFromContent.cjs.map