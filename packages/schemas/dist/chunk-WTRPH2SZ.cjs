"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBMIJGTWYcjs = require('./chunk-BMIJGTWY.cjs');

// src/database/inputTypeSchemas/PracticeExamSelectSchema.ts
var _zod = require('zod');
var PracticeExamSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  correctCount: _zod.z.boolean().optional(),
  inCorrectCount: _zod.z.boolean().optional(),
  timeLimitInSeconds: _zod.z.boolean().optional(),
  timeCompletedInSeconds: _zod.z.boolean().optional(),
  date: _zod.z.boolean().optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  questions: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBMIJGTWYcjs.PracticeExamCountOutputTypeArgsSchema)]).optional()
}).strict();
var PracticeExamSelectSchema_default = PracticeExamSelectSchema;




exports.PracticeExamSelectSchema = PracticeExamSelectSchema; exports.PracticeExamSelectSchema_default = PracticeExamSelectSchema_default;
//# sourceMappingURL=chunk-WTRPH2SZ.cjs.map