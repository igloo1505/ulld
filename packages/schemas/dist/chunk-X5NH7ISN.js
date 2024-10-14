import {
  NoteTypeOrderByRelevanceFieldEnumSchema
} from "./chunk-CCAV3APO.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/NoteTypeOrderByRelevanceInputSchema.ts
import { z } from "zod";
var NoteTypeOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema), z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var NoteTypeOrderByRelevanceInputSchema_default = NoteTypeOrderByRelevanceInputSchema;

export {
  NoteTypeOrderByRelevanceInputSchema,
  NoteTypeOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-X5NH7ISN.js.map