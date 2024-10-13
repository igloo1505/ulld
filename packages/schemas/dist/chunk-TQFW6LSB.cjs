"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodMinOrderByAggregateInputSchema_default = TimePeriodMinOrderByAggregateInputSchema;




exports.TimePeriodMinOrderByAggregateInputSchema = TimePeriodMinOrderByAggregateInputSchema; exports.TimePeriodMinOrderByAggregateInputSchema_default = TimePeriodMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TQFW6LSB.cjs.map