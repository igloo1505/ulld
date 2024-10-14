import {
  ToDoOrderByRelevanceFieldEnumSchema
} from "./chunk-MEVAFWQ5.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoOrderByRelevanceInputSchema.ts
import { z } from "zod";
var ToDoOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema), z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var ToDoOrderByRelevanceInputSchema_default = ToDoOrderByRelevanceInputSchema;

export {
  ToDoOrderByRelevanceInputSchema,
  ToDoOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-6JV35KBD.js.map