"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE4ATVZ6Fcjs = require('./chunk-E4ATVZ6F.cjs');


var _chunkG34K3UIYcjs = require('./chunk-G34K3UIY.cjs');


var _chunk3ESR4OJ7cjs = require('./chunk-3ESR4OJ7.cjs');


var _chunkVJTUR4XEcjs = require('./chunk-VJTUR4XE.cjs');


var _chunkPMKWW7E7cjs = require('./chunk-PMKWW7E7.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkE4ATVZ6Fcjs.KanBanCardCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkG34K3UIYcjs.KanBanCardAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkVJTUR4XEcjs.KanBanCardMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk3ESR4OJ7cjs.KanBanCardMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkPMKWW7E7cjs.KanBanCardSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanCardOrderByWithAggregationInputSchema_default = KanBanCardOrderByWithAggregationInputSchema;




exports.KanBanCardOrderByWithAggregationInputSchema = KanBanCardOrderByWithAggregationInputSchema; exports.KanBanCardOrderByWithAggregationInputSchema_default = KanBanCardOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-RZ3MDDGB.cjs.map