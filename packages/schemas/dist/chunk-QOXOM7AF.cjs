"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodCountOrderByAggregateInputSchema_default = TimePeriodCountOrderByAggregateInputSchema;




exports.TimePeriodCountOrderByAggregateInputSchema = TimePeriodCountOrderByAggregateInputSchema; exports.TimePeriodCountOrderByAggregateInputSchema_default = TimePeriodCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-QOXOM7AF.cjs.map