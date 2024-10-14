"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBSVEWJIDcjs = require('./chunk-BSVEWJID.cjs');


var _chunkE3PXI5JNcjs = require('./chunk-E3PXI5JN.cjs');


var _chunkFVQPYXSFcjs = require('./chunk-FVQPYXSF.cjs');


var _chunk5UEM4U5Ycjs = require('./chunk-5UEM4U5Y.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/QAPairFindFirstArgsSchema.ts
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
var QAPairFindFirstArgsSchema = _zod.z.object({
  select: QAPairSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.QAPairIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.QAPairWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkE3PXI5JNcjs.QAPairOrderByWithRelationInputSchema.array(), _chunkE3PXI5JNcjs.QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFVQPYXSFcjs.QAPairWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk5UEM4U5Ycjs.QAPairScalarFieldEnumSchema, _chunk5UEM4U5Ycjs.QAPairScalarFieldEnumSchema.array()]).optional()
}).strict();
var QAPairFindFirstArgsSchema_default = QAPairFindFirstArgsSchema;





exports.QAPairSelectSchema = QAPairSelectSchema; exports.QAPairFindFirstArgsSchema = QAPairFindFirstArgsSchema; exports.QAPairFindFirstArgsSchema_default = QAPairFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-HUU5IZOZ.cjs.map