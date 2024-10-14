import {
  BusinessContactCreateInputSchema
} from "./chunk-N7M6GREX.js";
import {
  BusinessContactUncheckedCreateInputSchema
} from "./chunk-7CXV7GQ2.js";
import {
  BusinessContactUpdateInputSchema
} from "./chunk-NXJYBX27.js";
import {
  BusinessContactUncheckedUpdateInputSchema
} from "./chunk-L7NTD4HM.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-F6RVJCDM.js";

// src/database/outputTypeSchemas/BusinessContactUpsertArgsSchema.ts
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
var BusinessContactUpsertArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereUniqueInputSchema,
  create: z.union([BusinessContactCreateInputSchema, BusinessContactUncheckedCreateInputSchema]),
  update: z.union([BusinessContactUpdateInputSchema, BusinessContactUncheckedUpdateInputSchema])
}).strict();
var BusinessContactUpsertArgsSchema_default = BusinessContactUpsertArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactUpsertArgsSchema,
  BusinessContactUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-2EWSEO43.js.map