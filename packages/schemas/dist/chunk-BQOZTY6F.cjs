"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVEKUALSCcjs = require('./chunk-VEKUALSC.cjs');


var _chunkR7CEKIDTcjs = require('./chunk-R7CEKIDT.cjs');


var _chunkMZKC5FTMcjs = require('./chunk-MZKC5FTM.cjs');


var _chunk6FYGRFZOcjs = require('./chunk-6FYGRFZO.cjs');


var _chunk2LTITLCPcjs = require('./chunk-2LTITLCP.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var PracticeExamOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkR7CEKIDTcjs.PracticeExamCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkVEKUALSCcjs.PracticeExamAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk6FYGRFZOcjs.PracticeExamMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkMZKC5FTMcjs.PracticeExamMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk2LTITLCPcjs.PracticeExamSumOrderByAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithAggregationInputSchema_default = PracticeExamOrderByWithAggregationInputSchema;




exports.PracticeExamOrderByWithAggregationInputSchema = PracticeExamOrderByWithAggregationInputSchema; exports.PracticeExamOrderByWithAggregationInputSchema_default = PracticeExamOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-BQOZTY6F.cjs.map