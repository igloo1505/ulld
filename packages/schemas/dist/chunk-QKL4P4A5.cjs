"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanListSumOrderByAggregateInputSchema_default = KanBanListSumOrderByAggregateInputSchema;




exports.KanBanListSumOrderByAggregateInputSchema = KanBanListSumOrderByAggregateInputSchema; exports.KanBanListSumOrderByAggregateInputSchema_default = KanBanListSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-QKL4P4A5.cjs.map