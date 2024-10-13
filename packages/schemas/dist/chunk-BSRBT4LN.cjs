"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBEX2MBGAcjs = require('./chunk-BEX2MBGA.cjs');

// src/database/outputTypeSchemas/ServingCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ServingCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBEX2MBGAcjs.ServingCreateManyInputSchema, _chunkBEX2MBGAcjs.ServingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema;




exports.ServingCreateManyAndReturnArgsSchema = ServingCreateManyAndReturnArgsSchema; exports.ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-BSRBT4LN.cjs.map