import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema'
import { BibUpdateInputSchema } from '../inputTypeSchemas/BibUpdateInputSchema'
import { BibUncheckedUpdateInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateInputSchema'
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema'
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { BibCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BibSelectSchema: z.ZodType<Prisma.BibSelect> = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BibCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BibUpdateArgsSchema: z.ZodType<Prisma.BibUpdateArgs> = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  data: z.union([ BibUpdateInputSchema,BibUncheckedUpdateInputSchema ]),
  where: BibWhereUniqueInputSchema,
}).strict() ;

export default BibUpdateArgsSchema;
