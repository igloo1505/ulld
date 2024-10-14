import {
  TagOrderByRelevanceFieldEnumSchema
} from "./chunk-5TYBK7BO.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TagOrderByRelevanceInputSchema.ts
import { z } from "zod";
var TagOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => TagOrderByRelevanceFieldEnumSchema), z.lazy(() => TagOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var TagOrderByRelevanceInputSchema_default = TagOrderByRelevanceInputSchema;

export {
  TagOrderByRelevanceInputSchema,
  TagOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-IRHVJU3N.js.map