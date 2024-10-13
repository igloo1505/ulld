"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/QAPairCreateInputSchema.ts
var _zod = require('zod');
var QAPairCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  question: _zod.z.string(),
  answer: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  secondaryLabel: _zod.z.string().optional().nullable(),
  correctCount: _zod.z.number().int().optional(),
  inCorrectCount: _zod.z.number().int().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairCreateInputSchema_default = QAPairCreateInputSchema;




exports.QAPairCreateInputSchema = QAPairCreateInputSchema; exports.QAPairCreateInputSchema_default = QAPairCreateInputSchema_default;
//# sourceMappingURL=chunk-74IEKXYX.cjs.map