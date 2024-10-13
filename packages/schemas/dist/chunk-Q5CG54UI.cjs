"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/PracticeExamWhereUniqueInputSchema.ts
var _zod = require('zod');
var PracticeExamWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema).array()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  questions: _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairListRelationFilterSchema).optional()
}).strict());
var PracticeExamWhereUniqueInputSchema_default = PracticeExamWhereUniqueInputSchema;




exports.PracticeExamWhereUniqueInputSchema = PracticeExamWhereUniqueInputSchema; exports.PracticeExamWhereUniqueInputSchema_default = PracticeExamWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-Q5CG54UI.cjs.map