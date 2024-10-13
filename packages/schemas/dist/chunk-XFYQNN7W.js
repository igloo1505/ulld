import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DailyFocusUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var DailyFocusUncheckedUpdateManyInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUncheckedUpdateManyInputSchema_default = DailyFocusUncheckedUpdateManyInputSchema;

export {
  DailyFocusUncheckedUpdateManyInputSchema,
  DailyFocusUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-XFYQNN7W.js.map