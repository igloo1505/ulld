"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJPL67BITcjs = require('./chunk-JPL67BIT.cjs');


var _chunkUX4XCRF2cjs = require('./chunk-UX4XCRF2.cjs');


var _chunkWDMRTLQKcjs = require('./chunk-WDMRTLQK.cjs');


var _chunkCFDLCNP2cjs = require('./chunk-CFDLCNP2.cjs');


var _chunkXEBNHTT4cjs = require('./chunk-XEBNHTT4.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SnippetOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkWDMRTLQKcjs.SnippetCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkCFDLCNP2cjs.SnippetAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUX4XCRF2cjs.SnippetMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkJPL67BITcjs.SnippetMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkXEBNHTT4cjs.SnippetSumOrderByAggregateInputSchema).optional()
}).strict();
var SnippetOrderByWithAggregationInputSchema_default = SnippetOrderByWithAggregationInputSchema;




exports.SnippetOrderByWithAggregationInputSchema = SnippetOrderByWithAggregationInputSchema; exports.SnippetOrderByWithAggregationInputSchema_default = SnippetOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-W3KL5N76.cjs.map