import {
  EquationUpdateManyWithoutRelatedValuesNestedInputSchema
} from "./chunk-OCMJ7DCO.js";
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
//# sourceMappingURL=chunk-NV5NGBIA.js.map