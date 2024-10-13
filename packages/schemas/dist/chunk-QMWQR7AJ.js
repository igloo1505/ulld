import {
  RelatedValuesCreateInputSchema
} from "./chunk-TZ44ZN3M.js";
import {
  RelatedValuesUncheckedCreateInputSchema
} from "./chunk-YEFJLSCD.js";
import {
  EquationFindManyArgsSchema,
  RelatedValuesIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-5C7OOAJR.js";

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
//# sourceMappingURL=chunk-QMWQR7AJ.js.map