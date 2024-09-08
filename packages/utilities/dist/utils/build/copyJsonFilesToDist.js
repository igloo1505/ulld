import '../../chunk-F3FYYIAV.js';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

var copyJsonFilesToDist = (cwd, glob = "src/**/*.json", files) => {
  if (!files) {
    files = globSync(glob, {
      cwd,
      nodir: true
    });
  }
  for (const f of files) {
    fs.cpSync(path.join(cwd, f), path.join(cwd, f.replace("src/", "dist/")));
  }
};

export { copyJsonFilesToDist };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.js.map