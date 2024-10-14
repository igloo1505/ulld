"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema;




exports.DailyFocusMaxOrderByAggregateInputSchema = DailyFocusMaxOrderByAggregateInputSchema; exports.DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GIEJWKWR.cjs.map