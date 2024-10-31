import { a } from './chunk-46TSI776.mjs';
import { a as a$1 } from './chunk-YSDEXSCS.mjs';
import { glob } from 'glob';
import n from 'fs';
import m from 'path';

var S=async(f,e)=>{let r=a.parse(f),t=await glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m.join(e.fsRoot,o)):t=t.map(o=>a$1(o)),r.type==="dirs"&&(t=t.filter(o=>n.statSync(i?o:m.join(e.fsRoot,o)).isDirectory())),t};

export { S as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-CAWS5ZEU.mjs.map