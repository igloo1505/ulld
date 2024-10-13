import {
  KanbanOrderByRelevanceFieldEnumSchema
} from "./chunk-AGBC36WG.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-XRI7RCEB.js.map