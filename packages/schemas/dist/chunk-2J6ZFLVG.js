import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

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
//# sourceMappingURL=chunk-2J6ZFLVG.js.map