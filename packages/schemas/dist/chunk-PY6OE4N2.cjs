"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

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
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairUncheckedCreateInputSchema_default = QAPairUncheckedCreateInputSchema;




exports.QAPairUncheckedCreateInputSchema = QAPairUncheckedCreateInputSchema; exports.QAPairUncheckedCreateInputSchema_default = QAPairUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-PY6OE4N2.cjs.map