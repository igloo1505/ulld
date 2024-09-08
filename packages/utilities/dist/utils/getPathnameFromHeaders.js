import '../chunk-GQSCBKA6.js';
import { headers } from 'next/headers';

var n=()=>{let e=headers().get("x-url"),t=e?.indexOf("?");return e&&t&&t>-1&&(e=e.slice(0,t)),e};

export { n as getPathnameFromHeaders };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.js.map