import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/WaitlistRequestUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var WaitlistRequestUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUncheckedUpdateManyInputSchema_default = WaitlistRequestUncheckedUpdateManyInputSchema;

export {
  WaitlistRequestUncheckedUpdateManyInputSchema,
  WaitlistRequestUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-4WTPAURE.js.map