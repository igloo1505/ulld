"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SnippetCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  language: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SnippetCountOrderByAggregateInputSchema_default = SnippetCountOrderByAggregateInputSchema;




exports.SnippetCountOrderByAggregateInputSchema = SnippetCountOrderByAggregateInputSchema; exports.SnippetCountOrderByAggregateInputSchema_default = SnippetCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ZHDCMT6K.cjs.map