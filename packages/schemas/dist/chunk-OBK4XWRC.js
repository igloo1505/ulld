import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/outputTypeSchemas/TimePeriodDeleteArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodDeleteArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodDeleteArgsSchema_default = TimePeriodDeleteArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodDeleteArgsSchema,
  TimePeriodDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-OBK4XWRC.js.map