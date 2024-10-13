"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestMinOrderByAggregateInputSchema_default = FeatureRequestMinOrderByAggregateInputSchema;




exports.FeatureRequestMinOrderByAggregateInputSchema = FeatureRequestMinOrderByAggregateInputSchema; exports.FeatureRequestMinOrderByAggregateInputSchema_default = FeatureRequestMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7VBTV4T7.cjs.map