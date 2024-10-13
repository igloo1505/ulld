"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ServingCountOrderByAggregateInputSchema_default = ServingCountOrderByAggregateInputSchema;




exports.ServingCountOrderByAggregateInputSchema = ServingCountOrderByAggregateInputSchema; exports.ServingCountOrderByAggregateInputSchema_default = ServingCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-CIVOG5XU.cjs.map