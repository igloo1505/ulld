import { a as a$1 } from './chunk-W7NTBV6M.mjs';
import a from 'path';
import { globSync } from 'glob';
import { admonitionTypeList } from '@ulld/types/admonitionTypes';
import r from 'lucide-react/dynamicIconImports';
import { iconNameMap } from '@ulld/types/iconNameMap';

var I=()=>{let n=[];for(let o in r)n.push({type:"lucide",name:o});let e=a.join(a$1("getValidIconNames"),"packages/icons/src/logoIcons");globSync("**/*.{ts,tsx}",{cwd:e,nodir:!0}).forEach(o=>{n.push({type:"logo",name:a.parse(o).name});}),admonitionTypeList.forEach(o=>{n.push({type:"admonition",name:o});});for(let o in iconNameMap)n.push({type:"nameMap",name:o});return n};

export { I as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-TS2PYGH6.mjs.map