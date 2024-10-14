import {
  IpynbOrderByRelevanceInputSchema
} from "./chunk-DY7K4H5E.js";
import {
  ReadingListOrderByRelationAggregateInputSchema
} from "./chunk-RFWHT4GW.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-PMLTVZ4P.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-DD4B26NX.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-TYDF4OCO.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-YD6HBAOC.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-GGRFX4OU.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-Y6EMIHNR.js.map