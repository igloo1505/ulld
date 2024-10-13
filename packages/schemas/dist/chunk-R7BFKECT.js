import {
  PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema,
  SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema,
  TagUncheckedUpdateManyWithoutQAPairNestedInputSchema,
  TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/QAPairUncheckedUpdateInputSchema.ts
import { z } from "zod";
var QAPairUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema).optional()
}).strict();
var QAPairUncheckedUpdateInputSchema_default = QAPairUncheckedUpdateInputSchema;

export {
  QAPairUncheckedUpdateInputSchema,
  QAPairUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-R7BFKECT.js.map