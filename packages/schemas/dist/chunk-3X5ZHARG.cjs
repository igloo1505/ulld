"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodMaxOrderByAggregateInputSchema_default = TimePeriodMaxOrderByAggregateInputSchema;




exports.TimePeriodMaxOrderByAggregateInputSchema = TimePeriodMaxOrderByAggregateInputSchema; exports.TimePeriodMaxOrderByAggregateInputSchema_default = TimePeriodMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-3X5ZHARG.cjs.map