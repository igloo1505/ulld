"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoListMinOrderByAggregateInputSchema_default = ToDoListMinOrderByAggregateInputSchema;




exports.ToDoListMinOrderByAggregateInputSchema = ToDoListMinOrderByAggregateInputSchema; exports.ToDoListMinOrderByAggregateInputSchema_default = ToDoListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JIFF3FGJ.cjs.map