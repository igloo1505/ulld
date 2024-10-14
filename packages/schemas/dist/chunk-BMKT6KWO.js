import {
  FeatureRequestCreatecategoryInputSchema
} from "./chunk-RTE36G3H.js";
import {
  FeatureRequestCreateuserBaseInputSchema
} from "./chunk-YD4DWKTK.js";

// src/database/inputTypeSchemas/FeatureRequestCreateManyInputSchema.ts
import { z } from "zod";
var FeatureRequestCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  message: z.string(),
  category: z.union([z.lazy(() => FeatureRequestCreatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestCreateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();
var FeatureRequestCreateManyInputSchema_default = FeatureRequestCreateManyInputSchema;

export {
  FeatureRequestCreateManyInputSchema,
  FeatureRequestCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-BMKT6KWO.js.map