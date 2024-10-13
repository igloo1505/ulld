"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKHI7IBXBcjs = require('./chunk-KHI7IBXB.cjs');


var _chunk4LV7GLEQcjs = require('./chunk-4LV7GLEQ.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkFCB62U4Vcjs = require('./chunk-FCB62U4V.cjs');


var _chunkQ6QULSEIcjs = require('./chunk-Q6QULSEI.cjs');

// src/database/outputTypeSchemas/QAPairUpdateArgsSchema.ts
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
var QAPairUpdateArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.QAPairIncludeSchema.optional(),
  data: _zod.z.union([_chunk4LV7GLEQcjs.QAPairUpdateInputSchema, _chunkKHI7IBXBcjs.QAPairUncheckedUpdateInputSchema]),
  where: _chunkQ6QULSEIcjs.QAPairWhereUniqueInputSchema
}).strict();
var QAPairUpdateArgsSchema_default = QAPairUpdateArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairUpdateArgsSchema = QAPairUpdateArgsSchema; exports.QAPairUpdateArgsSchema_default = QAPairUpdateArgsSchema_default;
//# sourceMappingURL=chunk-TNL2V6Z3.cjs.map