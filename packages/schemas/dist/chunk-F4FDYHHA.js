import {
  SequentialNoteListOrderByRelevanceFieldEnumSchema
} from "./chunk-RJHEK465.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SequentialNoteListOrderByRelevanceInputSchema.ts
import { z } from "zod";
var SequentialNoteListOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema), z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var SequentialNoteListOrderByRelevanceInputSchema_default = SequentialNoteListOrderByRelevanceInputSchema;

export {
  SequentialNoteListOrderByRelevanceInputSchema,
  SequentialNoteListOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-F4FDYHHA.js.map