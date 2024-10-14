"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPPI74OIRcjs = require('./chunk-PPI74OIR.cjs');


var _chunk7V63QXU4cjs = require('./chunk-7V63QXU4.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkQRJXZC3Acjs = require('./chunk-QRJXZC3A.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateArgsSchema.ts
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
var PracticeExamCreateArgsSchema = _zod.z.object({
  select: PracticeExamSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.PracticeExamIncludeSchema.optional(),
  data: _zod.z.union([_chunkPPI74OIRcjs.PracticeExamCreateInputSchema, _chunk7V63QXU4cjs.PracticeExamUncheckedCreateInputSchema])
}).strict();
var PracticeExamCreateArgsSchema_default = PracticeExamCreateArgsSchema;





exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamCreateArgsSchema = PracticeExamCreateArgsSchema; exports.PracticeExamCreateArgsSchema_default = PracticeExamCreateArgsSchema_default;
//# sourceMappingURL=chunk-RPCPAHVM.cjs.map