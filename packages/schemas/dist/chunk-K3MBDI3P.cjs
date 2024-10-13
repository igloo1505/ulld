"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ServingSumOrderByAggregateInputSchema_default = ServingSumOrderByAggregateInputSchema;




exports.ServingSumOrderByAggregateInputSchema = ServingSumOrderByAggregateInputSchema; exports.ServingSumOrderByAggregateInputSchema_default = ServingSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-K3MBDI3P.cjs.map