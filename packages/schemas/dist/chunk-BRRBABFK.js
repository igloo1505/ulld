import {
  RelatedValuesOrderByWithRelationInputSchema
} from "./chunk-L7F5F2DA.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/RelatedValuesAggregateArgsSchema.ts
import { z } from "zod";
var RelatedValuesAggregateArgsSchema = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([RelatedValuesOrderByWithRelationInputSchema.array(), RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: RelatedValuesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var RelatedValuesAggregateArgsSchema_default = RelatedValuesAggregateArgsSchema;

export {
  RelatedValuesAggregateArgsSchema,
  RelatedValuesAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-BRRBABFK.js.map