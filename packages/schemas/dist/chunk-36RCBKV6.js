import {
  EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema
} from "./chunk-GRRVCPE3.js";
import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-M5WMX2EH.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

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
//# sourceMappingURL=chunk-36RCBKV6.js.map