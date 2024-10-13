"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SnippetCountOrderByAggregateInputSchema_default = SnippetCountOrderByAggregateInputSchema;




exports.SnippetCountOrderByAggregateInputSchema = SnippetCountOrderByAggregateInputSchema; exports.SnippetCountOrderByAggregateInputSchema_default = SnippetCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WDMRTLQK.cjs.map