// src/database/modelSchema/WaitlistRequestSchema.ts
import { z } from "zod";
var WaitlistRequestSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  receivedOn: z.coerce.date(),
  emailsSent: z.number().int()
});
var WaitlistRequestPartialSchema = WaitlistRequestSchema.partial();
var WaitlistRequestSchema_default = WaitlistRequestSchema;

export {
  WaitlistRequestSchema,
  WaitlistRequestPartialSchema,
  WaitlistRequestSchema_default
};
//# sourceMappingURL=chunk-BIYSDWDS.js.map