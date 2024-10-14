"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYYZJKGEJcjs = require('./chunk-YYZJKGEJ.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');


var _chunkUJMAHDKFcjs = require('./chunk-UJMAHDKF.cjs');


var _chunkX5MAVCUYcjs = require('./chunk-X5MAVCUY.cjs');

// src/database/inputTypeSchemas/StringNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var StringNullableWithAggregatesFilterSchema = _zod.z.object({
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
  mode: _zod.z.lazy(() => _chunkX5MAVCUYcjs.QueryModeSchema).optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkYYZJKGEJcjs.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUJMAHDKFcjs.NestedStringNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUJMAHDKFcjs.NestedStringNullableFilterSchema).optional()
}).strict();
var StringNullableWithAggregatesFilterSchema_default = StringNullableWithAggregatesFilterSchema;




exports.StringNullableWithAggregatesFilterSchema = StringNullableWithAggregatesFilterSchema; exports.StringNullableWithAggregatesFilterSchema_default = StringNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-IEB3LIY7.cjs.map