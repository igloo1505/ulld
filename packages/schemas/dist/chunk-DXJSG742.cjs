"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSIIJJ7OOcjs = require('./chunk-SIIJJ7OO.cjs');


var _chunkDV6NJFK2cjs = require('./chunk-DV6NJFK2.cjs');


var _chunkZHDCMT6Kcjs = require('./chunk-ZHDCMT6K.cjs');


var _chunkHIM3L7SQcjs = require('./chunk-HIM3L7SQ.cjs');


var _chunkE2G4OKFKcjs = require('./chunk-E2G4OKFK.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SnippetOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkZHDCMT6Kcjs.SnippetCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkHIM3L7SQcjs.SnippetAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkDV6NJFK2cjs.SnippetMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkSIIJJ7OOcjs.SnippetMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkE2G4OKFKcjs.SnippetSumOrderByAggregateInputSchema).optional()
}).strict();
var SnippetOrderByWithAggregationInputSchema_default = SnippetOrderByWithAggregationInputSchema;




exports.SnippetOrderByWithAggregationInputSchema = SnippetOrderByWithAggregationInputSchema; exports.SnippetOrderByWithAggregationInputSchema_default = SnippetOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-DXJSG742.cjs.map