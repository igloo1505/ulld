"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteCountOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QuoteCountOrderByAggregateInputSchema_default = QuoteCountOrderByAggregateInputSchema;




exports.QuoteCountOrderByAggregateInputSchema = QuoteCountOrderByAggregateInputSchema; exports.QuoteCountOrderByAggregateInputSchema_default = QuoteCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5YFOMFUC.cjs.map