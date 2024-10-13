import {
  DietaryItemScalarWhereWithAggregatesInputSchema
} from "./chunk-5FRFVYAN.js";
import {
  DietaryItemOrderByWithAggregationInputSchema
} from "./chunk-XE7B6OIT.js";
import {
  DietaryItemScalarFieldEnumSchema
} from "./chunk-C62SPGOO.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/DietaryItemGroupByArgsSchema.ts
import { z } from "zod";
var DietaryItemGroupByArgsSchema = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([DietaryItemOrderByWithAggregationInputSchema.array(), DietaryItemOrderByWithAggregationInputSchema]).optional(),
  by: DietaryItemScalarFieldEnumSchema.array(),
  having: DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DietaryItemGroupByArgsSchema_default = DietaryItemGroupByArgsSchema;

export {
  DietaryItemGroupByArgsSchema,
  DietaryItemGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-KL2LCOVW.js.map