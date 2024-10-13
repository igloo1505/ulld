"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamMinOrderByAggregateInputSchema_default = PracticeExamMinOrderByAggregateInputSchema;




exports.PracticeExamMinOrderByAggregateInputSchema = PracticeExamMinOrderByAggregateInputSchema; exports.PracticeExamMinOrderByAggregateInputSchema_default = PracticeExamMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-L2HKZZRV.cjs.map