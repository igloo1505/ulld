import {
  WaitlistRequestUpdateInputSchema
} from "./chunk-YFCX6XSR.js";
import {
  WaitlistRequestUncheckedUpdateInputSchema
} from "./chunk-5U5F5YDO.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";

// src/database/outputTypeSchemas/WaitlistRequestUpdateArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestUpdateArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: z.union([WaitlistRequestUpdateInputSchema, WaitlistRequestUncheckedUpdateInputSchema]),
  where: WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestUpdateArgsSchema_default = WaitlistRequestUpdateArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestUpdateArgsSchema,
  WaitlistRequestUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-GTPE5B5G.js.map