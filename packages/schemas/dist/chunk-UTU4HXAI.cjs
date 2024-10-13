"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var KanbanMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var KanbanMaxOrderByAggregateInputSchema_default = KanbanMaxOrderByAggregateInputSchema;




exports.KanbanMaxOrderByAggregateInputSchema = KanbanMaxOrderByAggregateInputSchema; exports.KanbanMaxOrderByAggregateInputSchema_default = KanbanMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UTU4HXAI.cjs.map