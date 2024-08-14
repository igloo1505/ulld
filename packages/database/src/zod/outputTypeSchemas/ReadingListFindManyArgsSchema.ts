import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema'
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema'
import { ReadingListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReadingListOrderByWithRelationInputSchema'
import { ReadingListWhereUniqueInputSchema } from '../inputTypeSchemas/ReadingListWhereUniqueInputSchema'
import { ReadingListScalarFieldEnumSchema } from '../inputTypeSchemas/ReadingListScalarFieldEnumSchema'
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

export const ReadingListFindManyArgsSchema: z.ZodType<Prisma.ReadingListFindManyArgs> = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithRelationInputSchema.array(),ReadingListOrderByWithRelationInputSchema ]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReadingListScalarFieldEnumSchema,ReadingListScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ReadingListFindManyArgsSchema;
