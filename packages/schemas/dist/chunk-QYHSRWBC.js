import {
  TopicOrderByRelevanceFieldEnumSchema
} from "./chunk-2VXVH5ND.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-QYHSRWBC.js.map