"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TopicMinOrderByAggregateInputSchema_default = TopicMinOrderByAggregateInputSchema;




exports.TopicMinOrderByAggregateInputSchema = TopicMinOrderByAggregateInputSchema; exports.TopicMinOrderByAggregateInputSchema_default = TopicMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-VZYHC2SE.cjs.map