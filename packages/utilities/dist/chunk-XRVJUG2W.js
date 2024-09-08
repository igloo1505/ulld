import { a } from './chunk-4YXWFJAV.js';
import { a as a$1 } from './chunk-LP3CV6WX.js';
import { glob } from 'glob';
import n from 'fs';
import m from 'path';

var y=async(f,e)=>{let r=a.parse(f),t=await glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m.join(e.fsRoot,o)):t=t.map(o=>a$1(o)),r.type==="dirs"&&(t=t.filter(o=>n.statSync(i?o:m.join(e.fsRoot,o)).isDirectory())),t};

export { y as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XRVJUG2W.js.map