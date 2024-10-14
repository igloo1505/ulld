import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-F6RVJCDM.js";

// src/database/outputTypeSchemas/BusinessContactFindUniqueArgsSchema.ts
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
var BusinessContactFindUniqueArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactFindUniqueArgsSchema_default = BusinessContactFindUniqueArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactFindUniqueArgsSchema,
  BusinessContactFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-2BVILIIF.js.map