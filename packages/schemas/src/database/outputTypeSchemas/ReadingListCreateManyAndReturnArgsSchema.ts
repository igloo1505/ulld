import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListCreateManyInputSchema.js
export const ReadingListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReadingListCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReadingListCreateManyInputSchema,ReadingListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ReadingListCreateManyAndReturnArgsSchema;