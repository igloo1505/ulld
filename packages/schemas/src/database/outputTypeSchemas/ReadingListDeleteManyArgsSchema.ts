import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema.js'
export const ReadingListDeleteManyArgsSchema: z.ZodType<Prisma.ReadingListDeleteManyArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
}).strict() ;
export default ReadingListDeleteManyArgsSchema;