"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGNDCI23Dcjs = require('./chunk-GNDCI23D.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SnippetOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkGNDCI23Dcjs.SnippetOrderByRelevanceInputSchema).optional()
}).strict();
var SnippetOrderByWithRelationInputSchema_default = SnippetOrderByWithRelationInputSchema;




exports.SnippetOrderByWithRelationInputSchema = SnippetOrderByWithRelationInputSchema; exports.SnippetOrderByWithRelationInputSchema_default = SnippetOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-YRLUHXCQ.cjs.map