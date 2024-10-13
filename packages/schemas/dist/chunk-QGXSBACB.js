import {
  RelatedValuesUncheckedUpdateInputSchema
} from "./chunk-HNT7W5LL.js";
import {
  RelatedValuesUpdateInputSchema
} from "./chunk-NV5NGBIA.js";
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

// src/database/outputTypeSchemas/RelatedValuesUpdateArgsSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesUpdateArgsSchema = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  data: z.union([RelatedValuesUpdateInputSchema, RelatedValuesUncheckedUpdateInputSchema]),
  where: RelatedValuesWhereUniqueInputSchema
}).strict();
var RelatedValuesUpdateArgsSchema_default = RelatedValuesUpdateArgsSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesUpdateArgsSchema,
  RelatedValuesUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-QGXSBACB.js.map