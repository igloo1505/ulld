"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedFloatFilterSchema.ts
var _zod = require('zod');
var NestedFloatFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedFloatFilterSchema)]).optional()
}).strict();
var NestedFloatFilterSchema_default = NestedFloatFilterSchema;




exports.NestedFloatFilterSchema = NestedFloatFilterSchema; exports.NestedFloatFilterSchema_default = NestedFloatFilterSchema_default;
//# sourceMappingURL=chunk-FKZZAZAO.cjs.map