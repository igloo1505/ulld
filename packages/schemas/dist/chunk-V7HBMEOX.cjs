"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  barcode: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glutenFree: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemMaxOrderByAggregateInputSchema_default = DietaryItemMaxOrderByAggregateInputSchema;




exports.DietaryItemMaxOrderByAggregateInputSchema = DietaryItemMaxOrderByAggregateInputSchema; exports.DietaryItemMaxOrderByAggregateInputSchema_default = DietaryItemMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-V7HBMEOX.cjs.map