"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanListMinOrderByAggregateInputSchema_default = KanBanListMinOrderByAggregateInputSchema;




exports.KanBanListMinOrderByAggregateInputSchema = KanBanListMinOrderByAggregateInputSchema; exports.KanBanListMinOrderByAggregateInputSchema_default = KanBanListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-L4HKFGBB.cjs.map