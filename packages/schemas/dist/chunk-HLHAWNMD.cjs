"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/NestedJsonFilterSchema.ts
var _zod = require('zod');
var NestedJsonFilterSchema = _zod.z.object({
  equals: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  path: _zod.z.string().array().optional(),
  string_contains: _zod.z.string().optional(),
  string_starts_with: _zod.z.string().optional(),
  string_ends_with: _zod.z.string().optional(),
  array_contains: _chunkCPSW4INCcjs.InputJsonValueSchema.optional().nullable(),
  array_starts_with: _chunkCPSW4INCcjs.InputJsonValueSchema.optional().nullable(),
  array_ends_with: _chunkCPSW4INCcjs.InputJsonValueSchema.optional().nullable(),
  lt: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  lte: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  gt: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  gte: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  not: _chunkCPSW4INCcjs.InputJsonValueSchema.optional()
}).strict();
var NestedJsonFilterSchema_default = NestedJsonFilterSchema;




exports.NestedJsonFilterSchema = NestedJsonFilterSchema; exports.NestedJsonFilterSchema_default = NestedJsonFilterSchema_default;
//# sourceMappingURL=chunk-HLHAWNMD.cjs.map