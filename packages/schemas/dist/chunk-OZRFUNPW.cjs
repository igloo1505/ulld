"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DailyFocusCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DailyFocusCountOrderByAggregateInputSchema_default = DailyFocusCountOrderByAggregateInputSchema;




exports.DailyFocusCountOrderByAggregateInputSchema = DailyFocusCountOrderByAggregateInputSchema; exports.DailyFocusCountOrderByAggregateInputSchema_default = DailyFocusCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OZRFUNPW.cjs.map