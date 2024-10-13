"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/IntNullableFilterSchema.ts
var _zod = require('zod');
var IntNullableFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var IntNullableFilterSchema_default = IntNullableFilterSchema;




exports.IntNullableFilterSchema = IntNullableFilterSchema; exports.IntNullableFilterSchema_default = IntNullableFilterSchema_default;
//# sourceMappingURL=chunk-2WZ4XBN7.cjs.map