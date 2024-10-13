import {
  WaitlistRequestCreateInputSchema
} from "./chunk-ZMAYH44V.js";
import {
  WaitlistRequestUncheckedCreateInputSchema
} from "./chunk-Y6H7FTP5.js";
import {
  WaitlistRequestUpdateInputSchema
} from "./chunk-AQKSBZVZ.js";
import {
  WaitlistRequestUncheckedUpdateInputSchema
} from "./chunk-ZX62W4UO.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";

// src/database/outputTypeSchemas/WaitlistRequestUpsertArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestUpsertArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema,
  create: z.union([WaitlistRequestCreateInputSchema, WaitlistRequestUncheckedCreateInputSchema]),
  update: z.union([WaitlistRequestUpdateInputSchema, WaitlistRequestUncheckedUpdateInputSchema])
}).strict();
var WaitlistRequestUpsertArgsSchema_default = WaitlistRequestUpsertArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestUpsertArgsSchema,
  WaitlistRequestUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-HPDQRNAG.js.map