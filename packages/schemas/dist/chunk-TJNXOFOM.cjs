"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHTD25SD4cjs = require('./chunk-HTD25SD4.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHTD25SD4cjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHTD25SD4cjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
var NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;




exports.NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema; exports.NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-TJNXOFOM.cjs.map