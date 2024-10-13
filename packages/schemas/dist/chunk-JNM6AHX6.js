import {
  BusinessContactOrderByRelevanceFieldEnumSchema
} from "./chunk-YOJ7IGWI.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/BusinessContactOrderByRelevanceInputSchema.ts
import { z } from "zod";
var BusinessContactOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema), z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema;

export {
  BusinessContactOrderByRelevanceInputSchema,
  BusinessContactOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-JNM6AHX6.js.map