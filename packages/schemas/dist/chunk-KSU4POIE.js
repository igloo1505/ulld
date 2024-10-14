import {
  FeatureRequestCreatecategoryInputSchema
} from "./chunk-RTE36G3H.js";
import {
  FeatureRequestCreateuserBaseInputSchema
} from "./chunk-YD4DWKTK.js";

// src/database/inputTypeSchemas/FeatureRequestCreateInputSchema.ts
import { z } from "zod";
var FeatureRequestCreateInputSchema = z.object({
  email: z.string(),
  message: z.string(),
  category: z.union([z.lazy(() => FeatureRequestCreatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestCreateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();
var FeatureRequestCreateInputSchema_default = FeatureRequestCreateInputSchema;

export {
  FeatureRequestCreateInputSchema,
  FeatureRequestCreateInputSchema_default
};
//# sourceMappingURL=chunk-KSU4POIE.js.map