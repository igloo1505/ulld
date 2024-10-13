"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedIntFilterSchema.ts
var _zod = require('zod');
var NestedIntFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedIntFilterSchema)]).optional()
}).strict();
var NestedIntFilterSchema_default = NestedIntFilterSchema;




exports.NestedIntFilterSchema = NestedIntFilterSchema; exports.NestedIntFilterSchema_default = NestedIntFilterSchema_default;
//# sourceMappingURL=chunk-I44PW4RN.cjs.map