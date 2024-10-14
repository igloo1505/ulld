"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkQRJXZC3Acjs = require('./chunk-QRJXZC3A.cjs');


var _chunk7EU4PW5Mcjs = require('./chunk-7EU4PW5M.cjs');

// src/database/outputTypeSchemas/PracticeExamFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var PracticeExamSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  correctCount: _zod.z.boolean().optional(),
  inCorrectCount: _zod.z.boolean().optional(),
  timeLimitInSeconds: _zod.z.boolean().optional(),
  timeCompletedInSeconds: _zod.z.boolean().optional(),
  date: _zod.z.boolean().optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  questions: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkQRJXZC3Acjs.PracticeExamCountOutputTypeArgsSchema)]).optional()
}).strict();
var PracticeExamFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.PracticeExamIncludeSchema.optional(),
  where: _chunk7EU4PW5Mcjs.PracticeExamWhereUniqueInputSchema
}).strict();
var PracticeExamFindUniqueOrThrowArgsSchema_default = PracticeExamFindUniqueOrThrowArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamFindUniqueOrThrowArgsSchema = PracticeExamFindUniqueOrThrowArgsSchema; exports.PracticeExamFindUniqueOrThrowArgsSchema_default = PracticeExamFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-Y5XOLSNB.cjs.map