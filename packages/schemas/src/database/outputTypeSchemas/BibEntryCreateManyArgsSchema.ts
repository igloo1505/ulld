import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibEntryCreateManyInputSchema.js
export const BibEntryCreateManyArgsSchema: z.ZodType<Prisma.BibEntryCreateManyArgs> = z.object({
  data: z.union([ BibEntryCreateManyInputSchema,BibEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BibEntryCreateManyArgsSchema;