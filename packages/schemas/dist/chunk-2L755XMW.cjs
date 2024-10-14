"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BVC2JVGcjs = require('./chunk-2BVC2JVG.cjs');

// src/database/inputTypeSchemas/DateTimeFilterSchema.ts
var _zod = require('zod');
var DateTimeFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional(),
  in: _zod.z.coerce.date().array().optional(),
  notIn: _zod.z.coerce.date().array().optional(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk2BVC2JVGcjs.NestedDateTimeFilterSchema)]).optional()
}).strict();
var DateTimeFilterSchema_default = DateTimeFilterSchema;




exports.DateTimeFilterSchema = DateTimeFilterSchema; exports.DateTimeFilterSchema_default = DateTimeFilterSchema_default;
//# sourceMappingURL=chunk-2L755XMW.cjs.map