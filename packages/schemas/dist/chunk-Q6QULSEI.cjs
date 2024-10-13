"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

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
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairWhereInputSchema).array()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamListRelationFilterSchema).optional()
}).strict());
var QAPairWhereUniqueInputSchema_default = QAPairWhereUniqueInputSchema;




exports.QAPairWhereUniqueInputSchema = QAPairWhereUniqueInputSchema; exports.QAPairWhereUniqueInputSchema_default = QAPairWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-Q6QULSEI.cjs.map