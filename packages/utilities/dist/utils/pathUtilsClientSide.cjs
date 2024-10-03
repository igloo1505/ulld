'use strict';

var chunkFICKYDMP_cjs = require('../chunk-FICKYDMP.cjs');
require('../chunk-7ARU3YXQ.cjs');

var o=(e,t)=>e.includes(t),a=(e,t)=>e.includes(t)?e:`${t}${chunkFICKYDMP_cjs.a(e)}`,s=e=>{let t=new URLSearchParams;return t.set("language",e.language||"mdx"),e.useExistingValue&&t.set("useExistingValue","true"),`/editor/${encodeURI(e.contentId)}?${t.toString()}`};

exports.getEditorUrl = s;
exports.includesRoot = o;
exports.makeAbsolute = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.cjs.map