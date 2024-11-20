import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReadingListUpdateManyMutationInputSchema'
import { ReadingListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReadingListUncheckedUpdateManyInputSchema'
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema'

export const ReadingListUpdateManyArgsSchema: z.ZodType<Prisma.ReadingListUpdateManyArgs> = z.object({
  data: z.union([ ReadingListUpdateManyMutationInputSchema,ReadingListUncheckedUpdateManyInputSchema ]),
  where: ReadingListWhereInputSchema.optional(),
}).strict() ;

export default ReadingListUpdateManyArgsSchema;
