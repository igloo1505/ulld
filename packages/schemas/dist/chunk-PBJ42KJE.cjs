"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDSEM4FFNcjs = require('./chunk-DSEM4FFN.cjs');


var _chunkQBX6DCGVcjs = require('./chunk-QBX6DCGV.cjs');


var _chunk4HDWRAF7cjs = require('./chunk-4HDWRAF7.cjs');


var _chunkUTU4HXAIcjs = require('./chunk-UTU4HXAI.cjs');


var _chunkNXIL5B7Kcjs = require('./chunk-NXIL5B7K.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanbanOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkDSEM4FFNcjs.KanbanCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkQBX6DCGVcjs.KanbanAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUTU4HXAIcjs.KanbanMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk4HDWRAF7cjs.KanbanMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkNXIL5B7Kcjs.KanbanSumOrderByAggregateInputSchema).optional()
}).strict();
var KanbanOrderByWithAggregationInputSchema_default = KanbanOrderByWithAggregationInputSchema;




exports.KanbanOrderByWithAggregationInputSchema = KanbanOrderByWithAggregationInputSchema; exports.KanbanOrderByWithAggregationInputSchema_default = KanbanOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-PBJ42KJE.cjs.map