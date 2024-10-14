import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/outputTypeSchemas/TimePeriodFindUniqueArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindUniqueArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodFindUniqueArgsSchema_default = TimePeriodFindUniqueArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodFindUniqueArgsSchema,
  TimePeriodFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-CDWGLBTP.js.map