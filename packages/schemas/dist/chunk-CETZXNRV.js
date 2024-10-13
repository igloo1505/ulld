// src/database/inputTypeSchemas/BusinessContactCreateInputSchema.ts
import { z } from "zod";
var BusinessContactCreateInputSchema = z.object({
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  purpose: z.string().optional().nullable()
}).strict();
var BusinessContactCreateInputSchema_default = BusinessContactCreateInputSchema;

export {
  BusinessContactCreateInputSchema,
  BusinessContactCreateInputSchema_default
};
//# sourceMappingURL=chunk-CETZXNRV.js.map