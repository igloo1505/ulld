import {
  FeatureRequestOrderByWithRelationInputSchema
} from "./chunk-ARBAHK5O.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-JXUPWJVB.js";

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
//# sourceMappingURL=chunk-YJ6FGAVP.js.map