"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ServingAvgOrderByAggregateInputSchema_default = ServingAvgOrderByAggregateInputSchema;




exports.ServingAvgOrderByAggregateInputSchema = ServingAvgOrderByAggregateInputSchema; exports.ServingAvgOrderByAggregateInputSchema_default = ServingAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7VFNEE6G.cjs.map