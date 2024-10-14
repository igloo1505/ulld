"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoListCountOrderByAggregateInputSchema_default = ToDoListCountOrderByAggregateInputSchema;




exports.ToDoListCountOrderByAggregateInputSchema = ToDoListCountOrderByAggregateInputSchema; exports.ToDoListCountOrderByAggregateInputSchema_default = ToDoListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TEGXYDS3.cjs.map