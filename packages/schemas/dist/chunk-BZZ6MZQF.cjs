"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ4URDZERcjs = require('./chunk-Q4URDZER.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableFilterSchema.ts
var _zod = require('zod');
var EnumQUANTITY_GUESSNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkQ4URDZERcjs.NestedEnumQUANTITY_GUESSNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumQUANTITY_GUESSNullableFilterSchema_default = EnumQUANTITY_GUESSNullableFilterSchema;




exports.EnumQUANTITY_GUESSNullableFilterSchema = EnumQUANTITY_GUESSNullableFilterSchema; exports.EnumQUANTITY_GUESSNullableFilterSchema_default = EnumQUANTITY_GUESSNullableFilterSchema_default;
//# sourceMappingURL=chunk-BZZ6MZQF.cjs.map