"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietAvgOrderByAggregateInputSchema = _zod.z.object({
  carb: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietAvgOrderByAggregateInputSchema_default = DietAvgOrderByAggregateInputSchema;




exports.DietAvgOrderByAggregateInputSchema = DietAvgOrderByAggregateInputSchema; exports.DietAvgOrderByAggregateInputSchema_default = DietAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4UDCQLXS.cjs.map