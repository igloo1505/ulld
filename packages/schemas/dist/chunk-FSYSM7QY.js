import {
  MdxNoteOrderByRelevanceFieldEnumSchema
} from "./chunk-H723N2U4.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/MdxNoteOrderByRelevanceInputSchema.ts
import { z } from "zod";
var MdxNoteOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema), z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var MdxNoteOrderByRelevanceInputSchema_default = MdxNoteOrderByRelevanceInputSchema;

export {
  MdxNoteOrderByRelevanceInputSchema,
  MdxNoteOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-FSYSM7QY.js.map