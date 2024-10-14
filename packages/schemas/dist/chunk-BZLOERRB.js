import {
  RelatedValuesCreateInputSchema
} from "./chunk-MC6RPRO6.js";
import {
  RelatedValuesUncheckedCreateInputSchema
} from "./chunk-36RCBKV6.js";
import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-37QIGEAZ.js";

// src/database/outputTypeSchemas/RelatedValuesCreateArgsSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesCreateArgsSchema = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  data: z.union([RelatedValuesCreateInputSchema, RelatedValuesUncheckedCreateInputSchema])
}).strict();
var RelatedValuesCreateArgsSchema_default = RelatedValuesCreateArgsSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesCreateArgsSchema,
  RelatedValuesCreateArgsSchema_default
};
//# sourceMappingURL=chunk-BZLOERRB.js.map