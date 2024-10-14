import {
  EquationCreateNestedManyWithoutRelatedValuesInputSchema
} from "./chunk-HLUMQLQC.js";
import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-M5WMX2EH.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

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
//# sourceMappingURL=chunk-MC6RPRO6.js.map