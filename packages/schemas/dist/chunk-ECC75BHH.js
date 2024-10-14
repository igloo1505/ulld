import {
  BibOrderByRelevanceInputSchema
} from "./chunk-BVOQPGJM.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-DD4B26NX.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-ECC75BHH.js.map