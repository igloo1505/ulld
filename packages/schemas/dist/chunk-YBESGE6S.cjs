"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestSumOrderByAggregateInputSchema_default = WaitlistRequestSumOrderByAggregateInputSchema;




exports.WaitlistRequestSumOrderByAggregateInputSchema = WaitlistRequestSumOrderByAggregateInputSchema; exports.WaitlistRequestSumOrderByAggregateInputSchema_default = WaitlistRequestSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YBESGE6S.cjs.map