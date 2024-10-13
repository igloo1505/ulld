"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietSumOrderByAggregateInputSchema = _zod.z.object({
  carb: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietSumOrderByAggregateInputSchema_default = DietSumOrderByAggregateInputSchema;




exports.DietSumOrderByAggregateInputSchema = DietSumOrderByAggregateInputSchema; exports.DietSumOrderByAggregateInputSchema_default = DietSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NP6ZLPBC.cjs.map