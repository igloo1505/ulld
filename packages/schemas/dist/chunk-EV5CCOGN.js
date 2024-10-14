import {
  TimePeriodUncheckedUpdateInputSchema
} from "./chunk-XBQMIWWE.js";
import {
  TimePeriodUpdateInputSchema
} from "./chunk-RXYAJWH7.js";
import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

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
//# sourceMappingURL=chunk-EV5CCOGN.js.map