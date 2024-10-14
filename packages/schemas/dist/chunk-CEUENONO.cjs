"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5EJOQPUPcjs = require('./chunk-5EJOQPUP.cjs');


var _chunkOYZJLFYYcjs = require('./chunk-OYZJLFYY.cjs');


var _chunkMZQEY3ZOcjs = require('./chunk-MZQEY3ZO.cjs');


var _chunkTQIXHKPLcjs = require('./chunk-TQIXHKPL.cjs');


var _chunkNY624Y4Wcjs = require('./chunk-NY624Y4W.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanbanOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk5EJOQPUPcjs.KanbanCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkOYZJLFYYcjs.KanbanAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkTQIXHKPLcjs.KanbanMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkMZQEY3ZOcjs.KanbanMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkNY624Y4Wcjs.KanbanSumOrderByAggregateInputSchema).optional()
}).strict();
var KanbanOrderByWithAggregationInputSchema_default = KanbanOrderByWithAggregationInputSchema;




exports.KanbanOrderByWithAggregationInputSchema = KanbanOrderByWithAggregationInputSchema; exports.KanbanOrderByWithAggregationInputSchema_default = KanbanOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-CEUENONO.cjs.map