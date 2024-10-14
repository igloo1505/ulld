"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/PracticeExamUncheckedCreateInputSchema.ts
var _zod = require('zod');
var PracticeExamUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamUncheckedCreateInputSchema_default = PracticeExamUncheckedCreateInputSchema;




exports.PracticeExamUncheckedCreateInputSchema = PracticeExamUncheckedCreateInputSchema; exports.PracticeExamUncheckedCreateInputSchema_default = PracticeExamUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-7V63QXU4.cjs.map