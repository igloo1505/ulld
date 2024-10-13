"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestCountOrderByAggregateInputSchema_default = WaitlistRequestCountOrderByAggregateInputSchema;




exports.WaitlistRequestCountOrderByAggregateInputSchema = WaitlistRequestCountOrderByAggregateInputSchema; exports.WaitlistRequestCountOrderByAggregateInputSchema_default = WaitlistRequestCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-KZAHDYNC.cjs.map