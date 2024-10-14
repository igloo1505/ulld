import {
  EquationListRelationFilterSchema,
  RelatedValuesWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  JsonFilterSchema
} from "./chunk-V2TZ67XY.js";
import {
  FloatFilterSchema
} from "./chunk-KRPE75Q3.js";

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
//# sourceMappingURL=chunk-U7B5SDOA.js.map