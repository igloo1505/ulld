import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema'
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema'
import { CitationsGroupCreateInputSchema } from '../inputTypeSchemas/CitationsGroupCreateInputSchema'
import { CitationsGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedCreateInputSchema'
import { CitationsGroupUpdateInputSchema } from '../inputTypeSchemas/CitationsGroupUpdateInputSchema'
import { CitationsGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedUpdateInputSchema'
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { CitationsGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/CitationsGroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CitationsGroupSelectSchema: z.ZodType<Prisma.CitationsGroupSelect> = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CitationsGroupUpsertArgsSchema: z.ZodType<Prisma.CitationsGroupUpsertArgs> = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereUniqueInputSchema,
  create: z.union([ CitationsGroupCreateInputSchema,CitationsGroupUncheckedCreateInputSchema ]),
  update: z.union([ CitationsGroupUpdateInputSchema,CitationsGroupUncheckedUpdateInputSchema ]),
}).strict() ;

export default CitationsGroupUpsertArgsSchema;
