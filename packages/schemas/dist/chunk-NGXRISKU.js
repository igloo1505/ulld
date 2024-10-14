import {
  ToDoListOrderByRelevanceFieldEnumSchema
} from "./chunk-UHL7AF2T.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoListOrderByRelevanceInputSchema.ts
import { z } from "zod";
var ToDoListOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema), z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var ToDoListOrderByRelevanceInputSchema_default = ToDoListOrderByRelevanceInputSchema;

export {
  ToDoListOrderByRelevanceInputSchema,
  ToDoListOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-NGXRISKU.js.map