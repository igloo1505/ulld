import {
  BibOrderByRelevanceInputSchema
} from "./chunk-HH3EE6Y5.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-RPMQH5VP.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/BibOrderByWithRelationInputSchema.ts
import { z } from "zod";
var BibOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  entries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => BibOrderByRelevanceInputSchema).optional()
}).strict();
var BibOrderByWithRelationInputSchema_default = BibOrderByWithRelationInputSchema;

export {
  BibOrderByWithRelationInputSchema,
  BibOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-JBWO2EJO.js.map