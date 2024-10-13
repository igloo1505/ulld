"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  completedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoCountOrderByAggregateInputSchema_default = ToDoCountOrderByAggregateInputSchema;




exports.ToDoCountOrderByAggregateInputSchema = ToDoCountOrderByAggregateInputSchema; exports.ToDoCountOrderByAggregateInputSchema_default = ToDoCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ZU3EKE5D.cjs.map