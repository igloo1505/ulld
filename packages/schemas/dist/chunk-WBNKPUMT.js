import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";

// src/database/outputTypeSchemas/WaitlistRequestFindUniqueArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestFindUniqueArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestFindUniqueArgsSchema_default = WaitlistRequestFindUniqueArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestFindUniqueArgsSchema,
  WaitlistRequestFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-WBNKPUMT.js.map