"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWT2HCQAIcjs = require('./chunk-WT2HCQAI.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');


var _chunkEWPH3EBUcjs = require('./chunk-EWPH3EBU.cjs');


var _chunkUYFIWA5Bcjs = require('./chunk-UYFIWA5B.cjs');

// src/database/inputTypeSchemas/StringWithAggregatesFilterSchema.ts
var _zod = require('zod');
var StringWithAggregatesFilterSchema = _zod.z.object({
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
  mode: _zod.z.lazy(() => _chunkUYFIWA5Bcjs.QueryModeSchema).optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkWT2HCQAIcjs.NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEWPH3EBUcjs.NestedStringFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEWPH3EBUcjs.NestedStringFilterSchema).optional()
}).strict();
var StringWithAggregatesFilterSchema_default = StringWithAggregatesFilterSchema;




exports.StringWithAggregatesFilterSchema = StringWithAggregatesFilterSchema; exports.StringWithAggregatesFilterSchema_default = StringWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-OYCJHDTM.cjs.map