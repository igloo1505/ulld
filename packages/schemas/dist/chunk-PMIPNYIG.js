import {
  MdxNoteOrderByRelevanceFieldEnumSchema
} from "./chunk-N4M6NZMI.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-PMIPNYIG.js.map