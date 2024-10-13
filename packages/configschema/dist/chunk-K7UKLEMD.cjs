"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkENBKTJRWcjs = require('./chunk-ENBKTJRW.cjs');

// src/zod/refinedConfigs/minimalParsableConfig.ts
var minimalParsableAppConfig = _chunkENBKTJRWcjs.appConfigDeepPartial.required({
  fsRoot: true,
  noteTypes: true
});
var appConfigDeepPartialWithNotetypes = _chunkENBKTJRWcjs.appConfigDeepPartial.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = _chunkENBKTJRWcjs.appConfigDeepPartial.required({
  noteTypes: true
});





exports.minimalParsableAppConfig = minimalParsableAppConfig; exports.appConfigDeepPartialWithNotetypes = appConfigDeepPartialWithNotetypes; exports.appConfigDeepPartialWithFsRoot = appConfigDeepPartialWithFsRoot;
//# sourceMappingURL=chunk-K7UKLEMD.cjs.map