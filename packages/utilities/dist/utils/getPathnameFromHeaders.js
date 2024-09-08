import '../chunk-5WT32FJO.js';
import { headers } from 'next/headers';

var d=()=>{let e=headers().get("x-url"),t=e?.indexOf("?");return e&&t&&t>-1&&(e=e.slice(0,t)),e};

export { d as getPathnameFromHeaders };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.js.map