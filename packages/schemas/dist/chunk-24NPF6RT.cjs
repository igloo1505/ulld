"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkQRJXZC3Acjs = require('./chunk-QRJXZC3A.cjs');


var _chunkOD4D4RVXcjs = require('./chunk-OD4D4RVX.cjs');


var _chunk7EU4PW5Mcjs = require('./chunk-7EU4PW5M.cjs');


var _chunkEO4PQBWRcjs = require('./chunk-EO4PQBWR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/PracticeExamFindFirstArgsSchema.ts
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
var PracticeExamFindFirstArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.PracticeExamIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOD4D4RVXcjs.PracticeExamOrderByWithRelationInputSchema.array(), _chunkOD4D4RVXcjs.PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk7EU4PW5Mcjs.PracticeExamWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkEO4PQBWRcjs.PracticeExamScalarFieldEnumSchema, _chunkEO4PQBWRcjs.PracticeExamScalarFieldEnumSchema.array()]).optional()
}).strict();
var PracticeExamFindFirstArgsSchema_default = PracticeExamFindFirstArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamFindFirstArgsSchema = PracticeExamFindFirstArgsSchema; exports.PracticeExamFindFirstArgsSchema_default = PracticeExamFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-24NPF6RT.cjs.map