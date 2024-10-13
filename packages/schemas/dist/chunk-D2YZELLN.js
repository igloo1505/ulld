import {
  TagOrderByRelevanceFieldEnumSchema
} from "./chunk-4JV5SFTY.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-D2YZELLN.js.map