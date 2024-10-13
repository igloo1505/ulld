"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardMaxOrderByAggregateInputSchema_default = KanBanCardMaxOrderByAggregateInputSchema;




exports.KanBanCardMaxOrderByAggregateInputSchema = KanBanCardMaxOrderByAggregateInputSchema; exports.KanBanCardMaxOrderByAggregateInputSchema_default = KanBanCardMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-VJTUR4XE.cjs.map