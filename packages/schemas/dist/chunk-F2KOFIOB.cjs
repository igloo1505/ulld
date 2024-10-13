"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/JsonFilterSchema.ts
var _zod = require('zod');
var JsonFilterSchema = _zod.z.object({
  equals: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  path: _zod.z.string().array().optional(),
  string_contains: _zod.z.string().optional(),
  string_starts_with: _zod.z.string().optional(),
  string_ends_with: _zod.z.string().optional(),
  array_contains: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional().nullable(),
  array_starts_with: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional().nullable(),
  array_ends_with: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional().nullable(),
  lt: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  lte: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  gt: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  gte: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  not: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional()
}).strict();
var JsonFilterSchema_default = JsonFilterSchema;




exports.JsonFilterSchema = JsonFilterSchema; exports.JsonFilterSchema_default = JsonFilterSchema_default;
//# sourceMappingURL=chunk-F2KOFIOB.cjs.map