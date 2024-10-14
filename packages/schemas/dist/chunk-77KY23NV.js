import {
  DietScalarWhereWithAggregatesInputSchema
} from "./chunk-U7YE55KC.js";
import {
  DietOrderByWithAggregationInputSchema
} from "./chunk-UPEVDFY2.js";
import {
  DietScalarFieldEnumSchema
} from "./chunk-VPDMFHNI.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/DietGroupByArgsSchema.ts
import { z } from "zod";
var DietGroupByArgsSchema = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([DietOrderByWithAggregationInputSchema.array(), DietOrderByWithAggregationInputSchema]).optional(),
  by: DietScalarFieldEnumSchema.array(),
  having: DietScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DietGroupByArgsSchema_default = DietGroupByArgsSchema;

export {
  DietGroupByArgsSchema,
  DietGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-77KY23NV.js.map