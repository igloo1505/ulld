"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMOY5UG53cjs = require('./chunk-MOY5UG53.cjs');


var _chunkXA4BM3BFcjs = require('./chunk-XA4BM3BF.cjs');


var _chunkOPDR3T4Zcjs = require('./chunk-OPDR3T4Z.cjs');


var _chunk7AMAT5VYcjs = require('./chunk-7AMAT5VY.cjs');


var _chunk3OZDYJQIcjs = require('./chunk-3OZDYJQI.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkMOY5UG53cjs.KanBanCardCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkXA4BM3BFcjs.KanBanCardAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk7AMAT5VYcjs.KanBanCardMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOPDR3T4Zcjs.KanBanCardMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk3OZDYJQIcjs.KanBanCardSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanCardOrderByWithAggregationInputSchema_default = KanBanCardOrderByWithAggregationInputSchema;




exports.KanBanCardOrderByWithAggregationInputSchema = KanBanCardOrderByWithAggregationInputSchema; exports.KanBanCardOrderByWithAggregationInputSchema_default = KanBanCardOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-FOS5RQXO.cjs.map