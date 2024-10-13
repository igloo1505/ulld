"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7HVGNVZ4cjs = require('./chunk-7HVGNVZ4.cjs');


var _chunkAFUZDOVBcjs = require('./chunk-AFUZDOVB.cjs');


var _chunkJIFF3FGJcjs = require('./chunk-JIFF3FGJ.cjs');


var _chunkJERTWLBJcjs = require('./chunk-JERTWLBJ.cjs');


var _chunk2L6ZBEUHcjs = require('./chunk-2L6ZBEUH.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkAFUZDOVBcjs.ToDoListCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk7HVGNVZ4cjs.ToDoListAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkJERTWLBJcjs.ToDoListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkJIFF3FGJcjs.ToDoListMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk2L6ZBEUHcjs.ToDoListSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoListOrderByWithAggregationInputSchema_default = ToDoListOrderByWithAggregationInputSchema;




exports.ToDoListOrderByWithAggregationInputSchema = ToDoListOrderByWithAggregationInputSchema; exports.ToDoListOrderByWithAggregationInputSchema_default = ToDoListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-CVOLWCAE.cjs.map