"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestAvgOrderByAggregateInputSchema_default = WaitlistRequestAvgOrderByAggregateInputSchema;




exports.WaitlistRequestAvgOrderByAggregateInputSchema = WaitlistRequestAvgOrderByAggregateInputSchema; exports.WaitlistRequestAvgOrderByAggregateInputSchema_default = WaitlistRequestAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-X33BOM4D.cjs.map