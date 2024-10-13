"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIIZNB4VQcjs = require('./chunk-IIZNB4VQ.cjs');


var _chunk6I5HCRMLcjs = require('./chunk-6I5HCRML.cjs');


var _chunk7K5MWLPOcjs = require('./chunk-7K5MWLPO.cjs');


var _chunkV7HBMEOXcjs = require('./chunk-V7HBMEOX.cjs');


var _chunk4KYPTTZ7cjs = require('./chunk-4KYPTTZ7.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  glutenFree: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk6I5HCRMLcjs.DietaryItemCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkIIZNB4VQcjs.DietaryItemAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkV7HBMEOXcjs.DietaryItemMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk7K5MWLPOcjs.DietaryItemMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk4KYPTTZ7cjs.DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();
var DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema;




exports.DietaryItemOrderByWithAggregationInputSchema = DietaryItemOrderByWithAggregationInputSchema; exports.DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-54YXIVZC.cjs.map