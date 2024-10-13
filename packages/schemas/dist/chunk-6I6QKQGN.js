import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-5C7OOAJR.js";
import {
  RelatedValuesOrderByWithRelationInputSchema
} from "./chunk-L7F5F2DA.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";
import {
  RelatedValuesScalarFieldEnumSchema
} from "./chunk-SFZUJP6U.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/RelatedValuesFindFirstArgsSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindFirstArgsSchema = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([RelatedValuesOrderByWithRelationInputSchema.array(), RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: RelatedValuesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([RelatedValuesScalarFieldEnumSchema, RelatedValuesScalarFieldEnumSchema.array()]).optional()
}).strict();
var RelatedValuesFindFirstArgsSchema_default = RelatedValuesFindFirstArgsSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesFindFirstArgsSchema,
  RelatedValuesFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-6I6QKQGN.js.map