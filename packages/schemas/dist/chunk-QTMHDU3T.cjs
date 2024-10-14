"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanListCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  boardId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanListCountOrderByAggregateInputSchema_default = KanBanListCountOrderByAggregateInputSchema;




exports.KanBanListCountOrderByAggregateInputSchema = KanBanListCountOrderByAggregateInputSchema; exports.KanBanListCountOrderByAggregateInputSchema_default = KanBanListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-QTMHDU3T.cjs.map