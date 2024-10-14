"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamAvgOrderByAggregateInputSchema_default = PracticeExamAvgOrderByAggregateInputSchema;




exports.PracticeExamAvgOrderByAggregateInputSchema = PracticeExamAvgOrderByAggregateInputSchema; exports.PracticeExamAvgOrderByAggregateInputSchema_default = PracticeExamAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-VEKUALSC.cjs.map