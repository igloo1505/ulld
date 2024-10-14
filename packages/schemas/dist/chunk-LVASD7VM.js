import {
  PracticeExamUpdateManyWithoutQuestionsNestedInputSchema,
  SubjectUpdateManyWithoutQaPairNestedInputSchema,
  TagUpdateManyWithoutQAPairNestedInputSchema,
  TopicUpdateManyWithoutQAPairNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/QAPairUpdateInputSchema.ts
import { z } from "zod";
var QAPairUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutQAPairNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutQaPairNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutQuestionsNestedInputSchema).optional()
}).strict();
var QAPairUpdateInputSchema_default = QAPairUpdateInputSchema;

export {
  QAPairUpdateInputSchema,
  QAPairUpdateInputSchema_default
};
//# sourceMappingURL=chunk-LVASD7VM.js.map