import {
  QAPairUpdateManyWithoutPracticeExamNestedInputSchema,
  SubjectUpdateManyWithoutPracticeExamNestedInputSchema,
  TagUpdateManyWithoutPracticeExamNestedInputSchema,
  TopicUpdateManyWithoutPracticeExamNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/PracticeExamUpdateInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateInputSchema = z.object({
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
var PracticeExamUpdateInputSchema_default = PracticeExamUpdateInputSchema;

export {
  PracticeExamUpdateInputSchema,
  PracticeExamUpdateInputSchema_default
};
//# sourceMappingURL=chunk-EJPMFKMQ.js.map