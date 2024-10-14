"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKJHIKEKQcjs = require('./chunk-KJHIKEKQ.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/NestedIntNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedIntNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional()
}).strict();
var NestedIntNullableWithAggregatesFilterSchema_default = NestedIntNullableWithAggregatesFilterSchema;




exports.NestedIntNullableWithAggregatesFilterSchema = NestedIntNullableWithAggregatesFilterSchema; exports.NestedIntNullableWithAggregatesFilterSchema_default = NestedIntNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-U6AWR7WI.cjs.map