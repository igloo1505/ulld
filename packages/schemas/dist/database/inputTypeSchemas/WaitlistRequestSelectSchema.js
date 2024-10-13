// src/database/inputTypeSchemas/WaitlistRequestSelectSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestSelectSchema_default = WaitlistRequestSelectSchema;
export {
  WaitlistRequestSelectSchema,
  WaitlistRequestSelectSchema_default as default
};
//# sourceMappingURL=WaitlistRequestSelectSchema.js.map