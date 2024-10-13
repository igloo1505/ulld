"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanListSumOrderByAggregateInputSchema_default = KanBanListSumOrderByAggregateInputSchema;




exports.KanBanListSumOrderByAggregateInputSchema = KanBanListSumOrderByAggregateInputSchema; exports.KanBanListSumOrderByAggregateInputSchema_default = KanBanListSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PWGFTQ2D.cjs.map