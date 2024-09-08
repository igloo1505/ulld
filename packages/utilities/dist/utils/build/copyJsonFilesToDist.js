import '../../chunk-GQSCBKA6.js';
import { globSync } from 'glob';
import c from 'fs';
import n from 'path';

var g=(o,i="src/**/*.json",r)=>{r||(r=globSync(i,{cwd:o,nodir:!0}));for(let t of r)c.cpSync(n.join(o,t),n.join(o,t.replace("src/","dist/")));};

export { g as copyJsonFilesToDist };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.js.map