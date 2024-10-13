import {
  BusinessContactCreateInputSchema
} from "./chunk-CETZXNRV.js";
import {
  BusinessContactUncheckedCreateInputSchema
} from "./chunk-TPFFBJTM.js";

// src/database/outputTypeSchemas/BusinessContactCreateArgsSchema.ts
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
var BusinessContactCreateArgsSchema = z.object({
  select: BusinessContactSelectSchema.optional(),
  data: z.union([BusinessContactCreateInputSchema, BusinessContactUncheckedCreateInputSchema])
}).strict();
var BusinessContactCreateArgsSchema_default = BusinessContactCreateArgsSchema;

export {
  BusinessContactSelectSchema,
  BusinessContactCreateArgsSchema,
  BusinessContactCreateArgsSchema_default
};
//# sourceMappingURL=chunk-YYRKDLQQ.js.map