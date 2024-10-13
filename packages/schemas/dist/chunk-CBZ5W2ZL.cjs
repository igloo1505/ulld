"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2RU7MKXEcjs = require('./chunk-2RU7MKXE.cjs');


var _chunkO4QP2L3Acjs = require('./chunk-O4QP2L3A.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBMIJGTWYcjs = require('./chunk-BMIJGTWY.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateArgsSchema.ts
var _zod = require('zod');
var PracticeExamSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  correctCount: _zod.z.boolean().optional(),
  inCorrectCount: _zod.z.boolean().optional(),
  timeLimitInSeconds: _zod.z.boolean().optional(),
  timeCompletedInSeconds: _zod.z.boolean().optional(),
  date: _zod.z.boolean().optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  questions: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBMIJGTWYcjs.PracticeExamCountOutputTypeArgsSchema)]).optional()
}).strict();
var PracticeExamCreateArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.PracticeExamIncludeSchema.optional(),
  data: _zod.z.union([_chunk2RU7MKXEcjs.PracticeExamCreateInputSchema, _chunkO4QP2L3Acjs.PracticeExamUncheckedCreateInputSchema])
}).strict();
var PracticeExamCreateArgsSchema_default = PracticeExamCreateArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamCreateArgsSchema = PracticeExamCreateArgsSchema; exports.PracticeExamCreateArgsSchema_default = PracticeExamCreateArgsSchema_default;
//# sourceMappingURL=chunk-CBZ5W2ZL.cjs.map