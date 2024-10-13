"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DefinitionMaxOrderByAggregateInputSchema_default = DefinitionMaxOrderByAggregateInputSchema;




exports.DefinitionMaxOrderByAggregateInputSchema = DefinitionMaxOrderByAggregateInputSchema; exports.DefinitionMaxOrderByAggregateInputSchema_default = DefinitionMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PUYCGURT.cjs.map