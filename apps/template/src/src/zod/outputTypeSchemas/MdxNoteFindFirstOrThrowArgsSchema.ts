import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteIncludeSchema } from '../inputTypeSchemas/MdxNoteIncludeSchema'
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema'
import { MdxNoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema'
import { MdxNoteWhereUniqueInputSchema } from '../inputTypeSchemas/MdxNoteWhereUniqueInputSchema'
import { MdxNoteScalarFieldEnumSchema } from '../inputTypeSchemas/MdxNoteScalarFieldEnumSchema'
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { SequentialNoteListArgsSchema } from "../outputTypeSchemas/SequentialNoteListArgsSchema"
import { ReadingListFindManyArgsSchema } from "../outputTypeSchemas/ReadingListFindManyArgsSchema"
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { DefinitionFindManyArgsSchema } from "../outputTypeSchemas/DefinitionFindManyArgsSchema"
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { MdxNoteCountOutputTypeArgsSchema } from "../outputTypeSchemas/MdxNoteCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MdxNoteSelectSchema: z.ZodType<Prisma.MdxNoteSelect> = z.object({
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
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  citations: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: z.union([z.boolean(),z.lazy(() => SequentialNoteListArgsSchema)]).optional(),
  ReadingList: z.union([z.boolean(),z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  definitions: z.union([z.boolean(),z.lazy(() => DefinitionFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MdxNoteCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MdxNoteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MdxNoteFindFirstOrThrowArgs> = z.object({
  select: MdxNoteSelectSchema.optional(),
  include: MdxNoteIncludeSchema.optional(),
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithRelationInputSchema.array(),MdxNoteOrderByWithRelationInputSchema ]).optional(),
  cursor: MdxNoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MdxNoteScalarFieldEnumSchema,MdxNoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MdxNoteFindFirstOrThrowArgsSchema;
