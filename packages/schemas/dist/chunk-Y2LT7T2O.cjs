"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NestedBytesFilterSchema.ts
var _zod = require('zod');
var NestedBytesFilterSchema = _zod.z.object({
  equals: _zod.z.instanceof(Buffer).optional(),
  in: _zod.z.instanceof(Buffer).array().optional(),
  notIn: _zod.z.instanceof(Buffer).array().optional(),
  not: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => NestedBytesFilterSchema)]).optional()
}).strict();
var NestedBytesFilterSchema_default = NestedBytesFilterSchema;




exports.NestedBytesFilterSchema = NestedBytesFilterSchema; exports.NestedBytesFilterSchema_default = NestedBytesFilterSchema_default;
//# sourceMappingURL=chunk-Y2LT7T2O.cjs.map