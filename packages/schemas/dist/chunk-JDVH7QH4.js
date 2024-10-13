import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateInputSchema_default = GoogleCalendarAuthUncheckedUpdateInputSchema;

export {
  GoogleCalendarAuthUncheckedUpdateInputSchema,
  GoogleCalendarAuthUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-JDVH7QH4.js.map