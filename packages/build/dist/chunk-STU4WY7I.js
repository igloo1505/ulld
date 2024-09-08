import {
  getDevData
} from "./chunk-NQBOVBT2.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/createBaseProject.ts
init_esm_shims();
var createBaseProject = async (build, options) => {
  let d = getDevData();
  return d.workingOffline ? true : await build.createBaseProject();
};

export {
  createBaseProject
};
//# sourceMappingURL=chunk-STU4WY7I.js.map