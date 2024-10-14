"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQVGIBYYLcjs = require('./chunk-QVGIBYYL.cjs');

// src/database/inputTypeSchemas/BoolNullableFilterSchema.ts
var _zod = require('zod');
var BoolNullableFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkQVGIBYYLcjs.NestedBoolNullableFilterSchema)]).optional().nullable()
}).strict();
var BoolNullableFilterSchema_default = BoolNullableFilterSchema;




exports.BoolNullableFilterSchema = BoolNullableFilterSchema; exports.BoolNullableFilterSchema_default = BoolNullableFilterSchema_default;
//# sourceMappingURL=chunk-FX4FA72A.cjs.map