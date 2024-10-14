import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/WaitlistRequestUpdateInputSchema.ts
import { z } from "zod";
var WaitlistRequestUpdateInputSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUpdateInputSchema_default = WaitlistRequestUpdateInputSchema;

export {
  WaitlistRequestUpdateInputSchema,
  WaitlistRequestUpdateInputSchema_default
};
//# sourceMappingURL=chunk-YFCX6XSR.js.map