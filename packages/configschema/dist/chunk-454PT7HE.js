import { configSearchParamOverrideSchema, applyConfigOverrideMap } from './chunk-GT6H4QSG.js';

// src/zod/applySearchParamOverride.ts
var applySearchParamConfigOverride = (baseConfig, searchParams) => {
  let sp = configSearchParamOverrideSchema.parse(searchParams);
  let bc = baseConfig;
  Object.keys(sp).forEach((k) => {
    bc = applyConfigOverrideMap[k](baseConfig, sp);
  });
  return bc;
};

export { applySearchParamConfigOverride };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-454PT7HE.js.map