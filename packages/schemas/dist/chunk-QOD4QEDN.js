import {
  NoteTypeOrderByRelevanceInputSchema
} from "./chunk-B4TP6FCF.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-QOD4QEDN.js.map