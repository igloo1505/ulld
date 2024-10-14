"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBNFARKC6cjs = require('./chunk-BNFARKC6.cjs');


var _chunkSIKFN3ZGcjs = require('./chunk-SIKFN3ZG.cjs');


var _chunk4XMRSTDEcjs = require('./chunk-4XMRSTDE.cjs');


var _chunkJVFHXKWDcjs = require('./chunk-JVFHXKWD.cjs');


var _chunkXSFP6ILAcjs = require('./chunk-XSFP6ILA.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ToDoOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkBNFARKC6cjs.ToDoCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkSIKFN3ZGcjs.ToDoAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkJVFHXKWDcjs.ToDoMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk4XMRSTDEcjs.ToDoMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkXSFP6ILAcjs.ToDoSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoOrderByWithAggregationInputSchema_default = ToDoOrderByWithAggregationInputSchema;




exports.ToDoOrderByWithAggregationInputSchema = ToDoOrderByWithAggregationInputSchema; exports.ToDoOrderByWithAggregationInputSchema_default = ToDoOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-Z4GBXOFB.cjs.map