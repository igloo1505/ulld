"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');


var _chunkEWPH3EBUcjs = require('./chunk-EWPH3EBU.cjs');

// src/database/inputTypeSchemas/NestedStringWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedStringWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.string().optional(),
  in: _zod.z.string().array().optional(),
  notIn: _zod.z.string().array().optional(),
  lt: _zod.z.string().optional(),
  lte: _zod.z.string().optional(),
  gt: _zod.z.string().optional(),
  gte: _zod.z.string().optional(),
  contains: _zod.z.string().optional(),
  startsWith: _zod.z.string().optional(),
  endsWith: _zod.z.string().optional(),
  search: _zod.z.string().optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEWPH3EBUcjs.NestedStringFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEWPH3EBUcjs.NestedStringFilterSchema).optional()
}).strict();
var NestedStringWithAggregatesFilterSchema_default = NestedStringWithAggregatesFilterSchema;




exports.NestedStringWithAggregatesFilterSchema = NestedStringWithAggregatesFilterSchema; exports.NestedStringWithAggregatesFilterSchema_default = NestedStringWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-WT2HCQAI.cjs.map