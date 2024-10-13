"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanListMinOrderByAggregateInputSchema_default = KanBanListMinOrderByAggregateInputSchema;




exports.KanBanListMinOrderByAggregateInputSchema = KanBanListMinOrderByAggregateInputSchema; exports.KanBanListMinOrderByAggregateInputSchema_default = KanBanListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MC446V7V.cjs.map