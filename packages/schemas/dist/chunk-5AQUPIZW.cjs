"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQAOF44MTcjs = require('./chunk-QAOF44MT.cjs');


var _chunk2BVC2JVGcjs = require('./chunk-2BVC2JVG.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/DateTimeWithAggregatesFilterSchema.ts
var _zod = require('zod');
var DateTimeWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional(),
  in: _zod.z.coerce.date().array().optional(),
  notIn: _zod.z.coerce.date().array().optional(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQAOF44MTcjs.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk2BVC2JVGcjs.NestedDateTimeFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk2BVC2JVGcjs.NestedDateTimeFilterSchema).optional()
}).strict();
var DateTimeWithAggregatesFilterSchema_default = DateTimeWithAggregatesFilterSchema;




exports.DateTimeWithAggregatesFilterSchema = DateTimeWithAggregatesFilterSchema; exports.DateTimeWithAggregatesFilterSchema_default = DateTimeWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-5AQUPIZW.cjs.map