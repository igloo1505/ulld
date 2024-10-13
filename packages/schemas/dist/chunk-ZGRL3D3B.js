import {
  BusinessContactCreateInputSchema
} from "./chunk-CETZXNRV.js";
import {
  BusinessContactUncheckedCreateInputSchema
} from "./chunk-TPFFBJTM.js";
import {
  BusinessContactUpdateInputSchema
} from "./chunk-GA6WAIXU.js";
import {
  BusinessContactUncheckedUpdateInputSchema
} from "./chunk-BG4ASVAJ.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-W2FX4MWS.js";

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
//# sourceMappingURL=chunk-ZGRL3D3B.js.map