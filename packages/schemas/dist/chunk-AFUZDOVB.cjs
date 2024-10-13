"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoListCountOrderByAggregateInputSchema_default = ToDoListCountOrderByAggregateInputSchema;




exports.ToDoListCountOrderByAggregateInputSchema = ToDoListCountOrderByAggregateInputSchema; exports.ToDoListCountOrderByAggregateInputSchema_default = ToDoListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AFUZDOVB.cjs.map