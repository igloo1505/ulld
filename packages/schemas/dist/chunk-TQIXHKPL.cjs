"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanbanMaxOrderByAggregateInputSchema_default = KanbanMaxOrderByAggregateInputSchema;




exports.KanbanMaxOrderByAggregateInputSchema = KanbanMaxOrderByAggregateInputSchema; exports.KanbanMaxOrderByAggregateInputSchema_default = KanbanMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TQIXHKPL.cjs.map