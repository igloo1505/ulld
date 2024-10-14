import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";

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
//# sourceMappingURL=chunk-5DI4E745.js.map