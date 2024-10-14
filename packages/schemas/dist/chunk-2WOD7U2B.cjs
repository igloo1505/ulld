"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKJHIKEKQcjs = require('./chunk-KJHIKEKQ.cjs');

// src/database/inputTypeSchemas/FloatNullableFilterSchema.ts
var _zod = require('zod');
var FloatNullableFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkKJHIKEKQcjs.NestedFloatNullableFilterSchema)]).optional().nullable()
}).strict();
var FloatNullableFilterSchema_default = FloatNullableFilterSchema;




exports.FloatNullableFilterSchema = FloatNullableFilterSchema; exports.FloatNullableFilterSchema_default = FloatNullableFilterSchema_default;
//# sourceMappingURL=chunk-2WOD7U2B.cjs.map