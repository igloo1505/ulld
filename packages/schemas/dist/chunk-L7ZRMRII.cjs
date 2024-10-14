"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/JsonFilterSchema.ts
var _zod = require('zod');
var JsonFilterSchema = _zod.z.object({
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
var JsonFilterSchema_default = JsonFilterSchema;




exports.JsonFilterSchema = JsonFilterSchema; exports.JsonFilterSchema_default = JsonFilterSchema_default;
//# sourceMappingURL=chunk-L7ZRMRII.cjs.map