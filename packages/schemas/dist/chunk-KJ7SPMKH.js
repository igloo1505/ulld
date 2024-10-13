import {
  QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema,
  SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema,
  TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema,
  TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/PracticeExamUncheckedCreateInputSchema.ts
import { z } from "zod";
var PracticeExamUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamUncheckedCreateInputSchema_default = PracticeExamUncheckedCreateInputSchema;

export {
  PracticeExamUncheckedCreateInputSchema,
  PracticeExamUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-KJ7SPMKH.js.map