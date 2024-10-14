import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbIncludeSchema } from '../inputTypeSchemas/IpynbIncludeSchema'
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema'
import { IpynbOrderByWithRelationInputSchema } from '../inputTypeSchemas/IpynbOrderByWithRelationInputSchema'
import { IpynbWhereUniqueInputSchema } from '../inputTypeSchemas/IpynbWhereUniqueInputSchema'
import { IpynbScalarFieldEnumSchema } from '../inputTypeSchemas/IpynbScalarFieldEnumSchema'
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

export const IpynbFindFirstArgsSchema: z.ZodType<Prisma.IpynbFindFirstArgs> = z.object({
  select: IpynbSelectSchema.optional(),
  include: IpynbIncludeSchema.optional(),
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithRelationInputSchema.array(),IpynbOrderByWithRelationInputSchema ]).optional(),
  cursor: IpynbWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IpynbScalarFieldEnumSchema,IpynbScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default IpynbFindFirstArgsSchema;
