"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBEX2MBGAcjs = require('./chunk-BEX2MBGA.cjs');

// src/database/outputTypeSchemas/ServingCreateManyArgsSchema.ts
var _zod = require('zod');
var ServingCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBEX2MBGAcjs.ServingCreateManyInputSchema, _chunkBEX2MBGAcjs.ServingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyArgsSchema_default = ServingCreateManyArgsSchema;




exports.ServingCreateManyArgsSchema = ServingCreateManyArgsSchema; exports.ServingCreateManyArgsSchema_default = ServingCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-XVS7M6GP.cjs.map