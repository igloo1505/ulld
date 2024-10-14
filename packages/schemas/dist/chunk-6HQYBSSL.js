import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-37QIGEAZ.js";
import {
  RelatedValuesOrderByWithRelationInputSchema
} from "./chunk-G75HTSBH.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";
import {
  RelatedValuesScalarFieldEnumSchema
} from "./chunk-A5OL2AEL.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-6HQYBSSL.js.map