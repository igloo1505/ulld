"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ7XAVQI2cjs = require('./chunk-Q7XAVQI2.cjs');


var _chunkS3LVADD6cjs = require('./chunk-S3LVADD6.cjs');


var _chunk3LT5J3GBcjs = require('./chunk-3LT5J3GB.cjs');


var _chunkRTR6HTYKcjs = require('./chunk-RTR6HTYK.cjs');


var _chunkRYV4U2Q3cjs = require('./chunk-RYV4U2Q3.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var BibOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkQ7XAVQI2cjs.BibCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkS3LVADD6cjs.BibAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkRTR6HTYKcjs.BibMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk3LT5J3GBcjs.BibMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkRYV4U2Q3cjs.BibSumOrderByAggregateInputSchema).optional()
}).strict();
var BibOrderByWithAggregationInputSchema_default = BibOrderByWithAggregationInputSchema;




exports.BibOrderByWithAggregationInputSchema = BibOrderByWithAggregationInputSchema; exports.BibOrderByWithAggregationInputSchema_default = BibOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-UXRMLJ4T.cjs.map