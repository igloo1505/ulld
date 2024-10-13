import {
  EquationListRelationFilterSchema,
  RelatedValuesWhereInputSchema
} from "./chunk-XHIJ766H.js";
import {
  JsonFilterSchema
} from "./chunk-P3VE75MX.js";
import {
  FloatFilterSchema
} from "./chunk-DX2UN7V4.js";

// src/database/inputTypeSchemas/RelatedValuesWhereUniqueInputSchema.ts
import { z } from "zod";
var RelatedValuesWhereUniqueInputSchema = z.union([
  z.object({
    id: z.number().int(),
    equationId: z.number().int().array()
  }),
  z.object({
    id: z.number().int()
  }),
  z.object({
    equationId: z.number().int().array()
  })
]).and(z.object({
  id: z.number().int().optional(),
  equationId: z.number().int().array().optional(),
  AND: z.union([z.lazy(() => RelatedValuesWhereInputSchema), z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RelatedValuesWhereInputSchema), z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  input: z.lazy(() => JsonFilterSchema).optional(),
  output: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict());
var RelatedValuesWhereUniqueInputSchema_default = RelatedValuesWhereUniqueInputSchema;

export {
  RelatedValuesWhereUniqueInputSchema,
  RelatedValuesWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-SSNELDXU.js.map