import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-5C7OOAJR.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";

// src/database/outputTypeSchemas/RelatedValuesFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindUniqueOrThrowArgsSchema = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  where: RelatedValuesWhereUniqueInputSchema
}).strict();
var RelatedValuesFindUniqueOrThrowArgsSchema_default = RelatedValuesFindUniqueOrThrowArgsSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesFindUniqueOrThrowArgsSchema,
  RelatedValuesFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-6YMQMO7J.js.map