"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TagMinOrderByAggregateInputSchema_default = TagMinOrderByAggregateInputSchema;




exports.TagMinOrderByAggregateInputSchema = TagMinOrderByAggregateInputSchema; exports.TagMinOrderByAggregateInputSchema_default = TagMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AKOQNP5R.cjs.map