"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema;




exports.DailyFocusMinOrderByAggregateInputSchema = DailyFocusMinOrderByAggregateInputSchema; exports.DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6RZCC5SN.cjs.map