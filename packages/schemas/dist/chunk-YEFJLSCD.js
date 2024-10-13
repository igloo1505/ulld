import {
  EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema
} from "./chunk-I62GELDV.js";
import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-5GXXSMO2.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedCreateInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();
var RelatedValuesUncheckedCreateInputSchema_default = RelatedValuesUncheckedCreateInputSchema;

export {
  RelatedValuesUncheckedCreateInputSchema,
  RelatedValuesUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-YEFJLSCD.js.map