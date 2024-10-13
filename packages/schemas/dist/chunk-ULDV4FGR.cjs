"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR2JDEES2cjs = require('./chunk-R2JDEES2.cjs');


var _chunkQ4URDZERcjs = require('./chunk-Q4URDZER.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkR2JDEES2cjs.NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkQ4URDZERcjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQ4URDZERcjs.NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;




exports.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema; exports.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-ULDV4FGR.cjs.map