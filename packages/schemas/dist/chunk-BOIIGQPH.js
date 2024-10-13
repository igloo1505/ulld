import {
  DefinitionOrderByRelevanceInputSchema
} from "./chunk-4IWXCYAY.js";
import {
  MdxNoteOrderByWithRelationInputSchema
} from "./chunk-5DT76EW6.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.ts
import { z } from "zod";
var DefinitionOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  alphabeticalLabel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  mdxNoteId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  mdxNote: z.lazy(() => MdxNoteOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DefinitionOrderByRelevanceInputSchema).optional()
}).strict();
var DefinitionOrderByWithRelationInputSchema_default = DefinitionOrderByWithRelationInputSchema;

export {
  DefinitionOrderByWithRelationInputSchema,
  DefinitionOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-BOIIGQPH.js.map