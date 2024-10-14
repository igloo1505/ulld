"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BVC2JVGcjs = require('./chunk-2BVC2JVG.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/NestedDateTimeWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedDateTimeWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.coerce.date().optional(),
  in: _zod.z.coerce.date().array().optional(),
  notIn: _zod.z.coerce.date().array().optional(),
  lt: _zod.z.coerce.date().optional(),
  lte: _zod.z.coerce.date().optional(),
  gt: _zod.z.coerce.date().optional(),
  gte: _zod.z.coerce.date().optional(),
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk2BVC2JVGcjs.NestedDateTimeFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk2BVC2JVGcjs.NestedDateTimeFilterSchema).optional()
}).strict();
var NestedDateTimeWithAggregatesFilterSchema_default = NestedDateTimeWithAggregatesFilterSchema;




exports.NestedDateTimeWithAggregatesFilterSchema = NestedDateTimeWithAggregatesFilterSchema; exports.NestedDateTimeWithAggregatesFilterSchema_default = NestedDateTimeWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-QAOF44MT.cjs.map