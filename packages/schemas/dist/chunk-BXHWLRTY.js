import {
  SequentialNoteListOrderByRelevanceFieldEnumSchema
} from "./chunk-5QVEHY36.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-BXHWLRTY.js.map