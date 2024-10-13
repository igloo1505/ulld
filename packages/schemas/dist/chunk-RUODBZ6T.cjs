"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema;




exports.DailyFocusMaxOrderByAggregateInputSchema = DailyFocusMaxOrderByAggregateInputSchema; exports.DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-RUODBZ6T.cjs.map