"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListMinOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ReadingListMinOrderByAggregateInputSchema_default = ReadingListMinOrderByAggregateInputSchema;




exports.ReadingListMinOrderByAggregateInputSchema = ReadingListMinOrderByAggregateInputSchema; exports.ReadingListMinOrderByAggregateInputSchema_default = ReadingListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-U4MTKNEX.cjs.map