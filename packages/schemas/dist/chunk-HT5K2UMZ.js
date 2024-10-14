import {
  DietaryItemScalarWhereWithAggregatesInputSchema
} from "./chunk-QRPQ6ZFR.js";
import {
  DietaryItemOrderByWithAggregationInputSchema
} from "./chunk-FJMP4BZK.js";
import {
  DietaryItemScalarFieldEnumSchema
} from "./chunk-ZA3KL7IQ.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-HT5K2UMZ.js.map