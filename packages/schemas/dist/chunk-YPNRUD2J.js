import {
  DailyFocusOrderByWithRelationInputSchema
} from "./chunk-GDXG4E7J.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-COZ5TAGF.js";

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
//# sourceMappingURL=chunk-YPNRUD2J.js.map