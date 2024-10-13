"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var IpynbSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema;




exports.IpynbSumOrderByAggregateInputSchema = IpynbSumOrderByAggregateInputSchema; exports.IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NNWJU767.cjs.map