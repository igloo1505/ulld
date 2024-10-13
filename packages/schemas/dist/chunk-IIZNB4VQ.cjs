"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemAvgOrderByAggregateInputSchema_default = DietaryItemAvgOrderByAggregateInputSchema;




exports.DietaryItemAvgOrderByAggregateInputSchema = DietaryItemAvgOrderByAggregateInputSchema; exports.DietaryItemAvgOrderByAggregateInputSchema_default = DietaryItemAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IIZNB4VQ.cjs.map