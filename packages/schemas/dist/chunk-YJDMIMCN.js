import {
  ToDoListOrderByRelevanceFieldEnumSchema
} from "./chunk-AMP4CRIA.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-YJDMIMCN.js.map