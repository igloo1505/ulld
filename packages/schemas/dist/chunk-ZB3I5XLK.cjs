"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoListMinOrderByAggregateInputSchema_default = ToDoListMinOrderByAggregateInputSchema;




exports.ToDoListMinOrderByAggregateInputSchema = ToDoListMinOrderByAggregateInputSchema; exports.ToDoListMinOrderByAggregateInputSchema_default = ToDoListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ZB3I5XLK.cjs.map