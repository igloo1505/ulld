import {
  WaitlistRequestCreateInputSchema
} from "./chunk-4DF373JJ.js";
import {
  WaitlistRequestUncheckedCreateInputSchema
} from "./chunk-SCT2FHZ2.js";
import {
  WaitlistRequestUpdateInputSchema
} from "./chunk-YFCX6XSR.js";
import {
  WaitlistRequestUncheckedUpdateInputSchema
} from "./chunk-5U5F5YDO.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";

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
//# sourceMappingURL=chunk-QWVUOR5I.js.map