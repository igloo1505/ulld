import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-XGFTP4FA.js.map