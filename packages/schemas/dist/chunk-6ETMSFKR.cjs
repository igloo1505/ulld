"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  secondaryLabel: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QAPairMinOrderByAggregateInputSchema_default = QAPairMinOrderByAggregateInputSchema;




exports.QAPairMinOrderByAggregateInputSchema = QAPairMinOrderByAggregateInputSchema; exports.QAPairMinOrderByAggregateInputSchema_default = QAPairMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6ETMSFKR.cjs.map