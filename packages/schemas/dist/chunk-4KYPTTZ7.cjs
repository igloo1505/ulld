"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemSumOrderByAggregateInputSchema_default = DietaryItemSumOrderByAggregateInputSchema;




exports.DietaryItemSumOrderByAggregateInputSchema = DietaryItemSumOrderByAggregateInputSchema; exports.DietaryItemSumOrderByAggregateInputSchema_default = DietaryItemSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4KYPTTZ7.cjs.map