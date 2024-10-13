// src/database/inputTypeSchemas/WaitlistRequestCreateManyInputSchema.ts
import { z } from "zod";
var WaitlistRequestCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  receivedOn: z.coerce.date().optional(),
  emailsSent: z.number().int().optional()
}).strict();
var WaitlistRequestCreateManyInputSchema_default = WaitlistRequestCreateManyInputSchema;

export {
  WaitlistRequestCreateManyInputSchema,
  WaitlistRequestCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-V5ZCEMOP.js.map