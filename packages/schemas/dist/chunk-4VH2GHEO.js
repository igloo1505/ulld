import {
  RelatedValuesCreateequationIdInputSchema
} from "./chunk-5GXXSMO2.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedCreateWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedCreateWithoutEquationsInputSchema = z.object({
  id: z.number().int().optional(),
  input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  output: z.number(),
  equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedCreateWithoutEquationsInputSchema_default = RelatedValuesUncheckedCreateWithoutEquationsInputSchema;

export {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema,
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-4VH2GHEO.js.map