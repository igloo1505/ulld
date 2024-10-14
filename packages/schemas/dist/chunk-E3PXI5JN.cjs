"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFFAQ756Icjs = require('./chunk-FFAQ756I.cjs');


var _chunk3QA5HH7Zcjs = require('./chunk-3QA5HH7Z.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var QAPairOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk3QA5HH7Zcjs.PracticeExamOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkFFAQ756Icjs.QAPairOrderByRelevanceInputSchema).optional()
}).strict();
var QAPairOrderByWithRelationInputSchema_default = QAPairOrderByWithRelationInputSchema;




exports.QAPairOrderByWithRelationInputSchema = QAPairOrderByWithRelationInputSchema; exports.QAPairOrderByWithRelationInputSchema_default = QAPairOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-E3PXI5JN.cjs.map