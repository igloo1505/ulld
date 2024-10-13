import {
  PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema,
  SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema,
  TagUncheckedCreateNestedManyWithoutQAPairInputSchema,
  TopicUncheckedCreateNestedManyWithoutQAPairInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/QAPairUncheckedCreateInputSchema.ts
import { z } from "zod";
var QAPairUncheckedCreateInputSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairUncheckedCreateInputSchema_default = QAPairUncheckedCreateInputSchema;

export {
  QAPairUncheckedCreateInputSchema,
  QAPairUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-HANNCXID.js.map