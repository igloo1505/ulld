// src/database/inputTypeSchemas/BusinessContactUncheckedCreateInputSchema.ts
import { z } from "zod";
var BusinessContactUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  purpose: z.string().optional().nullable()
}).strict();
var BusinessContactUncheckedCreateInputSchema_default = BusinessContactUncheckedCreateInputSchema;

export {
  BusinessContactUncheckedCreateInputSchema,
  BusinessContactUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-7CXV7GQ2.js.map