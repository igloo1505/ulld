"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJTDS5VI4cjs = require('./chunk-JTDS5VI4.cjs');


var _chunkVIHE3NKEcjs = require('./chunk-VIHE3NKE.cjs');


var _chunk7VBTV4T7cjs = require('./chunk-7VBTV4T7.cjs');


var _chunkA3GA5XN4cjs = require('./chunk-A3GA5XN4.cjs');


var _chunkJAXEGXIKcjs = require('./chunk-JAXEGXIK.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkJTDS5VI4cjs.FeatureRequestCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkVIHE3NKEcjs.FeatureRequestAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkA3GA5XN4cjs.FeatureRequestMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk7VBTV4T7cjs.FeatureRequestMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkJAXEGXIKcjs.FeatureRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithAggregationInputSchema_default = FeatureRequestOrderByWithAggregationInputSchema;




exports.FeatureRequestOrderByWithAggregationInputSchema = FeatureRequestOrderByWithAggregationInputSchema; exports.FeatureRequestOrderByWithAggregationInputSchema_default = FeatureRequestOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-TJHPGSWE.cjs.map