import {
  FeatureRequestOrderByRelevanceInputSchema
} from "./chunk-ES5BVE2C.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema.ts
import { z } from "zod";
var FeatureRequestOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  userBase: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => FeatureRequestOrderByRelevanceInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithRelationInputSchema_default = FeatureRequestOrderByWithRelationInputSchema;

export {
  FeatureRequestOrderByWithRelationInputSchema,
  FeatureRequestOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-LQ5LKVMZ.js.map