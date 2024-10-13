import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibEntryCreateManyInputSchema.js
export const BibEntryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BibEntryCreateManyAndReturnArgs> = z.object({
  data: z.union([ BibEntryCreateManyInputSchema,BibEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BibEntryCreateManyAndReturnArgsSchema;