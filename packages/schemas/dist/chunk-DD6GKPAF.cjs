"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJGZNQ4WMcjs = require('./chunk-JGZNQ4WM.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');


var _chunkC5BJJORKcjs = require('./chunk-C5BJJORK.cjs');


var _chunkUYFIWA5Bcjs = require('./chunk-UYFIWA5B.cjs');

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
  mode: _zod.z.lazy(() => _chunkUYFIWA5Bcjs.QueryModeSchema).optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkJGZNQ4WMcjs.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkC5BJJORKcjs.NestedStringNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkC5BJJORKcjs.NestedStringNullableFilterSchema).optional()
}).strict();
var StringNullableWithAggregatesFilterSchema_default = StringNullableWithAggregatesFilterSchema;




exports.StringNullableWithAggregatesFilterSchema = StringNullableWithAggregatesFilterSchema; exports.StringNullableWithAggregatesFilterSchema_default = StringNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-DD6GKPAF.cjs.map