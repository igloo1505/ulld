import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryIncludeSchema } from '../inputTypeSchemas/BibEntryIncludeSchema'
import { BibEntryWhereUniqueInputSchema } from '../inputTypeSchemas/BibEntryWhereUniqueInputSchema'
import { BibArgsSchema } from "../outputTypeSchemas/BibArgsSchema"
import { CitationsGroupFindManyArgsSchema } from "../outputTypeSchemas/CitationsGroupFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { ReadingListFindManyArgsSchema } from "../outputTypeSchemas/ReadingListFindManyArgsSchema"
import { BibEntryCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibEntryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BibEntrySelectSchema: z.ZodType<Prisma.BibEntrySelect> = z.object({
  id: z.boolean().optional(),
  BibId: z.boolean().optional(),
  OwnWork: z.boolean().optional(),
  ColleaguesWork: z.boolean().optional(),
  read: z.boolean().optional(),
  htmlCitation: z.boolean().optional(),
  PdfPath: z.boolean().optional(),
  address: z.boolean().optional(),
  annote: z.boolean().optional(),
  author: z.boolean().optional(),
  booktitle: z.boolean().optional(),
  chapter: z.boolean().optional(),
  crossref: z.boolean().optional(),
  doi: z.boolean().optional(),
  edition: z.boolean().optional(),
  editor: z.boolean().optional(),
  email: z.boolean().optional(),
  howpublished: z.boolean().optional(),
  institution: z.boolean().optional(),
  journal: z.boolean().optional(),
  month: z.boolean().optional(),
  note: z.boolean().optional(),
  number: z.boolean().optional(),
  organization: z.boolean().optional(),
  pages: z.boolean().optional(),
  publisher: z.boolean().optional(),
  school: z.boolean().optional(),
  series: z.boolean().optional(),
  title: z.boolean().optional(),
  volume: z.boolean().optional(),
  type: z.boolean().optional(),
  year: z.boolean().optional(),
  numpages: z.boolean().optional(),
  url: z.boolean().optional(),
  issue: z.boolean().optional(),
  issn: z.boolean().optional(),
  abstract: z.boolean().optional(),
  urldate: z.boolean().optional(),
  keywords: z.boolean().optional(),
  copyright: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  Bib: z.union([z.boolean(),z.lazy(() => BibArgsSchema)]).optional(),
  citationGroups: z.union([z.boolean(),z.lazy(() => CitationsGroupFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  MdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  readingList: z.union([z.boolean(),z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BibEntryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BibEntryFindUniqueArgsSchema: z.ZodType<Prisma.BibEntryFindUniqueArgs> = z.object({
  select: BibEntrySelectSchema.optional(),
  include: BibEntryIncludeSchema.optional(),
  where: BibEntryWhereUniqueInputSchema,
}).strict() ;

export default BibEntryFindUniqueArgsSchema;
