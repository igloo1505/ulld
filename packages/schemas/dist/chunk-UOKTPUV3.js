import {
  BusinessContactUpdateInputSchema
} from "./chunk-GA6WAIXU.js";
import {
  BusinessContactUncheckedUpdateInputSchema
} from "./chunk-BG4ASVAJ.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-W2FX4MWS.js";

// src/database/outputTypeSchemas/BusinessContactUpdateArgsSchema.ts
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
var BusinessContactUpdateArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  data: z.union([BusinessContactUpdateInputSchema, BusinessContactUncheckedUpdateInputSchema]),
  where: BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactUpdateArgsSchema_default = BusinessContactUpdateArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactUpdateArgsSchema,
  BusinessContactUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-UOKTPUV3.js.map