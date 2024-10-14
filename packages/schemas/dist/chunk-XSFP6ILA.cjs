"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoSumOrderByAggregateInputSchema_default = ToDoSumOrderByAggregateInputSchema;




exports.ToDoSumOrderByAggregateInputSchema = ToDoSumOrderByAggregateInputSchema; exports.ToDoSumOrderByAggregateInputSchema_default = ToDoSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-XSFP6ILA.cjs.map