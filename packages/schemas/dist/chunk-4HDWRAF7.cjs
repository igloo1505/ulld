"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanbanMinOrderByAggregateInputSchema_default = KanbanMinOrderByAggregateInputSchema;




exports.KanbanMinOrderByAggregateInputSchema = KanbanMinOrderByAggregateInputSchema; exports.KanbanMinOrderByAggregateInputSchema_default = KanbanMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4HDWRAF7.cjs.map