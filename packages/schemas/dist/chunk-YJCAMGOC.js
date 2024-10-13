import {
  DailyFocusOrderByWithRelationInputSchema
} from "./chunk-QOXHHMBW.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-BZDWBW7V.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-I36SKJDA.js";

// src/database/outputTypeSchemas/DailyFocusAggregateArgsSchema.ts
import { z } from "zod";
var DailyFocusAggregateArgsSchema = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([DailyFocusOrderByWithRelationInputSchema.array(), DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DailyFocusAggregateArgsSchema_default = DailyFocusAggregateArgsSchema;

export {
  DailyFocusAggregateArgsSchema,
  DailyFocusAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-YJCAMGOC.js.map