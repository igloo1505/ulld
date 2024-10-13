"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicSumOrderByAggregateInputSchema = _zod.z.object({
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TopicSumOrderByAggregateInputSchema_default = TopicSumOrderByAggregateInputSchema;




exports.TopicSumOrderByAggregateInputSchema = TopicSumOrderByAggregateInputSchema; exports.TopicSumOrderByAggregateInputSchema_default = TopicSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-EHXKHGID.cjs.map