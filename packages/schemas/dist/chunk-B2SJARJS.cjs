"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TopicMaxOrderByAggregateInputSchema_default = TopicMaxOrderByAggregateInputSchema;




exports.TopicMaxOrderByAggregateInputSchema = TopicMaxOrderByAggregateInputSchema; exports.TopicMaxOrderByAggregateInputSchema_default = TopicMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-B2SJARJS.cjs.map