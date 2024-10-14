"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedDateTimeFilterSchema.ts
var _zod = require('zod');
var NestedDateTimeFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional(),
  in: _zod.z.coerce.date().array().optional(),
  notIn: _zod.z.coerce.date().array().optional(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => NestedDateTimeFilterSchema)]).optional()
}).strict();
var NestedDateTimeFilterSchema_default = NestedDateTimeFilterSchema;




exports.NestedDateTimeFilterSchema = NestedDateTimeFilterSchema; exports.NestedDateTimeFilterSchema_default = NestedDateTimeFilterSchema_default;
//# sourceMappingURL=chunk-2BVC2JVG.cjs.map