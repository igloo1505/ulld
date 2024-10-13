"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk74IEKXYXcjs = require('./chunk-74IEKXYX.cjs');


var _chunkAHMGDH7Icjs = require('./chunk-AHMGDH7I.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkFCB62U4Vcjs = require('./chunk-FCB62U4V.cjs');

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
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFCB62U4Vcjs.QAPairCountOutputTypeArgsSchema)]).optional()
}).strict();
var QAPairCreateArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.QAPairIncludeSchema.optional(),
  data: _zod.z.union([_chunk74IEKXYXcjs.QAPairCreateInputSchema, _chunkAHMGDH7Icjs.QAPairUncheckedCreateInputSchema])
}).strict();
var QAPairCreateArgsSchema_default = QAPairCreateArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairCreateArgsSchema = QAPairCreateArgsSchema; exports.QAPairCreateArgsSchema_default = QAPairCreateArgsSchema_default;
//# sourceMappingURL=chunk-5C4HHXO2.cjs.map