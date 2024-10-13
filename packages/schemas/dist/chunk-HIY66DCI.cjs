"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanListAvgOrderByAggregateInputSchema_default = KanBanListAvgOrderByAggregateInputSchema;




exports.KanBanListAvgOrderByAggregateInputSchema = KanBanListAvgOrderByAggregateInputSchema; exports.KanBanListAvgOrderByAggregateInputSchema_default = KanBanListAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-HIY66DCI.cjs.map