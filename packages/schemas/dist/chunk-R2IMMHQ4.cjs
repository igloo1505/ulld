"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodCountOrderByAggregateInputSchema_default = TimePeriodCountOrderByAggregateInputSchema;




exports.TimePeriodCountOrderByAggregateInputSchema = TimePeriodCountOrderByAggregateInputSchema; exports.TimePeriodCountOrderByAggregateInputSchema_default = TimePeriodCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-R2IMMHQ4.cjs.map