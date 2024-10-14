"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTMULB36Acjs = require('./chunk-TMULB36A.cjs');


var _chunkPY6OE4N2cjs = require('./chunk-PY6OE4N2.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBSVEWJIDcjs = require('./chunk-BSVEWJID.cjs');

// src/database/outputTypeSchemas/QAPairCreateArgsSchema.ts
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
var QAPairCreateArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.QAPairIncludeSchema.optional(),
  data: _zod.z.union([_chunkTMULB36Acjs.QAPairCreateInputSchema, _chunkPY6OE4N2cjs.QAPairUncheckedCreateInputSchema])
}).strict();
var QAPairCreateArgsSchema_default = QAPairCreateArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairCreateArgsSchema = QAPairCreateArgsSchema; exports.QAPairCreateArgsSchema_default = QAPairCreateArgsSchema_default;
//# sourceMappingURL=chunk-DTPM3ZWU.cjs.map