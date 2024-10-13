"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardCountOrderByAggregateInputSchema_default = KanBanCardCountOrderByAggregateInputSchema;




exports.KanBanCardCountOrderByAggregateInputSchema = KanBanCardCountOrderByAggregateInputSchema; exports.KanBanCardCountOrderByAggregateInputSchema_default = KanBanCardCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-E4ATVZ6F.cjs.map