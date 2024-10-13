"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ServingMaxOrderByAggregateInputSchema_default = ServingMaxOrderByAggregateInputSchema;




exports.ServingMaxOrderByAggregateInputSchema = ServingMaxOrderByAggregateInputSchema; exports.ServingMaxOrderByAggregateInputSchema_default = ServingMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OBFZYI5Y.cjs.map