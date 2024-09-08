import { FileData } from '../../chunk-IGUAPEDC.js';
import '../../chunk-F3FYYIAV.js';
import { globSync } from 'glob';
import path from 'path';

var UlldGlob = class {
  constructor(fsRoot) {
    this.fsRoot = fsRoot;
  }
  /** Returns paths as absolute paths */
  glob(pattern, ignore = ["**node_modules**"], includeDirs = true) {
    return globSync(pattern, {
      cwd: this.fsRoot,
      ignore,
      nodir: !includeDirs
    }).map((f) => path.join(this.fsRoot, f));
  }
  filePathsOfType(fileType) {
    return this.glob(`**/*.${fileType}`).map((f) => path.join(this.fsRoot, f));
  }
  filesOfType(fileType) {
    return this.filePathsOfType(fileType).map((f) => new FileData(f));
  }
};

export { UlldGlob };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.js.map