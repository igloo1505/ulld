import {
  DefinitionOrderByRelationAggregateInputSchema
} from "./chunk-ZNCRCXZB.js";
import {
  MdxNoteOrderByRelevanceInputSchema
} from "./chunk-FSYSM7QY.js";
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
  EquationOrderByRelationAggregateInputSchema
} from "./chunk-WXWOJNDL.js";
import {
  ToDoOrderByRelationAggregateInputSchema
} from "./chunk-XOVIZHUQ.js";
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

// src/database/inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema.ts
import { z } from "zod";
var MdxNoteOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietSummaryKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  sequentialIndex: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  citations: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListOrderByWithRelationInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  definitions: z.lazy(() => DefinitionOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => MdxNoteOrderByRelevanceInputSchema).optional()
}).strict();
var MdxNoteOrderByWithRelationInputSchema_default = MdxNoteOrderByWithRelationInputSchema;

export {
  MdxNoteOrderByWithRelationInputSchema,
  MdxNoteOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-5DT76EW6.js.map