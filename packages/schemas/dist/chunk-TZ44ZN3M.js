import {
  EquationCreateNestedManyWithoutRelatedValuesInputSchema
} from "./chunk-EOZ3W3UC.js";
import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-5GXXSMO2.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/RelatedValuesCreateInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();
var RelatedValuesCreateInputSchema_default = RelatedValuesCreateInputSchema;

export {
  RelatedValuesCreateInputSchema,
  RelatedValuesCreateInputSchema_default
};
//# sourceMappingURL=chunk-TZ44ZN3M.js.map