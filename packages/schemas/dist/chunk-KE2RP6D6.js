import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedUpdateManyInputSchema_default = GoogleCalendarAuthUncheckedUpdateManyInputSchema;

export {
  GoogleCalendarAuthUncheckedUpdateManyInputSchema,
  GoogleCalendarAuthUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-KE2RP6D6.js.map