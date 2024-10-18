"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKVIXCEBQcjs = require('./chunk-KVIXCEBQ.cjs');

// src/zod/refinedConfigs/minimalParsableConfig.ts
var minimalParsableAppConfig = _chunkKVIXCEBQcjs.appConfigDeepPartial.required({
  fsRoot: true,
  noteTypes: true
});
var appConfigDeepPartialWithNotetypes = _chunkKVIXCEBQcjs.appConfigDeepPartial.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = _chunkKVIXCEBQcjs.appConfigDeepPartial.required({
  noteTypes: true
});





exports.minimalParsableAppConfig = minimalParsableAppConfig; exports.appConfigDeepPartialWithNotetypes = appConfigDeepPartialWithNotetypes; exports.appConfigDeepPartialWithFsRoot = appConfigDeepPartialWithFsRoot;
//# sourceMappingURL=chunk-6UVBFA2C.cjs.map