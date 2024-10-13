import {
  IpynbOrderByRelevanceInputSchema
} from "./chunk-3CLZ3AG6.js";
import {
  ReadingListOrderByRelationAggregateInputSchema
} from "./chunk-EWFV5PL4.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-GN7YBMGK.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-RPMQH5VP.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-UXCYAB7S.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-KN2IVSLJ.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-3PH77TSO.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/IpynbOrderByWithRelationInputSchema.ts
import { z } from "zod";
var IpynbOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  raw: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  sequentialIndex: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  citations: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListOrderByWithRelationInputSchema).optional(),
  readingList: z.lazy(() => ReadingListOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => IpynbOrderByRelevanceInputSchema).optional()
}).strict();
var IpynbOrderByWithRelationInputSchema_default = IpynbOrderByWithRelationInputSchema;

export {
  IpynbOrderByWithRelationInputSchema,
  IpynbOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-YHWJD5C7.js.map