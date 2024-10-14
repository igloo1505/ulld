"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DefinitionMinOrderByAggregateInputSchema_default = DefinitionMinOrderByAggregateInputSchema;




exports.DefinitionMinOrderByAggregateInputSchema = DefinitionMinOrderByAggregateInputSchema; exports.DefinitionMinOrderByAggregateInputSchema_default = DefinitionMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JHGFEBYP.cjs.map