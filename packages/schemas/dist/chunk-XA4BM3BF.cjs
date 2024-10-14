"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardAvgOrderByAggregateInputSchema_default = KanBanCardAvgOrderByAggregateInputSchema;




exports.KanBanCardAvgOrderByAggregateInputSchema = KanBanCardAvgOrderByAggregateInputSchema; exports.KanBanCardAvgOrderByAggregateInputSchema_default = KanBanCardAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-XA4BM3BF.cjs.map