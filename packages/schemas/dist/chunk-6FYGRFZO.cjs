"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var PracticeExamMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var PracticeExamMaxOrderByAggregateInputSchema_default = PracticeExamMaxOrderByAggregateInputSchema;




exports.PracticeExamMaxOrderByAggregateInputSchema = PracticeExamMaxOrderByAggregateInputSchema; exports.PracticeExamMaxOrderByAggregateInputSchema_default = PracticeExamMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6FYGRFZO.cjs.map