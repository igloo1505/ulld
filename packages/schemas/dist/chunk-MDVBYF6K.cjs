"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WaitlistRequestMaxOrderByAggregateInputSchema_default = WaitlistRequestMaxOrderByAggregateInputSchema;




exports.WaitlistRequestMaxOrderByAggregateInputSchema = WaitlistRequestMaxOrderByAggregateInputSchema; exports.WaitlistRequestMaxOrderByAggregateInputSchema_default = WaitlistRequestMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MDVBYF6K.cjs.map