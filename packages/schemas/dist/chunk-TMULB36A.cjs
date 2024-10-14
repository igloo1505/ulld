"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

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
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairCreateInputSchema_default = QAPairCreateInputSchema;




exports.QAPairCreateInputSchema = QAPairCreateInputSchema; exports.QAPairCreateInputSchema_default = QAPairCreateInputSchema_default;
//# sourceMappingURL=chunk-TMULB36A.cjs.map