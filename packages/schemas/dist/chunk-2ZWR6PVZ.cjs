"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUWXUQORDcjs = require('./chunk-UWXUQORD.cjs');


var _chunkSXWYHP7Icjs = require('./chunk-SXWYHP7I.cjs');


var _chunkPUYCGURTcjs = require('./chunk-PUYCGURT.cjs');


var _chunkMCNIFHXPcjs = require('./chunk-MCNIFHXP.cjs');


var _chunkQYHLTNAIcjs = require('./chunk-QYHLTNAI.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkUWXUQORDcjs.DefinitionCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkSXWYHP7Icjs.DefinitionAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkPUYCGURTcjs.DefinitionMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkMCNIFHXPcjs.DefinitionMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkQYHLTNAIcjs.DefinitionSumOrderByAggregateInputSchema).optional()
}).strict();
var DefinitionOrderByWithAggregationInputSchema_default = DefinitionOrderByWithAggregationInputSchema;




exports.DefinitionOrderByWithAggregationInputSchema = DefinitionOrderByWithAggregationInputSchema; exports.DefinitionOrderByWithAggregationInputSchema_default = DefinitionOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-2ZWR6PVZ.cjs.map