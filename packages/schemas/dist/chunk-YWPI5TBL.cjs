"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ6GUYSTYcjs = require('./chunk-Z6GUYSTY.cjs');


var _chunkX34ZRZ2Wcjs = require('./chunk-X34ZRZ2W.cjs');


var _chunkOUVVLL5Vcjs = require('./chunk-OUVVLL5V.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByWithAggregationInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkX34ZRZ2Wcjs.RandomImageCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkZ6GUYSTYcjs.RandomImageMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOUVVLL5Vcjs.RandomImageMinOrderByAggregateInputSchema).optional()
}).strict();
var RandomImageOrderByWithAggregationInputSchema_default = RandomImageOrderByWithAggregationInputSchema;




exports.RandomImageOrderByWithAggregationInputSchema = RandomImageOrderByWithAggregationInputSchema; exports.RandomImageOrderByWithAggregationInputSchema_default = RandomImageOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-YWPI5TBL.cjs.map