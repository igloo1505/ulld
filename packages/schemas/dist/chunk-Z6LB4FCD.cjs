"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoAvgOrderByAggregateInputSchema_default = ToDoAvgOrderByAggregateInputSchema;




exports.ToDoAvgOrderByAggregateInputSchema = ToDoAvgOrderByAggregateInputSchema; exports.ToDoAvgOrderByAggregateInputSchema_default = ToDoAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Z6LB4FCD.cjs.map