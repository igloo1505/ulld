import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/outputTypeSchemas/TimePeriodFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindUniqueOrThrowArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodFindUniqueOrThrowArgsSchema_default = TimePeriodFindUniqueOrThrowArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodFindUniqueOrThrowArgsSchema,
  TimePeriodFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-B4SZHCZ2.js.map