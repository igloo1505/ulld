import {
  applyConfigOverrideMap,
  configSearchParamOverrideSchema
} from "./chunk-UIGQNR7P.mjs";

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
//# sourceMappingURL=chunk-FLMWNW2N.mjs.map