'use strict';

var chunkRKGDRDFA_cjs = require('../chunk-RKGDRDFA.cjs');
require('../chunk-7ARU3YXQ.cjs');

var a=(e,t)=>e.includes(t),s=(e,t)=>e.includes(t)?e:`${t}${chunkRKGDRDFA_cjs.a(e)}`,i=e=>{let t=new URLSearchParams;return t.set("language",e.language||"mdx"),e.useExistingValue&&t.set("useExistingValue","true"),`/editor/${encodeURI(e.contentId)}?${t.toString()}`};

exports.getEditorUrl = i;
exports.includesRoot = a;
exports.makeAbsolute = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.cjs.map