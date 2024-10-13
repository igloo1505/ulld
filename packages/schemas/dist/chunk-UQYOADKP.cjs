"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ServingMinOrderByAggregateInputSchema_default = ServingMinOrderByAggregateInputSchema;




exports.ServingMinOrderByAggregateInputSchema = ServingMinOrderByAggregateInputSchema; exports.ServingMinOrderByAggregateInputSchema_default = ServingMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UQYOADKP.cjs.map