"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagSumOrderByAggregateInputSchema = _zod.z.object({
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TagSumOrderByAggregateInputSchema_default = TagSumOrderByAggregateInputSchema;




exports.TagSumOrderByAggregateInputSchema = TagSumOrderByAggregateInputSchema; exports.TagSumOrderByAggregateInputSchema_default = TagSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WLPVESGX.cjs.map