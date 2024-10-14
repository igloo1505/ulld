"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRNVROOM6cjs = require('./chunk-RNVROOM6.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateManyArgsSchema.ts
var _zod = require('zod');
var CitationsGroupCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRNVROOM6cjs.CitationsGroupCreateManyInputSchema, _chunkRNVROOM6cjs.CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var CitationsGroupCreateManyArgsSchema_default = CitationsGroupCreateManyArgsSchema;




exports.CitationsGroupCreateManyArgsSchema = CitationsGroupCreateManyArgsSchema; exports.CitationsGroupCreateManyArgsSchema_default = CitationsGroupCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-GWDQAJM7.cjs.map