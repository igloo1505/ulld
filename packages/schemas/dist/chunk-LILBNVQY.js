import {
  DailyFocusScalarWhereWithAggregatesInputSchema
} from "./chunk-WDP5VRN6.js";
import {
  DailyFocusOrderByWithAggregationInputSchema
} from "./chunk-ROY4KJH3.js";
import {
  DailyFocusScalarFieldEnumSchema
} from "./chunk-RKTGUIGE.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-I36SKJDA.js";

// src/database/outputTypeSchemas/DailyFocusGroupByArgsSchema.ts
import { z } from "zod";
var DailyFocusGroupByArgsSchema = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([DailyFocusOrderByWithAggregationInputSchema.array(), DailyFocusOrderByWithAggregationInputSchema]).optional(),
  by: DailyFocusScalarFieldEnumSchema.array(),
  having: DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DailyFocusGroupByArgsSchema_default = DailyFocusGroupByArgsSchema;

export {
  DailyFocusGroupByArgsSchema,
  DailyFocusGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-LILBNVQY.js.map