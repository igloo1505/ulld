import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-5GXXSMO2.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

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
//# sourceMappingURL=chunk-HQR3K3BW.js.map