"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWCWOZNW5cjs = require('./chunk-WCWOZNW5.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var PracticeExamOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeLimitInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  timeCompletedInSeconds: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  date: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunkWCWOZNW5cjs.QAPairOrderByRelationAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithRelationInputSchema_default = PracticeExamOrderByWithRelationInputSchema;




exports.PracticeExamOrderByWithRelationInputSchema = PracticeExamOrderByWithRelationInputSchema; exports.PracticeExamOrderByWithRelationInputSchema_default = PracticeExamOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-2FWDETVS.cjs.map