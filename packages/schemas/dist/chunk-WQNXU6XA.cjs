"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC5BJJORKcjs = require('./chunk-C5BJJORK.cjs');


var _chunkUYFIWA5Bcjs = require('./chunk-UYFIWA5B.cjs');

// src/database/inputTypeSchemas/StringNullableFilterSchema.ts
var _zod = require('zod');
var StringNullableFilterSchema = _zod.z.object({
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
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkC5BJJORKcjs.NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var StringNullableFilterSchema_default = StringNullableFilterSchema;




exports.StringNullableFilterSchema = StringNullableFilterSchema; exports.StringNullableFilterSchema_default = StringNullableFilterSchema_default;
//# sourceMappingURL=chunk-WQNXU6XA.cjs.map