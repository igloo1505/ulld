"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DefinitionCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  alphabeticalLabel: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mdxNoteId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DefinitionCountOrderByAggregateInputSchema_default = DefinitionCountOrderByAggregateInputSchema;




exports.DefinitionCountOrderByAggregateInputSchema = DefinitionCountOrderByAggregateInputSchema; exports.DefinitionCountOrderByAggregateInputSchema_default = DefinitionCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UWXUQORD.cjs.map