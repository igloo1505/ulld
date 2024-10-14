"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var KanbanCountOrderByAggregateInputSchema_default = KanbanCountOrderByAggregateInputSchema;




exports.KanbanCountOrderByAggregateInputSchema = KanbanCountOrderByAggregateInputSchema; exports.KanbanCountOrderByAggregateInputSchema_default = KanbanCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5EJOQPUP.cjs.map