import {
  TimePeriodOrderByWithRelationInputSchema
} from "./chunk-GRGGNGU4.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-6UHSZLO4.js.map