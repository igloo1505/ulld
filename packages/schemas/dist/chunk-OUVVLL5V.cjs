"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageMinOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RandomImageMinOrderByAggregateInputSchema_default = RandomImageMinOrderByAggregateInputSchema;




exports.RandomImageMinOrderByAggregateInputSchema = RandomImageMinOrderByAggregateInputSchema; exports.RandomImageMinOrderByAggregateInputSchema_default = RandomImageMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OUVVLL5V.cjs.map