"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoListMaxOrderByAggregateInputSchema_default = ToDoListMaxOrderByAggregateInputSchema;




exports.ToDoListMaxOrderByAggregateInputSchema = ToDoListMaxOrderByAggregateInputSchema; exports.ToDoListMaxOrderByAggregateInputSchema_default = ToDoListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JERTWLBJ.cjs.map