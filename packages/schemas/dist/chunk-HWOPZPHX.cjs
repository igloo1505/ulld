"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedDateTimeNullableFilterSchema.ts
var _zod = require('zod');
var NestedDateTimeNullableFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional().nullable(),
  in: _zod.z.coerce.date().array().optional().nullable(),
  notIn: _zod.z.coerce.date().array().optional().nullable(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedDateTimeNullableFilterSchema_default = NestedDateTimeNullableFilterSchema;




exports.NestedDateTimeNullableFilterSchema = NestedDateTimeNullableFilterSchema; exports.NestedDateTimeNullableFilterSchema_default = NestedDateTimeNullableFilterSchema_default;
//# sourceMappingURL=chunk-HWOPZPHX.cjs.map