import {
  FeatureRequestOrderByRelevanceFieldEnumSchema
} from "./chunk-6CWMXDUN.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestOrderByRelevanceInputSchema.ts
import { z } from "zod";
var FeatureRequestOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema), z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var FeatureRequestOrderByRelevanceInputSchema_default = FeatureRequestOrderByRelevanceInputSchema;

export {
  FeatureRequestOrderByRelevanceInputSchema,
  FeatureRequestOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-ES5BVE2C.js.map