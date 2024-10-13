import {
  RelatedValuesCreateInputSchema
} from "./chunk-TZ44ZN3M.js";
import {
  RelatedValuesUncheckedCreateInputSchema
} from "./chunk-YEFJLSCD.js";
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

// src/database/outputTypeSchemas/RelatedValuesUpsertArgsSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesUpsertArgsSchema = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  where: RelatedValuesWhereUniqueInputSchema,
  create: z.union([RelatedValuesCreateInputSchema, RelatedValuesUncheckedCreateInputSchema]),
  update: z.union([RelatedValuesUpdateInputSchema, RelatedValuesUncheckedUpdateInputSchema])
}).strict();
var RelatedValuesUpsertArgsSchema_default = RelatedValuesUpsertArgsSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesUpsertArgsSchema,
  RelatedValuesUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-GYVMVPXT.js.map