"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/StringNullableListFilterSchema.ts
var _zod = require('zod');
var StringNullableListFilterSchema = _zod.z.object({
  equals: _zod.z.string().array().optional().nullable(),
  has: _zod.z.string().optional().nullable(),
  hasEvery: _zod.z.string().array().optional(),
  hasSome: _zod.z.string().array().optional(),
  isEmpty: _zod.z.boolean().optional()
}).strict();
var StringNullableListFilterSchema_default = StringNullableListFilterSchema;




exports.StringNullableListFilterSchema = StringNullableListFilterSchema; exports.StringNullableListFilterSchema_default = StringNullableListFilterSchema_default;
//# sourceMappingURL=chunk-5AWIXPHD.cjs.map