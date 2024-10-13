import {
  ReadingListOrderByRelevanceInputSchema
} from "./chunk-PMWESOKY.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-RPMQH5VP.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-NBLKUX7F.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-MWECYKIW.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-5OWQCS6Y.js.map