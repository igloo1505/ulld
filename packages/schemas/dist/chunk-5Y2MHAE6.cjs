"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteMinOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QuoteMinOrderByAggregateInputSchema_default = QuoteMinOrderByAggregateInputSchema;




exports.QuoteMinOrderByAggregateInputSchema = QuoteMinOrderByAggregateInputSchema; exports.QuoteMinOrderByAggregateInputSchema_default = QuoteMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5Y2MHAE6.cjs.map