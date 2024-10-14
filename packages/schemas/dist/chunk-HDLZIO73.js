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
//# sourceMappingURL=chunk-HDLZIO73.js.map