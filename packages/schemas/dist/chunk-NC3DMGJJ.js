import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-M5WMX2EH.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedCreateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedCreateWithoutEquationsInputSchema = z.object({
  id: z.number().int().optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedCreateWithoutEquationsInputSchema_default = RelatedValuesUncheckedCreateWithoutEquationsInputSchema;

export {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema,
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-NC3DMGJJ.js.map