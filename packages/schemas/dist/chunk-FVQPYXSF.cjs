"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/QAPairWhereUniqueInputSchema.ts
var _zod = require('zod');
var QAPairWhereUniqueInputSchema = _zod.z.union([
  _zod.z.object({
    id: _zod.z.string(),
    question: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.string()
  }),
  _zod.z.object({
    question: _zod.z.string()
  })
]).and(_zod.z.object({
  id: _zod.z.string().optional(),
  question: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairWhereInputSchema).array()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamListRelationFilterSchema).optional()
}).strict());
var QAPairWhereUniqueInputSchema_default = QAPairWhereUniqueInputSchema;




exports.QAPairWhereUniqueInputSchema = QAPairWhereUniqueInputSchema; exports.QAPairWhereUniqueInputSchema_default = QAPairWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-FVQPYXSF.cjs.map