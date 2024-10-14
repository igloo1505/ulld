"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoAvgOrderByAggregateInputSchema_default = ToDoAvgOrderByAggregateInputSchema;




exports.ToDoAvgOrderByAggregateInputSchema = ToDoAvgOrderByAggregateInputSchema; exports.ToDoAvgOrderByAggregateInputSchema_default = ToDoAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SIKFN3ZG.cjs.map