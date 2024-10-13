"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3KPKJCZAcjs = require('./chunk-3KPKJCZA.cjs');


var _chunkFKZZAZAOcjs = require('./chunk-FKZZAZAO.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/IntWithAggregatesFilterSchema.ts
var _zod = require('zod');
var IntWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk3KPKJCZAcjs.NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkFKZZAZAOcjs.NestedFloatFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional()
}).strict();
var IntWithAggregatesFilterSchema_default = IntWithAggregatesFilterSchema;




exports.IntWithAggregatesFilterSchema = IntWithAggregatesFilterSchema; exports.IntWithAggregatesFilterSchema_default = IntWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-VYYZSYF5.cjs.map