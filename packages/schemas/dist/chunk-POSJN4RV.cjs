"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestAvgOrderByAggregateInputSchema_default = WaitlistRequestAvgOrderByAggregateInputSchema;




exports.WaitlistRequestAvgOrderByAggregateInputSchema = WaitlistRequestAvgOrderByAggregateInputSchema; exports.WaitlistRequestAvgOrderByAggregateInputSchema_default = WaitlistRequestAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-POSJN4RV.cjs.map