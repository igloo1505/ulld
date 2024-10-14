"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHUFQEVDcjs = require('./chunk-HHUFQEVD.cjs');


var _chunk7TUMXZQ4cjs = require('./chunk-7TUMXZQ4.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/DateTimeNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var DateTimeNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional().nullable(),
  in: _zod.z.coerce.date().array().optional().nullable(),
  notIn: _zod.z.coerce.date().array().optional().nullable(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkHHUFQEVDcjs.NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk7TUMXZQ4cjs.NestedDateTimeNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk7TUMXZQ4cjs.NestedDateTimeNullableFilterSchema).optional()
}).strict();
var DateTimeNullableWithAggregatesFilterSchema_default = DateTimeNullableWithAggregatesFilterSchema;




exports.DateTimeNullableWithAggregatesFilterSchema = DateTimeNullableWithAggregatesFilterSchema; exports.DateTimeNullableWithAggregatesFilterSchema_default = DateTimeNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-5SSTWBRM.cjs.map