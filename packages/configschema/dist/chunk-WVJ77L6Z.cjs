"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFB3FRHYMcjs = require('./chunk-FB3FRHYM.cjs');


var _chunkIN5UY237cjs = require('./chunk-IN5UY237.cjs');

// src/zod/refinedConfigs/minimalParsableConfig.ts
var _zod = require('zod');
var minimalParsableAppConfig = _chunkFB3FRHYMcjs.appConfigOutputDeepPartialSchema.required({
  fsRoot: true
}).merge(_zod.z.object({
  noteTypes: _chunkIN5UY237cjs.documentTypeConfigMinimalOutputSchema.array()
}));
var appConfigDeepPartialWithNotetypes = _chunkFB3FRHYMcjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = _chunkFB3FRHYMcjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});





exports.minimalParsableAppConfig = minimalParsableAppConfig; exports.appConfigDeepPartialWithNotetypes = appConfigDeepPartialWithNotetypes; exports.appConfigDeepPartialWithFsRoot = appConfigDeepPartialWithFsRoot;
//# sourceMappingURL=chunk-WVJ77L6Z.cjs.map