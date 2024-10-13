import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListIncludeSchema.js
..//inputTypeSchemas/ReadingListWhereUniqueInputSchema.js
..//inputTypeSchemas/ReadingListCreateInputSchema.js
..//inputTypeSchemas/ReadingListUncheckedCreateInputSchema.js
..//inputTypeSchemas/ReadingListUpdateInputSchema.js
..//inputTypeSchemas/ReadingListUncheckedUpdateInputSchema.js
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { ReadingListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReadingListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ReadingListSelectSchema: z.ZodType<Prisma.ReadingListSelect> = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  bibEntries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReadingListCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const ReadingListUpsertArgsSchema: z.ZodType<Prisma.ReadingListUpsertArgs> = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereUniqueInputSchema,
  create: z.union([ ReadingListCreateInputSchema,ReadingListUncheckedCreateInputSchema ]),
  update: z.union([ ReadingListUpdateInputSchema,ReadingListUncheckedUpdateInputSchema ]),
}).strict() ;
export default ReadingListUpsertArgsSchema;