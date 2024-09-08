import '../../chunk-5WT32FJO.js';
import { globSync } from 'glob';
import c from 'fs';
import n from 'path';

var j=(o,i="src/**/*.json",r)=>{r||(r=globSync(i,{cwd:o,nodir:!0}));for(let t of r)c.cpSync(n.join(o,t),n.join(o,t.replace("src/","dist/")));};

export { j as copyJsonFilesToDist };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.js.map