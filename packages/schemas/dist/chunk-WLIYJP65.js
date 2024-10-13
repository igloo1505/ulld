import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-WLIYJP65.js.map