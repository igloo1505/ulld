import {
  DietScalarWhereWithAggregatesInputSchema
} from "./chunk-ZSLXFCFZ.js";
import {
  DietOrderByWithAggregationInputSchema
} from "./chunk-AMGZ6FCZ.js";
import {
  DietScalarFieldEnumSchema
} from "./chunk-N2FLSVTN.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-QDOPBWH7.js.map