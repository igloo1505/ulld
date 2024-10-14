import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUpdateManyMutationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  auth: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var GoogleCalendarAuthUpdateManyMutationInputSchema_default = GoogleCalendarAuthUpdateManyMutationInputSchema;

export {
  GoogleCalendarAuthUpdateManyMutationInputSchema,
  GoogleCalendarAuthUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-AHJXWA5E.js.map