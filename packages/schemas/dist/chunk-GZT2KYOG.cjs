"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoListMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoListMaxOrderByAggregateInputSchema_default = ToDoListMaxOrderByAggregateInputSchema;




exports.ToDoListMaxOrderByAggregateInputSchema = ToDoListMaxOrderByAggregateInputSchema; exports.ToDoListMaxOrderByAggregateInputSchema_default = ToDoListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GZT2KYOG.cjs.map