"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanListCountOrderByAggregateInputSchema_default = KanBanListCountOrderByAggregateInputSchema;




exports.KanBanListCountOrderByAggregateInputSchema = KanBanListCountOrderByAggregateInputSchema; exports.KanBanListCountOrderByAggregateInputSchema_default = KanBanListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-VNVMTLIY.cjs.map