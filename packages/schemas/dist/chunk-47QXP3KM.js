import {
  RelatedValuesUpdateequationIdInputSchema
} from "./chunk-FE5C26IK.js";
import {
  FloatFieldUpdateOperationsInputSchema
} from "./chunk-ZJLZLGPF.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedUpdateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedUpdateWithoutEquationsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedUpdateWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateWithoutEquationsInputSchema;

export {
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema,
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-47QXP3KM.js.map