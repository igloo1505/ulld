"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamSumOrderByAggregateInputSchema_default = PracticeExamSumOrderByAggregateInputSchema;




exports.PracticeExamSumOrderByAggregateInputSchema = PracticeExamSumOrderByAggregateInputSchema; exports.PracticeExamSumOrderByAggregateInputSchema_default = PracticeExamSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4DRBLDOM.cjs.map