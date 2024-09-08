import {
  applyConfigOverrideMap,
  configSearchParamOverrideSchema
} from "./chunk-Y66PE4PI.js";

// src/zod/applySearchParamOverride.ts
var applySearchParamConfigOverride = (baseConfig, searchParams) => {
  let sp = configSearchParamOverrideSchema.parse(searchParams);
  let bc = baseConfig;
  Object.keys(sp).forEach((k) => {
    bc = applyConfigOverrideMap[k](baseConfig, sp);
  });
  return bc;
};

export {
  applySearchParamConfigOverride
};
//# sourceMappingURL=chunk-3DFOTVSS.js.map