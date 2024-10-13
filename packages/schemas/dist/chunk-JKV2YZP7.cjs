"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7S56NRJFcjs = require('./chunk-7S56NRJF.cjs');


var _chunk346JIEOEcjs = require('./chunk-346JIEOE.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

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
  not: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk7S56NRJFcjs.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk346JIEOEcjs.NestedDateTimeFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk346JIEOEcjs.NestedDateTimeFilterSchema).optional()
}).strict();
var DateTimeWithAggregatesFilterSchema_default = DateTimeWithAggregatesFilterSchema;




exports.DateTimeWithAggregatesFilterSchema = DateTimeWithAggregatesFilterSchema; exports.DateTimeWithAggregatesFilterSchema_default = DateTimeWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-JKV2YZP7.cjs.map