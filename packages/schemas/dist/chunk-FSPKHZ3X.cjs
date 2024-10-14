"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKRWCURPKcjs = require('./chunk-KRWCURPK.cjs');


var _chunkKJHIKEKQcjs = require('./chunk-KJHIKEKQ.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/FloatNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var FloatNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkKRWCURPKcjs.NestedFloatNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema).optional()
}).strict();
var FloatNullableWithAggregatesFilterSchema_default = FloatNullableWithAggregatesFilterSchema;




exports.FloatNullableWithAggregatesFilterSchema = FloatNullableWithAggregatesFilterSchema; exports.FloatNullableWithAggregatesFilterSchema_default = FloatNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-FSPKHZ3X.cjs.map