import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema.ts
import { z } from "zod";
var PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema;

export {
  PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema,
  PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-4PD4BJYW.js.map