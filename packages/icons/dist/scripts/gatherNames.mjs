import { a } from '../chunk-NRVXB65U.mjs';
import '../chunk-X5ATXGKD.mjs';
import a$1 from 'lucide-react/dynamicIconImports';
import c from 'fs';
import s from 'path';

var t=Object.keys(a$1);for(let o in a)t.includes(o)||t.push(o);var n="const allIconNames = [";for(let o of t)n+=`
"${o}",`;n+=`
] as const

export default allIconNames`;var m=s.join(s.parse(__filename).dir,"../allIconNames.ts");c.writeFileSync(m,n,{encoding:"utf-8"});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=gatherNames.mjs.map