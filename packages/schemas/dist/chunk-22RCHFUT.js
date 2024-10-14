// src/database/inputTypeSchemas/PracticeExamCreateManyInputSchema.ts
import { z } from "zod";
var PracticeExamCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional()
}).strict();
var PracticeExamCreateManyInputSchema_default = PracticeExamCreateManyInputSchema;

export {
  PracticeExamCreateManyInputSchema,
  PracticeExamCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-22RCHFUT.js.map