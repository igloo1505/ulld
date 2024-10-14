"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHTD25SD4cjs = require('./chunk-HTD25SD4.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableFilterSchema.ts
var _zod = require('zod');
var EnumQUANTITY_GUESSNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkHTD25SD4cjs.NestedEnumQUANTITY_GUESSNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumQUANTITY_GUESSNullableFilterSchema_default = EnumQUANTITY_GUESSNullableFilterSchema;




exports.EnumQUANTITY_GUESSNullableFilterSchema = EnumQUANTITY_GUESSNullableFilterSchema; exports.EnumQUANTITY_GUESSNullableFilterSchema_default = EnumQUANTITY_GUESSNullableFilterSchema_default;
//# sourceMappingURL=chunk-GSBBLEWR.cjs.map