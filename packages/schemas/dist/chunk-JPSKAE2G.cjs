"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY2C5XLXJcjs = require('./chunk-Y2C5XLXJ.cjs');


var _chunkUOCDRJTDcjs = require('./chunk-UOCDRJTD.cjs');


var _chunkOZZRS4W2cjs = require('./chunk-OZZRS4W2.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByWithAggregationInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkUOCDRJTDcjs.RandomImageCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkY2C5XLXJcjs.RandomImageMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOZZRS4W2cjs.RandomImageMinOrderByAggregateInputSchema).optional()
}).strict();
var RandomImageOrderByWithAggregationInputSchema_default = RandomImageOrderByWithAggregationInputSchema;




exports.RandomImageOrderByWithAggregationInputSchema = RandomImageOrderByWithAggregationInputSchema; exports.RandomImageOrderByWithAggregationInputSchema_default = RandomImageOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-JPSKAE2G.cjs.map