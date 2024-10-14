import {
  DefinitionOrderByRelevanceInputSchema
} from "./chunk-V4Y543WR.js";
import {
  MdxNoteOrderByWithRelationInputSchema
} from "./chunk-6CNBKVCR.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-H6XJHUHH.js.map