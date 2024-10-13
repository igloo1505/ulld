"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamAvgOrderByAggregateInputSchema_default = PracticeExamAvgOrderByAggregateInputSchema;




exports.PracticeExamAvgOrderByAggregateInputSchema = PracticeExamAvgOrderByAggregateInputSchema; exports.PracticeExamAvgOrderByAggregateInputSchema_default = PracticeExamAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7GL7F4WK.cjs.map