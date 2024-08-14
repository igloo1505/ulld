import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibArgsSchema } from "../outputTypeSchemas/BibArgsSchema"
import { CitationsGroupFindManyArgsSchema } from "../outputTypeSchemas/CitationsGroupFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { ReadingListFindManyArgsSchema } from "../outputTypeSchemas/ReadingListFindManyArgsSchema"
import { BibEntryCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibEntryCountOutputTypeArgsSchema"

export const BibEntryIncludeSchema: z.ZodType<Prisma.BibEntryInclude> = z.object({
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

export default BibEntryIncludeSchema;
