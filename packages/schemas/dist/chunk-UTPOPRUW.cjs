"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamCountOrderByAggregateInputSchema_default = PracticeExamCountOrderByAggregateInputSchema;




exports.PracticeExamCountOrderByAggregateInputSchema = PracticeExamCountOrderByAggregateInputSchema; exports.PracticeExamCountOrderByAggregateInputSchema_default = PracticeExamCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UTPOPRUW.cjs.map