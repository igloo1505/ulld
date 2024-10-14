"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SnippetMinOrderByAggregateInputSchema_default = SnippetMinOrderByAggregateInputSchema;




exports.SnippetMinOrderByAggregateInputSchema = SnippetMinOrderByAggregateInputSchema; exports.SnippetMinOrderByAggregateInputSchema_default = SnippetMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SIIJJ7OO.cjs.map