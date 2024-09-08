import {
  BaseApp
} from "./chunk-7T574WTU.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/generate.ts
init_esm_shims();
var generate = async (build, options) => {
  let baseApp = new BaseApp(build, options);
  baseApp.generate();
  return baseApp;
};

export {
  generate
};
//# sourceMappingURL=chunk-TPUO7YGI.js.map