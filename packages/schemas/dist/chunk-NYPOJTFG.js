import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-NYPOJTFG.js.map