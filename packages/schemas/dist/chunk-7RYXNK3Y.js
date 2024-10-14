import {
  RelatedValuesUpdateequationIdInputSchema
} from "./chunk-ZAB5GZST.js";
import {
  FloatFieldUpdateOperationsInputSchema
} from "./chunk-IWZ75T2C.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/RelatedValuesUpdateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateWithoutEquationsInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUpdateWithoutEquationsInputSchema_default = RelatedValuesUpdateWithoutEquationsInputSchema;

export {
  RelatedValuesUpdateWithoutEquationsInputSchema,
  RelatedValuesUpdateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-7RYXNK3Y.js.map