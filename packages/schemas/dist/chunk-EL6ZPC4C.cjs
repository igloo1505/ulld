"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var IpynbAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var IpynbAvgOrderByAggregateInputSchema_default = IpynbAvgOrderByAggregateInputSchema;




exports.IpynbAvgOrderByAggregateInputSchema = IpynbAvgOrderByAggregateInputSchema; exports.IpynbAvgOrderByAggregateInputSchema_default = IpynbAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-EL6ZPC4C.cjs.map