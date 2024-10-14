import {
  FeatureRequestOrderByWithAggregationInputSchema
} from "./chunk-2JPRO6D7.js";
import {
  FeatureRequestScalarWhereWithAggregatesInputSchema
} from "./chunk-OWWIKXLR.js";
import {
  FeatureRequestScalarFieldEnumSchema
} from "./chunk-OUYI6IKH.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-DVDRYS7P.js";

// src/database/outputTypeSchemas/FeatureRequestGroupByArgsSchema.ts
import { z } from "zod";
var FeatureRequestGroupByArgsSchema = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([FeatureRequestOrderByWithAggregationInputSchema.array(), FeatureRequestOrderByWithAggregationInputSchema]).optional(),
  by: FeatureRequestScalarFieldEnumSchema.array(),
  having: FeatureRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var FeatureRequestGroupByArgsSchema_default = FeatureRequestGroupByArgsSchema;

export {
  FeatureRequestGroupByArgsSchema,
  FeatureRequestGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-EP7PBQBK.js.map