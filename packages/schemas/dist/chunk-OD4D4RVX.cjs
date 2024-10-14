"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFCKLEIAXcjs = require('./chunk-FCKLEIAX.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var PracticeExamOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunkFCKLEIAXcjs.QAPairOrderByRelationAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithRelationInputSchema_default = PracticeExamOrderByWithRelationInputSchema;




exports.PracticeExamOrderByWithRelationInputSchema = PracticeExamOrderByWithRelationInputSchema; exports.PracticeExamOrderByWithRelationInputSchema_default = PracticeExamOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-OD4D4RVX.cjs.map