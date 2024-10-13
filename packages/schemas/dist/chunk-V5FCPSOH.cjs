"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestSumOrderByAggregateInputSchema_default = WaitlistRequestSumOrderByAggregateInputSchema;




exports.WaitlistRequestSumOrderByAggregateInputSchema = WaitlistRequestSumOrderByAggregateInputSchema; exports.WaitlistRequestSumOrderByAggregateInputSchema_default = WaitlistRequestSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-V5FCPSOH.cjs.map