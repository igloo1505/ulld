"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedBoolNullableFilterSchema.ts
var _zod = require('zod');
var NestedBoolNullableFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => NestedBoolNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedBoolNullableFilterSchema_default = NestedBoolNullableFilterSchema;




exports.NestedBoolNullableFilterSchema = NestedBoolNullableFilterSchema; exports.NestedBoolNullableFilterSchema_default = NestedBoolNullableFilterSchema_default;
//# sourceMappingURL=chunk-QVGIBYYL.cjs.map