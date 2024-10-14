"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3UMDOAOUcjs = require('./chunk-3UMDOAOU.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SnippetOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk3UMDOAOUcjs.SnippetOrderByRelevanceInputSchema).optional()
}).strict();
var SnippetOrderByWithRelationInputSchema_default = SnippetOrderByWithRelationInputSchema;




exports.SnippetOrderByWithRelationInputSchema = SnippetOrderByWithRelationInputSchema; exports.SnippetOrderByWithRelationInputSchema_default = SnippetOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-ZZYKCO7U.cjs.map