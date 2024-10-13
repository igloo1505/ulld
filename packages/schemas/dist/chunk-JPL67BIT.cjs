"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SnippetMinOrderByAggregateInputSchema_default = SnippetMinOrderByAggregateInputSchema;




exports.SnippetMinOrderByAggregateInputSchema = SnippetMinOrderByAggregateInputSchema; exports.SnippetMinOrderByAggregateInputSchema_default = SnippetMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JPL67BIT.cjs.map