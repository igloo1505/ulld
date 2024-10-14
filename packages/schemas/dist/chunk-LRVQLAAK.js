// src/database/modelSchema/FeatureRequestSchema.ts
import { z } from "zod";
var FeatureRequestSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  message: z.string(),
  category: z.string().array(),
  userBase: z.string().array(),
  receivedOn: z.coerce.date()
});
var FeatureRequestPartialSchema = FeatureRequestSchema.partial();
var FeatureRequestSchema_default = FeatureRequestSchema;

export {
  FeatureRequestSchema,
  FeatureRequestPartialSchema,
  FeatureRequestSchema_default
};
//# sourceMappingURL=chunk-LRVQLAAK.js.map