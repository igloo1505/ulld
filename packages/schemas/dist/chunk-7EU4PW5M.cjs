"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/PracticeExamWhereUniqueInputSchema.ts
var _zod = require('zod');
var PracticeExamWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema).array()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  questions: _zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairListRelationFilterSchema).optional()
}).strict());
var PracticeExamWhereUniqueInputSchema_default = PracticeExamWhereUniqueInputSchema;




exports.PracticeExamWhereUniqueInputSchema = PracticeExamWhereUniqueInputSchema; exports.PracticeExamWhereUniqueInputSchema_default = PracticeExamWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-7EU4PW5M.cjs.map