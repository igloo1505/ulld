"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GL7F4WKcjs = require('./chunk-7GL7F4WK.cjs');


var _chunkUTPOPRUWcjs = require('./chunk-UTPOPRUW.cjs');


var _chunkL2HKZZRVcjs = require('./chunk-L2HKZZRV.cjs');


var _chunkPB3EXP6Hcjs = require('./chunk-PB3EXP6H.cjs');


var _chunk4DRBLDOMcjs = require('./chunk-4DRBLDOM.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var PracticeExamOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkUTPOPRUWcjs.PracticeExamCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk7GL7F4WKcjs.PracticeExamAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkPB3EXP6Hcjs.PracticeExamMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkL2HKZZRVcjs.PracticeExamMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk4DRBLDOMcjs.PracticeExamSumOrderByAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithAggregationInputSchema_default = PracticeExamOrderByWithAggregationInputSchema;




exports.PracticeExamOrderByWithAggregationInputSchema = PracticeExamOrderByWithAggregationInputSchema; exports.PracticeExamOrderByWithAggregationInputSchema_default = PracticeExamOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-2R3SEO5R.cjs.map