"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageCountOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema;




exports.RandomImageCountOrderByAggregateInputSchema = RandomImageCountOrderByAggregateInputSchema; exports.RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-X34ZRZ2W.cjs.map