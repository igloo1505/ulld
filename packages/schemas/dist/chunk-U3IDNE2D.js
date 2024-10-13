import {
  MdxNoteCreateInputSchema
} from "./chunk-QKUK44IA.js";
import {
  MdxNoteUncheckedCreateInputSchema
} from "./chunk-Z6WU64TE.js";
import {
  BibEntryFindManyArgsSchema,
  DefinitionFindManyArgsSchema,
  EquationFindManyArgsSchema,
  MdxNoteIncludeSchema,
  ReadingListFindManyArgsSchema,
  SequentialNoteListArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  ToDoFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  MdxNoteCountOutputTypeArgsSchema
} from "./chunk-OKWFNL75.js";

// src/database/outputTypeSchemas/MdxNoteCreateArgsSchema.ts
import { z } from "zod";
var MdxNoteSelectSchema = z.object({
  id: z.boolean().optional(),
  isProtected: z.boolean().optional(),
  dietSummaryKey: z.boolean().optional(),
  title: z.boolean().optional(),
  latexTitle: z.boolean().optional(),
  rootRelativePath: z.boolean().optional(),
  noteType: z.boolean().optional(),
  content: z.boolean().optional(),
  formatted: z.boolean().optional(),
  summary: z.boolean().optional(),
  citationsListOrder: z.boolean().optional(),
  importantValues: z.boolean().optional(),
  imageSrc: z.boolean().optional(),
  href: z.boolean().optional(),
  sequentialKey: z.boolean().optional(),
  sequentialIndex: z.boolean().optional(),
  floatImages: z.boolean().optional(),
  remoteUrl: z.boolean().optional(),
  trackRemote: z.boolean().optional(),
  outgoingQuickLinks: z.boolean().optional(),
  quickLink: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  citations: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: z.union([z.boolean(), z.lazy(() => SequentialNoteListArgsSchema)]).optional(),
  ReadingList: z.union([z.boolean(), z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  definitions: z.union([z.boolean(), z.lazy(() => DefinitionFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MdxNoteCountOutputTypeArgsSchema)]).optional()
}).strict();
var MdxNoteCreateArgsSchema = z.object({
  select: MdxNoteSelectSchema.optional(),
  include: MdxNoteIncludeSchema.optional(),
  data: z.union([MdxNoteCreateInputSchema, MdxNoteUncheckedCreateInputSchema])
}).strict();
var MdxNoteCreateArgsSchema_default = MdxNoteCreateArgsSchema;

export {
  MdxNoteSelectSchema,
  MdxNoteCreateArgsSchema,
  MdxNoteCreateArgsSchema_default
};
//# sourceMappingURL=chunk-U3IDNE2D.js.map