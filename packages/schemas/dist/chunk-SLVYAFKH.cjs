"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestCountOrderByAggregateInputSchema_default = WaitlistRequestCountOrderByAggregateInputSchema;




exports.WaitlistRequestCountOrderByAggregateInputSchema = WaitlistRequestCountOrderByAggregateInputSchema; exports.WaitlistRequestCountOrderByAggregateInputSchema_default = WaitlistRequestCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SLVYAFKH.cjs.map