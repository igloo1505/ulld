"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestMaxOrderByAggregateInputSchema_default = WaitlistRequestMaxOrderByAggregateInputSchema;




exports.WaitlistRequestMaxOrderByAggregateInputSchema = WaitlistRequestMaxOrderByAggregateInputSchema; exports.WaitlistRequestMaxOrderByAggregateInputSchema_default = WaitlistRequestMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-43LX67AA.cjs.map