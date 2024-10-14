"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTJNXOFOMcjs = require('./chunk-TJNXOFOM.cjs');


var _chunkHTD25SD4cjs = require('./chunk-HTD25SD4.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkTJNXOFOMcjs.NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHTD25SD4cjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHTD25SD4cjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;




exports.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema; exports.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-F34NF5FQ.cjs.map