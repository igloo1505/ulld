import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibCreateManyInputSchema.js
export const BibCreateManyArgsSchema: z.ZodType<Prisma.BibCreateManyArgs> = z.object({
  data: z.union([ BibCreateManyInputSchema,BibCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BibCreateManyArgsSchema;