"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedFloatNullableFilterSchema.ts
var _zod = require('zod');
var NestedFloatNullableFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedFloatNullableFilterSchema_default = NestedFloatNullableFilterSchema;




exports.NestedFloatNullableFilterSchema = NestedFloatNullableFilterSchema; exports.NestedFloatNullableFilterSchema_default = NestedFloatNullableFilterSchema_default;
//# sourceMappingURL=chunk-OXYZNY6H.cjs.map