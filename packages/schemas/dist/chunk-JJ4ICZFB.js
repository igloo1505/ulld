import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-5GXXSMO2.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/RelatedValuesCreateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateWithoutEquationsInputSchema = z.object({
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema;

export {
  RelatedValuesCreateWithoutEquationsInputSchema,
  RelatedValuesCreateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-JJ4ICZFB.js.map