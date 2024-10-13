"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/EquationCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var EquationCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  desc: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  asPython: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  variableLegend: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var EquationCountOrderByAggregateInputSchema_default = EquationCountOrderByAggregateInputSchema;




exports.EquationCountOrderByAggregateInputSchema = EquationCountOrderByAggregateInputSchema; exports.EquationCountOrderByAggregateInputSchema_default = EquationCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-DCHKQJEQ.cjs.map