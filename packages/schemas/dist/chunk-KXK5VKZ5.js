import {
  RelatedValuesScalarWhereWithAggregatesInputSchema
} from "./chunk-OR4VSMTT.js";
import {
  RelatedValuesOrderByWithAggregationInputSchema
} from "./chunk-BC2VEBD7.js";
import {
  RelatedValuesScalarFieldEnumSchema
} from "./chunk-SFZUJP6U.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-KXK5VKZ5.js.map