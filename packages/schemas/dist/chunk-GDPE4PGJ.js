import {
  KanbanOrderByRelevanceFieldEnumSchema
} from "./chunk-YKVMUT23.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanbanOrderByRelevanceInputSchema.ts
import { z } from "zod";
var KanbanOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema), z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var KanbanOrderByRelevanceInputSchema_default = KanbanOrderByRelevanceInputSchema;

export {
  KanbanOrderByRelevanceInputSchema,
  KanbanOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-GDPE4PGJ.js.map