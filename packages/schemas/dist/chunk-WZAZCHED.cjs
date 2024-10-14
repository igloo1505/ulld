"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodMaxOrderByAggregateInputSchema_default = TimePeriodMaxOrderByAggregateInputSchema;




exports.TimePeriodMaxOrderByAggregateInputSchema = TimePeriodMaxOrderByAggregateInputSchema; exports.TimePeriodMaxOrderByAggregateInputSchema_default = TimePeriodMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WZAZCHED.cjs.map