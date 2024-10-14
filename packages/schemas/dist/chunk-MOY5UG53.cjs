"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanBanCardCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanBanCardCountOrderByAggregateInputSchema_default = KanBanCardCountOrderByAggregateInputSchema;




exports.KanBanCardCountOrderByAggregateInputSchema = KanBanCardCountOrderByAggregateInputSchema; exports.KanBanCardCountOrderByAggregateInputSchema_default = KanBanCardCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MOY5UG53.cjs.map