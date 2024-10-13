"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');


var _chunkC5BJJORKcjs = require('./chunk-C5BJJORK.cjs');

// src/database/inputTypeSchemas/NestedStringNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedStringNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.string().optional().nullable(),
  in: _zod.z.string().array().optional().nullable(),
  notIn: _zod.z.string().array().optional().nullable(),
  lt: _zod.z.string().optional(),
  lte: _zod.z.string().optional(),
  gt: _zod.z.string().optional(),
  gte: _zod.z.string().optional(),
  contains: _zod.z.string().optional(),
  startsWith: _zod.z.string().optional(),
  endsWith: _zod.z.string().optional(),
  search: _zod.z.string().optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkC5BJJORKcjs.NestedStringNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkC5BJJORKcjs.NestedStringNullableFilterSchema).optional()
}).strict();
var NestedStringNullableWithAggregatesFilterSchema_default = NestedStringNullableWithAggregatesFilterSchema;




exports.NestedStringNullableWithAggregatesFilterSchema = NestedStringNullableWithAggregatesFilterSchema; exports.NestedStringNullableWithAggregatesFilterSchema_default = NestedStringNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-JGZNQ4WM.cjs.map