"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk4R553QM5cjs = require('./chunk-4R553QM5.cjs');

// src/zod/applySearchParamOverride.ts
var applySearchParamConfigOverride = (baseConfig, searchParams) => {
  let sp = _chunk4R553QM5cjs.configSearchParamOverrideSchema.parse(searchParams);
  let bc = baseConfig;
  Object.keys(sp).forEach((k) => {
    bc = _chunk4R553QM5cjs.applyConfigOverrideMap[k](baseConfig, sp);
  });
  return bc;
};



exports.applySearchParamConfigOverride = applySearchParamConfigOverride;
//# sourceMappingURL=chunk-E22WNRFD.cjs.map