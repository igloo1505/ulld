import path from 'path';
import fs from 'fs';
import { globSync } from 'glob';

// src/__scripts__/gatherReservedPublicPaths.ts
var gatherReservedPublicPaths = (root = process.env.ULLD_TEST_ROOT) => {
  const publicDir = path.join(root, "public");
  const paths = globSync("*", {
    cwd: publicDir
  }).filter((p) => fs.statSync(path.join(publicDir, p)).isDirectory());
  return paths;
};

export { gatherReservedPublicPaths };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-3IMAH4YD.js.map