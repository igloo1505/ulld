import {
  NoteTypeOrderByRelevanceInputSchema
} from "./chunk-X5NH7ISN.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema.ts
import { z } from "zod";
var NoteTypeOrderByWithRelationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => NoteTypeOrderByRelevanceInputSchema).optional()
}).strict();
var NoteTypeOrderByWithRelationInputSchema_default = NoteTypeOrderByWithRelationInputSchema;

export {
  NoteTypeOrderByWithRelationInputSchema,
  NoteTypeOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-UBYVQS7W.js.map