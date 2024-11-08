import { a } from './chunk-46TSI776.mjs';
import { a as a$1 } from './chunk-YSDEXSCS.mjs';
import f from 'fs';
import m from 'path';
import { glob } from 'glob';

var d=async(n,e)=>{let r=a.parse(n),t=await glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m.join(e.fsRoot,o)):t=t.map(o=>a$1(o)),r.type==="dirs"&&(t=t.filter(o=>f.statSync(i?o:m.join(e.fsRoot,o)).isDirectory())),t};

export { d as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JF4SBP6G.mjs.map