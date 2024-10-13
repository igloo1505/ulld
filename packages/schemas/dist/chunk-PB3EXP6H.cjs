"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamMaxOrderByAggregateInputSchema_default = PracticeExamMaxOrderByAggregateInputSchema;




exports.PracticeExamMaxOrderByAggregateInputSchema = PracticeExamMaxOrderByAggregateInputSchema; exports.PracticeExamMaxOrderByAggregateInputSchema_default = PracticeExamMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PB3EXP6H.cjs.map