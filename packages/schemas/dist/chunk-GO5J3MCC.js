import {
  TimePeriodCreateInputSchema
} from "./chunk-G2LHGHMM.js";
import {
  TimePeriodUncheckedCreateInputSchema
} from "./chunk-OVWVGOLO.js";
import {
  TimePeriodUncheckedUpdateInputSchema
} from "./chunk-6L2PJOVQ.js";
import {
  TimePeriodUpdateInputSchema
} from "./chunk-MVSFOTBJ.js";
import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

// src/database/outputTypeSchemas/TimePeriodUpsertArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpsertArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema,
  create: z.union([TimePeriodCreateInputSchema, TimePeriodUncheckedCreateInputSchema]),
  update: z.union([TimePeriodUpdateInputSchema, TimePeriodUncheckedUpdateInputSchema])
}).strict();
var TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodUpsertArgsSchema,
  TimePeriodUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-GO5J3MCC.js.map