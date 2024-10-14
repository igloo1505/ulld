// src/database/inputTypeSchemas/FeatureRequestUpdatecategoryInputSchema.ts
import { z } from "zod";
var FeatureRequestUpdatecategoryInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var FeatureRequestUpdatecategoryInputSchema_default = FeatureRequestUpdatecategoryInputSchema;

export {
  FeatureRequestUpdatecategoryInputSchema,
  FeatureRequestUpdatecategoryInputSchema_default
};
//# sourceMappingURL=chunk-E73MKCYZ.js.map