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
//# sourceMappingURL=chunk-NS4XPLVX.js.map