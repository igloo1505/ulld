"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SnippetMaxOrderByAggregateInputSchema_default = SnippetMaxOrderByAggregateInputSchema;




exports.SnippetMaxOrderByAggregateInputSchema = SnippetMaxOrderByAggregateInputSchema; exports.SnippetMaxOrderByAggregateInputSchema_default = SnippetMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UX4XCRF2.cjs.map