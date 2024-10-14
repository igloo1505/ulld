import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-SDSWJTRD.js.map