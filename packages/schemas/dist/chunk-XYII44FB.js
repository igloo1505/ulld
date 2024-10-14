import {
  ReadingListOrderByRelevanceInputSchema
} from "./chunk-MZSZGCUA.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-DD4B26NX.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-XY5DOPOB.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-FEI37AUG.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ReadingListOrderByWithRelationInputSchema.ts
import { z } from "zod";
var ReadingListOrderByWithRelationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => ReadingListOrderByRelevanceInputSchema).optional()
}).strict();
var ReadingListOrderByWithRelationInputSchema_default = ReadingListOrderByWithRelationInputSchema;

export {
  ReadingListOrderByWithRelationInputSchema,
  ReadingListOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-XYII44FB.js.map