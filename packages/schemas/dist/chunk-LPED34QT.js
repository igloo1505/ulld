import {
  RelatedValuesOrderByWithRelationInputSchema
} from "./chunk-G75HTSBH.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-LPED34QT.js.map