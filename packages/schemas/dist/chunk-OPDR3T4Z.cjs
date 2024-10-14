"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardMinOrderByAggregateInputSchema_default = KanBanCardMinOrderByAggregateInputSchema;




exports.KanBanCardMinOrderByAggregateInputSchema = KanBanCardMinOrderByAggregateInputSchema; exports.KanBanCardMinOrderByAggregateInputSchema_default = KanBanCardMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OPDR3T4Z.cjs.map