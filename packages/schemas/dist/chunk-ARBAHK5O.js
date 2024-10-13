import {
  FeatureRequestOrderByRelevanceInputSchema
} from "./chunk-GPQJTEFU.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-ARBAHK5O.js.map