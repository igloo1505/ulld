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
  MdxNoteWhereUniqueInputSchema
} from "./chunk-DG2EOAUQ.js";
import {
  MdxNoteOrderByWithRelationInputSchema
} from "./chunk-5DT76EW6.js";
import {
  MdxNoteCountOutputTypeArgsSchema
} from "./chunk-OKWFNL75.js";
import {
  MdxNoteScalarFieldEnumSchema
} from "./chunk-Z47AH73G.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/MdxNoteFindFirstOrThrowArgsSchema.ts
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
var MdxNoteFindFirstOrThrowArgsSchema = z.object({
  select: MdxNoteSelectSchema.optional(),
  include: MdxNoteIncludeSchema.optional(),
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([MdxNoteOrderByWithRelationInputSchema.array(), MdxNoteOrderByWithRelationInputSchema]).optional(),
  cursor: MdxNoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MdxNoteScalarFieldEnumSchema, MdxNoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var MdxNoteFindFirstOrThrowArgsSchema_default = MdxNoteFindFirstOrThrowArgsSchema;

export {
  MdxNoteSelectSchema,
  MdxNoteFindFirstOrThrowArgsSchema,
  MdxNoteFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-ICSUY2HP.js.map