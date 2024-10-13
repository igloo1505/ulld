"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKWPKMECGcjs = require('./chunk-KWPKMECG.cjs');


var _chunkPCM3GZDJcjs = require('./chunk-PCM3GZDJ.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var QAPairOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkPCM3GZDJcjs.PracticeExamOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkKWPKMECGcjs.QAPairOrderByRelevanceInputSchema).optional()
}).strict();
var QAPairOrderByWithRelationInputSchema_default = QAPairOrderByWithRelationInputSchema;




exports.QAPairOrderByWithRelationInputSchema = QAPairOrderByWithRelationInputSchema; exports.QAPairOrderByWithRelationInputSchema_default = QAPairOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-PAZRY2SF.cjs.map