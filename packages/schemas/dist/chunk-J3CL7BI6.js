import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-37QIGEAZ.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";

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
//# sourceMappingURL=chunk-J3CL7BI6.js.map