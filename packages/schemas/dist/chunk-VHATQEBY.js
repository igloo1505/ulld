import {
  QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema,
  SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema,
  TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema,
  TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateInputSchema.ts
import { z } from "zod";
var PracticeExamUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
var PracticeExamUncheckedUpdateInputSchema_default = PracticeExamUncheckedUpdateInputSchema;

export {
  PracticeExamUncheckedUpdateInputSchema,
  PracticeExamUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-VHATQEBY.js.map