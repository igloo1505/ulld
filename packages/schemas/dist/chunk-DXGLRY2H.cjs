"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGDJ6ROMJcjs = require('./chunk-GDJ6ROMJ.cjs');


var _chunk5GAIEBVRcjs = require('./chunk-5GAIEBVR.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBSVEWJIDcjs = require('./chunk-BSVEWJID.cjs');


var _chunkFVQPYXSFcjs = require('./chunk-FVQPYXSF.cjs');

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
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBSVEWJIDcjs.QAPairCountOutputTypeArgsSchema)]).optional()
}).strict();
var QAPairUpdateArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.QAPairIncludeSchema.optional(),
  data: _zod.z.union([_chunk5GAIEBVRcjs.QAPairUpdateInputSchema, _chunkGDJ6ROMJcjs.QAPairUncheckedUpdateInputSchema]),
  where: _chunkFVQPYXSFcjs.QAPairWhereUniqueInputSchema
}).strict();
var QAPairUpdateArgsSchema_default = QAPairUpdateArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairUpdateArgsSchema = QAPairUpdateArgsSchema; exports.QAPairUpdateArgsSchema_default = QAPairUpdateArgsSchema_default;
//# sourceMappingURL=chunk-DXGLRY2H.cjs.map