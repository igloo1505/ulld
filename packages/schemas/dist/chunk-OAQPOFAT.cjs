"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListCountOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ReadingListCountOrderByAggregateInputSchema_default = ReadingListCountOrderByAggregateInputSchema;




exports.ReadingListCountOrderByAggregateInputSchema = ReadingListCountOrderByAggregateInputSchema; exports.ReadingListCountOrderByAggregateInputSchema_default = ReadingListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OAQPOFAT.cjs.map