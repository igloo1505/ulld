"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TopicCountOrderByAggregateInputSchema_default = TopicCountOrderByAggregateInputSchema;




exports.TopicCountOrderByAggregateInputSchema = TopicCountOrderByAggregateInputSchema; exports.TopicCountOrderByAggregateInputSchema_default = TopicCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SBC3XUDZ.cjs.map