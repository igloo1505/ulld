"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardSumOrderByAggregateInputSchema_default = KanBanCardSumOrderByAggregateInputSchema;




exports.KanBanCardSumOrderByAggregateInputSchema = KanBanCardSumOrderByAggregateInputSchema; exports.KanBanCardSumOrderByAggregateInputSchema_default = KanBanCardSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-3OZDYJQI.cjs.map