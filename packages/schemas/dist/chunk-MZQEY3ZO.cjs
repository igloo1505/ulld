"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanbanMinOrderByAggregateInputSchema_default = KanbanMinOrderByAggregateInputSchema;




exports.KanbanMinOrderByAggregateInputSchema = KanbanMinOrderByAggregateInputSchema; exports.KanbanMinOrderByAggregateInputSchema_default = KanbanMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MZQEY3ZO.cjs.map