"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TimePeriodMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  end: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TimePeriodMinOrderByAggregateInputSchema_default = TimePeriodMinOrderByAggregateInputSchema;




exports.TimePeriodMinOrderByAggregateInputSchema = TimePeriodMinOrderByAggregateInputSchema; exports.TimePeriodMinOrderByAggregateInputSchema_default = TimePeriodMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GUFJN4OR.cjs.map