"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageMaxOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RandomImageMaxOrderByAggregateInputSchema_default = RandomImageMaxOrderByAggregateInputSchema;




exports.RandomImageMaxOrderByAggregateInputSchema = RandomImageMaxOrderByAggregateInputSchema; exports.RandomImageMaxOrderByAggregateInputSchema_default = RandomImageMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Z6GUYSTY.cjs.map