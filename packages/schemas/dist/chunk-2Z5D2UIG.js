import {
  WaitlistRequestUpdateInputSchema
} from "./chunk-AQKSBZVZ.js";
import {
  WaitlistRequestUncheckedUpdateInputSchema
} from "./chunk-ZX62W4UO.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";

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
//# sourceMappingURL=chunk-2Z5D2UIG.js.map