"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedStringFilterSchema.ts
var _zod = require('zod');
var NestedStringFilterSchema = _zod.z.object({
  equals: _zod.z.string().optional(),
  in: _zod.z.string().array().optional(),
  notIn: _zod.z.string().array().optional(),
  lt: _zod.z.string().optional(),
  lte: _zod.z.string().optional(),
  gt: _zod.z.string().optional(),
  gte: _zod.z.string().optional(),
  contains: _zod.z.string().optional(),
  startsWith: _zod.z.string().optional(),
  endsWith: _zod.z.string().optional(),
  search: _zod.z.string().optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => NestedStringFilterSchema)]).optional()
}).strict();
var NestedStringFilterSchema_default = NestedStringFilterSchema;




exports.NestedStringFilterSchema = NestedStringFilterSchema; exports.NestedStringFilterSchema_default = NestedStringFilterSchema_default;
//# sourceMappingURL=chunk-4R6ZXXTA.cjs.map