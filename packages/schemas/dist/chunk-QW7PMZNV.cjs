"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXGVKTQUVcjs = require('./chunk-XGVKTQUV.cjs');


var _chunk4UDCQLXScjs = require('./chunk-4UDCQLXS.cjs');


var _chunkOGRUW4MVcjs = require('./chunk-OGRUW4MV.cjs');


var _chunkLVE7FLDPcjs = require('./chunk-LVE7FLDP.cjs');


var _chunkNP6ZLPBCcjs = require('./chunk-NP6ZLPBC.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DietOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  goals: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkXGVKTQUVcjs.DietCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk4UDCQLXScjs.DietAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkLVE7FLDPcjs.DietMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOGRUW4MVcjs.DietMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkNP6ZLPBCcjs.DietSumOrderByAggregateInputSchema).optional()
}).strict();
var DietOrderByWithAggregationInputSchema_default = DietOrderByWithAggregationInputSchema;




exports.DietOrderByWithAggregationInputSchema = DietOrderByWithAggregationInputSchema; exports.DietOrderByWithAggregationInputSchema_default = DietOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-QW7PMZNV.cjs.map