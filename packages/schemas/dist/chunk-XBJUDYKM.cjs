"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkFCB62U4Vcjs = require('./chunk-FCB62U4V.cjs');


var _chunkQ6QULSEIcjs = require('./chunk-Q6QULSEI.cjs');

// src/database/outputTypeSchemas/QAPairFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var QAPairSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  question: _zod.z.boolean().optional(),
  answer: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  secondaryLabel: _zod.z.boolean().optional(),
  correctCount: _zod.z.boolean().optional(),
  inCorrectCount: _zod.z.boolean().optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFCB62U4Vcjs.QAPairCountOutputTypeArgsSchema)]).optional()
}).strict();
var QAPairFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.QAPairIncludeSchema.optional(),
  where: _chunkQ6QULSEIcjs.QAPairWhereUniqueInputSchema
}).strict();
var QAPairFindUniqueOrThrowArgsSchema_default = QAPairFindUniqueOrThrowArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairFindUniqueOrThrowArgsSchema = QAPairFindUniqueOrThrowArgsSchema; exports.QAPairFindUniqueOrThrowArgsSchema_default = QAPairFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-XBJUDYKM.cjs.map