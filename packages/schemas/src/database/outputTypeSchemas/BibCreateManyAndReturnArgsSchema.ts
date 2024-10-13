import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibCreateManyInputSchema.js
export const BibCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BibCreateManyAndReturnArgs> = z.object({
  data: z.union([ BibCreateManyInputSchema,BibCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BibCreateManyAndReturnArgsSchema;