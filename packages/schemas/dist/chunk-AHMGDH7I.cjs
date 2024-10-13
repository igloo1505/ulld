"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/QAPairUncheckedCreateInputSchema.ts
var _zod = require('zod');
var QAPairUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  question: _zod.z.string(),
  answer: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  secondaryLabel: _zod.z.string().optional().nullable(),
  correctCount: _zod.z.number().int().optional(),
  inCorrectCount: _zod.z.number().int().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairUncheckedCreateInputSchema_default = QAPairUncheckedCreateInputSchema;




exports.QAPairUncheckedCreateInputSchema = QAPairUncheckedCreateInputSchema; exports.QAPairUncheckedCreateInputSchema_default = QAPairUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-AHMGDH7I.cjs.map