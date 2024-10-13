import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.ts
import { z } from "zod";
var DailyFocusUncheckedUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUncheckedUpdateInputSchema_default = DailyFocusUncheckedUpdateInputSchema;

export {
  DailyFocusUncheckedUpdateInputSchema,
  DailyFocusUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-ZOD2O7VJ.js.map