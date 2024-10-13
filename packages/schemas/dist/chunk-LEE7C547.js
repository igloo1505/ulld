import {
  WaitlistRequestCreateInputSchema
} from "./chunk-ZMAYH44V.js";
import {
  WaitlistRequestUncheckedCreateInputSchema
} from "./chunk-Y6H7FTP5.js";

// src/database/outputTypeSchemas/WaitlistRequestCreateArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestCreateArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: z.union([WaitlistRequestCreateInputSchema, WaitlistRequestUncheckedCreateInputSchema])
}).strict();
var WaitlistRequestCreateArgsSchema_default = WaitlistRequestCreateArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestCreateArgsSchema,
  WaitlistRequestCreateArgsSchema_default
};
//# sourceMappingURL=chunk-LEE7C547.js.map