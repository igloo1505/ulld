import {
  TopicOrderByRelevanceFieldEnumSchema
} from "./chunk-FED4MTPO.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TopicOrderByRelevanceInputSchema.ts
import { z } from "zod";
var TopicOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => TopicOrderByRelevanceFieldEnumSchema), z.lazy(() => TopicOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var TopicOrderByRelevanceInputSchema_default = TopicOrderByRelevanceInputSchema;

export {
  TopicOrderByRelevanceInputSchema,
  TopicOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-P6WSNMWA.js.map