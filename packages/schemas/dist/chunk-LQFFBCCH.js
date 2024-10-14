import {
  EquationUpdateManyWithoutRelatedValuesNestedInputSchema
} from "./chunk-DG473AKZ.js";
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

// src/database/inputTypeSchemas/RelatedValuesUpdateInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();
var RelatedValuesUpdateInputSchema_default = RelatedValuesUpdateInputSchema;

export {
  RelatedValuesUpdateInputSchema,
  RelatedValuesUpdateInputSchema_default
};
//# sourceMappingURL=chunk-LQFFBCCH.js.map