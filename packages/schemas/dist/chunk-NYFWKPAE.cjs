"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU6ZD5LA3cjs = require('./chunk-U6ZD5LA3.cjs');


var _chunkMDVBYF6Kcjs = require('./chunk-MDVBYF6K.cjs');


var _chunkKZAHDYNCcjs = require('./chunk-KZAHDYNC.cjs');


var _chunkX33BOM4Dcjs = require('./chunk-X33BOM4D.cjs');


var _chunkV5FCPSOHcjs = require('./chunk-V5FCPSOH.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkKZAHDYNCcjs.WaitlistRequestCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkX33BOM4Dcjs.WaitlistRequestAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkMDVBYF6Kcjs.WaitlistRequestMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkU6ZD5LA3cjs.WaitlistRequestMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkV5FCPSOHcjs.WaitlistRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithAggregationInputSchema_default = WaitlistRequestOrderByWithAggregationInputSchema;




exports.WaitlistRequestOrderByWithAggregationInputSchema = WaitlistRequestOrderByWithAggregationInputSchema; exports.WaitlistRequestOrderByWithAggregationInputSchema_default = WaitlistRequestOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-NYFWKPAE.cjs.map