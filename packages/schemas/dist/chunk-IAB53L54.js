import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema.ts
import { z } from "zod";
var PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema;

export {
  PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema,
  PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema_default
};
//# sourceMappingURL=chunk-IAB53L54.js.map