"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHLHAWNMDcjs = require('./chunk-HLHAWNMD.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/JsonWithAggregatesFilterSchema.ts
var _zod = require('zod');
var JsonWithAggregatesFilterSchema = _zod.z.object({
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
  not: _chunkCPSW4INCcjs.InputJsonValueSchema.optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHLHAWNMDcjs.NestedJsonFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHLHAWNMDcjs.NestedJsonFilterSchema).optional()
}).strict();
var JsonWithAggregatesFilterSchema_default = JsonWithAggregatesFilterSchema;




exports.JsonWithAggregatesFilterSchema = JsonWithAggregatesFilterSchema; exports.JsonWithAggregatesFilterSchema_default = JsonWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-VYMA4VCA.cjs.map