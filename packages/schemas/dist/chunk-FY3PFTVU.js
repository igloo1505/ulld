import {
  PracticeExamCreateNestedManyWithoutQuestionsInputSchema,
  SubjectCreateNestedManyWithoutQaPairInputSchema,
  TagCreateNestedManyWithoutQAPairInputSchema,
  TopicCreateNestedManyWithoutQAPairInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/QAPairCreateInputSchema.ts
import { z } from "zod";
var QAPairCreateInputSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
var QAPairCreateInputSchema_default = QAPairCreateInputSchema;

export {
  QAPairCreateInputSchema,
  QAPairCreateInputSchema_default
};
//# sourceMappingURL=chunk-FY3PFTVU.js.map