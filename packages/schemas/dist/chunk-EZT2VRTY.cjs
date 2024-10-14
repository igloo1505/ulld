"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRNVROOM6cjs = require('./chunk-RNVROOM6.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var CitationsGroupCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRNVROOM6cjs.CitationsGroupCreateManyInputSchema, _chunkRNVROOM6cjs.CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var CitationsGroupCreateManyAndReturnArgsSchema_default = CitationsGroupCreateManyAndReturnArgsSchema;




exports.CitationsGroupCreateManyAndReturnArgsSchema = CitationsGroupCreateManyAndReturnArgsSchema; exports.CitationsGroupCreateManyAndReturnArgsSchema_default = CitationsGroupCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-EZT2VRTY.cjs.map