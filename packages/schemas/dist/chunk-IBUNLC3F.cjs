"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHWOPZPHXcjs = require('./chunk-HWOPZPHX.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/NestedDateTimeNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedDateTimeNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional().nullable(),
  in: _zod.z.coerce.date().array().optional().nullable(),
  notIn: _zod.z.coerce.date().array().optional().nullable(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHWOPZPHXcjs.NestedDateTimeNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHWOPZPHXcjs.NestedDateTimeNullableFilterSchema).optional()
}).strict();
var NestedDateTimeNullableWithAggregatesFilterSchema_default = NestedDateTimeNullableWithAggregatesFilterSchema;




exports.NestedDateTimeNullableWithAggregatesFilterSchema = NestedDateTimeNullableWithAggregatesFilterSchema; exports.NestedDateTimeNullableWithAggregatesFilterSchema_default = NestedDateTimeNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-IBUNLC3F.cjs.map