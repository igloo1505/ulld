import {
  FeatureRequestOrderByWithAggregationInputSchema
} from "./chunk-NP7CDFAN.js";
import {
  FeatureRequestScalarWhereWithAggregatesInputSchema
} from "./chunk-IAZFIFMA.js";
import {
  FeatureRequestScalarFieldEnumSchema
} from "./chunk-UA6KKIKA.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-JXUPWJVB.js";

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
//# sourceMappingURL=chunk-6O46ERJC.js.map