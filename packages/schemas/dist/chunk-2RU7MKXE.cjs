"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/PracticeExamCreateInputSchema.ts
var _zod = require('zod');
var PracticeExamCreateInputSchema = _zod.z.object({
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamCreateInputSchema_default = PracticeExamCreateInputSchema;




exports.PracticeExamCreateInputSchema = PracticeExamCreateInputSchema; exports.PracticeExamCreateInputSchema_default = PracticeExamCreateInputSchema_default;
//# sourceMappingURL=chunk-2RU7MKXE.cjs.map