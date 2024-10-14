"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestMinOrderByAggregateInputSchema_default = WaitlistRequestMinOrderByAggregateInputSchema;




exports.WaitlistRequestMinOrderByAggregateInputSchema = WaitlistRequestMinOrderByAggregateInputSchema; exports.WaitlistRequestMinOrderByAggregateInputSchema_default = WaitlistRequestMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YVCYCWSO.cjs.map