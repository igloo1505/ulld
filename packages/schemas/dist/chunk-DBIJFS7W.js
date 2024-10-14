import {
  QAPairCreateNestedManyWithoutPracticeExamInputSchema,
  SubjectCreateNestedManyWithoutPracticeExamInputSchema,
  TagCreateNestedManyWithoutPracticeExamInputSchema,
  TopicCreateNestedManyWithoutPracticeExamInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/PracticeExamCreateInputSchema.ts
import { z } from "zod";
var PracticeExamCreateInputSchema = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
var PracticeExamCreateInputSchema_default = PracticeExamCreateInputSchema;

export {
  PracticeExamCreateInputSchema,
  PracticeExamCreateInputSchema_default
};
//# sourceMappingURL=chunk-DBIJFS7W.js.map