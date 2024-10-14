"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DefinitionMaxOrderByAggregateInputSchema_default = DefinitionMaxOrderByAggregateInputSchema;




exports.DefinitionMaxOrderByAggregateInputSchema = DefinitionMaxOrderByAggregateInputSchema; exports.DefinitionMaxOrderByAggregateInputSchema_default = DefinitionMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-DAD7Z3LB.cjs.map