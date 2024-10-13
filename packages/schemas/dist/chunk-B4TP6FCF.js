import {
  NoteTypeOrderByRelevanceFieldEnumSchema
} from "./chunk-BMKO4JMC.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-B4TP6FCF.js.map