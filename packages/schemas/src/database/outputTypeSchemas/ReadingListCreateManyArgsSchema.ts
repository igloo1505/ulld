import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListCreateManyInputSchema } from '../inputTypeSchemas/ReadingListCreateManyInputSchema'

export const ReadingListCreateManyArgsSchema: z.ZodType<Prisma.ReadingListCreateManyArgs> = z.object({
  data: z.union([ ReadingListCreateManyInputSchema,ReadingListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReadingListCreateManyArgsSchema;
