// src/database/inputTypeSchemas/FeatureRequestSelectSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestSelectSchema_default = FeatureRequestSelectSchema;
export {
  FeatureRequestSelectSchema,
  FeatureRequestSelectSchema_default as default
};
//# sourceMappingURL=FeatureRequestSelectSchema.js.map