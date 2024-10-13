"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoMaxOrderByAggregateInputSchema = _zod.z.object({
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
var ToDoMaxOrderByAggregateInputSchema_default = ToDoMaxOrderByAggregateInputSchema;




exports.ToDoMaxOrderByAggregateInputSchema = ToDoMaxOrderByAggregateInputSchema; exports.ToDoMaxOrderByAggregateInputSchema_default = ToDoMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6APXXV7B.cjs.map