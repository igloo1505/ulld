import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-F6RVJCDM.js";

// src/database/outputTypeSchemas/BusinessContactFindUniqueOrThrowArgsSchema.ts
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
var BusinessContactFindUniqueOrThrowArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactFindUniqueOrThrowArgsSchema_default = BusinessContactFindUniqueOrThrowArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactFindUniqueOrThrowArgsSchema,
  BusinessContactFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-JFXM3PX5.js.map