"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ5SFWJF7cjs = require('./chunk-Q5SFWJF7.cjs');


var _chunkIDPXUFRGcjs = require('./chunk-IDPXUFRG.cjs');

// src/zod/refinedConfigs/minimalParsableConfig.ts
var _zod = require('zod');
var minimalParsableAppConfig = _chunkQ5SFWJF7cjs.appConfigOutputDeepPartialSchema.required({
  fsRoot: true
}).merge(_zod.z.object({
  noteTypes: _chunkIDPXUFRGcjs.documentTypeConfigMinimalOutputSchema.array()
}));
var appConfigDeepPartialWithNotetypes = _chunkQ5SFWJF7cjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = _chunkQ5SFWJF7cjs.appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});





exports.minimalParsableAppConfig = minimalParsableAppConfig; exports.appConfigDeepPartialWithNotetypes = appConfigDeepPartialWithNotetypes; exports.appConfigDeepPartialWithFsRoot = appConfigDeepPartialWithFsRoot;
//# sourceMappingURL=chunk-WDYFPWSL.cjs.map