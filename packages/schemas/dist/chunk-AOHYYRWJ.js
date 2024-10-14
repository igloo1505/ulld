import {
  FeatureRequestOrderByWithRelationInputSchema
} from "./chunk-LQ5LKVMZ.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-RQECGBYQ.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-DVDRYS7P.js";

// src/database/outputTypeSchemas/FeatureRequestAggregateArgsSchema.ts
import { z } from "zod";
var FeatureRequestAggregateArgsSchema = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([FeatureRequestOrderByWithRelationInputSchema.array(), FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var FeatureRequestAggregateArgsSchema_default = FeatureRequestAggregateArgsSchema;

export {
  FeatureRequestAggregateArgsSchema,
  FeatureRequestAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-AOHYYRWJ.js.map