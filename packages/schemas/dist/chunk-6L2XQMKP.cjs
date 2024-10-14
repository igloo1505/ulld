"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteMaxOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QuoteMaxOrderByAggregateInputSchema_default = QuoteMaxOrderByAggregateInputSchema;




exports.QuoteMaxOrderByAggregateInputSchema = QuoteMaxOrderByAggregateInputSchema; exports.QuoteMaxOrderByAggregateInputSchema_default = QuoteMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6L2XQMKP.cjs.map