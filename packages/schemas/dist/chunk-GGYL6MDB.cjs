"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanListMaxOrderByAggregateInputSchema_default = KanBanListMaxOrderByAggregateInputSchema;




exports.KanBanListMaxOrderByAggregateInputSchema = KanBanListMaxOrderByAggregateInputSchema; exports.KanBanListMaxOrderByAggregateInputSchema_default = KanBanListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GGYL6MDB.cjs.map