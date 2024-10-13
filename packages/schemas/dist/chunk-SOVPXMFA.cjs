"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/PracticeExamCreateManyInputSchema.ts
var _zod = require('zod');
var PracticeExamCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date().optional()
}).strict();
var PracticeExamCreateManyInputSchema_default = PracticeExamCreateManyInputSchema;




exports.PracticeExamCreateManyInputSchema = PracticeExamCreateManyInputSchema; exports.PracticeExamCreateManyInputSchema_default = PracticeExamCreateManyInputSchema_default;
//# sourceMappingURL=chunk-SOVPXMFA.cjs.map