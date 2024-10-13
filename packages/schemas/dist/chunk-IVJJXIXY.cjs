"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteMaxOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QuoteMaxOrderByAggregateInputSchema_default = QuoteMaxOrderByAggregateInputSchema;




exports.QuoteMaxOrderByAggregateInputSchema = QuoteMaxOrderByAggregateInputSchema; exports.QuoteMaxOrderByAggregateInputSchema_default = QuoteMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IVJJXIXY.cjs.map