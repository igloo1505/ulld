"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestMaxOrderByAggregateInputSchema_default = FeatureRequestMaxOrderByAggregateInputSchema;




exports.FeatureRequestMaxOrderByAggregateInputSchema = FeatureRequestMaxOrderByAggregateInputSchema; exports.FeatureRequestMaxOrderByAggregateInputSchema_default = FeatureRequestMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-A3GA5XN4.cjs.map