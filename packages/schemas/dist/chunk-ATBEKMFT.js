import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyMutationInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyMutationInputSchema = z.object({
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUpdateManyMutationInputSchema_default = PracticeExamUpdateManyMutationInputSchema;

export {
  PracticeExamUpdateManyMutationInputSchema,
  PracticeExamUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-ATBEKMFT.js.map