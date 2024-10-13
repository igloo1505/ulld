"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietCountOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  carb: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  goals: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietCountOrderByAggregateInputSchema_default = DietCountOrderByAggregateInputSchema;




exports.DietCountOrderByAggregateInputSchema = DietCountOrderByAggregateInputSchema; exports.DietCountOrderByAggregateInputSchema_default = DietCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-XGVKTQUV.cjs.map