"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SnippetMaxOrderByAggregateInputSchema_default = SnippetMaxOrderByAggregateInputSchema;




exports.SnippetMaxOrderByAggregateInputSchema = SnippetMaxOrderByAggregateInputSchema; exports.SnippetMaxOrderByAggregateInputSchema_default = SnippetMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-DV6NJFK2.cjs.map