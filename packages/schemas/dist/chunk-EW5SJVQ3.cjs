"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZU3EKE5Dcjs = require('./chunk-ZU3EKE5D.cjs');


var _chunkZ6LB4FCDcjs = require('./chunk-Z6LB4FCD.cjs');


var _chunkGOBKKSZ4cjs = require('./chunk-GOBKKSZ4.cjs');


var _chunk6APXXV7Bcjs = require('./chunk-6APXXV7B.cjs');


var _chunkV6UEPDWYcjs = require('./chunk-V6UEPDWY.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ToDoOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkZU3EKE5Dcjs.ToDoCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkZ6LB4FCDcjs.ToDoAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk6APXXV7Bcjs.ToDoMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkGOBKKSZ4cjs.ToDoMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkV6UEPDWYcjs.ToDoSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoOrderByWithAggregationInputSchema_default = ToDoOrderByWithAggregationInputSchema;




exports.ToDoOrderByWithAggregationInputSchema = ToDoOrderByWithAggregationInputSchema; exports.ToDoOrderByWithAggregationInputSchema_default = ToDoOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-EW5SJVQ3.cjs.map