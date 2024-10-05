import { a } from '../../chunk-FAYX6KPO.js';
import '../../chunk-GQSCBKA6.js';
import { globSync } from 'glob';
import r from 'path';

var i=class{constructor(o){this.fsRoot=o;}glob(o,t=["**node_modules**"],p=!0){return globSync(o,{cwd:this.fsRoot,ignore:t,nodir:!p}).map(s=>r.join(this.fsRoot,s))}filePathsOfType(o){return this.glob(`**/*.${o}`).map(t=>r.join(this.fsRoot,t))}filesOfType(o){return this.filePathsOfType(o).map(t=>new a(t))}};

export { i as UlldGlob };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.js.map