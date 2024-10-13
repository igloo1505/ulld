"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSBC3XUDZcjs = require('./chunk-SBC3XUDZ.cjs');


var _chunkOZAURUXWcjs = require('./chunk-OZAURUXW.cjs');


var _chunkVZYHC2SEcjs = require('./chunk-VZYHC2SE.cjs');


var _chunkB2SJARJScjs = require('./chunk-B2SJARJS.cjs');


var _chunkEHXKHGIDcjs = require('./chunk-EHXKHGID.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TopicOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkSBC3XUDZcjs.TopicCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkOZAURUXWcjs.TopicAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkB2SJARJScjs.TopicMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkVZYHC2SEcjs.TopicMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkEHXKHGIDcjs.TopicSumOrderByAggregateInputSchema).optional()
}).strict();
var TopicOrderByWithAggregationInputSchema_default = TopicOrderByWithAggregationInputSchema;




exports.TopicOrderByWithAggregationInputSchema = TopicOrderByWithAggregationInputSchema; exports.TopicOrderByWithAggregationInputSchema_default = TopicOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-MRHABKWJ.cjs.map