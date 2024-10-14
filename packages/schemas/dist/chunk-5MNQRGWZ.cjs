"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5Y2MHAE6cjs = require('./chunk-5Y2MHAE6.cjs');


var _chunk6L2XQMKPcjs = require('./chunk-6L2XQMKP.cjs');


var _chunkSKSG3EPVcjs = require('./chunk-SKSG3EPV.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var QuoteOrderByWithAggregationInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pinned: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkSKSG3EPVcjs.QuoteCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk6L2XQMKPcjs.QuoteMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk5Y2MHAE6cjs.QuoteMinOrderByAggregateInputSchema).optional()
}).strict();
var QuoteOrderByWithAggregationInputSchema_default = QuoteOrderByWithAggregationInputSchema;




exports.QuoteOrderByWithAggregationInputSchema = QuoteOrderByWithAggregationInputSchema; exports.QuoteOrderByWithAggregationInputSchema_default = QuoteOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-5MNQRGWZ.cjs.map