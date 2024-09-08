import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/getXdgPaths.ts
init_esm_shims();
import xdgAppPaths from "xdg-app-paths";
import path from "path";
var xdgOpts = {
  name: "ulld",
  suffix: "noteTaking"
};
var getXdgPaths = () => {
  return xdgAppPaths(xdgOpts);
};
var getBuildDataOutputPath = () => {
  let configPath = getXdgPaths().config();
  return path.join(configPath, "buildData.json");
};

export {
  xdgOpts,
  getXdgPaths,
  getBuildDataOutputPath
};
//# sourceMappingURL=chunk-2KBTFCVH.js.map