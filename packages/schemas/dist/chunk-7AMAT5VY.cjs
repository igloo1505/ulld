"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardMaxOrderByAggregateInputSchema_default = KanBanCardMaxOrderByAggregateInputSchema;




exports.KanBanCardMaxOrderByAggregateInputSchema = KanBanCardMaxOrderByAggregateInputSchema; exports.KanBanCardMaxOrderByAggregateInputSchema_default = KanBanCardMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7AMAT5VY.cjs.map