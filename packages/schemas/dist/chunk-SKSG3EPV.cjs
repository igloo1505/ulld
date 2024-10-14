"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QuoteCountOrderByAggregateInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  source: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pinned: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QuoteCountOrderByAggregateInputSchema_default = QuoteCountOrderByAggregateInputSchema;




exports.QuoteCountOrderByAggregateInputSchema = QuoteCountOrderByAggregateInputSchema; exports.QuoteCountOrderByAggregateInputSchema_default = QuoteCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SKSG3EPV.cjs.map