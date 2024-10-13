// src/database/inputTypeSchemas/RelatedValuesUpdateequationIdInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateequationIdInputSchema = z.object({
  set: z.number().array().optional(),
  push: z.union([z.number(), z.number().array()]).optional()
}).strict();
var RelatedValuesUpdateequationIdInputSchema_default = RelatedValuesUpdateequationIdInputSchema;

export {
  RelatedValuesUpdateequationIdInputSchema,
  RelatedValuesUpdateequationIdInputSchema_default
};
//# sourceMappingURL=chunk-FE5C26IK.js.map