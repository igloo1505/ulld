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

// src/database/outputTypeSchemas/TimePeriodUpdateArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpdateArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  data: z.union([TimePeriodUpdateInputSchema, TimePeriodUncheckedUpdateInputSchema]),
  where: TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodUpdateArgsSchema_default = TimePeriodUpdateArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodUpdateArgsSchema,
  TimePeriodUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-OZHLVKMD.js.map