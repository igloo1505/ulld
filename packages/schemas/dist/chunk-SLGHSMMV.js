import {
  RelatedValuesCreateInputSchema
} from "./chunk-MC6RPRO6.js";
import {
  RelatedValuesUncheckedCreateInputSchema
} from "./chunk-36RCBKV6.js";
import {
  RelatedValuesUncheckedUpdateInputSchema
} from "./chunk-BASEGLRN.js";
import {
  RelatedValuesUpdateInputSchema
} from "./chunk-LQFFBCCH.js";
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
//# sourceMappingURL=chunk-SLGHSMMV.js.map