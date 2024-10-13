"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV4JLCMF3cjs = require('./chunk-V4JLCMF3.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/JsonWithAggregatesFilterSchema.ts
var _zod = require('zod');
var JsonWithAggregatesFilterSchema = _zod.z.object({
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
  not: _chunkOO7BVO2Hcjs.InputJsonValueSchema.optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkV4JLCMF3cjs.NestedJsonFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkV4JLCMF3cjs.NestedJsonFilterSchema).optional()
}).strict();
var JsonWithAggregatesFilterSchema_default = JsonWithAggregatesFilterSchema;




exports.JsonWithAggregatesFilterSchema = JsonWithAggregatesFilterSchema; exports.JsonWithAggregatesFilterSchema_default = JsonWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-XFYVMGLC.cjs.map