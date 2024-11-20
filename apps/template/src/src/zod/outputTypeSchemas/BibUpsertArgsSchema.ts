import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema'
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema'
import { BibCreateInputSchema } from '../inputTypeSchemas/BibCreateInputSchema'
import { BibUncheckedCreateInputSchema } from '../inputTypeSchemas/BibUncheckedCreateInputSchema'
import { BibUpdateInputSchema } from '../inputTypeSchemas/BibUpdateInputSchema'
import { BibUncheckedUpdateInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateInputSchema'
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

export const BibUpsertArgsSchema: z.ZodType<Prisma.BibUpsertArgs> = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereUniqueInputSchema,
  create: z.union([ BibCreateInputSchema,BibUncheckedCreateInputSchema ]),
  update: z.union([ BibUpdateInputSchema,BibUncheckedUpdateInputSchema ]),
}).strict() ;

export default BibUpsertArgsSchema;
