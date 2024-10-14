"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamCountOrderByAggregateInputSchema_default = PracticeExamCountOrderByAggregateInputSchema;




exports.PracticeExamCountOrderByAggregateInputSchema = PracticeExamCountOrderByAggregateInputSchema; exports.PracticeExamCountOrderByAggregateInputSchema_default = PracticeExamCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-R7CEKIDT.cjs.map