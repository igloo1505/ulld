import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DailyFocusUpdateInputSchema.ts
import { z } from "zod";
var DailyFocusUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUpdateInputSchema_default = DailyFocusUpdateInputSchema;

export {
  DailyFocusUpdateInputSchema,
  DailyFocusUpdateInputSchema_default
};
//# sourceMappingURL=chunk-AZXGKIVS.js.map