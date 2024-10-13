"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DefinitionMinOrderByAggregateInputSchema_default = DefinitionMinOrderByAggregateInputSchema;




exports.DefinitionMinOrderByAggregateInputSchema = DefinitionMinOrderByAggregateInputSchema; exports.DefinitionMinOrderByAggregateInputSchema_default = DefinitionMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MCNIFHXP.cjs.map