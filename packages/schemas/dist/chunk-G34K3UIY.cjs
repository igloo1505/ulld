"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardAvgOrderByAggregateInputSchema_default = KanBanCardAvgOrderByAggregateInputSchema;




exports.KanBanCardAvgOrderByAggregateInputSchema = KanBanCardAvgOrderByAggregateInputSchema; exports.KanBanCardAvgOrderByAggregateInputSchema_default = KanBanCardAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-G34K3UIY.cjs.map