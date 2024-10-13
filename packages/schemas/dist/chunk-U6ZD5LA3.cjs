"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestMinOrderByAggregateInputSchema_default = WaitlistRequestMinOrderByAggregateInputSchema;




exports.WaitlistRequestMinOrderByAggregateInputSchema = WaitlistRequestMinOrderByAggregateInputSchema; exports.WaitlistRequestMinOrderByAggregateInputSchema_default = WaitlistRequestMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-U6ZD5LA3.cjs.map