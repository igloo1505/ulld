import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema.ts
import { z } from "zod";
var WaitlistRequestUpdateManyMutationInputSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUpdateManyMutationInputSchema_default = WaitlistRequestUpdateManyMutationInputSchema;

export {
  WaitlistRequestUpdateManyMutationInputSchema,
  WaitlistRequestUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-J5BWK3GZ.js.map