'use strict';

var chunkJF6JSIA2_cjs = require('../chunk-JF6JSIA2.cjs');
require('../chunk-7ARU3YXQ.cjs');

var o=(e,t)=>e.includes(t),a=(e,t)=>e.includes(t)?e:`${t}${chunkJF6JSIA2_cjs.a(e)}`,s=e=>{let t=new URLSearchParams;return t.set("language",e.language||"mdx"),e.useExistingValue&&t.set("useExistingValue","true"),`/editor/${encodeURI(e.contentId)}?${t.toString()}`};

exports.getEditorUrl = s;
exports.includesRoot = o;
exports.makeAbsolute = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.cjs.map