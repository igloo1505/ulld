import {
  FeatureRequestCreatecategoryInputSchema
} from "./chunk-LUJVAMFB.js";
import {
  FeatureRequestCreateuserBaseInputSchema
} from "./chunk-GQKTSL2C.js";

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
//# sourceMappingURL=chunk-T2VT4DXN.js.map