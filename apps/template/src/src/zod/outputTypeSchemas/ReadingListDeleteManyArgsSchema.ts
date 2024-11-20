import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema'

export const ReadingListDeleteManyArgsSchema: z.ZodType<Prisma.ReadingListDeleteManyArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
}).strict() ;

export default ReadingListDeleteManyArgsSchema;
