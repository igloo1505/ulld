"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

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
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var IntNullableFilterSchema_default = IntNullableFilterSchema;




exports.IntNullableFilterSchema = IntNullableFilterSchema; exports.IntNullableFilterSchema_default = IntNullableFilterSchema_default;
//# sourceMappingURL=chunk-RPNAAALB.cjs.map