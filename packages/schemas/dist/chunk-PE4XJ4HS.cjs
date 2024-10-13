"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TagMaxOrderByAggregateInputSchema_default = TagMaxOrderByAggregateInputSchema;




exports.TagMaxOrderByAggregateInputSchema = TagMaxOrderByAggregateInputSchema; exports.TagMaxOrderByAggregateInputSchema_default = TagMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PE4XJ4HS.cjs.map