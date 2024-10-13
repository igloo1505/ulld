import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";

// src/database/outputTypeSchemas/WaitlistRequestFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestFindUniqueOrThrowArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestFindUniqueOrThrowArgsSchema_default = WaitlistRequestFindUniqueOrThrowArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestFindUniqueOrThrowArgsSchema,
  WaitlistRequestFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-BUQG7P2S.js.map