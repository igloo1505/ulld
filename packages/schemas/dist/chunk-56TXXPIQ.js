import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-M5WMX2EH.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/RelatedValuesCreateManyInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateManyInputSchema_default = RelatedValuesCreateManyInputSchema;

export {
  RelatedValuesCreateManyInputSchema,
  RelatedValuesCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-56TXXPIQ.js.map