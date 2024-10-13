"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanbanCountOrderByAggregateInputSchema_default = KanbanCountOrderByAggregateInputSchema;




exports.KanbanCountOrderByAggregateInputSchema = KanbanCountOrderByAggregateInputSchema; exports.KanbanCountOrderByAggregateInputSchema_default = KanbanCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-DSEM4FFN.cjs.map