"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/EquationMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var EquationMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  desc: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  asPython: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var EquationMaxOrderByAggregateInputSchema_default = EquationMaxOrderByAggregateInputSchema;




exports.EquationMaxOrderByAggregateInputSchema = EquationMaxOrderByAggregateInputSchema; exports.EquationMaxOrderByAggregateInputSchema_default = EquationMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4HVGQAZ5.cjs.map