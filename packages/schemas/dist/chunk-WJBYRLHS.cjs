"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanListAvgOrderByAggregateInputSchema_default = KanBanListAvgOrderByAggregateInputSchema;




exports.KanBanListAvgOrderByAggregateInputSchema = KanBanListAvgOrderByAggregateInputSchema; exports.KanBanListAvgOrderByAggregateInputSchema_default = KanBanListAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WJBYRLHS.cjs.map