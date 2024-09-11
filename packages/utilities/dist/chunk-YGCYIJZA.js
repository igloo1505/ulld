import { a } from './chunk-LUMNCB27.js';
import { a as a$1 } from './chunk-KCI55TD4.js';
import { glob } from 'glob';
import n from 'fs';
import m from 'path';

var S=async(f,e)=>{let r=a.parse(f),t=await glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m.join(e.fsRoot,o)):t=t.map(o=>a$1(o)),r.type==="dirs"&&(t=t.filter(o=>n.statSync(i?o:m.join(e.fsRoot,o)).isDirectory())),t};

export { S as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-YGCYIJZA.js.map