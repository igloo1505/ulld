"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEZRZ2M4Lcjs = require('./chunk-EZRZ2M4L.cjs');


var _chunkIVJJXIXYcjs = require('./chunk-IVJJXIXY.cjs');


var _chunk5YFOMFUCcjs = require('./chunk-5YFOMFUC.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var QuoteOrderByWithAggregationInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  pinned: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk5YFOMFUCcjs.QuoteCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkIVJJXIXYcjs.QuoteMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEZRZ2M4Lcjs.QuoteMinOrderByAggregateInputSchema).optional()
}).strict();
var QuoteOrderByWithAggregationInputSchema_default = QuoteOrderByWithAggregationInputSchema;




exports.QuoteOrderByWithAggregationInputSchema = QuoteOrderByWithAggregationInputSchema; exports.QuoteOrderByWithAggregationInputSchema_default = QuoteOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-MJIKECJK.cjs.map