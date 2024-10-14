"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/PracticeExamCreateInputSchema.ts
var _zod = require('zod');
var PracticeExamCreateInputSchema = _zod.z.object({
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamCreateInputSchema_default = PracticeExamCreateInputSchema;




exports.PracticeExamCreateInputSchema = PracticeExamCreateInputSchema; exports.PracticeExamCreateInputSchema_default = PracticeExamCreateInputSchema_default;
//# sourceMappingURL=chunk-PPI74OIR.cjs.map