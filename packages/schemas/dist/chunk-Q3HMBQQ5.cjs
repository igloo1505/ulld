"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DefinitionCountOrderByAggregateInputSchema_default = DefinitionCountOrderByAggregateInputSchema;




exports.DefinitionCountOrderByAggregateInputSchema = DefinitionCountOrderByAggregateInputSchema; exports.DefinitionCountOrderByAggregateInputSchema_default = DefinitionCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Q3HMBQQ5.cjs.map