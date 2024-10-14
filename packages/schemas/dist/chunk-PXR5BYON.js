import {
  WaitlistRequestCreateInputSchema
} from "./chunk-4DF373JJ.js";
import {
  WaitlistRequestUncheckedCreateInputSchema
} from "./chunk-SCT2FHZ2.js";

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
//# sourceMappingURL=chunk-PXR5BYON.js.map