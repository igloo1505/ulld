import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema.ts
import { z } from "zod";
var WaitlistRequestUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUncheckedUpdateInputSchema_default = WaitlistRequestUncheckedUpdateInputSchema;

export {
  WaitlistRequestUncheckedUpdateInputSchema,
  WaitlistRequestUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-5U5F5YDO.js.map