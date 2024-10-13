// src/database/inputTypeSchemas/WaitlistRequestCreateInputSchema.ts
import { z } from "zod";
var WaitlistRequestCreateInputSchema = z.object({
  email: z.string(),
  receivedOn: z.coerce.date().optional(),
  emailsSent: z.number().int().optional()
}).strict();
var WaitlistRequestCreateInputSchema_default = WaitlistRequestCreateInputSchema;

export {
  WaitlistRequestCreateInputSchema,
  WaitlistRequestCreateInputSchema_default
};
//# sourceMappingURL=chunk-ZMAYH44V.js.map