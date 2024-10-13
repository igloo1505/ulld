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

// src/database/inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateManyMutationInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUpdateManyMutationInputSchema_default = RelatedValuesUpdateManyMutationInputSchema;

export {
  RelatedValuesUpdateManyMutationInputSchema,
  RelatedValuesUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-OJECK4MZ.js.map