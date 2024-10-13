"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZDLAVOTVcjs = require('./chunk-ZDLAVOTV.cjs');


var _chunkAZ2F5JPQcjs = require('./chunk-AZ2F5JPQ.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBMIJGTWYcjs = require('./chunk-BMIJGTWY.cjs');


var _chunkQ5CG54UIcjs = require('./chunk-Q5CG54UI.cjs');

// src/database/outputTypeSchemas/PracticeExamUpdateArgsSchema.ts
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
var PracticeExamUpdateArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.PracticeExamIncludeSchema.optional(),
  data: _zod.z.union([_chunkAZ2F5JPQcjs.PracticeExamUpdateInputSchema, _chunkZDLAVOTVcjs.PracticeExamUncheckedUpdateInputSchema]),
  where: _chunkQ5CG54UIcjs.PracticeExamWhereUniqueInputSchema
}).strict();
var PracticeExamUpdateArgsSchema_default = PracticeExamUpdateArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamUpdateArgsSchema = PracticeExamUpdateArgsSchema; exports.PracticeExamUpdateArgsSchema_default = PracticeExamUpdateArgsSchema_default;
//# sourceMappingURL=chunk-VCBGCZNX.cjs.map