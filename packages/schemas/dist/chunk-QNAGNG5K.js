import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-W2FX4MWS.js";

// src/database/outputTypeSchemas/BusinessContactDeleteArgsSchema.ts
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
var BusinessContactDeleteArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactDeleteArgsSchema_default = BusinessContactDeleteArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactDeleteArgsSchema,
  BusinessContactDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-QNAGNG5K.js.map