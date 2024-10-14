// src/database/inputTypeSchemas/FeatureRequestUpdateuserBaseInputSchema.ts
import { z } from "zod";
var FeatureRequestUpdateuserBaseInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var FeatureRequestUpdateuserBaseInputSchema_default = FeatureRequestUpdateuserBaseInputSchema;

export {
  FeatureRequestUpdateuserBaseInputSchema,
  FeatureRequestUpdateuserBaseInputSchema_default
};
//# sourceMappingURL=chunk-O2N5IA22.js.map