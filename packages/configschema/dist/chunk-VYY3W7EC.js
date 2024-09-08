// src/__scripts__/gatherReservedPublicPaths.ts
import path from "path";
import fs from "fs";
import { globSync } from "glob";
var gatherReservedPublicPaths = (root = process.env.ULLD_TEST_ROOT) => {
  const publicDir = path.join(root, "public");
  const paths = globSync("*", {
    cwd: publicDir
  }).filter((p) => fs.statSync(path.join(publicDir, p)).isDirectory());
  return paths;
};

export {
  gatherReservedPublicPaths
};
//# sourceMappingURL=chunk-VYY3W7EC.js.map