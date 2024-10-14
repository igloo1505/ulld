import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateManyWithoutTagsInputSchema.ts
import { z } from "zod";
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema;

export {
  PracticeExamUncheckedUpdateManyWithoutTagsInputSchema,
  PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-TV3CC3FD.js.map