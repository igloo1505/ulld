"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedIntNullableFilterSchema.ts
var _zod = require('zod');
var NestedIntNullableFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional().nullable(),
  in: _zod.z.number().array().optional().nullable(),
  notIn: _zod.z.number().array().optional().nullable(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedIntNullableFilterSchema_default = NestedIntNullableFilterSchema;




exports.NestedIntNullableFilterSchema = NestedIntNullableFilterSchema; exports.NestedIntNullableFilterSchema_default = NestedIntNullableFilterSchema_default;
//# sourceMappingURL=chunk-TDZUUUZN.cjs.map