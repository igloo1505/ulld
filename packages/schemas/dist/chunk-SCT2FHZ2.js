// src/database/inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.ts
import { z } from "zod";
var WaitlistRequestUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  receivedOn: z.coerce.date().optional(),
  emailsSent: z.number().int().optional()
}).strict();
var WaitlistRequestUncheckedCreateInputSchema_default = WaitlistRequestUncheckedCreateInputSchema;

export {
  WaitlistRequestUncheckedCreateInputSchema,
  WaitlistRequestUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-SCT2FHZ2.js.map