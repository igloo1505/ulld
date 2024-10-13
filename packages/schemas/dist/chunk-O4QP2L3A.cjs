"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/PracticeExamUncheckedCreateInputSchema.ts
var _zod = require('zod');
var PracticeExamUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamUncheckedCreateInputSchema_default = PracticeExamUncheckedCreateInputSchema;




exports.PracticeExamUncheckedCreateInputSchema = PracticeExamUncheckedCreateInputSchema; exports.PracticeExamUncheckedCreateInputSchema_default = PracticeExamUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-O4QP2L3A.cjs.map