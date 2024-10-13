"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBMIJGTWYcjs = require('./chunk-BMIJGTWY.cjs');


var _chunk2FWDETVScjs = require('./chunk-2FWDETVS.cjs');


var _chunkQ5CG54UIcjs = require('./chunk-Q5CG54UI.cjs');


var _chunkWNQ7NULNcjs = require('./chunk-WNQ7NULN.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/PracticeExamFindFirstOrThrowArgsSchema.ts
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
var PracticeExamFindFirstOrThrowArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.PracticeExamIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2FWDETVScjs.PracticeExamOrderByWithRelationInputSchema.array(), _chunk2FWDETVScjs.PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkQ5CG54UIcjs.PracticeExamWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkWNQ7NULNcjs.PracticeExamScalarFieldEnumSchema, _chunkWNQ7NULNcjs.PracticeExamScalarFieldEnumSchema.array()]).optional()
}).strict();
var PracticeExamFindFirstOrThrowArgsSchema_default = PracticeExamFindFirstOrThrowArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamFindFirstOrThrowArgsSchema = PracticeExamFindFirstOrThrowArgsSchema; exports.PracticeExamFindFirstOrThrowArgsSchema_default = PracticeExamFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-O4JCPNYO.cjs.map