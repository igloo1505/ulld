"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  completedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoMinOrderByAggregateInputSchema_default = ToDoMinOrderByAggregateInputSchema;




exports.ToDoMinOrderByAggregateInputSchema = ToDoMinOrderByAggregateInputSchema; exports.ToDoMinOrderByAggregateInputSchema_default = ToDoMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4XMRSTDE.cjs.map