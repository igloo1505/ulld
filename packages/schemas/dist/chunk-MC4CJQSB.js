import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-MC4CJQSB.js.map