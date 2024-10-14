import {
  RelatedValuesScalarWhereWithAggregatesInputSchema
} from "./chunk-WZTHW4BQ.js";
import {
  RelatedValuesOrderByWithAggregationInputSchema
} from "./chunk-6D4T436N.js";
import {
  RelatedValuesScalarFieldEnumSchema
} from "./chunk-A5OL2AEL.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/RelatedValuesGroupByArgsSchema.ts
import { z } from "zod";
var RelatedValuesGroupByArgsSchema = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([RelatedValuesOrderByWithAggregationInputSchema.array(), RelatedValuesOrderByWithAggregationInputSchema]).optional(),
  by: RelatedValuesScalarFieldEnumSchema.array(),
  having: RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var RelatedValuesGroupByArgsSchema_default = RelatedValuesGroupByArgsSchema;

export {
  RelatedValuesGroupByArgsSchema,
  RelatedValuesGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-BG3HVALF.js.map