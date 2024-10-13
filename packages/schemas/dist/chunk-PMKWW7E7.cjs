"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardSumOrderByAggregateInputSchema_default = KanBanCardSumOrderByAggregateInputSchema;




exports.KanBanCardSumOrderByAggregateInputSchema = KanBanCardSumOrderByAggregateInputSchema; exports.KanBanCardSumOrderByAggregateInputSchema_default = KanBanCardSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PMKWW7E7.cjs.map