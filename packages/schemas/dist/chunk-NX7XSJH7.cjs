"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedBoolFilterSchema.ts
var _zod = require('zod');
var NestedBoolFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => NestedBoolFilterSchema)]).optional()
}).strict();
var NestedBoolFilterSchema_default = NestedBoolFilterSchema;




exports.NestedBoolFilterSchema = NestedBoolFilterSchema; exports.NestedBoolFilterSchema_default = NestedBoolFilterSchema_default;
//# sourceMappingURL=chunk-NX7XSJH7.cjs.map