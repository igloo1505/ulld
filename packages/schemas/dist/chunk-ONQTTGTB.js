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
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema;

export {
  RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema,
  RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-ONQTTGTB.js.map