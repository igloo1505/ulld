import {
  FeatureRequestCreatecategoryInputSchema
} from "./chunk-RTE36G3H.js";
import {
  FeatureRequestCreateuserBaseInputSchema
} from "./chunk-YD4DWKTK.js";

// src/database/inputTypeSchemas/FeatureRequestUncheckedCreateInputSchema.ts
import { z } from "zod";
var FeatureRequestUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  message: z.string(),
  category: z.union([z.lazy(() => FeatureRequestCreatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestCreateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();
var FeatureRequestUncheckedCreateInputSchema_default = FeatureRequestUncheckedCreateInputSchema;

export {
  FeatureRequestUncheckedCreateInputSchema,
  FeatureRequestUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-AQ7EKWED.js.map