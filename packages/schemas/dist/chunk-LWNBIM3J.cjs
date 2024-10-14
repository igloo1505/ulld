"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV6ROSJP3cjs = require('./chunk-V6ROSJP3.cjs');


var _chunkTEGXYDS3cjs = require('./chunk-TEGXYDS3.cjs');


var _chunkZB3I5XLKcjs = require('./chunk-ZB3I5XLK.cjs');


var _chunkGZT2KYOGcjs = require('./chunk-GZT2KYOG.cjs');


var _chunkJXBCGF2Icjs = require('./chunk-JXBCGF2I.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkTEGXYDS3cjs.ToDoListCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkV6ROSJP3cjs.ToDoListAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkGZT2KYOGcjs.ToDoListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkZB3I5XLKcjs.ToDoListMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkJXBCGF2Icjs.ToDoListSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoListOrderByWithAggregationInputSchema_default = ToDoListOrderByWithAggregationInputSchema;




exports.ToDoListOrderByWithAggregationInputSchema = ToDoListOrderByWithAggregationInputSchema; exports.ToDoListOrderByWithAggregationInputSchema_default = ToDoListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-LWNBIM3J.cjs.map