import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ReadingListCreateManyInputSchema } from '../inputTypeSchemas/ReadingListCreateManyInputSchema.js'
export const ReadingListCreateManyArgsSchema: z.ZodType<Prisma.ReadingListCreateManyArgs> = z.object({
  data: z.union([ ReadingListCreateManyInputSchema,ReadingListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ReadingListCreateManyArgsSchema;