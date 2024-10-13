// src/database/inputTypeSchemas/BusinessContactSelectSchema.ts
import { z } from "zod";
var BusinessContactSelectSchema = z.object({
  id: z.boolean().optional(),
  companyName: z.boolean().optional(),
  contactName: z.boolean().optional(),
  contactPreference: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  message: z.boolean().optional(),
  purpose: z.boolean().optional()
}).strict();
var BusinessContactSelectSchema_default = BusinessContactSelectSchema;
export {
  BusinessContactSelectSchema,
  BusinessContactSelectSchema_default as default
};
//# sourceMappingURL=BusinessContactSelectSchema.js.map