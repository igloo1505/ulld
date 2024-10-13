"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVNVMTLIYcjs = require('./chunk-VNVMTLIY.cjs');


var _chunkHIY66DCIcjs = require('./chunk-HIY66DCI.cjs');


var _chunkMC446V7Vcjs = require('./chunk-MC446V7V.cjs');


var _chunkGGYL6MDBcjs = require('./chunk-GGYL6MDB.cjs');


var _chunkPWGFTQ2Dcjs = require('./chunk-PWGFTQ2D.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkVNVMTLIYcjs.KanBanListCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkHIY66DCIcjs.KanBanListAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkGGYL6MDBcjs.KanBanListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkMC446V7Vcjs.KanBanListMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkPWGFTQ2Dcjs.KanBanListSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanListOrderByWithAggregationInputSchema_default = KanBanListOrderByWithAggregationInputSchema;




exports.KanBanListOrderByWithAggregationInputSchema = KanBanListOrderByWithAggregationInputSchema; exports.KanBanListOrderByWithAggregationInputSchema_default = KanBanListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-7Q4J55WA.cjs.map