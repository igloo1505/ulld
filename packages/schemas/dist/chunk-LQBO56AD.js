import {
  WaitlistRequestOrderByRelevanceFieldEnumSchema
} from "./chunk-QDGOPKB3.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestOrderByRelevanceInputSchema.ts
import { z } from "zod";
var WaitlistRequestOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema), z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema;

export {
  WaitlistRequestOrderByRelevanceInputSchema,
  WaitlistRequestOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-LQBO56AD.js.map