import {
  BusinessContactOrderByWithRelationInputSchema
} from "./chunk-UMC2HT6W.js";
import {
  BusinessContactScalarFieldEnumSchema
} from "./chunk-G5FF5Q2V.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-F6RVJCDM.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-4TBUKZ6H.js";

// src/database/outputTypeSchemas/BusinessContactFindManyArgsSchema.ts
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
var BusinessContactFindManyArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([BusinessContactOrderByWithRelationInputSchema.array(), BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: BusinessContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([BusinessContactScalarFieldEnumSchema, BusinessContactScalarFieldEnumSchema.array()]).optional()
}).strict();
var BusinessContactFindManyArgsSchema_default = BusinessContactFindManyArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactFindManyArgsSchema,
  BusinessContactFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-Z3NPJFI7.js.map