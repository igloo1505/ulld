import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-M5WMX2EH.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/RelatedValuesCreateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateWithoutEquationsInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema;

export {
  RelatedValuesCreateWithoutEquationsInputSchema,
  RelatedValuesCreateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-23VC2G3X.js.map