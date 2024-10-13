"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTN3PJRU5cjs = require('./chunk-TN3PJRU5.cjs');


var _chunkOXYZNY6Hcjs = require('./chunk-OXYZNY6H.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

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
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkTN3PJRU5cjs.NestedFloatNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkOXYZNY6Hcjs.NestedFloatNullableFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkOXYZNY6Hcjs.NestedFloatNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOXYZNY6Hcjs.NestedFloatNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkOXYZNY6Hcjs.NestedFloatNullableFilterSchema).optional()
}).strict();
var FloatNullableWithAggregatesFilterSchema_default = FloatNullableWithAggregatesFilterSchema;




exports.FloatNullableWithAggregatesFilterSchema = FloatNullableWithAggregatesFilterSchema; exports.FloatNullableWithAggregatesFilterSchema_default = FloatNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-HWKC7KYU.cjs.map