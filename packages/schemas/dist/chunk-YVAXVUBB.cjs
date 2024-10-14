"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGDQGPK6Ycjs = require('./chunk-GDQGPK6Y.cjs');


var _chunkWOEJQSK4cjs = require('./chunk-WOEJQSK4.cjs');


var _chunkFUV7QPCCcjs = require('./chunk-FUV7QPCC.cjs');


var _chunkEVY6DBAJcjs = require('./chunk-EVY6DBAJ.cjs');


var _chunk3ZE2ZOBVcjs = require('./chunk-3ZE2ZOBV.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkGDQGPK6Ycjs.FeatureRequestCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkWOEJQSK4cjs.FeatureRequestAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEVY6DBAJcjs.FeatureRequestMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkFUV7QPCCcjs.FeatureRequestMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk3ZE2ZOBVcjs.FeatureRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithAggregationInputSchema_default = FeatureRequestOrderByWithAggregationInputSchema;




exports.FeatureRequestOrderByWithAggregationInputSchema = FeatureRequestOrderByWithAggregationInputSchema; exports.FeatureRequestOrderByWithAggregationInputSchema_default = FeatureRequestOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-YVAXVUBB.cjs.map