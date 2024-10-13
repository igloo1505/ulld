"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedStringNullableFilterSchema.ts
var _zod = require('zod');
var NestedStringNullableFilterSchema = _zod.z.object({
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
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedStringNullableFilterSchema_default = NestedStringNullableFilterSchema;




exports.NestedStringNullableFilterSchema = NestedStringNullableFilterSchema; exports.NestedStringNullableFilterSchema_default = NestedStringNullableFilterSchema_default;
//# sourceMappingURL=chunk-C5BJJORK.cjs.map