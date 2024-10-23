"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkIU5DWG3Dcjs = require('./chunk-IU5DWG3D.cjs');

// src/zod/applySearchParamOverride.ts
var applySearchParamConfigOverride = (baseConfig, searchParams) => {
  let sp = _chunkIU5DWG3Dcjs.configSearchParamOverrideSchema.parse(searchParams);
  let bc = baseConfig;
  Object.keys(sp).forEach((k) => {
    bc = _chunkIU5DWG3Dcjs.applyConfigOverrideMap[k](baseConfig, sp);
  });
  return bc;
};



exports.applySearchParamConfigOverride = applySearchParamConfigOverride;
//# sourceMappingURL=chunk-RVD3PA6Y.cjs.map