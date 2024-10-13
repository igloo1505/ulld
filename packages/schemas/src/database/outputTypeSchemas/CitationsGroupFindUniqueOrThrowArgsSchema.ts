import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/CitationsGroupIncludeSchema.js
..//inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.js
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
export const CitationsGroupFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CitationsGroupFindUniqueOrThrowArgs> = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereUniqueInputSchema,
}).strict() ;
export default CitationsGroupFindUniqueOrThrowArgsSchema;