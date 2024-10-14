"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2UJ6RNPTcjs = require('./chunk-2UJ6RNPT.cjs');


var _chunkZ2DKDZXWcjs = require('./chunk-Z2DKDZXW.cjs');


var _chunkU4774QAMcjs = require('./chunk-U4774QAM.cjs');


var _chunkZLRGXR5Xcjs = require('./chunk-ZLRGXR5X.cjs');


var _chunkU2XDP4TGcjs = require('./chunk-U2XDP4TG.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DietOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  goals: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk2UJ6RNPTcjs.DietCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkZ2DKDZXWcjs.DietAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkZLRGXR5Xcjs.DietMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkU4774QAMcjs.DietMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkU2XDP4TGcjs.DietSumOrderByAggregateInputSchema).optional()
}).strict();
var DietOrderByWithAggregationInputSchema_default = DietOrderByWithAggregationInputSchema;




exports.DietOrderByWithAggregationInputSchema = DietOrderByWithAggregationInputSchema; exports.DietOrderByWithAggregationInputSchema_default = DietOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-OZJCQIEY.cjs.map