import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema'
import { CitationsGroupCreateInputSchema } from '../inputTypeSchemas/CitationsGroupCreateInputSchema'
import { CitationsGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedCreateInputSchema'
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

export const CitationsGroupCreateArgsSchema: z.ZodType<Prisma.CitationsGroupCreateArgs> = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  data: z.union([ CitationsGroupCreateInputSchema,CitationsGroupUncheckedCreateInputSchema ]),
}).strict() ;

export default CitationsGroupCreateArgsSchema;
