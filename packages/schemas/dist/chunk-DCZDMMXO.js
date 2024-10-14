import {
  IntNullableListFilterSchema
} from "./chunk-YSW3P2HE.js";
import {
  JsonFilterSchema
} from "./chunk-V2TZ67XY.js";
import {
  FloatFilterSchema
} from "./chunk-KRPE75Q3.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";

// src/database/inputTypeSchemas/RelatedValuesScalarWhereInputSchema.ts
import { z } from "zod";
var RelatedValuesScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => RelatedValuesScalarWhereInputSchema), z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => RelatedValuesScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RelatedValuesScalarWhereInputSchema), z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  input: z.lazy(() => JsonFilterSchema).optional(),
  output: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  equationId: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereInputSchema_default = RelatedValuesScalarWhereInputSchema;

export {
  RelatedValuesScalarWhereInputSchema,
  RelatedValuesScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-DCZDMMXO.js.map