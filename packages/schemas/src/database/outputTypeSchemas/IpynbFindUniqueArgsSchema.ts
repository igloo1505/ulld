import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbIncludeSchema } from '../inputTypeSchemas/IpynbIncludeSchema.js'
import { IpynbWhereUniqueInputSchema } from '../inputTypeSchemas/IpynbWhereUniqueInputSchema.js'
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { SequentialNoteListArgsSchema } from "../outputTypeSchemas/SequentialNoteListArgsSchema"
import { ReadingListFindManyArgsSchema } from "../outputTypeSchemas/ReadingListFindManyArgsSchema"
import { IpynbCountOutputTypeArgsSchema } from "../outputTypeSchemas/IpynbCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const IpynbSelectSchema: z.ZodType<Prisma.IpynbSelect> = z.object({
  id: z.boolean().optional(),
  rootRelativePath: z.boolean().optional(),
  isProtected: z.boolean().optional(),
  title: z.boolean().optional(),
  latexTitle: z.boolean().optional(),
  citationsListOrder: z.boolean().optional(),
  importantValues: z.boolean().optional(),
  href: z.boolean().optional(),
  outgoingQuickLinks: z.boolean().optional(),
  raw: z.boolean().optional(),
  sequentialKey: z.boolean().optional(),
  sequentialIndex: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  citations: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: z.union([z.boolean(),z.lazy(() => SequentialNoteListArgsSchema)]).optional(),
  readingList: z.union([z.boolean(),z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IpynbCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const IpynbFindUniqueArgsSchema: z.ZodType<Prisma.IpynbFindUniqueArgs> = z.object({
  select: IpynbSelectSchema.optional(),
  include: IpynbIncludeSchema.optional(),
  where: IpynbWhereUniqueInputSchema,
}).strict() ;
export default IpynbFindUniqueArgsSchema;