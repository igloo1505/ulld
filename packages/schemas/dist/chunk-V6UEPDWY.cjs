"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoSumOrderByAggregateInputSchema_default = ToDoSumOrderByAggregateInputSchema;




exports.ToDoSumOrderByAggregateInputSchema = ToDoSumOrderByAggregateInputSchema; exports.ToDoSumOrderByAggregateInputSchema_default = ToDoSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-V6UEPDWY.cjs.map