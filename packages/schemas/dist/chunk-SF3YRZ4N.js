import {
  DailyFocusScalarWhereWithAggregatesInputSchema
} from "./chunk-IWOGSCNQ.js";
import {
  DailyFocusOrderByWithAggregationInputSchema
} from "./chunk-VU5CGNNI.js";
import {
  DailyFocusScalarFieldEnumSchema
} from "./chunk-CPCBAQ3E.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-COZ5TAGF.js";

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
//# sourceMappingURL=chunk-SF3YRZ4N.js.map