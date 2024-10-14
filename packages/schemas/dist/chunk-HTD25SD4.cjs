"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/NestedEnumQUANTITY_GUESSNullableFilterSchema.ts
var _zod = require('zod');
var NestedEnumQUANTITY_GUESSNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedEnumQUANTITY_GUESSNullableFilterSchema_default = NestedEnumQUANTITY_GUESSNullableFilterSchema;




exports.NestedEnumQUANTITY_GUESSNullableFilterSchema = NestedEnumQUANTITY_GUESSNullableFilterSchema; exports.NestedEnumQUANTITY_GUESSNullableFilterSchema_default = NestedEnumQUANTITY_GUESSNullableFilterSchema_default;
//# sourceMappingURL=chunk-HTD25SD4.cjs.map