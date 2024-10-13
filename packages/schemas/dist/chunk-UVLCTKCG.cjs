"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/FloatNullableListFilterSchema.ts
var _zod = require('zod');
var FloatNullableListFilterSchema = _zod.z.object({
  equals: _zod.z.number().array().optional().nullable(),
  has: _zod.z.number().optional().nullable(),
  hasEvery: _zod.z.number().array().optional(),
  hasSome: _zod.z.number().array().optional(),
  isEmpty: _zod.z.boolean().optional()
}).strict();
var FloatNullableListFilterSchema_default = FloatNullableListFilterSchema;




exports.FloatNullableListFilterSchema = FloatNullableListFilterSchema; exports.FloatNullableListFilterSchema_default = FloatNullableListFilterSchema_default;
//# sourceMappingURL=chunk-UVLCTKCG.cjs.map