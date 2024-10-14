"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanListMaxOrderByAggregateInputSchema_default = KanBanListMaxOrderByAggregateInputSchema;




exports.KanBanListMaxOrderByAggregateInputSchema = KanBanListMaxOrderByAggregateInputSchema; exports.KanBanListMaxOrderByAggregateInputSchema_default = KanBanListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5XQ7CP7X.cjs.map