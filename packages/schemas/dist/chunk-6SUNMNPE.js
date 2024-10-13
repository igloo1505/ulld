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
//# sourceMappingURL=chunk-6SUNMNPE.js.map