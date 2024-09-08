import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/gatherConfig.ts
init_esm_shims();
var gatherAppConfig = async (build, options) => {
  build.packageJson.gather();
  await build.gatherAppConfig();
};

export {
  gatherAppConfig
};
//# sourceMappingURL=chunk-WO4AKMZS.js.map