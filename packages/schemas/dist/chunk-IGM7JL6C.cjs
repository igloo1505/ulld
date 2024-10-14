"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema;




exports.DailyFocusMinOrderByAggregateInputSchema = DailyFocusMinOrderByAggregateInputSchema; exports.DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IGM7JL6C.cjs.map