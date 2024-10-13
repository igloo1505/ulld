import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateInputSchema_default = GoogleCalendarAuthUpdateInputSchema;

export {
  GoogleCalendarAuthUpdateInputSchema,
  GoogleCalendarAuthUpdateInputSchema_default
};
//# sourceMappingURL=chunk-P62FON36.js.map