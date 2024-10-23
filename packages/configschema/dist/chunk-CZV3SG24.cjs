"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVK2NQYPBcjs = require('./chunk-VK2NQYPB.cjs');

// src/zod/refinedConfigs/minimalParsableConfig.ts
var minimalParsableAppConfig = _chunkVK2NQYPBcjs.appConfigOutputDeepPartialSchema.required({
  fsRoot: true,
  noteTypes: true
});
var appConfigDeepPartialWithNotetypes = _chunkVK2NQYPBcjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = _chunkVK2NQYPBcjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});





exports.minimalParsableAppConfig = minimalParsableAppConfig; exports.appConfigDeepPartialWithNotetypes = appConfigDeepPartialWithNotetypes; exports.appConfigDeepPartialWithFsRoot = appConfigDeepPartialWithFsRoot;
//# sourceMappingURL=chunk-CZV3SG24.cjs.map