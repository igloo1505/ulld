"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkRHIF2I76cjs = require('./chunk-RHIF2I76.cjs');

// src/zod/applySearchParamOverride.ts
var applySearchParamConfigOverride = (baseConfig, searchParams) => {
  let sp = _chunkRHIF2I76cjs.configSearchParamOverrideSchema.parse(searchParams);
  let bc = baseConfig;
  Object.keys(sp).forEach((k) => {
    bc = _chunkRHIF2I76cjs.applyConfigOverrideMap[k](baseConfig, sp);
  });
  return bc;
};



exports.applySearchParamConfigOverride = applySearchParamConfigOverride;
//# sourceMappingURL=chunk-L354VGYE.cjs.map