"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardMinOrderByAggregateInputSchema_default = KanBanCardMinOrderByAggregateInputSchema;




exports.KanBanCardMinOrderByAggregateInputSchema = KanBanCardMinOrderByAggregateInputSchema; exports.KanBanCardMinOrderByAggregateInputSchema_default = KanBanCardMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-3ESR4OJ7.cjs.map