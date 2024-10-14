// src/database/modelSchema/BusinessContactSchema.ts
import { z } from "zod";
var BusinessContactSchema = z.object({
  id: z.number().int(),
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  message: z.string(),
  purpose: z.string().nullable()
});
var BusinessContactPartialSchema = BusinessContactSchema.partial();
var BusinessContactSchema_default = BusinessContactSchema;

export {
  BusinessContactSchema,
  BusinessContactPartialSchema,
  BusinessContactSchema_default
};
//# sourceMappingURL=chunk-WSFJB6XX.js.map