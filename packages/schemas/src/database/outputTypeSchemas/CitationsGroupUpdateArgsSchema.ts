import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema'
import { CitationsGroupUpdateInputSchema } from '../inputTypeSchemas/CitationsGroupUpdateInputSchema'
import { CitationsGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedUpdateInputSchema'
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema'
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

export const CitationsGroupUpdateArgsSchema: z.ZodType<Prisma.CitationsGroupUpdateArgs> = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  data: z.union([ CitationsGroupUpdateInputSchema,CitationsGroupUncheckedUpdateInputSchema ]),
  where: CitationsGroupWhereUniqueInputSchema,
}).strict() ;

export default CitationsGroupUpdateArgsSchema;
