"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestCountOrderByAggregateInputSchema_default = FeatureRequestCountOrderByAggregateInputSchema;




exports.FeatureRequestCountOrderByAggregateInputSchema = FeatureRequestCountOrderByAggregateInputSchema; exports.FeatureRequestCountOrderByAggregateInputSchema_default = FeatureRequestCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JTDS5VI4.cjs.map