// src/database/inputTypeSchemas/BusinessContactCreateManyInputSchema.ts
import { z } from "zod";
var BusinessContactCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  purpose: z.string().optional().nullable()
}).strict();
var BusinessContactCreateManyInputSchema_default = BusinessContactCreateManyInputSchema;

export {
  BusinessContactCreateManyInputSchema,
  BusinessContactCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-SONJ7NB4.js.map