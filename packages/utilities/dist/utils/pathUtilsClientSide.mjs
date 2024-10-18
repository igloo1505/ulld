import { a as a$1 } from '../chunk-ONINCKWZ.mjs';
import '../chunk-T7KECS5U.mjs';

var o=(e,t)=>e.includes(t),a=(e,t)=>e.includes(t)?e:`${t}${a$1(e)}`,s=e=>{let t=new URLSearchParams;return t.set("language",e.language||"mdx"),e.useExistingValue&&t.set("useExistingValue","true"),`/editor/${encodeURI(e.contentId)}?${t.toString()}`};

export { s as getEditorUrl, o as includesRoot, a as makeAbsolute };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.mjs.map