"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/IntNullableListFilterSchema.ts
var _zod = require('zod');
var IntNullableListFilterSchema = _zod.z.object({
  equals: _zod.z.number().array().optional().nullable(),
  has: _zod.z.number().optional().nullable(),
  hasEvery: _zod.z.number().array().optional(),
  hasSome: _zod.z.number().array().optional(),
  isEmpty: _zod.z.boolean().optional()
}).strict();
var IntNullableListFilterSchema_default = IntNullableListFilterSchema;




exports.IntNullableListFilterSchema = IntNullableListFilterSchema; exports.IntNullableListFilterSchema_default = IntNullableListFilterSchema_default;
//# sourceMappingURL=chunk-7EO2LNCH.cjs.map