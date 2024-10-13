"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  secondaryLabel: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QAPairCountOrderByAggregateInputSchema_default = QAPairCountOrderByAggregateInputSchema;




exports.QAPairCountOrderByAggregateInputSchema = QAPairCountOrderByAggregateInputSchema; exports.QAPairCountOrderByAggregateInputSchema_default = QAPairCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-CFTQE2WW.cjs.map