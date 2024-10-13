"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHWOPZPHXcjs = require('./chunk-HWOPZPHX.cjs');

// src/database/inputTypeSchemas/DateTimeNullableFilterSchema.ts
var _zod = require('zod');
var DateTimeNullableFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional().nullable(),
  in: _zod.z.coerce.date().array().optional().nullable(),
  notIn: _zod.z.coerce.date().array().optional().nullable(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkHWOPZPHXcjs.NestedDateTimeNullableFilterSchema)]).optional().nullable()
}).strict();
var DateTimeNullableFilterSchema_default = DateTimeNullableFilterSchema;




exports.DateTimeNullableFilterSchema = DateTimeNullableFilterSchema; exports.DateTimeNullableFilterSchema_default = DateTimeNullableFilterSchema_default;
//# sourceMappingURL=chunk-4NEUKRDU.cjs.map