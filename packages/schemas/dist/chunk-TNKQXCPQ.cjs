"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListMaxOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema;




exports.ReadingListMaxOrderByAggregateInputSchema = ReadingListMaxOrderByAggregateInputSchema; exports.ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TNKQXCPQ.cjs.map