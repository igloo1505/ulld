"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteMinOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QuoteMinOrderByAggregateInputSchema_default = QuoteMinOrderByAggregateInputSchema;




exports.QuoteMinOrderByAggregateInputSchema = QuoteMinOrderByAggregateInputSchema; exports.QuoteMinOrderByAggregateInputSchema_default = QuoteMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-EZRZ2M4L.cjs.map