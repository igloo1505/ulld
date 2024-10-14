"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6O4XKYC6cjs = require('./chunk-6O4XKYC6.cjs');


var _chunkNGZ5TTMZcjs = require('./chunk-NGZ5TTMZ.cjs');


var _chunkYCUZRGTXcjs = require('./chunk-YCUZRGTX.cjs');


var _chunkHAUC6EY7cjs = require('./chunk-HAUC6EY7.cjs');


var _chunkRZVP7SKKcjs = require('./chunk-RZVP7SKK.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  glutenFree: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkNGZ5TTMZcjs.DietaryItemCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk6O4XKYC6cjs.DietaryItemAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHAUC6EY7cjs.DietaryItemMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkYCUZRGTXcjs.DietaryItemMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkRZVP7SKKcjs.DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();
var DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema;




exports.DietaryItemOrderByWithAggregationInputSchema = DietaryItemOrderByWithAggregationInputSchema; exports.DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-LBNBMFF6.cjs.map