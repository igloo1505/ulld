"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH5MJXYEEcjs = require('./chunk-H5MJXYEE.cjs');


var _chunkD3YJHT7Ocjs = require('./chunk-D3YJHT7O.cjs');

// src/zod/build/main.ts
var _zod = require('zod');
var buildOnlySchema = _zod.z.object({
  database: _chunkH5MJXYEEcjs.databaseBuildSchema.default({}),
  additionalUserContent: _chunkD3YJHT7Ocjs.additionalUserContent
}).default({});



exports.buildOnlySchema = buildOnlySchema;
//# sourceMappingURL=chunk-IAIQ6ZJV.cjs.map