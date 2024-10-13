import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibIncludeSchema.js
..//inputTypeSchemas/BibCreateInputSchema.js
..//inputTypeSchemas/BibUncheckedCreateInputSchema.js
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
export const BibCreateArgsSchema: z.ZodType<Prisma.BibCreateArgs> = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  data: z.union([ BibCreateInputSchema,BibUncheckedCreateInputSchema ]),
}).strict() ;
export default BibCreateArgsSchema;