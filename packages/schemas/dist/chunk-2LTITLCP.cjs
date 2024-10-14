"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamSumOrderByAggregateInputSchema_default = PracticeExamSumOrderByAggregateInputSchema;




exports.PracticeExamSumOrderByAggregateInputSchema = PracticeExamSumOrderByAggregateInputSchema; exports.PracticeExamSumOrderByAggregateInputSchema_default = PracticeExamSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-2LTITLCP.cjs.map