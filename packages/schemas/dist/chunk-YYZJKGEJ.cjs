"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');


var _chunkUJMAHDKFcjs = require('./chunk-UJMAHDKF.cjs');

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
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUJMAHDKFcjs.NestedStringNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUJMAHDKFcjs.NestedStringNullableFilterSchema).optional()
}).strict();
var NestedStringNullableWithAggregatesFilterSchema_default = NestedStringNullableWithAggregatesFilterSchema;




exports.NestedStringNullableWithAggregatesFilterSchema = NestedStringNullableWithAggregatesFilterSchema; exports.NestedStringNullableWithAggregatesFilterSchema_default = NestedStringNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-YYZJKGEJ.cjs.map