"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamMinOrderByAggregateInputSchema_default = PracticeExamMinOrderByAggregateInputSchema;




exports.PracticeExamMinOrderByAggregateInputSchema = PracticeExamMinOrderByAggregateInputSchema; exports.PracticeExamMinOrderByAggregateInputSchema_default = PracticeExamMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MZKC5FTM.cjs.map