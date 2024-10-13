"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusCountOrderByAggregateInputSchema_default = DailyFocusCountOrderByAggregateInputSchema;




exports.DailyFocusCountOrderByAggregateInputSchema = DailyFocusCountOrderByAggregateInputSchema; exports.DailyFocusCountOrderByAggregateInputSchema_default = DailyFocusCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ULGT4F5T.cjs.map