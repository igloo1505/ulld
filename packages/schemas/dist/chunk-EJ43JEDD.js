import {
  TimePeriodOrderByWithRelationInputSchema
} from "./chunk-J5RY4DJT.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/TimePeriodAggregateArgsSchema.ts
import { z } from "zod";
var TimePeriodAggregateArgsSchema = z.object({
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([TimePeriodOrderByWithRelationInputSchema.array(), TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TimePeriodAggregateArgsSchema_default = TimePeriodAggregateArgsSchema;

export {
  TimePeriodAggregateArgsSchema,
  TimePeriodAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-EJ43JEDD.js.map