import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";

// src/database/outputTypeSchemas/WaitlistRequestDeleteArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestDeleteArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestDeleteArgsSchema_default = WaitlistRequestDeleteArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestDeleteArgsSchema,
  WaitlistRequestDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-SVO74FIR.js.map